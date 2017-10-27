/**
 * Created by Administrator on 2017/10/26.
 */
const config = require('../../config/config');
const app = getApp();
import {getDoubanFilms} from '../../service/getData'
Page({
    data : {
        bannerList : config.bannerList,
        showLoading : true,
        start : 0
    },
    onLoad(){
        const that = this;
        //设置顶部barloading状态
        wx.showNavigationBarLoading();
        //获取当前城市
        app.getCity((res) => {
            wx.hideNavigationBarLoading();//去除加载
            wx.setNavgationBarTtile({
                title : '正在热映 - ' + res.city
            })
            getDoubanFilms({//处理影片列表
                start : that.start
            },optFilms)

        })
        function optFilms(res){
            console.log(111);
        }
    }
})
