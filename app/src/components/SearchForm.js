import React, { useState } from "react";
import { connect } from "react-redux";

import { getUser } from "../actions";

const SearchForm = (props) => {
  const [username, setUsername] = useState("");
  const { user, followers, isFetching, error, getUser } = props;

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser();
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Loading new user...</h2>;
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