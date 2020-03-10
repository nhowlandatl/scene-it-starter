document.addEventListener('DOMContentLoaded', function() {

    function saveToWatchlist(imdbID) {
        
    } 

    function renderMovies(movieData) {

        var moviesHTML = movieData.map(function (currentMovie) {

        return `
            <div class="card">
                <img class="card-img-top img-fluid" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-block text-center">
                    <h4 class="card-title">${currentMovie.Title}</h4>

                    <p class="card-text bg-secondary text-white mx-auto" style="width: 3rem">${currentMovie.Year}</p>
                    
                    <button onclick="saveToWatchlist('${currentMovie.imdbID}')" type="button" class="btn btn-primary ml-1 mb-1 mt-1">
                        Add!
                    </button>
                </div>
            </div>
        `
        });
            return moviesHTML.join('');
        }
    
        document.getElementById('search-form').addEventListener('submit', function(e){
            e.preventDefault();
            document.getElementById('card').innerHTML = renderMovies(movieData); 
        });
    }
);
