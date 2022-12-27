import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => (
  <>
    <div>
      <h1>Expensify</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/edit">Edit</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
    </div>
    <Outlet />
  </>
);

export default SharedLayout;