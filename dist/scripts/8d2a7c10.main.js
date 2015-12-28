"use strict";

function makeMarker() {
    var marker = document.createElement("div");
    return marker.style.color = "#822", marker.style.marginLeft = "-23px", marker.style.fontSize = "18px", 
    marker.style.bottom = "-5px", marker.innerHTML = "●", marker;
}

function loadLogo(val) {
    var $input = $("#storage").find("input");
    storage.load(val ? val : $input.val()).then(function(doc) {
        logoCode.setValue(doc.data), $input.val(doc._id);
    });
}

function saveLogo() {
    var name = $("#storage").find("input").val();
    storage.save(name, logoCode.getValue(), !0).then(function() {
        $("#consoleText").text("" + name + " saved"), setTimeout(function() {
            $("#consoleText").text("");
        }, 5e3), refreshLogoList();
    });
}

function delLogo() {
    UIkit.modal.confirm("Are you sure you wish to delete " + $("#storage").find("input").val() + "?", function() {
        var $input = $("#storage").find("input");
        storage["delete"]($input.val()), $input.val("");
    });
}

function refreshLogoList() {
    storage.list(function(d) {
        var $ul = $("#logoList");
        $ul.empty(), d.forEach(function(i) {
            $ul.append("<li><a onclick=\"loadLogo('" + i + "')\">" + i + "</a></li>");
        });
    });
}

"undefined" != typeof CodeMirror && (CodeMirror.defineMode("logo", function() {
    var regexIdentifier = /^(\.?[A-Za-z\u00A1-\u1FFF][A-Za-z0-9_.\?\u00A1-\u1FFF]*|[\u2190-\u2193])/, regexStringLiteral = /^["'][^ \[\]\(\)\{\}]*/, regexVariable = /^:[A-Za-z\u00A1-\u1FFF][A-Za-z0-9_\u00A1-\u1FFF]*/, regexNumberLiteral = /^[0-9]*\.?[0-9]+(?:[eE]\s*[\-+]?\s*[0-9]+)?/, regexOperator = /^\+|\-|\*|\/|%|\^|>=|<=|<>|=|<|>|\[|\]|\{|\}(\s*@\s*\d+)?|\(|\)/;
    return {
        electricChars: "[]dD",
        startState: function() {
            return {
                state: "normal",
                indent: 0
            };
        },
        indent: function(state, textAfter) {
            var size = 2, indent = state.indent;
            switch (/^\]/.test(textAfter) && --indent, state.state) {
              case "defn-name":
                return (indent + 1) * size;

              case "defn-vars":
              case "defn-body":
                return /^END\b/i.test(textAfter) ? indent * size : (indent + 1) * size;

              default:
                return indent * size;
            }
        },
        token: function(stream, state) {
            if (stream.eatSpace()) return null;
            if (stream.match(/^;.*/, !0)) return "logo-comment";
            if ("normal" === state.state) {
                if (stream.match(/^TO\b/i, !0)) return state.state = "defn-name", "logo-defn-start";
                if (stream.match(/^END\b/i, !0)) return "logo-error";
            }
            if ("defn-name" === state.state) return stream.match(regexIdentifier, !0) ? (state.state = "defn-vars", 
            "logo-defn-name") : (stream.next(), state.state = "normal", "logo-error");
            if ("defn-vars" === state.state) {
                if (stream.match(regexVariable, !0)) return "logo-defn-arg";
                state.state = "defn-body";
            }
            if ("defn-body" === state.state && stream.match(/^END\b/i, !0)) return state.state = "normal", 
            "logo-defn-end";
            if ("normal" === state.state || "defn-body" === state.state) return stream.match(regexNumberLiteral, !0) ? "logo-number" : stream.match(regexStringLiteral, !0) ? "logo-string" : stream.match(/^\[/, !0) ? (++state.indent, 
            "logo-operator") : stream.match(/^\]/, !0) ? (state.indent > 0 && --state.indent, 
            "logo-operator") : stream.match(regexOperator, !0) ? "logo-operator" : stream.match(regexVariable, !0) ? "logo-variable" : stream.match(/^(TRUE|FALSE)\b/i, !0) ? "logo-keyword" : stream.match(regexIdentifier, !0) ? "logo-word" : (stream.next(), 
            "logo-error");
            throw "WTF?";
        }
    };
}), CodeMirror.defineMIME("text/x-logo", "logo"));

var logo, logoCode = CodeMirror(document.querySelectorAll(".code #placeholder")[0], {
    mode: "logo",
    lineNumbers: !0,
    gutters: [ "CodeMirror-linenumbers", "breakpoints" ]
});

