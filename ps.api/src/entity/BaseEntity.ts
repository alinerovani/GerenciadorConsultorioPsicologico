import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column({ default: true })
    isPublic: boolean;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;

}