const accessKey="yt5spMQK4GGojx75rVNU8tFIjl6IeWq_C5NW5h8-KsI";

const form=document.querySelector("form");
const input=document.querySelector("input");
const result=document.querySelector(".search_result");
const show_more=document.querySelector("#show_more");
const search_form=document.querySelector("#search_form")


let keyword="";
let page=1;

async function searchImage(){
          keyword=input.value;
          const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
          
          const response=await fetch(url);
          const data= await response.json();

          console.log(data.results)
          let x=data.results;
         
          display(x)
       

}
const display=(x)=>{
          if(page==1){
                      result.innerHTML="";

          }
        
          for(let i of x){
                    imgElement=document.createElement("img");
                    imgElement.src=i.urls.small
                    result.appendChild(imgElement)
          }
          show_more.style.display="block";

}

search_form.addEventListener("submit" ,(e)=>{
          e.preventDefault();
          page=1;
          searchImage()
})

show_more.addEventListener("click" ,()=>{
          page++;
          searchImage()
})