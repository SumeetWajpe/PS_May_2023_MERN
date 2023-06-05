import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { sagaActions } from "../../saga/sagaActions";
import { UserModel } from "../../models/user.model";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  let [user, setUser] = useState<UserModel>(new UserModel());
  let isAuthenticated = useSelector<RootState>(
    store => store.login.isUserAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    // <div className="mainContainer">
    <div className="wrapper fadeInDown d-flex justify-content-center align-items-center">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            id="icon"
            alt="User Icon"
            height="100px"
            width="100px"
          />
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            // dispatch
            dispatch({ type: sagaActions.AUTHENTICATE_USER, payload: user });
          }}
        >
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            value={user.name}
            onChange={e =>
              setUser({ ...user, name: e.target.value, id: Math.random() })
            }
          />
          <br />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <br />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}
