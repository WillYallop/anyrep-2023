import Recaptcha from "./recaptcha";

const ID = "googlev2-con";

export default class GoogleV2 extends Recaptcha {
  instanceID: number = 0;
  constructor(key: string) {
    super({
      src: `https://www.google.com/recaptcha/api.js?onload=onloadGoogleCallback&render=explicit`,
      key,
    });
  }
  // ----------------------------------------
  // public methods
  initialise(formEle: HTMLFormElement) {
    this.addScript();
    const div = document.createElement("div");
    const total = document.querySelectorAll("[google-recaptcha]").length;
    div.setAttribute("google-recaptcha", `${total}`);
    div.id = `${ID}-${total}`;
    formEle.appendChild(div);

    this.instanceID = total;

    // @ts-ignore
    window.onloadGoogleCallback = () => {
      const recaptchaEles = document.querySelectorAll("[google-recaptcha]");
      recaptchaEles.forEach((ele) => {
        // @ts-ignore
        grecaptcha.render(ele.id, {
          sitekey: this.key,
          size: "invisible",
          callback: (token: string) => {
            this.setToken(token);
          },
        });
      });
    };
  }
  async refresh() {
    // @ts-ignore
    grecaptcha.reset(this.instanceID);
    // @ts-ignore
    grecaptcha.execute(this.instanceID);
    await this.waitUntilValid();
  }
}
