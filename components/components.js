/**
 * 模块化组件
 */
class Component{
    constructor(options = {}){
        Object.assign(this,{options});
        this.__init();
    }
    //初始化
    __init(){
        //获取当前page对象
        this.page = getCurrentPages()[getCurrentPages().length - 1];
        const setData = this.page.setData.bind(this.page);//声明setData变量（调用绑定当前页面对象（相当于当前页面serData,与call类似））

        // 检查版本库是否高于或等于 1.5.0，setData 方法才有回调函数，否则采用 setTimeout 模拟
        const checkSDKVersion = () => {
            let has = false;
            try{
                const res = wx.getSystemInfoSync();
                const SDKVersion = res.SDKVersion.split('.');
                has = Number(SDKVersion[0]) > 1 || Number(SDKVersion[1]) >= 5
            }catch (e){

            }

            return has;
        }

        //重写setData方法
        this.setData = (obj = {},cb = () => ({})) => {
            const fn = () => {
                if(typeof cb === 'function'){
                    cb();
                }
            }

            if(checkSDKVersion()){//高于1.5版本
                setData(obj,fn);
            }else{
                setData(obj);
                setTimeout(fn,0);
            }
        }

        //初始化组件状态
        this.__initState();
    }
    //初始化组件状态
    __initState(){
        this.options.data && this.__initData();
        this.options.methods && this.__initMethods();
    }
    //绑定组件的动态数据
    __initData(){
        const scope = this.options.scope;
        const data = this.options.data;

        //当前类中声明属性data
        this._data = {};//用来存储传入data


        // 筛选非函数类型，更改参数中函数的 this 指向
        if(!this.isEmptyObject(data)){
            for(let  key in data){
                if(data.hasOwnProperty(key)){
                    if(typeof data[key] === 'function'){
                        data[key] = data[key].bind(this);
                    }else{
                        this._data[key] = data[key];
                    }
                }
            }
        }
    }
    //判断对象是否为空
    isEmptyObject(e){
        for(let t in e){
            return !1;
        }
        return !0;
    }
}


export default Component
