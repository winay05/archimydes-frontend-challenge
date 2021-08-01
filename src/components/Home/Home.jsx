import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { data } from "../../data";
import TableView from "../TableView/TableView";
import UserModal from "../UserModal/UserModal";

import "./Home.css";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      id: 0,
      selectedUser: null,
    };
  }
  componentDidMount() {
    this.setState({ users: data, id: data.length });
  }
  updateUser = (user) => {
    let usersUpdated = this.state.users;
    usersUpdated = usersUpdated.map((u) => {
      if (u.id === user.id) return user;
      else return u;
    });
    this.setState({ users: usersUpdated, selectedUser: null });
  };
  createUser = (user) => {
    user.id = this.state.id + 1;
    this.setState({
      users: [user, ...this.state.users],
      id: this.state.id + 1,
    });
  };
  deleteUser = (idx) => {
    this.setState({
      users: this.state.users.filter((el) => el.id !== idx),
      selectedUser: null,
    });
  };
  selectUser = (idx) => {
    console.log(idx);
    this.setState(
      {
        selectedUser: { ...this.state.users.find((el) => el.id === idx) },
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <>
        <Container className="main-container">
          <div id="top">
            <h4>Users</h4>
            <UserModal handleCreate={this.createUser} />
          </div>

          <Row className="action-table">
            <TableView
              selectedUser={this.state.selectedUser}
              selectUser={this.selectUser}
              updateUser={this.updateUser}
              columns={Object.keys(data[0]).slice(1)}
              data={this.state.users}
              handleDelete={this.deleteUser}
            />
          </Row>
        </Container>
      </>
    );
  }
}
