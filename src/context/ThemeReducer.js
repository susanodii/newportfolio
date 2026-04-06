import { CHANGE_THEME } from "./ThemeTypes";

export const themeReducer = (state, action) => {
	const { isDarkMode } = state;
	const { type} = action;

	switch (type) {
		case CHANGE_THEME:
			return {
				...state,
				isDarkMode: !isDarkMode,
			};
		default:
			return state;
	}
};
