

export interface Question {
  id: number;
  leftOperand: number;
  rightOperand: number;
  operation: string;
  answer: number | string;
  usersAnswer?: number|null;
}
