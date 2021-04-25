
import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    // await axios.get("http://localhost:5000/auth/logout");
    await axios.get(
      "http://localhost:1996/auth/logout"
    );
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;