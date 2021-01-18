// var a="nima";
// console.log(a);

// let [a,b="dzm"]=["邓志敏",undefined];
// console.log(a+b);

//精确赋值
// let {dzm,zz}={dzm:'邓志敏',zz:'周卓'};
// console.log(dzm+zz);

//数组赋值，未赋值为null
// let [a,b,c,d]=[1,2,3];
// console.log(a);
// console.log(d);

//先定义后赋值
// let dzm;
// ({dzm}={dzm:'dzmshinibab'});
// console.log(dzm);


//赋值覆盖
// let [a,b="dzm"]=["邓志敏",null];
// console.log(a+b);


// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);

// }
// taiji(1,2,3);


// let arr1=['www','taiji','com'];

// // let arr2=arr1;
// let arr2=[...arr1];
// arr2.push('dzm');
// console.log(arr1);
// console.log(arr2);

// function taiji(...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// 第一个元素不输出
// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// function taiji(first,...arg){
//     //相当于foreach
//     for(let val of arg){
//         console.log(val);
//         console.log(arg);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// let dzm="邓志敏";
// let dzm1="邓志敏1";
// let blog=dzm+"是你爸爸";
// let blog1=`<br>真不错</br>${dzm}`;//其中`不是引号，是横版数字1的左边英符号
// document.write(blog);
// document.write(blog1);

// let dzm="邓志敏";
// let blog="住在山里真不错";
// document.write(dzm.indexOf(blog));
// document.write(dzm.includes(blog));

// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite("a"));
// console.log(Number.isFinite(NaN));//特俗非数字
// console.log(Number.isFinite(undefined));

//ES5
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN("nan"));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+"2"));
// console.log(".........................")
// //ES6
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN("nan"));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+"2"));

// let a=918.6;
// console.log(Number.isInteger(a));
// console.log(Number.parseFloat(a));
// console.log(Number.parseInt(a));

// //整数取值范围
// let a=Math.pow(2,53);
// console.log(a);
// console.log(a-1);
// console.log(Math.pow(3,53));
// console.log(Number.parseInt(Math.pow(3,53)));

//json转数组
// let json={
//     "0":"dzm",
//     "1":"男",
//     "2":"20",
//     length:3
// }
// let arr=Array.from(json);
// console.log(arr);

// let arr=Array.of(0,1,3,2);
// console.log(arr);

// let arr=[0,1,2,3,4,5,6];
// var v=arr.find((value,index,arr)=>{
//     return index>4;
// })
// console.log(v);

// //findIndex(val)找到val值所在下标
// let arr=[0,1,2,3,4,5,6];
// var i=arr.findIndex((value)=>value>4);
// console.log(i);

// //填充
// let arr=["dzm","zhouzhuo","debba"];
// arr.fill("web",1,3);
// console.log(arr);

//过滤
// var arr1=[1,3,4,5,6,3,7,4];
// console.log(arr1.filter((value,index,arr)=>arr.indexOf(value)===index));
// console.log(arr1.indexOf(3));

// arr1.forEach((val,index)=>console.log(index,val));
// arr1.filter(arr1.forEach((val,index)=>console.log(index,val)));
//迭代器输出内容 index 下标，val下标对应的值
// let arr=['周卓','我','儿子'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries切分数组
// let arr=['周卓','我','儿子'];
// let list=arr.entries();
// console.log(list);
// console.log(list.next().value);

// console.log(list.next().value);

// console.log(list.next().value);

// function taiji(a,b=1){
//     return a+b;
// }
// console.log(taiji(1));//输出2
// console.log(taiji(1,2));//输出3
// console.log(taiji(1,2,3));//输出3

//严谨模式 不可以定义默认值
// function taiji(a,b){
//     'use strict'
//     if(a==0){
//         throw new Error('this is error!');
//     }
//     return a+b;
// }
// console.log(taiji(1,2));

// var add=(a,b=1)=>a+b;
// console.log(add(1));

// var add=(a,b=1)=>{
//     console.log('dzm');
//     return a+b;
// }
// console.log(add(1));

//对象函数解构
// let json={
//     a:"dzm",
//     b:undefined
// }
// function taiji({a,b='web'}){
//     console.log(a,b);
// }
// taiji(json);

//数组函数解构
// let arr=['dzm','邓志敏','taiji'];
// function taiji(a,b,c,d){
//     console.log(a,b,c,d);
// }
// taiji(...arr);

// //in的用法
// let obj={
//     a:'dzm',
//     b:'邓志敏'
// }
// console.log('c' in obj);

//数组判断
// let arr=[,,,];
// let arr1=[1,2,3,4];
// console.log(arr.length);//3
// console.log(0 in arr);//false 0指的是数组下标位置
// console.log(0 in arr1);

//数组遍历foreach
// let arr=[1,2,3,4,5];
// arr.forEach((val,index)=>console.log(index,val));

//filter遍历
// let arr=[1,2,3,4,5];
// arr.filter(value=>console.log(value));

//数组遍历map替换
// let arr=['dzm','邓志敏','taiji'];
// console.log(arr.map(x=>'web'));

//数组换成字符串
// let arr=['dzm','邓志敏','taiji'];
// console.log(arr.toString());
// console.log(arr.join('|'));


//对象赋值
// let name ='dzm';
// let skill='web';
// var obj={name,skill};
// console.log(obj);

//对象key值构建
// let key='skill';
// var obj={
//     [key]:'web',
// }
// console.log(obj.skill)

//自定义对象方法
// let obj={
//     add:function(a,b) {
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

