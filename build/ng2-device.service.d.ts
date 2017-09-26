export declare class Ng2DeviceService {
    ua: string;
    userAgent: string;
    os: string;
    browser: string;
    device: string;
    os_version: string;
    browser_version: string;
    private _window;
    constructor(_window?: any);
    private _setDeviceInfo();
    getDeviceInfo(): any;
    isMobile(): boolean;
    isTablet(): boolean;
    isDesktop(): boolean;
}
