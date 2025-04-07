import styles from './CarCard.module.css';

export default function CarCard({ car }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{car.name}</h3>
      <p className={styles.text}>Engine: {car.engine}</p>
      <p className={styles.text}>Power: {car.power}</p>
      <p className={styles.text}>Max Speed: {car.maxSpeed}</p>
    </div>
  );
}
