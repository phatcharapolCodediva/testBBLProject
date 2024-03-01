export type CommonetItems = {
  id: number;
  userId: number;
  noteId: number;
  body: string;
};

export type GetAllCommentsResponse = CommonetItems[];
