import React, { useEffect, useState } from "react";
import { selectUserId } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectStories } from "../store/user/selectors";
import { fetchOnePage, makeStory } from "../store/singlePage/actions";
import { selectSinglePage } from "../store/singlePage/selectors";
import { useHistory } from "react-router-dom";
import SinglePage from "../components/Other";
import { getUserWithStoredToken } from "../store/user/actions";

export default function MyPage(props) {
  const dispatch = useDispatch();
  const [formState, set_formState] = useState(false);
  const [imgState, set_imgState] = useState(false);
  const [formData, set_formData] = useState({});
  const history = useHistory();

  const singlePage = useSelector(selectSinglePage);
  const { id, homePage, token } = useSelector(selectUser);
  // console.log("id etc", id, homePage, token);

  if (token === null) {
    history.push("/");
  }

  // useEffect(() => {
  //   dispatch(getUserWithStoredToken());
  // }, []);

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

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    set_formData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("1", formData);
    // thunk(formData)
    dispatch(makeStory(formData));
  }

  return (
    <div style={colors}>
      <div>{singlePage.title}</div> <div>{singlePage.content}</div>
      <input
        type="button"
        onClick={() => set_formState(true)}
        value="show story form"
      />
      <div>
        {formState ? (
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>
                    <input type="text" name="name" onChange={handleChange} />
                  </th>
                </tr>
                <tr>
                  <th>Content</th>
                  <th>
                    <input type="text" name="content" onChange={handleChange} />
                  </th>
                </tr>
                <tr>
                  <th>imageURL</th>
                  <th>
                    <input
                      type="text"
                      onChange={handleChange}
                      // onInput={handleChange}
                      name="imageUrl"
                    />
                  </th>
                  <th>
                    <input
                      type="button"
                      onClick={() => set_imgState(true)}
                      value="preview img"
                    />
                    {imgState ? <img src={formData.imageUrl} /> : null}
                  </th>
                </tr>
                <tr>
                  <th>
                    <input type="submit" />
                  </th>
                </tr>
              </tbody>
            </table>
          </form>
        ) : null}
      </div>
      <div>{sortedStories}</div>
    </div>
  );
}
