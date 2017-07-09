$(document).mouseup(function (e) {
    var container = $("#profile-menu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});