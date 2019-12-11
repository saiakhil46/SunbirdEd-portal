import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ConnectionService } from '../../services';
import { ElectronDialogService } from './../../services';
import { ResourceService } from '@sunbird/shared';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-load-content',
  templateUrl: './load-content.component.html',
  styleUrls: ['./load-content.component.scss']
})
export class LoadContentComponent implements OnInit {
  @ViewChild('modal') modal;
  isConnected;
  selectedValue;
  @Output() close = new EventEmitter();
  onlineMsg: string;
  addImportFontWeight;
  instance: string;
  constructor(
    public router: Router,
    private connectionService: ConnectionService,
    public resourceService: ResourceService,
    private electronDialogService: ElectronDialogService
  ) { }

  ngOnInit() {
    this.instance = _.upperCase(this.resourceService.instance);
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      this.radioBtnToBeChecked();
      this.addFontWeight();
    });
  }

  openImportContentDialog() {
    this.electronDialogService.showContentImportDialog();
  }

  onChange(event) {
    this.selectedValue = event;
    event === 'import' ? document.getElementById('online')['checked'] = false : document.getElementById('offline')['checked'] = false;
    this.addFontWeight();
  }

  radioBtnToBeChecked() {
    this.isConnected ? this.selectedValue = 'browse' : this.selectedValue = 'import';
  }

  closeModal() {
    this.close.emit();
    this.modal.deny();
  }

  navigate() {
    this.selectedValue === 'browse' ? this.router.navigate(['/browse']) : this.openImportContentDialog();
    this.modal.deny();
  }
  addFontWeight() {
    this.selectedValue === 'import' ? this.addImportFontWeight = true : this.addImportFontWeight = false;
  }
}
