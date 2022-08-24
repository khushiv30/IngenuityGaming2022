// 1.XHR
// 2.fetch()
// 3 method is not used here
// 3.Third party packages(Axios)


// 1.XHR
const API_URL="https://jsonplaceholder.typicode.com/users";

function getApiData(url){
    console.log("call api");
    return new Promise((resolve,reject) =>{
     //create instance os xhr
     var request=new XMLHttpRequest();//communication mechanism
     request.open("GET",url);
     request.send();

     request.onload = () =>{
        // console.log(request.response);
        // console.log(request);
        if(request.status ===200){
            resolve(request.response)
        }
        else{
            reject("Not able to fetch data")
        }
     };   //request process or not

    });
}
getApiData(API_URL)
.then((val)=>{
    console.log(JSON.parse(val))
    displayData(JSON.parse(val))
})
.catch((err)=>console.log("Error"+err));


function displayData(serverData){
    // console.log(serverData);
    for(var user of serverData)
    {
        let newTr =  document.createElement('tr');
        let newTd1 =  document.createElement('td');
        let newTd2=  document.createElement('td');
        let newTd3=  document.createElement('td');
        let newTd4=  document.createElement('td');

        // newTd1.innerText= `${user.id}`;
        newTd1.innerText=""+user.id;
        newTd2.innerText=""+user.name;
        newTd3.innerText=""+user.email;
        newTd4.innerText=""+user.phone;

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);

        document.getElementById("myTable").appendChild(newTr)

            
    }
}