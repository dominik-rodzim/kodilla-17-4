var os = require('os');
var time = require('./timeFormatting');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var timeStructure = time.timeFormatting(uptime);
    var userInfo = os.userInfo();
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU: ', cpu);
    console.log('Uptime: ', timeStructure.hour, ':', timeStructure.minute, ':', timeStructure.second);
    console.log('Username: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;