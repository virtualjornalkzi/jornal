/**
 * Created by papa on 19.07.2017.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTimeString() {
    var time = new Date();
    return time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString() + time.getMilliseconds().toString();
}
