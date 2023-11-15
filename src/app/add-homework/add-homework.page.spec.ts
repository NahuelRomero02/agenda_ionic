import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddHomeworkPage } from './add-homework.page';

describe('AddHomeworkPage', () => {
  let component: AddHomeworkPage;
  let fixture: ComponentFixture<AddHomeworkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddHomeworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
