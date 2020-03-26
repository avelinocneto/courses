import { NgModule } from "@angular/core";
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingModule } from '../shared/components/rating/rating.module';
import { AppPipeModule } from '../shared/pipes/app-pipe.module';

@NgModule({
	declarations: [
		CourseListComponent,
		CourseInfoComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RatingModule,
		AppPipeModule,
		RouterModule.forChild([
			{
				path: 'courses',
				component: CourseListComponent
			},
			{
				path: 'courses/info/:id',
				component: CourseInfoComponent
			},
		])
	]
})
export class CourseModule {

}
