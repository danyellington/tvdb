import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TMDB_API } from './../../services/api/tmdb.service';

@Component({
	selector: 'app-movie-detail-page',
	templateUrl: './movie-detail-page.component.html',
	styleUrls: ['./movie-detail-page.component.css'],
	providers: [TMDB_API]
})

export class MovieDetailComponent implements OnInit {

	public href: string = "";
	public id: string="";
	public content;
	public actor;
	public similar;
	public video;

	constructor(private router: Router, private tmdb_api: TMDB_API) { }

	ngOnInit() {
		this.href = this.router.url;

		 this.tmdb_api.getMovieById(this.href.substr(7, 12)).subscribe(response => {
			this.content = response.json();
			console.log(this.href.substr(7, 12))
			});
		this.tmdb_api.getActors(this.href.substr(1, 12)).subscribe(response => {
		 this.actor = response.json();
		 });
		 this.tmdb_api.getSimilar(this.href.substr(1, 12)).subscribe(response => {
			this.similar = response.json();
			});
		this.tmdb_api.getVideos(this.href.substr(1, 12)).subscribe(response => {
		 this.video = response.json();
		 });
	}

}
