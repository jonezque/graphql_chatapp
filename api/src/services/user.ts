import { User } from '../entity';
import { getRepository } from 'typeorm';

export const changeName = async (username: string, userId: string) => {
    const user = await getRepository(User).findOne(userId);
    if (!user) {
        return 'not exist';
    }
    
    user.username = username;
    await getRepository(User).save(user);
    return user;
};

export const getUserById = (id: string): Promise<User> => getRepository(User).findOneOrFail(id);

export const getUsers = () => getRepository(User).find();