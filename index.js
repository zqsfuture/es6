// let jspang = '技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// document.write(blog.includes(jspang));
// document.write(blog);
// let binary = 0B010101;
// console.log(binary);
// let aa = 0o666;
// console.log(aa);
// let a = 11 / 4;
// console.log(Number.isFinite(a));//true
// console.log(Number.isFinite('jspang'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// console.log(Number.isNaN(NaN));

// let b = '9.18';
// console.log(Number.parseInt(b));
// console.log(Number.parseFloat(b));

// let c = 123.1;
// console.log(Number.isInteger(c)); //false

// let d = Math.pow(2, 53) - 1;
// console.log(d); //9007199254740991

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(Number.MIN_SAFE_INTEGER);

// let e = Math.pow(2, 53) - 1;
// console.log(Number.isSafeInteger(e));//false

// let  json = {
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length:3
// }
// let arr=Array.from(json);
// console.log(arr)

// let arr1 =Array.of(3,4,5,6);
// console.log(arr1);

// let arr2 =Array.of('技术胖','jspang','大胖逼逼叨');
// console.log(arr2);

// let arr3=[1,2,3,4,5,6,7,8,9];
// console.log(arr3.find(function(value,index,arr){
//     return value > 5;
// }))

// let arr4=[0,1,2,3,4,5,6,7,8,9];
// arr4.fill('jspang',2,5);
// console.log(arr4);

// let arr5=['jspang','技术胖','大胖逼逼叨']
// for (let item of arr5.keys()){
//     console.log(item);
// }

// let arr6=['jspang','技术胖','大胖逼逼叨']
// for (let [index,val] of arr6.entries()){
//     console.log(index+':'+val);
// }

// let arr7=['jspang','技术胖','大胖逼逼叨']
// let list=arr7.entries();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));

// function add1(a,b=1){
//     if(a == 0){
//         throw new Error('This is error')
//     }
//      return a+b;
// }
// console.log(add1(0));

// let add =(a,b=1) => a+b;
// console.log(add(1));

// let json = {
//     a: 'jspang',
//     b: '技术胖'
// }
// function fun({ a, b = 'jspang' }) {
//     console.log(a, b);
// }
// fun(json);

// let arr = ['jspang', '技术胖', '免费教程'];
// function fun(a, b, c) {
//     console.log(a, b, c);
// }
// fun(...arr);
// console.log(...arr)

// let obj = {
//     a: 'jspang',
//     b: '技术胖'
// }
// console.log('a' in obj);  //true

// let arr4 = [, , , , ,];
// console.log(arr4.length);

// let arr1 = [, , , , ,];
// console.log(0 in arr1); //false
// let arr2 = ['jspang', '技术胖'];
// console.log(0 in arr2);  // true

// let arr3 = ['jspang', '技术胖', '前端教程'];
// arr3.forEach((val, index) => console.log(index, val));

// let arr = ['jspang', '技术胖', '前端教程'];
// arr.filter(x => console.log(x));

// let arr1 = ['jspang', '技术胖', '前端教程'];
// arr1.some(x => console.log(x));

// let arr2 = ['jspang', '技术胖', '前端教程'];
// console.log(arr2.map(x => x));

// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.join('|'));

// let arr=['jspang','技术胖','前端教程'];
// console.log(arr.toString());

// let name = "jspang";
// let skill = 'web';
// var obj = { name, skill };
// console.log(obj);  //Object {name: "jspang", skill: "web"}

// let key = 'skill';
// var obj = {
//     [key]: 'web'
// }
// console.log(obj.skill);

// var obj={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));  //3

// var obj1 = { name: 'jspang' };
// var obj2 = { name: 'jspang' };
// console.log(obj1.name === obj2.name);//true

// var obj1 = { name: 'jspang' };
// var obj2 = { name: 'jspang' };
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name, obj2.name)); //true

// console.log(+0 === -0);  //true
// console.log(NaN === NaN); //false
// console.log(Object.is(+0, -0)); //false
// console.log(Object.is(NaN, NaN)); //true

// var a = { a: 'jspang' };
// var b = { b: '技术胖' };
// var c = { c: 'web' };
// let d = Object.assign(a, b, c)
// console.log(d);

// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object;
// var f = Symbol();
// console.log(typeof (f));

// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());

// var jspang = Symbol();
// var obj = {
//     [jspang]: '技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang] = 'web';
// console.log(obj[jspang]);

