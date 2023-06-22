import css from "./login.module.css";
import people from "./assets/Characters.png";
import Form from "../../components/Form/form";
import Header from "../../layout/Header/header";
const Login = ({ authSubmit }) => {
  return (
    <div className={css.loginPage}>
      <h1 className={css.header}>
        Для оформления подписки на тариф, необходимо авторизоваться.
      </h1>
      <img src={people} alt="key" className={css.image} />
      <div className={css.container}>
        <Form authSubmit={authSubmit} />
      </div>
    </div>
  );
};
export default Login;
