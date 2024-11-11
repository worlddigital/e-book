function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book');
    
    books.forEach(book => {
        const title = book.querySelector('h2').textContent.toLowerCase();
        const description = book.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchInput) || description.includes(searchInput)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}