import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
  beforeEachProviders
} from 'angular2/testing';
import {Component, provide, DirectiveResolver} from 'angular2/core';

import {Location, Router, RouteRegistry} from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';

import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {App} from './app';

export function main() {

  describe('App component', () => {

    // Support for testing component that uses Router
    beforeEachProviders(() => [
      RouteRegistry,
      DirectiveResolver,
      provide(Location, {useClass: SpyLocation}),
      provide(Router,
        {
          useFactory:
            (registry, location) => { return new RootRouter(registry, location, App); },
          deps: [RouteRegistry, Location]
        })
    ]);

    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><app></app></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();
            let appDOMEl = rootTC.debugElement.children[0].nativeElement;
            expect(DOM.querySelectorAll(appDOMEl, 'section > nav > a')[1].href).toEqual('http://localhost:9876/about');
          });
      }));
  });
}

@Component({
    selector: 'test-cmp',
    directives: [App]
})
class TestComponent {}
