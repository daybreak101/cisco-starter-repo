import React, { useState, useEffect } from 'react';


function GetIP({version}) {
  const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
    function determineURL(){
        if(version === '4'){
                    fetch('https://api.ipify.org?format=json')
                    .then(response => response.json())
                    .then(data => setIpAddress(data.ip))
                    .catch(error => console.error(error));
        }
        else if(version === '6'){
                    fetch('https://api64.ipify.org?format=json')
                    .then(response => response.json())
                    .then(data => setIpAddress(data.ip))
                    .catch(error => console.error(error));
        }
        else{
            setIpAddress("incorrect");
        }
    }

    console.log(version);
        determineURL();
    }, []);




  return (
      <div>
         {ipAddress} 
      </div>
  );
}

export default GetIP;