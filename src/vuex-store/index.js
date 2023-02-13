import { createStore } from "vuex";

import figureModule from './figure/index'
import authModule from './auth/index'

const store = createStore({
    modules:{
        figure: figureModule,
        auth: authModule
    },
});

export default store;