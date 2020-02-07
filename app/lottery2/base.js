'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
    function Base() {
        _classCallCheck(this, Base);
    }

    _createClass(Base, [{
        key: 'initPlayList',

        /**
         * [初始化奖金和玩法及说明]
         */
        value: function initPlayList() {
            this.play_list.set('r2', {
                bonus: 6,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">6</em>元',
                name: '任二'
            }).set('r3', {
                bonus: 19,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">19</em>元',
                name: '任三'
            }).set('r4', {
                bonus: 78,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">78</em>元',
                name: '任四'
            }).set('r5', {
                bonus: 540,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
                name: '任五'
            }).set('r6', {
                bonus: 90,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">90</em>元',
                name: '任六'
            }).set('r7', {
                bonus: 26,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
                name: '任七'
            }).set('r8', {
                bonus: 9,
                tip: '从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
                name: '任八'
            });
        }
        /**
        * [初始化号码]
        */

    }, {
        key: 'initNumber',
        value: function initNumber() {
            for (var i = 0; i < 12; i++) {
                this.number.add(('' + i).padStart(2, '0'));
            }
        }
    }, {
        key: 'setOmit',
        value: function setOmit(omit) {
            var self = this;
            self.omit.clear();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = omit.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        index = _step$value[0],
                        item = _step$value[1];

                    self.omit.set(index, item);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            (0, _jquery2.default)(self.omit_el).each(function (index, item) {
                (0, _jquery2.default)(item).text(self.omit.get(index));
            });
        }
    }, {
        key: 'setOpenCode',
        value: function setOpenCode(code) {
            var self = this;
            self.open_code.clear();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = code.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    self.open_code.add(item);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            self.updateOpenCode && self.updateOpenCode.call(self, code);
        }
        /**
         * [号码选中取消]
         */

    }, {
        key: 'toggleCodeActive',
        value: function toggleCodeActive(e) {
            var self = this;
            var $cur = (0, _jquery2.default)(e.currentTarget);
            $cur.toggleClass('btn-boll-active');
            self.getCount();
        }
        /**
         * [切换玩法]
         */

    }, {
        key: 'changePlayNav',
        value: function changePlayNav(e) {
            var self = this;
            var $cur = (0, _jquery2.default)(e.currentTarget);
            $cur.addClass('active').siblings().removeClass('active');
            self.cur_play = $cur.attr('desc').toLocaleLowerCase();
            (0, _jquery2.default)('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
            (0, _jquery2.default)('.boll-list .btn-boll').removeClass('btn-boll-active');
            self.getCount();
        }
        /**
         * [操作功能]
         * @param {*} e 
         */

    }, {
        key: 'assistHandle',
        value: function assistHandle(e) {
            e.preventDefault();
            var self = this;
            var $cur = (0, _jquery2.default)(e.currentTarget);
            var index = $cur.index();
            (0, _jquery2.default)('.boll-list .btn-boll').removeClass('btn-boll-active');
            if (index === 0) {
                (0, _jquery2.default)('.boll-list .btn-boll').removeClass('btn-boll-active');
            }
            if (index === 1) {
                (0, _jquery2.default)('.boll-list .btn-boll').each(function (i, t) {
                    if (t.textContent - 5 > 0) {
                        (0, _jquery2.default)(t).addClass('btn-boll-active');
                    }
                });
            }
            if (index === 2) {
                (0, _jquery2.default)('.boll-list .btn-boll').each(function (i, t) {
                    if (t.textContent - 6 < 0) {
                        (0, _jquery2.default)(t).addClass('btn-boll-active');
                    }
                });
            }
            if (index === 3) {
                (0, _jquery2.default)('.boll-list .btn-boll').each(function (i, t) {
                    if (t.textContent % 2 == 1) {
                        (0, _jquery2.default)(t).addClass('btn-boll-active');
                    }
                });
            }
            if (index === 4) {
                (0, _jquery2.default)('.boll-list .btn-boll').each(function (i, t) {
                    if (t.textContent % 2 == 0) {
                        (0, _jquery2.default)(t).addClass('btn-boll-active');
                    }
                });
            }
            self.getCount();
        }
        /**
         * [获取当前彩票名称]
         */

    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
        /**
         * [添加号码]
         */

    }, {
        key: 'addcCode',
        value: function addcCode() {
            var self = this;
            var $active = (0, _jquery2.default)('.boll-list .btn-boll-active').text().match(/\d{2}/g);
            var active = $active ? $active.length : 0;
            var count = self.computeCount(active, self.cur_play);
            if (count) {
                self.addCodeItem($active.join('', self.cur_play, self.play_list.get(self.cur_play).name, count));
            }
        }
        /**
         * [添加单次号码]
         * @param {*} code 
         * @param {*} type 
         * @param {*} typeName 
         * @param {*} count 
         */

    }, {
        key: 'addCodeItem',
        value: function addCodeItem(code, type, typeName, count) {
            var self = this;
            var tpl = '\n            <li codes="' + type + '|' + code + '" bonus="' + count * 2 + '" count="' + count + '">\n                <div class="code">\n                    <b>' + typeName + count + '>1?\'\u590D\u5F0F\':\'\u5355\u5F0F\'</b>\n                    <b class="em">' + code + '</b>\n                    [' + count + '\u6CE8,<em class="code-list-money">' + count * 2 + '</em>\u5143]\n                </div>\n            </li>\n            ';
            (0, _jquery2.default)(self.cart_el).append(tpl);
            self.getTotal();
        }
    }, {
        key: 'getCount',
        value: function getCount() {
            var self = this;
            var active = (0, _jquery2.default)('.boll-ist .btn-boll-active').length;
            var count = self.computeCount(active, self, cur_play);
            var range = self.computeBonus(active, self, cur_play);
            var money = count * 2;
            var win1 = range[0] - money;
            var win2 = range[1] - money;
            var tpl = void 0;
            var c1 = win1 < 0 && win2 < 0 ? Math.abs(win1) : win1;
            var c2 = win1 < 0 && win2 < 0 ? Math.abs(win2) : win2;
            if (count === 0) {
                tpl = '\n                \u60A8\u9009\u4E86 <b>' + count + '</b> \u6CE8\uFF0C\u5171 <b>' + count * 2 + '</b> \u5143\n            ';
            } else if (range[0] === range[1]) {
                tpl = '\n            \u60A8\u9009\u4E86 <b>' + count + '</b> \u6CE8\uFF0C\u5171 <b>' + count * 2 + '</b> \u5143 <em>\u82E5\u4E2D\u5956\uFF0C\u5956\u91D1\uFF1A\n            <strong class="red">' + range[0] + '</strong>\u5143\uFF0C\n            \u60A8\u5C06' + (win1 >= 0 ? '盈利' : '亏损') + '\n            <strong class="' + (win1 >= 0 ? 'red' : 'green') + '">' + Math.abs(win1) + '</strong>\u5143</em>\n            ';
            } else {
                tpl = '\n            \u60A8\u9009\u4E86 <b>' + count + '</b> \u6CE8\uFF0C\u5171 <b>' + count * 2 + '</b> \u5143 <em>\u82E5\u4E2D\u5956\uFF0C\u5956\u91D1\uFF1A\n            <strong class="red">' + range[0] + '</strong> \u81F3 <strong class="red">' + range[1] + '</strong>\u5143\uFF0C\n            \u60A8\u5C06(' + (win1 < 0 && win2 > 0 ? '亏损' : '盈利') + '\n            <strong class="' + (win1 >= 0 ? 'red' : 'green') + '">' + c1 + '</strong> \u81F3 <strong class="' + (win1 >= 0 ? 'red' : 'green') + '">' + c2 + '</strong> \u5143</em>\n\n            ';
            }

            (0, _jquery2.default)('.sel_info').html(tpl);
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            var count = 0;
            (0, _jquery2.default)('.codelist li').each(function (index, item) {
                count += (0, _jquery2.default)(item).attr(count) * 1;
            });
            (0, _jquery2.default)('#count').text(count);
            (0, _jquery2.default)('#money').text(count * 2);
        }
        /**
         * 生成随机数 机选
         * @param {*} num 
         */

    }, {
        key: 'getRandom',
        value: function getRandom(num) {
            var arr = [],
                index = void 0;
            var number = Array.from(this.number);
            while (num--) {
                index = Number.parseInt(Math.random() * number.length);
                arr.push(number[index]);
                number.splice(index, 1);
            }
            return arr.join(' ');
        }
        /**
         * [添加随机号码]
         * @param {*} e 
         */

    }, {
        key: 'getRandomCode',
        value: function getRandomCode(e) {
            e.preventDefault();
            var num = e.currentTarget.getAttrbute('count');
            var play = this.cur_play.match(/\d+/g)[0];
            var self = this;
            if (num === '0') {
                (0, _jquery2.default)(self.cart_el).html('');
            } else {
                for (var i = 0; i < num; i++) {
                    self.addCodeItem(self.getRandom(play), self.cur_play, self.play_list.get(self.cur_play).name, 1);
                }
            }
        }
    }]);

    return Base;
}();

exports.default = Base;