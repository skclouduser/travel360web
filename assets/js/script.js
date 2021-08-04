angular.module('travel360', ['ngSanitize'])
  .controller('categoryController',function($scope,$rootScope) {
    $scope.greeting = 'Hola!';
    let categoryList = [
        {
            "title":"AI TRAVEL PLANNER aka TIFI Bot",
            "desc":"TIFI bot enables customers to customize their trips by copying, editing, sharing and downloading",
            "detailedDesc":`<div class="text-left">
            <p>TIFI bot enables customers to customize their trips by copying, editing, sharing and downloading
              their travel planner anytime &amp; anywhere. </p>
            <p>Get your attractions on top of the planner list by providing the best offers, uploading enticing
              photos and improving your ratings! Let our TIFI Keepers guide you.</p>
          </div>`,
            "desc_img":"assets/images/ai-travel-planner.png",
            "id":1
        },
        {
            "title":"VENDOR MANAGEMENT SYSTEM aka TIFI Playgound",
            "desc":"The first vital step in the digitalization journey is onboarding onto TIFI Playground, our one-stop solution portal that assists B2B clients to take their businesses up a notch.",
            "detailedDesc":`<div class="text-left">
            <p>The first vital step in the digitalization journey is onboarding onto TIFI Playground, our one-stop
              solution portal that assists B2B clients to take their businesses up a notch. </p>
            <p>TIFI Playground is a FREE to use, user-friendly and straightforward portal.</p>
            <ul>
              <li>Customize your tours and packages. </li>
              <li>Manage last minute promotions &amp; bookings with ease. </li>
              <li>Download orders &amp; financial reports </li>
              <li>Scan &amp; Redeem tickets on our Partner Mobile App aka TIFI Playground App</li>
            </ul>
          </div>`,
            "desc_img":"assets/images/vendor-management.png",
            "id":2
        },
        {
            "title":"POWERFUL BOOKING ENGINE",
            "desc":"Enable instant bookings and confirmations when you register with TIFI Playground.",
            "detailedDesc":`<div class="text-left">
            <p>Enable instant bookings and confirmations when you register with TIFI Playground.</p>
            <ul>
              <li>Integrated payment gateway, supporting credit/debit card, FPX and E-Wallet transactions.</li>
              <li>Real time email notifications for booking confirmations</li>
              <li>E-ticket generation and redemption with QR Codes</li>
            </ul>
      </div>`,
            "desc_img":"assets/images/powerful-management.png",
            "id":3
        },
        {
            "title":"DATE IS OUR GOLD MINE",
            "desc":"Maximize data in the lifestyle, travel and hospitality space",
            "detailedDesc":`<div class="text-left">
            <p>Maximize data in the lifestyle, travel and hospitality space: </p>
            <p>Receive insights on PMS (profile, demographics, past bookings, reservation), market data, traveler
              in-flux data, travelers’ information, sales data, website traffic, geolocation, location intelligence
              and more.</p>
          </div>`,
            "desc_img":"assets/images/data-gold.png",
            "id":4
        }
    ];
    $scope.categoryList = categoryList;
    $scope.updatePopup = function(id){
        $rootScope.currentModal = $scope.categoryList.filter((cat)=>cat.id==id)[0];
        $("#trModalPopup").modal("show");
    }
  }).controller('modalpopupcontroller',function($scope,$rootScope){
        
        $rootScope.$watch('currentModal', function(newValue, oldValue) {
            $scope.currentModal = newValue;
        });
  }).controller('featureController',function($scope,$rootScope) {
    
    let featureList = [
        {
            "title":"DYNAMIC MARKETING CAPABILITIES",
            "desc":"Deliver the ultimate omnichannel experience: Strategy, Development, Web",
            "detailedDesc":`<div class="text-left">
            <p>Deliver the ultimate omnichannel experience: Strategy, Development, Web Optimization, Branding &amp;
              Design, Digital Marketing, social media, PPC Campaigns, KOLs &amp; Celebrity solutions &amp; offline marketing
              solutions. Connect with our TIFI Creators.</p>
            <p>Receive better ROAS with our insights on campaign result metrics, digital footprint, audience
              sentiment &amp; intent behavior, social media platform engagement, experiential targeting &amp; audience
              segmentation.</p>
          </div>`,
            "desc_img":"assets/images/dynamic.png",
            "id":1
        },
        {
            "title":"WE CAN PAY YOU WITH A CLICK",
            "desc":"The first vital step in the digitalization journey is onboarding onto TIFI Playground, our one-stop solution portal that assists B2B clients to take their businesses up a notch.",
            "detailedDesc":`<div class="text-left"><ul>
              <li>Earn and sell more on our TIFI Platform </li>
              <li>Secure payment </li>
              <li>Payment available to local and international accounts</li>
            </ul>
            <p></p>
          </div>`,
            "desc_img":"assets/images/pay-you.png",
            "id":2
        },
        {
            "title":"PERSONALIZED SUPPORT",
            "desc":"Enable instant bookings and confirmations when you register with TIFI Playground.",
            "detailedDesc":`Solve your business, customer and marketing problems with our dedicated account managers. Meet our TIFI Keepers.`,
            "desc_img":"assets/images/personalized-support.png",
            "id":3
        }
    ];
    $scope.featureList = featureList;
    $scope.updatePopup = function(id){
        $rootScope.currentModal = $scope.featureList.filter((feature)=>feature.id==id)[0];
        $("#trModalPopup").modal("show");
    }
  }).controller('partnerController',function($scope,$rootScope){
    let partnerList = [
        {
            "title":"Partner1",
            "logo_url":"assets/images/partner1.png",
            "id":1
        },
        {
            "title":"Partner2",
            "logo_url":"assets/images/partner2.png",
            "id":2
        },
        {
            "title":"Partner3",
            "logo_url":"assets/images/partner3.png",
            "id":3
        },
        {
            "title":"Partner4",
            "logo_url":"assets/images/partner4.png",
            "id":4
            
        },
        {
            "title":"Partner5",
            "logo_url":"assets/images/partner5.png",
            "id":5
        },
        {
            "title":"Partner6",
            "logo_url":"assets/images/partner6.png",
            "id":6
            
        },
        {
            "title":"Partner7",
            "logo_url":"assets/images/partner7.png",
            "id":7
            
        },
        {
            "title":"Partner8",
            "logo_url":"assets/images/partner8.png",
            "id":8
            
        },
        {
            "title":"Partner9",
            "logo_url":"assets/images/partner9.png",
            "id":9
        },
        {
            "title":"Partner10",
            "logo_url":"assets/images/partner10.png",
            "id":10
        },
        {
            "title":"Partner11",
            "logo_url":"assets/images/partner11.png",
            "id":11
        },
        {
            "title":"Partner11",
            "logo_url":"assets/images/partner12.png",
            "id":11
        }
    ];
    $scope.partnerList = partnerList;
  }).controller('awardController',function($scope,$rootScope){
    let awardList = [
        {
            "title":"Award 1",
            "logo_url":"assets/images/partner17.png",
            "id":1
        },
        {
            "title":"Award 2",
            "logo_url":"assets/images/partner16.png",
            "id":2
        }
    ];
    $scope.awardList = awardList;
  })