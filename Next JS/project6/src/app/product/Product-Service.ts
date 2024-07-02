export class ProductService {
  static getproducts = async () => {
    var productResponse = await fetch("https://api.chec.io/v1/products", {
      method: "GET",
      headers: {
        "X-Authorization": "pk_56842e0595ee8d4ad52e2246eeeb1cc78700ec1240810",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    var products = await productResponse.json();
    return products.data;
  };
  static getProductById = async (id: number) => {
    var productResponse = await fetch("https://api.chec.io/v1/products/" + id, {
      method: "GET",
      headers: {
        "X-Authorization": "pk_56842e0595ee8d4ad52e2246eeeb1cc78700ec1240810",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    var product = await productResponse.json();
    return product;
  };
  static addProduct = async (prodId: any) => {
    try {
      const productResponse = await fetch(
        "https://api.chec.io/v1/carts/cart_0YnEoq8AOWwe7P",
        {
          method: "POST",
          headers: {
            "X-Authorization":
              "pk_56842e0595ee8d4ad52e2246eeeb1cc78700ec1240810",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            id: prodId,
            quantity: 5,
          }),
        }
      );
      const addedProduct = await productResponse.json();
      return addedProduct;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  static getCartproducts = async () => {
    var productResponse = await fetch(
      "https://api.chec.io/v1/carts/cart_0YnEoq8AOWwe7P/items",
      {
        method: "GET",
        headers: {
          "X-Authorization": "pk_56842e0595ee8d4ad52e2246eeeb1cc78700ec1240810",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    var products = await productResponse.json();
    return products;
  };
  static removeProduct = async (prodId: any) => {
    try {
      const productResponse = await fetch(
        `https://api.chec.io/v1/carts/cart_0YnEoq8AOWwe7P/items/${prodId}`,
        {
          method: "DELETE",
          headers: {
            "X-Authorization": "pk_56842e0595ee8d4ad52e2246eeeb1cc78700ec1240810",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const removedProduct = await productResponse.json();
      return removedProduct;
    } catch (error) {
      console.error("Error removing product:", error);
      throw error;
    }
  };
}
