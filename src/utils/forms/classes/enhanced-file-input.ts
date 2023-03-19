// Util
import merge from "../util/merge";

interface EnhancedFileInputConfigParam {
  onChange?: (container: HTMLElement, instance: InputMapObject) => void;
  onClear?: (container: HTMLElement, instance: InputMapObject) => void;
  onUpload?: (container: HTMLElement, instance: InputMapObject) => void;
  classes?: {
    hasFile?: string;
    dragOver?: string;
  };
}
interface EnhancedFileInputConfig extends EnhancedFileInputConfigParam {
  classes: {
    hasFile: string;
    dragOver: string;
  };
}
interface InputMapObject {
  input: HTMLInputElement;
  clearButton?: HTMLElement;
  hasFile: boolean;
  dragOver: boolean;
}

const attributes = {
  input: "data-ei-input",
  clear: "data-ei-clear",
};

export default class EnhancedFileInput {
  config: EnhancedFileInputConfig;
  inputMap: WeakMap<HTMLElement, InputMapObject> = new WeakMap();
  constructor(selector: string, config?: EnhancedFileInputConfigParam) {
    this.config = merge(
      {
        classes: {
          hasFile: "has-file",
          dragOver: "drag-over",
        },
      },
      config || {}
    ) as EnhancedFileInputConfig;

    // get all containers
    const containers = document.querySelectorAll(
      selector
    ) as NodeListOf<HTMLElement>;
    if (!containers) return;

    // Initialise the enhanced file input
    containers.forEach((container) => {
      const input = container.querySelector(
        `[${attributes.input}]`
      ) as HTMLInputElement;
      if (!input) {
        console.warn(
          "EnhancedFileInput: No input with attribute 'data-ei-input' found in parent element."
        );
        return;
      }
      if (this.inputMap.has(input)) return;

      this.inputMap.set(container, {
        input: input,
        clearButton: container.querySelector(
          `[${attributes.clear}]`
        ) as HTMLElement,
        hasFile: false,
        dragOver: false,
      });
      this.#registerEvents(container);
    });
  }
  // ------------- Private Methods -------------
  #registerEvents(container: HTMLElement) {
    // get the input from the map
    const instance = this.inputMap.get(container);
    if (!instance) return;
    // click on input, open file modal
    container.addEventListener("click", (e: Event) => {
      if (e.target === instance.input) return;
      if (e.target === instance.clearButton) return;
      instance.input.click();
    });
    // on input change
    instance.input.addEventListener("change", () => {
      if (instance.input.files?.length) {
        instance.hasFile = true;
        if (this.config.onUpload) this.config.onUpload(container, instance);
      } else {
        instance.hasFile = false;
        instance.input.value = "";
        if (this.config.onClear) this.config.onClear(container, instance);
      }
      this.#onChange(container, instance);
    });
    // drag and drop files
    container.addEventListener("dragover", (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      instance.dragOver = true;
      this.#onChange(container, instance);
    });
    container.addEventListener("dragleave", (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      instance.dragOver = false;
      this.#onChange(container, instance);
    });
    container.addEventListener("drop", (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      instance.dragOver = false;
      this.#onChange(container, instance);
      // Set files
      if (e.dataTransfer?.files?.length) {
        // check if the file supports multiple files
        if (instance.input.multiple) {
          instance.input.files = e.dataTransfer.files;
        } else {
          const dt = new DataTransfer();
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            const file = e.dataTransfer.files[i];
            if (i === 0) dt.items.add(file);
            break;
          }
          instance.input.files = dt.files;
        }

        instance.hasFile = true;
        this.#onChange(container, instance);
      }
      // trigger change event
      instance.input.dispatchEvent(new Event("change"));
    });
    // input clear button
    if (instance.clearButton) {
      instance.clearButton.addEventListener("click", () => {
        instance.input.value = "";
        instance.hasFile = false;
        this.#onChange(container, instance);
        // trigger change event
        instance.input.dispatchEvent(new Event("change"));
      });
    }
  }
  #onChange(container: HTMLElement, instance: InputMapObject) {
    if (this.config.onChange) this.config.onChange(container, instance);
    this.#setClasses(container, instance);
  }
  #setClasses(container: HTMLElement, instance: InputMapObject) {
    // reset all classes
    container.classList.remove(this.config.classes.hasFile);
    container.classList.remove(this.config.classes.dragOver);
    // set the classes
    if (instance.hasFile) container.classList.add(this.config.classes.hasFile);
    if (instance.dragOver)
      container.classList.add(this.config.classes.dragOver);
  }
  // ------------- Public Methods -------------
  removeSingle(container: HTMLElement, index: number = 0) {
    const instance = this.inputMap.get(container);
    if (!instance) return;

    // remove the file from the input
    const files = instance.input.files;
    if (files) {
      const dt = new DataTransfer();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (i !== index) dt.items.add(file);
      }
      instance.input.files = dt.files;
    }

    if (instance.input.files?.length) {
      instance.hasFile = true;
    } else {
      instance.hasFile = false;
    }
    this.#onChange(container, instance);
    instance.input.dispatchEvent(new Event("change"));
  }
  removeAll(container: HTMLElement) {
    const instance = this.inputMap.get(container);
    if (!instance) return;
    instance.input.value = "";
    instance.hasFile = false;
    this.#onChange(container, instance);
    instance.input.dispatchEvent(new Event("change"));
  }
}
