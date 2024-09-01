import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { Observable } from 'rxjs';
import { IInvoice } from '../../../invoices';
import { InvoiceOpsFacadeService } from '../../../services/invoice-ops-facade.service';
import { CommonModule } from '@angular/common';
import { FormButtonComponent } from "../../reusables/form-button/form-button.component";

@Component({
  selector: 'app-detail-settings',
  standalone: true,
  imports: [CommonModule, FormButtonComponent],
  templateUrl: './detail-settings.component.html',
  styleUrl: './detail-settings.component.css'
})

export class DetailSettingsComponent {
  themeMode : boolean = false;
  selectedInvoice$: Observable<IInvoice | undefined>;
editInvoice: any;

  constructor(private themeService: ThemeService,
    private invoiceOpsFacade: InvoiceOpsFacadeService
  ){
    this.selectedInvoice$ = this.invoiceOpsFacade.selectedInvoice$;
  }

  ngOnInit(): void {
    this.themeService.mode$?.subscribe(mode => this.themeMode = mode);
  }
}