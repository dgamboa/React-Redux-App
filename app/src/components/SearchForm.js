import React, { useState } from "react";
import { connect } from "react-redux";

import { getUser } from "../actions";

const SearchForm = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
  }

  return (
    <form className="input-username" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
    </form>
  )
}

const mapStateToStore = state => {
  return ({
    user: state.user,
    followers: state.followers,
    isFetching: state.isFetching,
    error: state.error
  });
};

export default connect(mapStateToStore, { getUser })(SearchForm);