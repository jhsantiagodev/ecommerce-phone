import { Color, VariantProduct, Product } from "../interface";

//funcion para formatear el precio a dolares
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency", //moneda
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

//funcion para preparar los productos - (Celulares)
export const prepareProducts = (products: Product[]) => {
  return products.map((product) => {
    //Agrupar las variantes por color acc es acomulador
    const colors = product.variants.reduce(
      (acc: Color[], variant: VariantProduct) => {
        const existingColor = acc.find((item) => item.color === variant.color);

        if (existingColor) {
          existingColor.price = Math.min(existingColor.price, variant.price);
        } //Mantenemos el precio al minimo
        else {
          acc.push({
            color: variant.color,
            price: variant.price,
            name: variant.color_name,
          });
        }

        return acc;
      },
      []
    );

    //obtener el precio mas bajo de las variantes agrupadas
    const price = Math.min(...colors.map((item) => item.price));

    //devolver el producto formateado
    return {
      ...product,
      price,
      colors: colors.map(({ name, color }) => ({ name, color })),
      variants: product.variants,
    };
  });
};
