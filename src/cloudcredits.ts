export
class CopyrightSection {
    
    Disclaimer: string = 'All Rights Reserved.';
    Business: Business;
}

export
class Business {
    
    constructor(name: string){
        this.Name = name;
    }
    
    Name: string;
    WebsiteUrl?: string;
    LogoUrl?: string;
    AddressLine1?: string;
    AddressLine2?: string;
}

export
class InvolvedBusiness {
    
    Business: Business;
    Involvement: string;
    DisplayInSummary: boolean = false;
}

export
class Tool {
    
    constructor(name: string, linkUrl: string){
        this.Name = name;
        this.LinkUrl = linkUrl;
    }
    
    Name: string;
    LinkUrl: string;
    LogoUrl?: string;
    
    Developer: Business;
    
    DisplayInSummary: boolean = false;
}

export
class Hosting {
    
    Provider: Business;
    Management: Business;
    DisplayInSummary: boolean = false;
}

export
class CloudCredits {
    
    // Private Variables
    private static LegendSelector: string;
    private static CreditsSelector: string;
    
    // Public Variables
    
    static Copyright: CopyrightSection;
    static InvolvedBusinesses: InvolvedBusiness[] = [];
    static Tools: Tool[] = [];
    static Hosting: Hosting;
    
    static Init(businessName: string, legendSelector: string, creditsSelector?: string) {
        
        this.Copyright = new CopyrightSection();
        this.Copyright.Business = new Business(businessName);
        
        this.LegendSelector = legendSelector;
        
        if (creditsSelector === undefined)
        this.CreditsSelector = this.LegendSelector;
        else 
        this.CreditsSelector = creditsSelector;
    }
    
    private static BaseClassName: string = 'CloudCredits';
    
