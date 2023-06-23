import css from "./checkbox.module.css";
const Checkbox = ({ text, id, handler, name }) => {
  return (
    <div>
      <div className={css.checkbox}>
        <input onChange={handler} type="checkbox" id={id} name={name} />
        <label for={id}>{text}</label>
      </div>
    </div>
  );
};

export default Checkbox;
