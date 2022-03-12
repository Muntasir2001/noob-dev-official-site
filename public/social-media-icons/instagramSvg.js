import React from 'react';

const InstagramIcon = ({ width, height, color }) => {
	return (
		<svg
			// xmlns='http://www.w3.org/2000/svg'
			// xmlns:xlink='http://www.w3.org/1999/xlink'
			width={width}
			height={height}
			stroke={color}
			viewBox='0 0 37.645 37.645'
		>
			<defs>
				<linearGradient
					id='linear-gradient'
					x1='0.146'
					y1='0.854'
					x2='0.854'
					y2='0.146'
					gradientUnits='objectBoundingBox'
				>
					<stop offset='0' stopColor='#ffd521' />
					<stop offset='0.055' stopColor='#ffd020' />
					<stop offset='0.124' stopColor='#fec01e' />
					<stop offset='0.2' stopColor='#fca71b' />
					<stop offset='0.282' stopColor='#fa8316' />
					<stop offset='0.368' stopColor='#f85510' />
					<stop offset='0.456' stopColor='#f51e09' />
					<stop offset='0.5' stopColor='#f30005' />
					<stop offset='0.503' stopColor='#f20007' />
					<stop offset='0.597' stopColor='#e1003b' />
					<stop offset='0.688' stopColor='#d30067' />
					<stop offset='0.776' stopColor='#c70088' />
					<stop offset='0.859' stopColor='#bf00a0' />
					<stop offset='0.936' stopColor='#bb00af' />
					<stop offset='1' stopColor='#b900b4' />
				</linearGradient>
			</defs>
			<g
				id='Instagram_icon'
				data-name='Instagram icon'
				transform='translate(0 0)'
			>
				<g id='Group_5' data-name='Group 5' transform='translate(0 0)'>
					<g id='instagram_image' data-name='instagram image'>
						<path
							id='Path_38'
							data-name='Path 38'
							d='M18.822,37.645h0A18.824,18.824,0,0,1,0,18.822H0A18.824,18.824,0,0,1,18.822,0h0A18.824,18.824,0,0,1,37.645,18.822h0A18.824,18.824,0,0,1,18.822,37.645Z'
							fill='url(#linear-gradient)'
						/>
						<g
							id='Group_3'
							data-name='Group 3'
							transform='translate(5.97 5.974)'
						>
							<path
								id='Path_39'
								data-name='Path 39'
								d='M72.8,62.3c3.429,0,3.836.011,5.191.075a7.049,7.049,0,0,1,2.387.444,4.249,4.249,0,0,1,2.436,2.436,7.147,7.147,0,0,1,.444,2.387c.06,1.355.075,1.762.075,5.191s-.011,3.836-.075,5.191a7.049,7.049,0,0,1-.444,2.387,4.249,4.249,0,0,1-2.436,2.436,7.146,7.146,0,0,1-2.387.444c-1.355.06-1.762.075-5.191.075s-3.836-.011-5.191-.075a7.049,7.049,0,0,1-2.387-.444,4.249,4.249,0,0,1-2.436-2.436,7.147,7.147,0,0,1-.444-2.387c-.06-1.355-.075-1.762-.075-5.191s.011-3.836.075-5.191a7.05,7.05,0,0,1,.444-2.387,4.249,4.249,0,0,1,2.436-2.436,7.147,7.147,0,0,1,2.387-.444c1.355-.064,1.762-.075,5.191-.075m0-2.315c-3.49,0-3.926.015-5.3.079a9.444,9.444,0,0,0-3.121.6,6.2,6.2,0,0,0-2.274,1.479,6.324,6.324,0,0,0-1.483,2.278,9.5,9.5,0,0,0-.6,3.121c-.064,1.37-.079,1.807-.079,5.3s.015,3.926.079,5.3a9.444,9.444,0,0,0,.6,3.121,6.592,6.592,0,0,0,3.761,3.753,9.5,9.5,0,0,0,3.121.6c1.37.064,1.807.079,5.3.079s3.926-.015,5.3-.079a9.444,9.444,0,0,0,3.121-.6,6.592,6.592,0,0,0,3.753-3.761,9.5,9.5,0,0,0,.6-3.121c.064-1.37.079-1.807.079-5.3s-.015-3.926-.079-5.3a9.444,9.444,0,0,0-.6-3.121,6.592,6.592,0,0,0-3.761-3.753,9.5,9.5,0,0,0-3.121-.6c-1.367-.06-1.8-.075-5.293-.075Z'
								transform='translate(-59.951 -59.989)'
								fill='#fff'
							/>
							<path
								id='Path_40'
								data-name='Path 40'
								d='M129.336,122.737a6.6,6.6,0,1,0,6.6,6.6A6.6,6.6,0,0,0,129.336,122.737Zm0,10.883a4.284,4.284,0,1,1,4.284-4.284A4.284,4.284,0,0,1,129.336,133.62Z'
								transform='translate(-116.484 -116.488)'
								fill='#fff'
							/>
							<circle
								id='Ellipse_1'
								data-name='Ellipse 1'
								cx='1.543'
								cy='1.543'
								r='1.543'
								transform='translate(18.167 4.446)'
								fill='#fff'
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default InstagramIcon;

InstagramIcon.defaultProps = {
	width: '37.645',
	height: '37.645',
};
