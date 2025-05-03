import { Component } from '@angular/core';
import { ImageslideshowComponent } from '../imageslideshow/imageslideshow.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-main',
    imports: [ImageslideshowComponent, RouterLink],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {

}
