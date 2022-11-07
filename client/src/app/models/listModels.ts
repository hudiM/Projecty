export interface PlanningModel {
  id?: number;
  status: Status;
  title: string;
  isNew?: boolean;
}

export interface Feature extends PlanningModel {
  tasks: Task[];
  tags: Tag[];
  rating: number;
}

export interface Task extends PlanningModel {
  priority: number;
  tags: Tag[];
}

export interface Status {
  id: number;
  name: string;
  color: string;
}

export interface Tag {
  id: number;
  name: string;
  color: string;
}

export interface LabelCategory {
  id: number;
  name: string;
  labels: Label[];
}

export interface Label {
  id: number;
  name: string;
  color: string;
}
