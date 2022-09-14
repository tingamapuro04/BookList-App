// Book object
class Book {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category
  }
}

// Storage class

// UI class
class UI {
  static displaybooks () {
    const locBooks =  [
      {
        title: 'River Between',
        author: 'Wanaina',
        category: 'old folks'
      },
      {
        title: 'River Beyond',
        author: 'Esther',
        category: 'Comedy'
      }
    ]
    const books = locBooks
    books.forEach(book => UI.addbooktolist(book))
  }

  static addbooktolist(book) {
    const unordered = document.querySelector('#unordered')
    const listItem = document.createElement('li')
    listItem.className = 'singleItem'
    listItem.innerHTML = `
      <div class="item">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.category}</p>
        <button>X</button>
      </div>
    `

    unordered.appendChild(listItem)
  }
}

// Event to display Book
document.addEventListener('DOMContentLoaded', UI.displaybooks)

// Event: Add a Book

// Event: Remove a book