### className拼接

别注重包名，跟内涵没有半点关系！！！

内涵是字符串拼接，用途非常广泛！

#### Example

```javascript
import React, {Component} from 'react';
import jollychic from 'jollychic';

class Home extends Component {
	render() {
		const jc = jollychic('home-container')

		return (
			<div className={jc('-content')}>
				<div className={jc('-content-title')}>title</div>
				<div className={jc('-content-content')}>content</div>
			</div>
		);
	}
}

export default Home;
```

以上用法可以解决`React`中`css`全局污染的问题。`jollychic`返回的仍旧是一个函数，但是`jollychic`把传入的`home-container`缓存起来，用于拼接后续传入的字符串；

```javascript
const jc = jollychic('container');
const aa = jc('-title'); // container-title
const bb = jc('-content'); // container-content
const cc = jc('-content-left'); // container-content-left
```

