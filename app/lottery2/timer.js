'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
    function Timer() {
        _classCallCheck(this, Timer);
    }

    _createClass(Timer, [{
        key: 'countdown',
        value: function countdown(end, update, handle) {
            var now = new Date().getTime();
            var self = this;
            if (now - end) {
                //倒计时时间到
                handle.call(self); //运行倒计时结束函数
            } else {
                //倒计时还没到
                var last_time = end - now; //记录剩余倒计时时间
                var px_d = 1000 * 60 * 60 * 24;
                var px_h = 1000 * 60 * 60;
                var px_m = 1000 * 60;
                var px_s = 1000;
                var d = Math.floor(last_time / px_d); //求倒计时剩余天数单位
                var h = Math.floor((last_time - d * px_d) / px_h); //求倒计时剩余小时单位
                var m = Math.floor((last_time - d * px_d - h * px_h) / px_m); //求倒计时剩余分钟单位
                var s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s); //求倒计时剩余秒单位
                var r = []; //存放时间数据
                if (d > 0) {
                    r.push('<em>' + d + '</em>\u5929');
                }
                if (r.length || h > 0) {
                    r.push('<em>' + h + '</em>\u65F6');
                }
                if (r.length || m > 0) {
                    r.push('<em>' + m + '</em>\u5206');
                }
                if (r.length || s > 0) {
                    r.push('<em>' + s + '</em>\u79D2');
                }

                self.last_time = r.join(''); //拼接时间
                update.call(self, r.join('')); //更新
                setTimeout(function () {
                    //每一秒调用1次
                    self.countdown(end, update, handle);
                }, 1000);
            }
        }
    }]);

    return Timer;
}();

exports.default = Timer;