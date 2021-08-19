<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <!DOCTYPE html>

<html>
  <head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/bootstrap.css">
<script src="js/jquery-3.6.0.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.js"></script>
  <style>
  * {
	box-sizing: border-box
}
h1{
margin: 20px 0px;
font-size:1.5em;
}
body {
	font-family: "Lato", sans-serif;
}
header {
	text-align: center
}
#top {
	text-align: right;
	padding-right: 1em;
	background-color: #ddd;
	height: 3em;
	line-height: 3em;
}
#top a {
	text-decoration: none;
	margin-left: 20px;
}
a:hover {
	font-weight: bold
}
  </style>
  </head>   
<header><h1><a href="MainPage.main">이웃동물 임시 메인페이지</a></h1></header>
<div id="top">


<% String id = (String)session.getAttribute("id");
	if(id != null && !id.equals("") ){
%>		
	<%=id %>님이 로그인 되었습니다.
	<a href="logout.jsp">(로그아웃)</a>
<%
	}else{
%>	
	<a href="login.net">로그인</a>&nbsp;&nbsp;&nbsp;
	<a href="join.net">회원가입</a>
<% 
	}
%>
</div>