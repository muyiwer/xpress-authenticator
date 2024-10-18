interface LoginSuccessResponse {
  token: string
}

interface LoginErrorResponse {
  message: string
}

interface SetupParams {
  onSuccess: (data: LoginSuccessResponse) => void;
  onError: (error: LoginErrorResponse) => void;
}

declare class MerchantPortalAuthenticator {
  static iframeElement: HTMLIFrameElement | null;

  static login(params: SetupParams): Promise<void>;

  static closeIframe(): void;
}

declare const style: HTMLStyleElement;
