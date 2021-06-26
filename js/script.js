

document.querySelector(".button-container").addEventListener("click", () =>{
    let text = document.getElementById("filter-jobs").value;
   
})

funtion getJobs(){
    return fetch("data.json")
    .then(respone => response.json())
    .then(data => {
        
        return data
    })
}

funtion showJobs(jobs){
    console.log(jobs);

}
getJobs().then(data => {
    showJobs(data);
});