'use strict';
/* globals CodeMirror: false */
/* globals LogoParser: false */
/* globals PouchDB: false */

var logoCode = CodeMirror(document.querySelectorAll('.code #placeholder')[0], { lineNumbers: true, gutters: ['CodeMirror-linenumbers', 'breakpoints']}); // jshint ignore:line

function makeMarker() {
  var marker = document.createElement('div');
  marker.style.color = '#822';
  marker.style.marginLeft = '-23px';
  marker.innerHTML = '●';
  return marker;
}

logoCode.on('gutterClick', function(cm, n) {
  var info = cm.lineInfo(n);
  cm.setGutterMarker(n, 'breakpoints', info.gutterMarkers ? null : makeMarker());
});

var logo = {
  canvas : null,
  ctx: null,
  turtle : {
    ctx: null,
    x: 300,
    y: 300,
    direction: 0, //North
    pen: true,
    linecolor: '#ff3333',

    show: function() {
      $('#turtle').css({ visibility: 'inherit' });
    },

    hide: function() {
      $('#turtle').css({ visibility: 'hidden' });
    },

    drawLine: function() {
      if (this.pen) {
        this.ctx.lineTo(this.x,this.y);
      } else {
        this.ctx.moveTo(this.x,this.y);
      }
    },

    fw: function(v) {
      var a = (90 - this.direction) * 3.1415926359 / 180;

      var dx = Math.cos(a) * v;
      var dy = -Math.sin(a) * v;

      this.x += dx;
      this.y += dy;

      this.drawLine();

      logo.sync();
    },

    lt: function(v) {
      this.direction -= v;

      logo.sync();
    },

    set: function(x,y) {
      this.x = x;
      this.y = y;

      this.drawLine();

      logo.sync();
    },

    home: function() {
      this.set(300,300);
      this.direction = 0;
    }
  },
  procedures : {},
  main: {},

  bind : function() {
    this.canvas = $('canvas')[0];
    this.ctx = this.canvas.getContext('2d');

    this.turtle.ctx = this.ctx;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  sync: function() {
    $('#turtle').css({ top: ''+(this.turtle.y-12)+'px', left: ''+(this.turtle.x-10)+'px', transform: 'rotate('+(this.turtle.direction)+'deg)' });
  },

  play: function() {
    try {
      $('#consoleText').text('');

      this.ctx.beginPath();
      this.ctx.moveTo(this.turtle.x,this.turtle.y);
      this.ctx.strokeStyle = this.turtle.linecolor;
      this.ctx.lineWidth = 1;

      LogoParser.parse(logoCode.getValue(),{ tracer: { trace: function(e) {
        console.log(e.type + ':'+e.rule + ' [' + e.location.start.line + ':' + e.location.start.column + ' -> '+ e.location.end.line + ':' + e.location.end.column + ']');
      }}}) ();

      this.ctx.stroke();
    } catch (e) {
      if (e.name && e.name === 'SyntaxError') {
        $('#consoleText').text(e.message + ' [' + e.location.start.line + ':' + e.location.start.column + ']');
      } else {
        console.log(e);
        throw e;
      }
    }
  },

  stop: function() {
    //Do nothing
  },
};

var storage = {

  db: function() {
    if (this._db) { return this._db; }
    return (this._db = new PouchDB('turtles'));
  },

  save: function(name,data) {
    var that = this;
    that.load(name).then(function (doc) {
      doc.data = data;
      that.db().put(doc).then(function () {$('#consoleText').text(''+name+' saved');});
    }).catch(function () {
      that.db().put({'_id':name, 'data':data}).then(function () {$('#consoleText').text(''+name+' saved');});
    });
  },

  load: function(name) {
    return this.db().get(name);
  }
};

function loadLogo() {
  storage.load($('#storage input').val()).then(function (doc) {
    logoCode.setValue(doc.data);
  });
}

function saveLogo() {
  storage.save($('#storage input').val(), logoCode.getValue());
}

logo.bind();
logo.sync();
logo.turtle.show();

//logoCode.setValue('repete 36 [\n\trepete 4 [\n\t\tavance 100\n\t\tgauche 90\n\t]\n\tgauche 10\n]');

logoCode.setValue('to spiral :length\r  if :length > 10 [\r\tav :length\r\tgauche 90\r\tspiral :length - 5\r  ]\rend\r\rstep 100');