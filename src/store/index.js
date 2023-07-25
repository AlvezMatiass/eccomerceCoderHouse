import { configureStore } from "@reduxjs/toolkit";

import productSlices from "./products/productSlices";
import categorieSlices from "./categories/categorieSlices";
import cartSlices from "./cart/cartSlices";

export const store = configureStore({
    reducer: {
        products: productSlices,
        categories: categorieSlices,
        cart: cartSlices
    },
})