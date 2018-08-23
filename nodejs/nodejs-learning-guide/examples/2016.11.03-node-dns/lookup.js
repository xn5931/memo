// dns.lookup(hostname[, options], callback)
var dns = require('dns');

var options = {
	all: true  // 默认是false,只返回一个地址
};
//family:地址协议族，必须为4或6的整数
//hints:设置getaddrinfo的标志，dns.ADDRCONFIG 或者 dns.V4MAPPED（ipv4映射成ipv6）
//all:false（默认），布尔值，如设置为true，则返回IP数组，否则返回单个IP地址
dns.lookup('www.qq.com', function(err, address, family){
	if(err) throw err;
	console.log('例子A: ' + address);
});

dns.lookup('www.qq.com', options, function (err, address){
	if(err) throw err;
	console.log( '例子B: ' + JSON.stringify(address) );
});

dns.lookup('id.chyingp.com', function(err, address, family){
	if(err) throw err;
	console.log('例子C: ' + address);
});
//获取dns地址
const servers = dns.getServers();
console.log("获取dns地址...",servers);