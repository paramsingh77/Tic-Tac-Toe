function switching(num){
    let sect = document.getElementsByClassName('sm-box-'+num)[0]
    console.log("got in here");
    let value = prompt("Enter the value x or 0")
    if(value.length === 0 || value != 'X' && value != 'V'){
        console.log("got in here3");
         prompt("invalid value")
    }
    else{
        console.log(value);
        sect.innerHTML = value
        check = checkWin()
        console.log("performed check" , check)
        if(check){
            prompt(value , "won")
            console.log("did this check1")
        }
    }
  }

checkWin = () => {
    let box1 = document.getElementsByClassName('sm-box-1')[0]
    box1 = box1.innerHTML
    let box2 = document.getElementsByClassName('sm-box-2')[0]
    box2 = box2.innerHTML
    let box3 = document.getElementsByClassName('sm-box-3')[0]
    box3 = box3.innerHTML
    let box4 = document.getElementsByClassName('sm-box-4')[0]
    box4 = box4.innerHTML
    let box5 = document.getElementsByClassName('sm-box-5')[0]
    box5 = box5.innerHTML
    let box6 = document.getElementsByClassName('sm-box-6')[0]
    box6 = box6.innerHTML
    let box7 = document.getElementsByClassName('sm-box-7')[0]
    box7 = box7.innerHTML
    let box8 = document.getElementsByClassName('sm-box-8')[0]
    box8 = box8.innerHTML
    let box9 = document.getElementsByClassName('sm-box-9')[0]
    box9 = box9.innerHTML
    console.log(box1 , box2  , box3 , box4 , box5 , box6  , box7 , box8 , box9 )
    // row-1
    if(box1.length === 0  , box2.length === 0  , box3.length === 0 , box4.length === 0 , box5.length === 0 , box6.length === 0  , box7.length === 0 , box8.length === 0 , box9.length === 0 ){
       console.log('Value is not true yet');
        return false
    }
    else if(box1 === box2 && box2 === box3){
        console.log(box1 , box2 , box3);
        return true
    }
    // row-2
    else if(box4 ===  box5 && box5 === box6){
        console.log(box4 , box5 , box6);
        return true
    }
    // row-3
    else if(box7 === box8 &&box8 === box9){
        console.log(box17, box8 , box9);
        return true
    }
    // diagonal1 
    else if(box1 === box5&&box5 === box9){
        console.log(box1 , box5 , box9);
        return true
    }
    // diagonal2
    else if(box3 === box5&&box5 === box7){
        console.log(box3 , box5 , box7);
        return true
    }
    // column1
    else if(box1 === box4&&box4 === box7){
        console.log(box1 , box4 , box7);
        return true
    }
    // column2
    else if(box2 === box5&&box5 === box8){
        console.log(box2 , box5 , box8);
        return true
    }
    // column3
    else if(box3 === box6&&box6 === box9){
        console.log(box3 , box6 , box9);
        return true
    }
    else{
        console.log("dont match any case");
    }
    return false
}
