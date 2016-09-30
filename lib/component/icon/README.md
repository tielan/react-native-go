//自定义  IconFont 使用方法<br/>
1.npm install react-native-go --save <br/>
2.<br/>
  2.1 Android 在 assets/font/ 文件夹中添加自定义 ttf文件<br/>
  2.2 iOS 在info文件中添加ttf文件<br/>
3.在代码中添加<br/>
<br/>
###代码

import { Iconfont } from 'react-native-go';
<Iconfont   
    fontFamily={'iconfont'}
    icon='&#xe603;'
    iconColor='#fff'
    iconSize ={22}
    />
