(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ng2-device-detector'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * Created by ahsanayaz on 08/11/2016.
 */
var BROWSERS = {
    CHROME: 'chrome',
    FIREFOX: 'firefox',
    SAFARI: 'safari',
    OPERA: 'opera',
    IE: 'ie',
    MS_EDGE: 'ms-edge',
    FB_MESSANGER: 'fb-messanger',
    UNKNOWN: 'unknown'
};
var DEVICES = {
    ANDROID: 'android',
    I_PAD: 'ipad',
    IPHONE: 'iphone',
    I_POD: 'ipod',
    BLACKBERRY: 'blackberry',
    FIREFOX_OS: 'firefox-os',
    CHROME_BOOK: 'chrome-book',
    WINDOWS_PHONE: 'windows-phone',
    PS4: 'ps4',
    VITA: 'vita',
    CHROMECAST: 'chromecast',
    APPLE_TV: 'apple-tv',
    GOOGLE_TV: 'google-tv',
    UNKNOWN: 'unknown'
};
var OS = {
    WINDOWS: 'windows',
    MAC: 'mac',
    IOS: 'ios',
    ANDROID: 'android',
    LINUX: 'linux',
    UNIX: 'unix',
    FIREFOX_OS: 'firefox-os',
    CHROME_OS: 'chrome-os',
    WINDOWS_PHONE: 'windows-phone',
    UNKNOWN: 'unknown'
};
var OS_VERSIONS = {
    WINDOWS_3_11: 'windows-3-11',
    WINDOWS_95: 'windows-95',
    WINDOWS_ME: 'windows-me',
    WINDOWS_98: 'windows-98',
    WINDOWS_CE: 'windows-ce',
    WINDOWS_2000: 'windows-2000',
    WINDOWS_XP: 'windows-xp',
    WINDOWS_SERVER_2003: 'windows-server-2003',
    WINDOWS_VISTA: 'windows-vista',
    WINDOWS_7: 'windows-7',
    WINDOWS_8_1: 'windows-8-1',
    WINDOWS_8: 'windows-8',
    WINDOWS_10: 'windows-10',
    WINDOWS_PHONE_7_5: 'windows-phone-7-5',
    WINDOWS_PHONE_8_1: 'windows-phone-8-1',
    WINDOWS_PHONE_10: 'windows-phone-10',
    WINDOWS_NT_4_0: 'windows-nt-4-0',
    MACOSX_15: 'mac-os-x-15',
    MACOSX_14: 'mac-os-x-14',
    MACOSX_13: 'mac-os-x-13',
    MACOSX_12: 'mac-os-x-12',
    MACOSX_11: 'mac-os-x-11',
    MACOSX_10: 'mac-os-x-10',
    MACOSX_9: 'mac-os-x-9',
    MACOSX_8: 'mac-os-x-8',
    MACOSX_7: 'mac-os-x-7',
    MACOSX_6: 'mac-os-x-6',
    MACOSX_5: 'mac-os-x-5',
    MACOSX_4: 'mac-os-x-4',
    MACOSX_3: 'mac-os-x-3',
    MACOSX_2: 'mac-os-x-2',
    MACOSX: 'mac-os-x',
    UNKNOWN: 'unknown'
};
var OS_RE = {
    WINDOWS: { and: [{ or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/] }, { not: /\bWindows Phone\b/ }] },
    MAC: { and: [/\bMac OS\b/, { not: /Windows Phone/ }] },
    IOS: { and: [{ or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/] }, { not: /Windows Phone/ }] },
    ANDROID: { and: [/\bAndroid\b/, { not: /Windows Phone/ }] },
    LINUX: /\bLinux\b/,
    UNIX: /\bUNIX\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /Mobile\b/] },
    CHROME_OS: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
var BROWSERS_RE = {
    CHROME: { and: [{ or: [/\bChrome\b/, /\bCriOS\b/] }, { not: { or: [/\bOPR\b/, /\bEdge\b/] } }] },
    FIREFOX: /\bFirefox\b/,
    SAFARI: { and: [/^((?!CriOS).)*\Safari\b.*$/, { not: { or: [/\bOPR\b/, /\bEdge\b/, /Windows Phone/] } }] },
    OPERA: { or: [/Opera\b/, /\bOPR\b/] },
    IE: { or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/] },
    MS_EDGE: { or: [/\bEdge\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
    FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/
};
var DEVICES_RE = {
    ANDROID: { and: [/\bAndroid\b/, { not: /Windows Phone/ }] },
    I_PAD: /\biPad\b/,
    IPHONE: { and: [/\biPhone\b/, { not: /Windows Phone/ }] },
    I_POD: /\biPod\b/,
    BLACKBERRY: /\bblackberry\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /\bMobile\b/] },
    CHROME_BOOK: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    CHROMECAST: /\bCrKey\b/,
    APPLE_TV: /^iTunes-AppleTV\/4.1$/,
    GOOGLE_TV: /\bGoogleTV\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
