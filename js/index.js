function getQuotes() {

    var num = Math.round(new Date().getTime() / 1000);

    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + num, function(a) {
        $(".quote").html("<i class= 'fa fa-quote-left'></i>" + a[0].content + "<i class= 'fa fa-quote-right '></i><p class='author'><b>- " + a[0].title + "</b></p>")
    });

}
getQuotes();