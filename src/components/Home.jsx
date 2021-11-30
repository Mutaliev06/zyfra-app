import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/users";
import Preloader from "./Preloader";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const users = useSelector((state) => state.users.items);

  useEffect(() => dispatch(loadUsers()), [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <table className="table">
      <TableHead />
      <tbody>
        {users.map((user) => {
          return <TableRow user={user} key={user.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Home;
