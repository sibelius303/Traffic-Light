import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [selectColor, setSelectColor] = useState ("");
	return (
		<div className="container">
			<div className="palito"></div>
			<div className="semaforo">
				<div
				onClick={()=> setSelectColor("red")}
				 className={"red" + (selectColor === "red" ? " brillo": "")
				 }></div>

				<div
				onClick={()=> setSelectColor("yellow")} 
				className={"yellow" + (selectColor === "yellow" ? " brillo": "")
				}></div>

				<div
				onClick={()=> setSelectColor("green")}
				 className={"green" + (selectColor === "green" ? " brillo": "")
				 }></div>

			</div>
			<button
			onClick={()=> setSelectColor ("")}
			>Off</button>
		</div>

			
	);
};

export default Home;
