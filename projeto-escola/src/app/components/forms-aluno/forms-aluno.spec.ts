import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAluno } from './forms-aluno';

describe('FormsAluno', () => {
  let component: FormsAluno;
  let fixture: ComponentFixture<FormsAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsAluno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
