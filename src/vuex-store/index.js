import { createStore } from "vuex";

import figureModule from './figure/index'

const store = createStore({
    modules:{
        figure: figureModule
    },
});

export default store;