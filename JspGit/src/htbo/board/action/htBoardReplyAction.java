package htbo.board.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import htbo.board.db.htBoardBean;
import htbo.board.db.htBoardDAO;
import htbo.board.action.Action;
import htbo.board.action.ActionForward;

public class htBoardReplyAction implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ActionForward forward = new ActionForward();
		htBoardDAO boarddao = new htBoardDAO();
		htBoardBean boarddata = new htBoardBean();
		int result=0;
		
		//�Ķ���ͷ� �Ѿ�� ������ boarddata ��ü�� �����մϴ�.
		//boarddata.setHt_board_detail_type(request.getParameter("ht_board_detail_type"));
		boarddata.setHt_nickname(request.getParameter("ht_nickname"));
        boarddata.setHt_board_pass(request.getParameter("ht_board_pass"));
        boarddata.setHt_board_title(request.getParameter("ht_board_title"));
        boarddata.setHt_board_content(request.getParameter("ht_board_content"));
        boarddata.setHt_re_ref(Integer.parseInt(request.getParameter("ht_re_ref")));
        boarddata.setHt_re_lev(Integer.parseInt(request.getParameter("ht_re_lev")));
        boarddata.setHt_re_seq(Integer.parseInt(request.getParameter("ht_re_seq")));
        
        //�亯�� DB�� �����ϱ� ���� boarddata ��ü�� �Ķ���ͷ� �����ϰ�
        //DAO�� �޼��� boardReply�� ȣ���մϴ�.
        result=boarddao.htboardReply(boarddata);
        		
		//�亯 ���忡 ������ ���
		if(result==0) {
			System.out.println("���� ���� ����");
		    forward = new ActionForward();
		    forward.setRedirect(false);
		    request.setAttribute("message", "���� ���� �����Դϴ�.");
		    forward.setPath("error/error.jsp");
		    return forward;
		}
		
	    //�亯 ������ ����� �� ���
		System.out.println("���� �Ϸ�");
		forward.setRedirect(true);
		//�亯 �� ������ Ȯ���ϱ� ���� �� ���� ���� �������� ��η� �����մϴ�.
		forward.setPath("htBoardDetailAction.htbo?num=" + result);

		return forward;
	}

}//class end 