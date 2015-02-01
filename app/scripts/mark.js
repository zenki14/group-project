

//menu tab template
var picture1;
var templateMenu = $('#menu_list').html();
var renderMenu = _.template(templateMenu);
var allergyInfo;
var favoriteInfo;
var spicyInfo;
var veganInfo;
var specialInfo;
var latestInfo;

//latest news
$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/news/latest').done(function(news){
    latestInfo = news.title;
    console.log(latestInfo);
});

//special item
$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu/special').done(function(item){
    specialInfo = item.menu_item_id;
    console.log(specialInfo);
});

$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu').done( function (menu) {
       
       for(i = 0; i < menu.appetizers.length; i++){
        var menuA = menu.appetizers[i];
            if(menuA.allergies === 1){
                allergyInfo = "Please consult server";
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
        $('.appetizers').append(renderMenu(menuA) );}

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
                console.log(templateSpecial);
                var renderSpecial = _.template(templateSpecial);
                $('.center-bottom').append(renderSpecial(menuA) );
            }}

        for(i = 0; i < menu.sides.length; i++){
        var menuA = menu.sides[i];
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
        $('.sides').append(renderMenu(menuA) );}

});



//5 pictures on right side template
var picture1;
var templatePic = $('#first_pic').html();
console.log(templatePic);
var renderPic = _.template(templatePic);

$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=82f2baa1b3e34727346da0edf2f4d73c&tags=ninja&format=json&nojsoncallback=1&auth_token=72157650579231652-934dc930cc79a031&api_sig=d79b778c67372eb53b30ac29aaa6333f').done( function (picture) {
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