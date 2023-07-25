import { createSlice } from "@reduxjs/toolkit";
import CATEGORIES from '../../constants/data/categorias.json'

const initialState = {
    data: CATEGORIES,
}

const categorieSlices = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
})

export default categorieSlices.reducer;