var quotes = [];
var timespressed = 0;


$(document).ready(function() {

      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function(data) {

    data.forEach(function(val) {
      quotes.push(val);
    })
  $("#text").html(quotes[timespressed].content);
  $("#author").html(quotes[timespressed].title);
  });
 
});
  
$("#getMessage").on('click', function(){
  $("#text").html(quotes[timespressed].content);
  $("#author").html(quotes[timespressed].title);
  timespressed++;
});
  
