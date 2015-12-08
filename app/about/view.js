import Ember from 'ember';

export default Ember.View.extend({
  numClicks: 0,
  click: function(){
    this.incrementProperty('numClicks');
    console.log("I've been clicked " + this.get('numClicks') + " time(s).");
  }
});
