import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="my-5">
      <Link to="/" className="text-gray-500">
        Home
      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={index}>
            <span className="text-gray-500">{" > "} </span> {pathname}
          </span>
        ) : (
          <span key={index} className="text-gray-500">
            {" > "}
            <Link>{pathname}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
