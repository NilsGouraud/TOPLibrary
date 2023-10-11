
let libraryDisplay=document.getElementById("libraryDisplay");
const buttonAdd=document.getElementById("addBook")

/*the form and its content*/
const addBookButton=document.getElementById("addBookButton");
const overlay=document.getElementById("overlay");
const fieldset=document.getElementById("fieldset");
const form=document.getElementById("formNewBook");
const title=document.getElementById("bookTitle");
const author=document.getElementById("bookAuthor");
const numberOfPages=document.getElementById("bookNumberOfPages");
const isRead=document.getElementById("isRead");

class Library extends Array{
  constructor(){
    super();
  }
  print=()=>{
    let books="";
    for(let book in this){
      books+=book.print+"\n";
    }
    return "current library: \n"+books;
  }
  addBook=()=> {
    if(!this.some((book)=>book.title==title.value)){
      library.push(new Book(
        title.value, author.value, numberOfPages.value, isRead.checked));
      display();
      return;
    }
    alert("a book of the same name already exists");
  }
  toggleRead(bookToToggle){
    let book=this.find((b)=>b==bookToToggle);
    book.isRead ? book.isRead=false :  book.isRead=true;
  }  
  checkIfRead(name){
    console.log(this.find(name).isRead);
  }
  remove(book){
    this.pop(this.indexOf(book));
  }
  getBook(title){
    return this.find((book)=> book.title==title);
  }
}
class Book {
  constructor(title, author, numberOfPages, isRead) {
    this.title=title;
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.isRead=isRead;
    this.isReadString=()=>{
      return this.isRead ? "already read" : "not read yet";
    }
  }
  
  print=()=>{
    return title+author+numberOfPages+isReadString;
  }  
}
  
const library = new Library();
    
display=() => {
  libraryDisplay.innerHTML="";
  for (let stuff in library){
    /*The books as they appear in the page */
    const bookContainer=document.createElement("p");
    bookContainer.classList.add("book");
    
    let bookTitle=document.createElement("div");
    bookTitle.classList.add("title");
    bookTitle.innerHTML=library[stuff].title;
    
    let bookAuthor=document.createElement("div");
    bookAuthor.innerHTML=library[stuff].author;
    
    let bookNumberOfPages=document.createElement("div");
    bookNumberOfPages.innerHTML=library[stuff].numberOfPages+" pages";
    
    let bookIsRead=document.createElement("div");
    let bookIsReadText=document.createElement("span");
    bookIsReadText.classList.add("bookIsReadText");
    
    
    bookIsReadText.textContent=library[stuff].isReadString();
    
    
    
    bookContainer.append(bookTitle,bookAuthor,bookNumberOfPages,bookIsRead);
    
    let sliderIsRead=document.createElement("label");
    sliderIsRead.classList.add("switch");
    let checkBox=document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    if(library[stuff].isRead){
      checkBox.setAttribute("checked","");
    }
    let span=document.createElement("span");
    span.classList.add("slider");
    sliderIsRead.appendChild(checkBox);
    sliderIsRead.appendChild(span);
    
    
    
    document.onclick=()=> library.forEach((b)=>(console.log(b)));
    
    checkBox.onclick=()=>{
      let title=checkBox.parentNode.parentNode.parentNode.querySelector(".title").innerHTML;
      let book=library.getBook(title);
      library.toggleRead(book);
      sliderIsRead.parentNode.parentNode.querySelector(".bookIsReadText").textContent=book.isReadString();
    }
    
    bookIsRead.appendChild(bookIsReadText)
    bookIsRead.appendChild(sliderIsRead);
    
    
    /*The button you have to press to delete a book */
    const deleteButton=()=>{
    let del=document.createElement("button");
    del.classList.add("deleteButton");
    let bin=document.createElement("img");
    bin.src="./resources/bin.png"
    del.appendChild(bin);
    del.addEventListener('click',()=>{
      let title=del.parentNode.querySelector(".title").innerHTML;
      let book=library.getBook(title);
      library.remove(book);
      display();
    });
    return del;
  }
            
    bookContainer.appendChild(deleteButton());
    libraryDisplay.appendChild(bookContainer);
    
    overlay.classList.remove("active");
    fieldset.classList.remove("active");
  }
}
  
addBookButton.onclick=()=>{
  fieldset.classList.add("active");
  overlay.classList.add("active");
}
overlay.onclick=()=>{
  overlay.classList.remove("active");
  fieldset.classList.remove("active");
  
}
buttonAdd.addEventListener('click',()=>{
  library.addBook();
});
  
