import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import "./TableView.css";
import deleteIcon from "./assets/delete.svg";
import UserModal from "../UserModal/UserModal";

const TableView = (props) => {
  // const [selected, select] = useState(null);

  const { columns, data, handleDelete } = props;
  const handleClick = (idx) => {
    props.selectUser(idx);
  };

  // useEffect(()=>{

  // })
  console.log("props:", props);
  return (
    <>
      <UserModal
        selectedUser={props.selectedUser}
        show={props.selectedUser?.id ? true : false}
        edit={true}
        handleEdit={props.updateUser}
      />
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
                <td
                  className="name"
                  role="button"
                  onClick={() => handleClick(user.id)}
                >
                  <p>{user.name}</p>
                </td>
                <td
                  className="email"
                  role="button"
                  onClick={() => handleClick(user.id)}
                >
                  <p>{user.email}</p>
                </td>
                <td
                  className="role"
                  role="button"
                  onClick={() => handleClick(user.id)}
                >
                  <p>{user.role}</p>
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
