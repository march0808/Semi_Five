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
        <td>아이디</td><td>${memberinfo.mem_id}</td>
      </tr>
      <tr>
        <td>비밀번호</td><td>${memberinfo.mem_password}</td>
      </tr>
     <tr>
        <td>이름</td><td>${memberinfo.mem_name}</td>
      </tr>
       <tr>
        <td>닉네임</td><td>${memberinfo.mem_nickname}</td>
      </tr>
        <tr>
        <td>성별</td><td>${memberinfo.mem_gender}</td>
      </tr>
       <tr>
        <td>연락</td><td>${memberinfo.mem_tel}</td>
      </tr>
      <tr>
        <td>이메일 주소</td><td>${memberinfo.mem_email}</td>
      </tr>
      <tr>
        <td>나이</td><td>${memberinfo.mem_birth}</td>
      </tr>
       <tr>
        <td>주소</td><td>${memberinfo.mem_address}</td>
      </tr>
      <tr>
        <td>타입</td><td>${memberinfo.mem_type}</td>
      </tr>
      <tr>
        <td>전문가</td><td>${memberinfo.mem_expt}</td>
      </tr>
      <tr>
       <td colspan="2"><a href="memberList.net">리스트로 돌아가기</a></td>
      </tr>
    </tbody>
  </table>
</div>
</body>
</html>