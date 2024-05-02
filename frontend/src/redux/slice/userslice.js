import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchuser = createAsyncThunk("fetchuser", async (temp) => {
	console.log("fetchdata", temp);
	// try {
	// 	const response = await axios.post(
	// 		"http://localhost:4004/user/getdata",
	// 		data
	// 	);
	// 	console.log(response);
	// 	if (response.status === 201) {
	// 		navigate("/notes");
	// 		// alert("login successfully done !! click ok");
	// 	}
	// } catch (error) {
	// 	// if (error.response.status === 401) {
	// 	// 	alert("error occured in the login");
	// 	// }
	// }
	try {
		const response = await axios.post(
			"http://localhost:4004/user/getdata",
			temp
		);
		console.log("response >", response.data.message);
		return response.data.message; // assuming response.data contains the actual data
	} catch (error) {
		console.log(error);
		throw error; // Use throw to pass the error to the rejected state
	}
});
export const logout = createAsyncThunk("logout", async (req, res) => {
	localStorage.removeItem("userInfomation");
});
const initial = {
	name: "sachin",
	age: 0,
	section: "",
	maindata: [],
	status: "idle",
	loading:false,
	error: null,
	logout:true
};

const userSlice = createSlice({
	name: "user",
	initialState: initial,
	reducers: {
		addname: (state, action) => {
			state.name = action.payload;
		},
		addage: (state, action) => {
			state.age = action.payload;
		},
		addsection: (state, action) => {
			state.section = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchuser.pending, (state) => {
				state.status = "pending";
				state.loading=true;
				state.logout=false
			})
			.addCase(fetchuser.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.maindata = action.payload;
				state.loading=false;
				// localStorage.setItem("userInfo",state.maindata);
				console.log("successs");
				localStorage.setItem("userInfomation", JSON.stringify(action.payload));
			})
			.addCase(fetchuser.rejected, (state) => {
				state.status = "rejected";
			})
			.addCase(logout.fulfilled,async(state)=>{
             state.logout=true;
			})
	},
});

export const { addage, addname, addsection } = userSlice.actions;
export default userSlice.reducer;
