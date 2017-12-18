function getQuotes() {

    var num = Math.round(new Date().getTime() / 1000);

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + num, function(a) {
        $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
    });

}
getQuotes();