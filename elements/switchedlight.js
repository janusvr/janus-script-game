room.registerElement('switchedlight', {
  state: 1,
  on: function() {
    this.state = 1;
    this.visible = true;
  },
  off: function() {
    this.state = 0;
    this.visible = false;
  },
  setLevel: function(level) {
    this.light_intensity = level;
  },
  isOn: function() {
    return this.state == 1;
  }
}, 'light');
