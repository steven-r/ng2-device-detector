export declare class Ng2DeviceService {
    ua: string;
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    private _window;
    private _setDeviceInfo();
    getDeviceInfo(_window?: any): any;
    isMobile(): boolean;
    isTablet(): boolean;
    isDesktop(): boolean;
}
