import { render } from "./view.js";
import { getProducts, addNewProduct } from "./services.js";

// obtener referencia al contenedor de los productos a  mostrar
const dataProducts = document.querySelector(".data-products");

// Se crea una funcion asincrona para iniciar la app, es necesario para poder
// usar los datos que vienen desde la funcion getProducts que es asincrona
const initApp = async () => {
  // se espera a que el servicio traiga los datos del servidor
  const products = await getProducts();

  // una vez se tienen seguros se renderiza
  render(products, dataProducts);
};

// se inicia la funcion de arranque
initApp();

// referencia al botón enviar
const btnAddProduct = document.querySelector(".btn-add-product");

btnAddProduct.addEventListener("click", async (e) => {
  e.preventDefault();

  const newProduct = {
    nameProduct: document.getElementById("nameProduct").value,
    price: Number(document.getElementById("price").value),
  };

  // el servidor guarda el nuevo producto
  await addNewProduct(newProduct);

  // se trae nuevamente la lista pero ya actualizada
  const updatedProducts = await getProducts();

  // renderizar la lista con el nuevo producto traido desde el servidor
  render(updatedProducts, dataProducts);

  // limpiar inputs
  document.getElementById("nameProduct").value = "";
  document.getElementById("price").value = "";
});
