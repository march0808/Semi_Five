$(document).ready(function() {

	// submit 버튼 클릭할 때 이벤트 부분
	$("form").submit(function() {
	
		if($.trim($("#ht_board_pass").val()) == "") {
			alert("비밀번호를 입력하세요");
			$("#ht_board_pass").focus();
			return false;
		}
		
		if($.trim($("#ht_board_title").val()) == "") {
			alert("제목을 입력하세요");
			$("#ht_board_title").focus();
			return false;
		}
		
		if($.trim($("textarea").val()) == "") {
			alert("내용을 입력하세요");
			$("textarea").focus();
			return false;
		}
	}); //submit end
	
	
}); //ready() end 