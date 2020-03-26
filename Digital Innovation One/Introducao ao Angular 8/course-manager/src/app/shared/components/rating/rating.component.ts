import { Component, OnChanges, Input } from '@angular/core';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {

	@Input()
	rating: number = 0;

	ratingWidth: number;

	ngOnChanges(): void {
		this.ratingWidth = this.rating * 74 / 5;
	}

}
