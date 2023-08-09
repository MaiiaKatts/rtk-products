import Product from './types/Product';
import ProductData from './types/ProductData';

// GET - метод для получения данных
// eslint-disable-next-line import/prefer-default-export
export async function getAll():Promise<Product[]> {
    const result = await fetch('https://fakestoreapi.com/products');
    return result.json(); // здесь работаем без await
}

//делаем api для удаления через медод DELETE
// DELETE - явно указали
export async function deleteProduct(id: number): Promise<Product> {
    const result = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    });
    return result.json();
}

  export async function createProduct(product: ProductData): Promise<Product> {
    const result = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      // body: JSON.stringify(product) // сокращенная запись при условии совпадения ключей
      body: JSON.stringify(
        {
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            category: product.category
        })
    });
    return result.json(); // вариант когда сервер присылает назад объект целиком
    const { id } = await result.json(); // вариант когда сервер присылает только id назад
    return { ...product, id };
  }
// PUT - edit - изменение целиком

// PATCH - когда меняем какое-то одно поле

// POST - создание новой сущности
