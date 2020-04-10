import { CloudCreditsSettings } from "./Settings";
import { CloudCreditsItem } from "./Classes";



export class CloudCredits {
    
    // Private Variables
    private static _settings: CloudCreditsSettings;
    private static baseClassName: string = 'cloudcredits';

    private static _element: Element;
    private static _legendElement: Element;
    private static _summaryElement: Element;
    private static _contentElement: Element;

    // Constructors

    public constructor(settings: CloudCreditsSettings){
        
        CloudCredits._settings = this.mergeSettings(settings);

        CloudCredits._element = document.querySelector('.cloudcredits');

        if (CloudCredits._element === null) {
            console.log('Please create an element with class "cloudcredits" to define credits');
            return;
        }

        CloudCredits._legendElement = document.querySelector('.cloudcredits-legend');

        if (CloudCredits._legendElement === null) {

            let legendContent = CloudCredits._element.innerHTML;
            CloudCredits._element.innerHTML = '';
            CloudCredits._legendElement = CloudCredits.createHtmlDiv(CloudCredits.createClassName('legend'), legendContent);
            CloudCredits._element.append(CloudCredits._legendElement);
        }

        CloudCredits._summaryElement = document.querySelector('.cloudcredits-summary');

        if (CloudCredits._summaryElement === null) {

            CloudCredits._summaryElement = CloudCredits.createHtmlDiv(CloudCredits.createClassName('summary'));
            CloudCredits._element.append(CloudCredits._summaryElement);
        }

        CloudCredits._contentElement = document.querySelector('.cloudcredits-content');

        if (CloudCredits._contentElement === null) {

            CloudCredits._contentElement = CloudCredits.createHtmlDiv(CloudCredits.createClassName('content'));
            CloudCredits._element.append(CloudCredits._contentElement);
        }
    
        // Summary
        CloudCredits.fillInLegend();
        
        // Credits
        CloudCredits.fillInSummary()

        $(document).on('click', '.cloudcredits-legend', function(){
            
            CloudCredits.toggleDisplay();
        });
    }
    
    private static fillInLegend() : void {
        
        let legendContent = this._legendElement.innerHTML;
        
        if (legendContent === '')
            legendContent = '© ' + this._settings.copyright.businessName;

        this._legendElement.innerHTML = legendContent;
    }
    
    private static fillInSummary() : void {
        
        for(const section of this._settings.sections)
            for(const item of section.items)
            {
                if (!item.displayInSummary)
                    continue;
                
                let summaryItem = this.createHtmlDiv(CloudCredits.createClassName('summary-item'));

                if (item.title !== undefined)
                    summaryItem.append(this.createHtmlParagraph(undefined, item.title + '\xa0'));
                
                summaryItem.append(this.generateItemSummaryElement(item));
                
                summaryItem.append(this.createHtmlParagraph(undefined, '\xa0'));
                
                CloudCredits._summaryElement.append(summaryItem);
            }
    }
    
    private static fillInContent() : void {
        
        // Copyright
        
        this._contentElement.append(this.generateCreditsCopyright());
        
        // Sections
        
        for (const section of this._settings.sections){

            const sectionElement = this.createHtmlDiv(this.createClassName('section'));
            this._contentElement.append(sectionElement);

            if (section.title !== undefined)
                sectionElement.append(this.createHtmlDiv(this.createClassName('section-title'), section.title));

            const itemsElement = this.createHtmlDiv(this.createClassName('items'));
                sectionElement.append(itemsElement);
            
            for (const item of section.items)
                itemsElement.append(this.generateItemElement(item));
        }
    }
    
    static toggleDisplay() : void {
        
        const expandedClass = '_expanded';
        const isExpanded = this._element.classList.contains(expandedClass);
            
        this.scrollTo(document.querySelector('.cloudcredits-legend'), 200);

        if (!isExpanded) {

            this._summaryElement.innerHTML = '';
            this.fillInContent();
            
            this._element.classList.add(expandedClass)

        } else {
            
            this._contentElement.innerHTML = '';
            this.fillInSummary();
            
            this._element.classList.remove(expandedClass)  
        }
    }
    
