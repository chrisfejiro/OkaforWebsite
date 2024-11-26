// components/NavBar.tsx
'use client'
import Link from "next/link"; // If using Next.js for routing
import { useCart } from "../Data/CartContext"; // Import the useCart hook
import SearchBar from '../Component/Search';

interface NavBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const NavBar: React.FC<NavBarProps>  = ({search,setSearch}) => {
  const { getTotalItems, getSubtotal } = useCart();
  // const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search term
  const totalItems = getTotalItems();
  const subtotal = getSubtotal();
  return (
    <div className="navbar bg-base-100 bg-orange-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">  
          <h1 className="text-2xl font-bold mb-4">Okafor Stores</h1>
        </a>
      </div>
      <SearchBar searchTerm={search} onSearch={setSearch} /> {/* Add SearchBar here */}
    <div className="flex-none">
      {/* Cart Dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {/* Cart Badge for Number of Items */}
            <span className="badge badge-sm indicator-item">{totalItems}</span>
          </div>
        </div>
        {/* Cart Dropdown */}
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">{totalItems} Items</span>
            <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
            <Link href="/Cart">
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* User Profile Dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default NavBar;

