CREATE TABLE MEMBER_INFO(
MEM_ID VARCHAR2(20) PRIMARY KEY,	--ȸ�� ���̵�
MEM_PASSWORD VARCHAR2(60) NOT NULL,	--ȸ�� ��й�ȣ
MEM_NAME VARCHAR2(21) NOT NULL UNIQUE,		--ȸ�� �̸�
MEM_NICKNAME VARCHAR2(20) NOT NULL UNIQUE,	--ȸ�� �г���
MEM_GENDER VARCHAR2(5) NOT NULL,	--ȸ�� ����(F:���� M:����)
MEM_TEL NUMBER(17) NOT NULL UNIQUE,	--ȸ�� ����ó
MEM_EMAIL VARCHAR2(200),			--ȸ�� �̸���
MEM_BIRTH DATE,						--ȸ�� ����
MEM_ADDRESS VARCHAR2(500),			--ȸ�� �ּ�
MEM_TYPE NUMBER(1) NOT NULL,		--ȸ�� Ÿ��(1:������ 2:�Ǹ���)
MEM_EXPT CHAR(1) NOT NULL,			--������ ����(Y:������ N:��������)
CHECK(MEM_GENDER IN('F','M')),
CHECK(MEM_TYPE IN('1','2')),
CHECK(MEM_EXPT IN('Y','N'))
);

drop table MEMBER_INFO;

CREATE TABLE FREE_BOARD(
	FREE_BOARD_IDX      NUMBER(10),   			--�۹�ȣ(�⺻Ű)
	MEM_NICKNAME    	VARCHAR2(20)   	references MEMBER_INFO(MEM_NICKNAME) on delete cascade, -- �г���
	FREE_BOARD_TITLE   	VARCHAR2(300) NOT NULL,  	--����
	FREE_BOARD_CONTENT  VARCHAR2(4000), 	--����
	FREE_HIT			NUMBER(10), 		--��ȸ��
	FREE_REG_DT    DATE default sysdate, 	--���� �ۼ� ��¥	
	FREE_MOD_DT    DATE default sysdate,	--���� ���� ��¥
	FREE_RCMND_COUNT   	NUMBER(10),			--��õ��
	FREE_BOARD_FILE 	VARCHAR2(100), 		--÷�ε� ���� ��(�ý��ۿ� ����Ǵ� ���ϸ�)	
	FREE_BOARD_ORIGINAL VARCHAR2(100),		--÷�ε� ���� ��(����  ���ϸ�)
	FREE_BOARD_TYPE 	NUMBER(1) NOT NULL,			--�Խ��� Ÿ��
	PRIMARY KEY(FREE_BOARD_IDX)
);

drop table FREE_BOARD;
delete from free_board where FREE_BOARD_IDX= 5;
select * from free_board;

