// All the JS Code for the Add Students Page Goes Here


   let form=document.querySelector("form");
   let LSData=JSON.parse(localStorage.getItem("admission"))||[];
     console.log(LSData);

   form.addEventListener("submit",function(e){
     e.preventDefault();

  let obj={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        gender:form.gender.value,
        course:form.course.value,


        

     }
     LSData.push(obj);
     console.log( LSData);
     localStorage.setItem("admission", JSON.stringify(LSData));
   })
