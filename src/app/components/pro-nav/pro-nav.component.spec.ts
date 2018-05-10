
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProNavComponent } from './pro-nav.component';

describe('ProNavComponent', () => {
  let component: ProNavComponent;
  let fixture: ComponentFixture<ProNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
