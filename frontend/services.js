// obtener productos desde el servidor
export async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products/");
    if (!response.ok) {
      throw new Error(`Error al obtener los productos, estado: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la respuesta:", error);
  }
}

// agregar un nuevo producto
export async function addNewProduct(productData) {
  try {
    const response = await fetch("http://localhost:3000/api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`Error al crear el producto, estado: ${response.status}`);
    }

    const data = await response.json();
    console.log("Dato creado con éxito, nombre del producto:", data.nameProduct); // la respuesta de la promesa sera undefined por no tenor nada
  } catch (error) {
    console.error("Hubo un error con POST:", error);
  }
}
