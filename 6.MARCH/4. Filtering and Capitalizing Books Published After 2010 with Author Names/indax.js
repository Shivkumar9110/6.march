

// Creating the books details:-
        const books=[
            {'title':"javascript",'author':"BrendanEich",'publics_book':2015},
            {'title':"html",'author':"zxw",'publics_book':2014},
            {'title':"css",'author':"stvw",'publics_book':1155},
            {'title':"hindi",'author':"pqr",'publics_book':2045},
            {'title':"ruby",'author':"ghi",'publics_book':2002},
            {'title':"english",'author':"sss",'publics_book':2000},
            {'title':"methali",'author':"df",'publics_book':2018},
            {'title':"python",'author':" ee",'publics_book':2024},
        ];

         function bookcapandfil(book){
            // filter the bokk publication before 2010.
            let filterBook=book.filter(items=>items.publics_book<2010);
            // Captilization author name.
          
            // filterBook.forEach( book=> {
            //     book.author=book.author.toUpperCase();
            // });
            filterBook.map(book=>{
                book.author=book.author.toUpperCase();
            })

            return filterBook;
         }
       
        // function call.
        let newBook=bookcapandfil(books)
        // console.log(newBook)

        // Print the results:-
        newBook.map(items=>{
            console.log(`'title':${items.title},'author':${items.author},'puclication:${items.publics_book}`)
        })

