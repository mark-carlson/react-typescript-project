import { ApiMethod, KeyValue, ApiResponse } from './types';
import { API_ENDPOINTS } from './constants/API';

export class ApiService {
    private _method: ApiMethod = 'POST';
    private _headers: string[][] = [];
    private _body?: any | null;

    public get headers(): string[][] {
        return this._headers;
    }

    public set method(newMethod: ApiMethod) {
        this._method = newMethod;
    }

    public setHeaders(headers: KeyValue<string, string>[]): ApiService {
        this._headers = headers.map(({ key, value }): [string, string] => [key, value]);
        return this;
    }

    public resetHeaders(): void {
        this._headers = [];
    }

    public setMethod(newMethod: ApiMethod): ApiService {
        this._method = newMethod;
        return this;
    }

    public setBody<T>(body: T): ApiService {
        this._body = JSON.stringify(body);
        return this;
    }

    public async request<T>(): Promise<RequestInit> {
        return {
            headers: this._headers,
            method: this._method,
            credentials: 'same-origin',
            body: this._body,
        };
    }

    public async sendRequest<T = {}>(endPoint: any, params?: string): Promise<ApiResponse<T>> {
        let data: ApiResponse<T>;
        const endpointUri = params ? API_ENDPOINTS[endPoint].replace(':params', params) : API_ENDPOINTS[endPoint];

        try {
            const fetchProps = await this.request();
            const response = await fetch(endpointUri, fetchProps);
            data = await response.json();
        } catch (err) {
            data = {
                result: 'error',
                error: {
                    description: String(err),
                },
                status: 500,
            };
        }
        return data;
    }
}

export class RequestBody<T> {
    private _requestBody: T;

    public constructor(_requestBody: T) {
        this._requestBody = _requestBody;
    }

    public get requestBody(): T {
        return this._requestBody;
    }

    public set requestBody(newRequestBody: T) {
        this._requestBody = newRequestBody;
    }

    public toJSON(): T {
        return this._requestBody;
    }
}
