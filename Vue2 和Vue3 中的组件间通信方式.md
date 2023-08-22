# Vue2 和Vue3 中的组件间通信方式

【注意】组件中的数据有三种形式：data、props、computed

##### 1、父组件 向 子组件传值，通过props，不论是在vue2 还是 在vue3 中都用下述方法：

父组件中：子组件标签 `<Child v-bind:info="childMessage" />`绑定要传入子组件的值；

子组件中：通过props配置项接收传递过来的值 ，【注意保证info的名字是一致的】

![image-20230722223621571](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722223621571.png)

##### 2、子组件向父组件传值vue2中

**子组件中**：通过给按钮绑定 **事件**`<button @click="toParent">点击发送数据给父组件</button>` 利用 `this.$emit("messageToParent", this.sex)`，将数据传输出去；

```vue
<template>
  <div class="child">
    <h2>我是子组件</h2>
    <button @click="toParent">点击发送数据给父组件</button>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      sex: "man",
    };
  },
  methods:{
    toParent(){
        this.$emit("messageToParent", this.sex)
    }
  }
};
</script>

<style>
.child {
  width: 100px;
  height: 100px;
  background-color:pink;
}
</style>
```

**父组件中**：在子组件标签中，通过v-on/@，**绑定与子组件相同的事件，然后接收子组件传来的值，保证子组件和父组件绑定的变量“messageToParent”是相同的**，其中父组件中的自定义函数show（e），e是从子组件传递过来的值。

```vue
<template>
  <div class="app">
    <h2>我是父组件：{{ name }}</h2>
    <h3>我是子组件传递过来的值：{{message}}</h3>
    <Child @messageToParent="show"/>
  </div>
  
</template>

<script>
import Child from "./components/Child.vue"
export default {
  name: "App",
  data() {
    return {
      name: "张三",
      message:""
    };
  },
  components:{Child},
  methods:{
    show(e){
      this.message = e
    }
  }
};
</script>

<style>
.app {
  width: 300px;
  height: 300px;
  background-color: aqua;
}
</style>


```

![image-20230723000702986](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230723000702986.png)

##### 3、子组件向父组件传值vue3中



![image-20230723003952838](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230723003952838.png)



父组件：父组件的子组件标签中`<Child @子组件中发送来的数据名  =  自定义事件组件名/>`

```vue
父组件中
<template>
  <div class="app">
    <h2>
      我是父组件，以下是我从子组件接收的消息:name:{{ message.name }} age:{{message.age}}
    </h2>
    <Child @messageFromChild="showMessageFromChild" />
  </div>
</template>

<script>
import { reactive } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: { Child },
  setup() {
    const message = reactive({
      name: "",
      age: "",
    });
    function showMessageFromChild(e) {
      // console.log(e) //e是子组件传递过来的值 e= Proxy{name:"王三", age;"18"}
      message.name = e.name;
      message.age = e.age;
      
    }

    return { message, showMessageFromChild };
  },
};
</script>

<style>
.app {
  width: 400px;
  height: 400px;
  background-color: gray;
}
</style>
```

子组件：子组件给按钮绑定自定义事件，通过触发事件来发送数据`。事件内context.emit("messageFromChild", messageSend)`

```vue
子组件：
<template>
  <div class="son">
    <h2>我是子组件,我要发送以下信息给父组件{{messageSend}}</h2>
    <button @click="send">发送信息给父组件</button>
  </div>
</template>

<script>
import {reactive} from "vue"
export default {
  name: "Child",
  
  setup(props, context){
    const messageSend = reactive({
      name:"王三",
      age:"18"
    })

    function send(){
      // console.log(context) //context内包含的方法： attrs， emit， expose， slots
      context.emit("messageFromChild", messageSend)
    }

    return {messageSend,send}
  }

  
}
</script>

<style>
.son {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>
```



##### 4、vue2中父组件调用子组件的方法、数据

