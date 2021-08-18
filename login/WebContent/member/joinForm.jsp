<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<head>
<title>회원관리 시스템 회원가입 페이지</title>
<link href="css/join.css" type="text/css" rel="stylesheet">
<script src="js/jquery-3.6.0.js"></script>
<script>
$(function(){
	var checkmem_id=false;
	var checkmem_email=false;
	$('form').submit(function(){
		if(!$.isNumberic($("input[name='age']").val())){
			alert("나이는 숫자를 입력하세요");
			$("input[name='age']").val('').focus();
			return false;
		}
		
		if(!checkmem_id){
			alert("사용가능한 id로 입력하세요.");
			$("input:eq(0)").val('').focus;
			return false;
		}
		
		if(!checkmem_email){
			alert("email 형식을 확인하세요");
			$("input:eq(6)").focus;
			return false;
		}
	});
	
	$("input:eq(6)").on('keyup',
			function(){
		$("#email_message").empty();
		
		var pattern=/^\w+@\w+[.]\w{3}$/;
		var mem_email=$("input:eq(6)").val();
		if(!pattern.test(email)){
			$("#email_message").css('color','red')
			.html("이메일형식이 맞지 않습니다.");
			
			checkmem_email=false;
		}else{
			$("#email_message").css('color','green')
			.html("이메일형식에 맞습니다");
			checkmem_email=true;
		}
	});
	
	$("input:eq(0)").on('keyup',
			function(){
		checkmem_id=true;
		$("#message").empty();
		
		var pattern=/^\w{5,12}$/;
		var mem_id=$("input:eq(0)").val();
		if(!pattern.test(mem_id)){
			$("#message").css('color','red')
			.html("영문자 숫자_로 가능합니다.")
			
			
			checkmem_id=false;
		}
	})
})	
		
</script>
</head>
<body>
	<form name="joinform" action="joinProcess.net" method="post">
		<h1>회원가입</h1>
		<hr>
		<b>아이디</b> 
		<input type="text" name="mem_id" placeholder="Enter id"	required maxLength="12"> 
		<span id="message"></span> 
	    
	    <b>비밀번호</b><input
			type="password" name="mem_password" placeholder="Enter password" required>
			
		<b>이름</b><input type="text" name="mem_name" placeholder="Enter name"
			maxLength="5" required> 
		<b>닉네임</b>
        <input type="text" name="mem_nickname" placeholder="Enter name" maxLength="20" required>	
			
		
	    <b>성별</b>
		<div>
			<input type="radio" name="mem_gender" value="M" checked><span>남자</span>
			<input type="radio" name="mem_gender" value="F"><span>여자</span>
		</div>
		
		<b>연락</b>
        <input type="text" name="mem_tel" placeholder="Enter tel" maxLength="17" required>
			
		<b>이메일 주소 </b>
		<input type="text" name="mem_email"	placeholder="Enter email" maxLength="30" required>
		<span id="email_message"></span>
		
		<b>나이</b><input type="text" name="mem_birth"	maxLength="2" placeholder="Enter age" required> 
		
		<b>주소</b>
<input type="text" name="mem_address" placeholder="Enter address" maxLength="200" required>
<b>타입</b>
<div>
<input type="radio" name="mem_type" value="1" checked><span>구매자</span>
<input type="radio" name="mem_type" value="2"><span>판매자</span>
</div>
<b>전문가</b>
<div>
<input type="radio" name="mem_expt" value="Y" checked><span>전문가</span>
<input type="radio" name="mem_expt" value="N"><span>비전문가</span>
</div>

		<div class="clearfix">
			<button type="submit" class="submitbtn">회원가입</button>
			<button type="reset" class="cancelbtn">다시작성</button>
		</div>
	</form>
</body>
</html>