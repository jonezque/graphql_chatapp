import { Channel } from './channel';
import { User } from './user';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    body: string;

    @CreateDateColumn({type:'datetime'})
    created: Date;

    @ManyToOne(type => User, user => user.messages, { onDelete: 'CASCADE'})
    owner: User;

    @Column()
    ownerId: string;

    @ManyToOne(type => Channel, channel => channel.messages, { onDelete: 'CASCADE'})
    channel: Channel;

    @Column()
    channelId: string;
}
