import Book from '../model/BooksModel'
class BooksController {
    async getBookList(ctx) {
        ctx.body = await Book.getAllBooks()
    }

    async addBook(ctx) {
        const book = ctx.request.body
        ctx.body = await Book.addBook(book)
    }

    async editBook(ctx) {
        const id = ctx.params.id
        const book = ctx.request.body
        ctx.body = await Book.updateBook(id, book)
    }

    async deleteBook(ctx) {
        const id = ctx.params.id
        ctx.body = await Book.deleteBook(id)
    }
}
export default new BooksController()