import Storage from './Storage'

const userinfoKey = 'userinfoKey';

class LoginInfo {

    static UserInfo = {}; 
    //返回用户基本信息
    static getUserInfo() {
        return UserInfo;
    }
    //设置用户信息
    static setUserInfo(_userInfo) {
        UserInfo = _userInfo;
        Storage.save(userinfoKey, _userInfo);

    }
    //清除用户信息
    static loginOut() {
        UserInfo = {};
        Storage.save(userinfoKey, {});
    }

    static loadUserInfo() {
        Storage.get(userinfoKey).then((item) => {
            if (item) {
                UserInfo = item;
            }
        });
    }

}

export default LoginInfo;