import Comment from "./Comment";

export default interface Movie {
    title: string;
    performer: string[];
    starRating: number;
    comments: Comment[];
}