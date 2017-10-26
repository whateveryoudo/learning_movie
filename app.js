/**
 * Created by Administrator on 2017/10/26.
 */
App({
    getCity(cb){
        const that = this;
        wx.getLocation({
            type : 'gcj02',
          success: res => {
              const locationParam = res.latitude + ',' + res.longitude + '1';
              //获取当前城市（调用百度地图api）

          }
        })
    }
})