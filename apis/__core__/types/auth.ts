import { APIError } from './index';

export type Token = string | undefined ; 
export type AuthResponse = APIError & {
	access_token?: Token
};

export type RequestTokenBody =  {
	redirect_to: string 
}

export type ConvertAccessTokenResponse = {
	success: boolean;
	session_id: string; 
}

export type GetAuthParams = {
	api_key : string
}
