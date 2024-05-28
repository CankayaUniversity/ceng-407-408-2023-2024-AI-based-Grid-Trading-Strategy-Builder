import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  notify(message = '', type = 'info', title = '', from = 'top', align = 'right') {
    // types = ['', 'info', 'success', 'warning', 'danger'];
    // from = ['top', 'bottom'];
    // align = ['left', 'right', 'center'];

    let icon = 'notifications';
    switch (type) {
      case 'info': {
        icon = 'info';
        break;
      }
      case 'success': {
        icon = 'check_circle';
        break;
      }
      case 'warning': {
        icon = 'warning';
        break;
      }
      case 'error': {
        icon = 'error';
        type = 'danger'
        break;
      }
      default: {
        icon = 'notifications';
        break;
      }
    }

    $.notify({
      icon: icon,
      title: title,
      message: message
    }, {
      type: type,
      timer: 1000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-3 col-lg-3 col-11 col-sm-3 col-md-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">' + icon + '</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
}
