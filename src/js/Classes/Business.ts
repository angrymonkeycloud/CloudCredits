export class Business {
    
    constructor(_name: string){
        this.name = _name;
    }
    
    name: string;
    websiteUrl?: string;
    logoUrl?: string;
    addressLine1?: string;
    addressLine2?: string;
}