import React, { useEffect } from "react";
import { selectOnePage } from "../store/homePages/selectors";
import fetchOnePage from "../store/singlePage/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Other({ match }) {
  const {
    params: { id },
  } = match;
  console.log(id);
  // https://learnwithparam.com/blog/dynamic-pages-in-react-router/

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePage(id));
  }, []);

  return <div>Hoi</div>;
}
