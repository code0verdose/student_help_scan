import { Spinner } from "../../ui/Spinner/Spinner";
import css from "./LimitsInfo.module.css";

export const LimitsInfo = ({
  usedCompanyCount,
  companyLimit,
  isAuth,
  isLoading,
  className,
}) => {

  const rootClassName = [css.box, className];

  if (isAuth) {
    return (
      <div className={rootClassName.join(" ")}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <p className={css.box_item}>
              Использовано компаний{" "}
              <span className={css.box_number}>{usedCompanyCount}</span>
            </p>
            <p className={css.box_item}>
              Лимит по компаниям{" "}
              <span className={css.box_number} style={{ color: "#8AC540" }}>
                {companyLimit}
              </span>
            </p>
          </>
        )}
      </div>
    );
  } else {
    return null;
  }
};