    private static GenerateCopyrightSection(): HTMLElement {
        
        // Main Div
        let main = this.CreateHtmlDiv(this.CreateClassName('Copyright'))
        
        // Copyright Disclaimer
        main.appendChild(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Disclaimer'), this.Copyright.Disclaimer));
        
        // Business
        let business = this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business'));
        main.appendChild(business);
        
        // Business Name
        if (this.Copyright.Business.Name !== undefined)
        business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'Name'), this.Copyright.Business.Name));
        
        // Business Address 1
        if (this.Copyright.Business.AddressLine1 !== undefined)
        business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'Address1'), this.Copyright.Business.AddressLine1));
        
        // Business Address 2
        if (this.Copyright.Business.AddressLine2 !== undefined)
        business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'Address2'), this.Copyright.Business.AddressLine2));
        
        // Business Website Url
        if (this.Copyright.Business.WebsiteUrl !== undefined)
        business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'WebsiteUrl'), this.Copyright.Business.WebsiteUrl));
        
        return main;
    }
    
    private static FillInLegend() : void {
        
        let content = $(this.LegendSelector).html('');
        
        let legendContent : string;
        
        if ($(this.LegendSelector).data('legend')){
            legendContent = $(this.LegendSelector).data('legend');
            $(this.LegendSelector).removeAttr('data-legend');
        }
        else legendContent = '© ' + this.Copyright.Business.Name;
        
        content.append(this.CreateHtmlDiv(this.CreateClassName('LegendContainer'), this.CreateHtmlSpan(this.CreateClassName('Legend'), legendContent)));
    }
    
    private static CreateCreditsContainer() : HTMLElement{
        
        let content = $(this.CreditsSelector);
        let containerClassName = this.CreateClassName('CreditsContainer');
        
        let container = $('.' + containerClassName);
        
        if (container.length > 0)
        return container[0];
        
        content.append(this.CreateHtmlDiv(containerClassName));
        container =  $('.' + containerClassName);
        
        return container[0];
    }
    
    private static FillInCreditsSummary() : void{
        
        let container = $(this.CreateCreditsContainer());
        let summarySelectorClassName = this.CreateClassName('CreditsSummary');
        
        if (!container.hasClass(summarySelectorClassName))
        container.addClass(summarySelectorClassName);
        
        this.InvolvedBusinesses.forEach((business) =>{
            
            if (!business.DisplayInSummary)
            return;
            
            let section = this.CreateHtmlDiv(undefined);
            
            section.append(this.CreateHtmlParagraph(undefined,  business.Involvement + ' by\xa0'));
            
            section.append(this.GenerateBusinessInfoTextHtml(business.Business));
            
            section.append(this.CreateHtmlParagraph(undefined, '\xa0'));
            
            container.append(section);
        });
    }
    
    private static FillInCredits() : void{
        
        let container = $(this.CreateCreditsContainer());
        
        let creditsSelectorClassName = this.CreateClassName('Credits');
        
        if (!container.hasClass(creditsSelectorClassName))
        container.addClass(creditsSelectorClassName);
        
        // Copyright
        
        container.append(this.GenerateCreditsCopyright());
        
        // Involved
        
        if (this.InvolvedBusinesses.length > 0){
            
            container.append(this.CreateHtmlDiv(this.CreateClassName('Title'), ''));
            container.append(this.GenerateInvolvedBusinesses());
        }
        
        // Tools
        
        if (this.Tools.length > 0){
            
            container.append(this.CreateHtmlDiv(this.CreateClassName('Title'), ''));
            container.append(this.GenerateTools());
        }
        
        // Hosting
        
        if (this.Hosting !== undefined){
            
            container.append(this.CreateHtmlDiv(this.CreateClassName('Title'), 'Hosting'));
            
            let subTitle = this.CreateHtmlDiv(this.CreateClassName('SubTitle'), this.CreateHtmlSpan(undefined, 'managed by '));
            subTitle.append(this.GenerateBusinessInfoTextHtml(this.Hosting.Management));
            container.append(subTitle);
            
            container.append(this.GenerateHosting());
        }
    }
    
    private static GenerateCreditsCopyright(): HTMLElement{
        
        return this.CreateHtmlDiv(this.CreateClassName('Credits', 'Copyright', 'Disclaimer'), this.Copyright.Disclaimer);
    }
    
    private static GenerateBusinessInfoTextHtml(business: Business): HTMLElement{
        
        if (business.WebsiteUrl !== undefined)
        return this.CreateHtmlAnchor(undefined, business.WebsiteUrl, business.Name);
        
        return this.CreateHtmlParagraph(undefined, business.Name);
    }
    
    private static GenerateInvolvedBusinesses(): HTMLElement{
        
        let businessesContainer = this.CreateHtmlDiv(this.CreateClassName('Credits', 'Involved'));
        
        this.InvolvedBusinesses.forEach((business) =>{
            businessesContainer.append(this.GenerateBusinessHtml(business.Business, business.Involvement + ' by'));
        });
        
        return businessesContainer;
    }
    
    private static GenerateTools(): HTMLElement{
        
        let businessesContainer = this.CreateHtmlDiv(this.CreateClassName('Credits', 'Tools'));
        
        this.Tools.forEach((tool) =>{
            let businessDiv = this.CreateHtmlDiv(this.CreateClassName('ToolInfo'));
            
            if (tool.LogoUrl !== undefined)
            businessDiv.append(this.CreateHtmlDiv(undefined, this.CreateHtmlImageLink(undefined, tool.LogoUrl, tool.LinkUrl)));
            
            businessDiv.append(this.CreateHtmlAnchor(undefined, tool.LinkUrl, tool.Name));
            
            businessDiv.append(this.CreateHtmlParagraph(undefined, tool.Developer.Name));
            
            businessesContainer.append(businessDiv);
        });
        
        return businessesContainer;
    }
    
    private static GenerateHosting(): HTMLElement{
        
        let businessesContainer = this.CreateHtmlDiv(this.CreateClassName('Credits', 'Hosting'));
        
        businessesContainer.append(this.GenerateBusinessHtml(this.Hosting.Provider));
        
        return businessesContainer;
    }
    
    private static GenerateBusinessHtml(business : Business, innerDescription? : string):HTMLElement
    {
        
        let businessDiv = this.CreateHtmlDiv(this.CreateClassName('BusinessInfo'));
        
        if (business.LogoUrl !== undefined)
        businessDiv.append(this.CreateHtmlDiv(undefined, this.CreateHtmlImageLink(undefined, business.LogoUrl, business.WebsiteUrl)));
        
        if (innerDescription !== undefined)
        businessDiv.append(this.CreateHtmlParagraph(undefined,  '\xa0' + innerDescription + '\xa0'));
        
        businessDiv.append(this.GenerateBusinessInfoTextHtml(business));
        
        return businessDiv;
    }
    
    // Create Methods
    
    private static CreateClassName(...namingSections: string[]) : string{
        let fullClassName = this.BaseClassName;
        
        namingSections.forEach((section) => {
            fullClassName += '-' + section;
        });
        
        return fullClassName;
    }
    
    private static CreateHtmlDiv(className: string, content?: string | Node):HTMLDivElement{
        
        let divElement = document.createElement('div');
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static CreateHtmlSpan(className: string, content?: string | Node): HTMLSpanElement{
        
        let divElement = document.createElement('span');
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static CreateHtmlParagraph(className: string, content?: string | Node): HTMLParagraphElement{
        
        let divElement = document.createElement('p');
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static CreateHtmlAnchor(className: string, link: string, content?: string | Node): HTMLAnchorElement{
        
        let divElement = document.createElement('a');
        divElement.href = link;
        divElement.target = '_blank';
        
        if (className !== undefined)
        divElement.className = className;
        
        if (content !== undefined)
        divElement.append(content);
        
        return divElement;
    }
    
    private static CreateHtmlImage(className: string, source: string): HTMLImageElement{
        
        let imageElement = document.createElement('img');
        imageElement.src = source;
        
        if (className !== undefined)
        imageElement.className = className;
        
        return imageElement;
    }
    
    private static CreateHtmlImageLink(className: string, source: string, link?: string): HTMLElement{
        
        if (link !== undefined)
        return this.CreateHtmlAnchor(className, link, this.CreateHtmlImage(undefined, source));
        
        return this.CreateHtmlImage(undefined, source);
    }
    
    // Public Methods
    
    static Display() : void {
        
        // Summary
        this.FillInLegend();
        
        // Credits
        this.FillInCreditsSummary()
    }
    
    static ToggleDisplay() : void {
        
        let credits = $('.CloudCredits-CreditsContainer');
        credits.html('');
        
        if (credits.hasClass('CloudCredits-CreditsSummary'))
        {
            
            this.FillInCredits();
            credits.removeClass('CloudCredits-CreditsSummary');
            
            $('.CloudCredits-Legend').addClass("Extended");
            
            // Scroll
            
            let bodySelector = 'body';
            
            ['#Body','#body','.Body','.body'].forEach((selector) =>{
                
                if ($(selector).length > 0)
                bodySelector = selector;
            });
            
            let topScrollValue = $(".CloudCredits-Legend").position().top;
            
            if (bodySelector !== 'body')
            topScrollValue = $(bodySelector).scrollTop() + $('.CloudCredits-Legend').offset().top;
            
            $(bodySelector).animate({ scrollTop: topScrollValue }, 'fast');           
        }else{
            
            this.FillInCreditsSummary();
            credits.removeClass('CloudCredits-Credits');     
            
            $('.CloudCredits-Legend').removeClass("Extended");
        }
    }
}

$(async function () {
    
    CloudCredits.Display();
});

$(document).on('click', '.CloudCredits-Legend', function(){
    
    CloudCredits.ToggleDisplay();
});