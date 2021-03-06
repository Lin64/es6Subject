'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculate = function () {
    function Calculate() {
        _classCallCheck(this, Calculate);
    }

    _createClass(Calculate, [{
        key: 'computeCount',

        /**
         * 
         * @param {number} active [当前选中的号码]
         * @param {String} play_name [当前的玩法标识]
         * @return {number} [注数]
         */
        value: function computeCount(active, play_name) {
            var count = 0;
            var exists = this.play_list.has(play_name);
            var arr = new Array(active).fill('0');
            if (exists && play_name.at(0) === 'r') {
                count = Calculate.combine(arr, play_name.split('')[1]);
            }
            return count;
        }
        /**
         * [奖金范围预测]
         * @param {number} active 
         * @param {string} play_name 
         * @return  {array}
         */

    }, {
        key: 'computeBonus',
        value: function computeBonus(active, play_name) {
            var play = play.split('');
            var self = this;
            var arr = new Array(play[1] * 1).fill(0);
            var min = void 0,
                max = void 0;
            if (play[0] == 'r') {
                var min_active = 5 - (11 - active);
                if (min_active > 0) {
                    if (min_active - play[1] >= 0) {
                        arr = new Array(min_active).fill(0);
                        min = Calculate.combine(arr, play[1]).length;
                    } else {
                        if (play[1] - 5 > 0 && active - play[1] >= 0) {
                            arr = new Array(active - 5).fill(0);
                            min = Calculate.combine(arr, play[1] - 5).length;
                        } else {
                            min = active - play[1] > -1 ? 1 : 0;
                        }
                    }
                } else {
                    min = active - play[1] > -1 ? 1 : 0;
                }

                var max_active = Math.min(active, 5);
                if (play[1] - 5 > 0) {
                    if (active - play[1] >= 0) {
                        arr = new Array(active - 5).fill(0);
                        max = Calculate.combine(arr, play[1] - 5).length;
                    } else {
                        max = 0;
                    }
                } else if (play[1] - 5 < 0) {
                    arr = new Array(Math.min(active, 5)).fill(0);
                    max = Calculate.combine(arr, play[1]).length;
                } else {
                    max = 1;
                }
            }
            return [min, max].map(function (item) {
                return item * self.play_list.get(play_name).bonus;
            });
        }

        /**
         * 
         * @param {array} arr [参与组合运算的数组]
         * @param {number} size [组合运算的基数] 
         */

    }], [{
        key: 'combine',
        value: function combine(arr, size) {
            var allResult = [];
            (function f(arr, size, result) {
                var arrLen = arr.length;
                if (size > arrLen) {
                    return;
                }
                if (size === arrLen) {
                    allResult.push([].concat(result, arr));
                } else {
                    for (var i = 0; i < arrLen; i++) {
                        var newResult = [].concat(result);
                        newResult.push(arr[i]);
                        if (size === 1) {
                            allResult.push(newResult);
                        } else {
                            var newArr = [].concat(arr);
                            newArr.splice(0, i + 1);
                            f(newArr, size - 1, newResult);
                        }
                    }
                }
            })(arr, size, []);
        }
    }]);

    return Calculate;
}();

exports.default = Calculate;