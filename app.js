/**
 * Created by Administrator on 2017/10/26.
 */
const config = require('./config/config');
import {getLocation} from 'service/getData'
App({
    onLaunch(){
        //初始化缓存信息
        this.initStorage();
    },
    initStorage(){
        //添加数组中是否包含某个元素的方法
        Array.prototype.contains = function(needle){
            for(var i in this){
                if(this[i] == needle){return true}
            }
            return false;
        }
        wx.getStorageInfo({
          success: res => {
            //判断电影收藏是否存在,没有则初始化
              !(res.keys.contains('film_favorite')) && function(){
                  wx.setStorage({
                      key : 'film_favorite',
                      data : []
                  })
              }()
          } 
        });
    },
    getCity(cb){
        const that = this;
        wx.getLocation({
            type : 'gcj02',
          success: res => {
              const locationParam = res.latitude + ',' + res.longitude + '1';
              //获取当前城市（调用百度地图api）
              getLocation({
                  urlType : 'baidu',
                  isLoading : false,
                  data : {
                      ak: config.baiduAK,
                      location: locationParam,
                      output: 'json',
                      pois: '1'
                  }
              },function(res){
                    let city = res.result.addressComponent.city.slice(0,-1);
                    typeof cb === 'function' && cb(city);
              },function(){
                  that.getCity();//重新获取
              })
          }
        })
    }
})