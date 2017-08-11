import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRepositoryComponent } from './component-repository.component';

describe('ComponentRepositoryComponent', () => {
  let component: ComponentRepositoryComponent;
  let fixture: ComponentFixture<ComponentRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
