export default (req: any, res: any, next: any): void => {
    res.finish = (status: number, data: any): void => {
        res.status(status).json({
            result: status === 200 ? 'success' : 'failure',
            response: data,
            status,
        });
    };

    next();
};
