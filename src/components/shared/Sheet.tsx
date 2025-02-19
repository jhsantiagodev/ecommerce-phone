import { useEffect, useRef } from "react";
import { useGlobalStore } from "../../store/global.store";
import { Cart } from "./Cart";
import { Search } from "./Search";

export const Sheet = () => {
  //variables del estado global
  const sheetContent = useGlobalStore((state) => state.sheetContent);
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const sheetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    //funcion para manejar los clicks fuera del div
    const handleOutClick = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        closeSheet();
      }
    };

    //Agregar event Listener
    document.addEventListener("mousedown", handleOutClick);

    //Limpiar el efecto
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [closeSheet]);

  //Funcion para saber el componente a renderizar
  const renderContent = () => {
    switch (sheetContent) {
      case "cart":
        return <Cart />;
      case "search":
        return <Search />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end animate-fade-in">
      <div
        className="bg-white text-black h-screen w-[500px] shadow-lg animate-slide-in"
        ref={sheetRef}
      >
        {renderContent()}
      </div>
    </div>
  );
};
