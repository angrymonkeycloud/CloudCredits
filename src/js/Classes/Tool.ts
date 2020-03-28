import {Business} from './Business';

export class Tool {
    
    name: string;
    developer: Business;

    linkUrl?: string;
    logoUrl?: string;    
    displayInSummary?: boolean = false;
}