/**
 * Created by ahsanayaz on 08/11/2016.
 */

import { Injectable } from '@angular/core';
import * as Constants from './ng2-device.constants';
import { ReTree } from './retree.service';
@Injectable()
export class Ng2DeviceService {
    ua = '';
    userAgent = '';
    os = '';
    browser = '';
    device = '';
    os_version = '';
    browser_version = '';
    private _window: any;

    constructor(_window?: any) {
        if (_window) {
            this._window = _window;
        } else {
            this._window = window; // angular 2/legacy allows access to _window property
        }
        this._setDeviceInfo();
    }

    private _setDeviceInfo() {
        let reTree = new ReTree();
        this.ua = this._window.navigator.userAgent;
        let ua = this.ua;
        this.userAgent = ua;
        let mappings = [
            { const : 'OS' , prop: 'os'},
            { const : 'BROWSERS' , prop: 'browser'},
            { const : 'DEVICES' , prop: 'device'},
            { const : 'OS_VERSIONS' , prop: 'os_version'},
        ];

        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj: any, item: any) => {
                obj[Constants[mapping.const][item]] = reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                return obj;
            }, {});
        });

        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const])
            .map((key) => {
                return Constants[mapping.const][key];
            }).reduce((previousValue, currentValue) => {
                return (previousValue === Constants[mapping.const].UNKNOWN && this[mapping.prop][currentValue])
                        ? currentValue : previousValue;
            }, Constants[mapping.const].UNKNOWN);
        });

        this.browser_version = '0';
        if (this.browser !== Constants.BROWSERS.UNKNOWN) {
            let re = Constants.BROWSER_VERSIONS_RE[this.browser];
            let res = reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    }

    public getDeviceInfo(): any {
        return {
            userAgent: this.userAgent,
            os : this.os,
            browser: this.browser,
            device : this.device,
            os_version: this.os_version,
            browser_version: this.browser_version,
        };
    }
    public isMobile() {
        return [
            Constants.DEVICES.ANDROID,
            Constants.DEVICES.IPHONE,
            Constants.DEVICES.I_POD,
            Constants.DEVICES.BLACKBERRY,
            Constants.DEVICES.FIREFOX_OS,
            Constants.DEVICES.WINDOWS_PHONE,
            Constants.DEVICES.VITA
        ].some((item) => {
            return this.device === item;
        });
    };

    public isTablet() {
        return [
            Constants.DEVICES.I_PAD,
            Constants.DEVICES.FIREFOX_OS
        ].some((item) => {
            return this.device === item;
        });
    };

    public isDesktop() {
        return [
            Constants.DEVICES.PS4,
            Constants.DEVICES.CHROME_BOOK,
            Constants.DEVICES.UNKNOWN
        ].some((item) => {
            return this.device === item;
        });
    };
}
