
let LoggerSocket = require( 'wloggersocket' );

/**/

loggerSocket = new LoggerSocket();
loggerSocket.outputTo( console );
console.log( `Listening "${loggerSocket.serverPath}" ...` );
