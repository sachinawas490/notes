import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Registration() {
	const [username, setusername] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [isadmin, setisadmin] = useState(false);
	const [image, setimage] = useState("");
	// console.log(isadmin);
	const handleClick = async () => {
		if (!username || !email || !password || !image) {
			alert("fill all fields");
			return;
		}
		const formdata = new FormData();
		formdata.append("image", image);
		formdata.append("username", username);
		formdata.append("email", email);
		formdata.append("password", password);
		formdata.append("isadmin",isadmin);
		
		

		try {
			const response = await axios.post(
				"http://localhost:4004/user/setdata",
				formdata
			);
			console.log(response);
			if(response.status===201){
				alert("registration successful")
			}
		} catch (error) {
			if(error.response.status===401){
				alert("error in registration");
			}
		}
	};
	return (
		<>
			<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-10 w-auto"
						src="https://www.svgrepo.com/show/301692/login.svg"
						alt="Workflow"
					/>
					<h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
						Note's App
					</h2>
					<p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
						<div
							className="
                            text-red-400 text-3xl
                            "
						>
							Register Here
						</div>
					</p>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form>
							<div>
								<label className="block text-sm font-medium leading-5  text-gray-700">
									Name
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="email"
										name="username"
										placeholder="Enter your Name"
										type="email"
										required=""
										value={username}
										onChange={(e) => setusername(e.target.value)}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
									<div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
										<svg
											className="h-5 w-5 text-red-500"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"></path>
										</svg>
									</div>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium leading-5  text-gray-700 mt-5">
									Email address
								</label>
								<div className="mt-1 relative rounded-md shadow-sm">
									<input
										id="email"
										name="email"
										placeholder="user@example.com"
										type="email"
										required=""
										value={email}
										onChange={(e) => setemail(e.target.value)}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
									{/* <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
										<svg
											className="h-5 w-5 text-red-500"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div> */}
								</div>
							</div>

							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">
									Password
								</label>
								<div className="mt-1 rounded-md shadow-sm">
									<input
										id="password"
										name="password"
										type="password"
										required=""
										onChange={(e) => setpassword(e.target.value)}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
							<div className="mt-6">
								<label className="block text-sm font-medium leading-5 text-gray-700">
									Image
								</label>
								<div className="mt-1 rounded-md shadow-sm">
									<input
										type="file"
										className="file-input file-input-bordered file-input-primary w-full max-w-xs bg-slate-500 min-w-full"
										onChange={(e) => setimage(e.target.files[0])}
									/>
								</div>
							</div>
							<div className="mt-6">
								<label htmlFor="isAdmin" className="block text-sm font-medium leading-5 text-gray-700">Is Admin:</label>
								<select className="mt-1 rounded-md shadow-sm"
									id="isAdmin"
									name="isAdmin"
									value={isadmin}
									onChange={(e) => setisadmin(e.target.value)}
								>
									<option value="true">Yes</option>
									<option value="false">No</option>
								</select>
							</div>

							<div className="mt-6">
								<span className="block w-full rounded-md shadow-sm">
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
										onClick={handleClick}
									>
										Register
									</button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Registration;
