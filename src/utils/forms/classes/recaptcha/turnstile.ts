import Recaptcha from "./recaptcha";
const ID = "turnstile-con";
interface TurnstileOptions {
  containerSelector?: string;
}
export default class Turnstile extends Recaptcha {
  instanceID: number = 0;
  widgetID?: string = undefined;
  options: TurnstileOptions;
  constructor(key: string, options: TurnstileOptions = {}) {
    super({
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",
      key,
    });
    this.options = options;
  }
  
  initialise(formEle: HTMLFormElement) {
    this.addScript();
    const total = document.querySelectorAll("[turnstile-recaptcha]").length;
    const div = this.getContainer(formEle, total);
    this.instanceID = total;
    
    // @ts-ignore
    window.onloadTurnstileCallback = () => {
      const recaptchaEles = document.querySelectorAll("[turnstile-recaptcha]");
      recaptchaEles.forEach((ele) => {
        // @ts-ignore
        this.widgetID = turnstile.render(`#${ele.id}`, {
          sitekey: this.key,
          callback: (token: string) => {
            this.setToken(token);
          },
          'error-callback': () => {
            console.log('Turnstile error - resetting');
            sessionStorage.setItem("recaptcha-valid", "false");
            sessionStorage.setItem("recaptcha-token", "");
          }
        }) as string | undefined;
      });
    };
  }
  
  async refresh() {
    sessionStorage.setItem("recaptcha-valid", "false");
    sessionStorage.setItem("recaptcha-token", "");
    
    // @ts-ignore
    turnstile.reset(this.widgetID);
    
    return this.waitUntilValidWithTimeout(30000); 
  }
  
  waitUntilValidWithTimeout(timeout: number = 30000) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        if (sessionStorage.getItem("recaptcha-valid") === "true") {
          clearInterval(interval);
          resolve(true);
        }
        // Timeout check
        if (Date.now() - startTime > timeout) {
          clearInterval(interval);
          reject(new Error('Turnstile validation timeout'));
        }
      }, 50);
    });
  }
  
  private getContainer(formEle: HTMLFormElement, total: number) {
    let container: HTMLElement | null = null;
    if (this.options.containerSelector) {
      container = formEle.querySelector(this.options.containerSelector);
    }
    if (!container) {
      container = document.createElement("div");
    }
    container.setAttribute("turnstile-recaptcha", `${total}`);
    if (!container.id) {
      container.id = `${ID}-${total}`;
    }
    if (!container.parentElement) {
      formEle.appendChild(container);
    }
    return container;
  }
}