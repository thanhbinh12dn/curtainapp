export function getPagination() {
  return fetch("http://localhost:1000/featured-products?page=1").then((data) =>
    data.json()
  );
}
