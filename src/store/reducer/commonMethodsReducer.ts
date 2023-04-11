import { createSlice } from '@reduxjs/toolkit'
// import { $addOrder,$checkWord,$order } from "../../api"
// import { Toast } from 'antd-mobile'


interface initialStateType {
    projectLogoUrl:string
    from:string
    userInfo:null | {}
    num: number
}
const initialState:initialStateType ={
    projectLogoUrl:window.location.pathname.split('/')[1],
    from:"",
    userInfo:null,
    num:10
}

const commonMethodsReducer = createSlice({
    name:'commonMethodsReducer',
    initialState,
    reducers:{
        getUrlParameter(state, action){
            state.from = action.payload.search.from
        },
        setStateDataMethod(state, action){
            state.userInfo = action.payload
        },
        minus(state){
            state.num--
        }
    }
})



export const { getUrlParameter,setStateDataMethod, minus } = commonMethodsReducer.actions


// 数据请求
// interface addOrderParamsType {
//     order_type:number | string
//     birth_state:number
//     pub_birth_date:string
//     name:string
//     xname:string
//     fromk:string| null
//     yl:number
//     pageUrl:string
//     sex:string | number
//     openid:string| null
//     mch_id:string| null
//     kf:string| null
//     parent_order_id:string| null
// }
// export const userSubmitInfoMethods = (payload:addOrderParamsType):any => {
//     return ( dispatch:any, getState:any) => {
//         let checkWordData_ = {
//             word:payload.name,
//             from:payload.fromk
//         }
//         $checkWord(checkWordData_).then(( res ) => {
//             let res_ = res as {[res:string]:any}
//             console.log('res',res_.data.data.pass)
//             if ( res_.data.data.pass ) {
//                 $addOrder(payload).then(( addOrderRes )=> {
//                     let addOrderResDataCopy = addOrderRes as {[addOrderRes:string]:any}
//                     if( addOrderResDataCopy.status === 200 ) {
//                         // console.log('提交信息接口$addOrder:',addOrderResDataCopy)
//                         window.location.href=`/${getState().commonMethodsReducer.projectLogoUrl}/payment/${addOrderResDataCopy.data.data.id}/10?from=${addOrderResDataCopy.data.data.fromk}`;
//                     }
//                 }).catch(( err ) => {
//                     Toast.show({
//                         content: err.response.data.message,
//                     })
//                     // console.log('addOrderErr',err.response.data.message)
//                 })
//             }else{
//                 Toast.show({
//                     content: '无法为您提供测算服务，还请修改。',
//                 })
//             }
//         })
//     }
// }


// export const getUserInfoMethods = ( payload:string ):any => {
//     return ( dispatch:any, getState:any ) => {
//         $order(payload).then(( resolve ) => {
//             let res = resolve as {[resolve:string]:any}
//             if (getState().commonMethodsReducer.userInfo === null) {
//                 dispatch(setStateDataMethod(res.data.data))
//             }
//         })

//     }
// }


export default commonMethodsReducer.reducer