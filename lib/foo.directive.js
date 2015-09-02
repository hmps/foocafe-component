import tplHtml from './foo.tpl.html!text';
import { FooCtrl } from './foo.ctrl';

function fooDirective() {
    return {
        scope: {},
        template: tplHtml,
        controller: FooCtrl,
        controllerAs: 'foo'
    }
}

export { fooDirective };
