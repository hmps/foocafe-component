import angular from 'angular';

import { fooDirective } from './foo.directive';

let foo = angular.module('module.foo', [])
    .directive('fooCafe', fooDirective);

export { foo };
