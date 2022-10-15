import User from "./User";

export default interface Comment {
    title: string;
    author: User;
    date: string;
}