// var obj = { name: 'jspang', skill: 'web', age: 18 };
// for (let item in obj) {
//     console.log(obj[item]);
// }

// let obj = { name: 'jspang', skill: 'web' };
// let age = Symbol();
// obj[age] = 18;
// for (let item in obj) {
//     console.log(obj[item]);
// }
// console.log(obj[age]);

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// setArr.add('前端职场');
// console.log(setArr);

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// setArr.add('前端职场');
// console.log(setArr); //Set {"jspang", "技术胖", "web", "前端职场"}
// setArr.delete('前端职场');
// console.log(setArr); //Set {"jspang", "技术胖", "web"}

// let setArr = new Set(['jspang','技术胖','web','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// console.log(setArr.has('jspang'));//true

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}
// setArr.clear();
// console.log(setArr);//true

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// for (let item of setArr) {
//     console.log(item);
// }
// console.log(setArr.size);

// let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
// setArr.forEach((value) => console.log(value));

// let weakObj = new WeakSet();
// let obj = { a: 'jspang', b: '技术胖' }
// weakObj.add(obj);
// console.log(weakObj);

// let weakObj = new WeakSet();
// let obj = { a: 'jspang', b: '技术胖' }
// let obj1 = obj;
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

// let json = {
//     name:'jspang',
//     skill:'web'
// }
// console.log(json.name);

// let json = {
//     name: 'jspang',
//     skill: 'web'
// }
// console.log(json.name);
// var map = new Map();
// map.set(json, 'iam');
// console.log(map);
// map.set('jspang', json);
// console.log(map);

// console.log(map.get(json));
// map.delete(json);
// console.log(map)
// console.log(map.size);
// console.log(map.has('jspang'))
// map.clear()
// console.log(map);

// var obj = {
//     add: function (val) {
//         return val + 100;
//     },
//     name: 'I am Jspang'
// };
// console.log(obj.add(100));
// console.log(obj.name);

// var pro = new Proxy({
//     add: function (val) {
//         return val + 100;
//     },
//     name: 'I am Jspang'
// }, {
//         get: function (target, key, property) {
//             console.log('come in Get');
//             console.log(target[key])
//             return target[key];
//         },
//         set: function (target, key, value, receiver) {
//             console.log(`setting ${key} = ${value}`);
//             return target[key] = value;
//         }
//     });

// console.log(pro.name);
// pro.name = '技术胖';
// console.log(pro.name);

// var target = function () {
//     return 'I am JSPang';
// };
// var handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// var pro = new Proxy(target, handler);
// console.log(pro());

// let state = 1;
// function step1(resolve, reject) {
//     console.log('1.开始-洗菜做饭');
//     if (state == 1) {
//         resolve('洗菜做饭--完成');
//     } else {
//         reject('洗菜做饭--出错');
//     }
// }

// function step2(resolve, reject) {
//     console.log('2.开始-坐下来吃饭');
//     if (state == 1) {
//         resolve('坐下来吃饭--完成');
//     } else {
//         reject('坐下来吃饭--出错');
//     }
// }

// function step3(resolve, reject) {
//     console.log('3.开始-收拾桌子洗完');
//     if (state == 1) {
//         resolve('收拾桌子洗完--完成');
//     } else {
//         reject('收拾桌子洗完--出错');
//     }
// }

// new Promise(step1).then(function (val) {
//     console.log(val);
//     return new Promise(step2);
// }).then(function (val) {
//     console.log(val);
//     return new Promise(step3);
// }).then(function (val) {
//     console.log(val);
//     return val;
// });

// class coder {
//     name(val) {
//         console.log(val);
//     }
// }

// class Coder {
//     name(val) {
//         console.log(val);
//     }
// }
// let jspang = new Coder;
// jspang.name('jspang');

// class Coder{
//     name(val){
//         // console.log(val);
//         return val;
//     }
//     skill(val){
//         console.log(this.name('jspang')+':'+'Skill:'+val);
//     }
// }
// let jspang= new Coder;
// // jspang.name('jspang');
// jspang.skill('web');

class Coder {
    name(val) {
        console.log(val);
        return val;
    }
    skill(val) {
        console.log(this.name('jspang') + ':' + 'Skill:' + val);
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
}
let jspang = new Coder(1, 2);
console.log(jspang.add());

class htmler extends Coder {
}
let pang = new htmler;
pang.name('技术胖');