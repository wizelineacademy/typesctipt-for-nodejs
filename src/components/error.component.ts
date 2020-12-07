import { NextFunction, Request, RequestHandler, Response } from 'express';

class CustomError extends Error {
  statusCode = 400;
  constructor(message: string, statusCode?: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorWrap = (originalFunction: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await originalFunction.call(this, req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

const errorHandler = (err, res: Response) => {
  const { statusCode = 500, message = 'Unknown error' } = err;
  return res.status(statusCode).json({
    message,
  });
};

export { errorWrap, errorHandler, CustomError };
