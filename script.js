const library = [];
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







console.log('sup mate?')
console.log('');





function Book(title, author, numberOfPages, isRead) {
  this.title=title;
  this.author=author;
  this.numberOfPages=numberOfPages;
  this.isRead=isRead;
  this.isReadString=isReadString();
  
}

function isReadString(){
  if(this.isRead){
    return "already read";
  }else{
    return "not read yet";
  }
}

function addBookToLibrary() {
  if(!library.some((book)=>book.title==title.value)){
    bookToAdd=new Book(
      title.value,
      author.value,
      numberOfPages.value,
      isRead.checked
      );
      library.push(bookToAdd);
      display();
      return;
    }
    alert("a book of the same name already exists");
  }
  
  
  function toggleRead(book){
    for(b in library){
      if(book==library[b]){
        if(library[b].isRead==true){
          library[b].isRead=false;
          return;
        }else{
          library[b].isRead=true;
          return;
        } 
        
      }
    }
  }
  
  function checkIfRead(name){
    for(b in library){
      if(name==library[b].title){
        console.log(library[b].isRead);
      }
    }
  }
  
  
  function remove(book){
    for(b in library){
      if(book==library[b]) library.pop(b);
    }
    
  }
  
  function getBook(title){
    for(b in library){
      if(title==library[b].title) return library[b];
    }
  }
  
  function isReadString(boolean){
    if(boolean){
      return "already read";
    }
    return "not read yet";
  }
  
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
      
      
      bookIsReadText.innerHTML=isReadString(library[stuff].isRead);
      
      
      
      bookContainer.append(bookTitle,bookAuthor,bookNumberOfPages,bookIsRead);
      
      let sliderIsRead=document.createElement("label");
      sliderIsRead.classList.add("switch");
      let checkBox=document.createElement("input");
      checkBox.setAttribute("type","checkbox");
      if(library[stuff].isRead){
        checkBox.setAttribute("checked","")
      }
      let span=document.createElement("span");
      span.classList.add("slider");
      sliderIsRead.appendChild(checkBox);
      sliderIsRead.appendChild(span);
      
      
      
      document.onclick=()=>console.log(library[0]);
      
      checkBox.onclick=()=>{
        let title=checkBox.parentNode.parentNode.parentNode.querySelector(".title").innerHTML;
        let book=getBook(title);
        toggleRead(book);
        sliderIsRead.parentNode.parentNode.querySelector(".bookIsReadText").textContent=isReadString(book.isRead);
      }
      
      bookIsRead.appendChild(bookIsReadText)
      bookIsRead.appendChild(sliderIsRead);
      
      
      /*The button you have to press to delete a book */
      let deleteButton=document.createElement("button");
      deleteButton.classList.add("deleteButton");
      let bin=document.createElement("img");
      bin.src="./resources/bin.png"
      deleteButton.appendChild(bin);
      deleteButton.addEventListener('click',()=>{
        let title=deleteButton.parentNode.querySelector(".title").innerHTML;
        let book=getBook(title);
        remove(book);
        display();
      });
      
      
      
      
      bookContainer.appendChild(deleteButton);
      
      
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
    addBookToLibrary();
  });
  