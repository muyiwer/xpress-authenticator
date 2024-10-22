interface LoginSuccessResponse {
  token: string;
}

interface LoginErrorResponse {
  message: string;
}

interface SetupParams {
  appKey: string;
  onSuccess: (data: LoginSuccessResponse) => void;
  onError: (error: LoginErrorResponse) => void;
}

interface TokenParams {
  appKey: string;
  onSuccess: (token: string) => void;
  onError: (error: LoginErrorResponse) => void;
}

interface LogOutParams {
  appKey: string;
  onError: (error: LoginErrorResponse) => void;
}

declare class MerchantPortalAuthenticator {
  static iframeElement: HTMLIFrameElement | null;

  static login(params: SetupParams): Promise<void>;

  static logOut(params: LogOutParams): Promise<void>;

  static getToken(params: TokenParams): Promise<void>;

  static closeIframe(): void;
}

declare const style: HTMLStyleElement;

export default MerchantPortalAuthenticator;
