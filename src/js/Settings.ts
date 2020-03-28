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