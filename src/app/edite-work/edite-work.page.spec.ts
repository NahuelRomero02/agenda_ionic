import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditeWorkPage } from './edite-work.page';

describe('EditeWorkPage', () => {
  let component: EditeWorkPage;
  let fixture: ComponentFixture<EditeWorkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditeWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
