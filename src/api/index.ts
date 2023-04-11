import request from "../requset"

interface getSalesPriceDataType {
    fromk:string
}
export const $getSalesPrice = (data:getSalesPriceDataType) => { //价格接口，版权信息接口
    return request({
        url:`/api/v1/getSalesPrice`,///getSalesPrice
        method:'get',
        params:data
    })
}

// interface addOrderParamsType {
//     // [addOrderParams:string]:any
//     order_type:number | string
//     birth_state:number
//     pub_birth_date:string
//     name:string
//     xname:string
//     fromk:string | null
//     yl:number
//     pageUrl:string
//     sex:string | number
//     openid:string| null
//     mch_id:string| null
//     kf:string| null
//     parent_order_id:string| null
// }
// export const $addOrder = (params:addOrderParamsType) => { //首页提交用户信息
//     return request({
//         url:'/api/v1/addOrder',
//         method:'post',
//         data:params
//     })
// }

// interface checkWordDataType {
//     word:string
//     from:string | null
// }
// export const $checkWord = (data:checkWordDataType) => {//姓名检测(是否是国家领导人名字)
//     return request({
//         url:'/api/v1/checkWord',
//         method:'get',
//         params: data,
//     })
// }
// export const $constPayBtnSwitch = () => {//控制隐藏或显示微信支付或支付宝支付的按钮
//     return request({
//         url:'/api/v1/const/pay_btn_switch',
//         method:'get'
//     })
// }


// type orderDataType = string

// export const $order = (data:orderDataType) => {//控制隐藏或显示微信支付或支付宝支付的按钮
//     return request({
//         url:`/api/v1/order/${data}`,
//         method:'get'
//     })
// }
