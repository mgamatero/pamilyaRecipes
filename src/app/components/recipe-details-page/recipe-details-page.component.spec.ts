import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsPageComponent } from './recipe-details-page.component';

describe('RecipeDetailsPageComponent', () => {
  let component: RecipeDetailsPageComponent;
  let fixture: ComponentFixture<RecipeDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
