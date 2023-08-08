import {configureStore} from "@reduxjs/toolkit"
import productsSlice from "./productsSlice"

const store = configureStore({
    reducer:{
        product: productsSlice,
    }
})

export default store