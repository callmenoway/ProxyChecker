var fs = require('fs');
var request = require("request");
var proxies = fs.readFileSync('proxies.txt').toString().split("\n");
var data = fs.readFileSync('working_proxies.txt').toString();

const timeout = 10000

function SetWindowTitle(title){
  process.stdout.write(String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7));
}

process.on('uncaughtException', function (err) { console.error(err.stack);});

proxies.forEach(function(proxy){
    check_proxy(proxy)
});

const total_proxies = proxies.length
var not_working = 0;
var working = 0;

function check_proxy(proxy){
	var options = {
		url:'https://api.ipify.org',
		proxy: "http://" + proxy,
        timeout: timeout,
	};
	request(options, function(err, response, body) {
	    if(response && response.statusCode == 200)
	    {
            working += 1;
            SetWindowTitle(`Total proxies: ${total_proxies} Checked total: ${not_working + working} Working: ${working}`)
	    	data += options.proxy + "\n";
	    	fs.writeFileSync("working_proxies.txt", data);
            console.log('\x1b[32m', proxy);
	    }
        else
        {
            not_working += 1;
            SetWindowTitle(`Total proxies: ${total_proxies} Checked: ${not_working + working} Working: ${working}`)
            console.log('\x1b[31m', proxy);
        } 
    });
}
