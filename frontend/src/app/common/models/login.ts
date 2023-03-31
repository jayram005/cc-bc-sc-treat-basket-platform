export interface LoginRequest {
    userName: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    expAt: number;
}

export interface URL {
	endPoint:string;
}