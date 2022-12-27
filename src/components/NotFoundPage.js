import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h2>Error 404!</h2>
    <p>Page not Found</p>
    <Link to="/">Back to home</Link>
  </div>
);

export default NotFoundPage;