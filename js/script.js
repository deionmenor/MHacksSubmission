$(window).load(function(){
  var timespan = countdown(new Date(), new Date(2015, 10, 27),  countdown.SECONDS);
console.log(timespan);

var clock = $('.your-clock').FlipClock(timespan.seconds, {
countdown:true,
clockFace: 'DailyCounter'
});

})
