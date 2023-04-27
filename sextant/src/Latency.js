import React, { useState, useEffect } from 'react';

function Latency(){
    const [latency, setLatency] = useState('NA');


    useEffect(() => {
        let client = new WebSocket('ws://localhost:55455');
        client.addEventListener('open', (event) => {
            console.log('WebSocket connection opened', event);
        });
        client.addEventListener('message', (event) => {
            setLatency(Date.now() - event.data);
        });
        client.addEventListener('close', (event) => {
            console.log('WebSocket connection closed:', event);
        });
        client.addEventListener('error', (event) => {
            console.log('WebSocket error:', event);
        });

        return () => {
            client.close();
           };


  
    }, []);

	return(
		<div>
			<p>{latency} </p> 
		</div>
	);
}

export default Latency;