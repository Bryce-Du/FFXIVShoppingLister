import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://xivapi.com'

export const getRecipes = createAsyncThunk('recipes/getRecipes', async () => {
  const response = await fetch(`${baseURL}/recipe`);
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
      });
  },
});

export default recipeSlice.reducer