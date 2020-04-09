import { User, Message, Channel } from '../entity';
import { getRepository, createQueryBuilder} from 'typeorm';

export const storeMessage = async (body: string, ownerId: string, channelId: string) => {    
    const message =new Message();
    message.body = body;
    message.channelId = channelId;
    message.ownerId = ownerId;
    message.created = new Date();
    await getRepository(Message).save(message);
    return message;
};

export const allMessages = () => {
    return getRepository(Message).find({ order: { created: 'DESC' } });
}

export const fetchMessagesByChannelId = async(channelId: string) => {
    return getRepository(Message).find({ where: { channelId }, order: { created: 'ASC' } });
  }

export const joinChannel = async (channelId: string, userId: string) => {
    const ids = await getRepository(User).createQueryBuilder('user')
    .innerJoin('user.channels', 'channel', 'channel.id = :channelId', { channelId })
    .select("user.id").getMany();

    if (ids.find(u => u.id == userId)) {
        return ids.map(u => u.id);
    }

    const c = await getRepository(Channel).findOne(channelId, { select: ['id'] });
    await createQueryBuilder(User, 'channels').relation(Channel, 'users').of(c).add(userId);

    return ids.map(u => u.id).concat(userId);
}