方法1 `this.$children[0].子组件的方法名/数据名` 【注意指明第几个子组件】

```vue
父组件中：
<template>
  <div class="app">
    <h2>我是父组件：{{ name }}</h2>
    <!-- <h3>我是子组件传递过来的值：{{this.$children.messageToParent}}</h3> -->
    <button @click="show"> 点击显示子组件传过来的值</button>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  data() {
    return {
      name: "张三",
      // message:""
    };
  },
  components: { Child },
  methods: {
    show() {
      console.log(this.$children[0].messageToParent); //使用$children时，必须要指明第几个子组件
    },
  },
};
</script>

<style>
.app {
  width: 300px;
  height: 300px;
  background-color: aqua;
}
</style>


```

方法2 `this.$refs.子组件名称.子组件的方法/数据` `this.$refs["childName1"] 或者this.$refs.childName1`

```vue
<template>
  <div class="app">
    <h2>我是父组件：{{ name }}</h2>
    <!-- <h3>我是子组件传递过来的值：{{this.$children.messageToParent}}</h3> -->
    <button @click="show"> 点击显示子组件传过来的值</button>
    <Child ref="childName1"/> //子组件标签要用ref来标志
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  data() {
    return {
      name: "张三",
      // message:""
    };
  },
  components: { Child },
  methods: {
    show() {
      // console.log(this.$refs.childName1.messageToParent); //使用$refs时，必须要在子组件标签中绑定ref
      console.log(this.$refs["childName1"].messageToParent //子组件的数据
      // this.$refs.childName1.toParent()
      this.$children[0].toParent() //子组件的方法
   },
  },
};
</script>

<style>
.app {
  width: 300px;
  height: 300px;
  background-color: aqua;
}
</style>

```



##### 5、vue2子组件调用父组件的方法、数据

`this.$parent.父组件的方法名/数据`

```vue
<template>
  <div class="child">
    <h2 >我是子组件</h2>
    <button @click="show">点击从父组件接收数据</button>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      sex: "man",
      messageToParent:'我是子组件中的数据'
    };
  },
  methods:{
    show(){
        console.log(this.$parent.message) //调用父组件的值
        this.$parent.show()//调用父组件的方法
    }
  }
};
</script>

<style>
.child {
  width: 100px;
  height: 100px;
  background-color:pink;
}
</style>
```



#####6、 vue2中任意子组件间，事件总线 $emit, $on

方法的核心：通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件 和 监听事件，可以实现 任意组件间的通信。

缺点：

实现方式：

```
定义一个空的vue实例
var Event = new Vue()
发送数据方:
Event.$emit(事件名，数据)
接收数据方:
Event.$on(事件名，data => {}) 

【注意】$on 监听了自定义事件 data-a, data-b，因为有时不确定何时会触发事件，一般会在mounted 或 created钩子中来监听。
```

![image-20230723104710778](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230723104710778.png)

1. 安装全局事件总线

   因为只有组件实例身上才有$emit 和 $on，所以必须找到实例对象作为中转站，但是，单文件编程，不能直接new出来一个实例对象（类似于博客中`const Event = new Vue()`）所以考虑找到一个代替品，我们知道找到了vm，我们知道vc身上有的，vm 身上一定有，所以，我们在Vue原型上添加一个属性$bus，让他代表vm 即 `Vue.prototype .$bus = this`  ，由于该代码在new Vue中，所以this就表示vm，这样的话 我们就可以**在全局使用$bus了，而$bus身上还有$emit 和 $ on方法。**

**在main.js中**

![image-20230723110859858](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230723110859858.png)

2. 使用全局总线

- 发送数据

  ```vue
  this.$bus.$emit('xxx', 数据)
  ```

  

- 接收数据

  ```vue
  mounted(){ // data表示接收到的数据
  	this.$bus.$on('xxx', data => {
  	
  	})
  }
  ```

