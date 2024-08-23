import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastserviceService {
  constructor(private messageService: MessageService) {}

  success(detail: string, summary: string) {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  error(detail: string, summary: string) {
    this.messageService.add({ severity: 'error', summary, detail });
  }

  show(detail: string, summary: string) {
    this.messageService.add({ severity: 'warn', summary, detail });
  }
}
