 导出
```JavaScript
// common.js
export var person = 'ZhangShuang'
export var cat = 'Hachi'

export function weclome(){
	console.log('Weclome!')
}
```
导入
```JavaScript
import {person, weclome} from './common.js';
```