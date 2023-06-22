import React, { useMemo, useState } from "react";
import { TokenContext, LOCAL_STORAGE_TOKEN_KEY } from "../lib/TokenContext";

const defaultToken =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)) ?? null;

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(defaultToken);

  const defaultProps = useMemo(
    () => ({
      token: token,
      setToken: setToken,
    }),
    [token]
  );

  return (
    <TokenContext.Provider value={defaultProps}>
      {children}
    </TokenContext.Provider>
  );
};
export default TokenProvider;
