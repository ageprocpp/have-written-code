function getSubmissions(){
    var username=document.getElementById("username").value;
    var request=new XMLHttpRequest();
    var requestURL="https://kenkoooo.com/atcoder/atcoder-api/results?user="+username;
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    var form=document.getElementsByClassName("form")[0];
    if(form.nextElementSibling){
        form.nextElementSibling.parentNode.removeChild(form.nextElementSibling);
    }
    var loadingElement=document.createElement("div");
    loadingElement.className="display";
    form.parentNode.insertBefore(loadingElement,form.nextSibling);
    form=form.nextElementSibling;
    form.innerHTML="Loading...";
    request.onload=(function(){
        var cnt=0;
        for(var submission of request.response){
            cnt+=submission["length"];
        }
        var form=document.getElementsByClassName("form")[0];
        if(form.nextElementSibling){
            form.nextElementSibling.parentNode.removeChild(form.nextElementSibling);
        }
        form.insertAdjacentHTML("afterend",`
            <div class="display">
            `+username+`
                 has submitted
            `+cnt+`
                byte of codes to AtCoder!
            </div>
        `);
    });
}