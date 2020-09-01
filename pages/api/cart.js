import {
  getCart,
  createCartWithProduct,
  addProductToCart,
  updateProductInCart,
  removeProductFromCart,
} from "../../lib/api/bigcommerce/cart";
import { BigComerceError } from "../../lib/api/bigcommerce/fetch-api";
import {
  getCartCookie,
  setCartCookie,
} from "../../lib/api/bigcommerce/cookies";
import isAllowedMethod from "../../lib/api/is-allowed-method";

const METHODS = ["GET", "POST", "PUT", "DELETE"];

export default async function cart(req, res) {
  if (!isAllowedMethod(req, res, METHODS)) return;

  const cartId = getCartCookie(req);

  try {
    // Return current cart info
    if (req.method === "GET") {
      const result = cartId && (await getCart(cartId));

      // If `data` is null, the cookie exists but the cart wasn't found, so, remove the cookie
      if (result?.data === null) setCartCookie(res);

      return res.status(200).json({ cart: result?.data || null });
    }

    // Create or add a product to the cart
    if (req.method === "POST") {
      const { product } = req.body;

      if (!product) {
        return res.status(400).json({
          errors: [{ message: "Missing product" }],
        });
      }

      const { data } = cartId
        ? await addProductToCart(cartId, product)
        : await createCartWithProduct(product);

      // Create or update the cart cookie
      setCartCookie(res, data.id);

      // There's no need to send any additional data here, the UI can use this response to display a
      // "success" for the operation and revalidate the GET request for this same endpoint right after.
      return res.status(200).json({ done: true });
    }

    // Update product in cart
    if (req.method === "PUT") {
      const { itemId } = req.query;
      const { product } = req.body;

      if (!cartId || !itemId || !product) {
        return res.status(400).json({
          errors: [{ message: "Invalid request" }],
        });
      }

      await updateProductInCart(cartId, itemId, product);

      // Update the cart cookie
      setCartCookie(res, cartId);

      return res.status(200).json({ done: true });
    }

    // Remove a product from the cart
    if (req.method === "DELETE") {
      const { itemId } = req.query;

      if (!cartId || !itemId) {
        return res.status(400).json({
          errors: [{ message: "Invalid request" }],
        });
      }

      await removeProductFromCart(cartId, itemId);

      // Update the cart cookie
      setCartCookie(res, cartId);

      return res.status(200).json({ done: true });
    }
  } catch (error) {
    console.error(error);

    const message =
      error instanceof BigComerceError
        ? "Big Commerce API failed"
        : "An unexpected error ocurred";

    res.status(500).json({
      errors: [{ message }],
    });
  }
}
