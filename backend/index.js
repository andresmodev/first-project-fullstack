import http from "http";

const PORT = 3000;

// Estado global o fuente de la verdad para los datos
// Ya no esta en el cliente sino en el servidor
let products = [
  { id: crypto.randomUUID(), nameProduct: "Nine Sols", price: 50000 },
  { id: crypto.randomUUID(), nameProduct: "Elder Ring", price: 150000 },
  { id: crypto.randomUUID(), nameProduct: "Red Dead Redemtion 2", price: 200000 },
  { id: crypto.randomUUID(), nameProduct: "Hollow Knight", price: 37000 },
  { id: crypto.randomUUID(), nameProduct: "Batman Arkham", price: 9000 },
];

const server = http.createServer((req, res) => {
  // cabeceras CORS globales para permitir la sincronización entre la ruta del cliente y la del servidor
  res.setHeader("Access-Control-Allow-Origin", "*"); // Autorizar cualquier origen para que el navegador no bloquee el fetch
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Indicar que metodos se permiten
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Indicar que cabeceras se permiten

  // Si es una peticion de tipo OPTIONS se responde de una vez
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader("Content-Type", "application/json; charset=UTF-8");

  if (req.method === "GET" && req.url === "/api/products/") {
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  } else if (req.method === "POST" && req.url === "/api/products/") {
    let body = ""; // variable acumuladora para los fragmentos de texto

    // escuchar el evento data para agrupar los fragmentos
    req.on("data", (chunk) => {
      body += chunk;
    });

    // escuchar cuando la transmision del cliente termina por completo
    req.on("end", () => {
      try {
        // transformar el string JSON a un objeto js
        const newProductData = JSON.parse(body);

        // crear el producto definitivo agregando el id
        const newProduct = {
          id: crypto.randomUUID(),
          ...newProductData,
        };

        // actualizar la fuente de la verdad
        products.push(newProduct);

        // respondemos al cliente cerrando el ciclo de la peticion
        res.statusCode = 201; // código HTTP que indica que un recurso fue creado con éxito
        res.end(JSON.stringify(newProduct));
      } catch (error) {
        // si el json viene roto el servidor lo atrapa sin caerse
        res.statusCode = 400; // bad request
        res.end(
          JSON.stringify({ message: "El formato de los datos enviados no es un JSON válido" }),
        );
      }
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
  }
});

server.listen(PORT, () => console.log("Servidor corriendo en http://localhost:3000"));
