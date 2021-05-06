import { Injectable, TemplateRef } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
interface IToast {
  title: any;
  textOrTpl: any;
  classname?: any;
  delay?: any;
  iconName?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: IToast[] = [];
  constructor() { }
  success(title: string, textOrTpl: any | TemplateRef<any>, icon?: any) {
    const options = {
      classname: 'toast-bottom-center alert-success',
      delay: 5000
    };
    // textOrTpl = this.translateService.instant(textOrTpl);
    this.toasts.push({ title, textOrTpl, ...options });
  }
  default(title: string, textOrTpl: any | TemplateRef<any>, icon?: any) {
    const options = {
      classname: 'toast-bottom-center alert-default',
      delay: 5000,
      iconName: icon
    };
    // textOrTpl = this.translateService.instant(textOrTpl);
    this.toasts.push({ title, textOrTpl, ...options });
  }
  info(title: string, textOrTpl: any | TemplateRef<any>, icon?: any) {
    const options = {
      classname: 'toast-bottom-center alert-info',
      delay: 5000
    };
    // textOrTpl = this.translateService.instant(textOrTpl);
    this.toasts.push({ title, textOrTpl, ...options });
  }
  error(title: string, textOrTpl: any | TemplateRef<any>, icon?: any) {
    const options = {
      classname: 'toast-bottom-center alert-danger',
      delay: 5000
    };
    // textOrTpl = this.translateService.instant(textOrTpl);
    this.toasts.push({ title, textOrTpl, ...options });
  }
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  showApiError(errorObject: any, timer?: number) {
    const error = {
      iconName: 'ni-fat-remove',
      classname: 'toast-bottom-center alert-danger',
      title: '',
      textOrTpl:
        errorObject.error.error || errorObject.error || errorObject.message || errorObject.code,
      delay: 5000
    };
    this.toasts.push(error);
  }
}
