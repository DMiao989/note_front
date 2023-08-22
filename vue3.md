# vue3

![image-20230720224255323](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720224255323.png)

![image-20230720224314975](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720224314975.png)

![image-20230720224415688](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720224415688.png)

![image-20230720224515219](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720224515219.png)

##### 使用vite创建一个工程

![image-20230720224719903](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720224719903.png)

![image-20230720224959117](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720224959117.png)



![image-20230720225035242](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230720225035242.png)

##### 139 分析工程结构

![image-20230721230040650](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721230040650.png)

app里的内容

![image-20230721230316753](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721230316753.png)



##### 关闭语法检查

![image-20230721230240814](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721230240814.png)

![image-20230721230428688](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721230428688.png)

 https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/857bc46713f54e6abeb76c1e6dbe90e6~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp 

https://juejin.cn/post/7081517906026037284#comment vue实现用户登录验证+权限验证+动态路由

vue3中加载动态菜单https://juejin.cn/post/7122294942302470174#comment

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter数组filter用法



https://blog.csdn.net/weixin_44972008/article/details/113772348   Ajax请求



组件中通信的六种方法：https://juejin.cn/post/6844903845642911752

生命周期：https://juejin.cn/post/7024074527420203044





##### 141 vue3 中的setup配置项

![image-20230721232302644](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721232302644.png)



![image-20230721232628866](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721232628866.png)





![image-20230721233437301](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721233437301.png)

![image-20230721233406797](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721233406797.png)

##### 142 vue中的ref函数

区别于vue2中的ref  

ref此时是一个函数需要引入 import {ref} from 'vu e'



![image-20230721234543836](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721234543836.png)



![image-20230721234710974](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721234710974.png)

![image-20230721234842592](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721234842592.png)

![image-20230721234906256](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721234906256.png)





![image-20230721235020808](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721235020808.png)

当传入ref()中的参数是对象时 ：

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721235524598.png" alt="image-20230721235524598" style="zoom:25%;" />

![image-20230721235824175](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230721235824175.png)

![image-20230722000337396](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722000337396.png)

![image-20230722000814028](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722000814028.png)

![image-20230722000822660](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722000822660.png)





   ![image-20230722000856714](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722000856714.png)

![image-20230722001418432](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722001418432.png)

![image-20230722001440845](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722001440845.png) 

![image-20230722002144409](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722002144409.png)









​     ![image-20230722002612579](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722002612579.png)



![image-20230722100202971](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722100202971.png)

![image-20230722100735748](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722100735748.png)





![image-20230722100758977](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722100758977.png)

![image-20230722100912531](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722100912531.png)





![image-20230722100940636](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722100940636.png)

![image-20230722101145830](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722101145830.png)





vue2中的父子传值，父组件绑定，子组件接收props，如果接收了直接在模版字符串中使用即可，

但是如果父组件传值了，但是子组件没有用props接收，那么在模版里可以通过$attrite接收，相当于他是在捡漏；

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722101519060.png" alt="image-20230722101519060" style="zoom:25%;" />

![image-20230722101544726](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722101544726.png)

或者使用插槽slot，在子组件中占一个位置，然后通过父组件给他传值。

![image-20230722102410424](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722102410424.png)

![image-20230722102449630](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722102449630.png)

![image-20230722102533114](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722102533114.png)

![image-20230722104019263](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722104019263.png)

计算属性：

![image-20230722105415931](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722105415931.png)



##### 151vue3中的监视

 vue2中的监视配置项

![image-20230722105724255](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722105724255.png)

vue3中的监视

watch是一个对象

![image-20230722110309349](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722110309349.png)



![image-20230722110154922](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722110154922.png)

vue3的bug《面试聊一聊》

![image-20230722110839735](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722110839735.png)

![image-20230722111531049](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722111531049.png)

![image-20230722111705488](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722111705488.png)

![image-20230722111723187](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722111723187.png)

【注意】:如果监视的是基本类型数据的话，第一个参数就不要是xxxx.value，这样会导致监视的是数据，而不是整体。

