import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomeComponent } from './section-home.component';
import { HttpClientModule } from '@angular/common/http';

describe('SectionHomeComponent', () => {
  let component: SectionHomeComponent;
  let fixture: ComponentFixture<SectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHomeComponent ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
