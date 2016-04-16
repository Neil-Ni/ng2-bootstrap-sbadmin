import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {FormPage} from './form';

export function main() {
  describe('form component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><form></form></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let formDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(formDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [FormPage]
})
class TestComponent {}
