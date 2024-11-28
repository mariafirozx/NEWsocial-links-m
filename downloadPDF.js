// //resume download PDF => 

const downloadResume = (fileName) => {
    return function(){
        var url = "Files/" + fileName;
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "blob";
        request.onload = function(){
            var blob = new Blob([request.response], {type: "application/octetstream"});
            var isIE = false || !!document.documentMode;
            if(isIE){
                window.navigator.msSaveBlob(blob, fileName);
            }else{
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob);
                var a = document.createElement("a");
                a.setAttribute("download", fileName);
                a.setAttribute("href", link);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
            }
    };
    request.send();
    }
}

// const btn = document.querySelector('#btn');

window.addEventListener('DOMContentLoaded', (e) =>{
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', downloadResume('resume.pdf'));

})