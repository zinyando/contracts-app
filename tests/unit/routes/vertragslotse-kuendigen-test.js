import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vertragslotse-kuendigen', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vertragslotse-kuendigen');
    assert.ok(route);
  });
});
