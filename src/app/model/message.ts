import { User } from '../model/user';

export class Message {
    id:number;
    sender:User;
    receiver:User;
    title:String;
    content:String;
    isRead:Boolean;
}