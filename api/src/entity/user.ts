import {JoinTable, ManyToMany,  JoinColumn,   Entity,   Column,   PrimaryGeneratedColumn,   ManyToOne, OneToMany} from 'typeorm';
import { Channel } from './channel';
import { Message } from '.';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    passwordHash: string;

    @ManyToMany(() => Channel, (e) => e.users, { cascade: true, primary: true })
    @JoinTable()
    channels: Channel[];

    @OneToMany(() => Channel, e => e.owner, { cascade: true, onDelete: 'SET NULL' })
    myChannels: Channel[];

    @OneToMany(() => Message, e => e.owner, { cascade: true})
    @JoinColumn()
    messages: Message[];
}
