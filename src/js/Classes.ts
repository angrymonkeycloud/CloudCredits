export class CloudCreditsItem{

    name: string;
    title?: string;
    link?: string;
    logo?: string;
    displayInSummary?: boolean = false;
}

export class CloudCreditsSection{
    title?: string;
    items: CloudCreditsItem[];
}

export class CopyrightSection {

    businessName: string;
    disclaimer?: string;
    businessWebsite?: string;
}