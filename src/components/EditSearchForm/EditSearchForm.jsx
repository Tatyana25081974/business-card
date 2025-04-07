import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/carsSlice';
import SearchBar from '../SearchBar/SearchBar';
import styles from './EditSearchForm.module.css';

export default function EditSearchForm() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.cars.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleClear = () => {
    dispatch(setFilter(''));
  };

  return (
    <form className={styles.form}>
      <SearchBar
        value={filter}
        onChange={handleChange}
        placeholder="Редагувати запит пошуку..."
        onClear={handleClear}
      />
    </form>
  );
}
