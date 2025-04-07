import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = (state) => state.cars.filter; //отримує текст з пошукового поля
export const selectMakes = (state) => state.cars.makes; //отримує весь масив машин.

// Мемоізований селектор для фільтрації машин.selectFilteredMakes — повертає тільки ті машини, де name містить текст фільтра.
export const selectFilteredMakes = createSelector(
  [selectMakes, selectFilter],
  (makes, filter) => {
    if (!filter.trim()) return makes; // Якщо фільтр пустий — показуємо всі марки
    return makes.filter(make =>
      make.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
