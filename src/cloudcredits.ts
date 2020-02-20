
// Classes
//////////////////////////////////////////

class CopyrightSection {
    
    public constructor(_business: Business){
        this.business = _business;
    }

    disclaimer: string = 'All Rights Reserved.';
    business: Business;
}

class Business {
    
    constructor(_name: string){
        this.name = _name;
    }
    
    name: string;
    websiteUrl?: string;
    logoUrl?: string;
    addressLine1?: string;
    addressLine2?: string;
}

class InvolvedBusiness {
    
    business: Business;
    involvement: string;
    displayInSummary?: boolean = false;
}

class Tool {
    
    name: string;
    developer: Business;

    linkUrl?: string;
    logoUrl?: string;    
    displayInSummary?: boolean = false;
}

class Hosting {
    
    provider: Business;
    management?: Business;
    displayInSummary?: boolean = false;
}

// Interfaces
//////////////////////////////////////////

interface CloudCreditsSettings {
    copyright: CopyrightSection;
    legendSelector: string;
    creditsSelector?: string;
    involvedBusinesses?: InvolvedBusiness[];
    tools?: Tool[];
    hosting?: Hosting;
}

class CloudCredits {
    
    // Private Variables
    private static _settings: CloudCreditsSettings;

    // Constructors

    public constructor(settings: CloudCreditsSettings){
        
        CloudCredits._settings = this.mergeSettings(settings);

        if (CloudCredits._settings.creditsSelector === undefined)
        CloudCredits._settings.creditsSelector = CloudCredits._settings.legendSelector;
    
        CloudCredits.display();
    }
    
    private mergeSettings(_settings: CloudCreditsSettings): CloudCreditsSettings {
        const settings : CloudCreditsSettings = {
            legendSelector: undefined,
            creditsSelector: undefined,
            copyright: undefined,
            involvedBusinesses: [],
            tools: [],
            hosting: undefined
        };

        for (const attrname in _settings) 
            settings[attrname] = _settings[attrname];
        
        return settings;
    }
    
    // Public Variables
    
    private static baseClassName: string = 'cloudcredits';
    
