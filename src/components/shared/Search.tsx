import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useGlobalStore } from "../../store/global.store";
import { formatPrice } from "../../helpers";
import { searchProducts } from "../../actions";
import { Product } from "../../interface";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); //Valor en el input
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      //TODO: Buscar productos en la Api
      const products = await searchProducts(searchTerm);
      setSearchResults(products); //actualizar estado de la peticion
      //console.log(products);
    }
  };

  return (
    <>
      <div className="py-5 px-7 flex gap-10 items-center border-b border-slate-200">
        <form
          className="flex gap-3 items-center flex-1"
          onSubmit={handleSearch}
        >
          <HiOutlineSearch size={22} />

          <input
            type="text"
            placeholder="Que Buscabas?"
            className="outline-none w-full text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <button onClick={closeSheet}>
          <IoMdClose size={25} className="text-black" />
        </button>
      </div>

      {/*Resultados de Busqueda */}
      <div className="p-5">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((itemProduct) => (
              <li className="py-2 group" key={itemProduct.id}>
                <button className="flex items-center gap-3">
                  <img
                    src={itemProduct.images[0]}
                    alt={itemProduct.name}
                    className="h-20 w-20 p-3 object-contain"
                  />

                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold group-hover:underline">
                      {itemProduct.name}
                    </p>

                    <p className="text-[13px] text-gray-600">
                      {itemProduct.variants[0].storage}/{" "}
                      {itemProduct.variants[0].color_name}
                    </p>

                    <p className="text-sm font-medium text-gray-600">
                      {formatPrice(itemProduct.variants[0].price)}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">
            No se encontraron Resultados!!
          </p>
        )}
      </div>
    </>
  );
};
