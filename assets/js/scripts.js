
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 6000, fade: 1500});

    /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = "2014/02/20";
    $('.timer').countdown(countTo, function(event) {
        var $this = $(this);
        switch(event.type) {
            case 'seconds':
            case 'minutes':
            case 'hours':
            case 'days':
            case 'weeks':
            case 'daysLeft':
                $this.find('span.'+event.type).html(event.value);
                break;
            case 'finished':
                $this.hide();
                break;
        }
    });

    /*
        Tooltips
    */
    $('.social a.facebook').tooltip();
    $('.social a.twitter').tooltip();
    $('.social a.dribbble').tooltip();
    $('.social a.googleplus').tooltip();
    $('.social a.pinterest').tooltip();
    $('.social a.flickr').tooltip();

    
});

