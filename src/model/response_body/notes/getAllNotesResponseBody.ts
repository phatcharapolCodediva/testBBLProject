export type NoteItems = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
export type GetAllNotesResponse = NoteItems[];
