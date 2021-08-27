import s from "./Button.module.css";

const Button = ({ onClick }) => (
  <button type="button" className={s.button} onClick={onClick}>
    Load more
  </button>
);

export default Button;
