
document.querySelector(".button-container").addEventListener("click", () =>{
    let text = document.getElementById("filter-jobs").value;
   
})

function getJobs(){
    return fetch("data.json")
    .then(response => response.json())
    .then(data => {
        
        return data
    })
}

function showJobs(jobs){
    console.log(jobs);
    let jobsContainer = document.querySelector(".job-container");
    
    let jobsHTML = "";
    jobs.forEach(job => {
        
        jobsHTML +- `
        <div class="job-tile">
                <div class="top">
                    <img src="https://pbs.twimg.com/profile_images/1871386426/TSIconButtonSM_400x400.png"/>
                    <span class="material-icons more_horiz">more_horiz</span>
                </div>
                <div class="rolename">
                    <span>Lead Product Design</span>
                </div>
                <div class="description">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet ligula sit amet mauris elementu
                    </span>
                </div>
                <div class="buttons">
                    <div class="button apply-now">
                        Apply now
                    </div>
                    <div class="button">
                        Message
                    </div>
                </div>
            </div> 
        `









    })

}
getJobs().then(data => {
    showJobs(data);
});