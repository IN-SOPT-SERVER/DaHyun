import User from "./User";
import Comment from "./Comment";

export default interface Blog {
    title: string;
    writer: User;
    content: string;
    comments: Comment[];
}