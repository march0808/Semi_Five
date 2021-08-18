function getList(state){
	    option=state;//현재 선택한 댓글 정렬방식을 저장합니다. 1=>등록순, 2=>최신순
	    
		$.ajax({
			type:"post",
			url:"CommentList.bo",
			data : {"comment_board_num" : $("#comment_board_num").val() , 
				    state:state},
			dataType:"json",
			success:function(rdata){
				//댓글의 총 갯수가 표시 됩니다.
				$('#count').text(rdata.listcount).css('font-family','arial,sans-serif')
				var red1='red';		var red2='red';
				if(option==1){  //등록순인 경우 등록순이 'red', 최신순이 'gray'로 글자색을 나타냅니다.
					red2='gray';
				}else if(option==2){ //최신순인 경우 등록순이 'gray', 최신순이 'red'로 글자색을 나타냅니다.
					red1='gray';
				}
				var output="";
				
			 if(rdata.boardlist.length>0){
				   output += '<li class="comment_tab_item ' +  red1 + '" >'
                          + '   <a href="javascript:getList(1)" class="comment_tab_button">등록순 </a>'
                          + '</li>'
                          + '<li class="comment_tab_item ' +  red2 + '" >'
                          + '   <a href="javascript:getList(2)" class="comment_tab_button">최신순</a>'
                          + '</li>';
                     $('.comment_tab_list').html(output);//댓글 수 등록순 최신순 출력
                     
				    output='';
					$(rdata.boardlist).each(function(){
						var lev = this.comment_re_lev;
						var comment_reply='';
						//레벨에 따라 왼쪽 여백줍니다.
						if(lev==1){
							comment_reply = ' CommentItem--reply lev1';//margin-left: 46px;
						}else if(lev==2){
							comment_reply = ' CommentItem--reply lev2';//margin-left: 92px;
						}
						
						//선택한 파일이 나타날지 기본 그림이 나타날지 결정합니다.
						var profile=this.memberfile;
						var src='image/profile.png';
						if(profile){
							src='memberupload/'+profile;
						}
						
						output += '<li id="' + this.num + '" class="CommentItem' + comment_reply + '">'
							   + '   <div class="comment_area">'
							   + '    <img  src="' + src +'" alt="프로필 사진" width="36" height="36">'
							   + '    <div class="comment_box">'
							   + '      <div class="comment_nick_box">'
							   + '            <div class="comment_nick_info">'
							   + '               <div class="comment_nickname">' + this.id  + '</div>'
							   + '            </div>' //comment_nick_info                  
							   + '       </div>'  // comment_nick_box
							   + '     </div>'   //comment_box
							   + '    <div class="comment_text_box">'
							   + '       <p class="comment_text_view">'
							   + '         <span class="text_comment">' + this.content + '</span>'
							   + '       </p>'
							   + '    </div>' //comment_text_box
							   + '    <div class="comment_info_box">'
							   + '      <span class="comment_info_date">' + this.reg_date + '</span>';
						if(lev<2){ //답글쓰기는 답글의 답글까지만 사용하도록 합니다.
						   	  output += '  <a href="javascript:replyform(' + this.num +',' 
						   	         + lev + ',' + this.comment_re_seq +',' 
						   	         + this.comment_re_ref +')"  class="comment_info_button">답글쓰기</a>'
						      }
						output += '   </div>' //comment_info_box;
							   
						//글쓴이가 로그인한 경우 나타나는 더보기입니다.
                        //수정과 삭제 기능이 있습니다.							
					    if($("#loginid").val()==this.id){  
						 output +=  '<div class="comment_tool">'
							   + '    <div title="더보기" class="comment_tool_button">'
							   + '       <div>&#46;&#46;&#46;</div>' 
							   + '    </div>'
							   + '    <div id="commentItem' +  this.num + '"  class="LayerMore">' //스타일에서 display:none; 설정함
							   + '     <ul class="layer_list">'							   
							   + '      <li class="layer_item">'
							   + '       <a href="javascript:updateForm(' + this.num + ')"'
							   + '          class="layer_button">수정</a>&nbsp;&nbsp;'
							   + '       <a href="javascript:del(' + this.num + ')"'
							   + '          class="layer_button">삭제</a></li></ul>'
							   + '     </div>'//LayerMore
							   + '   </div>'//comment_tool
					     }
							   
						output += '</div>'// comment_area
							   + '</li>'//li
					})//each
					 $('.comment_list').html(output);
			 }//if(rdata.boardlist.length>0)
			 else{ //댓글 1개가 있었는데 삭제하는 경우 갯수는 0이라  if문을 수행하지 않고 이곳으로 옵니다.
				   //이곳에서 아래의 두 영역을 없앱니다.
				 $('.comment_list').empty();  
				 $('.comment_tab_list').empty(); 
			 }
			}//success end
		});//ajax end
	}//function(getList) end



$(function() {
	option=1;
	getList(option); //처음 로드 될 때는 등록순 정렬
	
	$("form").submit(function() {
		if ($("#board_pass").val() == '') {
			alert("비밀번호를 입력하세요");
			$("#board_pass").focus();
			return false;
		}
		})// form
			
    $('.CommentBox').on('keyup','.comment_inbox_text', function() {
    	var length=$(this).val().length;
    	$(this).prev().text(length+'/200');
    	console.log(length);
    });// keyup','.comment_inbox_text', function() {
	
	//등록을 클릭하면 데이터베이스에 저장 -> 저장 성공 후에 리스트 불러옵니다.
	$('ul+ .CommentWriter .btn_register').click(function() {
		var content=$('.comment_inbox_text').val();
		if(!content){//내용없이 등록 클릭한 경우
			alert("댓글을 입력하세요");
			return;
		}
		
		$.ajax({
			url : 'CommentAdd.bo', //원문 등록
			data : {
				id : $("#loginid").val(),
				content : content,
				comment_board_num : $("#comment_board_num").val(),
				comment_re_lev : 0, //원문인 경우 comment_re_seq는 0,
				                    //comment_re_ref는 댓글 원문 글 번호 
				comment_re_seq: 0
			},
			type : 'post',
			success : function(rdata) {
				if (rdata == 1) {
					getList(option);
				}
			}
		})//ajax
		
		
		$('.comment_inbox_text').val('');//textarea 초기화
		$('.comment_inbox_count').text('');//입력한 글 카운트 초기
	})// $('.btn_register').click(function(){
	
	
})
