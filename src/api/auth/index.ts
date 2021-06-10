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

/**
 * @description 用户
 * @date 10/06/2021
 * @export
 * @interface IUserinfo
 */
export interface IUserinfo{
    token: string,
    userid: string
}

/**
 * @description 注册验证码相关
 * @date 10/06/2021
 * @export
 * @interface ICaptcha
 */
export interface ICaptcha{
    captcha: string,
    id: string
}

export async function _login(user: ILogin){
    return api({
        method: "POST",
        url: "/auth/login",
        data: user
    })
}

/**
 * @description 注册请求
 * @date 10/06/2021
 * @export
 * @param {ILogin} user
 * @return {*}
 */
export async function _regist(user: ILogin){
    return api({
        method: "POST",
        url: "/auth/regist",
        data: user
    })
}


/**
 * @description 获取注册验证码
 * @date 10/06/2021
 * @export
 * @return {*}
 */
export function _captcha(id?:string){
    console.log(id)
    id = id ? id : '-1';
    console.log(id)
    return api({
        method: "GET",
        url: "/auth/captcha/" + id
    })
}

export function _verify(captcha: ICaptcha){
    return api({
        method: "POST",
        url: "/auth/captcha",
        data: captcha
    })
}