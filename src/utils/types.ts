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
isCoreStack? : boolean;
}