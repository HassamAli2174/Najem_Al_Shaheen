import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  phone = '';
  message = '';
  submitted = signal(false);

  submit() {
    // No backend wired yet — opens a pre-filled WhatsApp chat as the
    // fastest path to a real conversation for this kind of business.
    const text = encodeURIComponent(
      `Hello Najem Al Shaheen,\n\nName: ${this.name}\nPhone: ${this.phone}\n\n${this.message}`
    );
    window.open(`https://wa.me/971559199148?text=${text}`, '_blank');
    this.submitted.set(true);
  }
}
