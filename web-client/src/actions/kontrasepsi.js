import {
    INSERT_FORM_FAILURE,
    INSERT_FORM_REQUEST,
    INSERT_FORM_SUCCESS,

    GET_KONTRASEPSI_FAILURE,
    GET_KONTRASEPSI_REQUEST,
    GET_KONTRASEPSI_SUCCESS,

    GET_PROPINSI_FAILURE,
    GET_PROPINSI_REQUEST,
    GET_PROPINSI_SUCCESS,

    GET_REKAPITULASI_PROPINSI_FAILURE,
    GET_REKAPITULASI_PROPINSI_REQUEST,
    GET_REKAPITULASI_PROPINSI_SUCCESS
} from './constants'

import { commonAxios } from '../utils/apiUtil';

function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value);
    });
}

export const getKontrasepsi = () =>
    (dispatch) => {
        dispatch({
            type: GET_KONTRASEPSI_REQUEST
        });
        commonAxios.get('kontrasepsi')
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(getKontrasepsiSuccess(data));
            })
            .catch(error => {
                dispatch(getKontrasepsiFailure(error));
            });
    };

export const getPropinsi = () =>
    (dispatch) => {
        dispatch({
            type: GET_PROPINSI_REQUEST
        });
        commonAxios.get('propinsi')
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(getPropinsiSuccess(data));
            })
            .catch(error => {
                dispatch(getPropinsiFailure(error));
            });
    };

export const addForm = ({ Id_Kontrasepsi, Id_Propinsi, Jumlah_Pemakai }) =>
    (dispatch) => {

        dispatch({ type: INSERT_FORM_REQUEST });

        commonAxios.post(`form`, { Id_Kontrasepsi, Id_Propinsi, Jumlah_Pemakai })
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(addItemSuccess(data));

            })
            .catch(error => {
                console.log(error)
                dispatch(addItemFailure(error));

            });
    };



export const getRekapitulasiPropinsi = () =>
    (dispatch) => {
        dispatch({
            type: GET_REKAPITULASI_PROPINSI_REQUEST
        });
        commonAxios.get('/rekapitulasi/propinsi')
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(getRekapitulasiPropinsiSuccess(data));
            })
            .catch(error => {
                dispatch(getRekapitulasiPropinsiFailure(error));
            });
    };



function getKontrasepsiSuccess(data) {
    return {
        type: GET_KONTRASEPSI_SUCCESS,
        data: data
    }
}

function getKontrasepsiFailure(error) {
    return {
        type: GET_KONTRASEPSI_FAILURE,
        error: error
    }
}

function getPropinsiSuccess(data) {
    return {
        type: GET_PROPINSI_SUCCESS,
        data: data
    }
}

function getPropinsiFailure(error) {
    return {
        type: GET_PROPINSI_FAILURE,
        error: error
    }
}

function getRekapitulasiPropinsiSuccess(data) {
    return {
        type: GET_REKAPITULASI_PROPINSI_SUCCESS,
        data: data
    }
}

function getRekapitulasiPropinsiFailure(error) {
    return {
        type: GET_REKAPITULASI_PROPINSI_FAILURE,
        error: error
    }
}

function addItemSuccess(data) {
    return {
        type: INSERT_FORM_SUCCESS,
        data: data
    }
}

function addItemFailure(error) {
    return {
        type: INSERT_FORM_FAILURE,
        error: error
    }
}