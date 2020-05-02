function getSubmissions(){
    var username=document.getElementById("username").value;
    var request=new XMLHttpRequest();
    var requestURL="https://kenkoooo.com/atcoder/atcoder-api/results?user="+username;
    request.open('GET',requestURL);
    request.responseType='json';
    request.send();
    alert(username);
    request.onload=(function(){
        var cnt=0;
        for(var submission of request.response){
            cnt+=submission["length"];
        }
        alert(cnt);
    });
}