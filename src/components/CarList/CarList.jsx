import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredMakes } from '../../redux/selectors';
import { selectCar } from '../../redux/carsSlice';
import styles from './CarList.module.css';

export default function CarList() {
  const dispatch = useDispatch();
  const filteredMakes = useSelector(selectFilteredMakes);
  const selectedCars = useSelector(state => state.cars.selectedCars); // ➔ додаємо

  const handleSelect = (make) => {
    if (selectedCars.length >= 3) {
      alert('Ви вже вибрали максимум 3 машини для порівняння!');
      return; // ➔ Зупиняємо якщо вже 3 машини
    }

    const car = {
      id: make.id,
      name: make.name,
      engine: make.engine || 'Unknown',
      power: make.power || 'Unknown',
      maxSpeed: make.maxSpeed || 'Unknown',
    };
    dispatch(selectCar(car));
  };

  if (filteredMakes.length === 0) {
    return <p className={styles.empty}>Авто не знайдено</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredMakes.map((make) => (
        <li key={make.id} className={styles.item} onClick={() => handleSelect(make)}>
          {make.name}
        </li>
      ))}
    </ul>
  );
}

