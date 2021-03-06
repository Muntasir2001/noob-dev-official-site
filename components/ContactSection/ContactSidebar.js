import styled from 'styled-components';

import { RedUnderline } from '../Utilities/Utils';
import GithubIcon from '../../public/other-icons/githubSvg';
import DiscordIcon from '../../public/social-media-icons/discordSvg';
import InstagramBwIcon from '../../public/social-media-icons/instagramBwSvg';

const SidebarParent = styled.div`
	background-color: #1b1c1e;
	width: 350px;
	max-height: 370px;
	display: flex;
	flex-direction: column;

	.title {
		color: #fff;
		text-transform: uppercase;
		margin-top: 60px;
		margin-left: 45px;
	}

	ul {
		list-style: none;
		margin-left: 45px;
		margin-top: 25px;

		li {
			padding: 15px 0;
			display: flex;
			align-items: center;

			a {
				display: flex;

				img {
					width: 30px;
				}

				p {
					padding-left: 32px;
				}
			}
		}
	}

	/* small laptop screen */
	@media screen and (max-width: 1024px) {
		width: 300px;
		max-height: 370px;
		display: flex;
		flex-direction: column;

		.title {
			color: #fff;
			text-transform: uppercase;
			margin-top: 60px;
			margin-left: 35px;
		}

		ul {
			list-style: none;
			margin-left: 35px;
			margin-top: 25px;

			li {
				padding: 15px 0;
				display: flex;
				align-items: center;

				a {
					display: flex;

					img {
						width: 30px;
					}

					p {
						padding-left: 20px;
					}
				}
			}
		}
	}

	/* mobile */
	@media screen and (max-width: 780px) {
		width: 100%;
		max-height: 380px;
		flex-direction: column;
		align-items: center;
		padding: 50px 0;

		.title {
			color: #fff;
			text-transform: uppercase;
			margin-top: 0px;
			margin-left: 0px;

			.red-underlines {
				height: 7px;
				background-color: #ff4454;
				max-width: 100px;
			}
		}

		ul {
			list-style: none;
			margin-left: 35px;
			margin-top: 25px;

			li {
				padding: 15px 0;
				display: flex;
				align-items: center;

				a {
					display: flex;

					img {
						width: 30px;
					}

					p {
						padding-left: 20px;
					}
				}
			}
		}
	}
`;

const ContactSidebar = () => {
	return (
		<>
			<SidebarParent>
				<div className='title'>
					<h2>contact info</h2>
					<RedUnderline />
				</div>
				<ul>
					<li>
						<a href='https://github.com/Muntasir2001' target='_blank'>
							<GithubIcon width={30} height={30} />
							<p>Muntasir2001</p>
						</a>
					</li>
					<li>
						<a href='https://discord.gg/vNe9QVrWNa' target='_blank'>
							<DiscordIcon width={31} height={31} />
							<p>Join my Discord server</p>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/noob_dev54/'
							target='_blank'
						>
							<InstagramBwIcon width={30} height={30} />
							<p>noob_dev54</p>
						</a>
					</li>
				</ul>
			</SidebarParent>
		</>
	);
};

export default ContactSidebar;
