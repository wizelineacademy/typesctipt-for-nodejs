import { NextFunction, Request, RequestHandler, Response } from 'express';


export function errorHandler(error: any, request: Request, response: Response, next: NextFunction) {
    const status = error.code || 500;
    const message = error.message || 'Oops! Something went wrong';
    response
      .status(status)
      .send({
        status,
        message,
      })
  }