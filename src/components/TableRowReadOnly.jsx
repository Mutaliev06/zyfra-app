import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/users";
import { Link } from 'react-router-dom';

function TableRowReadOnly({ setIsEditing, user }) {
  const dispatch = useDispatch();
  const deleting = useSelector((state) => state.deleting);

  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <Link to={`/${user.id}`}>
          {user.name}
        </Link>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsEditing(true)}
        >
          ✎
        </button>{" "}
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(deleteUser(user.id))}
          disabled={deleting}
        >
          ␡
        </button>
      </td>
    </tr>
  );
}

export default TableRowReadOnly;
