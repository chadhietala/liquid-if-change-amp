import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return {id: 123, name: 'Chad'};
  }
});
