// renderizar productos
export function render(products, container) {
  container.innerHTML = "";

  products.forEach((product, index) => {
    const rowProduct = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = `${index + 1}`;

    const tdName = document.createElement("td");
    tdName.textContent = product.nameProduct;

    const tdPrice = document.createElement("td");
    tdPrice.textContent = product.price;

    rowProduct.appendChild(tdId);
    rowProduct.appendChild(tdName);
    rowProduct.appendChild(tdPrice);

    container.appendChild(rowProduct);
  });
}
