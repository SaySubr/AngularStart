import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
 showBio = true;
  aboutForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.aboutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.aboutForm.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', this.aboutForm.value) //заглушка
        .subscribe({
          next: (res) => { alert('Форма успешно отправлена!'); this.aboutForm.reset(); },
          error: () => alert('Ошибка отправки формы')
        });
    }
  }
}
