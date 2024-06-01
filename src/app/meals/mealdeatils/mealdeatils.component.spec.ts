import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealdeatilsComponent } from './mealdeatils.component';

describe('MealdeatilsComponent', () => {
  let component: MealdeatilsComponent;
  let fixture: ComponentFixture<MealdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealdeatilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
