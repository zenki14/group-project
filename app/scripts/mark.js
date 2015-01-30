//menu tab template
var picture1;
var templateMenu = $('#menu_list').html();
console.log(templateMenu);
var renderMenu = _.template(templateMenu);
console.log(renderMenu);
console.dir(renderMenu);

$.getJSON('http://private-anon-eafb492e3-restaurantapi.apiary-mock.com/menu').done( function (menu) {
       
       for(i = 0; i < menu.appetizers.length; i++){
        var menuA = menu.appetizers[i];
        $('.appetizers').append(renderMenu(menuA) );}

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

$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c4485de49ffd3b45571e73a5b93a069f&tags=bar+food&format=json&nojsoncallback=1&auth_token=72157650547459811-2213d8b6447510cf&api_sig=281dbd1785181705f436d9adcbbd721a').done( function (picture) {
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