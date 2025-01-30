import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { ProductGridSkeleton } from "../components/skeletons/ProductGridSkeleton";
//import { recentCelulares, popularCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";
import { useHomeProducts } from "../hooks";

export const HomePage = () => {
  const { recentProducts, popularProducts, isLoading } = useHomeProducts();

  const prepraredRecentProducts = prepareProducts(recentProducts);
  const prepraredPopularProducts = prepareProducts(popularProducts);

  console.log(prepraredRecentProducts);

  return (
    <div>
      <FeatureGrid />

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Nuevos Productos"
          products={prepraredRecentProducts}
        />
      )}

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid
          title="Productos Destacados"
          products={prepraredPopularProducts}
        />
      )}

      <Brands />
    </div>
  );
};
