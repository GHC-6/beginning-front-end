#五种基本数据类型：

##Undefined、Null、Boolean、Number和String

### 小结
- Undefined  未被定义
- Null 对应 python None ,java Null 未指向任何对象

- 其中 Number 包含
- 正负 整数 ，浮点数
- NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
- Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity    最大值  Number.MAX_VALUE  超过 最大值 isFinite(Number.MAX_VALUE+0.1)
console.log(Number.NEGATIVE_INFINITY); //-infinity
console.log(Number.POSITIVE_INFINITY); //infinity

###特别注意：
- 另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
NaN === NaN; // false
- 唯一能判断NaN的方法是通过isNaN()函数：
isNaN(NaN); // true
这个可类比 数据库中的 三值逻辑，SQL 中判断字段为Null 也只能用 isNull 函数

#引用数据类型有:

- Array 数组  
```javascript
'use strict';
var arr = [[1, 2, 3], [400, 500, 600], '-'];
var x = arr.splice(1,1).pop().splice(1,1)
console.log(x); // x应该为500

Array提供了一种顺序存储一组元素的功能，并可以按索引来读写。

练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：

'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];

first = arr.sort().slice(0,arr.length-1).join(',');
last = arr.sort()[arr.length-1];
console.log(`欢迎${first}和${last}同学!`);

var arr = [1,2,3,4,5,6,7,8,9];

arr.map(e=>e*e); // java 里是 -> ，python 是 lambda 

利用for循环计算1 * 2 * 3 * ... * 10的结果：

var i;
arr = [1]
for(i=2;i<=10;i++){
     arr = arr.concat(i);
}

x = arr.reduce((x,y)=>x*y);

if (x === 3628800) {
    console.log('1 x 2 x 3 x ... x 10 = ' + x);
}
else {
    console.log('计算错误');
}
```
- Map

  ```javascript
  var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
  > m.forEach(function(value,key,map){
  ... console.log(`key=${key},value= ${value},map = ${map}`)})
  key=1,value= x,map = [object Map]
  key=2,value= y,map = [object Map]
  key=3,value= z,map = [object Map]
  ```

  

- Regex 正则表达式

  ```javascript
  利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：
  
  用户名必须是3-10位英文字母或数字；
  
  口令必须是6-20位；
  
  两次输入口令必须一致。
  
  <!-- HTML结构 -->
  <form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
      <p id="test-error" style="color:red"></p>
      <p>
          用户名: <input type="text" id="username" name="username">
      </p>
      <p>
          口令: <input type="password" id="password" name="password">
      </p>
      <p>
          重复口令: <input type="password" id="password-2">
      </p>
      <p>
          <button type="submit">提交</button> <button type="reset">重置</button>
      </p>
  </form>
  
  
  'use strict';
  var checkRegisterForm = function () {
  
      // TODO:
      var userName = document.getElementById('username').value;
      var userNameRegEx = /[a-zA-Z\d]{3,10}/;
      var password = document.getElementById('password').value;
      var passwordRegEx = /.{6,20}/;
      var password_2 = document.getElementById('password-2').value;
      var errorInfo = document.getElementById('test-error');
      if(!userNameRegEx.test(userName)){
          errorInfo.innerText = '用户名必须是3-10位英文字母或数字';
          return false;
      }else if(!passwordRegEx.test(password)){
          errorInfo.innerText = '口令必须是6-20位';
          return false;
      }else if(!(password === password_2)){
          errorInfo.innerText = '两次输入口令必须一致';
          return false;
      }
      return true;
  }
  
  
  
   // TODO:
      var userName =  document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var rePassword = document.getElementById('password-2').value;
      var testError = document.getElementById('test-error');
  
      console.log(userName);
      console.log(password);
      console.log(rePassword);
      var userNameRegEx = /^\w{3,10}$/
      var passwordRegEx = /^.{6,20}$/
      console.log(userNameRegEx.test(userName) && passwordRegEx.test(password) && password === rePassword)
      var flag = true;
      if(!userNameRegEx.test(userName)){
          testError.innerText = '用户名必须是3-10位英文字母或数字';
          flag = false;
      }else if(!passwordRegEx.test(password)){
          testError.innerText = '口令必须是6-20位';
          flag = false;
      }else if(password !== rePassword){
          testError.innerText = '两次输入口令必须一致。';
          flag = false;
      }
      return  flag;
  }
  
  
  // 测试:
  ;(function () {
      window.testFormHandler = checkRegisterForm;
      var form = document.getElementById('test-register');
      if (form.dispatchEvent) {
          var event = new Event('submit', {
              bubbles: true,
              cancelable: true
            });
          form.dispatchEvent(event);
      } else {
          form.fireEvent('onsubmit');
      }
  })();
  ```

  

- BOM和DOM对象

  ![img](https://images2015.cnblogs.com/blog/997049/201608/997049-20160830235030324-1067760196.jpg) 

  ![img](https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=0fe685f8ec1190ef15f69a8daf72f673/4afbfbedab64034ff2239713a4c379310a551d3c.jpg) 

- 自定义对象 如 Person 等
```javascript
> xiaoming = { name: '小明',
...   birth: 1990,
...   school: 'No.1 Middle School',
...   height: 1.7,
...   weight: 65,
...   score: null }
{ name: '小明',
  birth: 1990,
  school: 'No.1 Middle School',
  height: 1.7,
  weight: 65,
  score: null }
> for(var key in xiaoming){
... if(xiaoming.hasOwnProperty(key)){
..... console.log(key);}
... }
name
birth
school
height
weight
score
```





## 对比 python 学习 javascript

###对应 python  type 函数:
- 要检测一个值是不是基本数据类型，typeof操作符是最佳工具。它可以检测一个变量是字符串、数值、布尔值还是undefined。如果一个变量是对象或null，则typeof操作符会返回object。

###对应 python isinstance 函数:
- 但是在检测引用类型的值时，typeof用处就不那么大了，通常我们并不想知道某个值是对象，而想知道它是什么类型的对象，此时可以使用instanceof操作符，如果变量是给定引用类型的实例，那么instanceof操作符就会返回true。例如：

- 所有引用类型的值都是Object的实例。因此，在检测一个引用类型的值或Object构造函数时，instanceof都会返回true。当用instanceof操作符检测一个基本类型的值时，都会返回false，因为基本类型不是对象。