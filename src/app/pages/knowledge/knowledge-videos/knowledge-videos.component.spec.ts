import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeVideosComponent } from './knowledge-videos.component';

describe('KnowledgeVideosComponent', () => {
  let component: KnowledgeVideosComponent;
  let fixture: ComponentFixture<KnowledgeVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowledgeVideosComponent]
    });
    fixture = TestBed.createComponent(KnowledgeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
