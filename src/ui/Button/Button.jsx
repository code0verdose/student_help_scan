import css from "./Button.module.css";
const Button = ({ text, children, className, handler, isDisabled }) => {
  const rootClassName = [css.button, className];

  return (
    <button disabled={isDisabled} onClick={handler} className={rootClassName.join(" ")}>
      {text}
    </button>
  );
};

export default Button;
