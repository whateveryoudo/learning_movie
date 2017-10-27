/**
 * Created by Administrator on 2017/10/26.
 */

import {$wuxToast} from '../components/wux'
//简易封装wx网络请求
export default (url,paramsList = {},cb,failCb) => {
    // debugger;
    const apiPrefix = (paramsList.urlType && paramsList.urlType == 'baidu')? 'https://api.map.baidu.com/' : 'https://api.douban.com/v2/',//默认地址前缀
        type = paramsList.type || 'GET',
        data = paramsList.data || {},
        isLoading = paramsList.isLoading || true;
        type == 'GET' && function(){//get 拼接参数
            let paramStr = '';
            Object.keys(data).forEach(key => {
                paramStr += key + '=' + data[key] +'&';
            })
            if(paramStr !== ''){//凭借到url后面
                paramStr = paramStr.substr(0,paramStr.lastIndexOf('&'));
                url = url + '?' + paramStr;
            }
        }();
    if(isLoading){

        //调用自定义toast组件
        $wuxToast.show({

        })
    }

}

