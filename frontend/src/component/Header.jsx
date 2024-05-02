import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { logout } from "../redux/slice/userslice";
function Header() {
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const handleclick=(e)=>{
		e.preventDefault();
		console.log("logout done")
		// localStorage.removeItem("userInfomation")
		dispatch(logout());
		navigate('/')
		
	}
	return (
		{
			
		}
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
								<li>
							{/* <a>Home</a> */}
							<Link to={'/notes'}>Home</Link>
						</li>

						<li>
							<Link to={'/addnotes'}>add notes</Link>
						</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">Note's</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							{/* <a>Home</a> */}
							<Link to={'/notes'}>Home</Link>
						</li>

						<li>
							<Link to={'/addnotes'}>add notes</Link>
						</li>
					</ul>
				</div>
				
				<div className="flex justify-end flex-1 px-2">
					<div className="flex items-stretch">
						
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								
								className="btn btn-ghost rounded-btn"
							>
								<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://res.cloudinary.com/ddoraw0mr/image/upload/v1714325757/zugaaqjdrhfmyhblggtn.png"
								/>
							</div>
						</div>
							</div>
							<ul
								tabIndex={0}
								className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
							>
								<li>
									<a> Profile </a>
								</li>
								<li>
								
									<button onClick={handleclick}>Logout</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
