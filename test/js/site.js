var exports = {};
var agencyBusiness = new Business('Angry Monkey Agency');
agencyBusiness.websiteUrl = 'https://www.angrymonkeyagency.com/';
agencyBusiness.logoUrl = 'https://www.angrymonkeyagency.com/favicon.ico';
var wordpress = new Business('WordPress.com');
wordpress.websiteUrl = 'https://wordpress.com/';
wordpress.logoUrl = 'https://wpcom.files.wordpress.com/2017/11/cropped-wordpress.png?w=48';
cloudCredits({
    copyright: new CopyrightSection(new Business("Angry Monkey, LLC")),
    legendSelector: '.creditslegend',
    involvedBusinesses: [
        {
            business: agencyBusiness,
            involvement: "Designed and Developed",
            displayInSummary: true
        }
    ],
    tools: [
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
            logoUrl: 'https://getbootstrap.com/docs/4.3/assets/img/favicons/favicon-32x32.png'
        }
    ],
    hosting: {
        provider: wordpress,
        management: agencyBusiness
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRFLElBQUksY0FBYyxHQUFHLElBQUksUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsY0FBYyxDQUFDLFVBQVUsR0FBRyxvQ0FBb0MsQ0FBQztBQUNqRSxjQUFjLENBQUMsT0FBTyxHQUFHLCtDQUErQyxDQUFDO0FBRXpFLElBQUksU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUM7QUFDaEQsU0FBUyxDQUFDLE9BQU8sR0FBRyxzRUFBc0UsQ0FBQztBQUUzRixZQUFZLENBQUM7SUFDVCxTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xFLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsa0JBQWtCLEVBQUM7UUFDZjtZQUNJLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSTtTQUN6QjtLQUNKO0lBQ0QsS0FBSyxFQUFDO1FBQ0Y7WUFDSSxJQUFJLEVBQUUsZUFBZTtZQUNyQixTQUFTLEVBQUUsSUFBSSxRQUFRLENBQUMsb0JBQW9CLENBQUM7WUFDN0MsT0FBTyxFQUFFLDhDQUE4QztZQUN2RCxPQUFPLEVBQUUsMENBQTBDO1NBQ3REO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsRUFBRSxJQUFJLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztZQUNoRCxPQUFPLEVBQUUsZ0NBQWdDO1lBQ3pDLE9BQU8sRUFBRSxxQkFBcUI7U0FDakM7UUFDRDtZQUNJLElBQUksRUFBRSxXQUFXO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6QyxPQUFPLEVBQUUsMkJBQTJCO1lBQ3BDLE9BQU8sRUFBQyx5RUFBeUU7U0FDcEY7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFVBQVUsRUFBRSxjQUFjO0tBQzdCO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGNsb3VkQ3JlZGl0cyBmcm9tICcuLi9zcmMvanMvTWFpbic7XHJcbmltcG9ydCB7IEJ1c2luZXNzIH0gZnJvbSAnLi4vc3JjL2pzL2NsYXNzZXMvQnVzaW5lc3MnO1xyXG5pbXBvcnQgeyBDb3B5cmlnaHRTZWN0aW9uIH0gZnJvbSAnLi4vc3JjL2pzL2NsYXNzZXMvQ29weXJpZ2h0U2VjdGlvbic7XHJcblxyXG5sZXQgYWdlbmN5QnVzaW5lc3MgPSBuZXcgQnVzaW5lc3MoJ0FuZ3J5IE1vbmtleSBBZ2VuY3knKTtcclxuYWdlbmN5QnVzaW5lc3Mud2Vic2l0ZVVybCA9ICdodHRwczovL3d3dy5hbmdyeW1vbmtleWFnZW5jeS5jb20vJztcclxuYWdlbmN5QnVzaW5lc3MubG9nb1VybCA9ICdodHRwczovL3d3dy5hbmdyeW1vbmtleWFnZW5jeS5jb20vZmF2aWNvbi5pY28nO1xyXG5cclxubGV0IHdvcmRwcmVzcyA9IG5ldyBCdXNpbmVzcygnV29yZFByZXNzLmNvbScpO1xyXG53b3JkcHJlc3Mud2Vic2l0ZVVybCA9ICdodHRwczovL3dvcmRwcmVzcy5jb20vJztcclxud29yZHByZXNzLmxvZ29VcmwgPSAnaHR0cHM6Ly93cGNvbS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTcvMTEvY3JvcHBlZC13b3JkcHJlc3MucG5nP3c9NDgnO1xyXG5cclxuY2xvdWRDcmVkaXRzKHtcclxuICAgIGNvcHlyaWdodDogbmV3IENvcHlyaWdodFNlY3Rpb24obmV3IEJ1c2luZXNzKFwiQW5ncnkgTW9ua2V5LCBMTENcIikpLFxyXG4gICAgbGVnZW5kU2VsZWN0b3I6ICcuY3JlZGl0c2xlZ2VuZCcsXHJcbiAgICBpbnZvbHZlZEJ1c2luZXNzZXM6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnVzaW5lc3M6IGFnZW5jeUJ1c2luZXNzLFxyXG4gICAgICAgICAgICBpbnZvbHZlbWVudDogXCJEZXNpZ25lZCBhbmQgRGV2ZWxvcGVkXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlJblN1bW1hcnk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgdG9vbHM6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Nsb3VkIENyZWRpdHMnLFxyXG4gICAgICAgICAgICBkZXZlbG9wZXI6IG5ldyBCdXNpbmVzcygnQW5ncnkgTW9ua2V5IENsb3VkJyksXHJcbiAgICAgICAgICAgIGxvZ29Vcmw6ICdodHRwczovL3d3dy5hbmdyeW1vbmtleWNsb3VkLmNvbS9mYXZpY29uLmljbycsXHJcbiAgICAgICAgICAgIGxpbmtVcmw6ICdodHRwczovL3d3dy5hbmdyeW1vbmtleWNsb3VkLmNvbS9jcmVkaXRzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnalFVZXJ5JyxcclxuICAgICAgICAgICAgZGV2ZWxvcGVyOiBuZXcgQnVzaW5lc3MoJ1RoZSBqUXVlcnkgRm91bmRhdGlvbicpLFxyXG4gICAgICAgICAgICBsb2dvVXJsOiAnaHR0cHM6Ly9qcXVlcnkuY29tL2Zhdmljb24uaWNvJyxcclxuICAgICAgICAgICAgbGlua1VybDogJ2h0dHBzOi8vanF1ZXJ5LmNvbS8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCb290c3RyYXAnLFxyXG4gICAgICAgICAgICBkZXZlbG9wZXI6IG5ldyBCdXNpbmVzcygnQm9vdHN0cmFwIHRlYW0nKSxcclxuICAgICAgICAgICAgbGlua1VybDogJ2h0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxyXG4gICAgICAgICAgICBsb2dvVXJsOidodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjMvYXNzZXRzL2ltZy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZydcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgaG9zdGluZzogeyAgXHJcbiAgICAgICAgcHJvdmlkZXI6IHdvcmRwcmVzcyxcclxuICAgICAgICBtYW5hZ2VtZW50OiBhZ2VuY3lCdXNpbmVzc1xyXG4gICAgfVxyXG59KTsiXX0=

