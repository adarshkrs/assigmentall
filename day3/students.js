// All the Code for All Students Page Goes Here

let tbody = document.querySelector('tbody');
  let LSData=JSON.parse(localStorage.getItem('admission'))||[];
  let filteredDOM=document.querySelector('filter');
  let LSAccepted=JSON.parse(localStorage.getItem('admission-accepted'))||[];
  let LSRejected=JSON.parse(localStorage.getItem('admission-rejected'))||[];



function DisplayTable(Data) {
  tbody.innerHTML=null;

  Data.forEach(function(ele,i) {
    
   let tr=document.createElement('tr');
   tbody.append(tr);

       let   name=document.createElement('td');
            name.innerText=ele.name;

            let   email=document.createElement('td');
            email.innerText=ele.email;

            let  phone=document.createElement('td');
            phone.innerText=ele.phone;

            let   gender=document.createElement('td');
            gender.innerText=ele.gender;

            let    course=document.createElement('td');
            course.innerText=ele. course;

             let accepted=document.createElement('td');
             accepted.innerText="Accepted";
             accepted.style.backgroundColor= "red"
             accepted.addEventListener("click", function(){
                LSAccepted.push(ele);
                localStorage.setItem("admission-accepted" ,JSON.stringify(LSAccepted));
                let filtered=Data.filter(function(ele,index){
                 if(index===i){
                    return false;
                 }
                 else{
                   return true;
                 }
                });
                DisplayTable(filtered);
               localStorage.setItem("admission" ,JSON.stringify(filtered));
             })
            

             let rejected=document.createElement('td');
             rejected.innerText="Rejected"
             rejected.style.backgroundColor="green"

             rejected.addEventListener("click", function(){
                LSRejected.push(ele);
                rejected.addEventListener("click", function(){
                    LSRejected.push(ele);
                    localStorage.setItem("admission-rejected" ,JSON.stringify(LSRejected));
                    let filtered=Data.filter(function(ele,index){
                     if(index===i){
                        return false;
                     }
                     else{
                       return true;
                     }
                    });
                    DisplayTable(filtered);
                   localStorage.setItem("admission" ,JSON.stringify(filtered));
                 });
                });

             tr.append(name,email,phone,gender,course,accepted, rejected);
              document.querySelector("tbody").append(tr);
            });
            localStorage.clear(Data);
  }
    DisplayTable(LSData);


    filteredDOM.addEventListener("change" ,function(ele){
        let filteredData =LSData.fiter(function(ele){
            if(ele.course=== filterDOM.value){
                return true;
            }
            else{
                return false;
            }
        })
        DisplayTable(filteredDOM);
      })