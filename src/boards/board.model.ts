export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 게시물이 공개 or 비공개인지 나눠주는 값
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
