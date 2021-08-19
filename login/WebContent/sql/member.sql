

DROP TABLE MEMBER_INFO;

create table MEMBER_INFO(
mem_id varchar2(20),
mem_password varchar2(60) NOT NULL,
mem_name varchar2(21) NOT NULL UNIQUE,
mem_nickname varchar2(20) UNIQUE,
mem_gender varchar2(5) NOT NULL,
CHECK(mem_gender IN('F','M')),
mem_tel number(17) NOT NULL UNIQUE,
mem_email varchar2(200),
mem_birth number(2),
mem_address varchar2(500),
mem_type number(1) NOT NULL,
CHECK(mem_type IN('1','2')),
mem_expt char(1) NOT NULL,
CHECK(mem_expt IN('Y','N')),
PRIMARY KEY(mem_id)
);

CREATE TABLE FREE_BOARD(
	FREE_BOARD_IDX      NUMBER(10),   			
	MEM_NICKNAME    	VARCHAR2(20)   	references MEMBER_INFO(MEM_NICKNAME) on delete cascade, 
	FREE_BOARD_TITLE   	VARCHAR2(300) NOT NULL,  	
	FREE_BOARD_CONTENT  VARCHAR2(4000), 	
	FREE_HIT			NUMBER(10), 		
	FREE_REG_DT    DATE default sysdate, 	
	FREE_MOD_DT    DATE default sysdate,
	FREE_RCMND_COUNT   	NUMBER(10),			
	FREE_BOARD_FILE 	VARCHAR2(100), 		
	FREE_BOARD_ORIGINAL VARCHAR2(100),		
	FREE_BOARD_TYPE 	NUMBER(1) NOT NULL,			
	PRIMARY KEY(FREE_BOARD_IDX)
);



alter table member
add(memberfile VARCHAR2(50));


select*from MEMBER_INFO;
create table member_copy
as
selsect*from memeber;