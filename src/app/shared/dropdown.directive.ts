import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core'
@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
        this.isOpen = this.elRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
    }
}
