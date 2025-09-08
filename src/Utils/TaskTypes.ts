
export type TaskType = {
  id: string;
  name: string;
  priority: string;
  points: number;
  assignee: string;
  date: string;
  completed: boolean;
};

export type ActionType =
  | { type: "toggle"; value: string }
  | { type: "add"; value: TaskType };
