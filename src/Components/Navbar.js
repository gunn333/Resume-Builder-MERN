import '../Styles/Navbar.css';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;
const logoTheme = createTheme({
	palette: {
		primary: {
			main: '#ffffff'
		}
	}
});

function Navbar(props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<NavLink to="/">
					<img
						src="https://your-new-logo-url.com/logo.png"
						height="30px"
						alt="ResumeBuilder"
					/>
				</NavLink>
			</Typography>
			<Divider />
			<List
				className="drawerLinks"
				sx={{
					display: 'flex',
					textAlign: 'left',
					paddingLeft: '20px',
					flexDirection: 'column'
				}}
			>
				<NavLink className="nav-link" to="/" color="inherit">
					Resume Templates
				</NavLink>
				<NavLink to="/my/resumes" className="nav-link" color="inherit">
					My Resumes
				</NavLink>
				<NavLink to="/about-us" color="inherit" className="nav-link">
					About Us
				</NavLink>
			</List>
		</Box>
	);

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<ThemeProvider theme={logoTheme}>
					<AppBar
						component="nav"
						position="sticky"
						className="appbar"
						sx={{ color: 'primary', boxShadow: 'none' }}
					>
						<Toolbar id="toolbar">
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								id="icon"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: 'none' } }}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									display: { sm: 'block' },
									fontSize: '25px',
									color: '#333'
								}}
							>
								<NavLink to="/" className="homeIcon">
									<h4>ResumeBuilder</h4>
								</NavLink>
							</Typography>
							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
								<NavLink
									to="/"
									className="nav-link"
									color="inherit"
								>
									Resume Templates
								</NavLink>
								<NavLink
									to="/my/resumes"
									className="nav-link"
									color="inherit"
								>
									My Resumes
								</NavLink>
								<NavLink
									to="/about-us"
									className="nav-link aboutUs"
									color="inherit"
								>
									About Us
								</NavLink>
							</Box>
						</Toolbar>
					</AppBar>
				</ThemeProvider>
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true
						}}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth
							}
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</Box>
		</>
	);
}

export default Navbar;
