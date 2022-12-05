function getBook(bookAuthorText, bookImageLinkSrc, bookTitleText, bookPriceText, bookDescriptionText) {
  let book = document.createElement("div");
  book.className = "book";

  let bookAuthor = document.createElement("div");
  bookAuthor.className = "book_author";
  bookAuthor.innerText = bookAuthorText;
  book.appendChild(bookAuthor);

  let bookImageLink = document.createElement("img");
  bookImageLink.className = "book_imageLink";
  bookImageLink.src = bookImageLinkSrc;
  book.appendChild(bookImageLink);

  let bookTitle = document.createElement("div");
  bookTitle.className = "book_title";
  bookTitle.innerText = bookTitleText;
  book.appendChild(bookTitle);

  let bookPrice = document.createElement("div");
  bookPrice.className = "book_price";
  bookPrice.innerText = bookPriceText;
  bookPrice.textContent = "Price: " + bookPriceText + "$";
  book.appendChild(bookPrice);

  let btn = document.createElement("button");
  btn.className = "btn_show";
  btn.textContent = "Show more";
  btn.dataset.target = "#modal";
  btn.addEventListener('click', (element) => {
    openModal(bookTitleText, bookDescriptionText)
  })
  book.appendChild(btn);


  let btn_Add = document.createElement("button");
  btn_Add.className = "btn_show";
  btn_Add.textContent = "Add to bag";
  book.appendChild(btn_Add);

  return book;
}

async function getResponse() {
  let response = await fetch('books.json');
  let listOfBooks = await response.json();
  return listOfBooks;
}

getResponse()
  .then(booksList => {
      booksList.forEach(function (book) {
      let bookHtml = getBook(book.author, book.imageLink, book.title, book.price, book.description);
      document.getElementById("books_list").appendChild(bookHtml);
    });
  });


let body = document.querySelector('body');

let header = document.createElement("header");
header.className = "header";

let container = document.createElement("div");
container.className = "container";

let row = document.createElement("div");
row.className = "row vertical-align-center";
container.appendChild(row);

let column = document.createElement("div");
column.className = "column-1";
row.appendChild(column);

let img = document.createElement("img");
img.className = "logo";
img.src = "../../assets/icons/logo.png";
column.append(img);

let column9 = document.createElement("div");
column9.className = "column-9";
row.appendChild(column9);

let nav = document.createElement("nav");
nav.className = "menu";
column9.appendChild(nav);

let ul = document.createElement("ul");
ul.className = "menu__ul";
nav.appendChild(ul);

let li = document.createElement("li");
li.className = "menu__li";
li.textContent = "Book Catalog";
ul.append(li);

let column2 = document.createElement("div");
column2.className = "column-2";
row.appendChild(column2);


let imgCartbutton = document.createElement("img");
imgCartbutton.className = "cart";
imgCartbutton.src = "../../assets/icons/shopping-cart.svg";
column2.appendChild(imgCartbutton);

header.appendChild(container);

body.appendChild(header);




/**
 * main
 */
container = document.createElement("div");
container.className = "container";

let main = document.createElement("main");
main.className = "main";

main.appendChild(container);

let rowMain = document.createElement("div");
rowMain.className = "row";
container.appendChild(rowMain);

let column6First = document.createElement("div");
column6First.className = "column-6";
rowMain.appendChild(column6First);


let listOfBooks = document.createElement("div");
listOfBooks.id = "books_list";
column6First.appendChild(listOfBooks);

let column6Second = document.createElement("div");
column6Second.className = "column-6";
rowMain.appendChild(column6Second);

/**
 * modal
 */

let mod = document.createElement("div");
mod.id = "modal";
mod.className = "modal";
column6First.append(mod);

let mod_header = document.createElement("div");
mod_header.className = "modal_header";
mod.appendChild(mod_header);

let titleOfBook = document.createElement("div");
titleOfBook.className = "title";
titleOfBook.id = "title";
mod_header.append(titleOfBook);

let btn_close = document.createElement("button");
btn_close.className = "close_button";
btn_close.textContent = "X";
mod_header.append(btn_close);

let mod_body = document.createElement("div");
mod_body.className = "modal_body";
mod_body.id = "description";
mod_header.append(mod_body);

let over = document.createElement("div");
over.id = "overlay";
column6First.append(over);

body.appendChild(main);


/**
 * footer
 */
container = document.createElement("div");
container.className = "container";

let footer = document.createElement("footer");
footer.className = "footer";

footer.appendChild(container);



let div = document.createElement("div");
div.className = "designed";
footer.appendChild(div);

let designed = document.getElementsByClassName("designed");
let p = document.createElement("p");
p.textContent = "Marina Yurkevich";
div.append(p);

body.appendChild(footer);





/**
 * PopUp
 */
let closeModalButton = document.querySelector('.close_button');
let modal = document.getElementById('modal')
let overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
  closeModal()
})

closeModalButton.addEventListener('click', () => {
  closeModal()
})

function openModal(bookTitleText, bookDescriptionText) {
  modal.classList.add('active')
  overlay.classList.add('active')
  document.getElementById('title').innerText = bookTitleText
  document.getElementById('description').innerText = bookDescriptionText
}

function closeModal() {
  modal.classList.remove('active')
  overlay.classList.remove('active')
}