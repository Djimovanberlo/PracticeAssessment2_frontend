import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarItem path="/me" linkText="My Page" />
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
  // }

  //   /* <NavbarItem path="/login" linkText="Login" /> */
}
