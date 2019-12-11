// function bar(x = y, y = 2) {
//     return [x, y]
// }

// bar()  // 报错，y在没赋值之前使用，隐藏的 暂时性死区

// ---------------------------------------------------------------------------------------------------------------------

// function f() {
//     console.log('I am outside!')
// }

// ;(function() {
//     if (false) {
//         function f() {
//             console.log('I am inside!')
//         }
//     }
//     console.log(f) // undefined
//     f()
// })()

// // 在 ES5 环境下会打印 'I am inside!' 因为函数声明会整体提升
// // 但是在 ES6 环境下会报错，这是因为 在 ES6 环境中 函数声明类似于var，即会提升到全局作用域或函数作用域的头部，同时，函数声明还会提升到所在的块级作用域的头部
// // 简单点来说 就是在 ES6 环境中，只要是通过函数声明创建的都会先提升到全局作用域或函数作用域声明一次，所以上面的代码就类似于

// function f() {
//     console.log('I am outside!')
// }

// ;(function() {
//     var f
//     if (false) {
//         function f() {
//             console.log('I am inside!')
//         }
//     }
//     f()
// })()

// ---------------------------------------------------------------------------------------------------------------------

// let { prop: x } = undefined
// let { prop: y } = null

// 这段代码报错的原因：解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错

// ---------------------------------------------------------------------------------------------------------------------

// 如何交换下面两个变量

// let a = 'abc'
// let b = 'xyz'

// // 第一种方式：[a, b] = [b, a]
// // 第二种方式： a = [b, b=a][0]
// // 第三种方式： a = {a: b, b:a}     b = a.b     a = a.a
// // 第四种方式:  a = [a, b]      b = a[0]    a = a[1]

// ---------------------------------------------------------------------------------------------------------------------

// // 写法一
// function m1({ x = 0, y = 0 } = {}) {
//     return [x, y]
// }

// // 写法二
// function m2({ x, y } = { x: 0, y: 0 }) {
//     return [x, y]
// }

// // 上面两种写法都对函数的参数设定了默认值
// // 区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值

// // 测试方式：

// // 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({ z: 3 }) // [undefined, undefined]

// ---------------------------------------------------------------------------------------------------------------------

// (function (a, b, c = 5) { }.length  // 2

// (function (a, ...b) { }).length) // 1

// // 函数参数的默认值以及 reset 参数 不计算在函数的 length 当中

// ---------------------------------------------------------------------------------------------------------------------

// var x = 1
// function foo(
//     x,
//     y = function() {
//         x = 2
//     }
// ) {
//     var x = 3
//     console.log(y)
//     y()
//     console.log(x)
// }

// foo() // 3
// console.log(x) // 1

// // 作用域问题，函数参数和函数内部是两个不同的作用域
// // 函数执行的时候，先执行函数参数，然后再执行函数体，
// // 由于它们是不同的作用域，而且在函数体中重新用 var 声明了变量 x ，所以后面打印的结果就是 3
// // 如果 不使用 var 重新声明变量 x，那么将会打印 2

// ---------------------------------------------------------------------------------------------------------------------

// const cat = {
//     lives: 9,
//     jumps: () => {
//         this.lives--
//     }
// }
// cat.jump()

// // 报错 箭头函数没有 this
// // 由于对象不能构成单独的作用域，多以箭头函数中的 this 是指向全局的

// // 新增与 indexof 类似的方法
// let b = 'abcd'

// b.includes('a') // true
// b.startsWith('a') // true
// b.endsWith('c') // false
// b.endsWith('d') // true

// // 字符串重复方法

// let a = 'tadpole'
// a.repeat(2) // tadpoletadpole

// // isNaN 和 Number.isNaN 的区别

// isNaN(123)  // false
// Number.isNaN(123) // false

// isNaN(NaN) // true
// Number.isNaN(NaN) //true

// isNaN('abc')  // true
// Number.isNaN('abc') // false

// let arr = [1, 5, 8, 'ac', 1, 'ab', NaN, 5, 'ac', NaN]

// // 传统方式
// let newArr = []
// for(let item of arr) {
//     if(!newArr.includes(item)) {
//         newArr.push(item)
//     }
// }

// console.log(newArr)

const map = new Map([
    ['a', 'one'],
    ['b', 'two'],
    ['c', 'three']
])

let obj = Object.fromEntries(map)

console.log(obj)
