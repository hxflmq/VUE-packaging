import axios from 'axios'
import router from '../router/index.js'
import {MessageBox} from 'element-ui'
import store from '../store/index.js'

axios.defaults.timeout = 30000
// axios.defaults.baseURL = process.env.CENTER_API
axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (sessionStorage.getItem('token')) {
    config.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  store.dispatch('changeRequestCounts', parseInt(store.state.hadRequestError) + 1)
  if (store.state.hadRequestError === 1) {
    if (error.response.status === 401) {
      if (error.response.data.error) {
        if (error.response.data.error.indexOf('TimeOut') >= 0) {
          MessageBox.alert('登录超时，请重新登录！', '提示', {
            confirmButtonText: '确定',
            showClose: false,
            callback: () => {
              router.push('/')
              store.dispatch('logout')
            }
          })
        }
      }
    }
  }
  return Promise.reject(error)
})

// post方法
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: process.env.CENTER_API + url,
      method: 'post',
      data
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

// get方法
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: process.env.CENTER_API + url,
      method: 'get',
      params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

// delete方法
export function $delete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(
      process.env.CENTER_API + url, params
    ).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

// patch方法
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: process.env.CENTER_API + url,
      method: 'patch',
      data
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
