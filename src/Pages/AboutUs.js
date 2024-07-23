import { Stack, Typography, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { GitHub } from '@mui/icons-material';
import Instagram from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { Navbar } from './';
import aboutCV from '../Utils/Images/aboutCV.jpg';

export default function ButtonMUI() {
	return (
		<>
			<Navbar />
			<Stack
				p={{ xs: '15px', sm: '20px', md: '30px', lg: '40px' }}
				spacing={4}
				sx={{
					backgroundColor: '#F6F1F1',
					minHeight: 'calc(100vh - 64px)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center'
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontWeight: 'bold',
						textAlign: 'center',
						color: '#146C94',
						mb: 3
					}}
				>
					ResumeBuilder
				</Typography>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={{ xs: 2, md: 4 }}
					alignItems="center"
					justifyContent="center"
				>
					<Box
						sx={{
							width: { xs: '100%', md: '50%' },
							textAlign: 'center',
							padding: { xs: '10px', md: '20px' }
						}}
					>
						<Typography
							sx={{
								fontSize: {
									xs: '16px',
									md: '18px',
									lg: '20px'
								},
								lineHeight: 1.6,
								color: '#333'
							}}
						>
							ResumeBuilding made easy and efficient. With
							ResumeBuilder, you can effortlessly create a
							standout resume with ease. Choose from templates,
							add a profile picture, input qualifications and work
							experience, and generate a polished resume
							instantly. Access your created resumes anytime
							through the "My Resumes" tab.
						</Typography>
					</Box>
					<Box
						sx={{
							width: { xs: '100%', md: '50%' },
							textAlign: 'center',
							padding: { xs: '10px', md: '20px' }
						}}
					>
						<img
							src={aboutCV}
							alt="Resume Builder"
							style={{
								width: '100%',
								maxWidth: '400px',
								height: 'auto',
								borderRadius: '10px',
								boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
							}}
						/>
					</Box>
				</Stack>
				<Box
					sx={{
						textAlign: 'center',
						mt: 4
					}}
				>
					<Typography
						variant="h5"
						sx={{
							fontWeight: '500',
							color: '#146C94',
							mb: 2
						}}
					>
						Kindly Share in your circle
					</Typography>
					<Stack direction="row" spacing={3} justifyContent="center">
						<Link
							to="https://www.instagram.com"
							target="_blank"
							aria-label="Instagram"
						>
							<Instagram
								sx={{
									fontSize: '40px',
									color: '#E4405F',
									transition: 'color 0.3s',
									'&:hover': { color: '#C13584' }
								}}
							/>
						</Link>
						<Link
							to="https://www.facebook.com/sarveshkumar.verman"
							target="_blank"
							aria-label="Facebook"
						>
							<FacebookOutlinedIcon
								sx={{
									fontSize: '40px',
									color: '#1877F2',
									transition: 'color 0.3s',
									'&:hover': { color: '#0055FF' }
								}}
							/>
						</Link>
						<Link
							to="https://www.linkedin.com/in/sarvesh-kumar-6751391a9/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<LinkedInIcon
								sx={{
									fontSize: '40px',
									color: '#0077B5',
									transition: 'color 0.3s',
									'&:hover': { color: '#0056A0' }
								}}
							/>
						</Link>
						<Link
							to="https://web.whatsapp.com"
							target="_blank"
							aria-label="WhatsApp"
						>
							<WhatsAppIcon
								sx={{
									fontSize: '40px',
									color: '#25D366',
									transition: 'color 0.3s',
									'&:hover': { color: '#128C7E' }
								}}
							/>
						</Link>
						<Link
							to="https://twitter.com/home"
							target="_blank"
							aria-label="Twitter"
						>
							<TwitterIcon
								sx={{
									fontSize: '40px',
									color: '#1DA1F2',
									transition: 'color 0.3s',
									'&:hover': { color: '#1A91DA' }
								}}
							/>
						</Link>
						<Link
							to="https://github.com/Sarveshkumar0611"
							target="_blank"
							aria-label="GitHub"
						>
							<GitHub
								sx={{
									fontSize: '40px',
									color: '#333',
									transition: 'color 0.3s',
									'&:hover': { color: '#000' }
								}}
							/>
						</Link>
					</Stack>
				</Box>
			</Stack>
		</>
	);
}
