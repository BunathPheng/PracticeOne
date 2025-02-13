const  clickid =  document.getElementById("id-button");
const  clickoption =  document.getElementById("choice-option");
const  clicktitle = document.getElementById("title");
const  inputvalue = document.getElementById("default-search");
const  forminput =  document.getElementById("forminput");
const selectElement = document.getElementById("quoteSelect");
const  image =  document.getElementById("image");
const  title = document.getElementById("title-items");
const  des = document.getElementById("des");
const  error = document.getElementById("message");
const display =   document.getElementById("display");
let value ="";

selectElement.addEventListener("change", function() {
    console.log("Selected value:", this.value);
     value = this.value;
    if(value === "quote_id")
    {
        document.getElementById("default-search").removeAttribute("disabled");
        display.style.display = "none";
        
    }else if(value === "quote_title")
    {
        document.getElementById("default-search").removeAttribute("disabled");
        display.style.display = "none";

    }else {
        document.getElementById("default-search").setAttribute("disabled" , "");
    }

});

inputvalue.addEventListener("input" , function(){
    display.style.display = "none";
    error.innerHTML = "";
} )

    forminput.addEventListener("submit", (e) => {
        console.log("Selected value:", value);
        e.preventDefault();
        console.log(inputvalue.value);
        if(value === "quote_id"){
            switch(Number(inputvalue.value)){
                case 12 :
                    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7u3UAGdaN7hcWNE8o6LsHvtgRkHx778IKw&s";
                    title.innerHTML = "The Modern Loss";
                    des.innerHTML = "THE MODERN LOSS HANDBOOK is what author and Modern Loss cofounder Rebecca Soffer wished she had after her parents died. With wisdom gained from her own personal experience, expert advice, and insights from the global Modern Loss community, This book is for anyone who has lost their “person” or wants to give something meaningful and effective to someone who has. Rebecca’s warmth, wit and disarming humor make this an approachable and supportive companion at any stage of loss.";
                    display.style.display = "block";
                     break;
                case 15:
                    image.src = "https://harpercollins.co.uk/cdn/shop/files/x9780008608521_55f53c9f-c27b-45a7-b3e9-6b0d7962046a.jpg?v=1738437444&width=350";
                    title.innerHTML = "Made in Manchester";
                    des.innerHTML = "Modern Loss is a global movement and platform of content, resources and community focused on eradicating the stigma around grief while also encouraging people to find meaning and live richly. THE MODERN LOSS HANDBOOK does just that by offering a welcoming space in which to grow thoughts and feelings as they evolve and create a personal roadmap toward resilience.";
                    display.style.display = "block";
                    break;
                case 18:
                    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyJdz62wSTTo2Dgo6-G-acW3O0bMS42Jw8A&s";
                    title.innerHTML = "Modern Art";
                    des.innerHTML = "Modern Art: A Global Survey from the Mid-Nineteenth Century to the Present is a broad chronological history of painting, sculpture, photography, architecture, and new media from c. 1850 to today.";
                    display.style.display = "block";
                    break;
                default:
                    error.innerHTML = "No book found with this ID.";
                  
            }
        }
            
    });



    forminput.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputText = inputvalue.value.toLowerCase().trim(); 
        console.log(inputText);
        if(value === "quote_title")
        {
            switch(inputText){
                case "The Modern Loss".toLowerCase().trim():
                    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7u3UAGdaN7hcWNE8o6LsHvtgRkHx778IKw&s";
                    title.innerHTML = "The Modern Loss";
                    des.innerHTML = "THE MODERN LOSS HANDBOOK is what author and Modern Loss cofounder Rebecca Soffer wished she had after her parents died. With wisdom gained from her own personal experience, expert advice, and insights from the global Modern Loss community, This book is for anyone who has lost their “person” or wants to give something meaningful and effective to someone who has. Rebecca’s warmth, wit and disarming humor make this an approachable and supportive companion at any stage of loss.";
                    display.style.display = "block";
                     break;
                case "Made in Manchester".toLowerCase().trim():
                    image.src = "https://harpercollins.co.uk/cdn/shop/files/x9780008608521_55f53c9f-c27b-45a7-b3e9-6b0d7962046a.jpg?v=1738437444&width=350";
                    title.innerHTML = "Made in Manchester";
                    des.innerHTML = "Modern Loss is a global movement and platform of content, resources and community focused on eradicating the stigma around grief while also encouraging people to find meaning and live richly. THE MODERN LOSS HANDBOOK does just that by offering a welcoming space in which to grow thoughts and feelings as they evolve and create a personal roadmap toward resilience.";
                    display.style.display = "block";
                    break;
                case "Modern Art".toLowerCase().trim():
                    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyJdz62wSTTo2Dgo6-G-acW3O0bMS42Jw8A&s";
                    title.innerHTML = "Modern Art";
                    des.innerHTML = "Modern Art: A Global Survey from the Mid-Nineteenth Century to the Present is a broad chronological history of painting, sculpture, photography, architecture, and new media from c. 1850 to today.";
                    display.style.display = "block";
                    break;
                default:
                    error.innerHTML = "No book found with this ID.";
                  
            }
        }
});

 
