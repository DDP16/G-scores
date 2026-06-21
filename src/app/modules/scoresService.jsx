import api from "./AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiBaseUrl = "api/gscores";

export const getScores = createAsyncThunk(
    "scores/getScores",
    async (params = {}, { rejectWithValue }) => {
        try {
            const queryParams = Object.fromEntries(
                Object.entries(params).filter(
                    ([, value]) => value !== undefined && value !== null && value !== ""
                )
            );

            const response = await api.get(`${apiBaseUrl}/`, {
                params: queryParams,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.message || "Something went wrong");
        }
    }
);

export const getScoreBySBD = createAsyncThunk(
    "scores/getScoreBySBD",
    async (sbd, { rejectWithValue }) => {
        try {
            const response = await api.get(`${apiBaseUrl}/${sbd}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.message || "Something went wrong");
        }
    }
);

const initialState = {
    scores: [],
    scoreDetails: null,
    pagination: null,
    status: "idle",
    error: null,
};

const scoresSlice = createSlice({
    name: "scores",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getScores.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getScores.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.scores = action.payload;
            })
            .addCase(getScores.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(getScoreBySBD.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getScoreBySBD.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.scoreDetails = action.payload;
            })
            .addCase(getScoreBySBD.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default scoresSlice.reducer;