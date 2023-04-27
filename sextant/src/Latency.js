import React, { useState, useEffect } from 'react';


function Latency(){
	const [latency, setLatency] = useState(0);




//	useEffect(() => {

//		const exampleSocket = new WebSocket(
//		"ws://localhost:55455",
//		"Pylon"
//		);

//		exampleSocket.onmessage = (event) => {
//		const msg = JSON.parse(event.data);
//		const time = new Date(msg.date);
//		const timeStr = time.toLocaleTimeString();
//		setLatency(timeStr);
//	};

 //   });



	return(
		<div>
			{latency}
		</div>
	);
}

export default Latency;