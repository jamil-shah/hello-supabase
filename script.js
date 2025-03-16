import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

    const supabaseUrl = 'https://fnrapfezddtmwmtwrwvj.supabase.co'
    
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucmFwZmV6ZGR0bXdtdHdyd3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNjI0NTUsImV4cCI6MjA1NzczODQ1NX0.h5x34EMbGNj-Q9j-gafFsyfZHpASpPwEDvWowYwvtEI'
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    async function getBooks() {
      let { data: books, error } = await supabase
        .from('books')
        .select('*')
      let bookList = document.getElementById('books');
      
      for (let book of books) {
         bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
       }
    }
    
    getBooks();