import { User } from '@prisma/client';
import { UserDTO } from "./UserDTO";

export interface UserUpdateDTO {
    userId: number;
    email: string;
  }