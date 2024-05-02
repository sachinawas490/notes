
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function Notes() {
    const navigate=useNavigate();
	return (
		<>
			<Header></Header>
			<div className="h-[91vh] bg-slate-800 py-5 min-mx-[150px]">
				<div className="text-[40px] font-serif text-center ">
					Welcome back Sachin Awasthi ...
				</div>
				<button className="btn btn-wide md:mx-[100px] my-5 shadow-slate-600 shadow-xl">
					Add new Note
				</button>

				<div className="md:mx-[100px] my-5 border-2 border-sla shadow-grey-500 shadow-red-500 shadow-lg">
					<div className="collapse bg-base-200">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Click me to show/hide content
							
						</div>
						<div className="collapse-content">
							<p>hello
                            <button className="btn  float-right  btn-outline btn-success mx-5 py-0"
                            onClick={()=>navigate('/addnotes')}
                            >
								Update
							</button>
							<button className="btn btn-outline btn-warning float-right">
								Delete
							</button>
                            </p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Notes;
