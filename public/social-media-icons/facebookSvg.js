import React from 'react';

const FacebookIcon = ({ width, height, color }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			stroke={color}
			viewBox='0 0 35.027 35.027'
		>
			<g
				id='Facebook_icon'
				data-name='Facebook icon'
				transform='translate(0)'
			>
				<g id='Icons_4_' transform='translate(0 0)'>
					<g id='Group_2' data-name='Group 2'>
						<path
							id='Path_37'
							data-name='Path 37'
							d='M26.175,8.655A17.514,17.514,0,1,0,43.682,26.163,17.513,17.513,0,0,0,26.175,8.655Zm6.642,9.861s-.571-.023-2.534,0c-1.917.023-1.94,1.461-1.94,1.529l-.023,3.641,4.5.091-.662,4.645H28.343l-.114,9.827H23.606l-.137-9.8-4.052-.023.1-4.737h3.995V20.262c.011-.365.046-.73.091-1.1a6.886,6.886,0,0,1,.7-2.317,4.873,4.873,0,0,1,1.347-1.586,5.513,5.513,0,0,1,1.94-.913,6.1,6.1,0,0,1,1.5-.24c.651-.023,3.207.057,3.846.068Z'
							transform='translate(-8.655 -8.655)'
							fill='#3b5998'
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default FacebookIcon;

FacebookIcon.defaultProps = {
	width: '35.027',
	height: '35.027',
};