logoCode.on("gutterClick", function(cm, n) {
    var info = cm.lineInfo(n);
    info.gutterMarkers ? delete logo.breakPoints[info.line + 1] : logo.breakPoints[info.line + 1] = 1, 
    cm.setGutterMarker(n, "breakpoints", info.gutterMarkers ? null : makeMarker());
}), logo = {
    canvas: null,
    ctx: null,
    aborted: !1,
    paused: !1,
    running: !1,
    delay: 100,
    breakPoints: {},
    turtle: {
        ctx: null,
        x: 300,
        y: 300,
        direction: 0,
        pen: !0,
        linecolor: "#ff6666",
        show: function() {
            $("#turtle").css({
                visibility: "inherit"
            });
        },
        hide: function() {
            $("#turtle").css({
                visibility: "hidden"
            });
        },
        drawLine: function() {
            this.pen ? this.ctx.lineTo(this.x, this.y) : this.ctx.moveTo(this.x, this.y), this.ctx.stroke();
        },
        fw: function(v) {
            var a = 3.1415926359 * (90 - this.direction) / 180;
            this.x += Math.cos(a) * v, this.y -= Math.sin(a) * v, this.drawLine(), logo.sync();
        },
        lt: function(v) {
            this.direction -= v, logo.sync();
        },
        set: function(x, y) {
            this.x = x, this.y = y, this.drawLine(), logo.sync();
        },
        home: function() {
            this.set(300, 300), this.direction = 0, logo.sync();
        }
    },
    setDelay: function(d) {
        this.delay = d;
    },
    bind: function() {
        this.canvas = $("canvas")[0], this.ctx = this.canvas.getContext("2d"), this.turtle.ctx = this.ctx;
    },
    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    sync: function() {
        $("#turtle").css({
            top: "" + (this.turtle.y - 12) + "px",
            left: "" + (this.turtle.x - 10) + "px",
            transform: "rotate(" + this.turtle.direction + "deg)"
        });
    },
    play: function() {
        var $play = $("#play");
        if (logo.paused) return logo.paused = !1, void $play.find("i").removeClass("fa-play").removeClass("fa-play-circle").addClass("fa-pause");
        if (logo.running) return void this.pause();
        try {
            $("#consoleText").text(""), $play.find("i").removeClass("fa-play").addClass("fa-pause"), 
            this.aborted = !1, this.paused = !1, this.running = !0, this.ctx.beginPath(), this.ctx.moveTo(this.turtle.x, this.turtle.y), 
            this.ctx.strokeStyle = this.turtle.linecolor, this.ctx.lineWidth = 1;
            var that = this;
            LogoParser.parse(logoCode.getValue(), {
                tracer: {
                    trace: function(e) {}
                }
            })().then(function() {
                that.ctx.stroke(), that.stop();
            });
        } catch (e) {
            if (!e.name || "SyntaxError" !== e.name) throw console.log(e), e;
            $("#consoleText").text(e.message + " [" + e.location.start.line + ":" + e.location.start.column + "]");
        }
    },
    pause: function() {
        var $play = $("#play");
        logo.paused = !0, $play.find("i").removeClass("fa-pause").addClass("fa-play-circle");
    },
    stop: function() {
        var $play = $("#play");
        this.aborted = !0, this.paused = !1, this.running = !1, $play.find("i").removeClass("fa-play-circle").removeClass("fa-play").removeClass("fa-pause").addClass("fa-play");
    }
};

var storage = {
    db: function() {
        return this._db ? this._db : this._db = new PouchDB("turtles");
    },
    save: function(name, data, overwrite) {
        var that = this;
        return that.load(name).then(function(doc) {
            return overwrite ? (doc.data = data, that.db().put(doc)) : void 0;
        })["catch"](function() {
            return that.db().put({
                _id: name,
                data: data
            });
        });
    },
    load: function(name) {
        return this.db().get(name);
    },
    "delete": function(name) {
        var that = this;
        that.load(name).then(function(doc) {
            return that.db().remove(doc);
        });
    },
    list: function(cb) {
        this.db().allDocs().then(function(items) {
            cb(items.rows.map(function(d) {
                return d.id;
            }));
        });
    }
};

logo.bind(), logo.sync(), logo.turtle.show(), function($, UI) {
    UIkit.on("domready.uk.dom", function() {
        UI.autocomplete($(".uk-autocomplete"), {
            source: function(release) {
                storage.list(function(d) {
                    var ss = $("#storage").find("input").val().toLowerCase();
                    release(d.filter(function(i) {
                        return i.toLowerCase().indexOf(ss) > -1;
                    }).map(function(i) {
                        return {
                            title: i,
                            value: i,
                            url: "#"
                        };
                    }));
                });
            }
        }), storage.save("Ex-Spirale", "to spiral :length\r  if :length > 10 [\r	av :length\r	gauche 90\r	spiral :length - 5\r  ]\rend\r\rspiral 100", !1), 
        storage.save("Ex-Arbre", "to arbre :length\r  ifelse :length > 10 [\r	gauche 40\r	avance :length\r    arbre :length - 25\r    recule :length\r	droite 30\r	avance :length\r    arbre :length - 15\r    recule :length\r    droite 60\r    avance :length\r    arbre :length - 15\r    recule :length\r    gauche 50\r  ] [\r    ga 30 av 5 dr 60 av 5 ga 60 re 5 dr 60 re 5 ga 30\r  ]\rend\r\rpu cs maison \rdr 45 re 80 ga 45\rpd\rrecule 200\ravance 200\rarbre 90\rgauche 20 arbre 85\rdroite 60 arbre 65", !1), 
        storage.save("Ex-Carres", "repete 36 [\n	repete 4 [\n		avance 100\n		gauche 90\n	]\n	gauche 10\n]", !1), 
        setTimeout(function() {
            refreshLogoList();
        }, 1e3), $("#storage").find("input").val("Ex-Spiral"), logoCode.setValue("to spiral :length\r  if :length > 10 [\r	av :length\r	gauche 90\r	spiral :length - 5\r  ]\rend\r\rspiral 100");
    });
}(jQuery, UIkit);