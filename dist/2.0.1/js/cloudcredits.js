var exports = {};
var CloudCreditsItem = (function () {
    function CloudCreditsItem() {
        this.displayInSummary = false;
    }
    return CloudCreditsItem;
}());
{ CloudCreditsItem };
var CloudCreditsSection = (function () {
    function CloudCreditsSection() {
    }
    return CloudCreditsSection;
}());
{ CloudCreditsSection };
var CopyrightSection = (function () {
    function CopyrightSection() {
    }
    return CopyrightSection;
}());
{ CopyrightSection };


var CloudCredits = (function () {
    function CloudCredits(settings) {
        CloudCredits._settings = this.mergeSettings(settings);
        CloudCredits._element = document.querySelector('.cloudcredits');
        if (CloudCredits._element === null) {
            console.log('Please create an element with class "cloudcredits" to define credits');
            return;
        }
        CloudCredits._legendElement = document.querySelector('.cloudcredits-legend');
        if (CloudCredits._legendElement === null) {
            var legendContent = CloudCredits._element.innerHTML;
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
        CloudCredits.fillInLegend();
        CloudCredits.fillInSummary();
        $(document).on('click', '.cloudcredits-legend', function () {
            CloudCredits.toggleDisplay();
        });
    }
    CloudCredits.fillInLegend = function () {
        var legendContent = this._legendElement.innerHTML;
        if (legendContent === '')
            legendContent = '© ' + this._settings.copyright.businessName;
        this._legendElement.innerHTML = legendContent;
    };
    CloudCredits.fillInSummary = function () {
        for (var _i = 0, _a = this._settings.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            for (var _b = 0, _c = section.items; _b < _c.length; _b++) {
                var item = _c[_b];
                if (!item.displayInSummary)
                    continue;
                var summaryItem = this.createHtmlDiv(CloudCredits.createClassName('summary-item'));
                if (item.title !== undefined)
                    summaryItem.append(this.createHtmlParagraph(undefined, item.title + '\xa0'));
                summaryItem.append(this.generateItemSummaryElement(item));
                summaryItem.append(this.createHtmlParagraph(undefined, '\xa0'));
                CloudCredits._summaryElement.append(summaryItem);
            }
        }
    };
    CloudCredits.fillInContent = function () {
        this._contentElement.append(this.generateCreditsCopyright());
        for (var _i = 0, _a = this._settings.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            var sectionElement = this.createHtmlDiv(this.createClassName('section'));
            this._contentElement.append(sectionElement);
            if (section.title !== undefined)
                sectionElement.append(this.createHtmlDiv(this.createClassName('section-title'), section.title));
            var itemsElement = this.createHtmlDiv(this.createClassName('items'));
            sectionElement.append(itemsElement);
            for (var _b = 0, _c = section.items; _b < _c.length; _b++) {
                var item = _c[_b];
                itemsElement.append(this.generateItemElement(item));
            }
        }
    };
    CloudCredits.toggleDisplay = function () {
        var expandedClass = '_expanded';
        var isExpanded = this._element.classList.contains(expandedClass);
        this.scrollTo(document.querySelector('.cloudcredits-legend'), 200);
        if (!isExpanded) {
            this._summaryElement.innerHTML = '';
            this.fillInContent();
            this._element.classList.add(expandedClass);
        }
        else {
            this._contentElement.innerHTML = '';
            this.fillInSummary();
            this._element.classList.remove(expandedClass);
        }
    };
    CloudCredits.prototype.mergeSettings = function (_settings) {
        if (_settings.copyright === undefined)
            _settings.copyright = { businessName: '{Business Name}' };
        if (_settings.copyright.disclaimer === undefined)
            _settings.copyright.disclaimer = 'All Rights Reserved.';
        return _settings;
    };
    CloudCredits.generateCopyrightSection = function () {
        var main = this.createHtmlDiv(this.createClassName('copyright'));
        main.appendChild(this.createHtmlDiv(this.createClassName('copyright', 'disclaimer'), this._settings.copyright.disclaimer));
        var business = this.createHtmlDiv(this.createClassName('copyright', 'business'));
        main.appendChild(business);
        if (this._settings.copyright.businessName !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'name'), this._settings.copyright.businessName));
        if (this._settings.copyright.businessWebsite !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'websiteUrl'), this._settings.copyright.businessWebsite));
        return main;
    };
    CloudCredits.generateCreditsCopyright = function () {
        return this.createHtmlDiv(this.createClassName('credits', 'copyright', 'disclaimer'), this._settings.copyright.disclaimer);
    };
    CloudCredits.generateItemSummaryElement = function (item) {
        if (item.link !== undefined)
            return this.createHtmlAnchor(undefined, item.link, item.name);
        return this.createHtmlParagraph(undefined, item.name);
    };
    CloudCredits.generateItemElement = function (item) {
        var itemElement = this.createHtmlDiv(this.createClassName('item'));
        var contentElement = itemElement;
        if (item.title === undefined)
            item.title = '\xa0';
        contentElement.append(this.createHtmlDiv(this.createClassName('item-title'), item.title));
        if (item.link !== undefined) {
            var linkElement = this.createHtmlAnchor(this.createClassName('item'), item.link);
            contentElement.append(linkElement);
            contentElement = linkElement;
        }
        if (item.logo !== undefined)
            contentElement.append(this.createHtmlImage(this.createClassName('item-logo'), item.logo));
        contentElement.append(this.createHtmlParagraph(this.createClassName('item-name'), item.name));
        if (item.description !== undefined)
            itemElement.append(this.createHtmlParagraph(this.createClassName('item-description'), item.description));
        return itemElement;
    };
    CloudCredits.createClassName = function () {
        var namingSections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            namingSections[_i] = arguments[_i];
        }
        var fullClassName = this.baseClassName;
        namingSections.forEach(function (section) {
            fullClassName += '-' + section;
        });
        return fullClassName;
    };
    CloudCredits.createHtmlDiv = function (className, content) {
        var divElement = document.createElement('div');
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.createHtmlSpan = function (className, content) {
        var divElement = document.createElement('span');
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.createHtmlParagraph = function (className, content) {
        var divElement = document.createElement('p');
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.createHtmlAnchor = function (className, link, content) {
        var divElement = document.createElement('a');
        divElement.href = link;
        divElement.target = '_blank';
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.createHtmlImage = function (className, source) {
        var imageElement = document.createElement('img');
        imageElement.src = source;
        if (className !== undefined)
            imageElement.className = className;
        return imageElement;
    };
    CloudCredits.scrollTo = function (scrollToElement, scrollDuration) {
        var scrollTo = window.pageYOffset + scrollToElement.getBoundingClientRect().top;
        var cosParameter = (window.pageYOffset - scrollTo) / 2, scrollCount = 0, oldTimestamp = window.performance.now();
        function step(newTimestamp) {
            var tsDiff = newTimestamp - oldTimestamp;
            if (tsDiff > 100)
                tsDiff = 30;
            scrollCount += Math.PI / (scrollDuration / tsDiff);
            if (scrollCount >= Math.PI)
                return;
            var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    };
    CloudCredits.baseClassName = 'cloudcredits';
    return CloudCredits;
}());
{ CloudCredits };
var cloudCredits = function (settings) { return new CloudCredits(settings); };
cloudCredits;

