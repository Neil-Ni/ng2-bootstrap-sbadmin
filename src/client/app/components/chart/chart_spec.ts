import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ChartPage} from './chart';

export function main() {
  describe('chart component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><chart></chart></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let chartDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(chartDOMEl, 'h1')[0].textContent).toEqual('Howdy!');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [ChartPage]
})
class TestComponent {}
