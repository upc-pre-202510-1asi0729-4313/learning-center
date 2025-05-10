import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Course} from '../../model/course.entity';
import {FormsModule, NgForm} from '@angular/forms';
import {BaseFormComponent} from '../../../shared/components/base-form/base-form.component';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-course-create-and-edit',
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './course-create-and-edit.component.html',
  styleUrl: './course-create-and-edit.component.css'
})
export class CourseCreateAndEditComponent extends BaseFormComponent {

  @Input() course!: Course;
  @Input() editMode: boolean = false;
  @Output() protected courseAddRequested = new EventEmitter<Course>();
  @Output() protected courseUpdateRequested = new EventEmitter<Course>();
  @Output() protected cancelRequested = new EventEmitter<void>();

  /** Reference to the course form */
  @ViewChild('courseForm', { static: false }) protected courseForm!: NgForm;

  constructor() {
    super();
    this.course = new Course({});
  }

  protected isValid = (): boolean | null => this.courseForm.valid;

  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid()) {
      let emitter = this.isEditMode() ? this.courseUpdateRequested : this.courseAddRequested;
      emitter.emit(this.course);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }

  private resetEditState() {
    this.course = new Course({});
    this.editMode = false;
    this.courseForm.reset();
  }
}
