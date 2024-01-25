import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeQuizzesComponent } from './knowledge-quizzes.component';

describe('KnowledgeQuizzesComponent', () => {
  let component: KnowledgeQuizzesComponent;
  let fixture: ComponentFixture<KnowledgeQuizzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeQuizzesComponent]
    });
    fixture = TestBed.createComponent(KnowledgeQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
