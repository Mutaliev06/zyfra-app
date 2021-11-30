import { useState } from "react";
import TableRowWithInputs from "./TableRowWithInputs";
import TableRowReadOnly from "./TableRowReadOnly";

function TableRow({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <TableRowWithInputs setIsEditing={setIsEditing} user={user} />
  ) : (
    <TableRowReadOnly setIsEditing={setIsEditing} user={user} />
  );
}

export default TableRow;
