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
                output += `
                    <div class="col-md-3>
                        <div class="well text-center">
                            <h5>${quote.quote}</h5>
                            <img src=${quote.image}>
                        </div>
                    </div>
                `;
            })
            $('#quotes').html(output)
        })
        .catch((err) => {
            console.log(err)
        })
}
 

 