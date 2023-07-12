import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// All local imports
import "./ProductCard.css";
import { useProducts } from "../../../../context/products-context";
import { displayRatingStars } from "../../../../utils/displayRatingStars";

export function ProductCard({ product }) {
  const {
    imageSrc,
    imageAlt,
    bestSeller,
    title,
    description,
    price,
    percentDiscount,
  } = product;

  const navigate = useNavigate();
  const { wishlist, cart, dispatch } = useProducts();
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  const isBestseller = () =>
    bestSeller ? <span className="card-badge">Bestseller</span> : "";

  const isAddedToWishlist = () =>
    wishlist.some((obj) => obj._id === product._id);

  function wishlistAddOrRemove(event) {
    event.stopPropagation();

    setWishlistLoading(true);

    isAddedToWishlist()
      ? dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
      : dispatch({ type: "ADD_TO_WISHLIST", payload: product });

    setWishlistLoading(false);
  }

  const wishlistIcon = () => {
    return isAddedToWishlist() ? (
      <i className="material-icons card-svg-icons wishlist-icon">favorite</i>
    ) : (
      <i className="material-icons card-svg-icons">favorite_border</i>
    );
  };

  const isAddedToCart = () => cart.some((obj) => obj._id === product._id);

  const cartButtonText = () => (cartLoading ? "Adding..." : "Add to cart");

  const cartButtons = () =>
    isAddedToCart() ? (
      <Link
        to="/cart"
        className="card-button"
        onClick={(event) => event.stopPropagation()}
      >
        Go to cart
      </Link>
    ) : (
      <button
        className="card-button"
        onClick={(event) => addOrGoToCart(event)}
        disabled={cartLoading}
      >
        {cartButtonText()}
      </button>
    );
}
const ProductDetails = () => {
  return (
    <div>
      Not adding the product details page cause it would just be a waste of time
      because Product listing page have all required feature which you ask
    </div>
  );
};
export default ProductDetails;
