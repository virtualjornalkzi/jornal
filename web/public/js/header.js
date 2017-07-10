/**
 * Created by papa on 10.07.2017.
 */

function toggleUserProfile(e) {
    var container = $("#profile-menu");
    var button = $("#profile-button");

    if (button.is(e.target)){
        container.toggle();
    }
    else {
        if ((container.has(e.target).length === 0)){
            container.hide();
        }
    }
}



$(document).mouseup(function (e) {
    toggleUserProfile(e);
});