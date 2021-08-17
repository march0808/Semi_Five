<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<title>회원관리 시스템 회원 정보 수정 페이지</title>
<link href="css/join.css" type="text/css" rel="stylesheet">
<style>
h3{
		text-aligh: center; color: #1a92b9;
	}
input[type=file]{
	display:none;
}
</style>
</head>
<body>
<jsp:include page="/mainpage/top.jsp"/>
	<form name="joinform" action="updateProcess.net" method="post"
		  enctype="multipart/form-data">
		<h3>회원 정보 수정</h3>
		<hr>
		<b>아이디</b> 
		<input type="text" name="id" value="${memberinfo.id}" readOnly> 
		
	    <b>비밀번호</b>
	    <input type="password" name="password" value="${memberinfo.password}" readOnly>
			
		<b>이름</b>
		<input type="text" name="name" value="${memberinfo.name}" placeholder="Enter name"
			maxLength="5" required> 
		
		<b>나이</b>
		<input type="text" name="age"	value="${memberinfo.age}" maxLength="2" 
				placeholder="Enter age" required> 
		
		<b>성별</b>
		<div>
			<input type="radio" name="gender" value="남" ><span>남자</span>
			<input type="radio" name="gender" value="여"><span>여자</span>
		</div>
		
		<b>이메일 주소 </b>
		<input type="text" name="email"	value="${memberinfo.email}" 
					placeholder="Enter email" maxLength="30" required>
		<span id="email_message"></span>
		
		<b>프로필 사진</b>
		<label>
			<img src="image/attach.png" width="10px">
			<span id="filename">${memberinfo.memberfile}</span>
			<%-- memberinfo.memberfile의 값이 없으면 기본 사진을 보여줍니다.
				  값이 존재하면 memberupload 폴더에 존재하는 파일명으로 경로를 설정합니다. --%>
			<span id="showImage">
				<c:if test='${empty memberinfo.memberfile}'>
					<c:set var='src' value='image/profile.png'/>
				</c:if>
				<c:if test='${!empty memberinfo.memberfile}'>
					<c:set var='src' value='${"memberupload/"}${memberinfo.memberfile}'/>
				</c:if>
				<%-- 위에서 memberinfo.memberfile의 값이 있는 경우와 없는 경우에 따라 src 속성값이 달라집니다. --%>
				<img src="${src}" width="20px" alt="profile">
			</span>
				<%--accept: 업로드할 파일 타입을 설정합니다.
					<input type="file" accept="파일 확장자|audio/*|video/*|image/*|미디어 타입">
					파일 확장자는 .png, .jpg, .pdf, .hwp 처럼 (.)으로 시작되는 파일 확장자를 의미합니다.
					audio/* : 모든 타입의 오디오 파일
					image// : 모든 타입의 이미지 파일
					
				 --%>
				 <input type="file" name="memberfile" accept="image/*">
		</label>
		<div class="clearfix">
			<button type="submit" class="submitbtn">수정</button>
			<button type="reset" class="cancelbtn">취소</button>
		</div>
	</form>
<script>
	//성별 체크해주는 부분
	$("input[value='${memberinfo.gender}']").prop('checked',true);
	
	$(".cancelbtn").click(function(){
		history.back();
	});
	
	//처음 화면 로드시 보여줄 이메일은 이미 체크 완료된 것이므로 기본 checkemail=true입니다.
	var checkemail=true;
	$("input:eq(6)").on('keyup',
				function() {
				$("#email_message").empty();
				//[A-Za-z0-9_]와 동일한 것이  \w
				//+는 1회 이상 반복을 의미합니다. {1,}와 동일합니다.
				//\w+ 는 [A-Za-z0-9_]를 1개이상 사용하라는 의미입니다.
				var pattern = /^\w+@\w+[.]\w{3}$/;
				var email = $("input:eq(6)").val();
				if (!pattern.test(email)) {
					$("#email_message").css('color', 'red')
					                   .html("이메일형식이 맞지 않습니다.");
					checkemail=false;
				}else{
					$("#email_message").css('color', 'green')
					                   .html("이메일형식에 맞습니다.");
					checkemail=true;
				}
			});//email keyup 이벤트 처리 끝

		var check=0;
		$('form').submit(function() {
			if (!$.isNumeric($("input[name='age']").val())) {
				alert("나이는 숫자를 입력하세요");
				$("input[name='age']").val('').focus();
				return false;
			}			
			
			if(!checkemail){
				alert("email 형식을 확인하세요");
				$("input:eq(6)").focus();
				return false;
			}
			
			if(check ==0){
				value = $('#filename').text();
				html = "<input type='text' value ='"+ value + "' name = ' check'>";
				$(this).append(html);
			}
			
			
		}); //submit
		$('input[type=file]').change(function(event){
			check++;
			var inputfile = $(this).val().split('\\');
			var filename=inputfile[inputfile.length -1];
			
			var pattern = /(gif|jpg|gpeg|png)$/i; //플래그 i는 대소문자 구분 없는 검색
			if(pattern.test(filename)){
				$('#filename').text(filename);//inputfile.length - 1=2
				
				var reader = new FileReader(); //파일을 읽기 위한 객체 생성
				//DataURL 형식으로 파일을 읽어옵니다.
				//읽어온 결과는 reader 객체의 result 속성에 저장됩니다.
				//event.target.files[0] : 선택한 그림의 파일객체에서 첫번째 객체를 가져옵니다.
				reader.readAsDataURL(event.target.files[0]);
				
				reader.onload = function(event){
					$('#showImage').html('<img width="20px" src ="'
										  + event.target.result + '">');
				};
			}else{
				alert('확장자는 gif, jpg, jpeg, png가 가능합니다.');
				check=0;
			}
		});

	
</script>
</body>
</html>
