drop table HTBO  cascade constraints;

CREATE TABLE HTBO(
  HT_BOARD_IDX              NUMBER(10),           -- 게시판 글 번호 
  HT_BOARD_TYPE             VARCHAR2(30),         -- 게시판 타입 (건강 QnA)
  HT_BOARD_DETAIL_TYPE      VARCHAR2(30),         -- 게시판 상세타입 (고양이, 강아지 등등) 
  HT_BOARD_TITLE            VARCHAR2(1000),       -- 게시판 글 제목 
  HT_BOARD_PASS             VARCHAR2(20),         -- 게시판 글 비밀번호   // 추가 새로 
  HT_BOARD_CONTENT          VARCHAR2(4000),       -- 게시판 글 내용 
  HT_HIT             		NUMBER,               -- 글의 조회수 
  HT_BOARD_RCMND_COUNT 		NUMBER(10),			  -- 글의 추천수
  HT_REG_DT 				DATE default sysdate, -- 글의 작성 날짜 
  HT_MOD_DT 				DATE default sysdate, -- 글의 수정 날짜     
  HT_BOARD_FILE             VARCHAR2(50),         -- 첨부될 파일 명  
  HT_RE_REF    		NUMBER,               -- 답변 글 작성시 참조되는 글의 번호   
  HT_RE_LEV    		NUMBER,               -- 답변 글의 깊이   
  HT_RE_SEQ    		NUMBER,               -- 답변 글의 순서   
  HT_NICKNAME        VARCHAR2(30), 
  PRIMARY KEY(HT_BOARD_IDX)
);

select * from HTBO;

select HT_BOARD_IDX ,HT_BOARD_TITLE,HT_RE_REF,HT_RE_SEQ,HT_RE_LEV from HTBO;

create table HTBO_copy
as select * from HTBO;

delete from HTBO;