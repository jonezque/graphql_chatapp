import { checkAuth } from './services';

export const authorizeMiddleware = async(req: any, res: any, next: any) => {
    const token = req.headers['authorization'];
    if (token) {
        const user = await checkAuth(token) as any;
        if (user) {
            req.user = user;
        }
    }
    

    return next();
}