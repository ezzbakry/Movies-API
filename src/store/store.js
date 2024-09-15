import { configureStore } from "@reduxjs/toolkit";
import loadreducer from './slices/loader'

const store=configureStore({
    reducer:{
        load:loadreducer
    }

})

export default store;