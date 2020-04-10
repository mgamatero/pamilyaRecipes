import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipesPageComponent } from './add-recipes-page.component';

describe('AddRecipesPageComponent', () => {
  let component: AddRecipesPageComponent;
  let fixture: ComponentFixture<AddRecipesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
