function getNotoficationDiv(status, text) {
    var info =
        "<div class='notification " + status + "'>" +

            "<div class='close-notification'>×</div>" +
            "<div class='content-notification'>" + text + "</div>" +
        "</div>";
    return info;
}


var info = "<div class='notification info'>";

function notificationInfo(text) {
    var element = getNotoficationDiv('info', text);
    $('#notifications').append(element);
}
function notificationWarning(text) {
    var element = getNotoficationDiv('warning', text);
    $('#notifications').append(element);
}
function notificationError(text) {
    var element = getNotoficationDiv('error', text);
    $('#notifications').append(element);
}