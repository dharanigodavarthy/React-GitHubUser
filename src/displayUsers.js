import React, { Component } from "react";
class Users extends Component {
  render() {
    var users = this.props.usersInfo;
    var namesList = users.map((user, index) => {
      return (
        <div key={index}>
          <div key={index}>
            <img
              src={user.avatar_url}
              alt="NoImage"
              width={100}
              height={100}
              mode="fit"
              className="img-responsive"
            />
            <li key={index}>
              <a href={user.html_url} target="_blank">
                {user.login}
              </a>
              <br />repos:{user.public_repos}
            </li>
          </div>
        </div>
      );
    });

    return <ul>{namesList.reverse()}</ul>;
  }
}

export default Users;
