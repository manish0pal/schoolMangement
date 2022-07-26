let STUDENTDATA;
let FEEDATA;
let STUDENTFEE;


//on load data
let students = 'https://api.sheety.co/8314c5bac555d4624f3ed1a69ae12b00/schoolApi/students';
fetch(students)
.then((response) => response.json())
.then(json => {
  // Do something with the data
   STUDENTDATA =json.students;
  console.log(json.students);
});


let feeMaster = 'https://api.sheety.co/8314c5bac555d4624f3ed1a69ae12b00/schoolApi/feeMaster';
fetch(feeMaster)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  FEEDATA = json.feeMaster
  console.log(json.feeMaster);
});


let studentFeeRelation = 'https://api.sheety.co/8314c5bac555d4624f3ed1a69ae12b00/schoolApi/studentFeeRelation';
fetch(studentFeeRelation)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  STUDENTFEE =json.studentFeeRelation;
  console.log(json.studentFeeRelation);
});

const getStudent = (regNo)=>{
  for(var i = 0; i < STUDENTDATA.length; i++)
  {
    if(STUDENTDATA[i].regNo == regNo)
    {
      return STUDENTDATA[i];
    }
  }   
}

const getStudentAndFee = (regNo) =>{
 let student = getStudent(regNo);
 if(student){
  //go for fee
 }
 else{

 }

}



