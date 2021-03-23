export default [
  {
    id: "1",
    label: "My Course",
    parentid: "0",
    linkTo: "",
    children: [
      {
        id: "11",
        label: "Course List",
        parentid: "0",
        linkTo: "/mangage/course/list",
      },
      {
        id: "11",
        label: "My Learning",
        parentid: "0",
        linkTo: "/mangage/course/list",
      },
    ],
  },
  {
    id: "2",
    label: "My Information",
    parentid: "0",
    linkTo: "",
    children: [
      {
        id: "21",
        label: "Company detail",
        parentid: "2",
        linkTo: "/mangage/user/info",
      },
      {
        id: "22",
        label: "Bank detail",
        parentid: "2",
        linkTo: "/mangage/user/bank",
      },
    ],
  },
  {
    id: "3",
    label: "Statistic",
    parentid: "0",
    linkTo: "",
    children: [
      {
        id: "31",
        label: "Overall",
        parentid: "3",
        linkTo: "/mangage/user/stat",
      },
      {
        id: "32",
        label: "Top course",
        parentid: "3",
        linkTo: "/mangage/user/top",
      },
    ],
  },
];
