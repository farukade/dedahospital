import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class NextOfKin {

@PrimaryGeneratedColumn()
id: Number;

@Column()
surname: String;

@Column()
otherNames: String;

@Column()
email: String;


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
