    var spotifyApi = "https://api.spotify.com/v1/albums/?ids=73yzCXeZAtNFC7YoIroAPD,5amj9zNeZ3B2EdpBgXrOZ0,6YYhMNDgi37WNGtCDis6PT,1TVt7uWfV3vLiU8bEmBEWL,4PgleR09JVnm3zY1fW3XBA,3kndSWeE2IYOrZEToZrHEV,59eUYETmE1zi31ESb3SUkI,62MetN2sHDnc8vVth9iInk,4Yww2EYetseL1eL2YuvLna,5Qex4ioxOJfHrnsWbt8Zlj,77jAfTh3KH9K2reMOmTgOh,6ktKxznxtvaTxZB8hna21f";

    var getAlbumInfo = function (albumData) {
        console.log(albumData);
        var albumHTML = '<ul>';
        $.each(albumData.albums, function (i, eachAlbum) {
            albumHTML += '<li class="albums"><a href="#">';
            albumHTML += '<img src="'+ eachAlbum.images[0].url + '"  alt="' + eachAlbum.name +  ' <br>by<br>  '  + eachAlbum.artists[0].name + '"></a></li>';
        }); //end loop
        albumHTML += '</ul>';
        $('#gallery').html(albumHTML);


   $('img').click(function() {
      var boxHTML = '<div class="lightbox">';
      boxHTML += '<img src="' + $(this).attr("src") + '" class="lightBoxImg">';
      boxHTML += '<p class = lightBoxText>' + $(this).attr("alt") + '</p>';
      boxHTML += '<p id="closeLightbox">X</p>';
      boxHTML += '</div>';

      $('#gallery').append(boxHTML);

      $('#closeLightbox').click(function() {
        $('.lightbox').remove();
      });

    });
     
};
    
    $.getJSON(spotifyApi, getAlbumInfo);