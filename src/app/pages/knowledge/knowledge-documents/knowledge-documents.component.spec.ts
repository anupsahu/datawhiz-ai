import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDocumentsComponent } from './knowledge-documents.component';

describe('KnowledgeDocumentsComponent', () => {
  let component: KnowledgeDocumentsComponent;
  let fixture: ComponentFixture<KnowledgeDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeDocumentsComponent]
    });
    fixture = TestBed.createComponent(KnowledgeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
