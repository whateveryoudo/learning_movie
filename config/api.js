/**
 * Created by Administrator on 2017/10/26.
 */

import message from '../../component/Toast/Toast'
//简易封装wx网络请求
export default (url = '',data = {},type = 'GET',lsLoading = 'true',cb) => {
    type == 'GET' && function(){
        let paramStr = '';
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] +'&';
        })
        if(paramStr !== ''){//凭借到url后面
            paramStr = paramStr.substr(0,paramStr.lastIndexOf('&'));
            url = url + '?' + paramStr;
        }
    }()
}