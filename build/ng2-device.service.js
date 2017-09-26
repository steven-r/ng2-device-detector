/**
 * Created by ahsanayaz on 08/11/2016.
 */
import { Injectable } from '@angular/core';
import * as Constants from './ng2-device.constants';
import { ReTree } from './retree.service';
var Ng2DeviceService = (function () {
    /**
     * @param {?=} _window
     */
    function Ng2DeviceService(_window) {
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
        if (_window) {
            this._window = _window;
        }
        else {
            this._window = window; // angular 2/legacy allows access to _window property
        }
        this._setDeviceInfo();
    }
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype._setDeviceInfo = function () {
        var _this = this;
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
        if (this.browser !== Constants.BROWSERS.UNKNOWN) {
            var /** @type {?} */ re = Constants.BROWSER_VERSIONS_RE[this.browser];
            var /** @type {?} */ res = reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    };
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype.getDeviceInfo = function () {
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
            Constants.DEVICES.ANDROID,
            Constants.DEVICES.IPHONE,
            Constants.DEVICES.I_POD,
            Constants.DEVICES.BLACKBERRY,
            Constants.DEVICES.FIREFOX_OS,
            Constants.DEVICES.WINDOWS_PHONE,
            Constants.DEVICES.VITA
        ].some(function (item) {
            return _this.device === item;
        });
    };
    ;
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype.isTablet = function () {
        var _this = this;
        return [
            Constants.DEVICES.I_PAD,
            Constants.DEVICES.FIREFOX_OS
        ].some(function (item) {
            return _this.device === item;
        });
    };
    ;
    /**
     * @return {?}
     */
    Ng2DeviceService.prototype.isDesktop = function () {
        var _this = this;
        return [
            Constants.DEVICES.PS4,
            Constants.DEVICES.CHROME_BOOK,
            Constants.DEVICES.UNKNOWN
        ].some(function (item) {
            return _this.device === item;
        });
    };
    ;
    return Ng2DeviceService;
}());
export { Ng2DeviceService };
Ng2DeviceService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
Ng2DeviceService.ctorParameters = function () { return [
    null,
]; };
function Ng2DeviceService_tsickle_Closure_declarations() {
    /** @type {?} */
    Ng2DeviceService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Ng2DeviceService.ctorParameters;
    /** @type {?} */
    Ng2DeviceService.prototype.ua;
    /** @type {?} */
    Ng2DeviceService.prototype.userAgent;
    /** @type {?} */
    Ng2DeviceService.prototype.os;
    /** @type {?} */
    Ng2DeviceService.prototype.browser;
    /** @type {?} */
    Ng2DeviceService.prototype.device;
    /** @type {?} */
    Ng2DeviceService.prototype.os_version;
    /** @type {?} */
    Ng2DeviceService.prototype.browser_version;
    /** @type {?} */
    Ng2DeviceService.prototype._window;
}
