

![image-20230714080222911](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714080222911.png)

周一之前完成所有内容：

# 发送AXAJ请求的步骤：

```javascript
//1.创建xhr对象
const xhr = new XMLHttpRequest()
//2.初始化
xhr.open('GET', 'http://api.apiopen.top/getJoke')
//3.发送请求
xhr.send()
//4.处理响应的结果
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		//判断响应状态码
		if (xhr.status >= 200 && xhr.status < 300 ){
			//控制台输出响应体
			console.log(xhr.response)
		}else{
			//控制台输出响应状态码
			console.log(xhr.status)
		}
	}
}
```

# 发送axios请求的步骤：

https://juejin.cn/post/7016255507392364557 axios的源码分析

https://github.com/axios/axios 源码地址

```
axios实例的方法：
axios.request(配置参数)
axios.get(请求地址，请求配置参数)
axios.post(请求地址，请求配置参数)
axios.delete(请求地址，请求配置参数)
axios.head(请求地址，请求配置参数)
axios.put(请求地址，请求配置参数)
axios.patch(请求地址，请求配置参数)
```



```css
1.安装axios yarn add axios
2.按需导入Axios/全局导入Axios

	全局导入：main.js文件中 在组件中可以直接使用this.$axios访问方法
	import Axios from 'axios'
	app.config.golabProporties.$axios = axios或者 app.use(Axios)
	按需导入:需要的vue文件下
	import Axios from axios
		
3.自定义axios请求（axios的二次封装）
	1）创建axios实例并 配置请求的默认参数：指定各个请求的配置默认值
		const axios = Axios.create({配置请求默认参数})
		
		全局默认值：<Axios是axios对象不是实例对象>
		Axios.defaults.baseURL = 'http://www.baidu.com';
		Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
		
		Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
		自定义实例默认值：创建axios实例的时候配置的默认值
		const axiosInstance = Axios.create({
			baseURL： 'http://www.baidu.com'
		})
		创建实例之后修改默认值：
		axiosInstance.default.baseURL = ‘http://hhhhh.com’
		
	2) 设置请求拦截器：在请求被then或者catch处理之前，拦截他们；
	3) 设置响应拦截器：在响应被then或者catch处理之前，拦截他们；
	4) 基于axios，发送request请求
			export default const request = ()=>{
				return new promise(
					axios({
								配置请求参数
					})
						.then((response)=>{
								处理响应的逻辑
						})//获得请求结果并处理
						.catch((err)=> {
								处理错误的逻辑
						})
				)
			}
		
		
```





```js
请求配置参数：
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}


```

```java
拦截器
在请求或响应被 then 或 catch 处理前拦截它们。

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });




// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


请注意，拦截器中的回调函数需要返回相应的值，以确保请求或错误能够继续传递。在请求拦截器中，需要返回处理后的请求配置 config，在错误拦截器中，需要返回一个被拒绝的 Promise 对象 Promise.reject(err)。

```



```java
响应参数
某个请求的响应包含以下信息

{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
使用 then 时，你将接收下面这样的响应：

axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
在使用 catch 时，或传递 rejection callback 作为 then 的第二个参数时，响应可以通过 error 对象可被使用，正如在错误处理这一节所讲。
```

```ts
import Axios, { Method, ResponseType, AxiosResponse, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

interface IAxiosData {
  url: string
  method: Method
  headers?: any
  json: boolean
  contentType?: string
  data?: any
  params?: any
  timeout?: number
  responseType?: ResponseType
}

// const baseURL = 'http://www.mock.com'
// 创建axios实例对象并传入配置对象
const axios = Axios.create({
  // baseURL,
  timeout: 20000
})
// 允许携带cookie
axios.defaults.withCredentials = true
// 请求头信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 默认使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (sessionStorage.getItem('accessToken')) {
      config.headers.Authorization = `Bearer ${sessionStorage.getItem('accessToken')}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
axios.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err) => {
    if (err.response && err.response.data) {
      const code = err.response.status
      const msg = err.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
    } else {
      ElMessage.error(`${err}`)
    }
    return Promise.reject(err)
  }
)

/** *
 * axios({url,method,content,params,datas})
 *
 * @param {string}  url，(必填)
 * @param {string}  method,默认post
 * @param {boolean} json, content-type类型，(必填)
 * @param {object}  params
 * @param {object}  datas  //token在datas中
 *
 */
