var education = $(".education");
var mySelf = $(".mySelf");
var experience = $(".experience");
var skills = $(".skills");
var interests = $(".Interests")
var info = $(".info");

$(".me").on("click", function () {
    $(".education, .skills, .experience, .Interests").hide();
    mySelf.show();

});


$(".edu").on("click", function () {
    $(".mySelf, .skills, .experience, .Interests").hide();
    education.show();

});

$(".exp").on("click", function () {
    $(".mySelf, .skills, .education, .Interests").hide();
    experience.show();

});
$(".ski").on("click", function () {
    $(".mySelf, .education, .experience, .Interests").hide();
    skills.show();

});
$(".inter").on("click", function () {
    $(".mySelf, .skills, .experience, .education").hide();
    interests.show();

});


$(document).ready(function(){
    $('.bookworm, .employeetracker, .riskmanager, .booksearch, .burger').hide();
        $('.getgrab').show();
});
function myProject() {
    const project = $('#projectname').val()
    console.log(project);
    if (project === 'getgrab') {
        $('.bookworm, .employeetracker, .riskmanager, .booksearch, .burger').hide();
        $('.getgrab').show();
    }
    if (project === 'riskmanager') {
        $('.bookworm, .employeetracker, .booksearch, .burger, .getgrab').hide();
        $('.riskmanager').show();
    }
    if (project === 'bookworm') {
        $('.employeetracker, .riskmanager, .booksearch, .burger, .getgrab').hide();
        $('.bookworm').show();
    }
    if (project === 'burger') {
        $('.bookworm, .employeetracker, .riskmanager, .booksearch, .getgrab').hide();
        $('.burger').show();
    }
    if (project === 'employeetracker') {
        $('.bookworm, .riskmanager, .booksearch, .burger, .getgrab').hide();
        $('.employeetracker').show();
    }
    if (project === 'booksearch') {
        $('.bookworm, .employeetracker, .riskmanager, .burger, .getgrab').hide();
        $('.booksearch').show();
    }
};

$(document).ready(function(){
    $('select').formSelect();
  });

