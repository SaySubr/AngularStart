import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showBio = true;
  aboutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.aboutForm = this.fb.group({
      name: ['', Validators.required],              
      email: ['', [Validators.required, Validators.email]],
      age: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.aboutForm.valid) {
      console.log('Форма отправлена:', this.aboutForm.value);
      alert('Форма успешно отправлена!');
      this.aboutForm.reset();
    }
  }
}
