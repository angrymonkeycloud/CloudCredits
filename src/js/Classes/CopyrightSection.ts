import {Business} from './Business';

export class CopyrightSection {
    
    public constructor(_business: Business){
        this.business = _business;
    }

    disclaimer: string = 'All Rights Reserved.';
    business: Business;
}