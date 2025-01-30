import { useQueries } from "@tanstack/react-query";
import { getRecentProducts } from "../../actions";
import { getRandomProducts } from "../../actions";

export const useHomeProducts = () => {
  //Obtenemos 2 resultados
  const results = useQueries({
    queries: [
      {
        queryKey: ["recentProducts"],
        queryFn: () => getRecentProducts(),
      },
      {
        queryKey: ["popularProducts"],
        queryFn: () => getRandomProducts(),
      },
    ],
  });

  const [recentProductsResult, popularProductsResult] = results; //desestructuramos los resultados

  //Combinar los estados de los resultados
  const isLoading =
    recentProductsResult.isLoading || popularProductsResult.isLoading;

  const isError = recentProductsResult.isError || popularProductsResult.isError; //Comprobar si hay un error

  return {
    recentProducts: recentProductsResult.data || [], //Quita el undefined mientras esta cargando
    popularProducts: popularProductsResult.data || [], //Quita el undefined mientras esta cargando
    isLoading,
    isError,
  };
};
