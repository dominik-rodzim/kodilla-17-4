var OSinfo = require('../modules/osinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting application! \n');
                process.exit();
                break;
            case '/getInfo':
                process.stdout.write(process.env.LANG + '\n' + process.versions.node);
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction\n');
                break;
        }
    }
})