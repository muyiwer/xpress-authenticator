class MerchantPortalAuthenticator {
  static iframeElement = null;
  static spinnerElement = null;

  static closeIframe() {
    if (MerchantPortalAuthenticator.iframeElement) {
      MerchantPortalAuthenticator.iframeElement.remove();
      MerchantPortalAuthenticator.iframeElement = null;
    }
  }

  static showSpinner() {
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    spinner.innerHTML = `<div class="loader"></div>`;
    MerchantPortalAuthenticator.spinnerElement = spinner;
    document.body.appendChild(spinner);
  }

  static hideSpinner() {
    if (MerchantPortalAuthenticator.spinnerElement) {
      MerchantPortalAuthenticator.spinnerElement.remove();
      MerchantPortalAuthenticator.spinnerElement = null;
    }
  }

  static async login({ onLogin }) {
    MerchantPortalAuthenticator.showSpinner()
    const iframe = document.createElement("iframe");
      iframe.classList.add("iframe")
      iframe.setAttribute("src", "http://localhost:9908");
      iframe.setAttribute("frameborder", "0");
      MerchantPortalAuthenticator.iframeElement = iframe;
      document.body.appendChild(iframe);
      MerchantPortalAuthenticator.hideSpinner()

      window.addEventListener("message", event => {
        if (event.data.loginResponse) {
          onLogin(event.data?.loginResponse)
        } 
      })
  }
}

const style = document.createElement("style");
style.textContent = `
.spinner, .iframe {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  background-color: rgba(0,0,0,0.80);
  width: 100%;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
  }

`;
document.head.appendChild(style);

window.addEventListener("message", (event) => {
  if (event.data === "closeIframe") {
    MerchantPortalAuthenticator.closeIframe();
  }
});
