export interface ApiHeader {
    key: string;
    value: string;
}

export interface KeyValue<T, U> {
    key: T;
    value: U;
}

export type ApiMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';


export interface ApiLoginResponse {
    user: any;
    error?: string;
}

export type ApiResult = 'success' | 'failure' | 'error';

export interface ApiError {
    code?: string;
    description: string;
}

export interface ApiResponse<T> {
    error?: ApiError;
    response?: T;
    result: ApiResult;
    status: number;
}

export interface ApiRequest {
    API_ENDPOINT: [];
    body: any;
}

export interface Dictionary<T> {
    [t: string]: T;
}