3. 最好在beforeDestory钩子中，用$off**去解绑当前组件中所用到的事件**

   ```vue
   beforeDestory(){
   this.$bus.$off('xxx')
   }
   ```

   

4. 例子

   ```vue
   子组件A
   <template>
     <div class="a">
       <h2 >我是子组件a</h2>
       <button @click="send">点击发送数据给兄弟组件b</button>
     </div>
   </template>
   
   <script>
   
   export default {
     name: "childa",
     data() {
       return {
         name:"张三"
       };
     },
     methods:{
       send(){
        this.$bus.$emit('data-a', this.name)
       }
     }
   };
   </script>
   
   <style>
   .a {
     width: 200px;
     height:200px;
     background-color:pink;
   }
   </style>
   ```

   ```vue
   子组件B
   <template>
     <div class="a">
       <h2>我是子组件a</h2>
       <button @click="send">点击发送数据给兄弟组件b</button>
     </div>
   </template>
   
   <script>
   export default {
     name: "childa",
     data() {
       return {
         name: "张三",
       };
     },
     methods: {
       send() {
         this.$bus.$emit("data-a", this.name);
       },
     },
   };
   </script>
   
   <style>
   .a {
     width: 200px;
     height: 200px;
     background-color: pink;
   }
   </style>
   
   ```

   ```vue
   c组
   <template>
     <div class="c">
       <h2 >我是子组件c</h2>
       <h3>接收子组件A 和B的值：{{namec}} {{sexc}}</h3>
     </div>
   </template>
   
   <script>
   export default {
     name: "childc",
     data() {
       return {
         age:19,
         namec:'',
         sexc:''
       };
     },
     mounted(){
       this.$bus.$on("data-b",data => {
         console.log(data) //['张三', 'man']
         this.namec = data[0]
         this.sexc = data[1]
       })
     }
   };
   </script>
   
   <style>
   .c {
     width: 200px;
     height: 200px;
     background-color:greenyellow;
   }
   </style>
   ```

   

   ![image-20230723120658715](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230723120658715.png)

##### 7、vue2 中使用$attrs/$listeners实现祖孙通信，可以是父子组件之间的通信，也可以是祖孙之间的通信

正常情况下，父组件通过v-bind绑定一个数据传递给子组件，子组件通过props接收到就可以在子组件html中使用了。但是，如果父组件v-bind传递给子组件，子组件没有props接收，这时候父组件传递过来的数据就会被挂载到这个子组件自带的对象$attrs上面。

`$attrs与$listeners是两个对象，$attrs里存放的是父组件中绑定的非props属性，$listeners里存放的是父组件中绑定的非原生事件。`



如果是祖--->孙之间的通信的话，就在中间的父组件上使用$attrs来将**祖宗组件**传递给**父组件**，但是，父组件没有使用props接收的数据/事件，然后在**父组件中的孙组件标签**上绑定，`<sun v-bind='$attrs' ></sun>，**孙组件中 使用props就能接收到$attrs中的数据了**



**孙子 向 祖 先通信 ：**

孙组件：按钮绑定事件触发，

```vue
<button @click="send"></button>
methods:{
	send(){
			this.$emit("dataToFather",data)
	}
}
```

父组件：

```
<sun v-on="$listeners"></sun>
```

祖孙组件：

```
<app v-on:'dataToFather'></app>
```



##### 8、vuex实现组件间通信：





##### 9、vue3中使用provide() 和inject()实现祖先组件向后代组件通信，

![image-20230722154438499](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230722154438499.png)

祖先组件：

```
setup(){
provide('xxx', car)
}
```

后代组件（ps:至少隔一代）：

```
setup(){
const 变量名 = inject('xxx')
}
```



##### 10、 vue3中实现任意组件间的通信



![image-20230724141411186](/Users/dingmiao/Library/Application Support/typora-user-images/image-20230724141411186.png)

