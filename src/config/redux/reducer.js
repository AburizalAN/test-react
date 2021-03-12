const initialState = {
    aspek_1 : {},
    aspek_2 : {},
    aspek_3 : {},
    aspek_4 : {},
}

const reducer = (state = initialState, action) => {

    if (action.type === "SET_ASPEK_1") {

        const {key, props} = action.payload;

        return {
            ...state,
            aspek_1 : {
                ...state.aspek_1,
                [key] : props
            }

        }
    }

    if (action.type === "SET_ASPEK_2") {

        const {key, props} = action.payload;

        return {
            ...state,
            aspek_2 : {
                ...state.aspek_2,
                [key] : props
            }

        }
    }

    if (action.type === "SET_ASPEK_3") {

        const {key, props} = action.payload;

        return {
            ...state,
            aspek_3 : {
                ...state.aspek_3,
                [key] : props
            }

        }
    }

    if (action.type === "SET_ASPEK_4") {

        const {key, props} = action.payload;

        return {
            ...state,
            aspek_4 : {
                ...state.aspek_4,
                [key] : props
            }

        }
    }

    return state;
}

export default reducer;