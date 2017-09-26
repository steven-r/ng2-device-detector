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
export { ReTree };
