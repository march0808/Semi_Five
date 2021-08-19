<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<html>
<head>
	<jsp:include page="header.jsp" />
	<script src="js/writeform.js"></script>
	<style>
	h1{font-sie:1.5rem; text-align:center; color:#1a92b9}
	.container{width:60%}
	label{font-wight:bold}
	#upfile{display:none}
	img{width:20px}
	</style>
</head>
<body>
  <div class="container">
   <form action="BoardAddAction.freebo" method="post" enctype="multipart/form-data"
   		name="boardform">
     <h1>MVC 게시판 -write 페이지</h1>
     
      <div class="form-group">
     	<label for="free_board_type">게시판 선택</label>
		<select name="free_board_type">      

                    <option value=1 >자유</option>

                    <option value=2 >정보공유</option>

                    <option value=3 >유머</option>

		</select>
     </div>
     
     <div class="form-group">
     	<label for="mem_nickname">글쓴이</label>
     	<input name="mem_nickname" id="mem_nickname" value="${mem_id}" readOnly
     			type="text"		class="form-control"
     			placeholder="Enter mem_nickname">
     </div>

     <div class="form-group">
       <label for="Free_board_title">제목</label>
       <input name="Free_board_title" id="Free_board_title" type="text" maxlength="100"
     			class="form-control"	placeholder="Enter board_subject">
     </div>	
     <div class="form-group">
       <label for="Free_board_content">내용</label>
       <textarea name="Free_board_content" id="Free_board_content" 
     			rows="10" 	class="form-control"></textarea>
     </div>	
     <div class="form-group">
       <label for="board_file">파일 첨부</label>
       <label for="upfile">
       	  <img src="image/attach.png" alt="파일첨부">
       </label>
       <input type="file" id="upfile" name="board_file">
       <span id="filevalue"></span>
     </div>	
     <div class="form-group">
     	<button type=submit class="btn btn-primary">등록</button>
     	<button type=reset  class="btn btn-danger">취소</button>
     </div>
   </form>
  </div>
</body>
</html>