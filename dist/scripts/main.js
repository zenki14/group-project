




var picture1;
var templatePic = $('#first_pic').html();
console.log(templatePic);
var renderPic = _.template(templatePic);
console.log(renderPic);
console.dir(renderPic);

$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c4485de49ffd3b45571e73a5b93a069f&tags=bar+food&format=json&nojsoncallback=1&auth_token=72157650547459811-2213d8b6447510cf&api_sig=281dbd1785181705f436d9adcbbd721a').done( function (picture) {
       // $('.hero-unit').append( render(user) );
     //picture1 = picture.photo.urls.url[0]._content;
     for(i = 0; i < 5; i++){

     //console.log(picture);
     //console.log(picture.photos);
		 //console.log(picture.photos.photo);
     picture1 = picture.photos.photo[i];
      $('.first_pic').append(renderPic(picture1) );}
//        console.log(user);
});
