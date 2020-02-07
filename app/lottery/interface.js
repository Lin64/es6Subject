import $ from 'jquery';

class Interface{
    /**
     * [getOmit 获取遗漏数据]
     * @param {string} issue [当前期号]
     */
    getDmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
    /**
     * 
     * @param {string} issue [期号]
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
    /**
     * 
     * @param {*} issue 
     */
    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }

}
export default Interface;