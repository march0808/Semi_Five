CREATE TABLE MEMBER_INFO(
MEM_ID VARCHAR2(20) PRIMARY KEY,	--회원 아이디
MEM_PASSWORD VARCHAR2(60) NOT NULL,	--회원 비밀번호
MEM_NAME VARCHAR2(21) NOT NULL UNIQUE,		--회원 이름
MEM_NICKNAME VARCHAR2(20) NOT NULL UNIQUE,	--회원 닉네임
MEM_GENDER VARCHAR2(5) NOT NULL,	--회원 성별(F:여자 M:남자)
MEM_TEL NUMBER(17) NOT NULL UNIQUE,	--회원 연락처
MEM_EMAIL VARCHAR2(200),			--회원 이메일
MEM_BIRTH DATE,						--회원 생일
MEM_ADDRESS VARCHAR2(500),			--회원 주소
MEM_TYPE NUMBER(1) NOT NULL,		--회원 타입(1:구매자 2:판매자)
MEM_EXPT CHAR(1) NOT NULL,			--전문가 유무(Y:전문가 N:비전문가)
CHECK(MEM_GENDER IN('F','M')),
CHECK(MEM_TYPE IN('1','2')),
CHECK(MEM_EXPT IN('Y','N'))
);

drop table MEMBER_INFO;

CREATE TABLE FREE_BOARD(
	FREE_BOARD_IDX      NUMBER(10),   			--글번호(기본키)
	MEM_NICKNAME    	VARCHAR2(20)   	references MEMBER_INFO(MEM_NICKNAME) on delete cascade, -- 닉네임
	FREE_BOARD_TITLE   	VARCHAR2(300) NOT NULL,  	--제목
	FREE_BOARD_CONTENT  VARCHAR2(4000), 	--내용
	FREE_HIT			NUMBER(10), 		--조회수
	FREE_REG_DT    DATE default sysdate, 	--글의 작성 날짜	
	FREE_MOD_DT    DATE default sysdate,	--글의 수정 날짜
	FREE_RCMND_COUNT   	NUMBER(10),			--추천수
	FREE_BOARD_FILE 	VARCHAR2(100), 		--첨부될 파일 명(시스템에 저장되는 파일명)	
	FREE_BOARD_ORIGINAL VARCHAR2(100),		--첨부될 파일 명(원래  파일명)
	FREE_BOARD_TYPE 	NUMBER(1) NOT NULL,			--게시판 타입
	PRIMARY KEY(FREE_BOARD_IDX)
);

drop table FREE_BOARD;
delete from free_board where FREE_BOARD_IDX= 5;
select * from free_board;

