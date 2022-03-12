import { NextOfKin } from "src/next-of-kin/entities/next-of-kin.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

@PrimaryGeneratedColumn()
id: Number;

@Column()
surname: String;

@Column()
otherNames: String;

@Column()
email: String;

@Column()
password: String;

@Column({type: 'date'})
dateOfBirth: Date;

@Column()
maritalStatus: String;

@Column()
hmo: String;

@Column()
enrolleeId: String;

@Column()
occupation: String;

@Column()
phone: String;

@Column()
ethnicity: String;

@Column()
isStaff: Boolean;

@Column()
photo: String;

@Column()
address: String;
}
