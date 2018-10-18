/**
 * react-native-go 框架入口文件
 */

/**
 * 导出 Iconfont 相关
 */
import Iconfont from './component/icon/Iconfont';
export { Iconfont }; 
/**
 * 网络相关
 */
import * as FetchManger from './tools/net/FetchManger';
import LoginInfo from './tools/storage/LoginInfo';
import Storage from './tools/storage/Storage';

export {  FetchManger,LoginInfo,Storage }; 

/**
 * 
 */
import LineView from './views/LineView';

/**
 * 
 */
import Toast from './views/toast/Toast';
import Spinner from './views/Spinner'
import LoadingView from './views/LoadingView'

export { LineView,Toast,Spinner,LoadingView}; 
