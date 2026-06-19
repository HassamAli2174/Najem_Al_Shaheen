import { Component, signal } from '@angular/core';

interface ServiceGroup {
  id: string;
  code: string;
  title: string;
  items: string[];
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  activeGroup = signal<string>('electrical');

  groups: ServiceGroup[] = [
    {
      id: 'electrical',
      code: 'EL',
      title: 'Electrical Scope',
      items: [
        'Rewinding of AC/DC and all kinds of heavy duty motors',
        'Generators, transformers and compressors',
        'Transformer switch service',
        'Panel board installation',
        'Split & central A/C unit installation and maintenance (compressor and chiller overhaul)',
        'Sewage pumps & HVAC maintenance',
        'Electrical panels — M.D.B, M.C.C and DDC',
      ]
    },
    {
      id: 'fabrication',
      code: 'FB',
      title: 'Fabrication & Mechanical Scope',
      items: [
        'Lathe machine work',
        'Milling machine work',
        'Drilling machine work',
        'Grinding machine work',
        'Hydraulic press machine work',
        'Bending & cutting machine work',
        'Shaper and planer machine work',
        'Power hacksaw machine work',
        'Molding & casting work',
        'All types of welding work',
      ]
    },
    {
      id: 'heavy',
      code: 'HD',
      title: 'Heavy-Duty Machinery',
      items: [
        'Generator engine overhauling, alternator service and rewinding',
        'Crane and heavy truck repair and maintenance',
        'Concrete mixer drum repair and maintenance',
        'Floor grinder machines & heavy-duty vacuums repair and maintenance',
        'All kinds of fabrication work',
        'All kinds of industrial equipment repair and maintenance',
      ]
    }
  ];

  setActive(id: string) {
    this.activeGroup.set(id);
  }

  get activeItems(): string[] {
    return this.groups.find(g => g.id === this.activeGroup())?.items ?? [];
  }
}
