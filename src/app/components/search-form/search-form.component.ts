import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TMDB_API } from './../../services/api/tmdb.service';

@Component({
	selector: 'app-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.css'],
	providers: [TMDB_API]
})

export class SearchFormComponent implements OnInit {

	movies: any[] = null;
	public query: string;

	constructor(private tmdb_api: TMDB_API) { }

	getSearchResults(query: string, adultContent: string) {
		this.tmdb_api.getMultiSearch(query, adultContent).subscribe(response => {
			this.movies = response.json();
		});

	}


	ngOnInit() {
	}

}
