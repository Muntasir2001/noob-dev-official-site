import React from 'react';

const LinkedinIcon = ({ width, height, color }) => {
	return (
		<svg
			id='LinkedIn_icon'
			data-name='LinkedIn icon'
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			stroke={color}
			viewBox='0 0 35.027 35.027'
		>
			<g id='Icons_4_' transform='translate(0 0)'>
				<g id='Group_4' data-name='Group 4'>
					<path
						id='Path_41'
						data-name='Path 41'
						d='M26.163,8.655A17.514,17.514,0,1,0,43.682,26.163,17.511,17.511,0,0,0,26.163,8.655ZM21.2,34.94c0,.205-.057.262-.263.262H17.66c-.205,0-.274-.057-.263-.262V23.355c-.011-.206.068-.274.263-.263h3.276c.217-.011.263.057.263.263ZM19.3,21.529a2.2,2.2,0,0,1-.011-4.406,2.2,2.2,0,1,1,.011,4.406ZM34.894,35.2H31.687c-.263,0-.274-.011-.274-.285V29.062a5.673,5.673,0,0,0-.171-1.644,1.616,1.616,0,0,0-1.666-1.255,2.047,2.047,0,0,0-1.644.582,2.331,2.331,0,0,0-.559,1.335,13.386,13.386,0,0,0-.08,1.358q-.017,2.756,0,5.513c0,.194-.057.251-.251.251h-3.3c-.194,0-.263-.057-.263-.251q.017-5.8,0-11.607c0-.205.068-.251.263-.251h3.15c.205,0,.262.068.262.263-.011.422,0,.856,0,1.278a3.946,3.946,0,0,1,2.4-1.678,5.233,5.233,0,0,1,3.413.274,3.4,3.4,0,0,1,1.929,2.4,7.986,7.986,0,0,1,.308,2.146c.011,2.363.023,4.737.034,7.1C35.237,35.2,35.237,35.2,34.894,35.2Z'
						transform='translate(-8.655 -8.655)'
						fill='#0097d3'
					/>
				</g>
			</g>
		</svg>
	);
};

export default LinkedinIcon;

LinkedinIcon.defaultProps = {
	width: '35.027',
	height: '35.027',
};
