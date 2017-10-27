/**
 * Created by lenovo on 2017/10/27.
 */
import api from '../config/api'
export const getDoubanFilms = (params,cb,fail_cb) => api('movie/in_theaters',params,cb,fail_cb);
export const getLocation = (params,cb,fail_cb) => api('geocoder/v2/',params,cb,fail_cb);