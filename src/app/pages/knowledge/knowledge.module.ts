import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KnowledgeComponent } from './knowledge.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from '../../_metronic/shared/shared.module';
import { KnowledgeVideosComponent } from './knowledge-videos/knowledge-videos.component';
import { KnowledgeDocumentsComponent } from './knowledge-documents/knowledge-documents.component';
import { KnowledgeQuizzesComponent } from './knowledge-quizzes/knowledge-quizzes.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';

@NgModule({
  declarations: [
    KnowledgeComponent,
    KnowledgeVideosComponent,
    KnowledgeDocumentsComponent,
    KnowledgeQuizzesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardsModule,
    InlineSVGModule,
    NgbTooltipModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: KnowledgeComponent,
      },
    ]),
  ],
})
export class KnowledgeModule {}
