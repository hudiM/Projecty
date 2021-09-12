export interface PlanningModel {
  id?: number;
  status: number;
  title: string;
  isNew?: boolean;
}

export interface Feature extends PlanningModel {
  tasks: Task[];
  rating: number;
}

export interface Task extends PlanningModel {
  priority: number;
}