export default function request(arr: IAxiosData) {
  return new Promise<any>((resolve, reject) => {
    // arr = requestValidate(arr)
    axios({
      timeout: arr.timeout === undefined ? 10000 : arr.timeout, // 请求超时时间
      url: arr.url,
      method: arr.method || 'POST',
      headers: {
        // 'Authorization': arr.token || '',
        // eslint-disable-next-line no-nested-ternary
        'content-type': arr.contentType ? arr.contentType : arr.json ? 'application/json; charset=UTF-8' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      params: arr.params || '',
      data: arr.data || '',
      responseType: arr.responseType || 'json'
    })
      .then((response: AxiosResponse<any>) => {
        /**
         * response格式
         *
         * {
          data:{},
          status:200,
          statusText:'OK',//从服务器返回的http状态文本
          headers: {},//响应头信息
          config: {} //`config`是在请求的时候的一些配置信息
        }
         */
        const responseStatus = `${response.status}`
        // 状态码2开头的处理逻辑
        if (responseStatus.charAt(0) === '2') {
          if (response.data.code === '1' || response.data.code === 'err_9999') {
            ElMessage({
              type: 'error',
              message: response.data.message
            })
            reject(response.data)
            return
          }
          // if (response.data.code === '401') {
          //   Message({
          //     type: 'error',
          //     message: response.data.message
          //   });
          //   reject(response.data);
          //   remove('token');
          //   router.push('/login');
          //   return;
          // }

          resolve(response.data)
        } else {
          ElMessage({
            type: 'error',
            message: response.data.message
          })
          reject(response.data)
        }
      })
      .catch((err) => {
        ElMessage({
          type: 'error',
          message: err.message
        })
        reject(err)
      })
  })
}

```



# 使用express创建一个web服务器步骤

```javascript
//1、引入Express
const express = require("express")
//2、创建应用对象
const app = express()
//3、创建路由规则
	//res是对请求报文的封装   req是对响应报文的封装
	app.get('/',(res, req) =>{
  	//设置响应内容
  	res.send("hello,express")
	})
//4、监听端口，启动服务
	app.listen(8000,() => {
		console.log('服务器已经启动，8000端口监听中。。。。。。')
	})
```

```javascript
//app/express实例中的属性和方法
<ref *1> [Function: app] {
  _events: [Object: null prototype] { mount: [Function: onmount] },
  _eventsCount: 1,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  defaultConfiguration: [Function: defaultConfiguration],
  lazyrouter: [Function: lazyrouter],
  handle: [Function: handle],
  use: [Function: use],
  route: [Function: route],
  engine: [Function: engine],
  param: [Function: param],
  set: [Function: set],
  path: [Function: path],
  enabled: [Function: enabled],
  disabled: [Function: disabled],
  enable: [Function: enable],
  disable: [Function: disable],
  acl: [Function (anonymous)],
  bind: [Function (anonymous)],
  checkout: [Function (anonymous)],
  connect: [Function (anonymous)],
  copy: [Function (anonymous)],
  delete: [Function (anonymous)],
  get: [Function (anonymous)],
  head: [Function (anonymous)],
  link: [Function (anonymous)],
  lock: [Function (anonymous)],
  'm-search': [Function (anonymous)],
  merge: [Function (anonymous)],
  mkactivity: [Function (anonymous)],
  mkcalendar: [Function (anonymous)],
  mkcol: [Function (anonymous)],
  move: [Function (anonymous)],
  notify: [Function (anonymous)],
  options: [Function (anonymous)],
  patch: [Function (anonymous)],
  post: [Function (anonymous)],
  pri: [Function (anonymous)],
  propfind: [Function (anonymous)],
  proppatch: [Function (anonymous)],
  purge: [Function (anonymous)],
  put: [Function (anonymous)],
  rebind: [Function (anonymous)],
  report: [Function (anonymous)],
  search: [Function (anonymous)],
  source: [Function (anonymous)],
  subscribe: [Function (anonymous)],
  trace: [Function (anonymous)],
  unbind: [Function (anonymous)],
  unlink: [Function (anonymous)],
  unlock: [Function (anonymous)],
  unsubscribe: [Function (anonymous)],
  all: [Function: all],
  del: [Function (anonymous)],
  render: [Function: render],
  listen: [Function: listen],
  request: IncomingMessage { app: [Circular *1] },
  response: ServerResponse { app: [Circular *1] },
  cache: {},
  engines: {},
  settings: {
    'x-powered-by': true,
    etag: 'weak',
    'etag fn': [Function: generateETag],
    env: 'development',
    'query parser': 'extended',
    'query parser fn': [Function: parseExtendedQueryString],
    'subdomain offset': 2,
    'trust proxy': false,
    'trust proxy fn': [Function: trustNone],
    view: [Function: View],
    views: '/Users/dingmiao/Desktop/前端笔记/基础知识/Promise/Promise基本使用/views',
    'jsonp callback name': 'callback'
  },
  locals: [Object: null prototype] {
    settings: {
      'x-powered-by': true,
      etag: 'weak',
      'etag fn': [Function: generateETag],
      env: 'development',
      'query parser': 'extended',
      'query parser fn': [Function: parseExtendedQueryString],
      'subdomain offset': 2,
      'trust proxy': false,
      'trust proxy fn': [Function: trustNone],
      view: [Function: View],
      views: '/Users/dingmiao/Desktop/前端笔记/基础知识/Promise/Promise基本使用/views',
      'jsonp callback name': 'callback'
    }
  },
  mountpath: '/'
}
服务器已经启动http://127.0.0.1，8000端口监听中
[nodemon] restarting due to changes...
[nodemon] starting `node myserver.js`
<ref *1> [Function: app] {
  _events: [Object: null prototype] { mount: [Function: onmount] },
  _eventsCount: 1,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  defaultConfiguration: [Function: defaultConfiguration],
  lazyrouter: [Function: lazyrouter],
  handle: [Function: handle],
  use: [Function: use],
  route: [Function: route],
  engine: [Function: engine],
  param: [Function: param],
  set: [Function: set],
  path: [Function: path],
  enabled: [Function: enabled],
  disabled: [Function: disabled],
  enable: [Function: enable],
  disable: [Function: disable],
  acl: [Function (anonymous)],
  bind: [Function (anonymous)],
  checkout: [Function (anonymous)],
  connect: [Function (anonymous)],
  copy: [Function (anonymous)],
  delete: [Function (anonymous)],
  get: [Function (anonymous)],
  head: [Function (anonymous)],
  link: [Function (anonymous)],
  lock: [Function (anonymous)],
  'm-search': [Function (anonymous)],
  merge: [Function (anonymous)],
  mkactivity: [Function (anonymous)],
  mkcalendar: [Function (anonymous)],
  mkcol: [Function (anonymous)],
  move: [Function (anonymous)],
  notify: [Function (anonymous)],
  options: [Function (anonymous)],
  patch: [Function (anonymous)],
  post: [Function (anonymous)],
  pri: [Function (anonymous)],
  propfind: [Function (anonymous)],
  proppatch: [Function (anonymous)],
  purge: [Function (anonymous)],
  put: [Function (anonymous)],
  rebind: [Function (anonymous)],
  report: [Function (anonymous)],
  search: [Function (anonymous)],
  source: [Function (anonymous)],
  subscribe: [Function (anonymous)],
  trace: [Function (anonymous)],
  unbind: [Function (anonymous)],
  unlink: [Function (anonymous)],
  unlock: [Function (anonymous)],
  unsubscribe: [Function (anonymous)],
  all: [Function: all],
  del: [Function (anonymous)],
  render: [Function: render],
  listen: [Function: listen],
  request: IncomingMessage { app: [Circular *1] },
  response: ServerResponse { app: [Circular *1] },
  cache: {},
  engines: {},
  settings: {
    'x-powered-by': true,
    etag: 'weak',
    'etag fn': [Function: generateETag],
    env: 'development',
    'query parser': 'extended',
    'query parser fn': [Function: parseExtendedQueryString],
    'subdomain offset': 2,
    'trust proxy': false,
    'trust proxy fn': [Function: trustNone],
    view: [Function: View],
    views: '/Users/dingmiao/Desktop/前端笔记/基础知识/Promise/Promise基本使用/views',
    'jsonp callback name': 'callback'
  },
  locals: [Object: null prototype] {
    settings: {
      'x-powered-by': true,
      etag: 'weak',
      'etag fn': [Function: generateETag],
      env: 'development',
      'query parser': 'extended',
      'query parser fn': [Function: parseExtendedQueryString],
      'subdomain offset': 2,
      'trust proxy': false,
      'trust proxy fn': [Function: trustNone],
      view: [Function: View],
      views: '/Users/dingmiao/Desktop/前端笔记/基础知识/Promise/Promise基本使用/views',
      'jsonp callback name': 'callback'
    }
  },
  mountpath: '/'
}
```

![image-20230714135933430](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714135933430.png)





# 跨域请求问题：

![image-20230714140245761](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714140245761.png)

**跨域问题**：https://blog.csdn.net/m0_45253204/article/details/127262401

客户端ip 和 服务器端的ip？？？？

浏览器请求本地web服务器存在跨域问题么？？？？？

https://blog.csdn.net/ppxin/article/details/94717173?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-94717173-blog-82977283.235^v38^pc_relevant_sort_base3&spm=1001.2101.3001.4242.3&utm_relevant_index=7



遇到的问题：

今天在学promise封装Ajax请求的时候遇到了一个问题就是，尚硅谷老师的例子中的服务器地址存在跨域问题，当时我的想法就是使用cros来解决跨域问题，但是后来发现cors方法必须在后端/服务器端设置Http头的信息，所以，我就放弃了；
然后我就查找资料，想只靠修改前端来解决问题，在网上找到解决跨域的主流四种方法：
	**1.使用代理服务器：在vue.config文件中配置proxy**
	**2.使用JSONP：只适用于get请求，不适用于post请求**
	**3.使用CORS：后端配置响应头**
	**4.使用WebSocket：没了解**
然后，我没有细想就选择了第三种方法，因为我记忆里老师在讲那节课的时候，操作不是很复杂（由于我愚蠢的想法，我付出了将近半天的时间）。
由于cors还是对后端操作，所以我决定自己搭建一个简单的服务器（通过express方法，初衷其实也是想回顾一下express的简单用法，因为完全忘记了），即使他返回前端的数据有些low。
搭建一个简单的服务器，已经耗费了我毕生所学（其实就是最最最简单的，我把笔记上的抄了一遍），代码如上。
服务器搭建好了，ajax请求（不是promise封装的，因为还没到那步卡在这了）准备好了《如下》，然后我就开始了我的魔幻之旅，前后端联动。



<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax请求</title>
</head>


    <h2>Promise 封装Ajax请求</h2>        
​    <button class="btn btn-primary" id="btn"> 点击发送AJAX</button>

```javascript
<script>
    // 接口地址：
    // 获取dom
    const btn = document.getElementById("btn")

    // 绑定事件
    btn.addEventListener('click', () => {
        //1.创建xhr对象
        const xhr = new XMLHttpRequest()
        //2.初始化
        console.log(xhr)
        xhr.open('GET', 'http://127.0.0.1:8000/mine')
        //3.发送请求
        xhr.send()
        //4.处理响应的结果
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //判断响应状态码
                if (xhr.status >= 200 && xhr.status < 300 ){
                    //控制台输出响应体
                    console.log(xhr.response)
                }else{
                    //控制台输出响应状态码
                    console.log(xhr.status)
                }
            }
        }
    })
                                                                                                                                                                                                                                                                                                                                                                                                  
