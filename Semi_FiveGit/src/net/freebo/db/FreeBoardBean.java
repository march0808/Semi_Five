package net.freebo.db;

public class FreeBoardBean {
	private int		free_board_idx;		//글번호
	private String	mem_nickname;		//글 작성자
	private String	free_board_title;		
	private String	free_board_content;	
	private int		free_hit;		
	private String	free_reg_dt;	
	private String	free_mod_dt;	
	private int		free_rcmnd_count;	
	private String	free_board_file;
	private String	free_board_original;
	private int		free_board_type;
	
	public int getFree_board_idx() {
		return free_board_idx;
	}
	public void setFree_board_idx(int free_board_idx) {
		this.free_board_idx = free_board_idx;
	}
	public String getMem_nickname() {
		return mem_nickname;
	}
	public void setMem_nickname(String mem_nickname) {
		this.mem_nickname = mem_nickname;
	}
	public String getFree_board_title() {
		return free_board_title;
	}
	public void setFree_board_title(String free_board_title) {
		this.free_board_title = free_board_title;
	}
	public String getFree_board_content() {
		return free_board_content;
	}
	public void setFree_board_content(String free_board_content) {
		this.free_board_content = free_board_content;
	}
	public int getFree_hit() {
		return free_hit;
	}
	public void setFree_hit(int free_hit) {
		this.free_hit = free_hit;
	}
	public String getFree_reg_dt() {
		return free_reg_dt;
	}
	public void setFree_reg_dt(String free_reg_dt) {
		this.free_reg_dt = free_reg_dt.substring(0,10);
	}
	public String getFree_mod_dt() {
		return free_mod_dt;
	}
	public void setFree_mod_dt(String free_mod_dt) {
		this.free_mod_dt = free_mod_dt;
	}
	public int getFree_rcmnd_count() {
		return free_rcmnd_count;
	}
	public void setFree_rcmnd_count(int free_rcmnd_count) {
		this.free_rcmnd_count = free_rcmnd_count;
	}
	public String getFree_board_file() {
		return free_board_file;
	}
	public void setFree_board_file(String free_board_file) {
		this.free_board_file = free_board_file;
	}
	public String getFree_board_original() {
		return free_board_original;
	}
	public void setFree_board_original(String free_board_original) {
		this.free_board_original = free_board_original;
	}
	public int getFree_board_type() {
		return free_board_type;
	}
	public void setFree_board_type(int free_board_type) {
		this.free_board_type = free_board_type;
	}
	
	
	
	
	
}
