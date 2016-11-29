/* */ 
"format cjs";
(function(process) {
  !function(e) {
    function t(e, n) {
      if ("string" != typeof e)
        throw new TypeError("URL must be a string");
      var r = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
      if (!r)
        throw new RangeError("Invalid URL format");
      var a = r[1] || "",
          o = r[2] || "",
          i = r[3] || "",
          s = r[4] || "",
          d = r[5] || "",
          l = r[6] || "",
          u = r[7] || "",
          c = r[8] || "",
          f = r[9] || "";
      if (void 0 !== n) {
        var m = n instanceof t ? n : new t(n),
            p = !a && !s && !o;
        !p || u || c || (c = m.search), p && "/" !== u[0] && (u = u ? (!m.host && !m.username || m.pathname ? "" : "/") + m.pathname.slice(0, m.pathname.lastIndexOf("/") + 1) + u : m.pathname);
        var h = [];
        u.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(e) {
          "/.." === e ? h.pop() : h.push(e);
        }), u = h.join("").replace(/^\//, "/" === u[0] ? "/" : ""), p && (l = m.port, d = m.hostname, s = m.host, i = m.password, o = m.username), a || (a = m.protocol);
      }
      u = u.replace(/\\/g, "/"), this.origin = s ? a + ("" !== a || "" !== s ? "//" : "") + s : "", this.href = a + (a && s || "file:" == a ? "//" : "") + ("" !== o ? o + ("" !== i ? ":" + i : "") + "@" : "") + s + u + c + f, this.protocol = a, this.username = o, this.password = i, this.host = s, this.hostname = d, this.port = l, this.pathname = u, this.search = c, this.hash = f;
    }
    e.URLPolyfill = t;
  }("undefined" != typeof self ? self : global), function(e) {
    function t(e, t) {
      if (!e.originalErr)
        for (var n = ((e.message || e) + (e.stack ? "\n" + e.stack : "")).toString().split("\n"),
            r = [],
            a = 0; a < n.length; a++)
          "undefined" != typeof $__curScript && n[a].indexOf($__curScript.src) != -1 || r.push(n[a]);
      var o = "(SystemJS) " + (r ? r.join("\n\t") : e.message.substr(11)) + "\n\t" + t;
      y || (o = o.replace(b ? /file:\/\/\//g : /file:\/\//g, ""));
      var i = E ? new Error(o, e.fileName, e.lineNumber) : new Error(o);
      return i.stack = o, i.originalErr = e.originalErr || e, i;
    }
    function n() {}
    function r(t) {
      this._loader = {
        loaderObj: this,
        loads: [],
        modules: {},
        importPromises: {},
        moduleRecords: {}
      }, w(this, "global", {get: function() {
          return e;
        }});
    }
    function a() {
      r.call(this), this.paths = {}, this._loader.paths = {}, k.call(this);
    }
    function o() {}
    function i(e, t) {
      a.prototype[e] = t(a.prototype[e] || function() {});
    }
    function s(e) {
      k = e(k || function() {});
    }
    function d(e) {
      return "." == e[0] && (!e[1] || "/" == e[1] || "." == e[1]) || "/" == e[0];
    }
    function l(e, t) {
      if ("." == e[0]) {
        if ("/" == e[1] && "." != e[2])
          return (t && t.substr(0, t.lastIndexOf("/") + 1) || S) + e.substr(2);
      } else if ("/" != e[0] && e.indexOf(":") == -1)
        return (t && t.substr(0, t.lastIndexOf("/") + 1) || S) + e;
      return new P(e, t && t.replace(/#/g, "%05") || I).href.replace(/%05/g, "#");
    }
    function u(e, t) {
      var n,
          r = "",
          a = 0,
          o = e.paths,
          i = e._loader.paths;
      for (var s in o)
        if (!o.hasOwnProperty || o.hasOwnProperty(s)) {
          var u = o[s];
          if (u !== i[s] && (u = o[s] = i[s] = l(o[s], d(o[s]) ? S : e.baseURL)), s.indexOf("*") === -1) {
            if (t == s)
              return o[s];
            if (t.substr(0, s.length - 1) == s.substr(0, s.length - 1) && (t.length < s.length || t[s.length - 1] == s[s.length - 1]) && ("/" == o[s][o[s].length - 1] || "" == o[s]))
              return o[s].substr(0, o[s].length - 1) + (t.length > s.length ? (o[s] && "/" || "") + t.substr(s.length) : "");
          } else {
            var c = s.split("*");
            if (c.length > 2)
              throw new TypeError("Only one wildcard in a path is permitted");
            var f = c[0].length;
            f >= a && t.substr(0, c[0].length) == c[0] && t.substr(t.length - c[1].length) == c[1] && (a = f, r = s, n = t.substr(c[0].length, t.length - c[1].length - c[0].length));
          }
        }
      var m = o[r];
      return "string" == typeof n && (m = m.replace("*", n)), m;
    }
    function c(e) {
      for (var t = [],
          n = [],
          r = 0,
          a = e.length; r < a; r++) {
        var o = x.call(t, e[r]);
        o === -1 ? (t.push(e[r]), n.push([r])) : n[o].push(r);
      }
      return {
        names: t,
        indices: n
      };
    }
    function f(t) {
      var n = {};
      if (("object" == typeof t || "function" == typeof t) && t !== e)
        if (R)
          for (var r in t)
            "default" !== r && m(n, t, r);
        else
          p(n, t);
      return n.default = t, w(n, "__useDefault", {value: !0}), n;
    }
    function m(e, t, n) {
      try {
        var r;
        (r = Object.getOwnPropertyDescriptor(t, n)) && w(e, n, r);
      } catch (r) {
        return e[n] = t[n], !1;
      }
    }
    function p(e, t, n) {
      var r = t && t.hasOwnProperty;
      for (var a in t)
        r && !t.hasOwnProperty(a) || n && a in e || (e[a] = t[a]);
      return e;
    }
    function h(e) {
      var t = e.match(z);
      return t && "System.register" == e.substr(t[0].length, 15);
    }
    function g() {
      return {
        name: null,
        deps: null,
        originalIndices: null,
        declare: null,
        execute: null,
        executingRequire: !1,
        declarative: !1,
        normalizedDeps: null,
        groupIndex: null,
        evaluated: !1,
        module: null,
        esModule: null,
        esmExports: !1
      };
    }
    var v = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts,
        y = "undefined" != typeof window && "undefined" != typeof document,
        b = "undefined" != typeof process && "undefined" != typeof process.platform && !!process.platform.match(/^win/);
    e.console || (e.console = {assert: function() {}});
    var w,
        x = Array.prototype.indexOf || function(e) {
          for (var t = 0,
              n = this.length; t < n; t++)
            if (this[t] === e)
              return t;
          return -1;
        };
    !function() {
      try {
        Object.defineProperty({}, "a", {}) && (w = Object.defineProperty);
      } catch (e) {
        w = function(e, t, n) {
          try {
            e[t] = n.value || n.get.call(e);
          } catch (e) {}
        };
      }
    }();
    var S,
        E = "_" == new Error(0, "_").fileName;
    if ("undefined" != typeof document && document.getElementsByTagName) {
      if (S = document.baseURI, !S) {
        var O = document.getElementsByTagName("base");
        S = O[0] && O[0].href || window.location.href;
      }
    } else
      "undefined" != typeof location && (S = e.location.href);
    if (S)
      S = S.split("#")[0].split("?")[0], S = S.substr(0, S.lastIndexOf("/") + 1);
    else {
      if ("undefined" == typeof process || !process.cwd)
        throw new TypeError("No environment baseURI");
      S = "file://" + (b ? "/" : "") + process.cwd() + "/", b && (S = S.replace(/\\/g, "/"));
    }
    try {
      var _ = "test:" == new e.URL("test:///").protocol;
    } catch (e) {}
    var P = _ ? e.URL : e.URLPolyfill;
    w(n.prototype, "toString", {value: function() {
        return "Module";
      }}), function() {
      function e(e) {
        return {
          status: "loading",
          name: e || "<Anonymous" + ++b + ">",
          linkSets: [],
          dependencies: [],
          metadata: {}
        };
      }
      function a(e, t, n) {
        return new Promise(l({
          step: n.address ? "fetch" : "locate",
          loader: e,
          moduleName: t,
          moduleMetadata: n && n.metadata || {},
          moduleSource: n.source,
          moduleAddress: n.address
        }));
      }
      function o(t, n, r, a) {
        return new Promise(function(e, o) {
          e(t.loaderObj.normalize(n, r, a));
        }).then(function(n) {
          var r;
          if (t.modules[n])
            return r = e(n), r.status = "linked", r.module = t.modules[n], r;
          for (var a = 0,
              o = t.loads.length; a < o; a++)
            if (r = t.loads[a], r.name == n)
              return r;
          return r = e(n), t.loads.push(r), i(t, r), r;
        });
      }
      function i(e, t) {
        s(e, t, Promise.resolve().then(function() {
          return e.loaderObj.locate({
            name: t.name,
            metadata: t.metadata
          });
        }));
      }
      function s(e, t, n) {
        d(e, t, n.then(function(n) {
          if ("loading" == t.status)
            return t.address = n, e.loaderObj.fetch({
              name: t.name,
              metadata: t.metadata,
              address: n
            });
        }));
      }
      function d(e, t, n) {
        n.then(function(n) {
          if ("loading" == t.status)
            return t.address = t.address || t.name, Promise.resolve(e.loaderObj.translate({
              name: t.name,
              metadata: t.metadata,
              address: t.address,
              source: n
            })).then(function(n) {
              return t.source = n, e.loaderObj.instantiate({
                name: t.name,
                metadata: t.metadata,
                address: t.address,
                source: n
              });
            }).then(function(e) {
              if (void 0 === e)
                throw new TypeError("Declarative modules unsupported in the polyfill.");
              if ("object" != typeof e)
                throw new TypeError("Invalid instantiate return value");
              t.depsList = e.deps || [], t.execute = e.execute;
            }).then(function() {
              t.dependencies = [];
              for (var n = t.depsList,
                  r = [],
                  a = 0,
                  i = n.length; a < i; a++)
                (function(n, a) {
                  r.push(o(e, n, t.name, t.address).then(function(e) {
                    if (t.dependencies[a] = {
                      key: n,
                      value: e.name
                    }, "linked" != e.status)
                      for (var r = t.linkSets.concat([]),
                          o = 0,
                          i = r.length; o < i; o++)
                        c(r[o], e);
                  }));
                })(n[a], a);
              return Promise.all(r);
            }).then(function() {
              t.status = "loaded";
              for (var e = t.linkSets.concat([]),
                  n = 0,
                  r = e.length; n < r; n++)
                m(e[n], t);
            });
        }).catch(function(e) {
          t.status = "failed", t.exception = e;
          for (var n = t.linkSets.concat([]),
              r = 0,
              a = n.length; r < a; r++)
            p(n[r], t, e);
        });
      }
      function l(t) {
        return function(n, r) {
          var a = t.loader,
              o = t.moduleName,
              l = t.step;
          if (a.modules[o])
            throw new TypeError('"' + o + '" already exists in the module table');
          for (var c,
              f = 0,
              m = a.loads.length; f < m; f++)
            if (a.loads[f].name == o && (c = a.loads[f], "translate" != l || c.source || (c.address = t.moduleAddress, d(a, c, Promise.resolve(t.moduleSource))), c.linkSets.length && c.linkSets[0].loads[0].name == c.name))
              return c.linkSets[0].done.then(function() {
                n(c);
              });
          var p = c || e(o);
          p.metadata = t.moduleMetadata;
          var h = u(a, p);
          a.loads.push(p), n(h.done), "locate" == l ? i(a, p) : "fetch" == l ? s(a, p, Promise.resolve(t.moduleAddress)) : (p.address = t.moduleAddress, d(a, p, Promise.resolve(t.moduleSource)));
        };
      }
      function u(e, t) {
        var n = {
          loader: e,
          loads: [],
          startingLoad: t,
          loadingCount: 0
        };
        return n.done = new Promise(function(e, t) {
          n.resolve = e, n.reject = t;
        }), c(n, t), n;
      }
      function c(e, t) {
        if ("failed" != t.status) {
          for (var n = 0,
              r = e.loads.length; n < r; n++)
            if (e.loads[n] == t)
              return;
          e.loads.push(t), t.linkSets.push(e), "loaded" != t.status && e.loadingCount++;
          for (var a = e.loader,
              n = 0,
              r = t.dependencies.length; n < r; n++)
            if (t.dependencies[n]) {
              var o = t.dependencies[n].value;
              if (!a.modules[o])
                for (var i = 0,
                    s = a.loads.length; i < s; i++)
                  if (a.loads[i].name == o) {
                    c(e, a.loads[i]);
                    break;
                  }
            }
        }
      }
      function f(e) {
        var t = !1;
        try {
          y(e, function(n, r) {
            p(e, n, r), t = !0;
          });
        } catch (n) {
          p(e, null, n), t = !0;
        }
        return t;
      }
      function m(e, t) {
        if (e.loadingCount--, !(e.loadingCount > 0)) {
          var n = e.startingLoad;
          if (e.loader.loaderObj.execute === !1) {
            for (var r = [].concat(e.loads),
                a = 0,
                o = r.length; a < o; a++) {
              var t = r[a];
              t.module = {
                name: t.name,
                module: S({}),
                evaluated: !0
              }, t.status = "linked", h(e.loader, t);
            }
            return e.resolve(n);
          }
          var i = f(e);
          i || e.resolve(n);
        }
      }
      function p(e, n, r) {
        var a = e.loader;
        e: if (n)
          if (e.loads[0].name == n.name)
            r = t(r, "Error loading " + n.name);
          else {
            for (var o = 0; o < e.loads.length; o++)
              for (var i = e.loads[o],
                  s = 0; s < i.dependencies.length; s++) {
                var d = i.dependencies[s];
                if (d.value == n.name) {
                  r = t(r, "Error loading " + n.name + ' as "' + d.key + '" from ' + i.name);
                  break e;
                }
              }
            r = t(r, "Error loading " + n.name + " from " + e.loads[0].name);
          }
        else
          r = t(r, "Error linking " + e.loads[0].name);
        for (var l = e.loads.concat([]),
            o = 0,
            u = l.length; o < u; o++) {
          var n = l[o];
          a.loaderObj.failed = a.loaderObj.failed || [], x.call(a.loaderObj.failed, n) == -1 && a.loaderObj.failed.push(n);
          var c = x.call(n.linkSets, e);
          if (n.linkSets.splice(c, 1), 0 == n.linkSets.length) {
            var f = x.call(e.loader.loads, n);
            f != -1 && e.loader.loads.splice(f, 1);
          }
        }
        e.reject(r);
      }
      function h(e, t) {
        if (e.loaderObj.trace) {
          e.loaderObj.loads || (e.loaderObj.loads = {});
          var n = {};
          t.dependencies.forEach(function(e) {
            n[e.key] = e.value;
          }), e.loaderObj.loads[t.name] = {
            name: t.name,
            deps: t.dependencies.map(function(e) {
              return e.key;
            }),
            depMap: n,
            address: t.address,
            metadata: t.metadata,
            source: t.source
          };
        }
        t.name && (e.modules[t.name] = t.module);
        var r = x.call(e.loads, t);
        r != -1 && e.loads.splice(r, 1);
        for (var a = 0,
            o = t.linkSets.length; a < o; a++)
          r = x.call(t.linkSets[a].loads, t), r != -1 && t.linkSets[a].loads.splice(r, 1);
        t.linkSets.splice(0, t.linkSets.length);
      }
      function g(e, t, r) {
        try {
          var a = t.execute();
        } catch (e) {
          return void r(t, e);
        }
        return a && a instanceof n ? a : void r(t, new TypeError("Execution must define a Module instance"));
      }
      function v(e, t, n) {
        var r = e._loader.importPromises;
        return r[t] = n.then(function(e) {
          return r[t] = void 0, e;
        }, function(e) {
          throw r[t] = void 0, e;
        });
      }
      function y(e, t) {
        var n = e.loader;
        if (e.loads.length)
          for (var r = e.loads.concat([]),
              a = 0; a < r.length; a++) {
            var o = r[a],
                i = g(e, o, t);
            if (!i)
              return;
            o.module = {
              name: o.name,
              module: i
            }, o.status = "linked", h(n, o);
          }
      }
      var b = 0;
      r.prototype = {
        constructor: r,
        define: function(e, t, n) {
          if (this._loader.importPromises[e])
            throw new TypeError("Module is already loading.");
          return v(this, e, new Promise(l({
            step: "translate",
            loader: this._loader,
            moduleName: e,
            moduleMetadata: n && n.metadata || {},
            moduleSource: t,
            moduleAddress: n && n.address
          })));
        },
        delete: function(e) {
          var t = this._loader;
          return delete t.importPromises[e], delete t.moduleRecords[e], !!t.modules[e] && delete t.modules[e];
        },
        get: function(e) {
          if (this._loader.modules[e])
            return this._loader.modules[e].module;
        },
        has: function(e) {
          return !!this._loader.modules[e];
        },
        import: function(e, t, n) {
          "object" == typeof t && (t = t.name);
          var r = this;
          return Promise.resolve(r.normalize(e, t)).then(function(e) {
            var t = r._loader;
            return t.modules[e] ? t.modules[e].module : t.importPromises[e] || v(r, e, a(t, e, {}).then(function(n) {
              return delete t.importPromises[e], n.module.module;
            }));
          });
        },
        load: function(e) {
          var t = this._loader;
          return t.modules[e] ? Promise.resolve() : t.importPromises[e] || v(this, e, new Promise(l({
            step: "locate",
            loader: t,
            moduleName: e,
            moduleMetadata: {},
            moduleSource: void 0,
            moduleAddress: void 0
          })).then(function() {
            delete t.importPromises[e];
          }));
        },
        module: function(t, n) {
          var r = e();
          r.address = n && n.address;
          var a = u(this._loader, r),
              o = Promise.resolve(t),
              i = this._loader,
              s = a.done.then(function() {
                return r.module.module;
              });
          return d(i, r, o), s;
        },
        newModule: function(e) {
          if ("object" != typeof e)
            throw new TypeError("Expected object");
          var t = new n,
              r = [];
          if (Object.getOwnPropertyNames && null != e)
            r = Object.getOwnPropertyNames(e);
          else
            for (var a in e)
              r.push(a);
          for (var o = 0; o < r.length; o++)
            (function(n) {
              w(t, n, {
                configurable: !1,
                enumerable: !0,
                get: function() {
                  return e[n];
                },
                set: function() {
                  throw new Error("Module exports cannot be changed externally.");
                }
              });
            })(r[o]);
          return Object.freeze && Object.freeze(t), t;
        },
        set: function(e, t) {
          if (!(t instanceof n))
            throw new TypeError("Loader.set(" + e + ", module) must be a module");
          this._loader.modules[e] = {module: t};
        },
        normalize: function(e, t, n) {},
        locate: function(e) {
          return e.name;
        },
        fetch: function(e) {},
        translate: function(e) {
          return e.source;
        },
        instantiate: function(e) {}
      };
      var S = r.prototype.newModule;
    }();
    var j;
    o.prototype = r.prototype, a.prototype = new o, a.prototype.constructor = a;
    var k,
        M = /^[^\/]+:\/\//,
        I = new P(S),
        R = !0;
    try {
      Object.getOwnPropertyDescriptor({a: 0}, "a");
    } catch (e) {
      R = !1;
    }
    var M = /^([^\/]+:\/\/|\/)/;
    a.prototype.normalize = function(e, t, n) {
      return e = e.match(M) || "." == e[0] ? new P(e, t || S).href : new P(u(this, e) || e, S).href;
    }, function() {
      function t() {
        if (s && "interactive" === s.script.readyState)
          return s.load;
        for (var e = 0; e < u.length; e++)
          if ("interactive" == u[e].script.readyState)
            return s = u[e], s.load;
      }
      function n(e, t) {
        return new Promise(function(e, n) {
          t.metadata.integrity && n(new Error("Subresource integrity checking is not supported in web workers.")), d = t;
          try {
            importScripts(t.address);
          } catch (e) {
            d = null, n(e);
          }
          d = null, t.metadata.entry || n(new Error(t.address + " did not call System.register or AMD define. If loading a global, ensure the meta format is set to global.")), e("");
        });
      }
      if ("undefined" != typeof document)
        var r = document.getElementsByTagName("head")[0];
      var a,
          o,
          s,
          d = null,
          l = r && function() {
            var e = document.createElement("script"),
                t = "undefined" != typeof opera && "[object Opera]" === opera.toString();
            return e.attachEvent && !(e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0) && !t;
          }(),
          u = [],
          c = 0,
          f = [];
      i("pushRegister_", function(e) {
        return function(n) {
          return !e.call(this, n) && (d ? this.reduceRegister_(d, n) : l ? this.reduceRegister_(t(), n) : c ? f.push(n) : this.reduceRegister_(null, n), !0);
        };
      }), i("fetch", function(t) {
        return function(i) {
          var d = this;
          return "json" != i.metadata.format && i.metadata.scriptLoad && (y || v) ? v ? n(d, i) : new Promise(function(t, n) {
            function m(e) {
              if (!g.readyState || "loaded" == g.readyState || "complete" == g.readyState) {
                if (c--, i.metadata.entry || f.length) {
                  if (!l) {
                    for (var r = 0; r < f.length; r++)
                      d.reduceRegister_(i, f[r]);
                    f = [];
                  }
                } else
                  d.reduceRegister_(i);
                h(), i.metadata.entry || i.metadata.bundle || n(new Error(i.name + " did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")), t("");
              }
            }
            function p(e) {
              h(), n(new Error("Unable to load script " + i.address));
            }
            function h() {
              if (e.System = a, e.require = o, g.detachEvent) {
                g.detachEvent("onreadystatechange", m);
                for (var t = 0; t < u.length; t++)
                  u[t].script == g && (s && s.script == g && (s = null), u.splice(t, 1));
              } else
                g.removeEventListener("load", m, !1), g.removeEventListener("error", p, !1);
              r.removeChild(g);
            }
            var g = document.createElement("script");
            g.async = !0, i.metadata.crossOrigin && (g.crossOrigin = i.metadata.crossOrigin), i.metadata.integrity && g.setAttribute("integrity", i.metadata.integrity), l ? (g.attachEvent("onreadystatechange", m), u.push({
              script: g,
              load: i
            })) : (g.addEventListener("load", m, !1), g.addEventListener("error", p, !1)), c++, a = e.System, o = e.require, g.src = i.address, r.appendChild(g);
          }) : t.call(this, i);
        };
      });
    }();
    var z = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
    !function() {
      function t(e, n, r) {
        if (r[e.groupIndex] = r[e.groupIndex] || [], x.call(r[e.groupIndex], e) == -1) {
          r[e.groupIndex].push(e);
          for (var a = 0,
              o = e.normalizedDeps.length; a < o; a++) {
            var i = e.normalizedDeps[a],
                s = n.defined[i];
            if (s && !s.evaluated) {
              var d = e.groupIndex + (s.declarative != e.declarative);
              if (null === s.groupIndex || s.groupIndex < d) {
                if (null !== s.groupIndex && (r[s.groupIndex].splice(x.call(r[s.groupIndex], s), 1), 0 == r[s.groupIndex].length))
                  throw new Error("Mixed dependency cycle detected");
                s.groupIndex = d;
              }
              t(s, n, r);
            }
          }
        }
      }
      function r(e, n, r) {
        if (!n.module) {
          n.groupIndex = 0;
          var a = [];
          t(n, r, a);
          for (var o = !!n.declarative == a.length % 2,
              i = a.length - 1; i >= 0; i--) {
            for (var s = a[i],
                d = 0; d < s.length; d++) {
              var u = s[d];
              o ? l(u, r) : m(u, r);
            }
            o = !o;
          }
        }
      }
      function o() {}
      function d(e, t) {
        return t[e] || (t[e] = {
          name: e,
          dependencies: [],
          exports: new o,
          importers: []
        });
      }
      function l(t, n) {
        if (!t.module) {
          var r = n._loader.moduleRecords,
              a = t.module = d(t.name, r),
              o = t.module.exports,
              i = t.declare.call(e, function(e, t) {
                if (a.locked = !0, "object" == typeof e)
                  for (var n in e)
                    o[n] = e[n];
                else
                  o[e] = t;
                for (var r = 0,
                    i = a.importers.length; r < i; r++) {
                  var s = a.importers[r];
                  if (!s.locked) {
                    var d = x.call(s.dependencies, a),
                        l = s.setters[d];
                    l && l(o);
                  }
                }
                return a.locked = !1, t;
              }, {id: t.name});
          if ("function" == typeof i && (i = {
            setters: [],
            execute: i
          }), i = i || {
            setters: [],
            execute: function() {}
          }, a.setters = i.setters, a.execute = i.execute, !a.setters || !a.execute)
            throw new TypeError("Invalid System.register form for " + t.name);
          for (var s = 0,
              u = t.normalizedDeps.length; s < u; s++) {
            var c,
                f = t.normalizedDeps[s],
                m = n.defined[f],
                p = r[f];
            p ? c = p.exports : m && !m.declarative ? c = m.esModule : m ? (l(m, n), p = m.module, c = p.exports) : c = n.get(f), p && p.importers ? (p.importers.push(a), a.dependencies.push(p)) : a.dependencies.push(null);
            for (var h = t.originalIndices[s],
                g = 0,
                v = h.length; g < v; ++g) {
              var y = h[g];
              a.setters[y] && a.setters[y](c);
            }
          }
        }
      }
      function u(e, t) {
        var n,
            r = t.defined[e];
        if (r)
          r.declarative ? p(e, r, [], t) : r.evaluated || m(r, t), n = r.module.exports;
        else if (n = t.get(e), !n)
          throw new Error("Unable to load dependency " + e + ".");
        return (!r || r.declarative) && n && n.__useDefault ? n.default : n;
      }
      function m(t, r) {
        if (!t.module) {
          var a = {},
              o = t.module = {
                exports: a,
                id: t.name
              };
          if (!t.executingRequire)
            for (var i = 0,
                s = t.normalizedDeps.length; i < s; i++) {
              var d = t.normalizedDeps[i],
                  l = r.defined[d];
              l && m(l, r);
            }
          t.evaluated = !0;
          var c = t.execute.call(e, function(e) {
            for (var n = 0,
                a = t.deps.length; n < a; n++)
              if (t.deps[n] == e)
                return u(t.normalizedDeps[n], r);
            var o = r.normalizeSync(e, t.name);
            if (x.call(t.normalizedDeps, o) != -1)
              return u(o, r);
            throw new Error("Module " + e + " not declared as a dependency of " + t.name);
          }, a, o);
          void 0 !== c && (o.exports = c), a = o.exports, a && (a.__esModule || a instanceof n) ? t.esModule = r.newModule(a) : t.esmExports && a !== e ? t.esModule = r.newModule(f(a)) : t.esModule = r.newModule({
            default: a,
            __useDefault: !0
          });
        }
      }
      function p(t, n, r, a) {
        if (n && !n.evaluated && n.declarative) {
          r.push(t);
          for (var o = 0,
              i = n.normalizedDeps.length; o < i; o++) {
            var s = n.normalizedDeps[o];
            x.call(r, s) == -1 && (a.defined[s] ? p(s, a.defined[s], r, a) : a.get(s));
          }
          n.evaluated || (n.evaluated = !0, n.module.execute.call(e));
        }
      }
      a.prototype.register = function(e, t, n) {
        if ("string" != typeof e && (n = t, t = e, e = null), "boolean" == typeof n)
          return this.registerDynamic.apply(this, arguments);
        var r = g();
        r.name = e && (this.decanonicalize || this.normalize).call(this, e), r.declarative = !0, r.deps = t, r.declare = n, this.pushRegister_({
          amd: !1,
          entry: r
        });
      }, a.prototype.registerDynamic = function(e, t, n, r) {
        "string" != typeof e && (r = n, n = t, t = e, e = null);
        var a = g();
        a.name = e && (this.decanonicalize || this.normalize).call(this, e), a.deps = t, a.execute = r, a.executingRequire = n, this.pushRegister_({
          amd: !1,
          entry: a
        });
      }, i("reduceRegister_", function() {
        return function(e, t) {
          if (t) {
            var n = t.entry,
                r = e && e.metadata;
            if (n.name && (n.name in this.defined || (this.defined[n.name] = n), r && (r.bundle = !0)), !n.name || e && !r.entry && n.name == e.name) {
              if (!r)
                throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");
              if (r.entry)
                throw "register" == r.format ? new Error("Multiple anonymous System.register calls in module " + e.name + ". If loading a bundle, ensure all the System.register calls are named.") : new Error("Module " + e.name + " interpreted as " + r.format + " module format, but called System.register.");
              r.format || (r.format = "register"), r.entry = n;
            }
          }
        };
      }), s(function(e) {
        return function() {
          e.call(this), this.defined = {}, this._loader.moduleRecords = {};
        };
      }), w(o, "toString", {value: function() {
          return "Module";
        }}), i("delete", function(e) {
        return function(t) {
          return delete this._loader.moduleRecords[t], delete this.defined[t], e.call(this, t);
        };
      }), i("fetch", function(e) {
        return function(t) {
          return this.defined[t.name] ? (t.metadata.format = "defined", "") : (t.metadata.deps = t.metadata.deps || [], e.call(this, t));
        };
      }), i("translate", function(e) {
        return function(t) {
          return t.metadata.deps = t.metadata.deps || [], Promise.resolve(e.apply(this, arguments)).then(function(e) {
            return ("register" == t.metadata.format || !t.metadata.format && h(t.source)) && (t.metadata.format = "register"), e;
          });
        };
      }), i("load", function(e) {
        return function(t) {
          var n = this,
              a = n.defined[t];
          return !a || a.deps.length ? e.apply(this, arguments) : (a.originalIndices = a.normalizedDeps = [], r(t, a, n), p(t, a, [], n), a.esModule || (a.esModule = n.newModule(a.module.exports)), n.trace || (n.defined[t] = void 0), n.set(t, a.esModule), Promise.resolve());
        };
      }), i("instantiate", function(e) {
        return function(t) {
          "detect" == t.metadata.format && (t.metadata.format = void 0), e.call(this, t);
          var n,
              a = this;
          if (a.defined[t.name])
            n = a.defined[t.name], n.declarative || (n.deps = n.deps.concat(t.metadata.deps)), n.deps = n.deps.concat(t.metadata.deps);
          else if (t.metadata.entry)
            n = t.metadata.entry, n.deps = n.deps.concat(t.metadata.deps);
          else if (!(a.builder && t.metadata.bundle || "register" != t.metadata.format && "esm" != t.metadata.format && "es6" != t.metadata.format)) {
            if ("undefined" != typeof __exec && __exec.call(a, t), !t.metadata.entry && !t.metadata.bundle)
              throw new Error(t.name + " detected as " + t.metadata.format + " but didn't execute.");
            n = t.metadata.entry, n && t.metadata.deps && (n.deps = n.deps.concat(t.metadata.deps));
          }
          n || (n = g(), n.deps = t.metadata.deps, n.execute = function() {}), a.defined[t.name] = n;
          var o = c(n.deps);
          n.deps = o.names, n.originalIndices = o.indices, n.name = t.name, n.esmExports = t.metadata.esmExports !== !1;
          for (var i = [],
              s = 0,
              d = n.deps.length; s < d; s++)
            i.push(Promise.resolve(a.normalize(n.deps[s], t.name)));
          return Promise.all(i).then(function(e) {
            return n.normalizedDeps = e, {
              deps: n.deps,
              execute: function() {
                return r(t.name, n, a), p(t.name, n, [], a), n.esModule || (n.esModule = a.newModule(n.module.exports)), a.trace || (a.defined[t.name] = void 0), n.esModule;
              }
            };
          });
        };
      });
    }(), function() {
      s(function(e) {
        return function() {
          e.call(this), this.bundles = {}, this._loader.loadedBundles = {};
        };
      }), i("locate", function(e) {
        return function(t) {
          var n = this,
              r = !1;
          if (!(t.name in n.defined))
            for (var a in n.bundles) {
              for (var o = 0; o < n.bundles[a].length; o++) {
                var i = n.bundles[a][o];
                if (i == t.name) {
                  r = !0;
                  break;
                }
                if (i.indexOf("*") != -1) {
                  var s = i.split("*");
                  if (2 != s.length) {
                    n.bundles[a].splice(o--, 1);
                    continue;
                  }
                  if (t.name.substring(0, s[0].length) == s[0] && t.name.substr(t.name.length - s[1].length, s[1].length) == s[1] && t.name.substr(s[0].length, t.name.length - s[1].length - s[0].length).indexOf("/") == -1) {
                    r = !0;
                    break;
                  }
                }
              }
              if (r)
                return n.import(a).then(function() {
                  return e.call(n, t);
                });
            }
          return e.call(n, t);
        };
      });
    }(), s(function(t) {
      return function() {
        t.apply(this, arguments), e.define = this.amdDefine;
      };
    }), i("fetch", function(e) {
      return function(t) {
        return t.metadata.scriptLoad = !0, e.call(this, t);
      };
    }), j = new a, e.SystemJS = j, j.version = "0.19.41 Register Only", "object" == typeof module && module.exports && "object" == typeof exports && (module.exports = j), e.System = j;
  }("undefined" != typeof self ? self : global);
})(require('process'));
