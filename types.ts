export interface ArgumentCardProps {
  title: string;
  template: string;
  customerName: string;
  icon?: React.ReactNode;
}

export interface ArgumentDefinition {
  id: string;
  title: string;
  template: string;
}

export interface CustomArgumentResponse {
  argument: string;
}