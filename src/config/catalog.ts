import entries from './apps.json';
export type AppIcon = 'calendar' | 'certificate' | 'dumbbell' | 'users' | 'chart' | 'folder';
export interface PortalApp {id:string; name:string; description:string; url:string; icon:AppIcon; order:number; active:boolean; category:string}
export function safeUrl(value:string): string | undefined {try {const u=new URL(value);return u.protocol==='https:' && !u.username && !u.password ? u.href : undefined;} catch {return undefined;}}
export const apps = (entries as PortalApp[]).filter(app=>app.active).sort((a,b)=>a.order-b.order);
