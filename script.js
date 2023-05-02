
const body = document.querySelector("body");
const inputMessage = document.querySelector(".input_message");
const form = document.querySelector("form");
const input = document.querySelector("input");
const reset = document.querySelector(".reset");
const button = document.querySelector(".submit");
const parentList = document.querySelector("ul");
const titleList = document.querySelector(".title_info");
const listContainer = document.querySelector(".list_container");
const liArray = [];

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    outputData(); 
    changeInputType();
    
    form.reset();

    if (input.getAttribute("name") === "End") {
        addSavedData();
        //  titleList.innerHTML = '';
    
        // Показать инпут и установить начальное сообщение
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'Name');
        input.placeholder = 'your name';
        inputMessage.innerHTML = 'Enter your name';
        titleList.innerHTML = "Your personal information:";
        
    }

 

}




function outputData() {
    if(input.getAttribute("name") == "Name") 
    {
        liArray.push(titleList);  
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="lititle">${input.getAttribute("name")}:</span>  ${input.value}  `;
    parentList.append(li);
    liArray.push(li);
    
    
}

function addSavedData() {
  
    for (let i = 0; i < liArray.length; i++) {
      listContainer.append(liArray[i]); // добавляем каждый li в родительский ul
    }
    console.log(liArray);
    liArray.length = 0;
  }




function changeInputType() {
    switch(input.getAttribute("name"))
    {
        case "Name": 
            titleList.innerHTML = `${input.value}'s personal information:`; 
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
            input.setAttribute("type", "text"); 
            input.setAttribute("name", "End");
            break;
           
    }
}

