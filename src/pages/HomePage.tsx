import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { recentCelulares, popularCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";

export const HomePage = () => {
  const prepraredRecentProducts = prepareProducts(recentCelulares);
  const prepraredPopularProducts = prepareProducts(popularCelulares);

  console.log(prepraredRecentProducts);

  return (
    <div>
      <FeatureGrid />

      <ProductGrid
        title="Nuevos Productos"
        products={prepraredRecentProducts}
      />

      <ProductGrid
        title="Productos Destacados"
        products={prepraredPopularProducts}
      />

      <Brands />
    </div>
  );
};
