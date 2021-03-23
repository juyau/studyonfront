export default [
  {
    id: "2",
    pname: "计算机原理",
    parentid: "1",
    grade: "2",
    children: [
      {
        id: "3",
        pname: "计算机硬件",
        parentid: "2",
        grade: "3",
        children: [],
      },
      {
        id: "4",
        pname: "计算机软件",
        parentid: "2",
        grade: "3",
        children: [],
      },
    ],
  },
  {
    id: "4028e581617ce7b601617ce801790000",
    pname: "数据库编程",
    parentid: "1",
    grade: "2",
    children: [
      {
        id: "402885816347f814016348d68bad0000",
        pname: "数据库基础知识",
        parentid: "4028e581617ce7b601617ce801790000",
        grade: "3",
        children: [],
      },
      {
        id: "402885816347f814016348d6c5920001",
        pname: "SQL查询",
        parentid: "4028e581617ce7b601617ce801790000",
        grade: "3",
        children: [],
      },
      {
        id: "402885816347f814016348d7153c0002",
        pname: "SQL优化",
        parentid: "4028e581617ce7b601617ce801790000",
        grade: "3",
        children: [],
      },
    ],
  },
  {
    id: "5",
    pname: "计算机编程入门",
    parentid: "1",
    grade: "2",
    children: [
      {
        id: "6",
        pname: "java语法介绍",
        parentid: "5",
        grade: "3",
        children: [],
      },
      {
        id: "7",
        pname: "Hello World",
        parentid: "5",
        grade: "3",
        children: [],
      },
    ],
  },
  {
    id: "8",
    pname: "操作系统原理",
    parentid: "1",
    grade: "2",
    children: [
      {
        id: "4028e581617d02e101617d070ed90000",
        pname: "操作系统类型介绍",
        parentid: "8",
        grade: "3",
        children: [],
      },
      {
        id: "4028e58161bbcd350161bbcefe3d0001",
        pname: "操作系统原理",
        parentid: "8",
        grade: "3",
        trylearn: null,
        children: [],
      },
    ],
  },
];
