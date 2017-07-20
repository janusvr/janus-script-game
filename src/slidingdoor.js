room.registerElement('slidingdoor', {
  width: 2,
  height: 2,
  thickness: .1,
  mass: 1,
  clickable: true,
  isOpen: false,

  createChildren: function() {
    this.door = room.createObject('Object', {
      id: 'cube',
      col: this.col,
      scale: V(this.width, this.height, this.thickness),
      collision_id: 'cube',
      collision_scale: V(this.width, this.height, this.thickness),
      mass: 10,
    }, this);
    this.sounds = {
      open: room.createObject('Sound', {id: 'dooropen'}, this),
      close: room.createObject('Sound', {id: 'doorclose'}, this),
    };

    if (this.clickable && this.clickable != 'false') {
      this.door.addEventListener('click', this.toggle);
    }

    this.anchor = this.localToWorld(V(0.01, 0, 0));
    this.friction = this.door.addForce('friction', 10);
    this.force = this.door.addForce('spring', {
      anchor: this.anchor,
      strength: 200
    });
  },
  open: function() {
    this.anchor = this.localToWorld(V(-this.width,0,0));
    this.force.update({anchor: this.anchor});
console.log('open!', this.anchor, this.force, this);
    this.sounds.open.play();
    this.isOpen = true;
  },
  close: function() {
    this.anchor = this.localToWorld(V(0,0,0));
    this.force.update({anchor: this.anchor});
    this.sounds.close.play();
console.log('close!', this.anchor, this.force, this);
    this.isOpen = false;
  },
  toggle: function() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
});
