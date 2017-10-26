/**
 * Created by Administrator on 2017/10/26.
 */
/*数据模拟*/
const url = 'https://static.sesine.com/wechat-weapp-movie';//图片地址前缀
const data = {
    bannerList: [
        {type:'film', id: '26683290', imgUrl: url + '/images/banner_1.jpg'},
        {type:'film', id: '25793398', imgUrl: url + '/images/banner_2.jpg'},
        {type:'film', id: '26630781', imgUrl: url + '/images/banner_3.jpg'},
        {type:'film', id: '26415200', imgUrl: url + '/images/banner_4.jpg'},
        {type:'film', id: '3025375', imgUrl: url + '/images/banner_5.jpg'}
    ]
}

module.exports = data;
