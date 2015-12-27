'use strict';
/* globals CodeMirror: false */
/* globals LogoParser: false */
/* globals PouchDB: false */

var logo;

function makeMarker() {
  var marker = document.createElement('div');
  marker.style.color = '#822';
  marker.style.marginLeft = '-23px';
  marker.style.fontSize = '18px';
  marker.style.bottom = '-5px';
  marker.innerHTML = '●';
  return marker;
}

var logoCode = CodeMirror(document.querySelectorAll('.code #placeholder')[0], { mode:'logo', lineNumbers: true, gutters: ['CodeMirror-linenumbers', 'breakpoints']}); // jshint ignore:line

logoCode.on('gutterClick', function(cm, n) {
  var info = cm.lineInfo(n);

  if (info.gutterMarkers) {
    delete logo.breakPoints[info.line];
  } else {
    logo.breakPoints[info.line+1] = 1;
  }

  cm.setGutterMarker(n, 'breakpoints', info.gutterMarkers ? null : makeMarker());
});

logo = {
  canvas : null, ctx: null, aborted: false, paused: false, running: false, delay:100, breakPoints: {},
  turtle : {
    ctx: null, x: 300, y: 300,
    direction: 0, //North
    pen: true, linecolor: '#ff6666',

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
      this.ctx.stroke();
    },

    fw: function(v) {
      var a = (90 - this.direction) * 3.1415926359 / 180;
      this.x += Math.cos(a) * v;
      this.y -= Math.sin(a) * v;
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
      logo.sync();
    }
  },

  setDelay: function(d) {
    this.delay = d;
  },

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
    var $play = $('#play');

    if (logo.paused) { logo.paused = false; $play.find('i').removeClass('fa-play').removeClass('fa-play-circle').addClass('fa-pause'); return; }
    if (logo.running) { this.pause(); return; }
    try {
      $('#consoleText').text('');
      $play.find('i').removeClass('fa-play').addClass('fa-pause');

      this.aborted = false;
      this.paused = false;
      this.running = true;

      this.ctx.beginPath();
      this.ctx.moveTo(this.turtle.x,this.turtle.y);
      this.ctx.strokeStyle = this.turtle.linecolor;
      this.ctx.lineWidth = 1;

      var that = this;
      (LogoParser.parse(logoCode.getValue(),{ tracer: { trace: function(e) {
        //console.log(e.type + ':'+e.rule + ' [' + e.location.start.line + ':' + e.location.start.column + ' -> '+ e.location.end.line + ':' + e.location.end.column + ']');
      }}}) ()).then(function() {
        that.ctx.stroke();
        that.stop();
      });
    } catch (e) {
      if (e.name && e.name === 'SyntaxError') {
        $('#consoleText').text(e.message + ' [' + e.location.start.line + ':' + e.location.start.column + ']');
      } else {
        console.log(e);
        throw e;
      }
    }
  },

  pause: function() {
    var $play = $('#play');
    logo.paused = true;
    $play.find('i').removeClass('fa-pause').addClass('fa-play-circle');
  },

  stop: function() {
    var $play = $('#play');

    this.aborted = true;
    this.paused = false;
    this.running = false;

    $play.find('i').removeClass('fa-play-circle').removeClass('fa-play').removeClass('fa-pause').addClass('fa-play');
  }
};

var storage = {
  db: function() {
    if (this._db) { return this._db; }
    return (this._db = new PouchDB('turtles'));
  },

  save: function(name,data,overwrite) {
    var that = this;
    that.load(name).then(function (doc) {
      if (overwrite) {
        doc.data = data;
        return that.db().put(doc);
      }
    }).catch(function () {
      return that.db().put({'_id':name, 'data':data});
    });
  },

  load: function(name) {
    return this.db().get(name);
  },

  'delete': function(name) {
    var that = this;
    that.load(name).then(function (doc) {
      return that.db().remove(doc);
    });
  },

  list: function(cb) {
    this.db().allDocs().then(function(items) {
      cb(items.rows.map(function(d) {return d.id}));
    });
  }
};

storage.save('Ex-Spirale','to spiral :length\r  if :length > 10 [\r\tav :length\r\tgauche 90\r\tspiral :length - 5\r  ]\rend\r\rspiral 100', false);
storage.save('Ex-Arbre','to arbre :length\r  ifelse :length > 10 [\r\tgauche 40\r\tavance :length\r    arbre :length - 25\r    recule :length\r\tdroite 30\r\tavance :length\r    arbre :length - 15\r    recule :length\r    droite 60\r    avance :length\r    arbre :length - 15\r    recule :length\r    gauche 50\r  ] [\r    ga 30 av 5 dr 60 av 5 ga 60 re 5 dr 60 re 5 ga 30\r  ]\rend\r\rpu cs maison \rdr 45 re 80 ga 45\rpd\rrecule 200\ravance 200\rarbre 90\rgauche 20 arbre 85\rdroite 60 arbre 65', false);
storage.save('Ex-Carres','repete 36 [\n\trepete 4 [\n\t\tavance 100\n\t\tgauche 90\n\t]\n\tgauche 10\n]',false);

function loadLogo(val) {
  var $input = $('#storage').find('input');
  storage.load(val ? val : $input.val()).then(function (doc) {
    logoCode.setValue(doc.data);
    $input.val(doc._id);
  });
}

function saveLogo() {
  storage.save($('#storage').find('input').val(), logoCode.getValue(), true).then(function () {
    $('#consoleText').text('' + name + ' saved');
    setTimeout(function() {$('#consoleText').text('');}, 5000);
    refreshLogoList();
  });
}

function delLogo() {
  UIkit.modal.confirm('Are you sure you wish to delete '+$('#storage').find('input').val()+'?', function(){
    var $input = $('#storage').find('input');
    storage.delete($input.val());
    $input.val('');
  });
}

function refreshLogoList() {
  storage.list(function (d) {
    var $ul = $('#logoList');
    $ul.empty();
    d.forEach(function(i) {$ul.append('<li><a onclick="loadLogo(\''+i+'\')">'+i+'</a></li>')});
  });
}

logo.bind();
logo.sync();
logo.turtle.show();

(function($,UI) {
  UIkit.on('domready.uk.dom', function(){
    UI.autocomplete($('.uk-autocomplete'), {
      'source': function (release) {
        storage.list(function (d) {
          var ss = $('#storage').find('input').val().toLowerCase();
          release(d.filter(function (i) {return i.toLowerCase().indexOf(ss) > -1}).map(function (i) {
            return {title:i, value:i, url:'#'};
          }));
        });
      }
    });

    refreshLogoList();

    $('#storage').find('input').val('Ex-Spiral');
    logoCode.setValue('to spiral :length\r  if :length > 10 [\r\tav :length\r\tgauche 90\r\tspiral :length - 5\r  ]\rend\r\rspiral 100');
  });
})(jQuery,UIkit);

