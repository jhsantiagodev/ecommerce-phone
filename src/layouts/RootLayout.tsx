import { Outlet, useLocation } from "react-router-dom";
import { NavbarComponent } from "../components/shared/NavbarComponent";
import { FooterComponent } from "../components/shared/FooterComponent";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";

export const RootLayout = () => {
  const { pathname } = useLocation(); //Saber en que ruta estoy, poder renderizar el Banner y la Newsletter

  return (
    <div className="h-screen flex flex-col font-montserrat">
      <NavbarComponent />

      {pathname === "/" && <Banner />}

      <main className="container my-8 flex-1">
        <Outlet />
      </main>

      {pathname === "/" && <Newsletter />}

      <FooterComponent />
    </div>
  );
};
