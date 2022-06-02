import {
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
} from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({
        default: false,
    })
    isDel: boolean;

    @Column({
        default: false,
    })
    isTop: boolean;

    @Column('text')
    title: string;

    @Column('text')
    intro: string;

    @Column('text')
    content: string;
}
