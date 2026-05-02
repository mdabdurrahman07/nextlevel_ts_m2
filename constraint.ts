// constraint:- strict rules

type Students = {
  id: number;
  name: string;
};

const addStudentToCourse = <T extends Students>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  name: "Jamil",
  id: 1,
  class: 10,
};
const student2 = {
  name: "Jamil",
  class: 10,
  id: 3,
};

const res1 = addStudentToCourse(student1);
const res2 = addStudentToCourse(student2);
