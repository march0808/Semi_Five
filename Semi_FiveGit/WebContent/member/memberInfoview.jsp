<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<head>
<title>회원관리 시스템 관리자모드(회원 정보 보기)</title>
<jsp:include page="/mainpage/top.jsp"/>
<style>
	tr>td:nth-child(odd){font-weight: bold}
	td{text-align:center}
	.container{widtd:50%}
</style>
</head>
<body>
	<div class="container">
   <table class="table table-bordered">
    <tbody>
      <tr>
        <td>아이디</td><td>${memberinfoview.id}</td>
      </tr>
      <tr>
        <td>비밀번호</td><td>${memberinfoview.password}</td>
      </tr>
     <tr>
        <td>이름</td><td>${memberinfoview.name}</td>
      </tr>
      <tr>
        <td>나이</td><td>${memberinfoview.age}</td>
      </tr>
      <tr>
        <td>성별</td><td>${memberinfoview.gender}</td>
      </tr>
      <tr>
        <td>이메일 주소</td><td>${memberinfoview.email}</td>
      </tr>
      <tr>
       <td colspan="2"><a href="memberList.net">리스트로 돌아가기</a></td>
      </tr>
    </tbody>
  </table>
</div>
</body>
</html>
