<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>건강 QnA 게시판</title>
<link rel="stylesheet" href="css/bootstrap.css">
<script src="js/jquery-3.6.0.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/reply.js"></script>
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
</head>
<body>
	<div class="container">
		<form action="htBoardReplyAction.htbo" method="post"
			 name="boardform">
			<input type="hidden" name="ht_re_ref"
				value="${boarddata.ht_re_ref}"> <input type="hidden"
				name="ht_re_lev" value="${boarddata.ht_re_lev}"> 
				<input
				type="hidden" name="ht_re_seq" value="${boarddata.ht_re_seq}">
			<h1>MVC 게시판-reply</h1>
			<div class="form-group">
				<label for="ht_nickname">글쓴이</label> <input name="ht_nickname"
					id="ht_nickname" 
					value="admin" readOnly type="text" 
					class="form-control" readOnly>
			</div>

			<div class="form-group">
				<label for="ht_board_title">제목</label>
				<textarea name="ht_board_title" id="ht_board_title" rows="1"
					class="form-control" maxlength="100">Re:${boarddata.ht_board_title}</textarea>
			</div>

			<div class="form-group">
				<label for="ht_board_content">내용</label>
				<textarea name="ht_board_content" id="ht_board_content" rows="10"
					class="form-control"></textarea>
			</div>

			<div class="form-group">
				<label for="ht_board_pass">비밀번호</label> <input name="ht_board_pass"
					id="ht_board_pass" type="password" maxlength="30" class="form-control"
					placeholder="Enter ht_board_pass">
			</div>

			<div class="form-group">
				<button type=submit class="btn btn-primary">등록</button>
				<input type=reset class="btn btn-danger" value="취소"
				       onclick="history.go(-1)">
			</div>


		</form>
	</div>
</body>
</html>