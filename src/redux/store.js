import { configureStore } from '@reduxjs/toolkit'; //Імпортуємо функцію для створення Store
import carsReducer from './carsSlice'; // імпортуємо наш редʼюсер

export const store = configureStore({
  reducer: {
    cars: carsReducer, // додаємо редʼюсер у кореневий стан під ключем cars
  },
});
