import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyChainComponent } from './key-chain.component';

describe('KeyChainComponent', () => {
  let component: KeyChainComponent;
  let fixture: ComponentFixture<KeyChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyChainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
