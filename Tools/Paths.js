
import { Files } from 'Project'

const { folder , join } = Files;

export const root =
    join(folder(import.meta),'..');

export const source = 
    join(root,'Source');
    
export const build =
    join(root,'Build');
