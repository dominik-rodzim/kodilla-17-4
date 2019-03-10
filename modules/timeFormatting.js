function formatTime( seconds ) {
    var h, m, s;
    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);
    return {
        hour: h,
        minute: m,
        second: s
    };
}

exports.timeFormatting = formatTime;