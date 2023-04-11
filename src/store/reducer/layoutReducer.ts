import { createSlice } from "@reduxjs/toolkit"
// import { $getSalesPrice } from "../../api"

interface initialStateType {
    priceObject:{[priceObject:string]:any}
}

const initialState:initialStateType = {
    priceObject:{}
}

const layoutReducer = createSlice({
    name:'layoutReducer',
    initialState,
    reducers:{
        requestDataGoToState(state, action){
            state.priceObject = action.payload
            // console.log('获取价格',action.payload)
        }
    }
    
})

export const { requestDataGoToState } = layoutReducer.actions


// //异步数据请求

// export const getPriceMethod = (payload:string):any => {
//     // console.log('获取参数',payload)
//     return ( dispatch:any, getState:any) => {
//         $getSalesPrice({fromk:payload}).then((res)=> {
//             let res_ = res as {[reaType:string]:any}
//             dispatch(requestDataGoToState(res_.data.data[0]))
//                 // console.log('价格',res_.data.data[0])
//         })
//     }
// }

export default layoutReducer.reducer