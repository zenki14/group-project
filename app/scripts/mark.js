//menu tab template
var picture1;
var templateMenu = $('#menu_list').html();
var renderMenu = _.template(templateMenu);


$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu').done( function (menu) {
       
       for(i = 0; i < menu.appetizers.length; i++){
        var menuA = menu.appetizers[i];
        $('.appetizers').append(renderMenu(menuA) );
            if(menuA.appetizers === 1){
                $('.allergies:hover').append("Bill");
            }

        }

        for(i = 0; i < menu.entrees.length; i++){
        var menuA = menu.entrees[i];
        $('.entrees').append(renderMenu(menuA) );}

        for(i = 0; i < menu.sides.length; i++){
        var menuA = menu.sides[i];
        $('.sides').append(renderMenu(menuA) );}


});


//5 pictures on right side template
var picture1;
var templatePic = $('#first_pic').html();
console.log(templatePic);
var renderPic = _.template(templatePic);

$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=41caa63570b5b4467ca9d8717b786d4a&tags=meatloaf&format=json&nojsoncallback=1&auth_token=72157650161557620-79711515f049ec58&api_sig=0b4c603caaf912e311de446d5eb06ee3').done( function (picture) {
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