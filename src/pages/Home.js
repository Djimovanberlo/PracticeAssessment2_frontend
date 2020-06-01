import React, { useEffect, useState } from "react";
// import axios from "axios";
import HomePage from "../components/HomePage";
import { selectAllHomePages } from "../store/homePages/selectors";
import fetchHomePages from "../store/homePages/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const homePageList = useSelector(selectAllHomePages);
  // console.log("list", homePageList);

  useEffect(() => {
    dispatch(fetchHomePages);
  }, []);

  const mappedHomePages = homePageList.map((page) => (
    <HomePage
      key={page.id}
      id={page.id}
      backgroundColor={page.backgroundColor}
      color={page.color}
      title={page.title}
      description={page.description}
    />
  ));

  return (
    <div>
      <div>See all homepages</div>
      <div>{mappedHomePages}</div>
    </div>
  );
}
