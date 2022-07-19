

const studentDetail = 
{
    student:{
        fullName:"Manish Pal",
        regNO:"KV123",
        rollNo:"41",
        std:"10-B",
        father:"Dinesh Pal",
        contact:"9876543210"
    },
    feeDtl:[
        {
            feeHeadName:"rahul",
            date:'20/02/2022',
            status:'unpaid',
            payAmount:230
        },
        {
            feeHeadName:"rahul",
            date:'20/02/2022',
            status:'paid',
            payAmount:230
        },
        {
            feeHeadName:"rahul",
            date:'20/02/2022',
            status:'underProcess',
            payAmount:230
        },
        {
            feeHeadName:"rahul",
            date:'20/02/2022',
            status:'unpaid',
            payAmount:230
        },
        {
            feeHeadName:"rahul",
            date:'20/02/2022',
            status:'paid',
            payAmount:230
        },
        {
            feeHeadName:"rahul",
            date:'20/02/2022',
            status:'underProcess',
            payAmount:230
        }
    ]
}


const addStudentDetail = () => {
  
    //get data first then 
    
    $('#studentFind').hide();

    $('#studentDetails').show();
}



const feeDropChange = () =>{
   let selectId =  $('#feedropdown').val();
   $('#feeRow').empty();

   studentDetail.feeDtl.map((val,ind)=>{
    if(val.status == selectId){
        creatFeeRow(val);
    }
   })

}

const creatFeeRow = (feeDetail) =>{
   
    const rowDes = `<div class="row">
        <div class="col-7">${feeDetail.feeHeadName}</div>
        <div class="col-5 my_center_box">
            <h4>₹ ${feeDetail.payAmount}</h4>
        </div></div>`;
    let feeRoot = document.createElement('div')

    feeRoot.className = `card col-12 rounded p-1 mt-4 feeCard ${feeDetail.status}`

    feeRoot.innerHTML = rowDes;
    console.log(feeRoot)
    document.getElementById('feeRow').append(feeRoot);
   

}

//to create unpaid Fee List
// feeDropChange();