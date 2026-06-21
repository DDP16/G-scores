import { configureStore } from "@reduxjs/toolkit";

import scoresReducer from "./app/modules/scoresService";

export default configureStore({
    reducer: {
        scores: scoresReducer,
    },
});