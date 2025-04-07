import styles from './SearchBar.module.css';

export default function SearchBar({ value, onChange, placeholder, onClear }) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {value && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={onClear}
        >
          ✖
        </button>
      )}
    </div>
  );
}
