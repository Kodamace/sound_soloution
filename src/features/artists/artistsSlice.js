import { client } from "../../api/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: [],
  searchedName: "",
  externalArtistsDetailsForFanCount: [],
  artistData: {},
  currentArtistsTop5Tracks: [],
  loadingTracksStatus: "idle",
  status: "idle",
  error: null,
  singleArtistDetailsStatus: "idle",
  artistDataStatus: "idle",
  gettingExternalArtistDetailsStatus: false,
  artistsViewable: false,
  isViewingArtist: false,
};

const hostName = "http://localhost:8000/search?q=";

const artistHost = "http://localhost:8000/artist";

const top5TracksHost = "http://localhost:8000/top5tracks";

export const searchArtists = createAsyncThunk(
  "artists/getArtists",
  async (searchedName) => {
    const response = await client.get(hostName + searchedName);

    return response;
  }
);

export const searchArtistsByLetter = createAsyncThunk(
  "artists/searchArtists",
  async (searchedName) => {
    const response = await client.get(hostName + searchedName);

    return response;
  }
);

export const getExternalArtistDetails = createAsyncThunk(
  "artists/getExternalArtistDetailsForFanCount",
  async (id) => {
    const response = await client.get(artistHost + id);

    return response;
  }
);

export const getsingleArtistDetails = createAsyncThunk(
  "artists/getSingleArtistDetails",
  async (id) => {
    const response = await client.get(artistHost + id);

    return response;
  }
);

export const getTop5Tracks = createAsyncThunk(
  "artists/getTop5Tracks",
  async (id) => {
    const response = await client.get(top5TracksHost + id);

    return response;
  }
);

export const users = createSlice({
  name: "artists",
  initialState: initialState,
  reducers: {
    setSearchName(state, action) {
      state.searchedName = action.payload;
    },
    setIsViewingArtist(state, action) {
      state.isInFocus = action.payload;
    },
  },
  extraReducers: {
    // search artists by name when a user types with a delayed response
    [searchArtistsByLetter.pending]: (state, action) => {
      state.status = "loading";
      state.artistsDetails = [];
      state.artistsViewable = false;
    },
    [searchArtistsByLetter.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.artists = action.payload;
      state.artistsViewable = true;
    },
    [searchArtistsByLetter.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    // --------------------------

    // get data for each user from a seperate api
    [getExternalArtistDetails.fulfilled]: (state, action) => {
      state.externalArtistsDetailsForFanCount.push(action.payload);
      state.externalArtistsDetailsForFanCount?.forEach((item) => {
        state.gettingExternalArtistDetailsStatus = !state.gettingExternalArtistDetailsStatus;
      });
    },
    //  -----------------------
    // get single artist details for artist page

    [getsingleArtistDetails.fulfilled]: (state, action) => {
      state.singleArtistDetailsStatus = "succeeded";

      state.artistData = action.payload;
    },

    // ------------
    // get top tracks and albums of the artist clicked on
    [getTop5Tracks.pending]: (state, action) => {
      state.loadingTracksStatus = "loading";
    },
    [getTop5Tracks.fulfilled]: (state, action) => {
      state.loadingTracksStatus = "succeeded";

      state.currentArtistsTop5Tracks = action.payload;
    },
    // ==============================
  },
});

export const { setSearchName, setIsViewingArtist } = users.actions;
export default users.reducer;

export const getAllArtists = (state) => state.artists.artists;
export const artistPersonalData = (state) => state.artists.artistsDetails;
