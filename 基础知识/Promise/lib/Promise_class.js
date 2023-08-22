/*
自定义Promise函数模块:IIFE
api：
    Promise原型对象的then()方法；
    Promise原型对象上的catch()方法；
    Promise函数对象上的resolve() reject() all() race()方法
*/
//函数表达自调用
(function (window) {
    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'

    class Promise {
        // 构造函数
        constructor(executor) {
            // 将self保存起来，防止指向window
            const self = this

            // 2.初始化promise参数
            self.status = PENDING //给promise对象指定 status属性，初始值为pending
            self.data = "undefined"   //给promise对象指定一个用于存储结果数据的属性
            self.callbacks = [] //每个元素的结构{onResolved(){}, onRejected(){}}

            // 3.定义resolve()函数
            function resolve(value) {
                //由于状态只能改变一次，所以如果当前状态不是pending的话，直接结束
                if (self.status !== PENDING) {
                    return
                }

                //将状态改为resolved
                self.status = RESOLVED
                //保存value数据
                self.data = value
                // 如果有待执行callback函数，立即异步执行回调函数onResolved，注意onResolved函数是异步执行的！！！！
                if (self.callbacks.length > 0) {
                    setTimeout(() => {
                        self.callbacks.forEach(callbackObj => {
                            callbackObj.onResolved(value)
                        })
                    })
                }
            }


            // 3.定义reject()函数
            function reject(reason) {
                //由于状态只能改变一次，所以如果当前状态不是pending的话，直接结束
                if (self.status !== PENDING) {
                    return
                }

                //将状态改为rejected
                self.status = REJECTED
                //保存value数据
                self.data = reason
                // 如果有待执行callback函数，立即异步执行回调函数onRejected，注意onRejected函数是异步执行的！！！！
                if (self.callbacks.length > 0) {
                    setTimeout(() => {
                        self.callbacks.forEach(callbackObj => {
                            callbackObj.onRejected(reason)
                        })
                    });
                }

            }


            // 4.如果执行器抛出错误，应该调用reject()函数,所以需要捕获执行器抛出的错误，使用try。。catch。。
            try {
                executor(resolve, reject)
            } catch (e) {
                reject(e) //如果执行器抛出异常，promise对象变为rejected，
                //传入reject()中的参数就是抛出的错误
            }
        }

        // 给实例对象添加方法：Promise.prototype.then()
        then = function (onResolved, onRejected) {

            // 指定回调函数的默认值（必须是函数）
            onResolved = typeof onResolved === 'function' ? onResolved : value => value //向后传递成功的value
            // 指定默认的失败回调（实现错误/ 异常穿透的关键点）
            onRejected = typeof onRejected == 'function' ? onRejected : reason => {
                throw reason
            } //向后传递失败的reason
    
            const self = this
    
            // 返回一个新的promise对象
            return new Promise((resolve, reject) => {
                /*
                handle函数功能：
                    1、调用指定回调函数处理
                    2、根据回调函数的结果返回一个新的promise
    
                */
                function handle(callback) {
                    // 1.如果回调函数onResolved或者onRjected()抛出异常，return的promise就会失败，reason就是error；
                    // 2.如果回调函数返回不是promise，return的promise就会成功，value就是返回的值
                    // 3.如果回调函数返回是promise，return的promise结果就是这个promise的结果。
                    try {
                        const result = callback(self.data)
                        // 3.如果回调函数返回是promise，return的promise结果就是这个promise的结果。
                        if (result instanceof Promise) {
                            result.then(
                                value => resolve(value), //当result成功时，让 result 的 promise也成功
                                reason => reject(reason) //当result失败时，让 result 的 promise也失败
                            )
                            // 简写形式： result.then(resolve, reject)
                        } else {
                            // 2.如果回调函数返回不是promise，return的promise就会成功，value就是返回的值
                            resolve(result)
                        }
    
                    } catch (e) {
                        // 1.如果回调函数抛出异常，return的promise就会失败，reason就是error；
                        reject(e)
                    }
                }
                if (self.status === PENDING) {
                    //如果当前状态为pending，就不执行回调，而是将回调函数存在的callbacks容器中
                    // 假设当前状态还是pending状态，将回调函数保存起来
                    self.callbacks.push({
                        // 问题：虽然存储了回调函数，但是没有改变返回的新的promise的状态，如果不改变的话，后面的then否会失效
                        // onResolved,
                        // onRejected
                        // 解决方法：自定义一个函数，在这个函数中调用回调函数，且改变promise的状态
                        onResolved(value) {
                            handle(onResolved)
                        },
                        onRejected(reason) {
                            handle(onRejected)
                        }
                    })
                } else if (self.status === RESOLVED) {
                    setTimeout(() => {
                        handle(onResolved)
                    })
                } else { //'rejected'
                    setTimeout(() => {
                        handle(onRejected)
                    })
                }
            })
    
    
        }
        // 给实例对象添加方法：Promise.prototype.catch()
        catch = function (onRejected) {
            return this.then(undefined, onRejected)//undeifined的作用时当成功的时候，将成功的值传递，利用undefined是一个非promise
        }

        // 给类对象添加方法<静态方法 不能被实例继承 只能通过Promise.访问>：Promise.resolve(), Promise.reject(), Promise.all(), Promise.race()
       static resolve = function (value) {
            // 返回一个新的promise，状态根据传入的值决定
            return new Promise((resolve, reject) => {
                if (value instanceof Promise) {
                    // 如果 value 是promise对象，则新的promise与这个传入的promise状态和值一摸一样===
                    value.then(resolve, reject)
                } else {
                    // 如果value是非promise对象，则是一个成功的 值为value的promise对象
                    resolve(value)
                }
            })
        }

        static reject = function (reason) {
            // 返回一个失败的promise
            return new Promise((resolve, reject) => {
                reject(reason)
            })
        }

        static all = function (promises) {
            //用来保存所有成功的value的数组
            const values = new Array(promises.length)
            // const values = []
            // 用来保护成功promise的数量
            let resolvedCount = 0
    
    
            // 返回一个新的promise
            return new Promise((resolve, reject) => {
                // 遍历promises获取每个promise的结果
                promises.forEach((p, index) => {
                    Promise.resolve(p).then(
                        value => {
                            resolvedCount++
                            // p成功，将成功的value保存values,保证顺序一致
                            values[index] = value
                            // 如果全部成功了，将return的promise改变成功
                            if (resolvedCount === promises.length) {
                                resolve(values)
                            }
                        },
                        reason => {  //只要一个失败了，return的promise就失败
                            reject(reason)
                        }
                    )
                })
            })
        }

        static race = function (promises) {
            // 返回一个promise
            return new Promise((resolve, reject) => {
                promises.forEach(p => {
                    Promise.resolve(p).then(
                        value => { //一旦有成功了，将return变成成功，只有第一次调用才有效果 所以不用循环
                            resolve(value)
                        },
                        reason => { //一旦有失败，将return变成失败
                            reject(reason)
                        })
                })
            })
    
        }

        static resolveDelay = function (value, time) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // value 是promise
                    if (value instanceof Promise) {
                        value.then(resolve, reject)
                    } else { //value不是promise => promise变为成功，数据时value
                        resolve(value)
                    }
                }, time);
    
            })
        }
    
        static rejectDelay = function (reason, time) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(reason)
                }, time);
            })
    
        }
    

    }

    // 向外暴露Promise函数
    window.Promise = Promise

})(window)