
const body = document.querySelector("body");
const inputMessage = document.querySelector(".input_message");
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const parentList = document.querySelector("ul");
const titleList = document.querySelector(".title_info");


form.addEventListener("submit", onSubmit);


function onSubmit(event) {
    event.preventDefault();

    outputData(); 
    changeInputType();
    form.reset();

    if (input.getAttribute("name") === "Hobby") {
        form.removeEventListener("submit", onSubmit);
        input.style.display = "none";
            inputMessage.innerHTML = "add a participant?"
    }
}




function outputData() {
    const li = document.createElement("li");
    li.innerHTML = `<span class="lititle">${input.getAttribute("name")}:</span>  ${input.value}  `;
    parentList.append(li);
     
}



function changeInputType() {
    switch(input.getAttribute("name"))
    {
        case "Name": 
            titleList.innerHTML = `${input.value}'s personal information:`
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
            input.style.display = "none";
            inputMessage.innerHTML = "add a participant?"
            // return;
           
    }
}