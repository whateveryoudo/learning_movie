/**
 * Created by Administrator on 2017/10/26.
 */
const config = require('../../config/config');
const app = getApp();

console.log(config.bannerList);
Page({
    data : {
        bannerList : config.bannerList,
        showLoading : true
    },
    onload(){
        const that = this;
        //设置顶部barloading状态
        wx.showNavigationBarLoading();
        //获取当前城市
        app.getCity((res) => {
            wx.hideNavigationBarLoading();//去除加载
            wx.setNavgationBarTtile({
                title : '正在热映 - ' + res.city
            })
        })
    }
})
