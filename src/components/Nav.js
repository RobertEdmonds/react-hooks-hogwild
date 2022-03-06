import React from "react";
import piggy from "../assets/porco.png";
import HogCard from "./HogCard";

const Nav = ({hogs, theGrease, isGrease, showGrease}) => {


	const separateHogs = hogs.map(pig=>{
		return(<HogCard key={pig.name} name={pig.name} image={pig.image} specialty={pig.specialty} greased={pig.greased} theGrease={theGrease(pig.greased)}  weight={pig.weight} medal={pig[`highest medal achieved`]} />)
	})

	

	return (
		<>
			<div className="navWrapper">
				<span className="headerText">HogWild</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">
					A React App for County Fair Hog Fans
				</span>
			</div>
			<button onClick={showGrease}>{isGrease? "Greased" : "Not Greased"}</button>
			<div>
				{separateHogs}

			</div>

		</>
	);
};

export default Nav;
