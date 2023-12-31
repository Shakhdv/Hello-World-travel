import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import excursion from "../features/excursionSlice";
import tours from "../features/toursSlice";
import categories from "../features/categoriesSlice";
import guide from "../features/guideSlice";
import order from "../features/ordersSlice";
import { justReducer } from "../features/justReducer";
import comments from "../features/CommentsSlice";

export const store = configureStore({
  reducer: {
    application,
    excursion,
    tours,
    guide,
    categories,
    order,
    justReducer,
    comments
    
  },
});

export default store;
