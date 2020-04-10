
import cloudCredits from '../src/js/Main';

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
                        name: 'Angry Monkey Cloud',
                        logo: 'https://www.angrymonkeycloud.com/favicon.ico',
                        link: 'https://www.angrymonkeycloud.com/credits'
                    },
                    {
                        name: 'jQUery',
                        logo: 'https://jquery.com/favicon.ico',
                        link: 'https://jquery.com/'
                    },
                    {
                        name: 'Microsoft .Net',
                        logo: 'https://dotnet.microsoft.com/favicon.ico',
                        link:'https://dotnet.microsoft.com/'
                    }
                ]
            },
            {
                title: 'Hosting',
                items:[
                    // {
                    //     name: 'Angry Monke Agency',
                    //     title: 'Managed by',
                    //     link: 'https://www.angrymonkeyagency.com/',
                    //     logo: 'https://www.angrymonkeyagency.com/favicon.ico'
                    // },
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