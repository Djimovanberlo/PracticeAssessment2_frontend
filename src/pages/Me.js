import React, { useEffect, useState } from "react";
import { selectUserId } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectStories } from "../store/user/selectors";
import fetchOnePage from "../store/singlePage/actions";
import { selectSinglePage } from "../store/singlePage/selectors";

import SinglePage from "../components/Other";
import { getUserWithStoredToken } from "../store/user/actions";

export default function MyPage(props) {
  const dispatch = useDispatch();
  const [formState, set_formState] = useState(false);

  const singlePage = useSelector(selectSinglePage);
  const { id, homePage, token } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, []);

  useEffect(() => {
    dispatch(fetchOnePage(id));
  }, []);

  const mappedStories = singlePage.stories.map((story) => (
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
    color: singlePage.color,
    backgroundColor: singlePage.backgroundColor,
  };

  function showStoryForm() {
    console.log("storytime");
    set_formState(true);
    console.log(formState);
  }

  return (
    <div style={colors}>
      <div>{singlePage.title}</div> <div>{singlePage.content}</div>
      <input type="button" onClick={showStoryForm} value="show story form" />
      <div>{formState ? <div>form</div> : null}</div>
    </div>
  );
}
