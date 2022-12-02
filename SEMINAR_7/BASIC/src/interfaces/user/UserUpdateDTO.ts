import { User } from '@prisma/client';

export interface UserUpdateDTO {
    userId: number;
    email: string;
  }