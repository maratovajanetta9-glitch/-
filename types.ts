
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Tech' | 'Soft' | 'Language';
}

export interface Experience {
  title: string;
  period: string;
  location: string;
  description: string;
  type: 'Education' | 'Work' | 'Project';
}
