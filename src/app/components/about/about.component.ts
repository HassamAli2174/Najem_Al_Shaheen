import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats: Stat[] = [
    { value: '6+', label: 'Core service lines, electrical to fabrication' },
    { value: '2', label: 'Direct lines for breakdown call-outs' },
    { value: 'A-Z', label: 'From rewinding to on-site installation' },
  ];
}
