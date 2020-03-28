export declare class Business {
    constructor(_name: string);
    name: string;
    websiteUrl?: string;
    logoUrl?: string;
    addressLine1?: string;
    addressLine2?: string;
}

import { Business } from './Business';
export declare class CopyrightSection {
    constructor(_business: Business);
    disclaimer: string;
    business: Business;
}

import { Business } from './Business';
export declare class Hosting {
    provider: Business;
    management?: Business;
    displayInSummary?: boolean;
}

import { Business } from './Business';
export declare class InvolvedBusiness {
    business: Business;
    involvement: string;
    displayInSummary?: boolean;
}

import { Business } from './Business';
export declare class Tool {
    name: string;
    developer: Business;
    linkUrl?: string;
    logoUrl?: string;
    displayInSummary?: boolean;
}

import { Tool } from './classes/Tool';
import { CopyrightSection } from './classes/CopyrightSection';
import { InvolvedBusiness } from './classes/InvolvedBusiness';
import { Hosting } from './Classes/Hosting';
export interface CloudCreditsSettings {
    copyright: CopyrightSection;
    legendSelector: string;
    creditsSelector?: string;
    involvedBusinesses?: InvolvedBusiness[];
    tools?: Tool[];
    hosting?: Hosting;
}

import { CloudCreditsSettings } from "./Settings";
declare class CloudCredits {
    private static _settings;
    constructor(settings: CloudCreditsSettings);
    private mergeSettings;
    private static baseClassName;
    private static generateCopyrightSection;
    private static fillInLegend;
    private static createCreditsContainer;
    private static fillInCreditsSummary;
    private static fillInCredits;
    private static generateCreditsCopyright;
    private static generateBusinessInfoTextHtml;
    private static generateInvolvedBusinesses;
    private static generateTools;
    private static generateHosting;
    private static generateBusinessHtml;
    private static createClassName;
    private static createHtmlDiv;
    private static createHtmlSpan;
    private static createHtmlParagraph;
    private static createHtmlAnchor;
    private static createHtmlImage;
    private static createHtmlImageLink;
    private static display;
    private static scrollTo;
    static toggleDisplay(): void;
}
declare const cloudCredits: (settings: CloudCreditsSettings) => CloudCredits;
export default cloudCredits;
