// let newBookButton = document.getElementById("newBookBtn");
let newBookForm = document.getElementById("newBookForm");
let submitBtn = document.getElementById("submitBtn");
let body = document.querySelector("body");
let bookCardZone = document.getElementById("bookCards");
let readValue;
const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 259,
        read: true,
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 147,
        read: true,
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        pages: 233,
        read: true,
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        pages: 350,
        read: false,
    },
    {
        title: "Divergent",
        author: "Veronica Roth",
        pages: 175,
        read: true,
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    // };
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let bTitle = document.getElementById("bookTitle");
    let bAuthor = document.getElementById("bookAuthor");
    let bPages = document.getElementById("bookPages");
    let bRead = document.getElementById("bookRead").classList.value;
    let newBook = new Book(bTitle.value, bAuthor.value, bPages.value, bRead);
    addNewBookToPage(newBook);
});

let readBtn = document.getElementById("bookRead");
readBtn.addEventListener("click", () => {
    console.log(readBtn.classList);
    if (readBtn.classList.contains("read")) {
        readBtn.classList.remove("read");
        readBtn.classList.add("unread");
        readValue = false;
    } else {
        readBtn.classList.remove("unread");
        readBtn.classList.add("read");
        readValue = true;
    }
});

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

// addBookToLibrary();
console.log(myLibrary);

function addToPage(book) {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        let newDiv = document.createElement("div");
        newDiv.classList.add("container");
        // console.log(book.read);
        let readStatus = "unread";
        if (book.read == false) {
            readStatus = "unread";
        } else {
            readStatus = "read";
        }
        newDiv.innerHTML = `<p class="cardTitle">${book.title}</p>
                <p class="cardAuthor">${book.author}</p>
                <div class="cardPagesRead">
                <p class="cardPages">Pages: ${book.pages}</p>   
                <button class="cardRead ${readStatus}">Read</button>
                </div>     
                <button class="deleteBook"></button>`;
        bookCardZone.appendChild(newDiv);
    }
    let deleteBtn = document.querySelectorAll(".deleteBook");
    for (let i = 0; i < deleteBtn.length; i++) {
        const btn = deleteBtn[i];
        btn.addEventListener("click", () => {
            console.log("deleteButton clicked");
            deleteCard(btn);
        });
    }
    let readBtns = document.querySelectorAll(".cardRead");
    for (let i = 0; i < readBtns.length; i++) {
        let btn = readBtns[i];
        btn.addEventListener("click", () => {
            // console.log("change Read Status clicked");
            console.log("change Read Status clicked");

            if (btn.classList.contains("read")) {
                btn.classList.remove("read");
                btn.classList.add("unread");
                console.log("Added unread");
            } else {
                btn.classList.remove("unread");
                btn.classList.add("read");
                console.log("Added read");
            }
        });
    }
}
addToPage();

function addNewBookToPage(book) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("container");

    newDiv.innerHTML = `<p class="cardTitle">${book.title}</p>
            <p class="cardAuthor">${book.author}</p>
            <div class="cardPagesRead">
            <p class="cardPages">Pages: ${book.pages}</p>            
            <button class="cardRead ${book.read}">Read</button>  
            </div>
            <button class="deleteBook"></button>`;
    bookCardZone.appendChild(newDiv);
    let deleteBtn = document.querySelectorAll(".deleteBook");
    for (let i = 0; i < deleteBtn.length; i++) {
        const btn = deleteBtn[i];
        btn.addEventListener("click", () => {
            console.log("deleteButton clicked");
            deleteCard(btn);
        });
    }
}

function deleteCard(button) {
    button.parentElement.remove();
}
