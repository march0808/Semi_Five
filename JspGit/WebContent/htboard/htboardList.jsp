<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>  
 <jsp:include page="header.jsp"/>
 <jsp:include page="jisikin.jsp"/>
 <style>
select.form-control{
         width:auto;margin-bottom:2em;display:inline-block}
   .rows{text-align:right;}
   .gray{color:gray}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(1){width:8%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(2){width:50%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(3){width:14%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(4){width:17%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(5){width:11%}
 </style>
 <link rel="stylesheet" href="css/sidebar.css">
 <style>
 .navbar-expand-sm .navbar-nav {
		-ms-flex-direction: row;
		flex-direction: column;
	}
 </style>
 <script src="js/list.js"></script>
 
 <title>건강 QnA 게시판</title>
 
</head>
<body>

<div class="sidenav">


  <h3>이웃동물</h3>
 
 
  <c:if test="${empty id}">
	<script>
		location.href = "login.net";
	</script>
</c:if>

<nav class="navbar navbar-expand-sm right-block navbar-dark">
	<ul class="navbar-nav">
		<c:if test="${!empty id}">
			<li class="nav-item"><a class="nav-link" href="logout.net">
					${id} 님(로그아웃)           </a></li>
		  		
		  <hr>
			<li class="nav-item"><a class="nav-link" href="memberUpdate.net">
			        정보수정        </a></li>
			   
		       
		 <hr>
			<c:if test="${id=='admin'}">
				<!-- Dropdown -->
				<li class="nav-item dropdown"><a
					class="nav-link dropdown-toggle" href="#" id="navbardrop"
					data-toggle="dropdown"> 관리자      </a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="memberList.net">회원정보</a>
						<a class="dropdown-item" href="htBoardList.htbo">게시판</a>
					</div></li>
			</c:if>
		</c:if>
	</ul>
</nav>

  <p>커뮤니티</p>
  <a href="#health_QnA">건강 QnA</a>
  <a href="#enterinfo">식당,관광,산책,정보</a>
  <a href="#findanimal">실종동물</a>
  <a href="#freebo">자유게시판 </a>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <hr>
  <hr>
  <p>스토어</p>
  <a href="#reserve">숙박,여행,예약</a>
  <a href="#shopping">쇼핑</a>
</div>

<div class="main">


<div class="container">
  
<%-- 게시글이 있는 경우--%> 
<c:if test="${listcount > 0 }">
  <div class="rows">
   <span>줄보기</span>
   <select class="form-control" id="viewcount">
     <option value="1">1</option>
     <option value="3">3</option>
     <option value="5">5</option>
     <option value="7">7</option>
     <option value="10" selected>10</option>
   </select>
  </div>
  <table class="table table-striped">
   <thead>
	<tr>
	   <th colspan="3">건강 QnA 게시판 - list</th>
	   <th colspan="2">
			<font size=3>글 개수 : ${listcount}</font>
	   </th>
	</tr>
	<tr>
		<th><div>번호</div></th>
		<th><div>제목</div></th>
		<th><div>작성자</div></th>
		<th><div>날짜</div></th>
		<th><div>조회수</div></th>
	</tr>	
   </thead>
   <tbody>
	<c:set var="num" value="${listcount-(page-1)*limit}"/>	
	<c:forEach var="h" items="${htboardlist}">	
	<tr>
	  <td><%--번호 --%>
		<c:out value="${num}"/><%-- num 출력 --%>		
		<c:set var="num" value="${num-1}"/>	<%-- num=num-1; 의미--%>	
	  </td>
	  <td><%--제목 --%>
	     <div>			
			<%-- 답변글 제목앞에 여백 처리 부분 
			      ht_re_lev,  ht_board_idx, 
			      ht_board_title, ht_board_type, ht_board_detail_type, ht_reg_dt, 
			      ht_hit : property 이름 --%>
		    <c:if test="${h.ht_re_lev != 0}">  <!--  답글인 경우 -->
				<c:forEach var="a" begin="0" end="${h.ht_re_lev*2}" step="1">
				&nbsp; 	
				</c:forEach>		
				<img src='image/line.gif'>
			</c:if>  
			 
			<c:if test="${h.ht_re_lev == 0}">  <%-- 원문인 경우 --%>
				&nbsp;  
			</c:if> 			
			
			<a href="htBoardDetailAction.htbo?num=${h.ht_board_idx}">
				 <c:out value="${h.ht_board_title}" />  
				<%-- ${b.board_subject} --%>
				<%-- escapeXml="true" : HTML 태그를 화면에 그대로 보여줍니다. --%>	
			</a>
		  </div>
		</td>
		<td><div>${h.ht_nickname}</div></td>
		<td><div>${h.ht_reg_dt}</div></td>	
		<td><div>${h.ht_hit}</div></td>
	   </tr>
	  </c:forEach>
	 </tbody>	
	</table>
		
	<div class="center-block">
		  <ul class="pagination justify-content-center">		
			 <c:if test="${page <= 1 }">
				<li class="page-item">
				  <a class="page-link gray">이전&nbsp;</a>
				</li>
			 </c:if>
			 <c:if test="${page > 1 }">			
				<li class="page-item">
				   <a href="htBoardList.htbo?page=${page-1}" 
				      class="page-link">이전&nbsp;</a>
				</li> 
			 </c:if>
					
			<c:forEach var="a" begin="${startpage}" end="${endpage}">
				<c:if test="${a == page }">
					<li class="page-item " >
					   <a class="page-link gray">${a}</a>
					</li>
				</c:if>
				<c:if test="${a != page }">
				    <li class="page-item">
					   <a href="htBoardList.htbo?page=${a}" 
					      class="page-link">${a}</a>
				    </li>	
				</c:if>
			</c:forEach>
			
			<c:if test="${page >= maxpage }">
				<li class="page-item">
				   <a class="page-link gray">&nbsp;다음</a> 
				</li>
			</c:if>
			<c:if test="${page < maxpage }">
			  <li class="page-item">
				<a href="htBoardList.htbo?page=${page+1}" 
				   class="page-link">&nbsp;다음</a>
			  </li>	
			</c:if>
		 </ul>
		</div>
     </c:if><%-- <c:if test="${listcount > 0 }"> end --%>
	
<%-- 게시글이 없는 경우--%>
<c:if test="${listcount == 0 }">
	<font size=5>등록된 글이 없습니다.</font>
</c:if>

<button type="button" class="btn btn-info float-right">글 쓰 기</button>
</div>




</div>
</body>
</html>