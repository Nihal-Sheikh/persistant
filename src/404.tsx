import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="header">404 - Page Not Found</h1>
      <p className="description">
        The page you are looking for does not exist. Most often it is caused by
        broken link please fix your link and try again{" "}
      </p>
      <Link to="/" className="description links">
        Go Home
      </Link>
    </>
  );
}
