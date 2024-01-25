import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from '../../_metronic/layout';

type Tabs = 'Videos' | 'Documents' | 'Quizzes';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
})
export class KnowledgeComponent implements OnInit {
  activeTab: Tabs = 'Videos';
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(
      this.layout.getBaseLayoutTypeFromLocalStorage()
    );
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.resetBaseConfig();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.saveBaseConfig(this.model); // it will refresh the page
  }
}
