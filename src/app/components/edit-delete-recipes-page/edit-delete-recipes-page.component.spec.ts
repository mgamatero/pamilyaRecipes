import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteRecipesPageComponent } from './edit-delete-recipes-page.component';

describe('EditDeleteRecipesPageComponent', () => {
  let component: EditDeleteRecipesPageComponent;
  let fixture: ComponentFixture<EditDeleteRecipesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteRecipesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
