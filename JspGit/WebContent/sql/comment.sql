drop table comm cascade constraints;
create table comm(
  num                 number          primary key,
  id                  varchar2(30)    references member(id),
  content             varchar2(200),
  reg_date            date,
  comment_board_num   number          references board(board_num) on delete cascade,
                                             -- comm ���̺��� �����ϴ� ���� �� ��ȣ 
  comment_re_lev      number(1)       check(comment_re_lev  in(0,1,2)), --�����̸� 0, ����̸� 1
  comment_re_seq      number,  --�����̸� 0
  comment_re_ref      number   --������ �ڽ� �۹�ȣ, ����̸� ���� �۹�ȣ 
  );
  -- �Խ��� ���� �����Ǹ� �����ϴ� ��۵� �����˴ϴ�. --
  
  drop sequence comm_seq;
  
  --�������� �����մϴ�.
  create sequence comm_seq;
  
  select * from comm;
  delete comm;
  
  --member�� �ִ� memberfile ���� ��ȸ�� ���ô�.
  
  select comm.*, member.memberfile
  from comm inner join member
  on comm.id=member.id
  where comment_board_num = 12
  order by comment_re_ref desc,
  comment_re_seq asc;