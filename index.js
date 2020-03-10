document.addEventListener('DOMContentLoaded', function() {

    function renderMovies(movieData) {

        var moviesHTML = movieData.map(function (currentMovie) {

        return `
            <div class="card">
                <img class="card-img-top img-fluid" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title d-inline mr-3">${currentMovie.Title}</h4>
                    <p class="card-text d-inline bg-secondary text-white" style="text-align: right">${currentMovie.Year}</p>
                    <br>
                    <button type="button" class="btn btn-primary ml-1 mb-1 mt-3" style="text-align: left">Add!</button>
                </div>
            </div>
       
        `
        });

            console.log(moviesHTML)
            return moviesHTML.join('');
        }
        document.getElementById('card').innerHTML = renderMovies(movieData);  
    }
);