//对象比较
// let obj1={name:'dzm'};
// let obj2={name:'dzm'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj2.name,obj1.name));
//===同值相等  is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign 合并
// let a={a:'dzm'};
// let b={b:'邓志敏'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

//symbol ES6新增
// let a=new String;
// let b=new Number;
// let c=new Boolean;
// let d=new Array;
// let e=new Object;
// let f=Symbol();
// console.log(typeof(f));

// //symbol打印
// let dzm=Symbol('dzm');
// console.log(dzm);
// console.log(dzm.toString());

// let dzm=Symbol();
// let obj={
//     [dzm]:"dzm"
// }
// console.log(obj[dzm]);
// obj[dzm]='邓志敏';
// console.log(obj[dzm]);

// let obj={name:'dzm',skill:'周卓的爹',age:20};
// for(let item in obj){
//     console.log(obj[item]);
// }

//symbol保护的值循环输时不会输出
// let obj={name:'dzm',skill:'周卓的爹'};
// let age =Symbol();
// obj[age]=20;
// for(let item in obj){
//     console.log(obj[item]);
// }
// let a=obj[age];
// console.log(a);
// console.log(obj[age]);

// //set的声明 有去除重复的值的效果
// let setArr=new Set(['邓志敏','邓志敏','周卓的爹','taiji']);
// setArr.add('大爹');
// console.log(setArr);
// setArr.delete('taiji');
// console.log(setArr);
// //清空clear（）
// console.log(setArr.has('邓志敏'));
// for (const iterator of setArr) {
//     console.log(iterator);
// }
// setArr.forEach((val)=>console.log(val));

//不可以有重复值
// let weakObj=new WeakSet();
// let obj={a:'dzm',b:'邓志敏0'};
// let obj1=obj;
// let obj2={a:'dzm',b:'邓志敏2'};
// weakObj.add(obj);
// weakObj.add(obj1);
// weakObj.add(obj2)
// console.log(weakObj);
// console.log(obj1===obj);
// console.log(obj2===obj);

// const s=new Set();
// [2,3,5,6,2,2,8].forEach((val)=>s.add(val)
// );
// for (const iterator of s) {
//     console.log(iterator);
// }

//map数据类型 map的键和值可以是许多类型
// let json={
//     name:'dzm',
//     skill:'周卓的爹'
// };
// console.log(json.name);
// var map=new Map();
// // map.set(json,'I am');
// map.set('I am',json);
// console.log(map);
// console.log(map.get('I am'));
// console.log(map.size);
// //map.has(key)而不可以是map.has(value)
// console.log(map.has(json));
// map.set('I am','json');
// console.log(map.get('I am'))

//转换
// const map =new Map()
// .set(true,7)
// .set({foo:3},['abc']);
// const arr=[...map]
// console.log(arr);

//Proxy预处理
//对象
// let obj={
//     add:function(val){
//         return val+1 
//     },
//     name:'dzm'
// }
// console.log(obj.add(12));
// console.log(obj.name);

// const employee={
//     firstName:'邓',
//     lastName:'志敏'
// };
// // console.group('employee');
// console.log(employee.firstName);

// let handler={
//     get:function(target,fieldName){
//         if(fieldName==='fullName'){
//             return `${target.firstName}${target.lastName}`; 
//         }
//         return fieldName in target?
//         target[fieldName]:
//         `No such property as ${fieldName}`;
//     }
// };
// let p=new Proxy(employee,handler);
// console.group('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.fullName);
// console.log(p.org);

// const vaildator={
//     set:function(obj,prop,value){
//         if(prop==='age'){
//             if(!Number.isInteger(value)){
//                 throw new Error("Age is not a integer");
//             }
//             if(value<0){
//                 throw new Error('不正常的年龄！');
//             }
//         }
//         if(prop==='lastName'){
//             obj[prop]=value;
//         }
//     }
// };

// let pr=new Proxy(employee,vaildator);
// pr.lastName='dzm';
// console.log(employee.lastName);
// pr.age=-8;

// var pro=new Proxy({
//     add:function(val){
//         return val+10;
//     },
//     name:'dzm'
// },{
//     get:function(target,key,property){
//         console.log('get方法！');
//         return target[key];
//     },
//     set:function(target,key,value,recriver){
//         console.log(`setting ${key}=${value}`);
//         return target[key]=value+'12';
//     }
// });
// console.log(pro.add(2));
// console.log(pro.name);
// pro.name='邓志敏';
// console.log(pro.name);

// //apply的使用
// let target=function(val){
//     console.log('dzm');
//     return val+=100;
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro=new Proxy(target,handler);
// console.log(pro(5));

// var target = function () { return 'I am the target'; };
// var handler = {
//   apply: function () {
//     return 'I am the proxy';
//   }
// };

// var p = new Proxy(target, handler);
// console.log(p())

//promiss对象 resolved完成态 rejected失败态 pending未完成态
// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // // // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// // //
// function step3(resolve,reject){
//     // state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// // // //
// new Promise(step1).then(function(val){
//         console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });
 
// //类的声明
// class Coder{
//     name(val){
//         console.log(val);
//         return val;
//     }
//     skill(val){
//         console.log(this.name('邓志敏')+';'+'skill-'+val);
//     }
//     constructor(a,b){
//         this.name=a;
//         this.skill=b;
//     }

//     add(val){
//         return val++;
//     }
// }
// let dzm=new Coder('邓志敏','web');
// //无构造方法时的赋值
// // dzm.name('邓志敏');
// // dzm.skill('web');
// console.log(dzm.skill);

