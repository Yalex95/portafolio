export type NavItem = {
  label: string;
  href: string;
};
export type Badge ={
  label: string;
  icon?: string;
}
export type BadgeVariant = 'success' | 'error'| 'warning'|'info'|'default';
export type BadgeMode = 'icon'|'status'|'text';
export type Card ={
  title:string;
  description?:string;
  image?: string;
  icon?: string;
  href?: string;
  badges?: Badge[];
  githubLink?: string;
isCoreStack? : boolean;
}
export type eventItem = {
  time:string;
  event: string;
  eventDescription?: string;
  location?: string;
  company?: string;
  tech?: Badge[];
}
export type Contact={
  name: string;
  email: string;
  message: string;
}