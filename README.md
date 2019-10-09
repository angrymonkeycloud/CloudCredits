[Cloud Credits](https://angrymonkeycloud.com/credits)
==================================================
A JavaScript library for displaying copyright, design and development, libraries, and hosting information and credits.

# Contribution
Check out https://angrymonkeycloud.com/credits for contribution information.

# Implementation
## Requirements
jQuery 2.x or 3.x: [jQuery CDN](https://code.jquery.com/), [download jQuery](https://jquery.com/download/).

## Cloud Credits JavaScript
### Download
Cloud Credits JavaScript files: [Uncompressed](https://cdn.amcapi.com/credits/cloudcredits-1.0.2.js), [Compressed](https://cdn.amcapi.com/credits/cloudcredits-1.0.2.min.js).

Cloud Credits CSS files: [Uncompressed](https://cdn.amcapi.com/credits/cloudcredits-1.0.2.css), [Compressed](https://cdn.amcapi.com/credits/cloudcredits-1.0.2.min.css).
 
### CDN
Cloud Credits JavaScript Compressed
```html
<script src="https://cdn.amcapi.com/credits/cloudcredits-1.0.2.min.js" crossorigin="anonymous"></script> 
```

Cloud Credits CSS Compressed
```html
<link href="https://cdn.amcapi.com/credits/cloudcredits-1.0.2.min.css" rel="stylesheet" />
```

### Sample
```js
CloudCredits.Init('Angry Monkey, LLC', '#CreditsLegend');

// Agency

let agencyBusiness = new Business('Angry Monkey Agency');
agencyBusiness.WebsiteUrl = 'https://www.angrymonkeyagency.com/';
agencyBusiness.LogoUrl = 'https://www.angrymonkeyagency.com/favicon.ico';

// Designed and Developed

let developedAndDesigned = new InvolvedBusiness();
developedAndDesigned.Involvement = "Designed and Developed";
developedAndDesigned.DisplayInSummary = true;
developedAndDesigned.Business = agencyBusiness;
CloudCredits.InvolvedBusinesses.push(developedAndDesigned);

// Credits

let credits = new Tool('Cloud Credits', 'https://www.angrymonkeycloud.com/credits');
credits.LogoUrl = 'https://www.angrymonkeycloud.com/favicon.ico';
credits.Developer = new Business('Angry Monkey Cloud');
CloudCredits.Tools.push(credits);

// Translation

let translation = new Tool('Cloud Translation', 'https://www.angrymonkeycloud.com/translation');
translation.LogoUrl = 'https://www.angrymonkeycloud.com/favicon.ico';
translation.Developer = new Business('Angry Monkey Cloud');
CloudCredits.Tools.push(translation);

// jQuery

let jQuery = new Tool('jQuery', 'https://jquery.com/');
jQuery.LogoUrl = 'https://jquery.com/favicon.ico';
jQuery.Developer = new Business('The jQuery Foundation');
CloudCredits.Tools.push(jQuery);

// Bootstrap

let bootstrap = new Tool('Bootstrap', 'https://getbootstrap.com/');
bootstrap.LogoUrl = 'https://getbootstrap.com/docs/4.3/assets/img/favicons/favicon-32x32.png';
bootstrap.Developer = new Business('Bootstrap team');
CloudCredits.Tools.push(bootstrap);

// Hosting

CloudCredits.Hosting = new Tool();
CloudCredits.Hosting.Management = agencyBusiness;

CloudCredits.Hosting.Provider = new Business();
CloudCredits.Hosting.Provider.Name = 'WordPress.com';
CloudCredits.Hosting.Provider.LogoUrl = 'https://wpcom.files.wordpress.com/2017/11/cropped-wordpress.png?w=48';
CloudCredits.Hosting.Provider.WebsiteUrl = 'https://wordpress.com/';
```