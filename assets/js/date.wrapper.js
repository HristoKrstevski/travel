var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

$(".campaign").prepend(function(){
    var dates = $(this).contents()[0].nodeValue.trim().match(/\d+/g);
    $(this).contents()[0].nodeValue = "";
    return '\
    <div class="date-wrapper">\
    <div class="date">'+dates[1]+'</div>\
    <div class="month">'+monthNames[+dates[0]-1]+'</div>\
    <div class="year">'+dates[2]+'</div></div> \
    </div>';
});