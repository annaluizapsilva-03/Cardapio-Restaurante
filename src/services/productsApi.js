import { initialProducts } from '../data/products';

export async function getProducts({ signal } = {}) {
  if (signal?.aborted) {
    throw new DOMException('Requisição cancelada', 'AbortError');
  }

  return initialProducts;
}

export async function getProductById(id, { signal } = {}) {
  if (signal?.aborted) {
    throw new DOMException('Requisição cancelada', 'AbortError');
  }

  const product = initialProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    throw new Error('Produto não encontrado.');
  }

  return product;
}