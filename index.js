document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books))
    .catch(error => console.error("Error fetching books:", error));
}
function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // Check if the function is running inside a test environment
  const isTestEnv = typeof module !== "undefined" && module.exports;

  if (!bookList) {
    if (!isTestEnv) {
      console.error("Element #book-list not found in DOM!");
    }
    return;
  }

  books.forEach(book => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}
