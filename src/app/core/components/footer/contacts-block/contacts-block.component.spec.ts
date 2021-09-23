import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsBlockComponent } from './contacts-block.component';

describe('ContactsBlockComponent', () => {
  let component: ContactsBlockComponent;
  let fixture: ComponentFixture<ContactsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
