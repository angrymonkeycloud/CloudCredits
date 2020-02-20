
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