import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../entity';
import { getRepository } from 'typeorm';

const SECRETKEY = 'SECRET_KEY';

export const checkAuth = async (token: string) => {
    if (!token) {
        return null;
    }

    if (token.includes('Bearer')) {
        token = token.slice(7);
    }
    try {
        if (jwt.verify(token, SECRETKEY)) {
            const obj = jwt.decode(token) as User;
            return await getRepository(User).findOne(obj.id);
        }
    }
    catch (e) {
        console.log('invalid token');
    }

    return null;
};

const produceToken = (user: User): string => {
    const payload = {
        id: user.id,
        username: user.username,
    };

    return jwt.sign(payload, SECRETKEY);
};

const createUser = async (username: string, password: string) => {
    const repo = getRepository(User);
    const user = new User();
    user.username = username;
    user.passwordHash = await bcrypt.hash(password, 10);

    return await repo.save(user);
};

export const signUp = async (username: string, password: string) => {
    if (!username || !password) {
        return 'empty data';
    }

    const repo = getRepository(User);

    let user = await repo.findOne({ where: { username } });
    if (user) {
        return 'user exist';
    }

    user = await createUser(username, password);
    const token = produceToken(user);
    return { token, user };
};

export const signIn = async (username: string, password: string) => {
    if (!username || !password) {
        return 'empty data';
    }

    const repo = getRepository(User);
    const user = await repo.findOne({ where: { username } });
    if (!user) {
        return 'wrong name or password';
    }

    if (await bcrypt.compare(password, user.passwordHash)) {
        const token = produceToken(user);
        return { token, user };
    }

    return 'wrong name or password';
};
