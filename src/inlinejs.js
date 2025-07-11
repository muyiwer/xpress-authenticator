class MerchantPortalAuthenticator {
  static iframeElement = null;
  static spinnerElement = null;
  static errorMessageElement = null;

  static closeIframe() {
    if (MerchantPortalAuthenticator.iframeElement) {
      MerchantPortalAuthenticator.iframeElement.remove();
      MerchantPortalAuthenticator.iframeElement = null;
    }
  }

  static showSpinner() {
    const spinner = document.createElement("div");
    spinner.className = "loader--spinner";
    spinner.innerHTML = `<div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>`;
    MerchantPortalAuthenticator.spinnerElement = spinner;
    document.body.appendChild(spinner);
  }

  static hideSpinner() {
    if (MerchantPortalAuthenticator.spinnerElement) {
      MerchantPortalAuthenticator.spinnerElement.remove();
      MerchantPortalAuthenticator.spinnerElement = null;
    }
  }

  static handleIframeError(iframe, onError) {
    // Event listener for iframe load error
    iframe.onerror = () => {
      MerchantPortalAuthenticator.hideSpinner();
      if (onError) {
        onError({ message: "Failed to load Xpress Merchant authenticator." });
      }
    };
  }
  static setMerchantKYC(
    appKey,
    token,
    containerSelector,
    height = "100vh",
    width = "100%"
  ) {
    if (typeof appKey !== "string" || !appKey.startsWith("http")) {
      console.error("Invalid URL provided to setMerchantKYC");
      return;
    }
  
    appKey = appKey.replace(/\/$/, "");
  
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `${appKey}/oauth/compliance?xps=${token}`);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("width", width);
    iframe.setAttribute("height", height);
    iframe.style.border = "none";
    iframe.style.zIndex = "999999";
    iframe.style.position = "relative";
  
    MerchantPortalAuthenticator.closeIframe(); // Remove previous iframe
    MerchantPortalAuthenticator.iframeElement = iframe;
  
    let container = null;
    if (containerSelector) {
      // Try querySelector first
      container = document.querySelector(containerSelector);
      console.log("first", container)
      // If that fails and it's a plain ID, try getElementById
      if (!container && !containerSelector.includes("#") && !containerSelector.includes(".")) {
        container = document.getElementById(containerSelector);
        console.log("second", container)
      }
    }
  
    console.log("third", container)
    if (container) {
      container.appendChild(iframe);
    } else {
      console.warn("Container not found. Falling back to body.");
      document.body.appendChild(iframe);
    }
  }
  

  static async login({ appKey, windowWidth, windowHeight }) {
    const width = windowWidth ?? 800;
    const height = windowHeight ?? 600;

    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    appKey = appKey?.replace(/\/$/, "");
    window.open(
      `${appKey}/login?rdt=true`,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
    );
  }

  static async getToken({ appKey, onSuccess, onError }) {
    MerchantPortalAuthenticator.showSpinner();
    const iframe = document.createElement("iframe");

    iframe.setAttribute("src", appKey);

    // Add sandbox attributes to allow scripts, storage, and messaging
    iframe.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
    );

    let connectionTimeout;

    // Event listener for when the iframe successfully loads
    iframe.onload = () => {
      MerchantPortalAuthenticator.hideSpinner();
      MerchantPortalAuthenticator.closeIframe();
      clearTimeout(connectionTimeout); // Clear the timeout if loaded successfully
    };

    connectionTimeout = setTimeout(() => {
      MerchantPortalAuthenticator.hideSpinner();
      if (onError)
        onError({ message: "Connection refused. The server may be down." });
    }, 10000); // 10 seconds timeout

    MerchantPortalAuthenticator.handleIframeError(iframe, onError);

    MerchantPortalAuthenticator.iframeElement = iframe;
    document.body.appendChild(iframe);

    window.addEventListener("message", async (event) => {
      if (event.data?.type === "token") {
        if (onSuccess && event.data?.token) {
          onSuccess(event.data?.token);
        } else if (onError && !event.data?.token) {
          onError({ message: "Sorry, it seems merchant has logged out" });
        }
        MerchantPortalAuthenticator.hideSpinner();
      }
    });
  }

  static async logOut({ appKey, onError }) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `${appKey}logOut`);

    let connectionTimeout;
    iframe.onload = () => {
      clearTimeout(connectionTimeout);
      MerchantPortalAuthenticator.closeIframe();
    };
    connectionTimeout = setTimeout(() => {
      MerchantPortalAuthenticator.hideSpinner();
      if (onError) {
        onError({ message: "Connection refused. The server may be down." });
      }
    }, 10000); // 10 seconds timeout
    MerchantPortalAuthenticator.handleIframeError(iframe, onError);
    document.body.appendChild(iframe);
  }
}

// Add CSS for error message
const style = document.createElement("style");
style.textContent = `
.loader--spinner, .iframe {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader--spinner div {
  animation: loader--spinner 1.2s linear infinite;
  transform-origin: 30px 30px;
  color:white;
}

.loader--spinner div:after {
  display: block;
  position: absolute;
  top: 3px;
  left: 27px;
  border-radius: 20%;
  content: " ";
  height: 10px;
  width: 5px;
  background: white;
}

.loader--spinner div:nth-child(1) {
  animation-delay: -1.1s;
  transform: rotate(0deg);
}

.loader--spinner div:nth-child(2) {
  animation-delay: -1s;
  transform: rotate(30deg);
}

.loader--spinner div:nth-child(3) {
  animation-delay: -0.9s;
  transform: rotate(60deg);
}

.loader--spinner div:nth-child(4) {
  animation-delay: -0.8s;
  transform: rotate(90deg);
}

.loader--spinner div:nth-child(5) {
  animation-delay: -0.7s;
  transform: rotate(120deg);
}

.loader--spinner div:nth-child(6) {
  animation-delay: -0.6s;
  transform: rotate(150deg);
}

.loader--spinner div:nth-child(7) {
  animation-delay: -0.5s;
  transform: rotate(180deg);
}

.loader--spinner div:nth-child(8) {
  animation-delay: -0.4s;
  transform: rotate(210deg);
}

.loader--spinner div:nth-child(9) {
  animation-delay: -0.3s;
  transform: rotate(240deg);
}

.loader--spinner div:nth-child(10) {
  animation-delay: -0.2s;
  transform: rotate(270deg);
}

.loader--spinner div:nth-child(11) {
  animation-delay: -0.1s;
  transform: rotate(300deg);
}

.loader--spinner div:nth-child(12) {
  animation-delay: 0s;
  transform: rotate(330deg);
}

@keyframes loader--spinner {
  0% {
      opacity: 1;
  }

  100% {
      opacity: -10;
  }
}

.error-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000000;
  background-color: #ff4d4d;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}

`;
document.head.appendChild(style);

window.addEventListener("message", (event) => {
  if (event.data?.type === "closeIframe") {
    MerchantPortalAuthenticator.closeIframe();
  }
});

export default MerchantPortalAuthenticator;
