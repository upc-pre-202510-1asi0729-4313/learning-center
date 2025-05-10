import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Course} from '../model/course.entity';
import {environment} from '../../../environments/environment';

const coursesResourceEndpointPath = environment.coursesEndpoint;
@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService<Course>{

  constructor() {
    super();
    this.resourceEndpoint = coursesResourceEndpointPath;
  }
}
