import React, { useEffect, useState } from "react";
import { selectSinglePage, selectStories } from "../store/singlePage/selectors";
import fetchOnePage from "../store/singlePage/actions";
import { useDispatch, useSelector } from "react-redux";
import SinglePage from "../components/Other";

export default function Other({ match }) {
  const dispatch = useDispatch();
  const singlePage = useSelector(selectSinglePage);

  const {
    params: { id },
  } = match;
  console.log(id);
  // https://learnwithparam.com/blog/dynamic-pages-in-react-router/

  useEffect(() => {
    dispatch(fetchOnePage(id));
  }, []);

  console.log("YA YA", singlePage.stories);

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

  // const sortedActivities = activities.slice().sort((a, b) => b.date - a.date)

  const colors = {
    color: singlePage.color,
    backgroundColor: singlePage.backgroundColor,
  };

  return (
    <div style={colors}>
      <h4>{singlePage.title}</h4>
      <div>{singlePage.description}</div>
      <div>{sortedStories}</div>
    </div>
  );
}
