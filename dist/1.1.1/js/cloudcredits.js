var CopyrightSection = (function () {
    function CopyrightSection(_business) {
        this.disclaimer = 'All Rights Reserved.';
        this.business = _business;
    }
    return CopyrightSection;
}());
var Business = (function () {
    function Business(_name) {
        this.name = _name;
    }
    return Business;
}());
var InvolvedBusiness = (function () {
    function InvolvedBusiness() {
        this.displayInSummary = false;
    }
    return InvolvedBusiness;
}());
var Tool = (function () {
    function Tool() {
        this.displayInSummary = false;
    }
    return Tool;
}());
var Hosting = (function () {
    function Hosting() {
        this.displayInSummary = false;
    }
    return Hosting;
}());
var CloudCredits = (function () {
    function CloudCredits(settings) {
        CloudCredits._settings = this.mergeSettings(settings);
        if (CloudCredits._settings.creditsSelector === undefined)
            CloudCredits._settings.creditsSelector = CloudCredits._settings.legendSelector;
        CloudCredits.display();
    }
    CloudCredits.prototype.mergeSettings = function (_settings) {
        var settings = {
            legendSelector: undefined,
            creditsSelector: undefined,
            copyright: undefined,
            involvedBusinesses: [],
            tools: [],
            hosting: undefined
        };
        for (var attrname in _settings)
            settings[attrname] = _settings[attrname];
        return settings;
    };
    CloudCredits.generateCopyrightSection = function () {
        var main = this.createHtmlDiv(this.createClassName('copyright'));
        main.appendChild(this.createHtmlDiv(this.createClassName('copyright', 'disclaimer'), this._settings.copyright.disclaimer));
        var business = this.createHtmlDiv(this.createClassName('copyright', 'business'));
        main.appendChild(business);
        if (this._settings.copyright.business.name !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'name'), this._settings.copyright.business.name));
        if (this._settings.copyright.business.addressLine1 !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'address1'), this._settings.copyright.business.addressLine1));
        if (this._settings.copyright.business.addressLine2 !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'address2'), this._settings.copyright.business.addressLine2));
        if (this._settings.copyright.business.websiteUrl !== undefined)
            business.append(this.createHtmlDiv(this.createClassName('copyright', 'business', 'websiteUrl'), this._settings.copyright.business.websiteUrl));
        return main;
    };
    CloudCredits.fillInLegend = function () {
        var content = $(this._settings.legendSelector).html('');
        var legendContent;
        if ($(this._settings.legendSelector).data('legend')) {
            legendContent = $(this._settings.legendSelector).data('legend');
            $(this._settings.legendSelector).removeAttr('data-legend');
        }
        else
            legendContent = '© ' + this._settings.copyright.business.name;
        content.append(this.createHtmlDiv(this.createClassName('legendcontainer'), this.createHtmlSpan(this.createClassName('legend'), legendContent)));
    };
    CloudCredits.createCreditsContainer = function () {
        var content = $(this._settings.creditsSelector);
        var containerClassName = this.createClassName('creditscontainer');
        var container = $('.' + containerClassName);
        if (container.length > 0)
            return container[0];
        content.append(this.createHtmlDiv(containerClassName));
        container = $('.' + containerClassName);
        return container[0];
    };
    CloudCredits.fillInCreditsSummary = function () {
        var _this = this;
        var container = $(this.createCreditsContainer());
        var summarySelectorClassName = this.createClassName('creditssummary');
        if (!container.hasClass(summarySelectorClassName))
            container.addClass(summarySelectorClassName);
        this._settings.involvedBusinesses.forEach(function (business) {
            if (!business.displayInSummary)
                return;
            var section = _this.createHtmlDiv(undefined);
            section.append(_this.createHtmlParagraph(undefined, business.involvement + ' by\xa0'));
            section.append(_this.generateBusinessInfoTextHtml(business.business));
            section.append(_this.createHtmlParagraph(undefined, '\xa0'));
            container.append(section);
        });
    };
    CloudCredits.fillInCredits = function () {
        var container = $(this.createCreditsContainer());
        var creditsSelectorClassName = this.createClassName('credits');
        if (!container.hasClass(creditsSelectorClassName))
            container.addClass(creditsSelectorClassName);
        container.append(this.generateCreditsCopyright());
        if (this._settings.involvedBusinesses.length > 0) {
            container.append(this.createHtmlDiv(this.createClassName('title'), ''));
            container.append(this.generateInvolvedBusinesses());
        }
        if (this._settings.tools.length > 0) {
            container.append(this.createHtmlDiv(this.createClassName('title'), ''));
            container.append(this.generateTools());
        }
        if (this._settings.hosting !== undefined) {
            container.append(this.createHtmlDiv(this.createClassName('title'), 'Hosting'));
            var subTitle = this.createHtmlDiv(this.createClassName('SubTitle'), this.createHtmlSpan(undefined, 'managed by '));
            subTitle.append(this.generateBusinessInfoTextHtml(this._settings.hosting.management));
            container.append(subTitle);
            container.append(this.generateHosting());
        }
    };
    CloudCredits.generateCreditsCopyright = function () {
        return this.createHtmlDiv(this.createClassName('credits', 'copyright', 'disclaimer'), this._settings.copyright.disclaimer);
    };
    CloudCredits.generateBusinessInfoTextHtml = function (business) {
        if (business.websiteUrl !== undefined)
            return this.createHtmlAnchor(undefined, business.websiteUrl, business.name);
        return this.createHtmlParagraph(undefined, business.name);
    };
    CloudCredits.generateInvolvedBusinesses = function () {
        var _this = this;
        var businessesContainer = this.createHtmlDiv(this.createClassName('credits', 'involved'));
        this._settings.involvedBusinesses.forEach(function (business) {
            businessesContainer.append(_this.generateBusinessHtml(business.business, business.involvement + ' by'));
        });
        return businessesContainer;
    };
    CloudCredits.generateTools = function () {
        var _this = this;
        var businessesContainer = this.createHtmlDiv(this.createClassName('credits', 'tools'));
        this._settings.tools.forEach(function (tool) {
            var businessDiv = _this.createHtmlDiv(_this.createClassName('toolinfo'));
            if (tool.logoUrl !== undefined)
                businessDiv.append(_this.createHtmlDiv(undefined, _this.createHtmlImageLink(undefined, tool.logoUrl, tool.linkUrl)));
            businessDiv.append(_this.createHtmlAnchor(undefined, tool.linkUrl, tool.name));
            businessDiv.append(_this.createHtmlParagraph(undefined, tool.developer.name));
            businessesContainer.append(businessDiv);
        });
        return businessesContainer;
    };
    CloudCredits.generateHosting = function () {
        var businessesContainer = this.createHtmlDiv(this.createClassName('credits', 'hosting'));
        businessesContainer.append(this.generateBusinessHtml(this._settings.hosting.provider));
        return businessesContainer;
    };
    CloudCredits.generateBusinessHtml = function (business, innerDescription) {
        var businessDiv = this.createHtmlDiv(this.createClassName('businessinfo'));
        if (business.logoUrl !== undefined)
            businessDiv.append(this.createHtmlDiv(undefined, this.createHtmlImageLink(undefined, business.logoUrl, business.websiteUrl)));
        if (innerDescription !== undefined)
            businessDiv.append(this.createHtmlParagraph(undefined, '\xa0' + innerDescription + '\xa0'));
        businessDiv.append(this.generateBusinessInfoTextHtml(business));
        return businessDiv;
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
    CloudCredits.createHtmlImageLink = function (className, source, link) {
        if (link !== undefined)
            return this.createHtmlAnchor(className, link, this.createHtmlImage(undefined, source));
        return this.createHtmlImage(undefined, source);
    };
    CloudCredits.display = function () {
        this.fillInLegend();
        this.fillInCreditsSummary();
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
    CloudCredits.toggleDisplay = function () {
        var credits = $('.cloudcredits-creditscontainer');
        credits.html('');
        if (credits.hasClass('cloudcredits-creditssummary')) {
            this.fillInCredits();
            credits.removeClass('cloudcredits-creditssummary');
            $('.cloudcredits-legend').addClass("Extended");
            this.scrollTo(document.querySelector('.cloudcredits-legend'), 200);
        }
        else {
            this.fillInCreditsSummary();
            credits.removeClass('CloudCredits-Credits');
            $('.cloudcredits-legend').removeClass("Extended");
        }
    };
    CloudCredits.baseClassName = 'cloudcredits';
    return CloudCredits;
}());
var cloudCredits = function (settings) { return new CloudCredits(settings); };
$(document).on('click', '.cloudcredits-legend', function () {
    CloudCredits.toggleDisplay();
});
