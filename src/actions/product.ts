import { supabase } from "../supabase/client";

/*Consultas a la DB de supabase, se Utilizan en los customHooks */

export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
};

export const getFilteredProducts = async ({
  page = 1,
  brands = [],
}: {
  page: number;
  brands: string[];
}) => {
  const itemsPerPage = 10;
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  //Paginacion
  let query = supabase
    .from("products")
    .select("*, variants(*)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  //filtros
  if (brands.length > 0) {
    query = query.in("brand", brands); //in para buscar en un arreglo de condiciones
  }

  //resolver la promesa
  const { data, error, count } = await query;

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return {
    data,
    count,
  };
};

export const getRecentProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
};

export const getRandomProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .limit(20);

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  //seleccionar 4 productos al azar
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4);

  return randomProducts;
};

export const getProductBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .eq("slug", slug) //Nombre de la tabla, slug que se le pasa
    .single(); //selecciona solamente un resultado de ese array

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return data;
};

export const searchProducts = async (searchTerm: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*, variants(*)")
    .ilike("name", `%${searchTerm}%`); //Buscar Productos cuyo nombre contenga el termino de Busqueda

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return data;
};
