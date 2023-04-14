import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFullstoryMetatagsComponent } from './mod-fullstory-metatags.component';

describe('ModFullstoryMetatagsComponent', () => {
  let component: ModFullstoryMetatagsComponent;
  let fixture: ComponentFixture<ModFullstoryMetatagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModFullstoryMetatagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModFullstoryMetatagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