var OS_VERSIONS_RE = {
    WINDOWS_3_11: /Win16/,
    WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
    WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
    WINDOWS_98: /(Windows 98|Win98)/,
    WINDOWS_CE: /Windows CE/,
    WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
    WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
    WINDOWS_SERVER_2003: /Windows NT 5.2/,
    WINDOWS_VISTA: /Windows NT 6.0/,
    WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
    WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
    WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
    WINDOWS_10: /(Windows NT 10.0)/,
    WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
    WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
    WINDOWS_PHONE_10: /(Windows Phone 10)/,
    WINDOWS_NT_4_0: { and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, { not: /Windows NT 10.0/ }] },
    MACOSX: /(MAC OS X\s*[^ 0-9])/,
    MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
    MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
    MACOSX_5: /(Mac OS X 10.5)/,
    MACOSX_6: /(Mac OS X 10.6)/,
    MACOSX_7: /(Mac OS X 10.7)/,
    MACOSX_8: /(Mac OS X 10.8)/,
    MACOSX_9: /(Mac OS X 10.9)/,
    MACOSX_10: /(Mac OS X 10.10)/,
    MACOSX_11: /(Mac OS X 10.11)/,
    MACOSX_12: /(Mac OS X 10.12)/,
    MACOSX_13: /(Mac OS X 10.13)/,
    MACOSX_14: /(Mac OS X 10.14)/,
    MACOSX_15: /(Mac OS X 10.15)/
};
var BROWSER_VERSIONS_RE_MAP = {
    CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/],
    FIREFOX: /\bFirefox\/([\d\.]+)\b/,
    SAFARI: /\bVersion\/([\d\.]+)\b/,
    OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
    IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
    MS_EDGE: /\bEdge\/([\d\.]+)\b/
};
var BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
    return obj;
}, {});


var Constants = Object.freeze({
	BROWSERS: BROWSERS,
	DEVICES: DEVICES,
	OS: OS,
	OS_VERSIONS: OS_VERSIONS,
	OS_RE: OS_RE,
	BROWSERS_RE: BROWSERS_RE,
	DEVICES_RE: DEVICES_RE,
	OS_VERSIONS_RE: OS_VERSIONS_RE,
	BROWSER_VERSIONS_RE_MAP: BROWSER_VERSIONS_RE_MAP,
	BROWSER_VERSIONS_RE: BROWSER_VERSIONS_RE
});

/**
 * Created by ahsanayaz on 08/11/2016.
 */
var ReTree = (function () {
    function ReTree() {
    }
    /**
     * @param {?} string
     * @param {?} regex
     * @return {?}
     */
    ReTree.prototype.test = function (string, regex) {
        var /** @type {?} */ self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !self.test(string, regex.not);
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} string
     * @param {?} regex
     * @return {?}
     */
    ReTree.prototype.exec = function (string, regex) {
        var /** @type {?} */ self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : self.exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    };
    return ReTree;
}());

/**
 * Created by ahsanayaz on 08/11/2016.
 */
var Ng2DeviceService = (function () {
    function Ng2DeviceService() {
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
    }
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype._setDeviceInfo = function () {
        var _this = this;
        if (this._window == null) {
            throw "Please call 'getDeviceInfo()' first";
        }
        var /** @type {?} */ reTree = new ReTree();
        this.ua = this._window.navigator.userAgent;
        var /** @type {?} */ ua = this.ua;
        this.userAgent = ua;
        var /** @type {?} */ mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach(function (mapping) {
            _this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce(function (obj, item) {
                obj[Constants[mapping.const][item]] = reTree.test(ua, Constants[mapping.const + "_RE"][item]);
                return obj;
            }, {});
        });
        mappings.forEach(function (mapping) {
            _this[mapping.prop] = Object.keys(Constants[mapping.const])
                .map(function (key) {
                return Constants[mapping.const][key];
            }).reduce(function (previousValue, currentValue) {
                return (previousValue === Constants[mapping.const].UNKNOWN && _this[mapping.prop][currentValue])
                    ? currentValue : previousValue;
            }, Constants[mapping.const].UNKNOWN);
        });
        this.browser_version = '0';
        if (this.browser !== BROWSERS.UNKNOWN) {
            var /** @type {?} */ re = BROWSER_VERSIONS_RE[this.browser];
            var /** @type {?} */ res = reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    };
    /**
     * @param {?=} _window
     * @return {?}
     */
    Ng2DeviceService.prototype.getDeviceInfo = function (_window) {
        if (_window) {
            this._window = _window;
        }
        else {
            this._window = window; // angular 2/legacy allows access to _window property
        }
        this._setDeviceInfo();
        return {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version,
        };
    };
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype.isMobile = function () {
        var _this = this;
        return [
            DEVICES.ANDROID,
            DEVICES.IPHONE,
            DEVICES.I_POD,
            DEVICES.BLACKBERRY,
            DEVICES.FIREFOX_OS,
            DEVICES.WINDOWS_PHONE,
            DEVICES.VITA
        ].some(function (item) {
            return _this.device === item;
        });
    };
    
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype.isTablet = function () {
        var _this = this;
        return [
            DEVICES.I_PAD,
            DEVICES.FIREFOX_OS
        ].some(function (item) {
            return _this.device === item;
        });
    };
    
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype.isDesktop = function () {
        var _this = this;
        return [
            DEVICES.PS4,
            DEVICES.CHROME_BOOK,
            DEVICES.UNKNOWN
        ].some(function (item) {
            return _this.device === item;
        });
    };
    
    return Ng2DeviceService;
}());
Ng2DeviceService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
Ng2DeviceService.ctorParameters = function () { return []; };

var Ng2DeviceDetectorModule = (function () {
    function Ng2DeviceDetectorModule() {
    }
    /**
     * @return {?}
     */
    Ng2DeviceDetectorModule.forRoot = function () {
        return {
            ngModule: Ng2DeviceDetectorModule,
            providers: [
                ReTree,
                Ng2DeviceService
            ]
        };
    };
    return Ng2DeviceDetectorModule;
}());
Ng2DeviceDetectorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [],
                exports: []
            },] },
];
/**
 * @nocollapse
 */
Ng2DeviceDetectorModule.ctorParameters = function () { return []; };

exports.Ng2DeviceDetectorModule = Ng2DeviceDetectorModule;
exports.Ng2DeviceService = Ng2DeviceService;
exports.ReTree = ReTree;

Object.defineProperty(exports, '__esModule', { value: true });

})));
