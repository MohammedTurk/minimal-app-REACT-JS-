import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";
const initialState = {
  posts: [
    {
      id: 1,
      date: "SAT, OCT 30 @ 4:00 PM IST",
      work: "Carrier & Business",
      location: "Startups & Entrepreneurs - Open house networking",
      para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
      avatarFollowers: [1, 2, 3, 4, 5],
      share: 20,
      exp: 46,
    },
    {
      id: 2,
      date: "SAT, OCT 30 @ 4:00 PM IST",
      work: "Carrier & Business",
      location: "Startups & Entrepreneurs - Open house networking",
      para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
      avatarFollowers: [1, 2, 3, 4, 5],
      share: 20,
      exp: 46,
    },
    {
      id: 3,
      date: "SAT, OCT 30 @ 4:00 PM IST",
      work: "Carrier & Business",
      location: "Startups & Entrepreneurs - Open house networking",
      para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
      avatarFollowers: [1, 2, 3, 4, 5],
      share: 20,
      exp: 46,
    },
    {
      id: 4,
      date: "SAT, OCT 30 @ 4:00 PM IST",
      work: "Carrier & Business",
      location: "Startups & Entrepreneurs - Open house networking",
      para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
      avatarFollowers: [1, 2, 3, 4, 5],
      share: 20,
      exp: 46,
    },
    {
      id: 5,
      date: "SAT, OCT 30 @ 4:00 PM IST",
      work: "Carrier & Business",
      location: "Startups & Entrepreneurs - Open house networking",
      para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
      avatarFollowers: [1, 2, 3, 4, 5],
      share: 20,
      exp: 46,
    },
    {
      id: 6,
      date: "SAT, OCT 30 @ 4:00 PM IST",
      work: "Carrier & Business",
      location: "Startups & Entrepreneurs - Open house networking",
      para: "Chandigarh Entrepreneurs Group. Chandigarh, IN",
      avatarFollowers: [1, 2, 3, 4, 5],
      share: 20,
      exp: 46,
    },
  ],
  isLoading: false,

  post: null,
};

// GET POSTS

const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    addItem(state, action) {
      state.posts.push(action.payload);
      console.log(initialState.posts);
    },
    // GET POST
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// // Actions
// export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------

// export function getPostsInitial() {
//   return async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/photos"
//     );
//     console.log(response);
//   };
// }

// export function getAllPosts() {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get("/api/blog/posts/all");
//       dispatch(slice.actions.getPostsSuccess(response.data.posts));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function getPostsInitial() {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/photos"
//       );

//       dispatch(slice.actions.getPostsInitial(response.data));
//       //   console.log("donne", initialState);
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// export function addItem() {
//   const item = { name: "ahmed" };
//   return (dispatch) => {
//     dispatch(slice.actions.addItem(item));
//   };
// }

// // ----------------------------------------------------------------------

export function getPost(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/blog/post", {
        params: { title },
      });
      dispatch(slice.actions.getPostSuccess(response.data.post));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// // ----------------------------------------------------------------------

// export function getRecentPosts(title) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get("/api/blog/posts/recent", {
//         params: { title },
//       });

//       dispatch(slice.actions.getRecentPostsSuccess(response.data.recentPosts));
//     } catch (error) {
//       console.error(error);
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
