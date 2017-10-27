class BookStore {
    
      constructor() {
        this._books = [
          { id: 1,title: "How to Learn JavaScript - Vol 1", info: "Study hard"},
          { id: 2,title: "How to Learn ES6", info: "Complete all exercises :-)"},
          { id: 3,title: "How to Learn React",info: "Complete all your CA's"},
          { id: 4,title: "Learn JavaScript, React and MobX",info: "Don't drink beers, until Friday (after four)"
          }
        ]
        this._nextID= 5;
      }
      get books(){
        return this._books;
      }
      addBook(book){
        book.id = this._nextID;
        console.log(this._nextID);
        this._books.push(book);
        this._nextID=this._nextID+1;
      }

      deleteBook(id){
       for(let i = 0; i < this._books.length; i++){
         if(this._books[i].id == id){
          this._books.splice(i,1);
          return 'id removed'
         }
       }
       return 'id '+id+' not found'
      }

      editBook(book){
        for(let i = 0; i < this._books.length; i++){
          if(this._books[i].id == book.id){
            this._books[i].title = book.title;
            this._books[i].info = book.info;
           return 'id edited'
          }
        }
        return 'id '+book.id+' not found'
      }

    }

    let bookStore = new BookStore();

    export default bookStore;