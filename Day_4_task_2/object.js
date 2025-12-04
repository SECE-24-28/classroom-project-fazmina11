let Student = {
    name: "Fazmina",
    age: 19,
    department: "Artificial Intelligence And machine Learning",
    marks:[89,74,95]};

    console.log(Student);
    Student.name="Fazmina S";
    Student["percentage"]= (Student.marks[0]+Student.marks[1]+Student.marks[2])/3;
    console.log("The highest mark is: " + Math.max(...Student.marks));
    console.log("The updated student object is: ", Student);