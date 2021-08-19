<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
	<title>MVC 게시판</title>
	<jsp:include page="header.jsp" />
	<script src="js/modifyform.js"></script>
	<style>
	.container{width:60%}
	h1{font-sie:1.5rem; text-align:center; color:#1a92b9}
	#upfile{display:none}
	</style>
</head>
<body>
	<%-- 게시판 수정 --%>
  <div class="container">
   <form action="BoardModifyAction.freebo" method="post" name="modifyform" 
   		 enctype="multipart/form-data">
   	 <input type="hidden" name="free_board_idx" value="${boarddata.free_board_idx}">
     <h1>MVC 게시판 - 수정</h1>
      <div class="form-group">
     	<label for="free_board_type">게시판 선택</label>
		<select name="free_board_type">      

                    <option value=1 >자유</option>

                    <option value=2 >정보공유</option>

                    <option value=3 >유머</option>

		</select>
     </div>
     <div class="form-group">
     	<label for="mem_nickname">글쓴이</label><input value="${boarddata.mem_nickname}" 
     	readOnly type="text"		class="form-control">
     </div>
     
     <div class="form-group">
       <label for="board_subject">제목</label>
       <textarea name="free_board_title" id="free_board_title" rows="1" 
     			class="form-control"	maxlength="100">${boarddata.free_board_title}</textarea>
     </div>	
     
     <div class="form-group">
       <label for="board_content">내용</label>
       <textarea name="free_board_content" id="free_board_content" 
     			rows="15" 	class="form-control">${boarddata.free_board_content}</textarea>
     </div>	
    
       <div class="form-group read">
         <label for="board_file">파일 첨부</label>
         <label for="upfile">
       	   <img src="image/attach.png" alt="파일첨부" width="20px">
         </label>
         <input type="file" id="upfile" name="free_board_file">
         <span id="filevalue">${boarddata.free_board_file}</span>
        <img src="image/remove.png" alt="파일삭제" width="10px" class="remove">
       </div>
       
     <div class="form-group">
     	<button type=submit class="btn btn-primary">수정</button>
     	<button type=reset  class="btn btn-danger"
     			onClick="history.go(-1)">취소</button>
     </div>
   </form>
  </div>
</body>
</html>