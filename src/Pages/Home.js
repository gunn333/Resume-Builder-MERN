import './Styles/Home.css';
import { Box, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, ScreenDarkComponent } from './';
import { templates } from '../Utils/Data/templates';
import { selectTemplate } from '../Redux/Actions/actions';

const StatetoProps = state => ({
	selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId
});

const DispatchtoProps = dispatch => ({
	setSelectedTemplateId: id => dispatch(selectTemplate(id))
});

const Home = props => {
	const navigate = useNavigate();

	const navigateToFillDetails = id => {
		props.setSelectedTemplateId(id);
		navigate('/template/fill-details');
	};

	return (
		<>
			<Navbar active={'Resume Templates'} />

			<div className="home-container">
				<div className="home">
					<div className="home-templates-cont">
						<h2 className="template-header-title">
							Explore Templates
						</h2>
						<p className="template-select-text">
							Choose a template to start building your
							professional resume
						</p>

						<Stack
							sx={{
								width: '100%',
								display: 'grid',
								gridTemplateColumns: {
									sm: '1fr 1fr',
									md: '1fr 1fr',
									lg: '1fr 1fr 1fr',
									xl: '1fr 1fr 1fr 1fr'
								},
								gridGap: '30px'
							}}
						>
							{templates.map(template => (
								<Box
									key={template.id}
									className="templates-img-cont"
								>
									<img
										className="template-img"
										src={template.template_img}
										alt={template.template_name}
									/>
									<ScreenDarkComponent />
									<Button
										className="use-template-btn"
										onClick={() =>
											navigateToFillDetails(template.id)
										}
										size="medium"
										variant="contained"
										color="primary"
									>
										Choose This Template
									</Button>
								</Box>
							))}
						</Stack>
					</div>
				</div>
			</div>
		</>
	);
};

export default connect(StatetoProps, DispatchtoProps)(Home);
