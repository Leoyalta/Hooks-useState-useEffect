import css from "./Description.module.css";
export default function Cafe() {
  return (
    <div className={css.container}>
      <div className={css.cafe}>
        <h1 className={css.title}>Sip Happens Café</h1>
        <p className={css.description}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </div>
  );
}
