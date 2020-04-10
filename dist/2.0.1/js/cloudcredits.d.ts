export declare class CloudCreditsItem {
    name: string;
    title?: string;
    description?: string;
    link?: string;
    logo?: string;
    displayInSummary?: boolean;
}
export declare class CloudCreditsSection {
    title?: string;
    items: CloudCreditsItem[];
}
export declare class CopyrightSection {
    businessName: string;
    disclaimer?: string;
    businessWebsite?: string;
}

export interface CloudCreditsSettings {
    copyright: CopyrightSection;
    sections: CloudCreditsSection[];
}

export declare class CloudCredits {
    private static _settings;
    private static baseClassName;
    private static _element;
    private static _legendElement;
    private static _summaryElement;
    private static _contentElement;
    constructor(settings: CloudCreditsSettings);
    private static fillInLegend;
    private static fillInSummary;
    private static fillInContent;
    static toggleDisplay(): void;
    private mergeSettings;
    private static generateCopyrightSection;
    private static generateCreditsCopyright;
    private static generateItemSummaryElement;
    private static generateItemElement;
    private static createClassName;
    private static createHtmlDiv;
    private static createHtmlSpan;
    private static createHtmlParagraph;
    private static createHtmlAnchor;
    private static createHtmlImage;
    private static scrollTo;
}
declare const cloudCredits: (settings: CloudCreditsSettings) => CloudCredits;
export default cloudCredits;
