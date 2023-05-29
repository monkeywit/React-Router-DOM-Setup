import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const location = useLocation();

  return (
    <nav className="border-b border-gray-300">
      <div className="py-4 px-10 flex justify-between items-center">
        <Link
          className="font-bold text-2xl tracking-widest text-green-700"
          to="/"
        >
          MonkeyWit
        </Link>
        <ul className="flex space-x-8">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                className={`hover:text-green-700 ${
                  location.pathname === route.path ? "text-green-700 font-bold" : ""
                }`}
                to={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