</script>
```
我当时以为的是，我将本机当作服务器，url是http://127.0.0.1
然后ajax请求的地址就是这个，不会存在同源的问题，但是我要天真了，结果是反复报错。
…………………………………………
经过我查阅了无数的资料，我终于搞清楚了自己的问题，我一直有一个错误的认知：
当我们以自己的电脑当作服务器的时候，浏览器/客户端的IP === 本机/服务器的IP/请求资源的IP
这个认知非常的错误二者是不等的，浏览器是发起请求的，他有自己的域。

关于跨域请求的问题：
由于浏览器的同源策略，浏览器在请求服务器资源的时候，不能跨域请求。
跨域请求：**当前发起请求的域**与**该请求指向的资源所在的域**不同时的请求。
**当前发起请求的域**：

[file:///Users/dingmiao/Desktop/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Promise/Promise%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/03_Promise%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0-Ajax%E8%AF%B7%E6%B1%82.html](file:///Users/dingmiao/Desktop/%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Promise/Promise%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/03_Promise%E5%AE%9E%E8%B7%B5%E7%BB%83%E4%B9%A0-Ajax%E8%AF%B7%E6%B1%82.html)

**该请求指向的资源所在的域**：http://127.0.0.1:8000/mine
显然这两个域的：协议、端口、主机均不相同，所以属于跨域请求；
解决方法：
服务器中设置请求头，添加下列代码：

```javascript
/// 设置请求头
app.all('*', function (req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header('"Access-Control-Allow-Credentials", true');
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});
```

# 1准备工作

## 函数对象与实例对象

函数对象：将函数作为对象使用时，简称为函数对象

实例对象：new函数产生的对象，简称为对象

**口诀： （）的左边是实例/函数，. 的左边是函数对象**

```javascript
function Fn(){ //   Fn函数

}
const fn = new Fn() //Fn是构造函数， fn是实例对象（简称为对象）
console.log(Fn.prototype) //Fn是函数对象
Fn.call({}) //Fn是函数对象
$('#test') //$表示jQuery, jQuery是函数
$.get('/test') //jQuery函数对象
```

## 什么是回调函数？回调函数的分类？

满足以下三个条件就是回调函数。

1、回调函数是我定义的 例如setTimeout

2、回调函数我不会亲自调用 setTimeout(() =>{},202020)

3、但是最终被执行了

回调函数的分类：

**同步回调函数：**

理解：立即执行，完全执行完了就结束，不会放入回调队列中‘

例子：数组遍历相关回调函数/Promise的excutor函数



**异步回调函数**：

理解：不会立即执行，会放入回调队列中将来执行

例子：定时器回调/ajax回调/Promise的成功｜失败的回调



```javascript
//同步回调函数
const arr = [1,3,3]
arr.forEach(item => { //遍历回调，同步回调函数，不会放入队列，一上来就要执行完
  console.log(item)
})
console.log('forEach()之后')


