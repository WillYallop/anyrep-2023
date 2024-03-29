interface ConfigProps {
  src: string;
  key: string;
}
export default class Recaptcha {
  src: string;
  key: string;
  constructor(config: ConfigProps) {
    this.src = config.src;
    this.key = config.key;
  }
  addScript() {
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src === this.src) {
        return;
      }
    }
    const script = document.createElement("script");
    script.src = this.src;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  setToken(token: string) {
    sessionStorage.setItem(`recaptcha-token`, token);
    sessionStorage.setItem("recaptcha-valid", "true");
  }
  waitUntilValid() {
    return new Promise((resolve) => {
      sessionStorage.setItem("recaptcha-valid", "false");
      sessionStorage.setItem("recaptcha-token", "");
      const interval = setInterval(() => {
        if (sessionStorage.getItem("recaptcha-valid") === "true") {
          clearInterval(interval);
          resolve(true);
        }
      }, 50);
    });
  }
}
