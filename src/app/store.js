import { configureStore } from "@reduxjs/toolkit";
import artistsReducer from "../features/artists/artistsSlice";

export default configureStore({
  reducer: {
    artists: artistsReducer,
  },
});