//异步回调函数
setTimeout(() =>{ //异步回到函数，会放入队列中将来执行
  console.log('timeout callcack()')
},0)

console.log("setTimeout()之后") //先输出’setTimeout()之后‘，再输出“timeout callback()""
```

## JS的error处理

### 错误的类型

1. Error：所有错误的父类型
2. ReferenceError：引用的变量不存在
3. TypeError：数据类型正确的错误
4. RangeError:数据值不在所允许的范围内
5. SyntaxError：语法错误

### 错误处理

捕获错误：try .... catch
抛出错误： throw error

### 错误对象

![image-20230714184609501](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714184609501.png)

message属性：错误相关信息

statck属性：函数调用栈记录信息


```javascript
//1.常见的内置错误
//1）ReferenceError:引用的变量不存在
console.log(e)//ReferenceError:a is not defined
console.log('-----') //没有捕获error,下面的代码就不会执行

//TypeError:数据类型不正确的错误
let b 
console.log(b.xxxx) //TypeError: Cannot read properties of undefined (reading 'xxxx')
b ={}
b.xxx() //TypeError: b.xxx is not a function 因为b.xxx的值是undefined

//RangeError：数据值不在其所允许的范围内
function fn(){
	fn()
}
fn() //RangeError: Maximum call stack size exceeded 回调地狱

