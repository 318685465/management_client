import api from '../index';

/**
 * @description 用户登录表
 * @date 09/06/2021
 * @interface Ilogin
 */
interface ILogin{
    phone: string,
    password:string
}

export async function _login(user: ILogin){
    return api({
        method: "POST",
        url: "/auth/login",
        data: user
    })
}