import axios from "axios";

// import { apiUrl } from "../../config/constants";

const storeHomePage = (homePageData) => ({
  type: "SINGLE_PAGE",
  payload: homePageData,
});

export default function fetchOnePage(id) {
  return async function (dispatch, getState) {
    console.log("id", id);
    //   console.log("ww", apiUrl);
    //   const stateCheck = getState().onePage;
    //   if (stateCheck.length === 0) {
    const res = await axios.get(`http://localhost:4000/homepage/${id}`);
    console.log("res.data:", res.data);
    dispatch(storeHomePage(res.data));
    //   } else {
    //     console.log("page already fetched");
    //   }
  };
}

// "http://localhost:4000/"
