/**
 * Created by Administrator on 2017/10/26.
 */
const config = require('./config/config');
import {getLocation} from 'service/getData'
App({
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
                    let city = res.data.result.addressComponent.city.slice(0,-1);
                    typeof cb === 'function' && cb(city);
              },function(){
                  that.getCity();//重新获取
              })
          }
        })
    }
})