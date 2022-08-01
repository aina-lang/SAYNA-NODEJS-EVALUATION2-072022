
let form={
    firstname:document.getElementById("fname"),
    lastname:document.getElementById("lname"),
    avis:document.getElementById("avis"),
    note:document.getElementById("note"),
    formation:document.getElementById("formation"),
    submit:document.getElementById("submit")
} 


form.submit.addEventListener("click",(e)=>{   
    var request=new XMLHttpRequest()
    request.onload=()=>{
        reponseObject=null;
        try{
            reponseObject=JSON.parse(request.responseText);
        }catch(e){
            console.error("could not parse JSON!");
        }
        if(reponseObject){
            handleResponse(reponseObject);
        }
    };

    var requestData=`firstname=${form.firstname.value}&lastname=${form.lastname.value}&avis=${form.avis.value}&note=${form.note.value}&formation=${form.formation.value}`
    console.log(requestData)
    request.open("post","/")
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    request.send(requestData);
});

function handleResponse(reponseObject) {
    if(reponseObject.ok){
        location.href='/index.ejs';
    }
} 


