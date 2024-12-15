

// //resume download PDF => 

const downloadResume = (fileName) => {
    return function(){
        var url = "Files/" + fileName;
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "blob";
        request.onload = function(){
            if(request.status === 200){
                var blob = new Blob([request.response], {type: "application/pdf"});
                var blobURL = window.URL.createObjectURL(blob);
                window.open(blobURL, "_blank");
            }else{
                console.error("Failed to load file"+ request.status);
            }
           
    };
    request.onerror = function(){
        console.error("error while fetching file");
    };

    request.send();
  }
}

// const btn = document.querySelector('#btn');
const btn = document.querySelector('#btn');

window.addEventListener('DOMContentLoaded', (e) =>{
    btn.addEventListener('click', downloadResume('Marya Fairoz - Resume.pdf'))    

})