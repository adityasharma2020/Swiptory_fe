import React from 'react';

const Loader = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width={50} height={40} >
			<circle fill='#ffffff' stroke='#ffffff' strokeWidth='9' r='15' cx='40' cy='50'>
				<animate
					attributeName='opacity'
					calcMode='spline'
					dur='1'
					values='1;0;1;'
					keySplines='.5 0 .5 1;.5 0 .5 1'
					repeatCount='indefinite'
					begin='-.4'
				></animate>
			</circle>
			<circle fill='#ffffff' stroke='#ffffff' strokeWidth='9' r='15' cx='110' cy='50'>
				<animate
					attributeName='opacity'
					calcMode='spline'
					dur='1'
					values='1;0;1;'
					keySplines='.5 0 .5 1;.5 0 .5 1'
					repeatCount='indefinite'
					begin='-.2'
				></animate>
			</circle>
			<circle fill='#ffffff' stroke='#ffffff' strokeWidth='9' r='15' cx='170' cy='50'>
				<animate
					attributeName='opacity'
					calcMode='spline'
					dur='1'
					values='1;0;1;'
					keySplines='.5 0 .5 1;.5 0 .5 1'
					repeatCount='indefinite'
					begin='0'
				></animate>
			</circle>
		</svg>
	);
};

export default Loader;
