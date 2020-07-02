import {
    GET_KONTRASEPSI_REQUEST,
    GET_KONTRASEPSI_FAILURE,
    GET_KONTRASEPSI_SUCCESS,
    INSERT_FORM_FAILURE,
    INSERT_FORM_REQUEST,
    INSERT_FORM_SUCCESS,
    GET_PROPINSI_FAILURE,
    GET_PROPINSI_REQUEST,
    GET_PROPINSI_SUCCESS,
    GET_REKAPITULASI_PROPINSI_FAILURE,
    GET_REKAPITULASI_PROPINSI_REQUEST,
    GET_REKAPITULASI_PROPINSI_SUCCESS
} from '../actions/constants'

const defaultState = { data: null, loading: false, error: null }


export function gotKontrasepsi(state = defaultState, action) {
    switch (action.type) {
        case GET_KONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_KONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case GET_KONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }

}

export function addedForm(state = defaultState, action) {
    switch (action.type) {
        case INSERT_FORM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case INSERT_FORM_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case INSERT_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }

}

export function gotPropinsi(state = defaultState, action) {
    switch (action.type) {
        case GET_PROPINSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_PROPINSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case GET_PROPINSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }

}

export function gotRekapitulasiPropinsi(state = defaultState, action) {
    switch (action.type) {
        case GET_REKAPITULASI_PROPINSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_REKAPITULASI_PROPINSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case GET_REKAPITULASI_PROPINSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }

}