export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const toggleDarkMode = () => {
    return {
        type: TOGGLE_DARK_MODE,
    };
};

const initialState = false;

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
        return !state;
    default:
        return state;
    }
};

export default darkModeReducer;