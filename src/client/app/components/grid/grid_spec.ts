import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {GridPage} from './grid';

export function main() {
  describe('grid component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><grid></grid></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let gridDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(gridDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [GridPage]
})
class TestComponent {}
