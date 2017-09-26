import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2DeviceService } from './ng2-device.service';
import { ReTree } from './retree.service';
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
export { Ng2DeviceDetectorModule };
Ng2DeviceDetectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [],
                exports: []
            },] },
];
/**
 * @nocollapse
 */
Ng2DeviceDetectorModule.ctorParameters = function () { return []; };
function Ng2DeviceDetectorModule_tsickle_Closure_declarations() {
    /** @type {?} */
    Ng2DeviceDetectorModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Ng2DeviceDetectorModule.ctorParameters;
}
export { Ng2DeviceService } from './ng2-device.service';
export { ReTree } from './retree.service';
