
export const logErrors = (err, req, res, next) => {
    console.log('[ERROR]', err.message);
    next(err);
}

export const clientErrorHandler = (err, req, res, next) => {
    res.status(500).json({ err: err.message });
}
