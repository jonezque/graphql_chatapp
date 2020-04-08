import {createQueryBuilder, getRepository,  getManager,  In,  QueryBuilder} from 'typeorm';
import { Channel, User } from '../entity';
import { getUserById } from '.';

export const createChannel = async (channelName: string, ownerId: string) => {
  const user = await getUserById(ownerId);
  const channel = new Channel(channelName);
  channel.owner = user;
  channel.users = [user];
  await getRepository(Channel).save(channel);
  return channel;
}

export const getMyChannels = (ownerId: string) => {
  return createQueryBuilder(Channel, "channel")
        .innerJoin('channel.users', 'user', 'user.id = :id', { id: ownerId })
        .getMany();
}

export const getUserIdsByChannelId = (channelId: string) => {
  return createQueryBuilder(User, "user")
  .innerJoin('user.channels', 'channel', 'channel.id = :id', { id: channelId }).select("user.id")
  .getMany().then(users => users.map(u => u.id));
}