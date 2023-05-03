import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://xivapi.com'

export const getRecipes = createAsyncThunk('recipes/getRecipes', async (page) => {
  const response = await fetch(`${baseURL}/recipe?page=${page}`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
})
export const getRecipeById = createAsyncThunk('recipes/getRecipeById', async (id) => {
  const response = await fetch(`${baseURL}/recipe/${id}`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
})
export const getRecipesByClass = createAsyncThunk('recipes/getRecipesByClass', async (data) => {
  const { classId, page } = data;
  const response = await fetch(`${baseURL}/search?indexes=recipe&filters=ClassJob.ID=${classId}&page=${page}`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
})
export const getClasses = createAsyncThunk('recipes/getClasses', async () => {
  const response = await fetch(`${baseURL}/classJob`);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
})

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipes: [],
    recipe: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getRecipeById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipe = action.payload;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getClasses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.classes = action.payload;
      })
      .addCase(getRecipesByClass.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload
      })
  },
});

export default recipeSlice.reducer