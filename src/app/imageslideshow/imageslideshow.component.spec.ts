import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageslideshowComponent } from './imageslideshow.component';

describe('ImageslideshowComponent', () => {
  let component: ImageslideshowComponent;
  let fixture: ComponentFixture<ImageslideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageslideshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageslideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
