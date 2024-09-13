import { Outlet, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Userss = () => {
  const [searchParams, setSearachParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>

      {/* <Link to="/users/user1">User 1</Link>
      <hr />
      <Link to="/users/user2">User 2</Link>
      <hr />
      <Link to="/users/user3">User 3</Link> */}

      <Outlet />

      <button onClick={() => setSearachParams({ filter: "active" })}>
        Active users
      </button>
      <button onClick={() => setSearachParams({})}>Reset Filters</button>
      {showActiveUsers ? (
        <h2>showing active users</h2>
      ) : (
        <h2>showing all users</h2>
      )}
    </div>
  );
};
