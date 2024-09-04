let username = document.querySelector(".login__input--user");
let loginpin = document.querySelector(".login__input--pin");
let container = document.querySelector(".app");
let Movements = document.querySelector(".movements");
let balancevalue = document.querySelector(".balance__value");
let loanAmt = document.querySelector(".form__input--loan-amount")
let transfer = document.querySelector(".form__input--to")
let transferAmt =document.querySelector(".form__input--amount")
let logoutUser = document.querySelector(".form__input--user")
let logoutPin =document.querySelector(".form__input--pin")


let account1 = {
  user: "vikash",
  pin: 9999,
  movements: [],
};
let account2 = {
  user: "mukhil",
  pin: 7777,
  movements: [],
};
let account3 = {
  user: "aravind",
  pin: 6666,
  movements: [],
};

let data = [account1, account2, account3];

function loginCon() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].user == username.value && data[i].pin == loginpin.value) {
      container.style.opacity = 1;

    if (data[i].user=="mukhil") 
    {
      balancevalue.innerHTML=5000;
    }  
    else if (data[i].user=="vikash")
     {
      balancevalue.innerHTML=7000;
    }

     else 
      {
      balancevalue.innerHTML=6000;
    } 
      
    

    console.log(data[i]);
    return;
  }
}
  console.log("invalid");
}


function requestLoan() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].user== username.value )  {
        let amount = parseFloat(balancevalue.textContent)
        let no = parseFloat(loanAmt.value)
        let totalAmt = no+amount
        balancevalue.innerHTML=totalAmt+"$"
        console.log(totalAmt);

     let parent = document.createElement("movements__row")
     let depositType= document.createElement("div")
     let depositDate = document.createElement("div")
     let depositValue = document.createElement("div")

     parent.className = "movements__row"
     depositType.className = "movements__type"
     depositDate.className = "movements__date"
     depositValue.className = "movements__value"
     let date = new Date().toLocaleDateString()
     let type = "deposit"
     depositType.innerHTML = type
     depositDate.innerHTML = date
     depositValue.innerHTML = "+"+loanAmt.value
     parent.appendChild(depositType)
     parent.appendChild(depositDate)
     parent.appendChild(depositValue)

     Movements.appendChild(parent)

      }
      
    }
}


function transferMoney() {
  if (username.value==transfer.value) {
    alert("invalid")
    return
  }
  for (let i = 0; i < data.length; i++) {
   
  if (data[i].user==transfer.value) {
       let transAcc = parseFloat(transferAmt.value)
     let balance = parseFloat(balancevalue.textContent)
     let balanceAmt = balance-transAcc
     balancevalue.innerHTML=balanceAmt+"$"
     data[i].movements.push(transAcc)
     localStorage.setItem("movements",data[i].movements)
     let storage = localStorage.getItem("movements",data[i].movements)
     console.log(storage);

     let parent = document.createElement("movements__row1")
     let firstChild = document.createElement("div")
     let secChild = document.createElement("div")
     let thirdChild = document.createElement("div")
     
     parent.className = "movements__row1"
     firstChild.className = "movements__type1"
     secChild.className = "movements__date1"
     thirdChild.className = "movements__value1"
     let date = new Date().toLocaleDateString()
     let type = "withdrawal"
     firstChild.innerHTML = type
     secChild.innerHTML = date
     thirdChild.innerHTML = "-"+transferAmt.value
     parent.appendChild(firstChild)
     parent.appendChild(secChild)
     parent.appendChild(thirdChild)

     Movements.appendChild(parent)
}
}
}


function closeAccount() {

  let dataIndex = data.user == logoutUser.value && data.pin == logoutPin.value;
  for (let i = 0; i < data.length; i++) {
    if (dataIndex !== -1) {
      data.splice(dataIndex,1)
      container.style.opacity = 0;
      alert("Account closed successfully")
    }
    
  }
}




 