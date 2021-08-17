<%@ page language="java" 
	contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
  <head>
	<title>templatetest.jsp</title>
<link href="css/style.css" type="text/css" rel="stylesheet">
  </head>

  <body>

	<nav>
		<jsp:include page="/mainpage/top.jsp"/><br><br>
	</nav>
	<div id="wrap">
		<aside>
			<jsp:include page="left.jsp"/>
		</aside>

	</div>

	
  </body>
</html>