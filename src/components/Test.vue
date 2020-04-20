①、学生表student
create table student(
id int unsigned primary key auto_increment,
name char(10) not null
);
insert into student (name) values('张三'),('李四');

②、课程表course
create table course(
id int unsigned primary key auto_increment,
name char(20) not null
);
insert into course (name) values('语文'),('数学');

③、学生课程表student_course
create table student_course(
sid int unsigned,
cid int unsigned,
score int unsigned not null,
foreign key (sid) references student(id),
foreign key (cid) references course(id),
primary key(sid, cid)
);
insert into student_course values(1,1,80),(1,2,90),(2,1,90),(2,2,70);

问题：
①、查询平均分不及格的学生，列出学生id和平均分。





②、找出总成绩第二的学生名字。

