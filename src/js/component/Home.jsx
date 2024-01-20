import React from "react";
import SecondsCounter from "./SecondsCounter";
import { useEffect,useState } from "react";



const Home = () => {
	
	const [counter,setCounter]=useState(0);

    useEffect(()=>{
        //component mounting
        const interval= setInterval(() => {
            setCounter(counter => counter +1);
        }, 1000); 
        console.log(counter)

        //component unmount
        return ()=> clearInterval(interval)
    },[counter])

	function calculateSeconds (aCounter,placeValue){
		return Math.floor(aCounter/placeValue) % 10
	}

    //no depency array:constantly will update as needed
    // Empty array: run once
    //array with state variable: will only update when state changes
	
	return (

		
		<div>
			<SecondsCounter
			digitThousandths ={calculateSeconds(counter,1000)}
			digitHundredths ={calculateSeconds(counter,100)}
			digitTens ={calculateSeconds(counter,10)}
			digitOnes ={calculateSeconds(counter,1)}
			/>
			
		</div>
	);
};

export default Home;
