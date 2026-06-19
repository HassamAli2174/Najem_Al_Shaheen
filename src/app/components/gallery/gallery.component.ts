import { Component } from '@angular/core';

interface ShopPhoto {
  src: string;
  alt: string;
  tag: string;
  size: 'lg' | 'sm';
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  photos: ShopPhoto[] = [
    { src: 'assets/images/shop-stator-team.jpg', alt: 'Technicians hand-rewinding copper coils into a large motor stator', tag: 'Motor Rewinding', size: 'lg' },
    { src: 'assets/images/shop-lathe-rewind.jpg', alt: 'Heavy rotor mounted on a lathe for rewinding work', tag: 'Lathe Work', size: 'lg' },
    { src: 'assets/images/shop-rotor.jpg', alt: 'Rewound motor rotor with copper windings', tag: 'Rotor Service', size: 'sm' },
    { src: 'assets/images/shop-motor-blue.jpg', alt: 'Serviced AC motor ready for dispatch', tag: 'AC Motors', size: 'sm' },
    { src: 'assets/images/shop-alternator.jpg', alt: 'Generator alternator under maintenance', tag: 'Generators', size: 'sm' },
    { src: 'assets/images/shop-panel-1.jpg', alt: 'Electrical control panel repair', tag: 'Panel Repair', size: 'sm' },
    { src: 'assets/images/shop-panel-2.jpg', alt: 'Industrial electrical panel installation', tag: 'Panel Install', size: 'sm' },
    { src: 'assets/images/shop-casting.jpg', alt: 'Armature and casting work in the fabrication shop', tag: 'Casting', size: 'sm' },
  ];
}
