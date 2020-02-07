class Timer{
    countdown(end,update,handle){
        const now = new Date().getTime();
        const self = this;
        if(now - end){  //倒计时时间到
            handle.call(self);  //运行倒计时结束函数
        }else{          //倒计时还没到
            let last_time = end - now;  //记录剩余倒计时时间
            const px_d = 1000 * 60 * 60 * 24;   
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;
            let d = Math.floor(last_time/px_d); //求倒计时剩余天数单位
            let h = Math.floor((last_time - d * px_d)/px_h);    //求倒计时剩余小时单位
            let m = Math.floor((last_time - d * px_d - h * px_h)/px_m); //求倒计时剩余分钟单位
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m)/px_s);  //求倒计时剩余秒单位
            let r = []; //存放时间数据
            if(d > 0){  
                r.push(`<em>${d}</em>天`);
            }
            if(r.length || (h > 0)){
                r.push(`<em>${h}</em>时`);
            }
            if(r.length||m>0){
                r.push(`<em>${m}</em>分`);
            }
            if(r.length||s>0){
                r.push(`<em>${s}</em>秒`);
            }
            
            self.last_time = r.join('');    //拼接时间
            update.call(self,r.join(''));   //更新
            setTimeout(function(){          //每一秒调用1次
                self.countdown(end,update,handle);
            },1000);
        }
    }
}

export default Timer;