import Ember from 'ember';

const data = [
  {
    elements: [
      {id: 1, componentType: 'feed/update/viral-update', hasComments: true},
      {id: 2, componentType: 'feed/update/share-update', hasComments: true},
      {id: 3, componentType: 'feed/update/viral-update', hasComments: false},
      {id: 4, componentType: 'feed/update/share-update', hasComments: true},
      {id: 5, componentType: 'feed/update/viral-update', hasComments: false},
      {id: 6, componentType: 'feed/update/viral-update', hasComments: true},
      {id: 7, componentType: 'feed/update/share-update', hasComments: false},
      {id: 8, componentType: 'feed/update/viral-update', hasComments: true},
      {id: 9, componentType: 'feed/update/share-update', hasComments: true},
      {id: 10, componentType: 'feed/update/viral-update', hasComments: true}
    ]
  }
];

export default Ember.Route.extend({
  model() {
    return data;
  }
});
