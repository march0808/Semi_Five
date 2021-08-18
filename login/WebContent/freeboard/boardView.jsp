<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
<title>MVC 게시판 - view</title>
<jsp:include page="header.jsp" />
<script src="js/view.js"></script>
<link rel="stylesheet" href="css/view.css">
</head>
<body>
  <input type="hidden" id="Loginid" value="${id}" name="loginid">
  <div class="container">
 	<table class="table">
 		<tr><th colspan="2">MVC 게시판 - view페이지</th></tr>
 		<tr>
 			<td><div>글쓴이</div></td>
 			<td><div>${boarddata.mem_nickname}</div></td>
 		</tr>
 		<tr>
 			<td><div>제목</div></td>
 			<td><c:out value="${boarddata.free_board_title}" /></td>
 		</tr>
 		<tr>
 			<td><div>내용</div></td>
 			<td style="padding-right:0px"><textarea class="form-control" rows="5"
 				readOnly >${boarddata.free_board_content}</textarea></td>
 		</tr>
 		

 		<tr>
 			<td><div>첨부파일</div></td>
 		<c:if test="${!empty boarddata.free_board_file}"><%--파일 첨부한 경우 --%>
 		<td><img src="image/down.png" width="10px">
 			<a href="BoardFileDown.freebo?filename=${boarddata.free_board_file}">
 				${boarddata.free_board_file}</a></td>
 		</c:if>
 		<c:if test="${empty boarddata.free_board_file}"><%-- 파일첨부하지 않은 경우 --%>
 			<td></td>
 		</c:if>
 		</tr>

 		
 	<tr>
 		<td colspan="2" class="center">
 			<a href="BoardReplyView.freebo?num=${boarddata.free_board_idx}">
 				<button class="btn btn-primary">답변</button>
 			</a>
 			
 			
 			<a href="BoardModifyView.freebo?num=${boarddata.free_board_idx}">
 				<button class="btn btn-info">수정</button>
 			</a>
 			<%-- href의 주소를 #으로 설정합니다. --%>
 			<a href="#">
 				<button class="btn btn-danger" data-toggle="modal"
 						data-target="#myModal">삭제</button>
 			</a>
 			
 			
 			<a href="BoardList.freebo">
 				<button class="btn btn-secondary">목록</button>
 			</a>
 			</td>
 		</tr>
 	</table>
<%-- 게시판 view end --%>

		<%-- modal 시작 --%>
		<div class="modal" id="myModal">
		 <div class="modal-dialog">
		  <div class="modal-content">
		  	<%-- Modal body --%>
		  	<div class="modal-body">
		  	 <form name="deleteForm" action="BoardDeleteAction.freebo" method="post">
		  	 	<%--http://localhost:8088/Board/BoardDetailAction.freebo?num=22
		  	 		주소를 보면 num을 파라미터로 넘기고 있습니다.
		  	 		이 값을 가져와서 ${param.num}를 사용
		  	 		또는 ${boarddata.board_num}
		  	 	 --%>
		  	 	 <input type="hidden" name="num" value="${param.num}"
		  	 	 	  id="comment_board_num">
		  	 	 <div class="form-group">
		  	 	 	<label for="pwd">비밀번호</label>
		  	 	 	<input  type="password"
		  	 	 			class="form-control" placeholder="Enter password"
		  	 	 			name="board_pass" id="board_pass">
		  	 	 	</div>
		  	 	 	<button type="submit" class="btn btn-primary">전송</button>
		  	 	 	<button type="button" class="btn btn-danger" data-dismiss="modal">취소</button>
		  		 </form>
		  		</div><!-- class="modal-body" -->
		  </div><!-- class="modal-content" -->
		</div><!-- class="modal-dialog" -->
	</div><!-- class="modal" -->
	
	<div class="CommentBox">
		<div class="comment_option">
			<h3 class="comment_title">
				댓글<sup id="count"></sup>
			</h3>
			<div class="comment_tab">
				<ul class="comment_tab_list">
				</ul>
			</div>
		</div><!--  comment option end -->
		<ul class="comment_list">
		</ul>
		<div class="CommentWriter">
			<div class="comment_inbox">
				<b class="comment_inbox_name">${id}</b><span
				   class="comment_inbox_count">0/200</span>
				  <textarea placeholder="댓글을 남겨보세요" rows="1"
				  class="comment_inbox_text" maxLength="200"></textarea> 
				  
			</div>
			<div class="register_box">
				<div class="button btn_cancel">취소</div>
				<div class="button btn_register">등록</div>
			</div>
		</div><!-- CommentWriter end -->
	</div><!-- CommentBox end -->
  </div><!-- class="container" -->

</body>
</html>