import Footer from "./Footer/footer";
import Header from "./Header/header";

const Layout = ({ children, logOut, isAuth }) => {
  return (
    <>
      <Header logOut={logOut} isAuth={isAuth} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
