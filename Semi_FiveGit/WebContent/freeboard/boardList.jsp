<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
 <jsp:include page="/mainpage/top.jsp" />  
 <link href="css/style.css" type="text/css" rel="stylesheet">
<style>
   select.form-control{
         width:auto;margin-bottom:2em;display:inline-block}
   .rows{text-align:right;}
   .gray{color:gray}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(1){width:8%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(2){width:42%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(3){width:13%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(4){width:15%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(5){width:11%}
   body > div > table > thead > tr:nth-child(2) > th:nth-child(6){width:11%}
 </style>
 <script src="js/list.js"></script>
 
 <title>MVC 게시판</title>
</head>
<body>
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
 <form action="BoardList2.freebo">
 	<span>게시판 선택</span>
 	<button id ="alltype" name="alltype" >전체</button>
 	
 	<input type="hidden" name="type" id="type" value="1">
 	
	<button id ="boardtype1" name="boardtype1" value="1" >자유</button>
  	<button id ="boardtype2" name="boardtype2" value="2" >정보공유</button>
  	<button id ="boardtype3" name="boardtype3" value="3" >유머</button>
  </form>

  <table class="table table-striped">
   <thead>
	<tr>
	   <th colspan="3">MVC 게시판 - list</th>
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
		<th><div>추천수</div></th>
	</tr>	
   </thead>
   <tbody>
	<c:set var="num" value="${listcount-(page-1)*limit}"/>	
	<c:forEach var="b" items="${boardlist}">	
	<tr>
	  <td><%--번호 --%>
		<c:out value="${num}"/><%-- num 출력 --%>		
		<c:set var="num" value="${num-1}"/>	<%-- num=num-1; 의미--%>	
	  </td>
	  <td><%--제목 --%>
	     <div>			
			
			<a href="BoardDetailAction.freebo?num=${b.free_board_idx}">
				 <c:out value="${b.free_board_title}" />  
				<%-- ${b.board_subject} --%>
				<%-- escapeXml="true" : HTML 태그를 화면에 그대로 보여줍니다. --%>	
			</a>
		  </div>
		</td>
		<td><div>${b.mem_nickname}</div></td>
		<td><div>${b.free_reg_dt}</div></td>	
		<td><div>${b.free_hit}</div></td>
		<td><div>${b.free_rcmnd_count}</div></td>
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
				   <a href="BoardList.bo?page=${page-1}" 
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
					   <a href="BoardList.bo?page=${a}" 
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
				<a href="BoardList.bo?page=${page+1}" 
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

<button type="button" id="write" class="btn btn-info float-right">글 쓰 기</button>
</div>
</body>
</html>