    private static generateCopyrightSection(): HTMLElement {
        
        // Main Div
        let main = this.createHtmlDiv(this.createClassName('copyright'))
        
        // Copyright Disclaimer
        main.appendChild(this.createHtmlDiv(this.createClassName('copyright', 'disclaimer'), this._settings.copyright.disclaimer));
        
        // Business
        let business = this.createHtmlDiv(this.createClassName('copyright', 'business'));
        main.appendChild(business);
        
        // Business Name
        if (this._settings.copyright.business.name !== undefined)
        business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'name'), this._settings.copyright.business.name));
        
        // Business Address 1
        if (this._settings.copyright.business.addressLine1 !== undefined)
        business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'address1'), this._settings.copyright.business.addressLine1));
        
        // Business Address 2
        if (this._settings.copyright.business.addressLine2 !== undefined)
        business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'address2'), this._settings.copyright.business.addressLine2));
        
        // Business Website Url
        if (this._settings.copyright.business.websiteUrl !== undefined)
        business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'websiteUrl'), this._settings.copyright.business.websiteUrl));
        
        return main;
    }
    
    private static fillInLegend() : void {
        
        let content = $(this._settings.legendSelector).html('');
        
        let legendContent : string;
        
        if ($(this._settings.legendSelector).data('legend')){
            legendContent = $(this._settings.legendSelector).data('legend');
            $(this._settings.legendSelector).removeAttr('data-legend');
        }
        else legendContent = '© ' + this._settings.copyright.business.name;
        
        content.append(this.createHtmlDiv(this.createClassName('legendcontainer'), this.createHtmlSpan(this.createClassName('legend'), legendContent)));
    }
    
    private static createCreditsContainer() : HTMLElement{
        
        let content = $(this._settings.creditsSelector);
        let containerClassName = this.createClassName('creditscontainer');
        
        let container = $('.' + containerClassName);
        
        if (container.length > 0)
        return container[0];
        
        content.append(this.createHtmlDiv(containerClassName));
        container =  $('.' + containerClassName);
        
        return container[0];
    }
    
    private static fillInCreditsSummary() : void{
        
        let container = $(this.createCreditsContainer());
        let summarySelectorClassName = this.createClassName('creditssummary');
        
        if (!container.hasClass(summarySelectorClassName))
        container.addClass(summarySelectorClassName);
        
        this._settings.involvedBusinesses.forEach((business) =>{
            
            if (!business.displayInSummary)
            return;
            
            let section = this.createHtmlDiv(undefined);
            
            section.append(this.createHtmlParagraph(undefined,  business.involvement + ' by\xa0'));
            
            section.append(this.generateBusinessInfoTextHtml(business.business));
            
            section.append(this.createHtmlParagraph(undefined, '\xa0'));
            
            container.append(section);
        });
    }
    
    private static fillInCredits() : void{
        
        let container = $(this.createCreditsContainer());
        
        let creditsSelectorClassName = this.createClassName('credits');
        
        if (!container.hasClass(creditsSelectorClassName))
        container.addClass(creditsSelectorClassName);
        
        // Copyright
        
        container.append(this.generateCreditsCopyright());
        
        // Involved
        
        if (this._settings.involvedBusinesses.length > 0){
            
            container.append(this.createHtmlDiv(this.createClassName('title'), ''));
            container.append(this.generateInvolvedBusinesses());
        }
        
        // Tools
        
        if (this._settings.tools.length > 0){
            
            container.append(this.createHtmlDiv(this.createClassName('title'), ''));
            container.append(this.generateTools());
        }
        
        // Hosting
        
        if (this._settings.hosting !== undefined){
            
            container.append(this.createHtmlDiv(this.createClassName('title'), 'Hosting'));
            
            let subTitle = this.createHtmlDiv(this.createClassName('SubTitle'), this.createHtmlSpan(undefined, 'managed by '));
            subTitle.append(this.generateBusinessInfoTextHtml(this._settings.hosting.management));
            container.append(subTitle);
            
            container.append(this.generateHosting());
        }
    }
    
    private static generateCreditsCopyright(): HTMLElement{
        
        return this.createHtmlDiv(this.createClassName('credits', 'copyright', 'disclaimer'), this._settings.copyright.disclaimer);
    }
    
    private static generateBusinessInfoTextHtml(business: Business): HTMLElement{
        
        if (business.websiteUrl !== undefined)
        return this.createHtmlAnchor(undefined, business.websiteUrl, business.name);
        
        return this.createHtmlParagraph(undefined, business.name);
    }
    
    private static generateInvolvedBusinesses(): HTMLElement{
        
        let businessesContainer = this.createHtmlDiv(this.createClassName('credits', 'involved'));
        
        this._settings.involvedBusinesses.forEach((business) =>{
            businessesContainer.append(this.generateBusinessHtml(business.business, business.involvement + ' by'));
        });
        
        return businessesContainer;
    }
    
    private static generateTools(): HTMLElement{
        
        let businessesContainer = this.createHtmlDiv(this.createClassName('credits', 'tools'));
        
        this._settings.tools.forEach((tool) =>{
            let businessDiv = this.createHtmlDiv(this.createClassName('toolinfo'));
            
            if (tool.logoUrl !== undefined)
            businessDiv.append(this.createHtmlDiv(undefined, this.createHtmlImageLink(undefined, tool.logoUrl, tool.linkUrl)));
            
            businessDiv.append(this.createHtmlAnchor(undefined, tool.linkUrl, tool.name));
            
            businessDiv.append(this.createHtmlParagraph(undefined, tool.developer.name));
            
            businessesContainer.append(businessDiv);
        });
        
        return businessesContainer;
    }
    
    private static generateHosting(): HTMLElement{
        
        let businessesContainer = this.createHtmlDiv(this.createClassName('credits', 'hosting'));
        
        businessesContainer.append(this.generateBusinessHtml(this._settings.hosting.provider));
        
        return businessesContainer;
    }
    
    private static generateBusinessHtml(business : Business, innerDescription? : string):HTMLElement
    {
        
        let businessDiv = this.createHtmlDiv(this.createClassName('businessinfo'));
        
        if (business.logoUrl !== undefined)
        businessDiv.append(this.createHtmlDiv(undefined, this.createHtmlImageLink(undefined, business.logoUrl, business.websiteUrl)));
        
        if (innerDescription !== undefined)
        businessDiv.append(this.createHtmlParagraph(undefined,  '\xa0' + innerDescription + '\xa0'));
        
        businessDiv.append(this.generateBusinessInfoTextHtml(business));
        
        return businessDiv;
    }
    
    // Create Methods
    
    private static createClassName(...namingSections: string[]) : string{
        let fullClassName = this.baseClassName;
        
        namingSections.forEach((section) => {
            fullClassName += '-' + section;
        });
        
        return fullClassName;
    }
    
    private static createHtmlDiv(className: string, content?: string | Node):HTMLDivElement{
        
        let divElement = document.createElement('div');
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static createHtmlSpan(className: string, content?: string | Node): HTMLSpanElement{
        
        let divElement = document.createElement('span');
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static createHtmlParagraph(className: string, content?: string | Node): HTMLParagraphElement{
        
        let divElement = document.createElement('p');
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static createHtmlAnchor(className: string, link: string, content?: string | Node): HTMLAnchorElement{
        
        let divElement = document.createElement('a');
        divElement.href = link;
        divElement.target = '_blank';
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static createHtmlImage(className: string, source: string): HTMLImageElement{
        
        let imageElement = document.createElement('img');
        imageElement.src = source;
        
        if (className !== undefined)
        imageElement.className = className;
        
        return imageElement;
    }
    
    private static createHtmlImageLink(className: string, source: string, link?: string): HTMLElement{
        
        if (link !== undefined)
        return this.createHtmlAnchor(className, link, this.createHtmlImage(undefined, source));
        
        return this.createHtmlImage(undefined, source);
    }
    
    private static display() : void {
        
        // Summary
        this.fillInLegend();
        
        // Credits
        this.fillInCreditsSummary()
    }
    
    // Public Methods
    
    static toggleDisplay() : void {
        
        let credits = $('.cloudcredits-creditscontainer');
        credits.html('');
        
        if (credits.hasClass('cloudcredits-creditssummary'))
        {
            
            this.fillInCredits();
            credits.removeClass('cloudcredits-creditssummary');
            
            $('.cloudcredits-legend').addClass("Extended");
            
            // Scroll
            
            let bodySelector = 'body';
            
            ['#Body','#body','.Body','.body'].forEach((selector) =>{
                
                if ($(selector).length > 0)
                bodySelector = selector;
            });
            
            let topScrollValue = $(".cloudcredits-legend").position().top;
            
            if (bodySelector !== 'body')
            topScrollValue = $(bodySelector).scrollTop() + $('.cloudcredits-legend').offset().top;
            
            $(bodySelector).animate({ scrollTop: topScrollValue }, 'fast');           
        }else{
            
            this.fillInCreditsSummary();
            credits.removeClass('CloudCredits-Credits');     
            
            $('.cloudcredits-legend').removeClass("Extended");
        }
    }
}

const cloudCredits = (settings: CloudCreditsSettings) => new CloudCredits(settings);

$(document).on('click', '.cloudcredits-legend', function(){
    
    CloudCredits.toggleDisplay();
});