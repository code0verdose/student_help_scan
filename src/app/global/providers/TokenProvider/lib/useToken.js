import { useContext, useState } from "react";
import {
  LOCAL_STORAGE_TOKEN_EXPIRE,
  LOCAL_STORAGE_TOKEN_KEY,
  TokenContext,
} from "./TokenContext";

export function useToken() {
  const { token, setToken } = useContext(TokenContext);
  const [errorMsg, setErrorMsg] = useState(null);
  // const navigate = useNavigate();

  const getToken = async (authObj, path) => {
    if (!token) {
      const resBody = JSON.stringify(authObj);
      const req = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOGIN_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: resBody,
        }
      );
      const res = await req.json();

      if (res.message) {
        setErrorMsg(res.message);
        return res.message;
      }
      if (res.accessToken) {
        // navigate("/");
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_KEY,
          JSON.stringify(res.accessToken)
        );
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_EXPIRE,
          JSON.stringify(res.expire)
        );
        setToken(res.accessToken);
      }
    }
  };

  const logOut = () => {
    localStorage.clear();
    setToken(null);
  };

  return {
    token,
    errorMsg,
    getToken,
    logOut,
  };
}
