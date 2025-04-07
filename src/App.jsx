import { useEffect, useState } from 'react'; // ➔ додаємо useState
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarMakes } from './redux/carsOperations';
import SearchForm from './components/SearchForm/SearchForm';
import EditSearchForm from './components/EditSearchForm/EditSearchForm';
import CarList from './components/CarList/CarList';
import Comparison from './components/Comparison/Comparison';
import ClearSelectionButton from './components/ClearSelectionButton/ClearSelectionButton';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.cars.loading);
  const error = useSelector(state => state.cars.error);

  const [isEditing, setIsEditing] = useState(false); // isEditing	Локально зберігає чи ми зараз у режимі редагування
//setIsEditing	Міняє цей режим
  useEffect(() => {
    dispatch(fetchCarMakes());   //Завантажує машини при старті сторінки
  }, [dispatch]);

  const toggleEditing = () => {
    setIsEditing(prev => !prev);  //Перемикає режим пошуку/редагування
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Пошук та порівняння автомобілів
      </h1>

      <button onClick={toggleEditing} className={styles.editButton}>
        {isEditing ? 'Новий пошук' : 'Редагувати пошук'}
      </button>

      {/* Перемикання між SearchForm і EditSearchForm */}
      {isEditing ? <EditSearchForm /> : <SearchForm />}

      <CarList />

      {loading && <p className={styles.message}>Завантаження даних...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <Comparison />

      <div className={styles.buttonWrapper}>
        <ClearSelectionButton />
      </div>
    </div>
  );
}

export default App;
