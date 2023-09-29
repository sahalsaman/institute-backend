import { Request, Response } from 'express'
// import { environment, errorMessage } from '../../types/variables/constant';
import * as dotenv from "dotenv";
import { IErrorResponse, ISuccessResponse } from '../../types/interfaces/app-context-interfaces';
dotenv.config();

export class ControllerBase {
    public jsonResponse<T>(response: Response, message?: string, result?: T | null) {
        response.type('application/json');
        const apiResponse: ISuccessResponse = {
            message: message ? message : 'OK'
        }
        if (result) {
            apiResponse.result = result
        }
        response.status(200).json(apiResponse);
    }


    public error(response: Response, code: number, message?: string, error?: any) {
        const msg = message 
        // Filtering excepection details sending in prod api for security
        const errorResponse: IErrorResponse = {
            status: code,
            message: msg,
            error: [error]
        }
        response.status(code).json(errorResponse);
    }
}
