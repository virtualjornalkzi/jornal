/**
 * Created by papa on 18.07.2017.
 */

$.fn.showSlowly = function (time, callback) {
    var h = this.outerHeight();
    var o = this.css('opacity');
    this.height(0);
    this.css('opacity', '0');
    var delTime = time === undefined ? 500 : time;
    this.stop().animate({
            height: h + "px",
            opacity: o// прозрачность к нулю
        }, delTime, callback
    );
}

$.fn.removeDOMSlowly = function (time, callback) {
    var delTime = time === undefined ? 500 : time;
    this.stop().animate({
            height: "0px", // высоту к нулю
            opacity: 0, // прозрачность к нулю
        }, delTime, function() {
            $(this).remove(); // удаляем из DOM (если требуется, если же нет, то "закомментируйте" эту строку)
            callback();
        }
    );
}