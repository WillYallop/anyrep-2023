import Recaptcha from "./recaptcha";

const ID = "turnstile-con";

export default class Turnstile extends Recaptcha {
  instanceID: number = 0;
  constructor(key: string) {
    super({
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",
      key,
    });
  }
  // ----------------------------------------
  // public methods
  initialise(formEle: HTMLFormElement) {
    this.addScript();
    // Add dom element
    const div = document.createElement("div");
    const total = document.querySelectorAll("[turnstile-recaptcha]").length;
    div.setAttribute("turnstile-recaptcha", `${total}`);
    div.id = `${ID}-${total}`;
    formEle.appendChild(div);

    this.instanceID = total;

    // @ts-ignore
    window.onloadTurnstileCallback = () => {
      const recaptchaEles = document.querySelectorAll("[turnstile-recaptcha]");
      recaptchaEles.forEach((ele) => {
        // @ts-ignore
        turnstile.render(`#${ele.id}`, {
          sitekey: this.key,
          callback: (token: string) => {
            this.setToken(token);
          },
        });
      });
    };
  }
  async refresh() {
    // @ts-ignore
    turnstile.reset(`#${ID}-${this.instanceID}`);
    await this.waitUntilValid();
  }
}
