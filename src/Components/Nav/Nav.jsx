import { useState } from "react";
import navicon from "../../assets/navicon.png";
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-4">
        <div className="flex h-[65px] items-center justify-between">

          <Link
            to="/"
            onClick={closeMenu}
            className="flex cursor-pointer items-center gap-2"
          >
            <img
              src={navicon}
              alt="Furniro Logo"
              className="h-11 w-11 object-contain"
            />

            <h1 className="text-2xl font-bold tracking-wide text-black lg:text-3xl">
              Furniro
            </h1>
          </Link>

          <ul className="hidden items-center gap-12 text-[16px] font-medium md:flex">

            <li>
              <Link
                to="/"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/details"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Details
              </Link>
            </li>

            <li>
              <Link
                to="/productcomparison"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Cart
              </Link>
            </li>

            <li>
              <Link
                to="/checkout"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Checkout
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="cursor-pointer transition hover:text-[#B88E2F]"
              >
                Blog
              </Link>
            </li>

          </ul>


          <div className="hidden items-center gap-7 text-2xl md:flex">

            <Link to="/login">
              <FiUser className="cursor-pointer transition hover:text-[#B88E2F]" />
            </Link>

            <button type="button">
              <FiSearch className="cursor-pointer transition hover:text-[#B88E2F]" />
            </button>

            <button type="button">
              <FiHeart className="cursor-pointer transition hover:text-[#B88E2F]" />
            </button>

            <Link to="/cart">
              <FiShoppingCart className="cursor-pointer transition hover:text-[#B88E2F]" />
            </Link>

          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="text-3xl md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>


      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 border-t border-black/10 py-6 text-lg font-medium">

          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/shop"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/productcomparison"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Product
            </Link>
          </li>

          <li>
            <Link
              to="/details"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Details
            </Link>
          </li>

          <li>
            <Link
              to="/checkout"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Checkout
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              onClick={closeMenu}
              className="block cursor-pointer transition hover:text-[#B88E2F]"
            >
              Cart
            </Link>
          </li>


          <li className="pt-3">
            <div className="flex gap-8 text-2xl">

              <Link
                to="/login"
                onClick={closeMenu}
                aria-label="Account"
              >
                <FiUser className="transition hover:text-[#B88E2F]" />
              </Link>

              <button
                type="button"
                aria-label="Search"
              >
                <FiSearch className="transition hover:text-[#B88E2F]" />
              </button>

              <button
                type="button"
                aria-label="Wishlist"
              >
                <FiHeart className="transition hover:text-[#B88E2F]" />
              </button>

              <Link
                to="/cart"
                onClick={closeMenu}
                aria-label="Cart"
              >
                <FiShoppingCart className="transition hover:text-[#B88E2F]" />
              </Link>

            </div>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Nav;

