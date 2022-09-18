// All the Code for the Rejected page goes here

let LSRejected=JSON.parse(localStorage.getItem('admission-rejected'))||[];

   let tbody = document.querySelector('tbody');

   LSRejected.forEach(function(ele){
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

            tbody.append(name,email,phone,gender,course)
            document.querySelector("tbody").append(row);
   })