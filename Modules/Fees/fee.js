

const studentDetail =
{
    student: {
        fullName: "Manish Pal",
        regNO: "KV123",
        rollNo: "41",
        std: "10-B",
        father: "Dinesh Pal",
        contact: "9876543210"
    },
    feeDtl: [
        {
            id: 1,
            feeHeadName: "March Fee",
            date: '20/02/2022',
            status: 'unpaid',
            payAmount: 230
        },
        {
            id: 2,
            feeHeadName: "March Fee",
            date: '20/02/2022',
            status: 'paid',
            payAmount: 230
        },
        {
            id: 3,
            feeHeadName: "March Fee",
            date: '20/02/2022',
            status: 'underProcess',
            payAmount: 230
        },
        {
            id: 4,
            feeHeadName: "Exam",
            date: '20/02/2022',
            status: 'unpaid',
            payAmount: 230
        },
        {
            id: 5,
            feeHeadName: "March Fee",
            date: '20/02/2022',
            status: 'paid',
            payAmount: 230
        },
        {
            id: 6,
            feeHeadName: "March Fee",
            date: '20/02/2022',
            status: 'underProcess',
            payAmount: 230
        }
    ]
}
let selectedFeeCard = [];


const addStudentDetail = () => {

    //get data first then 

    $('#studentFind').hide();

    $('#studentDetails').removeClass('hide');
    $('#btnloader').removeClass('hide');
    $('#feeSection').removeClass('hide');
    $('#lastSection').removeClass('hide');
    

    feeDropChange();
}
function changeBoader(cardId,btn) {
    let selectedId = getIdfromElemId(cardId);
    let cardBorder = document.getElementById(cardId);
    if (selectedFeeCard.indexOf(selectedId) != -1) {
        cardBorder.classList.remove('selectedCard');
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-danger');
        //remove selected id from selected card
        selectedFeeCard= arrayRemove(selectedFeeCard,selectedId)
        btn.innerHTML = "Select to Pay"
     
    }else{
    cardBorder.classList.add('selectedCard');
    selectedFeeCard.push(selectedId);//add selected id to selected card
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-danger');
    btn.innerHTML = "Click to UnSelect"
    }
    setTotalAmount();
}



function getIdfromElemId(elmId) {
    return elmId.slice(3, elmId.length); //to remove fee
}


const feeDropChange = () => {
    let selectId = $('#feedropdown').val();
    $('#feeRow').empty();

    studentDetail.feeDtl.map((val, ind) => {
        if (selectId == "all") {
            creatFeeRow(val);
        }
        else if (val.status == selectId) {
            creatFeeRow(val);
        }
    })

}

const creatFeeRow = (feeDetail) => {

      //check it is selected or not
      let isSelected  = selectedFeeCard.indexOf(""+feeDetail.id) != -1;
    
    let rowDes = `<div class="row p-1">
        <div class="col-7"><h6>${feeDetail.feeHeadName}</h6>
        <span>${feeDetail.date}</span></div>
        <div class="col-5">
            <h5>₹ ${feeDetail.payAmount}</h5>
        </div>
        <div class="col-6 pt-2">
        <span class="text-body">Status: </span><span class="text-capitalize"> ${feeDetail.status}</span></div>
        <div class="col-6 d-flex justify-content-center">`;

    if(isSelected){
        rowDes = rowDes + `<div class="btn btn-danger float-right f-10" onclick="changeBoader('fee${feeDetail.id}',this)">Click to UnSelect</div>`
    }
    else if (feeDetail.status == "unpaid") {
        rowDes = rowDes + `<div class="btn btn-primary float-right f-10" onclick="changeBoader('fee${feeDetail.id}',this)">Select To Pay</div>`
    }


    rowDes = rowDes + "</div></div>";

    let feeRoot = document.createElement('div')

 
    let selectClass = isSelected ? 'selectedCard' : '';



    feeRoot.className = `card col-12 rounded p-1 mt-4 feeCard ${feeDetail.status} ${selectClass}`
    feeRoot.id = "fee" + feeDetail.id

    feeRoot.innerHTML = rowDes;

    document.getElementById('feeRow').append(feeRoot);
    setTotalAmount();

}


function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}


function setTotalAmount(){
    let totalAmount = 0;
    selectedFeeCard.map((val,ind)=>{

      selectFee =  studentDetail.feeDtl.filter(
            function(data){ return data.id == val }
        );
        totalAmount+=(selectFee[0].payAmount); 
    })


    $('#tltAmt').text('₹ '+totalAmount)
}
//to create unpaid Fee List
// feeDropChange();