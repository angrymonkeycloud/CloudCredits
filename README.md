[Cloud Credits](https://angrymonkeycloud.com/credits)
==================================================
A JavaScript library for displaying copyright, design and development, libraries, and hosting information and credits.

# Contribution

For TypeScript compilation please install Cloud Mate from npm

```batch
npm i -g cloudmate
```

To generate testing JavaScript file and keep watching for changes run the below:

```batch
cloudmate -w
```

When you're done, pleae update the version under package.json and run the following for generating distribution files:

```batch
cloudmate dist
```

Check out <https://angrymonkeycloud.com/credits> for more information.

# Implementation
## Requirements
jQuery 2.x or 3.x: [jQuery CDN](https://code.jquery.com/), [download jQuery](https://jquery.com/download/).

## Cloud Credits Files
### Download
Cloud Credits JavaScript files: [Uncompressed](https://cdn.amcapi.com/credits/2.0.1/js/cloudcredits.js), [Compressed](https://cdn.amcapi.com/credits/2.0.1/js/cloudcredits.min.js).

Cloud Credits CSS files: [Uncompressed](https://cdn.amcapi.com/credits/2.0.1/css/cloudcredits.css), [Compressed](https://cdn.amcapi.com/credits/2.0.1/css/cloudcredits.min.css).
 
### CDN

Cloud Credits JavaScript Compressed

```html
<script src="https://cdn.amcapi.com/credits/2.0.1/js/cloudcredits.min.js" crossorigin="anonymous"></script> 
```

Cloud Credits CSS Compressed

```html
<link href="https://cdn.amcapi.com/credits/2.0.1/css/cloudcredits.min.css" rel="stylesheet" />
```

## Sample

Add an empty (or filled with the display text) div in HTML having the class 'cloudcredits'.

```html
<div class="cloudcredits">&copy; 2020 Angry Monkey, LLC</div>
```

Define items in JavaScript.

```js
cloudCredits(
    {
        copyright:
        {
            businessName: 'Angry Monkey, LLC'
        },
        sections: [
            {
                items: [
                    {
                        name: 'Angry Monke Agency',
                        title: 'Designed and Developed by',
                        link: 'https://www.angrymonkeyagency.com/',
                        logo: 'https://www.angrymonkeyagency.com/favicon.ico',
                        displayInSummary: true
                    }
                ]
            },
            {
                items: [
                    {
                        name: 'Angry Monkey Cloud Services',
                        logo: 'https://www.angrymonkeycloud.com/favicon.ico',
                        link: 'https://www.angrymonkeycloud.com/credits'
                    },
                    {
                        name: 'jQUery',
                        logo: 'https://jquery.com/favicon.ico',
                        link: 'https://jquery.com/'
                    },
                    {
                        name: 'Bootstrap',
                        logo: 'https://getbootstrap.com/',
                        link:'https://getbootstrap.com/docs/4.3/assets/img/favicons/favicon-32x32.png'
                    }
                ]
            },
            {
                title: 'Hosting',
                items:[
                    {
                        name: 'WordPress.com',
                        description: 'managed by Angry Monkey Agency',
                        link: 'https://wordpress.com/',
                        logo: 'https://wpcom.files.wordpress.com/2017/11/cropped-wordpress.png?w=48'
                    }
                ]
            }
        ]
    }
);
```
