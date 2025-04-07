
import { createSlice } from '@reduxjs/toolkit';  // функція з Redux Toolkit для швидкого створення "слайсу" стану
import { fetchCarMakes } from './carsOperations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    makes: [],           // Марки машин
  selectedCars: [],    // Вибрані машини для порівняння
  filter: '',          // Строка пошуку
  loading: false,      
  error: null 
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    selectCar(state, action) {
      if (state.selectedCars.length < 3) {
        state.selectedCars.push(action.payload);
      }
    },
    clearSelection(state) {
      state.selectedCars = [];
    },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarMakes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarMakes.fulfilled, (state, action) => {
        state.loading = false;
        state.makes = action.payload;
      })
      .addCase(fetchCarMakes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export const { setFilter, selectCar, clearSelection } = carsSlice.actions;
export default carsSlice.reducer;
