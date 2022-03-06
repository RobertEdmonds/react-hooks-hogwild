import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	const [checkGrease, setCheckGrease] = useState(false)
	const [isGrease, setIsGrease] = useState(false)
	console.log("hi")
	function theGrease(item){
		setCheckGrease(item)
	}
	const handleGrease = hogs.filter(pig => {
		if(checkGrease === (isGrease? false : true))return true;

		return pig.greased === checkGrease
	})
	function showGrease(){
		setIsGrease(!isGrease)
	} 
	
	return (
		<div className="App">
			<Nav hogs={handleGrease} theGrease={theGrease} isGrease={isGrease} showGrease={showGrease}/>
		</div>
	);
}

export default App;
