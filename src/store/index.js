import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productSlices from "./products/productSlices";
import categorieSlices from "./categories/categorieSlices";
import cartSlices from "./cart/cartSlices";
import { categoriesApi } from "./categories/api";

export const store = configureStore({
    reducer: {
        products: productSlices,
        categories: categorieSlices,
        cart: cartSlices,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
})

setupListeners(store.dispatch)