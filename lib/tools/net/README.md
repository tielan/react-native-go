//Fetch 封装  FetchManger 使用方法<br/>
1.npm install react-native-go --save <br/>
2.使用示例 1<br/>
<br/>
###代码
```html

import { FetchManger } from 'react-native-go';

/**
初始化Fetch 

    baseUrl: '',//服务器地址
    Dbug: true,//是否开启调试模式
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
        'Content-Type': 'text/html;charset=GBK',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
    },
    credentials: 'same-origin',//是否保存cookies
    expiry: 5 * 60, //缓存默认时间

*/
 FetchManger.initConfig({baseUrl:'http://www.google.com.cn/api/'});

/**
使用
*/
 FetchManger.getUri('101010100.html').then((responseData) => {
      this.setState({ message: JSON.stringify(responseData)})
    }).catch((error) => {
      this.setState({ message:error })
    })

```

3.使用示例 2<br/>
<br/>
###代码
```html

import { FetchManger } from 'react-native-go';

/**
直接使用
*/
 FetchManger.get('101010100.html').then((responseData) => {
      this.setState({ message: JSON.stringify(responseData)})
    }).catch((error) => {
      this.setState({ message:error })
    })

```