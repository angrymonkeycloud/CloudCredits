export declare class CopyrightSection {
    Disclaimer: string;
    Business: Business;
}
export declare class Business {
    constructor(name: string);
    Name: string;
    WebsiteUrl?: string;
    LogoUrl?: string;
    AddressLine1?: string;
    AddressLine2?: string;
}
export declare class InvolvedBusiness {
    Business: Business;
    Involvement: string;
    DisplayInSummary: boolean;
}
export declare class Tool {
    constructor(name: string, linkUrl: string);
    Name: string;
    LinkUrl: string;
    LogoUrl?: string;
    Developer: Business;
    DisplayInSummary: boolean;
}
export declare class Hosting {
    Provider: Business;
    Management: Business;
    DisplayInSummary: boolean;
}
export declare class CloudCredits {
    private static LegendSelector;
    private static CreditsSelector;
    static Copyright: CopyrightSection;
    static InvolvedBusinesses: InvolvedBusiness[];
    static Tools: Tool[];
    static Hosting: Hosting;
    static Init(businessName: string, legendSelector: string, creditsSelector?: string): void;
    private static BaseClassName;
    private static GenerateCopyrightSection;
    private static FillInLegend;
    private static CreateCreditsContainer;
    private static FillInCreditsSummary;
    private static FillInCredits;
    private static GenerateCreditsCopyright;
    private static GenerateBusinessInfoTextHtml;
    private static GenerateInvolvedBusinesses;
    private static GenerateTools;
    private static GenerateHosting;
    private static GenerateBusinessHtml;
    private static CreateClassName;
    private static CreateHtmlDiv;
    private static CreateHtmlSpan;
    private static CreateHtmlParagraph;
    private static CreateHtmlAnchor;
    private static CreateHtmlImage;
    private static CreateHtmlImageLink;
    static Display(): void;
    static ToggleDisplay(): void;
}
