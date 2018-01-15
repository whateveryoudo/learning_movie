/**
 * @fileName : searchResult.js
 * @author : ykx 
 * @createTime : 2018/1/13
 * @desc : 搜索结果界面
 */
const config = require('../../config/config');
import {searchFilmList} from '../../service/getData'
Page({
    data : {
        isNull : true,
        films : [],
        nullObj : {
            desText : 'sorry，没有找到您要的内容，换个关键词试试吧',
            actionText : '返回',
            backUrl : '../../pages/search/search'
        },
        start : 0
    },
    onLoad(options){
        //test
        var that = this;
        var options = {type : 'keyword',keyword : '2312312'};
        //获取数据
        let {type,keyword} = options;

        keyword = decodeURIComponent(keyword);
        let tempUrl = (type == 'keyword' ? '?q=' : '?tag=')+ keyword;
        searchFilmList('movie/search' + tempUrl,{
            data :{//处理影片列表
                start : that.data.start,
                count : config.count
            }
        },function(res){
            that.optFilms(res);
        })
    },
    /*
     * @name optFilms
     * @param
     * @description 处理搜索结果
     */
    optFilms : function(res){
        debugger;
        // let that = this,filmsData = res.subjects;
        // if(filmsData.length == 0){
        //     that.setData({
        //         hasMore : false
        //     })
        // }else{
        //     //追加内容
        //     that.setData({
        //         films : [...that.data.films,...filmsData],
        //         start : that.data.start + filmsData.length
        //     })
        // }
    },
})
