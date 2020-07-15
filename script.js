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
    $('.getgrab, .employeetracker').hide();
    $('.bookworm').show();
});
function myProject() {
    const project = $('#projectname').val()
    console.log(project);
    if (project === 'getgrab') {
        $('.bookworm, .employeetracker').hide();
        $('.getgrab').show();
    }
    if (project === 'employeetracker') {
        $('.getgrab, .bookworm').hide();
        $('.employeetracker').show();
    }
    if (project === 'bookworm') {
        $('.getgrab, .employeetracker').hide();
        $('.bookworm').show();
    }
};

$(document).ready(function(){
    $('select').formSelect();
  });

