
const studentDetailCard = $('#studentDetails');
const studentDetail =[

    {
        title:"Registraion No.",
        value:"KV123"
    },
    {
        title:"Full Name",
        value:"Manish Pal"
    },
    {
        title:"Roll No.",
        value:"41"
    },
    {
        title:"Standard",
        value:"10-B"
    },
    {
        title:"Father Name",
        value:"Dinesh Pal"
    },
    {
        title:"Contact",
        value:"9876543210"
    }
]
 

const addStudentDetail = ()=>{
    studentDetailCard.empty();

    studentDetail.map((val,ind)=>{
        let deatilRow = `   <span class="mt-2">${val.title}</span>
        <div class="form_group borderBlue">
            <input class="form_input regNO" readonly  value="${val.value}" />
          </div>`;
        deatilRowElement = $.parseHTML( deatilRow );
        studentDetailCard.append(deatilRowElement);
    });




}

var stdDetail=[
    {
        name:"neeraj kumar",
        regno:0001,
        rollno:001,
        standard:"9th",
        
    }
]