    private mergeSettings(_settings: CloudCreditsSettings): CloudCreditsSettings {

        if (_settings.copyright === undefined)
            _settings.copyright = { businessName: '{Business Name}'};

        if (_settings.copyright.disclaimer === undefined)
            _settings.copyright.disclaimer = 'All Rights Reserved.';
        
        return _settings;
    }
    
    // Public Variables
    
    private static generateCopyrightSection(): HTMLElement {
        
        // Main Div
        let main = this.createHtmlDiv(this.createClassName('copyright'))
        
        // Copyright Disclaimer
        main.appendChild(this.createHtmlDiv(this.createClassName('copyright', 'disclaimer'), this._settings.copyright.disclaimer));
        
        // Business
        let business = this.createHtmlDiv(this.createClassName('copyright', 'business'));
        main.appendChild(business);
        
        // Business Name
        if (this._settings.copyright.businessName !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'name'), this._settings.copyright.businessName));
        
        // Business Website Url
        if (this._settings.copyright.businessWebsite !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'websiteUrl'), this._settings.copyright.businessWebsite));
        
        return main;
    }
    
    private static generateCreditsCopyright(): HTMLElement{
        
        return this.createHtmlDiv(this.createClassName('credits', 'copyright', 'disclaimer'), this._settings.copyright.disclaimer);
    }
    
    private static generateItemSummaryElement(item:CloudCreditsItem): HTMLElement{
        
        if (item.link !== undefined)
            return this.createHtmlAnchor(undefined, item.link, item.name);
        
        return this.createHtmlParagraph(undefined, item.name);
    }
    
    private static generateItemElement(item: CloudCreditsItem):HTMLElement
    {
        let itemElement: HTMLElement = this.createHtmlDiv(this.createClassName('item'));
        let contentElement = itemElement;

        if (item.title === undefined)
            item.title = '\xa0';

        contentElement.append(this.createHtmlDiv(this.createClassName('item-title'), item.title));
        
        if (item.link !== undefined)
        {
            const linkElement = this.createHtmlAnchor(this.createClassName('item'), item.link);
            contentElement.append(linkElement);
            contentElement = linkElement;
        }

        if (item.logo !== undefined)
            contentElement.append(this.createHtmlImage(this.createClassName('item-logo'), item.logo));
        
        contentElement.append(this.createHtmlParagraph(this.createClassName('item-name'), item.name));

        if (item.description !== undefined)
            itemElement.append(this.createHtmlParagraph(this.createClassName('item-description'), item.description));
        
        return itemElement;
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
    
    // Public Methods

    private static scrollTo(scrollToElement: Element, scrollDuration: number): void {

        const scrollTo = window.pageYOffset + scrollToElement.getBoundingClientRect().top;
                
        // Declarations
    
        let cosParameter = (window.pageYOffset - scrollTo) / 2,
            scrollCount = 0,
            oldTimestamp = window.performance.now();
    
        function step(newTimestamp: number): void {
    
            let tsDiff = newTimestamp - oldTimestamp;
    
            // Performance.now() polyfill loads late so passed-in timestamp is a larger offset
            // on the first go-through than we want so I'm adjusting the difference down here.
            // Regardless, we would rather have a slightly slower animation than a big jump so a good
            // safeguard, even if we're not using the polyfill.
    
            if (tsDiff > 100)
                tsDiff = 30;
    
            scrollCount += Math.PI / (scrollDuration / tsDiff);
    
            // As soon as we cross over Pi, we're about where we need to be
    
            if (scrollCount >= Math.PI)
                return;
    
            const moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
    
        window.requestAnimationFrame(step);
    }
}

const cloudCredits = (settings: CloudCreditsSettings) => new CloudCredits(settings);
export default cloudCredits;