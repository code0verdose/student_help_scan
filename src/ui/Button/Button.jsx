import css from "./Button.module.css";
const Button = ({ text, children, className, handler }) => {
  const rootClassName = [css.button, className];

  return (
    <button onClick={handler} className={rootClassName.join(" ")}>
      {text}
    </button>
  );
};

export default Button;
