import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <p className={s.text}>{message}</p>;
};

export default ErrorMessage;
