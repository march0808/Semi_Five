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
	<script src="js/writeform.js"></script>
	<style>
h1 {
	font-size: 1.5rem;
	text-align: center;
	color: #1a92b9
}

.container {
	width: 60%
}

label {
	font-weight: bold
}

#upfile {
	display: none
}

img {
	width: 20px;
}
</style>
	<meta charset="UTF-8">
	<title>Insert title here</title></head>
<body>
	<div class="container">
		<form action="htBoardAddAction.htbo" method="post"
			enctype="multipart/form-data" name="boardform">
			<h1>건강 QnA 게시판-write 페이지</h1>
			<div class="form-group">
				<label for="mem_nickname">글쓴이</label> <input name="ht_nickname"
					id="mem_nickname" 
					value="admin" 
					readOnly type="text"
					class="form-control" placeholder="Enter mem_nickname">
			</div>

            <div class="form-group">
				<label for="ht_board_pass">비밀번호</label> <input name="ht_board_pass"
					id="ht_board_pass" type="password" maxlength="20"
					class="form-control" placeholder="Enter ht_board_pass">
			</div>
			
			<div class="form-group">
				<label for="ht_board_title">제목</label> <input name="ht_board_title"
					id="ht_board_title" type="text" maxlength="1000" class="form-control"
					placeholder="Enter ht_board_title">
			</div>

			<div class="form-group">
				<label for="ht_board_content">내용</label>
				<textarea name="ht_board_content" id="ht_board_content" rows="10"
					class="form-control"></textarea>
			</div>

			<div class="form-group">
				<label for="ht_board_file">파일 첨부</label> <label for="upfile"> <img
					src="image/attach.png" alt="파일첨부">
				</label> <input type="file" id="upfile" name="ht_board_file"> <span
					id="filevalue"></span>
			</div>

			<div class="form-group">
				<button type=submit class="btn btn-primary">등록</button>
				<button type=reset class="btn btn-danger">취소</button>
			</div>
		</form>
	</div>
</body>
</html>