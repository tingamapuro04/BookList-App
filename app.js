// Book object
class Person {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
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
    books.forEach(book => UI.addpersontolist(book))
  }

  static addpersontolist(book) {
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



const form = document.querySelector('#mobutu')
const weka = (e) => {
  e.preventDefault()
  let name1 = document.getElementById('name').value
  let author = document.getElementById('author').value

  // instantiate a person
  const person = new Person(name1, author)
  UI.addpersontolist(person)
  form.reset()
}
form.addEventListener('submit', weka)


// Event: Remove a book