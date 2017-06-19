import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGridListComponent } from './portfolio-grid-list.component';

describe('PortfolioGridListComponent', () => {
  let component: PortfolioGridListComponent;
  let fixture: ComponentFixture<PortfolioGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
