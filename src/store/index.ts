import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from "./reducer/layoutReducer"
import commonMethodsReducer from "./reducer/commonMethodsReducer"

export default configureStore({
    reducer:{
        layoutReducer,
        commonMethodsReducer
    }
})