import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {IconsPage} from './icons';

export function main() {
  describe('icons component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><icons></icons></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let iconsDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(iconsDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [IconsPage]
})
class TestComponent {}
