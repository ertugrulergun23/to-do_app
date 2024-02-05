const button=document.querySelector("button");
const input=document.querySelector("input");
const container=document.querySelector(".container");
button.addEventListener("click",()=>{
    if(input.value !=""){
        let a=input.value;
        input.value="";
        let dle=document.createElement("button");
        let div=document.createElement("div");
        let div1=document.createElement("div");
        dle.classList.add("delete")
        div.appendChild(div1);
        div.appendChild(dle);
        div1.textContent=a;
        div.classList.add("activities")
        container.appendChild(div);
        dle.addEventListener("click",()=>{
            div.remove();
        })
    }


})
input.addEventListener("keypress",(e)=>{
    if(input.value !=""){
        if(e.code=="Enter"){
            let a=input.value;
            input.value="";
            let dle=document.createElement("button");
            let div=document.createElement("div");
            let div1=document.createElement("div");
            dle.classList.add("delete")
            div.appendChild(div1);
            div.appendChild(dle);
            div1.textContent=a;
            div.classList.add("activities")
            container.appendChild(div);
            dle.addEventListener("click",()=>{
                div.remove();
            })
    }}
})