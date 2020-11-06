import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from './toast.service';
import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const toastAnimation: AnimationTriggerMetadata = trigger('in', [
  transition(':enter', [
    style({ transform: 'translateX(800%)' }),
    animate('4s  ease-in', style({ transform: 'translateX(0%)' }))
  ])
]);

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',

  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('in', [
      transition(':enter', [
        style({ transform: 'translateY(800%)' }),
        animate('.0s  ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {
  constructor(public toastService: ToastService) {}
  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  ngOnInit() {}
}