//SyntaxError：语法错误
let c ="""" //SyntaxError: Unexpected string (at error.html:11:18)


```

```javascript
//2.处理错误
///捕获错误:try ... catch..
 		try{
        let d
        console.log(d.xxx)
    }catch(error){ //error是一个错误对象，包含两个属性，message 和 statck
        console.log(error.message)
        console.log(error.statck)
    }
    console.log('出错之后')
    
//抛出错误：throw error
function something(){
	if(Date.now()%2 === 1){
		console.log('当前时间为奇数，可以执行任务')
	}else{//如果时间是偶数抛出错误，由调用来处理
		throw new Error('当前时间为偶数无法执行任务')
	}
}
//捕获处理异常
try{
	something()
}catch(error){
	alert(error)
}

```



# 2 Promise 的理解和使用

## 2.1 Promise是什么？

![image-20230714185938121](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714185938121.png)

### 2.1.1 Promise的定义：

1. 抽象表达：

   Promise是js中进行异步编程的新的解决方案（旧的是谁？）

2. 具体表达：

   （1）从语法上来说：Promise是一个构造函数

   （2）从功能上来说：promise对象用来封装一个异步操作并可以获取其结果

### 2.1.2 promise状态的改变![image-20230714190729736](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714190729736.png)

【注】当我们创建一个Promise实例（new Promise()）的时候，此时promise的状态是pending的，也就是“未确定的”；

此外，promise还有其他两种状态就是 resolved和rejected

### 2.1.3 promise 的流程图



### 2.1.4  promise的基本使用

**resolve()函数**的作用是：将promise的状态由 pending 转换成 resolved

**reject()函数**的作用是：将promise 的状态 由 pending 转变成 rejected

**onresolved()函数**的作用是：执行成功时的回调函数，也就是当promise的状态由 pending转变成resolved的时候，执行该函数；

**onrejected()函数**的作用是：执行失败时的回调函数，也就是当promise的状态由pending转变成rejected的时候，执行该函数；

```javascript
<script>
        //1.创建Promise的实例对象,实例对象的参数类型是函数，函数的参数类型（resolve()、reject()）又是函数
        const p = new Promise((resolve, reject) => {//执行器函数
            // 2. 执行异步操作任务
           setTimeout(() => {
            const time = Date.now()
            if(time%2 == 0){
                // 3.1 如果成功了，调用resolve(value)
                resolve("成功的数据，time=" + time)
            }else {
                // 3.2 如果失败了，调用reject(reason)
                reject("失败的数据，time=" + time)
            }
           }, 1000);
        })

        // 3. 调用回调函数
        p.then((value) => {//接收得到的成功的value数据.   onsolved
            console.log("成功的回调" + value)
        },(reason) => { //接收得到的失败的reason数据    onrejected
            console.log('失败的回调' + reason)
        })

    </script>
```

【注意】：

1. resolve(value)和reject(reason)中的参数value、reason都是传入onresolve()和 onreject() 函数中的，value和reason的值可以自定义；
2. p.then()方法有两个参数，且都是箭头函数，箭头函数中的参数为value 和 reason

​		第一个参数：成功时的回调，箭头函数，箭头函数的参数为value；

​		第二个参数：失败时的回调，箭头函数，箭头函数的参数为reason；

​		then方法的返回值是一个 新的promise

3. 传统的回调函数是在函数结束的时候就立即调用，这样会有一定的局限性；

   但是promise.then(成功回调函数，失败回调函数)的优点就是获得 promise中异步函数的结果之后，这个结果一直存在，不会消失，这样promise.then想什么时候调用结果就什么时候调用结果，也就是在promise.then中也可以使用异步，例如定时器。

   ![image-20230714225722803](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714225722803.png)

   ![image-20230714225740559](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714225740559.png)

   ![image-20230714225835986](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714225835986.png)

   

## 2.2 为什么要用Promise？



## 2.3 如何使用Promise？



![image-20230714230514358](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714230514358.png)

什么是API？

语法和前后台交互的接口。

![image-20230714231059424](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714231059424.png)



![image-20230714231136563](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714231136563.png)



### 2.3.1 Promise的API

Promise.prototype.then()方法

Promise.prototype.catch()方法

```javascript
 new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('成功的状态')
                // reject('失败的数据') 成功的数据和失败的数据只能执行一次，因为Promise的状态只能给改变一次
            }, 1000);
        }).then(
            (value) => {console.log("成功的回调 onresolved()1" + value)}
        ).catch(
            (reason) => {console.log("失败的回调 onrejected()2" + reason)}
        )
```

Promise.resolve(value) 产生一个值为value的成功promise

Promise.reject(reject) 产生一个值为reason的失败promise

```javascript
 //产生一个成功值为1的promise对象
const p1 = new Promise((resolve, reject) => {
    resolve(1)
})
// 产生一个成功值为2的promise对象
const p2 = Promise.resolve(2) //Promise的语法糖
// 产生一个失败值为3的promise对象
const p3 = Promise.reject(3)

p1.then(value => {console.log(value)}) //1
p2.then(value => {console.log(value)}) //2
p3.catch(reason => {console.log(reason)}) //3
```

Promise.all(数组) 

数组项是promise对象，如果不是则转换为promise对象

```javascript
const pAll = Promise.all([p1, p2, p3, p4])
pAll.then(
    values => {
        cosnole.log("all onResolved()", values)
    },
    reason => {
        console.log("all onRejected()",reason) //3，最先失败的promise的失败原因，p3的reason
    }                                          //注意不是p3 和 p4 的reason
)


const pAll1 = Promise.all([p1, p2])
pAll1.then(
    values => {
        console.log("all onRsolved", values) //[1, 2] 返回所有成功的promise的值，是个数组
    },
    reason => {
        console.log("all onRejected", reason)
    }
)
```

Promise.race(数组) 

```javascript
const pRace = Promise.race([p1, p2, p3])
pRace.then(
    value => {
        console.log("race onResolved",value) // 1 第一个成功的promise的值
    },
    reason => {
        console.log("race onRejected",reason) // 4 第一个失败的promise的值
    }
)

```



异步编程：fs 文件操作、数据库操作、AJAX、定时器

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714081415949.png" alt="image-20230714081415949" style="zoom:50%;" />

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714081613323.png" alt="image-20230714081613323" style="zoom:50%;" />







![image-20230714081503386](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230714081503386.png)



### 2.3.2  Promise 的几个关键问题

![image-20230715093241371](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715093241371.png)

##### 1.如何改变promise的状态？



##### 2.一个promise指定多个成功/失败回调函数，都会调用么？

##### 3.改变promise状态和指定回调函数谁先谁后？

**【注意】指定回调函数  not======= 调用回调函数**

**【注意】成功或者失败的回调函数一定是异步执行的**



（1）都有可能，正常情况下是**先指定回调再改变状态**，但也可以**先改变状态再指定回调**

（2）如何**先改变状态再指定回调**？

​			case1 在执行器中直接调用resolve()/reject()

​			case2 延迟更长时间才调用then()

  (3) 什么时候才能得到数据？ 

​			 **case1** 如果先指定的回调，那当前状态发生改变时，回调函数就会调用，得到数据。

​			**case2**  如果先改变的状态，那当指定回调函数时，回调函数就会调用，得到数据。

​		总之，得到数据就是调用回调函数的时候。	



4. ##### promise.then()返回的结果状态由什么决定？

   （1） 简单表达：由**then()指定的回调函数**执行的结果决定

   （2）详细表达：

   ​				&1：如果**抛出异常**，新的promise变为rejected，reason为抛出的异常

   ​				&2： 如果返回的是 **非promise的任意值**，新promise变为resolved，value为返回值

   ​				&3：如果返回的是 **另一个新的promise**，此promise的结果就会变成新promise的结果

   **【注】：then()返回的新的promise对象的状态和值只与他的回调函数执行结果（即return 值）有关，与t han()执行的是resolve() 还是 reject()函数无关。**

   

   

**&1：**第一个then()指定的回调函数的执行结果为 throw 2，此时返回一个新的promise，状态为 rejected，值为2；

因此，第二个then()应该调用onRejected()函数，并传入参数为reason = 2，所以结果为 2.

```javascript
new Promise((resolve, reject) => {
    resolve(1)
    // reject(2) 
}).then(
    value => {
        console.log('第一个then的结果onResolved1',value)
      	throw 2
    },
    reason => {
        console.log('第一个then的结果onRejected1' , reason)
    }
).then(
    value => {
        console.log("第二个then的结果onResolved2", value)
    },
    reason => {
        console.log('第二个then的结果onRejected2' + reason)
    }
)
```

执行的结果：

![image-20230715114142115](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715114142115.png)



**&2: **第一个then()指定的回调函数执行的结果 undefined ，因为**回调函数没有返回值**，所以返回的是一个非promise的值，那么新的promise状态为resolved，且值为undefined

因此，第二个then()应该调用onResolved()函数，并且传入的值为undefined，所以结果为undefined。

```javascript
new Promise((resolve, reject) => {
    resolve(1)
    // reject(2) 
}).then(
    value => {
        console.log('第一个then的结果onResolved1',value)
    },
    reason => {
        console.log('第一个then的结果onRejected1' , reason)
    }
).then(
    value => {
        console.log("第二个then的结果onResolved2", value)
    },
    reason => {
        console.log('第二个then的结果onRejected2' + reason)
    }
)
```

输出结果：

![image-20230715112321845](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715112321845.png)

**&2：**第一个then()执行回调函数的结果是 2 ，因为return 2 ，所以返回一个新的promise对象，状态为resolved，值为 2；

因此，第二个then()应该调用onResolved()函数，并传入值为2，所以结果为2 。

```javascript
new Promise((resolve, reject) => {
    resolve(1)
    // reject(2) 
}).then(
    value => {
        console.log('第一个then的结果onResolved1',value)
      	return 2
    },
    reason => {
        console.log('第一个then的结果onRejected1' , reason)
    }
).then(
    value => {
        console.log("第二个then的结果onResolved2", value)
    },
    reason => {
        console.log('第二个then的结果onRejected2' + reason)
    }
)
```

执行的结果为：

![image-20230715113051250](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715113051250.png)



**&3 :**第一个then()执行回调函数的结果是 返回一个**新的状态为resolved，值为3 的新promise对象** ，因为return Promise.resolve(3) 

因此，第二个then()应该调用onResolved()函数，并传入值为3，所以结果为3。

```javascript
new Promise((resolve, reject) => {
    resolve(1)
    // reject(2) 
}).then(
    value => {
        console.log('第一个then的结果onResolved1',value)
      	return Promise.resolve(3)
    },
    reason => {
        console.log('第一个then的结果onRejected1' , reason)
    }
).then(
    value => {
        console.log("第二个then的结果onResolved2", value)
    },
    reason => {
        console.log('第二个then的结果onRejected2' + reason)
    }
)
```



执行结果为：

![image-20230715114432295](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715114432295.png)



**&3:**第一个then()执行回调函数的结果是 返回一个**新的状态为rejected，值为4 的新promise对象** ，因为return Promise.reject(4) 

因此，第二个then()应该调用onRejected()函数，并传入值为4，所以结果为4。

```javascript
new Promise((resolve, reject) => {
    resolve(1)
    // reject(2) 
}).then(
    value => {
        console.log('第一个then的结果onResolved1',value)
      	return Promise.reject(4)
    },
    reason => {
        console.log('第一个then的结果onRejected1' , reason)
    }
).then(
    value => {
        console.log("第二个then的结果onResolved2", value)
    },
    reason => {
        console.log('第二个then的结果onRejected2' + reason)
    }
)
```

执行结果为：

![image-20230715114551632](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715114551632.png)



5. ##### promise如何串联多个操作任务？

​            （1）promise的then()返回一个新的promise，可以改成then()的链式调用；

​            （2）通过then的链式调用串联多个同步/异步任务

```javascript
// 通过promise实现多个任务的草错
// 启动异步任务1
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("执行异步任务1")
        resolve(1) //一个 新的 状态为resolved 值为1 的promise
    }, 1000);
}).then(
    value => {
        console.log('任务1的执行结果：', value)
        // 启动同步任务2
        console.log('执行同步任务2')
        return 2 // then()的执行结果为 一个新的 状态为resolved 值为2 的promise
    }
).then(
    value => {
        console.log('任务2的执行结果：', value)
        return new Promise((resolve, reject) => {
            // 启动任务3
            setTimeout(() => {
                console.log('执行异步任务3')
                reject(3)
            }, 2000);
        })
    }
).then(
    value => {},
    reason => {
        console.log('任务3的执行结果', reason)
    }
)
```

执行结果：

![image-20230715130539687](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715130539687.png)

**注意：异步操作必须包在 new Promise()中；**



##### 6.promise异常穿透？

​	（1）当使用promise的then链式调用时，可以在最后指定失败的回调

​	（2）前面任何操作出了异常，都会传到最后失败的回调中处理。

**【注意】**：实际上，不是通过一步执行到catch的，在此之前的每一步都执行了 reason => {throw reason}，使得 最开始抛出的错误，以及错误值可以往下传递。

```javascript
new Promise((resolve, reject) => {
  resolve(1)
}).then(
  value => {
      console.log('onResolved1()',value)
      throw 1
  }
).then(
  value => {
      console.log('onResolved2()', value)
  },
  //reason => {throw reason}
).then(
  reason => {
      console.log('onResolved3()', reason)
  },
  //reason => {throw reason}
).catch(
  reason => {
      console.log('onRejected4()', reason)
  }
)
```

运行结果：![image-20230715145315958](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715145315958.png)





```javascript
new Promise((resolve, reject) => {
  resolve(3)
  // reject(3)  //在promise中，通过reject()函数，改变promise的状态为rejected
}).then(
  value => {
      console.log('onResolved1()',value)
      throw 1  //在then()的onrejected()函数中，通过抛出错误，产生一个新的 rejected 1 的promise
  }
).then(
  value => {
      console.log('onResolved2()', value)
  },
  // reason => {
  //     throw reason // 在then()的onRejected()函数中，通过抛出reason，产生一个新的 rejected reason的promise
  // }
).then(
  value => {
      console.log("onResolved3()", value)  
  },
  // reason => { //在then()的onRejected()函数中，通过返回Promise.reject(reason)，产生一个新的 rejected reason的promise
  //     return Promise.reject(reason)
  // }

  // 简写为
  // reason => Promise.reject(reason)
).catch(
  reason => {
      console.log('onRejected4()', reason)
  }
)
```



##### 7.中断promise链？

​	（1）当使用promise的then链式调用时，在中间中断，不再调用后面的回调函数。

​	（2）办法：在回调函数中返回一个pending状态的promise对象。（因为then中回调只有在promise的状态改变的时候才会执行）

**【注意】**如何设置一个pending状态的promise，也就是promise的原始状态，不发生改变的状态，即不执行reject和resolve函数的promise；

所以 我们可以通过 return new Promise(() => {})来返回一个pending状态的promise 进而中断调用。

![image-20230715135625584](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715135625584.png)



## 2.4 自定义（手写）Promise

2.4.1 定义整体结构https://github.com/weolwo/promise-learn/blob/master/lib/promise.js



https://segmentfault.com/a/1190000007463101#articleHeader2

![image-20230715161711251](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715161711251.png)

![image-20230715161739555](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715161739555.png)

![image-20230715161812388](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715161812388.png)

![image-20230715161916437](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715161916437.png)

2.4.2 Promise 构造函数的实现

```javascript
/*
自定义Promise函数模块:IIFE
api：
  Promise原型对象的then()方法；
  Promise原型对象上的catch()方法；
  Promise函数对象上的resolve() reject() all() race()方法
*/ 
//函数表达自调用
(function(window){
  /*
  Promise构造函数:
      参数：执行器函数exector、promise的初始状态status、promise的值data、promise的回调函数callbacks
      注意：在构造Promise的时候，构造函数内部的代码是立即执行的；

  executor：执行器函数 同步执行
      参数：resolve()函数 reject()函数

  resolve()函数:
      功能：1-改变promise的状态为resolved,
           2-保存value数据
         3-如果有待执行callback函数，立即异步执行回调函数							onResolved()：回调函数
   		 参数：value

	reject()函数：
    功能：1-改变promise的状态为rejected,
         2-保存reason数据
         3-如果有待执行callback函数，立即异步执行回调函数							onRejected()：回调函数
   		参数：reason

  */ 
 function Promise(executor){
  // 2.初始化promise参数
  this.status = "pending" //给promise对象指定 status属性，初始值为pending
  this.data = undefined   //给promise对象指定一个用于存储结果数据的属性
  this.callbacks = [] //每个元素的结构{onResolved(){}, onRejected(){}}

  // 3.定义resolve()函数
  function resolve(value){
      //由于状态只能改变一次，所以如果当前状态不是pending的话，直接结束
      if(this.status !== "pending"){
          return
      }

      //将状态改为resolved
      this.state = "resolved"
      //保存value数据
      this.data = value
      // 如果当前状态是pending的 且 有待执行callback函数，立即异步执行回调函数onResolved，注意onResolved函数是异步执行的！！！！
      if(this.callbacks.length >0){
         setTimeout(() => {
          this.callbacks.forEach(callbacksObj => {
              callbacksObj.onResolved(value)
          })
      });
      }
  }


  // 3.定义reject()函数
  function reject(reason){
       //由于状态只能改变一次，所以如果当前状态不是pending的话，直接结束
       if(this.status !== "pending"){
          return
      }

      //将状态改为rejected
      this.state = "rejected"
      //保存value数据
      this.data = reason
      // 如果有待执行callback函数，立即异步执行回调函数onRejected，注意onRejected函数是异步执行的！！！！
      if(this.callbacks.length >0){
          setTimeout(() => {
          this.callbacks.forEach(callbacksObj => {
              callbacksObj.onRejected(reason)
          })
      });
      }

  }
  // // 1.执行构造器函数
  // executor(resolve, reject)

  // 4.如果执行器抛出错误，应该调用reject()函数,所以需要捕获执行器抛出的错误，使用try。。catch。。
  try{
      executor(resolve, reject)
  }catch(error){
      reject(error) //如果执行器抛出异常，promise对象变为rejected，
      //传入reject()中的参数就是抛出的错误
  }

 /*
 Promise原型对象的then()：为Promise实例添加状态改变时的回调函数
 参数1：onResolved()函数--成功时的回调函数
 参数2: onRejected()函数--失败时的回调函数
 返回值：一个 全新的promise对象
 */
  Promise.prototype.then = function(onResolved, onRejected){
  
  }

 /*
 Promise原型对象的catch()：为Promise实例对象添加失败时的回调函数
 参数1: onRejected()函数--失败时的回调函数
 返回值：一个 全新的promise对象
 */
 Promise.prototype.catch = function(onRejected){

 }

 /*
 Promise函数对象的resolve()
 参数：value
 返回值： 一个指定value的成功的promise
 */
Promise.resolve = function(value){

}


 /*
 Promise函数对象的reject()
 参数：reason
 返回值：一个指定reason的失败的promise
 */
 Promise.reject = function(reason){

 }


 /*
 Promise函数对象的all()
 参数：一个数组，数组项为promise对象，如果不是promise对象，则转换为promise对象
 返回值：一个新的promise对象，状态由以下两种情况：
      -所有的promise对象都是resolved，新的promise对象才是resolved；
      -只要有一个promise对象是rejected,新的promise对象就是rejected;
 */
  Promise.all = function(promises){

  }



 /*
 Promise函数对象的race()：获取最快的一个promise对象，不论成功或失败
 参数：一个 promise数组
 返回值：一个新的promise对象，由以下两种可能的状态：
      - 但凡有一个promise为resolved，就resolved；
      - 但凡有一个promise为rejected，就rejected
 */
  Promise.race = function(promises){

  }


  // 向外暴露Promise函数
  window.Promise = Promise
}
})(window)
```

2.4.3 promise.then()/catch()的实现

promise.then()函数首先要清楚他的功能、参数、返回值。

功能：执行成功时的回调函数 和失败时的回调函数，并将promise 的状态和值向下传递即返回一个新的promise

参数：

​	参数1：回调函数onResolved()

​	参数2：回调函数onRejected()

返回值： 一个新的promise对象，这个promise的状态分情况讨论：

​	**情况1** 如果回调函数抛出一个错误（throw error），则新的promise的状态为rejected，值为 error。

​	**情况2** 如果回调函数返回值是一个非promise的对象（item instanceof Promise），则新的promise的状态为resolved，值为 回调函数的返回值（return xxxx）即value = xxxx

​	**情况3** 如果回调函数返回是一个promise对象，则新的promise的状态和值与这个对象保持一致。



 	Case1：当前状态如果是pending时候，就不执行任何回调函数，只是将他们存起来(self.callbacks())，并且**返回新的promise，将其值和状态向下传递。？？？？实际上就是对应着“Promise对象当前状态为pending，且有执行的callback函数，立即异步执行回调函数”，因为then返回的是一个promise所以新返回的promise必须与构造函数Promise的功能是一样的，所以then方法中要添加着一项；
 	或者这样理解，传入then中的promise的状态为pending，不发生任何回调函数，为了发生下一个then，形成promise.then().then().then()的链式结构，则需要向下传递一个新的promise，即返回一个新的promise。


![image-20230717080449080](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717080449080.png)

​	Case2：当前状态如果是resolved的，就执行**异步**onResolved()回调函数，并且根据回调函数onResolved()的结果返回一个全新的promise对象。

​			**情况1** 如果回调函数抛出一个错误（throw error），则新的promise的状态为rejected，值为 error。

​			**情况2** 如果回调函数返回值是一个非promise的对象（item instanceof Promise），则新的promise的状态为resolved，值为 回调函数的返回值（return xxxx）即value = xxxx

​			**情况3** 如果回调函数返回是一个promise对象，则新的promise的状态和值与这个对象保持一致。



Case3: 当前状态如果是rejected的，就执行**异步**onRejected()回调函数，并且根据回调函数onRejected()的结果返回一个全新的promise对象

​			**情况1** 如果回调函数抛出一个错误（throw error），则新的promise的状态为rejected，值为 error。

​			**情况2** 如果回调函数返回值是一个非promise的对象（item instanceof Promise），则新的promise的状态为resolved，值为 回调函数的返回值（return xxxx）即value = xxxx

​			**情况3** 如果回调函数返回是一个promise对象，则新的promise的状态和值与这个对象保持一致。

![image-20230715195728212](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715195728212.png)

![image-20230715201502671](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715201502671.png)



![image-20230715200339522](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715200339522.png)

![image-20230715203917665](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230715203917665.png)

2.4.4 Promise.resolve()/reject()的实现

![image-20230717141655678](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717141655678.png)

![image-20230717141818528](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717141818528.png)

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717142317527.png" alt="image-20230717142317527" style="zoom:50%;" />





2.4.5 Promise.all()/ Promise.race()的实现

![image-20230717144638956](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717144638956.png)



2.4.6 Promise.resolveDelay()/rejectDelay()的实现



2.4.7 ES5 function 完整版本



2.4.8 ES6 class完整版本













## 2.5  async  与 await

async function : 异步函数 右边是函数

await ：右边是表达式 一般是一个promise 

![image-20230717210442002](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717210442002.png)

![image-20230717210508011](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717210508011.png)

![image-20230717210815820](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717210815820.png)

![image-20230717211100632](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717211100632.png)



![image-20230717211241803](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717211241803.png)



![image-20230717211302202](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717211302202.png)



![image-20230717211418728](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717211418728.png)



##  2.6 JS异步之宏队列与微队列



![image-20230717211957722](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717211957722.png)



先 将堆中的同步函数执行完毕，然后遇到了 异步函数就放入队列中（宏队列，微队列），然后执行微队列，最后执行宏队列；

![image-20230717213353758](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717213353758.png)





![image-20230717213431254](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717213431254.png)

输出的顺序为：onResolved1 => onResolved2 => callback1 => onResolved3 => callback2



## 2.7  promise相关面试题

面试题1:

![image-20230717213845146](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717213845146.png)

输出结果：3 2 4 1



面试题2 ：

![image-20230717214043118](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717214043118.png)

输出：2 5 3 4 1 



面试题3:

![image-20230717214921052](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717214921052.png)

![image-20230717214935860](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717214935860.png)

输出：3 7 4 1 2 5

6没有输出的原因是，p的状态已经改变过一次了，所以不可以进行反复操作。

面试4 ：



![image-20230717220833903](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717220833903.png)



![image-20230717220846384](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230717220846384.png)

输出：172384**65**0