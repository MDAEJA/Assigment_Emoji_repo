// const search_input = document.querySelector("#emoji-name");
// console.log(search_input);
const press = document.querySelector(".btn");
// press.addEventListener("click",((e)=>{
//     if(search_input.value === "") return alert("hi");
// console.log(search_input.value);
// }));
// .addEventListener("key")

document.querySelector("#emoji-name").addEventListener("keyup",searchEmoji);
function searchEmoji(e){
    // console.log(e.key);
    const inputData = document.querySelector("#emoji-name").value;
    displayLists(inputData);
}
window.onload = ()=>{
    displayLists();
}
// create function for serach something
 

function displayLists(searched_value=""){
   
// filtering the data based on searching

 let filteringResult = emojiList.filter((ele)=>{

    if(ele.description.indexOf(searched_value) != -1){
        return true;
    }

    if(ele.tags.some(elem=>elem.startsWith(searched_value))){
        return true;
        }
    
    if(ele.aliases.some(elem=>elem.startsWith(searched_value))){
      return true;
}
});
const maintable = document.querySelector("#tablebody");
maintable.innerText = "";

    filteringResult.forEach((ele)=>{
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.style.border = "5px solid pink";
    td1.style.height = "100px";
    td1.style.display = "flex";
    td1.style.alignItems = "center";
    td1.style.justifyContent = "center";
    td1.style.padding = "30px";
    td1.style.borderRadius = "50%";
    // td1.style.padding = '10px';



    const td2 = document.createElement("td");
    td2.style.border = "5px solid pink";
    td2.style.textAlign = "center";
    td2.style.fontSize ="30px";
    td2.style.borderRadius = "50%";
    td2.style.padding = '10px';
    
    const td3 = document.createElement("td");
    td3.style.border = "5px solid pink";
    td3.style.textAlign = "center";
    td3.style.fontSize ="30px";
    td3.style.borderRadius = "50%";
    td3.style.padding = '10px';
    // td3.style.gap = "10px";
    
    // td3.sty = "100px"
   
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // const maintable = document.querySelector("#tablebody");
    maintable.appendChild(tr);

    td1.innerText = `${ele.emoji}`;
    td2.innerText =  `${ele.aliases}`;
    td3.innerText = `${ele.description}`;

    });
}

