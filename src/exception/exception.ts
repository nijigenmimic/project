import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, } from '@nestjs/common';
import { Response } from 'express';

const responseInterface = {
  status: false,
  errorCode: '',
  result: [],
};

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(httpException: HttpException, argumentsHost: ArgumentsHost) {
    let response = argumentsHost.switchToHttp().getResponse<Response>();
    let statusCode: number = 0;
    if (httpException instanceof HttpException) {
        statusCode = httpException.getStatus();
    } else {
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }
    responseInterface.status = false;
    responseInterface.errorCode = this.setErrorCode(statusCode, httpException.message);
    response.status(statusCode).json(responseInterface);
  }
    
  private setErrorCode(statusCode: number, message): string {
    if (statusCode >= 500) {
        return 'E001';
    }
    return message;
  }
}