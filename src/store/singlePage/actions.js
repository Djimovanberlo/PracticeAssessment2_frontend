import axios from "axios";
import { selectToken, selectUser } from "../user/selectors";

// import { apiUrl } from "../../config/constants";

// const storeHomePage = (homePageData) => ({
//   type: "SINGLE_PAGE",
//   payload: homePageData,
// });

export function makeStory(formData) {
  return async function (dispatch, getState) {
    const { token, id, homePage } = selectUser(getState());
    const { name, content, imageURL } = formData;
    console.log("2", formData, token, id, homePage);
    const response = await axios.post(
      `http://localhost:4000/homepage/${id}/stories`,
      {
        name,
        content,
        imageURL,
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("da res", response);
    // dispatch response
  };
}

const storeHomePage = (homePageData) => ({
  type: "SINGLE_PAGE",
  payload: homePageData,
});

export function fetchOnePage(id) {
  return async function (dispatch, getState) {
    // console.log("id", id);
    //   console.log("ww", apiUrl);
    //   const stateCheck = getState().onePage;
    //   if (stateCheck.length === 0) {
    const res = await axios.get(`http://localhost:4000/homepage/${id}`);
    // console.log("res.data:", res.data);
    dispatch(storeHomePage(res.data));
    //   } else {
    //     console.log("page already fetched");
    //   }
  };
}

// "http://localhost:4000/"
