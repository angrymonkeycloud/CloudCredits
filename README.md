[Cloud Credits](https://angrymonkeycloud.com/credits)
==================================================
A JavaScript library for displaying copyright, design and development, libraries, and hosting information and credits.

# Contribution
Check out https://angrymonkeycloud.com/credits for contribution information.

# Implementation
## Requirements
jQuery 2.x or 3.x: [jQuery CDN](https://code.jquery.com/), [download jQuery](https://jquery.com/download/).

## Cloud Credits Files
### Download
Cloud Credits JavaScript files: [Uncompressed](https://cdn.amcapi.com/credits/1.1.1/js/cloudcredits.js), [Compressed](https://cdn.amcapi.com/credits/1.1.1/js/cloudcredits.min.js).

Cloud Credits CSS files: [Uncompressed](https://cdn.amcapi.com/credits/1.1.1/css/cloudcredits.css), [Compressed](https://cdn.amcapi.com/credits/1.1.1/css/cloudcredits.min.css).
 
### CDN
Cloud Credits JavaScript Compressed
```html
<script src="https://cdn.amcapi.com/credits/1.1.1/js/cloudcredits.min.js" crossorigin="anonymous"></script> 
```

Cloud Credits CSS Compressed
```html
<link href="https://cdn.amcapi.com/credits/1.1.1/css/cloudcredits.min.css" rel="stylesheet" />
```

## Sample
```js
let agencyBusiness = new Business('Angry Monkey Agency');
agencyBusiness.websiteUrl = 'https://www.angrymonkeyagency.com/';
agencyBusiness.logoUrl = 'https://www.angrymonkeyagency.com/favicon.ico';

let wordpress = new Business('WordPress.com');
wordpress.websiteUrl = 'https://wordpress.com/';
wordpress.logoUrl = 'https://wpcom.files.wordpress.com/2017/11/cropped-wordpress.png?w=48';

cloudCredits({
    copyright: new CopyrightSection(new Business("Angry Monkey, LLC")),
    legendSelector: '.creditslegend',
    involvedBusinesses:[
        {
            business: agencyBusiness,
            involvement: "Designed and Developed",
            displayInSummary: true
        }
    ],
    tools:[
        {
            name: 'Cloud Credits',
            developer: new Business('Angry Monkey Cloud'),
            logoUrl: 'https://www.angrymonkeycloud.com/favicon.ico',
            linkUrl: 'https://www.angrymonkeycloud.com/credits'
        },
        {
            name: 'jQUery',
            developer: new Business('The jQuery Foundation'),
            logoUrl: 'https://jquery.com/favicon.ico',
            linkUrl: 'https://jquery.com/'
        },
        {
            name: 'Bootstrap',
            developer: new Business('Bootstrap team'),
            linkUrl: 'https://getbootstrap.com/',
            logoUrl:'https://getbootstrap.com/docs/4.3/assets/img/favicons/favicon-32x32.png'
        }
    ],
    hosting: {  
        provider: wordpress,
        management: agencyBusiness
    }
});
```