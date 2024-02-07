const Institute ={
    name: 'DPI',
    stablist: 1955,
    location: 'Tejgaon',
    depertment:{
        number:12,
        nam:['CTM', 'CST', 'CT', 'MT', 'EET', 'AUT'],
        semester:{
            total: '10th',
            students: 1250
        }
    }
}

// Institute['depertment']['semester']['students'] =8455;
// const perSemesterStudents=Institute['depertment']['semester']['students'];
// console.log(perSemesterStudents);
// console.log(Institute.depertment.semester.total);
// Institute.depertment.semester.total = '8th';
// const totalSemester =Institute.depertment.semester.total;
// console.log(totalSemester);
// // console.log(Institute.depertment.number);
// Institute.depertment.number= 10;
// console.log(Institute.depertment.number);
// console.log(Institute);
// console.log(Institute.depertment.nam);
// console.log(Institute['depertment']['nam'][4]);
// Institute['depertment']['nam'][4]= 'ET'
// const Depertment =Institute['depertment']['nam'][4]
// console.log(Depertment);
// console.log(Institute.depertment.nam);

// delete Institute.depertment;
// console.log(Institute);