import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user2.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};


//* 전체 유저 조회
const getUser = async () => {
  return await prisma.user2.findMany();
};


//* 유저 생성
const createUser = async (userId: string, email: string, age: number) => {
  const user = await prisma.user2.create({
    data: {
      userId : userId,
      email : email,
      age : age,
    },
  })
  return user;
};

//* 유저 수정
const updateUser = async (userId: number, email: string) => {
  const user = await prisma.user2.update({
    where: {
      id: userId,
    },
    data: {
      email: email,
    },
  });

  return user;
}

const deleteUser = async (userId: number) => {
  await prisma.user2.delete({
    where: {
      id: userId,
    }
  });
}

const userService = {
  getUserById,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;
