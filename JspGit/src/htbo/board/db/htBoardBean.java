package htbo.board.db;

public class htBoardBean {
  private int    ht_board_idx;              //게시판 글 번호
  private String ht_board_type;            //-- 게시판 타입 (건강 QnA)
  private String ht_board_detail_type;     // -- 게시판 상세타입 (고양이, 강아지 등등) 
  private String ht_board_pass;           //글 비밀번호
  private String ht_board_title;          //글 제목
  private String ht_board_content;        //글 내용
  private String ht_board_file;           //첨부될 파일의 이름
  private int    ht_re_ref;               //답변 글 작성시 참조되는 글의 번호
  private int    ht_re_lev;                //답변 글의 깊이 
  private int    ht_re_seq;                //답변 글의 순서 
  private int    ht_hit;                   //글의 조회수
  private int    ht_board_rcmnd_count;     //글의 추천수 
  private String ht_reg_dt;
  private String ht_mod_dt;
  private String ht_nickname;
  
public int getHt_board_idx() {
	return ht_board_idx;
}
public void setHt_board_idx(int ht_board_idx) {
	this.ht_board_idx = ht_board_idx;
}
public String getHt_board_type() {
	return ht_board_type;
}
public void setHt_board_type(String ht_board_type) {
	this.ht_board_type = ht_board_type;
}
public String getHt_board_pass() {
	return ht_board_pass;
}
public void setHt_board_pass(String ht_board_pass) {
	this.ht_board_pass = ht_board_pass;
}
public String getHt_board_title() {
	return ht_board_title;
}
public void setHt_board_title(String ht_board_title) {
	this.ht_board_title = ht_board_title;
}
public String getHt_board_content() {
	return ht_board_content;
}
public void setHt_board_content(String ht_board_content) {
	this.ht_board_content = ht_board_content;
}
public String getHt_board_file() {
	return ht_board_file;
}
public void setHt_board_file(String ht_board_file) {
	this.ht_board_file = ht_board_file;
}
public int getHt_re_ref() {
	return ht_re_ref;
}
public void setHt_re_ref(int ht_re_ref) {
	this.ht_re_ref = ht_re_ref;
}
public int getHt_re_lev() {
	return ht_re_lev;
}
public void setHt_re_lev(int ht_re_lev) {
	this.ht_re_lev = ht_re_lev;
}
public int getHt_re_seq() {
	return ht_re_seq;
}
public void setHt_re_seq(int ht_re_seq) {
	this.ht_re_seq = ht_re_seq;
}
public int getHt_hit() {
	return ht_hit;
}
public void setHt_hit(int ht_hit) {
	this.ht_hit = ht_hit;
}
public String getHt_reg_dt() {
	return ht_reg_dt;
}
public void setHt_reg_dt(String ht_reg_dt) {
	this.ht_reg_dt = ht_reg_dt;
}
public String getHt_board_detail_type() {
	return ht_board_detail_type;
}
public void setHt_board_detail_type(String ht_board_detail_type) {
	this.ht_board_detail_type = ht_board_detail_type;
}
public int getHt_board_rcmnd_count() {
	return ht_board_rcmnd_count;
}
public void setHt_board_rcmnd_count(int ht_board_rcmnd_count) {
	this.ht_board_rcmnd_count = ht_board_rcmnd_count;
}
public String getHt_mod_dt() {
	return ht_mod_dt;
}
public void setHt_mod_dt(String ht_mod_dt) {
	this.ht_mod_dt = ht_mod_dt;
}
public String getHt_nickname() {
	return ht_nickname;
}
public void setHt_nickname(String ht_nickname) {
	this.ht_nickname = ht_nickname;
}


  
  //이곳에서 오른쪽 마우스 버튼 클릭 후 -> Source
  // -> Generate Getters and Setters(alt + shift +s)
}
