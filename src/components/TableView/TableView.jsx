import React, { useState } from "react";

import { Table } from "react-bootstrap";
import "./TableView.css";
import deleteIcon from "./assets/delete.svg";
import UserModal from "../UserModal/UserModal";

const TableView = ({ columns, data, handleDelete, selectUser }) => {
  const [selected, select] = useState(null);

  const handleClick = (idx) => {
    select(data.find((el) => el.id === idx));
    // selectUser(idx);

    // alert(`row ${idx} clicked`);
  };
  return (
    <>
      {!data?.length ? (
        <p>No users to display, create new users</p>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              {columns.map((field) => (
                <th>{field}</th>
              ))}
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr>
                <td>
                  <div role="button" onClick={() => handleClick(user.id)}>
                    {user.name}
                  </div>
                </td>
                <td>
                  <div role="button" onClick={() => handleClick(user.id)}>
                    {user.email}
                  </div>
                </td>
                <td>
                  <div role="button" onClick={() => handleClick(user.id)}>
                    {user.role}
                  </div>
                </td>

                <td
                  id="action"
                  role="button"
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  <img style={{ height: 16 }} src={deleteIcon} alt="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TableView;
