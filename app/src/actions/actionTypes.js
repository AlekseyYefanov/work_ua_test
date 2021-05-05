import { parse } from 'content-disposition';

export const RESPONSE_ERROR = 'RESPONSE_ERROR';
export const SEND_REQUEST = 'SEND_REQUEST';
export const ERROR = 'error';
export const SUCCESS = 'success';


export const CLIENT_ERROR = 'Client error';
export const SERVER_ERROR = 'Server error';
export const OTHER = 'Other';


//TODO: need create notofocation 
export const processServerStatus = (status) => {
    const statusType = status.toString().charAt(0);
    switch (statusType) {
        case '2': return SUCCESS;
        case '4': return CLIENT_ERROR;
        case '5': return SERVER_ERROR;
        default: return OTHER;
    }
};

export const parseFilename = headers => parse(headers['content-disposition']).parameters.filename;

export const getErrorMessage = (data) => {
  const message = data.response.data.message;
  return message || 'Что-то пошло не так. Попробуйте снова.';
};


export const successAction = type => `SUCCESS_${type}`;
export const failAction = type => `FAIL_${type}`;