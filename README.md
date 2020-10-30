### className前缀拼接



别注重包名，跟内涵没有半点关系！！！



内涵是字符串拼接，但是用途非常广泛！



### 功能

解决`React`中`css`全局污染的问题。调用`jollychic()`返回的仍旧是一个函数，但是`jollychic`把传入的参数缓存起来，用于拼接后续传入的字符串。



### 参数

```javascript
import jollychic from 'jollychic';

const prefix = 'className前缀';
const symbol = '拼接className的连接符，默认为空';
const jc  = jollychic(prefix, symbol);

const suffix = 'className后缀';
const className = jc(suffix);
```



### Example

#### 1. 带连接符

```javascript
const jc = jollychic('container', '-');
const aa = jc('title'); // container-title
const bb = jc('content'); // container-content
const cc = jc('content-left'); // container-content-left
const dd = jc('content', 'left'); // container-content-left
const ee = jc('content', 'left', 'first'); // container-content-left-first
```

#### 2. 不带连接符

```javascript
const jc = jollychic('container');
const aa = jc('content'); // containercontent
const bb = jc('-content'); // container-content
const cc = jc('-content-left'); // container-content-left
const dd = jc('-content', '-left'); // container-content-left
const ee = jc('-content', '-left-first'); // container-content-left-first
```

#### 3. 项目实战

```javascript
import React, {Component} from 'react';
import jollychic from 'jollychic';

class Home extends Component {
	render() {
		const jc = jollychic('home-container', '-')

		return (
			<div className={jc('content')}>
				<div className={jc('content-title')}>title</div>
				<div className={jc('content-content')}>content</div>
			</div>
		);
	}
}

export default Home;
```

#### 4. 结合`classnames`使用

```javascript
import React, {Component} from 'react';
import jollychic from 'jollychic';
import classnames from 'classnames';

class Home extends Component {
	render() {
		const jc = jollychic('home-container', '-')
    const contentCls = classnames(
    	jc('content'),
      'animate': true,
      'handsome': true,
      'money': false
    )

		return (
			<div className={contentCls}>
				<div className={jc('content-title')}>title</div>
				<div className={jc('content-content')}>content</div>
			</div>
		);
	}
}

export default Home;
```

