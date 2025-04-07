import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/carsSlice';
import SearchBar from '../SearchBar/SearchBar';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleClear = () => {
    dispatch(setFilter(''));
  };

  return (
    <form className={styles.form}>
      <SearchBar
        value=""
        onChange={handleChange}
        placeholder="Введіть запит для пошуку..."
        onClear={handleClear}
      />
    </form>
  );
}

