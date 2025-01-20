import css from "./Options.module.css";

export default function Options({ onUpdate, onReset, total }) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {total ? (
        <button className={css.buttonReset} onClick={onReset}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
