$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText)
        e.preventDefault()
    })
})

function getMovies(searchText) {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count='+searchText)
        .then((response) => {
            console.log(response)
            let quotes = response.data;
            let output = '';
            $.each(quotes, (index, quote) => {
                output += 
                    `<div class="col-4 p-4">
                        <div class="well text-left">
                            <img src=${quote.image}>
                            <p class="resQuote pt-4">${quote.quote}</p>
                            <cite class="text-right">${quote.character}</cite>
                        </div>
                    </div>`
                    $('.loader').hide()
            })
            $('#quotes').html(output)
        })
        .catch((err) => {
            console.log(err)
        })
}

            // $.each(quotes, (index, quote) => {
            //     output += 
            //         `<div class="col-4 p-4">
            //             <div class="well text-left">
            //                 <img src=${quote.image}>
            //                 <p class="resQuote pt-4">${quote.quote}</p>
            //                 <cite class="text-right">${quote.character}</cite>
            //             </div>
            //         </div>`
            // })
 



    
// let output = '';
// $.each(quotes, (index, quote) => {
//     output += 
//         `<div class="col-4 p-4">
//             <div class="well text-left">
//                 <img src=${quote.image}>
//                 <p class="resQuote pt-4">${quote.quote}</p>
//                 <cite class="text-right">${quote.character}</cite>
//             </div>
//         </div>`

    //  if(output == '') {
    //     output = `<img src='img/homer.png' />`
    //  } else {
    //     output = `<div class="col-4 p-4">
    //     <div class="well text-left">
    //         <img src=${quote.image}>
    //         <p class="resQuote pt-4">${quote.quote}</p>
    //         <cite class="text-right">${quote.character}</cite>
    //     </div>
    // </div>`
    //  }
     
 