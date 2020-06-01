import React, { useEffect, useState } from "react";
import { selectUserId } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectStories } from "../store/user/selectors";
import fetchOnePage from "../store/singlePage/actions";

import SinglePage from "../components/Other";
import { getUserWithStoredToken } from "../store/user/actions";

export default function MyPage(props) {
  const dispatch = useDispatch();
  // const myId = useSelector(selectUserId);
  const myPage = useSelector(selectUser);
  console.log("my page", myPage);

  useEffect(() => {
    dispatch(getUserWithStoredToken(2));
  }, []);

  const mappedStories = myPage.stories.map((story) => (
    <SinglePage
      key={story.id}
      name={story.name}
      content={story.content}
      createdAt={story.createdAt}
    />
  ));

  const sortedStories = mappedStories
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt);

  const colors = {
    color: myPage.color,
    backgroundColor: myPage.backgroundColor,
  };

  return (
    <div style={colors}>
      <div>HOI</div>
      <h4>{myPage.title}</h4>
      <div>{myPage.description}</div>
      <div>{sortedStories}</div>
    </div>
  );
}
