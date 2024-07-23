import {
	Stack,
	Typography,
	Box,
	Card,
	CardContent,
	IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
						color: '#0A6847',
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
							mb: 2,
							color: '#0A6847'
						}}
					>
						Contributors
					</Typography>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						spacing={4}
						justifyContent="center"
					>
						<Card
							sx={{
								width: { xs: '100%', md: '45%' },
								boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
								borderRadius: '15px',
								padding: '20px',
								textAlign: 'center',
								backgroundColor: '#FFEAE3',
								transition: 'transform 0.3s, box-shadow 0.3s',
								'&:hover': {
									transform: 'translateY(-10px)',
									boxShadow:
										'0px 12px 24px rgba(0, 0, 0, 0.2)'
								}
							}}
						>
							<CardContent>
								<Typography
									variant="h6"
									sx={{ color: '#0A6847', mb: 2 }}
								>
									Gunn Arora
								</Typography>
								<Stack
									direction="row"
									spacing={3}
									justifyContent="center"
								>
									<IconButton
										component={Link}
										to="https://github.com/gunn333"
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
									</IconButton>
									<IconButton
										component={Link}
										to="https://www.linkedin.com/in/gunn-arora-3a0a9b291/"
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
									</IconButton>
									<IconButton
										component={Link}
										to="https://www.instagram.com/prvuni1?igsh=eXZxY3JzMWV2bnQ4"
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
									</IconButton>
								</Stack>
							</CardContent>
						</Card>
						<Card
							sx={{
								width: { xs: '100%', md: '45%' },
								boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
								borderRadius: '15px',
								padding: '20px',
								textAlign: 'center',
								backgroundColor: '#FFEAE3',
								transition: 'transform 0.3s, box-shadow 0.3s',
								'&:hover': {
									transform: 'translateY(-10px)',
									boxShadow:
										'0px 12px 24px rgba(0, 0, 0, 0.2)'
								}
							}}
						>
							<CardContent>
								<Typography
									variant="h6"
									sx={{ color: '#0A6847', mb: 2 }}
								>
									Gracy Gulati
								</Typography>
								<Stack
									direction="row"
									spacing={3}
									justifyContent="center"
								>
									<IconButton
										component={Link}
										to="https://github.com/gracygulati7"
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
									</IconButton>
									<IconButton
										component={Link}
										to="https://www.linkedin.com/in/gracy-gulati-956061292/"
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
									</IconButton>
									<IconButton
										component={Link}
										to="https://www.instagram.com/gracy_gulati?igsh=ajJyNDdlNzIxN3dk"
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
									</IconButton>
								</Stack>
							</CardContent>
						</Card>
					</Stack>
				</Box>
			</Stack>
		</>
	);
}