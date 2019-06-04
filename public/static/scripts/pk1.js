! function(t, e) {
    function i(t) { return function(e) { return {}.toString.call(e) == "[object " + t + "]" } }

    function n() { return R++ }

    function a(t, e, i) { i = i || this; for (var n = 0, a = t.length; a > n; n++) "undefined" != typeof t[n] && e.call(i, t[n], n, t) }

    function o(t) { return t.match(D)[0] }

    function r(t) { for (t = t.replace(Q, "/"), t = t.replace(z, "$1/"); t.match(j);) t = t.replace(j, "/"); return t }

    function l(t) {
        var e = t.length - 1,
            i = t.charAt(e);
        return "#" === i ? t.substring(0, e) : ".css" === t.substring(e - 3) ? t : ".js" === t.substring(e - 2) || t.indexOf("?") > 0 || "/" === i ? t : t + ".js"
    }

    function s(t) { var e = q.alias; return e && O(e[t]) ? e[t] : t }

    function c(t) {
        var e;
        if (t.indexOf(".") > -1 && (e = H.exec(t))) {
            var i;
            (i = e[1]) && (t = t.substring(0, t.lastIndexOf(i))), i = ".js" + (i || ""), t = t.split(".").join("/") + i
        }
        return t
    }

    function p(t) { var e, i = q.paths; return i && (e = t.match(G)) && O(i[e[1]]) && (t = i[e[1]] + e[2]), t }

    function d(t) { var e = q.vars; return e && t.indexOf("{") > -1 && (t = t.replace(V, function(t, i) { return O(e[i]) ? e[i] : t })), t }

    function u(t) {
        var e = q.map,
            i = t;
        if (e)
            for (var n = 0, a = e.length; a > n; n++) { var o = e[n]; if (i = B(o) ? o(t) || t : t.replace(o[0], o[1]), i !== t) break }
        return i
    }

    function h(t, e) {
        var i, n = t.charAt(0);
        if (K.test(t)) i = t;
        else if ("." === n) i = r((e ? o(e) : q.cwd) + t);
        else if ("/" === n) {
            var a = q.cwd.match(Y);
            i = a ? a[0] + t.substring(1) : t
        } else i = q.base + t;
        return 0 === i.indexOf("//") && (i = location.protocol + i), i
    }

    function f(t, e) {
        if (!t) return "";
        t = s(t), t = c(t), t = s(t), t = p(t), t = d(t), t = l(t);
        var i = h(t, e);
        return i = u(i)
    }

    function g(t) { return t.hasAttribute ? t.src : t.getAttribute("src", 4) }

    function m(t, e, i) {
        var n = ot.test(t),
            a = J.createElement(n ? "link" : "script");
        if (i) {
            var o = B(i) ? i(t) : i;
            o && (a.charset = o)
        }
        return b(a, e, n, t), n ? (a.rel = "stylesheet", a.href = t) : (a.async = !0, a.src = t), et = a, at ? nt.insertBefore(a, at) : nt.appendChild(a), et = null, a
    }

    function b(t, e, i, n) {
        function a() { t.onload = t.onerror = t.onreadystatechange = null, i || q.debug || nt.removeChild(t), t = null, e() }
        var o = "onload" in t;
        return !i || !rt && o ? void(o ? (t.onload = a, t.onerror = function() { U("error", { uri: n, node: t }), a() }) : t.onreadystatechange = function() { /loaded|complete/.test(t.readyState) && a() }) : void setTimeout(function() { x(t, e) }, 1)
    }

    function x(t, e) {
        var i, n = t.sheet;
        if (rt) n && (i = !0);
        else if (n) try { n.cssRules && (i = !0) } catch (a) { "NS_ERROR_DOM_SECURITY_ERR" === a.name && (i = !0) }
        setTimeout(function() { i ? e() : x(t, e) }, 20)
    }

    function v() { if (et) return et; if (it && "interactive" === it.readyState) return it; for (var t = nt.getElementsByTagName("script"), e = t.length - 1; e >= 0; e--) { var i = t[e]; if ("interactive" === i.readyState) return it = i } }

    function _(t) {
        var e = pt.exec(t),
            i = st;
        e && "require" !== (e = e[1]) && (i = i.toString().replace(/require/g, e), i = i.slice(1, i.length - 2), i = new RegExp(i, "g"));
        var n = [];
        return t.replace(ct, "").replace(i, function(t, e, i) { i && n.push(i) }), n
    }

    function w(t, e) { this.uri = t, this.dependencies = e || [], this.exports = null, this.status = 0, this._waitings = {}, this._remain = 0 }

    function y(t) {
        var e = t.length;
        if (!(2 > e) && q.combo) {
            q.comboSyntax && (wt = q.comboSyntax), q.comboMaxLength && (yt = q.comboMaxLength), q.comboSuffix && (xt = q.comboSuffix), bt = q.comboExcludes;
            for (var i = [], n = 0; e > n; n++) {
                var a = t[n];
                if (!_t[a]) {
                    var o = w.get(a);
                    o.status < vt && !A(a) && !S(a) && !C(a) && i.push(a)
                }
            }
            i.length > 1 && k(i)
        }
    }

    function E(t) { q.combo && (t.requestUri = _t[t.uri] || t.uri) }

    function k(t) {
        var e = [],
            i = Et.exec(t[0])[1],
            n = i.length;
        a(t, function(t) { e.push(t.substr(n)) }), T(i, e)
    }

    function T(t, e) {
        for (var i = [], n = 0, a = e.length; a > n; n++) i[n] = e[n].replace(/\?.*$/, "");
        var o = t + wt[0] + i.join(wt[1]);
        xt && (o += xt);
        var r = o.length > yt;
        if (e.length > 1 && r) {
            var l = I(e, yt - (t + wt[0]).length);
            T(t, l[0]), T(t, l[1])
        } else { if (r) throw new Error("The combo url is too long: " + o); for (var n = 0, a = e.length; a > n; n++) _t[t + e[n]] = o }
    }

    function I(t, e) {
        for (var i = wt[1], n = t[0], a = 1, o = t.length; o > a; a++)
            if (n += i + t[a], n.length > e) return [t.splice(0, a), t]
    }

    function A(t) { return kt.test(t) }

    function S(t) { return bt ? bt.test ? bt.test(t) : bt(t) : void 0 }

    function C(t) {
        var e = q.comboSyntax || wt,
            i = e[0],
            n = e[1];
        return i && t.indexOf(i) > 0 || n && t.indexOf(n) > 0
    }
    if (t.LBF) var P = t.LBF;
    var exports = t.LBF = { version: "0.8.0" },
        q = exports.data = {};
    exports.noConflict = function() { P && (t.LBF = P) };
    var L = i("Object"),
        O = i("String"),
        N = Array.isArray || i("Array"),
        B = i("Function"),
        M = i("Number"),
        W = i("RegExp"),
        R = 0,
        F = q.events = {};
    exports.on = function(t, e) { var i = F[t] || (F[t] = []); return i.push(e), exports }, exports.off = function(t, e) {
        if (!t && !e) return F = q.events = {}, exports;
        var i = F[t];
        if (i)
            if (e)
                for (var n = i.length - 1; n >= 0; n--) i[n] === e && i.splice(n, 1);
            else delete F[t];
        return exports
    };
    var U = exports.emit = function(t, e) { var i = F[t]; if (i) { i = i.slice(); for (var n = 0, a = i.length; a > n; n++) i[n](e) } return exports },
        D = /[^?#]*\//,
        Q = /\/\.\//g,
        j = /\/[^\/]+\/\.\.\//,
        z = /([^:\/])\/+\//g,
        G = /^([^\/:]+)(\/.+)$/,
        V = /{([^{]+)}/g,
        H = /^[\w-_]*(?:\.[\w-_]+)*(\?[\w-_&=]*)?$/,
        K = /^\/\/.|:\//,
        Y = /^.*?\/\/.*?\//,
        J = document,
        X = location.href && 0 !== location.href.indexOf("about:") ? o(location.href) : "",
        $ = J.scripts,
        Z = J.getElementById("LBFnode") || $[$.length - 1],
        tt = o(g(Z) || X);
    exports.resolve = f;
    var et, it, nt = J.head || J.getElementsByTagName("head")[0] || J.documentElement,
        at = nt.getElementsByTagName("base")[0],
        ot = /\.css(?:\?|$)/i,
        rt = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536;
    exports.request = m;
    var lt, st = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
        ct = /\\\\/g,
        pt = /^function[\s]*\([\s]*([^\f\n\r\t\v,\)]+)/,
        dt = exports.cache = {},
        ut = {},
        ht = {},
        ft = {},
        gt = w.STATUS = { FETCHING: 1, SAVED: 2, LOADING: 3, LOADED: 4, EXECUTING: 5, EXECUTED: 6 };
    w.prototype.resolve = function() { for (var t = this, e = t.dependencies, i = [], n = 0, a = e.length; a > n; n++) i[n] = w.resolve(e[n], t.uri); return i }, w.prototype.load = function() {
        var t = this;
        if (!(t.status >= gt.LOADING)) {
            t.status = gt.LOADING;
            var e = t.resolve();
            U("load", e);
            for (var i, n = t._remain = e.length, a = 0; n > a; a++) i = w.get(e[a]), i.status < gt.LOADED ? i._waitings[t.uri] = (i._waitings[t.uri] || 0) + 1 : t._remain--;
            if (0 === t._remain) return void t.onload();
            var o = {};
            for (a = 0; n > a; a++) i = dt[e[a]], i.status < gt.FETCHING ? i.fetch(o) : i.status === gt.SAVED && i.load();
            for (var r in o) o.hasOwnProperty(r) && o[r]()
        }
    }, w.prototype.onload = function() {
        var t = this;
        t.status = gt.LOADED, t.callback && t.callback();
        var e, i, n = t._waitings;
        for (e in n) n.hasOwnProperty(e) && (i = dt[e], i._remain -= n[e], 0 === i._remain && i.onload());
        delete t._waitings, delete t._remain
    }, w.prototype.fetch = function(t) {
        function e() { exports.request(o.requestUri, o.onRequest, o.charset) }

        function i() { delete ut[r], ht[r] = !0, lt && (w.save(a, lt), lt = null); var t, e = ft[r]; for (delete ft[r]; t = e.shift();) t.load() }
        var n = this,
            a = n.uri;
        n.status = gt.FETCHING;
        var o = { uri: a };
        U("fetch", o);
        var r = o.requestUri || a;
        return !r || ht[r] ? void n.load() : ut[r] ? void ft[r].push(n) : (ut[r] = !0, ft[r] = [n], U("request", o = { uri: a, requestUri: r, onRequest: i, charset: q.charset }), void(o.requested || (t ? t[o.requestUri] = e : e())))
    }, w.prototype.exec = function() {
        function require(t) { return w.get(require.resolve(t)).exec() }
        var t = this;
        if (t.status >= gt.EXECUTING) return t.exports;
        t.status = gt.EXECUTING;
        var i = t.uri;
        require.resolve = function(t) { return w.resolve(t, i) }, require.async = function(t, e) { return w.use(t, e, i + "_async_" + n()), require };
        var a = t.factory,
            exports = B(a) ? a(require, t.exports = {}, t) : a;
        return exports === e && (exports = t.exports), delete t.factory, t.exports = exports, t.status = gt.EXECUTED, U("exec", t), exports
    }, w.resolve = function(t, e) { var i = { id: t, refUri: e }; return U("resolve", i), i.uri || exports.resolve(i.id, e) }, w.define = function(t, i, n) {
        var a = arguments.length;
        1 === a ? (n = t, t = e) : 2 === a && (n = i, N(t) ? (i = t, t = e) : i = e), !N(i) && B(n) && (i = _(n.toString()));
        var o = { id: t, uri: w.resolve(t), deps: i, factory: n };
        if (!o.uri && J.attachEvent) {
            var r = v();
            r && (o.uri = r.src)
        }
        U("define", o), o.uri ? w.save(o.uri, o) : lt = o
    }, w.save = function(t, e) {
        var i = w.get(t);
        i.status < gt.SAVED && (i.id = e.id || t, i.dependencies = e.deps || [], i.factory = e.factory, i.status = gt.SAVED, U("save", i))
    }, w.get = function(t, e) { return dt[t] || (dt[t] = new w(t, e)) }, w.use = function(e, i, n) {
        var a = w.get(n, N(e) ? e : [e]);
        a.callback = function() {
            for (var exports = [], e = a.resolve(), n = 0, o = e.length; o > n; n++) exports[n] = dt[e[n]].exec();
            i && i.apply(t, exports), delete a.callback
        }, a.load()
    }, exports.use = function(t, e) { return w.use(t, e, q.cwd + "_use_" + n()), exports }, w.define.cmd = {}, exports.define = w.define, exports.Module = w, q.fetchedList = ht, q.cid = n, exports.require = function(t) { var e = w.get(w.resolve(t)); return e.status < gt.EXECUTING && (e.onload(), e.exec()), e.exports }, q.base = tt, q.dir = tt, q.cwd = X, q.charset = "utf-8", exports.config = function(t) {
        for (var e in t) {
            var i = t[e],
                n = q[e];
            if (n && L(n))
                for (var a in i) n[a] = i[a];
            else N(n) ? i = n.concat(i) : "base" === e && ("/" !== i.slice(-1) && (i += "/"), i = h(i)), q[e] = i
        }
        return U("config", t), exports
    };
    var mt = [
        ["globalSettings", exports.data],
        ["lang.forEach", a],
        ["lang.isType", i],
        ["lang.isObject", L],
        ["lang.isString", O],
        ["lang.isArray", N],
        ["lang.isFunction", B],
        ["lang.isNumber", M],
        ["lang.isRegExp", W],
        ["util.request", m]
    ];
    t.JSON && mt.push(["lang.JSON", t.JSON]), t.jQuery && 0 === (t.jQuery.version || "").indexOf("1.7") && mt.push(["lib.jQuery", t.jQuery]), a(mt, function(t) { exports.define(t[0], function(require, exports, module) { module.exports = t[1] }) });
    var bt, xt, w = LBF.Module,
        vt = w.STATUS.FETCHING,
        q = LBF.data,
        _t = q.comboHash = {},
        wt = ["c/=/", ",/"],
        yt = 1e3;
    LBF.on("load", y), LBF.on("fetch", E);
    var Et = /^(\S+:\/{2,3}[^\/]+\/)/,
        kt = /\.css(?:\?.*)?$/;
    if (q.test) {
        var Tt = LBF.test || (LBF.test = {});
        Tt.uris2paths = k, Tt.paths2hash = paths2hash
    }
}(this), LBF.config({ paths: { wpa: __WPA.staticBase }, debug: __WPA.env, protocol: __WPA.protocol, apiBase: __WPA.apiBase, staticBase: __WPA.staticBase }), LBF.define("wpa.app", function(require, exports, module) {
    var t = require("lang.forEach"),
        e = require("lang.extend"),
        i = require("lang.isFunction"),
        n = require("util.Event"),
        a = require("wpa.proto.main"),
        o = require("wpa.api"),
        r = require("wpa.bus");
    require("globalSettings");
    module.exports = exports = __WPA, window.__QDWPABUS || (window.__QDWPABUS = {}), e(__QDWPABUS, n), r.init(), exports.init = function() {
        var e = exports,
            i = e._evtBkt;
        for (var n in i) i.hasOwnProperty(n) && t(i[n], function(t) { e.on(n, t) });
        delete e._evtBkt;
        var a = e._stack;
        t(a, function(t) { t && e.create(t) }), delete e._stack, e.trigger("load")
    }, exports.ready = function(t) { i(t) && t() }, exports.create = function(t) { try { t._sTime = +new Date, new a(t) } catch (e) { __QDWPABUS.trigger("error", e) } }, e(exports, o, n)
}), LBF.define("lang.extend", function(require, exports, module) {
    var t = require("lang.isPlainObject");
    module.exports = function(e, i, n) {
        function a(t, e) { for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]) }

        function o(e, i) { for (var n in i) i.hasOwnProperty(n) && (t(i[n]) ? (e[n] = e[n] || {}, o(e[n], i[n])) : e[n] = i[n]) }
        var r = [].slice.apply(arguments),
            l = r.shift(),
            s = a;
        "boolean" == typeof l && (l = r.shift(), l && (s = o));
        for (var c = 0, p = r.length; p > c; c++) s(l, r[c]);
        return l
    }
}), LBF.define("util.Event", function(require, exports) {
    var t = require("lang.toArray"),
        e = require("util.Callbacks"),
        i = "_EVENTS";
    exports.on = function(t, n, a) {
        var o = this[i];
        o || (o = this[i] = {});
        var r = o[t] || (o[t] = e("stopOnFalse"));
        if (1 === a) {
            var l = n,
                s = this;
            n = function() { return s.off(t, n), l.apply(this, arguments) }
        }
        return r.add(n), this
    }, exports.off = function(t, e) { if (!t) return this[i] = {}, this; var n = this[i]; return n && n[t] ? e ? (n[t].remove(e), this) : (n[t].empty(), this) : this }, exports.trigger = function() {
        var e = t(arguments),
            n = e.shift(),
            a = this[i];
        return a && a[n] ? (a[n].fireWith(this, e), this) : this
    }, exports.once = function(t, e) { return this.on(t, e, 1) }
}), LBF.define("wpa.proto.main", function(require, exports, module) {
    var t = require("lang.extend"),
        e = require("util.Event"),
        i = require("wpa.proto.render"),
        n = require("wpa.proto.uiEvents"),
        a = (require("util.GUID"), require("util.localStorage")),
        o = (require("wpa.protocol.kfuin"), require("wpa.proto.custom")),
        r = require("wpa.conf.config"),
        l = r.KFUINS,
        s = r.WEB_IM,
        c = s.WPAS_IM_TYPE,
        p = r.gWin,
        d = (require("lang.browser"), r.isMobile, r.GLOBAL_WPA),
        u = r.WPAS_BASED_ON_KFUIN,
        h = require("wpa.protocol.Reporter"),
        f = (require("wpa.proto.basicCgiCall"), require("wpa.util.getRootDomain")),
        g = require("wpa.util.ids"),
        m = (require("wpa.util.log"), require("util.Cookie")),
        b = require("wpa.proto.chat"),
        x = require("wpa.proto.phone"),
        v = require("wpa.proto.add"),
        _ = require("wpa.proto.im"),
        w = require("wpa.im.init"),
        y = require("wpa.invite.main"),
        E = require("wpa.proto.socket"),
        k = require("wpa.proto.getGdtClickId"),
        T = require("wpa.proto.UnreadMsgCircle"),
        I = require("wpa.proto.pvReport"),
        A = r.sandbox,
        S = A.Object,
        C = require("wpa.proto.addDa");
    p[d] = p[d] ? p[d] : new S, p.__WPA[l] = "undefined" != typeof p.__WPA[l] ? p.__WPA[l] : new S, p.__WPA[u] = "undefined" != typeof p.__WPA[u] ? p.__WPA[u] : new S, p.__WPA[c] = "undefined" != typeof p.__WPA[c] ? p.__WPA[c] : new S, module.exports = exports = function(t) { this.initialize(t) };
    var P = exports.prototype;
    p.__WPA.IM = _;
    var q = function() { return A.Math.round(2147483647 * (A.Math.random() || .5)) * +new A.Date % 1e10 },
        L = function() { var t = window.__qq_qidian_da_pid; return t && /^QD\./.test(t) || (t = window.__qq_qidian_da_pid = g.createPid(!0)), t },
        O = function() {
            var t = f.getRootDomain(),
                e = f.isCookieEnabled,
                i = "";
            return e ? (i = m.get("_qddaz"), i && /^QD\./.test(i) || (i = g.createQid(!0), m.set("_qddaz", i, t, "/", 31536e6))) : (i = window.__qq_qidian_da_qid, i && /^QD\./.test(i) || (i = window.__qq_qidian_da_qid = g.createQid(!0))), i
        },
        N = function() {
            this.on("render", function(t) { h.report(t.reportType, t) }), this.on("click", function(t) { h.report(t.reportType, t) }), this.on("PCChat", function() {}), this.on("mobileChat", function() {}), this.on("anonyChat", function() {}), this.on("linkChat", function() {}), this.on("gdtReport", function(t) { h.report(t.reportType, t) }), this.on("initIm", function() {
                var t = this.params,
                    e = t.fkfuin;
                t.cate;
                (t.cate == r.TYPES.IM || t.cate == r.TYPES.QQ) && (this.imInit(this.params), t.cate == r.TYPES.IM && ("undefined" != typeof p.__WPA[c][e] ? p.__WPA[c][e].push(this) : p.__WPA[c][e] = [this]), this.trigger("establishSocket"))
            }), this.on("establishSocket", function() {
                var t = this.params;
                t.fkfuin, t.cate;
                this.establishSocket()
            })
        },
        B = function(t) {
            var e = t.cate,
                i = t.type;
            return 1 == e && (17 == i || 18 == i) || 7 == e && (15 == i || 16 == i) ? !0 : void 0
        };
    P.initialize = function(t) {
        var e = this,
            i = t.fkfuin;
        if (e.env = new S, p.__WPA[l][i] || (p.__WPA[l][i] = { unread: { chat: 0, socket: 0 } }), a.getItem(r.tencentSig)) t.guid = a.getItem(r.tencentSig);
        else {
            var n = q();
            t.guid = n, a.setItem(r.tencentSig, n)
        }
        p.__WPA.visitorId = t.guid, t.wpa = this, this.params = t;
        var o = this.params.pid = L().substring(3),
            s = this.params.qid = O().substring(3);
        this.setGlobalVisitorId({ vid: p.__WPA.visitorId, pid: o, qid: s }), this.pvReport({ kfuin: i });
        var c = this.params.fkfuin + "_" + this.params.id;
        p[d][c] = e, p.__WPA[u][i] ? p.__WPA[u][i].push(e) : p.__WPA[u][i] = [e], N.apply(this), B(t) ? (t.isCustom = !0, this.custom(t)) : e.render(), C(t.fkfuin), k(t), p.__WPA.cgiCalls.getScaleInfo({ kfuin: i }, e)
    }, t(P, e, i, b, n, o, x, v, _, w, T, E, I, { Invite: y })
}), LBF.define("wpa.api", function(require, exports, module) {
    var t = exports.api = {},
        e = require("wpa.proto.main"),
        i = require("wpa.protocol.chat"),
        n = require("wpa.invite.inviteApi");
    t.create = function(t) { return new e(t) }, t.createCustom = function(t) { return new e(t) }, t.chat = function(t) {}, t.PCChat = function(t, e) { i.PCChat(t, e) }, t.mobileChat = function(t, e) { i.mobileChat(t, e) }, t.anonyChat = function(t, e) { i.anonyChat(t, e) }, t.linkChat = function(t, e) { i.linkChat(t, e) }, t.invite = function(t) { n.trigger(t) }
}), LBF.define("wpa.bus", function(require, exports, module) {
    var t = require("wpa.util.badjs").badjsReport,
        e = !1,
        i = .9;
    exports.init = function() { e || (e = !0, __QDWPABUS.on("error", function(e) { Math.random() > i && t(e) })) }, exports.triggerError = function(t) { window.__QDWPABUS && __QDWPABUS.trigger("error", t) }
}), LBF.define("lang.isPlainObject", function(require, exports, module) {
    var t = require("lang.isObject"),
        e = function(t) { return t && t === t.window };
    module.exports = function(i) { if (!i || !t(i) || i.nodeType || e(i)) return !1; var n = Object.prototype.hasOwnProperty; try { if (i.constructor && !n.call(i, "constructor") && !n.call(i.constructor.prototype, "isPrototypeOf")) return !1 } catch (a) { return !1 } var o; for (o in i); return void 0 === o || n.call(i, o) }
}), LBF.define("lang.toArray", function(require, exports, module) { module.exports = function(t) { return [].slice.call(t) } }), LBF.define("util.Callbacks", function(require, exports, module) {
    var t = (require("lang.Class"), require("lang.forEach")),
        e = require("lang.extend"),
        i = require("lang.isFunction"),
        n = require("lang.isString"),
        a = require("lang.inArray"),
        o = /\S+/g,
        r = {},
        l = function(e) { var i = r[e] = {}; return t(e.match(o) || [], function(t) { i[t] = !0 }), i };
    module.exports = function(o) {
        o = "string" == typeof o ? r[o] || l(o) : e({}, o);
        var s, c, p, d, u, h, f = [],
            g = !o.once && [],
            m = function(t) {
                for (c = o.memory && t, p = !0, u = h || 0, h = 0, d = f.length, s = !0; f && d > u; u++)
                    if (f[u].apply(t[0], t[1]) === !1 && o.stopOnFalse) { c = !1; break }
                s = !1, f && (g ? g.length && m(g.shift()) : c ? f = [] : b.disable())
            },
            b = {
                add: function() { if (f) { var e = f.length;! function a(e) { t(e, function(t) { i(t) ? o.unique && b.has(t) || f.push(t) : t && t.length && n(t) && a(t) }) }(arguments), s ? d = f.length : c && (h = e, m(c)) } return this },
                remove: function() {
                    return f && t(arguments, function(t) {
                        for (var e;
                            (e = a(t, f, e)) > -1;) f.splice(e, 1), s && (d >= e && d--, u >= e && u--)
                    }), this
                },
                has: function(t) { return t ? a(t, f) > -1 : !(!f || !f.length) },
                empty: function() { return f = [], d = 0, this },
                disable: function() { return f = g = c = void 0, this },
                disabled: function() { return !f },
                lock: function() { return g = void 0, c || b.disable(), this },
                locked: function() { return !g },
                fireWith: function(t, e) { return !f || p && !g || (e = e || [], e = [t, e.slice ? e.slice() : e], s ? g.push(e) : m(e)), this },
                fire: function() { return b.fireWith(this, arguments), this },
                fired: function() { return !!p }
            };
        return b
    }
}), LBF.define("wpa.proto.render", function(require, exports, module) {
    var t = require("wpa.util.onIframeLoaded"),
        e = require("wpa.util.tmplCompiler"),
        i = require("wpa.util.Style"),
        n = require("lang.extend"),
        a = require("wpa.conf.wpaType"),
        o = require("wpa.util.insertIframe"),
        r = require("wpa.conf.floatCss"),
        l = (require("wpa.conf.Events"), require("lang.proxy"), require("wpa.conf.wpaTmpl")),
        s = require("lang.inArray"),
        c = (require("wpa.util.domEvent"), require("wpa.conf.defaultConst")),
        p = require("wpa.util.getSize"),
        d = require("wpa.conf.config"),
        u = require("wpa.util.bindLogicEvents"),
        h = require("wpa.util.htReport"),
        f = require("lang.browser"),
        g = "box-shadow:0 1px 15px rgba(0, 0, 0, 0.15);",
        m = "border-top: 1px solid #e3e3e3;border-bottom:1px solid #e3e3e3;",
        b = "border-radius: {borderRadius};",
        x = "middle",
        v = function(c, v) {
            l.init({ ratio: c.ratio });
            var _ = p(c.ratio),
                w = c.cate,
                y = c.type,
                E = c.theme,
                k = v,
                T = c.container,
                I = (c.ratio, c.scene),
                A = c.fkfuin,
                S = c.key,
                C = c.position,
                P = l.get(w, y),
                q = a[w][y],
                L = q.borderRadius,
                O = q.hasBoxShadow,
                N = q.iframeBorder,
                B = q.floatStyle,
                M = s("position", q.htmlRequired || []),
                W = "",
                R = q.isPC,
                F = q.isInQQ,
                U = P.cssText,
                D = R ? P.width : _(P.width),
                Q = R ? P.height : _(P.height),
                j = "undefined" != typeof c.enableFloat ? c.enableFloat : !0;
            if (!j || void 0 == c.position && void 0 == P.defaultPosition && "object" != typeof c.location || (W = r.getFloatStyle({ width: D, height: Q, floatStyle: B, position: c.position, location: c.location, defaultPosition: P.defaultPosition })), W += O ? g : "", "object" == typeof N) {
                var z = N.theme;
                ("undefined" != typeof z && E == z || "undefined" == typeof z) && (W += "border:" + N.width + " solid " + N.color + ";")
            }
            W += "undefined" != typeof L ? b.replace("{borderRadius}", L) : "";
            var G = (1 == I || 2 == I) && 0 == C && -1 !== M;
            G && (c.className = c.className + x + " "), W += G ? m : "", W += F ? m : "";
            var V = d.WPA_ID_PREFIX + A + "_" + c.id,
                H = "class_qidian_wpa",
                K = '<iframe scrolling="no" class="' + H + '" id="' + V + '" frameborder="0" width="' + D + '" height="' + Q + '" allowtransparency="true" src="about:blank" {style} ></iframe>';
            K = W ? K.replace("{style}", 'style="' + W + '"') : K.replace("{style}", "");
            var Y;
            try { Y = document.createElement(K) } catch (J) { Y = document.createElement("iframe"), Y.width = D, Y.height = Q, Y.id = V, Y.style.cssText = W, Y.setAttribute("scrolling", "no"), Y.setAttribute("frameborder", 0), Y.setAttribute("allowtransparency", !0), Y.setAttribute("src", "about:blank"), Y.setAttribute("class", H) }
            var X = document.getElementById("qd" + A + S) || c.scriptPosition;
            o({ ele: Y, lastScript: X, container: T });
            var $ = e.compile({ tpl: P.tpl, params: c, htmlRequired: q.htmlRequired });
            if (f.msie) try { Y.contentWindow.document } catch (J) { Y.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close()})())" }
            var Z = function() {
                var t = Y.contentWindow,
                    e = Y.contentDocument || t.document;
                if (e.open(), e.write(["<!doctype html>", '<html xmlns="http://www.w3.org/1999/xhtml">', "<head>", '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />', f.msie && "about:blank" !== Y.src ? "<script>document.domain='" + document.domain + "';</script>" : "", "</head>", "<body>", $, "</body>", "</html>"].join("")), e.close(), f.isIOS || f.isAndroid) try { e.body.addEventListener("touchmove", function(t) { t.preventDefault() }, !1) } catch (a) {}
                var o = { self: k, name: "style", cssText: U, doc: e };
                i.add(o);
                var r = e.getElementsByName(l.defaultEventTagName);
                u(r, v), __WPA.trigger("inited", k.params), h(c._sTime, 31), setTimeout(function() { v.trigger("render", n({ reportType: "render" }, c)) }, 1e3)
            };
            return t(Y, Z), Y
        },
        _ = function(t) { t.className = "", t.theme || (t.theme = c.THEME), "number" != typeof t.width && (t.width = "100%"), "number" != typeof t.height && (t.height = "100%"), t.btnBgColor || (t.btnBgColor = {}), t.btnBgColor.value || (t.btnBgColor.value = c.BTN_COLOR), t.title || (t.title = c.TITLE[t.cate]), t.signature || (t.signature = c.SIGNATURE[t.cate]), t.btnText || (t.btnText = c.BTN_TEXT[t.cate]), t.ratio || (t.ratio = window.devicePixelRatio) };
    exports.render = function() { _(this.params), this.el = v(this.params, this) }, exports.remove = function() {
        var t = this.el;
        t && t.parentNode && t.parentNode.removeChild(t)
    }
}), LBF.define("wpa.proto.uiEvents", function(require, exports, module) {
    function t(t) { t.reportType = "click", t.wpa.trigger("click", t), setTimeout(function() { t.wpa.trigger("gdtReport", e({ reportType: "gdtReport" }, r._gdtReportData)) }, 120) }
    var e = require("lang.extend"),
        i = require("wpa.conf.config"),
        n = i.TP_FORM,
        a = i.CLICK_TYPE,
        o = i.ROLE_KEY,
        r = (i.isInAdmin, i.gWin),
        l = require("wpa.util.ids"),
        s = 1,
        c = 2,
        p = 3,
        d = function(t) {
            var e = t.roleKey || o.QQ,
                a = t[e] || t[o.QQ] || {};
            t.roleValue = a.value, t.roleUin = a.uin, t.roleData = a.data, t.clickid = l.createClickId(), t.tpForm = n.ICON, t.isKfuin = a.isKfuin || 0, t.isPub = a.isPub, t.isPub && (i.isOA || i.isDev || i.isLocal ? t.onlyMobile = !1 : t.onlyMobile = !0, t.roleUin = a.pub.uin, t.roleData = a.data, t.value = a.value)
        },
        u = function(t) { var e = !0; return t.id || (e = !1, alert("姝ゅ鍙彁渚涙牱寮忛瑙堬紝涓嶆敮鎸佸姛鑳介瑙�")), e };
    exports.defaultEventType = "click", exports.callClose = function() { this.remove(), this.trigger("close") }, exports.callChat = function() {
        try {
            if (!u(this.params)) return;
            this.params.roleKey = o.QQ, d(this.params), this.params._tptype = this.params.roleQQ.value ? s : c, "object" == typeof r._gdtReportData && (r._gdtReportData.tptype = this.params._tptype), this.params.clickType = a.QQ, t(this.params), __WPA.trigger("clicked", this.params), this.chat()
        } catch (e) { __QDWPABUS.trigger("error", e) }
    }, exports.callPhone = function() {
        try {
            if (!u(this.params)) return;
            this.params.roleKey = o.TEL, d(this.params), this.params._tptype = p, "object" == typeof r._gdtReportData && (r._gdtReportData.tptype = this.params._tptype), this.params.clickType = a.TEL, t(this.params), __WPA.trigger("clicked", this.params), this.phone()
        } catch (e) { __QDWPABUS.trigger("error", e) }
    }, exports.callAddPal = function() {
        try {
            if (!u(this.params)) return;
            this.params.roleKey = o.KFEXT, d(this.params), this.params.clickType = a.KFEXT, t(this.params), __WPA.trigger("clicked", this.params), this.addPal()
        } catch (e) { __QDWPABUS.trigger("error", e) }
    }, exports.callAddGroup = function() {
        try {
            if (!u(this.params)) return;
            this.params.roleKey = o.GROUP, d(this.params), this.params.clickType = a.GROUP, t(this.params), __WPA.trigger("clicked", this.params), this.addGroup()
        } catch (e) { __QDWPABUS.trigger("error", e) }
    }, exports.callAddFan = function() { try { this.params.roleKey = o.PUB, d(this.params), this.params.clickType = a.PUB, t(this.params), __WPA.trigger("clicked", this.params), this.addFan() } catch (e) { __QDWPABUS.trigger("error", e) }!u(this.params) }, exports.callIm = function() { try { this.params.roleKey = o.IM, d(this.params), this.params.clickType = a.IM, t(this.params), __WPA.trigger("clicked", this.params), this.im(e({ isClickWpa: !0 }, this.params)) } catch (i) { __QDWPABUS.trigger("error", i) }!u(this.params) }
}), LBF.define("util.GUID", function() {
    function t() { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }
    return function() { return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() }
}), LBF.define("util.localStorage", function(require) {
    var t = require("util.Cookie"),
        e = require("lang.trim"),
        i = !0;
    try {
        var n = window.localStorage;
        n.setItem("lstest", 1)
    } catch (a) { i = !1, window.localStorage && (window.localStorage.setItem = function() {}) }
    var o = "IELS",
        r = 31536e8,
        l = document,
        s = new RegExp("(?:^|[ ;])" + o + "[^=]+=([^;$])"),
        c = function(t) { return o + t },
        p = function(t) {
            var e, i = l.cookie.split(";"),
                n = 0,
                a = i.length,
                o = [];
            if (t)
                for (; a > n; n++)(e = s.exec(i[n])) && (o.push(e[1]), t(e[1]));
            else
                for (; a > n; n++)(e = s.exec(i[n])) && o.push(e[1]);
            return o
        };
    return i ? window.localStorage : { length: p().length, key: function(t) { return p()[t] || null }, getItem: function(e) { return t.get(c(e)) }, setItem: function(e, i) { t.set(c(e), i, null, "/", r), this.length = p().length }, removeItem: function(e) { t.del(e), this.length = p().length }, clear: function() { this.length = p(function(i) { t.del(e(i.split("=")[0])) }).length } }
}), LBF.define("wpa.protocol.kfuin", function(require, exports, module) {
    function t() {}
    var e = require("util.jsonp"),
        i = require("wpa.conf.chat"),
        n = require("lang.isFunction"),
        a = i.WPL_B_QQ_COM_CONV,
        o = {};
    return {
        get: function(i, r) {
            if (!n(r) && (r = t), !i || o[i]) return void r(o[i]);
            var l = { num: i };
            e(a, l, function(t) {
                if (!t || 0 !== t.r) return void r();
                var e = o[i] = t.data.kfuin;
                r(e)
            })
        },
        set: function(t, e) { o[t] = e }
    }
}), LBF.define("wpa.proto.custom", function(require, exports, module) {
    var t = require("wpa.util.domEvent"),
        e = require("wpa.conf.config"),
        i = (require("wpa.util.log"), require("wpa.util.offset")),
        n = require("wpa.util.htReport"),
        a = e.gWin,
        o = a.document,
        r = o.body,
        l = require("lang.extend"),
        s = (require("wpa.protocol.Reporter"), { callChat: "callChat", callPhone: "callPhone", callAddPal: "callAddPal", callAddGroup: "callAddGroup", callAddFan: "callAddFan", callIm: "callIm" }),
        c = 2,
        p = function(t) {
            var e, n = t.zoom,
                a = t.width,
                o = t.height,
                r = t.h || {},
                l = t.v || {},
                s = r.type,
                c = r.px,
                p = l.type,
                d = l.px,
                u = ["position:fixed", "cursor:pointer", "z-index:1999999999"];
            if (0 == n) 1 == s ? u.push("left:" + c + "px") : 2 == s ? (u.push("left:50%"), u.push("margin-left:-" + a / 2 + "px")) : u.push("right:" + c + "px"), 1 == p ? u.push("top:" + d + "px") : 2 == p ? (u.push("top:50%"), u.push("margin-top:-" + o / 2 + "px")) : u.push("bottom:" + d + "px"), u.push("width:" + a + "px"), u.push("height:" + o + "px");
            else if (1 == n) u.push("width:100%"), u.push("left:0"), e = i.getClientWidth() / a, o *= e, u.push("height:" + o + "px"), 1 == p ? u.push("top:" + d + "px") : 2 == p ? (u.push("top:50%"), u.push("margin-top:-" + o / 2 + "px")) : u.push("bottom:" + d + "px");
            else {
                var h = i.getClientHeight();
                e = h / o, a *= e, u.push("height:" + h + "px"), u.push("width:" + a + "px"), u.push("top:0"), 1 == s ? u.push("left:" + c + "px") : 2 == s ? (u.push("left:50%"), u.push("margin-left:-" + a / 2 + "px")) : u.push("right:" + c + "px")
            }
            return u.join(";") + ";"
        },
        d = function(i, a, l) {
            var s, c = i.fkfuin,
                d = i.id,
                u = (e.CUSTOM_IMG_ID_PREFIX + c + "_" + d, e.CUSTOM_IMG_CLASS_NAME),
                h = i.custom.customImg,
                f = (h.zoom, h.url),
                g = p(h),
                m = i.imgParentDomId,
                b = '<img src="' + f + '" class="' + u + '" style="' + g + '" />';
            try { s = document.createElement(b) } catch (x) { s = document.createElement("img"), s.style.cssText = g, s.setAttribute("src", f), s.setAttribute("class", u) }
            s.onload = function() { t.addEvent(s, "click", function() { l[a] && l[a]() }), n(l.params._sTime, 33) }, m ? o.getElementById(m).appendChild(s) : r.appendChild(s)
        },
        u = function(e, i, a) {
            var r = "";
            if ("string" == typeof e && (0 === e.indexOf("#") && (e = e.substring(1)), r = e, e = o.getElementById(e)), !e) { var l = "[Custom DOM id not exist]dom id:" + r; throw l }
            t.addEvent(e, "click", function() { a[i] && a[i]() }), n(a.params._sTime, 32)
        };
    exports.custom = function(t) {
        var e = this,
            i = s.callChat,
            n = t.custom || {},
            a = n.customType;
        if (t.cate == config.TYPES.IM && (i = s.callIm), a == c) d(t, i, e);
        else {
            var o = n.domId;
            u(o, i, e)
        }
        __WPA.trigger("inited", e.params), this.trigger("render", l({ reportType: "render" }, t))
    }
}), LBF.define("wpa.conf.config", function(require, exports, module) {
    function t() { var t = window; return -1 !== location.href.indexOf("qdconnect.html") && -1 !== location.search.indexOf("wp.qiye.qq.com") && (t = r ? top : parent, h = !0), t }
    var e = require("globalSettings"),
        i = e.staticBase,
        n = e.base,
        a = e.protocol,
        o = require("lang.browser"),
        r = o.isAndroid || o.isIOS,
        l = -1 !== location.hostname.indexOf("local.qiye.qq.com"),
        s = -1 !== location.protocol.indexOf("https"),
        c = "admin.qidian.qq.com",
        p = { common: c + "/tp/wpaCall/getProtocol", mp: c + "/tp/wpaCall/getMpProtocol" },
        d = c + "/qbf/aBTest/getGrayLevel",
        u = t(),
        h = !1,
        f = u,
        g = f.document,
        m = g.body,
        b = navigator.userAgent.toLowerCase(),
        x = -1 !== f.location.href.indexOf("admin.qidian.qq.com/tp/wpa") ? !0 : !1,
        v = /\bQQ\/([\d\.]+)/i,
        _ = /\bIPadQQ\/([\d\.]+).*?\bQQ\/([\d\.]+)/i,
        w = /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/i,
        y = v.test(b) || _.test(b) || w.test(b) || /(ipad|iphone|ipod).*? (ipad)?qq\/([\d.]+)|\bv1_and_sqi?_([\d.]+)(.*? qq\/([\d.]+))?/i.test(b),
        E = -1 !== b.indexOf("micromessenger"),
        k = -1 !== b.indexOf("msie") || !!window.ActiveXObject || "ActiveXObject" in window;
    "undefined" == typeof f.__WPA && (f.__WPA = window.__WPA);
    var T = "",
        I = !1,
        A = !1;
    __WPAENV = "undefined" != typeof __WPAENV ? __WPAENV : "production", "development" == __WPAENV ? (T = "dev", I = !0) : "test" == __WPAENV && (T = "oa", A = !0);
    var S = "http://local.qiye.qq.com/mockup/socket.html",
        C = "http://local.qiye.qq.com/mockup/status_socket.html",
        P = "https://" + T + "webpage.qidian.qq.com/2/chat/h5/index.html",
        q = "https://" + T + "webpage.qidian.qq.com/2/chat-gray/h5/index.html",
        L = "https://" + T + "webpage.qidian.qq.com/2/chat/pc/index.html",
        O = "https://" + T + "webpage.qidian.qq.com/2/chat-gray/pc/index.html",
        N = "https://" + T + "webpage.qidian.qq.com/2/chat/statusManager/index.html";
    r || (P = L, q = O), l && (q = S);
    var B = 8;
    if (b.indexOf("msie") > -1) var M = b.match(/msie\s\d+/),
        W = M && M[0].match(/\d+/),
        B = W ? Number(W) : B;
    module.exports = { imageBaseUrl: i + "/images", customBaseUrl: n, isSSL: s, tencentSig: "tencentSig", cgiDomain: "https://" + T + "admin.qidian.qq.com", CGIS: { GET_SIGT: { development: a + "//dev" + p.common, test: a + "//oa" + p.common, production: a + "//" + p.common }, GET_MP_SIGT: { development: a + "//dev" + p.mp, test: a + "//oa" + p.mp, production: a + "//" + p.mp }, GET_SCALE_INFO: { development: a + "//dev" + d, test: a + "//oa" + d, production: a + "//" + d }, GET_QQ_INVITE_SIGT: "https://" + T + "admin.qidian.qq.com/webim/commonRequest/getProtocol", CLOSE_INVITE_REPORT: "https://" + T + "admin.qidian.qq.com/webim/commonRequest/winClose" }, PAGES: { VOICE_JUMP_PAGE: "https://" + T + "lbs.qidian.qq.com/authorize/voiceShow" }, host: c, ENV: "undefined" != typeof __WPAENV ? __WPAENV : "production", TYPES: { QQ: 1, PHONE: 2, PUB: 3, GROUP: 4, KFEXT: 5, IM: 7 }, SCROLL_TOP_NAME: "__QD_SCROLL_TOP", GLOBAL_WPA: "__qd_wpas", KFUINS: "KFUINS", WPAS_BASED_ON_KFUIN: "WPAS_BASED_ON_KFUIN", CUSTOM_IMG_ID_PREFIX: "_qidian_wpa_img_", CUSTOM_IMG_CLASS_NAME: "qidian_wpa_img", SOCKET: { URL: l ? C : N, SOCKET_IFRAME_ID: "_QD_STATUS_MANAGE_SOCKET_IFRAME", ACTS: { SM_READY: "SM_READY", SM_INIT: "SM_INIT", SM_UNREAD: "SM_UNREAD", SM_INVITE_CONF: "SM_INVITE_CONF", SM_MANUAL_INVITE: "SM_MANUAL_INVITE", SM_INVITE_RET: "SM_INVITE_RET", SM_REFUSE: "SM_REFUSE", SMS_SM_FORCE_CONNECT: "SMS_SM_FORCE_CONNECT", SM_CHAT_OVER: "SM_CHAT_OVER", UPDATE_UNREAD: "UPDATE_UNREAD", DISCONNECT: "DISCONNECT" } }, INVITATION_TYPE: { OFFLINE: 3, AUTO: 4 }, UNREAD_MSG_INFO: "UNREAD_MSG_INFO", INVITE_IFRAME_ID_PREFIX: "_QD_INVITE_IFRAME_ID_PREFIX_", KFUIN_INVITED_TIMES: "KFUIN_INVITED_TIMES", WPA_ID_PREFIX: "qidian_wpa_", WEB_IM: { WEB_IM_IFRAMES_OBJ_NAME: "_QIDIAN_WEB_IM_IFRAMES", WEB_IM_IFRAME_ID: "_QIDIAN_WEB_IM_IFRAME_", WEB_IM_IFRAMES_LOADED: "_QIDIAN_WEB_IM_IFRAMES_LOADED", WPAS_IM_TYPE: "WPAS_IM_TYPE", POSITION_HELP_EL: "__QD_IM_POSITION_HELPER", URL: l ? S : P, URL_SCALE: q, ACTS: { UNREAD: "UNREAD", OPEN: "OPEN", CLOSE: "CLOSE", INIT: "INIT", LAUNCH: "LAUNCH", INPUT: "INPUT", FOCUS: "FOCUS", BLUR: "BLUR", OPEN_IMG: "OPEN_IMG", SHOW: "SHOW" }, LAUNCH_TYPES: { QQ: "QQ", PHONE: "PHONE" } }, isMobile: r, isLocal: l, isDev: I, isOA: A, isFengLing: h, gWin: u, ua: b, eptype: r ? 2 : 1, GLOBAL_INVITE_TPL_AND_CONF: "GLOBAL_INVITE_TPL_AND_CONF", winWidth: m.offsetWidth, winHeight: m.offsetHeight, IM_CHAT_IFRAME_OPENING: "IM_CHAT_IFRAME_OPENING", isInAdmin: x, BROWSER_ENV: { isInMobileQQ: y, isMqq: y, isInWX: E, isIE: k, ieVersion: B, isIOS: o.isIOS, isAndroid: o.isAndroid }, ROLE_KEY: { QQ: "roleQQ", TEL: "roleTEL", KFEXT: "roleKFEXT", GROUP: "roleGROUP", PUB: "rolePUB", IM: "roleIM" }, CLICK_TYPE: { QQ: 1, TEL: 2, KFEXT: 5, GROUP: 4, PUB: 3, IM: 6 }, TP_FORM: { ICON: 1, LINK: 2, QR: 3 }, SANDBOX_ID: "__QIDIAN_SANDBOX", sandbox: f, IM_ORIGIN: "webpage.qidian.qq.com", IM_ORIGIN_REG: l ? /^http(s)?:\/\/local.qiye.qq.com(\/)?$/ : /^http(s)?:\/\/(dev|oa)?webpage.qidian.qq.com(\/)?$/, badjs: { id: 1367, random: 1 }, POST_MESSAGE_FLAG: "QD_PM", POST_MESSAGE_FLAG_CONTENT: "WPA", IM_LANG: { key: "qidian_lang", defaultLang: "zh-cn", availableList: ["zh-cn", "en-us"] } }
}), LBF.define("lang.browser", function(require, exports) {
    var t, e, i = navigator.userAgent.toLowerCase(),
        n = /(chrome)[ \/]([\w.]+)/.exec(i) || /(webkit)[ \/]([\w.]+)/.exec(i) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i) || /(msie) ([\w.]+)/.exec(i) || i.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i) || [];
    i.indexOf("trident") > -1 && (e = /rv:([\d.]+)/.exec(i)) && (n[1] = "msie",
        n[2] = e[1]), t = { browser: n[1] || "", version: n[2] || "0" }, t.browser && (exports[t.browser] = !0, exports.version = t.version), exports.chrome ? exports.webkit = !0 : exports.webkit && (exports.safari = !0);
    var a = exports.msie,
        o = parseInt(exports.version, 10),
        r = exports.isMobile = i.match(/(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i);
    exports.isWin = /windows|win32/.test(i), exports.isMac = /Mac/.test(i), exports.isIOS = /(?:iphone|ipad|ipod)/i.test(i), exports.isAndroid = /android/i.test(i), exports.browser = t.browser || "", exports.majorVersion = o, exports.isIE6 = a && 6 === o, exports.isIE9 = a && 9 === o, exports.isIE9Below = a && 9 > o, exports.isMobile = r
}), LBF.define("wpa.protocol.Reporter", function(require, exports, module) {
    var t = (require("wpa.conf.report"), require("lang.JSON"), require("wpa.util.removeCustomProperty"), require("wpa.util.formReport")),
        e = require("wpa.conf.config"),
        i = e.gWin,
        n = e.ENV,
        a = (require("util.jsonp"), require("lang.browser")),
        o = require("lang.extend"),
        r = require("globalSettings"),
        l = require("wpa.proto.getCPType"),
        s = { development: "devadmin.", test: "oaadmin.", production: "admin." },
        c = s[r.debug] || "",
        p = "https://" + c + "qidian.qq.com",
        d = { render: "/ar/ActCap/ActRpt", click: "/ar/ActCap/ActRpt", gdtReport: "/ar/actCap/gdtRpt" },
        u = 1,
        h = 2,
        f = "gdtReport",
        g = location.hostname,
        m = function() {
            var t = {},
                e = ["post.mp.qq.com", "article.mp.qq.com", "mp.weixin.qq.com", "wap.qidian.qq.com"].join(",");
            if (-1 !== e.indexOf(g)) {
                var i = location.href.match(/taskid=\d+/);
                t.taskid = i ? i[0].split("=")[1] : 0;
                var n = location.href.match(/sceneid=\d+/);
                t.sceneid = n ? n[0].split("=")[1] : 0
            }
            return t
        },
        b = function(e, r) {
            var s = p + d[e];
            if (e === f && 0 != i._gdtReportData) return void t({ action: s, data: i._gdtReportData });
            var c = r.fkfuin;
            switch (r.cate) {
                case 1:
                    c = 0 == r.roleQQ.value ? r.roleQQ.data : c;
                    break;
                case 2:
                    c = 0 == r.roleTEL.value ? r.roleTEL.data : c;
                    break;
                case 3:
                    c = r.rolePUB.uin;
                    break;
                case 4:
                    break;
                case 5:
                    c = r.roleKFEXT.data
            }
            var u = { mid: "", id: r.id, cate: r.cate, type: r.type, visitorid: r.guid, qidianid: r.guid, kfuin: r.fkfuin, kfext: c, ldpg: i.location.href, refurl: "undefined" != typeof document.referrer ? document.referrer : "", ua: window.navigator.userAgent, title: encodeURIComponent(document.title), eptype: a.isMobile ? 2 : 1, pid: r.pid, qid: r.qid, env: n, isKfuin: r.roleQQ && r.roleQQ.isKfuin || 0 };
            if (1 == r.customEnterSwitch && (u.qidian_src_desc = encodeURIComponent(i.qidian_src_desc) || "", u.qidian_track_id = i.qidian_track_id || ""), o(u, m()), "render" === e) dataObj = x(r, u);
            else {
                if ("click" !== e) return;
                var g = l(r);
                r.tptype = g.tptype, dataObj = o({ eventtp: h, clickType: r.clickType, clickid: r.clickid || "", tpForm: r.tpForm }, o(u, g))
            }
            t({ action: s, data: dataObj })
        },
        x = function(t, e) { var i = l(t); return i.eventtp = u, o(i, e) };
    exports.report = b
}), LBF.define("wpa.proto.basicCgiCall", function(require, exports, module) {
    function t(t, e) {
        var n = t && t.isGray || 0;
        if (r.imUrls[e] = i.WEB_IM.URL, n == p && (i.WEB_IM.URL = i.WEB_IM.URL_SCALE, r.imUrls[e] = i.WEB_IM.URL_SCALE), config.isOA) {
            var a = window.__WEBIM_BRANCH || "chat";
            i.WEB_IM.URL = i.WEB_IM.URL.replace(/chat(-gray)?/, a), r.imUrls[e] = i.WEB_IM.URL
        }
    }

    function e(t) { t.trigger("initIm") }
    var i = require("wpa.conf.config"),
        n = i.gWin,
        a = i.CGIS,
        o = i.ENV,
        r = n.__WPA,
        l = (i.WPAS_BASED_ON_KFUIN, require("wpa.util.log")),
        s = (require("wpa.util.removeCustomProperty"), require("util.jsonp")),
        c = 1e3,
        p = 1;
    r.cgiCalls = {}, r.imUrls = {}, r.cgiCalls.getScaleInfo = exports.getScaleInfo = function(n, r) {
        n = n || {};
        var p = !1,
            d = { result: 0 },
            u = n.kfuin,
            h = a.GET_SCALE_INFO[o],
            f = null,
            g = function(n) {
                if (p) return l("[getScaleInfo][callback] is fetched already");
                clearTimeout(f), p = !0, n = n && n.result || 0;
                var a = { isGray: n };
                i.isGray = r.env.isGray = n, t(a, u), e(r)
            };
        i.isLocal && (h = "http://localhost:3000/isGray");
        var m = { kfuin: u };
        s(h, m, g), f = setTimeout(function() { l("[getScaleInfo]setTimeout executed"), g(d) }, c)
    }
}), LBF.define("wpa.util.getRootDomain", function(require, exports, module) {
    var t, e = require("util.Cookie"),
        i = require("wpa.conf.config"),
        n = i.gWin,
        a = require("lang.inArray"),
        o = (n.document, n.location.hostname),
        r = (o.length, o.split(".")),
        l = r.length,
        s = "",
        c = 31536e6,
        p = "__root_domain_v",
        d = n.navigator.cookieEnabled,
        u = [".qq.com"],
        h = function() {
            for (var i = l - 1; i >= 0; i--)
                if (s = "." + r[i] + s, -1 === a(s, u) && (e.set(p, s, s, "/", c), e.get(p))) { t = s; break }
            return t
        };
    exports.getRootDomain = h, exports.isCookieEnabled = d
}), LBF.define("wpa.util.ids", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = t.gWin,
        i = e.document,
        n = "QD.",
        a = function(t) { return t.toString(36) },
        o = function(t) {
            var e = 1;
            if (t) {
                var i = 0;
                e = 0;
                for (var n = t.length - 1; n >= 0; n--) i = t.charCodeAt(n), e = (e << 6 & 268435455) + i + (i << 14), i = 266338304 & e, e = 0 != i ? e ^ i >> 21 : e
            }
            return e
        },
        r = function() {
            var t;
            try {
                var i = new Uint32Array(1);
                e.crypto.getRandomValues(i), t = 2147483647 & i[0]
            } catch (n) { t = Math.floor(2147483648 * Math.random()) }
            return t
        },
        l = function(t) {
            var l = e.navigator.userAgent + (i.cookie ? i.cookie : "") + (i.referrer ? i.referrer : "") + e.location.href,
                s = a(r() ^ 2147483647 & o(l)) + "." + a(r()) + "." + a(+new Date);
            return t ? n + s : s
        },
        s = l,
        c = l;
    exports.createPid = l, exports.createClickId = s, exports.createQid = c
}), LBF.define("wpa.util.log", function() { return function(t) { "undefined" != typeof console && "function" == typeof console.log } }), LBF.define("util.Cookie", function() {
    var t = document,
        e = !0;
    try { t.cookie } catch (i) { e = !1 }
    return { set: e ? function(e, i, n, a, o) { o && (o = new Date(+new Date + o)); var r = e + "=" + escape(i) + (o ? "; expires=" + o.toGMTString() : "") + (a ? "; path=" + a : "") + (n ? "; domain=" + n : ""); return r.length < 4096 && (t.cookie = r), this } : function() {}, get: e ? function(e) { var i = t.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)")); return null != i ? unescape(i[2]) : null } : function() { return "" }, del: e ? function(e, i, n) { return this.get(e) && (t.cookie = e + "=" + (n ? "; path=" + n : "") + (i ? "; domain=" + i : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"), this } : function() {}, find: e ? function(e) { return t.cookie.match(e) } : function() {} }
}), LBF.define("wpa.proto.chat", function(require, exports, module) {
    var t = require("lang.browser"),
        e = require("wpa.protocol.chat"),
        i = require("wpa.conf.chat"),
        n = (require("wpa.protocol.getQQVersion"), require("wpa.proto.chatSelect"), require("lang.proxy")),
        a = require("wpa.conf.config"),
        o = require("util.report"),
        r = a.gWin,
        l = require("wpa.util.log"),
        s = r.location.href,
        c = require("wpa.util.parseQuerystring"),
        p = (require("wpa.util.openMqqPage"), "浠呮敮鎸佺Щ鍔ㄧ鍜ㄨ锛岃閲嶆柊浣跨敤鎵嬫満QQ鍙戣捣鍜ㄨ"),
        d = i.LAUNCH_MOBILE_QQ;
    exports.chat = function(u) {
        var h = n(function() { u && u.apply(this, arguments), this.trigger("chat") }, this),
            f = t.isIOS || t.isAndroid,
            g = this.params.onlyMobile,
            m = parseInt(this.params.chatType || i.CHAT_TYPE_AUTO, 10),
            b = this.params.fkfuin,
            x = this.params.guid,
            v = this.params.id,
            _ = this.params.pid,
            w = this.params.qid,
            y = this.params.key,
            E = this.params.clickid,
            k = this.params.roleValue,
            T = this.params.roleData,
            I = "";
        if ("development" == a.ENV ? I = "dev" : "test" == a.ENV && (I = "oa"), 1 != this.params.videoSwitch) {
            if (1 == this.params.customEnterSwitch) {
                var A = this.params.mediaId,
                    S = "https://" + I + "lbs.qidian.qq.com/authorize/show";
                if (this.params.voice) return f ? (S = a.PAGES.VOICE_JUMP_PAGE, S += "?id=" + v + "&roleData=" + T + "&roleValue=" + k + "&key=" + y + "&qid=" + w + "&pid=" + _ + "&voice=1&clickid=" + E + "&mediaId=" + A + "&visitorId=" + x + "&kfuin=" + b + "&_bid=2399", r.location.href = d + "?mqqPage=" + S) : alert("鏆備笉鏀寔PC绔墦寮€");
                if (this.params.paramSwitch) {
                    S = "https://" + I + "lbs.qidian.qq.com/location/update";
                    var C = window.qidian_track_id || "",
                        P = window.qidian_src_desc || "",
                        q = window.qidian_ex1 || "",
                        L = window.qidian_ex2 || "",
                        O = window.qidian_ex3 || "",
                        N = window.qidian_ex4 || "",
                        B = window.qidian_ex5 || "",
                        M = window.guestId || "",
                        W = "cb=lbs_cb&guestId=" + M + "&type=2&wpaId=" + v + "&mediaId=" + A + "&isMobile=" + (f ? 1 : 0) + "&kfuin=" + b + "&visitorId=" + x + "&roleData=" + T + "&roleValue=" + k + "&qidian_track_id=" + C + "&qidian_src_desc=" + P + "&qidian_ex1=" + q + "&qidian_ex2=" + L + "&qidian_ex3=" + O + "&qidian_ex4=" + N + "&qidian_ex5=" + B + "&clickid=" + E + "&wpa_type=" + (this.params.LBSswitch ? 1 : 2) + "&pid=" + _ + "&key=" + y + "&qid=" + w,
                        R = c(W);
                    return void e.LBSChat(R, S)
                }
                return S += "?id=" + v + "&roleData=" + T + "&roleValue=" + k + "&key=" + y + "&qid=" + w + "&pid=" + _ + "&clickid=" + this.params.clickid + "&mediaId=" + A + "&visitorId=" + x + "&kfuin=" + b + "&_bid=2399", void(f ? r.location.href = d + "?fid=" + v + "&roleData=" + T + "&roleValue=" + k + "&key=" + y + "&kfuin=" + b + "&cate=1&mqqPage=" + S : r.open(S))
            }
            if (g && !f) { if (this.params.isPub) { var F = a.host + "/template/blue/wpa/launch-qr-code.html?qrCodeImg=" + this.params.qrCodeImg; return F = "development" === a.ENV ? "https://dev" + F : "test" === a.ENV ? "https://oa" + F : "https://" + F, window.open(F) } return alert(p) }
            return f ? this.mobileChat(h) : m === i.CHAT_TYPE_QQ ? this.PCChat(h) : this.PCChat(h)
        }
        if (f) {
            var U = "https://" + I + "lbs.qidian.qq.com/videomp/openaio";
            try {
                var D = s.match(/_appid=\d+/)[0].split("=")[1],
                    Q = s.match(/code=[a-z0-9]+/i)[0].split("=")[1];
                U += "?appid=" + D + "&code=" + Q, o(U)
            } catch (j) { l("[chat.js][videoSwitch]get params error") }
        }
    }, exports.PCChat = function(t) {
        var i = this;
        e.PCChat(this.params, function() { t.apply(i, arguments), i.trigger("PCChat") })
    }, exports.mobileChat = function(t) {
        var i = this;
        e.mobileChat(this.params, function() { t.apply(i, arguments), i.trigger("mobileChat") })
    }, exports.anonyChat = function(t) {
        var i = this;
        e.anonyChat(this.params, function() { t.apply(i, arguments), i.trigger("anonyChat") })
    }, exports.linkChat = function(t) {
        var i = this;
        e.linkChat(this.params, function() { t.apply(i, arguments), i.trigger("linkChat") })
    }
}), LBF.define("wpa.proto.phone", function(require, exports, module) {
    var t = require("lang.browser"),
        e = (require("util.jsonp"), require("lang.isFunction"), require("wpa.conf.config")),
        i = e.BROWSER_ENV.isInMobileQQ,
        n = e.gWin,
        a = (e.CGIS, t.isMobile),
        o = e.ENV,
        r = { development: "devadmin.", test: "oaadmin.", production: "admin." };
    navigator.userAgent.toLowerCase(), document.getElementsByTagName("body")[0];
    exports.phone = function(t) {
        var e = this.params;
        if (!a) return alert("鏉ョ數浠呴檺绉诲姩绔懠璧�");
        var l = "https://" + r[o] + "qidian.qq.com/lighttalk/CallCheck?source=1&wpaId=" + e.id + "&id=" + e.fkfuin + "&vid=" + e.guid + "&cate=" + e.cate + "&wpa_type=" + e.type + "&pid=" + e.pid + "&clickid=" + e.clickid + "&qid=" + e.qid + "&sourceUrl=" + n.location.href + "&refurl=" + ("undefined" != typeof document.referrer ? document.referrer : ""),
            s = "https://" + r[o] + "qidian.qq.com/template/blue/mp/menu/wx-jump-phone.html?url=" + encodeURIComponent(l);
        return void setTimeout(function() { return i ? n.location.href = l : n.location.href = s }, 500)
    }
}), LBF.define("wpa.proto.add", function(require, exports, module) {
    var t = require("lang.browser"),
        e = require("util.jsonp"),
        i = require("wpa.conf.chat"),
        n = (require("lang.isFunction"), require("util.serialize")),
        a = require("wpa.conf.config"),
        o = (a.CLICK_TYPE, require("wpa.util.launch")),
        r = a.eptype,
        l = (require("wpa.util.removeCustomProperty"), a.gWin),
        s = a.CGIS,
        c = 0,
        p = 1,
        d = t.isMobile,
        u = a.BROWSER_ENV.isInMobileQQ,
        h = a.ENV,
        f = i.LAUNCH_MOBILE_QQ;
    navigator.userAgent.toLowerCase(), document.getElementsByTagName("body")[0];
    exports.addPal = function(i) {
        if (!t.isMobile && !(a.isOA || a.isDev || a.isLocal)) return alert("鍔犲ソ鍙嬩粎闄愮Щ鍔ㄧ鍛艰捣");
        var n = this.params,
            g = { kfuin: n.fkfuin, kfext: n.fkfext, visitorId: n.guid, visitorid: n.guid, fid: n.id, key: n.key, cate: n.cate, type: n.type, ftype: d ? p : c, pid: n.pid, clickid: n.clickid, tpForm: n.tpForm, qid: n.qid, env: h, eptype: r, tptype: n.tptype, clickType: n.clickType, roleKey: n.roleKey, roleValue: n.roleValue, roleUin: n.roleUin, roleData: n.roleData };
        e(s.GET_SIGT[h], g, function(t) { if (!t || 0 !== t.r || !t.data) return alert(t.data.message || ERROR_MSG_INVALID_STAFF); var e = t.data.sign; return u ? l.location.href = e : d ? l.location.href = f + "?kfuin=" + n.fkfuin + "&fid=" + n.id + "&key=" + n.key + "&protocol=" + e : o(e, { needMobileJump: !0, targetPage: f }) })
    }, exports.addGroup = function(t) {
        var i = this.params,
            n = { kfuin: i.fkfuin, kfext: i.fkfext, visitorId: i.guid, visitorid: i.guid, fid: i.id, key: i.key, cate: i.cate, type: i.type, ftype: d ? p : c, pid: i.pid, clickid: i.clickid, tpForm: i.tpForm, qid: i.qid, env: h, eptype: r, tptype: i.tptype, clickType: i.clickType, roleKey: i.roleKey, roleValue: i.roleValue, roleUin: i.roleUin, roleData: i.roleData };
        e(s.GET_SIGT[h], n, function(t) { if (!t || 0 !== t.r || !t.data) return alert(t.data.message || ERROR_MSG_INVALID_STAFF); var e = t.data.sign; return u ? l.location.href = e : d ? l.location.href = f + "?kfuin=" + i.fkfuin + "&fid=" + i.id + "&key=" + i.key + "&protocol=" + e : o(e, { needMobileJump: !0, targetPage: f }) })
    }, exports.addFan = function(i) {
        if (!t.isMobile) return alert("鍔犲叧娉ㄤ粎闄愮Щ鍔ㄧ鍛艰捣");
        var a = this.params,
            o = { kfuin: a.fkfuin, kfext: a.fkfext, visitorId: a.guid, visitorid: a.guid, fid: a.id, key: a.key, cate: a.cate, type: a.type, ftype: p, pid: a.pid, clickid: a.clickid, tpForm: a.tpForm, qid: a.qid, env: h, eptype: r, clickType: a.clickType, tptype: a.tptype, roleKey: a.roleKey, roleValue: a.roleValue, roleUin: a.roleUin, roleData: a.roleData };
        e(s.GET_SIGT[h], o, function(t) { if (!t || 0 !== t.r || !t.data) return alert(t.data.message || ERROR_MSG_INVALID_STAFF); var e = t.data.sign; return u ? l.location.href = e : l.location.href = f + "?" + n(o) + "&protocol=" + e })
    }
}), LBF.define("wpa.proto.im", function(require, exports, module) {
    var t, e = require("wpa.conf.config"),
        i = e.eptype,
        n = e.KFUINS,
        a = e.POST_MESSAGE_FLAG,
        o = e.POST_MESSAGE_FLAG_CONTENT,
        r = (e.CLICK_TYPE, e.isInAdmin),
        l = e.isMobile,
        s = require("util.localStorage"),
        c = e.INVITATION_TYPE,
        p = require("lang.extend"),
        d = e.WEB_IM.ACTS,
        u = e.SCROLL_TOP_NAME,
        h = e.WEB_IM,
        f = h.WEB_IM_IFRAME_ID,
        g = (h.WPAS_IM_TYPE, e.GLOBAL_WPA, e.UNREAD_MSG_INFO),
        m = (e.WEB_IM.POSITION_HELP_EL, e.GLOBAL_INVITE_TPL_AND_CONF),
        b = e.WEB_IM.WEB_IM_IFRAMES_LOADED,
        x = require("wpa.util.log"),
        v = require("wpa.util.offset"),
        _ = v.getClientWidth(),
        w = v.getClientHeight(),
        y = require("wpa.util.domEvent"),
        E = require("wpa.proto.UnreadMsgCircle"),
        k = require("wpa.invite.main"),
        T = require("wpa.util.ids"),
        I = (require("lang.browser"), require("wpa.proto.CustomParams")),
        A = require("lang.JSON"),
        S = require("wpa.im.lang"),
        C = e.IM_LANG.key,
        P = e.gWin,
        q = P.document,
        L = q.body,
        O = "QD_WPA_BODY_CLASS_NAME",
        N = "QD_WPA_STYLE_NODE",
        B = function(t) { t && "function" == typeof t.preventDefault && t.preventDefault() };
    P[u] = "undefined" != typeof P[u] ? P[u] : 0;
    var M = { mobile: { open: ["right:0;"].join(""), close: ["right:-3000px;"].join("") }, pc: { open: ["right:10px", "bottom:10px", "width:360px", "height:530px", "border-bottom-left-radius:6px", "border-bottom-right-radius:6px", "display:block"].join(";") + ";", close: ["width:300px", "height:50px", "bottom:0"].join(";") + ";" } },
        W = l ? M.mobile.open : M.pc.open,
        R = l ? M.mobile.close : M.pc.close,
        F = function(t) {
            var e = t.kfuin,
                i = q.getElementById(f + e);
            return { imIframe: i }
        };
    exports.openChatIframe = function(r) {
        r = r || {};
        var h, f = r.isClickWpa,
            _ = r.invitationType,
            w = r.seq,
            M = r.key,
            R = r.type,
            U = r.receptionUin,
            D = r.receptionName || "",
            Q = r.isDirectOpen,
            j = r.onlyOpen,
            z = r.isB2C,
            G = Q || j ? r : this.params || {},
            V = G.fkfuin || G.kfuin || r.kfuin,
            H = F({ kfuin: V }),
            K = H.imIframe,
            Y = G.id,
            J = G.guid,
            X = G.roleIM || G.roleQQ || {},
            $ = X.value,
            Z = X.data,
            tt = G.key,
            et = r.clickid || G.clickid || T.createClickId(),
            it = J || s.getItem(e.tencentSig) || s.getItem("tencentSig");
        if (!P[b][V]) return x(V + " webim iframe is still initing...");
        if (f) var nt = this.params,
            at = { cate: nt.cate, type: nt.type, pid: nt.pid, qid: nt.qid, clickType: nt.clickType, tptype: nt.tptype, tpForm: nt.tpForm, eptype: i };
        if (l && E.removeAllRedCircles(V), P.__WPA[n] && P.__WPA[n][V] && P.__WPA[n][V].unread && (P.__WPA[n][V].unread.socket = 0), k.clearInvitePanel({ kfuin: V }), !K || 1 == K.getAttribute("data-isOpen")) return x("[im.js]no im iframe found");
        if (P.__WPA.IM_CHAT_IFRAME_OPENING = 1, l) {
            if (-1 !== e.ua.indexOf("ucbrowser")) {
                if (!q.getElementById(N)) {
                    var ot = q.createElement("style");
                    ot.type = "text/css", ot.id = N;
                    var rt = q.getElementsByTagName("body")[0];
                    rt.insertBefore(ot, rt.firstChild);
                    var lt = "." + O + " > * {visibility:hidden!important;}." + O + " {background: white!important;}";
                    ot.styleSheet ? ot.styleSheet.cssText = lt : ot.appendChild(q.createTextNode(lt))
                }
                L.className += " " + O
            }
            t = P.document.body.style.cssText, P[u] = v.getNewScrollTop(), P.document.body.style.cssText += "position:fixed;left:0;top:0;width:100%;", y.addEvent(top, "touchmove", B)
        }
        if (K.style.cssText += W, K.setAttribute("data-isOpen", "1"), P.wpaShowItemId && (r.wpaShowItemId = P.wpaShowItemId), r.openUnread) return r.act = d.OPEN, r.visitorid = it, r[a] = o, r[C] = S.getLang(), I.setCustomParams(r), h = A.stringify(r), void K.contentWindow.postMessage(h, "*");
        if (Q) return h = { kfuin: V, seq: w, receptionUin: U, receptionName: D, key: M, invitationType: R, onlyOpen: j, clickid: et, visitorid: it, act: d.OPEN }, P.wpaShowItemId && (h.wpaShowItemId = P.wpaShowItemId), h[a] = o, h[C] = S.getLang(), I.setCustomParams(h), h = A.stringify(h), void K.contentWindow.postMessage(h, "*");
        var st = P.__WPA[m][V],
            ct = st ? st.key : null,
            pt = { kfuin: V, wpaId: Y, visitorid: it, wpaKey: tt, roleValue: $, roleData: Z, act: d.OPEN, onlyOpen: j, clickid: et, isClickWpa: f ? 1 : 0 };
        _ && (pt = p(pt, { invitationType: _, key: ct }), pt.reception = st.conf.autoInvited.reception), P.__WPA[g][V] && (pt = p(pt, P.__WPA[g][V]), pt.invitationType = c.OFFLINE), P.__WPA[g][V] && !f, P.__WPA[g][V] = void 0, z && (pt.seq = w, pt.receptionUin = U, pt.receptionName = D, pt.invitationType = R, pt.key = M), f && (pt = p(pt, at)), pt.visitorid = it, P.wpaShowItemId && (pt.wpaShowItemId = P.wpaShowItemId), pt[a] = o, pt[C] = S.getLang(), I.setCustomParams(pt), pt = A.stringify(pt), K.contentWindow.postMessage(pt, "*")
    }, exports.closeChatIframe = function(i) {
        var n = i.kfuin,
            a = F({ kfuin: n }),
            o = a.imIframe;
        return o && 0 != o.getAttribute("data-isOpen") ? (P.__WPA.IM_CHAT_IFRAME_OPENING = 0, l ? (-1 !== e.ua.indexOf("ucbrowser") && (L.className = L.className.replace(O, "")), clearTimeout(P.__qd_keyboard_interval), P.document.body.style.cssText = t, P.scrollTo(0, P[u] || 0), R = "right:-3000px;", o.style.cssText += R, y.removeEvent(top, "touchmove", B)) : o.style.cssText += o._styles.close, void o.setAttribute("data-isOpen", "0")) : x("[im.js]no im iframe found or already closed")
    };
    var U = 1,
        D = 2,
        Q = 760,
        j = 640,
        z = function(t) {
            var e, i = t.imUrl,
                n = I.getCustomParams();
            i += -1 !== i.indexOf("?") ? "&" : "?", i += "visitorid=" + t.guid + "&clickid=" + t.clickid, n[C] = S.getLang();
            for (e in n) i += "&" + e + "=" + n[e];
            var a = (_ - Q) / 2,
                o = (w - j) / 2;
            P.open(i, "_blank", "top=" + o + ", left=" + a + ", width=" + Q + ", height=" + j)
        };
    exports.im = function(t) {
        var i = t.custom || {},
            n = i.open || U;
        if (t.isCustom && n == D && !l) return z(t);
        this.env.isGray;
        return r || this.params.isImForbidden ? alert("缃戦〉鎺ュ緟绫诲瀷鎺ュ緟缁勪欢鏆備笉鏀寔鍔熻兘棰勮") : e.BROWSER_ENV.isIE && e.BROWSER_ENV.ieVersion < 8 ? alert("鎮ㄧ殑娴忚鍣ㄧ増鏈繃浣庯紝璇峰崌绾�") : void this.openChatIframe(t)
    }, exports.set = function(t, i) { t === e.IM_LANG.key && S.setLang(i) }
}), LBF.define("wpa.im.init", function(require, exports, module) {
    function t(t, e) {
        for (var i = q[t] || [], o = e.contentWindow; i.length;) {
            var r = i.shift();
            r[n] = a, r = h.stringify(r), o.postMessage(r, "*")
        }
    }
    var e, i = (require("lang.browser"), require("wpa.conf.config")),
        n = i.POST_MESSAGE_FLAG,
        a = i.POST_MESSAGE_FLAG_CONTENT,
        o = i.BROWSER_ENV.isInMobileQQ,
        r = i.KFUINS,
        l = i.ROLE_KEY,
        s = i.WPAS_BASED_ON_KFUIN,
        c = require("wpa.util.offset"),
        p = require("wpa.util.onIframeLoaded"),
        d = i.isMobile,
        u = (i.GLOBAL_WPA, require("wpa.util.log")),
        h = require("lang.JSON"),
        f = require("wpa.util.launch"),
        g = require("wpa.util.domEvent"),
        h = require("lang.JSON"),
        m = i.gWin,
        b = m.document,
        x = b.body,
        v = m.__WPA,
        _ = (i.WEB_IM.POSITION_HELP_EL, c.getClientWidth()),
        w = c.getClientHeight(),
        y = i.WEB_IM.WEB_IM_IFRAME_ID,
        E = i.WEB_IM.WEB_IM_IFRAMES_OBJ_NAME,
        k = i.WEB_IM.WEB_IM_IFRAMES_LOADED,
        T = i.WEB_IM.ACTS,
        I = (i.WEB_IM.LAUNCH_TYPES, ["position:fixed;", "z-index:2000000010;"].join("")),
        A = 0,
        S = { PC: { right: 10, width: 300 } },
        C = ["width:100%", "height:100%", "border:none!important", "transition: all .4s;", "right:-3000px", "top:0", "bottom:0", "visibility:visible!important"].join(";") + ";",
        P = ["width: 300px", "height: 50px", "border:1px solid #dadee7", "bottom:0", "right:{right}", "box-shadow:0 1px 15px rgba(0, 0, 0, 0.15)", "border-top-left-radius: 6px", "border-top-right-radius: 6px", "border-bottom-left-radius: 0", "border-bottom-right-radius: 0"].join(";") + ";",
        q = {};
    e = I, d && (I += C), m[E] = m[E] ? m[E] : {}, m[k] = m[k] ? m[k] : {};
    var L = exports.isImIframeLoaded = function(t) { return m[E][t] ? !0 : !1 },
        O = exports.initIframe = function(n) {
            n = n || {};
            var a = n.fkfuin,
                o = n.id,
                r = y + a,
                s = n.guid,
                u = (i.WEB_IM.URL, v.imUrls[a]),
                h = n[l.IM] || n[l.QQ],
                f = h.value,
                b = h.data,
                C = { kfuin: a, wpaId: o, wpaKey: n.key, act: T.INIT, isMobile: d, visitorid: s, roleData: b, roleValue: f };
            if (q[a] = q[a] ? q[a] : [], q[a].push(C), !L(a)) {
                if (!d) {
                    var O = (S.PC.width + S.PC.right) * A++ + S.PC.right + "px";
                    I = e, I += P.replace("{right}", O);
                    var N = I;
                    I += "display:none;"
                }
                var B, M = '<iframe scrolling="no" id="' + r + '" frameborder="0" width="100%" height="100%" allowtransparency="true" src="' + u + '" style="' + I + '"></iframe>';
                try { B = document.createElement(M) } catch (W) { B = document.createElement("iframe"), B.width = _, B.height = w, B.id = r, B.style.cssText = I, B.setAttribute("scrolling", "no"), B.setAttribute("frameborder", 0), B.setAttribute("allowtransparency", !0), B.setAttribute("src", u) }
                if (B._styles = { close: N }, x.appendChild(B), d) {
                    var R;
                    g.addEvent(m, "resize", function() {
                        clearTimeout(R), R = setTimeout(function() {
                            var t = c.getClientWidth(),
                                e = (c.getClientHeight(), B.getAttribute("data-isOpen"));
                            0 == e && (B.style.cssText += "right:-" + 10 * t + "px;")
                        }, 300)
                    })
                }
                m[E][a] = !0, p(B, function() { m[k][a] = !0, t(a, B), B.setAttribute("data-isOpen", "0") }, !0)
            }
            m[k][a] && B && t(a, B)
        },
        N = function() {
            g.addEvent(m, "message", function(t) {
                if (t && t.data) {
                    var e = t.origin || t.originalEvent.origin;
                    if (u("[init.js]:origin is:" + e), !i.IM_ORIGIN_REG.test(e)) return u("[init.js]origin error");
                    var n = t.data || {};
                    if ("string" == typeof n) try { n = h.parse(n) } catch (a) { u("JSON.parse error in initMessageListener"), u(a) }
                    var l = Number(n.kfuin) || 0,
                        c = (n.wpaId || 0, n.act),
                        p = (n.kfuin + "_" + n.wpaId, n.type || "", n.sign || ""),
                        g = n.protocol || "",
                        b = n.data || {};
                    if (c === T.UNREAD) {
                        var x = n.data.onlyOpen;
                        if (d) {
                            var _ = v[s][l] && v[s][l][0];
                            if (!_) return u("no wpa with kfuin [" + l + "] found");
                            if (0 == n.data.number) return _.removeUnreadMsgCircle(l);
                            v[r][l].unread.chat = n.data.number, "undefined" == typeof x || x || (v[r][l].onlyOpen = x, v[r][l].onlyOpenParam = n, v[r][l].onlyOpenParam.onlyOpen = !1), _.updateUnreadMsgCircle(n.data.number)
                        } else "undefined" != typeof x && (v[r][l].onlyOpen = x)
                    } else if (c === T.CLOSE) v.IM.closeChatIframe({ kfuin: l });
                    else if (c === T.LAUNCH)
                        if (d) {
                            if (o && p) return m.location.href = p;
                            m.location.href = g
                        } else f(g);
                    else if (c === T.FOCUS) {
                        if (d) {
                            var w = b.adjust || 80,
                                E = b.delay || 300;
                            m.__qd_keyboard_interval = setTimeout(function() {
                                var t = window.innerHeight + w;
                                window.scrollY < t && window.scrollTo(0, t), clearTimeout(m.__qd_keyboard_interval), m.__qd_keyboard_interval = setTimeout(arguments.callee, E)
                            }, E)
                        }
                    } else if (c === T.BLUR) d && clearTimeout(m.__qd_keyboard_interval);
                    else if (c === T.OPEN) { if (!d) { var k = !0; "undefined" != typeof v[r][l].onlyOpen && (k = v[r][l].onlyOpen), v[r][l].onlyOpen = void 0, v[r][l].unread.socket > 0 && (k = !1), v.IM.openChatIframe({ kfuin: l, onlyOpen: k }) } } else if (c === T.OPEN_IMG) {
                        var I = n.data && n.data.url;
                        if (!I) return u("[OPEN_IMG]imgUrl error");
                        d || m.open(I)
                    } else if (c === T.SHOW && !d) {
                        var A = y + l,
                            S = document.getElementById(A);
                        S && (S.style.cssText += "display:block;")
                    }
                }
            })
        };
    exports.imInit = function(t, e) { t.isImForbidden || (v.isMsgListenerAdded || (N(), v.isMsgListenerAdded = !0), O(t), "function" == typeof e && e()) }
}), LBF.define("wpa.invite.main", function(require, exports, module) {
    var t, e = require("wpa.invite.getInviteConf"),
        i = require("wpa.conf.config"),
        n = i.POST_MESSAGE_FLAG,
        a = i.POST_MESSAGE_FLAG_CONTENT,
        o = (i.SOCKET.ACTS, i.WEB_IM),
        r = i.WPAS_BASED_ON_KFUIN,
        l = i.INVITATION_TYPE,
        s = (o.WEB_IM_IFRAME_ID, o.WEB_IM_IFRAMES_OBJ_NAME),
        c = i.INVITE_IFRAME_ID_PREFIX,
        p = i.WEB_IM.WPAS_IM_TYPE,
        d = i.KFUIN_INVITED_TIMES,
        u = require("wpa.util.Style"),
        h = (require("wpa.util.offset"), require("lang.browser")),
        f = h.isAndroid || h.isIOS,
        g = require("lang.extend"),
        m = require("util.report"),
        b = require("wpa.util.launch"),
        x = require("wpa.invite.tpl"),
        v = require("wpa.util.ids"),
        _ = require("wpa.util.domEvent"),
        w = require("wpa.util.onIframeLoaded"),
        y = require("wpa.util.log"),
        E = require("util.jsonp"),
        k = require("util.serialize"),
        T = require("lang.JSON"),
        I = require("wpa.conf.chat"),
        A = require("wpa.proto.CustomParams"),
        S = i.SOCKET,
        C = S.ACTS,
        P = S.SOCKET_IFRAME_ID,
        q = I.LAUNCH_LINK,
        L = i.gWin,
        O = L.document,
        N = O.body,
        B = L.__WPA,
        M = {},
        W = {},
        R = i.GLOBAL_INVITE_TPL_AND_CONF;
    L.__WPA[R] = "undefined" != typeof L.__WPA[R] ? L.__WPA[R] : {}, L.__WPA[d] = "undefined" != typeof L.__WPA[d] ? L.__WPA[d] : {};
    var F = exports.clearInvitePanel = function(t) {
            y(t);
            var e = t.kfuin,
                i = t.iframe || O.getElementById(c + e),
                n = t.$close,
                a = t.$btn1 || {},
                o = t.$btn2 || {};
            n = a = o = null, M[e] = !1, i && i.parentNode && i.parentNode.removeChild(i)
        },
        U = {
            qq: function(t) {
                var e = { kfuin: t.kfuin, isCorpUin: t.isCorpUin, clickId: v.createClickId(), visitorId: B.visitorId, ftype: i.isMobile ? 1 : 0, isB2C: t.isB2C, receptionUin: t.receptionUin };
                F(t), A.setCustomParams(e), setTimeout(function() {
                    E(i.CGIS.GET_QQ_INVITE_SIGT, e, function(t) {
                        t = t || {};
                        var e = t.data || {},
                            i = e.sign,
                            n = e.message || "浼佷笟鎺ュ緟鏆傛椂鏃犳硶浣跨敤锛岃绋嶅悗鍐嶈瘯";
                        return 0 != t.r ? alert(n) : void b(i, { targetPage: q, needMobileJump: !0 })
                    })
                }, 10)
            },
            phone: function() { alert("phone") },
            im: function(t, e) {
                var i = t.kfuin,
                    n = t.isB2C,
                    a = t.seq,
                    o = t.key,
                    r = t.type,
                    c = t.receptionUin,
                    p = v.createClickId(),
                    d = n ? null : l.AUTO,
                    u = { clickid: p, invitationType: d };
                n && (u.isB2C = !0, u.seq = a, u.type = r, u.key = o, u.receptionUin = c), L[s][i] ? (y(i + " exists"), e.openChatIframe(u)) : (f ? alert("mobile im invite without im iframe") : alert("pc im invite without im iframe"), y(i + " doesn't exist")), F(t)
            }
        },
        D = function(e, o, l) {
            if (e) {
                var s = o.kfuin,
                    c = o.isB2C,
                    d = (o.seq, o.type, o.receptionUin, e.getAttribute("data-event")),
                    u = parseInt(e.getAttribute("data-corpuin"), 10);
                if (l = l || L.__WPA[p][s] && L.__WPA[p][s][0] || L.__WPA[r][s][0], !l) return y("no im wpa");
                var h;
                _.addEvent(e, "click", function() {
                    if (y("isB2C:" + c), "close" == d) {
                        F(o), L.__WPA.trigger("startInviteTimeout", s), h = { act: C.SM_REFUSE, kfuin: s }, h[n] = a, h = T.stringify(h), t = t ? t : B[P], t.postMessage(h, "*");
                        var e = i.CGIS.CLOSE_INVITE_REPORT,
                            r = { kfuin: s, visitorId: __WPA.visitorId, isB2C: c ? 1 : 0, key: o.key };
                        e += "?" + k(r), m(e)
                    } else d == x.btnTypes.qq ? U.qq(g(o, { isCorpUin: u })) : d == x.btnTypes.phone ? U.phone() : d == x.btnTypes.im && U.im(o, l)
                })
            }
        },
        Q = function(t, e, i) {
            var n = t.contentWindow,
                a = t.contentDocument || n.document,
                o = e.kfuin,
                r = i.ctx,
                l = i.isB2C,
                s = i.type,
                c = i.receptionUin,
                p = i.key,
                d = i.seq;
            M[o] = !0;
            var u = a.getElementById("invite_close"),
                h = a.getElementById("btn1"),
                f = a.getElementById("btn2");
            f && "undefined" == f.getAttribute("data-event") && (f.parentNode && f.parentNode.removeChild(f), setTimeout(function() { f = null }, 10)), D(u, { kfuin: o, iframe: t, $close: u, $btn1: h, $btn2: f, isB2C: l, seq: d, key: p }, r), D(h, g(e, { kfuin: o, iframe: t, $close: u, $btn1: h, $btn2: f, isB2C: l, seq: d, type: s, key: p, receptionUin: c }), r), D(f, g(e, { kfuin: o, iframe: t, $close: u, $btn1: h, $btn2: f, isB2C: l, seq: d, type: s, key: p, receptionUin: c }), r)
        },
        j = function(t, e, i) {
            i = i || {};
            var n = t.inviteTpl,
                a = t.inviteConf,
                o = a.kfuin,
                r = a.autoInvited || {},
                l = r.active,
                s = r.repeat || {},
                c = s.active || !1,
                p = s.finterval,
                u = Number(s.frequency),
                h = r.reception || {},
                g = (h.type, h.cuin, r.condition || {}),
                m = g.stayPeriod,
                b = g.deviceType,
                x = i.isInviteApi;
            "undefined" == typeof L.__WPA[d][o] && (L.__WPA[d][o] = u), (x || l) && ((x || 3 == b || f && 1 == b || !f && 2 == b) && (x || 0 == m ? z({ inviteTpl: n, inviteConf: a }, e) : setTimeout(function() { z({ inviteTpl: n, inviteConf: a }, e) }, 1e3 * m)), c && L.__WPA.on("startInviteTimeout", function(t) { return L.__WPA[d][t] < 0 ? y("auto invite reached max times") : void(L.__WPA.KFUINS[t].setTimeoutInvite = setTimeout(function() { z({ inviteTpl: n, inviteConf: a }, e) }, 1e3 * p)) }))
        },
        z = exports.showInvitation = function(t, e) {
            var i = t.inviteTpl,
                n = t.inviteConf,
                a = t.isB2C,
                o = t.seq,
                r = t.type,
                l = t.key,
                s = t.receptionUin,
                p = n.kfuin,
                g = c + p,
                m = i.css,
                b = x.getIframeStyle(i, n),
                v = b.style,
                _ = b.width,
                E = b.height,
                k = n.btns || [];
            k.length;
            if (!L.__WPA.IM_CHAT_IFRAME_OPENING) {
                if (O.getElementById(g)) return y("invite iframe " + p + " already exists");
                L.__WPA[d][p]--;
                var T = '<iframe scrolling="no" id="' + g + '" frameborder="0" width="' + _ + '" height="' + E + '" allowtransparency="true" src="about:blank" style="{style}" ></iframe>';
                T = T.replace("{style}", v);
                var I;
                try { I = O.createElement(T) } catch (A) { I = O.createElement("iframe"), I.width = _, I.height = E, I.id = g, I.style.cssText = v, I.setAttribute("scrolling", "no"), I.setAttribute("frameborder", 0), I.setAttribute("allowtransparency", !0), I.setAttribute("src", "about:blank"), f || (I.width = _) }
                N.appendChild(I);
                var S = function() {
                    var t = I.contentWindow,
                        c = I.contentDocument || t.document;
                    c.open(), c.write(["<!doctype html>", '<html xmlns="http://www.w3.org/1999/xhtml">', "<head>", '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />', h.msie && "about:blank" !== I.src ? "<script>document.domain='" + document.domain + "';</script>" : "", "</head>", "<body>", i.tpl, "</body>", "</html>"].join("")), c.close();
                    var p = { name: "style", cssText: m, doc: c };
                    u.commonAdd(p), Q(I, n, { ctx: e, isB2C: a, seq: o, type: r, key: l, receptionUin: s })
                };
                w(I, S)
            }
        },
        G = { type: "1", title: "瀹㈡湇鍦ㄧ嚎锛屾杩庡挩璇�", content: "鎮ㄥソ锛屽綋鍓嶆湁瀹㈡湇鍦ㄧ嚎锛岀偣鍑诲嵆鍙挩璇�", btns: [{ type: "im", text: "缃戦〉鍜ㄨ" }], theme: "1" };
    exports.init = function(t, e) {
        e = e || {};
        var i = this,
            n = t.key,
            a = this.params.fkfuin,
            o = t,
            r = o.invitedStyle || G,
            l = x.getTpl(r),
            s = e.isInviteApi;
        (!W[a] || s) && (W[a] = !0, o.kfuin = a, L.__WPA[R][a] = { tpl: l, conf: o, key: n }, j({ inviteTpl: l, inviteConf: o }, i, e))
    }, exports.getInviteConf = e, exports.tpl = x
}), LBF.define("wpa.proto.socket", function(require, exports, module) {
    var t, e = require("wpa.conf.config"),
        i = e.POST_MESSAGE_FLAG,
        n = e.POST_MESSAGE_FLAG_CONTENT,
        a = e.KFUINS,
        o = e.isMobile ? 1 : 0,
        r = e.WEB_IM.WEB_IM_IFRAME_ID,
        l = e.WPAS_BASED_ON_KFUIN,
        s = e.gWin,
        c = s.document,
        p = c.body,
        d = require("wpa.util.log"),
        u = e.SOCKET,
        h = u.ACTS,
        f = u.URL,
        g = u.SOCKET_IFRAME_ID,
        m = e.INVITE_IFRAME_ID_PREFIX,
        b = e.UNREAD_MSG_INFO,
        x = (e.WEB_IM.WPAS_IM_TYPE, require("wpa.invite.main")),
        v = require("wpa.invite.inviteApi"),
        _ = require("wpa.util.domEvent"),
        w = require("wpa.im.init"),
        y = require("wpa.proto.UnreadMsgCircle"),
        E = require("wpa.util.onIframeLoaded"),
        k = e.sandbox,
        T = require("lang.JSON"),
        I = ["width:0", "height:0", "position:fixed", "right:0", "bottom:0"].join(";") + ";",
        A = !1,
        S = [],
        C = c.referrer,
        P = s.location.href,
        q = c.title;
    s.__WPA[b] = {};
    var L, O = function() {
            _.addEvent(s, "message", function(p) {
                var u = p.data || {},
                    f = p.origin || p.originalEvent.origin;
                if (d("[socket.js]:origin is:" + f), !e.IM_ORIGIN_REG.test(f)) return d("[socket.js]origin error");
                if ("string" == typeof u) try { u = T.parse(u) } catch (p) { d("JSON.parse error in initSocketListener"), d(p) }
                var g = u.act,
                    _ = u.kfuin,
                    E = u.data || {};
                if (g == h.SM_READY) N(t);
                else if (g == h.SM_UNREAD) {
                    var I = k.Number(E.number),
                        A = E.offlineMsgKey,
                        S = E.key,
                        C = E.receptionUin,
                        P = E.receptionName;
                    if (I > 0 && (s.__WPA[b][_] = { offlineMsgKey: A, key: S, receptionUin: C, receptionName: P }), s.__WPA[a][_] && (s.__WPA[a][_].unread.socket = I), o) y.showAllRedCircles(_, I);
                    else {
                        var q = r + _,
                            O = void 0 !== typeof E.theme ? E.theme : 1,
                            B = document.getElementById(q);
                        L = { act: h.UPDATE_UNREAD, kfuin: _, offlineMsgKey: A, key: S, theme: O, receptionUin: C, receptionName: P, number: I }, L[i] = n, L = T.stringify(L), B.contentWindow.postMessage(L, "*")
                    }
                } else if (g == h.SM_MANUAL_INVITE) {
                    d("SM_MANUAL_INVITE");
                    var M = E.type,
                        W = E.seq,
                        S = E.key,
                        C = E.receptionUin;
                    if (1 == M)
                        if (s.__WPA.GLOBAL_INVITE_TPL_AND_CONF[_]) {
                            var R = s.__WPA.GLOBAL_INVITE_TPL_AND_CONF[_],
                                F = R.tpl,
                                U = R.conf;
                            if (c.getElementById(m + _)) return d("invite panel already exists");
                            w.isImIframeLoaded(_) ? x.showInvitation({ inviteTpl: F, inviteConf: U, isB2C: !0, seq: W, type: M, key: S, receptionUin: C }, null) : w.initIframe({ kfuin: _ })
                        } else d("invite rule with kfuin " + _ + " does not exist");
                    else if (2 == M) s.__WPA.IM.openChatIframe({ kfuin: _, seq: W, receptionUin: C, key: S, type: M, isDirectOpen: !0 });
                    else if (5 == M) {
                        var q = r + _,
                            D = document.getElementById(q);
                        L = u, u.act = h.SM_MANUAL_INVITE, L[i] = n, L = T.stringify(L), D.contentWindow.postMessage(L, "*")
                    }
                } else if (g == h.SM_INVITE_CONF) {
                    d("SM_INVITE_CONF");
                    var R = u.inviteRule;
                    if (R.kfuin = _, d(R), "undefined" == typeof s.__WPA.GLOBAL_INVITE_TPL_AND_CONF[_] && s.__WPA[l][_]) {
                        for (var Q = 0, j = s.__WPA[l][_].length; j > Q; Q++) { var z = s.__WPA[l][_][Q]; if (z.params.cate == e.TYPES.QQ || z.params.cate == e.TYPES.IM) break }
                        z.Invite.init.call(z, R), v.add(z, R)
                    }
                } else if (g == h.SM_REFUSE) L = { act: h.SM_REFUSE, kfuin: _ }, L[i] = n, L = T.stringify(L), t.postMessage(L, "*");
                else if (g == h.SMS_SM_FORCE_CONNECT) L = { act: h.SMS_SM_FORCE_CONNECT }, L[i] = n, L = T.stringify(L), t.postMessage(L, "*");
                else if (g == h.SM_CHAT_OVER) s.__WPA.trigger("startInviteTimeout", _);
                else if (g == h.DISCONNECT) { var G = s.__WPA[a]; for (var Q in G) G.hasOwnProperty(Q) && (L = { act: h.DISCONNECT }, L[i] = n, L = T.stringify(L), c.getElementById(r + Q).contentWindow.postMessage(L, "*")) }
            })
        },
        N = function(e) {
            for (var a = 0, o = S.length; o > a; a++) {
                var r = S.shift();
                r[i] = n, r = T.stringify(r), t.postMessage(r, "*")
            }
        },
        B = !1;
    exports.establishSocket = function() {
        var i = this,
            n = i.params,
            a = (this.env.isGray, n.fkfuin),
            r = n.guid,
            l = g,
            d = { kfuin: a, visitorId: r, isMobile: o, act: h.SM_INIT, referUrl: C, ua: window.navigator.userAgent, ldpUrl: decodeURIComponent(P), ldpTitle: decodeURIComponent(q) };
        if (B || (B = !0, O()), !(n.cate != e.TYPES.IM && n.cate != e.TYPES.QQ || e.isInAdmin || (S.push(d), t || A))) {
            A = !0;
            var u, m = '<iframe scrolling="no" id="' + l + '" frameborder="0" width="0" height="0" allowtransparency="true" src="' + f + '" style="' + I + '"></iframe>';
            try { u = c.createElement(m) } catch (b) {
                u = c.createElement("iframe"), u.width = 0, u.height = 0, u.id = l, u.style.cssText = I, u.setAttribute("scrolling", "no"),
                    u.setAttribute("frameborder", 0), u.setAttribute("allowtransparency", !0), u.setAttribute("src", f)
            }
            p.appendChild(u), E(u, function() { t = s.__WPA[g] = u.contentWindow })
        }
    }
}), LBF.define("wpa.proto.getGdtClickId", function(require, exports, module) {
    var t = require("util.jsonp"),
        e = (require("wpa.util.removeCustomProperty"), require("lang.extend")),
        i = require("wpa.conf.config"),
        n = i.gWin,
        a = require("wpa.proto.getCPType"),
        o = "jsonp_cb_",
        r = 0,
        l = "https://t.gdt.qq.com/conv/web/cookies/jsonp",
        s = o + r++,
        c = function(i) {
            if ("undefined" == typeof n._gdtClickId) {
                var o = { cb: s, callback: s };
                t(l, o, function(t) { t && 0 == t.ret ? n._gdtReportData = e({ client_id: 54, click_id: t.click_id, visitorid: i.guid, kfuin: i.fkfuin, ldpg: n.location.href }, a(i)) : n._gdtReportData = 0 })
            }
        };
    module.exports = exports = c
}), LBF.define("wpa.proto.UnreadMsgCircle", function(require, exports, module) {
    var t = (require("lang.browser"), require("wpa.util.getOffset"), require("wpa.conf.config")),
        e = t.WPAS_BASED_ON_KFUIN,
        i = t.KFUINS,
        n = t.isMobile,
        a = t.gWin,
        o = t.TYPES.IM,
        r = t.TYPES.QQ,
        l = (t.WEB_IM.WPAS_IM_TYPE, require("wpa.util.Style"), require("wpa.util.log"), require("wpa.conf.wpaType"), require("wpa.util.domEvent"), require("lang.proxy"), require("wpa.util.onIframeLoaded"), require("wpa.proto.mobileUnreadBar")),
        s = (t.WPA_ID_PREFIX, ["* {margin:0;padding:0;}", 'body {font-family:"PingFang SC", "Droid Sans Fallback";background:#ff4222;color:#fff;font-size:12px;text-align:center;height:20px;line-height:20px;}', "span {cursor: pointer;}"].join(""), a.document),
        c = (s.body, function(t) { return t == o || t == r });
    exports.showAllRedCircles = function(t) {
        if (n) {
            var o = a.__WPA[i][t].unread,
                r = o.chat + o.socket;
            if (!(0 >= r)) { return void(a.__WPA[e][t] && a.__WPA[e][t][0].updateUnreadMsgCircle(r)); var o, r }
        }
    };
    exports.removeUnreadMsgCircle = function(t) { n && c(this.params.cate) && l.removeUnreadMsgBar(t) };
    exports.removeAllRedCircles = function(t) {
        if (n) {
            var o = a.__WPA[i][t].unread;
            o.chat = o.socket = 0, a.__WPA[e][t] && a.__WPA[e][t][0].removeUnreadMsgCircle(t)
        }
    }, exports.updateUnreadMsgCircle = function() {
        if (n) {
            var t = this.params.fkfuin;
            if (c(this.params.cate)) {
                var e = a.__WPA[i][t].unread,
                    o = e.chat + e.socket;
                l.drawBar({ kfuin: t, number: o })
            }
        }
    }
}), LBF.define("wpa.proto.pvReport", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = t.gWin,
        i = e.document,
        n = t.ENV,
        a = require("lang.extend"),
        o = (require("util.localStorage"), require("wpa.util.log"), require("wpa.util.formReport")),
        r = t.cgiDomain + "/ar/ActCap/pvRpt";
    e.__QIDIAN = e.__QIDIAN ? e.__QIDIAN : { kfuins: {} };
    var l = e.__QIDIAN.kfuins,
        s = { mid: "", ldpg: e.location.href, refurl: "undefined" != typeof i.referrer ? i.referrer : "", ua: e.navigator.userAgent, title: encodeURIComponent(i.title), eptype: t.isMobile ? 2 : 1, env: n };
    exports.pvReport = function(t) {
        var e = t.kfuin;
        l[e] || (l[e] = !0, setTimeout(function() { o({ action: r, data: a({ kfuin: e }, s) }) }, 300))
    }, exports.setGlobalVisitorId = function(t) {
        var i = t.vid,
            n = t.pid,
            a = t.qid;
        s.pid = n, s.qid = a, e.__QIDIAN.visitorId || (e.__QIDIAN.visitorId = i), s.qidianid = s.visitorid = e.__QIDIAN.visitorId
    }
}), LBF.define("wpa.proto.addDa", function(require, exports, module) {
    var t = require("util.localStorage"),
        e = require("util.Cookie"),
        i = require("wpa.util.log"),
        n = require("wpa.conf.config"),
        a = n.gWin,
        o = "isDaAdded",
        r = "isFetchingDa",
        l = 11,
        s = [],
        c = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
        p = c.getElementsByTagName("base")[0],
        d = function(t, e, i) {
            var n = document.createElement("script");
            n.charset = "utf-8", n.async = !0, n.src = t, n.id = e || "";
            var a = n;
            n.onreadystatechange = n.onload = function() { /loaded|complete|undefined/.test(n.readyState) && "function" == typeof i && (i(), n.onreadystatechange = n.onload = null) }, p ? c.insertBefore(n, p) : c.appendChild(n), a = null
        },
        u = "",
        h = !1,
        f = i,
        g = function() {
            try {
                var t = a,
                    i = "__qq_qidian_da",
                    n = t[i] || "qidianDA";
                if (!n) return;
                var o = t[n],
                    r = s.shift();
                if (!r) return;
                o("create", String(r), { cid: String(u), src: l, pgv_pvi: e.get("pgv_pvi") || "" }), o("set", "t1", new Date)
            } catch (c) { f("[WPA][qidianDAReport]:error occured"), f(c) }
        },
        m = function(e) { h || (u = t.getItem(n.tencentSig) || "", h = !0), s.push(e), a[r] ? a[o] && g() : (a[r] = !0, d("//bqq.gtimg.com/da/i.js", "_da", function() { a[o] = !0, g() })) };
    exports = module.exports = m
}), LBF.define("wpa.protocol.chat", function(require, exports) {
    var t, e, i, n = require("lang.browser"),
        a = (require("monitor.SpeedReport"), require("util.GUID"), require("util.domain")),
        o = (require("lang.extend"), require("util.jsonp")),
        r = require("wpa.util.onIframeLoaded"),
        l = require("lang.isFunction"),
        s = require("wpa.conf.config"),
        c = (s.CLICK_TYPE, s.gWin),
        p = s.eptype,
        d = require("wpa.conf.chat"),
        u = require("globalSettings"),
        h = (require("wpa.protocol.kfuin"), require("wpa.util.getReportData"), require("util.serialize")),
        f = (require("wpa.util.removeCustomProperty"), require("wpa.util.launch")),
        g = require("wpa.proto.CustomParams"),
        m = (u.protocol, d.CHAT_TYPE_AUTO, d.CHAT_TYPE_ANONYMOUS, d.CHAT_TYPE_QQ, d.PC_QQ_SCHEMA_CGI, d.LAUNCH_MOBILE_QQ, d.LAUNCH_LINK),
        b = s.CGIS,
        x = 0,
        v = 1,
        _ = s.ENV,
        w = "鎶辨瓑锛屼紒涓氭殏鏃舵棤浜烘帴寰�",
        y = navigator.userAgent.toLowerCase(),
        E = document.getElementsByTagName("body")[0],
        k = s.BROWSER_ENV.isInMobileQQ,
        T = document;
    if (n.isMobile)
        if (y.indexOf("micromessenger") > -1) {
            var I = /QQ\/(\d+\.\d+)\.\d/,
                A = /V1_AND_SQ_(\d+\.\d+)\.\d/,
                S = I.exec(y) || A.exec(y);
            (t = !!S) && (QQVersion = S[1]), i = !0
        } else {
            var I = /QQ\/(\d+\.\d+)\.\d/,
                A = /V1_AND_SQ_(\d+\.\d+)\.\d/,
                S = I.exec(y) || A.exec(y);
            (t = !!S) && (e = S[1])
        }
    else t = !1, i = !1;
    exports.PCChat = function(t, e) {
        var i = { kfuin: t.fkfuin, kfext: t.fkfext, visitorId: t.guid, visitorid: t.guid, fid: t.id, key: t.key, cate: t.cate, type: t.type, ftype: x, tptype: t.tptype, tpForm: t.tpForm, roleKey: t.roleKey, roleValue: t.roleValue, roleUin: t.roleUin, pid: t.pid, clickid: t.clickid, qid: t.qid, env: _, eptype: p, clickType: t.clickType, roleData: t.roleData, isKfuin: t.isKfuin };
        c.wpaShowItemId && (i.wpaShowItemId = c.wpaShowItemId);
        var n = b.GET_SIGT[_];
        t.isPub && (n = b.GET_MP_SIGT[_]), g.setCustomParams(i), o(n, i, function(i) {
            if (!i || 0 !== i.r || !i.data) return alert(i.data.message || w);
            var n = ("/template/blue/wpa/launch-pc-qq.html?protocol=" + i.data.sign, "");
            "development" == s.ENV ? n = "dev" : "test" == s.ENV && (n = "oa");
            if (s.isSSL && !s.BROWSER_ENV.isIE) c.location.href = i.data.sign, setTimeout(function() { l(e) && e(t) }, 1e3);
            else {
                var a = T.createElement("iframe");
                a.style.display = "none", E.insertBefore(a, E.firstChild), a.src = i.data.sign;
                var o = function() { i.data.clkID };
                r(a, o)
            }
        })
    }, exports.mobileChat = function(t, e) {
        var i = (a.domain, t.fkfuin, t.fkfext, { kfuin: t.fkfuin, kfext: t.fkfext, visitorId: t.guid, visitorid: t.guid, fid: t.id, key: t.key, cate: t.cate, type: t.type, ftype: v, pid: t.pid, clickid: t.clickid, tpForm: t.tpForm, qid: t.qid, env: _, eptype: p, clickType: t.clickType, tptype: t.tptype, roleKey: t.roleKey, roleValue: t.roleValue, roleUin: t.roleUin, roleData: t.roleData, isKfuin: t.isKfuin }),
            n = b.GET_SIGT[_];
        c.wpaShowItemId && (i.wpaShowItemId = c.wpaShowItemId), t.isPub && (n = b.GET_MP_SIGT[_]), g.setCustomParams(i), o(n, i, function(t) {
            if (!t || 0 !== t.r || !t.data) return alert(t.data.message || w);
            var e = t.data.sign,
                n = e; + new Date;
            return k ? c.location.href = n : void setTimeout(function() {
                var t = h(i);
                c.location.href = m + "?" + t + "&protocol=" + n
            }, 500)
        })
    }, exports.LBSChat = function(t, e) {
        o(e, t, function(e) {
            if (!e || 0 !== e.r || !e.data) return alert(e.data.message || w);
            var i = e.data.sign;
            f(i, { visitorId: t.visitorId, paramSwitch: 1 })
        })
    }, exports.anonyChat = function(t, e) {
        var i = d.WPD_B_QQ_COM_WEBCHAT + "?nameAccount=" + t.nameAccount,
            n = c.open(i, "_blank", "height=516, width=598,toolbar=no,scrollbars=no,menubar=no,status=no,location=no");
        n.onload = function() { l(e) && e(t) }
    }, exports.linkChat = function(t, e) {
        var i = d.LINK_CHAT + "?nameAccount=" + t.nameAccount + "&id=" + t.id,
            n = c.open(i, "_blank", "height=516, width=598,toolbar=no,scrollbars=no,menubar=no,status=no,location=no");
        n.onload = function() { l(e) && e(t) }
    }
}), LBF.define("wpa.invite.inviteApi", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = t.gWin,
        i = e.__WPA,
        n = [];
    i.inviteKfuinReadyState = [], i.on("inviteApi", function(t) { for (var e = 0; e < n.length; e++) t && -1 === t.indexOf(n[e].inviteRule.kfuin) || n[e].wpa.Invite.init.call(n[e].wpa, n[e].inviteRule, { isInviteApi: !0 }) });
    var a = function(t, e) { n.push({ wpa: t, inviteRule: e }), i.inviteKfuinReadyState.push(e.kfuin), "function" == typeof window.__WPAInviteReady && window.__WPAInviteReady(i.inviteKfuinReadyState) },
        o = function(t) { i.trigger("inviteApi", t) };
    exports.add = a, exports.trigger = o
}), LBF.define("wpa.util.badjs", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = t.badjs,
        i = e.id,
        n = e.random,
        a = function(t) {
            if (t.BJ_REPORT_FOR_WPA) return t.BJ_REPORT_FOR_WPA;
            var e = [],
                i = { id: 0, uin: 0, url: "", combo: 1, ext: null, level: 4, ignore: [], random: 1, delay: 1e3, submit: null },
                n = function(t, e) { return Object.prototype.toString.call(t) === "[object " + (e || "Object") + "]" },
                a = function(t) { var e = typeof t; return "object" === e && !!t },
                o = function(t) { return null === t ? !0 : n(t, "Number") ? !1 : !t },
                r = function(t) {
                    try {
                        if (t.stack) {
                            var e = t.stack.match("https?://[^\n]+");
                            e = e ? e[0] : "";
                            var i = e.match(":(\\d+):(\\d+)");
                            i || (i = [0, 0, 0]);
                            var n = l(t);
                            return { msg: n, rowNum: i[1], colNum: i[2], target: e.replace(i[0], "") }
                        }
                        return t.name && t.message && t.description ? { msg: JSON.stringify(t) } : t
                    } catch (a) { return t }
                },
                l = function(t) {
                    var e = t.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, ""),
                        i = t.toString();
                    return e.indexOf(i) < 0 && (e = i + "@" + e), e
                },
                s = function(t, e) {
                    var n = [],
                        r = [],
                        l = [];
                    if (a(t)) {
                        t.level = t.level || i.level;
                        for (var s in t) {
                            var c = t[s];
                            if (!o(c)) {
                                if (a(c)) try { c = JSON.stringify(c) } catch (p) { c = "[BJ_REPORT_FOR_WPA detect value stringify error] " + p.toString() }
                                l.push(s + ":" + c), n.push(s + "=" + encodeURIComponent(c)), r.push(s + "[" + e + "]=" + encodeURIComponent(c))
                            }
                        }
                    }
                    return [r.join("&"), l.join(","), n.join("&")]
                },
                c = [],
                p = function(t) {
                    if (i.submit) i.submit(t);
                    else {
                        var e = new Image;
                        c.push(e), e.src = t
                    }
                },
                d = [],
                u = 0,
                h = function(t) {
                    if (i.report) {
                        for (; e.length;) {
                            var a = !1,
                                o = e.shift(),
                                r = s(o, d.length);
                            if (n(i.ignore, "Array"))
                                for (var l = 0, c = i.ignore.length; c > l; l++) { var h = i.ignore[l]; if (n(h, "RegExp") && h.test(r[1]) || n(h, "Function") && h(o, r[1])) { a = !0; break } }
                            a || (i.combo ? d.push(r[0]) : p(i.report + r[2] + "&_t=" + +new Date), i.onReport && i.onReport(i.id, o))
                        }
                        var f = d.length;
                        if (f) {
                            var g = function() { clearTimeout(u), p(i.report + d.join("&") + "&count=" + d.length + "&_t=" + +new Date), u = 0, d = [] };
                            t ? g() : u || (u = setTimeout(g, i.delay))
                        }
                    }
                },
                f = {
                    push: function(t) { if (Math.random() >= i.random) return f; var n = a(t) ? r(t) : { msg: t }; return i.ext && !n.ext && (n.ext = i.ext), e.push(n), h(), f },
                    report: function(t) { return t && f.push(t), h(!0), f },
                    info: function(t) { return t ? (a(t) ? t.level = 2 : t = { msg: t, level: 2 }, f.push(t), f) : f },
                    debug: function(t) { return t ? (a(t) ? t.level = 1 : t = { msg: t, level: 1 }, f.push(t), f) : f },
                    init: function(t) {
                        if (a(t))
                            for (var e in t) i[e] = t[e];
                        var n = parseInt(i.id, 10);
                        return n && (/qq\.com$/gi.test(location.hostname) && (i.uin || (i.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), i.url || (i.url = "//badjs2.qq.com/badjs"), i.report = (i.url || "/badjs") + "?id=" + n + "&uin=" + i.uin + "&from=" + encodeURIComponent(location.href) + "&"), f
                    },
                    __onerror__: t.onerror
                };
            return "undefined" != typeof console && console.error && setTimeout(function() {
                ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2]
            }, 0), t.BJ_REPORT_FOR_WPA = f, f
        }(window);
    a.init({ id: i, random: n }), exports.badjsReport = a.report
}), LBF.define("lang.Class", function(require, exports, module) {
    function t(a) {
        var o = i(arguments),
            r = function() { this.initialize.apply(this, arguments) },
            l = function() {};
        l.prototype = this.prototype;
        var s = new l;
        return s.constructor = r, s.superclass = this, o.unshift(s), n.apply(o, o), r.prototype = s, n(r, { inherit: t, include: e, extend: t, superclass: this }), r
    }

    function e(t) { var e = i(arguments); return e.unshift(this), n.apply(this, e), this }
    var i = require("lang.toArray"),
        n = require("lang.extend");
    module.exports = t.call(Function, { initialize: function() {}, mixin: e })
}), LBF.define("lang.inArray", function(require, exports, module) {
    module.exports = [].indexOf ? function(t, e, i) { return e ? [].indexOf.call(e, t, i) : -1 } : function(t, e, i) {
        if (e) {
            var n = e.length;
            for (i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                if (i in e && e[i] === t) return i
        }
        return -1
    }
}), LBF.define("wpa.util.onIframeLoaded", function() {
    return function(t, e, i) {
        if (i)
            if (/loaded|complete/.test(t.readyState)) e();
            else if (t.attachEvent) {
            var n = function() { t.detachEvent("onload", n), e() };
            t.attachEvent("onload", n)
        } else t.onload = function() { e(), t.onload = null };
        else if (/loaded|complete|undefined/.test(t.readyState)) e();
        else if (t.attachEvent) {
            var n = function() { t.detachEvent("onload", n), e() };
            t.attachEvent("onload", n)
        } else t.onload = function() { e(), t.onload = null }
    }
}), LBF.define("wpa.util.tmplCompiler", function(require) {
    var t = require("util.xssFilter"),
        e = (require("lang.inArray"), require("globalSettings")),
        i = (-1 !== e.protocol.indexOf("https") ? !0 : !1, require("wpa.conf.defaultConst"), { 1: "theme-1", 2: "theme-2", 3: "theme-3", 4: "theme-4", 5: "theme-5", 6: "theme-6" });
    return {
        compile: function(e) {
            var n = e.tpl,
                a = e.params,
                o = e.htmlRequired || [],
                r = a.theme,
                l = { theme: i[r], btnText: t.htmlEncode(a.btnText), title: t.htmlEncode(a.title), signature: t.htmlEncode(a.signature), avatar: a.avatar, qrcode: a.qrcode || "", closable: a.closable || "closable", btnBgColor: a.btnBgColor.value };
            n = n.replace("{class}", a.className), l.avatar || (n = n.replace('src="{avatar}"', 'src="javascript:void(0);" style="display:none!important;"'));
            for (var s = 0, c = o.length; c > s; s++) {
                var p = o[s],
                    d = new RegExp("\\{" + p + "\\}", "g");
                n = n.replace(d, l[p])
            }
            return n
        }
    }
}), LBF.define("wpa.util.Style", function(require) {
    var t = (require("wpa.conf.colors"), require("wpa.util.borderRadiusMixin"), require("lang.inArray"), require("wpa.util.urlBackground"), { ELL: ["word-break: break-all;", "word-wrap:break-word;", "text-overflow: ellipsis;", "white-space: nowrap;", "overflow: hidden;"].join(""), WORD_BREAK: ["word-break: break-all;", "word-wrap:break-word;"].join(""), BOX_SHADOW: ["box-shadow:0 1px 15px rgba(0, 0, 0, 0.15);"].join(""), RESET: "margin:0;padding:0;", TEXT_SIZE_ADJUST: ["-webkit-text-size-adjust:none;", "text-size-adjust:none;"].join(""), TEXT_FAMILY: ['font-family:"PingFang SC", "Droid Sans Fallback", "microsoft yahei";'].join(""), DIB: ["display: inline-block;", "*zoom: 1;", "*display: inline;"].join("") }),
        e = [t.TEXT_SIZE_ADJUST, t.TEXT_FAMILY, t.RESET].join("");
    return {
        load: function(t, e, i) {
            i = i || {};
            var n = i.context || document,
                a = n.createElement("link");
            return a.name = t, a.type = "text/css", a.setAttribute("rel", "stylesheet"), a.setAttribute("href", e),
                function() {
                    try {
                        var t = n.getElementsByTagName("head")[0];
                        t.insertBefore(a, t.firstChild)
                    } catch (e) { setTimeout(arguments.callee, 1) }
                }(), a
        },
        add: function(i) {
            var n = i.name,
                a = (i.self || {}, i.dispType, i.cssText),
                o = (i.htmlRequired || {}, i.borderRadius, i.doc),
                r = o || document,
                l = r.createElement("style");
            l.type = "text/css", l.name = n;
            var s = r.getElementsByTagName("body")[0];
            return s.insertBefore(l, s.firstChild), a = a.replace(/\{ell\}/g, t.ELL).replace(/\{boxShadow\}/g, t.BOX_SHADOW).replace(/\{wordBreak\}/g, t.WORD_BREAK).replace(/\{dib\}/g, t.DIB).replace(/\{common\}/g, e), l.styleSheet ? l.styleSheet.cssText = a : l.appendChild(r.createTextNode(a)), l
        },
        commonAdd: function(t) {
            var e = t.name,
                i = (t.self || {}, t.dispType, t.cssText),
                n = t.doc,
                a = n || document,
                o = a.createElement("style");
            o.type = "text/css", o.name = e;
            var r = a.getElementsByTagName("body")[0];
            return r.insertBefore(o, r.firstChild), o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(a.createTextNode(i)), o
        }
    }
}), LBF.define("wpa.conf.wpaType", function(require, exports, module) {
    var t = require("wpa.conf.defaultConst"),
        e = (t.POSITION, { 1: { 1: { cate: 1, type: 1, scene: 0, isPC: 1, borderRadius: "2px", htmlRequired: ["btnText", "theme"], required: ["btnText", "theme", "role"], role: ["roleQQ"], theme: ["#fff", "#00f"] }, 2: { cate: 1, type: 2, scene: 0, isPC: 1, borderRadius: "2px", htmlRequired: ["btnText", "theme"], theme: ["#fff", "#00f"] }, 3: { cate: 1, type: 3, scene: 1, isPC: 1, borderRadius: "2px", htmlRequired: ["title", "signature", "avatar"], theme: ["#fff", "#00f"] }, 4: { cate: 1, type: 4, isPC: 1, floatStyle: { gap: { right: "10px" } }, borderRadius: "2px", htmlRequired: ["btnText", "theme"] }, 5: { cate: 1, type: 5, isPC: 1, floatStyle: { gap: { right: "10px" } }, borderRadius: "2px", htmlRequired: ["title", "btnBgColor", "avatar", "btnText"] }, 6: { cate: 1, type: 6, isPC: 1, floatStyle: { gap: { right: "10px", bottom: "20px" } }, borderRadius: "2px", htmlRequired: ["title", "signature", "btnBgColor", "btnText", "avatar"] }, 7: { cate: 1, type: 7, floatStyle: { gap: { right: "15px", bottom: "20px" } } }, 8: { cate: 1, type: 8, floatStyle: { gap: { right: "15px", bottom: "20px" } }, htmlRequired: ["btnText"] }, 9: { cate: 1, type: 9, htmlRequired: ["closable", "btnText", "title", "signature", "theme", "position", "avatar"], tpl: 3, tplOptions: { iconList: ["icon-qq"], eventList: ["callChat"], fixedBtnText: "鍦ㄧ嚎鍜ㄨ", hasBtnText: 1, hasAvatar: 1 } }, 10: { cate: 1, type: 10, htmlRequired: ["closable", "btnText", "title", "signature", "theme", "position"], tpl: 3, tplOptions: { iconList: ["icon-qq"], eventList: ["callChat"], fixedBtnText: "鍦ㄧ嚎鍜ㄨ", hasBtnText: 1, hasAvatar: 0 } }, 11: { cate: 1, type: 11, htmlRequired: ["closable", "title", "signature", "theme", "position"], tpl: 3, tplOptions: { iconList: ["icon-call", "icon-qq"], eventList: ["callPhone", "callChat"], hasBtnText: 0, hasAvatar: 0 } }, 12: { cate: 1, type: 12, htmlRequired: ["closable", "title", "signature", "theme", "position", "avatar"], tpl: 3, tplOptions: { iconList: ["icon-call", "icon-qq"], eventList: ["callPhone", "callChat"], hasBtnText: 0, hasAvatar: 1 } }, 13: { cate: 1, type: 13, htmlRequired: ["title", "signature", "avatar", "btnText"], isInQQ: 1, tpl: 4, tplOptions: { iconList: ["icon-qq"], eventList: ["callChat"], fixedBtnText: "鍦ㄧ嚎鍜ㄨ", hasBtnText: 1, hasAvatar: 1 } }, 14: { cate: 1, type: 14, htmlRequired: ["title", "signature", "avatar"], isInQQ: 1, tpl: 4, tplOptions: { iconList: ["icon-call", "icon-qq"], eventList: ["callPhone", "callChat"], hasBtnText: 0, hasAvatar: 1 } }, 15: { cate: 1, type: 15, htmlRequired: ["title", "signature", "avatar", "qrcode", "theme"], isInQQ: 1, iframeBorder: { width: "1px", color: "#ebebeb" } } }, 2: { 1: { cate: 2, type: 1, scene: 0, htmlRequired: [], floatStyle: { gap: { right: "15px", bottom: "20px" } }, required: ["role"], role: ["roleTEL"] }, 2: { cate: 2, type: 2, floatStyle: { gap: { right: "15px", bottom: "20px" } }, htmlRequired: ["btnText"] }, 3: { cate: 2, type: 3, htmlRequired: ["closable", "title", "signature", "theme", "btnText", "avatar", "position"], tpl: 3, tplOptions: { iconList: ["icon-call"], eventList: ["callPhone"], fixedBtnText: "鍏嶈垂鐢佃瘽", hasBtnText: 1, hasAvatar: 1 } }, 4: { cate: 2, type: 4, htmlRequired: ["closable", "title", "signature", "theme", "btnText", "position"], tpl: 3, tplOptions: { iconList: ["icon-call"], eventList: ["callPhone"], fixedBtnText: "鍏嶈垂鐢佃瘽", hasBtnText: 1, hasAvatar: 0 } }, 5: { cate: 2, type: 5, htmlRequired: ["closable", "title", "signature", "theme", "position"], tpl: 3, tplOptions: { iconList: ["icon-call", "icon-qq"], eventList: ["callPhone", "callChat"], hasBtnText: 0, hasAvatar: 0 } }, 6: { cate: 2, type: 6, htmlRequired: ["closable", "title", "signature", "theme", "avatar", "position"], tpl: 3, tplOptions: { iconList: ["icon-call", "icon-qq"], eventList: ["callPhone", "callChat"], hasBtnText: 0, hasAvatar: 1 } }, 7: { cate: 2, type: 7, htmlRequired: ["title", "signature", "avatar"], tpl: 4, isInQQ: 1, tplOptions: { iconList: ["icon-call"], eventList: ["callPhone"], fixedBtnText: "鍏嶈垂鐢佃瘽", hasBtnText: 1, hasAvatar: 1 } }, 8: { cate: 2, type: 8, htmlRequired: ["title", "signature", "avatar"], tpl: 4, isInQQ: 1, tplOptions: { iconList: ["icon-call", "icon-qq"], eventList: ["callPhone", "callChat"], hasBtnText: 0, hasAvatar: 1 } } }, 3: { 1: { cate: 3, type: 1, scene: 0, isPC: 1, htmlRequired: ["title", "signature", "btnBgColor", "btnText", "avatar"], required: ["title", "signature", "btnBgColor", "btnText", "avatar", "role"], role: ["rolePUB"], hasBoxShadow: 1, btnBgColor: ["#006600", "#D58512", "#0067ED"] }, 2: { cate: 3, type: 2, htmlRequired: ["btnText", "title", "signature", "btnBgColor", "theme", "closable", "avatar", "position"], tpl: 6, tplOptions: { eventList: ["callAddFan"], fixedBtnText: "鍏虫敞", btnWithoutIconAdd: !0, hasAvatar: 1 } }, 3: { cate: 3, type: 3, htmlRequired: ["btnText", "title", "signature", "btnBgColor", "theme", "closable", "position"], tpl: 6, tplOptions: { eventList: ["callAddFan"], fixedBtnText: "鍏虫敞", btnWithoutIconAdd: !0, hasAvatar: 0 } } }, 4: { 1: { cate: 4, type: 1, scene: 0, isPC: 1, htmlRequired: ["title", "signature", "btnBgColor", "btnText", "avatar"], required: ["title", "signature", "btnBgColor", "btnText", "avatar"], btnBgColor: ["#006600", "#D58512", "#0067ED"] }, 2: { cate: 4, type: 2, htmlRequired: ["btnText", "title", "signature", "btnBgColor", "theme", "closable", "position"], tpl: 6, tplOptions: { eventList: ["callAddGroup"], fixedBtnText: "QQ缇�", hasAvatar: 0 } }, 3: { cate: 4, type: 3, htmlRequired: ["btnText", "title", "signature", "btnBgColor", "theme", "closable", "position", "avatar"], tpl: 6, tplOptions: { eventList: ["callAddGroup"], fixedBtnText: "QQ缇�", hasAvatar: 1 } }, 4: { cate: 4, type: 4, htmlRequired: ["title", "signature", "avatar"], isInQQ: 1, tpl: 5, tplOptions: { eventList: ["callAddGroup"], fixedBtnText: "QQ缇�", hasAvatar: 1 } } }, 5: { 1: { cate: 5, type: 1, scene: 0, isPC: 1, hasBoxShadow: 1, htmlRequired: ["title", "signature", "btnBgColor", "btnText", "avatar"], required: ["title", "signature", "btnBgColor", "btnText", "avatar", "role"], role: ["roleKFEXT"], btnBgColor: ["#006600", "#D58512", "#0067ED"] }, 2: { cate: 5, type: 2, htmlRequired: ["btnText", "title", "signature", "btnBgColor", "theme", "closable", "position"], tpl: 6, tplOptions: { eventList: ["callAddPal"], fixedBtnText: "濂藉弸", hasAvatar: 0 } }, 3: { cate: 5, type: 3, htmlRequired: ["btnText", "title", "signature", "btnBgColor", "theme", "closable", "position", "avatar"], tpl: 6, tplOptions: { eventList: ["callAddPal"], fixedBtnText: "濂藉弸", hasAvatar: 1 } }, 4: { cate: 5, type: 4, htmlRequired: ["title", "signature", "avatar"], isInQQ: 1, tpl: 5, tplOptions: { eventList: ["callAddPal"], fixedBtnText: "濂藉弸", hasAvatar: 1 } } }, 7: { 1: { cate: 7, type: 1, htmlRequired: ["theme"], floatStyle: { gap: { right: "15px", bottom: "20px" } }, fixedCircleOffset: { x: { key: "right", value: -5 }, y: { key: "bottom", value: 30 } } }, 2: { cate: 7, type: 2, floatStyle: { gap: { right: "15px", bottom: "20px" } }, fixedCircleOffset: { x: { key: "right", value: -5 }, y: { key: "bottom", value: 26 } }, htmlRequired: ["btnText", "theme"] }, 3: { cate: 7, type: 3, htmlRequired: ["closable", "btnText", "title", "signature", "theme", "position", "avatar"], tpl: 3, tplOptions: { iconList: ["icon-im"], eventList: ["callIm"], hasBtnText: 1, hasAvatar: 1 }, circleOffset: { x: { key: "right", value: -27 }, y: { key: "bottom", value: 15 } }, fixedCircleOffset: { x: { key: "right", value: 17 }, y: { key: "bottom", value: 40 } } }, 4: { cate: 7, type: 4, htmlRequired: ["closable", "btnText", "title", "signature", "theme", "position"], tpl: 3, tplOptions: { iconList: ["icon-im"], eventList: ["callIm"], hasBtnText: 1, hasAvatar: 0 }, circleOffset: { x: { key: "right", value: -27 }, y: { key: "bottom", value: 15 } }, fixedCircleOffset: { x: { key: "right", value: 17 }, y: { key: "bottom", value: 40 } } }, 5: { cate: 7, type: 5, htmlRequired: ["closable", "title", "signature", "theme", "position", "avatar"], tpl: 3, tplOptions: { iconList: ["icon-call", "icon-im"], eventList: ["callPhone", "callIm"], hasBtnText: 0, hasAvatar: 1 }, circleOffset: { x: { key: "right", value: -80 }, y: { key: "bottom", value: 22 } }, fixedCircleOffset: { x: { key: "right", value: 71 }, y: { key: "bottom", value: 32 } } }, 6: { cate: 7, type: 6, htmlRequired: ["closable", "title", "signature", "theme", "position"], tpl: 3, tplOptions: { iconList: ["icon-call", "icon-im"], eventList: ["callPhone", "callIm"], hasBtnText: 0, hasAvatar: 0 }, circleOffset: { x: { key: "right", value: -80 }, y: { key: "bottom", value: 22 } }, fixedCircleOffset: { x: { key: "right", value: 71 }, y: { key: "bottom", value: 32 } } }, 7: { cate: 7, type: 7, htmlRequired: ["title", "signature", "avatar", "btnText"], isInQQ: 1, tpl: 4, tplOptions: { iconList: ["icon-im"], eventList: ["callIm"], hasBtnText: 1, hasAvatar: 1 }, circleOffset: { x: { key: "right", value: -15 }, y: { key: "bottom", value: 15 } }, fixedCircleOffset: { x: { key: "right", value: 5 }, y: { key: "bottom", value: 46 } } }, 8: { cate: 7, type: 8, htmlRequired: ["title", "signature", "avatar"], isInQQ: 1, tpl: 4, tplOptions: { iconList: ["icon-call", "icon-im"], eventList: ["callPhone", "callIm"], hasBtnText: 0, hasAvatar: 1 }, circleOffset: { x: { key: "right", value: -72 }, y: { key: "bottom", value: 22 } }, fixedCircleOffset: { x: { key: "right", value: 62 }, y: { key: "bottom", value: 40 } } }, 9: { cate: 7, type: 9, htmlRequired: ["title", "signature", "avatar", "qrcode", "theme"], isInQQ: 1, iframeBorder: { width: "1px", color: "#ebebeb" } }, 12: { cate: 7, type: 10, isPC: 1, floatStyle: { gap: { left: "10px", bottom: "10px" } }, htmlRequired: ["signature", "avatar", "theme"] }, 13: { cate: 7, type: 13, isPC: 1, floatStyle: { gap: { right: "10px" } }, borderRadius: "4px", htmlRequired: ["avatar", "signature", "theme"] }, 14: { cate: 7, type: 14, isPC: 1, floatStyle: { gap: { right: "0" } }, htmlRequired: ["theme"] } } });
    module.exports = e
}), LBF.define("wpa.util.insertIframe", function(require, exports, module) {
    var t = require("lang.browser"),
        e = function(e) {
            var i = document.getElementsByTagName("script"),
                n = i[i.length - 1],
                a = e.ele,
                o = e.lastScript ? e.lastScript : n,
                r = e.container;
            if (!r) return void o.parentNode.insertBefore(a, o);
            if ("string" == typeof r) { var l = document.getElementById(r); if (!l) throw new Error("鏃犳硶鎵惧埌container锛岃container id瀵瑰簲鍏冪礌涓嶅瓨鍦ㄦ垨鑰呬笉鍦―OM涓�"); var s = "BackCompat" === document.compatMode; return void(t.msie && parseInt(t.version, 10) < 7 || s ? document.body.appendChild(a) : l.appendChild(a)) }
            if ("undefined" != typeof r.nodeType) return void r.appendChild(a);
            throw new Error("鏃犳晥鐨刢ontainer锛岃妫€鏌ontainer鍙傛暟锛屼互鍙奵ontainer id瀵瑰簲鐨勫厓绱犳槸鍚﹀悎娉�")
        };
    module.exports = e
}), LBF.define("wpa.conf.floatCss", function(require, exports) {
    var t = (require("lang.browser"), require("wpa.conf.defaultConst")),
        e = t.POSITION,
        i = (require("wpa.util.offset"), 1),
        n = "z-index: 2000000000;",
        a = "position:fixed;";
    exports.getFloatStyle = function(t) {
        var o = t.position,
            r = t.location,
            l = t.defaultPosition,
            s = "number" == typeof t.width ? !0 : !1,
            c = s ? t.width : 0,
            p = "number" == typeof t.height ? t.height : 0,
            d = "0px",
            u = t.floatStyle || {},
            h = u.gap || {},
            f = (h.top || d, h.bottom || d),
            g = h.right || d,
            m = h.left || d,
            b = p / 2,
            x = "";
        if ("undefined" != typeof r) {
            var v = r.h || {},
                _ = r.v || {},
                w = v.type,
                y = v.px || 0,
                E = _.type,
                k = _.px || 0;
            return 1 == w ? x += "left:" + y + "px;" : 2 == w ? x += "left: 50%;margin-left:-" + c / 2 + "px;" : 3 == w && (x += "right:" + y + "px;"), 1 == E ? x += "top:" + k + "px;" : 2 == E ? x += "top: 50%;margin-top:-" + p / 2 + "px;" : 3 == E && (x += "bottom:" + k + "px;"), x += a + n
        }
        if (l) {
            switch (l) {
                case e[6]:
                    x = "right:" + g + ";top:50%;margin-top:-" + b + "px;";
                    break;
                case e[9]:
                    x = "right:" + g + ";bottom:" + f;
                    break;
                case e[8]:
                    x = "bottom:" + d + ";left:0;";
                    break;
                case e[7]:
                    x = "bottom:" + f + ";left:" + m + ";"
            }
            x += ";" + a + n
        } else "undefined" != typeof o && (o == i && (x = a + "bottom:" + d, !s & "100%" == t.width && (x += ";left: 0")), x += ";" + n);
        return x
    }
}), LBF.define("wpa.conf.Events", function(require, exports, module) { var t = { defaultEventType: "click" }; return t }), LBF.define("lang.proxy", function(require, exports, module) { module.exports = function(t, e) { return function() { return t.apply(e, arguments) } } }), LBF.define("wpa.conf.wpaTmpl", function(require, exports, module) {
    var t, e, i = require("wpa.conf.config"),
        n = i.imageBaseUrl,
        a = i.TYPES,
        o = require("lang.extend"),
        r = require("lang.browser"),
        l = require("wpa.conf.defaultConst"),
        s = l.defaultEventTagName,
        c = require("wpa.conf.wpaType"),
        p = require("wpa.util.replaceImg3X"),
        d = require("wpa.conf.tpl"),
        u = r.isAndroid,
        h = (r.isIOS, { 2: "#12b7f5", 3: "#0067ed", 4: "#ff9232", 5: "#ee685d", 6: "#25cd98" }),
        f = l.POSITION,
        g = require("wpa.util.getSize");
    module.exports = exports = {
        init: function(i) {
            i = i || {};
            var r = i.ratio || 1,
                l = { ratio: r },
                m = g(i.ratio);
            t = { 1: d(1, o({ hasAvatar: 1 }, l)), 2: d(2, l), 3: d(1, l), "1_9": d(c[a.QQ][9].tpl, o(c[a.QQ][9].tplOptions, l)), "1_10": d(c[a.QQ][10].tpl, o(c[a.QQ][10].tplOptions, l)), "1_11": d(c[a.QQ][11].tpl, o(c[a.QQ][11].tplOptions, l)), "1_12": d(c[a.QQ][12].tpl, o(c[a.QQ][12].tplOptions, l)), "1_13": d(c[a.QQ][13].tpl, o(c[a.QQ][13].tplOptions, l)), "1_14": d(c[a.QQ][14].tpl, o(c[a.QQ][14].tplOptions, l)), "2_3": d(c[a.PHONE][3].tpl, o(c[a.PHONE][3].tplOptions, l)), "2_4": d(c[a.PHONE][4].tpl, o(c[a.PHONE][4].tplOptions, l)), "2_5": d(c[a.PHONE][5].tpl, o(c[a.PHONE][5].tplOptions, l)), "2_6": d(c[a.PHONE][6].tpl, o(c[a.PHONE][6].tplOptions, l)), "2_7": d(c[a.PHONE][7].tpl, o(c[a.PHONE][7].tplOptions, l)), "2_8": d(c[a.PHONE][8].tpl, o(c[a.PHONE][8].tplOptions, l)), "3_2": d(c[a.PUB][2].tpl, o(c[a.PUB][2].tplOptions, l)), "3_3": d(c[a.PUB][3].tpl, o(c[a.PUB][3].tplOptions, l)), "4_2": d(c[a.GROUP][2].tpl, o(c[a.GROUP][2].tplOptions, l)), "4_3": d(c[a.GROUP][3].tpl, o(c[a.GROUP][3].tplOptions, l)), "4_4": d(c[a.GROUP][4].tpl, o(c[a.GROUP][4].tplOptions, l)), "5_2": d(c[a.KFEXT][2].tpl, o(c[a.KFEXT][2].tplOptions, l)), "5_3": d(c[a.KFEXT][3].tpl, o(c[a.KFEXT][3].tplOptions, l)), "5_4": d(c[a.KFEXT][4].tpl, o(c[a.KFEXT][4].tplOptions, l)), "7_3": d(c[a.IM][3].tpl, o(c[a.IM][3].tplOptions, l)), "7_4": d(c[a.IM][4].tpl, o(c[a.IM][4].tplOptions, l)), "7_5": d(c[a.IM][5].tpl, o(c[a.IM][5].tplOptions, l)), "7_6": d(c[a.IM][6].tpl, o(c[a.IM][6].tplOptions, l)), "7_7": d(c[a.IM][7].tpl, o(c[a.IM][7].tplOptions, l)), "7_8": d(c[a.IM][8].tpl, o(c[a.IM][8].tplOptions, l)) }, e = {
                defaultEventTagName: s,
                1: {
                    1: { width: 96, height: 30, accurateSize: 1, tpl: ['<a href="javascript:void(0);" name="' + s + '" class="wpa-container {theme}" data-event="callChat">', '<span class="icon-qq"></span>', '<span class="btn-text">{btnText}</span>', "</a>"].join(""), cssText: ["* {{common}}", '.wpa-container {text-align: center;{dib}width: 94px;height: 28px;line-height:28px;text-decoration: none;border:1px solid #dadee7;border-radius: 2px; font-size: 14px;font-family:"microsoft yahei";}', ".icon-qq {{dib}vertical-align: middle;width: 18px;height: 18px;margin-right: 3px;margin-top:-3px;}", ".theme-1 {background: #fff;color: #1e2330;}", '.theme-1 .icon-qq {background: url("' + n + '/1_1_1.png") no-repeat;}', ".theme-2 {background: #12b7f5;color: #fff;border-color: #12b7f5;}", '.icon-qq {background: url("' + n + '/1_1_2.png") no-repeat;}', ".theme-3 {background: #0067ed;color: #fff;border-color: #0067ed;}", ".theme-4 {background: #ff9232;color: #fff;border-color: #ff9232;}", ".theme-5 {background: #ee685d;color: #fff;border-color: #ee685d;}", ".theme-6 {background: #33cc99;color: #fff;border-color: #33cc99;}", ".btn-text {{dib}vertical-align: middle;font-size: 14px;height: 28px;line-height: 28px;margin-top:-3px;{ell}}"].join("") },
                    2: { width: 150, height: 45, accurateSize: 1, tpl: ['<a href="javascript:void(0);" name="' + s + '" class="wpa-container {theme}" data-event="callChat">', '<span class="icon-qq"></span>', '<span class="btn-text">{btnText}</span>', "</a>"].join(""), cssText: ["* {{common}}", '.wpa-container {text-align: center;{dib}width: 148px;height: 43px;line-height:42px;text-decoration: none;border-radius: 2px; border:1px solid #dadee7;font-size: 14px;font-family:"microsoft yahei";}', ".icon-qq {{dib}vertical-align: middle;width: 26px;height: 26px;margin-right: 10px;}", ".theme-1 {background: #fff;color: #1e2330;}", '.theme-1 .icon-qq {background: url("' + n + '/1_2_1.png") no-repeat;}', ".theme-2 {background: #12b7f5;color: #fff;border-color: #12b7f5;}", '.icon-qq {background: url("' + n + '/1_2_2.png") no-repeat;}', ".theme-3 {background: #0067ed;color: #fff;border-color: #0067ed;}", ".theme-4 {background: #ff9232;color: #fff;border-color: #ff9232;}", ".theme-5 {background: #ee685d;color: #fff;border-color: #ee685d;}", ".theme-6 {background: #33cc99;color: #fff;border-color: #33cc99;}", ".btn-text {{dib}vertical-align: middle;font-size: 16px;height: 45px;line-height: 45px;position:relative;top:-2px;{ell}}"].join("") },
                    3: { width: 255, height: 85, accurateSize: 1, defaultPosition: f[6], tpl: ['<a class="wpa-container" data-event="callChat" name="' + s + '">', '<img class="avatar" src="{avatar}" />', '<span class="icon-qq"></span>', '<span class="title">{title}</span>', '<span class="signature">{signature}</span>', "</a>"].join(""), cssText: ["* {{common}}", '.wpa-container {{dib}width: 253px;height: 83px;border-radius: 2px;position: relative;font-family:"microsoft yahei";font-size: 14px;background: #fff;border: 1px solid #dadee7;box-shadow:0 1px 3px rgba(30, 36, 49, 0.15);cursor: pointer;}', ".avatar {width: 85px;height: 83px;position: absolute;left:0;top: 0;}", '.icon-qq {{dib}width: 22px;height: 22px;background: url("' + n + '/1_4.png") no-repeat;position: absolute;left: 97px;top: 18px;}', ".title {{dib}{ell}max-width: 125px;font-size: 20px;position: absolute;left: 126px;top: 16px;color:#1e2330;}", ".signature {{dib}{ell}max-width: 150px;position: absolute;left: 97px;top: 50px;text-align: left;}"].join("") },
                    4: {
                        width: 70,
                        height: 70,
                        accurateSize: 1,
                        defaultPosition: f[6],
                        tpl: ['<a class="wpa-container {theme}" data-event="callChat" name="' + s + '">', '<span class="icon-qq"></span>', '<span class="btn-text">{btnText}</span>', "</a>"].join(""),
                        cssText: ["* {{common}}", '.wpa-container {cursor:pointer;{dib}width: 68px;height: 68px;border-radius: 2px;border:1px solid #dadee7;position: relative;font-family:"microsoft yahei";font-size: 12px;text-align: center;top:0;}', ".theme-1 {background: #fff;}", ".theme-1 .btn-text {color:#1e2330;}", ".theme-2 {background: #12b7f5;color:#fff;border-color: #12b7f5;}", ".icon-qq {{dib}width: 26px;height: 26px;position: absolute;top: 13px;left: 22px;}", '.theme-1 .icon-qq {background: url("' + n + '/1_2_1.png") no-repeat;}', '.icon-qq {background: url("' + n + '/1_2_2.png") no-repeat;}', ".theme-3 {background: #0067ed;color: #fff;border-color: #0067ed;}", ".theme-4 {background: #ff9232;color: #fff;border-color: #ff9232;}", ".theme-5 {background: #ee685d;color: #fff;border-color: #ee685d;}", ".theme-6 {background: #33cc99;color: #fff;border-color: #33cc99;}", ".btn-text {{ell}max-width: 70px;color:#fff;display: block;position: relative;top: 43px;}"].join("")
                    },
                    5: { width: 106, height: 165, accurateSize: 1, defaultPosition: f[6], tpl: ['<a class="wpa-container" data-event="callChat" name="' + s + '">', '<span class="title">{title}</span>', '<img class="avatar" src="{avatar}" />', '<span class="btn-area" style="background: {btnBgColor}">', '<span class="icon-qq"></span>', '<span class="btn-text">{btnText}</span>', "</span>", "</a>"].join(""), cssText: ["* {{common}}", '.wpa-container {{dib}{boxShadow}width: 104px;height: 165px;border-radius: 2px;position: relative;font-family:"microsoft yahei";font-size: 14px;background: #fff;border: 1px solid #dadee7;{boxShadow}cursor: pointer;text-align: center;}', ".title {{dib}color: #000;margin-top: 9px;color:#1e2330;}", ".avatar {width: 80px;height: 80px;border-radius: 50%;margin-top: 9px;}", ".btn-area {{dib}width: 106px;height: 35px;line-height: 35px;position: absolute;bottom: -1px;left: -1px;text-align: center;margin-right: 6px;border-bottom-left-radius: 2px;border-bottom-right-radius: 2px;}", '.icon-qq {{dib}width: 22px;height: 22px;vertical-align: middle;background: url("' + n + '/1_1_2.png") no-repeat;margin-top:1px;}', ".btn-text {{ell}color: #fff;max-width: 100px;}"].join("") },
                    6: { width: 404, height: 200, accurateSize: 1, defaultPosition: f[9], tpl: ['<div class="wpa-container">', '<a class="close" data-event="callClose" name="' + s + '" href="javascript:void(0);"></a>', '<img class="avatar" src="{avatar}" />', '<div class="content">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<a class="btn-area" data-event="callChat" name="' + s + '" style="background: {btnBgColor}">', '<span class="icon-qq"></span>', '<span class="btn-text">{btnText}</span>', "</a>", "</div>"].join(""), cssText: ["* {{common}}", '.wpa-container {{dib}width: 402px;height: 198px;border-radius: 2px;position: relative;border:1px solid #dadee7;background: #fff;/*border: 1px solid #ebedf2;*/font-family:"microsoft yahei";font-size: 14px;{boxShadow}}', ".close {position: absolute;top: 15px;right: 15px;{dib}width: 14px;height: 14px;background: url(" + n + "/icon-close.png) no-repeat;}", ".avatar {position: absolute;top: 0;left: 0;width: 150px;height: 198px;}", ".content {position: absolute;top: 30px;left: 170px;}", ".title {{ell}font-size: 22px;color:#1e2330;}", '.icon-qq {{dib}width: 22px;height: 22px;margin-left: 1px;margin-top:1px;vertical-align: middle;background: url("' + n + '/1_1_2.png") no-repeat;}', ".signature {color: #777;line-height: 24px;margin-top: 10px;width: 215px;}", ".btn-area {{ell}text-decoration: none;color: #fff;position: absolute;right: 15px;bottom: 15px;width: 100px;border-radius: 2px;text-align: center;height: 35px;line-height: 35px;cursor:pointer;}"].join("") },
                    7: { width: 88, height: 90, accurateSize: 1, defaultPosition: f[9], tpl: ['<a class="wpa-container" data-event="callChat" name="' + s + '">', '<span class="icon-qq"></span>', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}line-height:1;width: " + m(84) + "px;height: " + m(84) + "px;border-radius: 50%;background: #fff;border: 1px solid #dadee7;cursor: pointer;text-align: center;}", ".icon-qq {{dib}position:relative;top:" + m(20) + "px;width: " + m(37) + "px;height: " + m(44) + "px;vertical-align: middle;background: url(" + n + p("/icon-qq-44-2x.png", r) + ") no-repeat;background-size: " + m(37) + "px " + m(44) + "px;}"].join("") },
                    8: { width: 250, height: 78, accurateSize: 1, defaultPosition: f[9], tpl: ['<a class="wpa-container" data-event="callChat" name="' + s + '">', '<span class="v"></span>', '<span class="icon-qq"></span>', '<span class="btnText">鍦ㄧ嚎鍜ㄨ</span>', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}font-size:0;-webkit-text-size-adjust:none;width: " + m(246) + "px;height: " + m(74) + "px;border-radius: " + m(100) + "px;background: #fff;border: 1px solid #dadee7;cursor: pointer;text-align: center;position:relative;}", ".v {{dib}vertical-align:middle;line-height:" + m(74) + "px;width:1px;height:" + m(74) + "px;}", ".icon-qq {{dib}vertical-align:middle;width: " + m(37) + "px;height: " + m(44) + "px;background: url(" + n + p("/icon-qq-44-2x.png", r) + ") no-repeat;background-size: " + m(37) + "px " + m(44) + "px;margin-right:8px;}", ".btnText {{dib}{ell}vertical-align:middle;font-size: " + m(34) + "px;max-width: " + m(140) + "px;color: #1e2330;line-height:1;}"].join("") },
                    9: { width: "100%", height: 130, accurateSize: 0, tpl: t["1_9"]().tpl, cssText: t["1_9"]().cssText },
                    10: { width: "100%", height: 130, accurateSize: 0, tpl: t["1_10"]().tpl, cssText: t["1_10"]().cssText },
                    11: { width: "100%", height: 130, accurateSize: 0, tpl: t["1_11"]().tpl, cssText: t["1_11"]().cssText },
                    12: { width: "100%", height: 130, accurateSize: 0, tpl: t["1_12"]().tpl, cssText: t["1_12"]().cssText },
                    13: { width: "100%", height: 140, accurateSize: 0, tpl: t["1_13"]().tpl, cssText: t["1_13"]().cssText },
                    14: { width: "100%", height: 140, accurateSize: 0, tpl: t["1_14"]().tpl, cssText: t["1_14"]().cssText },
                    15: { width: "100%", height: 270, accurateSize: 0, tpl: ['<div class="wpa-container theme-1">', '<div class="qr-code">', '<img src="{qrcode}" class="qr-code-img"/>', '<img src="{avatar}" class="avatar-in-qr-code" />', "</div>", '<div class="info">', '<div class="avatar">', '<span class="title">{title}</span>', "</div>", '<div class="signature">', "{signature}", "</div>", "</div>", "</div>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}position: relative;width: 100%;height: " + m(230) + "px;padding: " + m(20) + "px;}", ".theme-1 {background: #fff;box-shadow: 0 0 0 1px #bbb;}", ".theme-2 {background: #19212e;}", ".theme-3 {background: #00a5e0;}", ".theme-4 {background: #ff9232;}", ".theme-5 {background: #ee685d;}", ".theme-6 {background: #33cc99;}", ".qr-code, .info, .title {{dib}}", ".img-avatar {display: none;}", ".qr-code {padding: " + m(15) + "px; background: #fff; position:relative; width: " + m(200) + "px; height: " + m(200) + "px;}", ".qr-code-img {width: " + m(200) + "px;height: " + m(200) + "px;}", ".theme-1 .qr-code {padding: 0; width: " + m(230) + "px; height: " + m(230) + "px;}", ".theme-1 .qr-code-img {width: " + m(230) + "px;height: " + m(230) + "px;}", ".avatar-in-qr-code {width: " + m(50) + "px; height: " + m(50) + "px; position:absolute;top: " + m(90) + "px;left: " + m(90) + "px;display:none;}", ".info {position: absolute;left: " + m(270) + "px;top: " + m(63) + "px;}", ".avatar img {border-radius: 50%;width: " + m(80) + "px;height: " + m(80) + "px;vertical-align: middle;}", ".title {font-size: " + m(36) + "px;vertical-align: middle;margin-left: " + m(0) + "px;color: #fff;{ell}}", ".signature {line-height: 1.6em;font-size: " + m(26) + "px;max-width: 85%;margin-top: " + m(16) + "px;color: #fff;{wordBreak}}", ".theme-1 .signature {color: #999;}", ".theme-1 .title {color: #000;}"].join("") }
                },
                2: { 1: { width: 88, height: 88, accurateSize: 1, defaultPosition: f[9], tpl: ['<a href="javascript:void(0);" class="wpa-container" name="' + s + '" data-event="callPhone">', '<img class="icon-call" src="' + n + '/icon-call-44-2x.png" srcset="' + n + "/icon-call-44-2x.png 1x, " + n + '/icon-call-44-3x.png 2x" />', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}width: " + m(84) + "px;height: " + m(84) + "px;text-decoration: none;text-align: center;border-radius: 100%;border: 1px solid #dadee7;background:#fff;line-height: " + m(78) + "px;}", ".wpa-container img {vertical-align: middle; width: " + m(42) + "px; height: " + m(42) + "px;}"].join("") }, 2: { width: 250, height: 78, accurateSize: 1, defaultPosition: f[9], tpl: ['<a class="wpa-container" data-event="callPhone" name="' + s + '">', '<span class="v"></span>', '<span class="icon-call"></span>', '<span class="btnText">鍏嶈垂鐢佃瘽</span>', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}font-size:0;-webkit-text-size-adjust:none;width: " + m(246) + "px;height: " + m(74) + "px;border-radius: " + m(100) + "px;background: #fff;border: 1px solid #dadee7;cursor: pointer;text-align: center;position:relative;}", ".v {{dib}vertical-align:middle;line-height:" + m(74) + "px;width:1px;height:" + m(74) + "px;}", ".icon-call {{dib}vertical-align:middle;width: " + m(37) + "px;height: " + m(44) + "px;background: url(" + n + p("/icon-call-30-2x.png", r) + ") no-repeat;background-size: " + m(37) + "px " + m(44) + "px;margin-right:8px;}", ".btnText {{dib}{ell}vertical-align:middle;font-size: " + m(34) + "px;max-width: " + m(140) + "px;color: #1e2330;line-height:" + (u ? "41px" : "1") + ";}"].join("") }, 3: { width: "100%", height: 130, accurateSize: 0, tpl: t["2_3"]().tpl, cssText: t["2_3"]().cssText }, 4: { width: "100%", height: 130, accurateSize: 0, tpl: t["2_4"]().tpl, cssText: t["2_4"]().cssText }, 5: { width: "100%", height: 130, accurateSize: 0, tpl: t["2_5"]().tpl, cssText: t["2_5"]().cssText }, 6: { width: "100%", height: 130, accurateSize: 0, tpl: t["2_6"]().tpl, cssText: t["2_6"]().cssText }, 7: { width: "100%", height: 140, accurateSize: 0, tpl: t["2_7"]().tpl, cssText: t["2_7"]().cssText }, 8: { width: "100%", height: 140, accurateSize: 0, tpl: t["2_8"]().tpl, cssText: t["2_8"]().cssText } },
                3: { 1: { width: 404, height: 200, accurateSize: 1, defaultPosition: f[9], tpl: t[2]({ event: 5 }).tpl, cssText: t[2]({ event: 5 }).cssText }, 2: { width: "100%", height: 140, accurateSize: 0, tpl: t["3_2"]().tpl, cssText: t["3_2"]().cssText }, 3: { width: "100%", height: 140, accurateSize: 0, tpl: t["3_3"]().tpl, cssText: t["3_3"]().cssText } },
                4: { 1: { width: 404, height: 200, accurateSize: 1, defaultPosition: f[9], tpl: t[2]({ event: 4 }).tpl, cssText: t[2]({ event: 4 }).cssText }, 2: { width: "100%", height: 140, accurateSize: 0, tpl: t["4_2"]().tpl, cssText: t["4_2"]().cssText }, 3: { width: "100%", height: 140, accurateSize: 0, tpl: t["4_3"]().tpl, cssText: t["4_3"]().cssText }, 4: { width: "100%", height: 140, accurateSize: 0, tpl: t["4_4"]().tpl, cssText: t["4_4"]().cssText } },
                5: { 1: { width: 404, height: 200, accurateSize: 1, defaultPosition: f[9], tpl: ['<div class="wpa-container">', '<a class="close" data-event="callClose" name="' + s + '" href="javascript:void(0);"></a>', '<img class="avatar" src="{avatar}" />', '<div class="content">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<a class="btn" style="background:{btnBgColor};" href="javascript:void(0);" name="' + s + '" data-event="callAddPal">{btnText}</a>', "</div>"].join(""), cssText: ["* {{common}}", '.wpa-container {{dib}width: 404px;height: 200px;border-radius: 2px;position: relative;background: #fff;/*border: 1px solid #ebedf2;*/font-family:"microsoft yahei";font-size: 14px;{boxShadow}}', ".close {position: absolute;top: 15px;right: 15px;{dib}width: 14px;height: 14px;background: url(" + n + "/icon-close.png) no-repeat;}", ".avatar {position: absolute;top: 0;left: 0;width: 150px;height: 200px;}", ".content {position: absolute;top: 30px;left: 170px;}", ".title {{ell}font-size: 18px;}", ".signature {color: #777;line-height: 24px;margin-top: 10px;width: 215px;}", ".btn {{ell}text-decoration: none;color: #fff;position: absolute;right: 15px;bottom: 15px;width: 100px;border-radius: 2px;text-align: center;height: 35px;line-height: 35px;}"].join("") }, 2: { width: "100%", height: 140, accurateSize: 0, tpl: t["5_2"]().tpl, cssText: t["5_2"]().cssText }, 3: { width: "100%", height: 140, accurateSize: 0, tpl: t["5_3"]().tpl, cssText: t["5_3"]().cssText }, 4: { width: "100%", height: 140, accurateSize: 0, tpl: t["5_4"]().tpl, cssText: t["5_4"]().cssText } },
                7: { 1: { width: 88, height: 90, accurateSize: 1, defaultPosition: f[9], tpl: ['<a class="wpa-container {theme}" data-event="callIm" name="' + s + '">', '<span class="icon-im"></span>', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}line-height:1;width: " + m(84) + "px;height: " + m(84) + "px;border-radius: 50%;border: 1px solid #dadee7;cursor: pointer;text-align: center;}", ".icon-im {{dib}position:relative;top:" + m(20) + "px;width: " + m(44) + "px;height: " + m(44) + "px;vertical-align: middle;background: url(" + n + p("/icon-im-44-white-2x.png", r) + ") no-repeat;background-size: " + m(44) + "px " + m(44) + "px;}", ".theme-1 {background: #fff;}", ".theme-1 .icon-im {background: url(" + n + p("/icon-im-44-blue-2x.png", r) + ") no-repeat;background-size: " + m(44) + "px " + m(44) + "px;}", ".theme-2 {background: #12b7f5;border-color: #12b7f5;}", ".theme-3 {background: #0067ed;border-color: #0067ed;}", ".theme-4 {background: #ff9232;border-color: #ff9232;}", ".theme-5 {background: #ee685d;border-color: #ee685d;}", ".theme-6 {background: #25cd98;border-color: #25cd98;}"].join("") }, 2: { width: 250, height: 78, accurateSize: 1, defaultPosition: f[9], tpl: ['<a class="wpa-container {theme}" data-event="callIm" name="' + s + '">', '<span class="v"></span>', '<span class="icon-im"></span>', '<span class="btnText">{btnText}</span>', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {{dib}font-size:0;-webkit-text-size-adjust:none;width: " + m(246) + "px;height: " + m(74) + "px;border-radius: " + m(100) + "px;background: #fff;border: 1px solid #dadee7;cursor: pointer;text-align: center;position:relative;}", ".v {{dib}vertical-align:middle;line-height:" + m(74) + "px;width:1px;height:" + m(74) + "px;}", ".icon-im {{dib}vertical-align:middle;width: " + m(44) + "px;height: " + m(44) + "px;background: url(" + n + p("/icon-im-44-white-2x.png", r) + ") no-repeat;background-size: " + m(44) + "px " + m(44) + "px;margin-right:8px;}", ".btnText {{dib}{ell}vertical-align:middle;font-size: " + m(34) + "px;max-width: " + m(140) + "px;color: #fff;line-height:1;}", ".theme-1 {background:#fff;}", ".theme-1 .icon-im {background: url(" + n + p("/icon-im-44-blue-2x.png", r) + ") no-repeat;background-size: " + m(44) + "px " + m(44) + "px;}", ".theme-1 .btnText {color: #1e2330;}", ".theme-2 {background: #12b7f5;border-color: #12b7f5;}", ".theme-3 {background: #0067ed;border-color: #0067ed;}", ".theme-4 {background: #ff9232;border-color: #ff9232;}", ".theme-5 {background: #ee685d;border-color: #ee685d;}", ".theme-6 {background: #25cd98;border-color: #25cd98;}"].join("") }, 3: { width: "100%", height: 130, accurateSize: 0, tpl: t["7_3"]().tpl, cssText: t["7_3"]().cssText }, 4: { width: "100%", height: 130, accurateSize: 0, tpl: t["7_4"]().tpl, cssText: t["7_4"]().cssText }, 5: { width: "100%", height: 130, accurateSize: 0, tpl: t["7_5"]().tpl, cssText: t["7_5"]().cssText }, 6: { width: "100%", height: 130, accurateSize: 0, tpl: t["7_6"]().tpl, cssText: t["7_6"]().cssText }, 7: { width: "100%", height: 140, accurateSize: 0, tpl: t["7_7"]().tpl, cssText: t["7_7"]().cssText }, 8: { width: "100%", height: 140, accurateSize: 0, tpl: t["7_8"]().tpl, cssText: t["7_8"]().cssText }, 9: { width: "100%", height: 270, accurateSize: 0, tpl: ['<div class="wpa-container theme-1">', '<div class="qr-code">', '<img src="{qrcode}" class="qr-code-img"/>', '<img src="{avatar}" class="avatar-in-qr-code" />', "</div>", '<div class="info">', '<div class="avatar">', '<span class="title">{title}</span>', "</div>", '<div class="signature">', "{signature}", "</div>", "</div>", "</div>"].join(""), cssText: ["* {{common}}", ".wpa-container {z-index:1;{dib}position: relative;width: 100%;height: " + m(230) + "px;padding: " + m(20) + "px;}", ".theme-1 {background: #fff;box-shadow: 0 0 0 1px #bbb;}", ".theme-2 {background: #19212e;}", ".theme-3 {background: #00a5e0;}", ".theme-4 {background: #ff9232;}", ".theme-5 {background: #ee685d;}", ".theme-6 {background: #33cc99;}", ".qr-code, .info, .title {{dib}}", ".img-avatar {display: none;}", ".qr-code {padding: " + m(15) + "px; background: #fff; position:relative; width: " + m(200) + "px; height: " + m(200) + "px;}", ".qr-code-img {width: " + m(200) + "px;height: " + m(200) + "px;}", ".theme-1 .qr-code {padding: 0; width: " + m(230) + "px; height: " + m(230) + "px;}", ".theme-1 .qr-code-img {width: " + m(230) + "px;height: " + m(230) + "px;}", ".avatar-in-qr-code {width: " + m(50) + "px; height: " + m(50) + "px; position:absolute;top: " + m(90) + "px;left: " + m(90) + "px;display:none;}", ".info {position: absolute;left: " + m(270) + "px;top: " + m(63) + "px;}", ".avatar img {border-radius: 50%;width: " + m(80) + "px;height: " + m(80) + "px;vertical-align: middle;}", ".title {font-size: " + m(36) + "px;vertical-align: middle;margin-left: " + m(0) + "px;color: #fff;{ell}}", ".signature {line-height: 1.6em;font-size: " + m(26) + "px;max-width: 85%;margin-top: " + m(16) + "px;color: #fff;{wordBreak}}", ".theme-1 .signature {color: #999;}", ".theme-1 .title {color: #000;}"].join("") }, 12: { width: 350, height: 70, accurateSize: 1, defaultPosition: f[7], tpl: ['<a class="wpa-container {theme}" data-event="callIm" name="' + s + '">', '<span style="z-index:9999;" class="icon-im" ></span>', '<img class="avatar" src="{avatar}" />', '<div class="chat-bubble">', '<span class="triangle-back"></span>', '<span class="triangle-front"></span>', '<span class="vm"></span>', '<p class="content">{signature}</p>', "</div>", "</a>"].join(""), cssText: ["* {{common}background: transparent;}", ".wpa-container {z-index:1;display:block;cursor:pointer;width: 350px;height: 70px;position: relative;line-height: 70px;}", ".avatar {width: 60px;height: 60px;border-radius: 50%;position: relative;top: 5px;left: 0;z-index:0;}", ".icon-im {display: inline-block;width: 25px;height: 25px;position: absolute;left: 46px;top: 0;background-repeat:no-repeat;z-index:10;}", ".chat-bubble {display:table-cell;vertical-align:middle;border-radius: 6px;border: 1px solid #dadee7;width: 270px;height: 63px;position: absolute;left:75px;top: 3px;font-size: 14px;color: #fff;white-space:nowrap;}", ".vm {display:inline-block;vertical-align:middle;}", ".content {max-width:240px;padding-left: 15px; white-space: normal;padding-right: 12px;line-height: 20px;display: inline-block;vertical-align: middle;position: relative;top: -3px;}", ".theme-1 .chat-bubble {background: #fff;color: #1e2330;}", ".theme-2 .chat-bubble {background: " + h[2] + ";border-color: " + h[2] + ";}", ".theme-3 .chat-bubble {background: " + h[3] + ";border-color: " + h[3] + ";}", ".theme-4 .chat-bubble {background: " + h[4] + ";border-color: " + h[4] + ";}", ".theme-5 .chat-bubble {background: " + h[5] + ";border-color: " + h[5] + ";}", ".theme-6 .chat-bubble {background: " + h[6] + ";border-color: " + h[6] + ";}", ".triangle-back {display: inline-block;width: 0;height: 0;border: 8px solid transparent;position: absolute;left: -16px;top: 24px;z-index: 10;}", ".triangle-front {display: none;width: 0;height: 0;border: 8px solid transparent;position: absolute;left: -14px;top: 24px;z-index: 11;}", ".theme-1 .triangle-back {border-right-color: #dadee7;}", ".theme-1 .triangle-front {border-right-color: #fff;display: inline-block;}", ".theme-2 .triangle-back {border-right-color: " + h[2] + ";}", ".theme-3 .triangle-back {border-right-color: " + h[3] + ";}", ".theme-4 .triangle-back {border-right-color: " + h[4] + ";}", ".theme-5 .triangle-back {border-right-color: " + h[5] + ";}", ".theme-6 .triangle-back {border-right-color: " + h[6] + ";}", ".theme-1 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme2.png);}", ".theme-2 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme2.png);}", ".theme-3 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme3.png);}", ".theme-4 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme4.png);}", ".theme-5 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme5.png);}", ".theme-6 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme6.png);}"].join("") }, 13: { width: 106, height: 140, accurateSize: 1, defaultPosition: f[6], tpl: ['<a class="wpa-container {theme}" data-event="callIm" name="' + s + '">', '<img src="{avatar}" class="avatar" />', '<span style="z-index:9999;" class="icon-im"></span>', '<p class="signature">{signature}</p>', "</a>"].join(""), cssText: ["* {{common}}", ".wpa-container {display:block;cursor:pointer;width: 104px;height: 138px;position: relative;text-align: center;font-size: 14px;color: #1e2330;border: 1px solid #dadee7;border-radius: 4px;background: #fff;}", ".avatar {width: 80px;height: 80px;border-radius: 50%;display: inline-block;position:absolute;left:12px;top: 16px;z-index:0;}", ".signature {position: relative;top:109px;}", ".icon-im {display: inline-block;width: 25px;height: 25px;background-repeat: no-repeat;position: absolute;top: 14px;right: 4px;z-index: 10;}", ".theme-2 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme2.png);}", ".theme-3 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme3.png);}", ".theme-4 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme4.png);}", ".theme-5 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme5.png);}", ".theme-6 .icon-im {background-image:url(" + n + "/im-bubble-pc-theme6.png);}"].join("") }, 14: { width: 80, height: 160, accurateSize: 1, defaultPosition: f[6], tpl: ['<div class="wpa-container {theme}">', '<a class="btn-qq btn" data-event="callChat" name="' + s + '">', '<span class="icon-qq btn-icon"></span><br/>', '<span class="btn-text">QQ</span>', "</a>", '<span class="spliter"></span>', '<a class="btn-im btn" data-event="callIm" name="' + s + '">', '<span class="icon-im btn-icon"></span><br/>', '<span class="btn-text">鍜ㄨ</span>', "</a>", "</div>"].join(""), cssText: ["* {{common}}", ".wpa-container {width: 80px;height: 160px;position: relative;text-align: center;font-size: 16px;color: #fff;border-top-left-radius: 4px;border-bottom-left-radius: 4px;}", ".theme-2 {background: " + h[2] + ";}", ".theme-3 {background: " + h[3] + ";}", ".theme-4 {background: " + h[4] + ";}", ".theme-5 {background: " + h[5] + ";}", ".theme-6 {background: " + h[6] + ";}", ".btn {display:block;text-align: center;position: relative;width: 100%;height: 80px;top: 17px;cursor: pointer;}", ".spliter {display: inline-block;width: 100%;height: 1px;background: #fff;position: absolute;top: 50%;left: 0;}", ".icon-qq {display: inline-block;width: 22px;height: 26px;background: url(" + n + "/icon-qq-white-small.png) no-repeat;}", ".icon-im {display: inline-block;width: 25px;height: 25px;background: url(" + n + "/im-bubble-pc-white.png) no-repeat;}"].join("") } }
            }
        },
        get: function(t, i) { return e[t][i] },
        defaultEventTagName: s
    }
}), LBF.define("wpa.util.domEvent", function(require, exports) { exports.addEvent = window.addEventListener ? function(t, e, i) { return t.addEventListener(e, i), t } : function(t, e, i) { return t.attachEvent("on" + e, i), t }, exports.removeEvent = window.removeEventListener ? function(t, e, i) { return t.removeEventListener(e, i), t } : function(t, e, i) { return t.detachEvent("on" + e, i), t } }), LBF.define("wpa.conf.defaultConst", function(require, exports, module) {
    require("wpa.conf.config");
    module.exports = { THEME: 1, TITLE: ["", "鍦ㄧ嚎鍜ㄨ", "鍏嶈垂鐢佃瘽", "鍏虫敞", "鍔犵兢", "濂藉弸", "", "缃戦〉鍜ㄨ"], SIGNATURE: ["", "鍦ㄧ嚎鍜ㄨ", "鍏嶈垂鐢佃瘽", "鍏虫敞", "鍔犵兢", "濂藉弸", "", "缃戦〉鍜ㄨ"], BTN_TEXT: ["", "鍦ㄧ嚎鍜ㄨ", "鍏嶈垂鐢佃瘽", "鍏虫敞", "QQ缇�", "濂藉弸", "", "缃戦〉鍜ㄨ"], BTN_COLOR: "#12b7f5", POSITION: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 }, defaultEventTagName: "e" }
}), LBF.define("wpa.util.getSize", function(require, exports, module) { module.exports = exports = function(t) { return function(t) { if ("number" != typeof t) return t; var e = Math.ceil(t / 2); return e } } }), LBF.define("wpa.util.bindLogicEvents", function(require, exports, module) {
    var t = require("wpa.conf.Events"),
        e = require("lang.proxy"),
        i = require("wpa.util.domEvent");
    module.exports = function(n, a) {
        if (n.length)
            for (var o = 0, r = n.length; r > o; o++) {
                var l = n[o],
                    s = l.attributes["data-event"].nodeValue,
                    c = s.split(";"),
                    p = c[0],
                    d = c[1] || t.defaultEventType,
                    u = e(a[p], a);
                u && i.addEvent(l, d, u)
            }
    }
}), LBF.define("wpa.util.htReport", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = t.BROWSER_ENV,
        i = e.isIOS,
        n = e.isAndroid,
        a = "pc",
        o = 21848,
        r = 1,
        l = 1,
        s = "https://report.huatuo.qq.com/report.cgi";
    i ? a = "ios" : n && (a = "android"), module.exports = exports = function(t, e) {
        var i = +new Date,
            n = i - t,
            c = new Image,
            p = "flag1=" + o + "&flag2=" + r + "&flag3=" + l + "&" + e + "=" + n;
        c.src = s + "?platform=" + a + "&appid=20282&speedparams=" + encodeURIComponent(p)
    }
}), LBF.define("lang.trim", function(require, exports, module) {
    var t = /(^[\s\xA0]+)|([\s\xA0]+$)/g;
    module.exports = String.prototype.trim ? function(t) { return String.prototype.trim.call(t || "") } : function(e) { return (e || "").toString().replace(t, "") }
}), LBF.define("util.jsonp", function(require, exports, module) {
    function t() {}
    var e, i = require("util.request"),
        n = require("util.serialize"),
        a = require("lang.dateTool"),
        o = 0,
        r = 5e3,
        l = r + 2e3,
        s = {};
    module.exports = function(r, c, p, d) {
        var u, h = c.cb || "JSONP_CB_" + ++o;
        h += "_" + +new Date + "_" + Math.round(1e3 * Math.random()), c.cb = c.callback = h, e = window.__QDWPABUS ? !0 : !1, r += -1 === r.indexOf("?") ? "?" : "&", r += n(c),
            function(n) {
                return e && (s[n] = setTimeout(function() {
                    var t = a.format("Y-m-d H:i:s", new Date),
                        e = new Error("[CGI NOT REACHED ERROR][" + t + "]cgi: " + r);
                    __QDWPABUS.trigger("error", e)
                }, l)), window[n] = function(t) { clearTimeout(s[n]), p(t), setTimeout(function() { window[n] = null, u.parentNode && u.parentNode.removeChild(u) }, 1) }, u = i(r, t, d)
            }(h)
    }
}), LBF.define("wpa.conf.chat", function(require, exports, module) {
    var t = require("globalSettings"),
        e = t.apiBase,
        i = ""; - 1 !== e.indexOf("dev") ? i = "dev" : -1 !== e.indexOf("oa") && (i = "oa");
    var n = "https://{env}admin.qidian.qq.com".replace("{env}", i);
    return { CHAT_TYPE_AUTO: 1, CHAT_TYPE_ANONYMOUS: 2, CHAT_TYPE_QQ: 3, PC_QQ_SCHEMA_CGI: e + "/wpaInfo/TS", WPL_B_QQ_COM_CONV: e + "/wpaInfo/numberInfo", MQQWPA: "mqqwpa://im/chat", WPD_B_QQ_COM_INFO: "http://wpd.b.qq.com/page/info.php", WPD_B_QQ_COM_WEBCHAT: "http://wpd.b.qq.com/page/webchat.html", LINK_CHAT: e.replace("https:", "http:") + "/wpaCall/sslCall", LAUNCH_MOBILE_QQ: n + "/template/blue/wpa/link.html", LAUNCH_LINK: n + "/template/blue/wpa/link.html" }
}), LBF.define("wpa.util.offset", function(require, exports) {
    var t = require("wpa.conf.config"),
        e = t.gWin,
        i = e.document,
        n = "CSS1Compat" === i.compatMode,
        a = i.documentElement,
        o = i.body;
    exports.getScrollTop = function() { return Math.max(a.scrollTop, o.scrollTop) }, exports.getClientWidth = n ? function() { return a.clientWidth } : function() { return o.clientWidth }, exports.getClientHeight = n ? function() { return a.clientHeight } : function() { return o.clientHeight }, exports.getNewScrollTop = function() { var t = i.documentElement.scrollTop || e.pageYOffset || i.body.scrollTop; return t }
}), LBF.define("wpa.conf.report", function(require, exports, module) {
    var t = require("globalSettings").apiBase + "/wpaReport";
    module.exports = { render: t + "/track", click: t + "/click" }
}), LBF.define("lang.JSON", function() {
    return "object" != typeof JSON && (JSON = {}),
        function() {
            "use strict";

            function f(t) { return 10 > t ? "0" + t : t }

            function quote(t) { return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' }

            function str(t, e) {
                var i, n, a, o, r, l = gap,
                    s = e[t];
                switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(t)), "function" == typeof rep && (s = rep.call(e, t, s)), typeof s) {
                    case "string":
                        return quote(s);
                    case "number":
                        return isFinite(s) ? String(s) : "null";
                    case "boolean":
                    case "null":
                        return String(s);
                    case "object":
                        if (!s) return "null";
                        if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(s)) { for (o = s.length, i = 0; o > i; i += 1) r[i] = str(i, s) || "null"; return a = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + l + "]" : "[" + r.join(",") + "]", gap = l, a }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, i = 0; o > i; i += 1) "string" == typeof rep[i] && (n = rep[i], a = str(n, s), a && r.push(quote(n) + (gap ? ": " : ":") + a));
                        else
                            for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (a = str(n, s), a && r.push(quote(n) + (gap ? ": " : ":") + a));
                        return a = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + l + "}" : "{" + r.join(",") + "}", gap = l, a
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) { return this.valueOf() });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                rep;
            "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
                var n;
                if (gap = "", indent = "", "number" == typeof i)
                    for (n = 0; i > n; n += 1) indent += " ";
                else "string" == typeof i && (indent = i);
                if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                return str("", { "": t })
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var i, n, a = t[e];
                    if (a && "object" == typeof a)
                        for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (n = walk(a, i), void 0 !== n ? a[i] = n : delete a[i]);
                    return reviver.call(t, e, a)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(), JSON
}), LBF.define("wpa.util.removeCustomProperty", function(require, exports, module) {
    var t = ["toJSONString"],
        e = function(e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var a = t[i];
                e[a] = null
            }
        };
    module.exports = exports = e
}), LBF.define("wpa.util.formReport", function(require, exports, module) {
    var t, e, i, n, a = "__post_form",
        o = "__post_iframe",
        r = (!(!window.ActiveXObject && !window.msIsStaticHTML), 1),
        l = window._formList = [],
        s = window._iframeList = [],
        c = function() {
            setTimeout(function() {
                var t = l.shift(),
                    e = s.shift();
                try { t && document.body.removeChild(t), e && document.body.removeChild(e) } catch (i) {}
            }, 1e3)
        },
        p = function(t, e, i) {
            var n, a = document.createDocumentFragment();
            try { for (var o in i) n = document.createElement('<input name="' + o + '"/>'), n.value = i[o], n.type = "hidden", a.appendChild(n) } catch (r) { for (var o in i) n = document.createElement("input"), n.type = "hidden", n.name = o, n.value = i[o], a.appendChild(n) }
            t.appendChild(a), t.submit(), c()
        };
    module.exports = exports = function(c) {
        if (c.action) {
            e = a + r, i = o + r, r++;
            var d = (document.getElementById(e), document.getElementById(i), c.action),
                u = c.data || {};
            try { t = document.createElement('<form id="' + e + '" method="post" action="' + d + '" target="' + i + '"></form>'), n = document.createElement('<iframe name="' + i + '" id="' + i + '" src="javascript:false;"></iframe>') } catch (h) { t = document.createElement("form"), t.id = e, t.method = "post", t.action = d, t.target = i, n = document.createElement("iframe"), n.name = i, n.id = i }
            n.style.cssText = "width:1px;height:0;display:none;", document.body.appendChild(n), document.body.appendChild(t), l.push(t), s.push(n), p(t, n, u)
        }
    }
}), LBF.define("wpa.proto.getCPType", function(require, exports, module) {
    var t = 0,
        e = 1,
        i = 2,
        n = 3,
        a = 4,
        o = 5,
        r = 8,
        l = 9;
    module.exports = exports = function(s) { var c, p = t; return "undefined" != typeof s._tptype ? { tptype: s._tptype } : ((c = s.roleQQ) ? p = c.value ? e : i : s.roleTEL ? p = n : s.roleKFEXT ? p = o : s.roleGROUP ? p = a : s.rolePUB ? p = r : s.roleIM && (p = l), { tptype: p }) }
}), LBF.define("wpa.protocol.getQQVersion", "globalSettings,lang.browser,util.events", function(require) {
    var t, e = require("globalSettings"),
        i = require("lang.browser"),
        n = require("wpa.util.domEvent");
    return function(a) {
        if ("undefined" != typeof t) return void a(t);
        if (i.msie) {
            try {
                var o = new ActiveXObject("TimwpDll.TimwpCheck");
                t = o.GetHummerQQVersion()
            } catch (r) { t = null }
            return void a(t)
        }
        if (i.mozilla || i.webkit) {
            var l = document.getElementsByTagName("body")[0],
                s = document.createElement("iframe"),
                c = e.base + "/protocol/getQQVersion.html";
            return s.style.display = "none", n.addEvent(window, "message", function(e) { /https?:\/\/combo\.b\.qq\.com/.test(e.origin) || (t = e.data, a(t), n.removeEvent(window, "message", arguments.callee), s.parentNode.removeChild(s)) }), s.src = c, void l.insertBefore(s, l.firstChild)
        }
        t = null, a(t)
    }
}), LBF.define("wpa.proto.chatSelect", function(require, exports, module) {
    var t = require("wpa.util.Style"),
        e = require("wpa.util.domEvent"),
        i = require("wpa.util.offset"),
        n = require("lang.browser"),
        a = require("wpa.util.css"),
        o = require("lang.proxy"),
        r = require("lang.extend"),
        l = document,
        s = "BackCompat" === l.compatMode;
    noPosFix = n.msie && n.majorVersion < 7 || s;
    var c = {
        container: l.getElementsByTagName("body")[0],
        template: ['<div class="WPA3-SELECT-PANEL">', '<div class="WPA3-SELECT-PANEL-TOP">', '<a id="WPA3-SELECT-PANEL-CLOSE" href="javascript:;" class="WPA3-SELECT-PANEL-CLOSE"></a>', "</div>", '<div class="WPA3-SELECT-PANEL-MAIN">', '<p class="WPA3-SELECT-PANEL-GUIDE">璇烽€夋嫨鍙戣捣鑱婂ぉ鐨勬柟寮忥細</p>', '<div class="WPA3-SELECT-PANEL-SELECTS">', '<a id="WPA3-SELECT-PANEL-AIO-CHAT" href="javascript:;" class="WPA3-SELECT-PANEL-CHAT WPA3-SELECT-PANEL-AIO-CHAT">', '<span class="WPA3-SELECT-PANEL-QQ WPA3-SELECT-PANEL-QQ-AIO"></span>', '<span class="WPA3-SELECT-PANEL-LABEL">QQ甯愬彿鑱婂ぉ</span>', "</a>", "</div>", "</div>", '<div class="WPA3-SELECT-PANEL-BOTTOM">', '<a target="_blank" href="http://im.qq.com" class="WPA3-SELECT-PANEL-INSTALL">瀹夎QQ</a>', "</div>", "</div>"].join(""),
        cssText: [".WPA3-SELECT-PANEL { z-index:2147483647; width:463px; height:292px; margin:0; padding:0; border:1px solid #d4d4d4; background-color:#fff; border-radius:5px; box-shadow:0 0 15px #d4d4d4;}", '.WPA3-SELECT-PANEL * { position:static; z-index:auto; top:auto; left:auto; right:auto; bottom:auto; width:auto; height:auto; max-height:auto; max-width:auto; min-height:0; min-width:0; margin:0; padding:0; border:0; clear:none; clip:auto; background:transparent; color:#333; cursor:auto; direction:ltr; filter:; float:none; font:normal normal normal 12px "Helvetica Neue", Arial, sans-serif; line-height:16px; letter-spacing:normal; list-style:none; marks:none; overflow:visible; page:auto; quotes:none; -o-set-link-source:none; size:auto; text-align:left; text-decoration:none; text-indent:0; text-overflow:clip; text-shadow:none; text-transform:none; vertical-align:baseline; visibility:visible; white-space:normal; word-spacing:normal; word-wrap:normal; -webkit-box-shadow:none; -moz-box-shadow:none; -ms-box-shadow:none; -o-box-shadow:none; box-shadow:none; -webkit-border-radius:0; -moz-border-radius:0; -ms-border-radius:0; -o-border-radius:0; border-radius:0; -webkit-opacity:1; -moz-opacity:1; -ms-opacity:1; -o-opacity:1; opacity:1; -webkit-outline:0; -moz-outline:0; -ms-outline:0; -o-outline:0; outline:0; -webkit-text-size-adjust:none; font-family:Microsoft YaHei,Simsun;}', ".WPA3-SELECT-PANEL a { cursor:auto;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-TOP { height:25px;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CLOSE { float:right; display:block; width:47px; height:25px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CLOSE:hover { background-position:0 -25px;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-MAIN { padding:23px 20px 45px;}", '.WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-GUIDE { margin-bottom:42px; font-family:"Microsoft Yahei"; font-size:16px;}', ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-SELECTS { width:246px; height:111px; margin:0 auto;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CHAT { float:right; display:block; width:88px; height:111px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat 0 -80px;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-CHAT:hover { background-position:-88px -80px;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-AIO-CHAT { float:left;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-QQ { display:block; width:76px; height:76px; margin:6px; background:url(http://combo.b.qq.com/crm/wpa/release/3.3/wpa/views/SelectPanel-sprites.png) no-repeat -50px 0;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-QQ-ANONY { background-position:-130px 0;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-LABEL { display:block; padding-top:10px; color:#00a2e6; text-align:center;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-BOTTOM { padding:0 20px; text-align:right;}", ".WPA3-SELECT-PANEL .WPA3-SELECT-PANEL-INSTALL { color:#8e8e8e;}"].join(""),
        modal: !0
    };
    t.add({ name: "_WPA_SELECT_PANEL_STYLE", cssText: c.cssText });
    var p = function(t) { this.opts = r({}, c, t), this.render() };
    p.prototype = {
        render: function() {
            var t, i = this,
                n = this.opts,
                a = this.container = n.container,
                o = l.createElement("div");
            o.innerHTML = n.template, this.el = t = o.firstChild,
                function() {
                    try { a.appendChild(t) } catch (o) { return void setTimeout(arguments.callee, 1) }
                    e.addEvent(l.getElementById("WPA3-SELECT-PANEL-CLOSE"), "click", function() { i.remove(), n.onClose && n.onClose() }), e.addEvent(l.getElementById("WPA3-SELECT-PANEL-AIO-CHAT"), "click", function() { i.remove(), n.onAIOChat && n.onAIOChat() }), i.renderModal(), i.setCenter()
                }()
        },
        show: function() { a(this.el, "display", "block"), a(this.modal, "display", "block") },
        remove: function() { this.el.parentNode.removeChild(this.el), this.modal.parentNode.removeChild(this.modal) },
        setCenter: function() {
            a(this.el, { position: "absolute", top: "50%", left: "50%" });
            var t = { position: "fixed", marginLeft: "-" + this.outerWidth() / 2 + "px", marginTop: "-" + this.outerHeight() / 2 + "px" };
            if (noPosFix) {
                t.position = "absolute", t.marginTop = 0;
                var e = t.top = (i.getClientHeight() - this.outerHeight()) / 2;
                setInterval(o(this.el, function() { this.style.top = i.getScrollTop() + e + "px" }), 128)
            }
            a(this.el, t)
        },
        renderModal: function() {
            var t = this.container,
                n = (a(t, "width"), a(t, "height"), a(t, "overflow"), l.createElement("div")),
                r = { position: "fixed", top: 0, left: 0, zIndex: 2147483647, width: i.getClientWidth() + "px", height: i.getClientHeight() + "px", backgroundColor: "white", opacity: .1, filter: "alpha(opacity=10)" };
            noPosFix && (r.position = "absolute", setInterval(o(n, function() { this.style.top = i.getScrollTop() + "px" }), 128)), a(n, r), t.insertBefore(n, this.el), this.modal = n, e.addEvent(window, "resize", o(n, function() { a(this.el, { width: i.getClientWidth() + "px", height: i.getClientHeight() + "px" }) }))
        },
        outerWidth: function() { return this.el.offsetWidth },
        outerHeight: function() { return this.el.offsetHeight }
    }, module.exports = p
}), LBF.define("util.report", function() {
    var t = {};
    return function(e) {
        var i = +new Date,
            n = "log_" + i,
            a = t[n] = new Image;
        return a.onload = a.onerror = function() { t[n] = null }, e += (e.indexOf("?") > -1 ? "&" : "?") + i, a.src = e, arguments.callee
    }
}), LBF.define("wpa.util.parseQuerystring", function(require, exports, module) {
    module.exports = exports = function(t) {
        for (var e = {}, i = t.split("&"), n = 0, a = i.length; a > n; n++) {
            var o = i[n],
                r = o.split("=")[0],
                l = o.split("=")[1];
            e[r] = l
        }
        return e
    }
}), LBF.define("wpa.util.openMqqPage", function(require, exports, module) {
    function t(t, e) { new RegExp("(^|&|\\?|#)" + t + "=([^&]*?)(&|#|$)"); return e = e || location.href }

    function e(t, e) {
        var i = function(t) { var e = /^http(s)?:\/\/([\w\-]+[\.])+qq\.com($|\/)/; return e.test(t) };
        t = i(t) ? t : "";
        var n = { env: e && e.env || "unknown" },
            a = document.createElement("iframe");
        if (a.style.cssText = "display:none; width:0px; height:0px;", "android" == n.env) t = "mqqapi://forward/url?plg_auth=1&url_prefix=" + btoa(t);
        else if ("ios" == n.env) return t = "mqqapi://forward/url?version=1&src_type=web&url_prefix=" + btoa(t), void setTimeout(function() { location.href = t }, 300);
        setTimeout(function() { a.src = t, document.body.appendChild(a) }, 500)
    }
    var i = require("lang.browser"),
        n = require("wpa.conf.config"),
        a = (n.CGIS, n.isMobile, n.ENV, function() {
            var t = navigator.userAgent.toLowerCase(),
                e = navigator.userAgent,
                i = function(e) { var i = ("" + (new RegExp(e + "(\\d+((\\.|_)\\d+)*)").exec(t) || [, 0])[1]).replace(/_/g, "."); return !!parseFloat(i) };
            return { is_mqq: /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(e) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(e), is_ios: i("os "), is_android: i("android[/ ]"), is_pc: !i("os ") && !i("android[/ ]") }
        }());
    exports = module.exports = function(n) { return i.isMobile ? void(a.is_ios ? e(t("url", n), { env: "ios" }) : a.is_android && e(t("url", n), { env: "android" })) : alert("浠呴檺绉诲姩绔懠璧�") }
}), LBF.define("util.serialize", function(require, exports, module) {
    module.exports = function(t, e, i) {
        var n = [];
        e = e || "=", i = i || "&";
        for (var a in t) t.hasOwnProperty(a) && n.push(a + e + (t[a] || ""));
        return n.join(i)
    }
}), LBF.define("wpa.util.launch", function(require, exports, module) {
    var t = require("lang.browser"),
        e = require("wpa.conf.config"),
        i = require("wpa.conf.chat"),
        n = require("util.serialize"),
        a = (i.LAUNCH_LINK, i.LAUNCH_MOBILE_QQ),
        o = e.BROWSER_ENV,
        r = e.isMobile,
        l = e.isSSL,
        s = t.isIOS,
        c = (t.isAndroid, o.isInMobileQQ),
        p = r ? 500 : 0,
        d = e.gWin,
        u = d.document,
        h = u.body,
        f = (navigator.userAgent.toLowerCase(), 0),
        g = function(t) {
            var e = u.createElement("div");
            e.style.visibility = "hidden", e.style.width = 0, e.style.height = 0, e.innerHTML = '<iframe id="_qd_schema_' + f + '" src="' + t + '" scrolling="no" width="0" height="0"></iframe>', f++, setTimeout(function() { h.appendChild(e) }, p)
        };
    module.exports = exports = function(t, i) {
        i = i || {};
        var o = "undefined" != typeof i.needMobileJump ? i.needMobileJump : !0,
            u = n(i),
            h = i.targetPage,
            f = h || a;
        r ? c ? setTimeout(function() { d.location.href = t }, p) : o ? d.location.href = f + "?" + u + "&protocol=" + t : s ? setTimeout(function() { d.location.href = t }, p) : g(t) : l && !e.BROWSER_ENV.isIE ? d.location.href = t : g(t)
    }
}), LBF.define("wpa.proto.CustomParams", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = require("lang.extend"),
        i = t.gWin;
    exports.setCustomParams = function(t) {
        var i = this.getCustomParams();
        e(t, i)
    }, exports.getCustomParams = function() { var t = {}; return "undefined" != typeof i.qidian_track_id && (t.qidian_track_id = i.qidian_track_id), "undefined" != typeof i.qidian_src_desc && (t.qidian_src_desc = i.qidian_src_desc), "undefined" != typeof i.qidian_ex1 && (t.qidian_ex1 = i.qidian_ex1), "undefined" != typeof i.qidian_ex2 && (t.qidian_ex2 = i.qidian_ex2), "undefined" != typeof i.qidian_ex3 && (t.qidian_ex3 = i.qidian_ex3), "undefined" != typeof i.qidian_ex4 && (t.qidian_ex4 = i.qidian_ex4), "undefined" != typeof i.qidian_ex5 && (t.qidian_ex5 = i.qidian_ex5), "undefined" != typeof i.guestId && (t.guestId = i.guestId), "undefined" != typeof i.wpaShowItemId && (t.wpaShowItemId = i.wpaShowItemId), t }
}), LBF.define("wpa.im.lang", function(require, exports, module) {
    var t = require("lang.inArray"),
        e = require("wpa.im.i18n"),
        i = require("wpa.conf.config"),
        n = (require("wpa.proto.CustomParams"), i.gWin, i.IM_LANG.defaultLang),
        a = i.IM_LANG.availableList,
        o = n;
    exports.setLang = function(e) {-1 !== t(e, a) && (o = e) }, exports.getLang = function() { return o }, exports.getText = function(t) { var i = this.getLang(); return e[i][t] }
}), LBF.define("wpa.invite.getInviteConf", function(require, exports, module) {
    var t = (require("util.jsonp"), require("wpa.conf.config"));
    t.host;
    module.exports = exports = function(t, e) {
        var i = { kfuin: 2852199e3, key: "fafeaewf123", autoInvited: { active: 1, reception: { type: 1, cuin: 1232132 }, repeat: { active: !0, finterval: 2, frequency: 1 }, condition: { stayPeriod: 2, deviceType: 1 } }, invitedStyle: { type: "1", title: "瀹㈡湇鍦ㄧ嚎锛屾杩庡挩璇�", content: "鎮ㄥソ锛屽綋鍓嶆湁瀹㈡湇鍦ㄧ嚎锛岀偣鍑诲嵆鍙挩璇�", btns: [{ type: "im", text: "缃戦〉鍜ㄨ" }], theme: "1", avatar: "https://oa.gtimg.com/qidian/src/sites/srv/wpa/conf/wpa/avatar/1-1.png", xc: "http://www.shiseido.co.jp/cms/products/sg/ei/img/BRND_WD_BNR_4W.jpg" } };
        e(i)
    }
}), LBF.define("wpa.invite.tpl", function(require, exports, module) {
    var t = require("wpa.conf.config"),
        e = t.imageBaseUrl,
        i = (require("wpa.util.log"), require("lang.browser")),
        n = i.isAndroid || i.isIOS,
        a = require("util.xssFilter"),
        o = (require("wpa.util.replaceImg3X"), { 1: "#0067ed", 2: "#12b7f5", 3: "#ff9232", 4: "#ee685d", 5: "#25cd98" }),
        r = { mobile: { iframe: ["position:fixed", "z-index: 2000001000", "top: 0", "left: 0"].join(";") + ";", innerBody: ['* {margin: 0;padding: 0;font-family: "PingFang SC", "Droid Sans Fallback", "microsoft yahei";background: transparent;}'].join(""), shadow: ["box-shadow: 0 0 15px 1px rgba(0,0,0,.15);"].join(""), holder1: [".wpa-invite-holder {position: relative;height: 155px;width: 100%;}"].join(""), holder2: [".wpa-invite-holder {position: relative;height: 180px;width: 100%;}"].join("") }, pc: { iframe: ["position:fixed", "z-index: 2000001000", "top: 25%", "left: 50%", "box-shadow: 0 0 15px 1px rgba(0,0,0,.15)"].join(";") + ";", innerBody: ['* {margin: 0;padding: 0;font-family: "microsoft yahei";}'].join("") } };
    r = n ? r.mobile : r.pc, r.themeColors = o;
    var l = exports.btnTypes = { qq: "qq", phone: "phone", im: "im" },
        s = { qq: "icon-qq", phone: "icon-phone", im: "icon-im" },
        c = { title: "瀹㈡湇鍦ㄧ嚎锛屾杩庡挩璇�", content: "鎮ㄥソ锛屽綋鍓嶆湁瀹㈡湇鍦ㄧ嚎锛岀偣鍑诲嵆鍙挩璇�", theme: 1, btns: { qq: { type: l.qq, text: "QQ浜よ皥" }, phone: { type: l.phone, text: "鍏嶈垂鐢佃瘽" }, im: { type: l.im, text: "绔嬪嵆鍜ㄨ" } } },
        p = { mobile: { tpl: ['<a href="javascript:void(0);" id="invite_close" data-event="close" class="icon-close">', '<img src="' + e + '/invite/icon-close-2x.png" />', "</a>"].join(""), css: [".icon-close {position: fixed;top: 6px;right: 6px;}", ".icon-close img {width: 27px;height: 27px;}"].join("") }, pc: { tpl: ['<a href="javascript:void(0);" id="invite_close" class="icon-close">', '<img src="' + e + '/invite/icon-close-2x.png" />', "</a>"].join(""), css: [".icon-close {position: absolute;right: -2px;top: -2px;z-index: 1000;}"].join("") } };
    p = n ? p.mobile : p.pc;
    var d = e + "/default-avatar.png";
    __WPA.replaceErrAvatar = function(t) { t.src = d, t.onerror = null };
    var u = { mobile: { 1: { required: ["title", "content", "btn1", "btn2", "theme"], width: "100%", height: 155, tpl: ['<div class="wpa-invite-holder">', '<div class="wpa-invite {theme}">', '<div class="main">', '<p class="title">{title}</p>', '<p class="content">{content}</p>', "</div>", '<div class="btns {is-multi-btn}">', '<div class="btn" id="btn1" data-event="{btn1Event}" data-corpuin="{btn1CorpUin}">', '<span class="btn-icon {btn1Icon}"></span>', '<span class="btn-text">{btn1Text}</span>', "</div>", '<div class="btn" id="btn2" data-event="{btn2Event}" data-corpuin="{btn2CorpUin}">', '<span class="btn-icon {btn2Icon}"></span>', '<span class="btn-text">{btn2Text}</span>', "</div>", "</div>", "</div>", p.tpl, "</div>"].join(""), css: [r.innerBody, r.holder1, ".wpa-invite {background:#fff;height: 123px;border: 1px solid #dadee7;border-radius: 3px;position:absolute;bottom:15px;left:15px;right:15px;" + r.shadow + "}", '.main {background: #fff url("' + e + '/invite/icon-bg-bubble.png") no-repeat;background-size: 62px 53px;height: 85px;width: 100%;text-align: center;position: relative;border-top-left-radius:3px;}', ".title {font-size: 18px;color: #1e2300;position: relative;top: 20px;}", ".content {font-size: 12px;color: #777;position: relative;top: 23px;}", ".btns {height: 40px;line-height: 40px;border-bottom-left-radius: 3px;border-bottom-right-radius: 3px;text-align: center;}", ".theme-1 .btns {background: " + r.themeColors[1] + ";}", ".theme-2 .btns {background: " + r.themeColors[2] + ";}", ".theme-3 .btns {background: " + r.themeColors[3] + ";}", ".theme-4 .btns {background: " + r.themeColors[4] + ";}", ".theme-5 .btns {background: " + r.themeColors[5] + ";}", ".btn {cursor: pointer;color: #fff;font-size: 15px;display: inline-block;}", ".btn span {position:relative;top:-1px;}", ".btn .btn-icon {top:-2px;}", ".btn:last-child {display:none;}", ".btn-text {display:inline-block;padding-left:3px;}", ".multi-btn {display: flex;}", ".multi-btn .btn {flex: 1;}", ".multi-btn .btn:last-child {display:inline-block;border-left: 1px solid #fff;}", ".btn:first-child {display:inline-block!important;}", ".btn-icon {display: inline-block;width: 24px;height: 24px;vertical-align: middle;}", '.icon-qq {background: url("' + e + '/invite/icon-qq-white.png") no-repeat;background-size: 24px 24px;}', '.icon-phone {background: url("' + e + '/invite/icon-phone-white.png") no-repeat;background-size: 24px 24px;}', '.icon-im {background: url("' + e + '/invite/icon-im-white.png") no-repeat;background-size: 24px 24px;}', p.css].join("") }, 2: { required: ["content", "btn1", "btn2", "theme", "avatar"], width: "100%", height: 155, tpl: ['<div class="wpa-invite-holder">', '<div class="wpa-invite {theme}">', '<div class="avatar">', '<img src="{avatar}" onerror="javascript:parent.__WPA.replaceErrAvatar(this);"/>', "</div>", '<div class="content">{content}</div>', '<div class="btns  {is-multi-btn}">', '<div class="btn" id="btn1" data-event="{btn1Event}" data-corpuin="{btn1CorpUin}">', '<span class="btn-icon {btn1Icon}"></span>', '<span class="btn-text">{btn1Text}</span>', "</div>", '<div class="btn" id="btn2" data-event="{btn2Event}" data-corpuin="{btn2CorpUin}">', '<span class="btn-icon {btn2Icon}"></span>', '<span class="btn-text">{btn2Text}</span>', "</div>", "</div>", "</div>", p.tpl, "</div>"].join(""), css: [r.innerBody, r.holder1, ".wpa-invite {background:#fff;position: absolute;left: 15px;right: 15px;bottom: 15px;height: 123px;border: 1px solid #dadee7;border-radius: 3px;box-shadow: 0 0 15px 1px rgba(0,0,0,.15);}", ".avatar {position: absolute;top: 20px;left: 15px;}", ".avatar img {width: 50px;height: 50px;border-radius: 50%;}", ".content {font-size: 16px;color: #1e2330;position: absolute;top: 20px;left: 80px;width: 210px;line-height: 24px;}", ".btn {display: inline-block;margin-left: 20px;vertical-align: middle;}", ".btn-icon {display: inline-block;width: 24px;height: 24px;vertical-align: middle;background-size: 24px 24px!important;position:relative;top:-1px;}", ".btn-text {font-size: 15px;}", ".btn:last-child {display:none;}", ".btn:first-child {display:inline-block!important;}", ".btns {position: absolute;bottom: 12px;right: 15px;}", ".multi-btn .btn:last-child {display:inline-block;}", ".btn-text {display:inline-block;padding-left:3px;}", ".theme-1 .btn {color: " + r.themeColors[1] + ";}", ".theme-2 .btn {color: " + r.themeColors[2] + ";}", ".theme-3 .btn {color: " + r.themeColors[3] + ";}", ".theme-4 .btn {color: " + r.themeColors[4] + ";}", ".theme-5 .btn {color: " + r.themeColors[5] + ";}", '.theme-1 .icon-qq {background: url("' + e + '/invite/icon-qq-theme1-2x.png") no-repeat;}', '.theme-2 .icon-qq {background: url("' + e + '/invite/icon-qq-theme2-2x.png") no-repeat;}', '.theme-3 .icon-qq {background: url("' + e + '/invite/icon-qq-theme3-2x.png") no-repeat;}', '.theme-4 .icon-qq {background: url("' + e + '/invite/icon-qq-theme4-2x.png") no-repeat;}', '.theme-5 .icon-qq {background: url("' + e + '/invite/icon-qq-theme5-2x.png") no-repeat;}', '.theme-1 .icon-phone {background: url("' + e + '/invite/icon-phone-theme1-2x.png") no-repeat;}', '.theme-2 .icon-phone {background: url("' + e + '/invite/icon-phone-theme2-2x.png") no-repeat;}', '.theme-3 .icon-phone {background: url("' + e + '/invite/icon-phone-theme3-2x.png") no-repeat;}', '.theme-4 .icon-phone {background: url("' + e + '/invite/icon-phone-theme4-2x.png") no-repeat;}', '.theme-5 .icon-phone {background: url("' + e + '/invite/icon-phone-theme5-2x.png") no-repeat;}', '.theme-1 .icon-im {background: url("' + e + '/invite/icon-im-theme1-2x.png") no-repeat;}', '.theme-2 .icon-im {background: url("' + e + '/invite/icon-im-theme2-2x.png") no-repeat;}', '.theme-3 .icon-im {background: url("' + e + '/invite/icon-im-theme3-2x.png") no-repeat;}', '.theme-4 .icon-im {background: url("' + e + '/invite/icon-im-theme4-2x.png") no-repeat;}', '.theme-5 .icon-im {background: url("' + e + '/invite/icon-im-theme5-2x.png") no-repeat;}', p.css].join("") }, 3: { required: ["xc", "btn1", "btn2", "theme"], width: "100%", height: 180, tpl: ['<div class="wpa-invite-holder">', '<div class="wpa-invite {theme}">', '<div class="xc">', '<img src="{xc}" />', "</div>", '<div class="btns {is-multi-btn}">', '<div class="btn" id="btn1" data-event="{btn1Event}" data-corpuin="{btn1CorpUin}">', '<span class="btn-icon {btn1Icon}"></span>', '<span class="btn-text">{btn1Text}</span>', "</div>", '<div class="btn" id="btn2" data-event="{btn2Event}" data-corpuin="{btn2CorpUin}">', '<span class="btn-icon {btn2Icon}"></span>', '<span class="btn-text">{btn2Text}</span>', "</div>", "</div>", "</div>", p.tpl, "</div>"].join(""), css: [r.innerBody, r.holder2, ".wpa-invite {background:#fff;position: absolute;left: 15px;right: 15px;bottom: 15px;height: 148px;border: 1px solid #dadee7;border-radius: 3px;" + r.shadow + "}", ".xc img {width: 100%;height: 95px;border-bottom:1px solid #ebedf2;}", ".btns {text-align: center;position: relative;top: 5px;}", ".btn {display: inline-block;width: 170px;height: 35px;line-height: 35px;border-radius: 3px;color: #fff;font-size: 15px;text-align: center;}", ".btn:last-child {display:none;}", ".multi-btn .btn {width: 140px;}", ".multi-btn .btn:last-child {display:inline-block;margin-left: 15px;}", ".btn:first-child {display:inline-block!important;}", ".theme-1 .btn {background: " + r.themeColors[1] + ";}", ".theme-2 .btn {background: " + r.themeColors[2] + ";}", ".theme-3 .btn {background: " + r.themeColors[3] + ";}", ".theme-4 .btn {background: " + r.themeColors[4] + ";}", ".theme-5 .btn {background: " + r.themeColors[5] + ";}", ".btn-text {display:inline-block;padding-left:3px;}", ".btn-icon {display: inline-block;width: 24px;height: 24px;vertical-align: middle;}", '.icon-qq {background: url("' + e + '/invite/icon-qq-white.png") no-repeat;background-size: 24px 24px;}', '.icon-phone {background: url("' + e + '/invite/icon-phone-white.png") no-repeat;background-size: 24px 24px;}', '.icon-im {background: url("' + e + '/invite/icon-im-white.png") no-repeat;background-size: 24px 24px;}', p.css].join("") } }, pc: { 1: { required: ["title", "content", "btn1", "btn2", "theme"], width: 368, height: 228, tpl: ['<div class="wpa-invite {theme}">', '<a href="javascript:void(0);" id="invite_close" data-event="close" class="icon-close">', '<img src="' + e + '/invite/close_white.png" />', "</a>", '<div class="main">', '<div class="title">{title}</div>', '<div class="content">{content}</div>', "</div>", '<div class="btns {is-multi-btn}">', '<div class="btn" id="btn1" data-event="{btn1Event}" data-corpuin="{btn1CorpUin}">', '<span class="btn-icon {btn1Icon}"></span>', '<span class="btn-text">{btn1Text}</span>', "</div>", '<span class="spliter"></span>', '<div class="btn" id="btn2" data-event="{btn2Event}" data-corpuin="{btn2CorpUin}">', '<span class="btn-icon {btn2Icon}"></span>', '<span class="btn-text">{btn2Text}</span>', "</div>", "</div>", "</div>"].join(""), css: [r.innerBody, '.wpa-invite {width: 368px;height: 228px;background:#fff;border-radius: 4px;border: 1px solid #dadee7;font-family: "microsoft yahei";position: relative;}', p.css, '.main {width: 370px;height: 176px;text-align: center;color: #fff;position: absolute;top: -1px;left: -1px;border-top-left-radius: 4px;border-top-right-radius: 4px;position: relative;overflow: hidden;background: url("' + e + '/invite/bubble.png") no-repeat;background-position: right center;}', ".theme-1 .main {background-color: #0067ed;}", ".theme-2 .main {background-color: #12b7f5;}", ".theme-3 .main {background-color: #ff9232;}", ".theme-4 .main {background-color: #ee685d;}", ".theme-5 .main {background-color: #25cd98;}", ".title {font-size: 24px;margin-top: 50px;}", ".content {font-size: 16px;margin-top: 10px;}", ".btn-icon {margin-right:7px;vertical-align: middle;display: inline-block;width: 24px;height: 24px;}", '.theme-1 .icon-qq {background: url("' + e + '/invite/icon-qq-pc1.png") no-repeat;}', '.theme-2 .icon-qq {background: url("' + e + '/invite/icon-qq-pc2.png") no-repeat;}', '.theme-3 .icon-qq {background: url("' + e + '/invite/icon-qq-pc3.png") no-repeat;}', '.theme-4 .icon-qq {background: url("' + e + '/invite/icon-qq-pc4.png") no-repeat;}', '.theme-5 .icon-qq {background: url("' + e + '/invite/icon-qq-pc5.png") no-repeat;}', '.theme-1 .icon-im {background: url("' + e + '/invite/icon-im-pc1.png") no-repeat;}', '.theme-2 .icon-im {background: url("' + e + '/invite/icon-im-pc2.png") no-repeat;}', '.theme-3 .icon-im {background: url("' + e + '/invite/icon-im-pc3.png") no-repeat;}', '.theme-4 .icon-im {background: url("' + e + '/invite/icon-im-pc4.png") no-repeat;}', '.theme-5 .icon-im {background: url("' + e + '/invite/icon-im-pc5.png") no-repeat;}', ".btns {text-align: center;}", ".btn-text {vertical-align:middle;}", ".btn {font-size: 16px;color: #1e2330;text-align: center;height: 54px;line-height: 48px;cursor: pointer;}", ".btn:last-child {display: none;}", ".btn:first-child {display: block;}", ".spliter {display: none;width: 1px;height: 27px;vertical-align: middle;background: #dadee7;}", ".multi-btn .btn {display: inline-block;width: 178px;}", ".multi-btn .spliter {display: inline-block;}"].join("") }, 2: { required: ["content", "btn1", "btn2", "theme", "avatar"], width: 258, height: 318, tpl: ['<div class="wpa-invite {theme}">', '<a href="javascript:void(0);" id="invite_close" data-event="close" class="icon-close">', '<img src="' + e + '/invite/close_black.png" />', "</a>", '<img src="{avatar}" class="avatar" onerror="javascript:parent.__WPA.replaceErrAvatar(this);"/>', '<div class="main">', '<div class="title">{title}</div>', '<div class="content">{content}</div>', "</div>", '<div class="btns {is-multi-btn}">', '<div class="btn" id="btn1" data-event="{btn1Event}" data-corpuin="{btn1CorpUin}">', '<span class="btn-icon {btn1Icon}"></span>', '<span class="btn-text">{btn1Text}</span>', '</div><div class="btn" id="btn2" data-event="{btn2Event}" data-corpuin="{btn2CorpUin}">', '<span class="btn-icon {btn2Icon}"></span>', '<span class="btn-text">{btn2Text}</span>', "</div>", "</div>", "</div>"].join(""), css: [r.innerBody, ".wpa-invite {width: 258px;height: 318px;border-radius: 4px;border: 1px solid #dadee7;position: relative;text-align: center;background: #fff;}", ".icon-close {position: absolute;right: -2px;top: -2px;z-index: 10;}", p.css, ".avatar {margin:0 auto;width: 120px;height: 120px;border-radius: 50%;position: absolute;top: 30px;left:70px;}", ".main {position: relative;top: 166px;}", ".title {font-size: 24px;color: #1e2330;}", ".content {font-size: 16px;color: #777;margin-top: 6px;}", ".btns {position: absolute;left: 0;bottom: 0;width: 100%;height: 54px;line-height: 54px;color: #fff;}", '.icon-im {margin-top:-1px;display: inline-block;width: 24px;height: 24px;background: url("' + e + '/invite/im-bubble-pc-white.png") no-repeat;}', '.icon-qq {margin-top:-1px;display: inline-block;width: 24px;height: 24px;background: url("' + e + '/invite/icon-qq-white-small.png") no-repeat;}', ".btn-icon {margin-right: 7px;vertical-align: middle;}", ".btn-text {vertical-align: top;display:inline-block;}", ".btn {position:relative;top:-1px;font-size: 16px;cursor: pointer;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;height: 54px;}", ".btn:last-child {display: none;}", ".btn:first-child {display: block;}", ".multi-btn .btn {display: inline-block;width: 128.5px;}", ".multi-btn .btn:first-child {float: left;border-bottom-left-radius: 4px;border-bottom-right-radius: 0;}", ".multi-btn .btn:last-child {float: right;border-bottom-left-radius: 0;border-bottom-right-radius: 4px;}", ".theme-1 .btn {background: " + o[1] + ";}", ".theme-2 .btn {background: " + o[2] + ";}", ".theme-3 .btn {background: " + o[3] + ";}", ".theme-4 .btn {background: " + o[4] + ";}", ".theme-5 .btn {background: " + o[5] + ";}"].join("") }, 3: { required: ["xc", "btn1", "btn2", "theme"], width: 368, height: 292, tpl: ['<div class="wpa-invite {theme}">', '<a href="javascript:void(0);" id="invite_close" data-event="close" class="icon-close">', '<img src="' + e + '/invite/close_black.png" />', "</a>", '<img src="{xc}" class="xc" />', '<div class="btns {is-multi-btn}">', '<div class="btn" id="btn1" data-event="{btn1Event}" data-corpuin="{btn1CorpUin}">', '<span class="btn-icon {btn1Icon}"></span>', '<span class="btn-text">{btn1Text}</span>', '</div><div class="btn" id="btn2" data-event="{btn2Event}" data-corpuin="{btn2CorpUin}">', '<span class="btn-icon {btn2Icon}"></span>', '<span class="btn-text">{btn2Text}</span>', "</div>", "</div>", "</div>"].join(""), css: [r.innerBody, ".wpa-invite {width: 368px;height: 292px;border-radius: 4px;border: 1px solid #dadee7;position: relative;background: #fff;}", p.css, ".xc {border-bottom:1px solid #ebedf2;width: 370px;height: 210px;position: relative;left: -1px;top: -1px;}", ".btn {width:330px;}", ".btn:last-child {display: none;}", ".btn:first-child {display: inline-block;}", ".multi-btn .btn {display: inline-block;*display:inline;*zoom:1;width: 155px;}", ".multi-btn .btn:first-child {margin-right: 10px;}", '.icon-im {display: inline-block;width: 24px;height: 24px;background: url("' + e + '/invite/im-bubble-pc-white.png") no-repeat;}', '.icon-qq {display: inline-block;width: 24px;height: 24px;background: url("' + e + '/invite/icon-qq-white-small.png") no-repeat;}', ".btns {text-align: center;height: 84px;line-height: 84px;position: relative;left: 0;top: -5px;}", ".btn {cursor:pointer;display:inline-block;*display:inline;*zoom:1;height:44px;line-height: 44px;font-size: 16px;color: #fff;text-align: center;border-radius: 4px;}", ".btn-icon, .btn-text {vertical-align: middle;}", ".btn-text {display:inline-block;margin-top:-3px;vertical-align: middle;}", ".btn-icon {margin-right: 7px;margin-top:-1px;}", ".theme-1 .btn {background: " + o[1] + ";}", ".theme-2 .btn {background: " + o[2] + ";}", ".theme-3 .btn {background: " + o[3] + ";}", ".theme-4 .btn {background: " + o[4] + ";}", ".theme-5 .btn {background: " + o[5] + ";}"].join("") } } },
        h = function(t, e) {
            var i, n = (t.required, t.css),
                o = t.tpl,
                r = e.btns,
                l = e.avatar,
                p = e.title || c.title,
                d = e.content || c.content,
                u = e.xc,
                h = "theme-" + (e.theme || c.theme),
                f = r.length > 1 ? !0 : !1,
                g = f ? "multi-btn" : "",
                m = r[0],
                b = m.type,
                x = m.text || c.btns[b].text,
                v = s[b],
                _ = m.isCorpUin ? parseInt(m.isCorpUin, 10) : 0,
                w = r[1] || {},
                y = w.type,
                E = w.text,
                k = s[y],
                T = w.isCorpUin ? parseInt(w.isCorpUin, 10) : 0;
            return i = o.replace("{title}", a.htmlEncode(p)).replace("{content}", a.htmlEncode(d)).replace("{theme}", a.htmlEncode(h)).replace("{avatar}", a.htmlEncode(l)).replace("{xc}", a.htmlEncode(u)).replace("{is-multi-btn}", g).replace("{btn1Text}", a.htmlEncode(x)).replace("{btn2Text}", a.htmlEncode(E)).replace("{btn1Icon}", v).replace("{btn2Icon}", k).replace("{btn1Event}", b).replace("{btn2Event}", y).replace("{btn1CorpUin}", _).replace("{btn2CorpUin}", T), { css: n, tpl: i, height: t.height, width: t.width }
        };
    exports.getTpl = function(t) {
        var e = t.type,
            i = n ? u.mobile[e] : u.pc[e],
            a = h(i, t);
        return a
    }, exports.getIframeStyle = function(t, e) {
        var i = r.iframe,
            a = t.width,
            o = t.height;
        if (!n) {
            var l = a / 2;
            i = i + "margin-left:-" + l + "px"
        }
        return { style: i, width: a, height: o }
    }
}), LBF.define("wpa.util.getOffset", function(require, exports, module) {
    module.exports = exports = function(t, e) {
        if (t) {
            e = e || {};
            var i = t.offsetParent,
                n = t.offsetLeft,
                a = t.offsetTop;
            if (e.isAbsolute)
                for (; i;) n += i.offsetLeft, a += i.offsetTop, i = i.offsetParent;
            return { offsetParent: i, x: n, y: a }
        }
    }
}), LBF.define("wpa.proto.mobileUnreadBar", function(require, exports, module) {
    function t(t) {
        c("[mobileUnreadBar][updateUnreadMsgBar]");
        var i = t.kfuin,
            n = t.number,
            a = b + i,
            o = document.getElementById(a),
            r = o.contentWindow,
            l = o.contentDocument || r.document,
            s = l.getElementById("number");
        s.innerHTML = e(n), s.setAttribute("data-number", n)
    }

    function e(t) { return t > 9 ? "9+" : t }

    function i(t) {
        var e = document.getElementById(b + t);
        e && e.parentNode.removeChild(e)
    }
    var n = require("lang.browser"),
        a = (require("wpa.util.getOffset"), require("wpa.conf.config")),
        o = a.KFUINS,
        r = (a.isMobile, a.BROWSER_ENV.isIOS, a.isFengLing),
        l = a.gWin,
        s = (a.TYPES.IM, a.WEB_IM.WPAS_IM_TYPE, require("wpa.util.Style"), require("lang.extend")),
        c = require("wpa.util.log"),
        p = (require("wpa.conf.wpaType"), require("wpa.util.domEvent")),
        d = (require("lang.proxy"), require("wpa.util.onIframeLoaded")),
        u = require("wpa.im.lang"),
        h = "qidian_wpa_unread_msg_bar",
        f = (a.WPA_ID_PREFIX, l.__WPA),
        g = 120,
        m = 35,
        b = "qidian_wpa_id_unread_msg_bar_",
        x = 0,
        v = 45,
        _ = 80,
        w = l.document,
        y = w.body,
        E = (['<div id="unreadBar">', '<span id="unreadNum">9+</span>鏉℃柊娑堟伅', "</div>"].join(""), {}),
        k = ["* {margin:0;padding:0;}", '#unreadBar {font-family:"PingFang SC", "Droid Sans Fallback";background:#4fbcfb;color:#fff;font-size:14px;width:120px;text-align:center;height:35px;line-height:35px;border-top-left-radius:50px;border-bottom-left-radius:50px;}'].join(""),
        T = ["position:fixed", "right:0"].join(";") + ";";
    exports.drawBar = function(e) {
        var i = e.kfuin,
            a = "undefined" != typeof e.number ? e.number : 0,
            c = a,
            I = b + i;
        if ("undefined" == typeof E[i] && (E[i] = x++), document.getElementById(I)) return t(e);
        var A = _ + E[i] * v,
            S = T + "bottom:" + A + "px;",
            C = '<iframe scrolling="no" class="' + h + '" id="' + I + '" frameborder="0" width="' + g + '" height="' + m + '" allowtransparency="true" src="about:blank" style="{style}"></iframe>';
        C = C.replace("{style}", S);
        var P;
        try { P = w.createElement(C) } catch (q) { P = w.createElement("iframe"), P.width = g, P.height = m, P.id = I, P.style.cssText = S, P.setAttribute("scrolling", "no"), P.setAttribute("frameborder", 0), P.setAttribute("allowtransparency", !0), P.setAttribute("src", "about:blank"), P.setAttribute("class", h) }
        y.appendChild(P), setTimeout(function() {
            if (n.msie) try { P.contentWindow.document } catch (t) { P.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close()})())" }
            var e = function() {
                var t = P.contentWindow,
                    e = P.contentDocument || t.document;
                if (e.open(), e.write(["<!doctype html>", '<html xmlns="http://www.w3.org/1999/xhtml">', "<head>", '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />', n.msie && "about:blank" !== P.src ? "<script>document.domain='" + document.domain + "';</script>" : "", "<style>" + k + "</style>", "</head>", "<body>", '<div id="unreadBar">', '<span id="number" data-number="' + a + '">' + c + "</span>" + u.getText("common_new_message"), "</div>", "</body>", "</html>"].join("")), e.close(), r && (n.isIOS || n.isAndroid)) try { e.body.addEventListener("touchmove", function(t) { t.preventDefault() }, !1) } catch (d) {}
                var h = function() {
                    var t = l.__WPA[o][i].unread,
                        e = l.__WPA[o][i].onlyOpen;
                    if ("undefined" != typeof e && !e) { var n = s(l.__WPA[o][i].onlyOpenParam || {}, { kfuin: i, openUnread: !0 }); return f.IM.openChatIframe(n) }
                    if (e = !1, t) {
                        var a = t.socket,
                            t = t.chat;
                        t > 0 && 0 == a && (e = !0)
                    }
                    f.IM.openChatIframe({ kfuin: i, onlyOpen: e })
                };
                p.addEvent(e.getElementById("unreadBar"), "click", h)
            };
            d(P, e)
        }, 100)
    }, exports.removeUnreadMsgBar = i
}), LBF.define("monitor.SpeedReport", function(require) {
    var t = require("util.report"),
        e = require("lang.Class"),
        i = require("util.serialize"),
        n = require("util.Attribute"),
        a = { url: "http://isdspeed.qq.com/cgi-bin/r.cgi", rate: 1, calGap: !1 },
        o = e.inherit(n, {
            initialize: function(t) { this.set(a).set({ points: [], start: +new Date }).set(t) },
            add: function(t, e) { var i = this.get("points"); return t = t || +new Date, e = e || i.length, i[e] = t, this },
            send: function() {
                var e = this.get("points").splice(0);
                if (Math.random() > this.get("rate")) return this;
                var n, a = this.get("start"),
                    o = this.get("flag1"),
                    r = this.get("flag2"),
                    l = this.get("flag3"),
                    s = this.get("url") + "?flag1=" + o + "&flag2=" + r + "&flag3=" + l + "&",
                    c = this.get("proxy");
                if (this.get("calGap"))
                    for (n = e.length - 1; n > 0; n--) e[n - 1] = e[n - 1] || 0, e[n] -= e[n - 1];
                else
                    for (n = e.length - 1; n > 0; n--) e[n] && (e[n] -= a);
                s += i(e), c && (s = c.replace("{url}", encodeURIComponent(s))), t(s)
            }
        }),
        r = function(e) {
            var i, n, a, o = e.flag1,
                r = e.flag2,
                l = e.flag3IE,
                s = e.flag3Chrome,
                c = e.initTime,
                p = e.proxy,
                d = window.performance || window.webkitPerformance || window.msPerformance,
                u = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
                h = [],
                f = l;
            if (d && (i = d.timing)) {
                "undefined" != typeof i.msFirstPaint ? u.push("msFirstPaint") : s && (f = s), n = i[u[0]];
                for (var g = 1, m = u.length; m > g; g++) a = i[u[g]], a = a ? a - n : 0, a > 0 && h.push(g + "=" + a);
                c && h.push("30=" + (c - n));
                var b = "http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=" + o + "&flag2=" + r + "&flag3=" + f + "&" + h.join("&");
                p && (b = p.replace("{url}", encodeURIComponent(b))), t(b)
            }
        };
    return { create: function(t) { return new o(t) }, reportPerformance: r }
}), LBF.define("util.domain", function() {
    var t = {},
        e = document.domain;
    try { t.url = location.href } catch (i) { t.url = "" }
    return t.topDomain = function() {
        var t = /\.(?:(?:edu|gov|com|org|net)\.cn|co\.nz)$/,
            i = /^[12]?\d?\d\.[12]?\d?\d\.[12]?\d?\d\.[12]?\d?\d$/,
            n = t.test(e) ? -3 : i.test(e) ? 0 : -2;
        return e.split(".").slice(n).join(".")
    }(), t.domain = function() { var i = /(?::[\/]{2}|:[\\]{3})([a-zA-Z0-9_\.]+)/; try { var n = i.exec(t.url); return n ? n[1] || e : e } catch (a) { return e } }(), t
}), LBF.define("wpa.util.getReportData", function(require, exports, module) {
    var t = require("lang.extend"),
        e = require("lang.browser"),
        i = require("wpa.conf.config"),
        n = i.gWin,
        a = require("lang.JSON"),
        o = 2,
        r = "click",
        l = 0,
        s = 1,
        c = 2,
        p = 3,
        d = 4,
        u = 5,
        h = 8,
        f = function(t) { var e, i = l; return (e = t.roleQQ) ? i = e.value ? s : c : t.roleTEL ? i = p : t.roleKFEXT ? i = u : t.roleGROUP ? i = d : t.rolePUB && (i = h), { tptype: i } };
    module.exports = exports = function(i, l, s) {
        l = l || r;
        var c = { mid: "", id: i.id, visitorid: i.guid, kfuin: i.fkfuin, kfext: i.fkfext, ldpg: n.location.href, refurl: "undefined" != typeof document.referrer ? document.referrer : "", ua: window.navigator.userAgent, eptype: e.isMobile ? 2 : 1 },
            p = f(i),
            d = t(c, p);
        return l == r && (d = t(d, { visitorId: i.visitorId, url: n.location.href, clickId: i.clickId, eventtp: o, title: encodeURIComponent(document.title) })), s ? a.stringify(d) : d
    }
}), LBF.define("util.xssFilter", function() {
    return {
        htmlEncode: function(t) { return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/ /g, "&nbsp;").replace(/=/g, "&#61;").replace(/`/g, "&#96;") },
        uriComponentEncode: function(t) {
            return t = encodeURIComponent(t + ""), t.replace(/~/g, "%7E").replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27").replace(/\?/g, "%3F").replace(/;/g, "%3B");
        },
        cssEncode: function(t) { return (t + "").replace(/\b/g, "\\08 ").replace(/\t/g, "\\09 ").replace(/\n/g, "\\0A ").replace(/\f/g, "\\0C ").replace(/\r/g, "\\0D ").replace(/'/g, "\\27 ").replace(/"/g, "\\22 ").replace(/\\/g, "\\5C ").replace(/&/g, "\\26 ").replace(/\//g, "\\2F ").replace(/</g, "\\3C ").replace(/>/g, "\\3E ").replace(/\u2028/g, "\\002028 ").replace(/\u2029/g, "\\002029 ") },
        cssColorValidate: function(t) {
            var e = /#[0-9a-fA-f]{3}([0-9a-fA-f]{3})?/,
                i = /[a-zA-Z]{1,20}/;
            return e.test(sStr) && i.test(sStr)
        }
    }
}), LBF.define("wpa.conf.colors", function(require, exports, module) {
    var t = require("wpa.util.backgroundMixin");
    config = require("wpa.conf.config"), baseUrl = config.imageBaseUrl, png8Url = config.png8Url;
    var e = { 4: { 0: { n: { s: "#3e87d5", e: "#327ccb", p: "#278cde" }, h: { s: "#499ef8", e: "#327dcc", p: "#4ea9e9" } }, 1: { n: { s: "#0aa60a", e: "#009900", p: "#009900" }, h: { s: "#14b914", e: "#009a00", p: "#3aa93a" } }, 2: { n: { s: "#f5b400", e: "#e0a501", p: "#f5b400" }, h: { s: "#ffc934", e: "#e1a602", p: "#ffc934" } }, 3: { n: { s: "#ee685e", e: "#e05248", p: "#ee685e" }, h: { s: "#f4867e", e: "#e05348", p: "#f3837b" } } }, 5: { 0: { n: { p: "#278cde" } }, 1: { n: { p: "#009900" } }, 2: { n: { p: "#f5b400" } }, 3: { n: { p: "#ee685e" } }, 4: { n: { p: "#ffffff" } } }, 6: { 0: { n: { p: "#278cde" }, h: { p: "#4ea9e9" } }, 1: { n: { p: "#009900" }, h: { p: "#3aa93a" } }, 2: { n: { p: "#f5b400" }, h: { p: "#ffc934" } }, 3: { n: { p: "#ee685e" }, h: { p: "#f3837b" } } }, 8: { 0: { n: { p: baseUrl + "dialog1_bg_blue.png", p_png8: png8Url + "dialog1_bg_blue.png" }, h: { p: "#278cde" } }, 1: { n: { p: baseUrl + "dialog1_bg_green.png", p_png8: png8Url + "dialog1_bg_green.png" }, h: { p: "#009900" } }, 2: { n: { p: baseUrl + "dialog1_bg_yellow.png", p_png8: png8Url + "dialog1_bg_yellow.png" }, h: { p: "#f5b400" } }, 3: { n: { p: baseUrl + "dialog1_bg_pink.png", p_png8: png8Url + "dialog1_bg_pink.png" }, h: { p: "#ee685e" } } } },
        i = { 4: { 0: { n: t({ tmpl: 1, colors: e[4][0].n }), h: t({ tmpl: 1, colors: e[4][0].h }) }, 1: { n: t({ tmpl: 1, colors: e[4][1].n }), h: t({ tmpl: 1, colors: e[4][1].h }) }, 2: { n: t({ tmpl: 1, colors: e[4][2].n }), h: t({ tmpl: 1, colors: e[4][2].h }) }, 3: { n: t({ tmpl: 1, colors: e[4][3].n }), h: t({ tmpl: 1, colors: e[4][3].h }) } }, 5: { 0: { n: t({ tmpl: 2, colors: e[5][0].n }) }, 1: { n: t({ tmpl: 2, colors: e[5][1].n }) }, 2: { n: t({ tmpl: 2, colors: e[5][2].n }) }, 3: { n: t({ tmpl: 2, colors: e[5][3].n }) } }, 6: { 0: { n: t({ tmpl: 2, colors: e[6][0].n }), h: t({ tmpl: 2, colors: e[6][0].h }) }, 1: { n: t({ tmpl: 2, colors: e[6][1].n }), h: t({ tmpl: 2, colors: e[6][1].h }) }, 2: { n: t({ tmpl: 2, colors: e[6][2].n }), h: t({ tmpl: 2, colors: e[6][2].h }) }, 3: { n: t({ tmpl: 2, colors: e[6][3].n }), h: t({ tmpl: 2, colors: e[6][3].h }) } }, 8: { 0: { n: t({ tmpl: 3, colors: e[8][0].n }), h: t({ tmpl: 2, colors: e[8][0].h }) }, 1: { n: t({ tmpl: 3, colors: e[8][1].n }), h: t({ tmpl: 2, colors: e[8][1].h }) }, 2: { n: t({ tmpl: 3, colors: e[8][2].n }), h: t({ tmpl: 2, colors: e[8][2].h }) }, 3: { n: t({ tmpl: 3, colors: e[8][3].n }), h: t({ tmpl: 2, colors: e[8][3].h }) } } };
    module.exports = exports = i
}), LBF.define("wpa.util.borderRadiusMixin", function(require, exports, module) {
    var t = function(t) { return ["-webkit-border-radius: {{radius}}px;", "-moz-border-radius: {{radius}}px;", "border-radius: {{radius}}px;"].join("").replace(/\{\{radius\}\}/g, t || 5) },
        e = function(t) { return ["-webkit-border-top-left-radius: {{radius}}px;", "-moz-border-top-left-radius: {{radius}}px;", "border-top-left-radius: {{radius}}px;", "-webkit-border-top-right-radius: {{radius}}px;", "-moz-border-top-right-radius: {{radius}}px;", "border-top-right-radius: {{radius}}px;"].join("").replace(/\{\{radius\}\}/g, t || 5) },
        i = function(t) { return ["-webkit-border-bottom-left-radius: {{radius}}px;", "-moz-border-bottom-left-radius: {{radius}}px;", "border-bottom-left-radius: {{radius}}px;", "-webkit-border-bottom-right-radius: {{radius}}px;", "-moz-border-bottom-right-radius: {{radius}}px;", "border-bottom-right-radius: {{radius}}px;"].join("").replace(/\{\{radius\}\}/g, t || 5) };
    module.exports = exports = { getBorderRadius: t, getTopBorderRadius: e, getBottomBorderRadius: i }
}), LBF.define("wpa.util.urlBackground", function(require, exports, module) {
    var t = require("globalSettings"),
        e = t.png8Url,
        i = { 4: { blue: e + "fixed4_white_qq_blue.png", green: e + "fixed4_white_qq_green.png", yellow: e + "fixed4_white_qq_yellow.png", pink: e + "fixed4_white_qq_pink.png" } };
    module.exports = exports = function(t, e) { return i[t] ? i[t][e] : void 0 }
}), LBF.define("wpa.util.replaceImg3X", function(require, exports) { return function(t, e) { return e > 2 ? t.replace(/2x\.png/g, "3x.png") : t } }), LBF.define("wpa.conf.tpl", function(require, exports, module) {
    var t, e = require("wpa.conf.config"),
        i = e.imageBaseUrl,
        n = (require("lang.browser"), require("wpa.conf.defaultConst")),
        a = n.defaultEventTagName,
        o = { 1: "callChat", 2: "callPhone", 3: "callAddPal", 4: "callAddGroup", 5: "callAddFan" },
        r = { IP5: ["@media only screen ", "and (min-device-width : 320px) ", "and (max-device-width : 568px) "].join(""), IP6P: ["@media only screen ", "and (min-device-width : 414px) ", "and (max-device-width : 736px) "].join("") },
        l = !1,
        s = { 1: { tpl: ['<div class="wpa-container {theme} {closable} {has-avatar} {class}">', '<div style="float:left;">', '<a href="javascript:void(0);" name="' + a + '" data-event="callClose" class="icon-close"></a>', '<img class="avatar" src="{avatar}" />', "</div>", '<div style="overflow:hidden;">', '<div class="texts" style="width:calc(73%);">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<a class="btnText" style="background:{btnBgColor}" name="' + a + '" data-event="{event}">{btnText}</a>', "</div>", "</div>"].join("") }, 2: { tpl: ['<div class="wpa-container">', '<a class="close" data-event="callClose" name="' + a + '" href="javascript:void(0);"></a>', '<img class="avatar" src="{avatar}" />', '<div class="content">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<a class="btn" style="background: {btnBgColor};" href="javascript:void(0);" name="' + a + '" data-event="{event}">{btnText}</a>', "</div>"].join("") }, 3: { tpl: ['<div class="wpa-container {theme} {closable} {has-avatar} {class}">', '<div style="float:left;">', '<a href="javascript:void(0);" name="' + a + '" data-event="callClose" class="icon-close"></a>', '<img class="avatar" src="{avatar}" />', "</div>", '<div style="overflow:hidden;">', '<div class="texts" style="width:{calc};">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<div class="actions {has-btnText}">', '<a class="action {hasAction2}" href="javascript:void(0);" name="' + a + '" data-event="{event2}"><span class="{icon2} icon"></span>', '</a><span class="spliter {spliterLength}"></span><a class="action" href="javascript:void(0);" name="' + a + '" data-event="{event1}">', '<span class="{icon1} icon"></span><br/>', '<span class="btnText">{fixedBtnText}</span>', "</a>", "</div>", "</div>", "</div>"].join("") }, 4: { tpl: ['<div class="wpa-container {has-avatar}">', '<div style="float:left;">', '<img class="avatar" src="{avatar}" />', "</div>", '<div style="overflow:hidden;">', '<div class="texts" style="width:{calc};">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<div class="actions {has-btnText}">', '<a class="action {hasAction2}" href="javascript:void(0);" name="' + a + '" data-event="{event2}"><span class="{icon2} icon"></span>', '</a><span class="spliter {spliterLength}"></span><a class="action" href="javascript:void(0);" name="' + a + '" data-event="{event1}">', '<span class="{icon1} icon"></span>', '<span class="btnText">{fixedBtnText}</span>', "</a>", "</div>", "</div>", "</div>"].join("") }, 5: { tpl: ['<div class="wpa-container {has-avatar}">', '<div style="float:left;">', '<img class="avatar" src="{avatar}" />', "</div>", '<div style="overflow:hidden;">', '<div class="texts" style="width:calc(73%);">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<a href="javascript:void(0);" name="' + a + '" data-event="{event1}" class="button {btnWithoutIconAdd}">', '<span class="icon-add {btnWithoutIconAdd}"></span>', "<span>{fixedBtnText}</span>", "</a>", "</div>", "</div>"].join("") }, 6: { tpl: ['<div class="wpa-container {theme} {closable} {has-avatar} {class}">', '<div style="float:left;">', '<a href="javascript:void(0);" name="' + a + '" data-event="callClose" class="icon-close"></a>', '<img class="avatar" src="{avatar}" />', "</div>", '<div style="overflow:hidden;">', '<div class="texts" style="width:calc(73%);">', '<p class="title">{title}</p>', '<p class="signature">{signature}</p>', "</div>", '<a href="javascript:void(0);" name="' + a + '" data-event="{event1}" class="button {btnWithoutIconAdd}">', '<span class="icon-add"></span>', "<span>{fixedBtnText}</span>", "</a>", "</div>", "</div>"].join("") } },
        c = require("wpa.util.getSize"),
        p = function(e) {
            var n = e.ratio,
                a = e.type,
                o = c(n);
            return l || (t = { 1: { cssText: ["* {{common}margin: 0;padding: 0;}", ".wpa-container {{dib}position: relative;width: 100%;height: " + o(130) + "px;line-height: " + o(126) + "px;}", ".theme-1 {background: #fff;}", ".theme-2 {background-color: rgba(0, 0, 0, 0.8);}", ".theme-3 {background: #f0f0f0;}", ".wpa-container.middle {background: transparent;}", ".avatar {width: " + o(86) + "px;height: " + o(86) + "px;border-radius: 50%;vertical-align: middle;margin-left: " + o(30) + "px;display: none;}", ".has-avatar .avatar {{dib}}", ".has-avatar .texts, .closable .texts {margin-left: " + o(10) + "px;}", ".closable .avatar {margin-left: " + o(20) + "px;}", r.IP5 + "{.closable .avatar {margin-left:" + o(20) + "px;}}", r.IP6P + "{.closable .avatar {margin-left:" + o(30) + "px;}}", ".closable .icon-close {{dib}}", ".middle.closable .icon-close {display:none;}", ".middle.closable .texts {margin-left: " + o(30) + "px;}", ".icon-qq {{dib}width: " + o(37) + "px;height: " + o(44) + "px;vertical-align: middle;background: url(" + i + "/icon-qq-44-2x.png) no-repeat;background-size:" + o(37) + "px " + o(44) + "px;}", ".icon-close {display: none;width: " + o(20) + "px;height: " + o(20) + "px;vertical-align: middle;background: url(" + i + "/icon-close-2x.png) no-repeat;margin-left: " + o(20) + "px;background-size:" + o(20) + "px " + o(20) + "px;}", r.IP5 + "{.icon-close {margin-left:" + o(20) + "px;}}", r.IP6P + "{.icon-close {margin-left:" + o(30) + "px;}}", ".theme-2 .icon-close {background: url(" + i + "/icon-close-for-black-2x.png) no-repeat;background-size:" + o(20) + "px " + o(20) + "px;}", ".texts {{dib}vertical-align: middle;line-height: " + o(40) + "px;margin-top: " + o(0) + "px;margin-left: " + o(30) + "px;position:relative;top:-2px;}", ".title {font-size: " + o(34) + "px;color: #000;}", ".signature {font-size: " + o(28) + "px;color: #777;position:relative;top: 6px;}", ".theme-2 .title, .theme-2 .signature {color: #fff;}", ".middle .title {color: #000!important;}", ".middle .signature {color: #999!important;}", ".btnText {cursor: pointer;background: #0067ed;border-radius: " + o(10) + "px;{dib}font-size: " + o(28) + "px;color: #fff;height: " + o(26) + "px;max-width: " + o(147) + "px;line-height: " + o(26) + "px;padding: " + o(17) + "px " + o(18) + "px;position: absolute;top: " + o(35) + "px;right: " + o(30) + "px;margin-left: " + o(30) + "px;{ell}}", ".theme-2 .btnText {background: transparent!important;border: " + o(2) + "px solid #fff;padding: " + o(15) + "px " + o(16) + "px;height: " + o(22) + "px;line-height:" + o(22) + "px;}"].join("") }, 2: { cssText: ["* {{common}margin: 0;padding: 0;}", '.wpa-container {{dib}width: 402px;height: 198px;border-radius: 2px;position: relative;background: #fff;border: 1px solid #dadee7;font-family:"microsoft yahei";font-size: 14px;{boxShadow}}', ".close {position: absolute;top: 15px;right: 15px;{dib}width: 14px;height: 14px;background: url(" + i + "/icon-close.png) no-repeat;background-size:14px 14px;}", ".avatar {position: absolute;top: 26px;left: 26px;border-radius: 100%;width: 94px;height: 94px;}", ".content {position: absolute;top: 30px;left: 135px;}", ".title {font-size: 22px;{ell}}", ".signature {color: #777;line-height: 24px;margin-top: 10px;width: 226px;}", ".btn {{ell}text-decoration: none;color: #fff;position: absolute;right: 15px;bottom: 15px;width: 100px;border-radius: 2px;text-align: center;height: 35px;line-height: 35px;}"].join("") }, 3: { cssText: ["* {{common}margin: 0;padding: 0;}", ".wpa-container {{dib}position: relative;width: 100%;height: " + o(130) + "px;line-height: " + o(126) + "px;}", ".theme-1 {background: #fff;}", ".theme-2 {background-color: rgba(0, 0, 0, 0.8);}", ".theme-3 {background: #f0f0f0;}", ".wpa-container.middle {background: transparent!important;}", ".avatar {width: " + o(86) + "px;height: " + o(86) + "px;border-radius: 50%;vertical-align: middle;margin-left: " + o(30) + "px;display: none;}", ".has-avatar .avatar {{dib}}", ".has-avatar .texts, .closable .texts {margin-left: " + o(18) + "px;}", r.IP5 + "{.has-avatar .texts, .closable .texts {margin-left: " + o(18) + "px;}}", r.IP6P + "{.has-avatar .texts, .closable .texts {margin-left: " + o(30) + "px;}}", ".closable .avatar {margin-left: " + o(18) + "px;}", r.IP5 + "{.closable .avatar {margin-left:" + o(20) + "px;}}", r.IP6P + "{.closable .avatar {margin-left:" + o(30) + "px;}}", ".closable .icon-close {{dib}}", ".middle.closable .icon-close {display:none;}", ".action .icon {position:relative; top: " + o(44) + "px;display: none;}", ".action .icon.icon-qq {{dib}width: " + o(37) + "px;height: " + o(44) + "px;vertical-align: middle;background: url(" + i + "/icon-qq-44-2x.png) no-repeat;background-size:" + o(37) + "px " + o(44) + "px;}", ".action .icon.icon-im {{dib}width: " + o(44) + "px;height: " + o(44) + "px;vertical-align: middle;background: url(" + i + "/icon-im-44-blue-2x.png) no-repeat;background-size:" + o(44) + "px " + o(44) + "px;}", ".action .icon.icon-call {{dib}width: " + o(40) + "px;height: " + o(42) + "px;vertical-align: middle;background: url(" + i + "/icon-call-44-2x.png) no-repeat;background-size:" + o(40) + "px " + o(42) + "px;}", ".icon-close {display: none;width: " + o(20) + "px;height: " + o(20) + "px;vertical-align: middle;background: url(" + i + "/icon-close-2x.png) no-repeat;margin-left: " + o(20) + "px;background-size:" + o(20) + "px " + o(20) + "px;}", r.IP5 + "{.icon-close {margin-left:" + o(20) + "px;}}", r.IP6P + "{.icon-close {margin-left:" + o(30) + "px;}}", ".theme-2 .icon-close {background: url(" + i + "/icon-close-for-black-2x.png) no-repeat;background-size:" + o(20) + "px " + o(20) + "px;}", ".texts {{dib}vertical-align: middle;line-height: " + o(40) + "px;margin-top: " + o(-4) + "px;margin-left: " + o(30) + "px;}", ".title {font-size: " + o(34) + "px;color: #000;{ell}}", ".signature {font-size: " + o(28) + "px;color: #777;{ell}position:relative;top: " + o(5) + "px;}", ".theme-2 .title, .theme-2 .signature {color: #fff;}", ".middle .title {color: #000!important;}", ".middle .signature {color: #999!important;}", ".spliter {{dib}vertical-align: middle;height: " + o(56) + "px;width: 1px;background: #d6d6d6;}", ".spliter.spliter-long {height: " + o(80) + "px;}", ".theme-2 .spliter {background: #565656;}", ".middle .spliter {background: #d6d6d6!important;}", ".actions {{dib}vertical-align: middle;position: absolute;right: 0;top: 0;height: " + o(130) + "px;}", ".actions span.icon {cursor: pointer;}", ".btnText {font-size: " + o(22) + "px;color: #777;display: none;}", ".theme-2 .btnText, .theme-2 .title, .theme-2 .signature {color: #fff;}", ".middle .btnText {color: #777!important;}", ".action {margin-top: -3px;{dib}vertical-align: middle;text-align: center;line-height: " + o(40) + "px;position: relative;width: " + o(100) + "px;height: " + o(130) + "px;}", r.IP5 + "{.action {width: " + o(100) + "px;}}", r.IP6P + "{.action {width: " + o(120) + "px;}}", ".has-btnText .action {width: " + o(150) + "px;}", ".has-btnText .action .icon {top: " + o(28) + "px;}", ".action.no-action2 {display:none;}", ".has-btnText .action .btnText {{dib}position: relative;top: " + o(30) + "px;{ell}}"].join("") }, 4: { cssText: ["* {{common}margin: 0;padding: 0;}", ".wpa-container {{dib}position: relative;width: 100%;height: " + o(140) + "px;line-height: " + o(136) + "px;background: transparent;}", ".avatar {width: " + o(100) + "px;height: " + o(100) + "px;border-radius: 50%;vertical-align: middle;margin-left: " + o(0) + "px;display: none;}", ".has-avatar .avatar {{dib}}", ".has-avatar .texts {margin-left: " + o(22) + "px;}", ".action .icon {position: absolute;top: " + o(44) + "px;left: " + o(40) + "px;display: none;}", ".has-btnText .action .icon {left: " + o(57) + "px;}", ".action .icon.icon-qq {{dib}width: " + o(37) + "px;height: " + o(44) + "px;vertical-align: middle;background: url(" + i + "/icon-qq-44-2x.png) no-repeat;background-size:" + o(37) + "px " + o(44) + "px;}", ".action .icon.icon-im {{dib}width: " + o(44) + "px;height: " + o(44) + "px;vertical-align: middle;background: url(" + i + "/icon-im-44-blue-2x.png) no-repeat;background-size:" + o(44) + "px " + o(44) + "px;}", ".action .icon.icon-call {{dib}width: " + o(40) + "px;height: " + o(42) + "px;vertical-align: middle;background: url(" + i + "/icon-call-44-2x.png) no-repeat;background-size:" + o(40) + "px " + o(42) + "px;}", ".texts {{dib}vertical-align: middle;line-height: " + o(40) + "px;margin-top: " + o(-4) + "px;margin-left: " + o(30) + "px;}", ".title {font-size: " + o(34) + "px;color: #000;}", ".signature {font-size: " + o(28) + "px;color: #777;position:relative; top:" + o(5) + "px;}", ".spliter {{dib}vertical-align: middle;height: " + o(56) + "px;width: 1px;background: #d6d6d6;}", ".spliter.spliter-long {height: " + o(80) + "px;}", ".actions {{dib}vertical-align: middle;position: absolute;right: " + o(-20) + "px;top: 0;height: " + o(140) + "px;}", ".actions span.icon {cursor: pointer;}", ".btnText {font-size: " + o(22) + "px;color: #777;display: none;{ell}}", ".action {{dib}vertical-align: middle;text-align: center;line-height: " + o(40) + "px;position: relative;width: " + o(122) + "px;height: " + o(140) + "px;}", r.IP5 + ".action {{width: " + o(100) + "px;}}", r.IP6P + ".action {{width: " + o(120) + "px;}}", ".has-btnText .action {width: " + o(150) + "px;}", ".has-btnText .action .icon {top: " + o(28) + "px;}", ".action.no-action2 {display:none;}", ".has-btnText .action .btnText {{dib}{ell}position: relative;top: " + o(77) + "px;}"].join("") }, 5: { cssText: ["* {{common}margin: 0;padding: 0;}", ".wpa-container {{dib}position: relative;width: 100%;height: " + o(140) + "px;line-height: " + o(136) + "px;background: transparent;}", ".avatar {width: " + o(100) + "px;height: " + o(100) + "px;border-radius: 50%;vertical-align: middle;margin-left: " + o(0) + "px;display: none;}", ".has-avatar .avatar {{dib}}", ".has-avatar .texts {margin-left: " + o(22) + "px;}", ".texts {{dib}vertical-align: middle;line-height: " + o(40) + "px;margin-top: " + o(0) + "px;margin-left: " + o(30) + "px;position:relative;top:-2px;}", ".title {font-size: " + o(34) + "px;color: #000;}", ".signature {font-size: " + o(28) + "px;color: #777;position:relative;top:6px;}", ".button {{dib}text-decoration: none;color: #00a5e0;font-size: " + o(24) + "px;padding: " + o(12) + "px " + o(16) + "px;max-width: " + o(110) + "px;height: " + o(24) + "px;line-height: " + o(24) + "px;text-align: center;border-radius: " + o(10) + "px;border: " + o(2) + "px solid #00a5e0;position: absolute;right: " + o(0) + "px;top: " + o(45) + "px;}", ".btn-without-icon-add {padding: " + o(12) + "px " + o(30) + "px;}", ".button.btn-without-icon-add .icon-add {display:none;}", ".icon-add {{dib}width: " + o(18) + "px;height: " + o(18) + "px;background: url(" + i + "/icon-add-2x.png) no-repeat;margin-right:" + o(10) + "px;background-size:" + o(18) + "px " + o(18) + "px;}"].join("") }, 6: { cssText: ["* {{common}margin: 0;padding: 0;}", ".wpa-container {{dib}position: relative;width: 100%;height: " + o(140) + "px;line-height: " + o(136) + "px;background: transparent;}", ".theme-1 {background: #fff;}", ".theme-2 {background-color: rgba(0, 0, 0, 0.8);}", ".theme-3 {background: #f0f0f0;}", ".wpa-container.middle {background: transparent;}", ".closable .avatar {margin-left: " + o(20) + "px;}", r.IP5 + "{.closable .avatar {margin-left:" + o(20) + "px;}}", r.IP6P + "{.closable .avatar {margin-left:" + o(30) + "px;}}", ".closable .icon-close {{dib}}", ".middle.closable .icon-close {display:none;}", ".middle.closable .texts {margin-left: " + o(30) + "px;}", ".avatar {width: " + o(100) + "px;height: " + o(100) + "px;border-radius: 50%;vertical-align: middle;margin-left: " + o(30) + "px;display: none;}", ".icon-close {display: none;width: " + o(20) + "px;height: " + o(20) + "px;vertical-align: middle;background: url(" + i + "/icon-close-2x.png) no-repeat;margin-left: " + o(20) + "px;background-size:" + o(20) + "px " + o(20) + "px;}", r.IP5 + "{.icon-close {margin-left:" + o(20) + "px;}}", r.IP6P + "{.icon-close {margin-left:" + o(30) + "px;}}", ".has-avatar .avatar {{dib}}", ".has-avatar .texts {margin-left: " + o(22) + "px;}", ".texts {{dib}vertical-align: middle;line-height: " + o(40) + "px;margin-top: " + o(0) + "px;margin-left: " + o(30) + "px;position:relative;top:-2px;}", ".title {font-size: " + o(34) + "px;color: #000;}", ".signature {font-size: " + o(28) + "px;color: #777;position:relative;top:6px;}", ".theme-2 .icon-close {background: url(" + i + "/icon-close-for-black-2x.png) no-repeat;background-size:" + o(20) + "px " + o(20) + "px;}", ".button {{dib}text-decoration: none;color: #00a5e0;font-size: " + o(24) + "px;padding: " + o(12) + "px " + o(16) + "px;height: " + o(24) + "px;line-height: " + o(24) + "px;text-align: center;border-radius: " + o(10) + "px;border: " + o(2) + "px solid #00a5e0;position: absolute;right: " + o(30) + "px;top: " + o(45) + "px;}", r.IP5 + "{.button {top: " + o(45) + "px;padding: " + o(12) + "px " + o(16) + "px;font-size: " + o(24) + "px;height: " + o(24) + "px;line-height: " + o(24) + "px;}}", r.IP6P + "{.button {top: " + o(38) + "px;padding: " + o(12) + "px " + o(24) + "px;font-size: " + o(28) + "px;height: " + o(36) + "px;line-height: " + o(36) + "px;}}", ".icon-add {{dib}width: " + o(18) + "px;height: " + o(18) + "px;background: url(" + i + "/icon-add-2x.png) no-repeat;margin-right:" + o(10) + "px;background-size:" + o(18) + "px " + o(18) + "px;}", ".theme-2 .title, .theme-2 .signature, .theme-2 .button {color: #fff;}", ".theme-2 .button {border-color: #fff;}", ".theme-2 .icon-add {background: url(" + i + "/icon-add-for-black-2x.png) no-repeat;background-size:9px 9px;}", ".middle .title {color: #000!important;}", ".middle .signature {color: #999!important;}", ".middle .button {color: #00a5e0!important;border-color: #00a5e0!important;}", ".btn-without-icon-add {padding: " + o(12) + "px " + o(30) + "px;}", ".button.btn-without-icon-add .icon-add {display:none;}", ".middle .icon-add {background: url(" + i + "/icon-add-2x.png) no-repeat;background-size:9px 9px;}"].join("") } }, l = !0), t[a].cssText
        };
    module.exports = exports = function(t, e) {
        t = t || 1, e = e || {};
        var i = s[t],
            n = e.ratio,
            a = i.tpl,
            r = p({ type: t, ratio: n }),
            l = void 0 !== typeof e.hasBtnText && e.hasBtnText ? "has-btnText" : "",
            c = void 0 !== typeof e.hasAvatar && e.hasAvatar ? "has-avatar" : "",
            d = e.eventList || [],
            u = e.fixedBtnText || "",
            h = e.iconList || [],
            f = e.btnWithoutIconAdd ? "btn-without-icon-add" : "",
            g = d[0] || "",
            m = d[1] || "",
            b = h[0] || "",
            x = h[1] || "",
            v = x ? "" : "no-action2",
            _ = x ? "" : "spliter-long",
            w = x ? "calc(60%)" : "calc(73%)";
        l && !u && (a = a.replace(/fixedBtnText/, "btnText"));
        var y = a.replace(/\{has-avatar\}/g, c).replace(/\{has-btnText\}/g, l).replace(/\{fixedBtnText\}/g, u).replace(/\{icon1\}/g, b).replace(/\{icon2\}/g, x).replace(/\{event1\}/g, g).replace(/\{event2\}/g, m).replace(/\{spliterLength\}/g, _).replace(/\{hasAction2\}/g, v).replace(/\{btnWithoutIconAdd\}/g, f).replace(/\{calc\}/g, w);
        return function(t) {
            t = t || {};
            var e = o[t.event] || o[1],
                i = y.replace(/\{event\}/g, e);
            return n > 2 && (r = r.replace(/2x\.png/g, "3x.png")), { tpl: i, cssText: r }
        }
    }
}), LBF.define("lang.dateTool", function() {
    var t = 864e5,
        e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        i = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        n = function(t) { return 10 > t ? "0" + t : t },
        a = function(t, e) { return e = e || new Date(t.getFullYear(), 0, 1), t - e },
        o = { d: function(t) { return n(this.j(t)) }, D: function(t) { return this.l(t).substr(0, 3) }, j: function(t) { return t.getDate() }, l: function(t) { return i[t.getDay()] }, N: function(t) { return this.w(t) || 7 }, w: function(t) { return t.getDay() }, z: function(t) { return Math.floor(a(t) / 864e5) }, F: function(t) { return e[t.getMonth()] }, m: function(t) { return n(this.n(t)) }, n: function(t) { return t.getMonth() + 1 }, M: function(t) { return this.F(t).substr(0, 3) }, Y: function(t) { return t.getFullYear() }, y: function(t) { return this.Y(t).toString().slice(-2) }, a: function(t) { return t.getHours() < 12 ? "am" : "pm" }, A: function(t) { return this.a(t).toUpperCase() }, g: function(t) { return t.getHours() % 12 || 12 }, G: function(t) { return t.getHours() }, h: function(t) { return n(this.g(t)) }, H: function(t) { return n(this.G(t)) }, i: function(t) { return n(t.getMinutes()) }, s: function(t) { return n(t.getSeconds()) } },
        r = { format: function(t, e) { return t = t || "Y-m-d H:i:s", 1 == arguments.length ? e = new Date : e instanceof Date || (e = new Date(parseInt(e) || 0)), t.replace(/\\?([a-z])/gi, function(t, i) { return o[t] ? o[t].call(o, e) : i }) }, isLeapYear: function(t) { return t.getTime && (t = r.format("Y", t)), t = parseInt(t, 10), !(0 != t % 4 || t % 100 == 0 && t % 400 != 0) }, lastDay: function(e) { return new Date(+e - t) }, nextDay: function(e) { return new Date(+e + t) }, lastMonth: function(t) { var e = new Date(+t); return e.setMonth(e.getMonth() - 1), e }, nextMonth: function(t) { var e = new Date(+t); return e.setMonth(e.getMonth() + 1), e }, lastYear: function(t) { var e = new Date(+t); return e.setYear(e.getFullYear() - 1), e }, nextYear: function(t) { var e = new Date(+t); return e.setYear(e.getFullYear() + 1), e }, daysBetween: function(e, i) { var n = 60 * (new Date).getTimezoneOffset() * 1e3; return parseInt((+i - n) / t, 10) - parseInt((+e - n) / t, 10) }, isSameDay: function(t, e) { return t = new Date(t), e = new Date(e), t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), 0 === r.daysBetween(t, e) }, timestamp: function(t) { return parseInt(+t / 1e3, 10) } };
    return r
}), LBF.define("wpa.util.css", function(require, exports, module) {
    var t = require("util.contains"),
        e = require("wpa.conf.config"),
        i = e.gWin,
        n = i.document,
        a = n.defaultView && n.defaultView.getComputedStyle ? function(t, e) { e = e.replace(/([A-Z])/g, "-$1").toLowerCase(); var i = n.defaultView.getComputedStyle(t, ""); return i && i.getPropertyValue(e) } : function(t, e) { return t.currentStyle[e] },
        o = function(e, i) {
            if (!t(e, n)) return i();
            var a, o = e.parentNode,
                r = e.nextSibling,
                l = n.createElement("div");
            return l.appendChild(e), n.body.appendChild(l), a = i(), r ? o.insertBefore(e, r) : o.appendChild(e), l.parentNode.removeChild(l), a
        };
    module.exports = function(t, e, i) {
        var n;
        if (i) n = e + ":" + i;
        else {
            if ("string" == typeof e) return o(t, function() { return a(t, e) });
            "object" != typeof e && new TypeError("Arg style should be string or object"), n = [];
            for (var r in e) n.push(r + ":" + e[r]);
            n = n.join(";")
        }
        return n = n.replace(/([A-Z])/g, "-$1").toLowerCase(), t.style.cssText += ";" + n, t
    }
}), LBF.define("wpa.im.i18n", function(require, exports, module) { module.exports = { "zh-cn": { common_new_message: "鏉℃柊娑堟伅" }, "en-us": { common_new_message: " new message" } } }), LBF.define("util.Attribute", function(require, exports, module) {
    var t = require("lang.extend"),
        e = "_ATTRIBUTES",
        i = "_VALIDATES";
    exports.set = function(i, n, a) {
        var o = this[e];
        if (o || (o = this[e] = {}), "object" != typeof i) { var r = o[i]; return o[i] = n, this.validate(o) ? n === r || a && a.silence || !this.trigger || (this.trigger("change:" + i, [o[i], r]), this.trigger("change", [o])) : o[i] = r, this }
        a = n;
        var l = t({}, o, i);
        if (this.validate(l) && (this[e] = l, (!a || !a.silence) && this.trigger)) {
            var s = 0;
            for (var c in i) i.hasOwnProperty(c) && l[c] !== o[c] && (s++, this.trigger("change:" + c, [l[c], o[c]]));
            s > 0 && this.trigger("change", [l])
        }
        return this
    }, exports.get = function(t) { return this[e] ? this[e][t] : null }, exports.attributes = function() { return this[e] || {} }, exports.addValidate = function(t) { var e = this[i]; return e || (e = this[i] = []), e.push(t), this }, exports.removeValidate = function(t) { if (!t) return this[i] = null, this; for (var e = this[i], n = 0, a = e.length; a > n; n++) e[n] === t && (e.splice(n, 1), --n, --a); return this }, exports.validate = function(t) {
        var n = this[i];
        if (!n) return !0;
        t = t || this[e];
        for (var a = 0, o = n.length; o > a; a++)
            if (n[a].call(this, t) === !1) return !1;
        return !0
    }
}), LBF.define("wpa.util.backgroundMixin", function(require, exports, module) {
    var t = { 1: ["background: {{p}};", "background: -moz-linear-gradient(top, {{s}} 0%, {{e}} 100%);", "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,{{s}}), color-stop(100%,{{e}}));", "background: -webkit-linear-gradient(top, {{s}} 0%,{{e}} 100%);", "background: -o-linear-gradient(top, {{s}} 0%,{{e}} 100%);", "background: -ms-linear-gradient(top, {{s}} 0%,{{e}} 100%);", "background: linear-gradient(to bottom, {{s}} 0%,{{e}} 100%);", 'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="{{s}}", endColorstr="{{e}}",GradientType=0 );'].join(""), 2: "background: {{p}};", 3: "background: url({{p}});_background: url({{p_png8}});" },
        e = function(e) {
            var i;
            switch (e.tmpl) {
                case 1:
                    i = 1;
                    break;
                case 2:
                    i = 2;
                    break;
                case 3:
                    i = 3;
                    break;
                default:
                    i = 1
            }
            return t[i].replace(/\{\{p\}\}/g, e.colors.p).replace(/\{\{s\}\}/g, e.colors.s).replace(/\{\{e\}\}/g, e.colors.e).replace(/\{\{p_png8\}\}/g, e.colors.p_png8 || "")
        };
    module.exports = exports = e
}), LBF.define("util.contains", function() { return document.createElement("div").compareDocumentPosition ? function(t, e, i) { if (!i && t === e) return !1; var n = t.compareDocumentPosition(e); return 20 == n || 0 == n } : function(t, e, i) { return i || t !== e ? e == document ? t.contains(document.body) : t.contains(e) : !1 } }), LBF.use("wpa.app", function(t) { t.init(), t.lbf = LBF, LBF.noConflict() });
i.CGIS.CLOSE_INVITE_REPORT