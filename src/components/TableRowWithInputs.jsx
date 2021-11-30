import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/users";

function TableRowWithInputs({ setIsEditing, user }) {
  const dispatch = useDispatch();
  const editing = useSelector((state) => state.editing);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleEdit = async () => {
    await dispatch(editUser(user.id, { name, email, phone }));
    setIsEditing(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={handleChangeName}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          value={email}
          onChange={handleChangeEmail}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          value={phone}
          onChange={handleChangePhone}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-primary"
          onClick={handleEdit}
          disabled={editing}
        >
          save
        </button>{" "}
        <button
          className="btn btn-outline-light"
          onClick={() => setIsEditing(false)}
          disabled={editing}
        >
          ↩
        </button>
      </td>
    </tr>
  );
}

export default TableRowWithInputs;
