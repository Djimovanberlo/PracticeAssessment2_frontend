import axios from "axios";

const storeHomePages = (homePageData) => ({
  type: "ALL_HOMEPAGES",
  payload: homePageData,
});

export default async function fetchHomePages(dispatch, getState) {
  const stateCheck = getState().homePages;
  if (stateCheck.length === 0) {
    const res = await axios.get("http://localhost:4000/");
    console.log("res.data:", res.data);
    dispatch(storeHomePages(res.data));
  } else {
    console.log("pages already fetched");
  }
}
