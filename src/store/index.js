import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productSlices from "./products/productSlices";
import categorieSlices from "./categories/categorieSlices";
import cartSlices from "./cart/cartSlices";
import authReducer from './auth/auth.slice'
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";
import { ordersApi } from "./orders/api";
import { authApi } from "./auth/api";
import { settingsApi } from './profile/api'
import { mapsApi } from "./maps/api";

export const store = configureStore({
    reducer: {
        products: productSlices,
        categories: categorieSlices,
        cart: cartSlices,
        auth: authReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [settingsApi.reducerPath]: settingsApi.reducer,
        [mapsApi.reducerPath]: mapsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware, ordersApi.middleware, authApi.middleware, settingsApi.middleware, mapsApi.middleware),
})

setupListeners(store.dispatch)