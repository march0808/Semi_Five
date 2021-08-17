package net.member.action;

//ActionForward Ŭ������ Action �������̽����� ����� �����ϰ� ��� ����
//������ �̵� �Ҷ� ���Ǵ� Ŭ���� �Դϴ�.
//�� Ŭ������ Redirect ���� ���� �������� �������� ��ġ�� ������ �ֽ��ϴ�.
//�� ������ FrontController���� ActionForward Ŭ���� Ÿ������ ��ȯ����
//�������� �� ���� Ȯ���Ͽ� �ش��ϴ� ��û �������� �̵��մϴ�.
public class ActionForward{
	private boolean redirect=false;
	private String path=null;

	
	//property redirect�� is �޼ҵ�
	public boolean isRedirect() {
		//������Ƽ Ÿ���� boolean�� ��� get ��� is�� �տ� ���� �� �ֽ��ϴ�.
		return redirect;
	}
	//property redirect�� set�޼ҵ�
	public void setRedirect(boolean b) {
		this.redirect = b;
	}
	
	//property redirect�� get�޼ҵ�
	public String getPath() {
		return path;
	}

	//property redirect�� set�޼ҵ�
	public void setPath(String string) {
		path = string;
	}
	
}
