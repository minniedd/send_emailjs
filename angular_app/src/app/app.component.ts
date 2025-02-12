import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {

  form: FormGroup = this.fb.group({
    from_name:'',
    to_name:'Admin',
    from_email:'',
    subject:'',
    message:''
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('eiyZr7AbrDwZvHU1N');
    let response = await emailjs.send("service_f38xqj4","template_lkw1asq",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
});
    alert("Message has been sent!");
    this.form.reset();
  }
}
