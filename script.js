const library = [];
let libraryDisplay=document.getElementById("libraryDisplay");
const buttonAdd=document.getElementById("addBook")

/*the form and its content*/
const form=document.getElementById("formNewBook");
const title=form.querySelector("#bookTitle");
const author=form.querySelector("#bookAuthor");
const numberOfPages=form.querySelector("#bookNumberOfPages");
const isRead=form.querySelector("#isRead");

console.log('sup mate?')
console.log('');

/*
function Book(){
  this.title="unkown"
  this.author="unkown"
  this.numberOfPages="unkown"
  this.isRead=false;
}
*/
function Book(title, author, numberOfPages, isRead) {
  this.title=title;
  this.author=author;
  this.numberOfPages=numberOfPages;
  if(isRead=="on"){
    this.isRead="already read";
  }
  this.isRead="not read yet";
}

display=() => {
  libraryDisplay.innerHTML="";
  for (let stuff in library){
    const p=document.createElement("p");
    p.classList.add("book")
    const div=[
     library[stuff].title,
     library[stuff].author,
     library[stuff].numberOfPages,
     library[stuff].isRead
    ];
    for(things in div){
      let divToCreate=document.createElement("div");
      divToCreate.innerHTML=div[things];
    p.appendChild(divToCreate);
    }
    libraryDisplay.append(p);
  }
  console.log(library.length)
}


function addBookToLibrary() {
  
  
  library.push(new Book(
    title.value,
    author.value,
    numberOfPages.value,
    isRead.value
    ));
    display();
  }
  
  
  
  logAnything=()=>console.log("anything");
  
  logAnything();
  console.log(libraryDisplay);
  
  
  buttonAdd.addEventListener('click',()=>{
    addBookToLibrary();
    console.log(form);
    console.log(title.value)
  });
  