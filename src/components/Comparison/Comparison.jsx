import { useSelector } from 'react-redux'; // хук з react-redux, який дозволяє нам витягнути дані з Redux Store прямо в компонент.


import styles from './Comparison.module.css';

export default function Comparison() {
  const selectedCars = useSelector((state) => state.cars.selectedCars);

  if (selectedCars.length === 0) {
    return <p className={styles.empty}>Виберіть машини для порівняння!</p>;
  }

  return (
    <div className={styles.comparison}>
      {selectedCars.map((car) => (
        <div key={car.id} className={styles.card}>
          <h3>{car.name}</h3>
          <p>Engine: {car.engine}</p>
          <p>Power: {car.power}</p>
          <p>Max Speed: {car.maxSpeed}</p>
        </div>
      ))}
    </div>
  );
}
