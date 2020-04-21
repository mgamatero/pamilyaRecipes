import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteEditonlyRecipesPageComponent } from './edit-delete-editonly-recipes-page.component';

describe('EditDeleteEditonlyRecipesPageComponent', () => {
  let component: EditDeleteEditonlyRecipesPageComponent;
  let fixture: ComponentFixture<EditDeleteEditonlyRecipesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteEditonlyRecipesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteEditonlyRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
