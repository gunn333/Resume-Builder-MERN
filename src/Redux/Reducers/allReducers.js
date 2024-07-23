import {
	selectedTemplateReducer,
	personalInfoReducer,
	workExperienceReducer,
	keySkillsReducer,
	educationDetailsReducer
} from './Reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	selectedTemplateReducer,
	personalInfoReducer,
	workExperienceReducer,
	keySkillsReducer,
	educationDetailsReducer
});

export default rootReducer;
