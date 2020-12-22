const http = require( 'http' );

http.createServer(( req, res ) => {
  console.log( '서버 생성' );
  res.end( '<h1> hello</h1>' );
}).listen( 8080 );