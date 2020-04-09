import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user';
import { Message } from '.';

@Entity()
export class Channel {
    constructor(name: string) {
        this.name = name;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => User, (e) => e.channels)
    users: User[];

    @Column()
    ownerId: number;

    @ManyToOne(type => User, user => user.myChannels)
    owner: User;

    @OneToMany(() => Message, e => e.channel, { cascade: true })
    messages: Message[];
}