【注意】：**当person是ref定义的数据《非基本类型数据》**，所以监视的时候本质上是监视ref中的value，而value本质上又是一个proxy，代理，这才是reactive定义的数据，所以监视的时候可以有两种方法：

1、监视的是person.value 

2、开启深度监视（因为深度监视对reactive定义的数据没用，但是对ref定义的数据有用，所以可以开启深度监视，此时第一个参数不用写成person.value了）

![image-20230722112559185](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722112559185.png)

![image-20230722112618894](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722112618894.png)

##### 154 watchEffect函数

![image-20230722113445688](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722113445688.png)

##### 155生命周期

![image-20230722120044004](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722120044004.png)

![image-20230722120054928](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722120054928.png)





![image-20230722120111770](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722120111770.png)





 ![image-20230722120732682](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722120732682.png)







![image-20230722120740353](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722120740353.png)

![image-20230722121032275](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722121032275.png)

![image-20230722121038538](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722121038538.png)

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722121105267.png" alt="image-20230722121105267" />

##### 156 自定义hook

![image-20230722121428139](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722121428139.png)

##### 157 toRef函数

![image-20230722122608403](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722122608403.png)



##### 158其他组合式API

shallowRef

shallowReactive

![image-20230722132643547](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722132643547.png)

readonly

shallowReadonly

 ![image-20230722133318571](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722133318571.png)

应用场景，当你使用别人的数据的时候，如果不想修改别人的数据就用readonly复制一份，然后使用；

如果有一天不小心修改了，那控制台也会提示拦截。

![image-20230722133608870](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722133608870.png)

toRaw

markRaw

![image-20230722133846172](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722133846172.png)

应用场景：将响应式数据转换为原数据，即非响应式对象

![image-20230722134658340](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722134658340.png)

 customRef

![image-20230722135012272](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722135012272.png)





<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722135946809.png" alt="image-20230722135946809" style="zoom:25%;" />

![image-20230722140052662](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722140052662.png)





![image-20230722140132113](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722140132113.png)

![image-20230722140348300](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722140348300.png)

![image-20230722140404748](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722140404748.png)



#### 162 vue3的祖孙组件间的通信 provide 和 inject

![image-20230722140815345](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722140815345.png)

![image-20230722154438499](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722154438499.png)

![image-20230722160101944](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722160101944.png)

```vue
<template>
  <div class="app">
    <h3>我是App组件（祖）, {{name}}---{{price}}</h3>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child";
import {reactive, toRefs, provide} from 'vue'
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: "40w",
    });
    provide("car", car)
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
```

```vue
<template>
  <div class="son">
    <h3>我是Son组件（孙）, {{car.name}} --- {{car.price}}</h3>
  </div>
</template>

<script>
import {inject} from "vue"
export default {
  name:'Son',
  setup(){
    const car = inject('car')
    
    return {car}
  }
}
</script>

<style>
.son{
  background-color:pink;
  padding:10px
}
</style>
```

![image-20230722160313874](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722160313874.png)

# 组合式API的优势

<img src="/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722160609401.png" alt="image-20230722160609401" style="zoom:50%;" />

![image-20230722160630760](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722160630760.png)

![image-20230722161017779](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722161017779.png)

hook相关

![image-20230722161049586](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722161049586.png)



![image-20230722161125244](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722161125244.png)



##### 165新的内置组件

![image-20230722161300712](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722161300712.png)





![image-20230722161942462](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722161942462.png)

Suspense

![image-20230722162251806](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722162251806.png)

![image-20230722162902196](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722162902196.png)

【注意】 之前提出 setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模版看不到return对象中的属性。（后期也可以返回一个Promise实例，但是需要Suspense和异步组件的配合)



![image-20230722163421706](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722163421706.png)

##### 最后 vue3中的其他改变

![image-20230722163700645](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722163700645.png)



![image-20230722163713201](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722163713201.png)

![image-20230722163913600](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722163913600.png)



![image-20230722163950981](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722163950981.png)



![image-20230722164147149](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722164147149.png)





![image-20230722164319736](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722164319736.png)

![image-20230804001217032](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230804001217032.png)
