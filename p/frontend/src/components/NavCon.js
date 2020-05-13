import React, { Component } from 'react';
import axios from "axios";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class NavCon extends Component{

    constructor(props) {
        super(props);
         this.state = {
          searchText : ''
         }
      };

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    getMovies(){
        var searchText = this.state.searchText;
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=780570eec890002039fdc834874f3729&query=' + searchText)
        .then((response)=>{
            console.log(response);
            let movies = response.data.results;
            let output = ' ';
            window.$.each(movies, (index, movie) => {
                output += `
                <div class = "col-md-3">
                    <div class = "well text-center">
                        <img src = "https://image.tmdb.org/t/p/w200/${movie.poster_path}">
                        <h5>${movie.title}</h5>
                        <h7>${movie.vote_average}</h7>
                        <h6>(</h6>
                        <a href="https://www.themoviedb.org/movie/${movie.id}-${movie.title}/reviews"><h6>${movie.vote_count}</h6></a>
                        <h6>)</h6>
                        <a onclick = "movieSelected('${movie.id}')" class = "btn btn-primary" href = "#">Movie Details</a>
                    </div>
                </div>
                `;
            });
            window.$('#movies').html(output);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    movieSelected(id){
        sessionStorage.setItem('movieId', id);
        window.location.href = 'movie'
        return false;
    }

    render(){
      return(
        <div className="ou">

            <nav className ="navbar navbar-default">
                <div className = "container">	 
                    <div className = "navbar-header">
				        <a className ="navbar-brand" href = " ">MovieInfo</a>
			        </div>
		        </div>	 
	        </nav>

            <div className = "container">
                <div className ="jumbotron">	 
                    <h3 className = "text-center"> Search For Any Movie</h3>
                        <form id = "searchForm">
				            <input type = "text" onChange = {this.handleChange.bind(this)} className = "form-control" id = "searchText" placeholder="Search Movie..."/>
                            <button  onClick = {function(e){
                                this.getMovies();
                                e.preventDefault();
                            }.bind(this)}></button>
			            </form>
		        </div>
	        </div>

            <div className = "container">
                <div id ="movies" className="row"></div>
            </div>

            

            {/* <script
                src="https://code.jquery.com/jquery-3.4.1.min.js"
                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                crossOrigin="anonymous">
            </script>
	        <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}
	        

        </div>
      )
    }
  
}
  export default NavCon;