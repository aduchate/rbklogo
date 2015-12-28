!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function r(a) {
        var b = "length" in a && a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a);
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), 
        a.detachEvent("onload", J));
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), 
        m.ready());
    }
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {}
                m.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function P(a) {
        var b;
        for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 
            "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, 
            f;
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [ b ] : (b = m.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    for (;e--; ) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([ a ], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }
    function aa() {
        return !0;
    }
    function ba() {
        return !1;
    }
    function ca() {
        try {
            return y.activeElement;
        } catch (a) {}
    }
    function da(a) {
        var b = ea.split("|"), c = a.createDocumentFragment();
        if (c.createElement) for (;b.length; ) c.createElement(b.pop());
        return c;
    }
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([ a ], f) : f;
    }
    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }
    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
    }
    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = m.extend({}, g.data));
        }
    }
    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando);
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f;
    }
    function Fa(a) {
        var b = y, c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), 
        c = Ea(a, b), Ca.detach()), Da[a] = c), c;
    }
    function La(a, b) {
        return {
            get: function() {
                var c = a();
                return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0;
            }
        };
    }
    function Ua(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length; e--; ) if (b = Ta[e] + c, 
        b in a) return b;
        return d;
    }
    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), 
        (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), 
        d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), 
        "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g;
    }
    function Ya(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e);
    }
    function fb() {
        return setTimeout(function() {
            $a = void 0;
        }), $a = m.now();
    }
    function gb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, 
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0;
            }
            o[d] = r && r[d] || m.style(a, d);
        } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), 
            q ? m(a).show() : n.done(function() {
                m(a).hide();
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b]);
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++) if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) for (;d = f[e++]; ) "+" === d.charAt(0) ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Mb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        var e = {}, f = a === Ib;
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a;
    }
    function Ob(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
    }
    function Zb() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function(a, b) {
        return new m.fn.init(a, b);
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
        return b.toUpperCase();
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return m.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], 
        c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, 
        f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g;
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            if (k.ownLast) for (b in a) return j.call(a, b);
            for (b in a) ;
            return void 0 === b || j.call(a, b);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) for (;f > e && (d = b.apply(a[e], c), d !== !1); e++) ; else for (e in a) if (d = b.apply(a[e], c), 
                d === !1) break;
            } else if (g) for (;f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++) ; else for (e in a) if (d = b.call(a[e], e, a[e]), 
            d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; ) a[e++] = b[d++];
            if (c !== c) for (;void 0 !== b[d]; ) a[e++] = b[d++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    var s = function(a) {
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length; l--; ) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            var a = [];
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function qa() {}
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = va(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        for (m = 0; o = a[m++]; ) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    for (m = 0; o = b[m++]; ) o(r, s, g, h);
                    if (f) {
                        if (p > 0) for (;q--; ) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                for (c = a; c = c.parentNode; ) h.unshift(c);
                for (c = b; c = c.parentNode; ) i.unshift(c);
                for (;h[d] === i[d]; ) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                for (;e--; ) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else for (;b = a[d++]; ) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        return qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h; ) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        }, h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--; ) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                    if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                    break;
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, 
    m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [ d ] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0));
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), 
                u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);
                this.length = 1, this[0] = d;
            }
            return this.context = y, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), m.makeArray(a, this));
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)); ) 1 === e.nodeType && d.push(e), 
            e = e[b];
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return m.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return m.sibling(a.firstChild);
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), 
            this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = h.length : c && (g = d, j(c));
                }
                return this;
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    for (var d; (d = m.inArray(c, h, d)) > -1; ) h.splice(d, 1), b && (e >= d && e--, 
                    f >= d && f--);
                }), this;
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], e = 0, this;
            },
            disable: function() {
                return h = i = c = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, c || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [], c = [ a, c.slice ? c.slice() : c ], b ? i.push(c) : j(c)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return k;
    }, m.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", m.Callbacks("once memory"), "resolved" ], [ "reject", "fail", m.Callbacks("once memory"), "rejected" ], [ "notify", "progress", m.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            };
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this;
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [ m ]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), 
                m(y).off("ready")));
            }
        }
    }), m.ready.promise = function(b) {
        if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), 
        a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement;
            } catch (d) {}
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    I(), m.ready();
                }
            }();
        }
        return H.promise(b);
    };
    var L, K = "undefined";
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
        d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }
        a = null;
    }(), m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        },
        data: function(a, b, c) {
            return Q(a, b, c);
        },
        removeData: function(a, b) {
            return R(a, b);
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return R(a, b, !0);
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), 
                    O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a);
            });
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                m.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c);
                })
            });
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = m._data(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [ "Top", "Right", "Bottom", "Left" ], U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
    }, V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c) m.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(m(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, 
        k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, 
        a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
        c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, 
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null;
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), 
                (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(E) || [ "" ], h = b.length; h--; ) f = _.exec(b[h]) || [], 
                o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, 
                o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), 
                j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                m.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                for (b = (b || "").match(E) || [ "" ], j = b.length; j--; ) if (h = _.exec(b[j]) || [], 
                o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; f--; ) g = n[f], 
                    !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), 
                    g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), 
                    delete k[o]);
                } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [ d || y ], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), 
            p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : m.makeArray(c, [ b ]), 
            k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                    l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }
                for (n = 0; (h = o[n++]) && !b.isPropagationStopped(); ) b.type = n > 1 ? i : k.bindType || p, 
                f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), 
                f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]();
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l);
                }
                return b.result;
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = m.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [ i ]).length), 
                e[c] && e.push(d);
                e.length && g.push({
                    elem: i,
                    handlers: e
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, 
                e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), 
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, 
        b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), 
            a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), m._data(c, "submitBubbles", !0));
            });
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                }), m._data(b, "changeBubbles", !0));
            });
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName);
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            }
        };
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba; else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), 
            this.each(function() {
                m.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: k.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, 
    ra.th = ra.td, m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, 
            ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), 
            h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]); else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) if (f = a[q], 
            f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [ f ] : f); else if (la.test(f)) {
                for (h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || [ "", "" ])[1].toLowerCase(), 
                l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], 
                e = l[0]; e--; ) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), 
                !k.tbody) for (f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, 
                e = f && f.childNodes.length; e--; ) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (m.merge(p, h.childNodes), h.textContent = ""; h.firstChild; ) h.removeChild(h.firstChild);
                h = o.lastChild;
            } else p.push(b.createTextNode(f));
            for (h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0; f = p[q++]; ) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), 
            h = ua(o.appendChild(f), "script"), g && za(h), c)) for (e = 0; f = h[e++]; ) oa.test(f.type || "") && c.push(f);
            return h = null, o;
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], 
            g = f && j[f])) {
                if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, 
                c.push(f));
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), 
            c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && m.cleanData(ua(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b);
            });
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 
            1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), 
                f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], 
                oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null;
            }
            return this;
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), 
            m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    var Ca, Da = {};
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), 
            d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), 
            c.removeChild(d), a) : void 0;
        };
    }();
    var Ia, Ja, Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), 
        Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle;
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), 
        Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), 
        h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), 
        void 0 === g ? g : g + "" || "auto";
    }), !function() {
        function i() {
            var b, c, d, i;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
            d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, 
            f = "4px" === (a.getComputedStyle(b, null) || {
                width: "4px"
            }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
            i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), 
            b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
            g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", 
            g = 0 === i[0].offsetHeight), c.removeChild(d));
        }
        var b, c, d, e, f, g, h;
        b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], (c = d && d.style) && (c.cssText = "float:left;opacity:.5", 
        k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", 
        b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, 
        k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, 
        m.extend(k, {
            reliableHiddenOffsets: function() {
                return null == g && i(), g;
            },
            boxSizingReliable: function() {
                return null == f && i(), f;
            },
            pixelPosition: function() {
                return null == e && i(), e;
            },
            reliableMarginRight: function() {
                return null == h && i(), h;
            }
        }));
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ta = [ "Webkit", "O", "Moz", "ms" ];
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], 
                void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], 
            g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), 
            "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        }
    }), m.each([ "height", "width" ], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d);
                }) : Ya(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [ a, "marginRight" ]) : void 0;
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Va(this, !0);
        },
        hide: function() {
            return Va(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide();
            });
        }
    }), m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, m.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ ib ], eb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    m.Animation = m.extend(kb, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? db.unshift(a) : db.push(a);
        }
    }), m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), m.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0;
    }, m.fx.timer = function(a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function() {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function() {
        clearInterval(_a), _a = null;
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), 
        a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, 
        k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), 
        k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, 
        c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), 
        k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), 
        k.radioValue = "t" === a.value;
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = m.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)) : void 0;
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = m.makeArray(b), g = e.length; g--; ) if (d = e[g], 
                    m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0;
                    } catch (h) {
                        d.scrollHeight;
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e;
                }
            }
        }
    }), m.each([ "radio", "checkbox" ], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a);
            });
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void m.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), 
            a.removeAttribute(qb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            ob[b] = f), e;
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", 
            "value" === c || b === a.getAttribute(c) ? b : void 0;
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c);
        }
    }, m.each([ "width", "height" ], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            }
        };
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, 
            e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), k.hrefNormalized || m.each([ "href", "src" ], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), m.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = m(this), f = a.match(E) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), 
            c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), 
        c;
    };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href;
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href;
    }
    yb = Gb.exec(zb.toLowerCase()) || [], m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), 
                w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), h && (n.trigger("ajaxComplete", [ v, k ]), --m.active || m.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) for (j = {}; b = Cb.exec(f); ) j[b[1].toLowerCase()] = b[2];
                        b = j[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), 
            Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), 
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), 
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script");
        }
    }), m.each([ "get", "post" ], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b));
            } : function() {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
            }).end();
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a);
    };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+");
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                };
            }).get();
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
    } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0);
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, 
                        e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }
                        j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b();
                },
                abort: function() {
                    b && b(void 0, !0);
                }
            };
        }
    }), m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a;
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), 
                    b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, 
                        b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                },
                abort: function() {
                    b && b.onload(void 0, !0);
                }
            };
        }
    });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a;
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = m.buildFragment([ a ], b, e), e && e.length && m(e).remove(), 
        m.merge([], d.childNodes));
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, e || [ a.responseText, b, a ]);
        }), this;
    }, m.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var cc = a.document.documentElement;
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), 
            i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [ f, i ]) > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), 
            null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b);
            });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            return f ? (b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), 
            c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), 
                c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || cc; a && !m.nodeName(a, "html") && "static" === m.css(a, "position"); ) a = a.offsetParent;
                return a || cc;
            });
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each([ "top", "left" ], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
        });
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function() {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m;
    });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
    }, typeof b === K && (a.jQuery = a.$ = m), m;
}), function(mod) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = mod(); else {
        if ("function" == typeof define && define.amd) return define([], mod);
        (this || window).CodeMirror = mod();
    }
}(function() {
    "use strict";
    function CodeMirror(place, options) {
        if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);
        this.options = options = options ? copyObj(options) : {}, copyObj(defaults, options, !1), 
        setGuttersForLineNumbers(options);
        var doc = options.value;
        "string" == typeof doc && (doc = new Doc(doc, options.mode, null, options.lineSeparator)), 
        this.doc = doc;
        var input = new CodeMirror.inputStyles[options.inputStyle](this), display = this.display = new Display(place, doc, input);
        display.wrapper.CodeMirror = this, updateGutters(this), themeChanged(this), options.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), 
        options.autofocus && !mobile && display.input.focus(), initScrollbars(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new Delayed(),
            keySeq: null,
            specialChars: null
        };
        var cm = this;
        ie && 11 > ie_version && setTimeout(function() {
            cm.display.input.reset(!0);
        }, 20), registerEventHandlers(this), ensureGlobalHandlers(), startOperation(this), 
        this.curOp.forceUpdate = !0, attachDoc(this, doc), options.autofocus && !mobile || cm.hasFocus() ? setTimeout(bind(onFocus, this), 20) : onBlur(this);
        for (var opt in optionHandlers) optionHandlers.hasOwnProperty(opt) && optionHandlers[opt](this, options[opt], Init);
        maybeUpdateLineNumberWidth(this), options.finishInit && options.finishInit(this);
        for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
        endOperation(this), webkit && options.lineWrapping && "optimizelegibility" == getComputedStyle(display.lineDiv).textRendering && (display.lineDiv.style.textRendering = "auto");
    }
    function Display(place, doc, input) {
        var d = this;
        this.input = input, d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler"), 
        d.scrollbarFiller.setAttribute("cm-not-content", "true"), d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler"), 
        d.gutterFiller.setAttribute("cm-not-content", "true"), d.lineDiv = elt("div", null, "CodeMirror-code"), 
        d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1"), d.cursorDiv = elt("div", null, "CodeMirror-cursors"), 
        d.measure = elt("div", null, "CodeMirror-measure"), d.lineMeasure = elt("div", null, "CodeMirror-measure"), 
        d.lineSpace = elt("div", [ d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv ], null, "position: relative; outline: none"), 
        d.mover = elt("div", [ elt("div", [ d.lineSpace ], "CodeMirror-lines") ], null, "position: relative"), 
        d.sizer = elt("div", [ d.mover ], "CodeMirror-sizer"), d.sizerWidth = null, d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;"), 
        d.gutters = elt("div", null, "CodeMirror-gutters"), d.lineGutter = null, d.scroller = elt("div", [ d.sizer, d.heightForcer, d.gutters ], "CodeMirror-scroll"), 
        d.scroller.setAttribute("tabIndex", "-1"), d.wrapper = elt("div", [ d.scrollbarFiller, d.gutterFiller, d.scroller ], "CodeMirror"), 
        ie && 8 > ie_version && (d.gutters.style.zIndex = -1, d.scroller.style.paddingRight = 0), 
        webkit || gecko && mobile || (d.scroller.draggable = !0), place && (place.appendChild ? place.appendChild(d.wrapper) : place(d.wrapper)), 
        d.viewFrom = d.viewTo = doc.first, d.reportedViewFrom = d.reportedViewTo = doc.first, 
        d.view = [], d.renderedView = null, d.externalMeasured = null, d.viewOffset = 0, 
        d.lastWrapHeight = d.lastWrapWidth = 0, d.updateLineNumbers = null, d.nativeBarWidth = d.barHeight = d.barWidth = 0, 
        d.scrollbarsClipped = !1, d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null, 
        d.alignWidgets = !1, d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null, 
        d.maxLine = null, d.maxLineLength = 0, d.maxLineChanged = !1, d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null, 
        d.shift = !1, d.selForContextMenu = null, d.activeTouch = null, input.init(d);
    }
    function loadMode(cm) {
        cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption), resetModeState(cm);
    }
    function resetModeState(cm) {
        cm.doc.iter(function(line) {
            line.stateAfter && (line.stateAfter = null), line.styles && (line.styles = null);
        }), cm.doc.frontier = cm.doc.first, startWorker(cm, 100), cm.state.modeGen++, cm.curOp && regChange(cm);
    }
    function wrappingChanged(cm) {
        cm.options.lineWrapping ? (addClass(cm.display.wrapper, "CodeMirror-wrap"), cm.display.sizer.style.minWidth = "", 
        cm.display.sizerWidth = null) : (rmClass(cm.display.wrapper, "CodeMirror-wrap"), 
        findMaxLine(cm)), estimateLineHeights(cm), regChange(cm), clearCaches(cm), setTimeout(function() {
            updateScrollbars(cm);
        }, 100);
    }
    function estimateHeight(cm) {
        var th = textHeight(cm.display), wrapping = cm.options.lineWrapping, perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
        return function(line) {
            if (lineIsHidden(cm.doc, line)) return 0;
            var widgetsHeight = 0;
            if (line.widgets) for (var i = 0; i < line.widgets.length; i++) line.widgets[i].height && (widgetsHeight += line.widgets[i].height);
            return wrapping ? widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th : widgetsHeight + th;
        };
    }
    function estimateLineHeights(cm) {
        var doc = cm.doc, est = estimateHeight(cm);
        doc.iter(function(line) {
            var estHeight = est(line);
            estHeight != line.height && updateLineHeight(line, estHeight);
        });
    }
    function themeChanged(cm) {
        cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), 
        clearCaches(cm);
    }
    function guttersChanged(cm) {
        updateGutters(cm), regChange(cm), setTimeout(function() {
            alignHorizontally(cm);
        }, 20);
    }
    function updateGutters(cm) {
        var gutters = cm.display.gutters, specs = cm.options.gutters;
        removeChildren(gutters);
        for (var i = 0; i < specs.length; ++i) {
            var gutterClass = specs[i], gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
            "CodeMirror-linenumbers" == gutterClass && (cm.display.lineGutter = gElt, gElt.style.width = (cm.display.lineNumWidth || 1) + "px");
        }
        gutters.style.display = i ? "" : "none", updateGutterSpace(cm);
    }
    function updateGutterSpace(cm) {
        var width = cm.display.gutters.offsetWidth;
        cm.display.sizer.style.marginLeft = width + "px";
    }
    function lineLength(line) {
        if (0 == line.height) return 0;
        for (var merged, len = line.text.length, cur = line; merged = collapsedSpanAtStart(cur); ) {
            var found = merged.find(0, !0);
            cur = found.from.line, len += found.from.ch - found.to.ch;
        }
        for (cur = line; merged = collapsedSpanAtEnd(cur); ) {
            var found = merged.find(0, !0);
            len -= cur.text.length - found.from.ch, cur = found.to.line, len += cur.text.length - found.to.ch;
        }
        return len;
    }
    function findMaxLine(cm) {
        var d = cm.display, doc = cm.doc;
        d.maxLine = getLine(doc, doc.first), d.maxLineLength = lineLength(d.maxLine), d.maxLineChanged = !0, 
        doc.iter(function(line) {
            var len = lineLength(line);
            len > d.maxLineLength && (d.maxLineLength = len, d.maxLine = line);
        });
    }
    function setGuttersForLineNumbers(options) {
        var found = indexOf(options.gutters, "CodeMirror-linenumbers");
        -1 == found && options.lineNumbers ? options.gutters = options.gutters.concat([ "CodeMirror-linenumbers" ]) : found > -1 && !options.lineNumbers && (options.gutters = options.gutters.slice(0), 
        options.gutters.splice(found, 1));
    }
    function measureForScrollbars(cm) {
        var d = cm.display, gutterW = d.gutters.offsetWidth, docH = Math.round(cm.doc.height + paddingVert(cm.display));
        return {
            clientHeight: d.scroller.clientHeight,
            viewHeight: d.wrapper.clientHeight,
            scrollWidth: d.scroller.scrollWidth,
            clientWidth: d.scroller.clientWidth,
            viewWidth: d.wrapper.clientWidth,
            barLeft: cm.options.fixedGutter ? gutterW : 0,
            docHeight: docH,
            scrollHeight: docH + scrollGap(cm) + d.barHeight,
            nativeBarWidth: d.nativeBarWidth,
            gutterWidth: gutterW
        };
    }
    function NativeScrollbars(place, scroll, cm) {
        this.cm = cm;
        var vert = this.vert = elt("div", [ elt("div", null, null, "min-width: 1px") ], "CodeMirror-vscrollbar"), horiz = this.horiz = elt("div", [ elt("div", null, null, "height: 100%; min-height: 1px") ], "CodeMirror-hscrollbar");
        place(vert), place(horiz), on(vert, "scroll", function() {
            vert.clientHeight && scroll(vert.scrollTop, "vertical");
        }), on(horiz, "scroll", function() {
            horiz.clientWidth && scroll(horiz.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, ie && 8 > ie_version && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    }
    function NullScrollbars() {}
    function initScrollbars(cm) {
        cm.display.scrollbars && (cm.display.scrollbars.clear(), cm.display.scrollbars.addClass && rmClass(cm.display.wrapper, cm.display.scrollbars.addClass)), 
        cm.display.scrollbars = new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node) {
            cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller), on(node, "mousedown", function() {
                cm.state.focused && setTimeout(function() {
                    cm.display.input.focus();
                }, 0);
            }), node.setAttribute("cm-not-content", "true");
        }, function(pos, axis) {
            "horizontal" == axis ? setScrollLeft(cm, pos) : setScrollTop(cm, pos);
        }, cm), cm.display.scrollbars.addClass && addClass(cm.display.wrapper, cm.display.scrollbars.addClass);
    }
    function updateScrollbars(cm, measure) {
        measure || (measure = measureForScrollbars(cm));
        var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
        updateScrollbarsInner(cm, measure);
        for (var i = 0; 4 > i && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) startWidth != cm.display.barWidth && cm.options.lineWrapping && updateHeightsInViewport(cm), 
        updateScrollbarsInner(cm, measureForScrollbars(cm)), startWidth = cm.display.barWidth, 
        startHeight = cm.display.barHeight;
    }
    function updateScrollbarsInner(cm, measure) {
        var d = cm.display, sizes = d.scrollbars.update(measure);
        d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px", d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px", 
        sizes.right && sizes.bottom ? (d.scrollbarFiller.style.display = "block", d.scrollbarFiller.style.height = sizes.bottom + "px", 
        d.scrollbarFiller.style.width = sizes.right + "px") : d.scrollbarFiller.style.display = "", 
        sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter ? (d.gutterFiller.style.display = "block", 
        d.gutterFiller.style.height = sizes.bottom + "px", d.gutterFiller.style.width = measure.gutterWidth + "px") : d.gutterFiller.style.display = "";
    }
    function visibleLines(display, doc, viewport) {
        var top = viewport && null != viewport.top ? Math.max(0, viewport.top) : display.scroller.scrollTop;
        top = Math.floor(top - paddingTop(display));
        var bottom = viewport && null != viewport.bottom ? viewport.bottom : top + display.wrapper.clientHeight, from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
        if (viewport && viewport.ensure) {
            var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
            from > ensureFrom ? (from = ensureFrom, to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)) : Math.min(ensureTo, doc.lastLine()) >= to && (from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight), 
            to = ensureTo);
        }
        return {
            from: from,
            to: Math.max(to, from + 1)
        };
    }
    function alignHorizontally(cm) {
        var display = cm.display, view = display.view;
        if (display.alignWidgets || display.gutters.firstChild && cm.options.fixedGutter) {
            for (var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft, gutterW = display.gutters.offsetWidth, left = comp + "px", i = 0; i < view.length; i++) if (!view[i].hidden) {
                cm.options.fixedGutter && view[i].gutter && (view[i].gutter.style.left = left);
                var align = view[i].alignable;
                if (align) for (var j = 0; j < align.length; j++) align[j].style.left = left;
            }
            cm.options.fixedGutter && (display.gutters.style.left = comp + gutterW + "px");
        }
    }
    function maybeUpdateLineNumberWidth(cm) {
        if (!cm.options.lineNumbers) return !1;
        var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
        if (last.length != display.lineNumChars) {
            var test = display.measure.appendChild(elt("div", [ elt("div", last) ], "CodeMirror-linenumber CodeMirror-gutter-elt")), innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
            return display.lineGutter.style.width = "", display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1, 
            display.lineNumWidth = display.lineNumInnerWidth + padding, display.lineNumChars = display.lineNumInnerWidth ? last.length : -1, 
            display.lineGutter.style.width = display.lineNumWidth + "px", updateGutterSpace(cm), 
            !0;
        }
        return !1;
    }
    function lineNumberFor(options, i) {
        return String(options.lineNumberFormatter(i + options.firstLineNumber));
    }
    function compensateForHScroll(display) {
        return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left;
    }
    function DisplayUpdate(cm, viewport, force) {
        var display = cm.display;
        this.viewport = viewport, this.visible = visibleLines(display, cm.doc, viewport), 
        this.editorIsHidden = !display.wrapper.offsetWidth, this.wrapperHeight = display.wrapper.clientHeight, 
        this.wrapperWidth = display.wrapper.clientWidth, this.oldDisplayWidth = displayWidth(cm), 
        this.force = force, this.dims = getDimensions(cm), this.events = [];
    }
    function maybeClipScrollbars(cm) {
        var display = cm.display;
        !display.scrollbarsClipped && display.scroller.offsetWidth && (display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth, 
        display.heightForcer.style.height = scrollGap(cm) + "px", display.sizer.style.marginBottom = -display.nativeBarWidth + "px", 
        display.sizer.style.borderRightWidth = scrollGap(cm) + "px", display.scrollbarsClipped = !0);
    }
    function updateDisplayIfNeeded(cm, update) {
        var display = cm.display, doc = cm.doc;
        if (update.editorIsHidden) return resetView(cm), !1;
        if (!update.force && update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo && (null == display.updateLineNumbers || display.updateLineNumbers >= display.viewTo) && display.renderedView == display.view && 0 == countDirtyView(cm)) return !1;
        maybeUpdateLineNumberWidth(cm) && (resetView(cm), update.dims = getDimensions(cm));
        var end = doc.first + doc.size, from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first), to = Math.min(end, update.visible.to + cm.options.viewportMargin);
        display.viewFrom < from && from - display.viewFrom < 20 && (from = Math.max(doc.first, display.viewFrom)), 
        display.viewTo > to && display.viewTo - to < 20 && (to = Math.min(end, display.viewTo)), 
        sawCollapsedSpans && (from = visualLineNo(cm.doc, from), to = visualLineEndNo(cm.doc, to));
        var different = from != display.viewFrom || to != display.viewTo || display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
        adjustView(cm, from, to), display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom)), 
        cm.display.mover.style.top = display.viewOffset + "px";
        var toUpdate = countDirtyView(cm);
        if (!different && 0 == toUpdate && !update.force && display.renderedView == display.view && (null == display.updateLineNumbers || display.updateLineNumbers >= display.viewTo)) return !1;
        var focused = activeElt();
        return toUpdate > 4 && (display.lineDiv.style.display = "none"), patchDisplay(cm, display.updateLineNumbers, update.dims), 
        toUpdate > 4 && (display.lineDiv.style.display = ""), display.renderedView = display.view, 
        focused && activeElt() != focused && focused.offsetHeight && focused.focus(), removeChildren(display.cursorDiv), 
        removeChildren(display.selectionDiv), display.gutters.style.height = display.sizer.style.minHeight = 0, 
        different && (display.lastWrapHeight = update.wrapperHeight, display.lastWrapWidth = update.wrapperWidth, 
        startWorker(cm, 400)), display.updateLineNumbers = null, !0;
    }
    function postUpdateDisplay(cm, update) {
        for (var viewport = update.viewport, first = !0; (first && cm.options.lineWrapping && update.oldDisplayWidth != displayWidth(cm) || (viewport && null != viewport.top && (viewport = {
            top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)
        }), update.visible = visibleLines(cm.display, cm.doc, viewport), !(update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo))) && updateDisplayIfNeeded(cm, update); first = !1) {
            updateHeightsInViewport(cm);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm), setDocumentHeight(cm, barMeasure), updateScrollbars(cm, barMeasure);
        }
        update.signal(cm, "update", cm), (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) && (update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo), 
        cm.display.reportedViewFrom = cm.display.viewFrom, cm.display.reportedViewTo = cm.display.viewTo);
    }
    function updateDisplaySimple(cm, viewport) {
        var update = new DisplayUpdate(cm, viewport);
        if (updateDisplayIfNeeded(cm, update)) {
            updateHeightsInViewport(cm), postUpdateDisplay(cm, update);
            var barMeasure = measureForScrollbars(cm);
            updateSelection(cm), setDocumentHeight(cm, barMeasure), updateScrollbars(cm, barMeasure), 
            update.finish();
        }
    }
    function setDocumentHeight(cm, measure) {
        cm.display.sizer.style.minHeight = measure.docHeight + "px";
        var total = measure.docHeight + cm.display.barHeight;
        cm.display.heightForcer.style.top = total + "px", cm.display.gutters.style.height = Math.max(total + scrollGap(cm), measure.clientHeight) + "px";
    }
    function updateHeightsInViewport(cm) {
        for (var display = cm.display, prevBottom = display.lineDiv.offsetTop, i = 0; i < display.view.length; i++) {
            var height, cur = display.view[i];
            if (!cur.hidden) {
                if (ie && 8 > ie_version) {
                    var bot = cur.node.offsetTop + cur.node.offsetHeight;
                    height = bot - prevBottom, prevBottom = bot;
                } else {
                    var box = cur.node.getBoundingClientRect();
                    height = box.bottom - box.top;
                }
                var diff = cur.line.height - height;
                if (2 > height && (height = textHeight(display)), (diff > .001 || -.001 > diff) && (updateLineHeight(cur.line, height), 
                updateWidgetHeight(cur.line), cur.rest)) for (var j = 0; j < cur.rest.length; j++) updateWidgetHeight(cur.rest[j]);
            }
        }
    }
    function updateWidgetHeight(line) {
        if (line.widgets) for (var i = 0; i < line.widgets.length; ++i) line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight;
    }
    function getDimensions(cm) {
        for (var d = cm.display, left = {}, width = {}, gutterLeft = d.gutters.clientLeft, n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, 
        ++i) left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft, width[cm.options.gutters[i]] = n.clientWidth;
        return {
            fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth
        };
    }
    function patchDisplay(cm, updateNumbersFrom, dims) {
        function rm(node) {
            var next = node.nextSibling;
            return webkit && mac && cm.display.currentWheelTarget == node ? node.style.display = "none" : node.parentNode.removeChild(node), 
            next;
        }
        for (var display = cm.display, lineNumbers = cm.options.lineNumbers, container = display.lineDiv, cur = container.firstChild, view = display.view, lineN = display.viewFrom, i = 0; i < view.length; i++) {
            var lineView = view[i];
            if (lineView.hidden) ; else if (lineView.node && lineView.node.parentNode == container) {
                for (;cur != lineView.node; ) cur = rm(cur);
                var updateNumber = lineNumbers && null != updateNumbersFrom && lineN >= updateNumbersFrom && lineView.lineNumber;
                lineView.changes && (indexOf(lineView.changes, "gutter") > -1 && (updateNumber = !1), 
                updateLineForChanges(cm, lineView, lineN, dims)), updateNumber && (removeChildren(lineView.lineNumber), 
                lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))), 
                cur = lineView.node.nextSibling;
            } else {
                var node = buildLineElement(cm, lineView, lineN, dims);
                container.insertBefore(node, cur);
            }
            lineN += lineView.size;
        }
        for (;cur; ) cur = rm(cur);
    }
    function updateLineForChanges(cm, lineView, lineN, dims) {
        for (var j = 0; j < lineView.changes.length; j++) {
            var type = lineView.changes[j];
            "text" == type ? updateLineText(cm, lineView) : "gutter" == type ? updateLineGutter(cm, lineView, lineN, dims) : "class" == type ? updateLineClasses(lineView) : "widget" == type && updateLineWidgets(cm, lineView, dims);
        }
        lineView.changes = null;
    }
    function ensureLineWrapped(lineView) {
        return lineView.node == lineView.text && (lineView.node = elt("div", null, null, "position: relative"), 
        lineView.text.parentNode && lineView.text.parentNode.replaceChild(lineView.node, lineView.text), 
        lineView.node.appendChild(lineView.text), ie && 8 > ie_version && (lineView.node.style.zIndex = 2)), 
        lineView.node;
    }
    function updateLineBackground(lineView) {
        var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
        if (cls && (cls += " CodeMirror-linebackground"), lineView.background) cls ? lineView.background.className = cls : (lineView.background.parentNode.removeChild(lineView.background), 
        lineView.background = null); else if (cls) {
            var wrap = ensureLineWrapped(lineView);
            lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
        }
    }
    function getLineContent(cm, lineView) {
        var ext = cm.display.externalMeasured;
        return ext && ext.line == lineView.line ? (cm.display.externalMeasured = null, lineView.measure = ext.measure, 
        ext.built) : buildLineContent(cm, lineView);
    }
    function updateLineText(cm, lineView) {
        var cls = lineView.text.className, built = getLineContent(cm, lineView);
        lineView.text == lineView.node && (lineView.node = built.pre), lineView.text.parentNode.replaceChild(built.pre, lineView.text), 
        lineView.text = built.pre, built.bgClass != lineView.bgClass || built.textClass != lineView.textClass ? (lineView.bgClass = built.bgClass, 
        lineView.textClass = built.textClass, updateLineClasses(lineView)) : cls && (lineView.text.className = cls);
    }
    function updateLineClasses(lineView) {
        updateLineBackground(lineView), lineView.line.wrapClass ? ensureLineWrapped(lineView).className = lineView.line.wrapClass : lineView.node != lineView.text && (lineView.node.className = "");
        var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
        lineView.text.className = textClass || "";
    }
    function updateLineGutter(cm, lineView, lineN, dims) {
        if (lineView.gutter && (lineView.node.removeChild(lineView.gutter), lineView.gutter = null), 
        lineView.gutterBackground && (lineView.node.removeChild(lineView.gutterBackground), 
        lineView.gutterBackground = null), lineView.line.gutterClass) {
            var wrap = ensureLineWrapped(lineView);
            lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass, "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + dims.gutterTotalWidth + "px"), 
            wrap.insertBefore(lineView.gutterBackground, lineView.text);
        }
        var markers = lineView.line.gutterMarkers;
        if (cm.options.lineNumbers || markers) {
            var wrap = ensureLineWrapped(lineView), gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", "left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px");
            if (cm.display.input.setUneditable(gutterWrap), wrap.insertBefore(gutterWrap, lineView.text), 
            lineView.line.gutterClass && (gutterWrap.className += " " + lineView.line.gutterClass), 
            !cm.options.lineNumbers || markers && markers["CodeMirror-linenumbers"] || (lineView.lineNumber = gutterWrap.appendChild(elt("div", lineNumberFor(cm.options, lineN), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + cm.display.lineNumInnerWidth + "px"))), 
            markers) for (var k = 0; k < cm.options.gutters.length; ++k) {
                var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
                found && gutterWrap.appendChild(elt("div", [ found ], "CodeMirror-gutter-elt", "left: " + dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
            }
        }
    }
    function updateLineWidgets(cm, lineView, dims) {
        lineView.alignable && (lineView.alignable = null);
        for (var next, node = lineView.node.firstChild; node; node = next) {
            var next = node.nextSibling;
            "CodeMirror-linewidget" == node.className && lineView.node.removeChild(node);
        }
        insertLineWidgets(cm, lineView, dims);
    }
    function buildLineElement(cm, lineView, lineN, dims) {
        var built = getLineContent(cm, lineView);
        return lineView.text = lineView.node = built.pre, built.bgClass && (lineView.bgClass = built.bgClass), 
        built.textClass && (lineView.textClass = built.textClass), updateLineClasses(lineView), 
        updateLineGutter(cm, lineView, lineN, dims), insertLineWidgets(cm, lineView, dims), 
        lineView.node;
    }
    function insertLineWidgets(cm, lineView, dims) {
        if (insertLineWidgetsFor(cm, lineView.line, lineView, dims, !0), lineView.rest) for (var i = 0; i < lineView.rest.length; i++) insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, !1);
    }
    function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
        if (line.widgets) for (var wrap = ensureLineWrapped(lineView), i = 0, ws = line.widgets; i < ws.length; ++i) {
            var widget = ws[i], node = elt("div", [ widget.node ], "CodeMirror-linewidget");
            widget.handleMouseEvents || node.setAttribute("cm-ignore-events", "true"), positionLineWidget(widget, node, lineView, dims), 
            cm.display.input.setUneditable(node), allowAbove && widget.above ? wrap.insertBefore(node, lineView.gutter || lineView.text) : wrap.appendChild(node), 
            signalLater(widget, "redraw");
        }
    }
    function positionLineWidget(widget, node, lineView, dims) {
        if (widget.noHScroll) {
            (lineView.alignable || (lineView.alignable = [])).push(node);
            var width = dims.wrapperWidth;
            node.style.left = dims.fixedPos + "px", widget.coverGutter || (width -= dims.gutterTotalWidth, 
            node.style.paddingLeft = dims.gutterTotalWidth + "px"), node.style.width = width + "px";
        }
        widget.coverGutter && (node.style.zIndex = 5, node.style.position = "relative", 
        widget.noHScroll || (node.style.marginLeft = -dims.gutterTotalWidth + "px"));
    }
    function copyPos(x) {
        return Pos(x.line, x.ch);
    }
    function maxPos(a, b) {
        return cmp(a, b) < 0 ? b : a;
    }
    function minPos(a, b) {
        return cmp(a, b) < 0 ? a : b;
    }
    function ensureFocus(cm) {
        cm.state.focused || (cm.display.input.focus(), onFocus(cm));
    }
    function applyTextInput(cm, inserted, deleted, sel, origin) {
        var doc = cm.doc;
        cm.display.shift = !1, sel || (sel = doc.sel);
        var paste = cm.state.pasteIncoming || "paste" == origin, textLines = doc.splitLines(inserted), multiPaste = null;
        if (paste && sel.ranges.length > 1) if (lastCopied && lastCopied.join("\n") == inserted) {
            if (sel.ranges.length % lastCopied.length == 0) {
                multiPaste = [];
                for (var i = 0; i < lastCopied.length; i++) multiPaste.push(doc.splitLines(lastCopied[i]));
            }
        } else textLines.length == sel.ranges.length && (multiPaste = map(textLines, function(l) {
            return [ l ];
        }));
        for (var i = sel.ranges.length - 1; i >= 0; i--) {
            var range = sel.ranges[i], from = range.from(), to = range.to();
            range.empty() && (deleted && deleted > 0 ? from = Pos(from.line, from.ch - deleted) : cm.state.overwrite && !paste && (to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length))));
            var updateInput = cm.curOp.updateInput, changeEvent = {
                from: from,
                to: to,
                text: multiPaste ? multiPaste[i % multiPaste.length] : textLines,
                origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")
            };
            makeChange(cm.doc, changeEvent), signalLater(cm, "inputRead", cm, changeEvent);
        }
        inserted && !paste && triggerElectric(cm, inserted), ensureCursorVisible(cm), cm.curOp.updateInput = updateInput, 
        cm.curOp.typing = !0, cm.state.pasteIncoming = cm.state.cutIncoming = !1;
    }
    function handlePaste(e, cm) {
        var pasted = e.clipboardData && e.clipboardData.getData("text/plain");
        return pasted ? (e.preventDefault(), cm.isReadOnly() || cm.options.disableInput || runInOp(cm, function() {
            applyTextInput(cm, pasted, 0, null, "paste");
        }), !0) : void 0;
    }
    function triggerElectric(cm, inserted) {
        if (cm.options.electricChars && cm.options.smartIndent) for (var sel = cm.doc.sel, i = sel.ranges.length - 1; i >= 0; i--) {
            var range = sel.ranges[i];
            if (!(range.head.ch > 100 || i && sel.ranges[i - 1].head.line == range.head.line)) {
                var mode = cm.getModeAt(range.head), indented = !1;
                if (mode.electricChars) {
                    for (var j = 0; j < mode.electricChars.length; j++) if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
                        indented = indentLine(cm, range.head.line, "smart");
                        break;
                    }
                } else mode.electricInput && mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)) && (indented = indentLine(cm, range.head.line, "smart"));
                indented && signalLater(cm, "electricInput", cm, range.head.line);
            }
        }
    }
    function copyableRanges(cm) {
        for (var text = [], ranges = [], i = 0; i < cm.doc.sel.ranges.length; i++) {
            var line = cm.doc.sel.ranges[i].head.line, lineRange = {
                anchor: Pos(line, 0),
                head: Pos(line + 1, 0)
            };
            ranges.push(lineRange), text.push(cm.getRange(lineRange.anchor, lineRange.head));
        }
        return {
            text: text,
            ranges: ranges
        };
    }
    function disableBrowserMagic(field) {
        field.setAttribute("autocorrect", "off"), field.setAttribute("autocapitalize", "off"), 
        field.setAttribute("spellcheck", "false");
    }
    function TextareaInput(cm) {
        this.cm = cm, this.prevInput = "", this.pollingFast = !1, this.polling = new Delayed(), 
        this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null;
    }
    function hiddenTextarea() {
        var te = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"), div = elt("div", [ te ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return webkit ? te.style.width = "1000px" : te.setAttribute("wrap", "off"), ios && (te.style.border = "1px solid black"), 
        disableBrowserMagic(te), div;
    }
    function ContentEditableInput(cm) {
        this.cm = cm, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, 
        this.polling = new Delayed(), this.gracePeriod = !1;
    }
    function posToDOM(cm, pos) {
        var view = findViewForLine(cm, pos.line);
        if (!view || view.hidden) return null;
        var line = getLine(cm.doc, pos.line), info = mapFromLineView(view, line, pos.line), order = getOrder(line), side = "left";
        if (order) {
            var partPos = getBidiPartAt(order, pos.ch);
            side = partPos % 2 ? "right" : "left";
        }
        var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
        return result.offset = "right" == result.collapse ? result.end : result.start, result;
    }
    function badPos(pos, bad) {
        return bad && (pos.bad = !0), pos;
    }
    function domToPos(cm, node, offset) {
        var lineNode;
        if (node == cm.display.lineDiv) {
            if (lineNode = cm.display.lineDiv.childNodes[offset], !lineNode) return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), !0);
            node = null, offset = 0;
        } else for (lineNode = node; ;lineNode = lineNode.parentNode) {
            if (!lineNode || lineNode == cm.display.lineDiv) return null;
            if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) break;
        }
        for (var i = 0; i < cm.display.view.length; i++) {
            var lineView = cm.display.view[i];
            if (lineView.node == lineNode) return locateNodeInLineView(lineView, node, offset);
        }
    }
    function locateNodeInLineView(lineView, node, offset) {
        function find(textNode, topNode, offset) {
            for (var i = -1; i < (maps ? maps.length : 0); i++) for (var map = 0 > i ? measure.map : maps[i], j = 0; j < map.length; j += 3) {
                var curNode = map[j + 2];
                if (curNode == textNode || curNode == topNode) {
                    var line = lineNo(0 > i ? lineView.line : lineView.rest[i]), ch = map[j] + offset;
                    return (0 > offset || curNode != textNode) && (ch = map[j + (offset ? 1 : 0)]), 
                    Pos(line, ch);
                }
            }
        }
        var wrapper = lineView.text.firstChild, bad = !1;
        if (!node || !contains(wrapper, node)) return badPos(Pos(lineNo(lineView.line), 0), !0);
        if (node == wrapper && (bad = !0, node = wrapper.childNodes[offset], offset = 0, 
        !node)) {
            var line = lineView.rest ? lst(lineView.rest) : lineView.line;
            return badPos(Pos(lineNo(line), line.text.length), bad);
        }
        var textNode = 3 == node.nodeType ? node : null, topNode = node;
        for (textNode || 1 != node.childNodes.length || 3 != node.firstChild.nodeType || (textNode = node.firstChild, 
        offset && (offset = textNode.nodeValue.length)); topNode.parentNode != wrapper; ) topNode = topNode.parentNode;
        var measure = lineView.measure, maps = measure.maps, found = find(textNode, topNode, offset);
        if (found) return badPos(found, bad);
        for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
            if (found = find(after, after.firstChild, 0)) return badPos(Pos(found.line, found.ch - dist), bad);
            dist += after.textContent.length;
        }
        for (var before = topNode.previousSibling, dist = offset; before; before = before.previousSibling) {
            if (found = find(before, before.firstChild, -1)) return badPos(Pos(found.line, found.ch + dist), bad);
            dist += after.textContent.length;
        }
    }
    function domTextBetween(cm, from, to, fromLine, toLine) {
        function recognizeMarker(id) {
            return function(marker) {
                return marker.id == id;
            };
        }
        function walk(node) {
            if (1 == node.nodeType) {
                var cmText = node.getAttribute("cm-text");
                if (null != cmText) return "" == cmText && (cmText = node.textContent.replace(/\u200b/g, "")), 
                void (text += cmText);
                var range, markerID = node.getAttribute("cm-marker");
                if (markerID) {
                    var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
                    return void (found.length && (range = found[0].find()) && (text += getBetween(cm.doc, range.from, range.to).join(lineSep)));
                }
                if ("false" == node.getAttribute("contenteditable")) return;
                for (var i = 0; i < node.childNodes.length; i++) walk(node.childNodes[i]);
                /^(pre|div|p)$/i.test(node.nodeName) && (closing = !0);
            } else if (3 == node.nodeType) {
                var val = node.nodeValue;
                if (!val) return;
                closing && (text += lineSep, closing = !1), text += val;
            }
        }
        for (var text = "", closing = !1, lineSep = cm.doc.lineSeparator(); walk(from), 
        from != to; ) from = from.nextSibling;
        return text;
    }
    function Selection(ranges, primIndex) {
        this.ranges = ranges, this.primIndex = primIndex;
    }
    function Range(anchor, head) {
        this.anchor = anchor, this.head = head;
    }
    function normalizeSelection(ranges, primIndex) {
        var prim = ranges[primIndex];
        ranges.sort(function(a, b) {
            return cmp(a.from(), b.from());
        }), primIndex = indexOf(ranges, prim);
        for (var i = 1; i < ranges.length; i++) {
            var cur = ranges[i], prev = ranges[i - 1];
            if (cmp(prev.to(), cur.from()) >= 0) {
                var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to()), inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
                primIndex >= i && --primIndex, ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
            }
        }
        return new Selection(ranges, primIndex);
    }
    function simpleSelection(anchor, head) {
        return new Selection([ new Range(anchor, head || anchor) ], 0);
    }
    function clipLine(doc, n) {
        return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
    }
    function clipPos(doc, pos) {
        if (pos.line < doc.first) return Pos(doc.first, 0);
        var last = doc.first + doc.size - 1;
        return pos.line > last ? Pos(last, getLine(doc, last).text.length) : clipToLen(pos, getLine(doc, pos.line).text.length);
    }
    function clipToLen(pos, linelen) {
        var ch = pos.ch;
        return null == ch || ch > linelen ? Pos(pos.line, linelen) : 0 > ch ? Pos(pos.line, 0) : pos;
    }
    function isLine(doc, l) {
        return l >= doc.first && l < doc.first + doc.size;
    }
    function clipPosArray(doc, array) {
        for (var out = [], i = 0; i < array.length; i++) out[i] = clipPos(doc, array[i]);
        return out;
    }
    function extendRange(doc, range, head, other) {
        if (doc.cm && doc.cm.display.shift || doc.extend) {
            var anchor = range.anchor;
            if (other) {
                var posBefore = cmp(head, anchor) < 0;
                posBefore != cmp(other, anchor) < 0 ? (anchor = head, head = other) : posBefore != cmp(head, other) < 0 && (head = other);
            }
            return new Range(anchor, head);
        }
        return new Range(other || head, head);
    }
    function extendSelection(doc, head, other, options) {
        setSelection(doc, new Selection([ extendRange(doc, doc.sel.primary(), head, other) ], 0), options);
    }
    function extendSelections(doc, heads, options) {
        for (var out = [], i = 0; i < doc.sel.ranges.length; i++) out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null);
        var newSel = normalizeSelection(out, doc.sel.primIndex);
        setSelection(doc, newSel, options);
    }
    function replaceOneSelection(doc, i, range, options) {
        var ranges = doc.sel.ranges.slice(0);
        ranges[i] = range, setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options);
    }
    function setSimpleSelection(doc, anchor, head, options) {
        setSelection(doc, simpleSelection(anchor, head), options);
    }
    function filterSelectionChange(doc, sel, options) {
        var obj = {
            ranges: sel.ranges,
            update: function(ranges) {
                this.ranges = [];
                for (var i = 0; i < ranges.length; i++) this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor), clipPos(doc, ranges[i].head));
            },
            origin: options && options.origin
        };
        return signal(doc, "beforeSelectionChange", doc, obj), doc.cm && signal(doc.cm, "beforeSelectionChange", doc.cm, obj), 
        obj.ranges != sel.ranges ? normalizeSelection(obj.ranges, obj.ranges.length - 1) : sel;
    }
    function setSelectionReplaceHistory(doc, sel, options) {
        var done = doc.history.done, last = lst(done);
        last && last.ranges ? (done[done.length - 1] = sel, setSelectionNoUndo(doc, sel, options)) : setSelection(doc, sel, options);
    }
    function setSelection(doc, sel, options) {
        setSelectionNoUndo(doc, sel, options), addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
    }
    function setSelectionNoUndo(doc, sel, options) {
        (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) && (sel = filterSelectionChange(doc, sel, options));
        var bias = options && options.bias || (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
        setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, !0)), options && options.scroll === !1 || !doc.cm || ensureCursorVisible(doc.cm);
    }
    function setSelectionInner(doc, sel) {
        sel.equals(doc.sel) || (doc.sel = sel, doc.cm && (doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = !0, 
        signalCursorActivity(doc.cm)), signalLater(doc, "cursorActivity", doc));
    }
    function reCheckSelection(doc) {
        setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, !1), sel_dontScroll);
    }
    function skipAtomicInSelection(doc, sel, bias, mayClear) {
        for (var out, i = 0; i < sel.ranges.length; i++) {
            var range = sel.ranges[i], old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i], newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear), newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
            (out || newAnchor != range.anchor || newHead != range.head) && (out || (out = sel.ranges.slice(0, i)), 
            out[i] = new Range(newAnchor, newHead));
        }
        return out ? normalizeSelection(out, sel.primIndex) : sel;
    }
    function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
        var line = getLine(doc, pos.line);
        if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
            var sp = line.markedSpans[i], m = sp.marker;
            if ((null == sp.from || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) && (null == sp.to || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
                if (mayClear && (signal(m, "beforeCursorEnter"), m.explicitlyCleared)) {
                    if (line.markedSpans) {
                        --i;
                        continue;
                    }
                    break;
                }
                if (!m.atomic) continue;
                if (oldPos) {
                    var diff, near = m.find(0 > dir ? 1 : -1);
                    if ((0 > dir ? m.inclusiveRight : m.inclusiveLeft) && (near = movePos(doc, near, -dir, line)), 
                    near && near.line == pos.line && (diff = cmp(near, oldPos)) && (0 > dir ? 0 > diff : diff > 0)) return skipAtomicInner(doc, near, pos, dir, mayClear);
                }
                var far = m.find(0 > dir ? -1 : 1);
                return (0 > dir ? m.inclusiveLeft : m.inclusiveRight) && (far = movePos(doc, far, dir, line)), 
                far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null;
            }
        }
        return pos;
    }
    function skipAtomic(doc, pos, oldPos, bias, mayClear) {
        var dir = bias || 1, found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, dir, !0) || skipAtomicInner(doc, pos, oldPos, -dir, mayClear) || !mayClear && skipAtomicInner(doc, pos, oldPos, -dir, !0);
        return found ? found : (doc.cantEdit = !0, Pos(doc.first, 0));
    }
    function movePos(doc, pos, dir, line) {
        return 0 > dir && 0 == pos.ch ? pos.line > doc.first ? clipPos(doc, Pos(pos.line - 1)) : null : dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length ? pos.line < doc.first + doc.size - 1 ? Pos(pos.line + 1, 0) : null : new Pos(pos.line, pos.ch + dir);
    }
    function updateSelection(cm) {
        cm.display.input.showSelection(cm.display.input.prepareSelection());
    }
    function prepareSelection(cm, primary) {
        for (var doc = cm.doc, result = {}, curFragment = result.cursors = document.createDocumentFragment(), selFragment = result.selection = document.createDocumentFragment(), i = 0; i < doc.sel.ranges.length; i++) if (primary !== !1 || i != doc.sel.primIndex) {
            var range = doc.sel.ranges[i], collapsed = range.empty();
            (collapsed || cm.options.showCursorWhenSelecting) && drawSelectionCursor(cm, range.head, curFragment), 
            collapsed || drawSelectionRange(cm, range, selFragment);
        }
        return result;
    }
    function drawSelectionCursor(cm, head, output) {
        var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine), cursor = output.appendChild(elt("div", " ", "CodeMirror-cursor"));
        if (cursor.style.left = pos.left + "px", cursor.style.top = pos.top + "px", cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px", 
        pos.other) {
            var otherCursor = output.appendChild(elt("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            otherCursor.style.display = "", otherCursor.style.left = pos.other.left + "px", 
            otherCursor.style.top = pos.other.top + "px", otherCursor.style.height = .85 * (pos.other.bottom - pos.other.top) + "px";
        }
    }
    function drawSelectionRange(cm, range, output) {
        function add(left, top, width, bottom) {
            0 > top && (top = 0), top = Math.round(top), bottom = Math.round(bottom), fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left + "px; top: " + top + "px; width: " + (null == width ? rightSide - left : width) + "px; height: " + (bottom - top) + "px"));
        }
        function drawForLine(line, fromArg, toArg) {
            function coords(ch, bias) {
                return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
            }
            var start, end, lineObj = getLine(doc, line), lineLen = lineObj.text.length;
            return iterateBidiSections(getOrder(lineObj), fromArg || 0, null == toArg ? lineLen : toArg, function(from, to, dir) {
                var rightPos, left, right, leftPos = coords(from, "left");
                if (from == to) rightPos = leftPos, left = right = leftPos.left; else {
                    if (rightPos = coords(to - 1, "right"), "rtl" == dir) {
                        var tmp = leftPos;
                        leftPos = rightPos, rightPos = tmp;
                    }
                    left = leftPos.left, right = rightPos.right;
                }
                null == fromArg && 0 == from && (left = leftSide), rightPos.top - leftPos.top > 3 && (add(left, leftPos.top, null, leftPos.bottom), 
                left = leftSide, leftPos.bottom < rightPos.top && add(left, leftPos.bottom, null, rightPos.top)), 
                null == toArg && to == lineLen && (right = rightSide), (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left) && (start = leftPos), 
                (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right) && (end = rightPos), 
                leftSide + 1 > left && (left = leftSide), add(left, rightPos.top, right - left, rightPos.bottom);
            }), {
                start: start,
                end: end
            };
        }
        var display = cm.display, doc = cm.doc, fragment = document.createDocumentFragment(), padding = paddingH(cm.display), leftSide = padding.left, rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right, sFrom = range.from(), sTo = range.to();
        if (sFrom.line == sTo.line) drawForLine(sFrom.line, sFrom.ch, sTo.ch); else {
            var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line), singleVLine = visualLine(fromLine) == visualLine(toLine), leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end, rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
            singleVLine && (leftEnd.top < rightStart.top - 2 ? (add(leftEnd.right, leftEnd.top, null, leftEnd.bottom), 
            add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)) : add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)), 
            leftEnd.bottom < rightStart.top && add(leftSide, leftEnd.bottom, null, rightStart.top);
        }
        output.appendChild(fragment);
    }
    function restartBlink(cm) {
        if (cm.state.focused) {
            var display = cm.display;
            clearInterval(display.blinker);
            var on = !0;
            display.cursorDiv.style.visibility = "", cm.options.cursorBlinkRate > 0 ? display.blinker = setInterval(function() {
                display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
            }, cm.options.cursorBlinkRate) : cm.options.cursorBlinkRate < 0 && (display.cursorDiv.style.visibility = "hidden");
        }
    }
    function startWorker(cm, time) {
        cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo && cm.state.highlight.set(time, bind(highlightWorker, cm));
    }
    function highlightWorker(cm) {
        var doc = cm.doc;
        if (doc.frontier < doc.first && (doc.frontier = doc.first), !(doc.frontier >= cm.display.viewTo)) {
            var end = +new Date() + cm.options.workTime, state = copyState(doc.mode, getStateBefore(cm, doc.frontier)), changedLines = [];
            doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function(line) {
                if (doc.frontier >= cm.display.viewFrom) {
                    var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength, highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, !0);
                    line.styles = highlighted.styles;
                    var oldCls = line.styleClasses, newCls = highlighted.classes;
                    newCls ? line.styleClasses = newCls : oldCls && (line.styleClasses = null);
                    for (var ischange = !oldStyles || oldStyles.length != line.styles.length || oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass), i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
                    ischange && changedLines.push(doc.frontier), line.stateAfter = tooLong ? state : copyState(doc.mode, state);
                } else line.text.length <= cm.options.maxHighlightLength && processLine(cm, line.text, state), 
                line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
                return ++doc.frontier, +new Date() > end ? (startWorker(cm, cm.options.workDelay), 
                !0) : void 0;
            }), changedLines.length && runInOp(cm, function() {
                for (var i = 0; i < changedLines.length; i++) regLineChange(cm, changedLines[i], "text");
            });
        }
    }
    function findStartLine(cm, n, precise) {
        for (var minindent, minline, doc = cm.doc, lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1e3 : 100), search = n; search > lim; --search) {
            if (search <= doc.first) return doc.first;
            var line = getLine(doc, search - 1);
            if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
            var indented = countColumn(line.text, null, cm.options.tabSize);
            (null == minline || minindent > indented) && (minline = search - 1, minindent = indented);
        }
        return minline;
    }
    function getStateBefore(cm, n, precise) {
        var doc = cm.doc, display = cm.display;
        if (!doc.mode.startState) return !0;
        var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos - 1).stateAfter;
        return state = state ? copyState(doc.mode, state) : startState(doc.mode), doc.iter(pos, n, function(line) {
            processLine(cm, line.text, state);
            var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo;
            line.stateAfter = save ? copyState(doc.mode, state) : null, ++pos;
        }), precise && (doc.frontier = pos), state;
    }
    function paddingTop(display) {
        return display.lineSpace.offsetTop;
    }
    function paddingVert(display) {
        return display.mover.offsetHeight - display.lineSpace.offsetHeight;
    }
    function paddingH(display) {
        if (display.cachedPaddingH) return display.cachedPaddingH;
        var e = removeChildrenAndAdd(display.measure, elt("pre", "x")), style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, data = {
            left: parseInt(style.paddingLeft),
            right: parseInt(style.paddingRight)
        };
        return isNaN(data.left) || isNaN(data.right) || (display.cachedPaddingH = data), 
        data;
    }
    function scrollGap(cm) {
        return scrollerGap - cm.display.nativeBarWidth;
    }
    function displayWidth(cm) {
        return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth;
    }
    function displayHeight(cm) {
        return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight;
    }
    function ensureLineHeights(cm, lineView, rect) {
        var wrapping = cm.options.lineWrapping, curWidth = wrapping && displayWidth(cm);
        if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
            var heights = lineView.measure.heights = [];
            if (wrapping) {
                lineView.measure.width = curWidth;
                for (var rects = lineView.text.firstChild.getClientRects(), i = 0; i < rects.length - 1; i++) {
                    var cur = rects[i], next = rects[i + 1];
                    Math.abs(cur.bottom - next.bottom) > 2 && heights.push((cur.bottom + next.top) / 2 - rect.top);
                }
            }
            heights.push(rect.bottom - rect.top);
        }
    }
    function mapFromLineView(lineView, line, lineN) {
        if (lineView.line == line) return {
            map: lineView.measure.map,
            cache: lineView.measure.cache
        };
        for (var i = 0; i < lineView.rest.length; i++) if (lineView.rest[i] == line) return {
            map: lineView.measure.maps[i],
            cache: lineView.measure.caches[i]
        };
        for (var i = 0; i < lineView.rest.length; i++) if (lineNo(lineView.rest[i]) > lineN) return {
            map: lineView.measure.maps[i],
            cache: lineView.measure.caches[i],
            before: !0
        };
    }
    function updateExternalMeasurement(cm, line) {
        line = visualLine(line);
        var lineN = lineNo(line), view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
        view.lineN = lineN;
        var built = view.built = buildLineContent(cm, view);
        return view.text = built.pre, removeChildrenAndAdd(cm.display.lineMeasure, built.pre), 
        view;
    }
    function measureChar(cm, line, ch, bias) {
        return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias);
    }
    function findViewForLine(cm, lineN) {
        if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) return cm.display.view[findViewIndex(cm, lineN)];
        var ext = cm.display.externalMeasured;
        return ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size ? ext : void 0;
    }
    function prepareMeasureForLine(cm, line) {
        var lineN = lineNo(line), view = findViewForLine(cm, lineN);
        view && !view.text ? view = null : view && view.changes && (updateLineForChanges(cm, view, lineN, getDimensions(cm)), 
        cm.curOp.forceUpdate = !0), view || (view = updateExternalMeasurement(cm, line));
        var info = mapFromLineView(view, line, lineN);
        return {
            line: line,
            view: view,
            rect: null,
            map: info.map,
            cache: info.cache,
            before: info.before,
            hasHeights: !1
        };
    }
    function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
        prepared.before && (ch = -1);
        var found, key = ch + (bias || "");
        return prepared.cache.hasOwnProperty(key) ? found = prepared.cache[key] : (prepared.rect || (prepared.rect = prepared.view.text.getBoundingClientRect()), 
        prepared.hasHeights || (ensureLineHeights(cm, prepared.view, prepared.rect), prepared.hasHeights = !0), 
        found = measureCharInner(cm, prepared, ch, bias), found.bogus || (prepared.cache[key] = found)), 
        {
            left: found.left,
            right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom
        };
    }
    function nodeAndOffsetInLineMap(map, ch, bias) {
        for (var node, start, end, collapse, i = 0; i < map.length; i += 3) {
            var mStart = map[i], mEnd = map[i + 1];
            if (mStart > ch ? (start = 0, end = 1, collapse = "left") : mEnd > ch ? (start = ch - mStart, 
            end = start + 1) : (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) && (end = mEnd - mStart, 
            start = end - 1, ch >= mEnd && (collapse = "right")), null != start) {
                if (node = map[i + 2], mStart == mEnd && bias == (node.insertLeft ? "left" : "right") && (collapse = bias), 
                "left" == bias && 0 == start) for (;i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft; ) node = map[(i -= 3) + 2], 
                collapse = "left";
                if ("right" == bias && start == mEnd - mStart) for (;i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft; ) node = map[(i += 3) + 2], 
                collapse = "right";
                break;
            }
        }
        return {
            node: node,
            start: start,
            end: end,
            collapse: collapse,
            coverStart: mStart,
            coverEnd: mEnd
        };
    }
    function measureCharInner(cm, prepared, ch, bias) {
        var rect, place = nodeAndOffsetInLineMap(prepared.map, ch, bias), node = place.node, start = place.start, end = place.end, collapse = place.collapse;
        if (3 == node.nodeType) {
            for (var i = 0; 4 > i; i++) {
                for (;start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start)); ) --start;
                for (;place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end)); ) ++end;
                if (ie && 9 > ie_version && 0 == start && end == place.coverEnd - place.coverStart) rect = node.parentNode.getBoundingClientRect(); else if (ie && cm.options.lineWrapping) {
                    var rects = range(node, start, end).getClientRects();
                    rect = rects.length ? rects["right" == bias ? rects.length - 1 : 0] : nullRect;
                } else rect = range(node, start, end).getBoundingClientRect() || nullRect;
                if (rect.left || rect.right || 0 == start) break;
                end = start, start -= 1, collapse = "right";
            }
            ie && 11 > ie_version && (rect = maybeUpdateRectForZooming(cm.display.measure, rect));
        } else {
            start > 0 && (collapse = bias = "right");
            var rects;
            rect = cm.options.lineWrapping && (rects = node.getClientRects()).length > 1 ? rects["right" == bias ? rects.length - 1 : 0] : node.getBoundingClientRect();
        }
        if (ie && 9 > ie_version && !start && (!rect || !rect.left && !rect.right)) {
            var rSpan = node.parentNode.getClientRects()[0];
            rect = rSpan ? {
                left: rSpan.left,
                right: rSpan.left + charWidth(cm.display),
                top: rSpan.top,
                bottom: rSpan.bottom
            } : nullRect;
        }
        for (var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top, mid = (rtop + rbot) / 2, heights = prepared.view.measure.heights, i = 0; i < heights.length - 1 && !(mid < heights[i]); i++) ;
        var top = i ? heights[i - 1] : 0, bot = heights[i], result = {
            left: ("right" == collapse ? rect.right : rect.left) - prepared.rect.left,
            right: ("left" == collapse ? rect.left : rect.right) - prepared.rect.left,
            top: top,
            bottom: bot
        };
        return rect.left || rect.right || (result.bogus = !0), cm.options.singleCursorHeightPerLine || (result.rtop = rtop, 
        result.rbottom = rbot), result;
    }
    function maybeUpdateRectForZooming(measure, rect) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure)) return rect;
        var scaleX = screen.logicalXDPI / screen.deviceXDPI, scaleY = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: rect.left * scaleX,
            right: rect.right * scaleX,
            top: rect.top * scaleY,
            bottom: rect.bottom * scaleY
        };
    }
    function clearLineMeasurementCacheFor(lineView) {
        if (lineView.measure && (lineView.measure.cache = {}, lineView.measure.heights = null, 
        lineView.rest)) for (var i = 0; i < lineView.rest.length; i++) lineView.measure.caches[i] = {};
    }
    function clearLineMeasurementCache(cm) {
        cm.display.externalMeasure = null, removeChildren(cm.display.lineMeasure);
        for (var i = 0; i < cm.display.view.length; i++) clearLineMeasurementCacheFor(cm.display.view[i]);
    }
    function clearCaches(cm) {
        clearLineMeasurementCache(cm), cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null, 
        cm.options.lineWrapping || (cm.display.maxLineChanged = !0), cm.display.lineNumChars = null;
    }
    function pageScrollX() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }
    function pageScrollY() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }
    function intoCoordSystem(cm, lineObj, rect, context) {
        if (lineObj.widgets) for (var i = 0; i < lineObj.widgets.length; ++i) if (lineObj.widgets[i].above) {
            var size = widgetHeight(lineObj.widgets[i]);
            rect.top += size, rect.bottom += size;
        }
        if ("line" == context) return rect;
        context || (context = "local");
        var yOff = heightAtLine(lineObj);
        if ("local" == context ? yOff += paddingTop(cm.display) : yOff -= cm.display.viewOffset, 
        "page" == context || "window" == context) {
            var lOff = cm.display.lineSpace.getBoundingClientRect();
            yOff += lOff.top + ("window" == context ? 0 : pageScrollY());
            var xOff = lOff.left + ("window" == context ? 0 : pageScrollX());
            rect.left += xOff, rect.right += xOff;
        }
        return rect.top += yOff, rect.bottom += yOff, rect;
    }
    function fromCoordSystem(cm, coords, context) {
        if ("div" == context) return coords;
        var left = coords.left, top = coords.top;
        if ("page" == context) left -= pageScrollX(), top -= pageScrollY(); else if ("local" == context || !context) {
            var localBox = cm.display.sizer.getBoundingClientRect();
            left += localBox.left, top += localBox.top;
        }
        var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
        return {
            left: left - lineSpaceBox.left,
            top: top - lineSpaceBox.top
        };
    }
    function charCoords(cm, pos, context, lineObj, bias) {
        return lineObj || (lineObj = getLine(cm.doc, pos.line)), intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context);
    }
    function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
        function get(ch, right) {
            var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
            return right ? m.left = m.right : m.right = m.left, intoCoordSystem(cm, lineObj, m, context);
        }
        function getBidi(ch, partPos) {
            var part = order[partPos], right = part.level % 2;
            return ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level ? (part = order[--partPos], 
            ch = bidiRight(part) - (part.level % 2 ? 0 : 1), right = !0) : ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level && (part = order[++partPos], 
            ch = bidiLeft(part) - part.level % 2, right = !1), right && ch == part.to && ch > part.from ? get(ch - 1) : get(ch, right);
        }
        lineObj = lineObj || getLine(cm.doc, pos.line), preparedMeasure || (preparedMeasure = prepareMeasureForLine(cm, lineObj));
        var order = getOrder(lineObj), ch = pos.ch;
        if (!order) return get(ch);
        var partPos = getBidiPartAt(order, ch), val = getBidi(ch, partPos);
        return null != bidiOther && (val.other = getBidi(ch, bidiOther)), val;
    }
    function estimateCoords(cm, pos) {
        var left = 0, pos = clipPos(cm.doc, pos);
        cm.options.lineWrapping || (left = charWidth(cm.display) * pos.ch);
        var lineObj = getLine(cm.doc, pos.line), top = heightAtLine(lineObj) + paddingTop(cm.display);
        return {
            left: left,
            right: left,
            top: top,
            bottom: top + lineObj.height
        };
    }
    function PosWithInfo(line, ch, outside, xRel) {
        var pos = Pos(line, ch);
        return pos.xRel = xRel, outside && (pos.outside = !0), pos;
    }
    function coordsChar(cm, x, y) {
        var doc = cm.doc;
        if (y += cm.display.viewOffset, 0 > y) return PosWithInfo(doc.first, 0, !0, -1);
        var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
        if (lineN > last) return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, !0, 1);
        0 > x && (x = 0);
        for (var lineObj = getLine(doc, lineN); ;) {
            var found = coordsCharInner(cm, lineObj, lineN, x, y), merged = collapsedSpanAtEnd(lineObj), mergedPos = merged && merged.find(0, !0);
            if (!merged || !(found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0)) return found;
            lineN = lineNo(lineObj = mergedPos.to.line);
        }
    }
    function coordsCharInner(cm, lineObj, lineNo, x, y) {
        function getX(ch) {
            var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure);
            return wrongLine = !0, innerOff > sp.bottom ? sp.left - adjust : innerOff < sp.top ? sp.left + adjust : (wrongLine = !1, 
            sp.left);
        }
        var innerOff = y - heightAtLine(lineObj), wrongLine = !1, adjust = 2 * cm.display.wrapper.clientWidth, preparedMeasure = prepareMeasureForLine(cm, lineObj), bidi = getOrder(lineObj), dist = lineObj.text.length, from = lineLeft(lineObj), to = lineRight(lineObj), fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine;
        if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
        for (;;) {
            if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : 1 >= to - from) {
                for (var ch = fromX > x || toX - x >= x - fromX ? from : to, xDiff = x - (ch == from ? fromX : toX); isExtendingChar(lineObj.text.charAt(ch)); ) ++ch;
                var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside, -1 > xDiff ? -1 : xDiff > 1 ? 1 : 0);
                return pos;
            }
            var step = Math.ceil(dist / 2), middle = from + step;
            if (bidi) {
                middle = from;
                for (var i = 0; step > i; ++i) middle = moveVisually(lineObj, middle, 1);
            }
            var middleX = getX(middle);
            middleX > x ? (to = middle, toX = middleX, (toOutside = wrongLine) && (toX += 1e3), 
            dist = step) : (from = middle, fromX = middleX, fromOutside = wrongLine, dist -= step);
        }
    }
    function textHeight(display) {
        if (null != display.cachedTextHeight) return display.cachedTextHeight;
        if (null == measureText) {
            measureText = elt("pre");
            for (var i = 0; 49 > i; ++i) measureText.appendChild(document.createTextNode("x")), 
            measureText.appendChild(elt("br"));
            measureText.appendChild(document.createTextNode("x"));
        }
        removeChildrenAndAdd(display.measure, measureText);
        var height = measureText.offsetHeight / 50;
        return height > 3 && (display.cachedTextHeight = height), removeChildren(display.measure), 
        height || 1;
    }
    function charWidth(display) {
        if (null != display.cachedCharWidth) return display.cachedCharWidth;
        var anchor = elt("span", "xxxxxxxxxx"), pre = elt("pre", [ anchor ]);
        removeChildrenAndAdd(display.measure, pre);
        var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
        return width > 2 && (display.cachedCharWidth = width), width || 10;
    }
    function startOperation(cm) {
        cm.curOp = {
            cm: cm,
            viewChanged: !1,
            startHeight: cm.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++nextOpId
        }, operationGroup ? operationGroup.ops.push(cm.curOp) : cm.curOp.ownsGroup = operationGroup = {
            ops: [ cm.curOp ],
            delayedCallbacks: []
        };
    }
    function fireCallbacksForOps(group) {
        var callbacks = group.delayedCallbacks, i = 0;
        do {
            for (;i < callbacks.length; i++) callbacks[i].call(null);
            for (var j = 0; j < group.ops.length; j++) {
                var op = group.ops[j];
                if (op.cursorActivityHandlers) for (;op.cursorActivityCalled < op.cursorActivityHandlers.length; ) op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm);
            }
        } while (i < callbacks.length);
    }
    function endOperation(cm) {
        var op = cm.curOp, group = op.ownsGroup;
        if (group) try {
            fireCallbacksForOps(group);
        } finally {
            operationGroup = null;
            for (var i = 0; i < group.ops.length; i++) group.ops[i].cm.curOp = null;
            endOperations(group);
        }
    }
    function endOperations(group) {
        for (var ops = group.ops, i = 0; i < ops.length; i++) endOperation_R1(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_W1(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_R2(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_W2(ops[i]);
        for (var i = 0; i < ops.length; i++) endOperation_finish(ops[i]);
    }
    function endOperation_R1(op) {
        var cm = op.cm, display = cm.display;
        maybeClipScrollbars(cm), op.updateMaxLine && findMaxLine(cm), op.mustUpdate = op.viewChanged || op.forceUpdate || null != op.scrollTop || op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom || op.scrollToPos.to.line >= display.viewTo) || display.maxLineChanged && cm.options.lineWrapping, 
        op.update = op.mustUpdate && new DisplayUpdate(cm, op.mustUpdate && {
            top: op.scrollTop,
            ensure: op.scrollToPos
        }, op.forceUpdate);
    }
    function endOperation_W1(op) {
        op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
    }
    function endOperation_R2(op) {
        var cm = op.cm, display = cm.display;
        op.updatedDisplay && updateHeightsInViewport(cm), op.barMeasure = measureForScrollbars(cm), 
        display.maxLineChanged && !cm.options.lineWrapping && (op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3, 
        cm.display.sizerWidth = op.adjustWidthTo, op.barMeasure.scrollWidth = Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth), 
        op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))), 
        (op.updatedDisplay || op.selectionChanged) && (op.preparedSelection = display.input.prepareSelection());
    }
    function endOperation_W2(op) {
        var cm = op.cm;
        null != op.adjustWidthTo && (cm.display.sizer.style.minWidth = op.adjustWidthTo + "px", 
        op.maxScrollLeft < cm.doc.scrollLeft && setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), !0), 
        cm.display.maxLineChanged = !1), op.preparedSelection && cm.display.input.showSelection(op.preparedSelection), 
        op.updatedDisplay && setDocumentHeight(cm, op.barMeasure), (op.updatedDisplay || op.startHeight != cm.doc.height) && updateScrollbars(cm, op.barMeasure), 
        op.selectionChanged && restartBlink(cm), cm.state.focused && op.updateInput && cm.display.input.reset(op.typing), 
        !op.focus || op.focus != activeElt() || document.hasFocus && !document.hasFocus() || ensureFocus(op.cm);
    }
    function endOperation_finish(op) {
        var cm = op.cm, display = cm.display, doc = cm.doc;
        if (op.updatedDisplay && postUpdateDisplay(cm, op.update), null == display.wheelStartX || null == op.scrollTop && null == op.scrollLeft && !op.scrollToPos || (display.wheelStartX = display.wheelStartY = null), 
        null == op.scrollTop || display.scroller.scrollTop == op.scrollTop && !op.forceScroll || (doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop)), 
        display.scrollbars.setScrollTop(doc.scrollTop), display.scroller.scrollTop = doc.scrollTop), 
        null == op.scrollLeft || display.scroller.scrollLeft == op.scrollLeft && !op.forceScroll || (doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - displayWidth(cm), op.scrollLeft)), 
        display.scrollbars.setScrollLeft(doc.scrollLeft), display.scroller.scrollLeft = doc.scrollLeft, 
        alignHorizontally(cm)), op.scrollToPos) {
            var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from), clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
            op.scrollToPos.isCursor && cm.state.focused && maybeScrollWindow(cm, coords);
        }
        var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
        if (hidden) for (var i = 0; i < hidden.length; ++i) hidden[i].lines.length || signal(hidden[i], "hide");
        if (unhidden) for (var i = 0; i < unhidden.length; ++i) unhidden[i].lines.length && signal(unhidden[i], "unhide");
        display.wrapper.offsetHeight && (doc.scrollTop = cm.display.scroller.scrollTop), 
        op.changeObjs && signal(cm, "changes", cm, op.changeObjs), op.update && op.update.finish();
    }
    function runInOp(cm, f) {
        if (cm.curOp) return f();
        startOperation(cm);
        try {
            return f();
        } finally {
            endOperation(cm);
        }
    }
    function operation(cm, f) {
        return function() {
            if (cm.curOp) return f.apply(cm, arguments);
            startOperation(cm);
            try {
                return f.apply(cm, arguments);
            } finally {
                endOperation(cm);
            }
        };
    }
    function methodOp(f) {
        return function() {
            if (this.curOp) return f.apply(this, arguments);
            startOperation(this);
            try {
                return f.apply(this, arguments);
            } finally {
                endOperation(this);
            }
        };
    }
    function docMethodOp(f) {
        return function() {
            var cm = this.cm;
            if (!cm || cm.curOp) return f.apply(this, arguments);
            startOperation(cm);
            try {
                return f.apply(this, arguments);
            } finally {
                endOperation(cm);
            }
        };
    }
    function LineView(doc, line, lineN) {
        this.line = line, this.rest = visualLineContinued(line), this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1, 
        this.node = this.text = null, this.hidden = lineIsHidden(doc, line);
    }
    function buildViewArray(cm, from, to) {
        for (var nextPos, array = [], pos = from; to > pos; pos = nextPos) {
            var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
            nextPos = pos + view.size, array.push(view);
        }
        return array;
    }
    function regChange(cm, from, to, lendiff) {
        null == from && (from = cm.doc.first), null == to && (to = cm.doc.first + cm.doc.size), 
        lendiff || (lendiff = 0);
        var display = cm.display;
        if (lendiff && to < display.viewTo && (null == display.updateLineNumbers || display.updateLineNumbers > from) && (display.updateLineNumbers = from), 
        cm.curOp.viewChanged = !0, from >= display.viewTo) sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo && resetView(cm); else if (to <= display.viewFrom) sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom ? resetView(cm) : (display.viewFrom += lendiff, 
        display.viewTo += lendiff); else if (from <= display.viewFrom && to >= display.viewTo) resetView(cm); else if (from <= display.viewFrom) {
            var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
            cut ? (display.view = display.view.slice(cut.index), display.viewFrom = cut.lineN, 
            display.viewTo += lendiff) : resetView(cm);
        } else if (to >= display.viewTo) {
            var cut = viewCuttingPoint(cm, from, from, -1);
            cut ? (display.view = display.view.slice(0, cut.index), display.viewTo = cut.lineN) : resetView(cm);
        } else {
            var cutTop = viewCuttingPoint(cm, from, from, -1), cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
            cutTop && cutBot ? (display.view = display.view.slice(0, cutTop.index).concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN)).concat(display.view.slice(cutBot.index)), 
            display.viewTo += lendiff) : resetView(cm);
        }
        var ext = display.externalMeasured;
        ext && (to < ext.lineN ? ext.lineN += lendiff : from < ext.lineN + ext.size && (display.externalMeasured = null));
    }
    function regLineChange(cm, line, type) {
        cm.curOp.viewChanged = !0;
        var display = cm.display, ext = cm.display.externalMeasured;
        if (ext && line >= ext.lineN && line < ext.lineN + ext.size && (display.externalMeasured = null), 
        !(line < display.viewFrom || line >= display.viewTo)) {
            var lineView = display.view[findViewIndex(cm, line)];
            if (null != lineView.node) {
                var arr = lineView.changes || (lineView.changes = []);
                -1 == indexOf(arr, type) && arr.push(type);
            }
        }
    }
    function resetView(cm) {
        cm.display.viewFrom = cm.display.viewTo = cm.doc.first, cm.display.view = [], cm.display.viewOffset = 0;
    }
    function findViewIndex(cm, n) {
        if (n >= cm.display.viewTo) return null;
        if (n -= cm.display.viewFrom, 0 > n) return null;
        for (var view = cm.display.view, i = 0; i < view.length; i++) if (n -= view[i].size, 
        0 > n) return i;
    }
    function viewCuttingPoint(cm, oldN, newN, dir) {
        var diff, index = findViewIndex(cm, oldN), view = cm.display.view;
        if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size) return {
            index: index,
            lineN: newN
        };
        for (var i = 0, n = cm.display.viewFrom; index > i; i++) n += view[i].size;
        if (n != oldN) {
            if (dir > 0) {
                if (index == view.length - 1) return null;
                diff = n + view[index].size - oldN, index++;
            } else diff = n - oldN;
            oldN += diff, newN += diff;
        }
        for (;visualLineNo(cm.doc, newN) != newN; ) {
            if (index == (0 > dir ? 0 : view.length - 1)) return null;
            newN += dir * view[index - (0 > dir ? 1 : 0)].size, index += dir;
        }
        return {
            index: index,
            lineN: newN
        };
    }
    function adjustView(cm, from, to) {
        var display = cm.display, view = display.view;
        0 == view.length || from >= display.viewTo || to <= display.viewFrom ? (display.view = buildViewArray(cm, from, to), 
        display.viewFrom = from) : (display.viewFrom > from ? display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) : display.viewFrom < from && (display.view = display.view.slice(findViewIndex(cm, from))), 
        display.viewFrom = from, display.viewTo < to ? display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) : display.viewTo > to && (display.view = display.view.slice(0, findViewIndex(cm, to)))), 
        display.viewTo = to;
    }
    function countDirtyView(cm) {
        for (var view = cm.display.view, dirty = 0, i = 0; i < view.length; i++) {
            var lineView = view[i];
            lineView.hidden || lineView.node && !lineView.changes || ++dirty;
        }
        return dirty;
    }
    function registerEventHandlers(cm) {
        function finishTouch() {
            d.activeTouch && (touchFinished = setTimeout(function() {
                d.activeTouch = null;
            }, 1e3), prevTouch = d.activeTouch, prevTouch.end = +new Date());
        }
        function isMouseLikeTouchEvent(e) {
            if (1 != e.touches.length) return !1;
            var touch = e.touches[0];
            return touch.radiusX <= 1 && touch.radiusY <= 1;
        }
        function farAway(touch, other) {
            if (null == other.left) return !0;
            var dx = other.left - touch.left, dy = other.top - touch.top;
            return dx * dx + dy * dy > 400;
        }
        var d = cm.display;
        on(d.scroller, "mousedown", operation(cm, onMouseDown)), ie && 11 > ie_version ? on(d.scroller, "dblclick", operation(cm, function(e) {
            if (!signalDOMEvent(cm, e)) {
                var pos = posFromMouse(cm, e);
                if (pos && !clickInGutter(cm, e) && !eventInWidget(cm.display, e)) {
                    e_preventDefault(e);
                    var word = cm.findWordAt(pos);
                    extendSelection(cm.doc, word.anchor, word.head);
                }
            }
        })) : on(d.scroller, "dblclick", function(e) {
            signalDOMEvent(cm, e) || e_preventDefault(e);
        }), captureRightClick || on(d.scroller, "contextmenu", function(e) {
            onContextMenu(cm, e);
        });
        var touchFinished, prevTouch = {
            end: 0
        };
        on(d.scroller, "touchstart", function(e) {
            if (!isMouseLikeTouchEvent(e)) {
                clearTimeout(touchFinished);
                var now = +new Date();
                d.activeTouch = {
                    start: now,
                    moved: !1,
                    prev: now - prevTouch.end <= 300 ? prevTouch : null
                }, 1 == e.touches.length && (d.activeTouch.left = e.touches[0].pageX, d.activeTouch.top = e.touches[0].pageY);
            }
        }), on(d.scroller, "touchmove", function() {
            d.activeTouch && (d.activeTouch.moved = !0);
        }), on(d.scroller, "touchend", function(e) {
            var touch = d.activeTouch;
            if (touch && !eventInWidget(d, e) && null != touch.left && !touch.moved && new Date() - touch.start < 300) {
                var range, pos = cm.coordsChar(d.activeTouch, "page");
                range = !touch.prev || farAway(touch, touch.prev) ? new Range(pos, pos) : !touch.prev.prev || farAway(touch, touch.prev.prev) ? cm.findWordAt(pos) : new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))), 
                cm.setSelection(range.anchor, range.head), cm.focus(), e_preventDefault(e);
            }
            finishTouch();
        }), on(d.scroller, "touchcancel", finishTouch), on(d.scroller, "scroll", function() {
            d.scroller.clientHeight && (setScrollTop(cm, d.scroller.scrollTop), setScrollLeft(cm, d.scroller.scrollLeft, !0), 
            signal(cm, "scroll", cm));
        }), on(d.scroller, "mousewheel", function(e) {
            onScrollWheel(cm, e);
        }), on(d.scroller, "DOMMouseScroll", function(e) {
            onScrollWheel(cm, e);
        }), on(d.wrapper, "scroll", function() {
            d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
        }), d.dragFunctions = {
            enter: function(e) {
                signalDOMEvent(cm, e) || e_stop(e);
            },
            over: function(e) {
                signalDOMEvent(cm, e) || (onDragOver(cm, e), e_stop(e));
            },
            start: function(e) {
                onDragStart(cm, e);
            },
            drop: operation(cm, onDrop),
            leave: function() {
                clearDragCursor(cm);
            }
        };
        var inp = d.input.getField();
        on(inp, "keyup", function(e) {
            onKeyUp.call(cm, e);
        }), on(inp, "keydown", operation(cm, onKeyDown)), on(inp, "keypress", operation(cm, onKeyPress)), 
        on(inp, "focus", bind(onFocus, cm)), on(inp, "blur", bind(onBlur, cm));
    }
    function dragDropChanged(cm, value, old) {
        var wasOn = old && old != CodeMirror.Init;
        if (!value != !wasOn) {
            var funcs = cm.display.dragFunctions, toggle = value ? on : off;
            toggle(cm.display.scroller, "dragstart", funcs.start), toggle(cm.display.scroller, "dragenter", funcs.enter), 
            toggle(cm.display.scroller, "dragover", funcs.over), toggle(cm.display.scroller, "dragleave", funcs.leave), 
            toggle(cm.display.scroller, "drop", funcs.drop);
        }
    }
    function onResize(cm) {
        var d = cm.display;
        (d.lastWrapHeight != d.wrapper.clientHeight || d.lastWrapWidth != d.wrapper.clientWidth) && (d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null, 
        d.scrollbarsClipped = !1, cm.setSize());
    }
    function eventInWidget(display, e) {
        for (var n = e_target(e); n != display.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == display.sizer && n != display.mover) return !0;
    }
    function posFromMouse(cm, e, liberal, forRect) {
        var display = cm.display;
        if (!liberal && "true" == e_target(e).getAttribute("cm-not-content")) return null;
        var x, y, space = display.lineSpace.getBoundingClientRect();
        try {
            x = e.clientX - space.left, y = e.clientY - space.top;
        } catch (e) {
            return null;
        }
        var line, coords = coordsChar(cm, x, y);
        if (forRect && 1 == coords.xRel && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
            var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
            coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
        }
        return coords;
    }
    function onMouseDown(e) {
        var cm = this, display = cm.display;
        if (!(display.activeTouch && display.input.supportsTouch() || signalDOMEvent(cm, e))) {
            if (display.shift = e.shiftKey, eventInWidget(display, e)) return void (webkit || (display.scroller.draggable = !1, 
            setTimeout(function() {
                display.scroller.draggable = !0;
            }, 100)));
            if (!clickInGutter(cm, e)) {
                var start = posFromMouse(cm, e);
                switch (window.focus(), e_button(e)) {
                  case 1:
                    cm.state.selectingText ? cm.state.selectingText(e) : start ? leftButtonDown(cm, e, start) : e_target(e) == display.scroller && e_preventDefault(e);
                    break;

                  case 2:
                    webkit && (cm.state.lastMiddleDown = +new Date()), start && extendSelection(cm.doc, start), 
                    setTimeout(function() {
                        display.input.focus();
                    }, 20), e_preventDefault(e);
                    break;

                  case 3:
                    captureRightClick ? onContextMenu(cm, e) : delayBlurEvent(cm);
                }
            }
        }
    }
    function leftButtonDown(cm, e, start) {
        ie ? setTimeout(bind(ensureFocus, cm), 0) : cm.curOp.focus = activeElt();
        var type, now = +new Date();
        lastDoubleClick && lastDoubleClick.time > now - 400 && 0 == cmp(lastDoubleClick.pos, start) ? type = "triple" : lastClick && lastClick.time > now - 400 && 0 == cmp(lastClick.pos, start) ? (type = "double", 
        lastDoubleClick = {
            time: now,
            pos: start
        }) : (type = "single", lastClick = {
            time: now,
            pos: start
        });
        var contained, sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey;
        cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() && "single" == type && (contained = sel.contains(start)) > -1 && (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) && (cmp(contained.to(), start) > 0 || start.xRel < 0) ? leftButtonStartDrag(cm, e, start, modifier) : leftButtonSelect(cm, e, start, type, modifier);
    }
    function leftButtonStartDrag(cm, e, start, modifier) {
        var display = cm.display, startTime = +new Date(), dragEnd = operation(cm, function(e2) {
            webkit && (display.scroller.draggable = !1), cm.state.draggingText = !1, off(document, "mouseup", dragEnd), 
            off(display.scroller, "drop", dragEnd), Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10 && (e_preventDefault(e2), 
            !modifier && +new Date() - 200 < startTime && extendSelection(cm.doc, start), webkit || ie && 9 == ie_version ? setTimeout(function() {
                document.body.focus(), display.input.focus();
            }, 20) : display.input.focus());
        });
        webkit && (display.scroller.draggable = !0), cm.state.draggingText = dragEnd, display.scroller.dragDrop && display.scroller.dragDrop(), 
        on(document, "mouseup", dragEnd), on(display.scroller, "drop", dragEnd);
    }
    function leftButtonSelect(cm, e, start, type, addNew) {
        function extendTo(pos) {
            if (0 != cmp(lastPos, pos)) if (lastPos = pos, "rect" == type) {
                for (var ranges = [], tabSize = cm.options.tabSize, startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize), posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize), left = Math.min(startCol, posCol), right = Math.max(startCol, posCol), line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line)); end >= line; line++) {
                    var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
                    left == right ? ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) : text.length > leftPos && ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize))));
                }
                ranges.length || ranges.push(new Range(start, start)), setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex), {
                    origin: "*mouse",
                    scroll: !1
                }), cm.scrollIntoView(pos);
            } else {
                var oldRange = ourRange, anchor = oldRange.anchor, head = pos;
                if ("single" != type) {
                    if ("double" == type) var range = cm.findWordAt(pos); else var range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0)));
                    cmp(range.anchor, anchor) > 0 ? (head = range.head, anchor = minPos(oldRange.from(), range.anchor)) : (head = range.anchor, 
                    anchor = maxPos(oldRange.to(), range.head));
                }
                var ranges = startSel.ranges.slice(0);
                ranges[ourIndex] = new Range(clipPos(doc, anchor), head), setSelection(doc, normalizeSelection(ranges, ourIndex), sel_mouse);
            }
        }
        function extend(e) {
            var curCount = ++counter, cur = posFromMouse(cm, e, !0, "rect" == type);
            if (cur) if (0 != cmp(cur, lastPos)) {
                cm.curOp.focus = activeElt(), extendTo(cur);
                var visible = visibleLines(display, doc);
                (cur.line >= visible.to || cur.line < visible.from) && setTimeout(operation(cm, function() {
                    counter == curCount && extend(e);
                }), 150);
            } else {
                var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
                outside && setTimeout(operation(cm, function() {
                    counter == curCount && (display.scroller.scrollTop += outside, extend(e));
                }), 50);
            }
        }
        function done(e) {
            cm.state.selectingText = !1, counter = 1 / 0, e_preventDefault(e), display.input.focus(), 
            off(document, "mousemove", move), off(document, "mouseup", up), doc.history.lastSelOrigin = null;
        }
        var display = cm.display, doc = cm.doc;
        e_preventDefault(e);
        var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
        if (addNew && !e.shiftKey ? (ourIndex = doc.sel.contains(start), ourRange = ourIndex > -1 ? ranges[ourIndex] : new Range(start, start)) : (ourRange = doc.sel.primary(), 
        ourIndex = doc.sel.primIndex), e.altKey) type = "rect", addNew || (ourRange = new Range(start, start)), 
        start = posFromMouse(cm, e, !0, !0), ourIndex = -1; else if ("double" == type) {
            var word = cm.findWordAt(start);
            ourRange = cm.display.shift || doc.extend ? extendRange(doc, ourRange, word.anchor, word.head) : word;
        } else if ("triple" == type) {
            var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)));
            ourRange = cm.display.shift || doc.extend ? extendRange(doc, ourRange, line.anchor, line.head) : line;
        } else ourRange = extendRange(doc, ourRange, start);
        addNew ? -1 == ourIndex ? (ourIndex = ranges.length, setSelection(doc, normalizeSelection(ranges.concat([ ourRange ]), ourIndex), {
            scroll: !1,
            origin: "*mouse"
        })) : ranges.length > 1 && ranges[ourIndex].empty() && "single" == type && !e.shiftKey ? (setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0), {
            scroll: !1,
            origin: "*mouse"
        }), startSel = doc.sel) : replaceOneSelection(doc, ourIndex, ourRange, sel_mouse) : (ourIndex = 0, 
        setSelection(doc, new Selection([ ourRange ], 0), sel_mouse), startSel = doc.sel);
        var lastPos = start, editorSize = display.wrapper.getBoundingClientRect(), counter = 0, move = operation(cm, function(e) {
            e_button(e) ? extend(e) : done(e);
        }), up = operation(cm, done);
        cm.state.selectingText = up, on(document, "mousemove", move), on(document, "mouseup", up);
    }
    function gutterEvent(cm, e, type, prevent) {
        try {
            var mX = e.clientX, mY = e.clientY;
        } catch (e) {
            return !1;
        }
        if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) return !1;
        prevent && e_preventDefault(e);
        var display = cm.display, lineBox = display.lineDiv.getBoundingClientRect();
        if (mY > lineBox.bottom || !hasHandler(cm, type)) return e_defaultPrevented(e);
        mY -= lineBox.top - display.viewOffset;
        for (var i = 0; i < cm.options.gutters.length; ++i) {
            var g = display.gutters.childNodes[i];
            if (g && g.getBoundingClientRect().right >= mX) {
                var line = lineAtHeight(cm.doc, mY), gutter = cm.options.gutters[i];
                return signal(cm, type, cm, line, gutter, e), e_defaultPrevented(e);
            }
        }
    }
    function clickInGutter(cm, e) {
        return gutterEvent(cm, e, "gutterClick", !0);
    }
    function onDrop(e) {
        var cm = this;
        if (clearDragCursor(cm), !signalDOMEvent(cm, e) && !eventInWidget(cm.display, e)) {
            e_preventDefault(e), ie && (lastDrop = +new Date());
            var pos = posFromMouse(cm, e, !0), files = e.dataTransfer.files;
            if (pos && !cm.isReadOnly()) if (files && files.length && window.FileReader && window.File) for (var n = files.length, text = Array(n), read = 0, loadFile = function(file, i) {
                if (!cm.options.allowDropFileTypes || -1 != indexOf(cm.options.allowDropFileTypes, file.type)) {
                    var reader = new FileReader();
                    reader.onload = operation(cm, function() {
                        var content = reader.result;
                        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content) && (content = ""), text[i] = content, 
                        ++read == n) {
                            pos = clipPos(cm.doc, pos);
                            var change = {
                                from: pos,
                                to: pos,
                                text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                                origin: "paste"
                            };
                            makeChange(cm.doc, change), setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
                        }
                    }), reader.readAsText(file);
                }
            }, i = 0; n > i; ++i) loadFile(files[i], i); else {
                if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) return cm.state.draggingText(e), 
                void setTimeout(function() {
                    cm.display.input.focus();
                }, 20);
                try {
                    var text = e.dataTransfer.getData("Text");
                    if (text) {
                        if (cm.state.draggingText && !(mac ? e.altKey : e.ctrlKey)) var selected = cm.listSelections();
                        if (setSelectionNoUndo(cm.doc, simpleSelection(pos, pos)), selected) for (var i = 0; i < selected.length; ++i) replaceRange(cm.doc, "", selected[i].anchor, selected[i].head, "drag");
                        cm.replaceSelection(text, "around", "paste"), cm.display.input.focus();
                    }
                } catch (e) {}
            }
        }
    }
    function onDragStart(cm, e) {
        if (ie && (!cm.state.draggingText || +new Date() - lastDrop < 100)) return void e_stop(e);
        if (!signalDOMEvent(cm, e) && !eventInWidget(cm.display, e) && (e.dataTransfer.setData("Text", cm.getSelection()), 
        e.dataTransfer.setDragImage && !safari)) {
            var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
            img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 
            presto && (img.width = img.height = 1, cm.display.wrapper.appendChild(img), img._top = img.offsetTop), 
            e.dataTransfer.setDragImage(img, 0, 0), presto && img.parentNode.removeChild(img);
        }
    }
    function onDragOver(cm, e) {
        var pos = posFromMouse(cm, e);
        if (pos) {
            var frag = document.createDocumentFragment();
            drawSelectionCursor(cm, pos, frag), cm.display.dragCursor || (cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), 
            cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)), 
            removeChildrenAndAdd(cm.display.dragCursor, frag);
        }
    }
    function clearDragCursor(cm) {
        cm.display.dragCursor && (cm.display.lineSpace.removeChild(cm.display.dragCursor), 
        cm.display.dragCursor = null);
    }
    function setScrollTop(cm, val) {
        Math.abs(cm.doc.scrollTop - val) < 2 || (cm.doc.scrollTop = val, gecko || updateDisplaySimple(cm, {
            top: val
        }), cm.display.scroller.scrollTop != val && (cm.display.scroller.scrollTop = val), 
        cm.display.scrollbars.setScrollTop(val), gecko && updateDisplaySimple(cm), startWorker(cm, 100));
    }
    function setScrollLeft(cm, val, isScroller) {
        (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) || (val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth), 
        cm.doc.scrollLeft = val, alignHorizontally(cm), cm.display.scroller.scrollLeft != val && (cm.display.scroller.scrollLeft = val), 
        cm.display.scrollbars.setScrollLeft(val));
    }
    function onScrollWheel(cm, e) {
        var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y, display = cm.display, scroll = display.scroller, canScrollX = scroll.scrollWidth > scroll.clientWidth, canScrollY = scroll.scrollHeight > scroll.clientHeight;
        if (dx && canScrollX || dy && canScrollY) {
            if (dy && mac && webkit) outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) for (var i = 0; i < view.length; i++) if (view[i].node == cur) {
                cm.display.currentWheelTarget = cur;
                break outer;
            }
            if (dx && !gecko && !presto && null != wheelPixelsPerUnit) return dy && canScrollY && setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))), 
            setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth))), 
            (!dy || dy && canScrollY) && e_preventDefault(e), void (display.wheelStartX = null);
            if (dy && null != wheelPixelsPerUnit) {
                var pixels = dy * wheelPixelsPerUnit, top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
                0 > pixels ? top = Math.max(0, top + pixels - 50) : bot = Math.min(cm.doc.height, bot + pixels + 50), 
                updateDisplaySimple(cm, {
                    top: top,
                    bottom: bot
                });
            }
            20 > wheelSamples && (null == display.wheelStartX ? (display.wheelStartX = scroll.scrollLeft, 
            display.wheelStartY = scroll.scrollTop, display.wheelDX = dx, display.wheelDY = dy, 
            setTimeout(function() {
                if (null != display.wheelStartX) {
                    var movedX = scroll.scrollLeft - display.wheelStartX, movedY = scroll.scrollTop - display.wheelStartY, sample = movedY && display.wheelDY && movedY / display.wheelDY || movedX && display.wheelDX && movedX / display.wheelDX;
                    display.wheelStartX = display.wheelStartY = null, sample && (wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1), 
                    ++wheelSamples);
                }
            }, 200)) : (display.wheelDX += dx, display.wheelDY += dy));
        }
    }
    function doHandleBinding(cm, bound, dropShift) {
        if ("string" == typeof bound && (bound = commands[bound], !bound)) return !1;
        cm.display.input.ensurePolled();
        var prevShift = cm.display.shift, done = !1;
        try {
            cm.isReadOnly() && (cm.state.suppressEdits = !0), dropShift && (cm.display.shift = !1), 
            done = bound(cm) != Pass;
        } finally {
            cm.display.shift = prevShift, cm.state.suppressEdits = !1;
        }
        return done;
    }
    function lookupKeyForEditor(cm, name, handle) {
        for (var i = 0; i < cm.state.keyMaps.length; i++) {
            var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
            if (result) return result;
        }
        return cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm) || lookupKey(name, cm.options.keyMap, handle, cm);
    }
    function dispatchKey(cm, name, e, handle) {
        var seq = cm.state.keySeq;
        if (seq) {
            if (isModifierKey(name)) return "handled";
            stopSeq.set(50, function() {
                cm.state.keySeq == seq && (cm.state.keySeq = null, cm.display.input.reset());
            }), name = seq + " " + name;
        }
        var result = lookupKeyForEditor(cm, name, handle);
        return "multi" == result && (cm.state.keySeq = name), "handled" == result && signalLater(cm, "keyHandled", cm, name, e), 
        ("handled" == result || "multi" == result) && (e_preventDefault(e), restartBlink(cm)), 
        seq && !result && /\'$/.test(name) ? (e_preventDefault(e), !0) : !!result;
    }
    function handleKeyBinding(cm, e) {
        var name = keyName(e, !0);
        return name ? e.shiftKey && !cm.state.keySeq ? dispatchKey(cm, "Shift-" + name, e, function(b) {
            return doHandleBinding(cm, b, !0);
        }) || dispatchKey(cm, name, e, function(b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? doHandleBinding(cm, b) : void 0;
        }) : dispatchKey(cm, name, e, function(b) {
            return doHandleBinding(cm, b);
        }) : !1;
    }
    function handleCharBinding(cm, e, ch) {
        return dispatchKey(cm, "'" + ch + "'", e, function(b) {
            return doHandleBinding(cm, b, !0);
        });
    }
    function onKeyDown(e) {
        var cm = this;
        if (cm.curOp.focus = activeElt(), !signalDOMEvent(cm, e)) {
            ie && 11 > ie_version && 27 == e.keyCode && (e.returnValue = !1);
            var code = e.keyCode;
            cm.display.shift = 16 == code || e.shiftKey;
            var handled = handleKeyBinding(cm, e);
            presto && (lastStoppedKey = handled ? code : null, !handled && 88 == code && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey) && cm.replaceSelection("", null, "cut")), 
            18 != code || /\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className) || showCrossHair(cm);
        }
    }
    function showCrossHair(cm) {
        function up(e) {
            18 != e.keyCode && e.altKey || (rmClass(lineDiv, "CodeMirror-crosshair"), off(document, "keyup", up), 
            off(document, "mouseover", up));
        }
        var lineDiv = cm.display.lineDiv;
        addClass(lineDiv, "CodeMirror-crosshair"), on(document, "keyup", up), on(document, "mouseover", up);
    }
    function onKeyUp(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), signalDOMEvent(this, e);
    }
    function onKeyPress(e) {
        var cm = this;
        if (!(eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey)) {
            var keyCode = e.keyCode, charCode = e.charCode;
            if (presto && keyCode == lastStoppedKey) return lastStoppedKey = null, void e_preventDefault(e);
            if (!presto || e.which && !(e.which < 10) || !handleKeyBinding(cm, e)) {
                var ch = String.fromCharCode(null == charCode ? keyCode : charCode);
                handleCharBinding(cm, e, ch) || cm.display.input.onKeyPress(e);
            }
        }
    }
    function delayBlurEvent(cm) {
        cm.state.delayingBlurEvent = !0, setTimeout(function() {
            cm.state.delayingBlurEvent && (cm.state.delayingBlurEvent = !1, onBlur(cm));
        }, 100);
    }
    function onFocus(cm) {
        cm.state.delayingBlurEvent && (cm.state.delayingBlurEvent = !1), "nocursor" != cm.options.readOnly && (cm.state.focused || (signal(cm, "focus", cm), 
        cm.state.focused = !0, addClass(cm.display.wrapper, "CodeMirror-focused"), cm.curOp || cm.display.selForContextMenu == cm.doc.sel || (cm.display.input.reset(), 
        webkit && setTimeout(function() {
            cm.display.input.reset(!0);
        }, 20)), cm.display.input.receivedFocus()), restartBlink(cm));
    }
    function onBlur(cm) {
        cm.state.delayingBlurEvent || (cm.state.focused && (signal(cm, "blur", cm), cm.state.focused = !1, 
        rmClass(cm.display.wrapper, "CodeMirror-focused")), clearInterval(cm.display.blinker), 
        setTimeout(function() {
            cm.state.focused || (cm.display.shift = !1);
        }, 150));
    }
    function onContextMenu(cm, e) {
        eventInWidget(cm.display, e) || contextMenuInGutter(cm, e) || signalDOMEvent(cm, e, "contextmenu") || cm.display.input.onContextMenu(e);
    }
    function contextMenuInGutter(cm, e) {
        return hasHandler(cm, "gutterContextMenu") ? gutterEvent(cm, e, "gutterContextMenu", !1) : !1;
    }
    function adjustForChange(pos, change) {
        if (cmp(pos, change.from) < 0) return pos;
        if (cmp(pos, change.to) <= 0) return changeEnd(change);
        var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
        return pos.line == change.to.line && (ch += changeEnd(change).ch - change.to.ch), 
        Pos(line, ch);
    }
    function computeSelAfterChange(doc, change) {
        for (var out = [], i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i];
            out.push(new Range(adjustForChange(range.anchor, change), adjustForChange(range.head, change)));
        }
        return normalizeSelection(out, doc.sel.primIndex);
    }
    function offsetPos(pos, old, nw) {
        return pos.line == old.line ? Pos(nw.line, pos.ch - old.ch + nw.ch) : Pos(nw.line + (pos.line - old.line), pos.ch);
    }
    function computeReplacedSel(doc, changes, hint) {
        for (var out = [], oldPrev = Pos(doc.first, 0), newPrev = oldPrev, i = 0; i < changes.length; i++) {
            var change = changes[i], from = offsetPos(change.from, oldPrev, newPrev), to = offsetPos(changeEnd(change), oldPrev, newPrev);
            if (oldPrev = change.to, newPrev = to, "around" == hint) {
                var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
                out[i] = new Range(inv ? to : from, inv ? from : to);
            } else out[i] = new Range(from, from);
        }
        return new Selection(out, doc.sel.primIndex);
    }
    function filterChange(doc, change, update) {
        var obj = {
            canceled: !1,
            from: change.from,
            to: change.to,
            text: change.text,
            origin: change.origin,
            cancel: function() {
                this.canceled = !0;
            }
        };
        return update && (obj.update = function(from, to, text, origin) {
            from && (this.from = clipPos(doc, from)), to && (this.to = clipPos(doc, to)), text && (this.text = text), 
            void 0 !== origin && (this.origin = origin);
        }), signal(doc, "beforeChange", doc, obj), doc.cm && signal(doc.cm, "beforeChange", doc.cm, obj), 
        obj.canceled ? null : {
            from: obj.from,
            to: obj.to,
            text: obj.text,
            origin: obj.origin
        };
    }
    function makeChange(doc, change, ignoreReadOnly) {
        if (doc.cm) {
            if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly);
            if (doc.cm.state.suppressEdits) return;
        }
        if (!(hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) || (change = filterChange(doc, change, !0))) {
            var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
            if (split) for (var i = split.length - 1; i >= 0; --i) makeChangeInner(doc, {
                from: split[i].from,
                to: split[i].to,
                text: i ? [ "" ] : change.text
            }); else makeChangeInner(doc, change);
        }
    }
    function makeChangeInner(doc, change) {
        if (1 != change.text.length || "" != change.text[0] || 0 != cmp(change.from, change.to)) {
            var selAfter = computeSelAfterChange(doc, change);
            addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN), makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
            var rebased = [];
            linkedDocs(doc, function(doc, sharedHist) {
                sharedHist || -1 != indexOf(rebased, doc.history) || (rebaseHist(doc.history, change), 
                rebased.push(doc.history)), makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
            });
        }
    }
    function makeChangeFromHistory(doc, type, allowSelectionOnly) {
        if (!doc.cm || !doc.cm.state.suppressEdits) {
            for (var event, hist = doc.history, selAfter = doc.sel, source = "undo" == type ? hist.done : hist.undone, dest = "undo" == type ? hist.undone : hist.done, i = 0; i < source.length && (event = source[i], 
            allowSelectionOnly ? !event.ranges || event.equals(doc.sel) : event.ranges); i++) ;
            if (i != source.length) {
                for (hist.lastOrigin = hist.lastSelOrigin = null; event = source.pop(), event.ranges; ) {
                    if (pushSelectionToHistory(event, dest), allowSelectionOnly && !event.equals(doc.sel)) return void setSelection(doc, event, {
                        clearRedo: !1
                    });
                    selAfter = event;
                }
                var antiChanges = [];
                pushSelectionToHistory(selAfter, dest), dest.push({
                    changes: antiChanges,
                    generation: hist.generation
                }), hist.generation = event.generation || ++hist.maxGeneration;
                for (var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange"), i = event.changes.length - 1; i >= 0; --i) {
                    var change = event.changes[i];
                    if (change.origin = type, filter && !filterChange(doc, change, !1)) return void (source.length = 0);
                    antiChanges.push(historyChangeFromChange(doc, change));
                    var after = i ? computeSelAfterChange(doc, change) : lst(source);
                    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change)), !i && doc.cm && doc.cm.scrollIntoView({
                        from: change.from,
                        to: changeEnd(change)
                    });
                    var rebased = [];
                    linkedDocs(doc, function(doc, sharedHist) {
                        sharedHist || -1 != indexOf(rebased, doc.history) || (rebaseHist(doc.history, change), 
                        rebased.push(doc.history)), makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
                    });
                }
            }
        }
    }
    function shiftDoc(doc, distance) {
        if (0 != distance && (doc.first += distance, doc.sel = new Selection(map(doc.sel.ranges, function(range) {
            return new Range(Pos(range.anchor.line + distance, range.anchor.ch), Pos(range.head.line + distance, range.head.ch));
        }), doc.sel.primIndex), doc.cm)) {
            regChange(doc.cm, doc.first, doc.first - distance, distance);
            for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++) regLineChange(doc.cm, l, "gutter");
        }
    }
    function makeChangeSingleDoc(doc, change, selAfter, spans) {
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);
        if (change.to.line < doc.first) return void shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
        if (!(change.from.line > doc.lastLine())) {
            if (change.from.line < doc.first) {
                var shift = change.text.length - 1 - (doc.first - change.from.line);
                shiftDoc(doc, shift), change = {
                    from: Pos(doc.first, 0),
                    to: Pos(change.to.line + shift, change.to.ch),
                    text: [ lst(change.text) ],
                    origin: change.origin
                };
            }
            var last = doc.lastLine();
            change.to.line > last && (change = {
                from: change.from,
                to: Pos(last, getLine(doc, last).text.length),
                text: [ change.text[0] ],
                origin: change.origin
            }), change.removed = getBetween(doc, change.from, change.to), selAfter || (selAfter = computeSelAfterChange(doc, change)), 
            doc.cm ? makeChangeSingleDocInEditor(doc.cm, change, spans) : updateDoc(doc, change, spans), 
            setSelectionNoUndo(doc, selAfter, sel_dontScroll);
        }
    }
    function makeChangeSingleDocInEditor(cm, change, spans) {
        var doc = cm.doc, display = cm.display, from = change.from, to = change.to, recomputeMaxLength = !1, checkWidthStart = from.line;
        cm.options.lineWrapping || (checkWidthStart = lineNo(visualLine(getLine(doc, from.line))), 
        doc.iter(checkWidthStart, to.line + 1, function(line) {
            return line == display.maxLine ? (recomputeMaxLength = !0, !0) : void 0;
        })), doc.sel.contains(change.from, change.to) > -1 && signalCursorActivity(cm), 
        updateDoc(doc, change, spans, estimateHeight(cm)), cm.options.lineWrapping || (doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
            var len = lineLength(line);
            len > display.maxLineLength && (display.maxLine = line, display.maxLineLength = len, 
            display.maxLineChanged = !0, recomputeMaxLength = !1);
        }), recomputeMaxLength && (cm.curOp.updateMaxLine = !0)), doc.frontier = Math.min(doc.frontier, from.line), 
        startWorker(cm, 400);
        var lendiff = change.text.length - (to.line - from.line) - 1;
        change.full ? regChange(cm) : from.line != to.line || 1 != change.text.length || isWholeLineUpdate(cm.doc, change) ? regChange(cm, from.line, to.line + 1, lendiff) : regLineChange(cm, from.line, "text");
        var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
        if (changeHandler || changesHandler) {
            var obj = {
                from: from,
                to: to,
                text: change.text,
                removed: change.removed,
                origin: change.origin
            };
            changeHandler && signalLater(cm, "change", cm, obj), changesHandler && (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj);
        }
        cm.display.selForContextMenu = null;
    }
    function replaceRange(doc, code, from, to, origin) {
        if (to || (to = from), cmp(to, from) < 0) {
            var tmp = to;
            to = from, from = tmp;
        }
        "string" == typeof code && (code = doc.splitLines(code)), makeChange(doc, {
            from: from,
            to: to,
            text: code,
            origin: origin
        });
    }
    function maybeScrollWindow(cm, coords) {
        if (!signalDOMEvent(cm, "scrollCursorIntoView")) {
            var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
            if (coords.top + box.top < 0 ? doScroll = !0 : coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight) && (doScroll = !1), 
            null != doScroll && !phantom) {
                var scrollNode = elt("div", "​", null, "position: absolute; top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px; height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px; left: " + coords.left + "px; width: 2px;");
                cm.display.lineSpace.appendChild(scrollNode), scrollNode.scrollIntoView(doScroll), 
                cm.display.lineSpace.removeChild(scrollNode);
            }
        }
    }
    function scrollPosIntoView(cm, pos, end, margin) {
        null == margin && (margin = 0);
        for (var limit = 0; 5 > limit; limit++) {
            var changed = !1, coords = cursorCoords(cm, pos), endCoords = end && end != pos ? cursorCoords(cm, end) : coords, scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left), Math.min(coords.top, endCoords.top) - margin, Math.max(coords.left, endCoords.left), Math.max(coords.bottom, endCoords.bottom) + margin), startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
            if (null != scrollPos.scrollTop && (setScrollTop(cm, scrollPos.scrollTop), Math.abs(cm.doc.scrollTop - startTop) > 1 && (changed = !0)), 
            null != scrollPos.scrollLeft && (setScrollLeft(cm, scrollPos.scrollLeft), Math.abs(cm.doc.scrollLeft - startLeft) > 1 && (changed = !0)), 
            !changed) break;
        }
        return coords;
    }
    function scrollIntoView(cm, x1, y1, x2, y2) {
        var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
        null != scrollPos.scrollTop && setScrollTop(cm, scrollPos.scrollTop), null != scrollPos.scrollLeft && setScrollLeft(cm, scrollPos.scrollLeft);
    }
    function calculateScrollPos(cm, x1, y1, x2, y2) {
        var display = cm.display, snapMargin = textHeight(cm.display);
        0 > y1 && (y1 = 0);
        var screentop = cm.curOp && null != cm.curOp.scrollTop ? cm.curOp.scrollTop : display.scroller.scrollTop, screen = displayHeight(cm), result = {};
        y2 - y1 > screen && (y2 = y1 + screen);
        var docBottom = cm.doc.height + paddingVert(display), atTop = snapMargin > y1, atBottom = y2 > docBottom - snapMargin;
        if (screentop > y1) result.scrollTop = atTop ? 0 : y1; else if (y2 > screentop + screen) {
            var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
            newTop != screentop && (result.scrollTop = newTop);
        }
        var screenleft = cm.curOp && null != cm.curOp.scrollLeft ? cm.curOp.scrollLeft : display.scroller.scrollLeft, screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0), tooWide = x2 - x1 > screenw;
        return tooWide && (x2 = x1 + screenw), 10 > x1 ? result.scrollLeft = 0 : screenleft > x1 ? result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) : x2 > screenw + screenleft - 3 && (result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw), 
        result;
    }
    function addToScrollPos(cm, left, top) {
        (null != left || null != top) && resolveScrollToPos(cm), null != left && (cm.curOp.scrollLeft = (null == cm.curOp.scrollLeft ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left), 
        null != top && (cm.curOp.scrollTop = (null == cm.curOp.scrollTop ? cm.doc.scrollTop : cm.curOp.scrollTop) + top);
    }
    function ensureCursorVisible(cm) {
        resolveScrollToPos(cm);
        var cur = cm.getCursor(), from = cur, to = cur;
        cm.options.lineWrapping || (from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur, to = Pos(cur.line, cur.ch + 1)), 
        cm.curOp.scrollToPos = {
            from: from,
            to: to,
            margin: cm.options.cursorScrollMargin,
            isCursor: !0
        };
    }
    function resolveScrollToPos(cm) {
        var range = cm.curOp.scrollToPos;
        if (range) {
            cm.curOp.scrollToPos = null;
            var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to), sPos = calculateScrollPos(cm, Math.min(from.left, to.left), Math.min(from.top, to.top) - range.margin, Math.max(from.right, to.right), Math.max(from.bottom, to.bottom) + range.margin);
            cm.scrollTo(sPos.scrollLeft, sPos.scrollTop);
        }
    }
    function indentLine(cm, n, how, aggressive) {
        var state, doc = cm.doc;
        null == how && (how = "add"), "smart" == how && (doc.mode.indent ? state = getStateBefore(cm, n) : how = "prev");
        var tabSize = cm.options.tabSize, line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
        line.stateAfter && (line.stateAfter = null);
        var indentation, curSpaceString = line.text.match(/^\s*/)[0];
        if (aggressive || /\S/.test(line.text)) {
            if ("smart" == how && (indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text), 
            indentation == Pass || indentation > 150)) {
                if (!aggressive) return;
                how = "prev";
            }
        } else indentation = 0, how = "not";
        "prev" == how ? indentation = n > doc.first ? countColumn(getLine(doc, n - 1).text, null, tabSize) : 0 : "add" == how ? indentation = curSpace + cm.options.indentUnit : "subtract" == how ? indentation = curSpace - cm.options.indentUnit : "number" == typeof how && (indentation = curSpace + how), 
        indentation = Math.max(0, indentation);
        var indentString = "", pos = 0;
        if (cm.options.indentWithTabs) for (var i = Math.floor(indentation / tabSize); i; --i) pos += tabSize, 
        indentString += "	";
        if (indentation > pos && (indentString += spaceStr(indentation - pos)), indentString != curSpaceString) return replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input"), 
        line.stateAfter = null, !0;
        for (var i = 0; i < doc.sel.ranges.length; i++) {
            var range = doc.sel.ranges[i];
            if (range.head.line == n && range.head.ch < curSpaceString.length) {
                var pos = Pos(n, curSpaceString.length);
                replaceOneSelection(doc, i, new Range(pos, pos));
                break;
            }
        }
    }
    function changeLine(doc, handle, changeType, op) {
        var no = handle, line = handle;
        return "number" == typeof handle ? line = getLine(doc, clipLine(doc, handle)) : no = lineNo(handle), 
        null == no ? null : (op(line, no) && doc.cm && regLineChange(doc.cm, no, changeType), 
        line);
    }
    function deleteNearSelection(cm, compute) {
        for (var ranges = cm.doc.sel.ranges, kill = [], i = 0; i < ranges.length; i++) {
            for (var toKill = compute(ranges[i]); kill.length && cmp(toKill.from, lst(kill).to) <= 0; ) {
                var replaced = kill.pop();
                if (cmp(replaced.from, toKill.from) < 0) {
                    toKill.from = replaced.from;
                    break;
                }
            }
            kill.push(toKill);
        }
        runInOp(cm, function() {
            for (var i = kill.length - 1; i >= 0; i--) replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete");
            ensureCursorVisible(cm);
        });
    }
    function findPosH(doc, pos, dir, unit, visually) {
        function findNextLine() {
            var l = line + dir;
            return l < doc.first || l >= doc.first + doc.size ? possible = !1 : (line = l, lineObj = getLine(doc, l));
        }
        function moveOnce(boundToLine) {
            var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, !0);
            if (null == next) {
                if (boundToLine || !findNextLine()) return possible = !1;
                ch = visually ? (0 > dir ? lineRight : lineLeft)(lineObj) : 0 > dir ? lineObj.text.length : 0;
            } else ch = next;
            return !0;
        }
        var line = pos.line, ch = pos.ch, origDir = dir, lineObj = getLine(doc, line), possible = !0;
        if ("char" == unit) moveOnce(); else if ("column" == unit) moveOnce(!0); else if ("word" == unit || "group" == unit) for (var sawType = null, group = "group" == unit, helper = doc.cm && doc.cm.getHelper(pos, "wordChars"), first = !0; !(0 > dir) || moveOnce(!first); first = !1) {
            var cur = lineObj.text.charAt(ch) || "\n", type = isWordChar(cur, helper) ? "w" : group && "\n" == cur ? "n" : !group || /\s/.test(cur) ? null : "p";
            if (!group || first || type || (type = "s"), sawType && sawType != type) {
                0 > dir && (dir = 1, moveOnce());
                break;
            }
            if (type && (sawType = type), dir > 0 && !moveOnce(!first)) break;
        }
        var result = skipAtomic(doc, Pos(line, ch), pos, origDir, !0);
        return possible || (result.hitSide = !0), result;
    }
    function findPosV(cm, pos, dir, unit) {
        var y, doc = cm.doc, x = pos.left;
        if ("page" == unit) {
            var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            y = pos.top + dir * (pageSize - (0 > dir ? 1.5 : .5) * textHeight(cm.display));
        } else "line" == unit && (y = dir > 0 ? pos.bottom + 3 : pos.top - 3);
        for (;;) {
            var target = coordsChar(cm, x, y);
            if (!target.outside) break;
            if (0 > dir ? 0 >= y : y >= doc.height) {
                target.hitSide = !0;
                break;
            }
            y += 5 * dir;
        }
        return target;
    }
    function option(name, deflt, handle, notOnInit) {
        CodeMirror.defaults[name] = deflt, handle && (optionHandlers[name] = notOnInit ? function(cm, val, old) {
            old != Init && handle(cm, val, old);
        } : handle);
    }
    function normalizeKeyName(name) {
        for (var alt, ctrl, shift, cmd, parts = name.split(/-(?!$)/), name = parts[parts.length - 1], i = 0; i < parts.length - 1; i++) {
            var mod = parts[i];
            if (/^(cmd|meta|m)$/i.test(mod)) cmd = !0; else if (/^a(lt)?$/i.test(mod)) alt = !0; else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = !0; else {
                if (!/^s(hift)$/i.test(mod)) throw new Error("Unrecognized modifier name: " + mod);
                shift = !0;
            }
        }
        return alt && (name = "Alt-" + name), ctrl && (name = "Ctrl-" + name), cmd && (name = "Cmd-" + name), 
        shift && (name = "Shift-" + name), name;
    }
    function getKeyMap(val) {
        return "string" == typeof val ? keyMap[val] : val;
    }
    function markText(doc, from, to, options, type) {
        if (options && options.shared) return markTextShared(doc, from, to, options, type);
        if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);
        var marker = new TextMarker(doc, type), diff = cmp(from, to);
        if (options && copyObj(options, marker, !1), diff > 0 || 0 == diff && marker.clearWhenEmpty !== !1) return marker;
        if (marker.replacedWith && (marker.collapsed = !0, marker.widgetNode = elt("span", [ marker.replacedWith ], "CodeMirror-widget"), 
        options.handleMouseEvents || marker.widgetNode.setAttribute("cm-ignore-events", "true"), 
        options.insertLeft && (marker.widgetNode.insertLeft = !0)), marker.collapsed) {
            if (conflictingCollapsedRange(doc, from.line, from, to, marker) || from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
            sawCollapsedSpans = !0;
        }
        marker.addToHistory && addChangeToHistory(doc, {
            from: from,
            to: to,
            origin: "markText"
        }, doc.sel, NaN);
        var updateMaxLine, curLine = from.line, cm = doc.cm;
        if (doc.iter(curLine, to.line + 1, function(line) {
            cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine && (updateMaxLine = !0), 
            marker.collapsed && curLine != from.line && updateLineHeight(line, 0), addMarkedSpan(line, new MarkedSpan(marker, curLine == from.line ? from.ch : null, curLine == to.line ? to.ch : null)), 
            ++curLine;
        }), marker.collapsed && doc.iter(from.line, to.line + 1, function(line) {
            lineIsHidden(doc, line) && updateLineHeight(line, 0);
        }), marker.clearOnEnter && on(marker, "beforeCursorEnter", function() {
            marker.clear();
        }), marker.readOnly && (sawReadOnlySpans = !0, (doc.history.done.length || doc.history.undone.length) && doc.clearHistory()), 
        marker.collapsed && (marker.id = ++nextMarkerId, marker.atomic = !0), cm) {
            if (updateMaxLine && (cm.curOp.updateMaxLine = !0), marker.collapsed) regChange(cm, from.line, to.line + 1); else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css) for (var i = from.line; i <= to.line; i++) regLineChange(cm, i, "text");
            marker.atomic && reCheckSelection(cm.doc), signalLater(cm, "markerAdded", cm, marker);
        }
        return marker;
    }
    function markTextShared(doc, from, to, options, type) {
        options = copyObj(options), options.shared = !1;
        var markers = [ markText(doc, from, to, options, type) ], primary = markers[0], widget = options.widgetNode;
        return linkedDocs(doc, function(doc) {
            widget && (options.widgetNode = widget.cloneNode(!0)), markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
            for (var i = 0; i < doc.linked.length; ++i) if (doc.linked[i].isParent) return;
            primary = lst(markers);
        }), new SharedTextMarker(markers, primary);
    }
    function findSharedMarkers(doc) {
        return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function(m) {
            return m.parent;
        });
    }
    function copySharedMarkers(doc, markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i], pos = marker.find(), mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
            if (cmp(mFrom, mTo)) {
                var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
                marker.markers.push(subMark), subMark.parent = marker;
            }
        }
    }
    function detachSharedMarkers(markers) {
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i], linked = [ marker.primary.doc ];
            linkedDocs(marker.primary.doc, function(d) {
                linked.push(d);
            });
            for (var j = 0; j < marker.markers.length; j++) {
                var subMarker = marker.markers[j];
                -1 == indexOf(linked, subMarker.doc) && (subMarker.parent = null, marker.markers.splice(j--, 1));
            }
        }
    }
    function MarkedSpan(marker, from, to) {
        this.marker = marker, this.from = from, this.to = to;
    }
    function getMarkedSpanFor(spans, marker) {
        if (spans) for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            if (span.marker == marker) return span;
        }
    }
    function removeMarkedSpan(spans, span) {
        for (var r, i = 0; i < spans.length; ++i) spans[i] != span && (r || (r = [])).push(spans[i]);
        return r;
    }
    function addMarkedSpan(line, span) {
        line.markedSpans = line.markedSpans ? line.markedSpans.concat([ span ]) : [ span ], 
        span.marker.attachLine(line);
    }
    function markedSpansBefore(old, startCh, isInsert) {
        if (old) for (var nw, i = 0; i < old.length; ++i) {
            var span = old[i], marker = span.marker, startsBefore = null == span.from || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
            if (startsBefore || span.from == startCh && "bookmark" == marker.type && (!isInsert || !span.marker.insertLeft)) {
                var endsAfter = null == span.to || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
            }
        }
        return nw;
    }
    function markedSpansAfter(old, endCh, isInsert) {
        if (old) for (var nw, i = 0; i < old.length; ++i) {
            var span = old[i], marker = span.marker, endsAfter = null == span.to || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
            if (endsAfter || span.from == endCh && "bookmark" == marker.type && (!isInsert || span.marker.insertLeft)) {
                var startsBefore = null == span.from || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
                (nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh, null == span.to ? null : span.to - endCh));
            }
        }
        return nw;
    }
    function stretchSpansOverChange(doc, change) {
        if (change.full) return null;
        var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans, oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
        if (!oldFirst && !oldLast) return null;
        var startCh = change.from.ch, endCh = change.to.ch, isInsert = 0 == cmp(change.from, change.to), first = markedSpansBefore(oldFirst, startCh, isInsert), last = markedSpansAfter(oldLast, endCh, isInsert), sameLine = 1 == change.text.length, offset = lst(change.text).length + (sameLine ? startCh : 0);
        if (first) for (var i = 0; i < first.length; ++i) {
            var span = first[i];
            if (null == span.to) {
                var found = getMarkedSpanFor(last, span.marker);
                found ? sameLine && (span.to = null == found.to ? null : found.to + offset) : span.to = startCh;
            }
        }
        if (last) for (var i = 0; i < last.length; ++i) {
            var span = last[i];
            if (null != span.to && (span.to += offset), null == span.from) {
                var found = getMarkedSpanFor(first, span.marker);
                found || (span.from = offset, sameLine && (first || (first = [])).push(span));
            } else span.from += offset, sameLine && (first || (first = [])).push(span);
        }
        first && (first = clearEmptySpans(first)), last && last != first && (last = clearEmptySpans(last));
        var newMarkers = [ first ];
        if (!sameLine) {
            var gapMarkers, gap = change.text.length - 2;
            if (gap > 0 && first) for (var i = 0; i < first.length; ++i) null == first[i].to && (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i].marker, null, null));
            for (var i = 0; gap > i; ++i) newMarkers.push(gapMarkers);
            newMarkers.push(last);
        }
        return newMarkers;
    }
    function clearEmptySpans(spans) {
        for (var i = 0; i < spans.length; ++i) {
            var span = spans[i];
            null != span.from && span.from == span.to && span.marker.clearWhenEmpty !== !1 && spans.splice(i--, 1);
        }
        return spans.length ? spans : null;
    }
    function mergeOldSpans(doc, change) {
        var old = getOldSpans(doc, change), stretched = stretchSpansOverChange(doc, change);
        if (!old) return stretched;
        if (!stretched) return old;
        for (var i = 0; i < old.length; ++i) {
            var oldCur = old[i], stretchCur = stretched[i];
            if (oldCur && stretchCur) spans: for (var j = 0; j < stretchCur.length; ++j) {
                for (var span = stretchCur[j], k = 0; k < oldCur.length; ++k) if (oldCur[k].marker == span.marker) continue spans;
                oldCur.push(span);
            } else stretchCur && (old[i] = stretchCur);
        }
        return old;
    }
    function removeReadOnlyRanges(doc, from, to) {
        var markers = null;
        if (doc.iter(from.line, to.line + 1, function(line) {
            if (line.markedSpans) for (var i = 0; i < line.markedSpans.length; ++i) {
                var mark = line.markedSpans[i].marker;
                !mark.readOnly || markers && -1 != indexOf(markers, mark) || (markers || (markers = [])).push(mark);
            }
        }), !markers) return null;
        for (var parts = [ {
            from: from,
            to: to
        } ], i = 0; i < markers.length; ++i) for (var mk = markers[i], m = mk.find(0), j = 0; j < parts.length; ++j) {
            var p = parts[j];
            if (!(cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0)) {
                var newParts = [ j, 1 ], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
                (0 > dfrom || !mk.inclusiveLeft && !dfrom) && newParts.push({
                    from: p.from,
                    to: m.from
                }), (dto > 0 || !mk.inclusiveRight && !dto) && newParts.push({
                    from: m.to,
                    to: p.to
                }), parts.splice.apply(parts, newParts), j += newParts.length - 1;
            }
        }
        return parts;
    }
    function detachMarkedSpans(line) {
        var spans = line.markedSpans;
        if (spans) {
            for (var i = 0; i < spans.length; ++i) spans[i].marker.detachLine(line);
            line.markedSpans = null;
        }
    }
    function attachMarkedSpans(line, spans) {
        if (spans) {
            for (var i = 0; i < spans.length; ++i) spans[i].marker.attachLine(line);
            line.markedSpans = spans;
        }
    }
    function extraLeft(marker) {
        return marker.inclusiveLeft ? -1 : 0;
    }
    function extraRight(marker) {
        return marker.inclusiveRight ? 1 : 0;
    }
    function compareCollapsedMarkers(a, b) {
        var lenDiff = a.lines.length - b.lines.length;
        if (0 != lenDiff) return lenDiff;
        var aPos = a.find(), bPos = b.find(), fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
        if (fromCmp) return -fromCmp;
        var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
        return toCmp ? toCmp : b.id - a.id;
    }
    function collapsedSpanAtSide(line, start) {
        var found, sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) sp = sps[i], sp.marker.collapsed && null == (start ? sp.from : sp.to) && (!found || compareCollapsedMarkers(found, sp.marker) < 0) && (found = sp.marker);
        return found;
    }
    function collapsedSpanAtStart(line) {
        return collapsedSpanAtSide(line, !0);
    }
    function collapsedSpanAtEnd(line) {
        return collapsedSpanAtSide(line, !1);
    }
    function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
        var line = getLine(doc, lineNo), sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var i = 0; i < sps.length; ++i) {
            var sp = sps[i];
            if (sp.marker.collapsed) {
                var found = sp.marker.find(0), fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker), toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
                if (!(fromCmp >= 0 && 0 >= toCmp || 0 >= fromCmp && toCmp >= 0) && (0 >= fromCmp && (cmp(found.to, from) > 0 || sp.marker.inclusiveRight && marker.inclusiveLeft) || fromCmp >= 0 && (cmp(found.from, to) < 0 || sp.marker.inclusiveLeft && marker.inclusiveRight))) return !0;
            }
        }
    }
    function visualLine(line) {
        for (var merged; merged = collapsedSpanAtStart(line); ) line = merged.find(-1, !0).line;
        return line;
    }
    function visualLineContinued(line) {
        for (var merged, lines; merged = collapsedSpanAtEnd(line); ) line = merged.find(1, !0).line, 
        (lines || (lines = [])).push(line);
        return lines;
    }
    function visualLineNo(doc, lineN) {
        var line = getLine(doc, lineN), vis = visualLine(line);
        return line == vis ? lineN : lineNo(vis);
    }
    function visualLineEndNo(doc, lineN) {
        if (lineN > doc.lastLine()) return lineN;
        var merged, line = getLine(doc, lineN);
        if (!lineIsHidden(doc, line)) return lineN;
        for (;merged = collapsedSpanAtEnd(line); ) line = merged.find(1, !0).line;
        return lineNo(line) + 1;
    }
    function lineIsHidden(doc, line) {
        var sps = sawCollapsedSpans && line.markedSpans;
        if (sps) for (var sp, i = 0; i < sps.length; ++i) if (sp = sps[i], sp.marker.collapsed) {
            if (null == sp.from) return !0;
            if (!sp.marker.widgetNode && 0 == sp.from && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp)) return !0;
        }
    }
    function lineIsHiddenInner(doc, line, span) {
        if (null == span.to) {
            var end = span.marker.find(1, !0);
            return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker));
        }
        if (span.marker.inclusiveRight && span.to == line.text.length) return !0;
        for (var sp, i = 0; i < line.markedSpans.length; ++i) if (sp = line.markedSpans[i], 
        sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to && (null == sp.to || sp.to != span.from) && (sp.marker.inclusiveLeft || span.marker.inclusiveRight) && lineIsHiddenInner(doc, line, sp)) return !0;
    }
    function adjustScrollWhenAboveVisible(cm, line, diff) {
        heightAtLine(line) < (cm.curOp && cm.curOp.scrollTop || cm.doc.scrollTop) && addToScrollPos(cm, null, diff);
    }
    function widgetHeight(widget) {
        if (null != widget.height) return widget.height;
        var cm = widget.doc.cm;
        if (!cm) return 0;
        if (!contains(document.body, widget.node)) {
            var parentStyle = "position: relative;";
            widget.coverGutter && (parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"), 
            widget.noHScroll && (parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"), 
            removeChildrenAndAdd(cm.display.measure, elt("div", [ widget.node ], null, parentStyle));
        }
        return widget.height = widget.node.parentNode.offsetHeight;
    }
    function addLineWidget(doc, handle, node, options) {
        var widget = new LineWidget(doc, node, options), cm = doc.cm;
        return cm && widget.noHScroll && (cm.display.alignWidgets = !0), changeLine(doc, handle, "widget", function(line) {
            var widgets = line.widgets || (line.widgets = []);
            if (null == widget.insertAt ? widgets.push(widget) : widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget), 
            widget.line = line, cm && !lineIsHidden(doc, line)) {
                var aboveVisible = heightAtLine(line) < doc.scrollTop;
                updateLineHeight(line, line.height + widgetHeight(widget)), aboveVisible && addToScrollPos(cm, null, widget.height), 
                cm.curOp.forceUpdate = !0;
            }
            return !0;
        }), widget;
    }
    function updateLine(line, text, markedSpans, estimateHeight) {
        line.text = text, line.stateAfter && (line.stateAfter = null), line.styles && (line.styles = null), 
        null != line.order && (line.order = null), detachMarkedSpans(line), attachMarkedSpans(line, markedSpans);
        var estHeight = estimateHeight ? estimateHeight(line) : 1;
        estHeight != line.height && updateLineHeight(line, estHeight);
    }
    function cleanUpLine(line) {
        line.parent = null, detachMarkedSpans(line);
    }
    function extractLineClasses(type, output) {
        if (type) for (;;) {
            var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!lineClass) break;
            type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
            var prop = lineClass[1] ? "bgClass" : "textClass";
            null == output[prop] ? output[prop] = lineClass[2] : new RegExp("(?:^|s)" + lineClass[2] + "(?:$|s)").test(output[prop]) || (output[prop] += " " + lineClass[2]);
        }
        return type;
    }
    function callBlankLine(mode, state) {
        if (mode.blankLine) return mode.blankLine(state);
        if (mode.innerMode) {
            var inner = CodeMirror.innerMode(mode, state);
            return inner.mode.blankLine ? inner.mode.blankLine(inner.state) : void 0;
        }
    }
    function readToken(mode, stream, state, inner) {
        for (var i = 0; 10 > i; i++) {
            inner && (inner[0] = CodeMirror.innerMode(mode, state).mode);
            var style = mode.token(stream, state);
            if (stream.pos > stream.start) return style;
        }
        throw new Error("Mode " + mode.name + " failed to advance stream.");
    }
    function takeToken(cm, pos, precise, asArray) {
        function getObj(copy) {
            return {
                start: stream.start,
                end: stream.pos,
                string: stream.current(),
                type: style || null,
                state: copy ? copyState(doc.mode, state) : state
            };
        }
        var style, doc = cm.doc, mode = doc.mode;
        pos = clipPos(doc, pos);
        var tokens, line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise), stream = new StringStream(line.text, cm.options.tabSize);
        for (asArray && (tokens = []); (asArray || stream.pos < pos.ch) && !stream.eol(); ) stream.start = stream.pos, 
        style = readToken(mode, stream, state), asArray && tokens.push(getObj(!0));
        return asArray ? tokens : getObj();
    }
    function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
        var flattenSpans = mode.flattenSpans;
        null == flattenSpans && (flattenSpans = cm.options.flattenSpans);
        var style, curStart = 0, curStyle = null, stream = new StringStream(text, cm.options.tabSize), inner = cm.options.addModeClass && [ null ];
        for ("" == text && extractLineClasses(callBlankLine(mode, state), lineClasses); !stream.eol(); ) {
            if (stream.pos > cm.options.maxHighlightLength ? (flattenSpans = !1, forceToEnd && processLine(cm, text, state, stream.pos), 
            stream.pos = text.length, style = null) : style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses), 
            inner) {
                var mName = inner[0].name;
                mName && (style = "m-" + (style ? mName + " " + style : mName));
            }
            if (!flattenSpans || curStyle != style) {
                for (;curStart < stream.start; ) curStart = Math.min(stream.start, curStart + 5e4), 
                f(curStart, curStyle);
                curStyle = style;
            }
            stream.start = stream.pos;
        }
        for (;curStart < stream.pos; ) {
            var pos = Math.min(stream.pos, curStart + 5e4);
            f(pos, curStyle), curStart = pos;
        }
    }
    function highlightLine(cm, line, state, forceToEnd) {
        var st = [ cm.state.modeGen ], lineClasses = {};
        runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
            st.push(end, style);
        }, lineClasses, forceToEnd);
        for (var o = 0; o < cm.state.overlays.length; ++o) {
            var overlay = cm.state.overlays[o], i = 1, at = 0;
            runMode(cm, line.text, overlay.mode, !0, function(end, style) {
                for (var start = i; end > at; ) {
                    var i_end = st[i];
                    i_end > end && st.splice(i, 1, end, st[i + 1], i_end), i += 2, at = Math.min(end, i_end);
                }
                if (style) if (overlay.opaque) st.splice(start, i - start, end, "cm-overlay " + style), 
                i = start + 2; else for (;i > start; start += 2) {
                    var cur = st[start + 1];
                    st[start + 1] = (cur ? cur + " " : "") + "cm-overlay " + style;
                }
            }, lineClasses);
        }
        return {
            styles: st,
            classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null
        };
    }
    function getLineStyles(cm, line, updateFrontier) {
        if (!line.styles || line.styles[0] != cm.state.modeGen) {
            var state = getStateBefore(cm, lineNo(line)), result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state);
            line.stateAfter = state, line.styles = result.styles, result.classes ? line.styleClasses = result.classes : line.styleClasses && (line.styleClasses = null), 
            updateFrontier === cm.doc.frontier && cm.doc.frontier++;
        }
        return line.styles;
    }
    function processLine(cm, text, state, startAt) {
        var mode = cm.doc.mode, stream = new StringStream(text, cm.options.tabSize);
        for (stream.start = stream.pos = startAt || 0, "" == text && callBlankLine(mode, state); !stream.eol(); ) readToken(mode, stream, state), 
        stream.start = stream.pos;
    }
    function interpretTokenStyle(style, options) {
        if (!style || /^\s*$/.test(style)) return null;
        var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
        return cache[style] || (cache[style] = style.replace(/\S+/g, "cm-$&"));
    }
    function buildLineContent(cm, lineView) {
        var content = elt("span", null, null, webkit ? "padding-right: .1px" : null), builder = {
            pre: elt("pre", [ content ], "CodeMirror-line"),
            content: content,
            col: 0,
            pos: 0,
            cm: cm,
            splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")
        };
        lineView.measure = {};
        for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
            var order, line = i ? lineView.rest[i - 1] : lineView.line;
            builder.pos = 0, builder.addToken = buildToken, hasBadBidiRects(cm.display.measure) && (order = getOrder(line)) && (builder.addToken = buildTokenBadBidi(builder.addToken, order)), 
            builder.map = [];
            var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
            insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate)), 
            line.styleClasses && (line.styleClasses.bgClass && (builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "")), 
            line.styleClasses.textClass && (builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""))), 
            0 == builder.map.length && builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))), 
            0 == i ? (lineView.measure.map = builder.map, lineView.measure.cache = {}) : ((lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map), 
            (lineView.measure.caches || (lineView.measure.caches = [])).push({}));
        }
        return webkit && /\bcm-tab\b/.test(builder.content.lastChild.className) && (builder.content.className = "cm-tab-wrap-hack"), 
        signal(cm, "renderLine", cm, lineView.line, builder.pre), builder.pre.className && (builder.textClass = joinClasses(builder.pre.className, builder.textClass || "")), 
        builder;
    }
    function defaultSpecialCharPlaceholder(ch) {
        var token = elt("span", "•", "cm-invalidchar");
        return token.title = "\\u" + ch.charCodeAt(0).toString(16), token.setAttribute("aria-label", token.title), 
        token;
    }
    function buildToken(builder, text, style, startStyle, endStyle, title, css) {
        if (text) {
            var displayText = builder.splitSpaces ? text.replace(/ {3,}/g, splitSpaces) : text, special = builder.cm.state.specialChars, mustWrap = !1;
            if (special.test(text)) for (var content = document.createDocumentFragment(), pos = 0; ;) {
                special.lastIndex = pos;
                var m = special.exec(text), skipped = m ? m.index - pos : text.length - pos;
                if (skipped) {
                    var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
                    ie && 9 > ie_version ? content.appendChild(elt("span", [ txt ])) : content.appendChild(txt), 
                    builder.map.push(builder.pos, builder.pos + skipped, txt), builder.col += skipped, 
                    builder.pos += skipped;
                }
                if (!m) break;
                if (pos += skipped + 1, "	" == m[0]) {
                    var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize, txt = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
                    txt.setAttribute("role", "presentation"), txt.setAttribute("cm-text", "	"), builder.col += tabWidth;
                } else if ("\r" == m[0] || "\n" == m[0]) {
                    var txt = content.appendChild(elt("span", "\r" == m[0] ? "␍" : "␤", "cm-invalidchar"));
                    txt.setAttribute("cm-text", m[0]), builder.col += 1;
                } else {
                    var txt = builder.cm.options.specialCharPlaceholder(m[0]);
                    txt.setAttribute("cm-text", m[0]), ie && 9 > ie_version ? content.appendChild(elt("span", [ txt ])) : content.appendChild(txt), 
                    builder.col += 1;
                }
                builder.map.push(builder.pos, builder.pos + 1, txt), builder.pos++;
            } else {
                builder.col += text.length;
                var content = document.createTextNode(displayText);
                builder.map.push(builder.pos, builder.pos + text.length, content), ie && 9 > ie_version && (mustWrap = !0), 
                builder.pos += text.length;
            }
            if (style || startStyle || endStyle || mustWrap || css) {
                var fullStyle = style || "";
                startStyle && (fullStyle += startStyle), endStyle && (fullStyle += endStyle);
                var token = elt("span", [ content ], fullStyle, css);
                return title && (token.title = title), builder.content.appendChild(token);
            }
            builder.content.appendChild(content);
        }
    }
    function splitSpaces(old) {
        for (var out = " ", i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : " ";
        return out += " ";
    }
    function buildTokenBadBidi(inner, order) {
        return function(builder, text, style, startStyle, endStyle, title, css) {
            style = style ? style + " cm-force-border" : "cm-force-border";
            for (var start = builder.pos, end = start + text.length; ;) {
                for (var i = 0; i < order.length; i++) {
                    var part = order[i];
                    if (part.to > start && part.from <= start) break;
                }
                if (part.to >= end) return inner(builder, text, style, startStyle, endStyle, title, css);
                inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css), 
                startStyle = null, text = text.slice(part.to - start), start = part.to;
            }
        };
    }
    function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
        var widget = !ignoreWidget && marker.widgetNode;
        widget && builder.map.push(builder.pos, builder.pos + size, widget), !ignoreWidget && builder.cm.display.input.needsContentAttribute && (widget || (widget = builder.content.appendChild(document.createElement("span"))), 
        widget.setAttribute("cm-marker", marker.id)), widget && (builder.cm.display.input.setUneditable(widget), 
        builder.content.appendChild(widget)), builder.pos += size;
    }
    function insertLineContent(line, builder, styles) {
        var spans = line.markedSpans, allText = line.text, at = 0;
        if (spans) for (var style, css, spanStyle, spanEndStyle, spanStartStyle, title, collapsed, len = allText.length, pos = 0, i = 1, text = "", nextChange = 0; ;) {
            if (nextChange == pos) {
                spanStyle = spanEndStyle = spanStartStyle = title = css = "", collapsed = null, 
                nextChange = 1 / 0;
                for (var endStyles, foundBookmarks = [], j = 0; j < spans.length; ++j) {
                    var sp = spans[j], m = sp.marker;
                    "bookmark" == m.type && sp.from == pos && m.widgetNode ? foundBookmarks.push(m) : sp.from <= pos && (null == sp.to || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos) ? (null != sp.to && sp.to != pos && nextChange > sp.to && (nextChange = sp.to, 
                    spanEndStyle = ""), m.className && (spanStyle += " " + m.className), m.css && (css = (css ? css + ";" : "") + m.css), 
                    m.startStyle && sp.from == pos && (spanStartStyle += " " + m.startStyle), m.endStyle && sp.to == nextChange && (endStyles || (endStyles = [])).push(m.endStyle, sp.to), 
                    m.title && !title && (title = m.title), m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0) && (collapsed = sp)) : sp.from > pos && nextChange > sp.from && (nextChange = sp.from);
                }
                if (endStyles) for (var j = 0; j < endStyles.length; j += 2) endStyles[j + 1] == nextChange && (spanEndStyle += " " + endStyles[j]);
                if (collapsed && (collapsed.from || 0) == pos) {
                    if (buildCollapsedSpan(builder, (null == collapsed.to ? len + 1 : collapsed.to) - pos, collapsed.marker, null == collapsed.from), 
                    null == collapsed.to) return;
                    collapsed.to == pos && (collapsed = !1);
                }
                if (!collapsed && foundBookmarks.length) for (var j = 0; j < foundBookmarks.length; ++j) buildCollapsedSpan(builder, 0, foundBookmarks[j]);
            }
            if (pos >= len) break;
            for (var upto = Math.min(len, nextChange); ;) {
                if (text) {
                    var end = pos + text.length;
                    if (!collapsed) {
                        var tokenText = end > upto ? text.slice(0, upto - pos) : text;
                        builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle, spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css);
                    }
                    if (end >= upto) {
                        text = text.slice(upto - pos), pos = upto;
                        break;
                    }
                    pos = end, spanStartStyle = "";
                }
                text = allText.slice(at, at = styles[i++]), style = interpretTokenStyle(styles[i++], builder.cm.options);
            }
        } else for (var i = 1; i < styles.length; i += 2) builder.addToken(builder, allText.slice(at, at = styles[i]), interpretTokenStyle(styles[i + 1], builder.cm.options));
    }
    function isWholeLineUpdate(doc, change) {
        return 0 == change.from.ch && 0 == change.to.ch && "" == lst(change.text) && (!doc.cm || doc.cm.options.wholeLineUpdateBefore);
    }
    function updateDoc(doc, change, markedSpans, estimateHeight) {
        function spansFor(n) {
            return markedSpans ? markedSpans[n] : null;
        }
        function update(line, text, spans) {
            updateLine(line, text, spans, estimateHeight), signalLater(line, "change", line, change);
        }
        function linesFor(start, end) {
            for (var i = start, result = []; end > i; ++i) result.push(new Line(text[i], spansFor(i), estimateHeight));
            return result;
        }
        var from = change.from, to = change.to, text = change.text, firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line), lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;
        if (change.full) doc.insert(0, linesFor(0, text.length)), doc.remove(text.length, doc.size - text.length); else if (isWholeLineUpdate(doc, change)) {
            var added = linesFor(0, text.length - 1);
            update(lastLine, lastLine.text, lastSpans), nlines && doc.remove(from.line, nlines), 
            added.length && doc.insert(from.line, added);
        } else if (firstLine == lastLine) if (1 == text.length) update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans); else {
            var added = linesFor(1, text.length - 1);
            added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight)), 
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0)), doc.insert(from.line + 1, added);
        } else if (1 == text.length) update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0)), 
        doc.remove(from.line + 1, nlines); else {
            update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0)), update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
            var added = linesFor(1, text.length - 1);
            nlines > 1 && doc.remove(from.line + 1, nlines - 1), doc.insert(from.line + 1, added);
        }
        signalLater(doc, "change", doc, change);
    }
    function LeafChunk(lines) {
        this.lines = lines, this.parent = null;
        for (var i = 0, height = 0; i < lines.length; ++i) lines[i].parent = this, height += lines[i].height;
        this.height = height;
    }
    function BranchChunk(children) {
        this.children = children;
        for (var size = 0, height = 0, i = 0; i < children.length; ++i) {
            var ch = children[i];
            size += ch.chunkSize(), height += ch.height, ch.parent = this;
        }
        this.size = size, this.height = height, this.parent = null;
    }
    function linkedDocs(doc, f, sharedHistOnly) {
        function propagate(doc, skip, sharedHist) {
            if (doc.linked) for (var i = 0; i < doc.linked.length; ++i) {
                var rel = doc.linked[i];
                if (rel.doc != skip) {
                    var shared = sharedHist && rel.sharedHist;
                    (!sharedHistOnly || shared) && (f(rel.doc, shared), propagate(rel.doc, doc, shared));
                }
            }
        }
        propagate(doc, null, !0);
    }
    function attachDoc(cm, doc) {
        if (doc.cm) throw new Error("This document is already in use.");
        cm.doc = doc, doc.cm = cm, estimateLineHeights(cm), loadMode(cm), cm.options.lineWrapping || findMaxLine(cm), 
        cm.options.mode = doc.modeOption, regChange(cm);
    }
    function getLine(doc, n) {
        if (n -= doc.first, 0 > n || n >= doc.size) throw new Error("There is no line " + (n + doc.first) + " in the document.");
        for (var chunk = doc; !chunk.lines; ) for (var i = 0; ;++i) {
            var child = chunk.children[i], sz = child.chunkSize();
            if (sz > n) {
                chunk = child;
                break;
            }
            n -= sz;
        }
        return chunk.lines[n];
    }
    function getBetween(doc, start, end) {
        var out = [], n = start.line;
        return doc.iter(start.line, end.line + 1, function(line) {
            var text = line.text;
            n == end.line && (text = text.slice(0, end.ch)), n == start.line && (text = text.slice(start.ch)), 
            out.push(text), ++n;
        }), out;
    }
    function getLines(doc, from, to) {
        var out = [];
        return doc.iter(from, to, function(line) {
            out.push(line.text);
        }), out;
    }
    function updateLineHeight(line, height) {
        var diff = height - line.height;
        if (diff) for (var n = line; n; n = n.parent) n.height += diff;
    }
    function lineNo(line) {
        if (null == line.parent) return null;
        for (var cur = line.parent, no = indexOf(cur.lines, line), chunk = cur.parent; chunk; cur = chunk, 
        chunk = chunk.parent) for (var i = 0; chunk.children[i] != cur; ++i) no += chunk.children[i].chunkSize();
        return no + cur.first;
    }
    function lineAtHeight(chunk, h) {
        var n = chunk.first;
        outer: do {
            for (var i = 0; i < chunk.children.length; ++i) {
                var child = chunk.children[i], ch = child.height;
                if (ch > h) {
                    chunk = child;
                    continue outer;
                }
                h -= ch, n += child.chunkSize();
            }
            return n;
        } while (!chunk.lines);
        for (var i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i], lh = line.height;
            if (lh > h) break;
            h -= lh;
        }
        return n + i;
    }
    function heightAtLine(lineObj) {
        lineObj = visualLine(lineObj);
        for (var h = 0, chunk = lineObj.parent, i = 0; i < chunk.lines.length; ++i) {
            var line = chunk.lines[i];
            if (line == lineObj) break;
            h += line.height;
        }
        for (var p = chunk.parent; p; chunk = p, p = chunk.parent) for (var i = 0; i < p.children.length; ++i) {
            var cur = p.children[i];
            if (cur == chunk) break;
            h += cur.height;
        }
        return h;
    }
    function getOrder(line) {
        var order = line.order;
        return null == order && (order = line.order = bidiOrdering(line.text)), order;
    }
    function History(startGen) {
        this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, 
        this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, 
        this.generation = this.maxGeneration = startGen || 1;
    }
    function historyChangeFromChange(doc, change) {
        var histChange = {
            from: copyPos(change.from),
            to: changeEnd(change),
            text: getBetween(doc, change.from, change.to)
        };
        return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1), 
        linkedDocs(doc, function(doc) {
            attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
        }, !0), histChange;
    }
    function clearSelectionEvents(array) {
        for (;array.length; ) {
            var last = lst(array);
            if (!last.ranges) break;
            array.pop();
        }
    }
    function lastChangeEvent(hist, force) {
        return force ? (clearSelectionEvents(hist.done), lst(hist.done)) : hist.done.length && !lst(hist.done).ranges ? lst(hist.done) : hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges ? (hist.done.pop(), 
        lst(hist.done)) : void 0;
    }
    function addChangeToHistory(doc, change, selAfter, opId) {
        var hist = doc.history;
        hist.undone.length = 0;
        var cur, time = +new Date();
        if ((hist.lastOp == opId || hist.lastOrigin == change.origin && change.origin && ("+" == change.origin.charAt(0) && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay || "*" == change.origin.charAt(0))) && (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
            var last = lst(cur.changes);
            0 == cmp(change.from, change.to) && 0 == cmp(change.from, last.to) ? last.to = changeEnd(change) : cur.changes.push(historyChangeFromChange(doc, change));
        } else {
            var before = lst(hist.done);
            for (before && before.ranges || pushSelectionToHistory(doc.sel, hist.done), cur = {
                changes: [ historyChangeFromChange(doc, change) ],
                generation: hist.generation
            }, hist.done.push(cur); hist.done.length > hist.undoDepth; ) hist.done.shift(), 
            hist.done[0].ranges || hist.done.shift();
        }
        hist.done.push(selAfter), hist.generation = ++hist.maxGeneration, hist.lastModTime = hist.lastSelTime = time, 
        hist.lastOp = hist.lastSelOp = opId, hist.lastOrigin = hist.lastSelOrigin = change.origin, 
        last || signal(doc, "historyAdded");
    }
    function selectionEventCanBeMerged(doc, origin, prev, sel) {
        var ch = origin.charAt(0);
        return "*" == ch || "+" == ch && prev.ranges.length == sel.ranges.length && prev.somethingSelected() == sel.somethingSelected() && new Date() - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500);
    }
    function addSelectionToHistory(doc, sel, opId, options) {
        var hist = doc.history, origin = options && options.origin;
        opId == hist.lastSelOp || origin && hist.lastSelOrigin == origin && (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin || selectionEventCanBeMerged(doc, origin, lst(hist.done), sel)) ? hist.done[hist.done.length - 1] = sel : pushSelectionToHistory(sel, hist.done), 
        hist.lastSelTime = +new Date(), hist.lastSelOrigin = origin, hist.lastSelOp = opId, 
        options && options.clearRedo !== !1 && clearSelectionEvents(hist.undone);
    }
    function pushSelectionToHistory(sel, dest) {
        var top = lst(dest);
        top && top.ranges && top.equals(sel) || dest.push(sel);
    }
    function attachLocalSpans(doc, change, from, to) {
        var existing = change["spans_" + doc.id], n = 0;
        doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
            line.markedSpans && ((existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans), 
            ++n;
        });
    }
    function removeClearedSpans(spans) {
        if (!spans) return null;
        for (var out, i = 0; i < spans.length; ++i) spans[i].marker.explicitlyCleared ? out || (out = spans.slice(0, i)) : out && out.push(spans[i]);
        return out ? out.length ? out : null : spans;
    }
    function getOldSpans(doc, change) {
        var found = change["spans_" + doc.id];
        if (!found) return null;
        for (var i = 0, nw = []; i < change.text.length; ++i) nw.push(removeClearedSpans(found[i]));
        return nw;
    }
    function copyHistoryArray(events, newGroup, instantiateSel) {
        for (var i = 0, copy = []; i < events.length; ++i) {
            var event = events[i];
            if (event.ranges) copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event); else {
                var changes = event.changes, newChanges = [];
                copy.push({
                    changes: newChanges
                });
                for (var j = 0; j < changes.length; ++j) {
                    var m, change = changes[j];
                    if (newChanges.push({
                        from: change.from,
                        to: change.to,
                        text: change.text
                    }), newGroup) for (var prop in change) (m = prop.match(/^spans_(\d+)$/)) && indexOf(newGroup, Number(m[1])) > -1 && (lst(newChanges)[prop] = change[prop], 
                    delete change[prop]);
                }
            }
        }
        return copy;
    }
    function rebaseHistSelSingle(pos, from, to, diff) {
        to < pos.line ? pos.line += diff : from < pos.line && (pos.line = from, pos.ch = 0);
    }
    function rebaseHistArray(array, from, to, diff) {
        for (var i = 0; i < array.length; ++i) {
            var sub = array[i], ok = !0;
            if (sub.ranges) {
                sub.copied || (sub = array[i] = sub.deepCopy(), sub.copied = !0);
                for (var j = 0; j < sub.ranges.length; j++) rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff), 
                rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
            } else {
                for (var j = 0; j < sub.changes.length; ++j) {
                    var cur = sub.changes[j];
                    if (to < cur.from.line) cur.from = Pos(cur.from.line + diff, cur.from.ch), cur.to = Pos(cur.to.line + diff, cur.to.ch); else if (from <= cur.to.line) {
                        ok = !1;
                        break;
                    }
                }
                ok || (array.splice(0, i + 1), i = 0);
            }
        }
    }
    function rebaseHist(hist, change) {
        var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
        rebaseHistArray(hist.done, from, to, diff), rebaseHistArray(hist.undone, from, to, diff);
    }
    function e_defaultPrevented(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
    }
    function e_target(e) {
        return e.target || e.srcElement;
    }
    function e_button(e) {
        var b = e.which;
        return null == b && (1 & e.button ? b = 1 : 2 & e.button ? b = 3 : 4 & e.button && (b = 2)), 
        mac && e.ctrlKey && 1 == b && (b = 3), b;
    }
    function getHandlers(emitter, type, copy) {
        var arr = emitter._handlers && emitter._handlers[type];
        return copy ? arr && arr.length > 0 ? arr.slice() : noHandlers : arr || noHandlers;
    }
    function signalLater(emitter, type) {
        function bnd(f) {
            return function() {
                f.apply(null, args);
            };
        }
        var arr = getHandlers(emitter, type, !1);
        if (arr.length) {
            var list, args = Array.prototype.slice.call(arguments, 2);
            operationGroup ? list = operationGroup.delayedCallbacks : orphanDelayedCallbacks ? list = orphanDelayedCallbacks : (list = orphanDelayedCallbacks = [], 
            setTimeout(fireOrphanDelayed, 0));
            for (var i = 0; i < arr.length; ++i) list.push(bnd(arr[i]));
        }
    }
    function fireOrphanDelayed() {
        var delayed = orphanDelayedCallbacks;
        orphanDelayedCallbacks = null;
        for (var i = 0; i < delayed.length; ++i) delayed[i]();
    }
    function signalDOMEvent(cm, e, override) {
        return "string" == typeof e && (e = {
            type: e,
            preventDefault: function() {
                this.defaultPrevented = !0;
            }
        }), signal(cm, override || e.type, cm, e), e_defaultPrevented(e) || e.codemirrorIgnore;
    }
    function signalCursorActivity(cm) {
        var arr = cm._handlers && cm._handlers.cursorActivity;
        if (arr) for (var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []), i = 0; i < arr.length; ++i) -1 == indexOf(set, arr[i]) && set.push(arr[i]);
    }
    function hasHandler(emitter, type) {
        return getHandlers(emitter, type).length > 0;
    }
    function eventMixin(ctor) {
        ctor.prototype.on = function(type, f) {
            on(this, type, f);
        }, ctor.prototype.off = function(type, f) {
            off(this, type, f);
        };
    }
    function Delayed() {
        this.id = null;
    }
    function spaceStr(n) {
        for (;spaceStrs.length <= n; ) spaceStrs.push(lst(spaceStrs) + " ");
        return spaceStrs[n];
    }
    function lst(arr) {
        return arr[arr.length - 1];
    }
    function indexOf(array, elt) {
        for (var i = 0; i < array.length; ++i) if (array[i] == elt) return i;
        return -1;
    }
    function map(array, f) {
        for (var out = [], i = 0; i < array.length; i++) out[i] = f(array[i], i);
        return out;
    }
    function nothing() {}
    function createObj(base, props) {
        var inst;
        return Object.create ? inst = Object.create(base) : (nothing.prototype = base, inst = new nothing()), 
        props && copyObj(props, inst), inst;
    }
    function copyObj(obj, target, overwrite) {
        target || (target = {});
        for (var prop in obj) !obj.hasOwnProperty(prop) || overwrite === !1 && target.hasOwnProperty(prop) || (target[prop] = obj[prop]);
        return target;
    }
    function bind(f) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return f.apply(null, args);
        };
    }
    function isWordChar(ch, helper) {
        return helper ? helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch) ? !0 : helper.test(ch) : isWordCharBasic(ch);
    }
    function isEmpty(obj) {
        for (var n in obj) if (obj.hasOwnProperty(n) && obj[n]) return !1;
        return !0;
    }
    function isExtendingChar(ch) {
        return ch.charCodeAt(0) >= 768 && extendingChars.test(ch);
    }
    function elt(tag, content, className, style) {
        var e = document.createElement(tag);
        if (className && (e.className = className), style && (e.style.cssText = style), 
        "string" == typeof content) e.appendChild(document.createTextNode(content)); else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
        return e;
    }
    function removeChildren(e) {
        for (var count = e.childNodes.length; count > 0; --count) e.removeChild(e.firstChild);
        return e;
    }
    function removeChildrenAndAdd(parent, e) {
        return removeChildren(parent).appendChild(e);
    }
    function activeElt() {
        for (var activeElement = document.activeElement; activeElement && activeElement.root && activeElement.root.activeElement; ) activeElement = activeElement.root.activeElement;
        return activeElement;
    }
    function classTest(cls) {
        return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
    }
    function joinClasses(a, b) {
        for (var as = a.split(" "), i = 0; i < as.length; i++) as[i] && !classTest(as[i]).test(b) && (b += " " + as[i]);
        return b;
    }
    function forEachCodeMirror(f) {
        if (document.body.getElementsByClassName) for (var byClass = document.body.getElementsByClassName("CodeMirror"), i = 0; i < byClass.length; i++) {
            var cm = byClass[i].CodeMirror;
            cm && f(cm);
        }
    }
    function ensureGlobalHandlers() {
        globalsRegistered || (registerGlobalHandlers(), globalsRegistered = !0);
    }
    function registerGlobalHandlers() {
        var resizeTimer;
        on(window, "resize", function() {
            null == resizeTimer && (resizeTimer = setTimeout(function() {
                resizeTimer = null, forEachCodeMirror(onResize);
            }, 100));
        }), on(window, "blur", function() {
            forEachCodeMirror(onBlur);
        });
    }
    function zeroWidthElement(measure) {
        if (null == zwspSupported) {
            var test = elt("span", "​");
            removeChildrenAndAdd(measure, elt("span", [ test, document.createTextNode("x") ])), 
            0 != measure.firstChild.offsetHeight && (zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && 8 > ie_version));
        }
        var node = zwspSupported ? elt("span", "​") : elt("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return node.setAttribute("cm-text", ""), node;
    }
    function hasBadBidiRects(measure) {
        if (null != badBidiRects) return badBidiRects;
        var txt = removeChildrenAndAdd(measure, document.createTextNode("AخA")), r0 = range(txt, 0, 1).getBoundingClientRect();
        if (!r0 || r0.left == r0.right) return !1;
        var r1 = range(txt, 1, 2).getBoundingClientRect();
        return badBidiRects = r1.right - r0.right < 3;
    }
    function hasBadZoomedRects(measure) {
        if (null != badZoomedRects) return badZoomedRects;
        var node = removeChildrenAndAdd(measure, elt("span", "x")), normal = node.getBoundingClientRect(), fromRange = range(node, 0, 1).getBoundingClientRect();
        return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1;
    }
    function iterateBidiSections(order, from, to, f) {
        if (!order) return f(from, to, "ltr");
        for (var found = !1, i = 0; i < order.length; ++i) {
            var part = order[i];
            (part.from < to && part.to > from || from == to && part.to == from) && (f(Math.max(part.from, from), Math.min(part.to, to), 1 == part.level ? "rtl" : "ltr"), 
            found = !0);
        }
        found || f(from, to, "ltr");
    }
    function bidiLeft(part) {
        return part.level % 2 ? part.to : part.from;
    }
    function bidiRight(part) {
        return part.level % 2 ? part.from : part.to;
    }
    function lineLeft(line) {
        var order = getOrder(line);
        return order ? bidiLeft(order[0]) : 0;
    }
    function lineRight(line) {
        var order = getOrder(line);
        return order ? bidiRight(lst(order)) : line.text.length;
    }
    function lineStart(cm, lineN) {
        var line = getLine(cm.doc, lineN), visual = visualLine(line);
        visual != line && (lineN = lineNo(visual));
        var order = getOrder(visual), ch = order ? order[0].level % 2 ? lineRight(visual) : lineLeft(visual) : 0;
        return Pos(lineN, ch);
    }
    function lineEnd(cm, lineN) {
        for (var merged, line = getLine(cm.doc, lineN); merged = collapsedSpanAtEnd(line); ) line = merged.find(1, !0).line, 
        lineN = null;
        var order = getOrder(line), ch = order ? order[0].level % 2 ? lineLeft(line) : lineRight(line) : line.text.length;
        return Pos(null == lineN ? lineNo(line) : lineN, ch);
    }
    function lineStartSmart(cm, pos) {
        var start = lineStart(cm, pos.line), line = getLine(cm.doc, start.line), order = getOrder(line);
        if (!order || 0 == order[0].level) {
            var firstNonWS = Math.max(0, line.text.search(/\S/)), inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
            return Pos(start.line, inWS ? 0 : firstNonWS);
        }
        return start;
    }
    function compareBidiLevel(order, a, b) {
        var linedir = order[0].level;
        return a == linedir ? !0 : b == linedir ? !1 : b > a;
    }
    function getBidiPartAt(order, pos) {
        bidiOther = null;
        for (var found, i = 0; i < order.length; ++i) {
            var cur = order[i];
            if (cur.from < pos && cur.to > pos) return i;
            if (cur.from == pos || cur.to == pos) {
                if (null != found) return compareBidiLevel(order, cur.level, order[found].level) ? (cur.from != cur.to && (bidiOther = found), 
                i) : (cur.from != cur.to && (bidiOther = i), found);
                found = i;
            }
        }
        return found;
    }
    function moveInLine(line, pos, dir, byUnit) {
        if (!byUnit) return pos + dir;
        do pos += dir; while (pos > 0 && isExtendingChar(line.text.charAt(pos)));
        return pos;
    }
    function moveVisually(line, start, dir, byUnit) {
        var bidi = getOrder(line);
        if (!bidi) return moveLogically(line, start, dir, byUnit);
        for (var pos = getBidiPartAt(bidi, start), part = bidi[pos], target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit); ;) {
            if (target > part.from && target < part.to) return target;
            if (target == part.from || target == part.to) return getBidiPartAt(bidi, target) == pos ? target : (part = bidi[pos += dir], 
            dir > 0 == part.level % 2 ? part.to : part.from);
            if (part = bidi[pos += dir], !part) return null;
            target = dir > 0 == part.level % 2 ? moveInLine(line, part.to, -1, byUnit) : moveInLine(line, part.from, 1, byUnit);
        }
    }
    function moveLogically(line, start, dir, byUnit) {
        var target = start + dir;
        if (byUnit) for (;target > 0 && isExtendingChar(line.text.charAt(target)); ) target += dir;
        return 0 > target || target > line.text.length ? null : target;
    }
    var userAgent = navigator.userAgent, platform = navigator.platform, gecko = /gecko\/\d/i.test(userAgent), ie_upto10 = /MSIE \d/.test(userAgent), ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent), ie = ie_upto10 || ie_11up, ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1]), webkit = /WebKit\//.test(userAgent), qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent), chrome = /Chrome\//.test(userAgent), presto = /Opera\//.test(userAgent), safari = /Apple Computer/.test(navigator.vendor), mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent), phantom = /PhantomJS/.test(userAgent), ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent), mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent), mac = ios || /Mac/.test(platform), windows = /win/i.test(platform), presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
    presto_version && (presto_version = Number(presto_version[1])), presto_version && presto_version >= 15 && (presto = !1, 
    webkit = !0);
    var flipCtrlCmd = mac && (qtwebkit || presto && (null == presto_version || 12.11 > presto_version)), captureRightClick = gecko || ie && ie_version >= 9, sawReadOnlySpans = !1, sawCollapsedSpans = !1;
    NativeScrollbars.prototype = copyObj({
        update: function(measure) {
            var needsH = measure.scrollWidth > measure.clientWidth + 1, needsV = measure.scrollHeight > measure.clientHeight + 1, sWidth = measure.nativeBarWidth;
            if (needsV) {
                this.vert.style.display = "block", this.vert.style.bottom = needsH ? sWidth + "px" : "0";
                var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
                this.vert.firstChild.style.height = Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (needsH) {
                this.horiz.style.display = "block", this.horiz.style.right = needsV ? sWidth + "px" : "0", 
                this.horiz.style.left = measure.barLeft + "px";
                var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
                this.horiz.firstChild.style.width = measure.scrollWidth - measure.clientWidth + totalWidth + "px";
            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && measure.clientHeight > 0 && (0 == sWidth && this.zeroWidthHack(), 
            this.checkedZeroWidth = !0), {
                right: needsV ? sWidth : 0,
                bottom: needsH ? sWidth : 0
            };
        },
        setScrollLeft: function(pos) {
            this.horiz.scrollLeft != pos && (this.horiz.scrollLeft = pos), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz);
        },
        setScrollTop: function(pos) {
            this.vert.scrollTop != pos && (this.vert.scrollTop = pos), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert);
        },
        zeroWidthHack: function() {
            var w = mac && !mac_geMountainLion ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = w, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", 
            this.disableHoriz = new Delayed(), this.disableVert = new Delayed();
        },
        enableZeroWidthBar: function(bar, delay) {
            function maybeDisable() {
                var box = bar.getBoundingClientRect(), elt = document.elementFromPoint(box.left + 1, box.bottom - 1);
                elt != bar ? bar.style.pointerEvents = "none" : delay.set(1e3, maybeDisable);
            }
            bar.style.pointerEvents = "auto", delay.set(1e3, maybeDisable);
        },
        clear: function() {
            var parent = this.horiz.parentNode;
            parent.removeChild(this.horiz), parent.removeChild(this.vert);
        }
    }, NativeScrollbars.prototype), NullScrollbars.prototype = copyObj({
        update: function() {
            return {
                bottom: 0,
                right: 0
            };
        },
        setScrollLeft: function() {},
        setScrollTop: function() {},
        clear: function() {}
    }, NullScrollbars.prototype), CodeMirror.scrollbarModel = {
        "native": NativeScrollbars,
        "null": NullScrollbars
    }, DisplayUpdate.prototype.signal = function(emitter, type) {
        hasHandler(emitter, type) && this.events.push(arguments);
    }, DisplayUpdate.prototype.finish = function() {
        for (var i = 0; i < this.events.length; i++) signal.apply(null, this.events[i]);
    };
    var Pos = CodeMirror.Pos = function(line, ch) {
        return this instanceof Pos ? (this.line = line, void (this.ch = ch)) : new Pos(line, ch);
    }, cmp = CodeMirror.cmpPos = function(a, b) {
        return a.line - b.line || a.ch - b.ch;
    }, lastCopied = null;
    TextareaInput.prototype = copyObj({
        init: function(display) {
            function prepareCopyCut(e) {
                if (cm.somethingSelected()) lastCopied = cm.getSelections(), input.inaccurateSelection && (input.prevInput = "", 
                input.inaccurateSelection = !1, te.value = lastCopied.join("\n"), selectInput(te)); else {
                    if (!cm.options.lineWiseCopyCut) return;
                    var ranges = copyableRanges(cm);
                    lastCopied = ranges.text, "cut" == e.type ? cm.setSelections(ranges.ranges, null, sel_dontScroll) : (input.prevInput = "", 
                    te.value = ranges.text.join("\n"), selectInput(te));
                }
                "cut" == e.type && (cm.state.cutIncoming = !0);
            }
            var input = this, cm = this.cm, div = this.wrapper = hiddenTextarea(), te = this.textarea = div.firstChild;
            display.wrapper.insertBefore(div, display.wrapper.firstChild), ios && (te.style.width = "0px"), 
            on(te, "input", function() {
                ie && ie_version >= 9 && input.hasSelection && (input.hasSelection = null), input.poll();
            }), on(te, "paste", function(e) {
                signalDOMEvent(cm, e) || handlePaste(e, cm) || (cm.state.pasteIncoming = !0, input.fastPoll());
            }), on(te, "cut", prepareCopyCut), on(te, "copy", prepareCopyCut), on(display.scroller, "paste", function(e) {
                eventInWidget(display, e) || signalDOMEvent(cm, e) || (cm.state.pasteIncoming = !0, 
                input.focus());
            }), on(display.lineSpace, "selectstart", function(e) {
                eventInWidget(display, e) || e_preventDefault(e);
            }), on(te, "compositionstart", function() {
                var start = cm.getCursor("from");
                input.composing && input.composing.range.clear(), input.composing = {
                    start: start,
                    range: cm.markText(start, cm.getCursor("to"), {
                        className: "CodeMirror-composing"
                    })
                };
            }), on(te, "compositionend", function() {
                input.composing && (input.poll(), input.composing.range.clear(), input.composing = null);
            });
        },
        prepareSelection: function() {
            var cm = this.cm, display = cm.display, doc = cm.doc, result = prepareSelection(cm);
            if (cm.options.moveInputWithCursor) {
                var headPos = cursorCoords(cm, doc.sel.primary().head, "div"), wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
                result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10, headPos.top + lineOff.top - wrapOff.top)), 
                result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10, headPos.left + lineOff.left - wrapOff.left));
            }
            return result;
        },
        showSelection: function(drawn) {
            var cm = this.cm, display = cm.display;
            removeChildrenAndAdd(display.cursorDiv, drawn.cursors), removeChildrenAndAdd(display.selectionDiv, drawn.selection), 
            null != drawn.teTop && (this.wrapper.style.top = drawn.teTop + "px", this.wrapper.style.left = drawn.teLeft + "px");
        },
        reset: function(typing) {
            if (!this.contextMenuPending) {
                var minimal, selected, cm = this.cm, doc = cm.doc;
                if (cm.somethingSelected()) {
                    this.prevInput = "";
                    var range = doc.sel.primary();
                    minimal = hasCopyEvent && (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1e3);
                    var content = minimal ? "-" : selected || cm.getSelection();
                    this.textarea.value = content, cm.state.focused && selectInput(this.textarea), ie && ie_version >= 9 && (this.hasSelection = content);
                } else typing || (this.prevInput = this.textarea.value = "", ie && ie_version >= 9 && (this.hasSelection = null));
                this.inaccurateSelection = minimal;
            }
        },
        getField: function() {
            return this.textarea;
        },
        supportsTouch: function() {
            return !1;
        },
        focus: function() {
            if ("nocursor" != this.cm.options.readOnly && (!mobile || activeElt() != this.textarea)) try {
                this.textarea.focus();
            } catch (e) {}
        },
        blur: function() {
            this.textarea.blur();
        },
        resetPosition: function() {
            this.wrapper.style.top = this.wrapper.style.left = 0;
        },
        receivedFocus: function() {
            this.slowPoll();
        },
        slowPoll: function() {
            var input = this;
            input.pollingFast || input.polling.set(this.cm.options.pollInterval, function() {
                input.poll(), input.cm.state.focused && input.slowPoll();
            });
        },
        fastPoll: function() {
            function p() {
                var changed = input.poll();
                changed || missed ? (input.pollingFast = !1, input.slowPoll()) : (missed = !0, input.polling.set(60, p));
            }
            var missed = !1, input = this;
            input.pollingFast = !0, input.polling.set(20, p);
        },
        poll: function() {
            var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
            if (this.contextMenuPending || !cm.state.focused || hasSelection(input) && !prevInput && !this.composing || cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq) return !1;
            var text = input.value;
            if (text == prevInput && !cm.somethingSelected()) return !1;
            if (ie && ie_version >= 9 && this.hasSelection === text || mac && /[\uf700-\uf7ff]/.test(text)) return cm.display.input.reset(), 
            !1;
            if (cm.doc.sel == cm.display.selForContextMenu) {
                var first = text.charCodeAt(0);
                if (8203 != first || prevInput || (prevInput = "​"), 8666 == first) return this.reset(), 
                this.cm.execCommand("undo");
            }
            for (var same = 0, l = Math.min(prevInput.length, text.length); l > same && prevInput.charCodeAt(same) == text.charCodeAt(same); ) ++same;
            var self = this;
            return runInOp(cm, function() {
                applyTextInput(cm, text.slice(same), prevInput.length - same, null, self.composing ? "*compose" : null), 
                text.length > 1e3 || text.indexOf("\n") > -1 ? input.value = self.prevInput = "" : self.prevInput = text, 
                self.composing && (self.composing.range.clear(), self.composing.range = cm.markText(self.composing.start, cm.getCursor("to"), {
                    className: "CodeMirror-composing"
                }));
            }), !0;
        },
        ensurePolled: function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
        },
        onKeyPress: function() {
            ie && ie_version >= 9 && (this.hasSelection = null), this.fastPoll();
        },
        onContextMenu: function(e) {
            function prepareSelectAllHack() {
                if (null != te.selectionStart) {
                    var selected = cm.somethingSelected(), extval = "​" + (selected ? te.value : "");
                    te.value = "⇚", te.value = extval, input.prevInput = selected ? "" : "​", te.selectionStart = 1, 
                    te.selectionEnd = extval.length, display.selForContextMenu = cm.doc.sel;
                }
            }
            function rehide() {
                if (input.contextMenuPending = !1, input.wrapper.style.position = "relative", te.style.cssText = oldCSS, 
                ie && 9 > ie_version && display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos), 
                null != te.selectionStart) {
                    (!ie || ie && 9 > ie_version) && prepareSelectAllHack();
                    var i = 0, poll = function() {
                        display.selForContextMenu == cm.doc.sel && 0 == te.selectionStart && te.selectionEnd > 0 && "​" == input.prevInput ? operation(cm, commands.selectAll)(cm) : i++ < 10 ? display.detectingSelectAll = setTimeout(poll, 500) : display.input.reset();
                    };
                    display.detectingSelectAll = setTimeout(poll, 200);
                }
            }
            var input = this, cm = input.cm, display = cm.display, te = input.textarea, pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
            if (pos && !presto) {
                var reset = cm.options.resetSelectionOnContextMenu;
                reset && -1 == cm.doc.sel.contains(pos) && operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll);
                var oldCSS = te.style.cssText;
                if (input.wrapper.style.position = "absolute", te.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", 
                webkit) var oldScrollY = window.scrollY;
                if (display.input.focus(), webkit && window.scrollTo(null, oldScrollY), display.input.reset(), 
                cm.somethingSelected() || (te.value = input.prevInput = " "), input.contextMenuPending = !0, 
                display.selForContextMenu = cm.doc.sel, clearTimeout(display.detectingSelectAll), 
                ie && ie_version >= 9 && prepareSelectAllHack(), captureRightClick) {
                    e_stop(e);
                    var mouseup = function() {
                        off(window, "mouseup", mouseup), setTimeout(rehide, 20);
                    };
                    on(window, "mouseup", mouseup);
                } else setTimeout(rehide, 50);
            }
        },
        readOnlyChanged: function(val) {
            val || this.reset();
        },
        setUneditable: nothing,
        needsContentAttribute: !1
    }, TextareaInput.prototype), ContentEditableInput.prototype = copyObj({
        init: function(display) {
            function onCopyCut(e) {
                if (cm.somethingSelected()) lastCopied = cm.getSelections(), "cut" == e.type && cm.replaceSelection("", null, "cut"); else {
                    if (!cm.options.lineWiseCopyCut) return;
                    var ranges = copyableRanges(cm);
                    lastCopied = ranges.text, "cut" == e.type && cm.operation(function() {
                        cm.setSelections(ranges.ranges, 0, sel_dontScroll), cm.replaceSelection("", null, "cut");
                    });
                }
                if (e.clipboardData && !ios) e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/plain", lastCopied.join("\n")); else {
                    var kludge = hiddenTextarea(), te = kludge.firstChild;
                    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild), te.value = lastCopied.join("\n");
                    var hadFocus = document.activeElement;
                    selectInput(te), setTimeout(function() {
                        cm.display.lineSpace.removeChild(kludge), hadFocus.focus();
                    }, 50);
                }
            }
            var input = this, cm = input.cm, div = input.div = display.lineDiv;
            disableBrowserMagic(div), on(div, "paste", function(e) {
                signalDOMEvent(cm, e) || handlePaste(e, cm);
            }), on(div, "compositionstart", function(e) {
                var data = e.data;
                if (input.composing = {
                    sel: cm.doc.sel,
                    data: data,
                    startData: data
                }, data) {
                    var prim = cm.doc.sel.primary(), line = cm.getLine(prim.head.line), found = line.indexOf(data, Math.max(0, prim.head.ch - data.length));
                    found > -1 && found <= prim.head.ch && (input.composing.sel = simpleSelection(Pos(prim.head.line, found), Pos(prim.head.line, found + data.length)));
                }
            }), on(div, "compositionupdate", function(e) {
                input.composing.data = e.data;
            }), on(div, "compositionend", function(e) {
                var ours = input.composing;
                ours && (e.data == ours.startData || /\u200b/.test(e.data) || (ours.data = e.data), 
                setTimeout(function() {
                    ours.handled || input.applyComposition(ours), input.composing == ours && (input.composing = null);
                }, 50));
            }), on(div, "touchstart", function() {
                input.forceCompositionEnd();
            }), on(div, "input", function() {
                input.composing || (cm.isReadOnly() || !input.pollContent()) && runInOp(input.cm, function() {
                    regChange(cm);
                });
            }), on(div, "copy", onCopyCut), on(div, "cut", onCopyCut);
        },
        prepareSelection: function() {
            var result = prepareSelection(this.cm, !1);
            return result.focus = this.cm.state.focused, result;
        },
        showSelection: function(info) {
            info && this.cm.display.view.length && (info.focus && this.showPrimarySelection(), 
            this.showMultipleSelections(info));
        },
        showPrimarySelection: function() {
            var sel = window.getSelection(), prim = this.cm.doc.sel.primary(), curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset), curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset);
            if (!curAnchor || curAnchor.bad || !curFocus || curFocus.bad || 0 != cmp(minPos(curAnchor, curFocus), prim.from()) || 0 != cmp(maxPos(curAnchor, curFocus), prim.to())) {
                var start = posToDOM(this.cm, prim.from()), end = posToDOM(this.cm, prim.to());
                if (start || end) {
                    var view = this.cm.display.view, old = sel.rangeCount && sel.getRangeAt(0);
                    if (start) {
                        if (!end) {
                            var measure = view[view.length - 1].measure, map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
                            end = {
                                node: map[map.length - 1],
                                offset: map[map.length - 2] - map[map.length - 3]
                            };
                        }
                    } else start = {
                        node: view[0].measure.map[2],
                        offset: 0
                    };
                    try {
                        var rng = range(start.node, start.offset, end.offset, end.node);
                    } catch (e) {}
                    rng && (!gecko && this.cm.state.focused ? (sel.collapse(start.node, start.offset), 
                    rng.collapsed || sel.addRange(rng)) : (sel.removeAllRanges(), sel.addRange(rng)), 
                    old && null == sel.anchorNode ? sel.addRange(old) : gecko && this.startGracePeriod()), 
                    this.rememberSelection();
                }
            }
        },
        startGracePeriod: function() {
            var input = this;
            clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
                input.gracePeriod = !1, input.selectionChanged() && input.cm.operation(function() {
                    input.cm.curOp.selectionChanged = !0;
                });
            }, 20);
        },
        showMultipleSelections: function(info) {
            removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors), removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
        },
        rememberSelection: function() {
            var sel = window.getSelection();
            this.lastAnchorNode = sel.anchorNode, this.lastAnchorOffset = sel.anchorOffset, 
            this.lastFocusNode = sel.focusNode, this.lastFocusOffset = sel.focusOffset;
        },
        selectionInEditor: function() {
            var sel = window.getSelection();
            if (!sel.rangeCount) return !1;
            var node = sel.getRangeAt(0).commonAncestorContainer;
            return contains(this.div, node);
        },
        focus: function() {
            "nocursor" != this.cm.options.readOnly && this.div.focus();
        },
        blur: function() {
            this.div.blur();
        },
        getField: function() {
            return this.div;
        },
        supportsTouch: function() {
            return !0;
        },
        receivedFocus: function() {
            function poll() {
                input.cm.state.focused && (input.pollSelection(), input.polling.set(input.cm.options.pollInterval, poll));
            }
            var input = this;
            this.selectionInEditor() ? this.pollSelection() : runInOp(this.cm, function() {
                input.cm.curOp.selectionChanged = !0;
            }), this.polling.set(this.cm.options.pollInterval, poll);
        },
        selectionChanged: function() {
            var sel = window.getSelection();
            return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset;
        },
        pollSelection: function() {
            if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
                var sel = window.getSelection(), cm = this.cm;
                this.rememberSelection();
                var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset), head = domToPos(cm, sel.focusNode, sel.focusOffset);
                anchor && head && runInOp(cm, function() {
                    setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll), (anchor.bad || head.bad) && (cm.curOp.selectionChanged = !0);
                });
            }
        },
        pollContent: function() {
            var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary(), from = sel.from(), to = sel.to();
            if (from.line < display.viewFrom || to.line > display.viewTo - 1) return !1;
            var fromIndex;
            if (from.line == display.viewFrom || 0 == (fromIndex = findViewIndex(cm, from.line))) var fromLine = lineNo(display.view[0].line), fromNode = display.view[0].node; else var fromLine = lineNo(display.view[fromIndex].line), fromNode = display.view[fromIndex - 1].node.nextSibling;
            var toIndex = findViewIndex(cm, to.line);
            if (toIndex == display.view.length - 1) var toLine = display.viewTo - 1, toNode = display.lineDiv.lastChild; else var toLine = lineNo(display.view[toIndex + 1].line) - 1, toNode = display.view[toIndex + 1].node.previousSibling;
            for (var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine)), oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length)); newText.length > 1 && oldText.length > 1; ) if (lst(newText) == lst(oldText)) newText.pop(), 
            oldText.pop(), toLine--; else {
                if (newText[0] != oldText[0]) break;
                newText.shift(), oldText.shift(), fromLine++;
            }
            for (var cutFront = 0, cutEnd = 0, newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length); maxCutFront > cutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront); ) ++cutFront;
            for (var newBot = lst(newText), oldBot = lst(oldText), maxCutEnd = Math.min(newBot.length - (1 == newText.length ? cutFront : 0), oldBot.length - (1 == oldText.length ? cutFront : 0)); maxCutEnd > cutEnd && newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1); ) ++cutEnd;
            newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd), newText[0] = newText[0].slice(cutFront);
            var chFrom = Pos(fromLine, cutFront), chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
            return newText.length > 1 || newText[0] || cmp(chFrom, chTo) ? (replaceRange(cm.doc, newText, chFrom, chTo, "+input"), 
            !0) : void 0;
        },
        ensurePolled: function() {
            this.forceCompositionEnd();
        },
        reset: function() {
            this.forceCompositionEnd();
        },
        forceCompositionEnd: function() {
            this.composing && !this.composing.handled && (this.applyComposition(this.composing), 
            this.composing.handled = !0, this.div.blur(), this.div.focus());
        },
        applyComposition: function(composing) {
            this.cm.isReadOnly() ? operation(this.cm, regChange)(this.cm) : composing.data && composing.data != composing.startData && operation(this.cm, applyTextInput)(this.cm, composing.data, 0, composing.sel);
        },
        setUneditable: function(node) {
            node.contentEditable = "false";
        },
        onKeyPress: function(e) {
            e.preventDefault(), this.cm.isReadOnly() || operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0);
        },
        readOnlyChanged: function(val) {
            this.div.contentEditable = String("nocursor" != val);
        },
        onContextMenu: nothing,
        resetPosition: nothing,
        needsContentAttribute: !0
    }, ContentEditableInput.prototype), CodeMirror.inputStyles = {
        textarea: TextareaInput,
        contenteditable: ContentEditableInput
    }, Selection.prototype = {
        primary: function() {
            return this.ranges[this.primIndex];
        },
        equals: function(other) {
            if (other == this) return !0;
            if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) return !1;
            for (var i = 0; i < this.ranges.length; i++) {
                var here = this.ranges[i], there = other.ranges[i];
                if (0 != cmp(here.anchor, there.anchor) || 0 != cmp(here.head, there.head)) return !1;
            }
            return !0;
        },
        deepCopy: function() {
            for (var out = [], i = 0; i < this.ranges.length; i++) out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head));
            return new Selection(out, this.primIndex);
        },
        somethingSelected: function() {
            for (var i = 0; i < this.ranges.length; i++) if (!this.ranges[i].empty()) return !0;
            return !1;
        },
        contains: function(pos, end) {
            end || (end = pos);
            for (var i = 0; i < this.ranges.length; i++) {
                var range = this.ranges[i];
                if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0) return i;
            }
            return -1;
        }
    }, Range.prototype = {
        from: function() {
            return minPos(this.anchor, this.head);
        },
        to: function() {
            return maxPos(this.anchor, this.head);
        },
        empty: function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        }
    };
    var measureText, lastClick, lastDoubleClick, nullRect = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, operationGroup = null, nextOpId = 0, lastDrop = 0, wheelSamples = 0, wheelPixelsPerUnit = null;
    ie ? wheelPixelsPerUnit = -.53 : gecko ? wheelPixelsPerUnit = 15 : chrome ? wheelPixelsPerUnit = -.7 : safari && (wheelPixelsPerUnit = -1 / 3);
    var wheelEventDelta = function(e) {
        var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
        return null == dx && e.detail && e.axis == e.HORIZONTAL_AXIS && (dx = e.detail), 
        null == dy && e.detail && e.axis == e.VERTICAL_AXIS ? dy = e.detail : null == dy && (dy = e.wheelDelta), 
        {
            x: dx,
            y: dy
        };
    };
    CodeMirror.wheelEventPixels = function(e) {
        var delta = wheelEventDelta(e);
        return delta.x *= wheelPixelsPerUnit, delta.y *= wheelPixelsPerUnit, delta;
    };
    var stopSeq = new Delayed(), lastStoppedKey = null, changeEnd = CodeMirror.changeEnd = function(change) {
        return change.text ? Pos(change.from.line + change.text.length - 1, lst(change.text).length + (1 == change.text.length ? change.from.ch : 0)) : change.to;
    };
    CodeMirror.prototype = {
        constructor: CodeMirror,
        focus: function() {
            window.focus(), this.display.input.focus();
        },
        setOption: function(option, value) {
            var options = this.options, old = options[option];
            (options[option] != value || "mode" == option) && (options[option] = value, optionHandlers.hasOwnProperty(option) && operation(this, optionHandlers[option])(this, value, old));
        },
        getOption: function(option) {
            return this.options[option];
        },
        getDoc: function() {
            return this.doc;
        },
        addKeyMap: function(map, bottom) {
            this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
        },
        removeKeyMap: function(map) {
            for (var maps = this.state.keyMaps, i = 0; i < maps.length; ++i) if (maps[i] == map || maps[i].name == map) return maps.splice(i, 1), 
            !0;
        },
        addOverlay: methodOp(function(spec, options) {
            var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
            if (mode.startState) throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: mode,
                modeSpec: spec,
                opaque: options && options.opaque
            }), this.state.modeGen++, regChange(this);
        }),
        removeOverlay: methodOp(function(spec) {
            for (var overlays = this.state.overlays, i = 0; i < overlays.length; ++i) {
                var cur = overlays[i].modeSpec;
                if (cur == spec || "string" == typeof spec && cur.name == spec) return overlays.splice(i, 1), 
                this.state.modeGen++, void regChange(this);
            }
        }),
        indentLine: methodOp(function(n, dir, aggressive) {
            "string" != typeof dir && "number" != typeof dir && (dir = null == dir ? this.options.smartIndent ? "smart" : "prev" : dir ? "add" : "subtract"), 
            isLine(this.doc, n) && indentLine(this, n, dir, aggressive);
        }),
        indentSelection: methodOp(function(how) {
            for (var ranges = this.doc.sel.ranges, end = -1, i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.empty()) range.head.line > end && (indentLine(this, range.head.line, how, !0), 
                end = range.head.line, i == this.doc.sel.primIndex && ensureCursorVisible(this)); else {
                    var from = range.from(), to = range.to(), start = Math.max(end, from.line);
                    end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
                    for (var j = start; end > j; ++j) indentLine(this, j, how);
                    var newRanges = this.doc.sel.ranges;
                    0 == from.ch && ranges.length == newRanges.length && newRanges[i].from().ch > 0 && replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll);
                }
            }
        }),
        getTokenAt: function(pos, precise) {
            return takeToken(this, pos, precise);
        },
        getLineTokens: function(line, precise) {
            return takeToken(this, Pos(line), precise, !0);
        },
        getTokenTypeAt: function(pos) {
            pos = clipPos(this.doc, pos);
            var type, styles = getLineStyles(this, getLine(this.doc, pos.line)), before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
            if (0 == ch) type = styles[2]; else for (;;) {
                var mid = before + after >> 1;
                if ((mid ? styles[2 * mid - 1] : 0) >= ch) after = mid; else {
                    if (!(styles[2 * mid + 1] < ch)) {
                        type = styles[2 * mid + 2];
                        break;
                    }
                    before = mid + 1;
                }
            }
            var cut = type ? type.indexOf("cm-overlay ") : -1;
            return 0 > cut ? type : 0 == cut ? null : type.slice(0, cut - 1);
        },
        getModeAt: function(pos) {
            var mode = this.doc.mode;
            return mode.innerMode ? CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode : mode;
        },
        getHelper: function(pos, type) {
            return this.getHelpers(pos, type)[0];
        },
        getHelpers: function(pos, type) {
            var found = [];
            if (!helpers.hasOwnProperty(type)) return found;
            var help = helpers[type], mode = this.getModeAt(pos);
            if ("string" == typeof mode[type]) help[mode[type]] && found.push(help[mode[type]]); else if (mode[type]) for (var i = 0; i < mode[type].length; i++) {
                var val = help[mode[type][i]];
                val && found.push(val);
            } else mode.helperType && help[mode.helperType] ? found.push(help[mode.helperType]) : help[mode.name] && found.push(help[mode.name]);
            for (var i = 0; i < help._global.length; i++) {
                var cur = help._global[i];
                cur.pred(mode, this) && -1 == indexOf(found, cur.val) && found.push(cur.val);
            }
            return found;
        },
        getStateAfter: function(line, precise) {
            var doc = this.doc;
            return line = clipLine(doc, null == line ? doc.first + doc.size - 1 : line), getStateBefore(this, line + 1, precise);
        },
        cursorCoords: function(start, mode) {
            var pos, range = this.doc.sel.primary();
            return pos = null == start ? range.head : "object" == typeof start ? clipPos(this.doc, start) : start ? range.from() : range.to(), 
            cursorCoords(this, pos, mode || "page");
        },
        charCoords: function(pos, mode) {
            return charCoords(this, clipPos(this.doc, pos), mode || "page");
        },
        coordsChar: function(coords, mode) {
            return coords = fromCoordSystem(this, coords, mode || "page"), coordsChar(this, coords.left, coords.top);
        },
        lineAtHeight: function(height, mode) {
            return height = fromCoordSystem(this, {
                top: height,
                left: 0
            }, mode || "page").top, lineAtHeight(this.doc, height + this.display.viewOffset);
        },
        heightAtLine: function(line, mode) {
            var lineObj, end = !1;
            if ("number" == typeof line) {
                var last = this.doc.first + this.doc.size - 1;
                line < this.doc.first ? line = this.doc.first : line > last && (line = last, end = !0), 
                lineObj = getLine(this.doc, line);
            } else lineObj = line;
            return intoCoordSystem(this, lineObj, {
                top: 0,
                left: 0
            }, mode || "page").top + (end ? this.doc.height - heightAtLine(lineObj) : 0);
        },
        defaultTextHeight: function() {
            return textHeight(this.display);
        },
        defaultCharWidth: function() {
            return charWidth(this.display);
        },
        setGutterMarker: methodOp(function(line, gutterID, value) {
            return changeLine(this.doc, line, "gutter", function(line) {
                var markers = line.gutterMarkers || (line.gutterMarkers = {});
                return markers[gutterID] = value, !value && isEmpty(markers) && (line.gutterMarkers = null), 
                !0;
            });
        }),
        clearGutter: methodOp(function(gutterID) {
            var cm = this, doc = cm.doc, i = doc.first;
            doc.iter(function(line) {
                line.gutterMarkers && line.gutterMarkers[gutterID] && (line.gutterMarkers[gutterID] = null, 
                regLineChange(cm, i, "gutter"), isEmpty(line.gutterMarkers) && (line.gutterMarkers = null)), 
                ++i;
            });
        }),
        lineInfo: function(line) {
            if ("number" == typeof line) {
                if (!isLine(this.doc, line)) return null;
                var n = line;
                if (line = getLine(this.doc, line), !line) return null;
            } else {
                var n = lineNo(line);
                if (null == n) return null;
            }
            return {
                line: n,
                handle: line,
                text: line.text,
                gutterMarkers: line.gutterMarkers,
                textClass: line.textClass,
                bgClass: line.bgClass,
                wrapClass: line.wrapClass,
                widgets: line.widgets
            };
        },
        getViewport: function() {
            return {
                from: this.display.viewFrom,
                to: this.display.viewTo
            };
        },
        addWidget: function(pos, node, scroll, vert, horiz) {
            var display = this.display;
            pos = cursorCoords(this, clipPos(this.doc, pos));
            var top = pos.bottom, left = pos.left;
            if (node.style.position = "absolute", node.setAttribute("cm-ignore-events", "true"), 
            this.display.input.setUneditable(node), display.sizer.appendChild(node), "over" == vert) top = pos.top; else if ("above" == vert || "near" == vert) {
                var vspace = Math.max(display.wrapper.clientHeight, this.doc.height), hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
                ("above" == vert || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight ? top = pos.top - node.offsetHeight : pos.bottom + node.offsetHeight <= vspace && (top = pos.bottom), 
                left + node.offsetWidth > hspace && (left = hspace - node.offsetWidth);
            }
            node.style.top = top + "px", node.style.left = node.style.right = "", "right" == horiz ? (left = display.sizer.clientWidth - node.offsetWidth, 
            node.style.right = "0px") : ("left" == horiz ? left = 0 : "middle" == horiz && (left = (display.sizer.clientWidth - node.offsetWidth) / 2), 
            node.style.left = left + "px"), scroll && scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
        },
        triggerOnKeyDown: methodOp(onKeyDown),
        triggerOnKeyPress: methodOp(onKeyPress),
        triggerOnKeyUp: onKeyUp,
        execCommand: function(cmd) {
            return commands.hasOwnProperty(cmd) ? commands[cmd].call(null, this) : void 0;
        },
        triggerElectric: methodOp(function(text) {
            triggerElectric(this, text);
        }),
        findPosH: function(from, amount, unit, visually) {
            var dir = 1;
            0 > amount && (dir = -1, amount = -amount);
            for (var i = 0, cur = clipPos(this.doc, from); amount > i && (cur = findPosH(this.doc, cur, dir, unit, visually), 
            !cur.hitSide); ++i) ;
            return cur;
        },
        moveH: methodOp(function(dir, unit) {
            var cm = this;
            cm.extendSelectionsBy(function(range) {
                return cm.display.shift || cm.doc.extend || range.empty() ? findPosH(cm.doc, range.head, dir, unit, cm.options.rtlMoveVisually) : 0 > dir ? range.from() : range.to();
            }, sel_move);
        }),
        deleteH: methodOp(function(dir, unit) {
            var sel = this.doc.sel, doc = this.doc;
            sel.somethingSelected() ? doc.replaceSelection("", null, "+delete") : deleteNearSelection(this, function(range) {
                var other = findPosH(doc, range.head, dir, unit, !1);
                return 0 > dir ? {
                    from: other,
                    to: range.head
                } : {
                    from: range.head,
                    to: other
                };
            });
        }),
        findPosV: function(from, amount, unit, goalColumn) {
            var dir = 1, x = goalColumn;
            0 > amount && (dir = -1, amount = -amount);
            for (var i = 0, cur = clipPos(this.doc, from); amount > i; ++i) {
                var coords = cursorCoords(this, cur, "div");
                if (null == x ? x = coords.left : coords.left = x, cur = findPosV(this, coords, dir, unit), 
                cur.hitSide) break;
            }
            return cur;
        },
        moveV: methodOp(function(dir, unit) {
            var cm = this, doc = this.doc, goals = [], collapse = !cm.display.shift && !doc.extend && doc.sel.somethingSelected();
            if (doc.extendSelectionsBy(function(range) {
                if (collapse) return 0 > dir ? range.from() : range.to();
                var headPos = cursorCoords(cm, range.head, "div");
                null != range.goalColumn && (headPos.left = range.goalColumn), goals.push(headPos.left);
                var pos = findPosV(cm, headPos, dir, unit);
                return "page" == unit && range == doc.sel.primary() && addToScrollPos(cm, null, charCoords(cm, pos, "div").top - headPos.top), 
                pos;
            }, sel_move), goals.length) for (var i = 0; i < doc.sel.ranges.length; i++) doc.sel.ranges[i].goalColumn = goals[i];
        }),
        findWordAt: function(pos) {
            var doc = this.doc, line = getLine(doc, pos.line).text, start = pos.ch, end = pos.ch;
            if (line) {
                var helper = this.getHelper(pos, "wordChars");
                (pos.xRel < 0 || end == line.length) && start ? --start : ++end;
                for (var startChar = line.charAt(start), check = isWordChar(startChar, helper) ? function(ch) {
                    return isWordChar(ch, helper);
                } : /\s/.test(startChar) ? function(ch) {
                    return /\s/.test(ch);
                } : function(ch) {
                    return !/\s/.test(ch) && !isWordChar(ch);
                }; start > 0 && check(line.charAt(start - 1)); ) --start;
                for (;end < line.length && check(line.charAt(end)); ) ++end;
            }
            return new Range(Pos(pos.line, start), Pos(pos.line, end));
        },
        toggleOverwrite: function(value) {
            (null == value || value != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? addClass(this.display.cursorDiv, "CodeMirror-overwrite") : rmClass(this.display.cursorDiv, "CodeMirror-overwrite"), 
            signal(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function() {
            return this.display.input.getField() == activeElt();
        },
        isReadOnly: function() {
            return !(!this.options.readOnly && !this.doc.cantEdit);
        },
        scrollTo: methodOp(function(x, y) {
            (null != x || null != y) && resolveScrollToPos(this), null != x && (this.curOp.scrollLeft = x), 
            null != y && (this.curOp.scrollTop = y);
        }),
        getScrollInfo: function() {
            var scroller = this.display.scroller;
            return {
                left: scroller.scrollLeft,
                top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this),
                clientWidth: displayWidth(this)
            };
        },
        scrollIntoView: methodOp(function(range, margin) {
            if (null == range ? (range = {
                from: this.doc.sel.primary().head,
                to: null
            }, null == margin && (margin = this.options.cursorScrollMargin)) : "number" == typeof range ? range = {
                from: Pos(range, 0),
                to: null
            } : null == range.from && (range = {
                from: range,
                to: null
            }), range.to || (range.to = range.from), range.margin = margin || 0, null != range.from.line) resolveScrollToPos(this), 
            this.curOp.scrollToPos = range; else {
                var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left), Math.min(range.from.top, range.to.top) - range.margin, Math.max(range.from.right, range.to.right), Math.max(range.from.bottom, range.to.bottom) + range.margin);
                this.scrollTo(sPos.scrollLeft, sPos.scrollTop);
            }
        }),
        setSize: methodOp(function(width, height) {
            function interpret(val) {
                return "number" == typeof val || /^\d+$/.test(String(val)) ? val + "px" : val;
            }
            var cm = this;
            null != width && (cm.display.wrapper.style.width = interpret(width)), null != height && (cm.display.wrapper.style.height = interpret(height)), 
            cm.options.lineWrapping && clearLineMeasurementCache(this);
            var lineNo = cm.display.viewFrom;
            cm.doc.iter(lineNo, cm.display.viewTo, function(line) {
                if (line.widgets) for (var i = 0; i < line.widgets.length; i++) if (line.widgets[i].noHScroll) {
                    regLineChange(cm, lineNo, "widget");
                    break;
                }
                ++lineNo;
            }), cm.curOp.forceUpdate = !0, signal(cm, "refresh", this);
        }),
        operation: function(f) {
            return runInOp(this, f);
        },
        refresh: methodOp(function() {
            var oldHeight = this.display.cachedTextHeight;
            regChange(this), this.curOp.forceUpdate = !0, clearCaches(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), 
            updateGutterSpace(this), (null == oldHeight || Math.abs(oldHeight - textHeight(this.display)) > .5) && estimateLineHeights(this), 
            signal(this, "refresh", this);
        }),
        swapDoc: methodOp(function(doc) {
            var old = this.doc;
            return old.cm = null, attachDoc(this, doc), clearCaches(this), this.display.input.reset(), 
            this.scrollTo(doc.scrollLeft, doc.scrollTop), this.curOp.forceScroll = !0, signalLater(this, "swapDoc", this, old), 
            old;
        }),
        getInputField: function() {
            return this.display.input.getField();
        },
        getWrapperElement: function() {
            return this.display.wrapper;
        },
        getScrollerElement: function() {
            return this.display.scroller;
        },
        getGutterElement: function() {
            return this.display.gutters;
        }
    }, eventMixin(CodeMirror);
    var defaults = CodeMirror.defaults = {}, optionHandlers = CodeMirror.optionHandlers = {}, Init = CodeMirror.Init = {
        toString: function() {
            return "CodeMirror.Init";
        }
    };
    option("value", "", function(cm, val) {
        cm.setValue(val);
    }, !0), option("mode", null, function(cm, val) {
        cm.doc.modeOption = val, loadMode(cm);
    }, !0), option("indentUnit", 2, loadMode, !0), option("indentWithTabs", !1), option("smartIndent", !0), 
    option("tabSize", 4, function(cm) {
        resetModeState(cm), clearCaches(cm), regChange(cm);
    }, !0), option("lineSeparator", null, function(cm, val) {
        if (cm.doc.lineSep = val, val) {
            var newBreaks = [], lineNo = cm.doc.first;
            cm.doc.iter(function(line) {
                for (var pos = 0; ;) {
                    var found = line.text.indexOf(val, pos);
                    if (-1 == found) break;
                    pos = found + val.length, newBreaks.push(Pos(lineNo, found));
                }
                lineNo++;
            });
            for (var i = newBreaks.length - 1; i >= 0; i--) replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length));
        }
    }), option("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(cm, val, old) {
        cm.state.specialChars = new RegExp(val.source + (val.test("	") ? "" : "|	"), "g"), 
        old != CodeMirror.Init && cm.refresh();
    }), option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function(cm) {
        cm.refresh();
    }, !0), option("electricChars", !0), option("inputStyle", mobile ? "contenteditable" : "textarea", function() {
        throw new Error("inputStyle can not (yet) be changed in a running editor");
    }, !0), option("rtlMoveVisually", !windows), option("wholeLineUpdateBefore", !0), 
    option("theme", "default", function(cm) {
        themeChanged(cm), guttersChanged(cm);
    }, !0), option("keyMap", "default", function(cm, val, old) {
        var next = getKeyMap(val), prev = old != CodeMirror.Init && getKeyMap(old);
        prev && prev.detach && prev.detach(cm, next), next.attach && next.attach(cm, prev || null);
    }), option("extraKeys", null), option("lineWrapping", !1, wrappingChanged, !0), 
    option("gutters", [], function(cm) {
        setGuttersForLineNumbers(cm.options), guttersChanged(cm);
    }, !0), option("fixedGutter", !0, function(cm, val) {
        cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0", 
        cm.refresh();
    }, !0), option("coverGutterNextToScrollbar", !1, function(cm) {
        updateScrollbars(cm);
    }, !0), option("scrollbarStyle", "native", function(cm) {
        initScrollbars(cm), updateScrollbars(cm), cm.display.scrollbars.setScrollTop(cm.doc.scrollTop), 
        cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, !0), option("lineNumbers", !1, function(cm) {
        setGuttersForLineNumbers(cm.options), guttersChanged(cm);
    }, !0), option("firstLineNumber", 1, guttersChanged, !0), option("lineNumberFormatter", function(integer) {
        return integer;
    }, guttersChanged, !0), option("showCursorWhenSelecting", !1, updateSelection, !0), 
    option("resetSelectionOnContextMenu", !0), option("lineWiseCopyCut", !0), option("readOnly", !1, function(cm, val) {
        "nocursor" == val ? (onBlur(cm), cm.display.input.blur(), cm.display.disabled = !0) : cm.display.disabled = !1, 
        cm.display.input.readOnlyChanged(val);
    }), option("disableInput", !1, function(cm, val) {
        val || cm.display.input.reset();
    }, !0), option("dragDrop", !0, dragDropChanged), option("allowDropFileTypes", null), 
    option("cursorBlinkRate", 530), option("cursorScrollMargin", 0), option("cursorHeight", 1, updateSelection, !0), 
    option("singleCursorHeightPerLine", !0, updateSelection, !0), option("workTime", 100), 
    option("workDelay", 100), option("flattenSpans", !0, resetModeState, !0), option("addModeClass", !1, resetModeState, !0), 
    option("pollInterval", 100), option("undoDepth", 200, function(cm, val) {
        cm.doc.history.undoDepth = val;
    }), option("historyEventDelay", 1250), option("viewportMargin", 10, function(cm) {
        cm.refresh();
    }, !0), option("maxHighlightLength", 1e4, resetModeState, !0), option("moveInputWithCursor", !0, function(cm, val) {
        val || cm.display.input.resetPosition();
    }), option("tabindex", null, function(cm, val) {
        cm.display.input.getField().tabIndex = val || "";
    }), option("autofocus", null);
    var modes = CodeMirror.modes = {}, mimeModes = CodeMirror.mimeModes = {};
    CodeMirror.defineMode = function(name, mode) {
        CodeMirror.defaults.mode || "null" == name || (CodeMirror.defaults.mode = name), 
        arguments.length > 2 && (mode.dependencies = Array.prototype.slice.call(arguments, 2)), 
        modes[name] = mode;
    }, CodeMirror.defineMIME = function(mime, spec) {
        mimeModes[mime] = spec;
    }, CodeMirror.resolveMode = function(spec) {
        if ("string" == typeof spec && mimeModes.hasOwnProperty(spec)) spec = mimeModes[spec]; else if (spec && "string" == typeof spec.name && mimeModes.hasOwnProperty(spec.name)) {
            var found = mimeModes[spec.name];
            "string" == typeof found && (found = {
                name: found
            }), spec = createObj(found, spec), spec.name = found.name;
        } else if ("string" == typeof spec && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) return CodeMirror.resolveMode("application/xml");
        return "string" == typeof spec ? {
            name: spec
        } : spec || {
            name: "null"
        };
    }, CodeMirror.getMode = function(options, spec) {
        var spec = CodeMirror.resolveMode(spec), mfactory = modes[spec.name];
        if (!mfactory) return CodeMirror.getMode(options, "text/plain");
        var modeObj = mfactory(options, spec);
        if (modeExtensions.hasOwnProperty(spec.name)) {
            var exts = modeExtensions[spec.name];
            for (var prop in exts) exts.hasOwnProperty(prop) && (modeObj.hasOwnProperty(prop) && (modeObj["_" + prop] = modeObj[prop]), 
            modeObj[prop] = exts[prop]);
        }
        if (modeObj.name = spec.name, spec.helperType && (modeObj.helperType = spec.helperType), 
        spec.modeProps) for (var prop in spec.modeProps) modeObj[prop] = spec.modeProps[prop];
        return modeObj;
    }, CodeMirror.defineMode("null", function() {
        return {
            token: function(stream) {
                stream.skipToEnd();
            }
        };
    }), CodeMirror.defineMIME("text/plain", "null");
    var modeExtensions = CodeMirror.modeExtensions = {};
    CodeMirror.extendMode = function(mode, properties) {
        var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : modeExtensions[mode] = {};
        copyObj(properties, exts);
    }, CodeMirror.defineExtension = function(name, func) {
        CodeMirror.prototype[name] = func;
    }, CodeMirror.defineDocExtension = function(name, func) {
        Doc.prototype[name] = func;
    }, CodeMirror.defineOption = option;
    var initHooks = [];
    CodeMirror.defineInitHook = function(f) {
        initHooks.push(f);
    };
    var helpers = CodeMirror.helpers = {};
    CodeMirror.registerHelper = function(type, name, value) {
        helpers.hasOwnProperty(type) || (helpers[type] = CodeMirror[type] = {
            _global: []
        }), helpers[type][name] = value;
    }, CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
        CodeMirror.registerHelper(type, name, value), helpers[type]._global.push({
            pred: predicate,
            val: value
        });
    };
    var copyState = CodeMirror.copyState = function(mode, state) {
        if (state === !0) return state;
        if (mode.copyState) return mode.copyState(state);
        var nstate = {};
        for (var n in state) {
            var val = state[n];
            val instanceof Array && (val = val.concat([])), nstate[n] = val;
        }
        return nstate;
    }, startState = CodeMirror.startState = function(mode, a1, a2) {
        return mode.startState ? mode.startState(a1, a2) : !0;
    };
    CodeMirror.innerMode = function(mode, state) {
        for (;mode.innerMode; ) {
            var info = mode.innerMode(state);
            if (!info || info.mode == mode) break;
            state = info.state, mode = info.mode;
        }
        return info || {
            mode: mode,
            state: state
        };
    };
    var commands = CodeMirror.commands = {
        selectAll: function(cm) {
            cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
        },
        singleSelection: function(cm) {
            cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll);
        },
        killLine: function(cm) {
            deleteNearSelection(cm, function(range) {
                if (range.empty()) {
                    var len = getLine(cm.doc, range.head.line).text.length;
                    return range.head.ch == len && range.head.line < cm.lastLine() ? {
                        from: range.head,
                        to: Pos(range.head.line + 1, 0)
                    } : {
                        from: range.head,
                        to: Pos(range.head.line, len)
                    };
                }
                return {
                    from: range.from(),
                    to: range.to()
                };
            });
        },
        deleteLine: function(cm) {
            deleteNearSelection(cm, function(range) {
                return {
                    from: Pos(range.from().line, 0),
                    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
                };
            });
        },
        delLineLeft: function(cm) {
            deleteNearSelection(cm, function(range) {
                return {
                    from: Pos(range.from().line, 0),
                    to: range.from()
                };
            });
        },
        delWrappedLineLeft: function(cm) {
            deleteNearSelection(cm, function(range) {
                var top = cm.charCoords(range.head, "div").top + 5, leftPos = cm.coordsChar({
                    left: 0,
                    top: top
                }, "div");
                return {
                    from: leftPos,
                    to: range.from()
                };
            });
        },
        delWrappedLineRight: function(cm) {
            deleteNearSelection(cm, function(range) {
                var top = cm.charCoords(range.head, "div").top + 5, rightPos = cm.coordsChar({
                    left: cm.display.lineDiv.offsetWidth + 100,
                    top: top
                }, "div");
                return {
                    from: range.from(),
                    to: rightPos
                };
            });
        },
        undo: function(cm) {
            cm.undo();
        },
        redo: function(cm) {
            cm.redo();
        },
        undoSelection: function(cm) {
            cm.undoSelection();
        },
        redoSelection: function(cm) {
            cm.redoSelection();
        },
        goDocStart: function(cm) {
            cm.extendSelection(Pos(cm.firstLine(), 0));
        },
        goDocEnd: function(cm) {
            cm.extendSelection(Pos(cm.lastLine()));
        },
        goLineStart: function(cm) {
            cm.extendSelectionsBy(function(range) {
                return lineStart(cm, range.head.line);
            }, {
                origin: "+move",
                bias: 1
            });
        },
        goLineStartSmart: function(cm) {
            cm.extendSelectionsBy(function(range) {
                return lineStartSmart(cm, range.head);
            }, {
                origin: "+move",
                bias: 1
            });
        },
        goLineEnd: function(cm) {
            cm.extendSelectionsBy(function(range) {
                return lineEnd(cm, range.head.line);
            }, {
                origin: "+move",
                bias: -1
            });
        },
        goLineRight: function(cm) {
            cm.extendSelectionsBy(function(range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                return cm.coordsChar({
                    left: cm.display.lineDiv.offsetWidth + 100,
                    top: top
                }, "div");
            }, sel_move);
        },
        goLineLeft: function(cm) {
            cm.extendSelectionsBy(function(range) {
                var top = cm.charCoords(range.head, "div").top + 5;
                return cm.coordsChar({
                    left: 0,
                    top: top
                }, "div");
            }, sel_move);
        },
        goLineLeftSmart: function(cm) {
            cm.extendSelectionsBy(function(range) {
                var top = cm.charCoords(range.head, "div").top + 5, pos = cm.coordsChar({
                    left: 0,
                    top: top
                }, "div");
                return pos.ch < cm.getLine(pos.line).search(/\S/) ? lineStartSmart(cm, range.head) : pos;
            }, sel_move);
        },
        goLineUp: function(cm) {
            cm.moveV(-1, "line");
        },
        goLineDown: function(cm) {
            cm.moveV(1, "line");
        },
        goPageUp: function(cm) {
            cm.moveV(-1, "page");
        },
        goPageDown: function(cm) {
            cm.moveV(1, "page");
        },
        goCharLeft: function(cm) {
            cm.moveH(-1, "char");
        },
        goCharRight: function(cm) {
            cm.moveH(1, "char");
        },
        goColumnLeft: function(cm) {
            cm.moveH(-1, "column");
        },
        goColumnRight: function(cm) {
            cm.moveH(1, "column");
        },
        goWordLeft: function(cm) {
            cm.moveH(-1, "word");
        },
        goGroupRight: function(cm) {
            cm.moveH(1, "group");
        },
        goGroupLeft: function(cm) {
            cm.moveH(-1, "group");
        },
        goWordRight: function(cm) {
            cm.moveH(1, "word");
        },
        delCharBefore: function(cm) {
            cm.deleteH(-1, "char");
        },
        delCharAfter: function(cm) {
            cm.deleteH(1, "char");
        },
        delWordBefore: function(cm) {
            cm.deleteH(-1, "word");
        },
        delWordAfter: function(cm) {
            cm.deleteH(1, "word");
        },
        delGroupBefore: function(cm) {
            cm.deleteH(-1, "group");
        },
        delGroupAfter: function(cm) {
            cm.deleteH(1, "group");
        },
        indentAuto: function(cm) {
            cm.indentSelection("smart");
        },
        indentMore: function(cm) {
            cm.indentSelection("add");
        },
        indentLess: function(cm) {
            cm.indentSelection("subtract");
        },
        insertTab: function(cm) {
            cm.replaceSelection("	");
        },
        insertSoftTab: function(cm) {
            for (var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize, i = 0; i < ranges.length; i++) {
                var pos = ranges[i].from(), col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
                spaces.push(new Array(tabSize - col % tabSize + 1).join(" "));
            }
            cm.replaceSelections(spaces);
        },
        defaultTab: function(cm) {
            cm.somethingSelected() ? cm.indentSelection("add") : cm.execCommand("insertTab");
        },
        transposeChars: function(cm) {
            runInOp(cm, function() {
                for (var ranges = cm.listSelections(), newSel = [], i = 0; i < ranges.length; i++) {
                    var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
                    if (line) if (cur.ch == line.length && (cur = new Pos(cur.line, cur.ch - 1)), cur.ch > 0) cur = new Pos(cur.line, cur.ch + 1), 
                    cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2), Pos(cur.line, cur.ch - 2), cur, "+transpose"); else if (cur.line > cm.doc.first) {
                        var prev = getLine(cm.doc, cur.line - 1).text;
                        prev && cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() + prev.charAt(prev.length - 1), Pos(cur.line - 1, prev.length - 1), Pos(cur.line, 1), "+transpose");
                    }
                    newSel.push(new Range(cur, cur));
                }
                cm.setSelections(newSel);
            });
        },
        newlineAndIndent: function(cm) {
            runInOp(cm, function() {
                for (var len = cm.listSelections().length, i = 0; len > i; i++) {
                    var range = cm.listSelections()[i];
                    cm.replaceRange(cm.doc.lineSeparator(), range.anchor, range.head, "+input"), cm.indentLine(range.from().line + 1, null, !0);
                }
                ensureCursorVisible(cm);
            });
        },
        toggleOverwrite: function(cm) {
            cm.toggleOverwrite();
        }
    }, keyMap = CodeMirror.keyMap = {};
    keyMap.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    }, keyMap.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    }, keyMap.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, keyMap.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: [ "basic", "emacsy" ]
    }, keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault, CodeMirror.normalizeKeyMap = function(keymap) {
        var copy = {};
        for (var keyname in keymap) if (keymap.hasOwnProperty(keyname)) {
            var value = keymap[keyname];
            if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) continue;
            if ("..." == value) {
                delete keymap[keyname];
                continue;
            }
            for (var keys = map(keyname.split(" "), normalizeKeyName), i = 0; i < keys.length; i++) {
                var val, name;
                i == keys.length - 1 ? (name = keys.join(" "), val = value) : (name = keys.slice(0, i + 1).join(" "), 
                val = "...");
                var prev = copy[name];
                if (prev) {
                    if (prev != val) throw new Error("Inconsistent bindings for " + name);
                } else copy[name] = val;
            }
            delete keymap[keyname];
        }
        for (var prop in copy) keymap[prop] = copy[prop];
        return keymap;
    };
    var lookupKey = CodeMirror.lookupKey = function(key, map, handle, context) {
        map = getKeyMap(map);
        var found = map.call ? map.call(key, context) : map[key];
        if (found === !1) return "nothing";
        if ("..." === found) return "multi";
        if (null != found && handle(found)) return "handled";
        if (map.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(map.fallthrough)) return lookupKey(key, map.fallthrough, handle, context);
            for (var i = 0; i < map.fallthrough.length; i++) {
                var result = lookupKey(key, map.fallthrough[i], handle, context);
                if (result) return result;
            }
        }
    }, isModifierKey = CodeMirror.isModifierKey = function(value) {
        var name = "string" == typeof value ? value : keyNames[value.keyCode];
        return "Ctrl" == name || "Alt" == name || "Shift" == name || "Mod" == name;
    }, keyName = CodeMirror.keyName = function(event, noShift) {
        if (presto && 34 == event.keyCode && event["char"]) return !1;
        var base = keyNames[event.keyCode], name = base;
        return null == name || event.altGraphKey ? !1 : (event.altKey && "Alt" != base && (name = "Alt-" + name), 
        (flipCtrlCmd ? event.metaKey : event.ctrlKey) && "Ctrl" != base && (name = "Ctrl-" + name), 
        (flipCtrlCmd ? event.ctrlKey : event.metaKey) && "Cmd" != base && (name = "Cmd-" + name), 
        !noShift && event.shiftKey && "Shift" != base && (name = "Shift-" + name), name);
    };
    CodeMirror.fromTextArea = function(textarea, options) {
        function save() {
            textarea.value = cm.getValue();
        }
        if (options = options ? copyObj(options) : {}, options.value = textarea.value, !options.tabindex && textarea.tabIndex && (options.tabindex = textarea.tabIndex), 
        !options.placeholder && textarea.placeholder && (options.placeholder = textarea.placeholder), 
        null == options.autofocus) {
            var hasFocus = activeElt();
            options.autofocus = hasFocus == textarea || null != textarea.getAttribute("autofocus") && hasFocus == document.body;
        }
        if (textarea.form && (on(textarea.form, "submit", save), !options.leaveSubmitMethodAlone)) {
            var form = textarea.form, realSubmit = form.submit;
            try {
                var wrappedSubmit = form.submit = function() {
                    save(), form.submit = realSubmit, form.submit(), form.submit = wrappedSubmit;
                };
            } catch (e) {}
        }
        options.finishInit = function(cm) {
            cm.save = save, cm.getTextArea = function() {
                return textarea;
            }, cm.toTextArea = function() {
                cm.toTextArea = isNaN, save(), textarea.parentNode.removeChild(cm.getWrapperElement()), 
                textarea.style.display = "", textarea.form && (off(textarea.form, "submit", save), 
                "function" == typeof textarea.form.submit && (textarea.form.submit = realSubmit));
            };
        }, textarea.style.display = "none";
        var cm = CodeMirror(function(node) {
            textarea.parentNode.insertBefore(node, textarea.nextSibling);
        }, options);
        return cm;
    };
    var StringStream = CodeMirror.StringStream = function(string, tabSize) {
        this.pos = this.start = 0, this.string = string, this.tabSize = tabSize || 8, this.lastColumnPos = this.lastColumnValue = 0, 
        this.lineStart = 0;
    };
    StringStream.prototype = {
        eol: function() {
            return this.pos >= this.string.length;
        },
        sol: function() {
            return this.pos == this.lineStart;
        },
        peek: function() {
            return this.string.charAt(this.pos) || void 0;
        },
        next: function() {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0;
        },
        eat: function(match) {
            var ch = this.string.charAt(this.pos);
            if ("string" == typeof match) var ok = ch == match; else var ok = ch && (match.test ? match.test(ch) : match(ch));
            return ok ? (++this.pos, ch) : void 0;
        },
        eatWhile: function(match) {
            for (var start = this.pos; this.eat(match); ) ;
            return this.pos > start;
        },
        eatSpace: function() {
            for (var start = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
            return this.pos > start;
        },
        skipToEnd: function() {
            this.pos = this.string.length;
        },
        skipTo: function(ch) {
            var found = this.string.indexOf(ch, this.pos);
            return found > -1 ? (this.pos = found, !0) : void 0;
        },
        backUp: function(n) {
            this.pos -= n;
        },
        column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), 
            this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        },
        indentation: function() {
            return countColumn(this.string, null, this.tabSize) - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0);
        },
        match: function(pattern, consume, caseInsensitive) {
            if ("string" != typeof pattern) {
                var match = this.string.slice(this.pos).match(pattern);
                return match && match.index > 0 ? null : (match && consume !== !1 && (this.pos += match[0].length), 
                match);
            }
            var cased = function(str) {
                return caseInsensitive ? str.toLowerCase() : str;
            }, substr = this.string.substr(this.pos, pattern.length);
            return cased(substr) == cased(pattern) ? (consume !== !1 && (this.pos += pattern.length), 
            !0) : void 0;
        },
        current: function() {
            return this.string.slice(this.start, this.pos);
        },
        hideFirstChars: function(n, inner) {
            this.lineStart += n;
            try {
                return inner();
            } finally {
                this.lineStart -= n;
            }
        }
    };
    var nextMarkerId = 0, TextMarker = CodeMirror.TextMarker = function(doc, type) {
        this.lines = [], this.type = type, this.doc = doc, this.id = ++nextMarkerId;
    };
    eventMixin(TextMarker), TextMarker.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            var cm = this.doc.cm, withOp = cm && !cm.curOp;
            if (withOp && startOperation(cm), hasHandler(this, "clear")) {
                var found = this.find();
                found && signalLater(this, "clear", found.from, found.to);
            }
            for (var min = null, max = null, i = 0; i < this.lines.length; ++i) {
                var line = this.lines[i], span = getMarkedSpanFor(line.markedSpans, this);
                cm && !this.collapsed ? regLineChange(cm, lineNo(line), "text") : cm && (null != span.to && (max = lineNo(line)), 
                null != span.from && (min = lineNo(line))), line.markedSpans = removeMarkedSpan(line.markedSpans, span), 
                null == span.from && this.collapsed && !lineIsHidden(this.doc, line) && cm && updateLineHeight(line, textHeight(cm.display));
            }
            if (cm && this.collapsed && !cm.options.lineWrapping) for (var i = 0; i < this.lines.length; ++i) {
                var visual = visualLine(this.lines[i]), len = lineLength(visual);
                len > cm.display.maxLineLength && (cm.display.maxLine = visual, cm.display.maxLineLength = len, 
                cm.display.maxLineChanged = !0);
            }
            null != min && cm && this.collapsed && regChange(cm, min, max + 1), this.lines.length = 0, 
            this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, 
            cm && reCheckSelection(cm.doc)), cm && signalLater(cm, "markerCleared", cm, this), 
            withOp && endOperation(cm), this.parent && this.parent.clear();
        }
    }, TextMarker.prototype.find = function(side, lineObj) {
        null == side && "bookmark" == this.type && (side = 1);
        for (var from, to, i = 0; i < this.lines.length; ++i) {
            var line = this.lines[i], span = getMarkedSpanFor(line.markedSpans, this);
            if (null != span.from && (from = Pos(lineObj ? line : lineNo(line), span.from), 
            -1 == side)) return from;
            if (null != span.to && (to = Pos(lineObj ? line : lineNo(line), span.to), 1 == side)) return to;
        }
        return from && {
            from: from,
            to: to
        };
    }, TextMarker.prototype.changed = function() {
        var pos = this.find(-1, !0), widget = this, cm = this.doc.cm;
        pos && cm && runInOp(cm, function() {
            var line = pos.line, lineN = lineNo(pos.line), view = findViewForLine(cm, lineN);
            if (view && (clearLineMeasurementCacheFor(view), cm.curOp.selectionChanged = cm.curOp.forceUpdate = !0), 
            cm.curOp.updateMaxLine = !0, !lineIsHidden(widget.doc, line) && null != widget.height) {
                var oldHeight = widget.height;
                widget.height = null;
                var dHeight = widgetHeight(widget) - oldHeight;
                dHeight && updateLineHeight(line, line.height + dHeight);
            }
        });
    }, TextMarker.prototype.attachLine = function(line) {
        if (!this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            op.maybeHiddenMarkers && -1 != indexOf(op.maybeHiddenMarkers, this) || (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(line);
    }, TextMarker.prototype.detachLine = function(line) {
        if (this.lines.splice(indexOf(this.lines, line), 1), !this.lines.length && this.doc.cm) {
            var op = this.doc.cm.curOp;
            (op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
        }
    };
    var nextMarkerId = 0, SharedTextMarker = CodeMirror.SharedTextMarker = function(markers, primary) {
        this.markers = markers, this.primary = primary;
        for (var i = 0; i < markers.length; ++i) markers[i].parent = this;
    };
    eventMixin(SharedTextMarker), SharedTextMarker.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var i = 0; i < this.markers.length; ++i) this.markers[i].clear();
            signalLater(this, "clear");
        }
    }, SharedTextMarker.prototype.find = function(side, lineObj) {
        return this.primary.find(side, lineObj);
    };
    var LineWidget = CodeMirror.LineWidget = function(doc, node, options) {
        if (options) for (var opt in options) options.hasOwnProperty(opt) && (this[opt] = options[opt]);
        this.doc = doc, this.node = node;
    };
    eventMixin(LineWidget), LineWidget.prototype.clear = function() {
        var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
        if (null != no && ws) {
            for (var i = 0; i < ws.length; ++i) ws[i] == this && ws.splice(i--, 1);
            ws.length || (line.widgets = null);
            var height = widgetHeight(this);
            updateLineHeight(line, Math.max(0, line.height - height)), cm && runInOp(cm, function() {
                adjustScrollWhenAboveVisible(cm, line, -height), regLineChange(cm, no, "widget");
            });
        }
    }, LineWidget.prototype.changed = function() {
        var oldH = this.height, cm = this.doc.cm, line = this.line;
        this.height = null;
        var diff = widgetHeight(this) - oldH;
        diff && (updateLineHeight(line, line.height + diff), cm && runInOp(cm, function() {
            cm.curOp.forceUpdate = !0, adjustScrollWhenAboveVisible(cm, line, diff);
        }));
    };
    var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
        this.text = text, attachMarkedSpans(this, markedSpans), this.height = estimateHeight ? estimateHeight(this) : 1;
    };
    eventMixin(Line), Line.prototype.lineNo = function() {
        return lineNo(this);
    };
    var styleToClassCache = {}, styleToClassCacheWithMode = {};
    LeafChunk.prototype = {
        chunkSize: function() {
            return this.lines.length;
        },
        removeInner: function(at, n) {
            for (var i = at, e = at + n; e > i; ++i) {
                var line = this.lines[i];
                this.height -= line.height, cleanUpLine(line), signalLater(line, "delete");
            }
            this.lines.splice(at, n);
        },
        collapse: function(lines) {
            lines.push.apply(lines, this.lines);
        },
        insertInner: function(at, lines, height) {
            this.height += height, this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
            for (var i = 0; i < lines.length; ++i) lines[i].parent = this;
        },
        iterN: function(at, n, op) {
            for (var e = at + n; e > at; ++at) if (op(this.lines[at])) return !0;
        }
    }, BranchChunk.prototype = {
        chunkSize: function() {
            return this.size;
        },
        removeInner: function(at, n) {
            this.size -= n;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (sz > at) {
                    var rm = Math.min(n, sz - at), oldHeight = child.height;
                    if (child.removeInner(at, rm), this.height -= oldHeight - child.height, sz == rm && (this.children.splice(i--, 1), 
                    child.parent = null), 0 == (n -= rm)) break;
                    at = 0;
                } else at -= sz;
            }
            if (this.size - n < 25 && (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
                var lines = [];
                this.collapse(lines), this.children = [ new LeafChunk(lines) ], this.children[0].parent = this;
            }
        },
        collapse: function(lines) {
            for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(lines);
        },
        insertInner: function(at, lines, height) {
            this.size += lines.length, this.height += height;
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (sz >= at) {
                    if (child.insertInner(at, lines, height), child.lines && child.lines.length > 50) {
                        for (;child.lines.length > 50; ) {
                            var spilled = child.lines.splice(child.lines.length - 25, 25), newleaf = new LeafChunk(spilled);
                            child.height -= newleaf.height, this.children.splice(i + 1, 0, newleaf), newleaf.parent = this;
                        }
                        this.maybeSpill();
                    }
                    break;
                }
                at -= sz;
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var me = this;
                do {
                    var spilled = me.children.splice(me.children.length - 5, 5), sibling = new BranchChunk(spilled);
                    if (me.parent) {
                        me.size -= sibling.size, me.height -= sibling.height;
                        var myIndex = indexOf(me.parent.children, me);
                        me.parent.children.splice(myIndex + 1, 0, sibling);
                    } else {
                        var copy = new BranchChunk(me.children);
                        copy.parent = me, me.children = [ copy, sibling ], me = copy;
                    }
                    sibling.parent = me.parent;
                } while (me.children.length > 10);
                me.parent.maybeSpill();
            }
        },
        iterN: function(at, n, op) {
            for (var i = 0; i < this.children.length; ++i) {
                var child = this.children[i], sz = child.chunkSize();
                if (sz > at) {
                    var used = Math.min(n, sz - at);
                    if (child.iterN(at, used, op)) return !0;
                    if (0 == (n -= used)) break;
                    at = 0;
                } else at -= sz;
            }
        }
    };
    var nextDocId = 0, Doc = CodeMirror.Doc = function(text, mode, firstLine, lineSep) {
        if (!(this instanceof Doc)) return new Doc(text, mode, firstLine, lineSep);
        null == firstLine && (firstLine = 0), BranchChunk.call(this, [ new LeafChunk([ new Line("", null) ]) ]), 
        this.first = firstLine, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, 
        this.cleanGeneration = 1, this.frontier = firstLine;
        var start = Pos(firstLine, 0);
        this.sel = simpleSelection(start), this.history = new History(null), this.id = ++nextDocId, 
        this.modeOption = mode, this.lineSep = lineSep, this.extend = !1, "string" == typeof text && (text = this.splitLines(text)), 
        updateDoc(this, {
            from: start,
            to: start,
            text: text
        }), setSelection(this, simpleSelection(start), sel_dontScroll);
    };
    Doc.prototype = createObj(BranchChunk.prototype, {
        constructor: Doc,
        iter: function(from, to, op) {
            op ? this.iterN(from - this.first, to - from, op) : this.iterN(this.first, this.first + this.size, from);
        },
        insert: function(at, lines) {
            for (var height = 0, i = 0; i < lines.length; ++i) height += lines[i].height;
            this.insertInner(at - this.first, lines, height);
        },
        remove: function(at, n) {
            this.removeInner(at - this.first, n);
        },
        getValue: function(lineSep) {
            var lines = getLines(this, this.first, this.first + this.size);
            return lineSep === !1 ? lines : lines.join(lineSep || this.lineSeparator());
        },
        setValue: docMethodOp(function(code) {
            var top = Pos(this.first, 0), last = this.first + this.size - 1;
            makeChange(this, {
                from: top,
                to: Pos(last, getLine(this, last).text.length),
                text: this.splitLines(code),
                origin: "setValue",
                full: !0
            }, !0), setSelection(this, simpleSelection(top));
        }),
        replaceRange: function(code, from, to, origin) {
            from = clipPos(this, from), to = to ? clipPos(this, to) : from, replaceRange(this, code, from, to, origin);
        },
        getRange: function(from, to, lineSep) {
            var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
            return lineSep === !1 ? lines : lines.join(lineSep || this.lineSeparator());
        },
        getLine: function(line) {
            var l = this.getLineHandle(line);
            return l && l.text;
        },
        getLineHandle: function(line) {
            return isLine(this, line) ? getLine(this, line) : void 0;
        },
        getLineNumber: function(line) {
            return lineNo(line);
        },
        getLineHandleVisualStart: function(line) {
            return "number" == typeof line && (line = getLine(this, line)), visualLine(line);
        },
        lineCount: function() {
            return this.size;
        },
        firstLine: function() {
            return this.first;
        },
        lastLine: function() {
            return this.first + this.size - 1;
        },
        clipPos: function(pos) {
            return clipPos(this, pos);
        },
        getCursor: function(start) {
            var pos, range = this.sel.primary();
            return pos = null == start || "head" == start ? range.head : "anchor" == start ? range.anchor : "end" == start || "to" == start || start === !1 ? range.to() : range.from();
        },
        listSelections: function() {
            return this.sel.ranges;
        },
        somethingSelected: function() {
            return this.sel.somethingSelected();
        },
        setCursor: docMethodOp(function(line, ch, options) {
            setSimpleSelection(this, clipPos(this, "number" == typeof line ? Pos(line, ch || 0) : line), null, options);
        }),
        setSelection: docMethodOp(function(anchor, head, options) {
            setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
        }),
        extendSelection: docMethodOp(function(head, other, options) {
            extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
        }),
        extendSelections: docMethodOp(function(heads, options) {
            extendSelections(this, clipPosArray(this, heads), options);
        }),
        extendSelectionsBy: docMethodOp(function(f, options) {
            var heads = map(this.sel.ranges, f);
            extendSelections(this, clipPosArray(this, heads), options);
        }),
        setSelections: docMethodOp(function(ranges, primary, options) {
            if (ranges.length) {
                for (var i = 0, out = []; i < ranges.length; i++) out[i] = new Range(clipPos(this, ranges[i].anchor), clipPos(this, ranges[i].head));
                null == primary && (primary = Math.min(ranges.length - 1, this.sel.primIndex)), 
                setSelection(this, normalizeSelection(out, primary), options);
            }
        }),
        addSelection: docMethodOp(function(anchor, head, options) {
            var ranges = this.sel.ranges.slice(0);
            ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor))), setSelection(this, normalizeSelection(ranges, ranges.length - 1), options);
        }),
        getSelection: function(lineSep) {
            for (var lines, ranges = this.sel.ranges, i = 0; i < ranges.length; i++) {
                var sel = getBetween(this, ranges[i].from(), ranges[i].to());
                lines = lines ? lines.concat(sel) : sel;
            }
            return lineSep === !1 ? lines : lines.join(lineSep || this.lineSeparator());
        },
        getSelections: function(lineSep) {
            for (var parts = [], ranges = this.sel.ranges, i = 0; i < ranges.length; i++) {
                var sel = getBetween(this, ranges[i].from(), ranges[i].to());
                lineSep !== !1 && (sel = sel.join(lineSep || this.lineSeparator())), parts[i] = sel;
            }
            return parts;
        },
        replaceSelection: function(code, collapse, origin) {
            for (var dup = [], i = 0; i < this.sel.ranges.length; i++) dup[i] = code;
            this.replaceSelections(dup, collapse, origin || "+input");
        },
        replaceSelections: docMethodOp(function(code, collapse, origin) {
            for (var changes = [], sel = this.sel, i = 0; i < sel.ranges.length; i++) {
                var range = sel.ranges[i];
                changes[i] = {
                    from: range.from(),
                    to: range.to(),
                    text: this.splitLines(code[i]),
                    origin: origin
                };
            }
            for (var newSel = collapse && "end" != collapse && computeReplacedSel(this, changes, collapse), i = changes.length - 1; i >= 0; i--) makeChange(this, changes[i]);
            newSel ? setSelectionReplaceHistory(this, newSel) : this.cm && ensureCursorVisible(this.cm);
        }),
        undo: docMethodOp(function() {
            makeChangeFromHistory(this, "undo");
        }),
        redo: docMethodOp(function() {
            makeChangeFromHistory(this, "redo");
        }),
        undoSelection: docMethodOp(function() {
            makeChangeFromHistory(this, "undo", !0);
        }),
        redoSelection: docMethodOp(function() {
            makeChangeFromHistory(this, "redo", !0);
        }),
        setExtending: function(val) {
            this.extend = val;
        },
        getExtending: function() {
            return this.extend;
        },
        historySize: function() {
            for (var hist = this.history, done = 0, undone = 0, i = 0; i < hist.done.length; i++) hist.done[i].ranges || ++done;
            for (var i = 0; i < hist.undone.length; i++) hist.undone[i].ranges || ++undone;
            return {
                undo: done,
                redo: undone
            };
        },
        clearHistory: function() {
            this.history = new History(this.history.maxGeneration);
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(forceSplit) {
            return forceSplit && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), 
            this.history.generation;
        },
        isClean: function(gen) {
            return this.history.generation == (gen || this.cleanGeneration);
        },
        getHistory: function() {
            return {
                done: copyHistoryArray(this.history.done),
                undone: copyHistoryArray(this.history.undone)
            };
        },
        setHistory: function(histData) {
            var hist = this.history = new History(this.history.maxGeneration);
            hist.done = copyHistoryArray(histData.done.slice(0), null, !0), hist.undone = copyHistoryArray(histData.undone.slice(0), null, !0);
        },
        addLineClass: docMethodOp(function(handle, where, cls) {
            return changeLine(this, handle, "gutter" == where ? "gutter" : "class", function(line) {
                var prop = "text" == where ? "textClass" : "background" == where ? "bgClass" : "gutter" == where ? "gutterClass" : "wrapClass";
                if (line[prop]) {
                    if (classTest(cls).test(line[prop])) return !1;
                    line[prop] += " " + cls;
                } else line[prop] = cls;
                return !0;
            });
        }),
        removeLineClass: docMethodOp(function(handle, where, cls) {
            return changeLine(this, handle, "gutter" == where ? "gutter" : "class", function(line) {
                var prop = "text" == where ? "textClass" : "background" == where ? "bgClass" : "gutter" == where ? "gutterClass" : "wrapClass", cur = line[prop];
                if (!cur) return !1;
                if (null == cls) line[prop] = null; else {
                    var found = cur.match(classTest(cls));
                    if (!found) return !1;
                    var end = found.index + found[0].length;
                    line[prop] = cur.slice(0, found.index) + (found.index && end != cur.length ? " " : "") + cur.slice(end) || null;
                }
                return !0;
            });
        }),
        addLineWidget: docMethodOp(function(handle, node, options) {
            return addLineWidget(this, handle, node, options);
        }),
        removeLineWidget: function(widget) {
            widget.clear();
        },
        markText: function(from, to, options) {
            return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range");
        },
        setBookmark: function(pos, options) {
            var realOpts = {
                replacedWith: options && (null == options.nodeType ? options.widget : options),
                insertLeft: options && options.insertLeft,
                clearWhenEmpty: !1,
                shared: options && options.shared,
                handleMouseEvents: options && options.handleMouseEvents
            };
            return pos = clipPos(this, pos), markText(this, pos, pos, realOpts, "bookmark");
        },
        findMarksAt: function(pos) {
            pos = clipPos(this, pos);
            var markers = [], spans = getLine(this, pos.line).markedSpans;
            if (spans) for (var i = 0; i < spans.length; ++i) {
                var span = spans[i];
                (null == span.from || span.from <= pos.ch) && (null == span.to || span.to >= pos.ch) && markers.push(span.marker.parent || span.marker);
            }
            return markers;
        },
        findMarks: function(from, to, filter) {
            from = clipPos(this, from), to = clipPos(this, to);
            var found = [], lineNo = from.line;
            return this.iter(from.line, to.line + 1, function(line) {
                var spans = line.markedSpans;
                if (spans) for (var i = 0; i < spans.length; i++) {
                    var span = spans[i];
                    lineNo == from.line && from.ch > span.to || null == span.from && lineNo != from.line || lineNo == to.line && span.from > to.ch || filter && !filter(span.marker) || found.push(span.marker.parent || span.marker);
                }
                ++lineNo;
            }), found;
        },
        getAllMarks: function() {
            var markers = [];
            return this.iter(function(line) {
                var sps = line.markedSpans;
                if (sps) for (var i = 0; i < sps.length; ++i) null != sps[i].from && markers.push(sps[i].marker);
            }), markers;
        },
        posFromIndex: function(off) {
            var ch, lineNo = this.first;
            return this.iter(function(line) {
                var sz = line.text.length + 1;
                return sz > off ? (ch = off, !0) : (off -= sz, void ++lineNo);
            }), clipPos(this, Pos(lineNo, ch));
        },
        indexFromPos: function(coords) {
            coords = clipPos(this, coords);
            var index = coords.ch;
            return coords.line < this.first || coords.ch < 0 ? 0 : (this.iter(this.first, coords.line, function(line) {
                index += line.text.length + 1;
            }), index);
        },
        copy: function(copyHistory) {
            var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
            return doc.scrollTop = this.scrollTop, doc.scrollLeft = this.scrollLeft, doc.sel = this.sel, 
            doc.extend = !1, copyHistory && (doc.history.undoDepth = this.history.undoDepth, 
            doc.setHistory(this.getHistory())), doc;
        },
        linkedDoc: function(options) {
            options || (options = {});
            var from = this.first, to = this.first + this.size;
            null != options.from && options.from > from && (from = options.from), null != options.to && options.to < to && (to = options.to);
            var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep);
            return options.sharedHist && (copy.history = this.history), (this.linked || (this.linked = [])).push({
                doc: copy,
                sharedHist: options.sharedHist
            }), copy.linked = [ {
                doc: this,
                isParent: !0,
                sharedHist: options.sharedHist
            } ], copySharedMarkers(copy, findSharedMarkers(this)), copy;
        },
        unlinkDoc: function(other) {
            if (other instanceof CodeMirror && (other = other.doc), this.linked) for (var i = 0; i < this.linked.length; ++i) {
                var link = this.linked[i];
                if (link.doc == other) {
                    this.linked.splice(i, 1), other.unlinkDoc(this), detachSharedMarkers(findSharedMarkers(this));
                    break;
                }
            }
            if (other.history == this.history) {
                var splitIds = [ other.id ];
                linkedDocs(other, function(doc) {
                    splitIds.push(doc.id);
                }, !0), other.history = new History(null), other.history.done = copyHistoryArray(this.history.done, splitIds), 
                other.history.undone = copyHistoryArray(this.history.undone, splitIds);
            }
        },
        iterLinkedDocs: function(f) {
            linkedDocs(this, f);
        },
        getMode: function() {
            return this.mode;
        },
        getEditor: function() {
            return this.cm;
        },
        splitLines: function(str) {
            return this.lineSep ? str.split(this.lineSep) : splitLinesAuto(str);
        },
        lineSeparator: function() {
            return this.lineSep || "\n";
        }
    }), Doc.prototype.eachLine = Doc.prototype.iter;
    var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
    for (var prop in Doc.prototype) Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0 && (CodeMirror.prototype[prop] = function(method) {
        return function() {
            return method.apply(this.doc, arguments);
        };
    }(Doc.prototype[prop]));
    eventMixin(Doc);
    var e_preventDefault = CodeMirror.e_preventDefault = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }, e_stopPropagation = CodeMirror.e_stopPropagation = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
    }, e_stop = CodeMirror.e_stop = function(e) {
        e_preventDefault(e), e_stopPropagation(e);
    }, on = CodeMirror.on = function(emitter, type, f) {
        if (emitter.addEventListener) emitter.addEventListener(type, f, !1); else if (emitter.attachEvent) emitter.attachEvent("on" + type, f); else {
            var map = emitter._handlers || (emitter._handlers = {}), arr = map[type] || (map[type] = []);
            arr.push(f);
        }
    }, noHandlers = [], off = CodeMirror.off = function(emitter, type, f) {
        if (emitter.removeEventListener) emitter.removeEventListener(type, f, !1); else if (emitter.detachEvent) emitter.detachEvent("on" + type, f); else for (var handlers = getHandlers(emitter, type, !1), i = 0; i < handlers.length; ++i) if (handlers[i] == f) {
            handlers.splice(i, 1);
            break;
        }
    }, signal = CodeMirror.signal = function(emitter, type) {
        var handlers = getHandlers(emitter, type, !0);
        if (handlers.length) for (var args = Array.prototype.slice.call(arguments, 2), i = 0; i < handlers.length; ++i) handlers[i].apply(null, args);
    }, orphanDelayedCallbacks = null, scrollerGap = 30, Pass = CodeMirror.Pass = {
        toString: function() {
            return "CodeMirror.Pass";
        }
    }, sel_dontScroll = {
        scroll: !1
    }, sel_mouse = {
        origin: "*mouse"
    }, sel_move = {
        origin: "+move"
    };
    Delayed.prototype.set = function(ms, f) {
        clearTimeout(this.id), this.id = setTimeout(f, ms);
    };
    var countColumn = CodeMirror.countColumn = function(string, end, tabSize, startIndex, startValue) {
        null == end && (end = string.search(/[^\s\u00a0]/), -1 == end && (end = string.length));
        for (var i = startIndex || 0, n = startValue || 0; ;) {
            var nextTab = string.indexOf("	", i);
            if (0 > nextTab || nextTab >= end) return n + (end - i);
            n += nextTab - i, n += tabSize - n % tabSize, i = nextTab + 1;
        }
    }, findColumn = CodeMirror.findColumn = function(string, goal, tabSize) {
        for (var pos = 0, col = 0; ;) {
            var nextTab = string.indexOf("	", pos);
            -1 == nextTab && (nextTab = string.length);
            var skipped = nextTab - pos;
            if (nextTab == string.length || col + skipped >= goal) return pos + Math.min(skipped, goal - col);
            if (col += nextTab - pos, col += tabSize - col % tabSize, pos = nextTab + 1, col >= goal) return pos;
        }
    }, spaceStrs = [ "" ], selectInput = function(node) {
        node.select();
    };
    ios ? selectInput = function(node) {
        node.selectionStart = 0, node.selectionEnd = node.value.length;
    } : ie && (selectInput = function(node) {
        try {
            node.select();
        } catch (_e) {}
    });
    var range, nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, isWordCharBasic = CodeMirror.isWordChar = function(ch) {
        return /\w/.test(ch) || ch > "" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
    }, extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    range = document.createRange ? function(node, start, end, endNode) {
        var r = document.createRange();
        return r.setEnd(endNode || node, end), r.setStart(node, start), r;
    } : function(node, start, end) {
        var r = document.body.createTextRange();
        try {
            r.moveToElementText(node.parentNode);
        } catch (e) {
            return r;
        }
        return r.collapse(!0), r.moveEnd("character", end), r.moveStart("character", start), 
        r;
    };
    var contains = CodeMirror.contains = function(parent, child) {
        if (3 == child.nodeType && (child = child.parentNode), parent.contains) return parent.contains(child);
        do if (11 == child.nodeType && (child = child.host), child == parent) return !0; while (child = child.parentNode);
    };
    ie && 11 > ie_version && (activeElt = function() {
        try {
            return document.activeElement;
        } catch (e) {
            return document.body;
        }
    });
    var zwspSupported, badBidiRects, rmClass = CodeMirror.rmClass = function(node, cls) {
        var current = node.className, match = classTest(cls).exec(current);
        if (match) {
            var after = current.slice(match.index + match[0].length);
            node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
        }
    }, addClass = CodeMirror.addClass = function(node, cls) {
        var current = node.className;
        classTest(cls).test(current) || (node.className += (current ? " " : "") + cls);
    }, globalsRegistered = !1, dragAndDrop = function() {
        if (ie && 9 > ie_version) return !1;
        var div = elt("div");
        return "draggable" in div || "dragDrop" in div;
    }(), splitLinesAuto = CodeMirror.splitLines = 3 != "\n\nb".split(/\n/).length ? function(string) {
        for (var pos = 0, result = [], l = string.length; l >= pos; ) {
            var nl = string.indexOf("\n", pos);
            -1 == nl && (nl = string.length);
            var line = string.slice(pos, "\r" == string.charAt(nl - 1) ? nl - 1 : nl), rt = line.indexOf("\r");
            -1 != rt ? (result.push(line.slice(0, rt)), pos += rt + 1) : (result.push(line), 
            pos = nl + 1);
        }
        return result;
    } : function(string) {
        return string.split(/\r\n?|\n/);
    }, hasSelection = window.getSelection ? function(te) {
        try {
            return te.selectionStart != te.selectionEnd;
        } catch (e) {
            return !1;
        }
    } : function(te) {
        try {
            var range = te.ownerDocument.selection.createRange();
        } catch (e) {}
        return range && range.parentElement() == te ? 0 != range.compareEndPoints("StartToEnd", range) : !1;
    }, hasCopyEvent = function() {
        var e = elt("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
    }(), badZoomedRects = null, keyNames = CodeMirror.keyNames = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    !function() {
        for (var i = 0; 10 > i; i++) keyNames[i + 48] = keyNames[i + 96] = String(i);
        for (var i = 65; 90 >= i; i++) keyNames[i] = String.fromCharCode(i);
        for (var i = 1; 12 >= i; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
    }();
    var bidiOther, bidiOrdering = function() {
        function charType(code) {
            return 247 >= code ? lowTypes.charAt(code) : code >= 1424 && 1524 >= code ? "R" : code >= 1536 && 1773 >= code ? arabicTypes.charAt(code - 1536) : code >= 1774 && 2220 >= code ? "r" : code >= 8192 && 8203 >= code ? "w" : 8204 == code ? "b" : "L";
        }
        function BidiSpan(level, from, to) {
            this.level = level, this.from = from, this.to = to;
        }
        var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/, outerType = "L";
        return function(str) {
            if (!bidiRE.test(str)) return !1;
            for (var type, len = str.length, types = [], i = 0; len > i; ++i) types.push(type = charType(str.charCodeAt(i)));
            for (var i = 0, prev = outerType; len > i; ++i) {
                var type = types[i];
                "m" == type ? types[i] = prev : prev = type;
            }
            for (var i = 0, cur = outerType; len > i; ++i) {
                var type = types[i];
                "1" == type && "r" == cur ? types[i] = "n" : isStrong.test(type) && (cur = type, 
                "r" == type && (types[i] = "R"));
            }
            for (var i = 1, prev = types[0]; len - 1 > i; ++i) {
                var type = types[i];
                "+" == type && "1" == prev && "1" == types[i + 1] ? types[i] = "1" : "," != type || prev != types[i + 1] || "1" != prev && "n" != prev || (types[i] = prev), 
                prev = type;
            }
            for (var i = 0; len > i; ++i) {
                var type = types[i];
                if ("," == type) types[i] = "N"; else if ("%" == type) {
                    for (var end = i + 1; len > end && "%" == types[end]; ++end) ;
                    for (var replace = i && "!" == types[i - 1] || len > end && "1" == types[end] ? "1" : "N", j = i; end > j; ++j) types[j] = replace;
                    i = end - 1;
                }
            }
            for (var i = 0, cur = outerType; len > i; ++i) {
                var type = types[i];
                "L" == cur && "1" == type ? types[i] = "L" : isStrong.test(type) && (cur = type);
            }
            for (var i = 0; len > i; ++i) if (isNeutral.test(types[i])) {
                for (var end = i + 1; len > end && isNeutral.test(types[end]); ++end) ;
                for (var before = "L" == (i ? types[i - 1] : outerType), after = "L" == (len > end ? types[end] : outerType), replace = before || after ? "L" : "R", j = i; end > j; ++j) types[j] = replace;
                i = end - 1;
            }
            for (var m, order = [], i = 0; len > i; ) if (countsAsLeft.test(types[i])) {
                var start = i;
                for (++i; len > i && countsAsLeft.test(types[i]); ++i) ;
                order.push(new BidiSpan(0, start, i));
            } else {
                var pos = i, at = order.length;
                for (++i; len > i && "L" != types[i]; ++i) ;
                for (var j = pos; i > j; ) if (countsAsNum.test(types[j])) {
                    j > pos && order.splice(at, 0, new BidiSpan(1, pos, j));
                    var nstart = j;
                    for (++j; i > j && countsAsNum.test(types[j]); ++j) ;
                    order.splice(at, 0, new BidiSpan(2, nstart, j)), pos = j;
                } else ++j;
                i > pos && order.splice(at, 0, new BidiSpan(1, pos, i));
            }
            return 1 == order[0].level && (m = str.match(/^\s+/)) && (order[0].from = m[0].length, 
            order.unshift(new BidiSpan(0, 0, m[0].length))), 1 == lst(order).level && (m = str.match(/\s+$/)) && (lst(order).to -= m[0].length, 
            order.push(new BidiSpan(0, len - m[0].length, len))), 2 == order[0].level && order.unshift(new BidiSpan(1, order[0].to, order[0].to)), 
            order[0].level != lst(order).level && order.push(new BidiSpan(order[0].level, len, len)), 
            order;
        };
    }();
    return CodeMirror.version = "5.10.0", CodeMirror;
}), !function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, 
        t.PouchDB = e();
    }
}(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function o(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(s, !0);
                    if (i) return i(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var f = n[s] = {
                    exports: {}
                };
                t[s][0].call(f.exports, function(e) {
                    var n = t[s][1][e];
                    return o(n ? n : e);
                }, f, f.exports, e, t, n, r);
            }
            return n[s].exports;
        }
        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
        return o;
    }({
        1: [ function(e, t, n) {
            (function(n) {
                "use strict";
                function r(e, t) {
                    return t > e ? -1 : e > t ? 1 : 0;
                }
                function o(e, t) {
                    for (var n = 0; n < e.length; n++) if (t(e[n], n) === !0) return e[n];
                }
                function i(e) {
                    return function(t, n) {
                        t || n[0] && n[0].error ? e(t || n[0]) : e(null, n.length ? n[0] : n);
                    };
                }
                function s(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n._deleted) delete n._attachments; else if (n._attachments) for (var r = Object.keys(n._attachments), o = 0; o < r.length; o++) {
                            var i = r[o];
                            n._attachments[i] = v(n._attachments[i], [ "data", "digest", "content_type", "length", "revpos", "stub" ]);
                        }
                    }
                }
                function a(e, t) {
                    var n = r(e._id, t._id);
                    if (0 !== n) return n;
                    var o = e._revisions ? e._revisions.start : 0, i = t._revisions ? t._revisions.start : 0;
                    return r(o, i);
                }
                function u(e) {
                    var t = {}, n = [];
                    return k(e, function(e, r, o, i) {
                        var s = r + "-" + o;
                        return e && (t[s] = 0), void 0 !== i && n.push({
                            from: i,
                            to: s
                        }), s;
                    }), n.reverse(), n.forEach(function(e) {
                        void 0 === t[e.from] ? t[e.from] = 1 + t[e.to] : t[e.from] = Math.min(t[e.from], 1 + t[e.to]);
                    }), t;
                }
                function c(e, t, n) {
                    var r = "limit" in t ? t.keys.slice(t.skip, t.limit + t.skip) : t.skip > 0 ? t.keys.slice(t.skip) : t.keys;
                    if (t.descending && r.reverse(), !r.length) return e._allDocs({
                        limit: 0
                    }, n);
                    var o = {
                        offset: t.skip
                    };
                    return p.all(r.map(function(n) {
                        var r = h({
                            key: n,
                            deleted: "ok"
                        }, t);
                        return [ "limit", "skip", "keys" ].forEach(function(e) {
                            delete r[e];
                        }), new p(function(t, i) {
                            e._allDocs(r, function(e, r) {
                                return e ? i(e) : (o.total_rows = r.total_rows, void t(r.rows[0] || {
                                    key: n,
                                    error: "not_found"
                                }));
                            });
                        });
                    })).then(function(e) {
                        return o.rows = e, o;
                    });
                }
                function f(e) {
                    var t = e._compactionQueue[0], r = t.opts, o = t.callback;
                    e.get("_local/compaction")["catch"](function() {
                        return !1;
                    }).then(function(t) {
                        t && t.last_seq && (r.last_seq = t.last_seq), e._compact(r, function(t, r) {
                            t ? o(t) : o(null, r), n.nextTick(function() {
                                e._compactionQueue.shift(), e._compactionQueue.length && f(e);
                            });
                        });
                    });
                }
                function l(e) {
                    return "_" === e.charAt(0) ? e + "is not a valid attachment name, attachment names cannot start with '_'" : !1;
                }
                function d() {
                    E.call(this);
                }
                var h = e(98).extend, p = e(65), v = e(64), _ = e(103), y = e(97), m = e(91), g = e(17), b = e(48), E = e(92).EventEmitter, w = e(69), S = e(14), T = e(36), x = e(38), A = e(39), k = e(59), O = e(54), q = e(58), R = e(53), C = e(42);
                y(d, E), t.exports = d, d.prototype.post = g("post", function(e, t, n) {
                    return "function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e) ? n(b.error(b.NOT_AN_OBJECT)) : void this.bulkDocs({
                        docs: [ e ]
                    }, t, i(n));
                }), d.prototype.put = g("put", m(function(e) {
                    var t, n, r, o, s = e.shift(), a = "_id" in s;
                    if ("object" != typeof s || Array.isArray(s)) return (o = e.pop())(b.error(b.NOT_AN_OBJECT));
                    for (;t = e.shift(), n = typeof t, "string" !== n || a ? "string" !== n || !a || "_rev" in s ? "object" === n ? r = t : "function" === n && (o = t) : s._rev = t : (s._id = t, 
                    a = !0), e.length; ) ;
                    return r = r || {}, C.invalidIdError(s._id), A(s._id) && "function" == typeof this._putLocal ? s._deleted ? this._removeLocal(s, o) : this._putLocal(s, o) : void this.bulkDocs({
                        docs: [ s ]
                    }, r, i(o));
                })), d.prototype.putAttachment = g("putAttachment", function(e, t, n, r, o, i) {
                    function s(e) {
                        return e._attachments = e._attachments || {}, e._attachments[t] = {
                            content_type: o,
                            data: r
                        }, a.put(e);
                    }
                    var a = this;
                    return "function" == typeof o && (i = o, o = r, r = n, n = null), "undefined" == typeof o && (o = r, 
                    r = n, n = null), a.get(e).then(function(e) {
                        if (e._rev !== n) throw b.error(b.REV_CONFLICT);
                        return s(e);
                    }, function(t) {
                        if (t.reason === b.MISSING_DOC.message) return s({
                            _id: e
                        });
                        throw t;
                    });
                }), d.prototype.removeAttachment = g("removeAttachment", function(e, t, n, r) {
                    var o = this;
                    o.get(e, function(e, i) {
                        return e ? void r(e) : i._rev !== n ? void r(b.error(b.REV_CONFLICT)) : i._attachments ? (delete i._attachments[t], 
                        0 === Object.keys(i._attachments).length && delete i._attachments, void o.put(i, r)) : r();
                    });
                }), d.prototype.remove = g("remove", function(e, t, n, r) {
                    var o;
                    "string" == typeof t ? (o = {
                        _id: e,
                        _rev: t
                    }, "function" == typeof n && (r = n, n = {})) : (o = e, "function" == typeof t ? (r = t, 
                    n = {}) : (r = n, n = t)), n = n || {}, n.was_delete = !0;
                    var s = {
                        _id: o._id,
                        _rev: o._rev || n.rev
                    };
                    return s._deleted = !0, A(s._id) && "function" == typeof this._removeLocal ? this._removeLocal(o, r) : void this.bulkDocs({
                        docs: [ s ]
                    }, n, i(r));
                }), d.prototype.revsDiff = g("revsDiff", function(e, t, n) {
                    function r(e, t) {
                        a.has(e) || a.set(e, {
                            missing: []
                        }), a.get(e).missing.push(t);
                    }
                    function o(t, n) {
                        var o = e[t].slice(0);
                        k(n, function(e, n, i, s, a) {
                            var u = n + "-" + i, c = o.indexOf(u);
                            -1 !== c && (o.splice(c, 1), "available" !== a.status && r(t, u));
                        }), o.forEach(function(e) {
                            r(t, e);
                        });
                    }
                    "function" == typeof t && (n = t, t = {});
                    var i = Object.keys(e);
                    if (!i.length) return n(null, {});
                    var s = 0, a = new _.Map();
                    i.map(function(t) {
                        this._getRevisionTree(t, function(r, u) {
                            if (r && 404 === r.status && "missing" === r.message) a.set(t, {
                                missing: e[t]
                            }); else {
                                if (r) return n(r);
                                o(t, u);
                            }
                            if (++s === i.length) {
                                var c = {};
                                return a.forEach(function(e, t) {
                                    c[t] = e;
                                }), n(null, c);
                            }
                        });
                    }, this);
                }), d.prototype.bulkGet = g("bulkGet", function(e, t) {
                    T(this, e, t);
                }), d.prototype.compactDocument = g("compactDocument", function(e, t, n) {
                    var r = this;
                    this._getRevisionTree(e, function(o, i) {
                        if (o) return n(o);
                        var s = u(i), a = [], c = [];
                        Object.keys(s).forEach(function(e) {
                            s[e] > t && a.push(e);
                        }), k(i, function(e, t, n, r, o) {
                            var i = t + "-" + n;
                            "available" === o.status && -1 !== a.indexOf(i) && c.push(i);
                        }), r._doCompaction(e, c, n);
                    });
                }), d.prototype.compact = g("compact", function(e, t) {
                    "function" == typeof e && (t = e, e = {});
                    var n = this;
                    e = e || {}, n._compactionQueue = n._compactionQueue || [], n._compactionQueue.push({
                        opts: e,
                        callback: t
                    }), 1 === n._compactionQueue.length && f(n);
                }), d.prototype._compact = function(e, t) {
                    function n(e) {
                        s.push(o.compactDocument(e.id, 0));
                    }
                    function r(e) {
                        var n = e.last_seq;
                        p.all(s).then(function() {
                            return w(o, "_local/compaction", function(e) {
                                return !e.last_seq || e.last_seq < n ? (e.last_seq = n, e) : !1;
                            });
                        }).then(function() {
                            t(null, {
                                ok: !0
                            });
                        })["catch"](t);
                    }
                    var o = this, i = {
                        return_docs: !1,
                        last_seq: e.last_seq || 0
                    }, s = [];
                    o.changes(i).on("change", n).on("complete", r).on("error", t);
                }, d.prototype.get = g("get", function(e, t, n) {
                    function r() {
                        var r = [], o = i.length;
                        return o ? void i.forEach(function(i) {
                            s.get(e, {
                                rev: i,
                                revs: t.revs,
                                attachments: t.attachments
                            }, function(e, t) {
                                e ? r.push({
                                    missing: i
                                }) : r.push({
                                    ok: t
                                }), o--, o || n(null, r);
                            });
                        }) : n(null, r);
                    }
                    if ("function" == typeof t && (n = t, t = {}), "string" != typeof e) return n(b.error(b.INVALID_ID));
                    if (A(e) && "function" == typeof this._getLocal) return this._getLocal(e, n);
                    var i = [], s = this;
                    if (!t.open_revs) return this._get(e, t, function(e, r) {
                        if (e) return n(e);
                        var i = r.doc, a = r.metadata, u = r.ctx;
                        if (t.conflicts) {
                            var c = R(a);
                            c.length && (i._conflicts = c);
                        }
                        if (x(a, i._rev) && (i._deleted = !0), t.revs || t.revs_info) {
                            var f = q(a.rev_tree), l = o(f, function(e) {
                                return -1 !== e.ids.map(function(e) {
                                    return e.id;
                                }).indexOf(i._rev.split("-")[1]);
                            }), d = l.ids.map(function(e) {
                                return e.id;
                            }).indexOf(i._rev.split("-")[1]) + 1, h = l.ids.length - d;
                            if (l.ids.splice(d, h), l.ids.reverse(), t.revs && (i._revisions = {
                                start: l.pos + l.ids.length - 1,
                                ids: l.ids.map(function(e) {
                                    return e.id;
                                })
                            }), t.revs_info) {
                                var p = l.pos + l.ids.length;
                                i._revs_info = l.ids.map(function(e) {
                                    return p--, {
                                        rev: p + "-" + e.id,
                                        status: e.opts.status
                                    };
                                });
                            }
                        }
                        if (t.attachments && i._attachments) {
                            var v = i._attachments, _ = Object.keys(v).length;
                            if (0 === _) return n(null, i);
                            Object.keys(v).forEach(function(e) {
                                this._getAttachment(v[e], {
                                    binary: t.binary,
                                    ctx: u
                                }, function(t, r) {
                                    var o = i._attachments[e];
                                    o.data = r, delete o.stub, delete o.length, --_ || n(null, i);
                                });
                            }, s);
                        } else {
                            if (i._attachments) for (var y in i._attachments) i._attachments.hasOwnProperty(y) && (i._attachments[y].stub = !0);
                            n(null, i);
                        }
                    });
                    if ("all" === t.open_revs) this._getRevisionTree(e, function(e, t) {
                        return e ? n(e) : (i = O(t).map(function(e) {
                            return e.rev;
                        }), void r());
                    }); else {
                        if (!Array.isArray(t.open_revs)) return n(b.error(b.UNKNOWN_ERROR, "function_clause"));
                        i = t.open_revs;
                        for (var a = 0; a < i.length; a++) {
                            var u = i[a];
                            if ("string" != typeof u || !/^\d+-/.test(u)) return n(b.error(b.INVALID_REV));
                        }
                        r();
                    }
                }), d.prototype.getAttachment = g("getAttachment", function(e, t, n, r) {
                    var o = this;
                    n instanceof Function && (r = n, n = {}), this._get(e, n, function(e, i) {
                        return e ? r(e) : i.doc._attachments && i.doc._attachments[t] ? (n.ctx = i.ctx, 
                        n.binary = !0, void o._getAttachment(i.doc._attachments[t], n, r)) : r(b.error(b.MISSING_DOC));
                    });
                }), d.prototype.allDocs = g("allDocs", function(e, t) {
                    if ("function" == typeof e && (t = e, e = {}), e.skip = "undefined" != typeof e.skip ? e.skip : 0, 
                    e.start_key && (e.startkey = e.start_key), e.end_key && (e.endkey = e.end_key), 
                    "keys" in e) {
                        if (!Array.isArray(e.keys)) return t(new TypeError("options.keys must be an array"));
                        var n = [ "startkey", "endkey", "key" ].filter(function(t) {
                            return t in e;
                        })[0];
                        if (n) return void t(b.error(b.QUERY_PARSE_ERROR, "Query parameter `" + n + "` is not compatible with multi-get"));
                        if ("http" !== this.type()) return c(this, e, t);
                    }
                    return this._allDocs(e, t);
                }), d.prototype.changes = function(e, t) {
                    return "function" == typeof e && (t = e, e = {}), new S(this, e, t);
                }, d.prototype.close = g("close", function(e) {
                    return this._closed = !0, this._close(e);
                }), d.prototype.info = g("info", function(e) {
                    var t = this;
                    this._info(function(n, r) {
                        return n ? e(n) : (r.db_name = r.db_name || t._db_name, r.auto_compaction = !(!t.auto_compaction || "http" === t.type()), 
                        r.adapter = t.type(), void e(null, r));
                    });
                }), d.prototype.id = g("id", function(e) {
                    return this._id(e);
                }), d.prototype.type = function() {
                    return "function" == typeof this._type ? this._type() : this.adapter;
                }, d.prototype.bulkDocs = g("bulkDocs", function(e, t, n) {
                    if ("function" == typeof t && (n = t, t = {}), t = t || {}, Array.isArray(e) && (e = {
                        docs: e
                    }), !e || !e.docs || !Array.isArray(e.docs)) return n(b.error(b.MISSING_BULK_DOCS));
                    for (var r = 0; r < e.docs.length; ++r) if ("object" != typeof e.docs[r] || Array.isArray(e.docs[r])) return n(b.error(b.NOT_AN_OBJECT));
                    var o;
                    return e.docs.forEach(function(e) {
                        e._attachments && Object.keys(e._attachments).forEach(function(e) {
                            o = o || l(e);
                        });
                    }), o ? n(b.error(b.BAD_REQUEST, o)) : ("new_edits" in t || ("new_edits" in e ? t.new_edits = e.new_edits : t.new_edits = !0), 
                    t.new_edits || "http" === this.type() || e.docs.sort(a), s(e.docs), this._bulkDocs(e, t, function(e, r) {
                        return e ? n(e) : (t.new_edits || (r = r.filter(function(e) {
                            return e.error;
                        })), void n(null, r));
                    }));
                }), d.prototype.registerDependentDatabase = g("registerDependentDatabase", function(e, t) {
                    function n(t) {
                        return t.dependentDbs = t.dependentDbs || {}, t.dependentDbs[e] ? !1 : (t.dependentDbs[e] = !0, 
                        t);
                    }
                    var r = new this.constructor(e, this.__opts);
                    w(this, "_local/_pouch_dependentDbs", n).then(function() {
                        t(null, {
                            db: r
                        });
                    })["catch"](t);
                }), d.prototype.destroy = g("destroy", function(e, t) {
                    function n() {
                        r._destroy(e, function(e, n) {
                            return e ? t(e) : (r.emit("destroyed"), void t(null, n || {
                                ok: !0
                            }));
                        });
                    }
                    "function" == typeof e && (t = e, e = {});
                    var r = this, o = "use_prefix" in r ? r.use_prefix : !0;
                    return "http" === r.type() ? n() : void r.get("_local/_pouch_dependentDbs", function(e, i) {
                        if (e) return 404 !== e.status ? t(e) : n();
                        var s = i.dependentDbs, a = r.constructor, u = Object.keys(s).map(function(e) {
                            var t = o ? e.replace(new RegExp("^" + a.prefix), "") : e;
                            return new a(t, r.__opts).destroy();
                        });
                        p.all(u).then(n, function(e) {
                            t(e);
                        });
                    });
                });
            }).call(this, e(93));
        }, {
            103: 103,
            14: 14,
            17: 17,
            36: 36,
            38: 38,
            39: 39,
            42: 42,
            48: 48,
            53: 53,
            54: 54,
            58: 58,
            59: 59,
            64: 64,
            65: 65,
            69: 69,
            91: 91,
            92: 92,
            93: 93,
            97: 97,
            98: 98
        } ],
        2: [ function(e, t, n) {
            "use strict";
            t.exports = {
                idb: e(8),
                websql: e(12)
            };
        }, {
            12: 12,
            8: 8
        } ],
        3: [ function(e, t, n) {
            "use strict";
            function r(e) {
                var t = e.doc && e.doc._attachments;
                t && Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    n.data = E(n.data, n.content_type);
                });
            }
            function o(e) {
                return /^_design/.test(e) ? "_design/" + encodeURIComponent(e.slice(8)) : /^_local/.test(e) ? "_local/" + encodeURIComponent(e.slice(7)) : encodeURIComponent(e);
            }
            function i(e) {
                return e._attachments && Object.keys(e._attachments) ? S.all(Object.keys(e._attachments).map(function(t) {
                    var n = e._attachments[t];
                    return n.data && "string" != typeof n.data ? I(n.data).then(function(e) {
                        n.data = e;
                    }) : void 0;
                })) : S.resolve();
            }
            function s(e) {
                var t = x(e);
                (t.user || t.password) && (t.auth = {
                    username: t.user,
                    password: t.password
                });
                var n = t.path.replace(/(^\/|\/$)/g, "").split("/");
                return t.db = encodeURIComponent(n.pop()), t.path = n.join("/"), t;
            }
            function a(e, t) {
                return u(e, e.db + "/" + t);
            }
            function u(e, t) {
                var n = e.path ? "/" : "";
                return e.protocol + "://" + e.host + (e.port ? ":" + e.port : "") + "/" + e.path + n + t;
            }
            function c(e) {
                return "?" + Object.keys(e).map(function(t) {
                    return t + "=" + encodeURIComponent(e[t]);
                }).join("&");
            }
            function f(e, t) {
                function n(e, t, n) {
                    var r = e.ajax || {}, o = v(T(F), r, t);
                    return C(o.method + " " + o.url), w.ajax(o, n);
                }
                function f(e, t) {
                    return new S(function(r, o) {
                        n(e, t, function(e, t) {
                            return e ? o(e) : void r(t);
                        });
                    });
                }
                function E(e, t) {
                    return m(e, A(function(e) {
                        x().then(function(n) {
                            return t.apply(this, e);
                        })["catch"](function(t) {
                            var n = e.pop();
                            n(t);
                        });
                    }));
                }
                function x() {
                    if (e.skipSetup || e.skip_setup) return S.resolve();
                    if (H) return H;
                    var t = {
                        method: "GET",
                        url: M
                    };
                    return H = f({}, t)["catch"](function(e) {
                        return e && e.status && 404 === e.status ? (g(404, "PouchDB is just detecting if the remote exists."), 
                        f({}, {
                            method: "PUT",
                            url: M
                        })) : S.reject(e);
                    })["catch"](function(e) {
                        return e && e.status && 412 === e.status ? !0 : S.reject(e);
                    }), H["catch"](function() {
                        H = null;
                    }), H;
                }
                function k(e) {
                    return e.split("/").map(encodeURIComponent).join("/");
                }
                var N = this, j = s;
                e.getHost && (j = e.getHost);
                var B = j(e.name, e), M = a(B, "");
                e = T(e);
                var F = e.ajax || {};
                if (N.getUrl = function() {
                    return M;
                }, N.getHeaders = function() {
                    return F.headers || {};
                }, e.auth || B.auth) {
                    var P = e.auth || B.auth, U = O(P.username + ":" + P.password);
                    F.headers = F.headers || {}, F.headers.Authorization = "Basic " + U;
                }
                var H;
                setTimeout(function() {
                    t(null, N);
                }), N.type = function() {
                    return "http";
                }, N.id = E("id", function(e) {
                    n({}, {
                        method: "GET",
                        url: u(B, "")
                    }, function(t, n) {
                        var r = n && n.uuid ? n.uuid + B.db : a(B, "");
                        e(null, r);
                    });
                }), N.request = E("request", function(e, t) {
                    e.url = a(B, e.url), n({}, e, t);
                }), N.compact = E("compact", function(e, t) {
                    "function" == typeof e && (t = e, e = {}), e = T(e), n(e, {
                        url: a(B, "_compact"),
                        method: "POST"
                    }, function() {
                        function n() {
                            N.info(function(r, o) {
                                o.compact_running ? setTimeout(n, e.interval || 200) : t(null, {
                                    ok: !0
                                });
                            });
                        }
                        n();
                    });
                }), N.bulkGet = m("bulkGet", function(e, t) {
                    function r(t) {
                        var r = {};
                        e.revs && (r.revs = !0), e.attachments && (r.attachments = !0), n({}, {
                            headers: B.headers,
                            url: a(B, "_bulk_get" + c(r)),
                            method: "POST",
                            body: {
                                docs: e.docs
                            }
                        }, t);
                    }
                    function o() {
                        function n(e) {
                            return function(n, r) {
                                a[e] = r.results, ++s === o && t(null, {
                                    results: L(a)
                                });
                            };
                        }
                        for (var r = d, o = Math.ceil(e.docs.length / r), s = 0, a = new Array(o), u = 0; o > u; u++) {
                            var c = _(e, [ "revs", "attachments" ]);
                            c.docs = e.docs.slice(u * r, Math.min(e.docs.length, (u + 1) * r)), D(i, c, n(u));
                        }
                    }
                    var i = this, s = u(B, ""), f = h[s];
                    "boolean" != typeof f ? r(function(e, n) {
                        e ? 4 === Math.floor(e.status / 100) ? (h[s] = !1, g(e.status, "PouchDB is just detecting if the remote supports the _bulk_get API."), 
                        o()) : t(e) : (h[s] = !0, t(null, n));
                    }) : f ? r(t) : o();
                }), N._info = function(e) {
                    x().then(function() {
                        n({}, {
                            method: "GET",
                            url: a(B, "")
                        }, function(t, n) {
                            return t ? e(t) : (n.host = a(B, ""), void e(null, n));
                        });
                    })["catch"](e);
                }, N.get = E("get", function(e, t, n) {
                    function r(e) {
                        var n = e._attachments, r = n && Object.keys(n);
                        return n && r.length ? S.all(r.map(function(r) {
                            var i = n[r], s = o(e._id) + "/" + k(r) + "?rev=" + e._rev;
                            return f(t, {
                                method: "GET",
                                url: a(B, s),
                                binary: !0
                            }).then(function(e) {
                                return t.binary ? e : I(e);
                            }).then(function(e) {
                                delete i.stub, delete i.length, i.data = e;
                            });
                        })) : void 0;
                    }
                    function i(e) {
                        return Array.isArray(e) ? S.all(e.map(function(e) {
                            return e.ok ? r(e.ok) : void 0;
                        })) : r(e);
                    }
                    "function" == typeof t && (n = t, t = {}), t = T(t);
                    var s = {};
                    t.revs && (s.revs = !0), t.revs_info && (s.revs_info = !0), t.open_revs && ("all" !== t.open_revs && (t.open_revs = JSON.stringify(t.open_revs)), 
                    s.open_revs = t.open_revs), t.rev && (s.rev = t.rev), t.conflicts && (s.conflicts = t.conflicts), 
                    e = o(e);
                    var u = {
                        method: "GET",
                        url: a(B, e + c(s))
                    };
                    f(t, u).then(function(e) {
                        return S.resolve().then(function() {
                            return t.attachments ? i(e) : void 0;
                        }).then(function() {
                            n(null, e);
                        });
                    })["catch"](n);
                }), N.remove = E("remove", function(e, t, r, i) {
                    var s;
                    "string" == typeof t ? (s = {
                        _id: e,
                        _rev: t
                    }, "function" == typeof r && (i = r, r = {})) : (s = e, "function" == typeof t ? (i = t, 
                    r = {}) : (i = r, r = t));
                    var u = s._rev || r.rev;
                    n(r, {
                        method: "DELETE",
                        url: a(B, o(s._id)) + "?rev=" + u
                    }, i);
                }), N.getAttachment = E("getAttachment", function(e, t, r, i) {
                    "function" == typeof r && (i = r, r = {});
                    var s = r.rev ? "?rev=" + r.rev : "", u = a(B, o(e)) + "/" + k(t) + s;
                    n(r, {
                        method: "GET",
                        url: u,
                        binary: !0
                    }, i);
                }), N.removeAttachment = E("removeAttachment", function(e, t, r, i) {
                    var s = a(B, o(e) + "/" + k(t)) + "?rev=" + r;
                    n({}, {
                        method: "DELETE",
                        url: s
                    }, i);
                }), N.putAttachment = E("putAttachment", function(e, t, r, i, s, u) {
                    "function" == typeof s && (u = s, s = i, i = r, r = null);
                    var c = o(e) + "/" + k(t), f = a(B, c);
                    if (r && (f += "?rev=" + r), "string" == typeof i) {
                        var l;
                        try {
                            l = q(i);
                        } catch (d) {
                            return u(R.error(R.BAD_ARG, "Attachments need to be base64 encoded"));
                        }
                        i = l ? b(l, s) : "";
                    }
                    var h = {
                        headers: {
                            "Content-Type": s
                        },
                        method: "PUT",
                        url: f,
                        processData: !1,
                        body: i,
                        timeout: F.timeout || 6e4
                    };
                    n({}, h, u);
                }), N._bulkDocs = function(e, t, r) {
                    e.new_edits = t.new_edits, x().then(function() {
                        return S.all(e.docs.map(i));
                    }).then(function() {
                        n(t, {
                            method: "POST",
                            url: a(B, "_bulk_docs"),
                            body: e
                        }, function(e, t) {
                            return e ? r(e) : (t.forEach(function(e) {
                                e.ok = !0;
                            }), void r(null, t));
                        });
                    })["catch"](r);
                }, N.allDocs = E("allDocs", function(e, t) {
                    "function" == typeof e && (t = e, e = {}), e = T(e);
                    var n, o = {}, i = "GET";
                    e.conflicts && (o.conflicts = !0), e.descending && (o.descending = !0), e.include_docs && (o.include_docs = !0), 
                    e.attachments && (o.attachments = !0), e.key && (o.key = JSON.stringify(e.key)), 
                    e.start_key && (e.startkey = e.start_key), e.startkey && (o.startkey = JSON.stringify(e.startkey)), 
                    e.end_key && (e.endkey = e.end_key), e.endkey && (o.endkey = JSON.stringify(e.endkey)), 
                    "undefined" != typeof e.inclusive_end && (o.inclusive_end = !!e.inclusive_end), 
                    "undefined" != typeof e.limit && (o.limit = e.limit), "undefined" != typeof e.skip && (o.skip = e.skip);
                    var s = c(o);
                    if ("undefined" != typeof e.keys) {
                        var u = "keys=" + encodeURIComponent(JSON.stringify(e.keys));
                        u.length + s.length + 1 <= p ? s += "&" + u : (i = "POST", n = {
                            keys: e.keys
                        });
                    }
                    f(e, {
                        method: i,
                        url: a(B, "_all_docs" + s),
                        body: n
                    }).then(function(n) {
                        e.include_docs && e.attachments && e.binary && n.rows.forEach(r), t(null, n);
                    })["catch"](t);
                }), N._changes = function(e) {
                    var t = "batch_size" in e ? e.batch_size : l;
                    e = T(e), e.timeout = e.timeout || F.timeout || 3e4;
                    var o, i = {
                        timeout: e.timeout - 5e3
                    }, s = "undefined" != typeof e.limit ? e.limit : !1;
                    o = "return_docs" in e ? e.return_docs : "returnDocs" in e ? e.returnDocs : !0;
                    var u = s;
                    if (e.style && (i.style = e.style), (e.include_docs || e.filter && "function" == typeof e.filter) && (i.include_docs = !0), 
                    e.attachments && (i.attachments = !0), e.continuous && (i.feed = "longpoll"), e.conflicts && (i.conflicts = !0), 
                    e.descending && (i.descending = !0), "heartbeat" in e ? e.heartbeat && (i.heartbeat = e.heartbeat) : i.heartbeat = 1e4, 
                    e.filter && "string" == typeof e.filter && (i.filter = e.filter, "_view" === e.filter && e.view && "string" == typeof e.view && (i.view = e.view)), 
                    e.query_params && "object" == typeof e.query_params) for (var f in e.query_params) e.query_params.hasOwnProperty(f) && (i[f] = e.query_params[f]);
                    var d, h = "GET";
                    if (e.doc_ids) {
                        i.filter = "_doc_ids";
                        var v = JSON.stringify(e.doc_ids);
                        v.length < p ? i.doc_ids = v : (h = "POST", d = {
                            doc_ids: e.doc_ids
                        });
                    }
                    var _, m, g = function(r, o) {
                        if (!e.aborted) {
                            i.since = r, "object" == typeof i.since && (i.since = JSON.stringify(i.since)), 
                            e.descending ? s && (i.limit = u) : i.limit = !s || u > t ? t : u;
                            var f = {
                                method: h,
                                url: a(B, "_changes" + c(i)),
                                timeout: e.timeout,
                                body: d
                            };
                            m = r, e.aborted || x().then(function() {
                                _ = n(e, f, o);
                            })["catch"](o);
                        }
                    }, b = {
                        results: []
                    }, E = function(n, i) {
                        if (!e.aborted) {
                            var a = 0;
                            if (i && i.results) {
                                a = i.results.length, b.last_seq = i.last_seq;
                                var c = {};
                                c.query = e.query_params, i.results = i.results.filter(function(t) {
                                    u--;
                                    var n = y(e)(t);
                                    return n && (e.include_docs && e.attachments && e.binary && r(t), o && b.results.push(t), 
                                    e.onChange(t)), n;
                                });
                            } else if (n) return e.aborted = !0, void e.complete(n);
                            i && i.last_seq && (m = i.last_seq);
                            var f = s && 0 >= u || i && t > a || e.descending;
                            (!e.continuous || s && 0 >= u) && f ? e.complete(null, b) : setTimeout(function() {
                                g(m, E);
                            }, 0);
                        }
                    };
                    return g(e.since || 0, E), {
                        cancel: function() {
                            e.aborted = !0, _ && _.abort();
                        }
                    };
                }, N.revsDiff = E("revsDiff", function(e, t, r) {
                    "function" == typeof t && (r = t, t = {}), n(t, {
                        method: "POST",
                        url: a(B, "_revs_diff"),
                        body: e
                    }, r);
                }), N._close = function(e) {
                    e();
                }, N._destroy = function(t, r) {
                    n(t, {
                        url: a(B, ""),
                        method: "DELETE"
                    }, function(t, n) {
                        return t && t.status && 404 !== t.status ? r(t) : (N.emit("destroyed"), N.constructor.emit("destroyed", e.name), 
                        void r(null, n));
                    });
                };
            }
            var l = 25, d = 50, h = {}, p = 1800, v = e(98).extend, _ = e(64), y = e(49), m = e(17), g = e(22), b = e(29), E = e(27), w = e(89), S = e(65), T = e(37), x = e(63), A = e(91), k = e(26), O = k.btoa, q = k.atob, R = e(48), C = e(94)("pouchdb:http"), I = e(31), D = e(36), L = e(50);
            f.valid = function() {
                return !0;
            }, t.exports = f;
        }, {
            17: 17,
            22: 22,
            26: 26,
            27: 27,
            29: 29,
            31: 31,
            36: 36,
            37: 37,
            48: 48,
            49: 49,
            50: 50,
            63: 63,
            64: 64,
            65: 65,
            89: 89,
            91: 91,
            94: 94,
            98: 98
        } ],
        4: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r, o) {
                try {
                    if (e && t) return o ? IDBKeyRange.bound(t, e, !n, !1) : IDBKeyRange.bound(e, t, !1, !n);
                    if (e) return o ? IDBKeyRange.upperBound(e) : IDBKeyRange.lowerBound(e);
                    if (t) return o ? IDBKeyRange.lowerBound(t, !n) : IDBKeyRange.upperBound(t, !n);
                    if (r) return IDBKeyRange.only(r);
                } catch (i) {
                    return {
                        error: i
                    };
                }
                return null;
            }
            function o(e, t, n, r) {
                return "DataError" === n.name && 0 === n.code ? r(null, {
                    total_rows: e._meta.docCount,
                    offset: t.skip,
                    rows: []
                }) : void r(s.error(s.IDB_ERROR, n.name, n.message));
            }
            function i(e, t, n, i) {
                function s(e, i) {
                    function s(t, n, r) {
                        var o = t.id + "::" + r;
                        L.get(o).onsuccess = function(r) {
                            n.doc = h(r.target.result), e.conflicts && (n.doc._conflicts = c(t)), v(n.doc, e, R);
                        };
                    }
                    function a(t, n, r) {
                        var o = {
                            id: r.id,
                            key: r.id,
                            value: {
                                rev: n
                            }
                        }, i = r.deleted;
                        if ("ok" === e.deleted) N.push(o), i ? (o.value.deleted = !0, o.doc = null) : e.include_docs && s(r, o, n); else if (!i && S-- <= 0 && (N.push(o), 
                        e.include_docs && s(r, o, n), 0 === --T)) return;
                        t["continue"]();
                    }
                    function u(e) {
                        j = t._meta.docCount;
                        var n = e.target.result;
                        if (n) {
                            var r = p(n.value), o = r.winningRev;
                            a(n, o, r);
                        }
                    }
                    function m() {
                        i(null, {
                            total_rows: j,
                            offset: e.skip,
                            rows: N
                        });
                    }
                    function g() {
                        e.attachments ? _(N, e.binary).then(m) : m();
                    }
                    var b = "startkey" in e ? e.startkey : !1, E = "endkey" in e ? e.endkey : !1, w = "key" in e ? e.key : !1, S = e.skip || 0, T = "number" == typeof e.limit ? e.limit : -1, x = e.inclusive_end !== !1, A = "descending" in e && e.descending ? "prev" : null, k = r(b, E, x, w, A);
                    if (k && k.error) return o(t, e, k.error, i);
                    var O = [ d, l ];
                    e.attachments && O.push(f);
                    var q = y(n, O, "readonly");
                    if (q.error) return i(q.error);
                    var R = q.txn, C = R.objectStore(d), I = R.objectStore(l), D = A ? C.openCursor(k, A) : C.openCursor(k), L = I.index("_doc_id_rev"), N = [], j = 0;
                    R.oncomplete = g, D.onsuccess = u;
                }
                function a(e, n) {
                    return 0 === e.limit ? n(null, {
                        total_rows: t._meta.docCount,
                        offset: e.skip,
                        rows: []
                    }) : void s(e, n);
                }
                a(e, i);
            }
            var s = e(48), a = e(9), u = e(7), c = e(53), f = u.ATTACH_STORE, l = u.BY_SEQ_STORE, d = u.DOC_STORE, h = a.decodeDoc, p = a.decodeMetadata, v = a.fetchAttachmentsIfNecessary, _ = a.postProcessAttachments, y = a.openTransactionSafely;
            t.exports = i;
        }, {
            48: 48,
            53: 53,
            7: 7,
            9: 9
        } ],
        5: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return new i(function(t) {
                    var n = o([ "" ]);
                    e.objectStore(a).put(n, "key"), e.onabort = function(e) {
                        e.preventDefault(), e.stopPropagation(), t(!1);
                    }, e.oncomplete = function() {
                        var e = navigator.userAgent.match(/Chrome\/(\d+)/), n = navigator.userAgent.match(/Edge\//);
                        t(n || !e || parseInt(e[1], 10) >= 43);
                    };
                })["catch"](function() {
                    return !1;
                });
            }
            var o = e(30), i = e(65), s = e(7), a = s.DETECT_BLOB_SUPPORT_STORE;
            t.exports = r;
        }, {
            30: 30,
            65: 65,
            7: 7
        } ],
        6: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r, l, d) {
                function T() {
                    var e = [ _, v, p, m, y, h ], t = S(r, e, "readwrite");
                    return t.error ? d(t.error) : (j = t.txn, j.onabort = w(d), j.ontimeout = w(d), 
                    j.oncomplete = k, B = j.objectStore(_), M = j.objectStore(v), F = j.objectStore(p), 
                    P = j.objectStore(h), void q(function(e) {
                        return e ? (z = !0, d(e)) : void A();
                    }));
                }
                function x() {
                    a(H, n, K, j, J, R, t);
                }
                function A() {
                    function e() {
                        ++n === H.length && x();
                    }
                    function t(t) {
                        var n = b(t.target.result);
                        n && K.set(n.id, n), e();
                    }
                    if (H.length) for (var n = 0, r = 0, o = H.length; o > r; r++) {
                        var i = H[r];
                        if (i._id && u(i._id)) e(); else {
                            var s = B.get(i.metadata.id);
                            s.onsuccess = t;
                        }
                    }
                }
                function k() {
                    z || (l.notify(n._meta.name), n._meta.docCount += G, d(null, J));
                }
                function O(e, t) {
                    var n = F.get(e);
                    n.onsuccess = function(n) {
                        if (n.target.result) t(); else {
                            var r = i.error(i.MISSING_STUB, "unknown stub attachment with digest " + e);
                            r.status = 412, t(r);
                        }
                    };
                }
                function q(e) {
                    function t() {
                        ++o === n.length && e(r);
                    }
                    var n = [];
                    if (H.forEach(function(e) {
                        e.data && e.data._attachments && Object.keys(e.data._attachments).forEach(function(t) {
                            var r = e.data._attachments[t];
                            r.stub && n.push(r.digest);
                        });
                    }), !n.length) return e();
                    var r, o = 0;
                    n.forEach(function(e) {
                        O(e, function(e) {
                            e && !r && (r = e), t();
                        });
                    });
                }
                function R(e, t, n, r, o, i, s, a) {
                    G += i, e.metadata.winningRev = t, e.metadata.deleted = n;
                    var u = e.data;
                    u._id = e.metadata.id, u._rev = e.metadata.rev, r && (u._deleted = !0);
                    var c = u._attachments && Object.keys(u._attachments).length;
                    return c ? D(e, t, n, o, s, a) : void I(e, t, n, o, s, a);
                }
                function C(e) {
                    var t = c(e.metadata);
                    g(t, e.metadata.id, j);
                }
                function I(e, t, r, o, i, s) {
                    function a(i) {
                        o && n.auto_compaction && C(e), l.seq = i.target.result, delete l.rev;
                        var s = E(l, t, r), a = B.put(s);
                        a.onsuccess = c;
                    }
                    function u(e) {
                        e.preventDefault(), e.stopPropagation();
                        var t = M.index("_doc_id_rev"), n = t.getKey(f._doc_id_rev);
                        n.onsuccess = function(e) {
                            var t = M.put(f, e.target.result);
                            t.onsuccess = a;
                        };
                    }
                    function c() {
                        J[i] = {
                            ok: !0,
                            id: l.id,
                            rev: t
                        }, K.set(e.metadata.id, e.metadata), L(e, l.seq, s);
                    }
                    var f = e.data, l = e.metadata;
                    f._doc_id_rev = l.id + "::" + l.rev, delete f._id, delete f._rev;
                    var d = M.put(f);
                    d.onsuccess = a, d.onerror = u;
                }
                function D(e, t, n, r, o, i) {
                    function s() {
                        c === f.length && I(e, t, n, r, o, i);
                    }
                    function a() {
                        c++, s();
                    }
                    var u = e.data, c = 0, f = Object.keys(u._attachments);
                    f.forEach(function(t) {
                        var n = e.data._attachments[t];
                        if (n.stub) c++, s(); else {
                            var r = n.data;
                            delete n.data;
                            var o = n.digest;
                            N(o, r, a);
                        }
                    });
                }
                function L(e, t, n) {
                    function r() {
                        ++i === s.length && n();
                    }
                    function o(n) {
                        var o = e.data._attachments[n].digest, i = P.put({
                            seq: t,
                            digestSeq: o + "::" + t
                        });
                        i.onsuccess = r, i.onerror = function(e) {
                            e.preventDefault(), e.stopPropagation(), r();
                        };
                    }
                    var i = 0, s = Object.keys(e.data._attachments || {});
                    if (!s.length) return n();
                    for (var a = 0; a < s.length; a++) o(s[a]);
                }
                function N(e, t, n) {
                    var r = F.count(e);
                    r.onsuccess = function(r) {
                        var o = r.target.result;
                        if (o) return n();
                        var i = {
                            digest: e,
                            body: t
                        }, s = F.put(i);
                        s.onsuccess = n;
                    };
                }
                for (var j, B, M, F, P, U, H = e.docs, G = 0, Q = 0, V = H.length; V > Q; Q++) {
                    var W = H[Q];
                    W._id && u(W._id) || (W = H[Q] = f.parseDoc(W, t.new_edits), W.error && !U && (U = W));
                }
                if (U) return d(U);
                var J = new Array(H.length), K = new o.Map(), z = !1, X = n._meta.blobSupport ? "blob" : "base64";
                s(H, X, function(e) {
                    return e ? d(e) : void T();
                });
            }
            var o = e(103), i = e(48), s = e(43), a = e(44), u = e(39), c = e(55), f = e(42), l = e(9), d = e(7), h = d.ATTACH_AND_SEQ_STORE, p = d.ATTACH_STORE, v = d.BY_SEQ_STORE, _ = d.DOC_STORE, y = d.LOCAL_STORE, m = d.META_STORE, g = l.compactRevs, b = l.decodeMetadata, E = l.encodeMetadata, w = l.idbError, S = l.openTransactionSafely;
            t.exports = r;
        }, {
            103: 103,
            39: 39,
            42: 42,
            43: 43,
            44: 44,
            48: 48,
            55: 55,
            7: 7,
            9: 9
        } ],
        7: [ function(e, t, n) {
            "use strict";
            n.ADAPTER_VERSION = 5, n.DOC_STORE = "document-store", n.BY_SEQ_STORE = "by-sequence", 
            n.ATTACH_STORE = "attach-store", n.ATTACH_AND_SEQ_STORE = "attach-seq-store", n.META_STORE = "meta-store", 
            n.LOCAL_STORE = "local-store", n.DETECT_BLOB_SUPPORT_STORE = "detect-blob-support";
        }, {} ],
        8: [ function(e, t, n) {
            (function(n) {
                "use strict";
                function r(e, t) {
                    var n = this;
                    P.queue.push({
                        action: function(t) {
                            o(n, e, t);
                        },
                        callback: t
                    }), C();
                }
                function o(e, t, o) {
                    function p(e) {
                        var t = e.createObjectStore(O, {
                            keyPath: "id"
                        });
                        e.createObjectStore(A, {
                            autoIncrement: !0
                        }).createIndex("_doc_id_rev", "_doc_id_rev", {
                            unique: !0
                        }), e.createObjectStore(x, {
                            keyPath: "digest"
                        }), e.createObjectStore(R, {
                            keyPath: "id",
                            autoIncrement: !1
                        }), e.createObjectStore(k), t.createIndex("deletedOrLocal", "deletedOrLocal", {
                            unique: !1
                        }), e.createObjectStore(q, {
                            keyPath: "_id"
                        });
                        var n = e.createObjectStore(T, {
                            autoIncrement: !0
                        });
                        n.createIndex("seq", "seq"), n.createIndex("digestSeq", "digestSeq", {
                            unique: !0
                        });
                    }
                    function v(e, t) {
                        var n = e.objectStore(O);
                        n.createIndex("deletedOrLocal", "deletedOrLocal", {
                            unique: !1
                        }), n.openCursor().onsuccess = function(e) {
                            var r = e.target.result;
                            if (r) {
                                var o = r.value, i = l(o);
                                o.deletedOrLocal = i ? "1" : "0", n.put(o), r["continue"]();
                            } else t();
                        };
                    }
                    function w(e) {
                        e.createObjectStore(q, {
                            keyPath: "_id"
                        }).createIndex("_doc_id_rev", "_doc_id_rev", {
                            unique: !0
                        });
                    }
                    function C(e, t) {
                        var n = e.objectStore(q), r = e.objectStore(O), o = e.objectStore(A), i = r.openCursor();
                        i.onsuccess = function(e) {
                            var i = e.target.result;
                            if (i) {
                                var s = i.value, a = s.id, u = d(a), c = b(s);
                                if (u) {
                                    var f = a + "::" + c, l = a + "::", h = a + "::~", p = o.index("_doc_id_rev"), v = IDBKeyRange.bound(l, h, !1, !1), _ = p.openCursor(v);
                                    _.onsuccess = function(e) {
                                        if (_ = e.target.result) {
                                            var t = _.value;
                                            t._doc_id_rev === f && n.put(t), o["delete"](_.primaryKey), _["continue"]();
                                        } else r["delete"](i.primaryKey), i["continue"]();
                                    };
                                } else i["continue"]();
                            } else t && t();
                        };
                    }
                    function P(e) {
                        var t = e.createObjectStore(T, {
                            autoIncrement: !0
                        });
                        t.createIndex("seq", "seq"), t.createIndex("digestSeq", "digestSeq", {
                            unique: !0
                        });
                    }
                    function G(e, t) {
                        var n = e.objectStore(A), r = e.objectStore(x), o = e.objectStore(T), i = r.count();
                        i.onsuccess = function(e) {
                            var r = e.target.result;
                            return r ? void (n.openCursor().onsuccess = function(e) {
                                var n = e.target.result;
                                if (!n) return t();
                                for (var r = n.value, i = n.primaryKey, s = Object.keys(r._attachments || {}), a = {}, u = 0; u < s.length; u++) {
                                    var c = r._attachments[s[u]];
                                    a[c.digest] = !0;
                                }
                                var f = Object.keys(a);
                                for (u = 0; u < f.length; u++) {
                                    var l = f[u];
                                    o.put({
                                        seq: i,
                                        digestSeq: l + "::" + i
                                    });
                                }
                                n["continue"]();
                            }) : t();
                        };
                    }
                    function Q(e) {
                        function t(e) {
                            return e.data ? L(e) : (e.deleted = "1" === e.deletedOrLocal, e);
                        }
                        var n = e.objectStore(A), r = e.objectStore(O), o = r.openCursor();
                        o.onsuccess = function(e) {
                            function o() {
                                var e = a.id + "::", t = a.id + "::￿", r = n.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e, t)), o = 0;
                                r.onsuccess = function(e) {
                                    var t = e.target.result;
                                    if (!t) return a.seq = o, i();
                                    var n = t.primaryKey;
                                    n > o && (o = n), t["continue"]();
                                };
                            }
                            function i() {
                                var e = N(a, a.winningRev, a.deleted), t = r.put(e);
                                t.onsuccess = function() {
                                    s["continue"]();
                                };
                            }
                            var s = e.target.result;
                            if (s) {
                                var a = t(s.value);
                                return a.winningRev = a.winningRev || b(a), a.seq ? i() : void o();
                            }
                        };
                    }
                    var V = t.name, W = null;
                    e._meta = null, e.type = function() {
                        return "idb";
                    }, e._id = f(function(t) {
                        t(null, e._meta.instanceId);
                    }), e._bulkDocs = function(t, n, o) {
                        _(t, n, e, W, r.Changes, o);
                    }, e._get = function(e, t, n) {
                        function r() {
                            n(s, {
                                doc: o,
                                metadata: i,
                                ctx: a
                            });
                        }
                        var o, i, s, a = t.ctx;
                        if (!a) {
                            var u = U(W, [ O, A, x ], "readonly");
                            if (u.error) return n(u.error);
                            a = u.txn;
                        }
                        a.objectStore(O).get(e).onsuccess = function(e) {
                            if (i = L(e.target.result), !i) return s = h.error(h.MISSING_DOC, "missing"), r();
                            if (l(i) && !t.rev) return s = h.error(h.MISSING_DOC, "deleted"), r();
                            var n = a.objectStore(A), u = t.rev || i.winningRev, c = i.id + "::" + u;
                            n.index("_doc_id_rev").get(c).onsuccess = function(e) {
                                return o = e.target.result, o && (o = D(o)), o ? void r() : (s = h.error(h.MISSING_DOC, "missing"), 
                                r());
                            };
                        };
                    }, e._getAttachment = function(e, t, n) {
                        var r;
                        if (t.ctx) r = t.ctx; else {
                            var o = U(W, [ O, A, x ], "readonly");
                            if (o.error) return n(o.error);
                            r = o.txn;
                        }
                        var i = e.digest, s = e.content_type;
                        r.objectStore(x).get(i).onsuccess = function(e) {
                            var r = e.target.result.body;
                            F(r, s, t.binary, function(e) {
                                n(null, e);
                            });
                        };
                    }, e._info = function(t) {
                        if (null === W || !H[V]) {
                            var n = new Error("db isn't open");
                            return n.id = "idbNull", t(n);
                        }
                        var r, o, i = U(W, [ A ], "readonly");
                        if (i.error) return t(i.error);
                        var s = i.txn, a = s.objectStore(A).openCursor(null, "prev");
                        a.onsuccess = function(t) {
                            var n = t.target.result;
                            r = n ? n.key : 0, o = e._meta.docCount;
                        }, s.oncomplete = function() {
                            t(null, {
                                doc_count: o,
                                update_seq: r,
                                idb_attachment_format: e._meta.blobSupport ? "binary" : "base64"
                            });
                        };
                    }, e._allDocs = function(t, n) {
                        y(t, e, W, n);
                    }, e._changes = function(t) {
                        function n(e) {
                            function n() {
                                return a.seq !== s ? e["continue"]() : (h = s, a.winningRev === i._rev ? o(i) : void r());
                            }
                            function r() {
                                var e = i._id + "::" + a.winningRev, t = g.get(e);
                                t.onsuccess = function(e) {
                                    o(D(e.target.result));
                                };
                            }
                            function o(n) {
                                var r = t.processChange(n, a, t);
                                r.seq = a.seq;
                                var o = w(r);
                                return "object" == typeof o ? t.complete(o) : (o && (E++, v && b.push(r), t.attachments && t.include_docs ? j(n, t, _, function() {
                                    M([ r ], t.binary).then(function() {
                                        t.onChange(r);
                                    });
                                }) : t.onChange(r)), void (E !== p && e["continue"]()));
                            }
                            var i = D(e.value), s = e.key;
                            if (d && !d.has(i._id)) return e["continue"]();
                            var a;
                            return (a = S.get(i._id)) ? n() : void (m.get(i._id).onsuccess = function(e) {
                                a = L(e.target.result), S.set(i._id, a), n();
                            });
                        }
                        function o(e) {
                            var t = e.target.result;
                            t && n(t);
                        }
                        function i() {
                            var e = [ O, A ];
                            t.attachments && e.push(x);
                            var n = U(W, e, "readonly");
                            if (n.error) return t.complete(n.error);
                            _ = n.txn, _.onabort = B(t.complete), _.oncomplete = f, y = _.objectStore(A), m = _.objectStore(O), 
                            g = y.index("_doc_id_rev");
                            var r;
                            r = t.descending ? y.openCursor(null, "prev") : y.openCursor(IDBKeyRange.lowerBound(t.since, !0)), 
                            r.onsuccess = o;
                        }
                        function f() {
                            function e() {
                                t.complete(null, {
                                    results: b,
                                    last_seq: h
                                });
                            }
                            !t.continuous && t.attachments ? M(b).then(e) : e();
                        }
                        if (t = s(t), t.continuous) {
                            var l = V + ":" + a();
                            return r.Changes.addListener(V, l, e, t), r.Changes.notify(V), {
                                cancel: function() {
                                    r.Changes.removeListener(V, l);
                                }
                            };
                        }
                        var d = t.doc_ids && new u.Set(t.doc_ids);
                        t.since = t.since || 0;
                        var h = t.since, p = "limit" in t ? t.limit : -1;
                        0 === p && (p = 1);
                        var v;
                        v = "return_docs" in t ? t.return_docs : "returnDocs" in t ? t.returnDocs : !0;
                        var _, y, m, g, b = [], E = 0, w = c(t), S = new u.Map();
                        i();
                    }, e._close = function(e) {
                        return null === W ? e(h.error(h.NOT_OPEN)) : (W.close(), delete H[V], W = null, 
                        void e());
                    }, e._getRevisionTree = function(e, t) {
                        var n = U(W, [ O ], "readonly");
                        if (n.error) return t(n.error);
                        var r = n.txn, o = r.objectStore(O).get(e);
                        o.onsuccess = function(e) {
                            var n = L(e.target.result);
                            n ? t(null, n.rev_tree) : t(h.error(h.MISSING_DOC));
                        };
                    }, e._doCompaction = function(e, t, n) {
                        var r = [ O, A, x, T ], o = U(W, r, "readwrite");
                        if (o.error) return n(o.error);
                        var i = o.txn, s = i.objectStore(O);
                        s.get(e).onsuccess = function(n) {
                            var r = L(n.target.result);
                            E(r.rev_tree, function(e, n, r, o, i) {
                                var s = n + "-" + r;
                                -1 !== t.indexOf(s) && (i.status = "missing");
                            }), I(t, e, i);
                            var o = r.winningRev, s = r.deleted;
                            i.objectStore(O).put(N(r, o, s));
                        }, i.onabort = B(n), i.oncomplete = function() {
                            n();
                        };
                    }, e._getLocal = function(e, t) {
                        var n = U(W, [ q ], "readonly");
                        if (n.error) return t(n.error);
                        var r = n.txn, o = r.objectStore(q).get(e);
                        o.onerror = B(t), o.onsuccess = function(e) {
                            var n = e.target.result;
                            n ? (delete n._doc_id_rev, t(null, n)) : t(h.error(h.MISSING_DOC));
                        };
                    }, e._putLocal = function(e, t, n) {
                        "function" == typeof t && (n = t, t = {}), delete e._revisions;
                        var r = e._rev, o = e._id;
                        r ? e._rev = "0-" + (parseInt(r.split("-")[1], 10) + 1) : e._rev = "0-1";
                        var i, s = t.ctx;
                        if (!s) {
                            var a = U(W, [ q ], "readwrite");
                            if (a.error) return n(a.error);
                            s = a.txn, s.onerror = B(n), s.oncomplete = function() {
                                i && n(null, i);
                            };
                        }
                        var u, c = s.objectStore(q);
                        r ? (u = c.get(o), u.onsuccess = function(o) {
                            var s = o.target.result;
                            if (s && s._rev === r) {
                                var a = c.put(e);
                                a.onsuccess = function() {
                                    i = {
                                        ok: !0,
                                        id: e._id,
                                        rev: e._rev
                                    }, t.ctx && n(null, i);
                                };
                            } else n(h.error(h.REV_CONFLICT));
                        }) : (u = c.add(e), u.onerror = function(e) {
                            n(h.error(h.REV_CONFLICT)), e.preventDefault(), e.stopPropagation();
                        }, u.onsuccess = function() {
                            i = {
                                ok: !0,
                                id: e._id,
                                rev: e._rev
                            }, t.ctx && n(null, i);
                        });
                    }, e._removeLocal = function(e, t, n) {
                        "function" == typeof t && (n = t, t = {});
                        var r = t.ctx;
                        if (!r) {
                            var o = U(W, [ q ], "readwrite");
                            if (o.error) return n(o.error);
                            r = o.txn, r.oncomplete = function() {
                                i && n(null, i);
                            };
                        }
                        var i, s = e._id, a = r.objectStore(q), u = a.get(s);
                        u.onerror = B(n), u.onsuccess = function(r) {
                            var o = r.target.result;
                            o && o._rev === e._rev ? (a["delete"](s), i = {
                                ok: !0,
                                id: s,
                                rev: "0-0"
                            }, t.ctx && n(null, i)) : n(h.error(h.MISSING_DOC));
                        };
                    }, e._destroy = function(e, t) {
                        r.Changes.removeAllListeners(V), r.openReqList[V] && r.openReqList[V].result && (r.openReqList[V].result.close(), 
                        delete H[V]);
                        var n = indexedDB.deleteDatabase(V);
                        n.onsuccess = function() {
                            r.openReqList[V] && (r.openReqList[V] = null), g() && V in localStorage && delete localStorage[V], 
                            t(null, {
                                ok: !0
                            });
                        }, n.onerror = B(t);
                    };
                    var J = H[V];
                    if (J) return W = J.idb, e._meta = J.global, void n.nextTick(function() {
                        o(null, e);
                    });
                    var K;
                    K = t.storage ? indexedDB.open(V, {
                        version: S,
                        storage: t.storage
                    }) : indexedDB.open(V, S), "openReqList" in r || (r.openReqList = {}), r.openReqList[V] = K, 
                    K.onupgradeneeded = function(e) {
                        function t() {
                            var e = o[i - 1];
                            i++, e && e(r, t);
                        }
                        var n = e.target.result;
                        if (e.oldVersion < 1) return p(n);
                        var r = e.currentTarget.transaction;
                        e.oldVersion < 3 && w(n), e.oldVersion < 4 && P(n);
                        var o = [ v, C, G, Q ], i = e.oldVersion;
                        t();
                    }, K.onsuccess = function(t) {
                        W = t.target.result, W.onversionchange = function() {
                            W.close(), delete H[V];
                        }, W.onabort = function(e) {
                            console.error("Database has a global failure", e.target.error), W.close(), delete H[V];
                        };
                        var n = W.transaction([ R, k, O ], "readwrite"), r = n.objectStore(R).get(R), s = null, u = null, c = null;
                        r.onsuccess = function(t) {
                            var r = function() {
                                null !== s && null !== u && null !== c && (e._meta = {
                                    name: V,
                                    instanceId: c,
                                    blobSupport: s,
                                    docCount: u
                                }, H[V] = {
                                    idb: W,
                                    global: e._meta
                                }, o(null, e));
                            }, f = t.target.result || {
                                id: R
                            };
                            V + "_id" in f ? (c = f[V + "_id"], r()) : (c = a(), f[V + "_id"] = c, n.objectStore(R).put(f).onsuccess = function() {
                                r();
                            }), i || (i = m(n)), i.then(function(e) {
                                s = e, r();
                            });
                            var l = n.objectStore(O).index("deletedOrLocal");
                            l.count(IDBKeyRange.only("0")).onsuccess = function(e) {
                                u = e.target.result, r();
                            };
                        };
                    }, K.onerror = function(e) {
                        var t = "Failed to open indexedDB, are you in private browsing mode?";
                        console.error(t), o(h.error(h.IDB_ERROR, t));
                    };
                }
                var i, s = e(37), a = e(70), u = e(103), c = e(49), f = e(68), l = e(38), d = e(39), h = e(48), p = e(9), v = e(7), _ = e(6), y = e(4), m = e(5), g = e(46), b = e(60), E = e(59), w = e(15), S = v.ADAPTER_VERSION, T = v.ATTACH_AND_SEQ_STORE, x = v.ATTACH_STORE, A = v.BY_SEQ_STORE, k = v.DETECT_BLOB_SUPPORT_STORE, O = v.DOC_STORE, q = v.LOCAL_STORE, R = v.META_STORE, C = p.applyNext, I = p.compactRevs, D = p.decodeDoc, L = p.decodeMetadata, N = p.encodeMetadata, j = p.fetchAttachmentsIfNecessary, B = p.idbError, M = p.postProcessAttachments, F = p.readBlobData, P = p.taskQueue, U = p.openTransactionSafely, H = {};
                r.valid = function() {
                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
                    return !e && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
                }, r.Changes = new w(), t.exports = r;
            }).call(this, e(93));
        }, {
            103: 103,
            15: 15,
            37: 37,
            38: 38,
            39: 39,
            4: 4,
            46: 46,
            48: 48,
            49: 49,
            5: 5,
            59: 59,
            6: 6,
            60: 60,
            68: 68,
            7: 7,
            70: 70,
            9: 9,
            93: 93
        } ],
        9: [ function(e, t, n) {
            (function(t) {
                "use strict";
                function r(e, t, n) {
                    try {
                        e.apply(t, n);
                    } catch (r) {
                        "undefined" != typeof PouchDB && PouchDB.emit("error", r);
                    }
                }
                var o = e(98).extend, i = e(65), s = e(48), a = e(64), u = e(66), c = e(67), f = e(26), l = f.btoa, d = e(7), h = e(35), p = e(27), v = e(30);
                n.taskQueue = {
                    running: !1,
                    queue: []
                }, n.applyNext = function() {
                    if (!n.taskQueue.running && n.taskQueue.queue.length) {
                        n.taskQueue.running = !0;
                        var e = n.taskQueue.queue.shift();
                        e.action(function(o, i) {
                            r(e.callback, this, [ o, i ]), n.taskQueue.running = !1, t.nextTick(n.applyNext);
                        });
                    }
                }, n.idbError = function(e) {
                    return function(t) {
                        var n = "unknown_error";
                        t.target && t.target.error && (n = t.target.error.name || t.target.error.message), 
                        e(s.error(s.IDB_ERROR, n, t.type));
                    };
                }, n.encodeMetadata = function(e, t, n) {
                    return {
                        data: c(e),
                        winningRev: t,
                        deletedOrLocal: n ? "1" : "0",
                        seq: e.seq,
                        id: e.id
                    };
                }, n.decodeMetadata = function(e) {
                    if (!e) return null;
                    var t = u(e.data);
                    return t.winningRev = e.winningRev, t.deleted = "1" === e.deletedOrLocal, t.seq = e.seq, 
                    t;
                }, n.decodeDoc = function(e) {
                    if (!e) return e;
                    var t = e._doc_id_rev.lastIndexOf(":");
                    return e._id = e._doc_id_rev.substring(0, t - 1), e._rev = e._doc_id_rev.substring(t + 1), 
                    delete e._doc_id_rev, e;
                }, n.readBlobData = function(e, t, n, r) {
                    n ? r(e ? "string" != typeof e ? e : p(e, t) : v([ "" ], {
                        type: t
                    })) : e ? "string" != typeof e ? h(e, function(e) {
                        r(l(e));
                    }) : r(e) : r("");
                }, n.fetchAttachmentsIfNecessary = function(e, t, n, r) {
                    function o() {
                        ++a === s.length && r && r();
                    }
                    function i(e, t) {
                        var r = e._attachments[t], i = r.digest, s = n.objectStore(d.ATTACH_STORE).get(i);
                        s.onsuccess = function(e) {
                            r.body = e.target.result.body, o();
                        };
                    }
                    var s = Object.keys(e._attachments || {});
                    if (!s.length) return r && r();
                    var a = 0;
                    s.forEach(function(n) {
                        t.attachments && t.include_docs ? i(e, n) : (e._attachments[n].stub = !0, o());
                    });
                }, n.postProcessAttachments = function(e, t) {
                    return i.all(e.map(function(e) {
                        if (e.doc && e.doc._attachments) {
                            var r = Object.keys(e.doc._attachments);
                            return i.all(r.map(function(r) {
                                var s = e.doc._attachments[r];
                                if ("body" in s) {
                                    var u = s.body, c = s.content_type;
                                    return new i(function(i) {
                                        n.readBlobData(u, c, t, function(t) {
                                            e.doc._attachments[r] = o(a(s, [ "digest", "content_type" ]), {
                                                data: t
                                            }), i();
                                        });
                                    });
                                }
                            }));
                        }
                    }));
                }, n.compactRevs = function(e, t, n) {
                    function r() {
                        c--, c || o();
                    }
                    function o() {
                        i.length && i.forEach(function(e) {
                            var t = u.index("digestSeq").count(IDBKeyRange.bound(e + "::", e + "::￿", !1, !1));
                            t.onsuccess = function(t) {
                                var n = t.target.result;
                                n || a["delete"](e);
                            };
                        });
                    }
                    var i = [], s = n.objectStore(d.BY_SEQ_STORE), a = n.objectStore(d.ATTACH_STORE), u = n.objectStore(d.ATTACH_AND_SEQ_STORE), c = e.length;
                    e.forEach(function(e) {
                        var n = s.index("_doc_id_rev"), o = t + "::" + e;
                        n.getKey(o).onsuccess = function(e) {
                            var t = e.target.result;
                            if ("number" != typeof t) return r();
                            s["delete"](t);
                            var n = u.index("seq").openCursor(IDBKeyRange.only(t));
                            n.onsuccess = function(e) {
                                var t = e.target.result;
                                if (t) {
                                    var n = t.value.digestSeq.split("::")[0];
                                    i.push(n), u["delete"](t.primaryKey), t["continue"]();
                                } else r();
                            };
                        };
                    });
                }, n.openTransactionSafely = function(e, t, n) {
                    try {
                        return {
                            txn: e.transaction(t, n)
                        };
                    } catch (r) {
                        return {
                            error: r
                        };
                    }
                };
            }).call(this, e(93));
        }, {
            26: 26,
            27: 27,
            30: 30,
            35: 35,
            48: 48,
            64: 64,
            65: 65,
            66: 66,
            67: 67,
            7: 7,
            93: 93,
            98: 98
        } ],
        10: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r, p, S) {
                function T() {
                    return j ? S(j) : (p.notify(n._name), n._docCount = -1, void S(null, B));
                }
                function x(e, t) {
                    var n = "SELECT count(*) as cnt FROM " + y + " WHERE digest=?";
                    N.executeSql(n, [ e ], function(n, r) {
                        if (0 === r.rows.item(0).cnt) {
                            var o = i.error(i.MISSING_STUB, "unknown stub attachment with digest " + e);
                            t(o);
                        } else t();
                    });
                }
                function A(e) {
                    function t() {
                        ++o === n.length && e(r);
                    }
                    var n = [];
                    if (D.forEach(function(e) {
                        e.data && e.data._attachments && Object.keys(e.data._attachments).forEach(function(t) {
                            var r = e.data._attachments[t];
                            r.stub && n.push(r.digest);
                        });
                    }), !n.length) return e();
                    var r, o = 0;
                    n.forEach(function(e) {
                        x(e, function(e) {
                            e && !r && (r = e), t();
                        });
                    });
                }
                function k(e, t, r, o, i, s, a, u) {
                    function c() {
                        function t(e, t) {
                            function r() {
                                return ++i === s.length && t(), !1;
                            }
                            function o(t) {
                                var o = "INSERT INTO " + m + " (digest, seq) VALUES (?,?)", i = [ n._attachments[t].digest, e ];
                                N.executeSql(o, i, r, r);
                            }
                            var i = 0, s = Object.keys(n._attachments || {});
                            if (!s.length) return t();
                            for (var a = 0; a < s.length; a++) o(s[a]);
                        }
                        var n = e.data, r = o ? 1 : 0, i = n._id, s = n._rev, a = b(n), u = "INSERT INTO " + _ + " (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);", c = [ i, s, a, r ];
                        N.executeSql(u, c, function(e, n) {
                            var r = n.insertId;
                            t(r, function() {
                                y(e, r);
                            });
                        }, function() {
                            var e = g("seq", _, null, "doc_id=? AND rev=?");
                            return N.executeSql(e, [ i, s ], function(e, n) {
                                var o = n.rows.item(0).seq, u = "UPDATE " + _ + " SET json=?, deleted=? WHERE doc_id=? AND rev=?;", c = [ a, r, i, s ];
                                e.executeSql(u, c, function(e) {
                                    t(o, function() {
                                        y(e, o);
                                    });
                                });
                            }), !1;
                        });
                    }
                    function d(e) {
                        w || (e ? (w = e, u(w)) : S === T.length && c());
                    }
                    function h(e) {
                        S++, d(e);
                    }
                    function p() {
                        if (i && n.auto_compaction) {
                            var t = e.metadata.id, r = l(e.metadata);
                            E(r, t, N);
                        }
                    }
                    function y(n, r) {
                        p(), e.metadata.seq = r, delete e.metadata.rev;
                        var o = i ? "UPDATE " + v + " SET json=?, max_seq=?, winningseq=(SELECT seq FROM " + _ + " WHERE doc_id=" + v + ".id AND rev=?) WHERE id=?" : "INSERT INTO " + v + " (id, winningseq, max_seq, json) VALUES (?,?,?,?);", s = f(e.metadata), c = e.metadata.id, l = i ? [ s, r, t, c ] : [ c, r, r, s ];
                        n.executeSql(o, l, function() {
                            B[a] = {
                                ok: !0,
                                id: e.metadata.id,
                                rev: t
                            }, M.set(c, e.metadata), u();
                        });
                    }
                    var w = null, S = 0;
                    e.data._id = e.metadata.id, e.data._rev = e.metadata.rev;
                    var T = Object.keys(e.data._attachments || {});
                    o && (e.data._deleted = !0), T.forEach(function(t) {
                        var n = e.data._attachments[t];
                        if (n.stub) S++, d(); else {
                            var r = n.data;
                            delete n.data;
                            var o = n.digest;
                            R(o, r, h);
                        }
                    }), T.length || c();
                }
                function O() {
                    u(D, n, M, N, B, k, t);
                }
                function q(e) {
                    function t() {
                        ++n === D.length && e();
                    }
                    if (!D.length) return e();
                    var n = 0;
                    D.forEach(function(e) {
                        if (e._id && a(e._id)) return t();
                        var n = e.metadata.id;
                        N.executeSql("SELECT json FROM " + v + " WHERE id = ?", [ n ], function(e, r) {
                            if (r.rows.length) {
                                var o = c(r.rows.item(0).json);
                                M.set(n, o);
                            }
                            t();
                        });
                    });
                }
                function R(e, t, n) {
                    var r = "SELECT digest FROM " + y + " WHERE digest=?";
                    N.executeSql(r, [ e ], function(o, i) {
                        return i.rows.length ? n() : (r = "INSERT INTO " + y + " (digest, body, escaped) VALUES (?,?,1)", 
                        void o.executeSql(r, [ e, h.escapeBlob(t) ], function() {
                            n();
                        }, function() {
                            return n(), !1;
                        }));
                    });
                }
                var C = t.new_edits, I = e.docs, D = I.map(function(e) {
                    if (e._id && a(e._id)) return e;
                    var t = d.parseDoc(e, C);
                    return t;
                }), L = D.filter(function(e) {
                    return e.error;
                });
                if (L.length) return S(L[0]);
                var N, j, B = new Array(D.length), M = new o.Map();
                s(D, "binary", function(e) {
                    return e ? S(e) : void r.transaction(function(e) {
                        N = e, A(function(e) {
                            e ? j = e : q(O);
                        });
                    }, w(S), T);
                });
            }
            var o = e(103), i = e(48), s = e(43), a = e(39), u = e(44), c = e(66), f = e(67), l = e(55), d = e(42), h = e(13), p = e(11), v = p.DOC_STORE, _ = p.BY_SEQ_STORE, y = p.ATTACH_STORE, m = p.ATTACH_AND_SEQ_STORE, g = h.select, b = h.stringifyDoc, E = h.compactRevs, w = h.websqlError;
            t.exports = r;
        }, {
            103: 103,
            11: 11,
            13: 13,
            39: 39,
            42: 42,
            43: 43,
            44: 44,
            48: 48,
            55: 55,
            66: 66,
            67: 67
        } ],
        11: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return "'" + e + "'";
            }
            n.ADAPTER_VERSION = 7, n.DOC_STORE = r("document-store"), n.BY_SEQ_STORE = r("by-sequence"), 
            n.ATTACH_STORE = r("attach-store"), n.LOCAL_STORE = r("local-store"), n.META_STORE = r("metadata-store"), 
            n.ATTACH_AND_SEQ_STORE = r("attach-seq-store");
        }, {} ],
        12: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r, o) {
                function s() {
                    ++f === c.length && o && o();
                }
                function a(e, o) {
                    var a = e._attachments[o], c = {
                        binary: t.binary,
                        ctx: r
                    };
                    n._getAttachment(a, c, function(t, n) {
                        e._attachments[o] = i(u(a, [ "digest", "content_type" ]), {
                            data: n
                        }), s();
                    });
                }
                var c = Object.keys(e._attachments || {});
                if (!c.length) return o && o();
                var f = 0;
                c.forEach(function(n) {
                    t.attachments && t.include_docs ? a(e, n) : (e._attachments[n].stub = !0, s());
                });
            }
            function o(e, t) {
                function n() {
                    v() && (window.localStorage["_pouch__websqldb_" + se._name] = !0), t(null, se);
                }
                function u(e, t) {
                    e.executeSql(W), e.executeSql("ALTER TABLE " + R + " ADD COLUMN deleted TINYINT(1) DEFAULT 0", [], function() {
                        e.executeSql(Q), e.executeSql("ALTER TABLE " + q + " ADD COLUMN local TINYINT(1) DEFAULT 0", [], function() {
                            e.executeSql("CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON " + q + " (local, id)");
                            var n = "SELECT " + q + ".winningseq AS seq, " + q + ".json AS metadata FROM " + R + " JOIN " + q + " ON " + R + ".seq = " + q + ".winningseq";
                            e.executeSql(n, [], function(e, n) {
                                for (var r = [], o = [], i = 0; i < n.rows.length; i++) {
                                    var s = n.rows.item(i), a = s.seq, u = JSON.parse(s.metadata);
                                    f(u) && r.push(a), l(u.id) && o.push(u.id);
                                }
                                e.executeSql("UPDATE " + q + "SET local = 1 WHERE id IN " + N(o.length), o, function() {
                                    e.executeSql("UPDATE " + R + " SET deleted = 1 WHERE seq IN " + N(r.length), r, t);
                                });
                            });
                        });
                    });
                }
                function b(e, t) {
                    var n = "CREATE TABLE IF NOT EXISTS " + I + " (id UNIQUE, rev, json)";
                    e.executeSql(n, [], function() {
                        var n = "SELECT " + q + ".id AS id, " + R + ".json AS data FROM " + R + " JOIN " + q + " ON " + R + ".seq = " + q + ".winningseq WHERE local = 1";
                        e.executeSql(n, [], function(e, n) {
                            function r() {
                                if (!o.length) return t(e);
                                var n = o.shift(), i = JSON.parse(n.data)._rev;
                                e.executeSql("INSERT INTO " + I + " (id, rev, json) VALUES (?,?,?)", [ n.id, i, n.data ], function(e) {
                                    e.executeSql("DELETE FROM " + q + " WHERE id=?", [ n.id ], function(e) {
                                        e.executeSql("DELETE FROM " + R + " WHERE seq=?", [ n.seq ], function() {
                                            r();
                                        });
                                    });
                                });
                            }
                            for (var o = [], i = 0; i < n.rows.length; i++) o.push(n.rows.item(i));
                            r();
                        });
                    });
                }
                function S(e, t) {
                    function n(n) {
                        function r() {
                            if (!n.length) return t(e);
                            var o = n.shift(), i = h(o.hex, ie), s = i.lastIndexOf("::"), a = i.substring(0, s), u = i.substring(s + 2), c = "UPDATE " + R + " SET doc_id=?, rev=? WHERE doc_id_rev=?";
                            e.executeSql(c, [ a, u, i ], function() {
                                r();
                            });
                        }
                        r();
                    }
                    var r = "ALTER TABLE " + R + " ADD COLUMN doc_id";
                    e.executeSql(r, [], function(e) {
                        var t = "ALTER TABLE " + R + " ADD COLUMN rev";
                        e.executeSql(t, [], function(e) {
                            e.executeSql(V, [], function(e) {
                                var t = "SELECT hex(doc_id_rev) as hex FROM " + R;
                                e.executeSql(t, [], function(e, t) {
                                    for (var r = [], o = 0; o < t.rows.length; o++) r.push(t.rows.item(o));
                                    n(r);
                                });
                            });
                        });
                    });
                }
                function x(e, t) {
                    function n(e) {
                        var n = "SELECT COUNT(*) AS cnt FROM " + C;
                        e.executeSql(n, [], function(e, n) {
                            function r() {
                                var n = M(X + ", " + q + ".id AS id", [ q, R ], z, null, q + ".id ");
                                n += " LIMIT " + s + " OFFSET " + i, i += s, e.executeSql(n, [], function(e, n) {
                                    function o(e, t) {
                                        var n = i[e] = i[e] || [];
                                        -1 === n.indexOf(t) && n.push(t);
                                    }
                                    if (!n.rows.length) return t(e);
                                    for (var i = {}, s = 0; s < n.rows.length; s++) for (var a = n.rows.item(s), u = B(a.data, a.id, a.rev), c = Object.keys(u._attachments || {}), f = 0; f < c.length; f++) {
                                        var l = u._attachments[c[f]];
                                        o(l.digest, a.seq);
                                    }
                                    var d = [];
                                    if (Object.keys(i).forEach(function(e) {
                                        var t = i[e];
                                        t.forEach(function(t) {
                                            d.push([ e, t ]);
                                        });
                                    }), !d.length) return r();
                                    var h = 0;
                                    d.forEach(function(t) {
                                        var n = "INSERT INTO " + L + " (digest, seq) VALUES (?,?)";
                                        e.executeSql(n, t, function() {
                                            ++h === d.length && r();
                                        });
                                    });
                                });
                            }
                            var o = n.rows.item(0).cnt;
                            if (!o) return t(e);
                            var i = 0, s = 10;
                            r();
                        });
                    }
                    var r = "CREATE TABLE IF NOT EXISTS " + L + " (digest, seq INTEGER)";
                    e.executeSql(r, [], function(e) {
                        e.executeSql(K, [], function(e) {
                            e.executeSql(J, [], n);
                        });
                    });
                }
                function Y(e, t) {
                    var n = "ALTER TABLE " + C + " ADD COLUMN escaped TINYINT(1) DEFAULT 0";
                    e.executeSql(n, [], t);
                }
                function $(e, t) {
                    var n = "ALTER TABLE " + q + " ADD COLUMN max_seq INTEGER";
                    e.executeSql(n, [], function(e) {
                        var n = "UPDATE " + q + " SET max_seq=(SELECT MAX(seq) FROM " + R + " WHERE doc_id=id)";
                        e.executeSql(n, [], function(e) {
                            var n = "CREATE UNIQUE INDEX IF NOT EXISTS 'doc-max-seq-idx' ON " + q + " (max_seq)";
                            e.executeSql(n, [], t);
                        });
                    });
                }
                function Z(e, t) {
                    e.executeSql('SELECT HEX("a") AS hex', [], function(e, n) {
                        var r = n.rows.item(0).hex;
                        ie = 2 === r.length ? "UTF-8" : "UTF-16", t();
                    });
                }
                function ee() {
                    for (;ce.length > 0; ) {
                        var e = ce.pop();
                        e(null, ae);
                    }
                }
                function te(e, t) {
                    if (0 === t) {
                        var n = "CREATE TABLE IF NOT EXISTS " + D + " (dbid, db_version INTEGER)", r = "CREATE TABLE IF NOT EXISTS " + C + " (digest UNIQUE, escaped TINYINT(1), body BLOB)", o = "CREATE TABLE IF NOT EXISTS " + L + " (digest, seq INTEGER)", i = "CREATE TABLE IF NOT EXISTS " + q + " (id unique, json, winningseq, max_seq INTEGER UNIQUE)", s = "CREATE TABLE IF NOT EXISTS " + R + " (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, json, deleted TINYINT(1), doc_id, rev)", c = "CREATE TABLE IF NOT EXISTS " + I + " (id UNIQUE, rev, json)";
                        e.executeSql(r), e.executeSql(c), e.executeSql(o, [], function() {
                            e.executeSql(J), e.executeSql(K);
                        }), e.executeSql(i, [], function() {
                            e.executeSql(W), e.executeSql(s, [], function() {
                                e.executeSql(Q), e.executeSql(V), e.executeSql(n, [], function() {
                                    var t = "INSERT INTO " + D + " (db_version, dbid) VALUES (?,?)";
                                    ae = a();
                                    var n = [ O, ae ];
                                    e.executeSql(t, n, function() {
                                        ee();
                                    });
                                });
                            });
                        });
                    } else {
                        var f = function() {
                            var n = O > t;
                            n && e.executeSql("UPDATE " + D + " SET db_version = " + O);
                            var r = "SELECT dbid FROM " + D;
                            e.executeSql(r, [], function(e, t) {
                                ae = t.rows.item(0).dbid, ee();
                            });
                        }, l = [ u, b, S, x, Y, $, f ], d = t, h = function(e) {
                            l[d - 1](e, h), d++;
                        };
                        h(e);
                    }
                }
                function ne() {
                    le.transaction(function(e) {
                        Z(e, function() {
                            re(e);
                        });
                    }, P(t), n);
                }
                function re(e) {
                    var t = "SELECT sql FROM sqlite_master WHERE tbl_name = " + D;
                    e.executeSql(t, [], function(e, t) {
                        t.rows.length ? /db_version/.test(t.rows.item(0).sql) ? e.executeSql("SELECT db_version FROM " + D, [], function(e, t) {
                            var n = t.rows.item(0).db_version;
                            te(e, n);
                        }) : e.executeSql("ALTER TABLE " + D + " ADD COLUMN db_version INTEGER", [], function() {
                            te(e, 1);
                        }) : te(e, 0);
                    });
                }
                function oe(e, t) {
                    if (-1 !== se._docCount) return t(se._docCount);
                    var n = M("COUNT(" + q + ".id) AS 'num'", [ q, R ], z, R + ".deleted=0");
                    e.executeSql(n, [], function(e, n) {
                        se._docCount = n.rows.item(0).num, t(se._docCount);
                    });
                }
                var ie, se = this, ae = null, ue = U(e), ce = [];
                se._docCount = -1, se._name = e.name;
                var fe = H({
                    name: se._name,
                    version: G,
                    description: se._name,
                    size: ue,
                    location: e.location,
                    createFromLocation: e.createFromLocation,
                    androidDatabaseImplementation: e.androidDatabaseImplementation
                });
                if (fe.error) return P(t)(fe.error);
                var le = fe.db;
                "function" != typeof le.readTransaction && (le.readTransaction = le.transaction), 
                E() ? window.addEventListener(se._name + "_pouch", function de() {
                    window.removeEventListener(se._name + "_pouch", de, !1), ne();
                }, !1) : ne(), se.type = function() {
                    return "websql";
                }, se._id = w(function(e) {
                    e(null, ae);
                }), se._info = function(e) {
                    le.readTransaction(function(t) {
                        oe(t, function(n) {
                            var r = "SELECT MAX(seq) AS seq FROM " + R;
                            t.executeSql(r, [], function(t, r) {
                                var o = r.rows.item(0).seq || 0;
                                e(null, {
                                    doc_count: n,
                                    update_seq: o,
                                    sqlite_plugin: le._sqlitePlugin,
                                    websql_encoding: ie
                                });
                            });
                        });
                    }, P(e));
                }, se._bulkDocs = function(e, t, n) {
                    k(e, t, se, le, o.Changes, n);
                }, se._get = function(e, t, n) {
                    function r() {
                        n(a, {
                            doc: o,
                            metadata: s,
                            ctx: u
                        });
                    }
                    var o, s, a, u = t.ctx;
                    if (!u) return le.readTransaction(function(r) {
                        se._get(e, i({
                            ctx: r
                        }, t), n);
                    });
                    var c, f;
                    t.rev ? (c = M(X, [ q, R ], q + ".id=" + R + ".doc_id", [ R + ".doc_id=?", R + ".rev=?" ]), 
                    f = [ e, t.rev ]) : (c = M(X, [ q, R ], z, q + ".id=?"), f = [ e ]), u.executeSql(c, f, function(e, n) {
                        if (!n.rows.length) return a = d.error(d.MISSING_DOC, "missing"), r();
                        var i = n.rows.item(0);
                        return s = m(i.metadata), i.deleted && !t.rev ? (a = d.error(d.MISSING_DOC, "deleted"), 
                        r()) : (o = B(i.data, s.id, i.rev), void r());
                    });
                }, se._allDocs = function(e, t) {
                    var n, o = [], i = "startkey" in e ? e.startkey : !1, s = "endkey" in e ? e.endkey : !1, a = "key" in e ? e.key : !1, u = "descending" in e ? e.descending : !1, c = "limit" in e ? e.limit : -1, f = "skip" in e ? e.skip : 0, l = e.inclusive_end !== !1, d = [], h = [];
                    if (a !== !1) h.push(q + ".id = ?"), d.push(a); else if (i !== !1 || s !== !1) {
                        if (i !== !1 && (h.push(q + ".id " + (u ? "<=" : ">=") + " ?"), d.push(i)), s !== !1) {
                            var p = u ? ">" : "<";
                            l && (p += "="), h.push(q + ".id " + p + " ?"), d.push(s);
                        }
                        a !== !1 && (h.push(q + ".id = ?"), d.push(a));
                    }
                    "ok" !== e.deleted && h.push(R + ".deleted = 0"), le.readTransaction(function(t) {
                        oe(t, function(i) {
                            if (n = i, 0 !== c) {
                                var s = M(X, [ q, R ], z, h, q + ".id " + (u ? "DESC" : "ASC"));
                                s += " LIMIT " + c + " OFFSET " + f, t.executeSql(s, d, function(t, n) {
                                    for (var i = 0, s = n.rows.length; s > i; i++) {
                                        var a = n.rows.item(i), u = m(a.metadata), c = u.id, f = B(a.data, c, a.rev), l = f._rev, d = {
                                            id: c,
                                            key: c,
                                            value: {
                                                rev: l
                                            }
                                        };
                                        if (e.include_docs && (d.doc = f, d.doc._rev = l, e.conflicts && (d.doc._conflicts = _(u)), 
                                        r(d.doc, e, se, t)), a.deleted) {
                                            if ("ok" !== e.deleted) continue;
                                            d.value.deleted = !0, d.doc = null;
                                        }
                                        o.push(d);
                                    }
                                });
                            }
                        });
                    }, P(t), function() {
                        t(null, {
                            total_rows: n,
                            offset: e.skip,
                            rows: o
                        });
                    });
                }, se._changes = function(e) {
                    function t() {
                        var t = q + ".json AS metadata, " + q + ".max_seq AS maxSeq, " + R + ".json AS winningDoc, " + R + ".rev AS winningRev ", n = q + " JOIN " + R, o = q + ".id=" + R + ".doc_id AND " + q + ".winningseq=" + R + ".seq", s = [ "maxSeq > ?" ], a = [ e.since ];
                        e.doc_ids && (s.push(q + ".id IN " + N(e.doc_ids.length)), a = a.concat(e.doc_ids));
                        var h = "maxSeq " + (i ? "DESC" : "ASC"), p = M(t, n, o, s, h), v = c(e);
                        e.view || e.filter || (p += " LIMIT " + u);
                        var _ = e.since || 0;
                        le.readTransaction(function(t) {
                            t.executeSql(p, a, function(t, n) {
                                function o(t) {
                                    return function() {
                                        e.onChange(t);
                                    };
                                }
                                for (var i = 0, s = n.rows.length; s > i; i++) {
                                    var a = n.rows.item(i), c = m(a.metadata);
                                    _ = a.maxSeq;
                                    var h = B(a.winningDoc, c.id, a.winningRev), p = e.processChange(h, c, e);
                                    p.seq = a.maxSeq;
                                    var y = v(p);
                                    if ("object" == typeof y) return e.complete(y);
                                    if (y && (d++, f && l.push(p), e.attachments && e.include_docs ? r(h, e, se, t, o(p)) : o(p)()), 
                                    d === u) break;
                                }
                            });
                        }, P(e.complete), function() {
                            e.continuous || e.complete(null, {
                                results: l,
                                last_seq: _
                            });
                        });
                    }
                    if (e = s(e), e.continuous) {
                        var n = se._name + ":" + a();
                        return o.Changes.addListener(se._name, n, se, e), o.Changes.notify(se._name), {
                            cancel: function() {
                                o.Changes.removeListener(se._name, n);
                            }
                        };
                    }
                    var i = e.descending;
                    e.since = e.since && !i ? e.since : 0;
                    var u = "limit" in e ? e.limit : -1;
                    0 === u && (u = 1);
                    var f;
                    f = "return_docs" in e ? e.return_docs : "returnDocs" in e ? e.returnDocs : !0;
                    var l = [], d = 0;
                    t();
                }, se._close = function(e) {
                    e();
                }, se._getAttachment = function(e, t, n) {
                    var r, o = t.ctx, i = e.digest, s = e.content_type, a = "SELECT escaped, CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM " + C + " WHERE digest=?";
                    o.executeSql(a, [ i ], function(e, o) {
                        var i = o.rows.item(0), a = i.escaped ? A.unescapeBlob(i.body) : h(i.body, ie);
                        r = t.binary ? p(a, s) : T(a), n(null, r);
                    });
                }, se._getRevisionTree = function(e, t) {
                    le.readTransaction(function(n) {
                        var r = "SELECT json AS metadata FROM " + q + " WHERE id = ?";
                        n.executeSql(r, [ e ], function(e, n) {
                            if (n.rows.length) {
                                var r = m(n.rows.item(0).metadata);
                                t(null, r.rev_tree);
                            } else t(d.error(d.MISSING_DOC));
                        });
                    });
                }, se._doCompaction = function(e, t, n) {
                    return t.length ? void le.transaction(function(n) {
                        var r = "SELECT json AS metadata FROM " + q + " WHERE id = ?";
                        n.executeSql(r, [ e ], function(n, r) {
                            var o = m(r.rows.item(0).metadata);
                            y(o.rev_tree, function(e, n, r, o, i) {
                                var s = n + "-" + r;
                                -1 !== t.indexOf(s) && (i.status = "missing");
                            });
                            var i = "UPDATE " + q + " SET json = ? WHERE id = ?";
                            n.executeSql(i, [ g(o), e ]);
                        }), F(t, e, n);
                    }, P(n), function() {
                        n();
                    }) : n();
                }, se._getLocal = function(e, t) {
                    le.readTransaction(function(n) {
                        var r = "SELECT json, rev FROM " + I + " WHERE id=?";
                        n.executeSql(r, [ e ], function(n, r) {
                            if (r.rows.length) {
                                var o = r.rows.item(0), i = B(o.json, e, o.rev);
                                t(null, i);
                            } else t(d.error(d.MISSING_DOC));
                        });
                    });
                }, se._putLocal = function(e, t, n) {
                    function r(e) {
                        var r, c;
                        i ? (r = "UPDATE " + I + " SET rev=?, json=? WHERE id=? AND rev=?", c = [ o, u, s, i ]) : (r = "INSERT INTO " + I + " (id, rev, json) VALUES (?,?,?)", 
                        c = [ s, o, u ]), e.executeSql(r, c, function(e, r) {
                            r.rowsAffected ? (a = {
                                ok: !0,
                                id: s,
                                rev: o
                            }, t.ctx && n(null, a)) : n(d.error(d.REV_CONFLICT));
                        }, function() {
                            return n(d.error(d.REV_CONFLICT)), !1;
                        });
                    }
                    "function" == typeof t && (n = t, t = {}), delete e._revisions;
                    var o, i = e._rev, s = e._id;
                    o = i ? e._rev = "0-" + (parseInt(i.split("-")[1], 10) + 1) : e._rev = "0-1";
                    var a, u = j(e);
                    t.ctx ? r(t.ctx) : le.transaction(r, P(n), function() {
                        a && n(null, a);
                    });
                }, se._removeLocal = function(e, t, n) {
                    function r(r) {
                        var i = "DELETE FROM " + I + " WHERE id=? AND rev=?", s = [ e._id, e._rev ];
                        r.executeSql(i, s, function(r, i) {
                            return i.rowsAffected ? (o = {
                                ok: !0,
                                id: e._id,
                                rev: "0-0"
                            }, void (t.ctx && n(null, o))) : n(d.error(d.MISSING_DOC));
                        });
                    }
                    "function" == typeof t && (n = t, t = {});
                    var o;
                    t.ctx ? r(t.ctx) : le.transaction(r, P(n), function() {
                        o && n(null, o);
                    });
                }, se._destroy = function(e, t) {
                    o.Changes.removeAllListeners(se._name), le.transaction(function(e) {
                        var t = [ q, R, C, D, I, L ];
                        t.forEach(function(t) {
                            e.executeSql("DROP TABLE IF EXISTS " + t, []);
                        });
                    }, P(t), function() {
                        v() && (delete window.localStorage["_pouch__websqldb_" + se._name], delete window.localStorage[se._name]), 
                        t(null, {
                            ok: !0
                        });
                    });
                };
            }
            var i = e(98).extend, s = e(37), a = e(70), u = e(64), c = e(49), f = e(38), l = e(39), d = e(48), h = e(62), p = e(29), v = e(46), _ = e(53), y = e(59), m = e(66), g = e(67), b = e(15), E = e(51), w = e(68), S = e(26), T = S.btoa, x = e(11), A = e(13), k = e(10), O = x.ADAPTER_VERSION, q = x.DOC_STORE, R = x.BY_SEQ_STORE, C = x.ATTACH_STORE, I = x.LOCAL_STORE, D = x.META_STORE, L = x.ATTACH_AND_SEQ_STORE, N = A.qMarks, j = A.stringifyDoc, B = A.unstringifyDoc, M = A.select, F = A.compactRevs, P = A.websqlError, U = A.getSize, H = A.openDB, G = 1, Q = "CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON " + R + " (seq, deleted)", V = "CREATE UNIQUE INDEX IF NOT EXISTS 'by-seq-doc-id-rev' ON " + R + " (doc_id, rev)", W = "CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON " + q + " (winningseq)", J = "CREATE INDEX IF NOT EXISTS 'attach-seq-seq-idx' ON " + L + " (seq)", K = "CREATE UNIQUE INDEX IF NOT EXISTS 'attach-seq-digest-idx' ON " + L + " (digest, seq)", z = R + ".seq = " + q + ".winningseq", X = R + ".seq AS seq, " + R + ".deleted AS deleted, " + R + ".json AS data, " + R + ".rev AS rev, " + q + ".json AS metadata";
            o.valid = A.valid, o.Changes = new b(), t.exports = o;
        }, {
            10: 10,
            11: 11,
            13: 13,
            15: 15,
            26: 26,
            29: 29,
            37: 37,
            38: 38,
            39: 39,
            46: 46,
            48: 48,
            49: 49,
            51: 51,
            53: 53,
            59: 59,
            62: 62,
            64: 64,
            66: 66,
            67: 67,
            68: 68,
            70: 70,
            98: 98
        } ],
        13: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "");
            }
            function o(e) {
                return e.replace(/\u0001\u0001/g, "\x00").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, "");
            }
            function i(e) {
                return delete e._id, delete e._rev, JSON.stringify(e);
            }
            function s(e, t, n) {
                return e = JSON.parse(e), e._id = t, e._rev = n, e;
            }
            function a(e) {
                for (var t = "("; e--; ) t += "?", e && (t += ",");
                return t + ")";
            }
            function u(e, t, n, r, o) {
                return "SELECT " + e + " FROM " + ("string" == typeof t ? t : t.join(" JOIN ")) + (n ? " ON " + n : "") + (r ? " WHERE " + ("string" == typeof r ? r : r.join(" AND ")) : "") + (o ? " ORDER BY " + o : "");
            }
            function c(e, t, n) {
                function r() {
                    ++i === e.length && o();
                }
                function o() {
                    if (s.length) {
                        var e = "SELECT DISTINCT digest AS digest FROM " + E + " WHERE seq IN " + a(s.length);
                        n.executeSql(e, s, function(e, t) {
                            for (var n = [], r = 0; r < t.rows.length; r++) n.push(t.rows.item(r).digest);
                            if (n.length) {
                                var o = "DELETE FROM " + E + " WHERE seq IN (" + s.map(function() {
                                    return "?";
                                }).join(",") + ")";
                                e.executeSql(o, s, function(e) {
                                    var t = "SELECT digest FROM " + E + " WHERE digest IN (" + n.map(function() {
                                        return "?";
                                    }).join(",") + ")";
                                    e.executeSql(t, n, function(e, t) {
                                        for (var r = new y.Set(), o = 0; o < t.rows.length; o++) r.add(t.rows.item(o).digest);
                                        n.forEach(function(t) {
                                            r.has(t) || (e.executeSql("DELETE FROM " + E + " WHERE digest=?", [ t ]), e.executeSql("DELETE FROM " + b + " WHERE digest=?", [ t ]));
                                        });
                                    });
                                });
                            }
                        });
                    }
                }
                if (e.length) {
                    var i = 0, s = [];
                    e.forEach(function(e) {
                        var o = "SELECT seq FROM " + g + " WHERE doc_id=? AND rev=?";
                        n.executeSql(o, [ t, e ], function(e, t) {
                            if (!t.rows.length) return r();
                            var n = t.rows.item(0).seq;
                            s.push(n), e.executeSql("DELETE FROM " + g + " WHERE seq=?", [ n ], r);
                        });
                    });
                }
            }
            function f(e) {
                return function(t) {
                    console.error("WebSQL threw an error", t);
                    var n = t && t.constructor.toString().match(/function ([^\(]+)/), r = n && n[1] || t.type, o = t.target || t.message;
                    e(_.error(_.WSQ_ERROR, o, r));
                };
            }
            function l(e) {
                if ("size" in e) return 1e6 * e.size;
                var t = /Android/.test(window.navigator.userAgent);
                return t ? 5e6 : 1;
            }
            function d() {
                return "undefined" != typeof sqlitePlugin ? sqlitePlugin.openDatabase.bind(sqlitePlugin) : "undefined" != typeof openDatabase ? function(e) {
                    return openDatabase(e.name, e.version, e.description, e.size);
                } : void 0;
            }
            function h(e, t) {
                try {
                    return {
                        db: e(t)
                    };
                } catch (n) {
                    return {
                        error: n
                    };
                }
            }
            function p(e) {
                var t = w[e.name];
                if (!t) {
                    var n = d();
                    t = w[e.name] = h(n, e), t.db && (t.db._sqlitePlugin = "undefined" != typeof sqlitePlugin);
                }
                return t;
            }
            function v() {
                return "undefined" != typeof openDatabase || "undefined" != typeof SQLitePlugin;
            }
            var _ = e(48), y = e(103), m = e(11), g = m.BY_SEQ_STORE, b = m.ATTACH_STORE, E = m.ATTACH_AND_SEQ_STORE, w = {};
            t.exports = {
                escapeBlob: r,
                unescapeBlob: o,
                stringifyDoc: i,
                unstringifyDoc: s,
                qMarks: a,
                select: u,
                compactRevs: c,
                websqlError: f,
                getSize: l,
                openDB: p,
                valid: v
            };
        }, {
            103: 103,
            11: 11,
            48: 48
        } ],
        14: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                function r() {
                    o.cancel();
                }
                d.call(this);
                var o = this;
                this.db = e, t = t ? i(t) : {};
                var a = t.complete = f(function(t, n) {
                    t ? o.emit("error", t) : o.emit("complete", n), o.removeAllListeners(), e.removeListener("destroyed", r);
                });
                n && (o.on("complete", function(e) {
                    n(null, e);
                }), o.on("error", function(e) {
                    n(e);
                })), e.once("destroyed", r), t.onChange = function(e) {
                    t.isCancelled || (o.emit("change", e), o.startSeq && o.startSeq <= e.seq && (o.startSeq = !1));
                };
                var u = new s(function(e, n) {
                    t.complete = function(t, r) {
                        t ? n(t) : e(r);
                    };
                });
                o.once("cancel", function() {
                    e.removeListener("destroyed", r), t.complete(null, {
                        status: "cancelled"
                    });
                }), this.then = u.then.bind(u), this["catch"] = u["catch"].bind(u), this.then(function(e) {
                    a(null, e);
                }, a), e.taskqueue.isReady ? o.doChanges(t) : e.taskqueue.addTask(function() {
                    o.isCancelled ? o.emit("cancel") : o.doChanges(t);
                });
            }
            function o(e, t, n) {
                var r = [ {
                    rev: e._rev
                } ];
                "all_docs" === n.style && (r = y(t.rev_tree).map(function(e) {
                    return {
                        rev: e.rev
                    };
                }));
                var o = {
                    id: t.id,
                    changes: r,
                    doc: e
                };
                return a(t, e._rev) && (o.deleted = !0), n.conflicts && (o.doc._conflicts = m(t), 
                o.doc._conflicts.length || delete o.doc._conflicts), o;
            }
            var i = e(37), s = e(65), a = e(38), u = e(97), c = e(91), f = e(61), l = e(48), d = e(92).EventEmitter, h = e(71), p = e(72), v = e(41), _ = e(40), y = e(54), m = e(53);
            t.exports = r, u(r, d), r.prototype.cancel = function() {
                this.isCancelled = !0, this.db.taskqueue.isReady && this.emit("cancel");
            }, r.prototype.doChanges = function(e) {
                var t = this, n = e.complete;
                if (e = i(e), "live" in e && !("continuous" in e) && (e.continuous = e.live), e.processChange = o, 
                "latest" === e.since && (e.since = "now"), e.since || (e.since = 0), "now" === e.since) return void this.db.info().then(function(r) {
                    return t.isCancelled ? void n(null, {
                        status: "cancelled"
                    }) : (e.since = r.update_seq, void t.doChanges(e));
                }, n);
                if (e.continuous && "now" !== e.since && this.db.info().then(function(e) {
                    t.startSeq = e.update_seq;
                }, function(e) {
                    if ("idbNull" !== e.id) throw e;
                }), e.filter && "string" == typeof e.filter && ("_view" === e.filter ? e.view = _(e.view) : e.filter = _(e.filter), 
                "http" !== this.db.type() && !e.doc_ids)) return this.filterChanges(e);
                "descending" in e || (e.descending = !1), e.limit = 0 === e.limit ? 1 : e.limit, 
                e.complete = n;
                var r = this.db._changes(e);
                if (r && "function" == typeof r.cancel) {
                    var s = t.cancel;
                    t.cancel = c(function(e) {
                        r.cancel(), s.apply(this, e);
                    });
                }
            }, r.prototype.filterChanges = function(e) {
                var t = this, n = e.complete;
                if ("_view" === e.filter) {
                    if (!e.view || "string" != typeof e.view) {
                        var r = l.error(l.BAD_REQUEST, "`view` filter parameter not found or invalid.");
                        return n(r);
                    }
                    var o = v(e.view);
                    this.db.get("_design/" + o[0], function(r, i) {
                        if (t.isCancelled) return n(null, {
                            status: "cancelled"
                        });
                        if (r) return n(l.generateErrorFromResponse(r));
                        var s = i && i.views && i.views[o[1]] && i.views[o[1]].map;
                        return s ? (e.filter = p(s), void t.doChanges(e)) : n(l.error(l.MISSING_DOC, i.views ? "missing json key: " + o[1] : "missing json key: views"));
                    });
                } else {
                    var i = v(e.filter);
                    if (!i) return t.doChanges(e);
                    this.db.get("_design/" + i[0], function(r, o) {
                        if (t.isCancelled) return n(null, {
                            status: "cancelled"
                        });
                        if (r) return n(l.generateErrorFromResponse(r));
                        var s = o && o.filters && o.filters[i[1]];
                        return s ? (e.filter = h(s), void t.doChanges(e)) : n(l.error(l.MISSING_DOC, o && o.filters ? "missing json key: " + i[1] : "missing json key: filters"));
                    });
                }
            };
        }, {
            37: 37,
            38: 38,
            40: 40,
            41: 41,
            48: 48,
            53: 53,
            54: 54,
            61: 61,
            65: 65,
            71: 71,
            72: 72,
            91: 91,
            92: 92,
            97: 97
        } ],
        15: [ function(e, t, n) {
            "use strict";
            function r(e) {
                a() ? chrome.storage.onChanged.addListener(function(t) {
                    null != t.db_name && e.emit(t.dbName.newValue);
                }) : u() && ("undefined" != typeof addEventListener ? addEventListener("storage", function(t) {
                    e.emit(t.key);
                }) : window.attachEvent("storage", function(t) {
                    e.emit(t.key);
                }));
            }
            function o() {
                i.call(this), this._listeners = {}, r(this);
            }
            var i = e(92).EventEmitter, s = e(97), a = e(47), u = e(46), c = e(64);
            s(o, i), o.prototype.addListener = function(e, t, n, r) {
                function o() {
                    if (i._listeners[t]) {
                        if (s) return void (s = "waiting");
                        s = !0;
                        var e = c(r, [ "style", "include_docs", "attachments", "conflicts", "filter", "doc_ids", "view", "since", "query_params", "binary" ]);
                        n.changes(e).on("change", function(e) {
                            e.seq > r.since && !r.cancelled && (r.since = e.seq, r.onChange(e));
                        }).on("complete", function() {
                            "waiting" === s && setTimeout(function() {
                                o();
                            }, 0), s = !1;
                        }).on("error", function() {
                            s = !1;
                        });
                    }
                }
                if (!this._listeners[t]) {
                    var i = this, s = !1;
                    this._listeners[t] = o, this.on(e, o);
                }
            }, o.prototype.removeListener = function(e, t) {
                t in this._listeners && i.prototype.removeListener.call(this, e, this._listeners[t]);
            }, o.prototype.notifyLocalWindows = function(e) {
                a() ? chrome.storage.local.set({
                    dbName: e
                }) : u() && (localStorage[e] = "a" === localStorage[e] ? "b" : "a");
            }, o.prototype.notify = function(e) {
                this.emit(e), this.notifyLocalWindows(e);
            }, t.exports = o;
        }, {
            46: 46,
            47: 47,
            64: 64,
            92: 92,
            97: 97
        } ],
        16: [ function(e, t, n) {
            (function(n) {
                "use strict";
                function r(e) {
                    e && n.debug && console.error(e);
                }
                function o(e, t) {
                    function n() {
                        i.emit("destroyed", o), i.emit(o, "destroyed");
                    }
                    function r() {
                        e.removeListener("destroyed", n), e.emit("destroyed", e);
                    }
                    var o = t.originalName, i = e.constructor, s = i._destructionListeners;
                    e.once("destroyed", n), s.has(o) || s.set(o, []), s.get(o).push(r);
                }
                function i(e, t, n) {
                    if (!(this instanceof i)) return new i(e, t, n);
                    var a = this;
                    ("function" == typeof t || "undefined" == typeof t) && (n = t, t = {}), e && "object" == typeof e && (t = e, 
                    e = void 0), "undefined" == typeof n && (n = r), e = e || t.name, t = d(t), delete t.name, 
                    this.__opts = t;
                    var h = n;
                    a.auto_compaction = t.auto_compaction, a.prefix = i.prefix, u.call(a), a.taskqueue = new c();
                    var p = new l(function(r, u) {
                        n = function(e, t) {
                            return e ? u(e) : (delete t.then, void r(t));
                        }, t = d(t);
                        var c, l, h = t.name || e;
                        return function() {
                            try {
                                if ("string" != typeof h) throw l = new Error("Missing/invalid DB name"), l.code = 400, 
                                l;
                                if (c = i.parseAdapter(h, t), t.originalName = h, t.name = c.name, t.prefix && "http" !== c.adapter && "https" !== c.adapter && (t.name = t.prefix + t.name), 
                                t.adapter = t.adapter || c.adapter, a._adapter = t.adapter, s("pouchdb:adapter")("Picked adapter: " + t.adapter), 
                                a._db_name = h, !i.adapters[t.adapter]) throw l = new Error("Adapter is missing"), 
                                l.code = 404, l;
                                if (!i.adapters[t.adapter].valid()) throw l = new Error("Invalid Adapter"), l.code = 404, 
                                l;
                            } catch (e) {
                                a.taskqueue.fail(e);
                            }
                        }(), l ? u(l) : (a.adapter = t.adapter, a.replicate = {}, a.replicate.from = function(e, t, n) {
                            return a.constructor.replicate(e, a, t, n);
                        }, a.replicate.to = function(e, t, n) {
                            return a.constructor.replicate(a, e, t, n);
                        }, a.sync = function(e, t, n) {
                            return a.constructor.sync(a, e, t, n);
                        }, a.replicate.sync = a.sync, i.adapters[t.adapter].call(a, t, function(e) {
                            return e ? (a.taskqueue.fail(e), void n(e)) : (o(a, t), a.emit("created", a), i.emit("created", t.originalName), 
                            a.taskqueue.ready(a), void n(null, a));
                        }), void (f() && cordova.fireWindowEvent(t.name + "_pouch", {})));
                    });
                    p.then(function(e) {
                        h(null, e);
                    }, h), a.then = p.then.bind(p), a["catch"] = p["catch"].bind(p);
                }
                var s = e(94), a = e(97), u = e(1), c = e(88), f = e(51), l = e(65), d = e(37);
                a(i, u), i.debug = s, t.exports = i;
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
            1: 1,
            37: 37,
            51: 51,
            65: 65,
            88: 88,
            94: 94,
            97: 97
        } ],
        17: [ function(e, t, n) {
            "use strict";
            var r = e(65), o = e(68), i = e(91);
            t.exports = function(t, n) {
                function s(e, t, n) {
                    if (a.enabled) {
                        for (var r = [ e._db_name, t ], o = 0; o < n.length - 1; o++) r.push(n[o]);
                        a.apply(null, r);
                        var i = n[n.length - 1];
                        n[n.length - 1] = function(n, r) {
                            var o = [ e._db_name, t ];
                            o = o.concat(n ? [ "error", n ] : [ "success", r ]), a.apply(null, o), i(n, r);
                        };
                    }
                }
                var a = e(94)("pouchdb:api");
                return o(i(function(e) {
                    if (this._closed) return r.reject(new Error("database is closed"));
                    var o = this;
                    return s(o, t, e), this.taskqueue.isReady ? n.apply(this, e) : new r(function(n, r) {
                        o.taskqueue.addTask(function(i) {
                            i ? r(i) : n(o[t].apply(o, e));
                        });
                    });
                }));
            };
        }, {
            65: 65,
            68: 68,
            91: 91,
            94: 94
        } ],
        18: [ function(e, t, n) {
            "use strict";
            function r(e, t) {
                function n(t, n, r) {
                    if (!e.binary && e.json && "string" == typeof t) try {
                        t = JSON.parse(t);
                    } catch (o) {
                        return r(o);
                    }
                    Array.isArray(t) && (t = t.map(function(e) {
                        return e.error || e.missing ? s.generateErrorFromResponse(e) : e;
                    })), e.binary && u(t, n), r(null, t, n);
                }
                function r(e, t) {
                    var n, r;
                    if (e.code && e.status) {
                        var o = new Error(e.message || e.code);
                        return o.status = e.status, t(o);
                    }
                    try {
                        n = JSON.parse(e.responseText), r = s.generateErrorFromResponse(n);
                    } catch (i) {
                        r = s.generateErrorFromResponse(e);
                    }
                    t(r);
                }
                e = a(e);
                var l = {
                    method: "GET",
                    headers: {},
                    json: !0,
                    processData: !0,
                    timeout: 1e4,
                    cache: !1
                };
                return e = i(l, e), e.json && (e.binary || (e.headers.Accept = "application/json"), 
                e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json"), e.binary && (e.encoding = null, 
                e.json = !1), e.processData || (e.json = !1), o(e, function(o, i, a) {
                    if (o) {
                        if (i) {
                            var u = "undefined" != typeof document && document.location.origin, l = u && 0 !== e.url.indexOf(u);
                            l && 0 === i.statusCode && f(), o.status = i.statusCode;
                        } else o.status = 400;
                        return r(o, t);
                    }
                    var d, h = i.headers && i.headers["content-type"], p = a || c();
                    if (!e.binary && (e.json || !e.processData) && "object" != typeof p && (/json/.test(h) || /^[\s]*\{/.test(p) && /\}[\s]*$/.test(p))) try {
                        p = JSON.parse(p.toString());
                    } catch (v) {}
                    i.statusCode >= 200 && i.statusCode < 300 ? n(p, i, t) : (d = s.generateErrorFromResponse(p), 
                    d.status = i.statusCode, t(d));
                });
            }
            var o = e(24), i = e(98).extend, s = e(48), a = e(37), u = e(19), c = e(20), f = e(21);
            t.exports = r;
        }, {
            19: 19,
            20: 20,
            21: 21,
            24: 24,
            37: 37,
            48: 48,
            98: 98
        } ],
        19: [ function(e, t, n) {
            "use strict";
            t.exports = function() {};
        }, {} ],
        20: [ function(e, t, n) {
            "use strict";
            t.exports = function() {
                return "";
            };
        }, {} ],
        21: [ function(e, t, n) {
            (function(e) {
                "use strict";
                t.exports = function() {
                    "console" in e && "warn" in console && console.warn("PouchDB: the remote database may not have CORS enabled.If not please enable CORS: http://pouchdb.com/errors.html#no_access_control_allow_origin_header");
                };
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {} ],
        22: [ function(e, t, n) {
            (function(e) {
                "use strict";
                t.exports = function(t, n) {
                    "console" in e && "info" in console && console.info("The above " + t + " is totally normal. " + n);
                };
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {} ],
        23: [ function(e, t, n) {
            "use strict";
            var r = e(18);
            t.exports = function(e, t) {
                if (("POST" === e.method || "GET" === e.method) && !e.cache) {
                    var n = -1 !== e.url.indexOf("?");
                    e.url += (n ? "&" : "?") + "_nonce=" + Date.now();
                }
                return r(e, t);
            };
        }, {
            18: 18
        } ],
        24: [ function(e, t, n) {
            "use strict";
            function r() {
                for (var e = {}, t = new c(function(t, n) {
                    e.resolve = t, e.reject = n;
                }), n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.promise = t, c.resolve().then(function() {
                    return fetch.apply(null, n);
                }).then(function(t) {
                    e.resolve(t);
                })["catch"](function(t) {
                    e.reject(t);
                }), e;
            }
            function o(e, t) {
                var n, o, i, s = new Headers(), a = {
                    method: e.method,
                    credentials: "include",
                    headers: s
                };
                return e.json && (s.set("Accept", "application/json"), s.set("Content-Type", e.headers["Content-Type"] || "application/json")), 
                e.body && e.body instanceof Blob ? u(e.body, function(e) {
                    a.body = e;
                }) : e.body && e.processData && "string" != typeof e.body ? a.body = JSON.stringify(e.body) : "body" in e ? a.body = e.body : a.body = null, 
                Object.keys(e.headers).forEach(function(t) {
                    e.headers.hasOwnProperty(t) && s.set(t, e.headers[t]);
                }), n = r(e.url, a), e.timeout > 0 && (o = setTimeout(function() {
                    n.reject(new Error("Load timeout for resource: " + e.url));
                }, e.timeout)), n.promise.then(function(t) {
                    return i = {
                        statusCode: t.status
                    }, e.timeout > 0 && clearTimeout(o), i.statusCode >= 200 && i.statusCode < 300 ? e.binary ? t.blob() : t.text() : t.json();
                }).then(function(e) {
                    i.statusCode >= 200 && i.statusCode < 300 ? t(null, i, e) : t(e, i);
                })["catch"](function(e) {
                    t(e, i);
                }), {
                    abort: n.reject
                };
            }
            function i(e, t) {
                var n, r, o, i = function() {
                    n.abort();
                };
                n = e.xhr ? new e.xhr() : new XMLHttpRequest(), n.open(e.method, e.url), n.withCredentials = "withCredentials" in e ? e.withCredentials : !0, 
                "GET" === e.method ? delete e.headers["Content-Type"] : e.json && (e.headers.Accept = "application/json", 
                e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", e.body && e.processData && "string" != typeof e.body && (e.body = JSON.stringify(e.body))), 
                e.binary && (n.responseType = "arraybuffer"), "body" in e || (e.body = null);
                for (var s in e.headers) e.headers.hasOwnProperty(s) && n.setRequestHeader(s, e.headers[s]);
                return e.timeout > 0 && (r = setTimeout(i, e.timeout), n.onprogress = function() {
                    clearTimeout(r), r = setTimeout(i, e.timeout);
                }, "undefined" == typeof o && (o = -1 !== Object.keys(n).indexOf("upload") && "undefined" != typeof n.upload), 
                o && (n.upload.onprogress = n.onprogress)), n.onreadystatechange = function() {
                    if (4 === n.readyState) {
                        var r = {
                            statusCode: n.status
                        };
                        if (n.status >= 200 && n.status < 300) {
                            var o;
                            o = e.binary ? a([ n.response || "" ], {
                                type: n.getResponseHeader("Content-Type")
                            }) : n.responseText, t(null, r, o);
                        } else {
                            var i = {};
                            try {
                                i = JSON.parse(n.response);
                            } catch (s) {}
                            t(i, r);
                        }
                    }
                }, e.body && e.body instanceof Blob ? u(e.body, function(e) {
                    n.send(e);
                }) : n.send(e.body), {
                    abort: i
                };
            }
            function s() {
                try {
                    return new XMLHttpRequest(), !0;
                } catch (e) {
                    return !1;
                }
            }
            var a = e(30), u = e(34), c = e(65), f = s();
            t.exports = function(e, t) {
                return f || e.xhr ? i(e, t) : o(e, t);
            };
        }, {
            30: 30,
            34: 34,
            65: 65
        } ],
        25: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = 0; r > o; o++) t += String.fromCharCode(n[o]);
                return t;
            };
        }, {} ],
        26: [ function(e, t, n) {
            "use strict";
            n.atob = function(e) {
                return atob(e);
            }, n.btoa = function(e) {
                return btoa(e);
            };
        }, {} ],
        27: [ function(e, t, n) {
            "use strict";
            var r = e(26).atob, o = e(29);
            t.exports = function(e, t) {
                return o(r(e), t);
            };
        }, {
            26: 26,
            29: 29
        } ],
        28: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; t > o; o++) r[o] = e.charCodeAt(o);
                return n;
            };
        }, {} ],
        29: [ function(e, t, n) {
            "use strict";
            var r = e(30), o = e(28);
            t.exports = function(e, t) {
                return r([ o(e) ], {
                    type: t
                });
            };
        }, {
            28: 28,
            30: 30
        } ],
        30: [ function(e, t, n) {
            "use strict";
            function r(e, t) {
                e = e || [], t = t || {};
                try {
                    return new Blob(e, t);
                } catch (n) {
                    if ("TypeError" !== n.name) throw n;
                    for (var r = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, o = new r(), i = 0; i < e.length; i += 1) o.append(e[i]);
                    return o.getBlob(t.type);
                }
            }
            t.exports = r;
        }, {} ],
        31: [ function(e, t, n) {
            "use strict";
            var r = e(65), o = e(35), i = e(26).btoa;
            t.exports = function(e) {
                return new r(function(t) {
                    o(e, function(e) {
                        t(i(e));
                    });
                });
            };
        }, {
            26: 26,
            35: 35,
            65: 65
        } ],
        32: [ function(e, t, n) {
            "use strict";
            function r(e) {
                if ("function" == typeof e.slice) return e.slice(0);
                var t = new ArrayBuffer(e.byteLength), n = new Uint8Array(t), r = new Uint8Array(e);
                return n.set(r), t;
            }
            t.exports = function(e) {
                if (e instanceof ArrayBuffer) return r(e);
                var t = e.size, n = e.type;
                return "function" == typeof e.slice ? e.slice(0, t, n) : e.webkitSlice(0, t, n);
            };
        }, {} ],
        33: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                return e instanceof ArrayBuffer || "undefined" != typeof Blob && e instanceof Blob;
            };
        }, {} ],
        34: [ function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                if ("undefined" == typeof FileReader) return t(new FileReaderSync().readAsArrayBuffer(e));
                var n = new FileReader();
                n.onloadend = function(e) {
                    var n = e.target.result || new ArrayBuffer(0);
                    t(n);
                }, n.readAsArrayBuffer(e);
            };
        }, {} ],
        35: [ function(e, t, n) {
            "use strict";
            var r = e(25);
            t.exports = function(e, t) {
                if ("undefined" == typeof FileReader) return t(r(new FileReaderSync().readAsArrayBuffer(e)));
                var n = new FileReader(), o = "function" == typeof n.readAsBinaryString;
                n.onloadend = function(e) {
                    var n = e.target.result || "";
                    return o ? t(n) : void t(r(n));
                }, o ? n.readAsBinaryString(e) : n.readAsArrayBuffer(e);
            };
        }, {
            25: 25
        } ],
        36: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                function r() {
                    var e = [];
                    l.forEach(function(t) {
                        t.docs.forEach(function(n) {
                            e.push({
                                id: t.id,
                                docs: [ n ]
                            });
                        });
                    }), n(null, {
                        results: e
                    });
                }
                function i() {
                    ++f === c && r();
                }
                function s(e, t, n) {
                    l[e] = {
                        id: t,
                        docs: n
                    }, i();
                }
                var a = Array.isArray(t) ? t : t.docs, u = {};
                a.forEach(function(e) {
                    e.id in u ? u[e.id].push(e) : u[e.id] = [ e ];
                });
                var c = Object.keys(u).length, f = 0, l = new Array(c);
                Object.keys(u).forEach(function(n, r) {
                    var i = u[n], a = o(i[0], [ "atts_since", "attachments" ]);
                    a.open_revs = i.map(function(e) {
                        return e.rev;
                    }), [ "revs", "attachments", "binary" ].forEach(function(e) {
                        e in t && (a[e] = t[e]);
                    }), e.get(n, a, function(e, t) {
                        s(r, n, e ? [ {
                            error: e
                        } ] : t);
                    });
                });
            }
            var o = e(64);
            t.exports = r;
        }, {
            64: 64
        } ],
        37: [ function(e, t, n) {
            "use strict";
            var r = e(33), o = e(32);
            t.exports = function i(e) {
                var t, n, s;
                if (!e || "object" != typeof e) return e;
                if (Array.isArray(e)) {
                    for (t = [], n = 0, s = e.length; s > n; n++) t[n] = i(e[n]);
                    return t;
                }
                if (e instanceof Date) return e.toISOString();
                if (r(e)) return o(e);
                t = {};
                for (n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var a = i(e[n]);
                    "undefined" != typeof a && (t[n] = a);
                }
                return t;
            };
        }, {
            32: 32,
            33: 33
        } ],
        38: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return e.ids;
            }
            function o(e, t) {
                t || (t = i(e));
                for (var n, o = t.substring(t.indexOf("-") + 1), s = e.rev_tree.map(r); n = s.pop(); ) {
                    if (n[0] === o) return !!n[1].deleted;
                    s = s.concat(n[2]);
                }
            }
            var i = e(60);
            t.exports = o;
        }, {
            60: 60
        } ],
        39: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return /^_local/.test(e);
            }
            t.exports = r;
        }, {} ],
        40: [ function(e, t, n) {
            "use strict";
            var r = e(41);
            t.exports = function(e) {
                var t = r(e);
                return t ? t.join("/") : null;
            };
        }, {
            41: 41
        } ],
        41: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                if (!e) return null;
                var t = e.split("/");
                return 2 === t.length ? t : 1 === t.length ? [ e, e ] : null;
            };
        }, {} ],
        42: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return e.reduce(function(e, t) {
                    return e[t] = !0, e;
                }, {});
            }
            function o(e) {
                if (!/^\d+\-./.test(e)) return s.error(s.INVALID_REV);
                var t = e.indexOf("-"), n = e.substring(0, t), r = e.substring(t + 1);
                return {
                    prefix: parseInt(n, 10),
                    id: r
                };
            }
            function i(e, t) {
                for (var n = e.start - e.ids.length + 1, r = e.ids, o = [ r[0], t, [] ], i = 1, s = r.length; s > i; i++) o = [ r[i], {
                    status: "missing"
                }, [ o ] ];
                return [ {
                    pos: n,
                    ids: o
                } ];
            }
            var s = e(48), a = e(70), u = r([ "_id", "_rev", "_attachments", "_deleted", "_revisions", "_revs_info", "_conflicts", "_deleted_conflicts", "_local_seq", "_rev_tree", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats", "_removed" ]), c = r([ "_attachments", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats" ]);
            n.invalidIdError = function(e) {
                var t;
                if (e ? "string" != typeof e ? t = s.error(s.INVALID_ID) : /^_/.test(e) && !/^_(design|local)/.test(e) && (t = s.error(s.RESERVED_ID)) : t = s.error(s.MISSING_ID), 
                t) throw t;
            }, n.parseDoc = function(e, t) {
                var r, f, l, d = {
                    status: "available"
                };
                if (e._deleted && (d.deleted = !0), t) if (e._id || (e._id = a()), f = a(32, 16).toLowerCase(), 
                e._rev) {
                    if (l = o(e._rev), l.error) return l;
                    e._rev_tree = [ {
                        pos: l.prefix,
                        ids: [ l.id, {
                            status: "missing"
                        }, [ [ f, d, [] ] ] ]
                    } ], r = l.prefix + 1;
                } else e._rev_tree = [ {
                    pos: 1,
                    ids: [ f, d, [] ]
                } ], r = 1; else if (e._revisions && (e._rev_tree = i(e._revisions, d), r = e._revisions.start, 
                f = e._revisions.ids[0]), !e._rev_tree) {
                    if (l = o(e._rev), l.error) return l;
                    r = l.prefix, f = l.id, e._rev_tree = [ {
                        pos: r,
                        ids: [ f, d, [] ]
                    } ];
                }
                n.invalidIdError(e._id), e._rev = r + "-" + f;
                var h = {
                    metadata: {},
                    data: {}
                };
                for (var p in e) if (Object.prototype.hasOwnProperty.call(e, p)) {
                    var v = "_" === p[0];
                    if (v && !u[p]) {
                        var _ = s.error(s.DOC_VALIDATION, p);
                        throw _.message = s.DOC_VALIDATION.message + ": " + p, _;
                    }
                    v && !c[p] ? h.metadata[p.slice(1)] = e[p] : h.data[p] = e[p];
                }
                return h;
            };
        }, {
            48: 48,
            70: 70
        } ],
        43: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                function r(e) {
                    try {
                        return o.atob(e);
                    } catch (t) {
                        var n = u.error(u.BAD_ARG, "Attachments need to be base64 encoded");
                        return {
                            error: n
                        };
                    }
                }
                function f(e, n) {
                    if (e.stub) return n();
                    if ("string" == typeof e.data) {
                        var u = r(e.data);
                        if (u.error) return n(u.error);
                        e.length = u.length, "blob" === t ? e.data = a(u, e.content_type) : "base64" === t ? e.data = o.btoa(u) : e.data = u, 
                        c(u).then(function(t) {
                            e.digest = "md5-" + t, n();
                        });
                    } else s(e.data, function(r) {
                        "binary" === t ? e.data = i(r) : "base64" === t && (e.data = o.btoa(i(r))), c(r).then(function(t) {
                            e.digest = "md5-" + t, e.length = r.byteLength, n();
                        });
                    });
                }
                function l() {
                    h++, e.length === h && (d ? n(d) : n());
                }
                if (!e.length) return n();
                var d, h = 0;
                e.forEach(function(e) {
                    function t(e) {
                        d = e, r++, r === n.length && l();
                    }
                    var n = e.data && e.data._attachments ? Object.keys(e.data._attachments) : [], r = 0;
                    if (!n.length) return l();
                    for (var o in e.data._attachments) e.data._attachments.hasOwnProperty(o) && f(e.data._attachments[o], t);
                });
            }
            var o = e(26), i = e(25), s = e(34), a = e(29), u = e(48), c = e(52);
            t.exports = r;
        }, {
            25: 25,
            26: 26,
            29: 29,
            34: 34,
            48: 48,
            52: 52
        } ],
        44: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r, f, d, h, p) {
                function v(e, t, n) {
                    var r = u(e.metadata), i = s(e.metadata, r);
                    if ("was_delete" in h && i) return f[t] = o.error(o.MISSING_DOC, "deleted"), n();
                    var a = i ? 0 : 1;
                    d(e, r, i, i, !1, a, t, n);
                }
                function _() {
                    ++g === b && p && p();
                }
                var y = h.new_edits, m = new l(), g = 0, b = e.length;
                e.forEach(function(e, n) {
                    if (e._id && a(e._id)) {
                        var o = e._deleted ? "_removeLocal" : "_putLocal";
                        return void t[o](e, {
                            ctx: r
                        }, function(e, t) {
                            f[n] = e || t, _();
                        });
                    }
                    var i = e.metadata.id;
                    m.has(i) ? (b--, m.get(i).push([ e, n ])) : m.set(i, [ [ e, n ] ]);
                }), m.forEach(function(e, t) {
                    function r() {
                        ++s < e.length ? o() : _();
                    }
                    function o() {
                        var o = e[s], a = o[0], u = o[1];
                        if (n.has(t)) i(n.get(t), a, f, u, r, d, y); else {
                            var l = c([], a.metadata.rev_tree[0], 1e3);
                            a.metadata.rev_tree = l.tree, v(a, u, r);
                        }
                    }
                    var s = 0;
                    o();
                });
            }
            var o = e(48), i = e(45), s = e(38), a = e(39), u = e(60), c = e(56), f = e(103), l = f.Map;
            t.exports = r;
        }, {
            103: 103,
            38: 38,
            39: 39,
            45: 45,
            48: 48,
            56: 56,
            60: 60
        } ],
        45: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r, f, l, d) {
                if (c(e.rev_tree, t.metadata.rev)) return n[r] = t, f();
                var h = e.winningRev || a(e), p = "deleted" in e ? e.deleted : i(e, h), v = "deleted" in t.metadata ? t.metadata.deleted : i(t.metadata), _ = /^1-/.test(t.metadata.rev);
                if (p && !v && d && _) {
                    var y = t.data;
                    y._rev = h, y._id = t.metadata.id, t = s(y, d);
                }
                var m = u(e.rev_tree, t.metadata.rev_tree[0], 1e3), g = d && (p && v || !p && "new_leaf" !== m.conflicts || p && !v && "new_branch" === m.conflicts);
                if (g) {
                    var b = o.error(o.REV_CONFLICT);
                    return n[r] = b, f();
                }
                var E = t.metadata.rev;
                t.metadata.rev_tree = m.tree, e.rev_map && (t.metadata.rev_map = e.rev_map);
                var w, S = a(t.metadata), T = i(t.metadata, S), x = p === T ? 0 : T > p ? -1 : 1;
                w = E === S ? T : i(t.metadata, E), l(t, S, T, w, !0, x, r, f);
            }
            var o = e(48), i = e(38), s = e(42).parseDoc, a = e(60), u = e(56), c = e(57);
            t.exports = r;
        }, {
            38: 38,
            42: 42,
            48: 48,
            56: 56,
            57: 57,
            60: 60
        } ],
        46: [ function(e, t, n) {
            "use strict";
            var r, o = e(47);
            if (o()) r = !1; else try {
                localStorage.setItem("_pouch_check_localstorage", 1), r = !!localStorage.getItem("_pouch_check_localstorage");
            } catch (i) {
                r = !1;
            }
            t.exports = function() {
                return r;
            };
        }, {
            47: 47
        } ],
        47: [ function(e, t, n) {
            "use strict";
            t.exports = function() {
                return "undefined" != typeof chrome && "undefined" != typeof chrome.storage && "undefined" != typeof chrome.storage.local;
            };
        }, {} ],
        48: [ function(e, t, n) {
            "use strict";
            function r(e) {
                Error.call(this, e.reason), this.status = e.status, this.name = e.error, this.message = e.reason, 
                this.error = !0;
            }
            var o = e(97);
            o(r, Error), r.prototype.toString = function() {
                return JSON.stringify({
                    status: this.status,
                    name: this.name,
                    message: this.message,
                    reason: this.reason
                });
            }, n.UNAUTHORIZED = new r({
                status: 401,
                error: "unauthorized",
                reason: "Name or password is incorrect."
            }), n.MISSING_BULK_DOCS = new r({
                status: 400,
                error: "bad_request",
                reason: "Missing JSON list of 'docs'"
            }), n.MISSING_DOC = new r({
                status: 404,
                error: "not_found",
                reason: "missing"
            }), n.REV_CONFLICT = new r({
                status: 409,
                error: "conflict",
                reason: "Document update conflict"
            }), n.INVALID_ID = new r({
                status: 400,
                error: "invalid_id",
                reason: "_id field must contain a string"
            }), n.MISSING_ID = new r({
                status: 412,
                error: "missing_id",
                reason: "_id is required for puts"
            }), n.RESERVED_ID = new r({
                status: 400,
                error: "bad_request",
                reason: "Only reserved document ids may start with underscore."
            }), n.NOT_OPEN = new r({
                status: 412,
                error: "precondition_failed",
                reason: "Database not open"
            }), n.UNKNOWN_ERROR = new r({
                status: 500,
                error: "unknown_error",
                reason: "Database encountered an unknown error"
            }), n.BAD_ARG = new r({
                status: 500,
                error: "badarg",
                reason: "Some query argument is invalid"
            }), n.INVALID_REQUEST = new r({
                status: 400,
                error: "invalid_request",
                reason: "Request was invalid"
            }), n.QUERY_PARSE_ERROR = new r({
                status: 400,
                error: "query_parse_error",
                reason: "Some query parameter is invalid"
            }), n.DOC_VALIDATION = new r({
                status: 500,
                error: "doc_validation",
                reason: "Bad special document member"
            }), n.BAD_REQUEST = new r({
                status: 400,
                error: "bad_request",
                reason: "Something wrong with the request"
            }), n.NOT_AN_OBJECT = new r({
                status: 400,
                error: "bad_request",
                reason: "Document must be a JSON object"
            }), n.DB_MISSING = new r({
                status: 404,
                error: "not_found",
                reason: "Database not found"
            }), n.IDB_ERROR = new r({
                status: 500,
                error: "indexed_db_went_bad",
                reason: "unknown"
            }), n.WSQ_ERROR = new r({
                status: 500,
                error: "web_sql_went_bad",
                reason: "unknown"
            }), n.LDB_ERROR = new r({
                status: 500,
                error: "levelDB_went_went_bad",
                reason: "unknown"
            }), n.FORBIDDEN = new r({
                status: 403,
                error: "forbidden",
                reason: "Forbidden by design doc validate_doc_update function"
            }), n.INVALID_REV = new r({
                status: 400,
                error: "bad_request",
                reason: "Invalid rev format"
            }), n.FILE_EXISTS = new r({
                status: 412,
                error: "file_exists",
                reason: "The database could not be created, the file already exists."
            }), n.MISSING_STUB = new r({
                status: 412,
                error: "missing_stub"
            }), n.error = function(e, t, n) {
                function o(t) {
                    for (var r in e) "function" != typeof e[r] && (this[r] = e[r]);
                    void 0 !== n && (this.name = n), void 0 !== t && (this.reason = t);
                }
                return o.prototype = r.prototype, new o(t);
            }, n.getErrorTypeByProp = function(e, t, r) {
                var o = n, i = Object.keys(o).filter(function(n) {
                    var r = o[n];
                    return "function" != typeof r && r[e] === t;
                }), s = r && i.filter(function(e) {
                    var t = o[e];
                    return t.message === r;
                })[0] || i[0];
                return s ? o[s] : null;
            }, n.generateErrorFromResponse = function(e) {
                var t, r, o, i, s, a = n;
                return r = e.error === !0 && "string" == typeof e.name ? e.name : e.error, s = e.reason, 
                o = a.getErrorTypeByProp("name", r, s), e.missing || "missing" === s || "deleted" === s || "not_found" === r ? o = a.MISSING_DOC : "doc_validation" === r ? (o = a.DOC_VALIDATION, 
                i = s) : "bad_request" === r && o.message !== s && (o = a.BAD_REQUEST), o || (o = a.getErrorTypeByProp("status", e.status, s) || a.UNKNOWN_ERROR), 
                t = a.error(o, s, r), i && (t.message = i), e.id && (t.id = e.id), e.status && (t.status = e.status), 
                e.missing && (t.missing = e.missing), t;
            };
        }, {
            97: 97
        } ],
        49: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                try {
                    return !e(t, n);
                } catch (r) {
                    var i = "Filter function threw: " + r.toString();
                    return o.error(o.BAD_REQUEST, i);
                }
            }
            var o = e(48);
            t.exports = function(e) {
                var t = {}, n = e.filter && "function" == typeof e.filter;
                return t.query = e.query_params, function(o) {
                    o.doc || (o.doc = {});
                    var i = n && r(e.filter, o.doc, t);
                    if ("object" == typeof i) return i;
                    if (i) return !1;
                    if (e.include_docs) {
                        if (!e.attachments) for (var s in o.doc._attachments) o.doc._attachments.hasOwnProperty(s) && (o.doc._attachments[s].stub = !0);
                    } else delete o.doc;
                    return !0;
                };
            };
        }, {
            48: 48
        } ],
        50: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                for (var t = [], n = 0, r = e.length; r > n; n++) t = t.concat(e[n]);
                return t;
            };
        }, {} ],
        51: [ function(e, t, n) {
            "use strict";
            t.exports = function() {
                return "undefined" != typeof cordova || "undefined" != typeof PhoneGap || "undefined" != typeof phonegap;
            };
        }, {} ],
        52: [ function(e, t, n) {
            (function(n) {
                "use strict";
                function r(e) {
                    return String.fromCharCode(255 & e) + String.fromCharCode(e >>> 8 & 255) + String.fromCharCode(e >>> 16 & 255) + String.fromCharCode(e >>> 24 & 255);
                }
                function o(e) {
                    for (var t = "", n = 0, o = e.length; o > n; n++) t += r(e[n]);
                    return u.btoa(t);
                }
                function i(e, t, n, r) {
                    (n > 0 || r < t.byteLength) && (t = new Uint8Array(t, n, Math.min(r, t.byteLength) - n)), 
                    e.append(t);
                }
                function s(e, t, n, r) {
                    (n > 0 || r < t.length) && (t = t.substring(n, r)), e.appendBinary(t);
                }
                var a = e(68), u = e(26), c = e(104), f = n.setImmediate || n.setTimeout, l = 32768;
                t.exports = a(function(e, t) {
                    function n() {
                        var r = h * u, i = r + u;
                        if (h++, d > h) v(p, e, r, i), f(n); else {
                            v(p, e, r, i);
                            var s = p.end(!0), a = o(s);
                            t(null, a), p.destroy();
                        }
                    }
                    var r = "string" == typeof e, a = r ? e.length : e.byteLength, u = Math.min(l, a), d = Math.ceil(a / u), h = 0, p = r ? new c() : new c.ArrayBuffer(), v = r ? s : i;
                    n();
                });
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {
            104: 104,
            26: 26,
            68: 68
        } ],
        53: [ function(e, t, n) {
            "use strict";
            var r = e(60), o = e(54);
            t.exports = function(e) {
                for (var t = r(e), n = o(e.rev_tree), i = [], s = 0, a = n.length; a > s; s++) {
                    var u = n[s];
                    u.rev === t || u.opts.deleted || i.push(u.rev);
                }
                return i;
            };
        }, {
            54: 54,
            60: 60
        } ],
        54: [ function(e, t, n) {
            "use strict";
            function r(e, t) {
                return e.pos - t.pos;
            }
            var o = e(59);
            t.exports = function(e) {
                var t = [];
                o(e, function(e, n, r, o, i) {
                    e && t.push({
                        rev: n + "-" + r,
                        pos: n,
                        opts: i
                    });
                }), t.sort(r).reverse();
                for (var n = 0, i = t.length; i > n; n++) delete t[n].pos;
                return t;
            };
        }, {
            59: 59
        } ],
        55: [ function(e, t, n) {
            "use strict";
            var r = e(59);
            t.exports = function(e) {
                var t = [];
                return r(e.rev_tree, function(e, n, r, o, i) {
                    "available" !== i.status || e || (t.push(n + "-" + r), i.status = "missing");
                }), t;
            };
        }, {
            59: 59
        } ],
        56: [ function(e, t, n) {
            "use strict";
            function r(e, t) {
                return e.pos - t.pos;
            }
            function o(e, t, n) {
                for (var r, o = 0, i = e.length; i > o; ) r = o + i >>> 1, n(e[r], t) < 0 ? o = r + 1 : i = r;
                return o;
            }
            function i(e, t, n) {
                var r = o(e, t, n);
                e.splice(r, 0, t);
            }
            function s(e, t) {
                for (var n, r, o = t, i = e.length; i > o; o++) {
                    var s = e[o], a = [ s.id, s.opts, [] ];
                    r ? (r[2].push(a), r = a) : n = r = a;
                }
                return n;
            }
            function a(e, t) {
                return e[0] < t[0] ? -1 : 1;
            }
            function u(e, t) {
                for (var n = [ {
                    tree1: e,
                    tree2: t
                } ], r = !1; n.length > 0; ) {
                    var o = n.pop(), s = o.tree1, u = o.tree2;
                    (s[1].status || u[1].status) && (s[1].status = "available" === s[1].status || "available" === u[1].status ? "available" : "missing");
                    for (var c = 0; c < u[2].length; c++) if (s[2][0]) {
                        for (var f = !1, l = 0; l < s[2].length; l++) s[2][l][0] === u[2][c][0] && (n.push({
                            tree1: s[2][l],
                            tree2: u[2][c]
                        }), f = !0);
                        f || (r = "new_branch", i(s[2], u[2][c], a));
                    } else r = "new_leaf", s[2][0] = u[2][c];
                }
                return {
                    conflicts: r,
                    tree: e
                };
            }
            function c(e, t, n) {
                var o, i = [], s = !1, a = !1;
                if (!e.length) return {
                    tree: [ t ],
                    conflicts: "new_leaf"
                };
                for (var c = 0, f = e.length; f > c; c++) {
                    var l = e[c];
                    if (l.pos === t.pos && l.ids[0] === t.ids[0]) o = u(l.ids, t.ids), i.push({
                        pos: l.pos,
                        ids: o.tree
                    }), s = s || o.conflicts, a = !0; else if (n !== !0) {
                        var d = l.pos < t.pos ? l : t, h = l.pos < t.pos ? t : l, p = h.pos - d.pos, v = [], _ = [];
                        for (_.push({
                            ids: d.ids,
                            diff: p,
                            parent: null,
                            parentIdx: null
                        }); _.length > 0; ) {
                            var y = _.pop();
                            if (0 !== y.diff) for (var m = y.ids[2], g = 0, b = m.length; b > g; g++) _.push({
                                ids: m[g],
                                diff: y.diff - 1,
                                parent: y.ids,
                                parentIdx: g
                            }); else y.ids[0] === h.ids[0] && v.push(y);
                        }
                        var E = v[0];
                        E ? (o = u(E.ids, h.ids), E.parent[2][E.parentIdx] = o.tree, i.push({
                            pos: d.pos,
                            ids: d.ids
                        }), s = s || o.conflicts, a = !0) : i.push(l);
                    } else i.push(l);
                }
                return a || i.push(t), i.sort(r), {
                    tree: i,
                    conflicts: s || "internal_node"
                };
            }
            function f(e, t) {
                for (var n, r = l(e), o = 0, i = r.length; i > o; o++) {
                    var a = r[o], u = a.ids, f = Math.max(0, u.length - t), d = {
                        pos: a.pos + f,
                        ids: s(u, f)
                    };
                    n = n ? c(n, d, !0).tree : [ d ];
                }
                return n;
            }
            var l = e(58);
            t.exports = function(e, t, n) {
                var r = c(e, t);
                return {
                    tree: f(r.tree, n),
                    conflicts: r.conflicts
                };
            };
        }, {
            58: 58
        } ],
        57: [ function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                for (var n, r = e.slice(), o = t.split("-"), i = parseInt(o[0], 10), s = o[1]; n = r.pop(); ) {
                    if (n.pos === i && n.ids[0] === s) return !0;
                    for (var a = n.ids[2], u = 0, c = a.length; c > u; u++) r.push({
                        pos: n.pos + 1,
                        ids: a[u]
                    });
                }
                return !1;
            };
        }, {} ],
        58: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                for (var t, n = [], r = e.slice(); t = r.pop(); ) {
                    var o = t.pos, i = t.ids, s = i[0], a = i[1], u = i[2], c = 0 === u.length, f = t.history ? t.history.slice() : [];
                    f.push({
                        id: s,
                        opts: a
                    }), c && n.push({
                        pos: o + 1 - f.length,
                        ids: f
                    });
                    for (var l = 0, d = u.length; d > l; l++) r.push({
                        pos: o + 1,
                        ids: u[l],
                        history: f
                    });
                }
                return n.reverse();
            };
        }, {} ],
        59: [ function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                for (var n, r = e.slice(); n = r.pop(); ) for (var o = n.pos, i = n.ids, s = i[2], a = t(0 === s.length, o, i[0], n.ctx, i[1]), u = 0, c = s.length; c > u; u++) r.push({
                    pos: o + 1,
                    ids: s[u],
                    ctx: a
                });
            };
        }, {} ],
        60: [ function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                for (var t, n, r, o, i = e.rev_tree.slice(); o = i.pop(); ) {
                    var s = o.ids, a = s[2], u = o.pos;
                    if (a.length) for (var c = 0, f = a.length; f > c; c++) i.push({
                        pos: u + 1,
                        ids: a[c]
                    }); else {
                        var l = !!s[1].deleted, d = s[0];
                        (!t || (r !== l ? r : n !== u ? u > n : d > t)) && (t = d, n = u, r = l);
                    }
                }
                return n + "-" + t;
            };
        }, {} ],
        61: [ function(e, t, n) {
            "use strict";
            function r(e) {
                var t = !1;
                return o(function(n) {
                    if (t) throw new Error("once called more than once");
                    t = !0, e.apply(this, n);
                });
            }
            var o = e(91);
            t.exports = r;
        }, {
            91: 91
        } ],
        62: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return decodeURIComponent(window.escape(e));
            }
            function o(e) {
                return 65 > e ? e - 48 : e - 55;
            }
            function i(e, t, n) {
                for (var r = ""; n > t; ) r += String.fromCharCode(o(e.charCodeAt(t++)) << 4 | o(e.charCodeAt(t++)));
                return r;
            }
            function s(e, t, n) {
                for (var r = ""; n > t; ) r += String.fromCharCode(o(e.charCodeAt(t + 2)) << 12 | o(e.charCodeAt(t + 3)) << 8 | o(e.charCodeAt(t)) << 4 | o(e.charCodeAt(t + 1))), 
                t += 4;
                return r;
            }
            function a(e, t) {
                return "UTF-8" === t ? r(i(e, 0, e.length)) : s(e, 0, e.length);
            }
            t.exports = a;
        }, {} ],
        63: [ function(e, t, n) {
            "use strict";
            function r(e) {
                for (var t = a.exec(e), n = {}, r = 14; r--; ) {
                    var u = o[r], c = t[r] || "", f = -1 !== [ "user", "password" ].indexOf(u);
                    n[u] = f ? decodeURIComponent(c) : c;
                }
                return n[i] = {}, n[o[12]].replace(s, function(e, t, r) {
                    t && (n[i][t] = r);
                }), n;
            }
            var o = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ], i = "queryKey", s = /(?:^|&)([^&=]*)=?([^&]*)/g, a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
            t.exports = r;
        }, {} ],
        64: [ function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                for (var n = {}, r = 0, o = t.length; o > r; r++) {
                    var i = t[r];
                    i in e && (n[i] = e[i]);
                }
                return n;
            };
        }, {} ],
        65: [ function(e, t, n) {
            "use strict";
            t.exports = "function" == typeof Promise ? Promise : e(99);
        }, {
            99: 99
        } ],
        66: [ function(e, t, n) {
            "use strict";
            var r = e(105);
            t.exports = function(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return r.parse(e);
                }
            };
        }, {
            105: 105
        } ],
        67: [ function(e, t, n) {
            "use strict";
            var r = e(105);
            t.exports = function(e) {
                try {
                    return JSON.stringify(e);
                } catch (t) {
                    return r.stringify(e);
                }
            };
        }, {
            105: 105
        } ],
        68: [ function(e, t, n) {
            (function(n) {
                "use strict";
                function r(e) {
                    return i(function(t) {
                        t = s(t);
                        var r, i = this, u = "function" == typeof t[t.length - 1] ? t.pop() : !1;
                        u && (r = function(e, t) {
                            n.nextTick(function() {
                                u(e, t);
                            });
                        });
                        var c = new o(function(n, r) {
                            var o;
                            try {
                                var s = a(function(e, t) {
                                    e ? r(e) : n(t);
                                });
                                t.push(s), o = e.apply(i, t), o && "function" == typeof o.then && n(o);
                            } catch (u) {
                                r(u);
                            }
                        });
                        return r && c.then(function(e) {
                            r(null, e);
                        }, r), c;
                    });
                }
                var o = e(65), i = e(91), s = e(37), a = e(61);
                t.exports = r;
            }).call(this, e(93));
        }, {
            37: 37,
            61: 61,
            65: 65,
            91: 91,
            93: 93
        } ],
        69: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                return e.put(t).then(function(e) {
                    return {
                        updated: !0,
                        rev: e.rev
                    };
                }, function(r) {
                    if (409 !== r.status) throw r;
                    return i(e, t._id, n);
                });
            }
            var o = e(65), i = t.exports = function(e, t, n) {
                return new o(function(o, i) {
                    e.get(t, function(s, a) {
                        if (s) {
                            if (404 !== s.status) return i(s);
                            a = {};
                        }
                        var u = a._rev, c = n(a);
                        return c ? (c._id = t, c._rev = u, void o(r(e, c, n))) : o({
                            updated: !1,
                            rev: u
                        });
                    });
                });
            };
        }, {
            65: 65
        } ],
        70: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return 0 | Math.random() * e;
            }
            function o(e, t) {
                t = t || i.length;
                var n = "", o = -1;
                if (e) {
                    for (;++o < e; ) n += i[r(t)];
                    return n;
                }
                for (;++o < 36; ) switch (o) {
                  case 8:
                  case 13:
                  case 18:
                  case 23:
                    n += "-";
                    break;

                  case 19:
                    n += i[3 & r(16) | 8];
                    break;

                  default:
                    n += i[r(16)];
                }
                return n;
            }
            var i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            t.exports = o;
        }, {} ],
        71: [ function(_dereq_, module, exports) {
            "use strict";
            function evalFilter(input) {
                return eval([ "(function () { return ", input, " })()" ].join(""));
            }
            module.exports = evalFilter;
        }, {} ],
        72: [ function(_dereq_, module, exports) {
            "use strict";
            function evalView(input) {
                return eval([ "(function () {", "  return function (doc) {", "    var emitted = false;", "    var emit = function (a, b) {", "      emitted = true;", "    };", "    var view = " + input + ";", "    view(doc);", "    if (emitted) {", "      return true;", "    }", "  }", "})()" ].join("\n"));
            }
            module.exports = evalView;
        }, {} ],
        73: [ function(e, t, n) {
            "use strict";
            var r = e(69), o = e(65), i = e(76);
            t.exports = function(e) {
                var t = e.db, n = e.viewName, s = e.map, a = e.reduce, u = e.temporary, c = s.toString() + (a && a.toString()) + "undefined";
                if (!u && t._cachedViews) {
                    var f = t._cachedViews[c];
                    if (f) return o.resolve(f);
                }
                return t.info().then(function(e) {
                    function o(e) {
                        e.views = e.views || {};
                        var t = n;
                        -1 === t.indexOf("/") && (t = n + "/" + n);
                        var r = e.views[t] = e.views[t] || {};
                        return r[f] ? void 0 : (r[f] = !0, e);
                    }
                    var f = e.db_name + "-mrview-" + (u ? "temp" : i(c));
                    return r(t, "_local/mrviews", o).then(function() {
                        return t.registerDependentDatabase(f).then(function(e) {
                            var n = e.db;
                            n.auto_compaction = !0;
                            var r = {
                                name: f,
                                db: n,
                                sourceDB: t,
                                adapter: t.adapter,
                                mapFun: s,
                                reduceFun: a
                            };
                            return r.db.get("_local/lastSeq")["catch"](function(e) {
                                if (404 !== e.status) throw e;
                            }).then(function(e) {
                                return r.seq = e ? e.seq : 0, u || (t._cachedViews = t._cachedViews || {}, t._cachedViews[c] = r, 
                                r.db.once("destroyed", function() {
                                    delete t._cachedViews[c];
                                })), r;
                            });
                        });
                    });
                });
            };
        }, {
            65: 65,
            69: 69,
            76: 76
        } ],
        74: [ function(_dereq_, module, exports) {
            "use strict";
            module.exports = function(func, emit, sum, log, isArray, toJSON) {
                return eval("(" + func.replace(/;\s*$/, "") + ");");
            };
        }, {} ],
        75: [ function(e, t, n) {
            (function(t) {
                "use strict";
                function r(e) {
                    return -1 === e.indexOf("/") ? [ e, e ] : e.split("/");
                }
                function o(e) {
                    return 1 === e.length && /^1-/.test(e[0].rev);
                }
                function i(e, t) {
                    try {
                        e.emit("error", t);
                    } catch (n) {
                        console.error("The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."), 
                        console.error(t);
                    }
                }
                function s(e, t, n) {
                    try {
                        return {
                            output: t.apply(null, n)
                        };
                    } catch (r) {
                        return i(e, r), {
                            error: r
                        };
                    }
                }
                function a(e, t) {
                    var n = M(e.key, t.key);
                    return 0 !== n ? n : M(e.value, t.value);
                }
                function u(e, t, n) {
                    return n = n || 0, "number" == typeof t ? e.slice(n, t + n) : n > 0 ? e.slice(n) : e;
                }
                function c(e) {
                    var t = e.value, n = t && "object" == typeof t && t._id || e.id;
                    return n;
                }
                function f(e) {
                    e.rows.forEach(function(e) {
                        var t = e.doc && e.doc._attachments;
                        t && Object.keys(t).forEach(function(e) {
                            var n = t[e];
                            t[e].data = N(n.data, n.content_type);
                        });
                    });
                }
                function l(e) {
                    return function(t) {
                        return e.include_docs && e.attachments && e.binary && f(t), t;
                    };
                }
                function d(e) {
                    var t = "builtin " + e + " function requires map values to be numbers or number arrays";
                    return new D(t);
                }
                function h(e) {
                    for (var t = 0, n = 0, r = e.length; r > n; n++) {
                        var o = e[n];
                        if ("number" != typeof o) {
                            if (!Array.isArray(o)) throw d("_sum");
                            t = "number" == typeof t ? [ t ] : t;
                            for (var i = 0, s = o.length; s > i; i++) {
                                var a = o[i];
                                if ("number" != typeof a) throw d("_sum");
                                "undefined" == typeof t[i] ? t.push(a) : t[i] += a;
                            }
                        } else "number" == typeof t ? t += o : t[0] += o;
                    }
                    return t;
                }
                function p(e, t, n, r) {
                    var o = t[e];
                    "undefined" != typeof o && (r && (o = encodeURIComponent(JSON.stringify(o))), n.push(e + "=" + o));
                }
                function v(e, t) {
                    var n = e.descending ? "endkey" : "startkey", r = e.descending ? "startkey" : "endkey";
                    if ("undefined" != typeof e[n] && "undefined" != typeof e[r] && M(e[n], e[r]) > 0) throw new C("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");
                    if (t.reduce && e.reduce !== !1) {
                        if (e.include_docs) throw new C("{include_docs:true} is invalid for reduce");
                        if (e.keys && e.keys.length > 1 && !e.group && !e.group_level) throw new C("Multi-key fetches for reduce views must use {group: true}");
                    }
                    if (e.group_level) {
                        if ("number" != typeof e.group_level) throw new C('Invalid value for integer: "' + e.group_level + '"');
                        if (e.group_level < 0) throw new C('Invalid value for positive integer: "' + e.group_level + '"');
                    }
                }
                function _(e, t, n) {
                    var o, i = [], s = "GET";
                    if (p("reduce", n, i), p("include_docs", n, i), p("attachments", n, i), p("limit", n, i), 
                    p("descending", n, i), p("group", n, i), p("group_level", n, i), p("skip", n, i), 
                    p("stale", n, i), p("conflicts", n, i), p("startkey", n, i, !0), p("start_key", n, i, !0), 
                    p("endkey", n, i, !0), p("end_key", n, i, !0), p("inclusive_end", n, i), p("key", n, i, !0), 
                    i = i.join("&"), i = "" === i ? "" : "?" + i, "undefined" != typeof n.keys) {
                        var a = 2e3, u = "keys=" + encodeURIComponent(JSON.stringify(n.keys));
                        u.length + i.length + 1 <= a ? i += ("?" === i[0] ? "&" : "?") + u : (s = "POST", 
                        "string" == typeof t ? o = {
                            keys: n.keys
                        } : t.keys = n.keys);
                    }
                    if ("string" == typeof t) {
                        var c = r(t);
                        return e.request({
                            method: s,
                            url: "_design/" + c[0] + "/_view/" + c[1] + i,
                            body: o
                        }).then(l(n));
                    }
                    return o = o || {}, Object.keys(t).forEach(function(e) {
                        Array.isArray(t[e]) ? o[e] = t[e] : o[e] = t[e].toString();
                    }), e.request({
                        method: "POST",
                        url: "_temp_view" + i,
                        body: o
                    }).then(l(n));
                }
                function y(e, t, n) {
                    return new X(function(r, o) {
                        e._query(t, n, function(e, t) {
                            return e ? o(e) : void r(t);
                        });
                    });
                }
                function m(e) {
                    return new X(function(t, n) {
                        e._viewCleanup(function(e, r) {
                            return e ? n(e) : void t(r);
                        });
                    });
                }
                function g(e) {
                    return function(t) {
                        if (404 === t.status) return e;
                        throw t;
                    };
                }
                function b(e, t, n) {
                    function r() {
                        return o(l) ? X.resolve(u) : t.db.get(a)["catch"](g(u));
                    }
                    function i(e) {
                        return e.keys.length ? t.db.allDocs({
                            keys: e.keys,
                            include_docs: !0
                        }) : X.resolve({
                            rows: []
                        });
                    }
                    function s(e, t) {
                        for (var n = [], r = {}, o = 0, i = t.rows.length; i > o; o++) {
                            var s = t.rows[o], a = s.doc;
                            if (a && (n.push(a), r[a._id] = !0, a._deleted = !f[a._id], !a._deleted)) {
                                var u = f[a._id];
                                "value" in u && (a.value = u.value);
                            }
                        }
                        var c = Object.keys(f);
                        return c.forEach(function(e) {
                            if (!r[e]) {
                                var t = {
                                    _id: e
                                }, o = f[e];
                                "value" in o && (t.value = o.value), n.push(t);
                            }
                        }), e.keys = J(c.concat(e.keys)), n.push(e), n;
                    }
                    var a = "_local/doc_" + e, u = {
                        _id: a,
                        keys: []
                    }, c = n[e], f = c.indexableKeysToKeyValues, l = c.changes;
                    return r().then(function(e) {
                        return i(e).then(function(t) {
                            return s(e, t);
                        });
                    });
                }
                function E(e, t, n) {
                    var r = "_local/lastSeq";
                    return e.db.get(r)["catch"](g({
                        _id: r,
                        seq: 0
                    })).then(function(r) {
                        var o = Object.keys(t);
                        return X.all(o.map(function(n) {
                            return b(n, e, t);
                        })).then(function(t) {
                            var o = Y(t);
                            return r.seq = n, o.push(r), e.db.bulkDocs({
                                docs: o
                            });
                        });
                    });
                }
                function w(e) {
                    var t = "string" == typeof e ? e : e.name, n = Z[t];
                    return n || (n = Z[t] = new B()), n;
                }
                function S(e) {
                    return W(w(e), function() {
                        return T(e);
                    })();
                }
                function T(e) {
                    function t(e, t) {
                        var n = {
                            id: o._id,
                            key: P(e)
                        };
                        "undefined" != typeof t && null !== t && (n.value = P(t)), r.push(n);
                    }
                    function n(t, n) {
                        return function() {
                            return E(e, t, n);
                        };
                    }
                    var r, o, i;
                    if ("function" == typeof e.mapFun && 2 === e.mapFun.length) {
                        var u = e.mapFun;
                        i = function(e) {
                            return u(e, t);
                        };
                    } else i = G(e.mapFun.toString(), t, h, L, Array.isArray, JSON.parse);
                    var c = e.seq || 0, f = new B();
                    return new X(function(t, u) {
                        function l() {
                            f.finish().then(function() {
                                e.seq = c, t();
                            });
                        }
                        function d() {
                            function t(e) {
                                u(e);
                            }
                            e.sourceDB.changes({
                                conflicts: !0,
                                include_docs: !0,
                                style: "all_docs",
                                since: c,
                                limit: te
                            }).on("complete", function(t) {
                                var u = t.results;
                                if (!u.length) return l();
                                for (var h = {}, p = 0, v = u.length; v > p; p++) {
                                    var _ = u[p];
                                    if ("_" !== _.doc._id[0]) {
                                        r = [], o = _.doc, o._deleted || s(e.sourceDB, i, [ o ]), r.sort(a);
                                        for (var y, m = {}, g = 0, b = r.length; b > g; g++) {
                                            var E = r[g], w = [ E.key, E.id ];
                                            0 === M(E.key, y) && w.push(g);
                                            var S = F(w);
                                            m[S] = E, y = E.key;
                                        }
                                        h[_.doc._id] = {
                                            indexableKeysToKeyValues: m,
                                            changes: _.changes
                                        };
                                    }
                                    c = _.seq;
                                }
                                return f.add(n(h, c)), u.length < te ? l() : d();
                            }).on("error", t);
                        }
                        d();
                    });
                }
                function x(e, t, n) {
                    0 === n.group_level && delete n.group_level;
                    var r, o = n.group || n.group_level;
                    r = ne[e.reduceFun] ? ne[e.reduceFun] : G(e.reduceFun.toString(), null, h, L, Array.isArray, JSON.parse);
                    var i = [], a = n.group_level;
                    t.forEach(function(e) {
                        var t = i[i.length - 1], n = o ? e.key : null;
                        return o && Array.isArray(n) && "number" == typeof a && (n = n.length > a ? n.slice(0, a) : n), 
                        t && 0 === M(t.key[0][0], n) ? (t.key.push([ n, e.id ]), void t.value.push(e.value)) : void i.push({
                            key: [ [ n, e.id ] ],
                            value: [ e.value ]
                        });
                    });
                    for (var c = 0, f = i.length; f > c; c++) {
                        var l = i[c], d = s(e.sourceDB, r, [ l.key, l.value, !1 ]);
                        if (d.error && d.error instanceof D) throw d.error;
                        l.value = d.error ? null : d.output, l.key = l.key[0][0];
                    }
                    return {
                        rows: u(i, n.limit, n.skip)
                    };
                }
                function A(e, t) {
                    return W(w(e), function() {
                        return k(e, t);
                    })();
                }
                function k(e, t) {
                    function n(t) {
                        return t.include_docs = !0, e.db.allDocs(t).then(function(e) {
                            return o = e.total_rows, e.rows.map(function(e) {
                                if ("value" in e.doc && "object" == typeof e.doc.value && null !== e.doc.value) {
                                    var t = Object.keys(e.doc.value).sort(), n = [ "id", "key", "value" ];
                                    if (!(n > t || t > n)) return e.doc.value;
                                }
                                var r = U(e.doc._id);
                                return {
                                    key: r[0],
                                    id: r[1],
                                    value: "value" in e.doc ? e.doc.value : null
                                };
                            });
                        });
                    }
                    function r(n) {
                        var r;
                        if (r = i ? x(e, n, t) : {
                            total_rows: o,
                            offset: s,
                            rows: n
                        }, t.include_docs) {
                            var a = J(n.map(c));
                            return e.sourceDB.allDocs({
                                keys: a,
                                include_docs: !0,
                                conflicts: t.conflicts,
                                attachments: t.attachments,
                                binary: t.binary
                            }).then(function(e) {
                                var t = {};
                                return e.rows.forEach(function(e) {
                                    e.doc && (t["$" + e.id] = e.doc);
                                }), n.forEach(function(e) {
                                    var n = c(e), r = t["$" + n];
                                    r && (e.doc = r);
                                }), r;
                            });
                        }
                        return r;
                    }
                    var o, i = e.reduceFun && t.reduce !== !1, s = t.skip || 0;
                    if ("undefined" == typeof t.keys || t.keys.length || (t.limit = 0, delete t.keys), 
                    "undefined" != typeof t.keys) {
                        var a = t.keys, u = a.map(function(e) {
                            var t = {
                                startkey: F([ e ]),
                                endkey: F([ e, {} ])
                            };
                            return n(t);
                        });
                        return X.all(u).then(Y).then(r);
                    }
                    var f = {
                        descending: t.descending
                    };
                    if (t.start_key && (t.startkey = t.start_key), t.end_key && (t.endkey = t.end_key), 
                    "undefined" != typeof t.startkey && (f.startkey = F(t.descending ? [ t.startkey, {} ] : [ t.startkey ])), 
                    "undefined" != typeof t.endkey) {
                        var l = t.inclusive_end !== !1;
                        t.descending && (l = !l), f.endkey = F(l ? [ t.endkey, {} ] : [ t.endkey ]);
                    }
                    if ("undefined" != typeof t.key) {
                        var d = F([ t.key ]), h = F([ t.key, {} ]);
                        f.descending ? (f.endkey = d, f.startkey = h) : (f.startkey = d, f.endkey = h);
                    }
                    return i || ("number" == typeof t.limit && (f.limit = t.limit), f.skip = s), n(f).then(r);
                }
                function O(e) {
                    return e.request({
                        method: "POST",
                        url: "_view_cleanup"
                    });
                }
                function q(e) {
                    return e.get("_local/mrviews").then(function(t) {
                        var n = {};
                        Object.keys(t.views).forEach(function(e) {
                            var t = r(e), o = "_design/" + t[0], i = t[1];
                            n[o] = n[o] || {}, n[o][i] = !0;
                        });
                        var o = {
                            keys: Object.keys(n),
                            include_docs: !0
                        };
                        return e.allDocs(o).then(function(r) {
                            var o = {};
                            r.rows.forEach(function(e) {
                                var r = e.key.substring(8);
                                Object.keys(n[e.key]).forEach(function(n) {
                                    var i = r + "/" + n;
                                    t.views[i] || (i = n);
                                    var s = Object.keys(t.views[i]), a = e.doc && e.doc.views && e.doc.views[n];
                                    s.forEach(function(e) {
                                        o[e] = o[e] || a;
                                    });
                                });
                            });
                            var i = Object.keys(o).filter(function(e) {
                                return !o[e];
                            }), s = i.map(function(t) {
                                return W(w(t), function() {
                                    return new e.constructor(t, e.__opts).destroy();
                                })();
                            });
                            return X.all(s).then(function() {
                                return {
                                    ok: !0
                                };
                            });
                        });
                    }, g({
                        ok: !0
                    }));
                }
                function R(e, n, o) {
                    if ("http" === e.type()) return _(e, n, o);
                    if ("function" == typeof e._query) return y(e, n, o);
                    if ("string" != typeof n) {
                        v(o, n);
                        var i = {
                            db: e,
                            viewName: "temp_view/temp_view",
                            map: n.map,
                            reduce: n.reduce,
                            temporary: !0
                        };
                        return ee.add(function() {
                            return H(i).then(function(e) {
                                function t() {
                                    return e.db.destroy();
                                }
                                return K(S(e).then(function() {
                                    return A(e, o);
                                }), t);
                            });
                        }), ee.finish();
                    }
                    var s = n, a = r(s), u = a[0], c = a[1];
                    return e.get("_design/" + u).then(function(n) {
                        var r = n.views && n.views[c];
                        if (!r || "string" != typeof r.map) throw new I("ddoc " + u + " has no view named " + c);
                        v(o, r);
                        var i = {
                            db: e,
                            viewName: s,
                            map: r.map,
                            reduce: r.reduce
                        };
                        return H(i).then(function(e) {
                            return "ok" === o.stale || "update_after" === o.stale ? ("update_after" === o.stale && t.nextTick(function() {
                                S(e);
                            }), A(e, o)) : S(e).then(function() {
                                return A(e, o);
                            });
                        });
                    });
                }
                function C(e) {
                    this.status = 400, this.name = "query_parse_error", this.message = e, this.error = !0;
                    try {
                        Error.captureStackTrace(this, C);
                    } catch (t) {}
                }
                function I(e) {
                    this.status = 404, this.name = "not_found", this.message = e, this.error = !0;
                    try {
                        Error.captureStackTrace(this, I);
                    } catch (t) {}
                }
                function D(e) {
                    this.status = 500, this.name = "invalid_value", this.message = e, this.error = !0;
                    try {
                        Error.captureStackTrace(this, D);
                    } catch (t) {}
                }
                var L, N = e(27), j = e(101), B = e(77), M = j.collate, F = j.toIndexableString, P = j.normalizeKey, U = j.parseIndexableString, H = e(73), G = e(74);
                L = "undefined" != typeof console && "function" == typeof console.log ? Function.prototype.bind.call(console.log, console) : function() {};
                var Q = e(78), V = Q.callbackify, W = Q.sequentialize, J = Q.uniq, K = Q.fin, z = Q.promisedCallback, X = e(65), Y = e(50), $ = e(97), Z = {}, ee = new B(), te = 50, ne = {
                    _sum: function(e, t) {
                        return h(t);
                    },
                    _count: function(e, t) {
                        return t.length;
                    },
                    _stats: function(e, t) {
                        function n(e) {
                            for (var t = 0, n = 0, r = e.length; r > n; n++) {
                                var o = e[n];
                                t += o * o;
                            }
                            return t;
                        }
                        return {
                            sum: h(t),
                            min: Math.min.apply(null, t),
                            max: Math.max.apply(null, t),
                            count: t.length,
                            sumsqr: n(t)
                        };
                    }
                };
                n.viewCleanup = V(function() {
                    var e = this;
                    return "http" === e.type() ? O(e) : "function" == typeof e._viewCleanup ? m(e) : q(e);
                }), n.query = function(e, t, n) {
                    "function" == typeof t && (n = t, t = {}), t = t || {}, "function" == typeof e && (e = {
                        map: e
                    });
                    var r = this, o = X.resolve().then(function() {
                        return R(r, e, t);
                    });
                    return z(o, n), o;
                }, $(C, Error), $(I, Error), $(D, Error);
            }).call(this, e(93));
        }, {
            101: 101,
            27: 27,
            50: 50,
            65: 65,
            73: 73,
            74: 74,
            77: 77,
            78: 78,
            93: 93,
            97: 97
        } ],
        76: [ function(e, t, n) {
            "use strict";
            var r = e(104);
            t.exports = function(e) {
                return r.hash(e);
            };
        }, {
            104: 104
        } ],
        77: [ function(e, t, n) {
            "use strict";
            function r() {
                this.promise = new o(function(e) {
                    e();
                });
            }
            var o = e(65);
            r.prototype.add = function(e) {
                return this.promise = this.promise["catch"](function() {}).then(function() {
                    return e();
                }), this.promise;
            }, r.prototype.finish = function() {
                return this.promise;
            }, t.exports = r;
        }, {
            65: 65
        } ],
        78: [ function(e, t, n) {
            (function(t) {
                "use strict";
                var r = e(91);
                n.promisedCallback = function(e, n) {
                    return n && e.then(function(e) {
                        t.nextTick(function() {
                            n(null, e);
                        });
                    }, function(e) {
                        t.nextTick(function() {
                            n(e);
                        });
                    }), e;
                }, n.callbackify = function(e) {
                    return r(function(t) {
                        var r = t.pop(), o = e.apply(this, t);
                        return "function" == typeof r && n.promisedCallback(o, r), o;
                    });
                }, n.fin = function(e, t) {
                    return e.then(function(e) {
                        return t().then(function() {
                            return e;
                        });
                    }, function(e) {
                        return t().then(function() {
                            throw e;
                        });
                    });
                }, n.sequentialize = function(e, t) {
                    return function() {
                        var n = arguments, r = this;
                        return e.add(function() {
                            return t.apply(r, n);
                        });
                    };
                }, n.uniq = function(e) {
                    for (var t = {}, n = 0, r = e.length; r > n; n++) t["$" + e[n]] = !0;
                    var o = Object.keys(t), i = new Array(o.length);
                    for (n = 0, r = o.length; r > n; n++) i[n] = o[n].substring(1);
                    return i;
                };
            }).call(this, e(93));
        }, {
            91: 91,
            93: 93
        } ],
        79: [ function(e, t, n) {
            "use strict";
            function r(e, t) {
                e = parseInt(e, 10) || 0, t = parseInt(t, 10), t !== t || e >= t ? t = (e || 1) << 1 : t += 1;
                var n = Math.random(), r = t - e;
                return ~~(r * n + e);
            }
            function o(e) {
                var t = 0;
                return e || (t = 2e3), r(e, t);
            }
            function i(e, t, n, r) {
                return e.retry === !1 ? (t.emit("error", n), void t.removeAllListeners()) : ("function" != typeof e.back_off_function && (e.back_off_function = o), 
                t.emit("requestError", n), ("active" === t.state || "pending" === t.state) && (t.emit("paused", n), 
                t.state = "stopped", t.once("active", function() {
                    e.current_back_off = s;
                })), e.current_back_off = e.current_back_off || s, e.current_back_off = e.back_off_function(e.current_back_off), 
                void setTimeout(r, e.current_back_off));
            }
            var s = 0;
            t.exports = i;
        }, {} ],
        80: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, o, i) {
                return e.get(t)["catch"](function(n) {
                    if (404 === n.status) return "http" === e.type() && c(404, "PouchDB is just checking if a remote checkpoint exists."), 
                    {
                        session_id: o,
                        _id: t,
                        history: [],
                        replicator: h,
                        version: d
                    };
                    throw n;
                }).then(function(s) {
                    return i.cancelled ? void 0 : (s.history = (s.history || []).filter(function(e) {
                        return e.session_id !== o;
                    }), s.history.unshift({
                        last_seq: n,
                        session_id: o
                    }), s.history = s.history.slice(0, p), s.version = d, s.replicator = h, s.session_id = o, 
                    s.last_seq = n, e.put(s)["catch"](function(s) {
                        if (409 === s.status) return r(e, t, n, o, i);
                        throw s;
                    }));
                });
            }
            function o(e, t, n, r) {
                this.src = e, this.target = t, this.id = n, this.returnValue = r;
            }
            function i(e, t) {
                if (e.session_id === t.session_id) return {
                    last_seq: e.last_seq,
                    history: e.history || []
                };
                var n = e.history || [], r = t.history || [];
                return s(n, r);
            }
            function s(e, t) {
                var n = e[0], r = e.slice(1), o = t[0], i = t.slice(1);
                if (!n || 0 === t.length) return {
                    last_seq: v,
                    history: []
                };
                var u = n.session_id;
                if (a(u, t)) return {
                    last_seq: n.last_seq,
                    history: e
                };
                var c = o.session_id;
                return a(c, r) ? {
                    last_seq: o.last_seq,
                    history: i
                } : s(r, i);
            }
            function a(e, t) {
                var n = t[0], r = t.slice(1);
                return e && 0 !== t.length ? e === n.session_id ? !0 : a(e, r) : !1;
            }
            var u = e(65), c = e(22), f = e(101), l = f.collate, d = 1, h = "pouchdb", p = 5, v = 0;
            o.prototype.writeCheckpoint = function(e, t) {
                var n = this;
                return this.updateTarget(e, t).then(function() {
                    return n.updateSource(e, t);
                });
            }, o.prototype.updateTarget = function(e, t) {
                return r(this.target, this.id, e, t, this.returnValue);
            }, o.prototype.updateSource = function(e, t) {
                var n = this;
                return this.readOnlySource ? u.resolve(!0) : r(this.src, this.id, e, t, this.returnValue)["catch"](function(e) {
                    var t = "number" == typeof e.status && 4 === Math.floor(e.status / 100);
                    if (t) return n.readOnlySource = !0, !0;
                    throw e;
                });
            };
            var _ = {
                undefined: function(e, t) {
                    return 0 === l(e.last_seq, t.last_seq) ? t.last_seq : 0;
                },
                1: function(e, t) {
                    return i(t, e).last_seq;
                }
            };
            o.prototype.getCheckpoint = function() {
                var e = this;
                return e.target.get(e.id).then(function(t) {
                    return e.src.get(e.id).then(function(e) {
                        if (t.version !== e.version) return v;
                        var n;
                        return n = t.version ? t.version.toString() : "undefined", n in _ ? _[n](t, e) : v;
                    }, function(n) {
                        if (404 === n.status && t.last_seq) return e.src.put({
                            _id: e.id,
                            last_seq: v
                        }).then(function() {
                            return v;
                        }, function(n) {
                            return 401 === n.status ? (e.readOnlySource = !0, t.last_seq) : v;
                        });
                        throw n;
                    });
                })["catch"](function(e) {
                    if (404 !== e.status) throw e;
                    return v;
                });
            }, t.exports = o;
        }, {
            101: 101,
            22: 22,
            65: 65
        } ],
        81: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return Object.keys(e).sort(a).reduce(function(t, n) {
                    return t[n] = e[n], t;
                }, {});
            }
            function o(e, t, n) {
                var o = n.doc_ids ? n.doc_ids.sort(a) : "", u = n.filter ? n.filter.toString() : "", c = "", f = "";
                return n.filter && n.query_params && (c = JSON.stringify(r(n.query_params))), n.filter && "_view" === n.filter && (f = n.view.toString()), 
                i.all([ e.id(), t.id() ]).then(function(e) {
                    var t = e[0] + e[1] + u + f + c + o;
                    return s(t);
                }).then(function(e) {
                    return e = e.replace(/\//g, ".").replace(/\+/g, "_"), "_local/" + e;
                });
            }
            var i = e(65), s = e(52), a = e(101).collate;
            t.exports = o;
        }, {
            101: 101,
            52: 52,
            65: 65
        } ],
        82: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return /^1-/.test(e);
            }
            function o(e) {
                var t = [];
                return Object.keys(e).forEach(function(n) {
                    var r = e[n].missing;
                    r.forEach(function(e) {
                        t.push({
                            id: n,
                            rev: e
                        });
                    });
                }), {
                    docs: t,
                    revs: !0,
                    attachments: !0,
                    binary: !0
                };
            }
            function i(e, t, n) {
                function i() {
                    var r = o(t);
                    return r.docs.length ? e.bulkGet(r).then(function(e) {
                        if (n.cancelled) throw new Error("cancelled");
                        e.results.forEach(function(e) {
                            e.docs.forEach(function(e) {
                                e.ok && d.push(e.ok);
                            });
                        });
                    }) : void 0;
                }
                function u(e) {
                    return e._attachments && Object.keys(e._attachments).length > 0;
                }
                function c(o) {
                    return e.allDocs({
                        keys: o,
                        include_docs: !0
                    }).then(function(e) {
                        if (n.cancelled) throw new Error("cancelled");
                        e.rows.forEach(function(e) {
                            !e.deleted && e.doc && r(e.value.rev) && !u(e.doc) && (d.push(e.doc), delete t[e.id]);
                        });
                    });
                }
                function f() {
                    var e = Object.keys(t).filter(function(e) {
                        var n = t[e].missing;
                        return 1 === n.length && r(n[0]);
                    });
                    return e.length > 0 ? c(e) : void 0;
                }
                function l() {
                    return d;
                }
                t = s(t);
                var d = [];
                return a.resolve().then(f).then(i).then(l);
            }
            var s = e(37), a = e(65);
            t.exports = i;
        }, {
            37: 37,
            65: 65
        } ],
        83: [ function(e, t, n) {
            "use strict";
            function r(e, t) {
                var n = t.PouchConstructor;
                return "string" == typeof e ? new n(e, t) : e;
            }
            function o(e, t, n, o) {
                if ("function" == typeof n && (o = n, n = {}), "undefined" == typeof n && (n = {}), 
                n.doc_ids && !Array.isArray(n.doc_ids)) throw u.error(u.BAD_REQUEST, "`doc_ids` filter parameter is not a list.");
                n.complete = o, n = a(n), n.continuous = n.continuous || n.live, n.retry = "retry" in n ? n.retry : !1, 
                n.PouchConstructor = n.PouchConstructor || this;
                var c = new s(n), f = r(e, n), l = r(t, n);
                return i(f, l, n, c), c;
            }
            var i = e(84), s = e(85), a = e(37), u = e(48);
            t.exports = {
                replicate: o,
                toPouch: r
            };
        }, {
            37: 37,
            48: 48,
            84: 84,
            85: 85
        } ],
        84: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, d, h) {
                function p() {
                    return R ? i.resolve() : f(e, t, n).then(function(n) {
                        q = n, R = new u(e, t, q, d);
                    });
                }
                function v() {
                    if (0 !== O.docs.length) {
                        var e = O.docs;
                        return t.bulkDocs({
                            docs: e,
                            new_edits: !1
                        }).then(function(t) {
                            if (d.cancelled) throw w(), new Error("cancelled");
                            var n = [], r = {};
                            t.forEach(function(e) {
                                e.error && (h.doc_write_failures++, n.push(e), r[e.id] = e);
                            }), H = H.concat(n), h.docs_written += O.docs.length - n.length;
                            var i = n.filter(function(e) {
                                return "unauthorized" !== e.name && "forbidden" !== e.name;
                            });
                            if (G = [], e.forEach(function(e) {
                                var t = r[e._id];
                                t ? d.emit("denied", o(t)) : G.push(e);
                            }), i.length > 0) {
                                var s = new Error("bulkDocs error");
                                throw s.other_errors = n, E("target.bulkDocs failed to write docs", s), new Error("bulkWrite partial failure");
                            }
                        }, function(t) {
                            throw h.doc_write_failures += e.length, t;
                        });
                    }
                }
                function _() {
                    h.last_seq = j = O.seq;
                    var e = o(h);
                    return G.length && (e.docs = G, d.emit("change", e)), D = !0, R.writeCheckpoint(O.seq, Q).then(function() {
                        if (D = !1, d.cancelled) throw w(), new Error("cancelled");
                        O = void 0, A();
                    })["catch"](function(e) {
                        throw D = !1, E("writeCheckpoint completed with error", e), e;
                    });
                }
                function y() {
                    var e = {};
                    return O.changes.forEach(function(t) {
                        "_user/" !== t.id && (e[t.id] = t.changes.map(function(e) {
                            return e.rev;
                        }));
                    }), t.revsDiff(e).then(function(e) {
                        if (d.cancelled) throw w(), new Error("cancelled");
                        O.diffs = e;
                    });
                }
                function m() {
                    return l(e, O.diffs, d).then(function(e) {
                        e.forEach(function(e) {
                            delete O.diffs[e._id], h.docs_read++, O.docs.push(e);
                        });
                    });
                }
                function g() {
                    if (!d.cancelled && !O) {
                        if (0 === C.length) return void b(!0);
                        O = C.shift(), y().then(m).then(v).then(_).then(g)["catch"](function(e) {
                            E("batch processing terminated with error", e);
                        });
                    }
                }
                function b(e) {
                    return 0 === I.changes.length ? void (0 !== C.length || O || ((B && V.live || L) && (d.state = "pending", 
                    d.emit("paused")), L && w())) : void ((e || L || I.changes.length >= M) && (C.push(I), 
                    I = {
                        seq: 0,
                        changes: [],
                        docs: []
                    }, ("pending" === d.state || "stopped" === d.state) && (d.state = "active", d.emit("active")), 
                    g()));
                }
                function E(e, t) {
                    N || (t.message || (t.message = e), h.ok = !1, h.status = "aborting", h.errors.push(t), 
                    H = H.concat(t), C = [], I = {
                        seq: 0,
                        changes: [],
                        docs: []
                    }, w());
                }
                function w() {
                    if (!(N || d.cancelled && (h.status = "cancelled", D))) {
                        h.status = h.status || "complete", h.end_time = new Date(), h.last_seq = j, N = !0;
                        var o = H.filter(function(e) {
                            return "unauthorized" !== e.name && "forbidden" !== e.name;
                        });
                        if (o.length > 0) {
                            var i = H.pop();
                            H.length > 0 && (i.other_errors = H), i.result = h, c(n, d, i, function() {
                                r(e, t, n, d);
                            });
                        } else h.errors = H, d.emit("complete", h), d.removeAllListeners();
                    }
                }
                function S(e) {
                    if (d.cancelled) return w();
                    var t = a(n)(e);
                    t && (I.seq = e.seq, I.changes.push(e), b(0 === C.length));
                }
                function T(e) {
                    return P = !1, d.cancelled ? w() : (e.results.length > 0 ? (V.since = e.last_seq, 
                    A()) : B ? (V.live = !0, A()) : L = !0, void b(!0));
                }
                function x(e) {
                    return P = !1, d.cancelled ? w() : void E("changes rejected", e);
                }
                function A() {
                    function t() {
                        o.cancel();
                    }
                    function r() {
                        d.removeListener("cancel", t);
                    }
                    if (!P && !L && C.length < F) {
                        P = !0, d._changes && (d.removeListener("cancel", d._abortChanges), d._changes.cancel()), 
                        d.once("cancel", t);
                        var o = e.changes(V).on("change", S);
                        o.then(r, r), o.then(T)["catch"](x), n.retry && (d._changes = o, d._abortChanges = t);
                    }
                }
                function k() {
                    p().then(function() {
                        return d.cancelled ? void w() : R.getCheckpoint().then(function(e) {
                            j = e, V = {
                                since: j,
                                limit: M,
                                batch_size: M,
                                style: "all_docs",
                                doc_ids: U,
                                return_docs: !0
                            }, n.filter && ("string" != typeof n.filter ? V.include_docs = !0 : V.filter = n.filter), 
                            n.heartbeat && (V.heartbeat = n.heartbeat), n.query_params && (V.query_params = n.query_params), 
                            n.view && (V.view = n.view), A();
                        });
                    })["catch"](function(e) {
                        E("getCheckpoint rejected with ", e);
                    });
                }
                var O, q, R, C = [], I = {
                    seq: 0,
                    changes: [],
                    docs: []
                }, D = !1, L = !1, N = !1, j = 0, B = n.continuous || n.live || !1, M = n.batch_size || 100, F = n.batches_limit || 10, P = !1, U = n.doc_ids, H = [], G = [], Q = s();
                h = h || {
                    ok: !0,
                    start_time: new Date(),
                    docs_read: 0,
                    docs_written: 0,
                    doc_write_failures: 0,
                    errors: []
                };
                var V = {};
                return d.ready(e, t), d.cancelled ? void w() : (d._addedListeners || (d.once("cancel", w), 
                "function" == typeof n.complete && (d.once("error", n.complete), d.once("complete", function(e) {
                    n.complete(null, e);
                })), d._addedListeners = !0), void ("undefined" == typeof n.since ? k() : p().then(function() {
                    return D = !0, R.writeCheckpoint(n.since, Q);
                }).then(function() {
                    return D = !1, d.cancelled ? void w() : (j = n.since, void k());
                })["catch"](function(e) {
                    throw D = !1, E("writeCheckpoint completed with error", e), e;
                })));
            }
            var o = e(37), i = e(65), s = e(70), a = e(49), u = e(80), c = e(79), f = e(81), l = e(82);
            t.exports = r;
        }, {
            37: 37,
            49: 49,
            65: 65,
            70: 70,
            79: 79,
            80: 80,
            81: 81,
            82: 82
        } ],
        85: [ function(e, t, n) {
            "use strict";
            function r() {
                o.call(this), this.cancelled = !1, this.state = "pending";
                var e = this, t = new i(function(t, n) {
                    e.once("complete", t), e.once("error", n);
                });
                e.then = function(e, n) {
                    return t.then(e, n);
                }, e["catch"] = function(e) {
                    return t["catch"](e);
                }, e["catch"](function() {});
            }
            var o = e(92).EventEmitter, i = e(65), s = e(97);
            s(r, o), r.prototype.cancel = function() {
                this.cancelled = !0, this.state = "cancelled", this.emit("cancel");
            }, r.prototype.ready = function(e, t) {
                function n() {
                    o.cancel();
                }
                function r() {
                    e.removeListener("destroyed", n), t.removeListener("destroyed", n);
                }
                var o = this;
                o._readyCalled || (o._readyCalled = !0, e.once("destroyed", n), t.once("destroyed", n), 
                o.once("complete", r));
            }, t.exports = r;
        }, {
            65: 65,
            92: 92,
            97: 97
        } ],
        86: [ function(e, t, n) {
            "use strict";
            function r(e) {
                Object.keys(u.prototype).forEach(function(t) {
                    "function" == typeof u.prototype[t] && (e[t] = f[t].bind(f));
                });
                var t = e._destructionListeners = new a.Map();
                e.on("destroyed", function(e) {
                    t.has(e) && (t.get(e).forEach(function(e) {
                        e();
                    }), t["delete"](e));
                });
            }
            var o = e(98).extend, i = e(16), s = e(97), a = e(103), u = e(92).EventEmitter, c = e(46);
            i.adapters = {}, i.preferredAdapters = [], i.prefix = "_pouch_";
            var f = new u();
            r(i), i.parseAdapter = function(e, t) {
                var n, r, o = e.match(/([a-z\-]*):\/\/(.*)/);
                if (o) {
                    if (e = /http(s?)/.test(o[1]) ? o[1] + "://" + o[2] : o[2], n = o[1], !i.adapters[n].valid()) throw "Invalid adapter";
                    return {
                        name: e,
                        adapter: o[1]
                    };
                }
                var s = "idb" in i.adapters && "websql" in i.adapters && c() && localStorage["_pouch__websqldb_" + i.prefix + e];
                if (t.adapter) r = t.adapter; else if ("undefined" != typeof t && t.db) r = "leveldb"; else for (var a = 0; a < i.preferredAdapters.length; ++a) if (r = i.preferredAdapters[a], 
                r in i.adapters) {
                    if (s && "idb" === r) {
                        console.log('PouchDB is downgrading "' + e + '" to WebSQL to avoid data loss, because it was already opened with WebSQL.');
                        continue;
                    }
                    break;
                }
                n = i.adapters[r];
                var u = n && "use_prefix" in n ? n.use_prefix : !0;
                return {
                    name: u ? i.prefix + e : e,
                    adapter: r
                };
            }, i.adapter = function(e, t, n) {
                t.valid() && (i.adapters[e] = t, n && i.preferredAdapters.push(e));
            }, i.plugin = function(e) {
                return Object.keys(e).forEach(function(t) {
                    i.prototype[t] = e[t];
                }), i;
            }, i.defaults = function(e) {
                function t(n, r, s) {
                    return this instanceof t ? (("function" == typeof r || "undefined" == typeof r) && (s = r, 
                    r = {}), n && "object" == typeof n && (r = n, n = void 0), r = o({}, e, r), void i.call(this, n, r, s)) : new t(n, r, s);
                }
                return s(t, i), r(t), t.preferredAdapters = i.preferredAdapters.slice(), Object.keys(i).forEach(function(e) {
                    e in t || (t[e] = i[e]);
                }), t;
            }, t.exports = i;
        }, {
            103: 103,
            16: 16,
            46: 46,
            92: 92,
            97: 97,
            98: 98
        } ],
        87: [ function(e, t, n) {
            "use strict";
            function r(e, t, n, r) {
                return "function" == typeof n && (r = n, n = {}), "undefined" == typeof n && (n = {}), 
                n = l(n), n.PouchConstructor = n.PouchConstructor || this, e = a.toPouch(e, n), 
                t = a.toPouch(t, n), new o(e, t, n, r);
            }
            function o(e, t, n, r) {
                function o(e) {
                    _.emit("change", {
                        direction: "pull",
                        change: e
                    });
                }
                function a(e) {
                    _.emit("change", {
                        direction: "push",
                        change: e
                    });
                }
                function u(e) {
                    _.emit("denied", {
                        direction: "push",
                        doc: e
                    });
                }
                function f(e) {
                    _.emit("denied", {
                        direction: "pull",
                        doc: e
                    });
                }
                function l() {
                    _.pushPaused = !0, _.pullPaused && _.emit("paused");
                }
                function d() {
                    _.pullPaused = !0, _.pushPaused && _.emit("paused");
                }
                function h() {
                    _.pushPaused = !1, _.pullPaused && _.emit("active", {
                        direction: "push"
                    });
                }
                function p() {
                    _.pullPaused = !1, _.pushPaused && _.emit("active", {
                        direction: "pull"
                    });
                }
                function v(e) {
                    return function(t, n) {
                        var r = "change" === t && (n === o || n === a), i = "denied" === t && (n === f || n === u), s = "paused" === t && (n === d || n === l), c = "active" === t && (n === p || n === h);
                        (r || i || s || c) && (t in g || (g[t] = {}), g[t][e] = !0, 2 === Object.keys(g[t]).length && _.removeAllListeners(t));
                    };
                }
                var _ = this;
                this.canceled = !1;
                var y = n.push ? i({}, n, n.push) : n, m = n.pull ? i({}, n, n.pull) : n;
                this.push = c(e, t, y), this.pull = c(t, e, m), this.pushPaused = !0, this.pullPaused = !0;
                var g = {};
                n.live && (this.push.on("complete", _.pull.cancel.bind(_.pull)), this.pull.on("complete", _.push.cancel.bind(_.push))), 
                this.on("newListener", function(e) {
                    "change" === e ? (_.pull.on("change", o), _.push.on("change", a)) : "denied" === e ? (_.pull.on("denied", f), 
                    _.push.on("denied", u)) : "active" === e ? (_.pull.on("active", p), _.push.on("active", h)) : "paused" === e && (_.pull.on("paused", d), 
                    _.push.on("paused", l));
                }), this.on("removeListener", function(e) {
                    "change" === e ? (_.pull.removeListener("change", o), _.push.removeListener("change", a)) : "denied" === e ? (_.pull.removeListener("denied", f), 
                    _.push.removeListener("denied", u)) : "active" === e ? (_.pull.removeListener("active", p), 
                    _.push.removeListener("active", h)) : "paused" === e && (_.pull.removeListener("paused", d), 
                    _.push.removeListener("paused", l));
                }), this.pull.on("removeListener", v("pull")), this.push.on("removeListener", v("push"));
                var b = s.all([ this.push, this.pull ]).then(function(e) {
                    var t = {
                        push: e[0],
                        pull: e[1]
                    };
                    return _.emit("complete", t), r && r(null, t), _.removeAllListeners(), t;
                }, function(e) {
                    if (_.cancel(), r ? r(e) : _.emit("error", e), _.removeAllListeners(), r) throw e;
                });
                this.then = function(e, t) {
                    return b.then(e, t);
                }, this["catch"] = function(e) {
                    return b["catch"](e);
                };
            }
            var i = e(98).extend, s = e(65), a = e(83), u = e(97), c = a.replicate, f = e(92).EventEmitter, l = e(37);
            u(o, f), t.exports = r, o.prototype.cancel = function() {
                this.canceled || (this.canceled = !0, this.push.cancel(), this.pull.cancel());
            };
        }, {
            37: 37,
            65: 65,
            83: 83,
            92: 92,
            97: 97,
            98: 98
        } ],
        88: [ function(e, t, n) {
            "use strict";
            function r() {
                this.isReady = !1, this.failed = !1, this.queue = [];
            }
            t.exports = r, r.prototype.execute = function() {
                var e;
                if (this.failed) for (;e = this.queue.shift(); ) e(this.failed); else for (;e = this.queue.shift(); ) e();
            }, r.prototype.fail = function(e) {
                this.failed = e, this.execute();
            }, r.prototype.ready = function(e) {
                this.isReady = !0, this.db = e, this.execute();
            }, r.prototype.addTask = function(e) {
                this.queue.push(e), this.failed && this.execute();
            };
        }, {} ],
        89: [ function(e, t, n) {
            "use strict";
            n.ajax = e(23), n.parseUri = e(63), n.uuid = e(70);
            var r = e(65);
            n.Promise = r;
            var o = e(26);
            n.atob = o.atob, n.btoa = o.btoa;
            var i = e(29);
            n.binaryStringToBlobOrBuffer = i, n.clone = e(37), n.extend = e(98).extend;
        }, {
            23: 23,
            26: 26,
            29: 29,
            37: 37,
            63: 63,
            65: 65,
            70: 70,
            98: 98
        } ],
        90: [ function(e, t, n) {
            t.exports = "5.1.0";
        }, {} ],
        91: [ function(e, t, n) {
            "use strict";
            function r(e) {
                return function() {
                    var t = arguments.length;
                    if (t) {
                        for (var n = [], r = -1; ++r < t; ) n[r] = arguments[r];
                        return e.call(this, n);
                    }
                    return e.call(this, []);
                };
            }
            t.exports = r;
        }, {} ],
        92: [ function(e, t, n) {
            function r() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
            }
            function o(e) {
                return "function" == typeof e;
            }
            function i(e) {
                return "number" == typeof e;
            }
            function s(e) {
                return "object" == typeof e && null !== e;
            }
            function a(e) {
                return void 0 === e;
            }
            t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, 
            r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
                if (!i(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this;
            }, r.prototype.emit = function(e) {
                var t, n, r, i, u, c;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error) throw t;
                    throw TypeError('Uncaught, unspecified "error" event.');
                }
                if (n = this._events[e], a(n)) return !1;
                if (o(n)) switch (arguments.length) {
                  case 1:
                    n.call(this);
                    break;

                  case 2:
                    n.call(this, arguments[1]);
                    break;

                  case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;

                  default:
                    i = Array.prototype.slice.call(arguments, 1), n.apply(this, i);
                } else if (s(n)) for (i = Array.prototype.slice.call(arguments, 1), c = n.slice(), 
                r = c.length, u = 0; r > u; u++) c[u].apply(this, i);
                return !0;
            }, r.prototype.addListener = function(e, t) {
                var n;
                if (!o(t)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t), 
                this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [ this._events[e], t ] : this._events[e] = t, 
                s(this._events[e]) && !this._events[e].warned && (n = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, 
                n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), 
                "function" == typeof console.trace && console.trace())), this;
            }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
                function n() {
                    this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
                }
                if (!o(t)) throw TypeError("listener must be a function");
                var r = !1;
                return n.listener = t, this.on(e, n), this;
            }, r.prototype.removeListener = function(e, t) {
                var n, r, i, a;
                if (!o(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (n = this._events[e], i = n.length, r = -1, n === t || o(n.listener) && n.listener === t) delete this._events[e], 
                this._events.removeListener && this.emit("removeListener", e, t); else if (s(n)) {
                    for (a = i; a-- > 0; ) if (n[a] === t || n[a].listener && n[a].listener === t) {
                        r = a;
                        break;
                    }
                    if (0 > r) return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t);
                }
                return this;
            }, r.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], 
                this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this;
                }
                if (n = this._events[e], o(n)) this.removeListener(e, n); else if (n) for (;n.length; ) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this;
            }, r.prototype.listeners = function(e) {
                var t;
                return t = this._events && this._events[e] ? o(this._events[e]) ? [ this._events[e] ] : this._events[e].slice() : [];
            }, r.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (o(t)) return 1;
                    if (t) return t.length;
                }
                return 0;
            }, r.listenerCount = function(e, t) {
                return e.listenerCount(t);
            };
        }, {} ],
        93: [ function(e, t, n) {
            function r() {
                f = !1, a.length ? c = a.concat(c) : l = -1, c.length && o();
            }
            function o() {
                if (!f) {
                    var e = setTimeout(r);
                    f = !0;
                    for (var t = c.length; t; ) {
                        for (a = c, c = []; ++l < t; ) a && a[l].run();
                        l = -1, t = c.length;
                    }
                    a = null, f = !1, clearTimeout(e);
                }
            }
            function i(e, t) {
                this.fun = e, this.array = t;
            }
            function s() {}
            var a, u = t.exports = {}, c = [], f = !1, l = -1;
            u.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new i(e, t)), 1 !== c.length || f || setTimeout(o, 0);
            }, i.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", 
            u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, 
            u.removeAllListeners = s, u.emit = s, u.binding = function(e) {
                throw new Error("process.binding is not supported");
            }, u.cwd = function() {
                return "/";
            }, u.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            }, u.umask = function() {
                return 0;
            };
        }, {} ],
        94: [ function(e, t, n) {
            function r() {
                return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
            }
            function o() {
                var e = arguments, t = this.useColors;
                if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), 
                !t) return e;
                var r = "color: " + this.color;
                e = [ e[0], r, "color: inherit" ].concat(Array.prototype.slice.call(e, 1));
                var o = 0, i = 0;
                return e[0].replace(/%[a-z%]/g, function(e) {
                    "%%" !== e && (o++, "%c" === e && (i = o));
                }), e.splice(i, 0, r), e;
            }
            function i() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }
            function s(e) {
                try {
                    null == e ? n.storage.removeItem("debug") : n.storage.debug = e;
                } catch (t) {}
            }
            function a() {
                var e;
                try {
                    e = n.storage.debug;
                } catch (t) {}
                return e;
            }
            function u() {
                try {
                    return window.localStorage;
                } catch (e) {}
            }
            n = t.exports = e(95), n.log = i, n.formatArgs = o, n.save = s, n.load = a, n.useColors = r, 
            n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), 
            n.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ], 
            n.formatters.j = function(e) {
                return JSON.stringify(e);
            }, n.enable(a());
        }, {
            95: 95
        } ],
        95: [ function(e, t, n) {
            function r() {
                return n.colors[f++ % n.colors.length];
            }
            function o(e) {
                function t() {}
                function o() {
                    var e = o, t = +new Date(), i = t - (c || t);
                    e.diff = i, e.prev = c, e.curr = t, c = t, null == e.useColors && (e.useColors = n.useColors()), 
                    null == e.color && e.useColors && (e.color = r());
                    var s = Array.prototype.slice.call(arguments);
                    s[0] = n.coerce(s[0]), "string" != typeof s[0] && (s = [ "%o" ].concat(s));
                    var a = 0;
                    s[0] = s[0].replace(/%([a-z%])/g, function(t, r) {
                        if ("%%" === t) return t;
                        a++;
                        var o = n.formatters[r];
                        if ("function" == typeof o) {
                            var i = s[a];
                            t = o.call(e, i), s.splice(a, 1), a--;
                        }
                        return t;
                    }), "function" == typeof n.formatArgs && (s = n.formatArgs.apply(e, s));
                    var u = o.log || n.log || console.log.bind(console);
                    u.apply(e, s);
                }
                t.enabled = !1, o.enabled = !0;
                var i = n.enabled(e) ? o : t;
                return i.namespace = e, i;
            }
            function i(e) {
                n.save(e);
                for (var t = (e || "").split(/[\s,]+/), r = t.length, o = 0; r > o; o++) t[o] && (e = t[o].replace(/\*/g, ".*?"), 
                "-" === e[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
            }
            function s() {
                n.enable("");
            }
            function a(e) {
                var t, r;
                for (t = 0, r = n.skips.length; r > t; t++) if (n.skips[t].test(e)) return !1;
                for (t = 0, r = n.names.length; r > t; t++) if (n.names[t].test(e)) return !0;
                return !1;
            }
            function u(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }
            n = t.exports = o, n.coerce = u, n.disable = s, n.enable = i, n.enabled = a, n.humanize = e(96), 
            n.names = [], n.skips = [], n.formatters = {};
            var c, f = 0;
        }, {
            96: 96
        } ],
        96: [ function(e, t, n) {
            function r(e) {
                if (e = "" + e, !(e.length > 1e4)) {
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]), r = (t[2] || "ms").toLowerCase();
                        switch (r) {
                          case "years":
                          case "year":
                          case "yrs":
                          case "yr":
                          case "y":
                            return n * l;

                          case "days":
                          case "day":
                          case "d":
                            return n * f;

                          case "hours":
                          case "hour":
                          case "hrs":
                          case "hr":
                          case "h":
                            return n * c;

                          case "minutes":
                          case "minute":
                          case "mins":
                          case "min":
                          case "m":
                            return n * u;

                          case "seconds":
                          case "second":
                          case "secs":
                          case "sec":
                          case "s":
                            return n * a;

                          case "milliseconds":
                          case "millisecond":
                          case "msecs":
                          case "msec":
                          case "ms":
                            return n;
                        }
                    }
                }
            }
            function o(e) {
                return e >= f ? Math.round(e / f) + "d" : e >= c ? Math.round(e / c) + "h" : e >= u ? Math.round(e / u) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms";
            }
            function i(e) {
                return s(e, f, "day") || s(e, c, "hour") || s(e, u, "minute") || s(e, a, "second") || e + " ms";
            }
            function s(e, t, n) {
                return t > e ? void 0 : 1.5 * t > e ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
            }
            var a = 1e3, u = 60 * a, c = 60 * u, f = 24 * c, l = 365.25 * f;
            t.exports = function(e, t) {
                return t = t || {}, "string" == typeof e ? r(e) : t["long"] ? i(e) : o(e);
            };
        }, {} ],
        97: [ function(e, t, n) {
            "function" == typeof Object.create ? t.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
            } : t.exports = function(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
            };
        }, {} ],
        98: [ function(e, t, n) {
            (function() {
                var e = Array.prototype.slice, t = Array.prototype.forEach, n = function(r) {
                    if ("object" != typeof r) throw r + " is not an object";
                    var o = e.call(arguments, 1);
                    return t.call(o, function(e) {
                        if (e) for (var t in e) "object" == typeof e[t] && r[t] ? n.call(r, r[t], e[t]) : r[t] = e[t];
                    }), r;
                };
                this.extend = n;
            }).call(this);
        }, {} ],
        99: [ function(e, t, n) {
            "use strict";
            function r() {}
            function o(e) {
                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                this.state = m, this.queue = [], this.outcome = void 0, e !== r && u(this, e);
            }
            function i(e, t, n) {
                this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), 
                "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected);
            }
            function s(e, t, n) {
                p(function() {
                    var r;
                    try {
                        r = t(n);
                    } catch (o) {
                        return v.reject(e, o);
                    }
                    r === e ? v.reject(e, new TypeError("Cannot resolve promise with itself")) : v.resolve(e, r);
                });
            }
            function a(e) {
                var t = e && e.then;
                return e && "object" == typeof e && "function" == typeof t ? function() {
                    t.apply(e, arguments);
                } : void 0;
            }
            function u(e, t) {
                function n(t) {
                    i || (i = !0, v.reject(e, t));
                }
                function r(t) {
                    i || (i = !0, v.resolve(e, t));
                }
                function o() {
                    t(r, n);
                }
                var i = !1, s = c(o);
                "error" === s.status && n(s.value);
            }
            function c(e, t) {
                var n = {};
                try {
                    n.value = e(t), n.status = "success";
                } catch (r) {
                    n.status = "error", n.value = r;
                }
                return n;
            }
            function f(e) {
                return e instanceof this ? e : v.resolve(new this(r), e);
            }
            function l(e) {
                var t = new this(r);
                return v.reject(t, e);
            }
            function d(e) {
                function t(e, t) {
                    function r(e) {
                        s[t] = e, ++a !== o || i || (i = !0, v.resolve(c, s));
                    }
                    n.resolve(e).then(r, function(e) {
                        i || (i = !0, v.reject(c, e));
                    });
                }
                var n = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var o = e.length, i = !1;
                if (!o) return this.resolve([]);
                for (var s = new Array(o), a = 0, u = -1, c = new this(r); ++u < o; ) t(e[u], u);
                return c;
            }
            function h(e) {
                function t(e) {
                    n.resolve(e).then(function(e) {
                        i || (i = !0, v.resolve(a, e));
                    }, function(e) {
                        i || (i = !0, v.reject(a, e));
                    });
                }
                var n = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var o = e.length, i = !1;
                if (!o) return this.resolve([]);
                for (var s = -1, a = new this(r); ++s < o; ) t(e[s]);
                return a;
            }
            var p = e(100), v = {}, _ = [ "REJECTED" ], y = [ "FULFILLED" ], m = [ "PENDING" ];
            t.exports = n = o, o.prototype["catch"] = function(e) {
                return this.then(null, e);
            }, o.prototype.then = function(e, t) {
                if ("function" != typeof e && this.state === y || "function" != typeof t && this.state === _) return this;
                var n = new this.constructor(r);
                if (this.state !== m) {
                    var o = this.state === y ? e : t;
                    s(n, o, this.outcome);
                } else this.queue.push(new i(n, e, t));
                return n;
            }, i.prototype.callFulfilled = function(e) {
                v.resolve(this.promise, e);
            }, i.prototype.otherCallFulfilled = function(e) {
                s(this.promise, this.onFulfilled, e);
            }, i.prototype.callRejected = function(e) {
                v.reject(this.promise, e);
            }, i.prototype.otherCallRejected = function(e) {
                s(this.promise, this.onRejected, e);
            }, v.resolve = function(e, t) {
                var n = c(a, t);
                if ("error" === n.status) return v.reject(e, n.value);
                var r = n.value;
                if (r) u(e, r); else {
                    e.state = y, e.outcome = t;
                    for (var o = -1, i = e.queue.length; ++o < i; ) e.queue[o].callFulfilled(t);
                }
                return e;
            }, v.reject = function(e, t) {
                e.state = _, e.outcome = t;
                for (var n = -1, r = e.queue.length; ++n < r; ) e.queue[n].callRejected(t);
                return e;
            }, n.resolve = f, n.reject = l, n.all = d, n.race = h;
        }, {
            100: 100
        } ],
        100: [ function(e, t, n) {
            (function(e) {
                "use strict";
                function n() {
                    f = !0;
                    for (var e, t, n = l.length; n; ) {
                        for (t = l, l = [], e = -1; ++e < n; ) t[e]();
                        n = l.length;
                    }
                    f = !1;
                }
                function r(e) {
                    1 !== l.push(e) || f || o();
                }
                var o, i = e.MutationObserver || e.WebKitMutationObserver;
                if (i) {
                    var s = 0, a = new i(n), u = e.document.createTextNode("");
                    a.observe(u, {
                        characterData: !0
                    }), o = function() {
                        u.data = s = ++s % 2;
                    };
                } else if (e.setImmediate || "undefined" == typeof e.MessageChannel) o = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                    var t = e.document.createElement("script");
                    t.onreadystatechange = function() {
                        n(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
                    }, e.document.documentElement.appendChild(t);
                } : function() {
                    setTimeout(n, 0);
                }; else {
                    var c = new e.MessageChannel();
                    c.port1.onmessage = n, o = function() {
                        c.port2.postMessage(0);
                    };
                }
                var f, l = [];
                t.exports = r;
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {} ],
        101: [ function(e, t, n) {
            "use strict";
            function r(e) {
                if (null !== e) switch (typeof e) {
                  case "boolean":
                    return e ? 1 : 0;

                  case "number":
                    return f(e);

                  case "string":
                    return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "");

                  case "object":
                    var t = Array.isArray(e), r = t ? e : Object.keys(e), o = -1, i = r.length, s = "";
                    if (t) for (;++o < i; ) s += n.toIndexableString(r[o]); else for (;++o < i; ) {
                        var a = r[o];
                        s += n.toIndexableString(a) + n.toIndexableString(e[a]);
                    }
                    return s;
                }
                return "";
            }
            function o(e, t) {
                var n, r = t, o = "1" === e[t];
                if (o) n = 0, t++; else {
                    var i = "0" === e[t];
                    t++;
                    var s = "", a = e.substring(t, t + d), u = parseInt(a, 10) + l;
                    for (i && (u = -u), t += d; ;) {
                        var c = e[t];
                        if ("\x00" === c) break;
                        s += c, t++;
                    }
                    s = s.split("."), n = 1 === s.length ? parseInt(s, 10) : parseFloat(s[0] + "." + s[1]), 
                    i && (n -= 10), 0 !== u && (n = parseFloat(n + "e" + u));
                }
                return {
                    num: n,
                    length: t - r
                };
            }
            function i(e, t) {
                var n = e.pop();
                if (t.length) {
                    var r = t[t.length - 1];
                    n === r.element && (t.pop(), r = t[t.length - 1]);
                    var o = r.element, i = r.index;
                    if (Array.isArray(o)) o.push(n); else if (i === e.length - 2) {
                        var s = e.pop();
                        o[s] = n;
                    } else e.push(n);
                }
            }
            function s(e, t) {
                for (var r = Math.min(e.length, t.length), o = 0; r > o; o++) {
                    var i = n.collate(e[o], t[o]);
                    if (0 !== i) return i;
                }
                return e.length === t.length ? 0 : e.length > t.length ? 1 : -1;
            }
            function a(e, t) {
                return e === t ? 0 : e > t ? 1 : -1;
            }
            function u(e, t) {
                for (var r = Object.keys(e), o = Object.keys(t), i = Math.min(r.length, o.length), s = 0; i > s; s++) {
                    var a = n.collate(r[s], o[s]);
                    if (0 !== a) return a;
                    if (a = n.collate(e[r[s]], t[o[s]]), 0 !== a) return a;
                }
                return r.length === o.length ? 0 : r.length > o.length ? 1 : -1;
            }
            function c(e) {
                var t = [ "boolean", "number", "string", "object" ], n = t.indexOf(typeof e);
                return ~n ? null === e ? 1 : Array.isArray(e) ? 5 : 3 > n ? n + 2 : n + 3 : Array.isArray(e) ? 5 : void 0;
            }
            function f(e) {
                if (0 === e) return "1";
                var t = e.toExponential().split(/e\+?/), n = parseInt(t[1], 10), r = 0 > e, o = r ? "0" : "2", i = (r ? -n : n) - l, s = p.padLeft(i.toString(), "0", d);
                o += h + s;
                var a = Math.abs(parseFloat(t[0]));
                r && (a = 10 - a);
                var u = a.toFixed(20);
                return u = u.replace(/\.?0+$/, ""), o += h + u;
            }
            var l = -324, d = 3, h = "", p = e(102);
            n.collate = function(e, t) {
                if (e === t) return 0;
                e = n.normalizeKey(e), t = n.normalizeKey(t);
                var r = c(e), o = c(t);
                if (r - o !== 0) return r - o;
                if (null === e) return 0;
                switch (typeof e) {
                  case "number":
                    return e - t;

                  case "boolean":
                    return e === t ? 0 : t > e ? -1 : 1;

                  case "string":
                    return a(e, t);
                }
                return Array.isArray(e) ? s(e, t) : u(e, t);
            }, n.normalizeKey = function(e) {
                switch (typeof e) {
                  case "undefined":
                    return null;

                  case "number":
                    return e === 1 / 0 || e === -(1 / 0) || isNaN(e) ? null : e;

                  case "object":
                    var t = e;
                    if (Array.isArray(e)) {
                        var r = e.length;
                        e = new Array(r);
                        for (var o = 0; r > o; o++) e[o] = n.normalizeKey(t[o]);
                    } else {
                        if (e instanceof Date) return e.toJSON();
                        if (null !== e) {
                            e = {};
                            for (var i in t) if (t.hasOwnProperty(i)) {
                                var s = t[i];
                                "undefined" != typeof s && (e[i] = n.normalizeKey(s));
                            }
                        }
                    }
                }
                return e;
            }, n.toIndexableString = function(e) {
                var t = "\x00";
                return e = n.normalizeKey(e), c(e) + h + r(e) + t;
            }, n.parseIndexableString = function(e) {
                for (var t = [], n = [], r = 0; ;) {
                    var s = e[r++];
                    if ("\x00" !== s) switch (s) {
                      case "1":
                        t.push(null);
                        break;

                      case "2":
                        t.push("1" === e[r]), r++;
                        break;

                      case "3":
                        var a = o(e, r);
                        t.push(a.num), r += a.length;
                        break;

                      case "4":
                        for (var u = ""; ;) {
                            var c = e[r];
                            if ("\x00" === c) break;
                            u += c, r++;
                        }
                        u = u.replace(/\u0001\u0001/g, "\x00").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, ""), 
                        t.push(u);
                        break;

                      case "5":
                        var f = {
                            element: [],
                            index: t.length
                        };
                        t.push(f.element), n.push(f);
                        break;

                      case "6":
                        var l = {
                            element: {},
                            index: t.length
                        };
                        t.push(l.element), n.push(l);
                        break;

                      default:
                        throw new Error("bad collationIndex or unexpectedly reached end of input: " + s);
                    } else {
                        if (1 === t.length) return t.pop();
                        i(t, n);
                    }
                }
            };
        }, {
            102: 102
        } ],
        102: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                for (var r = "", o = n - e.length; r.length < o; ) r += t;
                return r;
            }
            n.padLeft = function(e, t, n) {
                var o = r(e, t, n);
                return o + e;
            }, n.padRight = function(e, t, n) {
                var o = r(e, t, n);
                return e + o;
            }, n.stringLexCompare = function(e, t) {
                var n, r = e.length, o = t.length;
                for (n = 0; r > n; n++) {
                    if (n === o) return 1;
                    var i = e.charAt(n), s = t.charAt(n);
                    if (i !== s) return s > i ? -1 : 1;
                }
                return o > r ? -1 : 0;
            }, n.intToDecimalForm = function(e) {
                var t = 0 > e, n = "";
                do {
                    var r = t ? -Math.ceil(e % 10) : Math.floor(e % 10);
                    n = r + n, e = t ? Math.ceil(e / 10) : Math.floor(e / 10);
                } while (e);
                return t && "0" !== n && (n = "-" + n), n;
            };
        }, {} ],
        103: [ function(e, t, n) {
            "use strict";
            function r() {
                this.store = {};
            }
            function o(e) {
                if (this.store = new r(), e && Array.isArray(e)) for (var t = 0, n = e.length; n > t; t++) this.add(e[t]);
            }
            n.Map = r, n.Set = o, r.prototype.mangle = function(e) {
                if ("string" != typeof e) throw new TypeError("key must be a string but Got " + e);
                return "$" + e;
            }, r.prototype.unmangle = function(e) {
                return e.substring(1);
            }, r.prototype.get = function(e) {
                var t = this.mangle(e);
                return t in this.store ? this.store[t] : void 0;
            }, r.prototype.set = function(e, t) {
                var n = this.mangle(e);
                return this.store[n] = t, !0;
            }, r.prototype.has = function(e) {
                var t = this.mangle(e);
                return t in this.store;
            }, r.prototype["delete"] = function(e) {
                var t = this.mangle(e);
                return t in this.store ? (delete this.store[t], !0) : !1;
            }, r.prototype.forEach = function(e) {
                for (var t = Object.keys(this.store), n = 0, r = t.length; r > n; n++) {
                    var o = t[n], i = this.store[o];
                    o = this.unmangle(o), e(i, o);
                }
            }, o.prototype.add = function(e) {
                return this.store.set(e, !0);
            }, o.prototype.has = function(e) {
                return this.store.has(e);
            }, o.prototype["delete"] = function(e) {
                return this.store["delete"](e);
            };
        }, {} ],
        104: [ function(e, t, n) {
            !function(e) {
                if ("object" == typeof n) t.exports = e(); else if ("function" == typeof define && define.amd) define(e); else {
                    var r;
                    try {
                        r = window;
                    } catch (o) {
                        r = self;
                    }
                    r.SparkMD5 = e();
                }
            }(function(e) {
                "use strict";
                function t(e, t, n, r, o, i) {
                    return t = m(m(t, e), m(r, i)), m(t << o | t >>> 32 - o, n);
                }
                function n(e, n, r, o, i, s, a) {
                    return t(n & r | ~n & o, e, n, i, s, a);
                }
                function r(e, n, r, o, i, s, a) {
                    return t(n & o | r & ~o, e, n, i, s, a);
                }
                function o(e, n, r, o, i, s, a) {
                    return t(n ^ r ^ o, e, n, i, s, a);
                }
                function i(e, n, r, o, i, s, a) {
                    return t(r ^ (n | ~o), e, n, i, s, a);
                }
                function s(e, t) {
                    var s = e[0], a = e[1], u = e[2], c = e[3];
                    s = n(s, a, u, c, t[0], 7, -680876936), c = n(c, s, a, u, t[1], 12, -389564586), 
                    u = n(u, c, s, a, t[2], 17, 606105819), a = n(a, u, c, s, t[3], 22, -1044525330), 
                    s = n(s, a, u, c, t[4], 7, -176418897), c = n(c, s, a, u, t[5], 12, 1200080426), 
                    u = n(u, c, s, a, t[6], 17, -1473231341), a = n(a, u, c, s, t[7], 22, -45705983), 
                    s = n(s, a, u, c, t[8], 7, 1770035416), c = n(c, s, a, u, t[9], 12, -1958414417), 
                    u = n(u, c, s, a, t[10], 17, -42063), a = n(a, u, c, s, t[11], 22, -1990404162), 
                    s = n(s, a, u, c, t[12], 7, 1804603682), c = n(c, s, a, u, t[13], 12, -40341101), 
                    u = n(u, c, s, a, t[14], 17, -1502002290), a = n(a, u, c, s, t[15], 22, 1236535329), 
                    s = r(s, a, u, c, t[1], 5, -165796510), c = r(c, s, a, u, t[6], 9, -1069501632), 
                    u = r(u, c, s, a, t[11], 14, 643717713), a = r(a, u, c, s, t[0], 20, -373897302), 
                    s = r(s, a, u, c, t[5], 5, -701558691), c = r(c, s, a, u, t[10], 9, 38016083), u = r(u, c, s, a, t[15], 14, -660478335), 
                    a = r(a, u, c, s, t[4], 20, -405537848), s = r(s, a, u, c, t[9], 5, 568446438), 
                    c = r(c, s, a, u, t[14], 9, -1019803690), u = r(u, c, s, a, t[3], 14, -187363961), 
                    a = r(a, u, c, s, t[8], 20, 1163531501), s = r(s, a, u, c, t[13], 5, -1444681467), 
                    c = r(c, s, a, u, t[2], 9, -51403784), u = r(u, c, s, a, t[7], 14, 1735328473), 
                    a = r(a, u, c, s, t[12], 20, -1926607734), s = o(s, a, u, c, t[5], 4, -378558), 
                    c = o(c, s, a, u, t[8], 11, -2022574463), u = o(u, c, s, a, t[11], 16, 1839030562), 
                    a = o(a, u, c, s, t[14], 23, -35309556), s = o(s, a, u, c, t[1], 4, -1530992060), 
                    c = o(c, s, a, u, t[4], 11, 1272893353), u = o(u, c, s, a, t[7], 16, -155497632), 
                    a = o(a, u, c, s, t[10], 23, -1094730640), s = o(s, a, u, c, t[13], 4, 681279174), 
                    c = o(c, s, a, u, t[0], 11, -358537222), u = o(u, c, s, a, t[3], 16, -722521979), 
                    a = o(a, u, c, s, t[6], 23, 76029189), s = o(s, a, u, c, t[9], 4, -640364487), c = o(c, s, a, u, t[12], 11, -421815835), 
                    u = o(u, c, s, a, t[15], 16, 530742520), a = o(a, u, c, s, t[2], 23, -995338651), 
                    s = i(s, a, u, c, t[0], 6, -198630844), c = i(c, s, a, u, t[7], 10, 1126891415), 
                    u = i(u, c, s, a, t[14], 15, -1416354905), a = i(a, u, c, s, t[5], 21, -57434055), 
                    s = i(s, a, u, c, t[12], 6, 1700485571), c = i(c, s, a, u, t[3], 10, -1894986606), 
                    u = i(u, c, s, a, t[10], 15, -1051523), a = i(a, u, c, s, t[1], 21, -2054922799), 
                    s = i(s, a, u, c, t[8], 6, 1873313359), c = i(c, s, a, u, t[15], 10, -30611744), 
                    u = i(u, c, s, a, t[6], 15, -1560198380), a = i(a, u, c, s, t[13], 21, 1309151649), 
                    s = i(s, a, u, c, t[4], 6, -145523070), c = i(c, s, a, u, t[11], 10, -1120210379), 
                    u = i(u, c, s, a, t[2], 15, 718787259), a = i(a, u, c, s, t[9], 21, -343485551), 
                    e[0] = m(s, e[0]), e[1] = m(a, e[1]), e[2] = m(u, e[2]), e[3] = m(c, e[3]);
                }
                function a(e) {
                    var t, n = [];
                    for (t = 0; 64 > t; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                    return n;
                }
                function u(e) {
                    var t, n = [];
                    for (t = 0; 64 > t; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                    return n;
                }
                function c(e) {
                    var t, n, r, o, i, u, c = e.length, f = [ 1732584193, -271733879, -1732584194, 271733878 ];
                    for (t = 64; c >= t; t += 64) s(f, a(e.substring(t - 64, t)));
                    for (e = e.substring(t - 64), n = e.length, r = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                    t = 0; n > t; t += 1) r[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                    if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (s(f, r), t = 0; 16 > t; t += 1) r[t] = 0;
                    return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(o[2], 16), 
                    u = parseInt(o[1], 16) || 0, r[14] = i, r[15] = u, s(f, r), f;
                }
                function f(e) {
                    var t, n, r, o, i, a, c = e.length, f = [ 1732584193, -271733879, -1732584194, 271733878 ];
                    for (t = 64; c >= t; t += 64) s(f, u(e.subarray(t - 64, t)));
                    for (e = c > t - 64 ? e.subarray(t - 64) : new Uint8Array(0), n = e.length, r = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                    t = 0; n > t; t += 1) r[t >> 2] |= e[t] << (t % 4 << 3);
                    if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (s(f, r), t = 0; 16 > t; t += 1) r[t] = 0;
                    return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(o[2], 16), 
                    a = parseInt(o[1], 16) || 0, r[14] = i, r[15] = a, s(f, r), f;
                }
                function l(e) {
                    var t, n = "";
                    for (t = 0; 4 > t; t += 1) n += g[e >> 8 * t + 4 & 15] + g[e >> 8 * t & 15];
                    return n;
                }
                function d(e) {
                    var t;
                    for (t = 0; t < e.length; t += 1) e[t] = l(e[t]);
                    return e.join("");
                }
                function h(e) {
                    return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
                }
                function p(e, t) {
                    var n, r = e.length, o = new ArrayBuffer(r), i = new Uint8Array(o);
                    for (n = 0; r > n; n++) i[n] = e.charCodeAt(n);
                    return t ? i : o;
                }
                function v(e) {
                    return String.fromCharCode.apply(null, new Uint8Array(e));
                }
                function _(e, t, n) {
                    var r = new Uint8Array(e.byteLength + t.byteLength);
                    return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer;
                }
                function y() {
                    this.reset();
                }
                var m = function(e, t) {
                    return e + t & 4294967295;
                }, g = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
                return "5d41402abc4b2a76b9719d911017c592" !== d(c("hello")) && (m = function(e, t) {
                    var n = (65535 & e) + (65535 & t), r = (e >> 16) + (t >> 16) + (n >> 16);
                    return r << 16 | 65535 & n;
                }), y.prototype.append = function(e) {
                    return this.appendBinary(h(e)), this;
                }, y.prototype.appendBinary = function(e) {
                    this._buff += e, this._length += e.length;
                    var t, n = this._buff.length;
                    for (t = 64; n >= t; t += 64) s(this._hash, a(this._buff.substring(t - 64, t)));
                    return this._buff = this._buff.substring(t - 64), this;
                }, y.prototype.end = function(e) {
                    var t, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                    for (t = 0; o > t; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                    return this._finish(i, o), n = e ? this._hash : d(this._hash), this.reset(), n;
                }, y.prototype.reset = function() {
                    return this._buff = "", this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
                    this;
                }, y.prototype.getState = function() {
                    return {
                        buff: this._buff,
                        length: this._length,
                        hash: this._hash
                    };
                }, y.prototype.setState = function(e) {
                    return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this;
                }, y.prototype.destroy = function() {
                    delete this._hash, delete this._buff, delete this._length;
                }, y.prototype._finish = function(e, t) {
                    var n, r, o, i = t;
                    if (e[i >> 2] |= 128 << (i % 4 << 3), i > 55) for (s(this._hash, e), i = 0; 16 > i; i += 1) e[i] = 0;
                    n = 8 * this._length, n = n.toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(n[2], 16), 
                    o = parseInt(n[1], 16) || 0, e[14] = r, e[15] = o, s(this._hash, e);
                }, y.hash = function(e, t) {
                    return y.hashBinary(h(e), t);
                }, y.hashBinary = function(e, t) {
                    var n = c(e);
                    return t ? n : d(n);
                }, y.ArrayBuffer = function() {
                    this.reset();
                }, y.ArrayBuffer.prototype.append = function(e) {
                    var t, n = _(this._buff.buffer, e, !0), r = n.length;
                    for (this._length += e.byteLength, t = 64; r >= t; t += 64) s(this._hash, u(n.subarray(t - 64, t)));
                    return this._buff = r > t - 64 ? n.subarray(t - 64) : new Uint8Array(0), this;
                }, y.ArrayBuffer.prototype.end = function(e) {
                    var t, n, r = this._buff, o = r.length, i = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
                    for (t = 0; o > t; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                    return this._finish(i, o), n = e ? this._hash : d(this._hash), this.reset(), n;
                }, y.ArrayBuffer.prototype.reset = function() {
                    return this._buff = new Uint8Array(0), this._length = 0, this._hash = [ 1732584193, -271733879, -1732584194, 271733878 ], 
                    this;
                }, y.ArrayBuffer.prototype.getState = function() {
                    var e = y.prototype.getState.call(this);
                    return e.buff = v(e.buff), e;
                }, y.ArrayBuffer.prototype.setState = function(e) {
                    return e.buff = p(e.buff, !0), y.prototype.setState.call(this, e);
                }, y.ArrayBuffer.prototype.destroy = y.prototype.destroy, y.ArrayBuffer.prototype._finish = y.prototype._finish, 
                y.ArrayBuffer.hash = function(e, t) {
                    var n = f(new Uint8Array(e));
                    return t ? n : d(n);
                }, y;
            });
        }, {} ],
        105: [ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                var r = n[n.length - 1];
                e === r.element && (n.pop(), r = n[n.length - 1]);
                var o = r.element, i = r.index;
                if (Array.isArray(o)) o.push(e); else if (i === t.length - 2) {
                    var s = t.pop();
                    o[s] = e;
                } else t.push(e);
            }
            n.stringify = function(e) {
                var t = [];
                t.push({
                    obj: e
                });
                for (var n, r, o, i, s, a, u, c, f, l, d, h = ""; n = t.pop(); ) if (r = n.obj, 
                o = n.prefix || "", i = n.val || "", h += o, i) h += i; else if ("object" != typeof r) h += "undefined" == typeof r ? null : JSON.stringify(r); else if (null === r) h += "null"; else if (Array.isArray(r)) {
                    for (t.push({
                        val: "]"
                    }), s = r.length - 1; s >= 0; s--) a = 0 === s ? "" : ",", t.push({
                        obj: r[s],
                        prefix: a
                    });
                    t.push({
                        val: "["
                    });
                } else {
                    u = [];
                    for (c in r) r.hasOwnProperty(c) && u.push(c);
                    for (t.push({
                        val: "}"
                    }), s = u.length - 1; s >= 0; s--) f = u[s], l = r[f], d = s > 0 ? "," : "", d += JSON.stringify(f) + ":", 
                    t.push({
                        obj: l,
                        prefix: d
                    });
                    t.push({
                        val: "{"
                    });
                }
                return h;
            }, n.parse = function(e) {
                for (var t, n, o, i, s, a, u, c, f, l = [], d = [], h = 0; ;) if (t = e[h++], "}" !== t && "]" !== t && "undefined" != typeof t) switch (t) {
                  case " ":
                  case "	":
                  case "\n":
                  case ":":
                  case ",":
                    break;

                  case "n":
                    h += 3, r(null, l, d);
                    break;

                  case "t":
                    h += 3, r(!0, l, d);
                    break;

                  case "f":
                    h += 4, r(!1, l, d);
                    break;

                  case "0":
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                  case "-":
                    for (n = "", h--; ;) {
                        if (o = e[h++], !/[\d\.\-e\+]/.test(o)) {
                            h--;
                            break;
                        }
                        n += o;
                    }
                    r(parseFloat(n), l, d);
                    break;

                  case '"':
                    for (i = "", s = void 0, a = 0; u = e[h++], '"' !== u || "\\" === s && a % 2 === 1; ) i += u, 
                    s = u, "\\" === s ? a++ : a = 0;
                    r(JSON.parse('"' + i + '"'), l, d);
                    break;

                  case "[":
                    c = {
                        element: [],
                        index: l.length
                    }, l.push(c.element), d.push(c);
                    break;

                  case "{":
                    f = {
                        element: {},
                        index: l.length
                    }, l.push(f.element), d.push(f);
                    break;

                  default:
                    throw new Error("unexpectedly reached end of input: " + t);
                } else {
                    if (1 === l.length) return l.pop();
                    r(l.pop(), l, d);
                }
            };
        }, {} ],
        106: [ function(e, t, n) {
            "use strict";
            var r = e(86);
            t.exports = r, r.ajax = e(23), r.utils = e(89), r.Errors = e(48), r.replicate = e(83).replicate, 
            r.sync = e(87), r.version = e(90);
            var o = e(3);
            r.adapter("http", o), r.adapter("https", o), r.plugin(e(75));
            var i = e(2);
            Object.keys(i).forEach(function(e) {
                r.adapter(e, i[e], !0);
            });
        }, {
            2: 2,
            23: 23,
            3: 3,
            48: 48,
            75: 75,
            83: 83,
            86: 86,
            87: 87,
            89: 89,
            90: 90
        } ]
    }, {}, [ 106 ])(106);
}), !function(t) {
    if ("function" == typeof define && define.amd && define("uikit", function() {
        var i = window.UIkit || t(window, window.jQuery, window.document);
        return i.load = function(t, e, n, o) {
            var s, a = t.split(","), r = [], l = (o.config && o.config.uikit && o.config.uikit.base ? o.config.uikit.base : "").replace(/\/+$/g, "");
            if (!l) throw new Error("Please define base path to UIkit in the requirejs config.");
            for (s = 0; s < a.length; s += 1) {
                var c = a[s].replace(/\./g, "/");
                r.push(l + "/components/" + c);
            }
            e(r, function() {
                n(i);
            });
        }, i;
    }), !window.jQuery) throw new Error("UIkit requires jQuery");
    window && window.jQuery && t(window, window.jQuery, window.document);
}(function(t, i, e) {
    "use strict";
    var n = {}, o = t.UIkit ? Object.create(t.UIkit) : void 0;
    if (n.version = "2.24.3", n.noConflict = function() {
        return o && (t.UIkit = o, i.UIkit = o, i.fn.uk = o.fn), n;
    }, n.prefix = function(t) {
        return t;
    }, n.$ = i, n.$doc = n.$(document), n.$win = n.$(window), n.$html = n.$("html"), 
    n.support = {}, n.support.transition = function() {
        var t = function() {
            var t, i = e.body || e.documentElement, n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (t in n) if (void 0 !== i.style[t]) return n[t];
        }();
        return t && {
            end: t
        };
    }(), n.support.animation = function() {
        var t = function() {
            var t, i = e.body || e.documentElement, n = {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend"
            };
            for (t in n) if (void 0 !== i.style[t]) return n[t];
        }();
        return t && {
            end: t
        };
    }(), function() {
        Date.now = Date.now || function() {
            return new Date().getTime();
        };
        for (var t = [ "webkit", "moz" ], i = 0; i < t.length && !window.requestAnimationFrame; ++i) {
            var e = t[i];
            window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var n = 0;
            window.requestAnimationFrame = function(t) {
                var i = Date.now(), e = Math.max(n + 16, i);
                return setTimeout(function() {
                    t(n = e);
                }, e - i);
            }, window.cancelAnimationFrame = clearTimeout;
        }
    }(), n.support.touch = "ontouchstart" in document || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, 
    n.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || null, 
    n.Utils = {}, n.Utils.isFullscreen = function() {
        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1;
    }, n.Utils.str2json = function(t, i) {
        try {
            return i ? JSON.parse(t.replace(/([\$\w]+)\s*:/g, function(t, i) {
                return '"' + i + '":';
            }).replace(/'([^']+)'/g, function(t, i) {
                return '"' + i + '"';
            })) : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")();
        } catch (e) {
            return !1;
        }
    }, n.Utils.debounce = function(t, i, e) {
        var n;
        return function() {
            var o = this, s = arguments, a = function() {
                n = null, e || t.apply(o, s);
            }, r = e && !n;
            clearTimeout(n), n = setTimeout(a, i), r && t.apply(o, s);
        };
    }, n.Utils.removeCssRules = function(t) {
        var i, e, n, o, s, a, r, l, c, u;
        t && setTimeout(function() {
            try {
                for (u = document.styleSheets, o = 0, r = u.length; r > o; o++) {
                    for (n = u[o], e = [], n.cssRules = n.cssRules, i = s = 0, l = n.cssRules.length; l > s; i = ++s) n.cssRules[i].type === CSSRule.STYLE_RULE && t.test(n.cssRules[i].selectorText) && e.unshift(i);
                    for (a = 0, c = e.length; c > a; a++) n.deleteRule(e[a]);
                }
            } catch (h) {}
        }, 0);
    }, n.Utils.isInView = function(t, e) {
        var o = i(t);
        if (!o.is(":visible")) return !1;
        var s = n.$win.scrollLeft(), a = n.$win.scrollTop(), r = o.offset(), l = r.left, c = r.top;
        return e = i.extend({
            topoffset: 0,
            leftoffset: 0
        }, e), c + o.height() >= a && c - e.topoffset <= a + n.$win.height() && l + o.width() >= s && l - e.leftoffset <= s + n.$win.width() ? !0 : !1;
    }, n.Utils.checkDisplay = function(t, e) {
        var o = n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", t || document);
        return t && !o.length && (o = i(t)), o.trigger("display.uk.check"), e && ("string" != typeof e && (e = '[class*="uk-animation-"]'), 
        o.find(e).each(function() {
            var t = n.$(this), i = t.attr("class"), e = i.match(/uk\-animation\-(.+)/);
            t.removeClass(e[0]).width(), t.addClass(e[0]);
        })), o;
    }, n.Utils.options = function(t) {
        if ("string" != i.type(t)) return t;
        -1 != t.indexOf(":") && "}" != t.trim().substr(-1) && (t = "{" + t + "}");
        var e = t ? t.indexOf("{") : -1, o = {};
        if (-1 != e) try {
            o = n.Utils.str2json(t.substr(e));
        } catch (s) {}
        return o;
    }, n.Utils.animate = function(t, e) {
        var o = i.Deferred();
        return t = n.$(t), e = e, t.css("display", "none").addClass(e).one(n.support.animation.end, function() {
            t.removeClass(e), o.resolve();
        }).width(), t.css("display", ""), o.promise();
    }, n.Utils.uid = function(t) {
        return (t || "id") + new Date().getTime() + "RAND" + Math.ceil(1e5 * Math.random());
    }, n.Utils.template = function(t, i) {
        for (var e, n, o, s, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), r = 0, l = [], c = 0; r < a.length; ) {
            if (e = a[r], e.match(/\{\{\s*(.+?)\s*\}\}/)) switch (r += 1, e = a[r], n = e[0], 
            o = e.substring(e.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {
              case "~":
                l.push("for(var $i=0;$i<" + o + ".length;$i++) { var $item = " + o + "[$i];"), c++;
                break;

              case ":":
                l.push("for(var $key in " + o + ") { var $val = " + o + "[$key];"), c++;
                break;

              case "#":
                l.push("if(" + o + ") {"), c++;
                break;

              case "^":
                l.push("if(!" + o + ") {"), c++;
                break;

              case "/":
                l.push("}"), c--;
                break;

              case "!":
                l.push("__ret.push(" + o + ");");
                break;

              default:
                l.push("__ret.push(escape(" + o + "));");
            } else l.push("__ret.push('" + e.replace(/\'/g, "\\'") + "');");
            r += 1;
        }
        return s = new Function("$data", [ "var __ret = [];", "try {", "with($data){", c ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}" ].join("\n")), 
        i ? s(i) : s;
    }, n.Utils.events = {}, n.Utils.events.click = n.support.touch ? "tap" : "click", 
    t.UIkit = n, n.fn = function(t, e) {
        var o = arguments, s = t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), a = s[1], r = s[2];
        return n[a] ? this.each(function() {
            var t = i(this), s = t.data(a);
            s || t.data(a, s = n[a](this, r ? void 0 : e)), r && s[r].apply(s, Array.prototype.slice.call(o, 1));
        }) : (i.error("UIkit component [" + a + "] does not exist."), this);
    }, i.UIkit = n, i.fn.uk = n.fn, n.langdirection = "rtl" == n.$html.attr("dir") ? "right" : "left", 
    n.components = {}, n.component = function(t, e) {
        var o = function(e, s) {
            var a = this;
            return this.UIkit = n, this.element = e ? n.$(e) : null, this.options = i.extend(!0, {}, this.defaults, s), 
            this.plugins = {}, this.element && this.element.data(t, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(o.plugins)).forEach(function(t) {
                o.plugins[t].init && (o.plugins[t].init(a), a.plugins[t] = !0);
            }), this.trigger("init.uk.component", [ t, this ]), this;
        };
        return o.plugins = {}, i.extend(!0, o.prototype, {
            defaults: {
                plugins: []
            },
            boot: function() {},
            init: function() {},
            on: function(t, i, e) {
                return n.$(this.element || this).on(t, i, e);
            },
            one: function(t, i, e) {
                return n.$(this.element || this).one(t, i, e);
            },
            off: function(t) {
                return n.$(this.element || this).off(t);
            },
            trigger: function(t, i) {
                return n.$(this.element || this).trigger(t, i);
            },
            find: function(t) {
                return n.$(this.element ? this.element : []).find(t);
            },
            proxy: function(t, i) {
                var e = this;
                i.split(" ").forEach(function(i) {
                    e[i] || (e[i] = function() {
                        return t[i].apply(t, arguments);
                    });
                });
            },
            mixin: function(t, i) {
                var e = this;
                i.split(" ").forEach(function(i) {
                    e[i] || (e[i] = t[i].bind(e));
                });
            },
            option: function() {
                return 1 == arguments.length ? this.options[arguments[0]] || void 0 : void (2 == arguments.length && (this.options[arguments[0]] = arguments[1]));
            }
        }, e), this.components[t] = o, this[t] = function() {
            var e, o;
            if (arguments.length) switch (arguments.length) {
              case 1:
                "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? e = i(arguments[0]) : o = arguments[0];
                break;

              case 2:
                e = i(arguments[0]), o = arguments[1];
            }
            return e && e.data(t) ? e.data(t) : new n.components[t](e, o);
        }, n.domready && n.component.boot(t), o;
    }, n.plugin = function(t, i, e) {
        this.components[t].plugins[i] = e;
    }, n.component.boot = function(t) {
        n.components[t].prototype && n.components[t].prototype.boot && !n.components[t].booted && (n.components[t].prototype.boot.apply(n, []), 
        n.components[t].booted = !0);
    }, n.component.bootComponents = function() {
        for (var t in n.components) n.component.boot(t);
    }, n.domObservers = [], n.domready = !1, n.ready = function(t) {
        n.domObservers.push(t), n.domready && t(document);
    }, n.on = function(t, i, e) {
        return t && t.indexOf("ready.uk.dom") > -1 && n.domready && i.apply(n.$doc), n.$doc.on(t, i, e);
    }, n.one = function(t, i, e) {
        return t && t.indexOf("ready.uk.dom") > -1 && n.domready ? (i.apply(n.$doc), n.$doc) : n.$doc.one(t, i, e);
    }, n.trigger = function(t, i) {
        return n.$doc.trigger(t, i);
    }, n.domObserve = function(t, i) {
        n.support.mutationobserver && (i = i || function() {}, n.$(t).each(function() {
            var t = this, e = n.$(t);
            if (!e.data("observer")) try {
                var o = new n.support.mutationobserver(n.Utils.debounce(function() {
                    i.apply(t, []), e.trigger("changed.uk.dom");
                }, 50));
                o.observe(t, {
                    childList: !0,
                    subtree: !0
                }), e.data("observer", o);
            } catch (s) {}
        }));
    }, n.init = function(t) {
        t = t || document, n.domObservers.forEach(function(i) {
            i(t);
        });
    }, n.on("domready.uk.dom", function() {
        n.init(), n.domready && n.Utils.checkDisplay();
    }), document.addEventListener("DOMContentLoaded", function() {
        var t = function() {
            n.$body = n.$("body"), n.ready(function() {
                n.domObserve("[data-uk-observe]");
            }), n.on("changed.uk.dom", function(t) {
                n.init(t.target), n.Utils.checkDisplay(t.target);
            }), n.trigger("beforeready.uk.dom"), n.component.bootComponents(), requestAnimationFrame(function() {
                var t, i = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }, e = function() {
                    (i.x != window.pageXOffset || i.y != window.pageYOffset) && (t = {
                        x: 0,
                        y: 0
                    }, window.pageXOffset != i.x && (t.x = window.pageXOffset > i.x ? 1 : -1), window.pageYOffset != i.y && (t.y = window.pageYOffset > i.y ? 1 : -1), 
                    i = {
                        dir: t,
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }, n.$doc.trigger("scrolling.uk.document", [ i ])), requestAnimationFrame(e);
                };
                return n.support.touch && n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", e), 
                (i.x || i.y) && e(), e;
            }()), n.trigger("domready.uk.dom"), n.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && n.$win.on("load orientationchange resize", n.Utils.debounce(function() {
                var t = function() {
                    return i(".uk-height-viewport").css("height", window.innerHeight), t;
                };
                return t();
            }(), 100)), n.trigger("afterready.uk.dom"), n.domready = !0;
        };
        return ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(t), 
        t;
    }()), n.$html.addClass(n.support.touch ? "uk-touch" : "uk-notouch"), n.support.touch) {
        var s, a = !1, r = "uk-hover", l = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
        n.$html.on("mouseenter touchstart MSPointerDown pointerdown", l, function() {
            a && i("." + r).removeClass(r), a = i(this).addClass(r);
        }).on("mouseleave touchend MSPointerUp pointerup", function(t) {
            s = i(t.target).parents(l), a && a.not(s).removeClass(r);
        });
    }
    return n;
}), function(t) {
    function i(t, i, e, n) {
        return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down";
    }
    function e() {
        c = null, h.last && (void 0 !== h.el && h.el.trigger("longTap"), h = {});
    }
    function n() {
        c && clearTimeout(c), c = null;
    }
    function o() {
        a && clearTimeout(a), r && clearTimeout(r), l && clearTimeout(l), c && clearTimeout(c), 
        a = r = l = c = null, h = {};
    }
    function s(t) {
        return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary;
    }
    if (!t.fn.swipeLeft) {
        var a, r, l, c, u, h = {}, d = 750;
        t(function() {
            var p, f, m, g = 0, v = 0;
            "MSGesture" in window && (u = new MSGesture(), u.target = document.body), t(document).on("MSGestureEnd gestureend", function(t) {
                var i = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
                i && void 0 !== h.el && (h.el.trigger("swipe"), h.el.trigger("swipe" + i));
            }).on("touchstart MSPointerDown pointerdown", function(i) {
                ("MSPointerDown" != i.type || s(i.originalEvent)) && (m = "MSPointerDown" == i.type || "pointerdown" == i.type ? i : i.originalEvent.touches[0], 
                p = Date.now(), f = p - (h.last || p), h.el = t("tagName" in m.target ? m.target : m.target.parentNode), 
                a && clearTimeout(a), h.x1 = m.pageX, h.y1 = m.pageY, f > 0 && 250 >= f && (h.isDoubleTap = !0), 
                h.last = p, c = setTimeout(e, d), !u || "MSPointerDown" != i.type && "pointerdown" != i.type && "touchstart" != i.type || u.addPointer(i.originalEvent.pointerId));
            }).on("touchmove MSPointerMove pointermove", function(t) {
                ("MSPointerMove" != t.type || s(t.originalEvent)) && (m = "MSPointerMove" == t.type || "pointermove" == t.type ? t : t.originalEvent.touches[0], 
                n(), h.x2 = m.pageX, h.y2 = m.pageY, g += Math.abs(h.x1 - h.x2), v += Math.abs(h.y1 - h.y2));
            }).on("touchend MSPointerUp pointerup", function(e) {
                ("MSPointerUp" != e.type || s(e.originalEvent)) && (n(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? l = setTimeout(function() {
                    void 0 !== h.el && (h.el.trigger("swipe"), h.el.trigger("swipe" + i(h.x1, h.x2, h.y1, h.y2))), 
                    h = {};
                }, 0) : "last" in h && (isNaN(g) || 30 > g && 30 > v ? r = setTimeout(function() {
                    var i = t.Event("tap");
                    i.cancelTouch = o, void 0 !== h.el && h.el.trigger(i), h.isDoubleTap ? (void 0 !== h.el && h.el.trigger("doubleTap"), 
                    h = {}) : a = setTimeout(function() {
                        a = null, void 0 !== h.el && h.el.trigger("singleTap"), h = {};
                    }, 250);
                }, 0) : h = {}, g = v = 0));
            }).on("touchcancel MSPointerCancel", o), t(window).on("scroll", o);
        }), [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(i) {
            t.fn[i] = function(e) {
                return t(this).on(i, e);
            };
        });
    }
}(jQuery), function(t) {
    "use strict";
    var i = [];
    t.component("stackMargin", {
        defaults: {
            cls: "uk-margin-small-top",
            rowfirst: !1
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-margin]", i).each(function() {
                    var i, e = t.$(this);
                    e.data("stackMargin") || (i = t.stackMargin(e, t.Utils.options(e.attr("data-uk-margin"))));
                });
            });
        },
        init: function() {
            var e = this;
            this.columns = [], t.$win.on("resize orientationchange", function() {
                var i = function() {
                    e.process();
                };
                return t.$(function() {
                    i(), t.$win.on("load", i);
                }), t.Utils.debounce(i, 20);
            }()), t.$html.on("changed.uk.dom", function() {
                e.process();
            }), this.on("display.uk.check", function() {
                this.element.is(":visible") && this.process();
            }.bind(this)), i.push(this);
        },
        process: function() {
            var i = this;
            if (this.columns = this.element.children(), t.Utils.stackMargin(this.columns, this.options), 
            !this.options.rowfirst) return this;
            var e = this.columns.removeClass(this.options.rowfirst).filter(":visible").first().position();
            return e && this.columns.each(function() {
                t.$(this)[t.$(this).position().left == e.left ? "addClass" : "removeClass"](i.options.rowfirst);
            }), this;
        },
        revert: function() {
            return this.columns.removeClass(this.options.cls), this;
        }
    }), function() {
        var i = [], e = function(t) {
            if (t.is(":visible")) {
                var i = t.parent().width(), e = t.data("width"), n = i / e, o = Math.floor(n * t.data("height"));
                t.css({
                    height: e > i ? o : t.data("height")
                });
            }
        };
        t.component("responsiveElement", {
            defaults: {},
            boot: function() {
                t.ready(function(i) {
                    t.$("iframe.uk-responsive-width, [data-uk-responsive]", i).each(function() {
                        var i, e = t.$(this);
                        e.data("responsiveIframe") || (i = t.responsiveElement(e, {}));
                    });
                });
            },
            init: function() {
                var t = this.element;
                t.attr("width") && t.attr("height") && (t.data({
                    width: t.attr("width"),
                    height: t.attr("height")
                }).on("display.uk.check", function() {
                    e(t);
                }), e(t), i.push(t));
            }
        }), t.$win.on("resize load", t.Utils.debounce(function() {
            i.forEach(function(t) {
                e(t);
            });
        }, 15));
    }(), t.Utils.stackMargin = function(i, e) {
        e = t.$.extend({
            cls: "uk-margin-small-top"
        }, e), e.cls = e.cls, i = t.$(i).removeClass(e.cls);
        var n = !1, o = i.filter(":visible:first"), s = o.length ? o.position().top + o.outerHeight() - 1 : !1;
        s !== !1 && 1 != i.length && i.each(function() {
            var i = t.$(this);
            i.is(":visible") && (n ? i.addClass(e.cls) : i.position().top >= s && (n = i.addClass(e.cls)));
        });
    }, t.Utils.matchHeights = function(i, e) {
        i = t.$(i).css("min-height", ""), e = t.$.extend({
            row: !0
        }, e);
        var n = function(i) {
            if (!(i.length < 2)) {
                var e = 0;
                i.each(function() {
                    e = Math.max(e, t.$(this).outerHeight());
                }).each(function() {
                    var i = t.$(this), n = e - ("border-box" == i.css("box-sizing") ? 0 : i.outerHeight() - i.height());
                    i.css("min-height", n + "px");
                });
            }
        };
        e.row ? (i.first().width(), setTimeout(function() {
            var e = !1, o = [];
            i.each(function() {
                var i = t.$(this), s = i.offset().top;
                s != e && o.length && (n(t.$(o)), o = [], s = i.offset().top), o.push(i), e = s;
            }), o.length && n(t.$(o));
        }, 0)) : n(i);
    }, function(i) {
        t.Utils.inlineSvg = function(e, n) {
            t.$(e || 'img[src$=".svg"]', n || document).each(function() {
                var e = t.$(this), n = e.attr("src");
                if (!i[n]) {
                    var o = t.$.Deferred();
                    t.$.get(n, {
                        nc: Math.random()
                    }, function(i) {
                        o.resolve(t.$(i).find("svg"));
                    }), i[n] = o.promise();
                }
                i[n].then(function(i) {
                    var n = t.$(i).clone();
                    e.attr("id") && n.attr("id", e.attr("id")), e.attr("class") && n.attr("class", e.attr("class")), 
                    e.attr("style") && n.attr("style", e.attr("style")), e.attr("width") && (n.attr("width", e.attr("width")), 
                    e.attr("height") || n.removeAttr("height")), e.attr("height") && (n.attr("height", e.attr("height")), 
                    e.attr("width") || n.removeAttr("width")), e.replaceWith(n);
                });
            });
        }, t.ready(function(i) {
            t.Utils.inlineSvg("[data-uk-svg]", i);
        });
    }({});
}(UIkit), function(t) {
    "use strict";
    function i(i, e) {
        e = t.$.extend({
            duration: 1e3,
            transition: "easeOutExpo",
            offset: 0,
            complete: function() {}
        }, e);
        var n = i.offset().top - e.offset, o = t.$doc.height(), s = window.innerHeight;
        n + s > o && (n = o - s), t.$("html,body").stop().animate({
            scrollTop: n
        }, e.duration, e.transition).promise().done(e.complete);
    }
    t.component("smoothScroll", {
        boot: function() {
            t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function() {
                var i = t.$(this);
                return i.data("smoothScroll") || (t.smoothScroll(i, t.Utils.options(i.attr("data-uk-smooth-scroll"))), 
                i.trigger("click")), !1;
            });
        },
        init: function() {
            var e = this;
            this.on("click", function(n) {
                n.preventDefault(), i(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), e.options);
            });
        }
    }), t.Utils.scrollToElement = i, t.$.easing.easeOutExpo || (t.$.easing.easeOutExpo = function(t, i, e, n, o) {
        return i == o ? e + n : n * (-Math.pow(2, -10 * i / o) + 1) + e;
    });
}(UIkit), function(t) {
    "use strict";
    var i = t.$win, e = t.$doc, n = [], o = function() {
        for (var t = 0; t < n.length; t++) window.requestAnimationFrame.apply(window, [ n[t].check ]);
    };
    t.component("scrollspy", {
        defaults: {
            target: !1,
            cls: "uk-scrollspy-inview",
            initcls: "uk-scrollspy-init-inview",
            topoffset: 0,
            leftoffset: 0,
            repeat: !1,
            delay: 0
        },
        boot: function() {
            e.on("scrolling.uk.document", o), i.on("load resize orientationchange", t.Utils.debounce(o, 50)), 
            t.ready(function(i) {
                t.$("[data-uk-scrollspy]", i).each(function() {
                    var i = t.$(this);
                    i.data("scrollspy") || t.scrollspy(i, t.Utils.options(i.attr("data-uk-scrollspy")));
                });
            });
        },
        init: function() {
            var i, e = this, o = this.options.cls.split(/,/), s = function() {
                var n = e.options.target ? e.element.find(e.options.target) : e.element, s = 1 === n.length ? 1 : 0, a = 0;
                n.each(function() {
                    var n = t.$(this), r = n.data("inviewstate"), l = t.Utils.isInView(n, e.options), c = n.data("ukScrollspyCls") || o[a].trim();
                    !l || r || n.data("scrollspy-idle") || (i || (n.addClass(e.options.initcls), e.offset = n.offset(), 
                    i = !0, n.trigger("init.uk.scrollspy")), n.data("scrollspy-idle", setTimeout(function() {
                        n.addClass("uk-scrollspy-inview").toggleClass(c).width(), n.trigger("inview.uk.scrollspy"), 
                        n.data("scrollspy-idle", !1), n.data("inviewstate", !0);
                    }, e.options.delay * s)), s++), !l && r && e.options.repeat && (n.data("scrollspy-idle") && clearTimeout(n.data("scrollspy-idle")), 
                    n.removeClass("uk-scrollspy-inview").toggleClass(c), n.data("inviewstate", !1), 
                    n.trigger("outview.uk.scrollspy")), a = o[a + 1] ? a + 1 : 0;
                });
            };
            s(), this.check = s, n.push(this);
        }
    });
    var s = [], a = function() {
        for (var t = 0; t < s.length; t++) window.requestAnimationFrame.apply(window, [ s[t].check ]);
    };
    t.component("scrollspynav", {
        defaults: {
            cls: "uk-active",
            closest: !1,
            topoffset: 0,
            leftoffset: 0,
            smoothscroll: !1
        },
        boot: function() {
            e.on("scrolling.uk.document", a), i.on("resize orientationchange", t.Utils.debounce(a, 50)), 
            t.ready(function(i) {
                t.$("[data-uk-scrollspy-nav]", i).each(function() {
                    var i = t.$(this);
                    i.data("scrollspynav") || t.scrollspynav(i, t.Utils.options(i.attr("data-uk-scrollspy-nav")));
                });
            });
        },
        init: function() {
            var e, n = [], o = this.find("a[href^='#']").each(function() {
                "#" !== this.getAttribute("href").trim() && n.push(this.getAttribute("href"));
            }), a = t.$(n.join(",")), r = this.options.cls, l = this.options.closest || this.options.closest, c = this, u = function() {
                e = [];
                for (var n = 0; n < a.length; n++) t.Utils.isInView(a.eq(n), c.options) && e.push(a.eq(n));
                if (e.length) {
                    var s, u = i.scrollTop(), h = function() {
                        for (var t = 0; t < e.length; t++) if (e[t].offset().top >= u) return e[t];
                    }();
                    if (!h) return;
                    c.options.closest ? (o.blur().closest(l).removeClass(r), s = o.filter("a[href='#" + h.attr("id") + "']").closest(l).addClass(r)) : s = o.removeClass(r).filter("a[href='#" + h.attr("id") + "']").addClass(r), 
                    c.element.trigger("inview.uk.scrollspynav", [ h, s ]);
                }
            };
            this.options.smoothscroll && t.smoothScroll && o.each(function() {
                t.smoothScroll(this, c.options.smoothscroll);
            }), u(), this.element.data("scrollspynav", this), this.check = u, s.push(this);
        }
    });
}(UIkit), function(t) {
    "use strict";
    var i = [];
    t.component("toggle", {
        defaults: {
            target: !1,
            cls: "uk-hidden",
            animation: !1,
            duration: 200
        },
        boot: function() {
            t.ready(function(e) {
                t.$("[data-uk-toggle]", e).each(function() {
                    var i = t.$(this);
                    i.data("toggle") || t.toggle(i, t.Utils.options(i.attr("data-uk-toggle")));
                }), setTimeout(function() {
                    i.forEach(function(t) {
                        t.getToggles();
                    });
                }, 0);
            });
        },
        init: function() {
            var t = this;
            this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.getToggles(), this.on("click", function(i) {
                t.element.is('a[href="#"]') && i.preventDefault(), t.toggle();
            }), i.push(this);
        },
        toggle: function() {
            if (this.totoggle.length) {
                if (this.options.animation && t.support.animation) {
                    var i = this, e = this.options.animation.split(",");
                    1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), 
                    this.totoggle.each(function() {
                        var n = t.$(this);
                        n.hasClass(i.options.cls) ? (n.toggleClass(i.options.cls), t.Utils.animate(n, e[0]).then(function() {
                            n.css("animation-duration", ""), t.Utils.checkDisplay(n);
                        })) : t.Utils.animate(this, e[1] + " uk-animation-reverse").then(function() {
                            n.toggleClass(i.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(n);
                        });
                    });
                } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);
                this.updateAria();
            }
        },
        getToggles: function() {
            this.totoggle = this.options.target ? t.$(this.options.target) : [], this.updateAria();
        },
        updateAria: function() {
            this.aria && this.totoggle.length && this.totoggle.each(function() {
                t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"));
            });
        }
    });
}(UIkit), function(t) {
    "use strict";
    t.component("alert", {
        defaults: {
            fade: !0,
            duration: 200,
            trigger: ".uk-alert-close"
        },
        boot: function() {
            t.$html.on("click.alert.uikit", "[data-uk-alert]", function(i) {
                var e = t.$(this);
                if (!e.data("alert")) {
                    var n = t.alert(e, t.Utils.options(e.attr("data-uk-alert")));
                    t.$(i.target).is(n.options.trigger) && (i.preventDefault(), n.close());
                }
            });
        },
        init: function() {
            var t = this;
            this.on("click", this.options.trigger, function(i) {
                i.preventDefault(), t.close();
            });
        },
        close: function() {
            var t = this.trigger("close.uk.alert"), i = function() {
                this.trigger("closed.uk.alert").remove();
            }.bind(this);
            this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({
                height: 0,
                opacity: 0,
                "padding-top": 0,
                "padding-bottom": 0,
                "margin-top": 0,
                "margin-bottom": 0
            }, this.options.duration, i) : i();
        }
    });
}(UIkit), function(t) {
    "use strict";
    t.component("buttonRadio", {
        defaults: {
            activeClass: "uk-active",
            target: ".uk-button"
        },
        boot: function() {
            t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(i) {
                var e = t.$(this);
                if (!e.data("buttonRadio")) {
                    var n = t.buttonRadio(e, t.Utils.options(e.attr("data-uk-button-radio"))), o = t.$(i.target);
                    o.is(n.options.target) && o.trigger("click");
                }
            });
        },
        init: function() {
            var i = this;
            this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), 
            this.on("click", this.options.target, function(e) {
                var n = t.$(this);
                n.is('a[href="#"]') && e.preventDefault(), i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(), 
                n.addClass(i.options.activeClass), i.find(i.options.target).not(n).attr("aria-checked", "false"), 
                n.attr("aria-checked", "true"), i.trigger("change.uk.button", [ n ]);
            });
        },
        getSelected: function() {
            return this.find("." + this.options.activeClass);
        }
    }), t.component("buttonCheckbox", {
        defaults: {
            activeClass: "uk-active",
            target: ".uk-button"
        },
        boot: function() {
            t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(i) {
                var e = t.$(this);
                if (!e.data("buttonCheckbox")) {
                    var n = t.buttonCheckbox(e, t.Utils.options(e.attr("data-uk-button-checkbox"))), o = t.$(i.target);
                    o.is(n.options.target) && o.trigger("click");
                }
            });
        },
        init: function() {
            var i = this;
            this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), 
            this.on("click", this.options.target, function(e) {
                var n = t.$(this);
                n.is('a[href="#"]') && e.preventDefault(), n.toggleClass(i.options.activeClass).blur(), 
                n.attr("aria-checked", n.hasClass(i.options.activeClass)), i.trigger("change.uk.button", [ n ]);
            });
        },
        getSelected: function() {
            return this.find("." + this.options.activeClass);
        }
    }), t.component("button", {
        defaults: {},
        boot: function() {
            t.$html.on("click.button.uikit", "[data-uk-button]", function() {
                var i = t.$(this);
                i.data("button") || (t.button(i, t.Utils.options(i.attr("data-uk-button"))), i.trigger("click"));
            });
        },
        init: function() {
            var t = this;
            this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function(i) {
                t.element.is('a[href="#"]') && i.preventDefault(), t.toggle(), t.trigger("change.uk.button", [ t.element.blur().hasClass("uk-active") ]);
            });
        },
        toggle: function() {
            this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"));
        }
    });
}(UIkit), function(t) {
    "use strict";
    function i(i, e, n, o) {
        if (i = t.$(i), e = t.$(e), n = n || window.innerWidth, o = o || i.offset(), e.length) {
            var s = e.outerWidth();
            if (i.css("min-width", s), "right" == t.langdirection) {
                var a = n - (e.offset().left + s), r = n - (i.offset().left + i.outerWidth());
                i.css("margin-right", a - r);
            } else i.css("margin-left", e.offset().left - o.left);
        }
    }
    var e, n = !1, o = {
        x: {
            "bottom-left": "bottom-right",
            "bottom-right": "bottom-left",
            "bottom-center": "bottom-right",
            "top-left": "top-right",
            "top-right": "top-left",
            "top-center": "top-right",
            "left-top": "right",
            "left-bottom": "right-bottom",
            "left-center": "right-center",
            "right-top": "left",
            "right-bottom": "left-bottom",
            "right-center": "left-center"
        },
        y: {
            "bottom-left": "top-left",
            "bottom-right": "top-right",
            "bottom-center": "top-center",
            "top-left": "bottom-left",
            "top-right": "bottom-right",
            "top-center": "bottom-center",
            "left-top": "top-left",
            "left-bottom": "left-bottom",
            "left-center": "top-left",
            "right-top": "top-left",
            "right-bottom": "bottom-left",
            "right-center": "top-left"
        },
        xy: {}
    };
    t.component("dropdown", {
        defaults: {
            mode: "hover",
            pos: "bottom-left",
            offset: 0,
            remaintime: 800,
            justify: !1,
            boundary: t.$win,
            delay: 0,
            dropdownSelector: ".uk-dropdown,.uk-dropdown-blank",
            hoverDelayIdle: 250,
            preventflip: !1
        },
        remainIdle: !1,
        boot: function() {
            var i = t.support.touch ? "click" : "mouseenter";
            t.$html.on(i + ".dropdown.uikit", "[data-uk-dropdown]", function(e) {
                var n = t.$(this);
                if (!n.data("dropdown")) {
                    var o = t.dropdown(n, t.Utils.options(n.attr("data-uk-dropdown")));
                    ("click" == i || "mouseenter" == i && "hover" == o.options.mode) && o.element.trigger(i), 
                    o.element.find(o.options.dropdownSelector).length && e.preventDefault();
                }
            });
        },
        init: function() {
            var i = this;
            this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function() {
                return -1 !== t.$.inArray(t.$(this).css("position"), [ "relative", "fixed", "absolute" ]);
            }).slice(0, 1), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t.$(this.options.justify) : !1, 
            this.boundary = t.$(this.options.boundary), this.boundary.length || (this.boundary = t.$win), 
            this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), 
            this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), 
            this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), 
            "click" == this.options.mode || t.support.touch ? this.on("click.uikit.dropdown", function(e) {
                var n = t.$(e.target);
                n.parents(i.options.dropdownSelector).length || ((n.is("a[href='#']") || n.parent().is("a[href='#']") || i.dropdown.length && !i.dropdown.is(":visible")) && e.preventDefault(), 
                n.blur()), i.element.hasClass("uk-open") ? (!i.dropdown.find(e.target).length || n.is(".uk-dropdown-close") || n.parents(".uk-dropdown-close").length) && i.hide() : i.show();
            }) : this.on("mouseenter", function() {
                i.trigger("pointerenter.uk.dropdown", [ i ]), i.remainIdle && clearTimeout(i.remainIdle), 
                e && clearTimeout(e), n && n == i || (e = n && n != i ? setTimeout(function() {
                    e = setTimeout(i.show.bind(i), i.options.delay);
                }, i.options.hoverDelayIdle) : setTimeout(i.show.bind(i), i.options.delay));
            }).on("mouseleave", function() {
                e && clearTimeout(e), i.remainIdle = setTimeout(function() {
                    n && n == i && i.hide();
                }, i.options.remaintime), i.trigger("pointerleave.uk.dropdown", [ i ]);
            }).on("click", function(e) {
                var o = t.$(e.target);
                return i.remainIdle && clearTimeout(i.remainIdle), n && n == i ? void ((!i.dropdown.find(e.target).length || o.is(".uk-dropdown-close") || o.parents(".uk-dropdown-close").length) && i.hide()) : ((o.is("a[href='#']") || o.parent().is("a[href='#']")) && e.preventDefault(), 
                void i.show());
            });
        },
        show: function() {
            t.$html.off("click.outer.dropdown"), n && n != this && n.hide(!0), e && clearTimeout(e), 
            this.trigger("beforeshow.uk.dropdown", [ this ]), this.checkDimensions(), this.element.addClass("uk-open"), 
            this.element.attr("aria-expanded", "true"), this.trigger("show.uk.dropdown", [ this ]), 
            t.Utils.checkDisplay(this.dropdown, !0), n = this, this.registerOuterClick();
        },
        hide: function(t) {
            this.trigger("beforehide.uk.dropdown", [ this, t ]), this.element.removeClass("uk-open"), 
            this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), 
            this.trigger("hide.uk.dropdown", [ this, t ]), n == this && (n = !1);
        },
        registerOuterClick: function() {
            var i = this;
            t.$html.off("click.outer.dropdown"), setTimeout(function() {
                t.$html.on("click.outer.dropdown", function(o) {
                    e && clearTimeout(e), t.$(o.target), n != i || i.element.find(o.target).length || (i.hide(!0), 
                    t.$html.off("click.outer.dropdown"));
                });
            }, 10);
        },
        checkDimensions: function() {
            if (this.dropdown.length) {
                this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({
                    "top-left": "",
                    left: "",
                    "margin-left": "",
                    "margin-right": ""
                }), this.justified && this.justified.length && this.dropdown.css("min-width", "");
                var e, n = t.$.extend({}, this.offsetParent.offset(), {
                    width: this.offsetParent[0].offsetWidth,
                    height: this.offsetParent[0].offsetHeight
                }), s = this.options.offset, a = this.dropdown, r = (a.show().offset() || {
                    left: 0,
                    top: 0
                }, a.outerWidth()), l = a.outerHeight(), c = this.boundary.width(), u = (this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : {
                    top: 0,
                    left: 0
                }, this.options.pos), h = {
                    "bottom-left": {
                        top: 0 + n.height + s,
                        left: 0
                    },
                    "bottom-right": {
                        top: 0 + n.height + s,
                        left: 0 + n.width - r
                    },
                    "bottom-center": {
                        top: 0 + n.height + s,
                        left: 0 + n.width / 2 - r / 2
                    },
                    "top-left": {
                        top: 0 - l - s,
                        left: 0
                    },
                    "top-right": {
                        top: 0 - l - s,
                        left: 0 + n.width - r
                    },
                    "top-center": {
                        top: 0 - l - s,
                        left: 0 + n.width / 2 - r / 2
                    },
                    "left-top": {
                        top: 0,
                        left: 0 - r - s
                    },
                    "left-bottom": {
                        top: 0 + n.height - l,
                        left: 0 - r - s
                    },
                    "left-center": {
                        top: 0 + n.height / 2 - l / 2,
                        left: 0 - r - s
                    },
                    "right-top": {
                        top: 0,
                        left: 0 + n.width + s
                    },
                    "right-bottom": {
                        top: 0 + n.height - l,
                        left: 0 + n.width + s
                    },
                    "right-center": {
                        top: 0 + n.height / 2 - l / 2,
                        left: 0 + n.width + s
                    }
                }, d = {};
                if (e = u.split("-"), d = h[u] ? h[u] : h["bottom-left"], this.justified && this.justified.length) i(a.css({
                    left: 0
                }), this.justified, c); else if (this.options.preventflip !== !0) {
                    var p;
                    switch (this.checkBoundary(n.left + d.left, n.top + d.top, r, l, c)) {
                      case "x":
                        "x" !== this.options.preventflip && (p = o.x[u] || "right-top");
                        break;

                      case "y":
                        "y" !== this.options.preventflip && (p = o.y[u] || "top-left");
                        break;

                      case "xy":
                        this.options.preventflip || (p = o.xy[u] || "right-bottom");
                    }
                    p && (e = p.split("-"), d = h[p] ? h[p] : h["bottom-left"], this.checkBoundary(n.left + d.left, n.top + d.top, r, l, c) && (e = u.split("-"), 
                    d = h[u] ? h[u] : h["bottom-left"]));
                }
                r > c && (a.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [ this ])), 
                a.css(d).css("display", "").addClass("uk-dropdown-" + e[0]);
            }
        },
        checkBoundary: function(i, e, n, o, s) {
            var a = "";
            return (0 > i || i - t.$win.scrollLeft() + n > s) && (a += "x"), (e - t.$win.scrollTop() < 0 || e - t.$win.scrollTop() + o > window.innerHeight) && (a += "y"), 
            a;
        }
    }), t.component("dropdownOverlay", {
        defaults: {
            justify: !1,
            cls: "",
            duration: 200
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-dropdown-overlay]", i).each(function() {
                    var i = t.$(this);
                    i.data("dropdownOverlay") || t.dropdownOverlay(i, t.Utils.options(i.attr("data-uk-dropdown-overlay")));
                });
            });
        },
        init: function() {
            var e = this;
            this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), 
            this.overlay.length || (this.overlay = t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), 
            this.overlay.addClass(this.options.cls), this.on({
                "beforeshow.uk.dropdown": function(t, n) {
                    e.dropdown = n, e.justified && e.justified.length && i(e.overlay.css({
                        display: "block",
                        "margin-left": "",
                        "margin-right": ""
                    }), e.justified, e.justified.outerWidth());
                },
                "show.uk.dropdown": function() {
                    var i = e.dropdown.dropdown.outerHeight(!0);
                    e.dropdown.element.removeClass("uk-open"), e.overlay.stop().css("display", "block").animate({
                        height: i
                    }, e.options.duration, function() {
                        e.dropdown.dropdown.css("visibility", ""), e.dropdown.element.addClass("uk-open"), 
                        t.Utils.checkDisplay(e.dropdown.dropdown, !0);
                    }), e.pointerleave = !1;
                },
                "hide.uk.dropdown": function() {
                    e.overlay.stop().animate({
                        height: 0
                    }, e.options.duration);
                },
                "pointerenter.uk.dropdown": function() {
                    clearTimeout(e.remainIdle);
                },
                "pointerleave.uk.dropdown": function() {
                    e.pointerleave = !0;
                }
            }), this.overlay.on({
                mouseenter: function() {
                    e.remainIdle && (clearTimeout(e.dropdown.remainIdle), clearTimeout(e.remainIdle));
                },
                mouseleave: function() {
                    e.pointerleave && n && (e.remainIdle = setTimeout(function() {
                        n && n.hide();
                    }, n.options.remaintime));
                }
            });
        }
    });
}(UIkit), function(t) {
    "use strict";
    var i = [];
    t.component("gridMatchHeight", {
        defaults: {
            target: !1,
            row: !0,
            ignorestacked: !1
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-grid-match]", i).each(function() {
                    var i, e = t.$(this);
                    e.data("gridMatchHeight") || (i = t.gridMatchHeight(e, t.Utils.options(e.attr("data-uk-grid-match"))));
                });
            });
        },
        init: function() {
            var e = this;
            this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, 
            this.columns.length && (t.$win.on("load resize orientationchange", function() {
                var i = function() {
                    e.match();
                };
                return t.$(function() {
                    i();
                }), t.Utils.debounce(i, 50);
            }()), t.$html.on("changed.uk.dom", function() {
                e.columns = e.element.children(), e.elements = e.options.target ? e.find(e.options.target) : e.columns, 
                e.match();
            }), this.on("display.uk.check", function() {
                this.element.is(":visible") && this.match();
            }.bind(this)), i.push(this));
        },
        match: function() {
            var i = this.columns.filter(":visible:first");
            if (i.length) {
                var e = Math.ceil(100 * parseFloat(i.css("width")) / parseFloat(i.parent().css("width"))) >= 100;
                return e && !this.options.ignorestacked ? this.revert() : t.Utils.matchHeights(this.elements, this.options), 
                this;
            }
        },
        revert: function() {
            return this.elements.css("min-height", ""), this;
        }
    }), t.component("gridMargin", {
        defaults: {
            cls: "uk-grid-margin",
            rowfirst: "uk-row-first"
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-grid-margin]", i).each(function() {
                    var i, e = t.$(this);
                    e.data("gridMargin") || (i = t.gridMargin(e, t.Utils.options(e.attr("data-uk-grid-margin"))));
                });
            });
        },
        init: function() {
            t.stackMargin(this.element, this.options);
        }
    });
}(UIkit), function(t) {
    "use strict";
    function i(i, e) {
        return e ? ("object" == typeof i ? (i = i instanceof jQuery ? i : t.$(i), i.parent().length && (e.persist = i, 
        e.persist.data("modalPersistParent", i.parent()))) : i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: " + typeof i), 
        i.appendTo(e.element.find(".uk-modal-dialog")), e) : void 0;
    }
    var e, n = !1, o = 0, s = t.$html;
    t.component("modal", {
        defaults: {
            keyboard: !0,
            bgclose: !0,
            minScrollHeight: 150,
            center: !1,
            modal: !0
        },
        scrollable: !1,
        transition: !1,
        hasTransitioned: !0,
        init: function() {
            if (e || (e = t.$("body")), this.element.length) {
                var i = this;
                this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), 
                this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), 
                this.on("click", ".uk-modal-close", function(t) {
                    t.preventDefault(), i.hide();
                }).on("click", function(e) {
                    var n = t.$(e.target);
                    n[0] == i.element[0] && i.options.bgclose && i.hide();
                });
            }
        },
        toggle: function() {
            return this[this.isActive() ? "hide" : "show"]();
        },
        show: function() {
            if (this.element.length) {
                var i = this;
                if (!this.isActive()) return this.options.modal && n && n.hide(!0), this.element.removeClass("uk-open").show(), 
                this.resize(), this.options.modal && (n = this), this.active = !0, o++, t.support.transition ? (this.hasTransitioned = !1, 
                this.element.one(t.support.transition.end, function() {
                    i.hasTransitioned = !0;
                }).addClass("uk-open")) : this.element.addClass("uk-open"), s.addClass("uk-modal-page").height(), 
                this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), 
                t.Utils.checkDisplay(this.dialog, !0), this;
            }
        },
        hide: function(i) {
            if (!i && t.support.transition && this.hasTransitioned) {
                var e = this;
                this.one(t.support.transition.end, function() {
                    e._hide();
                }).removeClass("uk-open");
            } else this._hide();
            return this;
        },
        resize: function() {
            var t = e.width();
            if (this.scrollbarwidth = window.innerWidth - t, e.css(this.paddingdir, this.scrollbarwidth), 
            this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
                var i = this.dialog.outerHeight(), n = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                i + n < window.innerHeight ? this.dialog.css({
                    top: window.innerHeight / 2 - i / 2 - n
                }) : this.dialog.css({
                    top: ""
                });
            }
        },
        updateScrollable: function() {
            var t = this.dialog.find(".uk-overflow-container:visible:first");
            if (t.length) {
                t.css("height", 0);
                var i = Math.abs(parseInt(this.dialog.css("margin-top"), 10)), e = this.dialog.outerHeight(), n = window.innerHeight, o = n - 2 * (20 > i ? 20 : i) - e;
                return t.css({
                    "max-height": o < this.options.minScrollHeight ? "" : o,
                    height: ""
                }), !0;
            }
            return !1;
        },
        _hide: function() {
            this.active = !1, o > 0 ? o-- : o = 0, this.element.hide().removeClass("uk-open"), 
            this.element.attr("aria-hidden", "true"), o || (s.removeClass("uk-modal-page"), 
            e.css(this.paddingdir, "")), n === this && (n = !1), this.trigger("hide.uk.modal");
        },
        isActive: function() {
            return this.active;
        }
    }), t.component("modalTrigger", {
        boot: function() {
            t.$html.on("click.modal.uikit", "[data-uk-modal]", function(i) {
                var e = t.$(this);
                if (e.is("a") && i.preventDefault(), !e.data("modalTrigger")) {
                    var n = t.modalTrigger(e, t.Utils.options(e.attr("data-uk-modal")));
                    n.show();
                }
            }), t.$html.on("keydown.modal.uikit", function(t) {
                n && 27 === t.keyCode && n.options.keyboard && (t.preventDefault(), n.hide());
            }), t.$win.on("resize orientationchange", t.Utils.debounce(function() {
                n && n.resize();
            }, 150));
        },
        init: function() {
            var i = this;
            this.options = t.$.extend({
                target: i.element.is("a") ? i.element.attr("href") : !1
            }, this.options), this.modal = t.modal(this.options.target, this.options), this.on("click", function(t) {
                t.preventDefault(), i.show();
            }), this.proxy(this.modal, "show hide isActive");
        }
    }), t.modal.dialog = function(e, n) {
        var o = t.modal(t.$(t.modal.dialog.template).appendTo("body"), n);
        return o.on("hide.uk.modal", function() {
            o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), 
            o.element.remove();
        }), i(e, o), o;
    }, t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', 
    t.modal.alert = function(i, e) {
        e = t.$.extend(!0, {
            bgclose: !1,
            keyboard: !1,
            modal: !1,
            labels: t.modal.labels
        }, e);
        var n = t.modal.dialog([ '<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + e.labels.Ok + "</button></div>" ].join(""), e);
        return n.on("show.uk.modal", function() {
            setTimeout(function() {
                n.element.find("button:first").focus();
            }, 50);
        }), n.show();
    }, t.modal.confirm = function(i, e, n) {
        var o = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};
        e = t.$.isFunction(e) ? e : function() {}, n = t.$.isFunction(n) ? n : function() {}, 
        o = t.$.extend(!0, {
            bgclose: !1,
            keyboard: !1,
            modal: !1,
            labels: t.modal.labels
        }, t.$.isFunction(o) ? {} : o);
        var s = t.modal.dialog([ '<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + o.labels.Ok + "</button></div>" ].join(""), o);
        return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function() {
            t.$(this).is(".js-modal-confirm") ? e() : n(), s.hide();
        }), s.on("show.uk.modal", function() {
            setTimeout(function() {
                s.element.find(".js-modal-confirm").focus();
            }, 50);
        }), s.show();
    }, t.modal.prompt = function(i, e, n, o) {
        n = t.$.isFunction(n) ? n : function() {}, o = t.$.extend(!0, {
            bgclose: !1,
            keyboard: !1,
            modal: !1,
            labels: t.modal.labels
        }, o);
        var s = t.modal.dialog([ i ? '<div class="uk-modal-content uk-form">' + String(i) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + o.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + o.labels.Ok + "</button></div>" ].join(""), o), a = s.element.find("input[type='text']").val(e || "").on("keyup", function(t) {
            13 == t.keyCode && s.element.find(".js-modal-ok").trigger("click");
        });
        return s.element.find(".js-modal-ok").on("click", function() {
            n(a.val()) !== !1 && s.hide();
        }), s.on("show.uk.modal", function() {
            setTimeout(function() {
                a.focus();
            }, 50);
        }), s.show();
    }, t.modal.blockUI = function(i, e) {
        var n = t.modal.dialog([ '<div class="uk-margin uk-modal-content">' + String(i || '<div class="uk-text-center">...</div>') + "</div>" ].join(""), t.$.extend({
            bgclose: !1,
            keyboard: !1,
            modal: !1
        }, e));
        return n.content = n.element.find(".uk-modal-content:first"), n.show();
    }, t.modal.labels = {
        Ok: "Ok",
        Cancel: "Cancel"
    };
}(UIkit), function(t) {
    "use strict";
    function i(i) {
        var e = t.$(i), n = "auto";
        if (e.is(":visible")) n = e.outerHeight(); else {
            var o = {
                position: e.css("position"),
                visibility: e.css("visibility"),
                display: e.css("display")
            };
            n = e.css({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }).outerHeight(), e.css(o);
        }
        return n;
    }
    t.component("nav", {
        defaults: {
            toggle: ">li.uk-parent > a[href='#']",
            lists: ">li.uk-parent > ul",
            multiple: !1
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-nav]", i).each(function() {
                    var i = t.$(this);
                    i.data("nav") || t.nav(i, t.Utils.options(i.attr("data-uk-nav")));
                });
            });
        },
        init: function() {
            var i = this;
            this.on("click.uikit.nav", this.options.toggle, function(e) {
                e.preventDefault();
                var n = t.$(this);
                i.open(n.parent()[0] == i.element[0] ? n : n.parent("li"));
            }), this.find(this.options.lists).each(function() {
                var e = t.$(this), n = e.parent(), o = n.hasClass("uk-active");
                e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), n.data("list-container", e.parent()[o ? "removeClass" : "addClass"]("uk-hidden")), 
                n.attr("aria-expanded", n.hasClass("uk-open")), o && i.open(n, !0);
            });
        },
        open: function(e, n) {
            var o = this, s = this.element, a = t.$(e), r = a.data("list-container");
            this.options.multiple || s.children(".uk-open").not(e).each(function() {
                var i = t.$(this);
                i.data("list-container") && i.data("list-container").stop().animate({
                    height: 0
                }, function() {
                    t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden");
                });
            }), a.toggleClass("uk-open"), a.attr("aria-expanded", a.hasClass("uk-open")), r && (a.hasClass("uk-open") && r.removeClass("uk-hidden"), 
            n ? (r.stop().height(a.hasClass("uk-open") ? "auto" : 0), a.hasClass("uk-open") || r.addClass("uk-hidden"), 
            this.trigger("display.uk.check")) : r.stop().animate({
                height: a.hasClass("uk-open") ? i(r.find("ul:first")) : 0
            }, function() {
                a.hasClass("uk-open") ? r.css("height", "") : r.addClass("uk-hidden"), o.trigger("display.uk.check");
            }));
        }
    });
}(UIkit), function(t) {
    "use strict";
    var i = {
        x: window.scrollX,
        y: window.scrollY
    }, e = (t.$win, t.$doc, t.$html), n = {
        show: function(n) {
            if (n = t.$(n), n.length) {
                var o = t.$("body"), s = n.find(".uk-offcanvas-bar:first"), a = "right" == t.langdirection, r = s.hasClass("uk-offcanvas-bar-flip") ? -1 : 1, l = r * (a ? -1 : 1), c = window.innerWidth - o.width();
                i = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                }, n.addClass("uk-active"), o.css({
                    width: window.innerWidth - c,
                    height: window.innerHeight
                }).addClass("uk-offcanvas-page"), o.css(a ? "margin-right" : "margin-left", (a ? -1 : 1) * s.outerWidth() * l).width(), 
                e.css("margin-top", -1 * i.y), s.addClass("uk-offcanvas-bar-show"), this._initElement(n), 
                s.trigger("show.uk.offcanvas", [ n, s ]), n.attr("aria-hidden", "false");
            }
        },
        hide: function(n) {
            var o = t.$("body"), s = t.$(".uk-offcanvas.uk-active"), a = "right" == t.langdirection, r = s.find(".uk-offcanvas-bar:first"), l = function() {
                o.removeClass("uk-offcanvas-page").css({
                    width: "",
                    height: "",
                    "margin-left": "",
                    "margin-right": ""
                }), s.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), e.css("margin-top", ""), 
                window.scrollTo(i.x, i.y), r.trigger("hide.uk.offcanvas", [ s, r ]), s.attr("aria-hidden", "true");
            };
            s.length && (t.support.transition && !n ? (o.one(t.support.transition.end, function() {
                l();
            }).css(a ? "margin-right" : "margin-left", ""), setTimeout(function() {
                r.removeClass("uk-offcanvas-bar-show");
            }, 0)) : l());
        },
        _initElement: function(i) {
            i.data("OffcanvasInit") || (i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(i) {
                var e = t.$(i.target);
                if (!i.type.match(/swipe/) && !e.hasClass("uk-offcanvas-close")) {
                    if (e.hasClass("uk-offcanvas-bar")) return;
                    if (e.parents(".uk-offcanvas-bar:first").length) return;
                }
                i.stopImmediatePropagation(), n.hide();
            }), i.on("click", "a[href*='#']", function() {
                var i = t.$(this), e = i.attr("href");
                "#" != e && (t.$doc.one("hide.uk.offcanvas", function() {
                    var n;
                    try {
                        n = t.$(i[0].hash);
                    } catch (o) {
                        n = "";
                    }
                    n.length || (n = t.$('[name="' + i[0].hash.replace("#", "") + '"]')), n.length && t.Utils.scrollToElement ? t.Utils.scrollToElement(n, t.Utils.options(i.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = e;
                }), n.hide());
            }), i.data("OffcanvasInit", !0));
        }
    };
    t.component("offcanvasTrigger", {
        boot: function() {
            e.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(i) {
                i.preventDefault();
                var e = t.$(this);
                e.data("offcanvasTrigger") || (t.offcanvasTrigger(e, t.Utils.options(e.attr("data-uk-offcanvas"))), 
                e.trigger("click"));
            }), e.on("keydown.uk.offcanvas", function(t) {
                27 === t.keyCode && n.hide();
            });
        },
        init: function() {
            var i = this;
            this.options = t.$.extend({
                target: i.element.is("a") ? i.element.attr("href") : !1
            }, this.options), this.on("click", function(t) {
                t.preventDefault(), n.show(i.options.target);
            });
        }
    }), t.offcanvas = n;
}(UIkit), function(t) {
    "use strict";
    function i(i, e, n) {
        var o, s = t.$.Deferred(), a = i, r = i;
        return n[0] === e[0] ? (s.resolve(), s.promise()) : ("object" == typeof i && (a = i[0], 
        r = i[1] || i[0]), t.$body.css("overflow-x", "hidden"), o = function() {
            e && e.hide().removeClass("uk-active " + r + " uk-animation-reverse"), n.addClass(a).one(t.support.animation.end, function() {
                n.removeClass("" + a).css({
                    opacity: "",
                    display: ""
                }), s.resolve(), t.$body.css("overflow-x", ""), e && e.css({
                    opacity: "",
                    display: ""
                });
            }.bind(this)).show();
        }, n.css("animation-duration", this.options.duration + "ms"), e && e.length ? (e.css("animation-duration", this.options.duration + "ms"), 
        e.css("display", "none").addClass(r + " uk-animation-reverse").one(t.support.animation.end, function() {
            o();
        }.bind(this)).css("display", "")) : (n.addClass("uk-active"), o()), s.promise());
    }
    var e;
    t.component("switcher", {
        defaults: {
            connect: !1,
            toggle: ">*",
            active: 0,
            animation: !1,
            duration: 200,
            swiping: !0
        },
        animating: !1,
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-switcher]", i).each(function() {
                    var i = t.$(this);
                    i.data("switcher") || t.switcher(i, t.Utils.options(i.attr("data-uk-switcher")));
                });
            });
        },
        init: function() {
            var i = this;
            if (this.on("click.uikit.switcher", this.options.toggle, function(t) {
                t.preventDefault(), i.show(this);
            }), this.options.connect) {
                this.connect = t.$(this.options.connect), this.connect.find(".uk-active").removeClass(".uk-active"), 
                this.connect.length && (this.connect.children().attr("aria-hidden", "true"), this.connect.on("click", "[data-uk-switcher-item]", function(e) {
                    e.preventDefault();
                    var n = t.$(this).attr("data-uk-switcher-item");
                    if (i.index != n) switch (n) {
                      case "next":
                      case "previous":
                        i.show(i.index + ("next" == n ? 1 : -1));
                        break;

                      default:
                        i.show(parseInt(n, 10));
                    }
                }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function(t) {
                    t.preventDefault(), window.getSelection().toString() || i.show(i.index + ("swipeLeft" == t.type ? 1 : -1));
                }));
                var e = this.find(this.options.toggle), n = e.filter(".uk-active");
                if (n.length) this.show(n, !1); else {
                    if (this.options.active === !1) return;
                    n = e.eq(this.options.active), this.show(n.length ? n : e.eq(0), !1);
                }
                e.not(n).attr("aria-expanded", "false"), n.attr("aria-expanded", "true"), this.on("changed.uk.dom", function() {
                    i.connect = t.$(i.options.connect);
                });
            }
        },
        show: function(n, o) {
            if (!this.animating) {
                if (isNaN(n)) n = t.$(n); else {
                    var s = this.find(this.options.toggle);
                    n = 0 > n ? s.length - 1 : n, n = s.eq(s[n] ? n : 0);
                }
                var a = this, s = this.find(this.options.toggle), r = t.$(n), l = e[this.options.animation] || function(t, n) {
                    if (!a.options.animation) return e.none.apply(a);
                    var o = a.options.animation.split(",");
                    return 1 == o.length && (o[1] = o[0]), o[0] = o[0].trim(), o[1] = o[1].trim(), i.apply(a, [ o, t, n ]);
                };
                o !== !1 && t.support.animation || (l = e.none), r.hasClass("uk-disabled") || (s.attr("aria-expanded", "false"), 
                r.attr("aria-expanded", "true"), s.filter(".uk-active").removeClass("uk-active"), 
                r.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(r), 
                -1 == this.index && (this.index = 0), this.connect.each(function() {
                    var i = t.$(this), e = t.$(i.children()), n = t.$(e.filter(".uk-active")), o = t.$(e.eq(a.index));
                    a.animating = !0, l.apply(a, [ n, o ]).then(function() {
                        n.removeClass("uk-active"), o.addClass("uk-active"), n.attr("aria-hidden", "true"), 
                        o.attr("aria-hidden", "false"), t.Utils.checkDisplay(o, !0), a.animating = !1;
                    });
                })), this.trigger("show.uk.switcher", [ r ]));
            }
        }
    }), e = {
        none: function() {
            var i = t.$.Deferred();
            return i.resolve(), i.promise();
        },
        fade: function(t, e) {
            return i.apply(this, [ "uk-animation-fade", t, e ]);
        },
        "slide-bottom": function(t, e) {
            return i.apply(this, [ "uk-animation-slide-bottom", t, e ]);
        },
        "slide-top": function(t, e) {
            return i.apply(this, [ "uk-animation-slide-top", t, e ]);
        },
        "slide-vertical": function(t, e) {
            var n = [ "uk-animation-slide-top", "uk-animation-slide-bottom" ];
            return t && t.index() > e.index() && n.reverse(), i.apply(this, [ n, t, e ]);
        },
        "slide-left": function(t, e) {
            return i.apply(this, [ "uk-animation-slide-left", t, e ]);
        },
        "slide-right": function(t, e) {
            return i.apply(this, [ "uk-animation-slide-right", t, e ]);
        },
        "slide-horizontal": function(t, e) {
            var n = [ "uk-animation-slide-right", "uk-animation-slide-left" ];
            return t && t.index() > e.index() && n.reverse(), i.apply(this, [ n, t, e ]);
        },
        scale: function(t, e) {
            return i.apply(this, [ "uk-animation-scale-up", t, e ]);
        }
    }, t.switcher.animations = e;
}(UIkit), function(t) {
    "use strict";
    t.component("tab", {
        defaults: {
            target: ">li:not(.uk-tab-responsive, .uk-disabled)",
            connect: !1,
            active: 0,
            animation: !1,
            duration: 200,
            swiping: !0
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-tab]", i).each(function() {
                    var i = t.$(this);
                    i.data("tab") || t.tab(i, t.Utils.options(i.attr("data-uk-tab")));
                });
            });
        },
        init: function() {
            var i = this;
            this.current = !1, this.on("click.uikit.tab", this.options.target, function(e) {
                if (e.preventDefault(), !i.switcher || !i.switcher.animating) {
                    var n = i.find(i.options.target).not(this);
                    n.removeClass("uk-active").blur(), i.trigger("change.uk.tab", [ t.$(this).addClass("uk-active"), i.current ]), 
                    i.current = t.$(this), i.options.connect || (n.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"));
                }
            }), this.options.connect && (this.connect = t.$(this.options.connect)), this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), 
            this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), 
            this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), 
            this.responsivetab.lst.on("click.uikit.tab", "a", function(e) {
                e.preventDefault(), e.stopPropagation();
                var n = t.$(this);
                i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click");
            }), this.on("show.uk.switcher change.uk.tab", function(t, e) {
                i.responsivetab.caption.html(e.text());
            }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = t.switcher(this.element, {
                toggle: ">li:not(.uk-tab-responsive)",
                connect: this.options.connect,
                active: this.options.active,
                animation: this.options.animation,
                duration: this.options.duration,
                swiping: this.options.swiping
            })), t.dropdown(this.responsivetab, {
                mode: "click"
            }), i.trigger("change.uk.tab", [ this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active") ]), 
            this.check(), t.$win.on("resize orientationchange", t.Utils.debounce(function() {
                i.element.is(":visible") && i.check();
            }, 100)), this.on("display.uk.check", function() {
                i.element.is(":visible") && i.check();
            });
        },
        check: function() {
            var i = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
            if (!i.length) return void this.responsivetab.addClass("uk-hidden");
            var e, n, o, s = i.eq(0).offset().top + Math.ceil(i.eq(0).height() / 2), a = !1;
            if (this.responsivetab.lst.empty(), i.each(function() {
                t.$(this).offset().top > s && (a = !0);
            }), a) for (var r = 0; r < i.length; r++) e = t.$(i.eq(r)), n = e.find("a"), "none" == e.css("float") || e.attr("uk-dropdown") || (e.hasClass("uk-disabled") || (o = e[0].outerHTML.replace("<a ", '<a data-index="' + r + '" '), 
            this.responsivetab.lst.append(o)), e.addClass("uk-hidden"));
            this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden");
        }
    });
}(UIkit), function(t) {
    "use strict";
    t.component("cover", {
        defaults: {
            automute: !0
        },
        boot: function() {
            t.ready(function(i) {
                t.$("[data-uk-cover]", i).each(function() {
                    var i = t.$(this);
                    i.data("cover") || t.cover(i, t.Utils.options(i.attr("data-uk-cover")));
                });
            });
        },
        init: function() {
            if (this.parent = this.element.parent(), t.$win.on("load resize orientationchange", t.Utils.debounce(function() {
                this.check();
            }.bind(this), 100)), this.on("display.uk.check", function() {
                this.element.is(":visible") && this.check();
            }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
                var i = this.element.attr("src");
                this.element.attr("src", "").on("load", function() {
                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*");
                }).attr("src", [ i, i.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1" ].join(""));
            }
        },
        check: function() {
            this.element.css({
                width: "",
                height: ""
            }), this.dimension = {
                w: this.element.width(),
                h: this.element.height()
            }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), 
            this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), 
            this.ratio = this.dimension.w / this.dimension.h;
            var t, i, e = this.parent.width(), n = this.parent.height();
            e / this.ratio < n ? (t = Math.ceil(n * this.ratio), i = n) : (t = e, i = Math.ceil(e / this.ratio)), 
            this.element.css({
                width: t,
                height: i
            });
        }
    });
}(UIkit), !function(t) {
    var e;
    window.UIkit && (e = t(UIkit)), "function" == typeof define && define.amd && define("uikit-autocomplete", [ "uikit" ], function() {
        return e || t(UIkit);
    });
}(function(t) {
    "use strict";
    var e;
    return t.component("autocomplete", {
        defaults: {
            minLength: 3,
            param: "search",
            method: "post",
            delay: 300,
            loadingClass: "uk-loading",
            flipDropdown: !1,
            skipClass: "uk-skip",
            hoverClass: "uk-active",
            source: null,
            renderer: null,
            template: '<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>'
        },
        visible: !1,
        value: null,
        selected: null,
        boot: function() {
            t.$html.on("focus.autocomplete.uikit", "[data-uk-autocomplete]", function() {
                var e = t.$(this);
                e.data("autocomplete") || t.autocomplete(e, t.Utils.options(e.attr("data-uk-autocomplete")));
            }), t.$html.on("click.autocomplete.uikit", function(t) {
                e && t.target != e.input[0] && e.hide();
            });
        },
        init: function() {
            var e = this, i = !1, s = t.Utils.debounce(function() {
                return i ? i = !1 : void e.handle();
            }, this.options.delay);
            this.dropdown = this.find(".uk-dropdown"), this.template = this.find('script[type="text/autocomplete"]').html(), 
            this.template = t.Utils.template(this.template || this.options.template), this.input = this.find("input:first").attr("autocomplete", "off"), 
            this.dropdown.length || (this.dropdown = t.$('<div class="uk-dropdown"></div>').appendTo(this.element)), 
            this.options.flipDropdown && this.dropdown.addClass("uk-dropdown-flip"), this.dropdown.attr("aria-expanded", "false"), 
            this.input.on({
                keydown: function(t) {
                    if (t && t.which && !t.shiftKey) switch (t.which) {
                      case 13:
                        i = !0, e.selected && (t.preventDefault(), e.select());
                        break;

                      case 38:
                        t.preventDefault(), e.pick("prev", !0);
                        break;

                      case 40:
                        t.preventDefault(), e.pick("next", !0);
                        break;

                      case 27:
                      case 9:
                        e.hide();
                    }
                },
                keyup: s
            }), this.dropdown.on("click", ".uk-autocomplete-results > *", function() {
                e.select();
            }), this.dropdown.on("mouseover", ".uk-autocomplete-results > *", function() {
                e.pick(t.$(this));
            }), this.triggercomplete = s;
        },
        handle: function() {
            var t = this, e = this.value;
            return this.value = this.input.val(), this.value.length < this.options.minLength ? this.hide() : (this.value != e && t.request(), 
            this);
        },
        pick: function(e, i) {
            var s = this, o = t.$(this.dropdown.find(".uk-autocomplete-results").children(":not(." + this.options.skipClass + ")")), n = !1;
            if ("string" == typeof e || e.hasClass(this.options.skipClass)) {
                if ("next" == e || "prev" == e) {
                    if (this.selected) {
                        var a = o.index(this.selected);
                        n = "next" == e ? o.eq(a + 1 < o.length ? a + 1 : 0) : o.eq(0 > a - 1 ? o.length - 1 : a - 1);
                    } else n = o["next" == e ? "first" : "last"]();
                    n = t.$(n);
                }
            } else n = e;
            if (n && n.length && (this.selected = n, o.removeClass(this.options.hoverClass), 
            this.selected.addClass(this.options.hoverClass), i)) {
                var l = n.position().top, h = s.dropdown.scrollTop(), r = s.dropdown.height();
                (l > r || 0 > l) && s.dropdown.scrollTop(h + l);
            }
        },
        select: function() {
            if (this.selected) {
                var t = this.selected.data();
                this.trigger("selectitem.uk.autocomplete", [ t, this ]), t.value && this.input.val(t.value).trigger("change"), 
                this.hide();
            }
        },
        show: function() {
            return this.visible ? void 0 : (this.visible = !0, this.element.addClass("uk-open"), 
            e && e !== this && e.hide(), e = this, this.dropdown.attr("aria-expanded", "true"), 
            this);
        },
        hide: function() {
            return this.visible ? (this.visible = !1, this.element.removeClass("uk-open"), e === this && (e = !1), 
            this.dropdown.attr("aria-expanded", "false"), this) : void 0;
        },
        request: function() {
            var e = this, i = function(t) {
                t && e.render(t), e.element.removeClass(e.options.loadingClass);
            };
            if (this.element.addClass(this.options.loadingClass), this.options.source) {
                var s = this.options.source;
                switch (typeof this.options.source) {
                  case "function":
                    this.options.source.apply(this, [ i ]);
                    break;

                  case "object":
                    if (s.length) {
                        var o = [];
                        s.forEach(function(t) {
                            t.value && -1 != t.value.toLowerCase().indexOf(e.value.toLowerCase()) && o.push(t);
                        }), i(o);
                    }
                    break;

                  case "string":
                    var n = {};
                    n[this.options.param] = this.value, t.$.ajax({
                        url: this.options.source,
                        data: n,
                        type: this.options.method,
                        dataType: "json"
                    }).done(function(t) {
                        i(t || []);
                    });
                    break;

                  default:
                    i(null);
                }
            } else this.element.removeClass(e.options.loadingClass);
        },
        render: function(t) {
            return this.dropdown.empty(), this.selected = !1, this.options.renderer ? this.options.renderer.apply(this, [ t ]) : t && t.length && (this.dropdown.append(this.template({
                items: t
            })), this.show(), this.trigger("show.uk.autocomplete")), this;
        }
    }), t.autocomplete;
});