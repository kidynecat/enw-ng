import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictindexComponent } from './dictindex.component';

describe('DictindexComponent', () => {
  let component: DictindexComponent;
  let fixture: ComponentFixture<DictindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
