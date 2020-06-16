import { ApiResult, Dictionary } from '../types';

export const API_RESULT: Dictionary<ApiResult> = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    ERROR: 'error',
};

export const API_ENDPOINTS: Dictionary<string> = {
    
};

export const API_HEADERS = {
    default: [
        {
            key: 'Accept',
            value: 'application/json',
        },
        {
            key: 'Content-Type',
            value: 'application/json',
        },
    ],
};
