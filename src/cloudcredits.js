var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CopyrightSection = (function () {
    function CopyrightSection() {
        this.Disclaimer = 'All Rights Reserved.';
    }
    return CopyrightSection;
}());
var BusinessInfo = (function () {
    function BusinessInfo(name) {
        this.Name = name;
    }
    return BusinessInfo;
}());
var InvolvedBusinessInfo = (function () {
    function InvolvedBusinessInfo() {
        this.DisplayInSummary = false;
    }
    return InvolvedBusinessInfo;
}());
var LibraryInfo = (function () {
    function LibraryInfo(name, linkUrl) {
        this.DisplayInSummary = false;
        this.Name = name;
        this.LinkUrl = linkUrl;
    }
    return LibraryInfo;
}());
var HostingInfo = (function () {
    function HostingInfo() {
        this.DisplayInSummary = false;
    }
    return HostingInfo;
}());
var CloudCredits = (function () {
    function CloudCredits() {
    }
    CloudCredits.Init = function (businessName, legendSelector, creditsSelector) {
        this.Copyright = new CopyrightSection();
        this.Copyright.Business = new BusinessInfo(businessName);
        this.LegendSelector = legendSelector;
        if (creditsSelector === undefined)
            this.CreditsSelector = this.LegendSelector;
        else
            this.CreditsSelector = creditsSelector;
    };
    CloudCredits.GenerateCopyrightSection = function () {
        var main = this.CreateHtmlDiv(this.CreateClassName('Copyright'));
        main.appendChild(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Disclaimer'), this.Copyright.Disclaimer));
        var business = this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business'));
        main.appendChild(business);
        if (this.Copyright.Business.Name !== undefined)
            business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'Name'), this.Copyright.Business.Name));
        if (this.Copyright.Business.AddressLine1 !== undefined)
            business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'Address1'), this.Copyright.Business.AddressLine1));
        if (this.Copyright.Business.AddressLine2 !== undefined)
            business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'Address2'), this.Copyright.Business.AddressLine2));
        if (this.Copyright.Business.WebsiteUrl !== undefined)
            business.append(this.CreateHtmlDiv(this.CreateClassName('Copyright', 'Business', 'WebsiteUrl'), this.Copyright.Business.WebsiteUrl));
        return main;
    };
    CloudCredits.FillInLegend = function () {
        var content = $(this.LegendSelector).html('');
        content.append(this.CreateHtmlDiv(this.CreateClassName('LegendContainer'), this.CreateHtmlSpan(this.CreateClassName('Legend'), '© ' + this.Copyright.Business.Name)));
    };
    CloudCredits.CreateCreditsContainer = function () {
        var content = $(this.CreditsSelector);
        var containerClassName = this.CreateClassName('CreditsContainer');
        var container = $('.' + containerClassName);
        if (container.length > 0)
            return container[0];
        content.append(this.CreateHtmlDiv(containerClassName));
        container = $('.' + containerClassName);
        return container[0];
    };
    CloudCredits.FillInCreditsSummary = function () {
        var _this = this;
        var container = $(this.CreateCreditsContainer());
        var summarySelectorClassName = this.CreateClassName('CreditsSummary');
        if (!container.hasClass(summarySelectorClassName))
            container.addClass(summarySelectorClassName);
        this.InvolvedBusinesses.forEach(function (business) {
            if (!business.DisplayInSummary)
                return;
            var section = _this.CreateHtmlDiv(undefined);
            section.append(_this.CreateHtmlParagraph(undefined, business.Involvement + ' by\xa0'));
            section.append(_this.GenerateBusinessInfoTextHtml(business.Business));
            section.append(_this.CreateHtmlParagraph(undefined, '\xa0'));
            container.append(section);
        });
    };
    CloudCredits.FillInCredits = function () {
        var container = $(this.CreateCreditsContainer());
        var creditsSelectorClassName = this.CreateClassName('Credits');
        if (!container.hasClass(creditsSelectorClassName))
            container.addClass(creditsSelectorClassName);
        container.append(this.GenerateCreditsCopyright());
        if (this.InvolvedBusinesses.length > 0) {
            container.append(this.CreateHtmlDiv(this.CreateClassName('Title'), ''));
            container.append(this.GenerateInvolvedBusinesses());
        }
        if (this.Libraries.length > 0) {
            container.append(this.CreateHtmlDiv(this.CreateClassName('Title'), ''));
            container.append(this.GenerateLibraries());
        }
        if (this.Hosting !== undefined) {
            container.append(this.CreateHtmlDiv(this.CreateClassName('Title'), 'Hosting'));
            var subTitle = this.CreateHtmlDiv(this.CreateClassName('SubTitle'), this.CreateHtmlSpan(undefined, 'managed by '));
            subTitle.append(this.GenerateBusinessInfoTextHtml(this.Hosting.Management));
            container.append(subTitle);
            container.append(this.GenerateHosting());
        }
    };
    CloudCredits.GenerateCreditsCopyright = function () {
        return this.CreateHtmlDiv(this.CreateClassName('Credits', 'Copyright', 'Disclaimer'), this.Copyright.Disclaimer);
    };
    CloudCredits.GenerateBusinessInfoTextHtml = function (business) {
        if (business.WebsiteUrl !== undefined)
            return this.CreateHtmlAnchor(undefined, business.WebsiteUrl, business.Name);
        return this.CreateHtmlParagraph(undefined, business.Name);
    };
    CloudCredits.GenerateInvolvedBusinesses = function () {
        var _this = this;
        var businessesContainer = this.CreateHtmlDiv(this.CreateClassName('Credits', 'Involved'));
        this.InvolvedBusinesses.forEach(function (business) {
            businessesContainer.append(_this.GenerateBusinessHtml(business.Business, business.Involvement + ' by'));
        });
        return businessesContainer;
    };
    CloudCredits.GenerateLibraries = function () {
        var _this = this;
        var businessesContainer = this.CreateHtmlDiv(this.CreateClassName('Credits', 'Libraries'));
        this.Libraries.forEach(function (library) {
            var businessDiv = _this.CreateHtmlDiv(_this.CreateClassName('LibraryInfo'));
            if (library.LogoUrl !== undefined)
                businessDiv.append(_this.CreateHtmlDiv(undefined, _this.CreateHtmlImage(undefined, library.LogoUrl)));
            businessDiv.append(_this.CreateHtmlAnchor(undefined, library.LinkUrl, library.Name));
            businessDiv.append(_this.CreateHtmlParagraph(undefined, library.Developer.Name));
            businessesContainer.append(businessDiv);
        });
        return businessesContainer;
    };
    CloudCredits.GenerateHosting = function () {
        var businessesContainer = this.CreateHtmlDiv(this.CreateClassName('Credits', 'Hosting'));
        businessesContainer.append(this.GenerateBusinessHtml(this.Hosting.Provider));
        return businessesContainer;
    };
    CloudCredits.GenerateBusinessHtml = function (business, innerDescription) {
        var businessDiv = this.CreateHtmlDiv(this.CreateClassName('BusinessInfo'));
        if (business.LogoUrl !== undefined)
            businessDiv.append(this.CreateHtmlDiv(undefined, this.CreateHtmlImage(undefined, business.LogoUrl)));
        if (innerDescription !== undefined)
            businessDiv.append(this.CreateHtmlParagraph(undefined, '\xa0' + innerDescription + '\xa0'));
        businessDiv.append(this.GenerateBusinessInfoTextHtml(business));
        return businessDiv;
    };
    CloudCredits.CreateClassName = function () {
        var namingSections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            namingSections[_i] = arguments[_i];
        }
        var fullClassName = this.BaseClassName;
        namingSections.forEach(function (section) {
            fullClassName += '-' + section;
        });
        return fullClassName;
    };
    CloudCredits.CreateHtmlDiv = function (className, content) {
        var divElement = document.createElement('div');
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.CreateHtmlSpan = function (className, content) {
        var divElement = document.createElement('span');
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.CreateHtmlParagraph = function (className, content) {
        var divElement = document.createElement('p');
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.CreateHtmlAnchor = function (className, link, content) {
        var divElement = document.createElement('a');
        divElement.href = link;
        divElement.target = '_blank';
        if (className !== undefined)
            divElement.className = className;
        if (content !== undefined)
            divElement.append(content);
        return divElement;
    };
    CloudCredits.CreateHtmlImage = function (className, source) {
        var imageElement = document.createElement('img');
        imageElement.src = source;
        if (className !== undefined)
            imageElement.className = className;
        return imageElement;
    };
    CloudCredits.Display = function () {
        this.FillInLegend();
        this.FillInCreditsSummary();
    };
    CloudCredits.ToggleDisplay = function () {
        var credits = $('.CloudCredits-CreditsContainer');
        credits.html('');
        if (credits.hasClass('CloudCredits-CreditsSummary')) {
            this.FillInCredits();
            credits.removeClass('CloudCredits-CreditsSummary');
            $('.CloudCredits-Legend').addClass("Extended");
            var bodySelector_1 = 'body';
            ['#Body', '#body', '.Body', '.body'].forEach(function (selector) {
                if ($(selector).length > 0)
                    bodySelector_1 = selector;
            });
            var topScrollValue = $(".CloudCredits-Legend").position().top;
            if (bodySelector_1 !== 'body')
                topScrollValue = $(bodySelector_1).scrollTop() + $('.CloudCredits-Legend').offset().top;
            $(bodySelector_1).animate({ scrollTop: topScrollValue }, 'fast');
        }
        else {
            this.FillInCreditsSummary();
            credits.removeClass('CloudCredits-Credits');
            $('.CloudCredits-Legend').removeClass("Extended");
        }
    };
    CloudCredits.InvolvedBusinesses = [];
    CloudCredits.Libraries = [];
    CloudCredits.BaseClassName = 'CloudCredits';
    return CloudCredits;
}());
$(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            CloudCredits.Display();
            return [2];
        });
    });
});
$(document).on('click', '.CloudCredits-Legend', function () {
    CloudCredits.ToggleDisplay();
});
//# sourceMappingURL=cloudcredits.js.map