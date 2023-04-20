// JavaScript source code

import React from 'react';


function Exhibition({header, children}){
	return(
		<div className="card">
		<div className="card-header">{header}</div>
		<div className="card-body">{children}</div>
		</div>
	);
}


export default Exhibition;