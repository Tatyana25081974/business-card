
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = "3669336c28msh0e818a8c7dbb811p1ccaf3jsnce64cc2b044b";
const API_HOST = "car-api2.p.rapidapi.com";

export const fetchCarMakes = createAsyncThunk('cars/fetchCarMakes', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://car-api2.p.rapidapi.com/api/makes', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    if (!response.ok) {
      throw new Error('Server Error');
    }

    const data = await response.json();
    return data.data; // тут буде масив марок
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//createAsyncThunk('cars/fetchCarMakes', async () => {...})	Створює асинхронну дію для Redux
//fetch	Надсилає GET-запит на /api/makes
//headers	Передає  API-ключ і хост для авторизації
//response.json()	Перетворює відповідь сервера на об'єкт
//return data.data	Повертає масив марок
//catch	Якщо сталася помилка, Redux отримає помилку