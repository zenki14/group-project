

//menu tab template
var picture1;
var templateMenu = $('#food_list').html();
var renderMenu = _.template(templateMenu);
var templateBeer = $('#beer_list').html();
var renderBeer = _.template(templateBeer);
var templateGames = $('#games_list').html();
var renderGames = _.template(templateGames);
var allergyInfo;
var favoriteInfo;
var spicyInfo;
var veganInfo;
var specialInfo;
var latestInfo;
var bottleInfo, draughtInfo, onlineInfo, multiplayer;

//latest news
$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/gamer/news').done(function(news){
    latestInfo = news.title;
    
        var templateNews = $('#latest_news').html();
        var renderNews = _.template(templateNews);
        $('.left-bottom').append(renderNews(news) );
});

//special item
$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu/special').done(function(item){
    specialInfo = item.menu_item_id;
});

$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/gamer/menu').done( function (menu) {
       
       for(i = 0; i < menu.Beer.length; i++){
        var menuA = menu.Beer[i];
            if(menuA.allergies === 1){
                allergyInfo = "Please consult server";
            }else{allergyInfo = "No allergy alert"}

            if(menuA.favorite === 1){
                favoriteInfo = "Yes!";
            }else{favoriteInfo = "Not yet."}

            if(menuA.bottle === 1){
                bottleInfo = "Yes.";
            }else{bottleInfo = "No."}

            if(menuA.draught === 1){
                draughtInfo = "Yes.";
            }else{draughtInfo = "No."}
        $('.beer').append(renderBeer(menuA) );}

        for(i = 0; i < menu.entrees.length; i++){
        var menuA = menu.entrees[i];
            if(menuA.allergies === 1){
                allergyInfo = "Yes eat and die";
            }else{allergyInfo = "No allergy alert"}

            if(menuA.favorite === 1){
                favoriteInfo = "Yes!";
            }else{favoriteInfo = "Not yet."}

            if(menuA.spicy === 1){
                spicyInfo = "Yes!";
            }else{spicyInfo = "No."}

            if(menuA.vegan === 1){
                veganInfo = "Yes.";
            }else{veganInfo = "No."}
        $('.entrees').append(renderMenu(menuA) );

            //special of the day
            if(specialInfo === menuA.id){
                var templateSpecial = $('#daily_special').html();
                var renderSpecial = _.template(templateSpecial);
                $('.center-bottom').append(renderSpecial(menuA) );
            }}

        for(i = 0; i < menu.games.length; i++){
        var menuA = menu.games[i];

            if(menuA.favorite === 1){
                favoriteInfo = "Yes.";
            }else{favoriteInfo = "No."}

            if(menuA.online === 1){
                onlineInfo = "Yes!";
            }else{onlineInfo = "No."}

            if(menuA.multiplayer === 1){
                multiplayerInfo = "Yes.";
            }else{multiplayerInfo = "No."}
        $('.sides').append(renderGames(menuA) );}

});



//5 pictures on right side template
var picture1;
var templatePic = $('#first_pic').html();
var renderPic = _.template(templatePic);

$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b2402b20bab2aa634329d43c0736b550&tags=classic+video+games&format=json&nojsoncallback=1&auth_token=72157648279675773-0217ace586de6bbf&api_sig=1357fa29aa4db068defec7209b4082ee').done( function (picture) {
     for(i = 0; i < 5; i++){

     picture1 = picture.photos.photo[i];
      $('.side_pictures').append(renderPic(picture1) );}
});



$(document).ready(function() {
    $('.left-body .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.left-body ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});