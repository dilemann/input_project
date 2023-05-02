
const body = document.querySelector("body");
const inputMessage = document.querySelector(".input_message");
const form = document.querySelector("form");
const input = document.querySelector("input");
const reset = document.querySelector(".reset");
const button = document.querySelector(".submit");
const parentList = document.querySelector("ul");
const titleList = document.querySelector(".title_info");
const listContainer = document.querySelector(".list_container");
const title = document.querySelector("h3");
const liArray = [];



//  form submission event
function onSubmit(event) 
{
    event.preventDefault();
    outputData();
    changeInputType();
    form.reset();
}


// Input-Ausgang
function outputData() 
{
    if(input.getAttribute("name") === "Name")  
    {    
        const titleList = document.createElement("p");
        title.style.opacity= 0;
        console.log(title);
        titleList.innerHTML = `${input.value}'s personal information:`; 
        liArray.push(titleList);
        parentList.append(titleList);
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="lititle">${input.getAttribute("name")}:</span>  ${input.value}  `;
    liArray.push(li); 
    parentList.append(li);   
}


function addSavedData() 
{
    const div = document.createElement("div");
    for (let i = 0; i < liArray.length; i++)  div.append(liArray[i]); // добавляем каждый li в родительский ul
    listContainer.append(div);
    liArray.length = 0;
   
}



function changeInputType() 
{
    switch(input.getAttribute("name"))
    {
        case "Name": 
            
            input.setAttribute("type", "date"); 
            input.setAttribute("name", "Date of birth");
            inputMessage.innerHTML = "Enter date of birth";
            break;

        case "Date of birth":
            input.setAttribute("type", "text"); 
            input.setAttribute("name", "The profession");
            input.placeholder = "your proffession";
            inputMessage.innerHTML = "Enter your profession";
            break;

        case "The profession":
            input.setAttribute("type", "text"); 
            input.setAttribute("name", "Hobby");
            input.placeholder = "your hobby";
            inputMessage.innerHTML = "Enter your hobby";
            break;

        case "Hobby":
            title.style.opacity= 1;
            addSavedData();
            input.setAttribute('type', 'text');
            input.setAttribute('name', 'Name');
            input.placeholder = 'your name';
            inputMessage.innerHTML = 'Enter your name';
            break; 
            
    }
}



form.addEventListener('submit', onSubmit);
