import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEduComponent } from './modelo-edu.component';

describe('ModeloEduComponent', () => {
  let component: ModeloEduComponent;
  let fixture: ComponentFixture<ModeloEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
