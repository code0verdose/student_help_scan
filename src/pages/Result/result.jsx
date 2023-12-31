import css from "./result.module.css";
import helen from "./assets/Helen.png";
import Slider from "../../components/Slider/Slider";
import Document from "../../components/Document/document";
import Button from "../../ui/Button/Button";
import larry from "./assets/Helen.png";
import Historgam from "../../components/Historgam/Histogram";
import { useContext } from "react";
import { TokenContext } from "../../app/global/providers/TokenProvider";

const encodedID = JSON.parse(
  sessionStorage.getItem(process.env.REACT_APP_LS_KEY_ENCODED_ID) ?? null
);

const Result = () => {
  const { token } = useContext(TokenContext);

  const fetchDocuments = () => {
    const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SEARCH_DOC}`;

    const requestBody = JSON.stringify({
      ids: [`${encodedID.items[0].encodedId}`],
    });

    if (encodedID) {
      const req = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: requestBody,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  fetchDocuments();

  return (
    <>
      {" "}
      <section className={css.looking}>
        <div className={css.info}>
          <h2>
            Ищем. Скоро <br /> будут результаты
          </h2>
          <p>
            Поиск может занять некоторое время, <br /> просим сохранять
            терпение.
          </p>
        </div>
        <div className={css.summary}>
          <h3>Общая сводка</h3>
          <span>Найдено 4 221 вариантов</span>
          <Historgam />
        </div>
        <div className={css.image}>
          <img src={helen} alt="ph" />
        </div>
      </section>
      <section className={css.results}>
        <h4>Список документов</h4>
        <div>
          {" "}
          <Document
            date={"13.09.2021"}
            source={"Комсомольская правда KP.RU"}
            news={"Скиллфэктори - лучшая онлайн-школа для будущих айтишников"}
            type={"Технические новости"}
            image={larry}
            words={"2 543 слова"}
            text={
              "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами."
            }
          />{" "}
        </div>
        <div className={css.button}>
          <Button text={"Показать больше"}></Button>
        </div>
      </section>
    </>
  );
};
export default Result;
