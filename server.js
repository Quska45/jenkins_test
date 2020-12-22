const http = require( 'http' );

http.createServer(( req, res ) => {
  console.log( '서버 생성' );
  console.log( '된거냐 만거냐 ㅡㅡ' );
  console.log( '젠킨스 별거 없죠?' );
  res.write( '<h1>젠킨스 별거 없죠?</h1>' );
  res.end( '<h1> hello</h1>' );
}).listen( 8080 );