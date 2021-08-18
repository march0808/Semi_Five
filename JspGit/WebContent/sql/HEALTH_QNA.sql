drop table HTBO  cascade constraints;

CREATE TABLE HTBO(
  HT_BOARD_IDX              NUMBER(10),           -- �Խ��� �� ��ȣ 
  HT_BOARD_TYPE             VARCHAR2(30),         -- �Խ��� Ÿ�� (�ǰ� QnA)
  HT_BOARD_DETAIL_TYPE      VARCHAR2(30),         -- �Խ��� ��Ÿ�� (�����, ������ ���) 
  HT_BOARD_TITLE            VARCHAR2(1000),       -- �Խ��� �� ���� 
  HT_BOARD_PASS             VARCHAR2(20),         -- �Խ��� �� ��й�ȣ   // �߰� ���� 
  HT_BOARD_CONTENT          VARCHAR2(4000),       -- �Խ��� �� ���� 
  HT_HIT             		NUMBER,               -- ���� ��ȸ�� 
  HT_BOARD_RCMND_COUNT 		NUMBER(10),			  -- ���� ��õ��
  HT_REG_DT 				DATE default sysdate, -- ���� �ۼ� ��¥ 
  HT_MOD_DT 				DATE default sysdate, -- ���� ���� ��¥     
  HT_BOARD_FILE             VARCHAR2(50),         -- ÷�ε� ���� ��  
  HT_RE_REF    		NUMBER,               -- �亯 �� �ۼ��� �����Ǵ� ���� ��ȣ   
  HT_RE_LEV    		NUMBER,               -- �亯 ���� ����   
  HT_RE_SEQ    		NUMBER,               -- �亯 ���� ����   
  HT_NICKNAME        VARCHAR2(30), 
  PRIMARY KEY(HT_BOARD_IDX)
);

select * from HTBO;

select HT_BOARD_IDX ,HT_BOARD_TITLE,HT_RE_REF,HT_RE_SEQ,HT_RE_LEV from HTBO;

create table HTBO_copy
as select * from HTBO;

delete from HTBO;