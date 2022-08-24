var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/types.js
var require_types = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/options.js
var require_options = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/options.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flatten = void 0;
    var defaultOpts = {
      xml: false,
      decodeEntities: true
    };
    exports.default = defaultOpts;
    var xmlModeDefault = {
      _useHtmlParser2: true,
      xmlMode: true
    };
    function flatten(options) {
      return (options === null || options === void 0 ? void 0 : options.xml) ? typeof options.xml === "boolean" ? xmlModeDefault : __assign(__assign({}, xmlModeDefault), options.xml) : options !== null && options !== void 0 ? options : void 0;
    }
    exports.flatten = flatten;
  }
});

// http-url:https://unpkg.com/domelementtype@%5E2.3.0/lib/index.js
var require_lib = __commonJS({
  "http-url:https://unpkg.com/domelementtype@%5E2.3.0/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports.ElementType || (exports.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports.isTag = isTag;
    exports.Root = ElementType.Root;
    exports.Text = ElementType.Text;
    exports.Directive = ElementType.Directive;
    exports.Comment = ElementType.Comment;
    exports.Script = ElementType.Script;
    exports.Style = ElementType.Style;
    exports.Tag = ElementType.Tag;
    exports.CDATA = ElementType.CDATA;
    exports.Doctype = ElementType.Doctype;
  }
});

// http-url:https://unpkg.com/domhandler@5.0.3/lib/node.js
var require_node = __commonJS({
  "http-url:https://unpkg.com/domhandler@5.0.3/lib/node.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.CDATA = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
    var domelementtype_1 = require_lib();
    var Node = function() {
      function Node2() {
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.startIndex = null;
        this.endIndex = null;
      }
      Object.defineProperty(Node2.prototype, "parentNode", {
        get: function() {
          return this.parent;
        },
        set: function(parent) {
          this.parent = parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node2.prototype, "previousSibling", {
        get: function() {
          return this.prev;
        },
        set: function(prev) {
          this.prev = prev;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node2.prototype, "nextSibling", {
        get: function() {
          return this.next;
        },
        set: function(next) {
          this.next = next;
        },
        enumerable: false,
        configurable: true
      });
      Node2.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        return cloneNode(this, recursive);
      };
      return Node2;
    }();
    exports.Node = Node;
    var DataNode = function(_super) {
      __extends(DataNode2, _super);
      function DataNode2(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
      }
      Object.defineProperty(DataNode2.prototype, "nodeValue", {
        get: function() {
          return this.data;
        },
        set: function(data) {
          this.data = data;
        },
        enumerable: false,
        configurable: true
      });
      return DataNode2;
    }(Node);
    exports.DataNode = DataNode;
    var Text = function(_super) {
      __extends(Text2, _super);
      function Text2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Text;
        return _this;
      }
      Object.defineProperty(Text2.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: false,
        configurable: true
      });
      return Text2;
    }(DataNode);
    exports.Text = Text;
    var Comment = function(_super) {
      __extends(Comment2, _super);
      function Comment2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Comment;
        return _this;
      }
      Object.defineProperty(Comment2.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: false,
        configurable: true
      });
      return Comment2;
    }(DataNode);
    exports.Comment = Comment;
    var ProcessingInstruction = function(_super) {
      __extends(ProcessingInstruction2, _super);
      function ProcessingInstruction2(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1.ElementType.Directive;
        return _this;
      }
      Object.defineProperty(ProcessingInstruction2.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      return ProcessingInstruction2;
    }(DataNode);
    exports.ProcessingInstruction = ProcessingInstruction;
    var NodeWithChildren = function(_super) {
      __extends(NodeWithChildren2, _super);
      function NodeWithChildren2(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
      }
      Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
        get: function() {
          var _a;
          return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
        get: function() {
          return this.children;
        },
        set: function(children) {
          this.children = children;
        },
        enumerable: false,
        configurable: true
      });
      return NodeWithChildren2;
    }(Node);
    exports.NodeWithChildren = NodeWithChildren;
    var CDATA = function(_super) {
      __extends(CDATA2, _super);
      function CDATA2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.CDATA;
        return _this;
      }
      Object.defineProperty(CDATA2.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: false,
        configurable: true
      });
      return CDATA2;
    }(NodeWithChildren);
    exports.CDATA = CDATA;
    var Document = function(_super) {
      __extends(Document2, _super);
      function Document2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1.ElementType.Root;
        return _this;
      }
      Object.defineProperty(Document2.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: false,
        configurable: true
      });
      return Document2;
    }(NodeWithChildren);
    exports.Document = Document;
    var Element = function(_super) {
      __extends(Element2, _super);
      function Element2(name, attribs, children, type) {
        if (children === void 0) {
          children = [];
        }
        if (type === void 0) {
          type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
      }
      Object.defineProperty(Element2.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Element2.prototype, "tagName", {
        get: function() {
          return this.name;
        },
        set: function(name) {
          this.name = name;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Element2.prototype, "attributes", {
        get: function() {
          var _this = this;
          return Object.keys(this.attribs).map(function(name) {
            var _a, _b;
            return {
              name,
              value: _this.attribs[name],
              namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
              prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
          });
        },
        enumerable: false,
        configurable: true
      });
      return Element2;
    }(NodeWithChildren);
    exports.Element = Element;
    function isTag(node) {
      return (0, domelementtype_1.isTag)(node);
    }
    exports.isTag = isTag;
    function isCDATA(node) {
      return node.type === domelementtype_1.ElementType.CDATA;
    }
    exports.isCDATA = isCDATA;
    function isText(node) {
      return node.type === domelementtype_1.ElementType.Text;
    }
    exports.isText = isText;
    function isComment(node) {
      return node.type === domelementtype_1.ElementType.Comment;
    }
    exports.isComment = isComment;
    function isDirective(node) {
      return node.type === domelementtype_1.ElementType.Directive;
    }
    exports.isDirective = isDirective;
    function isDocument(node) {
      return node.type === domelementtype_1.ElementType.Root;
    }
    exports.isDocument = isDocument;
    function hasChildren(node) {
      return Object.prototype.hasOwnProperty.call(node, "children");
    }
    exports.hasChildren = hasChildren;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      var result;
      if (isText(node)) {
        result = new Text(node.data);
      } else if (isComment(node)) {
        result = new Comment(node.data);
      } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
          return child.parent = clone_1;
        });
        if (node.namespace != null) {
          clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
          clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
          clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
      } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function(child) {
          return child.parent = clone_2;
        });
        result = clone_2;
      } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
          return child.parent = clone_3;
        });
        if (node["x-mode"]) {
          clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
      } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
          instruction["x-name"] = node["x-name"];
          instruction["x-publicId"] = node["x-publicId"];
          instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
      } else {
        throw new Error("Not implemented yet: ".concat(node.type));
      }
      result.startIndex = node.startIndex;
      result.endIndex = node.endIndex;
      if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
      }
      return result;
    }
    exports.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// http-url:https://unpkg.com/domhandler@%5E5.0.1/lib/index.js
var require_lib2 = __commonJS({
  "http-url:https://unpkg.com/domhandler@%5E5.0.1/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_js_1 = require_node();
    __exportStar(require_node(), exports);
    var defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = function() {
      function DomHandler2(callback, options, elementCB) {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
        if (typeof options === "function") {
          elementCB = options;
          options = defaultOpts;
        }
        if (typeof callback === "object") {
          options = callback;
          callback = void 0;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
      }
      DomHandler2.prototype.onparserinit = function(parser) {
        this.parser = parser;
      };
      DomHandler2.prototype.onreset = function() {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
      };
      DomHandler2.prototype.onend = function() {
        if (this.done)
          return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      };
      DomHandler2.prototype.onerror = function(error) {
        this.handleCallback(error);
      };
      DomHandler2.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
          elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
          this.elementCB(elem);
      };
      DomHandler2.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
        var element = new node_js_1.Element(name, attribs, void 0, type);
        this.addNode(element);
        this.tagStack.push(element);
      };
      DomHandler2.prototype.ontext = function(data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
          lastNode.data += data;
          if (this.options.withEndIndices) {
            lastNode.endIndex = this.parser.endIndex;
          }
        } else {
          var node = new node_js_1.Text(data);
          this.addNode(node);
          this.lastNode = node;
        }
      };
      DomHandler2.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
          this.lastNode.data += data;
          return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
      };
      DomHandler2.prototype.oncommentend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.oncdatastart = function() {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
      };
      DomHandler2.prototype.oncdataend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
      };
      DomHandler2.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") {
          this.callback(error, this.dom);
        } else if (error) {
          throw error;
        }
      };
      DomHandler2.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
          node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
          node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
          node.prev = previousSibling;
          previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
      };
      return DomHandler2;
    }();
    exports.DomHandler = DomHandler;
    exports.default = DomHandler;
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/generated/decode-data-html.js
var require_decode_data_html = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/generated/decode-data-html.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Uint16Array([7489, 60, 213, 305, 650, 1181, 1403, 1488, 1653, 1758, 1954, 2006, 2063, 2634, 2705, 3489, 3693, 3849, 3878, 4298, 4648, 4833, 5141, 5277, 5315, 5343, 5413, 0, 0, 0, 0, 0, 0, 5483, 5837, 6541, 7186, 7645, 8062, 8288, 8624, 8845, 9152, 9211, 9282, 10276, 10514, 11528, 11848, 12238, 12310, 12986, 13881, 14252, 14590, 14888, 14961, 15072, 15150, 2048, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 98, 102, 109, 115, 127, 132, 139, 144, 149, 152, 166, 179, 185, 200, 207, 108, 105, 103, 32827, 198, 16582, 80, 32827, 38, 16422, 99, 117, 116, 101, 32827, 193, 16577, 114, 101, 118, 101, 59, 16642, 256, 105, 121, 120, 125, 114, 99, 32827, 194, 16578, 59, 17424, 114, 59, 49152, 55349, 56580, 114, 97, 118, 101, 32827, 192, 16576, 112, 104, 97, 59, 17297, 97, 99, 114, 59, 16640, 100, 59, 27219, 256, 103, 112, 157, 161, 111, 110, 59, 16644, 102, 59, 49152, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 24673, 105, 110, 103, 32827, 197, 16581, 256, 99, 115, 190, 195, 114, 59, 49152, 55349, 56476, 105, 103, 110, 59, 25172, 105, 108, 100, 101, 32827, 195, 16579, 109, 108, 32827, 196, 16580, 1024, 97, 99, 101, 102, 111, 114, 115, 117, 229, 251, 254, 279, 284, 290, 295, 298, 256, 99, 114, 234, 242, 107, 115, 108, 97, 115, 104, 59, 25110, 374, 246, 248, 59, 27367, 101, 100, 59, 25350, 121, 59, 17425, 384, 99, 114, 116, 261, 267, 276, 97, 117, 115, 101, 59, 25141, 110, 111, 117, 108, 108, 105, 115, 59, 24876, 97, 59, 17298, 114, 59, 49152, 55349, 56581, 112, 102, 59, 49152, 55349, 56633, 101, 118, 101, 59, 17112, 99, 242, 275, 109, 112, 101, 113, 59, 25166, 1792, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 333, 337, 342, 384, 414, 418, 437, 439, 442, 476, 533, 627, 632, 638, 99, 121, 59, 17447, 80, 89, 32827, 169, 16553, 384, 99, 112, 121, 349, 354, 378, 117, 116, 101, 59, 16646, 256, 59, 105, 359, 360, 25298, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24901, 108, 101, 121, 115, 59, 24877, 512, 97, 101, 105, 111, 393, 398, 404, 408, 114, 111, 110, 59, 16652, 100, 105, 108, 32827, 199, 16583, 114, 99, 59, 16648, 110, 105, 110, 116, 59, 25136, 111, 116, 59, 16650, 256, 100, 110, 423, 429, 105, 108, 108, 97, 59, 16568, 116, 101, 114, 68, 111, 116, 59, 16567, 242, 383, 105, 59, 17319, 114, 99, 108, 101, 512, 68, 77, 80, 84, 455, 459, 465, 470, 111, 116, 59, 25241, 105, 110, 117, 115, 59, 25238, 108, 117, 115, 59, 25237, 105, 109, 101, 115, 59, 25239, 111, 256, 99, 115, 482, 504, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25138, 101, 67, 117, 114, 108, 121, 256, 68, 81, 515, 527, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24605, 117, 111, 116, 101, 59, 24601, 512, 108, 110, 112, 117, 542, 552, 583, 597, 111, 110, 256, 59, 101, 549, 550, 25143, 59, 27252, 384, 103, 105, 116, 559, 566, 570, 114, 117, 101, 110, 116, 59, 25185, 110, 116, 59, 25135, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25134, 256, 102, 114, 588, 590, 59, 24834, 111, 100, 117, 99, 116, 59, 25104, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25139, 111, 115, 115, 59, 27183, 99, 114, 59, 49152, 55349, 56478, 112, 256, 59, 67, 644, 645, 25299, 97, 112, 59, 25165, 1408, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 672, 684, 688, 692, 696, 715, 727, 737, 742, 819, 1165, 256, 59, 111, 377, 677, 116, 114, 97, 104, 100, 59, 26897, 99, 121, 59, 17410, 99, 121, 59, 17413, 99, 121, 59, 17423, 384, 103, 114, 115, 703, 708, 711, 103, 101, 114, 59, 24609, 114, 59, 24993, 104, 118, 59, 27364, 256, 97, 121, 720, 725, 114, 111, 110, 59, 16654, 59, 17428, 108, 256, 59, 116, 733, 734, 25095, 97, 59, 17300, 114, 59, 49152, 55349, 56583, 256, 97, 102, 747, 807, 256, 99, 109, 752, 802, 114, 105, 116, 105, 99, 97, 108, 512, 65, 68, 71, 84, 768, 774, 790, 796, 99, 117, 116, 101, 59, 16564, 111, 372, 779, 781, 59, 17113, 98, 108, 101, 65, 99, 117, 116, 101, 59, 17117, 114, 97, 118, 101, 59, 16480, 105, 108, 100, 101, 59, 17116, 111, 110, 100, 59, 25284, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24902, 1136, 829, 0, 0, 0, 834, 852, 0, 1029, 102, 59, 49152, 55349, 56635, 384, 59, 68, 69, 840, 841, 845, 16552, 111, 116, 59, 24796, 113, 117, 97, 108, 59, 25168, 98, 108, 101, 768, 67, 68, 76, 82, 85, 86, 867, 882, 898, 975, 994, 1016, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 236, 569, 111, 628, 889, 0, 0, 891, 187, 841, 110, 65, 114, 114, 111, 119, 59, 25043, 256, 101, 111, 903, 932, 102, 116, 384, 65, 82, 84, 912, 918, 929, 114, 114, 111, 119, 59, 25040, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25044, 101, 229, 714, 110, 103, 256, 76, 82, 939, 964, 101, 102, 116, 256, 65, 82, 947, 953, 114, 114, 111, 119, 59, 26616, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26618, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26617, 105, 103, 104, 116, 256, 65, 84, 984, 990, 114, 114, 111, 119, 59, 25042, 101, 101, 59, 25256, 112, 577, 1001, 0, 0, 1007, 114, 114, 111, 119, 59, 25041, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25045, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25125, 110, 768, 65, 66, 76, 82, 84, 97, 1042, 1066, 1072, 1118, 1151, 892, 114, 114, 111, 119, 384, 59, 66, 85, 1053, 1054, 1058, 24979, 97, 114, 59, 26899, 112, 65, 114, 114, 111, 119, 59, 25077, 114, 101, 118, 101, 59, 17169, 101, 102, 116, 722, 1082, 0, 1094, 0, 1104, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 26960, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26974, 101, 99, 116, 111, 114, 256, 59, 66, 1113, 1114, 25021, 97, 114, 59, 26966, 105, 103, 104, 116, 468, 1127, 0, 1137, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26975, 101, 99, 116, 111, 114, 256, 59, 66, 1146, 1147, 25025, 97, 114, 59, 26967, 101, 101, 256, 59, 65, 1158, 1159, 25252, 114, 114, 111, 119, 59, 24999, 256, 99, 116, 1170, 1175, 114, 59, 49152, 55349, 56479, 114, 111, 107, 59, 16656, 2048, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1213, 1216, 1220, 1227, 1246, 1250, 1255, 1262, 1269, 1313, 1327, 1334, 1362, 1373, 1376, 1381, 71, 59, 16714, 72, 32827, 208, 16592, 99, 117, 116, 101, 32827, 201, 16585, 384, 97, 105, 121, 1234, 1239, 1244, 114, 111, 110, 59, 16666, 114, 99, 32827, 202, 16586, 59, 17453, 111, 116, 59, 16662, 114, 59, 49152, 55349, 56584, 114, 97, 118, 101, 32827, 200, 16584, 101, 109, 101, 110, 116, 59, 25096, 256, 97, 112, 1274, 1278, 99, 114, 59, 16658, 116, 121, 595, 1286, 0, 0, 1298, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26107, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26027, 256, 103, 112, 1318, 1322, 111, 110, 59, 16664, 102, 59, 49152, 55349, 56636, 115, 105, 108, 111, 110, 59, 17301, 117, 256, 97, 105, 1340, 1353, 108, 256, 59, 84, 1346, 1347, 27253, 105, 108, 100, 101, 59, 25154, 108, 105, 98, 114, 105, 117, 109, 59, 25036, 256, 99, 105, 1367, 1370, 114, 59, 24880, 109, 59, 27251, 97, 59, 17303, 109, 108, 32827, 203, 16587, 256, 105, 112, 1386, 1391, 115, 116, 115, 59, 25091, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 24903, 640, 99, 102, 105, 111, 115, 1413, 1416, 1421, 1458, 1484, 121, 59, 17444, 114, 59, 49152, 55349, 56585, 108, 108, 101, 100, 595, 1431, 0, 0, 1443, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26108, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26026, 880, 1466, 0, 1471, 0, 0, 1476, 102, 59, 49152, 55349, 56637, 65, 108, 108, 59, 25088, 114, 105, 101, 114, 116, 114, 102, 59, 24881, 99, 242, 1483, 1536, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1512, 1516, 1519, 1530, 1536, 1554, 1558, 1563, 1565, 1571, 1644, 1650, 99, 121, 59, 17411, 32827, 62, 16446, 109, 109, 97, 256, 59, 100, 1527, 1528, 17299, 59, 17372, 114, 101, 118, 101, 59, 16670, 384, 101, 105, 121, 1543, 1548, 1552, 100, 105, 108, 59, 16674, 114, 99, 59, 16668, 59, 17427, 111, 116, 59, 16672, 114, 59, 49152, 55349, 56586, 59, 25305, 112, 102, 59, 49152, 55349, 56638, 101, 97, 116, 101, 114, 768, 69, 70, 71, 76, 83, 84, 1589, 1604, 1614, 1622, 1627, 1638, 113, 117, 97, 108, 256, 59, 76, 1598, 1599, 25189, 101, 115, 115, 59, 25307, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25191, 114, 101, 97, 116, 101, 114, 59, 27298, 101, 115, 115, 59, 25207, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27262, 105, 108, 100, 101, 59, 25203, 99, 114, 59, 49152, 55349, 56482, 59, 25195, 1024, 65, 97, 99, 102, 105, 111, 115, 117, 1669, 1675, 1686, 1691, 1694, 1706, 1726, 1738, 82, 68, 99, 121, 59, 17450, 256, 99, 116, 1680, 1684, 101, 107, 59, 17095, 59, 16478, 105, 114, 99, 59, 16676, 114, 59, 24844, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 24843, 496, 1711, 0, 1714, 102, 59, 24845, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 25856, 256, 99, 116, 1731, 1733, 242, 1705, 114, 111, 107, 59, 16678, 109, 112, 324, 1744, 1752, 111, 119, 110, 72, 117, 109, 240, 303, 113, 117, 97, 108, 59, 25167, 1792, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1786, 1790, 1795, 1799, 1806, 1818, 1822, 1825, 1832, 1860, 1912, 1931, 1935, 1941, 99, 121, 59, 17429, 108, 105, 103, 59, 16690, 99, 121, 59, 17409, 99, 117, 116, 101, 32827, 205, 16589, 256, 105, 121, 1811, 1816, 114, 99, 32827, 206, 16590, 59, 17432, 111, 116, 59, 16688, 114, 59, 24849, 114, 97, 118, 101, 32827, 204, 16588, 384, 59, 97, 112, 1824, 1839, 1855, 256, 99, 103, 1844, 1847, 114, 59, 16682, 105, 110, 97, 114, 121, 73, 59, 24904, 108, 105, 101, 243, 989, 500, 1865, 0, 1890, 256, 59, 101, 1869, 1870, 25132, 256, 103, 114, 1875, 1880, 114, 97, 108, 59, 25131, 115, 101, 99, 116, 105, 111, 110, 59, 25282, 105, 115, 105, 98, 108, 101, 256, 67, 84, 1900, 1906, 111, 109, 109, 97, 59, 24675, 105, 109, 101, 115, 59, 24674, 384, 103, 112, 116, 1919, 1923, 1928, 111, 110, 59, 16686, 102, 59, 49152, 55349, 56640, 97, 59, 17305, 99, 114, 59, 24848, 105, 108, 100, 101, 59, 16680, 491, 1946, 0, 1950, 99, 121, 59, 17414, 108, 32827, 207, 16591, 640, 99, 102, 111, 115, 117, 1964, 1975, 1980, 1986, 2e3, 256, 105, 121, 1969, 1973, 114, 99, 59, 16692, 59, 17433, 114, 59, 49152, 55349, 56589, 112, 102, 59, 49152, 55349, 56641, 483, 1991, 0, 1996, 114, 59, 49152, 55349, 56485, 114, 99, 121, 59, 17416, 107, 99, 121, 59, 17412, 896, 72, 74, 97, 99, 102, 111, 115, 2020, 2024, 2028, 2033, 2045, 2050, 2056, 99, 121, 59, 17445, 99, 121, 59, 17420, 112, 112, 97, 59, 17306, 256, 101, 121, 2038, 2043, 100, 105, 108, 59, 16694, 59, 17434, 114, 59, 49152, 55349, 56590, 112, 102, 59, 49152, 55349, 56642, 99, 114, 59, 49152, 55349, 56486, 1408, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2085, 2089, 2092, 2128, 2147, 2483, 2488, 2503, 2509, 2615, 2631, 99, 121, 59, 17417, 32827, 60, 16444, 640, 99, 109, 110, 112, 114, 2103, 2108, 2113, 2116, 2125, 117, 116, 101, 59, 16697, 98, 100, 97, 59, 17307, 103, 59, 26602, 108, 97, 99, 101, 116, 114, 102, 59, 24850, 114, 59, 24990, 384, 97, 101, 121, 2135, 2140, 2145, 114, 111, 110, 59, 16701, 100, 105, 108, 59, 16699, 59, 17435, 256, 102, 115, 2152, 2416, 116, 1280, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2174, 2217, 2225, 2272, 2278, 2300, 2351, 2395, 912, 2410, 256, 110, 114, 2179, 2191, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26600, 114, 111, 119, 384, 59, 66, 82, 2201, 2202, 2206, 24976, 97, 114, 59, 25060, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25030, 101, 105, 108, 105, 110, 103, 59, 25352, 111, 501, 2231, 0, 2243, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26598, 110, 468, 2248, 0, 2258, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26977, 101, 99, 116, 111, 114, 256, 59, 66, 2267, 2268, 25027, 97, 114, 59, 26969, 108, 111, 111, 114, 59, 25354, 105, 103, 104, 116, 256, 65, 86, 2287, 2293, 114, 114, 111, 119, 59, 24980, 101, 99, 116, 111, 114, 59, 26958, 256, 101, 114, 2305, 2327, 101, 384, 59, 65, 86, 2313, 2314, 2320, 25251, 114, 114, 111, 119, 59, 24996, 101, 99, 116, 111, 114, 59, 26970, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 2340, 2341, 2345, 25266, 97, 114, 59, 27087, 113, 117, 97, 108, 59, 25268, 112, 384, 68, 84, 86, 2359, 2370, 2380, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26961, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26976, 101, 99, 116, 111, 114, 256, 59, 66, 2390, 2391, 25023, 97, 114, 59, 26968, 101, 99, 116, 111, 114, 256, 59, 66, 2405, 2406, 25020, 97, 114, 59, 26962, 105, 103, 104, 116, 225, 924, 115, 768, 69, 70, 71, 76, 83, 84, 2430, 2443, 2453, 2461, 2466, 2477, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 25306, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25190, 114, 101, 97, 116, 101, 114, 59, 25206, 101, 115, 115, 59, 27297, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27261, 105, 108, 100, 101, 59, 25202, 114, 59, 49152, 55349, 56591, 256, 59, 101, 2493, 2494, 25304, 102, 116, 97, 114, 114, 111, 119, 59, 25050, 105, 100, 111, 116, 59, 16703, 384, 110, 112, 119, 2516, 2582, 2587, 103, 512, 76, 82, 108, 114, 2526, 2551, 2562, 2576, 101, 102, 116, 256, 65, 82, 2534, 2540, 114, 114, 111, 119, 59, 26613, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26615, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26614, 101, 102, 116, 256, 97, 114, 947, 2570, 105, 103, 104, 116, 225, 959, 105, 103, 104, 116, 225, 970, 102, 59, 49152, 55349, 56643, 101, 114, 256, 76, 82, 2594, 2604, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24985, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24984, 384, 99, 104, 116, 2622, 2624, 2626, 242, 2124, 59, 25008, 114, 111, 107, 59, 16705, 59, 25194, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 2650, 2653, 2656, 2679, 2684, 2693, 2699, 2702, 112, 59, 26885, 121, 59, 17436, 256, 100, 108, 2661, 2671, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24671, 108, 105, 110, 116, 114, 102, 59, 24883, 114, 59, 49152, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 25107, 112, 102, 59, 49152, 55349, 56644, 99, 242, 2678, 59, 17308, 1152, 74, 97, 99, 101, 102, 111, 115, 116, 117, 2723, 2727, 2733, 2752, 2836, 2841, 3473, 3479, 3486, 99, 121, 59, 17418, 99, 117, 116, 101, 59, 16707, 384, 97, 101, 121, 2740, 2745, 2750, 114, 111, 110, 59, 16711, 100, 105, 108, 59, 16709, 59, 17437, 384, 103, 115, 119, 2759, 2800, 2830, 97, 116, 105, 118, 101, 384, 77, 84, 86, 2771, 2783, 2792, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24587, 104, 105, 256, 99, 110, 2790, 2776, 235, 2777, 101, 114, 121, 84, 104, 105, 238, 2777, 116, 101, 100, 256, 71, 76, 2808, 2822, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 242, 1651, 101, 115, 115, 76, 101, 115, 243, 2632, 76, 105, 110, 101, 59, 16394, 114, 59, 49152, 55349, 56593, 512, 66, 110, 112, 116, 2850, 2856, 2871, 2874, 114, 101, 97, 107, 59, 24672, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 16544, 102, 59, 24853, 1664, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 2901, 2902, 2922, 2940, 2977, 3051, 3076, 3166, 3204, 3238, 3288, 3425, 3461, 27372, 256, 111, 117, 2907, 2916, 110, 103, 114, 117, 101, 110, 116, 59, 25186, 112, 67, 97, 112, 59, 25197, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25126, 384, 108, 113, 120, 2947, 2954, 2971, 101, 109, 101, 110, 116, 59, 25097, 117, 97, 108, 256, 59, 84, 2962, 2963, 25184, 105, 108, 100, 101, 59, 49152, 8770, 824, 105, 115, 116, 115, 59, 25092, 114, 101, 97, 116, 101, 114, 896, 59, 69, 70, 71, 76, 83, 84, 2998, 2999, 3005, 3017, 3027, 3032, 3045, 25199, 113, 117, 97, 108, 59, 25201, 117, 108, 108, 69, 113, 117, 97, 108, 59, 49152, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 49152, 8811, 824, 101, 115, 115, 59, 25209, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10878, 824, 105, 108, 100, 101, 59, 25205, 117, 109, 112, 324, 3058, 3069, 111, 119, 110, 72, 117, 109, 112, 59, 49152, 8782, 824, 113, 117, 97, 108, 59, 49152, 8783, 824, 101, 256, 102, 115, 3082, 3111, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3098, 3099, 3105, 25322, 97, 114, 59, 49152, 10703, 824, 113, 117, 97, 108, 59, 25324, 115, 768, 59, 69, 71, 76, 83, 84, 3125, 3126, 3132, 3140, 3147, 3160, 25198, 113, 117, 97, 108, 59, 25200, 114, 101, 97, 116, 101, 114, 59, 25208, 101, 115, 115, 59, 49152, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10877, 824, 105, 108, 100, 101, 59, 25204, 101, 115, 116, 101, 100, 256, 71, 76, 3176, 3193, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 49152, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 49152, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 384, 59, 69, 83, 3218, 3219, 3227, 25216, 113, 117, 97, 108, 59, 49152, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25312, 256, 101, 105, 3243, 3257, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 25100, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3275, 3276, 3282, 25323, 97, 114, 59, 49152, 10704, 824, 113, 117, 97, 108, 59, 25325, 256, 113, 117, 3293, 3340, 117, 97, 114, 101, 83, 117, 256, 98, 112, 3304, 3321, 115, 101, 116, 256, 59, 69, 3312, 3315, 49152, 8847, 824, 113, 117, 97, 108, 59, 25314, 101, 114, 115, 101, 116, 256, 59, 69, 3331, 3334, 49152, 8848, 824, 113, 117, 97, 108, 59, 25315, 384, 98, 99, 112, 3347, 3364, 3406, 115, 101, 116, 256, 59, 69, 3355, 3358, 49152, 8834, 8402, 113, 117, 97, 108, 59, 25224, 99, 101, 101, 100, 115, 512, 59, 69, 83, 84, 3378, 3379, 3387, 3398, 25217, 113, 117, 97, 108, 59, 49152, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25313, 105, 108, 100, 101, 59, 49152, 8831, 824, 101, 114, 115, 101, 116, 256, 59, 69, 3416, 3419, 49152, 8835, 8402, 113, 117, 97, 108, 59, 25225, 105, 108, 100, 101, 512, 59, 69, 70, 84, 3438, 3439, 3445, 3455, 25153, 113, 117, 97, 108, 59, 25156, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25159, 105, 108, 100, 101, 59, 25161, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25124, 99, 114, 59, 49152, 55349, 56489, 105, 108, 100, 101, 32827, 209, 16593, 59, 17309, 1792, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3517, 3522, 3529, 3541, 3547, 3552, 3559, 3580, 3586, 3616, 3618, 3634, 3647, 3652, 108, 105, 103, 59, 16722, 99, 117, 116, 101, 32827, 211, 16595, 256, 105, 121, 3534, 3539, 114, 99, 32827, 212, 16596, 59, 17438, 98, 108, 97, 99, 59, 16720, 114, 59, 49152, 55349, 56594, 114, 97, 118, 101, 32827, 210, 16594, 384, 97, 101, 105, 3566, 3570, 3574, 99, 114, 59, 16716, 103, 97, 59, 17321, 99, 114, 111, 110, 59, 17311, 112, 102, 59, 49152, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 256, 68, 81, 3598, 3610, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24604, 117, 111, 116, 101, 59, 24600, 59, 27220, 256, 99, 108, 3623, 3628, 114, 59, 49152, 55349, 56490, 97, 115, 104, 32827, 216, 16600, 105, 364, 3639, 3644, 100, 101, 32827, 213, 16597, 101, 115, 59, 27191, 109, 108, 32827, 214, 16598, 101, 114, 256, 66, 80, 3659, 3680, 256, 97, 114, 3664, 3667, 114, 59, 24638, 97, 99, 256, 101, 107, 3674, 3676, 59, 25566, 101, 116, 59, 25524, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25564, 1152, 97, 99, 102, 104, 105, 108, 111, 114, 115, 3711, 3719, 3722, 3727, 3730, 3732, 3741, 3760, 3836, 114, 116, 105, 97, 108, 68, 59, 25090, 121, 59, 17439, 114, 59, 49152, 55349, 56595, 105, 59, 17318, 59, 17312, 117, 115, 77, 105, 110, 117, 115, 59, 16561, 256, 105, 112, 3746, 3757, 110, 99, 97, 114, 101, 112, 108, 97, 110, 229, 1693, 102, 59, 24857, 512, 59, 101, 105, 111, 3769, 3770, 3808, 3812, 27323, 99, 101, 100, 101, 115, 512, 59, 69, 83, 84, 3784, 3785, 3791, 3802, 25210, 113, 117, 97, 108, 59, 27311, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25212, 105, 108, 100, 101, 59, 25214, 109, 101, 59, 24627, 256, 100, 112, 3817, 3822, 117, 99, 116, 59, 25103, 111, 114, 116, 105, 111, 110, 256, 59, 97, 549, 3833, 108, 59, 25117, 256, 99, 105, 3841, 3846, 114, 59, 49152, 55349, 56491, 59, 17320, 512, 85, 102, 111, 115, 3857, 3862, 3867, 3871, 79, 84, 32827, 34, 16418, 114, 59, 49152, 55349, 56596, 112, 102, 59, 24858, 99, 114, 59, 49152, 55349, 56492, 1536, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 3902, 3907, 3911, 3936, 3955, 4007, 4010, 4013, 4246, 4265, 4276, 4286, 97, 114, 114, 59, 26896, 71, 32827, 174, 16558, 384, 99, 110, 114, 3918, 3923, 3926, 117, 116, 101, 59, 16724, 103, 59, 26603, 114, 256, 59, 116, 3932, 3933, 24992, 108, 59, 26902, 384, 97, 101, 121, 3943, 3948, 3953, 114, 111, 110, 59, 16728, 100, 105, 108, 59, 16726, 59, 17440, 256, 59, 118, 3960, 3961, 24860, 101, 114, 115, 101, 256, 69, 85, 3970, 3993, 256, 108, 113, 3975, 3982, 101, 109, 101, 110, 116, 59, 25099, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 25035, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26991, 114, 187, 3961, 111, 59, 17313, 103, 104, 116, 1024, 65, 67, 68, 70, 84, 85, 86, 97, 4033, 4075, 4083, 4130, 4136, 4187, 4231, 984, 256, 110, 114, 4038, 4050, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26601, 114, 111, 119, 384, 59, 66, 76, 4060, 4061, 4065, 24978, 97, 114, 59, 25061, 101, 102, 116, 65, 114, 114, 111, 119, 59, 25028, 101, 105, 108, 105, 110, 103, 59, 25353, 111, 501, 4089, 0, 4101, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26599, 110, 468, 4106, 0, 4116, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26973, 101, 99, 116, 111, 114, 256, 59, 66, 4125, 4126, 25026, 97, 114, 59, 26965, 108, 111, 111, 114, 59, 25355, 256, 101, 114, 4141, 4163, 101, 384, 59, 65, 86, 4149, 4150, 4156, 25250, 114, 114, 111, 119, 59, 24998, 101, 99, 116, 111, 114, 59, 26971, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 4176, 4177, 4181, 25267, 97, 114, 59, 27088, 113, 117, 97, 108, 59, 25269, 112, 384, 68, 84, 86, 4195, 4206, 4216, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26959, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26972, 101, 99, 116, 111, 114, 256, 59, 66, 4226, 4227, 25022, 97, 114, 59, 26964, 101, 99, 116, 111, 114, 256, 59, 66, 4241, 4242, 25024, 97, 114, 59, 26963, 256, 112, 117, 4251, 4254, 102, 59, 24861, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 26992, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25051, 256, 99, 104, 4281, 4284, 114, 59, 24859, 59, 25009, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 27124, 1664, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4324, 4337, 4343, 4349, 4377, 4382, 4433, 4438, 4449, 4455, 4533, 4539, 4543, 256, 67, 99, 4329, 4334, 72, 99, 121, 59, 17449, 121, 59, 17448, 70, 84, 99, 121, 59, 17452, 99, 117, 116, 101, 59, 16730, 640, 59, 97, 101, 105, 121, 4360, 4361, 4366, 4371, 4375, 27324, 114, 111, 110, 59, 16736, 100, 105, 108, 59, 16734, 114, 99, 59, 16732, 59, 17441, 114, 59, 49152, 55349, 56598, 111, 114, 116, 512, 68, 76, 82, 85, 4394, 4404, 4414, 4425, 111, 119, 110, 65, 114, 114, 111, 119, 187, 1054, 101, 102, 116, 65, 114, 114, 111, 119, 187, 2202, 105, 103, 104, 116, 65, 114, 114, 111, 119, 187, 4061, 112, 65, 114, 114, 111, 119, 59, 24977, 103, 109, 97, 59, 17315, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 25112, 112, 102, 59, 49152, 55349, 56650, 626, 4461, 0, 0, 4464, 116, 59, 25114, 97, 114, 101, 512, 59, 73, 83, 85, 4475, 4476, 4489, 4527, 26017, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 25235, 117, 256, 98, 112, 4495, 4510, 115, 101, 116, 256, 59, 69, 4503, 4504, 25231, 113, 117, 97, 108, 59, 25233, 101, 114, 115, 101, 116, 256, 59, 69, 4520, 4521, 25232, 113, 117, 97, 108, 59, 25234, 110, 105, 111, 110, 59, 25236, 99, 114, 59, 49152, 55349, 56494, 97, 114, 59, 25286, 512, 98, 99, 109, 112, 4552, 4571, 4617, 4619, 256, 59, 115, 4557, 4558, 25296, 101, 116, 256, 59, 69, 4557, 4565, 113, 117, 97, 108, 59, 25222, 256, 99, 104, 4576, 4613, 101, 101, 100, 115, 512, 59, 69, 83, 84, 4589, 4590, 4596, 4607, 25211, 113, 117, 97, 108, 59, 27312, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25213, 105, 108, 100, 101, 59, 25215, 84, 104, 225, 3980, 59, 25105, 384, 59, 101, 115, 4626, 4627, 4643, 25297, 114, 115, 101, 116, 256, 59, 69, 4636, 4637, 25219, 113, 117, 97, 108, 59, 25223, 101, 116, 187, 4627, 1408, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 4670, 4676, 4681, 4693, 4702, 4721, 4726, 4767, 4802, 4808, 4817, 79, 82, 78, 32827, 222, 16606, 65, 68, 69, 59, 24866, 256, 72, 99, 4686, 4690, 99, 121, 59, 17419, 121, 59, 17446, 256, 98, 117, 4698, 4700, 59, 16393, 59, 17316, 384, 97, 101, 121, 4709, 4714, 4719, 114, 111, 110, 59, 16740, 100, 105, 108, 59, 16738, 59, 17442, 114, 59, 49152, 55349, 56599, 256, 101, 105, 4731, 4745, 498, 4736, 0, 4743, 101, 102, 111, 114, 101, 59, 25140, 97, 59, 17304, 256, 99, 110, 4750, 4760, 107, 83, 112, 97, 99, 101, 59, 49152, 8287, 8202, 83, 112, 97, 99, 101, 59, 24585, 108, 100, 101, 512, 59, 69, 70, 84, 4779, 4780, 4786, 4796, 25148, 113, 117, 97, 108, 59, 25155, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25157, 105, 108, 100, 101, 59, 25160, 112, 102, 59, 49152, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 24795, 256, 99, 116, 4822, 4827, 114, 59, 49152, 55349, 56495, 114, 111, 107, 59, 16742, 2785, 4855, 4878, 4890, 4902, 0, 4908, 4913, 0, 0, 0, 0, 0, 4920, 4925, 4983, 4997, 0, 5119, 5124, 5130, 5136, 256, 99, 114, 4859, 4865, 117, 116, 101, 32827, 218, 16602, 114, 256, 59, 111, 4871, 4872, 24991, 99, 105, 114, 59, 26953, 114, 483, 4883, 0, 4886, 121, 59, 17422, 118, 101, 59, 16748, 256, 105, 121, 4894, 4899, 114, 99, 32827, 219, 16603, 59, 17443, 98, 108, 97, 99, 59, 16752, 114, 59, 49152, 55349, 56600, 114, 97, 118, 101, 32827, 217, 16601, 97, 99, 114, 59, 16746, 256, 100, 105, 4929, 4969, 101, 114, 256, 66, 80, 4936, 4957, 256, 97, 114, 4941, 4944, 114, 59, 16479, 97, 99, 256, 101, 107, 4951, 4953, 59, 25567, 101, 116, 59, 25525, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25565, 111, 110, 256, 59, 80, 4976, 4977, 25283, 108, 117, 115, 59, 25230, 256, 103, 112, 4987, 4991, 111, 110, 59, 16754, 102, 59, 49152, 55349, 56652, 1024, 65, 68, 69, 84, 97, 100, 112, 115, 5013, 5038, 5048, 5060, 1e3, 5074, 5079, 5107, 114, 114, 111, 119, 384, 59, 66, 68, 4432, 5024, 5028, 97, 114, 59, 26898, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25029, 111, 119, 110, 65, 114, 114, 111, 119, 59, 24981, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26990, 101, 101, 256, 59, 65, 5067, 5068, 25253, 114, 114, 111, 119, 59, 24997, 111, 119, 110, 225, 1011, 101, 114, 256, 76, 82, 5086, 5096, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24982, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24983, 105, 256, 59, 108, 5113, 5114, 17362, 111, 110, 59, 17317, 105, 110, 103, 59, 16750, 99, 114, 59, 49152, 55349, 56496, 105, 108, 100, 101, 59, 16744, 109, 108, 32827, 220, 16604, 1152, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5159, 5164, 5168, 5171, 5182, 5253, 5258, 5264, 5270, 97, 115, 104, 59, 25259, 97, 114, 59, 27371, 121, 59, 17426, 97, 115, 104, 256, 59, 108, 5179, 5180, 25257, 59, 27366, 256, 101, 114, 5187, 5189, 59, 25281, 384, 98, 116, 121, 5196, 5200, 5242, 97, 114, 59, 24598, 256, 59, 105, 5199, 5205, 99, 97, 108, 512, 66, 76, 83, 84, 5217, 5221, 5226, 5236, 97, 114, 59, 25123, 105, 110, 101, 59, 16508, 101, 112, 97, 114, 97, 116, 111, 114, 59, 26456, 105, 108, 100, 101, 59, 25152, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 24586, 114, 59, 49152, 55349, 56601, 112, 102, 59, 49152, 55349, 56653, 99, 114, 59, 49152, 55349, 56497, 100, 97, 115, 104, 59, 25258, 640, 99, 101, 102, 111, 115, 5287, 5292, 5297, 5302, 5308, 105, 114, 99, 59, 16756, 100, 103, 101, 59, 25280, 114, 59, 49152, 55349, 56602, 112, 102, 59, 49152, 55349, 56654, 99, 114, 59, 49152, 55349, 56498, 512, 102, 105, 111, 115, 5323, 5328, 5330, 5336, 114, 59, 49152, 55349, 56603, 59, 17310, 112, 102, 59, 49152, 55349, 56655, 99, 114, 59, 49152, 55349, 56499, 1152, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5361, 5365, 5369, 5373, 5380, 5391, 5396, 5402, 5408, 99, 121, 59, 17455, 99, 121, 59, 17415, 99, 121, 59, 17454, 99, 117, 116, 101, 32827, 221, 16605, 256, 105, 121, 5385, 5389, 114, 99, 59, 16758, 59, 17451, 114, 59, 49152, 55349, 56604, 112, 102, 59, 49152, 55349, 56656, 99, 114, 59, 49152, 55349, 56500, 109, 108, 59, 16760, 1024, 72, 97, 99, 100, 101, 102, 111, 115, 5429, 5433, 5439, 5451, 5455, 5469, 5472, 5476, 99, 121, 59, 17430, 99, 117, 116, 101, 59, 16761, 256, 97, 121, 5444, 5449, 114, 111, 110, 59, 16765, 59, 17431, 111, 116, 59, 16763, 498, 5460, 0, 5467, 111, 87, 105, 100, 116, 232, 2777, 97, 59, 17302, 114, 59, 24872, 112, 102, 59, 24868, 99, 114, 59, 49152, 55349, 56501, 3041, 5507, 5514, 5520, 0, 5552, 5558, 5567, 0, 0, 0, 0, 5574, 5595, 5611, 5727, 5741, 0, 5781, 5787, 5810, 5817, 0, 5822, 99, 117, 116, 101, 32827, 225, 16609, 114, 101, 118, 101, 59, 16643, 768, 59, 69, 100, 105, 117, 121, 5532, 5533, 5537, 5539, 5544, 5549, 25150, 59, 49152, 8766, 819, 59, 25151, 114, 99, 32827, 226, 16610, 116, 101, 32955, 180, 774, 59, 17456, 108, 105, 103, 32827, 230, 16614, 256, 59, 114, 178, 5562, 59, 49152, 55349, 56606, 114, 97, 118, 101, 32827, 224, 16608, 256, 101, 112, 5578, 5590, 256, 102, 112, 5583, 5588, 115, 121, 109, 59, 24885, 232, 5587, 104, 97, 59, 17329, 256, 97, 112, 5599, 99, 256, 99, 108, 5604, 5607, 114, 59, 16641, 103, 59, 27199, 612, 5616, 0, 0, 5642, 640, 59, 97, 100, 115, 118, 5626, 5627, 5631, 5633, 5639, 25127, 110, 100, 59, 27221, 59, 27228, 108, 111, 112, 101, 59, 27224, 59, 27226, 896, 59, 101, 108, 109, 114, 115, 122, 5656, 5657, 5659, 5662, 5695, 5711, 5721, 25120, 59, 27044, 101, 187, 5657, 115, 100, 256, 59, 97, 5669, 5670, 25121, 1121, 5680, 5682, 5684, 5686, 5688, 5690, 5692, 5694, 59, 27048, 59, 27049, 59, 27050, 59, 27051, 59, 27052, 59, 27053, 59, 27054, 59, 27055, 116, 256, 59, 118, 5701, 5702, 25119, 98, 256, 59, 100, 5708, 5709, 25278, 59, 27037, 256, 112, 116, 5716, 5719, 104, 59, 25122, 187, 185, 97, 114, 114, 59, 25468, 256, 103, 112, 5731, 5735, 111, 110, 59, 16645, 102, 59, 49152, 55349, 56658, 896, 59, 69, 97, 101, 105, 111, 112, 4801, 5755, 5757, 5762, 5764, 5767, 5770, 59, 27248, 99, 105, 114, 59, 27247, 59, 25162, 100, 59, 25163, 115, 59, 16423, 114, 111, 120, 256, 59, 101, 4801, 5778, 241, 5763, 105, 110, 103, 32827, 229, 16613, 384, 99, 116, 121, 5793, 5798, 5800, 114, 59, 49152, 55349, 56502, 59, 16426, 109, 112, 256, 59, 101, 4801, 5807, 241, 648, 105, 108, 100, 101, 32827, 227, 16611, 109, 108, 32827, 228, 16612, 256, 99, 105, 5826, 5832, 111, 110, 105, 110, 244, 626, 110, 116, 59, 27153, 2048, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 5869, 5873, 5936, 5948, 5955, 5960, 6008, 6013, 6112, 6118, 6201, 6224, 5901, 6461, 6472, 6512, 111, 116, 59, 27373, 256, 99, 114, 5878, 5918, 107, 512, 99, 101, 112, 115, 5888, 5893, 5901, 5907, 111, 110, 103, 59, 25164, 112, 115, 105, 108, 111, 110, 59, 17398, 114, 105, 109, 101, 59, 24629, 105, 109, 256, 59, 101, 5914, 5915, 25149, 113, 59, 25293, 374, 5922, 5926, 101, 101, 59, 25277, 101, 100, 256, 59, 103, 5932, 5933, 25349, 101, 187, 5933, 114, 107, 256, 59, 116, 4956, 5943, 98, 114, 107, 59, 25526, 256, 111, 121, 5889, 5953, 59, 17457, 113, 117, 111, 59, 24606, 640, 99, 109, 112, 114, 116, 5971, 5979, 5985, 5988, 5992, 97, 117, 115, 256, 59, 101, 266, 265, 112, 116, 121, 118, 59, 27056, 115, 233, 5900, 110, 111, 245, 275, 384, 97, 104, 119, 5999, 6001, 6003, 59, 17330, 59, 24886, 101, 101, 110, 59, 25196, 114, 59, 49152, 55349, 56607, 103, 896, 99, 111, 115, 116, 117, 118, 119, 6029, 6045, 6067, 6081, 6101, 6107, 6110, 384, 97, 105, 117, 6036, 6038, 6042, 240, 1888, 114, 99, 59, 26095, 112, 187, 4977, 384, 100, 112, 116, 6052, 6056, 6061, 111, 116, 59, 27136, 108, 117, 115, 59, 27137, 105, 109, 101, 115, 59, 27138, 625, 6073, 0, 0, 6078, 99, 117, 112, 59, 27142, 97, 114, 59, 26117, 114, 105, 97, 110, 103, 108, 101, 256, 100, 117, 6093, 6098, 111, 119, 110, 59, 26045, 112, 59, 26035, 112, 108, 117, 115, 59, 27140, 101, 229, 5188, 229, 5293, 97, 114, 111, 119, 59, 26893, 384, 97, 107, 111, 6125, 6182, 6197, 256, 99, 110, 6130, 6179, 107, 384, 108, 115, 116, 6138, 1451, 6146, 111, 122, 101, 110, 103, 101, 59, 27115, 114, 105, 97, 110, 103, 108, 101, 512, 59, 100, 108, 114, 6162, 6163, 6168, 6173, 26036, 111, 119, 110, 59, 26046, 101, 102, 116, 59, 26050, 105, 103, 104, 116, 59, 26040, 107, 59, 25635, 433, 6187, 0, 6195, 434, 6191, 0, 6193, 59, 26002, 59, 26001, 52, 59, 26003, 99, 107, 59, 25992, 256, 101, 111, 6206, 6221, 256, 59, 113, 6211, 6214, 49152, 61, 8421, 117, 105, 118, 59, 49152, 8801, 8421, 116, 59, 25360, 512, 112, 116, 119, 120, 6233, 6238, 6247, 6252, 102, 59, 49152, 55349, 56659, 256, 59, 116, 5067, 6243, 111, 109, 187, 5068, 116, 105, 101, 59, 25288, 1536, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 6277, 6294, 6314, 6331, 6359, 6363, 6380, 6399, 6405, 6410, 6416, 6433, 512, 76, 82, 108, 114, 6286, 6288, 6290, 6292, 59, 25943, 59, 25940, 59, 25942, 59, 25939, 640, 59, 68, 85, 100, 117, 6305, 6306, 6308, 6310, 6312, 25936, 59, 25958, 59, 25961, 59, 25956, 59, 25959, 512, 76, 82, 108, 114, 6323, 6325, 6327, 6329, 59, 25949, 59, 25946, 59, 25948, 59, 25945, 896, 59, 72, 76, 82, 104, 108, 114, 6346, 6347, 6349, 6351, 6353, 6355, 6357, 25937, 59, 25964, 59, 25955, 59, 25952, 59, 25963, 59, 25954, 59, 25951, 111, 120, 59, 27081, 512, 76, 82, 108, 114, 6372, 6374, 6376, 6378, 59, 25941, 59, 25938, 59, 25872, 59, 25868, 640, 59, 68, 85, 100, 117, 1725, 6391, 6393, 6395, 6397, 59, 25957, 59, 25960, 59, 25900, 59, 25908, 105, 110, 117, 115, 59, 25247, 108, 117, 115, 59, 25246, 105, 109, 101, 115, 59, 25248, 512, 76, 82, 108, 114, 6425, 6427, 6429, 6431, 59, 25947, 59, 25944, 59, 25880, 59, 25876, 896, 59, 72, 76, 82, 104, 108, 114, 6448, 6449, 6451, 6453, 6455, 6457, 6459, 25858, 59, 25962, 59, 25953, 59, 25950, 59, 25916, 59, 25892, 59, 25884, 256, 101, 118, 291, 6466, 98, 97, 114, 32827, 166, 16550, 512, 99, 101, 105, 111, 6481, 6486, 6490, 6496, 114, 59, 49152, 55349, 56503, 109, 105, 59, 24655, 109, 256, 59, 101, 5914, 5916, 108, 384, 59, 98, 104, 6504, 6505, 6507, 16476, 59, 27077, 115, 117, 98, 59, 26568, 364, 6516, 6526, 108, 256, 59, 101, 6521, 6522, 24610, 116, 187, 6522, 112, 384, 59, 69, 101, 303, 6533, 6535, 59, 27310, 256, 59, 113, 1756, 1755, 3297, 6567, 0, 6632, 6673, 6677, 6706, 0, 6711, 6736, 0, 0, 6836, 0, 0, 6849, 0, 0, 6945, 6958, 6989, 6994, 0, 7165, 0, 7180, 384, 99, 112, 114, 6573, 6578, 6621, 117, 116, 101, 59, 16647, 768, 59, 97, 98, 99, 100, 115, 6591, 6592, 6596, 6602, 6613, 6617, 25129, 110, 100, 59, 27204, 114, 99, 117, 112, 59, 27209, 256, 97, 117, 6607, 6610, 112, 59, 27211, 112, 59, 27207, 111, 116, 59, 27200, 59, 49152, 8745, 65024, 256, 101, 111, 6626, 6629, 116, 59, 24641, 238, 1683, 512, 97, 101, 105, 117, 6640, 6651, 6657, 6661, 496, 6645, 0, 6648, 115, 59, 27213, 111, 110, 59, 16653, 100, 105, 108, 32827, 231, 16615, 114, 99, 59, 16649, 112, 115, 256, 59, 115, 6668, 6669, 27212, 109, 59, 27216, 111, 116, 59, 16651, 384, 100, 109, 110, 6683, 6688, 6694, 105, 108, 32955, 184, 429, 112, 116, 121, 118, 59, 27058, 116, 33024, 162, 59, 101, 6701, 6702, 16546, 114, 228, 434, 114, 59, 49152, 55349, 56608, 384, 99, 101, 105, 6717, 6720, 6733, 121, 59, 17479, 99, 107, 256, 59, 109, 6727, 6728, 26387, 97, 114, 107, 187, 6728, 59, 17351, 114, 896, 59, 69, 99, 101, 102, 109, 115, 6751, 6752, 6754, 6763, 6820, 6826, 6830, 26059, 59, 27075, 384, 59, 101, 108, 6761, 6762, 6765, 17094, 113, 59, 25175, 101, 609, 6772, 0, 0, 6792, 114, 114, 111, 119, 256, 108, 114, 6780, 6785, 101, 102, 116, 59, 25018, 105, 103, 104, 116, 59, 25019, 640, 82, 83, 97, 99, 100, 6802, 6804, 6806, 6810, 6815, 187, 3911, 59, 25800, 115, 116, 59, 25243, 105, 114, 99, 59, 25242, 97, 115, 104, 59, 25245, 110, 105, 110, 116, 59, 27152, 105, 100, 59, 27375, 99, 105, 114, 59, 27074, 117, 98, 115, 256, 59, 117, 6843, 6844, 26211, 105, 116, 187, 6844, 748, 6855, 6868, 6906, 0, 6922, 111, 110, 256, 59, 101, 6861, 6862, 16442, 256, 59, 113, 199, 198, 621, 6873, 0, 0, 6882, 97, 256, 59, 116, 6878, 6879, 16428, 59, 16448, 384, 59, 102, 108, 6888, 6889, 6891, 25089, 238, 4448, 101, 256, 109, 120, 6897, 6902, 101, 110, 116, 187, 6889, 101, 243, 589, 487, 6910, 0, 6919, 256, 59, 100, 4795, 6914, 111, 116, 59, 27245, 110, 244, 582, 384, 102, 114, 121, 6928, 6932, 6935, 59, 49152, 55349, 56660, 111, 228, 596, 33024, 169, 59, 115, 341, 6941, 114, 59, 24855, 256, 97, 111, 6949, 6953, 114, 114, 59, 25013, 115, 115, 59, 26391, 256, 99, 117, 6962, 6967, 114, 59, 49152, 55349, 56504, 256, 98, 112, 6972, 6980, 256, 59, 101, 6977, 6978, 27343, 59, 27345, 256, 59, 101, 6985, 6986, 27344, 59, 27346, 100, 111, 116, 59, 25327, 896, 100, 101, 108, 112, 114, 118, 119, 7008, 7020, 7031, 7042, 7084, 7124, 7161, 97, 114, 114, 256, 108, 114, 7016, 7018, 59, 26936, 59, 26933, 624, 7026, 0, 0, 7029, 114, 59, 25310, 99, 59, 25311, 97, 114, 114, 256, 59, 112, 7039, 7040, 25014, 59, 26941, 768, 59, 98, 99, 100, 111, 115, 7055, 7056, 7062, 7073, 7077, 7080, 25130, 114, 99, 97, 112, 59, 27208, 256, 97, 117, 7067, 7070, 112, 59, 27206, 112, 59, 27210, 111, 116, 59, 25229, 114, 59, 27205, 59, 49152, 8746, 65024, 512, 97, 108, 114, 118, 7093, 7103, 7134, 7139, 114, 114, 256, 59, 109, 7100, 7101, 25015, 59, 26940, 121, 384, 101, 118, 119, 7111, 7124, 7128, 113, 624, 7118, 0, 0, 7122, 114, 101, 227, 7027, 117, 227, 7029, 101, 101, 59, 25294, 101, 100, 103, 101, 59, 25295, 101, 110, 32827, 164, 16548, 101, 97, 114, 114, 111, 119, 256, 108, 114, 7150, 7155, 101, 102, 116, 187, 7040, 105, 103, 104, 116, 187, 7101, 101, 228, 7133, 256, 99, 105, 7169, 7175, 111, 110, 105, 110, 244, 503, 110, 116, 59, 25137, 108, 99, 116, 121, 59, 25389, 2432, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 7224, 7227, 7231, 7261, 7273, 7285, 7306, 7326, 7340, 7351, 7419, 7423, 7437, 7547, 7569, 7595, 7611, 7622, 7629, 114, 242, 897, 97, 114, 59, 26981, 512, 103, 108, 114, 115, 7240, 7245, 7250, 7252, 103, 101, 114, 59, 24608, 101, 116, 104, 59, 24888, 242, 4403, 104, 256, 59, 118, 7258, 7259, 24592, 187, 2314, 363, 7265, 7271, 97, 114, 111, 119, 59, 26895, 97, 227, 789, 256, 97, 121, 7278, 7283, 114, 111, 110, 59, 16655, 59, 17460, 384, 59, 97, 111, 818, 7292, 7300, 256, 103, 114, 703, 7297, 114, 59, 25034, 116, 115, 101, 113, 59, 27255, 384, 103, 108, 109, 7313, 7316, 7320, 32827, 176, 16560, 116, 97, 59, 17332, 112, 116, 121, 118, 59, 27057, 256, 105, 114, 7331, 7336, 115, 104, 116, 59, 27007, 59, 49152, 55349, 56609, 97, 114, 256, 108, 114, 7347, 7349, 187, 2268, 187, 4126, 640, 97, 101, 103, 115, 118, 7362, 888, 7382, 7388, 7392, 109, 384, 59, 111, 115, 806, 7370, 7380, 110, 100, 256, 59, 115, 806, 7377, 117, 105, 116, 59, 26214, 97, 109, 109, 97, 59, 17373, 105, 110, 59, 25330, 384, 59, 105, 111, 7399, 7400, 7416, 16631, 100, 101, 33024, 247, 59, 111, 7399, 7408, 110, 116, 105, 109, 101, 115, 59, 25287, 110, 248, 7415, 99, 121, 59, 17490, 99, 623, 7430, 0, 0, 7434, 114, 110, 59, 25374, 111, 112, 59, 25357, 640, 108, 112, 116, 117, 119, 7448, 7453, 7458, 7497, 7509, 108, 97, 114, 59, 16420, 102, 59, 49152, 55349, 56661, 640, 59, 101, 109, 112, 115, 779, 7469, 7479, 7485, 7490, 113, 256, 59, 100, 850, 7475, 111, 116, 59, 25169, 105, 110, 117, 115, 59, 25144, 108, 117, 115, 59, 25108, 113, 117, 97, 114, 101, 59, 25249, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 229, 250, 110, 384, 97, 100, 104, 4398, 7517, 7527, 111, 119, 110, 97, 114, 114, 111, 119, 243, 7299, 97, 114, 112, 111, 111, 110, 256, 108, 114, 7538, 7542, 101, 102, 244, 7348, 105, 103, 104, 244, 7350, 354, 7551, 7557, 107, 97, 114, 111, 247, 3906, 623, 7562, 0, 0, 7566, 114, 110, 59, 25375, 111, 112, 59, 25356, 384, 99, 111, 116, 7576, 7587, 7590, 256, 114, 121, 7581, 7585, 59, 49152, 55349, 56505, 59, 17493, 108, 59, 27126, 114, 111, 107, 59, 16657, 256, 100, 114, 7600, 7604, 111, 116, 59, 25329, 105, 256, 59, 102, 7610, 6166, 26047, 256, 97, 104, 7616, 7619, 114, 242, 1065, 97, 242, 4006, 97, 110, 103, 108, 101, 59, 27046, 256, 99, 105, 7634, 7637, 121, 59, 17503, 103, 114, 97, 114, 114, 59, 26623, 2304, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 7681, 7689, 7705, 7736, 1400, 7740, 7753, 7777, 7806, 7845, 7855, 7869, 7905, 7978, 7991, 8004, 8014, 8026, 256, 68, 111, 7686, 7476, 111, 244, 7305, 256, 99, 115, 7694, 7700, 117, 116, 101, 32827, 233, 16617, 116, 101, 114, 59, 27246, 512, 97, 105, 111, 121, 7714, 7719, 7729, 7734, 114, 111, 110, 59, 16667, 114, 256, 59, 99, 7725, 7726, 25174, 32827, 234, 16618, 108, 111, 110, 59, 25173, 59, 17485, 111, 116, 59, 16663, 256, 68, 114, 7745, 7749, 111, 116, 59, 25170, 59, 49152, 55349, 56610, 384, 59, 114, 115, 7760, 7761, 7767, 27290, 97, 118, 101, 32827, 232, 16616, 256, 59, 100, 7772, 7773, 27286, 111, 116, 59, 27288, 512, 59, 105, 108, 115, 7786, 7787, 7794, 7796, 27289, 110, 116, 101, 114, 115, 59, 25575, 59, 24851, 256, 59, 100, 7801, 7802, 27285, 111, 116, 59, 27287, 384, 97, 112, 115, 7813, 7817, 7831, 99, 114, 59, 16659, 116, 121, 384, 59, 115, 118, 7826, 7827, 7829, 25093, 101, 116, 187, 7827, 112, 256, 49, 59, 7837, 7844, 307, 7841, 7843, 59, 24580, 59, 24581, 24579, 256, 103, 115, 7850, 7852, 59, 16715, 112, 59, 24578, 256, 103, 112, 7860, 7864, 111, 110, 59, 16665, 102, 59, 49152, 55349, 56662, 384, 97, 108, 115, 7876, 7886, 7890, 114, 256, 59, 115, 7882, 7883, 25301, 108, 59, 27107, 117, 115, 59, 27249, 105, 384, 59, 108, 118, 7898, 7899, 7903, 17333, 111, 110, 187, 7899, 59, 17397, 512, 99, 115, 117, 118, 7914, 7923, 7947, 7971, 256, 105, 111, 7919, 7729, 114, 99, 187, 7726, 617, 7929, 0, 0, 7931, 237, 1352, 97, 110, 116, 256, 103, 108, 7938, 7942, 116, 114, 187, 7773, 101, 115, 115, 187, 7802, 384, 97, 101, 105, 7954, 7958, 7962, 108, 115, 59, 16445, 115, 116, 59, 25183, 118, 256, 59, 68, 565, 7968, 68, 59, 27256, 112, 97, 114, 115, 108, 59, 27109, 256, 68, 97, 7983, 7987, 111, 116, 59, 25171, 114, 114, 59, 26993, 384, 99, 100, 105, 7998, 8001, 7928, 114, 59, 24879, 111, 244, 850, 256, 97, 104, 8009, 8011, 59, 17335, 32827, 240, 16624, 256, 109, 114, 8019, 8023, 108, 32827, 235, 16619, 111, 59, 24748, 384, 99, 105, 112, 8033, 8036, 8039, 108, 59, 16417, 115, 244, 1390, 256, 101, 111, 8044, 8052, 99, 116, 97, 116, 105, 111, 238, 1369, 110, 101, 110, 116, 105, 97, 108, 229, 1401, 2529, 8082, 0, 8094, 0, 8097, 8103, 0, 0, 8134, 8140, 0, 8147, 0, 8166, 8170, 8192, 0, 8200, 8282, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7748, 121, 59, 17476, 109, 97, 108, 101, 59, 26176, 384, 105, 108, 114, 8109, 8115, 8129, 108, 105, 103, 59, 32768, 64259, 617, 8121, 0, 0, 8125, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 49152, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 49152, 102, 106, 384, 97, 108, 116, 8153, 8156, 8161, 116, 59, 26221, 105, 103, 59, 32768, 64258, 110, 115, 59, 26033, 111, 102, 59, 16786, 496, 8174, 0, 8179, 102, 59, 49152, 55349, 56663, 256, 97, 107, 1471, 8183, 256, 59, 118, 8188, 8189, 25300, 59, 27353, 97, 114, 116, 105, 110, 116, 59, 27149, 256, 97, 111, 8204, 8277, 256, 99, 115, 8209, 8274, 945, 8218, 8240, 8248, 8261, 8264, 0, 8272, 946, 8226, 8229, 8231, 8234, 8236, 0, 8238, 32827, 189, 16573, 59, 24915, 32827, 188, 16572, 59, 24917, 59, 24921, 59, 24923, 435, 8244, 0, 8246, 59, 24916, 59, 24918, 692, 8254, 8257, 0, 0, 8259, 32827, 190, 16574, 59, 24919, 59, 24924, 53, 59, 24920, 438, 8268, 0, 8270, 59, 24922, 59, 24925, 56, 59, 24926, 108, 59, 24644, 119, 110, 59, 25378, 99, 114, 59, 49152, 55349, 56507, 2176, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 8322, 8329, 8351, 8357, 8368, 8372, 8432, 8437, 8442, 8447, 8451, 8466, 8504, 791, 8510, 8530, 8606, 256, 59, 108, 1613, 8327, 59, 27276, 384, 99, 109, 112, 8336, 8341, 8349, 117, 116, 101, 59, 16885, 109, 97, 256, 59, 100, 8348, 7386, 17331, 59, 27270, 114, 101, 118, 101, 59, 16671, 256, 105, 121, 8362, 8366, 114, 99, 59, 16669, 59, 17459, 111, 116, 59, 16673, 512, 59, 108, 113, 115, 1598, 1602, 8381, 8393, 384, 59, 113, 115, 1598, 1612, 8388, 108, 97, 110, 244, 1637, 512, 59, 99, 100, 108, 1637, 8402, 8405, 8421, 99, 59, 27305, 111, 116, 256, 59, 111, 8412, 8413, 27264, 256, 59, 108, 8418, 8419, 27266, 59, 27268, 256, 59, 101, 8426, 8429, 49152, 8923, 65024, 115, 59, 27284, 114, 59, 49152, 55349, 56612, 256, 59, 103, 1651, 1563, 109, 101, 108, 59, 24887, 99, 121, 59, 17491, 512, 59, 69, 97, 106, 1626, 8460, 8462, 8464, 59, 27282, 59, 27301, 59, 27300, 512, 69, 97, 101, 115, 8475, 8477, 8489, 8500, 59, 25193, 112, 256, 59, 112, 8483, 8484, 27274, 114, 111, 120, 187, 8484, 256, 59, 113, 8494, 8495, 27272, 256, 59, 113, 8494, 8475, 105, 109, 59, 25319, 112, 102, 59, 49152, 55349, 56664, 256, 99, 105, 8515, 8518, 114, 59, 24842, 109, 384, 59, 101, 108, 1643, 8526, 8528, 59, 27278, 59, 27280, 33536, 62, 59, 99, 100, 108, 113, 114, 1518, 8544, 8554, 8558, 8563, 8569, 256, 99, 105, 8549, 8551, 59, 27303, 114, 59, 27258, 111, 116, 59, 25303, 80, 97, 114, 59, 27029, 117, 101, 115, 116, 59, 27260, 640, 97, 100, 101, 108, 115, 8580, 8554, 8592, 1622, 8603, 496, 8585, 0, 8590, 112, 114, 111, 248, 8350, 114, 59, 27e3, 113, 256, 108, 113, 1599, 8598, 108, 101, 115, 243, 8328, 105, 237, 1643, 256, 101, 110, 8611, 8621, 114, 116, 110, 101, 113, 113, 59, 49152, 8809, 65024, 197, 8618, 1280, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 8644, 8647, 8689, 8693, 8698, 8728, 8733, 8751, 8808, 8829, 114, 242, 928, 512, 105, 108, 109, 114, 8656, 8660, 8663, 8667, 114, 115, 240, 5252, 102, 187, 8228, 105, 108, 244, 1705, 256, 100, 114, 8672, 8676, 99, 121, 59, 17482, 384, 59, 99, 119, 2292, 8683, 8687, 105, 114, 59, 26952, 59, 25005, 97, 114, 59, 24847, 105, 114, 99, 59, 16677, 384, 97, 108, 114, 8705, 8718, 8723, 114, 116, 115, 256, 59, 117, 8713, 8714, 26213, 105, 116, 187, 8714, 108, 105, 112, 59, 24614, 99, 111, 110, 59, 25273, 114, 59, 49152, 55349, 56613, 115, 256, 101, 119, 8739, 8745, 97, 114, 111, 119, 59, 26917, 97, 114, 111, 119, 59, 26918, 640, 97, 109, 111, 112, 114, 8762, 8766, 8771, 8798, 8803, 114, 114, 59, 25087, 116, 104, 116, 59, 25147, 107, 256, 108, 114, 8777, 8787, 101, 102, 116, 97, 114, 114, 111, 119, 59, 25001, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25002, 102, 59, 49152, 55349, 56665, 98, 97, 114, 59, 24597, 384, 99, 108, 116, 8815, 8820, 8824, 114, 59, 49152, 55349, 56509, 97, 115, 232, 8692, 114, 111, 107, 59, 16679, 256, 98, 112, 8834, 8839, 117, 108, 108, 59, 24643, 104, 101, 110, 187, 7259, 2785, 8867, 0, 8874, 0, 8888, 8901, 8910, 0, 8917, 8947, 0, 0, 8952, 8994, 9063, 9058, 9087, 0, 9094, 9130, 9140, 99, 117, 116, 101, 32827, 237, 16621, 384, 59, 105, 121, 1905, 8880, 8885, 114, 99, 32827, 238, 16622, 59, 17464, 256, 99, 120, 8892, 8895, 121, 59, 17461, 99, 108, 32827, 161, 16545, 256, 102, 114, 927, 8905, 59, 49152, 55349, 56614, 114, 97, 118, 101, 32827, 236, 16620, 512, 59, 105, 110, 111, 1854, 8925, 8937, 8942, 256, 105, 110, 8930, 8934, 110, 116, 59, 27148, 116, 59, 25133, 102, 105, 110, 59, 27100, 116, 97, 59, 24873, 108, 105, 103, 59, 16691, 384, 97, 111, 112, 8958, 8986, 8989, 384, 99, 103, 116, 8965, 8968, 8983, 114, 59, 16683, 384, 101, 108, 112, 1823, 8975, 8979, 105, 110, 229, 1934, 97, 114, 244, 1824, 104, 59, 16689, 102, 59, 25271, 101, 100, 59, 16821, 640, 59, 99, 102, 111, 116, 1268, 9004, 9009, 9021, 9025, 97, 114, 101, 59, 24837, 105, 110, 256, 59, 116, 9016, 9017, 25118, 105, 101, 59, 27101, 100, 111, 244, 8985, 640, 59, 99, 101, 108, 112, 1879, 9036, 9040, 9051, 9057, 97, 108, 59, 25274, 256, 103, 114, 9045, 9049, 101, 114, 243, 5475, 227, 9037, 97, 114, 104, 107, 59, 27159, 114, 111, 100, 59, 27196, 512, 99, 103, 112, 116, 9071, 9074, 9078, 9083, 121, 59, 17489, 111, 110, 59, 16687, 102, 59, 49152, 55349, 56666, 97, 59, 17337, 117, 101, 115, 116, 32827, 191, 16575, 256, 99, 105, 9098, 9103, 114, 59, 49152, 55349, 56510, 110, 640, 59, 69, 100, 115, 118, 1268, 9115, 9117, 9121, 1267, 59, 25337, 111, 116, 59, 25333, 256, 59, 118, 9126, 9127, 25332, 59, 25331, 256, 59, 105, 1911, 9134, 108, 100, 101, 59, 16681, 491, 9144, 0, 9148, 99, 121, 59, 17494, 108, 32827, 239, 16623, 768, 99, 102, 109, 111, 115, 117, 9164, 9175, 9180, 9185, 9191, 9205, 256, 105, 121, 9169, 9173, 114, 99, 59, 16693, 59, 17465, 114, 59, 49152, 55349, 56615, 97, 116, 104, 59, 16951, 112, 102, 59, 49152, 55349, 56667, 483, 9196, 0, 9201, 114, 59, 49152, 55349, 56511, 114, 99, 121, 59, 17496, 107, 99, 121, 59, 17492, 1024, 97, 99, 102, 103, 104, 106, 111, 115, 9227, 9238, 9250, 9255, 9261, 9265, 9269, 9275, 112, 112, 97, 256, 59, 118, 9235, 9236, 17338, 59, 17392, 256, 101, 121, 9243, 9248, 100, 105, 108, 59, 16695, 59, 17466, 114, 59, 49152, 55349, 56616, 114, 101, 101, 110, 59, 16696, 99, 121, 59, 17477, 99, 121, 59, 17500, 112, 102, 59, 49152, 55349, 56668, 99, 114, 59, 49152, 55349, 56512, 2944, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 9328, 9345, 9350, 9357, 9361, 9486, 9533, 9562, 9600, 9806, 9822, 9829, 9849, 9853, 9882, 9906, 9944, 10077, 10088, 10123, 10176, 10241, 10258, 384, 97, 114, 116, 9335, 9338, 9340, 114, 242, 2502, 242, 917, 97, 105, 108, 59, 26907, 97, 114, 114, 59, 26894, 256, 59, 103, 2452, 9355, 59, 27275, 97, 114, 59, 26978, 2403, 9381, 0, 9386, 0, 9393, 0, 0, 0, 0, 0, 9397, 9402, 0, 9414, 9416, 9421, 0, 9465, 117, 116, 101, 59, 16698, 109, 112, 116, 121, 118, 59, 27060, 114, 97, 238, 2124, 98, 100, 97, 59, 17339, 103, 384, 59, 100, 108, 2190, 9409, 9411, 59, 27025, 229, 2190, 59, 27269, 117, 111, 32827, 171, 16555, 114, 1024, 59, 98, 102, 104, 108, 112, 115, 116, 2201, 9438, 9446, 9449, 9451, 9454, 9457, 9461, 256, 59, 102, 2205, 9443, 115, 59, 26911, 115, 59, 26909, 235, 8786, 112, 59, 25003, 108, 59, 26937, 105, 109, 59, 26995, 108, 59, 24994, 384, 59, 97, 101, 9471, 9472, 9476, 27307, 105, 108, 59, 26905, 256, 59, 115, 9481, 9482, 27309, 59, 49152, 10925, 65024, 384, 97, 98, 114, 9493, 9497, 9501, 114, 114, 59, 26892, 114, 107, 59, 26482, 256, 97, 107, 9506, 9516, 99, 256, 101, 107, 9512, 9514, 59, 16507, 59, 16475, 256, 101, 115, 9521, 9523, 59, 27019, 108, 256, 100, 117, 9529, 9531, 59, 27023, 59, 27021, 512, 97, 101, 117, 121, 9542, 9547, 9558, 9560, 114, 111, 110, 59, 16702, 256, 100, 105, 9552, 9556, 105, 108, 59, 16700, 236, 2224, 226, 9513, 59, 17467, 512, 99, 113, 114, 115, 9571, 9574, 9581, 9597, 97, 59, 26934, 117, 111, 256, 59, 114, 3609, 5958, 256, 100, 117, 9586, 9591, 104, 97, 114, 59, 26983, 115, 104, 97, 114, 59, 26955, 104, 59, 25010, 640, 59, 102, 103, 113, 115, 9611, 9612, 2441, 9715, 9727, 25188, 116, 640, 97, 104, 108, 114, 116, 9624, 9636, 9655, 9666, 9704, 114, 114, 111, 119, 256, 59, 116, 2201, 9633, 97, 233, 9462, 97, 114, 112, 111, 111, 110, 256, 100, 117, 9647, 9652, 111, 119, 110, 187, 1114, 112, 187, 2406, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 25031, 105, 103, 104, 116, 384, 97, 104, 115, 9677, 9686, 9694, 114, 114, 111, 119, 256, 59, 115, 2292, 2215, 97, 114, 112, 111, 111, 110, 243, 3992, 113, 117, 105, 103, 97, 114, 114, 111, 247, 8688, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25291, 384, 59, 113, 115, 9611, 2451, 9722, 108, 97, 110, 244, 2476, 640, 59, 99, 100, 103, 115, 2476, 9738, 9741, 9757, 9768, 99, 59, 27304, 111, 116, 256, 59, 111, 9748, 9749, 27263, 256, 59, 114, 9754, 9755, 27265, 59, 27267, 256, 59, 101, 9762, 9765, 49152, 8922, 65024, 115, 59, 27283, 640, 97, 100, 101, 103, 115, 9779, 9785, 9789, 9801, 9803, 112, 112, 114, 111, 248, 9414, 111, 116, 59, 25302, 113, 256, 103, 113, 9795, 9797, 244, 2441, 103, 116, 242, 9356, 244, 2459, 105, 237, 2482, 384, 105, 108, 114, 9813, 2273, 9818, 115, 104, 116, 59, 27004, 59, 49152, 55349, 56617, 256, 59, 69, 2460, 9827, 59, 27281, 353, 9833, 9846, 114, 256, 100, 117, 9650, 9838, 256, 59, 108, 2405, 9843, 59, 26986, 108, 107, 59, 25988, 99, 121, 59, 17497, 640, 59, 97, 99, 104, 116, 2632, 9864, 9867, 9873, 9878, 114, 242, 9665, 111, 114, 110, 101, 242, 7432, 97, 114, 100, 59, 26987, 114, 105, 59, 26106, 256, 105, 111, 9887, 9892, 100, 111, 116, 59, 16704, 117, 115, 116, 256, 59, 97, 9900, 9901, 25520, 99, 104, 101, 187, 9901, 512, 69, 97, 101, 115, 9915, 9917, 9929, 9940, 59, 25192, 112, 256, 59, 112, 9923, 9924, 27273, 114, 111, 120, 187, 9924, 256, 59, 113, 9934, 9935, 27271, 256, 59, 113, 9934, 9915, 105, 109, 59, 25318, 1024, 97, 98, 110, 111, 112, 116, 119, 122, 9961, 9972, 9975, 10010, 10031, 10049, 10055, 10064, 256, 110, 114, 9966, 9969, 103, 59, 26604, 114, 59, 25085, 114, 235, 2241, 103, 384, 108, 109, 114, 9983, 9997, 10004, 101, 102, 116, 256, 97, 114, 2534, 9991, 105, 103, 104, 116, 225, 2546, 97, 112, 115, 116, 111, 59, 26620, 105, 103, 104, 116, 225, 2557, 112, 97, 114, 114, 111, 119, 256, 108, 114, 10021, 10025, 101, 102, 244, 9453, 105, 103, 104, 116, 59, 25004, 384, 97, 102, 108, 10038, 10041, 10045, 114, 59, 27013, 59, 49152, 55349, 56669, 117, 115, 59, 27181, 105, 109, 101, 115, 59, 27188, 353, 10059, 10063, 115, 116, 59, 25111, 225, 4942, 384, 59, 101, 102, 10071, 10072, 6144, 26058, 110, 103, 101, 187, 10072, 97, 114, 256, 59, 108, 10084, 10085, 16424, 116, 59, 27027, 640, 97, 99, 104, 109, 116, 10099, 10102, 10108, 10117, 10119, 114, 242, 2216, 111, 114, 110, 101, 242, 7564, 97, 114, 256, 59, 100, 3992, 10115, 59, 26989, 59, 24590, 114, 105, 59, 25279, 768, 97, 99, 104, 105, 113, 116, 10136, 10141, 2624, 10146, 10158, 10171, 113, 117, 111, 59, 24633, 114, 59, 49152, 55349, 56513, 109, 384, 59, 101, 103, 2482, 10154, 10156, 59, 27277, 59, 27279, 256, 98, 117, 9514, 10163, 111, 256, 59, 114, 3615, 10169, 59, 24602, 114, 111, 107, 59, 16706, 33792, 60, 59, 99, 100, 104, 105, 108, 113, 114, 2091, 10194, 9785, 10204, 10208, 10213, 10218, 10224, 256, 99, 105, 10199, 10201, 59, 27302, 114, 59, 27257, 114, 101, 229, 9714, 109, 101, 115, 59, 25289, 97, 114, 114, 59, 26998, 117, 101, 115, 116, 59, 27259, 256, 80, 105, 10229, 10233, 97, 114, 59, 27030, 384, 59, 101, 102, 10240, 2349, 6171, 26051, 114, 256, 100, 117, 10247, 10253, 115, 104, 97, 114, 59, 26954, 104, 97, 114, 59, 26982, 256, 101, 110, 10263, 10273, 114, 116, 110, 101, 113, 113, 59, 49152, 8808, 65024, 197, 10270, 1792, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 10304, 10309, 10370, 10382, 10387, 10400, 10405, 10408, 10458, 10466, 10468, 2691, 10483, 10498, 68, 111, 116, 59, 25146, 512, 99, 108, 112, 114, 10318, 10322, 10339, 10365, 114, 32827, 175, 16559, 256, 101, 116, 10327, 10329, 59, 26178, 256, 59, 101, 10334, 10335, 26400, 115, 101, 187, 10335, 256, 59, 115, 4155, 10344, 116, 111, 512, 59, 100, 108, 117, 4155, 10355, 10359, 10363, 111, 119, 238, 1164, 101, 102, 244, 2319, 240, 5073, 107, 101, 114, 59, 26030, 256, 111, 121, 10375, 10380, 109, 109, 97, 59, 27177, 59, 17468, 97, 115, 104, 59, 24596, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 187, 5670, 114, 59, 49152, 55349, 56618, 111, 59, 24871, 384, 99, 100, 110, 10415, 10420, 10441, 114, 111, 32827, 181, 16565, 512, 59, 97, 99, 100, 5220, 10429, 10432, 10436, 115, 244, 5799, 105, 114, 59, 27376, 111, 116, 32955, 183, 437, 117, 115, 384, 59, 98, 100, 10450, 6403, 10451, 25106, 256, 59, 117, 7484, 10456, 59, 27178, 355, 10462, 10465, 112, 59, 27355, 242, 8722, 240, 2689, 256, 100, 112, 10473, 10478, 101, 108, 115, 59, 25255, 102, 59, 49152, 55349, 56670, 256, 99, 116, 10488, 10493, 114, 59, 49152, 55349, 56514, 112, 111, 115, 187, 5533, 384, 59, 108, 109, 10505, 10506, 10509, 17340, 116, 105, 109, 97, 112, 59, 25272, 3072, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 10562, 10579, 10622, 10633, 10648, 10714, 10729, 10773, 10778, 10840, 10845, 10883, 10901, 10916, 10920, 11012, 11015, 11076, 11135, 11182, 11316, 11367, 11388, 11497, 256, 103, 116, 10567, 10571, 59, 49152, 8921, 824, 256, 59, 118, 10576, 3023, 49152, 8811, 8402, 384, 101, 108, 116, 10586, 10610, 10614, 102, 116, 256, 97, 114, 10593, 10599, 114, 114, 111, 119, 59, 25037, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25038, 59, 49152, 8920, 824, 256, 59, 118, 10619, 3143, 49152, 8810, 8402, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25039, 256, 68, 100, 10638, 10643, 97, 115, 104, 59, 25263, 97, 115, 104, 59, 25262, 640, 98, 99, 110, 112, 116, 10659, 10663, 10668, 10673, 10700, 108, 97, 187, 734, 117, 116, 101, 59, 16708, 103, 59, 49152, 8736, 8402, 640, 59, 69, 105, 111, 112, 3460, 10684, 10688, 10693, 10696, 59, 49152, 10864, 824, 100, 59, 49152, 8779, 824, 115, 59, 16713, 114, 111, 248, 3460, 117, 114, 256, 59, 97, 10707, 10708, 26222, 108, 256, 59, 115, 10707, 2872, 499, 10719, 0, 10723, 112, 32955, 160, 2871, 109, 112, 256, 59, 101, 3065, 3072, 640, 97, 101, 111, 117, 121, 10740, 10750, 10755, 10768, 10771, 496, 10745, 0, 10747, 59, 27203, 111, 110, 59, 16712, 100, 105, 108, 59, 16710, 110, 103, 256, 59, 100, 3454, 10762, 111, 116, 59, 49152, 10861, 824, 112, 59, 27202, 59, 17469, 97, 115, 104, 59, 24595, 896, 59, 65, 97, 100, 113, 115, 120, 2962, 10793, 10797, 10811, 10817, 10821, 10832, 114, 114, 59, 25047, 114, 256, 104, 114, 10803, 10806, 107, 59, 26916, 256, 59, 111, 5106, 5104, 111, 116, 59, 49152, 8784, 824, 117, 105, 246, 2915, 256, 101, 105, 10826, 10830, 97, 114, 59, 26920, 237, 2968, 105, 115, 116, 256, 59, 115, 2976, 2975, 114, 59, 49152, 55349, 56619, 512, 69, 101, 115, 116, 3013, 10854, 10873, 10876, 384, 59, 113, 115, 3004, 10861, 3041, 384, 59, 113, 115, 3004, 3013, 10868, 108, 97, 110, 244, 3042, 105, 237, 3050, 256, 59, 114, 2998, 10881, 187, 2999, 384, 65, 97, 112, 10890, 10893, 10897, 114, 242, 10609, 114, 114, 59, 25006, 97, 114, 59, 27378, 384, 59, 115, 118, 3981, 10908, 3980, 256, 59, 100, 10913, 10914, 25340, 59, 25338, 99, 121, 59, 17498, 896, 65, 69, 97, 100, 101, 115, 116, 10935, 10938, 10942, 10946, 10949, 10998, 11001, 114, 242, 10598, 59, 49152, 8806, 824, 114, 114, 59, 24986, 114, 59, 24613, 512, 59, 102, 113, 115, 3131, 10958, 10979, 10991, 116, 256, 97, 114, 10964, 10969, 114, 114, 111, 247, 10945, 105, 103, 104, 116, 97, 114, 114, 111, 247, 10896, 384, 59, 113, 115, 3131, 10938, 10986, 108, 97, 110, 244, 3157, 256, 59, 115, 3157, 10996, 187, 3126, 105, 237, 3165, 256, 59, 114, 3125, 11006, 105, 256, 59, 101, 3098, 3109, 105, 228, 3472, 256, 112, 116, 11020, 11025, 102, 59, 49152, 55349, 56671, 33152, 172, 59, 105, 110, 11033, 11034, 11062, 16556, 110, 512, 59, 69, 100, 118, 2953, 11044, 11048, 11054, 59, 49152, 8953, 824, 111, 116, 59, 49152, 8949, 824, 481, 2953, 11059, 11061, 59, 25335, 59, 25334, 105, 256, 59, 118, 3256, 11068, 481, 3256, 11073, 11075, 59, 25342, 59, 25341, 384, 97, 111, 114, 11083, 11107, 11113, 114, 512, 59, 97, 115, 116, 2939, 11093, 11098, 11103, 108, 108, 101, 236, 2939, 108, 59, 49152, 11005, 8421, 59, 49152, 8706, 824, 108, 105, 110, 116, 59, 27156, 384, 59, 99, 101, 3218, 11120, 11123, 117, 229, 3237, 256, 59, 99, 3224, 11128, 256, 59, 101, 3218, 11133, 241, 3224, 512, 65, 97, 105, 116, 11144, 11147, 11165, 11175, 114, 242, 10632, 114, 114, 384, 59, 99, 119, 11156, 11157, 11161, 24987, 59, 49152, 10547, 824, 59, 49152, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 187, 11157, 114, 105, 256, 59, 101, 3275, 3286, 896, 99, 104, 105, 109, 112, 113, 117, 11197, 11213, 11225, 11012, 2936, 11236, 11247, 512, 59, 99, 101, 114, 3378, 11206, 3383, 11209, 117, 229, 3397, 59, 49152, 55349, 56515, 111, 114, 116, 621, 11013, 0, 0, 11222, 97, 114, 225, 11094, 109, 256, 59, 101, 3438, 11231, 256, 59, 113, 3444, 3443, 115, 117, 256, 98, 112, 11243, 11245, 229, 3320, 229, 3339, 384, 98, 99, 112, 11254, 11281, 11289, 512, 59, 69, 101, 115, 11263, 11264, 3362, 11268, 25220, 59, 49152, 10949, 824, 101, 116, 256, 59, 101, 3355, 11275, 113, 256, 59, 113, 3363, 11264, 99, 256, 59, 101, 3378, 11287, 241, 3384, 512, 59, 69, 101, 115, 11298, 11299, 3423, 11303, 25221, 59, 49152, 10950, 824, 101, 116, 256, 59, 101, 3416, 11310, 113, 256, 59, 113, 3424, 11299, 512, 103, 105, 108, 114, 11325, 11327, 11333, 11335, 236, 3031, 108, 100, 101, 32827, 241, 16625, 231, 3139, 105, 97, 110, 103, 108, 101, 256, 108, 114, 11346, 11356, 101, 102, 116, 256, 59, 101, 3098, 11354, 241, 3110, 105, 103, 104, 116, 256, 59, 101, 3275, 11365, 241, 3287, 256, 59, 109, 11372, 11373, 17341, 384, 59, 101, 115, 11380, 11381, 11385, 16419, 114, 111, 59, 24854, 112, 59, 24583, 1152, 68, 72, 97, 100, 103, 105, 108, 114, 115, 11407, 11412, 11417, 11422, 11427, 11440, 11446, 11475, 11491, 97, 115, 104, 59, 25261, 97, 114, 114, 59, 26884, 112, 59, 49152, 8781, 8402, 97, 115, 104, 59, 25260, 256, 101, 116, 11432, 11436, 59, 49152, 8805, 8402, 59, 49152, 62, 8402, 110, 102, 105, 110, 59, 27102, 384, 65, 101, 116, 11453, 11457, 11461, 114, 114, 59, 26882, 59, 49152, 8804, 8402, 256, 59, 114, 11466, 11469, 49152, 60, 8402, 105, 101, 59, 49152, 8884, 8402, 256, 65, 116, 11480, 11484, 114, 114, 59, 26883, 114, 105, 101, 59, 49152, 8885, 8402, 105, 109, 59, 49152, 8764, 8402, 384, 65, 97, 110, 11504, 11508, 11522, 114, 114, 59, 25046, 114, 256, 104, 114, 11514, 11517, 107, 59, 26915, 256, 59, 111, 5095, 5093, 101, 97, 114, 59, 26919, 4691, 6805, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11565, 0, 11576, 11592, 11616, 11621, 11634, 11652, 6919, 0, 0, 11661, 11691, 0, 11720, 11726, 0, 11740, 11801, 11819, 11838, 11843, 256, 99, 115, 11569, 6807, 117, 116, 101, 32827, 243, 16627, 256, 105, 121, 11580, 11589, 114, 256, 59, 99, 6814, 11586, 32827, 244, 16628, 59, 17470, 640, 97, 98, 105, 111, 115, 6816, 11602, 11607, 456, 11610, 108, 97, 99, 59, 16721, 118, 59, 27192, 111, 108, 100, 59, 27068, 108, 105, 103, 59, 16723, 256, 99, 114, 11625, 11629, 105, 114, 59, 27071, 59, 49152, 55349, 56620, 879, 11641, 0, 0, 11644, 0, 11650, 110, 59, 17115, 97, 118, 101, 32827, 242, 16626, 59, 27073, 256, 98, 109, 11656, 3572, 97, 114, 59, 27061, 512, 97, 99, 105, 116, 11669, 11672, 11685, 11688, 114, 242, 6784, 256, 105, 114, 11677, 11680, 114, 59, 27070, 111, 115, 115, 59, 27067, 110, 229, 3666, 59, 27072, 384, 97, 101, 105, 11697, 11701, 11705, 99, 114, 59, 16717, 103, 97, 59, 17353, 384, 99, 100, 110, 11712, 11717, 461, 114, 111, 110, 59, 17343, 59, 27062, 112, 102, 59, 49152, 55349, 56672, 384, 97, 101, 108, 11732, 11735, 466, 114, 59, 27063, 114, 112, 59, 27065, 896, 59, 97, 100, 105, 111, 115, 118, 11754, 11755, 11758, 11784, 11789, 11792, 11798, 25128, 114, 242, 6790, 512, 59, 101, 102, 109, 11767, 11768, 11778, 11781, 27229, 114, 256, 59, 111, 11774, 11775, 24884, 102, 187, 11775, 32827, 170, 16554, 32827, 186, 16570, 103, 111, 102, 59, 25270, 114, 59, 27222, 108, 111, 112, 101, 59, 27223, 59, 27227, 384, 99, 108, 111, 11807, 11809, 11815, 242, 11777, 97, 115, 104, 32827, 248, 16632, 108, 59, 25240, 105, 364, 11823, 11828, 100, 101, 32827, 245, 16629, 101, 115, 256, 59, 97, 475, 11834, 115, 59, 27190, 109, 108, 32827, 246, 16630, 98, 97, 114, 59, 25405, 2785, 11870, 0, 11901, 0, 11904, 11933, 0, 11938, 11961, 0, 0, 11979, 3740, 0, 12051, 0, 0, 12075, 12220, 0, 12232, 114, 512, 59, 97, 115, 116, 1027, 11879, 11890, 3717, 33024, 182, 59, 108, 11885, 11886, 16566, 108, 101, 236, 1027, 617, 11896, 0, 0, 11899, 109, 59, 27379, 59, 27389, 121, 59, 17471, 114, 640, 99, 105, 109, 112, 116, 11915, 11919, 11923, 6245, 11927, 110, 116, 59, 16421, 111, 100, 59, 16430, 105, 108, 59, 24624, 101, 110, 107, 59, 24625, 114, 59, 49152, 55349, 56621, 384, 105, 109, 111, 11944, 11952, 11956, 256, 59, 118, 11949, 11950, 17350, 59, 17365, 109, 97, 244, 2678, 110, 101, 59, 26126, 384, 59, 116, 118, 11967, 11968, 11976, 17344, 99, 104, 102, 111, 114, 107, 187, 8189, 59, 17366, 256, 97, 117, 11983, 11999, 110, 256, 99, 107, 11989, 11997, 107, 256, 59, 104, 8692, 11995, 59, 24846, 246, 8692, 115, 1152, 59, 97, 98, 99, 100, 101, 109, 115, 116, 12019, 12020, 6408, 12025, 12029, 12036, 12038, 12042, 12046, 16427, 99, 105, 114, 59, 27171, 105, 114, 59, 27170, 256, 111, 117, 7488, 12034, 59, 27173, 59, 27250, 110, 32955, 177, 3741, 105, 109, 59, 27174, 119, 111, 59, 27175, 384, 105, 112, 117, 12057, 12064, 12069, 110, 116, 105, 110, 116, 59, 27157, 102, 59, 49152, 55349, 56673, 110, 100, 32827, 163, 16547, 1280, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 3784, 12095, 12097, 12100, 12103, 12161, 12169, 12178, 12158, 12214, 59, 27315, 112, 59, 27319, 117, 229, 3801, 256, 59, 99, 3790, 12108, 768, 59, 97, 99, 101, 110, 115, 3784, 12121, 12127, 12134, 12136, 12158, 112, 112, 114, 111, 248, 12099, 117, 114, 108, 121, 101, 241, 3801, 241, 3790, 384, 97, 101, 115, 12143, 12150, 12154, 112, 112, 114, 111, 120, 59, 27321, 113, 113, 59, 27317, 105, 109, 59, 25320, 105, 237, 3807, 109, 101, 256, 59, 115, 12168, 3758, 24626, 384, 69, 97, 115, 12152, 12176, 12154, 240, 12149, 384, 100, 102, 112, 3820, 12185, 12207, 384, 97, 108, 115, 12192, 12197, 12202, 108, 97, 114, 59, 25390, 105, 110, 101, 59, 25362, 117, 114, 102, 59, 25363, 256, 59, 116, 3835, 12212, 239, 3835, 114, 101, 108, 59, 25264, 256, 99, 105, 12224, 12229, 114, 59, 49152, 55349, 56517, 59, 17352, 110, 99, 115, 112, 59, 24584, 768, 102, 105, 111, 112, 115, 117, 12250, 8930, 12255, 12261, 12267, 12273, 114, 59, 49152, 55349, 56622, 112, 102, 59, 49152, 55349, 56674, 114, 105, 109, 101, 59, 24663, 99, 114, 59, 49152, 55349, 56518, 384, 97, 101, 111, 12280, 12297, 12307, 116, 256, 101, 105, 12286, 12293, 114, 110, 105, 111, 110, 243, 1712, 110, 116, 59, 27158, 115, 116, 256, 59, 101, 12304, 12305, 16447, 241, 7961, 244, 3860, 2688, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 12352, 12369, 12373, 12377, 12512, 12558, 12587, 12615, 12642, 12658, 12686, 12806, 12821, 12836, 12841, 12888, 12910, 12914, 12944, 12976, 12983, 384, 97, 114, 116, 12359, 12362, 12364, 114, 242, 4275, 242, 989, 97, 105, 108, 59, 26908, 97, 114, 242, 7269, 97, 114, 59, 26980, 896, 99, 100, 101, 110, 113, 114, 116, 12392, 12405, 12408, 12415, 12431, 12436, 12492, 256, 101, 117, 12397, 12401, 59, 49152, 8765, 817, 116, 101, 59, 16725, 105, 227, 4462, 109, 112, 116, 121, 118, 59, 27059, 103, 512, 59, 100, 101, 108, 4049, 12425, 12427, 12429, 59, 27026, 59, 27045, 229, 4049, 117, 111, 32827, 187, 16571, 114, 1408, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 4060, 12460, 12463, 12471, 12473, 12476, 12478, 12480, 12483, 12487, 12490, 112, 59, 26997, 256, 59, 102, 4064, 12468, 115, 59, 26912, 59, 26931, 115, 59, 26910, 235, 8797, 240, 10030, 108, 59, 26949, 105, 109, 59, 26996, 108, 59, 24995, 59, 24989, 256, 97, 105, 12497, 12501, 105, 108, 59, 26906, 111, 256, 59, 110, 12507, 12508, 25142, 97, 108, 243, 3870, 384, 97, 98, 114, 12519, 12522, 12526, 114, 242, 6117, 114, 107, 59, 26483, 256, 97, 107, 12531, 12541, 99, 256, 101, 107, 12537, 12539, 59, 16509, 59, 16477, 256, 101, 115, 12546, 12548, 59, 27020, 108, 256, 100, 117, 12554, 12556, 59, 27022, 59, 27024, 512, 97, 101, 117, 121, 12567, 12572, 12583, 12585, 114, 111, 110, 59, 16729, 256, 100, 105, 12577, 12581, 105, 108, 59, 16727, 236, 4082, 226, 12538, 59, 17472, 512, 99, 108, 113, 115, 12596, 12599, 12605, 12612, 97, 59, 26935, 100, 104, 97, 114, 59, 26985, 117, 111, 256, 59, 114, 526, 525, 104, 59, 25011, 384, 97, 99, 103, 12622, 12639, 3908, 108, 512, 59, 105, 112, 115, 3960, 12632, 12635, 4252, 110, 229, 4283, 97, 114, 244, 4009, 116, 59, 26029, 384, 105, 108, 114, 12649, 4131, 12654, 115, 104, 116, 59, 27005, 59, 49152, 55349, 56623, 256, 97, 111, 12663, 12678, 114, 256, 100, 117, 12669, 12671, 187, 1147, 256, 59, 108, 4241, 12676, 59, 26988, 256, 59, 118, 12683, 12684, 17345, 59, 17393, 384, 103, 110, 115, 12693, 12793, 12796, 104, 116, 768, 97, 104, 108, 114, 115, 116, 12708, 12720, 12738, 12760, 12772, 12782, 114, 114, 111, 119, 256, 59, 116, 4060, 12717, 97, 233, 12488, 97, 114, 112, 111, 111, 110, 256, 100, 117, 12731, 12735, 111, 119, 238, 12670, 112, 187, 4242, 101, 102, 116, 256, 97, 104, 12746, 12752, 114, 114, 111, 119, 243, 4074, 97, 114, 112, 111, 111, 110, 243, 1361, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 25033, 113, 117, 105, 103, 97, 114, 114, 111, 247, 12491, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25292, 103, 59, 17114, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7986, 384, 97, 104, 109, 12813, 12816, 12819, 114, 242, 4074, 97, 242, 1361, 59, 24591, 111, 117, 115, 116, 256, 59, 97, 12830, 12831, 25521, 99, 104, 101, 187, 12831, 109, 105, 100, 59, 27374, 512, 97, 98, 112, 116, 12850, 12861, 12864, 12882, 256, 110, 114, 12855, 12858, 103, 59, 26605, 114, 59, 25086, 114, 235, 4099, 384, 97, 102, 108, 12871, 12874, 12878, 114, 59, 27014, 59, 49152, 55349, 56675, 117, 115, 59, 27182, 105, 109, 101, 115, 59, 27189, 256, 97, 112, 12893, 12903, 114, 256, 59, 103, 12899, 12900, 16425, 116, 59, 27028, 111, 108, 105, 110, 116, 59, 27154, 97, 114, 242, 12771, 512, 97, 99, 104, 113, 12923, 12928, 4284, 12933, 113, 117, 111, 59, 24634, 114, 59, 49152, 55349, 56519, 256, 98, 117, 12539, 12938, 111, 256, 59, 114, 532, 531, 384, 104, 105, 114, 12951, 12955, 12960, 114, 101, 229, 12792, 109, 101, 115, 59, 25290, 105, 512, 59, 101, 102, 108, 12970, 4185, 6177, 12971, 26041, 116, 114, 105, 59, 27086, 108, 117, 104, 97, 114, 59, 26984, 59, 24862, 3425, 13013, 13019, 13023, 13100, 13112, 13169, 0, 13178, 13220, 0, 0, 13292, 13296, 0, 13352, 13384, 13402, 13485, 13489, 13514, 13553, 0, 13846, 0, 0, 13875, 99, 117, 116, 101, 59, 16731, 113, 117, 239, 10170, 1280, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 4589, 13043, 13045, 13055, 13058, 13067, 13071, 13087, 13094, 13097, 59, 27316, 496, 13050, 0, 13052, 59, 27320, 111, 110, 59, 16737, 117, 229, 4606, 256, 59, 100, 4595, 13063, 105, 108, 59, 16735, 114, 99, 59, 16733, 384, 69, 97, 115, 13078, 13080, 13083, 59, 27318, 112, 59, 27322, 105, 109, 59, 25321, 111, 108, 105, 110, 116, 59, 27155, 105, 237, 4612, 59, 17473, 111, 116, 384, 59, 98, 101, 13108, 7495, 13109, 25285, 59, 27238, 896, 65, 97, 99, 109, 115, 116, 120, 13126, 13130, 13143, 13147, 13150, 13155, 13165, 114, 114, 59, 25048, 114, 256, 104, 114, 13136, 13138, 235, 8744, 256, 59, 111, 2614, 2612, 116, 32827, 167, 16551, 105, 59, 16443, 119, 97, 114, 59, 26921, 109, 256, 105, 110, 13161, 240, 110, 117, 243, 241, 116, 59, 26422, 114, 256, 59, 111, 13174, 8277, 49152, 55349, 56624, 512, 97, 99, 111, 121, 13186, 13190, 13201, 13216, 114, 112, 59, 26223, 256, 104, 121, 13195, 13199, 99, 121, 59, 17481, 59, 17480, 114, 116, 621, 13209, 0, 0, 13212, 105, 228, 5220, 97, 114, 97, 236, 11887, 32827, 173, 16557, 256, 103, 109, 13224, 13236, 109, 97, 384, 59, 102, 118, 13233, 13234, 13234, 17347, 59, 17346, 1024, 59, 100, 101, 103, 108, 110, 112, 114, 4779, 13253, 13257, 13262, 13270, 13278, 13281, 13286, 111, 116, 59, 27242, 256, 59, 113, 4785, 4784, 256, 59, 69, 13267, 13268, 27294, 59, 27296, 256, 59, 69, 13275, 13276, 27293, 59, 27295, 101, 59, 25158, 108, 117, 115, 59, 27172, 97, 114, 114, 59, 26994, 97, 114, 242, 4413, 512, 97, 101, 105, 116, 13304, 13320, 13327, 13335, 256, 108, 115, 13309, 13316, 108, 115, 101, 116, 109, 233, 13162, 104, 112, 59, 27187, 112, 97, 114, 115, 108, 59, 27108, 256, 100, 108, 5219, 13332, 101, 59, 25379, 256, 59, 101, 13340, 13341, 27306, 256, 59, 115, 13346, 13347, 27308, 59, 49152, 10924, 65024, 384, 102, 108, 112, 13358, 13363, 13378, 116, 99, 121, 59, 17484, 256, 59, 98, 13368, 13369, 16431, 256, 59, 97, 13374, 13375, 27076, 114, 59, 25407, 102, 59, 49152, 55349, 56676, 97, 256, 100, 114, 13389, 1026, 101, 115, 256, 59, 117, 13396, 13397, 26208, 105, 116, 187, 13397, 384, 99, 115, 117, 13408, 13433, 13471, 256, 97, 117, 13413, 13423, 112, 256, 59, 115, 4488, 13419, 59, 49152, 8851, 65024, 112, 256, 59, 115, 4532, 13429, 59, 49152, 8852, 65024, 117, 256, 98, 112, 13439, 13455, 384, 59, 101, 115, 4503, 4508, 13446, 101, 116, 256, 59, 101, 4503, 13453, 241, 4509, 384, 59, 101, 115, 4520, 4525, 13462, 101, 116, 256, 59, 101, 4520, 13469, 241, 4526, 384, 59, 97, 102, 4475, 13478, 1456, 114, 357, 13483, 1457, 187, 4476, 97, 114, 242, 4424, 512, 99, 101, 109, 116, 13497, 13502, 13506, 13509, 114, 59, 49152, 55349, 56520, 116, 109, 238, 241, 105, 236, 13333, 97, 114, 230, 4542, 256, 97, 114, 13518, 13525, 114, 256, 59, 102, 13524, 6079, 26118, 256, 97, 110, 13530, 13549, 105, 103, 104, 116, 256, 101, 112, 13539, 13546, 112, 115, 105, 108, 111, 238, 7904, 104, 233, 11951, 115, 187, 10322, 640, 98, 99, 109, 110, 112, 13563, 13662, 4617, 13707, 13710, 1152, 59, 69, 100, 101, 109, 110, 112, 114, 115, 13582, 13583, 13585, 13589, 13598, 13603, 13612, 13617, 13622, 25218, 59, 27333, 111, 116, 59, 27325, 256, 59, 100, 4570, 13594, 111, 116, 59, 27331, 117, 108, 116, 59, 27329, 256, 69, 101, 13608, 13610, 59, 27339, 59, 25226, 108, 117, 115, 59, 27327, 97, 114, 114, 59, 27001, 384, 101, 105, 117, 13629, 13650, 13653, 116, 384, 59, 101, 110, 13582, 13637, 13643, 113, 256, 59, 113, 4570, 13583, 101, 113, 256, 59, 113, 13611, 13608, 109, 59, 27335, 256, 98, 112, 13658, 13660, 59, 27349, 59, 27347, 99, 768, 59, 97, 99, 101, 110, 115, 4589, 13676, 13682, 13689, 13691, 13094, 112, 112, 114, 111, 248, 13050, 117, 114, 108, 121, 101, 241, 4606, 241, 4595, 384, 97, 101, 115, 13698, 13704, 13083, 112, 112, 114, 111, 248, 13082, 113, 241, 13079, 103, 59, 26218, 1664, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 13737, 13740, 13743, 4636, 13746, 13748, 13760, 13769, 13781, 13786, 13791, 13800, 13805, 32827, 185, 16569, 32827, 178, 16562, 32827, 179, 16563, 59, 27334, 256, 111, 115, 13753, 13756, 116, 59, 27326, 117, 98, 59, 27352, 256, 59, 100, 4642, 13765, 111, 116, 59, 27332, 115, 256, 111, 117, 13775, 13778, 108, 59, 26569, 98, 59, 27351, 97, 114, 114, 59, 27003, 117, 108, 116, 59, 27330, 256, 69, 101, 13796, 13798, 59, 27340, 59, 25227, 108, 117, 115, 59, 27328, 384, 101, 105, 117, 13812, 13833, 13836, 116, 384, 59, 101, 110, 4636, 13820, 13826, 113, 256, 59, 113, 4642, 13746, 101, 113, 256, 59, 113, 13799, 13796, 109, 59, 27336, 256, 98, 112, 13841, 13843, 59, 27348, 59, 27350, 384, 65, 97, 110, 13852, 13856, 13869, 114, 114, 59, 25049, 114, 256, 104, 114, 13862, 13864, 235, 8750, 256, 59, 111, 2603, 2601, 119, 97, 114, 59, 26922, 108, 105, 103, 32827, 223, 16607, 3041, 13905, 13917, 13920, 4814, 13939, 13945, 0, 13950, 14018, 0, 0, 0, 0, 0, 14043, 14083, 0, 14089, 14188, 0, 0, 0, 14215, 626, 13910, 0, 0, 13915, 103, 101, 116, 59, 25366, 59, 17348, 114, 235, 3679, 384, 97, 101, 121, 13926, 13931, 13936, 114, 111, 110, 59, 16741, 100, 105, 108, 59, 16739, 59, 17474, 108, 114, 101, 99, 59, 25365, 114, 59, 49152, 55349, 56625, 512, 101, 105, 107, 111, 13958, 13981, 14005, 14012, 498, 13963, 0, 13969, 101, 256, 52, 102, 4740, 4737, 97, 384, 59, 115, 118, 13976, 13977, 13979, 17336, 121, 109, 59, 17361, 256, 99, 110, 13986, 14002, 107, 256, 97, 115, 13992, 13998, 112, 112, 114, 111, 248, 4801, 105, 109, 187, 4780, 115, 240, 4766, 256, 97, 115, 14010, 13998, 240, 4801, 114, 110, 32827, 254, 16638, 492, 799, 14022, 8935, 101, 115, 33152, 215, 59, 98, 100, 14031, 14032, 14040, 16599, 256, 59, 97, 6415, 14037, 114, 59, 27185, 59, 27184, 384, 101, 112, 115, 14049, 14051, 14080, 225, 10829, 512, 59, 98, 99, 102, 1158, 14060, 14064, 14068, 111, 116, 59, 25398, 105, 114, 59, 27377, 256, 59, 111, 14073, 14076, 49152, 55349, 56677, 114, 107, 59, 27354, 225, 13154, 114, 105, 109, 101, 59, 24628, 384, 97, 105, 112, 14095, 14098, 14180, 100, 229, 4680, 896, 97, 100, 101, 109, 112, 115, 116, 14113, 14157, 14144, 14161, 14167, 14172, 14175, 110, 103, 108, 101, 640, 59, 100, 108, 113, 114, 14128, 14129, 14134, 14144, 14146, 26037, 111, 119, 110, 187, 7611, 101, 102, 116, 256, 59, 101, 10240, 14142, 241, 2350, 59, 25180, 105, 103, 104, 116, 256, 59, 101, 12970, 14155, 241, 4186, 111, 116, 59, 26092, 105, 110, 117, 115, 59, 27194, 108, 117, 115, 59, 27193, 98, 59, 27085, 105, 109, 101, 59, 27195, 101, 122, 105, 117, 109, 59, 25570, 384, 99, 104, 116, 14194, 14205, 14209, 256, 114, 121, 14199, 14203, 59, 49152, 55349, 56521, 59, 17478, 99, 121, 59, 17499, 114, 111, 107, 59, 16743, 256, 105, 111, 14219, 14222, 120, 244, 6007, 104, 101, 97, 100, 256, 108, 114, 14231, 14240, 101, 102, 116, 97, 114, 114, 111, 247, 2127, 105, 103, 104, 116, 97, 114, 114, 111, 119, 187, 3933, 2304, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 14288, 14291, 14295, 14308, 14320, 14332, 14350, 14364, 14371, 14388, 14417, 14429, 14443, 14505, 14540, 14546, 14570, 14582, 114, 242, 1005, 97, 114, 59, 26979, 256, 99, 114, 14300, 14306, 117, 116, 101, 32827, 250, 16634, 242, 4432, 114, 483, 14314, 0, 14317, 121, 59, 17502, 118, 101, 59, 16749, 256, 105, 121, 14325, 14330, 114, 99, 32827, 251, 16635, 59, 17475, 384, 97, 98, 104, 14339, 14342, 14347, 114, 242, 5037, 108, 97, 99, 59, 16753, 97, 242, 5059, 256, 105, 114, 14355, 14360, 115, 104, 116, 59, 27006, 59, 49152, 55349, 56626, 114, 97, 118, 101, 32827, 249, 16633, 353, 14375, 14385, 114, 256, 108, 114, 14380, 14382, 187, 2391, 187, 4227, 108, 107, 59, 25984, 256, 99, 116, 14393, 14413, 623, 14399, 0, 0, 14410, 114, 110, 256, 59, 101, 14405, 14406, 25372, 114, 187, 14406, 111, 112, 59, 25359, 114, 105, 59, 26104, 256, 97, 108, 14422, 14426, 99, 114, 59, 16747, 32955, 168, 841, 256, 103, 112, 14434, 14438, 111, 110, 59, 16755, 102, 59, 49152, 55349, 56678, 768, 97, 100, 104, 108, 115, 117, 4427, 14456, 14461, 4978, 14481, 14496, 111, 119, 110, 225, 5043, 97, 114, 112, 111, 111, 110, 256, 108, 114, 14472, 14476, 101, 102, 244, 14381, 105, 103, 104, 244, 14383, 105, 384, 59, 104, 108, 14489, 14490, 14492, 17349, 187, 5114, 111, 110, 187, 14490, 112, 97, 114, 114, 111, 119, 115, 59, 25032, 384, 99, 105, 116, 14512, 14532, 14536, 623, 14518, 0, 0, 14529, 114, 110, 256, 59, 101, 14524, 14525, 25373, 114, 187, 14525, 111, 112, 59, 25358, 110, 103, 59, 16751, 114, 105, 59, 26105, 99, 114, 59, 49152, 55349, 56522, 384, 100, 105, 114, 14553, 14557, 14562, 111, 116, 59, 25328, 108, 100, 101, 59, 16745, 105, 256, 59, 102, 14128, 14568, 187, 6163, 256, 97, 109, 14575, 14578, 114, 242, 14504, 108, 32827, 252, 16636, 97, 110, 103, 108, 101, 59, 27047, 1920, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 14620, 14623, 14633, 14637, 14773, 14776, 14781, 14815, 14820, 14824, 14835, 14841, 14845, 14849, 14880, 114, 242, 1015, 97, 114, 256, 59, 118, 14630, 14631, 27368, 59, 27369, 97, 115, 232, 993, 256, 110, 114, 14642, 14647, 103, 114, 116, 59, 27036, 896, 101, 107, 110, 112, 114, 115, 116, 13539, 14662, 14667, 14674, 14685, 14692, 14742, 97, 112, 112, 225, 9237, 111, 116, 104, 105, 110, 231, 7830, 384, 104, 105, 114, 13547, 11976, 14681, 111, 112, 244, 12213, 256, 59, 104, 5047, 14690, 239, 12685, 256, 105, 117, 14697, 14701, 103, 109, 225, 13235, 256, 98, 112, 14706, 14724, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14717, 14720, 49152, 8842, 65024, 59, 49152, 10955, 65024, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14735, 14738, 49152, 8843, 65024, 59, 49152, 10956, 65024, 256, 104, 114, 14747, 14751, 101, 116, 225, 13980, 105, 97, 110, 103, 108, 101, 256, 108, 114, 14762, 14767, 101, 102, 116, 187, 2341, 105, 103, 104, 116, 187, 4177, 121, 59, 17458, 97, 115, 104, 187, 4150, 384, 101, 108, 114, 14788, 14802, 14807, 384, 59, 98, 101, 11754, 14795, 14799, 97, 114, 59, 25275, 113, 59, 25178, 108, 105, 112, 59, 25326, 256, 98, 116, 14812, 5224, 97, 242, 5225, 114, 59, 49152, 55349, 56627, 116, 114, 233, 14766, 115, 117, 256, 98, 112, 14831, 14833, 187, 3356, 187, 3417, 112, 102, 59, 49152, 55349, 56679, 114, 111, 240, 3835, 116, 114, 233, 14772, 256, 99, 117, 14854, 14859, 114, 59, 49152, 55349, 56523, 256, 98, 112, 14864, 14872, 110, 256, 69, 101, 14720, 14870, 187, 14718, 110, 256, 69, 101, 14738, 14878, 187, 14736, 105, 103, 122, 97, 103, 59, 27034, 896, 99, 101, 102, 111, 112, 114, 115, 14902, 14907, 14934, 14939, 14932, 14945, 14954, 105, 114, 99, 59, 16757, 256, 100, 105, 14912, 14929, 256, 98, 103, 14917, 14921, 97, 114, 59, 27231, 101, 256, 59, 113, 5626, 14927, 59, 25177, 101, 114, 112, 59, 24856, 114, 59, 49152, 55349, 56628, 112, 102, 59, 49152, 55349, 56680, 256, 59, 101, 5241, 14950, 97, 116, 232, 5241, 99, 114, 59, 49152, 55349, 56524, 2787, 6030, 14983, 0, 14987, 0, 14992, 15003, 0, 0, 15005, 15016, 15019, 15023, 0, 0, 15043, 15054, 0, 15064, 6108, 6111, 116, 114, 233, 6097, 114, 59, 49152, 55349, 56629, 256, 65, 97, 14996, 14999, 114, 242, 963, 114, 242, 2550, 59, 17342, 256, 65, 97, 15009, 15012, 114, 242, 952, 114, 242, 2539, 97, 240, 10003, 105, 115, 59, 25339, 384, 100, 112, 116, 6052, 15029, 15038, 256, 102, 108, 15034, 6057, 59, 49152, 55349, 56681, 105, 109, 229, 6066, 256, 65, 97, 15047, 15050, 114, 242, 974, 114, 242, 2561, 256, 99, 113, 15058, 6072, 114, 59, 49152, 55349, 56525, 256, 112, 116, 6102, 15068, 114, 233, 6100, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 15088, 15101, 15112, 15116, 15121, 15125, 15131, 15137, 99, 256, 117, 121, 15094, 15099, 116, 101, 32827, 253, 16637, 59, 17487, 256, 105, 121, 15106, 15110, 114, 99, 59, 16759, 59, 17483, 110, 32827, 165, 16549, 114, 59, 49152, 55349, 56630, 99, 121, 59, 17495, 112, 102, 59, 49152, 55349, 56682, 99, 114, 59, 49152, 55349, 56526, 256, 99, 109, 15142, 15145, 121, 59, 17486, 108, 32827, 255, 16639, 1280, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 15170, 15176, 15188, 15192, 15204, 15209, 15213, 15220, 15226, 15232, 99, 117, 116, 101, 59, 16762, 256, 97, 121, 15181, 15186, 114, 111, 110, 59, 16766, 59, 17463, 111, 116, 59, 16764, 256, 101, 116, 15197, 15201, 116, 114, 230, 5471, 97, 59, 17334, 114, 59, 49152, 55349, 56631, 99, 121, 59, 17462, 103, 114, 97, 114, 114, 59, 25053, 112, 102, 59, 49152, 55349, 56683, 99, 114, 59, 49152, 55349, 56527, 256, 106, 110, 15237, 15239, 59, 24589, 106, 59, 24588]);
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/generated/decode-data-xml.js
var require_decode_data_xml = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/generated/decode-data-xml.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new Uint16Array([512, 97, 103, 108, 113, 9, 21, 24, 27, 621, 15, 0, 0, 18, 112, 59, 16422, 111, 115, 59, 16423, 116, 59, 16446, 116, 59, 16444, 117, 111, 116, 59, 16418]);
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/decode_codepoint.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.replaceCodePoint = exports.fromCodePoint = void 0;
    var decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    exports.fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
    function replaceCodePoint(codePoint) {
      var _a2;
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
      }
      return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
    }
    exports.replaceCodePoint = replaceCodePoint;
    function decodeCodePoint(codePoint) {
      return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
    }
    exports.default = decodeCodePoint;
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/decode.js
var require_decode = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/decode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
    var decode_data_html_js_1 = __importDefault(require_decode_data_html());
    exports.htmlDecodeTree = decode_data_html_js_1.default;
    var decode_data_xml_js_1 = __importDefault(require_decode_data_xml());
    exports.xmlDecodeTree = decode_data_xml_js_1.default;
    var decode_codepoint_js_1 = __importDefault(require_decode_codepoint());
    exports.decodeCodePoint = decode_codepoint_js_1.default;
    var decode_codepoint_js_2 = require_decode_codepoint();
    Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.replaceCodePoint;
    } });
    Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.fromCodePoint;
    } });
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
    })(CharCodes || (CharCodes = {}));
    var BinTrieFlags;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
    function getDecoder(decodeTree) {
      return function decodeHTMLBinary(str, strict) {
        var ret = "";
        var lastIdx = 0;
        var strIdx = 0;
        while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
          ret += str.slice(lastIdx, strIdx);
          lastIdx = strIdx;
          strIdx += 1;
          if (str.charCodeAt(strIdx) === CharCodes.NUM) {
            var start = strIdx + 1;
            var base = 10;
            var cp = str.charCodeAt(start);
            if ((cp | CharCodes.To_LOWER_BIT) === CharCodes.LOWER_X) {
              base = 16;
              strIdx += 1;
              start += 1;
            }
            do
              cp = str.charCodeAt(++strIdx);
            while (cp >= CharCodes.ZERO && cp <= CharCodes.NINE || base === 16 && (cp | CharCodes.To_LOWER_BIT) >= CharCodes.LOWER_A && (cp | CharCodes.To_LOWER_BIT) <= CharCodes.LOWER_F);
            if (start !== strIdx) {
              var entity = str.substring(start, strIdx);
              var parsed = parseInt(entity, base);
              if (str.charCodeAt(strIdx) === CharCodes.SEMI) {
                strIdx += 1;
              } else if (strict) {
                continue;
              }
              ret += (0, decode_codepoint_js_1.default)(parsed);
              lastIdx = strIdx;
            }
            continue;
          }
          var resultIdx = 0;
          var excess = 1;
          var treeIdx = 0;
          var current = decodeTree[treeIdx];
          for (; strIdx < str.length; strIdx++, excess++) {
            treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
            if (treeIdx < 0)
              break;
            current = decodeTree[treeIdx];
            var masked = current & BinTrieFlags.VALUE_LENGTH;
            if (masked) {
              if (!strict || str.charCodeAt(strIdx) === CharCodes.SEMI) {
                resultIdx = treeIdx;
                excess = 0;
              }
              var valueLength = (masked >> 14) - 1;
              if (valueLength === 0)
                break;
              treeIdx += valueLength;
            }
          }
          if (resultIdx !== 0) {
            var valueLength = (decodeTree[resultIdx] & BinTrieFlags.VALUE_LENGTH) >> 14;
            ret += valueLength === 1 ? String.fromCharCode(decodeTree[resultIdx] & ~BinTrieFlags.VALUE_LENGTH) : valueLength === 2 ? String.fromCharCode(decodeTree[resultIdx + 1]) : String.fromCharCode(decodeTree[resultIdx + 1], decodeTree[resultIdx + 2]);
            lastIdx = strIdx - excess + 1;
          }
        }
        return ret + str.slice(lastIdx);
      };
    }
    function determineBranch(decodeTree, current, nodeIdx, char) {
      var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
      var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
      if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
      }
      if (jumpOffset) {
        var value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
      }
      var lo = nodeIdx;
      var hi = lo + branchCount - 1;
      while (lo <= hi) {
        var mid = lo + hi >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) {
          lo = mid + 1;
        } else if (midVal > char) {
          hi = mid - 1;
        } else {
          return decodeTree[mid + branchCount];
        }
      }
      return -1;
    }
    exports.determineBranch = determineBranch;
    var htmlDecoder = getDecoder(decode_data_html_js_1.default);
    var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
    function decodeHTML(str) {
      return htmlDecoder(str, false);
    }
    exports.decodeHTML = decodeHTML;
    function decodeHTMLStrict(str) {
      return htmlDecoder(str, true);
    }
    exports.decodeHTMLStrict = decodeHTMLStrict;
    function decodeXML(str) {
      return xmlDecoder(str, true);
    }
    exports.decodeXML = decodeXML;
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/generated/encode-html.js
var require_encode_html = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/generated/encode-html.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ new Map([[9, "&Tab;"], [10, "&NewLine;"], [33, "&excl;"], [34, "&quot;"], [35, "&num;"], [36, "&dollar;"], [37, "&percnt;"], [38, "&amp;"], [39, "&apos;"], [40, "&lpar;"], [41, "&rpar;"], [42, "&ast;"], [43, "&plus;"], [44, "&comma;"], [46, "&period;"], [47, "&sol;"], [58, "&colon;"], [59, "&semi;"], [60, { v: "&lt;", n: 8402, o: "&nvlt;" }], [61, { v: "&equals;", n: 8421, o: "&bne;" }], [62, { v: "&gt;", n: 8402, o: "&nvgt;" }], [63, "&quest;"], [64, "&commat;"], [91, "&lbrack;"], [92, "&bsol;"], [93, "&rbrack;"], [94, "&Hat;"], [95, "&lowbar;"], [96, "&DiacriticalGrave;"], [102, { n: 106, o: "&fjlig;" }], [123, "&lbrace;"], [124, "&verbar;"], [125, "&rbrace;"], [160, "&nbsp;"], [161, "&iexcl;"], [162, "&cent;"], [163, "&pound;"], [164, "&curren;"], [165, "&yen;"], [166, "&brvbar;"], [167, "&sect;"], [168, "&die;"], [169, "&copy;"], [170, "&ordf;"], [171, "&laquo;"], [172, "&not;"], [173, "&shy;"], [174, "&circledR;"], [175, "&macr;"], [176, "&deg;"], [177, "&PlusMinus;"], [178, "&sup2;"], [179, "&sup3;"], [180, "&acute;"], [181, "&micro;"], [182, "&para;"], [183, "&centerdot;"], [184, "&cedil;"], [185, "&sup1;"], [186, "&ordm;"], [187, "&raquo;"], [188, "&frac14;"], [189, "&frac12;"], [190, "&frac34;"], [191, "&iquest;"], [192, "&Agrave;"], [193, "&Aacute;"], [194, "&Acirc;"], [195, "&Atilde;"], [196, "&Auml;"], [197, "&angst;"], [198, "&AElig;"], [199, "&Ccedil;"], [200, "&Egrave;"], [201, "&Eacute;"], [202, "&Ecirc;"], [203, "&Euml;"], [204, "&Igrave;"], [205, "&Iacute;"], [206, "&Icirc;"], [207, "&Iuml;"], [208, "&ETH;"], [209, "&Ntilde;"], [210, "&Ograve;"], [211, "&Oacute;"], [212, "&Ocirc;"], [213, "&Otilde;"], [214, "&Ouml;"], [215, "&times;"], [216, "&Oslash;"], [217, "&Ugrave;"], [218, "&Uacute;"], [219, "&Ucirc;"], [220, "&Uuml;"], [221, "&Yacute;"], [222, "&THORN;"], [223, "&szlig;"], [224, "&agrave;"], [225, "&aacute;"], [226, "&acirc;"], [227, "&atilde;"], [228, "&auml;"], [229, "&aring;"], [230, "&aelig;"], [231, "&ccedil;"], [232, "&egrave;"], [233, "&eacute;"], [234, "&ecirc;"], [235, "&euml;"], [236, "&igrave;"], [237, "&iacute;"], [238, "&icirc;"], [239, "&iuml;"], [240, "&eth;"], [241, "&ntilde;"], [242, "&ograve;"], [243, "&oacute;"], [244, "&ocirc;"], [245, "&otilde;"], [246, "&ouml;"], [247, "&div;"], [248, "&oslash;"], [249, "&ugrave;"], [250, "&uacute;"], [251, "&ucirc;"], [252, "&uuml;"], [253, "&yacute;"], [254, "&thorn;"], [255, "&yuml;"], [256, "&Amacr;"], [257, "&amacr;"], [258, "&Abreve;"], [259, "&abreve;"], [260, "&Aogon;"], [261, "&aogon;"], [262, "&Cacute;"], [263, "&cacute;"], [264, "&Ccirc;"], [265, "&ccirc;"], [266, "&Cdot;"], [267, "&cdot;"], [268, "&Ccaron;"], [269, "&ccaron;"], [270, "&Dcaron;"], [271, "&dcaron;"], [272, "&Dstrok;"], [273, "&dstrok;"], [274, "&Emacr;"], [275, "&emacr;"], [278, "&Edot;"], [279, "&edot;"], [280, "&Eogon;"], [281, "&eogon;"], [282, "&Ecaron;"], [283, "&ecaron;"], [284, "&Gcirc;"], [285, "&gcirc;"], [286, "&Gbreve;"], [287, "&gbreve;"], [288, "&Gdot;"], [289, "&gdot;"], [290, "&Gcedil;"], [292, "&Hcirc;"], [293, "&hcirc;"], [294, "&Hstrok;"], [295, "&hstrok;"], [296, "&Itilde;"], [297, "&itilde;"], [298, "&Imacr;"], [299, "&imacr;"], [302, "&Iogon;"], [303, "&iogon;"], [304, "&Idot;"], [305, "&imath;"], [306, "&IJlig;"], [307, "&ijlig;"], [308, "&Jcirc;"], [309, "&jcirc;"], [310, "&Kcedil;"], [311, "&kcedil;"], [312, "&kgreen;"], [313, "&Lacute;"], [314, "&lacute;"], [315, "&Lcedil;"], [316, "&lcedil;"], [317, "&Lcaron;"], [318, "&lcaron;"], [319, "&Lmidot;"], [320, "&lmidot;"], [321, "&Lstrok;"], [322, "&lstrok;"], [323, "&Nacute;"], [324, "&nacute;"], [325, "&Ncedil;"], [326, "&ncedil;"], [327, "&Ncaron;"], [328, "&ncaron;"], [329, "&napos;"], [330, "&ENG;"], [331, "&eng;"], [332, "&Omacr;"], [333, "&omacr;"], [336, "&Odblac;"], [337, "&odblac;"], [338, "&OElig;"], [339, "&oelig;"], [340, "&Racute;"], [341, "&racute;"], [342, "&Rcedil;"], [343, "&rcedil;"], [344, "&Rcaron;"], [345, "&rcaron;"], [346, "&Sacute;"], [347, "&sacute;"], [348, "&Scirc;"], [349, "&scirc;"], [350, "&Scedil;"], [351, "&scedil;"], [352, "&Scaron;"], [353, "&scaron;"], [354, "&Tcedil;"], [355, "&tcedil;"], [356, "&Tcaron;"], [357, "&tcaron;"], [358, "&Tstrok;"], [359, "&tstrok;"], [360, "&Utilde;"], [361, "&utilde;"], [362, "&Umacr;"], [363, "&umacr;"], [364, "&Ubreve;"], [365, "&ubreve;"], [366, "&Uring;"], [367, "&uring;"], [368, "&Udblac;"], [369, "&udblac;"], [370, "&Uogon;"], [371, "&uogon;"], [372, "&Wcirc;"], [373, "&wcirc;"], [374, "&Ycirc;"], [375, "&ycirc;"], [376, "&Yuml;"], [377, "&Zacute;"], [378, "&zacute;"], [379, "&Zdot;"], [380, "&zdot;"], [381, "&Zcaron;"], [382, "&zcaron;"], [402, "&fnof;"], [437, "&imped;"], [501, "&gacute;"], [567, "&jmath;"], [710, "&circ;"], [711, "&caron;"], [728, "&breve;"], [729, "&DiacriticalDot;"], [730, "&ring;"], [731, "&ogon;"], [732, "&DiacriticalTilde;"], [733, "&dblac;"], [785, "&DownBreve;"], [913, "&Alpha;"], [914, "&Beta;"], [915, "&Gamma;"], [916, "&Delta;"], [917, "&Epsilon;"], [918, "&Zeta;"], [919, "&Eta;"], [920, "&Theta;"], [921, "&Iota;"], [922, "&Kappa;"], [923, "&Lambda;"], [924, "&Mu;"], [925, "&Nu;"], [926, "&Xi;"], [927, "&Omicron;"], [928, "&Pi;"], [929, "&Rho;"], [931, "&Sigma;"], [932, "&Tau;"], [933, "&Upsilon;"], [934, "&Phi;"], [935, "&Chi;"], [936, "&Psi;"], [937, "&ohm;"], [945, "&alpha;"], [946, "&beta;"], [947, "&gamma;"], [948, "&delta;"], [949, "&epsi;"], [950, "&zeta;"], [951, "&eta;"], [952, "&theta;"], [953, "&iota;"], [954, "&kappa;"], [955, "&lambda;"], [956, "&mu;"], [957, "&nu;"], [958, "&xi;"], [959, "&omicron;"], [960, "&pi;"], [961, "&rho;"], [962, "&sigmaf;"], [963, "&sigma;"], [964, "&tau;"], [965, "&upsi;"], [966, "&phi;"], [967, "&chi;"], [968, "&psi;"], [969, "&omega;"], [977, "&thetasym;"], [978, "&Upsi;"], [981, "&phiv;"], [982, "&piv;"], [988, "&Gammad;"], [989, "&digamma;"], [1008, "&kappav;"], [1009, "&rhov;"], [1013, "&epsiv;"], [1014, "&backepsilon;"], [1025, "&IOcy;"], [1026, "&DJcy;"], [1027, "&GJcy;"], [1028, "&Jukcy;"], [1029, "&DScy;"], [1030, "&Iukcy;"], [1031, "&YIcy;"], [1032, "&Jsercy;"], [1033, "&LJcy;"], [1034, "&NJcy;"], [1035, "&TSHcy;"], [1036, "&KJcy;"], [1038, "&Ubrcy;"], [1039, "&DZcy;"], [1040, "&Acy;"], [1041, "&Bcy;"], [1042, "&Vcy;"], [1043, "&Gcy;"], [1044, "&Dcy;"], [1045, "&IEcy;"], [1046, "&ZHcy;"], [1047, "&Zcy;"], [1048, "&Icy;"], [1049, "&Jcy;"], [1050, "&Kcy;"], [1051, "&Lcy;"], [1052, "&Mcy;"], [1053, "&Ncy;"], [1054, "&Ocy;"], [1055, "&Pcy;"], [1056, "&Rcy;"], [1057, "&Scy;"], [1058, "&Tcy;"], [1059, "&Ucy;"], [1060, "&Fcy;"], [1061, "&KHcy;"], [1062, "&TScy;"], [1063, "&CHcy;"], [1064, "&SHcy;"], [1065, "&SHCHcy;"], [1066, "&HARDcy;"], [1067, "&Ycy;"], [1068, "&SOFTcy;"], [1069, "&Ecy;"], [1070, "&YUcy;"], [1071, "&YAcy;"], [1072, "&acy;"], [1073, "&bcy;"], [1074, "&vcy;"], [1075, "&gcy;"], [1076, "&dcy;"], [1077, "&iecy;"], [1078, "&zhcy;"], [1079, "&zcy;"], [1080, "&icy;"], [1081, "&jcy;"], [1082, "&kcy;"], [1083, "&lcy;"], [1084, "&mcy;"], [1085, "&ncy;"], [1086, "&ocy;"], [1087, "&pcy;"], [1088, "&rcy;"], [1089, "&scy;"], [1090, "&tcy;"], [1091, "&ucy;"], [1092, "&fcy;"], [1093, "&khcy;"], [1094, "&tscy;"], [1095, "&chcy;"], [1096, "&shcy;"], [1097, "&shchcy;"], [1098, "&hardcy;"], [1099, "&ycy;"], [1100, "&softcy;"], [1101, "&ecy;"], [1102, "&yucy;"], [1103, "&yacy;"], [1105, "&iocy;"], [1106, "&djcy;"], [1107, "&gjcy;"], [1108, "&jukcy;"], [1109, "&dscy;"], [1110, "&iukcy;"], [1111, "&yicy;"], [1112, "&jsercy;"], [1113, "&ljcy;"], [1114, "&njcy;"], [1115, "&tshcy;"], [1116, "&kjcy;"], [1118, "&ubrcy;"], [1119, "&dzcy;"], [8194, "&ensp;"], [8195, "&emsp;"], [8196, "&emsp13;"], [8197, "&emsp14;"], [8199, "&numsp;"], [8200, "&puncsp;"], [8201, "&ThinSpace;"], [8202, "&hairsp;"], [8203, "&NegativeMediumSpace;"], [8204, "&zwnj;"], [8205, "&zwj;"], [8206, "&lrm;"], [8207, "&rlm;"], [8208, "&dash;"], [8211, "&ndash;"], [8212, "&mdash;"], [8213, "&horbar;"], [8214, "&Verbar;"], [8216, "&lsquo;"], [8217, "&CloseCurlyQuote;"], [8218, "&lsquor;"], [8220, "&ldquo;"], [8221, "&CloseCurlyDoubleQuote;"], [8222, "&bdquo;"], [8224, "&dagger;"], [8225, "&Dagger;"], [8226, "&bull;"], [8229, "&nldr;"], [8230, "&hellip;"], [8240, "&permil;"], [8241, "&pertenk;"], [8242, "&prime;"], [8243, "&Prime;"], [8244, "&tprime;"], [8245, "&backprime;"], [8249, "&lsaquo;"], [8250, "&rsaquo;"], [8254, "&oline;"], [8257, "&caret;"], [8259, "&hybull;"], [8260, "&frasl;"], [8271, "&bsemi;"], [8279, "&qprime;"], [8287, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [8288, "&NoBreak;"], [8289, "&af;"], [8290, "&InvisibleTimes;"], [8291, "&ic;"], [8364, "&euro;"], [8411, "&tdot;"], [8412, "&DotDot;"], [8450, "&complexes;"], [8453, "&incare;"], [8458, "&gscr;"], [8459, "&hamilt;"], [8460, "&Hfr;"], [8461, "&Hopf;"], [8462, "&planckh;"], [8463, "&hbar;"], [8464, "&imagline;"], [8465, "&Ifr;"], [8466, "&lagran;"], [8467, "&ell;"], [8469, "&naturals;"], [8470, "&numero;"], [8471, "&copysr;"], [8472, "&weierp;"], [8473, "&Popf;"], [8474, "&Qopf;"], [8475, "&realine;"], [8476, "&real;"], [8477, "&reals;"], [8478, "&rx;"], [8482, "&trade;"], [8484, "&integers;"], [8487, "&mho;"], [8488, "&zeetrf;"], [8489, "&iiota;"], [8492, "&bernou;"], [8493, "&Cayleys;"], [8495, "&escr;"], [8496, "&Escr;"], [8497, "&Fouriertrf;"], [8499, "&Mellintrf;"], [8500, "&order;"], [8501, "&alefsym;"], [8502, "&beth;"], [8503, "&gimel;"], [8504, "&daleth;"], [8517, "&CapitalDifferentialD;"], [8518, "&dd;"], [8519, "&ee;"], [8520, "&ii;"], [8531, "&frac13;"], [8532, "&frac23;"], [8533, "&frac15;"], [8534, "&frac25;"], [8535, "&frac35;"], [8536, "&frac45;"], [8537, "&frac16;"], [8538, "&frac56;"], [8539, "&frac18;"], [8540, "&frac38;"], [8541, "&frac58;"], [8542, "&frac78;"], [8592, "&larr;"], [8593, "&ShortUpArrow;"], [8594, "&rarr;"], [8595, "&darr;"], [8596, "&harr;"], [8597, "&updownarrow;"], [8598, "&nwarr;"], [8599, "&nearr;"], [8600, "&LowerRightArrow;"], [8601, "&LowerLeftArrow;"], [8602, "&nlarr;"], [8603, "&nrarr;"], [8605, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [8606, "&Larr;"], [8607, "&Uarr;"], [8608, "&Rarr;"], [8609, "&Darr;"], [8610, "&larrtl;"], [8611, "&rarrtl;"], [8612, "&LeftTeeArrow;"], [8613, "&mapstoup;"], [8614, "&map;"], [8615, "&DownTeeArrow;"], [8617, "&hookleftarrow;"], [8618, "&hookrightarrow;"], [8619, "&larrlp;"], [8620, "&looparrowright;"], [8621, "&harrw;"], [8622, "&nharr;"], [8624, "&lsh;"], [8625, "&rsh;"], [8626, "&ldsh;"], [8627, "&rdsh;"], [8629, "&crarr;"], [8630, "&cularr;"], [8631, "&curarr;"], [8634, "&circlearrowleft;"], [8635, "&circlearrowright;"], [8636, "&leftharpoonup;"], [8637, "&DownLeftVector;"], [8638, "&RightUpVector;"], [8639, "&LeftUpVector;"], [8640, "&rharu;"], [8641, "&DownRightVector;"], [8642, "&dharr;"], [8643, "&dharl;"], [8644, "&RightArrowLeftArrow;"], [8645, "&udarr;"], [8646, "&LeftArrowRightArrow;"], [8647, "&leftleftarrows;"], [8648, "&upuparrows;"], [8649, "&rightrightarrows;"], [8650, "&ddarr;"], [8651, "&leftrightharpoons;"], [8652, "&Equilibrium;"], [8653, "&nlArr;"], [8654, "&nhArr;"], [8655, "&nrArr;"], [8656, "&DoubleLeftArrow;"], [8657, "&DoubleUpArrow;"], [8658, "&DoubleRightArrow;"], [8659, "&dArr;"], [8660, "&DoubleLeftRightArrow;"], [8661, "&DoubleUpDownArrow;"], [8662, "&nwArr;"], [8663, "&neArr;"], [8664, "&seArr;"], [8665, "&swArr;"], [8666, "&lAarr;"], [8667, "&rAarr;"], [8669, "&zigrarr;"], [8676, "&larrb;"], [8677, "&rarrb;"], [8693, "&DownArrowUpArrow;"], [8701, "&loarr;"], [8702, "&roarr;"], [8703, "&hoarr;"], [8704, "&forall;"], [8705, "&comp;"], [8706, { v: "&part;", n: 824, o: "&npart;" }], [8707, "&exist;"], [8708, "&nexist;"], [8709, "&empty;"], [8711, "&Del;"], [8712, "&Element;"], [8713, "&NotElement;"], [8715, "&ni;"], [8716, "&notni;"], [8719, "&prod;"], [8720, "&coprod;"], [8721, "&sum;"], [8722, "&minus;"], [8723, "&MinusPlus;"], [8724, "&dotplus;"], [8726, "&Backslash;"], [8727, "&lowast;"], [8728, "&compfn;"], [8730, "&radic;"], [8733, "&prop;"], [8734, "&infin;"], [8735, "&angrt;"], [8736, { v: "&ang;", n: 8402, o: "&nang;" }], [8737, "&angmsd;"], [8738, "&angsph;"], [8739, "&mid;"], [8740, "&nmid;"], [8741, "&DoubleVerticalBar;"], [8742, "&NotDoubleVerticalBar;"], [8743, "&and;"], [8744, "&or;"], [8745, { v: "&cap;", n: 65024, o: "&caps;" }], [8746, { v: "&cup;", n: 65024, o: "&cups;" }], [8747, "&int;"], [8748, "&Int;"], [8749, "&iiint;"], [8750, "&conint;"], [8751, "&Conint;"], [8752, "&Cconint;"], [8753, "&cwint;"], [8754, "&ClockwiseContourIntegral;"], [8755, "&awconint;"], [8756, "&there4;"], [8757, "&becaus;"], [8758, "&ratio;"], [8759, "&Colon;"], [8760, "&dotminus;"], [8762, "&mDDot;"], [8763, "&homtht;"], [8764, { v: "&sim;", n: 8402, o: "&nvsim;" }], [8765, { v: "&backsim;", n: 817, o: "&race;" }], [8766, { v: "&ac;", n: 819, o: "&acE;" }], [8767, "&acd;"], [8768, "&VerticalTilde;"], [8769, "&NotTilde;"], [8770, { v: "&eqsim;", n: 824, o: "&nesim;" }], [8771, "&sime;"], [8772, "&NotTildeEqual;"], [8773, "&cong;"], [8774, "&simne;"], [8775, "&ncong;"], [8776, "&ap;"], [8777, "&nap;"], [8778, "&ape;"], [8779, { v: "&apid;", n: 824, o: "&napid;" }], [8780, "&backcong;"], [8781, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [8782, { v: "&bump;", n: 824, o: "&nbump;" }], [8783, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [8784, { v: "&doteq;", n: 824, o: "&nedot;" }], [8785, "&doteqdot;"], [8786, "&efDot;"], [8787, "&erDot;"], [8788, "&Assign;"], [8789, "&ecolon;"], [8790, "&ecir;"], [8791, "&circeq;"], [8793, "&wedgeq;"], [8794, "&veeeq;"], [8796, "&triangleq;"], [8799, "&equest;"], [8800, "&ne;"], [8801, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [8802, "&nequiv;"], [8804, { v: "&le;", n: 8402, o: "&nvle;" }], [8805, { v: "&ge;", n: 8402, o: "&nvge;" }], [8806, { v: "&lE;", n: 824, o: "&nlE;" }], [8807, { v: "&gE;", n: 824, o: "&ngE;" }], [8808, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [8809, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [8810, { v: "&ll;", n: /* @__PURE__ */ new Map([[824, "&nLtv;"], [8402, "&nLt;"]]) }], [8811, { v: "&gg;", n: /* @__PURE__ */ new Map([[824, "&nGtv;"], [8402, "&nGt;"]]) }], [8812, "&between;"], [8813, "&NotCupCap;"], [8814, "&nless;"], [8815, "&ngt;"], [8816, "&nle;"], [8817, "&nge;"], [8818, "&lesssim;"], [8819, "&GreaterTilde;"], [8820, "&nlsim;"], [8821, "&ngsim;"], [8822, "&LessGreater;"], [8823, "&gl;"], [8824, "&NotLessGreater;"], [8825, "&NotGreaterLess;"], [8826, "&pr;"], [8827, "&sc;"], [8828, "&prcue;"], [8829, "&sccue;"], [8830, "&PrecedesTilde;"], [8831, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [8832, "&NotPrecedes;"], [8833, "&NotSucceeds;"], [8834, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [8835, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [8836, "&nsub;"], [8837, "&nsup;"], [8838, "&sube;"], [8839, "&supe;"], [8840, "&NotSubsetEqual;"], [8841, "&NotSupersetEqual;"], [8842, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [8843, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [8845, "&cupdot;"], [8846, "&UnionPlus;"], [8847, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [8848, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [8849, "&sqsube;"], [8850, "&sqsupe;"], [8851, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [8852, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [8853, "&CirclePlus;"], [8854, "&CircleMinus;"], [8855, "&CircleTimes;"], [8856, "&osol;"], [8857, "&CircleDot;"], [8858, "&circledcirc;"], [8859, "&circledast;"], [8861, "&circleddash;"], [8862, "&boxplus;"], [8863, "&boxminus;"], [8864, "&boxtimes;"], [8865, "&dotsquare;"], [8866, "&RightTee;"], [8867, "&dashv;"], [8868, "&DownTee;"], [8869, "&bot;"], [8871, "&models;"], [8872, "&DoubleRightTee;"], [8873, "&Vdash;"], [8874, "&Vvdash;"], [8875, "&VDash;"], [8876, "&nvdash;"], [8877, "&nvDash;"], [8878, "&nVdash;"], [8879, "&nVDash;"], [8880, "&prurel;"], [8882, "&LeftTriangle;"], [8883, "&RightTriangle;"], [8884, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [8885, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [8886, "&origof;"], [8887, "&imof;"], [8888, "&multimap;"], [8889, "&hercon;"], [8890, "&intcal;"], [8891, "&veebar;"], [8893, "&barvee;"], [8894, "&angrtvb;"], [8895, "&lrtri;"], [8896, "&bigwedge;"], [8897, "&bigvee;"], [8898, "&bigcap;"], [8899, "&bigcup;"], [8900, "&diam;"], [8901, "&sdot;"], [8902, "&sstarf;"], [8903, "&divideontimes;"], [8904, "&bowtie;"], [8905, "&ltimes;"], [8906, "&rtimes;"], [8907, "&leftthreetimes;"], [8908, "&rightthreetimes;"], [8909, "&backsimeq;"], [8910, "&curlyvee;"], [8911, "&curlywedge;"], [8912, "&Sub;"], [8913, "&Sup;"], [8914, "&Cap;"], [8915, "&Cup;"], [8916, "&fork;"], [8917, "&epar;"], [8918, "&lessdot;"], [8919, "&gtdot;"], [8920, { v: "&Ll;", n: 824, o: "&nLl;" }], [8921, { v: "&Gg;", n: 824, o: "&nGg;" }], [8922, { v: "&leg;", n: 65024, o: "&lesg;" }], [8923, { v: "&gel;", n: 65024, o: "&gesl;" }], [8926, "&cuepr;"], [8927, "&cuesc;"], [8928, "&NotPrecedesSlantEqual;"], [8929, "&NotSucceedsSlantEqual;"], [8930, "&NotSquareSubsetEqual;"], [8931, "&NotSquareSupersetEqual;"], [8934, "&lnsim;"], [8935, "&gnsim;"], [8936, "&precnsim;"], [8937, "&scnsim;"], [8938, "&nltri;"], [8939, "&NotRightTriangle;"], [8940, "&nltrie;"], [8941, "&NotRightTriangleEqual;"], [8942, "&vellip;"], [8943, "&ctdot;"], [8944, "&utdot;"], [8945, "&dtdot;"], [8946, "&disin;"], [8947, "&isinsv;"], [8948, "&isins;"], [8949, { v: "&isindot;", n: 824, o: "&notindot;" }], [8950, "&notinvc;"], [8951, "&notinvb;"], [8953, { v: "&isinE;", n: 824, o: "&notinE;" }], [8954, "&nisd;"], [8955, "&xnis;"], [8956, "&nis;"], [8957, "&notnivc;"], [8958, "&notnivb;"], [8965, "&barwed;"], [8966, "&Barwed;"], [8968, "&lceil;"], [8969, "&rceil;"], [8970, "&LeftFloor;"], [8971, "&rfloor;"], [8972, "&drcrop;"], [8973, "&dlcrop;"], [8974, "&urcrop;"], [8975, "&ulcrop;"], [8976, "&bnot;"], [8978, "&profline;"], [8979, "&profsurf;"], [8981, "&telrec;"], [8982, "&target;"], [8988, "&ulcorn;"], [8989, "&urcorn;"], [8990, "&dlcorn;"], [8991, "&drcorn;"], [8994, "&frown;"], [8995, "&smile;"], [9005, "&cylcty;"], [9006, "&profalar;"], [9014, "&topbot;"], [9021, "&ovbar;"], [9023, "&solbar;"], [9084, "&angzarr;"], [9136, "&lmoustache;"], [9137, "&rmoustache;"], [9140, "&OverBracket;"], [9141, "&bbrk;"], [9142, "&bbrktbrk;"], [9180, "&OverParenthesis;"], [9181, "&UnderParenthesis;"], [9182, "&OverBrace;"], [9183, "&UnderBrace;"], [9186, "&trpezium;"], [9191, "&elinters;"], [9251, "&blank;"], [9416, "&circledS;"], [9472, "&boxh;"], [9474, "&boxv;"], [9484, "&boxdr;"], [9488, "&boxdl;"], [9492, "&boxur;"], [9496, "&boxul;"], [9500, "&boxvr;"], [9508, "&boxvl;"], [9516, "&boxhd;"], [9524, "&boxhu;"], [9532, "&boxvh;"], [9552, "&boxH;"], [9553, "&boxV;"], [9554, "&boxdR;"], [9555, "&boxDr;"], [9556, "&boxDR;"], [9557, "&boxdL;"], [9558, "&boxDl;"], [9559, "&boxDL;"], [9560, "&boxuR;"], [9561, "&boxUr;"], [9562, "&boxUR;"], [9563, "&boxuL;"], [9564, "&boxUl;"], [9565, "&boxUL;"], [9566, "&boxvR;"], [9567, "&boxVr;"], [9568, "&boxVR;"], [9569, "&boxvL;"], [9570, "&boxVl;"], [9571, "&boxVL;"], [9572, "&boxHd;"], [9573, "&boxhD;"], [9574, "&boxHD;"], [9575, "&boxHu;"], [9576, "&boxhU;"], [9577, "&boxHU;"], [9578, "&boxvH;"], [9579, "&boxVh;"], [9580, "&boxVH;"], [9600, "&uhblk;"], [9604, "&lhblk;"], [9608, "&block;"], [9617, "&blk14;"], [9618, "&blk12;"], [9619, "&blk34;"], [9633, "&square;"], [9642, "&blacksquare;"], [9643, "&EmptyVerySmallSquare;"], [9645, "&rect;"], [9646, "&marker;"], [9649, "&fltns;"], [9651, "&bigtriangleup;"], [9652, "&blacktriangle;"], [9653, "&triangle;"], [9656, "&blacktriangleright;"], [9657, "&rtri;"], [9661, "&bigtriangledown;"], [9662, "&blacktriangledown;"], [9663, "&dtri;"], [9666, "&blacktriangleleft;"], [9667, "&ltri;"], [9674, "&loz;"], [9675, "&cir;"], [9708, "&tridot;"], [9711, "&bigcirc;"], [9720, "&ultri;"], [9721, "&urtri;"], [9722, "&lltri;"], [9723, "&EmptySmallSquare;"], [9724, "&FilledSmallSquare;"], [9733, "&bigstar;"], [9734, "&star;"], [9742, "&phone;"], [9792, "&female;"], [9794, "&male;"], [9824, "&spades;"], [9827, "&clubs;"], [9829, "&hearts;"], [9830, "&diamondsuit;"], [9834, "&sung;"], [9837, "&flat;"], [9838, "&natural;"], [9839, "&sharp;"], [10003, "&check;"], [10007, "&cross;"], [10016, "&malt;"], [10038, "&sext;"], [10072, "&VerticalSeparator;"], [10098, "&lbbrk;"], [10099, "&rbbrk;"], [10184, "&bsolhsub;"], [10185, "&suphsol;"], [10214, "&LeftDoubleBracket;"], [10215, "&RightDoubleBracket;"], [10216, "&lang;"], [10217, "&rang;"], [10218, "&Lang;"], [10219, "&Rang;"], [10220, "&loang;"], [10221, "&roang;"], [10229, "&longleftarrow;"], [10230, "&longrightarrow;"], [10231, "&longleftrightarrow;"], [10232, "&DoubleLongLeftArrow;"], [10233, "&DoubleLongRightArrow;"], [10234, "&DoubleLongLeftRightArrow;"], [10236, "&longmapsto;"], [10239, "&dzigrarr;"], [10498, "&nvlArr;"], [10499, "&nvrArr;"], [10500, "&nvHarr;"], [10501, "&Map;"], [10508, "&lbarr;"], [10509, "&bkarow;"], [10510, "&lBarr;"], [10511, "&dbkarow;"], [10512, "&drbkarow;"], [10513, "&DDotrahd;"], [10514, "&UpArrowBar;"], [10515, "&DownArrowBar;"], [10518, "&Rarrtl;"], [10521, "&latail;"], [10522, "&ratail;"], [10523, "&lAtail;"], [10524, "&rAtail;"], [10525, "&larrfs;"], [10526, "&rarrfs;"], [10527, "&larrbfs;"], [10528, "&rarrbfs;"], [10531, "&nwarhk;"], [10532, "&nearhk;"], [10533, "&hksearow;"], [10534, "&hkswarow;"], [10535, "&nwnear;"], [10536, "&nesear;"], [10537, "&seswar;"], [10538, "&swnwar;"], [10547, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [10549, "&cudarrr;"], [10550, "&ldca;"], [10551, "&rdca;"], [10552, "&cudarrl;"], [10553, "&larrpl;"], [10556, "&curarrm;"], [10557, "&cularrp;"], [10565, "&rarrpl;"], [10568, "&harrcir;"], [10569, "&Uarrocir;"], [10570, "&lurdshar;"], [10571, "&ldrushar;"], [10574, "&LeftRightVector;"], [10575, "&RightUpDownVector;"], [10576, "&DownLeftRightVector;"], [10577, "&LeftUpDownVector;"], [10578, "&LeftVectorBar;"], [10579, "&RightVectorBar;"], [10580, "&RightUpVectorBar;"], [10581, "&RightDownVectorBar;"], [10582, "&DownLeftVectorBar;"], [10583, "&DownRightVectorBar;"], [10584, "&LeftUpVectorBar;"], [10585, "&LeftDownVectorBar;"], [10586, "&LeftTeeVector;"], [10587, "&RightTeeVector;"], [10588, "&RightUpTeeVector;"], [10589, "&RightDownTeeVector;"], [10590, "&DownLeftTeeVector;"], [10591, "&DownRightTeeVector;"], [10592, "&LeftUpTeeVector;"], [10593, "&LeftDownTeeVector;"], [10594, "&lHar;"], [10595, "&uHar;"], [10596, "&rHar;"], [10597, "&dHar;"], [10598, "&luruhar;"], [10599, "&ldrdhar;"], [10600, "&ruluhar;"], [10601, "&rdldhar;"], [10602, "&lharul;"], [10603, "&llhard;"], [10604, "&rharul;"], [10605, "&lrhard;"], [10606, "&udhar;"], [10607, "&duhar;"], [10608, "&RoundImplies;"], [10609, "&erarr;"], [10610, "&simrarr;"], [10611, "&larrsim;"], [10612, "&rarrsim;"], [10613, "&rarrap;"], [10614, "&ltlarr;"], [10616, "&gtrarr;"], [10617, "&subrarr;"], [10619, "&suplarr;"], [10620, "&lfisht;"], [10621, "&rfisht;"], [10622, "&ufisht;"], [10623, "&dfisht;"], [10629, "&lopar;"], [10630, "&ropar;"], [10635, "&lbrke;"], [10636, "&rbrke;"], [10637, "&lbrkslu;"], [10638, "&rbrksld;"], [10639, "&lbrksld;"], [10640, "&rbrkslu;"], [10641, "&langd;"], [10642, "&rangd;"], [10643, "&lparlt;"], [10644, "&rpargt;"], [10645, "&gtlPar;"], [10646, "&ltrPar;"], [10650, "&vzigzag;"], [10652, "&vangrt;"], [10653, "&angrtvbd;"], [10660, "&ange;"], [10661, "&range;"], [10662, "&dwangle;"], [10663, "&uwangle;"], [10664, "&angmsdaa;"], [10665, "&angmsdab;"], [10666, "&angmsdac;"], [10667, "&angmsdad;"], [10668, "&angmsdae;"], [10669, "&angmsdaf;"], [10670, "&angmsdag;"], [10671, "&angmsdah;"], [10672, "&bemptyv;"], [10673, "&demptyv;"], [10674, "&cemptyv;"], [10675, "&raemptyv;"], [10676, "&laemptyv;"], [10677, "&ohbar;"], [10678, "&omid;"], [10679, "&opar;"], [10681, "&operp;"], [10683, "&olcross;"], [10684, "&odsold;"], [10686, "&olcir;"], [10687, "&ofcir;"], [10688, "&olt;"], [10689, "&ogt;"], [10690, "&cirscir;"], [10691, "&cirE;"], [10692, "&solb;"], [10693, "&bsolb;"], [10697, "&boxbox;"], [10701, "&trisb;"], [10702, "&rtriltri;"], [10703, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [10704, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [10716, "&iinfin;"], [10717, "&infintie;"], [10718, "&nvinfin;"], [10723, "&eparsl;"], [10724, "&smeparsl;"], [10725, "&eqvparsl;"], [10731, "&blacklozenge;"], [10740, "&RuleDelayed;"], [10742, "&dsol;"], [10752, "&bigodot;"], [10753, "&bigoplus;"], [10754, "&bigotimes;"], [10756, "&biguplus;"], [10758, "&bigsqcup;"], [10764, "&iiiint;"], [10765, "&fpartint;"], [10768, "&cirfnint;"], [10769, "&awint;"], [10770, "&rppolint;"], [10771, "&scpolint;"], [10772, "&npolint;"], [10773, "&pointint;"], [10774, "&quatint;"], [10775, "&intlarhk;"], [10786, "&pluscir;"], [10787, "&plusacir;"], [10788, "&simplus;"], [10789, "&plusdu;"], [10790, "&plussim;"], [10791, "&plustwo;"], [10793, "&mcomma;"], [10794, "&minusdu;"], [10797, "&loplus;"], [10798, "&roplus;"], [10799, "&Cross;"], [10800, "&timesd;"], [10801, "&timesbar;"], [10803, "&smashp;"], [10804, "&lotimes;"], [10805, "&rotimes;"], [10806, "&otimesas;"], [10807, "&Otimes;"], [10808, "&odiv;"], [10809, "&triplus;"], [10810, "&triminus;"], [10811, "&tritime;"], [10812, "&intprod;"], [10815, "&amalg;"], [10816, "&capdot;"], [10818, "&ncup;"], [10819, "&ncap;"], [10820, "&capand;"], [10821, "&cupor;"], [10822, "&cupcap;"], [10823, "&capcup;"], [10824, "&cupbrcap;"], [10825, "&capbrcup;"], [10826, "&cupcup;"], [10827, "&capcap;"], [10828, "&ccups;"], [10829, "&ccaps;"], [10832, "&ccupssm;"], [10835, "&And;"], [10836, "&Or;"], [10837, "&andand;"], [10838, "&oror;"], [10839, "&orslope;"], [10840, "&andslope;"], [10842, "&andv;"], [10843, "&orv;"], [10844, "&andd;"], [10845, "&ord;"], [10847, "&wedbar;"], [10854, "&sdote;"], [10858, "&simdot;"], [10861, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [10862, "&easter;"], [10863, "&apacir;"], [10864, { v: "&apE;", n: 824, o: "&napE;" }], [10865, "&eplus;"], [10866, "&pluse;"], [10867, "&Esim;"], [10868, "&Colone;"], [10869, "&Equal;"], [10871, "&ddotseq;"], [10872, "&equivDD;"], [10873, "&ltcir;"], [10874, "&gtcir;"], [10875, "&ltquest;"], [10876, "&gtquest;"], [10877, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [10878, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [10879, "&lesdot;"], [10880, "&gesdot;"], [10881, "&lesdoto;"], [10882, "&gesdoto;"], [10883, "&lesdotor;"], [10884, "&gesdotol;"], [10885, "&lap;"], [10886, "&gap;"], [10887, "&lne;"], [10888, "&gne;"], [10889, "&lnap;"], [10890, "&gnap;"], [10891, "&lEg;"], [10892, "&gEl;"], [10893, "&lsime;"], [10894, "&gsime;"], [10895, "&lsimg;"], [10896, "&gsiml;"], [10897, "&lgE;"], [10898, "&glE;"], [10899, "&lesges;"], [10900, "&gesles;"], [10901, "&els;"], [10902, "&egs;"], [10903, "&elsdot;"], [10904, "&egsdot;"], [10905, "&el;"], [10906, "&eg;"], [10909, "&siml;"], [10910, "&simg;"], [10911, "&simlE;"], [10912, "&simgE;"], [10913, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [10914, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [10916, "&glj;"], [10917, "&gla;"], [10918, "&ltcc;"], [10919, "&gtcc;"], [10920, "&lescc;"], [10921, "&gescc;"], [10922, "&smt;"], [10923, "&lat;"], [10924, { v: "&smte;", n: 65024, o: "&smtes;" }], [10925, { v: "&late;", n: 65024, o: "&lates;" }], [10926, "&bumpE;"], [10927, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [10928, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [10931, "&prE;"], [10932, "&scE;"], [10933, "&precneqq;"], [10934, "&scnE;"], [10935, "&prap;"], [10936, "&scap;"], [10937, "&precnapprox;"], [10938, "&scnap;"], [10939, "&Pr;"], [10940, "&Sc;"], [10941, "&subdot;"], [10942, "&supdot;"], [10943, "&subplus;"], [10944, "&supplus;"], [10945, "&submult;"], [10946, "&supmult;"], [10947, "&subedot;"], [10948, "&supedot;"], [10949, { v: "&subE;", n: 824, o: "&nsubE;" }], [10950, { v: "&supE;", n: 824, o: "&nsupE;" }], [10951, "&subsim;"], [10952, "&supsim;"], [10955, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [10956, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [10959, "&csub;"], [10960, "&csup;"], [10961, "&csube;"], [10962, "&csupe;"], [10963, "&subsup;"], [10964, "&supsub;"], [10965, "&subsub;"], [10966, "&supsup;"], [10967, "&suphsub;"], [10968, "&supdsub;"], [10969, "&forkv;"], [10970, "&topfork;"], [10971, "&mlcp;"], [10980, "&Dashv;"], [10982, "&Vdashl;"], [10983, "&Barv;"], [10984, "&vBar;"], [10985, "&vBarv;"], [10987, "&Vbar;"], [10988, "&Not;"], [10989, "&bNot;"], [10990, "&rnmid;"], [10991, "&cirmid;"], [10992, "&midcir;"], [10993, "&topcir;"], [10994, "&nhpar;"], [10995, "&parsim;"], [11005, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [55349, { n: /* @__PURE__ */ new Map([[56476, "&Ascr;"], [56478, "&Cscr;"], [56479, "&Dscr;"], [56482, "&Gscr;"], [56485, "&Jscr;"], [56486, "&Kscr;"], [56489, "&Nscr;"], [56490, "&Oscr;"], [56491, "&Pscr;"], [56492, "&Qscr;"], [56494, "&Sscr;"], [56495, "&Tscr;"], [56496, "&Uscr;"], [56497, "&Vscr;"], [56498, "&Wscr;"], [56499, "&Xscr;"], [56500, "&Yscr;"], [56501, "&Zscr;"], [56502, "&ascr;"], [56503, "&bscr;"], [56504, "&cscr;"], [56505, "&dscr;"], [56507, "&fscr;"], [56509, "&hscr;"], [56510, "&iscr;"], [56511, "&jscr;"], [56512, "&kscr;"], [56513, "&lscr;"], [56514, "&mscr;"], [56515, "&nscr;"], [56517, "&pscr;"], [56518, "&qscr;"], [56519, "&rscr;"], [56520, "&sscr;"], [56521, "&tscr;"], [56522, "&uscr;"], [56523, "&vscr;"], [56524, "&wscr;"], [56525, "&xscr;"], [56526, "&yscr;"], [56527, "&zscr;"], [56580, "&Afr;"], [56581, "&Bfr;"], [56583, "&Dfr;"], [56584, "&Efr;"], [56585, "&Ffr;"], [56586, "&Gfr;"], [56589, "&Jfr;"], [56590, "&Kfr;"], [56591, "&Lfr;"], [56592, "&Mfr;"], [56593, "&Nfr;"], [56594, "&Ofr;"], [56595, "&Pfr;"], [56596, "&Qfr;"], [56598, "&Sfr;"], [56599, "&Tfr;"], [56600, "&Ufr;"], [56601, "&Vfr;"], [56602, "&Wfr;"], [56603, "&Xfr;"], [56604, "&Yfr;"], [56606, "&afr;"], [56607, "&bfr;"], [56608, "&cfr;"], [56609, "&dfr;"], [56610, "&efr;"], [56611, "&ffr;"], [56612, "&gfr;"], [56613, "&hfr;"], [56614, "&ifr;"], [56615, "&jfr;"], [56616, "&kfr;"], [56617, "&lfr;"], [56618, "&mfr;"], [56619, "&nfr;"], [56620, "&ofr;"], [56621, "&pfr;"], [56622, "&qfr;"], [56623, "&rfr;"], [56624, "&sfr;"], [56625, "&tfr;"], [56626, "&ufr;"], [56627, "&vfr;"], [56628, "&wfr;"], [56629, "&xfr;"], [56630, "&yfr;"], [56631, "&zfr;"], [56632, "&Aopf;"], [56633, "&Bopf;"], [56635, "&Dopf;"], [56636, "&Eopf;"], [56637, "&Fopf;"], [56638, "&Gopf;"], [56640, "&Iopf;"], [56641, "&Jopf;"], [56642, "&Kopf;"], [56643, "&Lopf;"], [56644, "&Mopf;"], [56646, "&Oopf;"], [56650, "&Sopf;"], [56651, "&Topf;"], [56652, "&Uopf;"], [56653, "&Vopf;"], [56654, "&Wopf;"], [56655, "&Xopf;"], [56656, "&Yopf;"], [56658, "&aopf;"], [56659, "&bopf;"], [56660, "&copf;"], [56661, "&dopf;"], [56662, "&eopf;"], [56663, "&fopf;"], [56664, "&gopf;"], [56665, "&hopf;"], [56666, "&iopf;"], [56667, "&jopf;"], [56668, "&kopf;"], [56669, "&lopf;"], [56670, "&mopf;"], [56671, "&nopf;"], [56672, "&oopf;"], [56673, "&popf;"], [56674, "&qopf;"], [56675, "&ropf;"], [56676, "&sopf;"], [56677, "&topf;"], [56678, "&uopf;"], [56679, "&vopf;"], [56680, "&wopf;"], [56681, "&xopf;"], [56682, "&yopf;"], [56683, "&zopf;"]]) }], [64256, "&fflig;"], [64257, "&filig;"], [64258, "&fllig;"], [64259, "&ffilig;"], [64260, "&ffllig;"]]);
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/escape.js
var require_escape = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/escape.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
    exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    exports.getCodePoint = String.prototype.codePointAt != null ? function(str, index) {
      return str.codePointAt(index);
    } : function(c, index) {
      return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
    };
    function encodeXML(str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = exports.xmlReplacer.exec(str)) !== null) {
        var i = match.index;
        var char = str.charCodeAt(i);
        var next = xmlCodeMap.get(char);
        if (next !== void 0) {
          ret += str.substring(lastIdx, i) + next;
          lastIdx = i + 1;
        } else {
          ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
          lastIdx = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
      }
      return ret + str.substr(lastIdx);
    }
    exports.encodeXML = encodeXML;
    exports.escape = encodeXML;
    function getEscaper(regex, map) {
      return function escape(data) {
        var match;
        var lastIdx = 0;
        var result = "";
        while (match = regex.exec(data)) {
          if (lastIdx !== match.index) {
            result += data.substring(lastIdx, match.index);
          }
          result += map.get(match[0].charCodeAt(0));
          lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
      };
    }
    exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    exports.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    exports.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// http-url:https://unpkg.com/entities@4.3.1/lib/encode.js
var require_encode = __commonJS({
  "http-url:https://unpkg.com/entities@4.3.1/lib/encode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.encodeNonAsciiHTML = exports.encodeHTML = void 0;
    var encode_html_js_1 = __importDefault(require_encode_html());
    var escape_js_1 = require_escape();
    var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
    function encodeHTML(data) {
      return encodeHTMLTrieRe(htmlReplacer, data);
    }
    exports.encodeHTML = encodeHTML;
    function encodeNonAsciiHTML(data) {
      return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
    }
    exports.encodeNonAsciiHTML = encodeNonAsciiHTML;
    function encodeHTMLTrieRe(regExp, str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = regExp.exec(str)) !== null) {
        var i = match.index;
        ret += str.substring(lastIdx, i);
        var char = str.charCodeAt(i);
        var next = encode_html_js_1.default.get(char);
        if (typeof next === "object") {
          if (i + 1 < str.length) {
            var nextChar = str.charCodeAt(i + 1);
            var value = typeof next.n === "number" ? next.n === nextChar ? next.o : void 0 : next.n.get(nextChar);
            if (value !== void 0) {
              ret += value;
              lastIdx = regExp.lastIndex += 1;
              continue;
            }
          }
          next = next.v;
        }
        if (next !== void 0) {
          ret += next;
          lastIdx = i + 1;
        } else {
          var cp = (0, escape_js_1.getCodePoint)(str, i);
          ret += "&#x".concat(cp.toString(16), ";");
          lastIdx = regExp.lastIndex += Number(cp !== char);
        }
      }
      return ret + str.substr(lastIdx);
    }
  }
});

// http-url:https://unpkg.com/entities@%5E4.2.0/lib/index.js
var require_lib3 = __commonJS({
  "http-url:https://unpkg.com/entities@%5E4.2.0/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.DecodingMode = exports.EntityLevel = void 0;
    var decode_js_1 = require_decode();
    var encode_js_1 = require_encode();
    var escape_js_1 = require_escape();
    var EntityLevel;
    (function(EntityLevel2) {
      EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
      EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
    })(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
    var DecodingMode;
    (function(DecodingMode2) {
      DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
      DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
    })(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
    var EncodingMode;
    (function(EncodingMode2) {
      EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
      EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
      EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
      EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
      EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
    })(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
    function decode(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      if (opts.level === EntityLevel.HTML) {
        if (opts.mode === DecodingMode.Strict) {
          return (0, decode_js_1.decodeHTMLStrict)(data);
        }
        return (0, decode_js_1.decodeHTML)(data);
      }
      return (0, decode_js_1.decodeXML)(data);
    }
    exports.decode = decode;
    function decodeStrict(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      if (opts.level === EntityLevel.HTML) {
        if (opts.mode === DecodingMode.Legacy) {
          return (0, decode_js_1.decodeHTML)(data);
        }
        return (0, decode_js_1.decodeHTMLStrict)(data);
      }
      return (0, decode_js_1.decodeXML)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      if (opts.mode === EncodingMode.UTF8)
        return (0, escape_js_1.escapeUTF8)(data);
      if (opts.mode === EncodingMode.Attribute)
        return (0, escape_js_1.escapeAttribute)(data);
      if (opts.mode === EncodingMode.Text)
        return (0, escape_js_1.escapeText)(data);
      if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
          return (0, encode_js_1.encodeNonAsciiHTML)(data);
        }
        return (0, encode_js_1.encodeHTML)(data);
      }
      return (0, escape_js_1.encodeXML)(data);
    }
    exports.encode = encode;
    var escape_js_2 = require_escape();
    Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
      return escape_js_2.encodeXML;
    } });
    Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
      return escape_js_2.escape;
    } });
    Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
      return escape_js_2.escapeUTF8;
    } });
    Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function() {
      return escape_js_2.escapeAttribute;
    } });
    Object.defineProperty(exports, "escapeText", { enumerable: true, get: function() {
      return escape_js_2.escapeText;
    } });
    var encode_js_2 = require_encode();
    Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_js_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    var decode_js_2 = require_decode();
    Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
      return decode_js_2.decodeXML;
    } });
    Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_js_2.decodeXML;
    } });
  }
});

// http-url:https://unpkg.com/dom-serializer@2.0.0/lib/foreignNames.js
var require_foreignNames = __commonJS({
  "http-url:https://unpkg.com/dom-serializer@2.0.0/lib/foreignNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attributeNames = exports.elementNames = void 0;
    exports.elementNames = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map(function(val) {
      return [val.toLowerCase(), val];
    }));
    exports.attributeNames = new Map([
      "definitionURL",
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map(function(val) {
      return [val.toLowerCase(), val];
    }));
  }
});

// http-url:https://unpkg.com/dom-serializer@%5E2.0.0/lib/index.js
var require_lib4 = __commonJS({
  "http-url:https://unpkg.com/dom-serializer@%5E2.0.0/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = void 0;
    var ElementType = __importStar(require_lib());
    var entities_1 = require_lib3();
    var foreignNames_js_1 = require_foreignNames();
    var unencodedElements = /* @__PURE__ */ new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    function replaceQuotes(value) {
      return value.replace(/"/g, "&quot;");
    }
    function formatAttributes(attributes, opts) {
      var _a;
      if (!attributes)
        return;
      var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? entities_1.encodeXML : entities_1.escapeAttribute;
      return Object.keys(attributes).map(function(key) {
        var _a2, _b;
        var value = (_a2 = attributes[key]) !== null && _a2 !== void 0 ? _a2 : "";
        if (opts.xmlMode === "foreign") {
          key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
          return key;
        }
        return "".concat(key, '="').concat(encode(value), '"');
      }).join(" ");
    }
    var singleTag = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    function render(node, options) {
      if (options === void 0) {
        options = {};
      }
      var nodes = "length" in node ? node : [node];
      var output = "";
      for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
      }
      return output;
    }
    exports.render = render;
    exports.default = render;
    function renderNode(node, options) {
      switch (node.type) {
        case ElementType.Root:
          return render(node.children, options);
        case ElementType.Doctype:
        case ElementType.Directive:
          return renderDirective(node);
        case ElementType.Comment:
          return renderComment(node);
        case ElementType.CDATA:
          return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
          return renderTag(node, options);
        case ElementType.Text:
          return renderText(node, options);
      }
    }
    var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
    function renderTag(elem, opts) {
      var _a;
      if (opts.xmlMode === "foreign") {
        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: false });
        }
      }
      if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
      }
      var tag = "<".concat(elem.name);
      var attribs = formatAttributes(elem.attribs, opts);
      if (attribs) {
        tag += " ".concat(attribs);
      }
      if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
          tag += " ";
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children.length > 0) {
          tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
          tag += "</".concat(elem.name, ">");
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<".concat(elem.data, ">");
    }
    function renderText(elem, opts) {
      var _a;
      var data = elem.data || "";
      if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, entities_1.encodeXML)(data) : (0, entities_1.escapeText)(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[".concat(elem.children[0].data, "]]>");
    }
    function renderComment(elem) {
      return "<!--".concat(elem.data, "-->");
    }
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/stringify.js
var require_stringify = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/stringify.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
    var domhandler_1 = require_lib2();
    var dom_serializer_1 = __importDefault(require_lib4());
    var domelementtype_1 = require_lib();
    function getOuterHTML(node, options) {
      return (0, dom_serializer_1.default)(node, options);
    }
    exports.getOuterHTML = getOuterHTML;
    function getInnerHTML(node, options) {
      return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
        return getOuterHTML(node2, options);
      }).join("") : "";
    }
    exports.getInnerHTML = getInnerHTML;
    function getText(node) {
      if (Array.isArray(node))
        return node.map(getText).join("");
      if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
      if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports.getText = getText;
    function textContent(node) {
      if (Array.isArray(node))
        return node.map(textContent).join("");
      if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports.textContent = textContent;
    function innerText(node) {
      if (Array.isArray(node))
        return node.map(innerText).join("");
      if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports.innerText = innerText;
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/traversal.js
var require_traversal = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/traversal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
    var domhandler_1 = require_lib2();
    function getChildren(elem) {
      return (0, domhandler_1.hasChildren)(elem) ? elem.children : [];
    }
    exports.getChildren = getChildren;
    function getParent(elem) {
      return elem.parent || null;
    }
    exports.getParent = getParent;
    function getSiblings(elem) {
      var _a, _b;
      var parent = getParent(elem);
      if (parent != null)
        return getChildren(parent);
      var siblings = [elem];
      var prev = elem.prev, next = elem.next;
      while (prev != null) {
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
      }
      while (next != null) {
        siblings.push(next);
        _b = next, next = _b.next;
      }
      return siblings;
    }
    exports.getSiblings = getSiblings;
    function getAttributeValue(elem, name) {
      var _a;
      return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
    }
    exports.getAttributeValue = getAttributeValue;
    function hasAttrib(elem, name) {
      return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
    }
    exports.hasAttrib = hasAttrib;
    function getName(elem) {
      return elem.name;
    }
    exports.getName = getName;
    function nextElementSibling(elem) {
      var _a;
      var next = elem.next;
      while (next !== null && !(0, domhandler_1.isTag)(next))
        _a = next, next = _a.next;
      return next;
    }
    exports.nextElementSibling = nextElementSibling;
    function prevElementSibling(elem) {
      var _a;
      var prev = elem.prev;
      while (prev !== null && !(0, domhandler_1.isTag)(prev))
        _a = prev, prev = _a.prev;
      return prev;
    }
    exports.prevElementSibling = prevElementSibling;
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/manipulation.js
var require_manipulation = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/manipulation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
    function removeElement(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
      }
    }
    exports.removeElement = removeElement;
    function replaceElement(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
      }
    }
    exports.replaceElement = replaceElement;
    function appendChild(elem, child) {
      removeElement(child);
      child.next = null;
      child.parent = elem;
      if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
      } else {
        child.prev = null;
      }
    }
    exports.appendChild = appendChild;
    function append(elem, next) {
      removeElement(next);
      var parent = elem.parent;
      var currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    }
    exports.append = append;
    function prependChild(elem, child) {
      removeElement(child);
      child.parent = elem;
      child.prev = null;
      if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
      } else {
        child.next = null;
      }
    }
    exports.prependChild = prependChild;
    function prepend(elem, prev) {
      removeElement(prev);
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    }
    exports.prepend = prepend;
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/querying.js
var require_querying = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/querying.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
    var domhandler_1 = require_lib2();
    function filter(test, node, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      if (!Array.isArray(node))
        node = [node];
      return find(test, node, recurse, limit);
    }
    exports.filter = filter;
    function find(test, nodes, recurse, limit) {
      var result = [];
      for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
          result.push(elem);
          if (--limit <= 0)
            break;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
          var children = find(test, elem.children, recurse, limit);
          result.push.apply(result, children);
          limit -= children.length;
          if (limit <= 0)
            break;
        }
      }
      return result;
    }
    exports.find = find;
    function findOneChild(test, nodes) {
      return nodes.find(test);
    }
    exports.findOneChild = findOneChild;
    function findOne(test, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      var elem = null;
      for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!(0, domhandler_1.isTag)(checked)) {
          continue;
        } else if (test(checked)) {
          elem = checked;
        } else if (recurse && checked.children.length > 0) {
          elem = findOne(test, checked.children, true);
        }
      }
      return elem;
    }
    exports.findOne = findOne;
    function existsOne(test, nodes) {
      return nodes.some(function(checked) {
        return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
      });
    }
    exports.existsOne = existsOne;
    function findAll(test, nodes) {
      var _a;
      var result = [];
      var stack = nodes.filter(domhandler_1.isTag);
      var elem;
      while (elem = stack.shift()) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) {
          stack.unshift.apply(stack, children);
        }
        if (test(elem))
          result.push(elem);
      }
      return result;
    }
    exports.findAll = findAll;
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/legacy.js
var require_legacy = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/legacy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
    var domhandler_1 = require_lib2();
    var querying_js_1 = require_querying();
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return domhandler_1.isTag;
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.name === name;
        };
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        }
        return function(elem) {
          return elem.type === type;
        };
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && data(elem.data);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isText)(elem) && elem.data === data;
        };
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
        };
      }
      return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
      };
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    function compileTest(options) {
      var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
      });
      return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
    }
    function testElement(options, node) {
      var test = compileTest(options);
      return test ? test(node) : true;
    }
    exports.testElement = testElement;
    function getElements(options, nodes, recurse, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var test = compileTest(options);
      return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
    }
    exports.getElements = getElements;
    function getElementById(id, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (!Array.isArray(nodes))
        nodes = [nodes];
      return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
    }
    exports.getElementById = getElementById;
    function getElementsByTagName(tagName, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
    }
    exports.getElementsByTagName = getElementsByTagName;
    function getElementsByTagType(type, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
    }
    exports.getElementsByTagType = getElementsByTagType;
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/helpers.js
var require_helpers = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uniqueSort = exports.compareDocumentPosition = exports.DocumentPosition = exports.removeSubsets = void 0;
    var domhandler_1 = require_lib2();
    function removeSubsets(nodes) {
      var idx = nodes.length;
      while (--idx >= 0) {
        var node = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
          nodes.splice(idx, 1);
          continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
          }
        }
      }
      return nodes;
    }
    exports.removeSubsets = removeSubsets;
    var DocumentPosition;
    (function(DocumentPosition2) {
      DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
      DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
      DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
      DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
      DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
    })(DocumentPosition = exports.DocumentPosition || (exports.DocumentPosition = {}));
    function compareDocumentPosition(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      if (nodeA === nodeB) {
        return 0;
      }
      var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      var maxIdx = Math.min(aParents.length, bParents.length);
      var idx = 0;
      while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
      }
      var sharedParent = aParents[idx - 1];
      var siblings = sharedParent.children;
      var aSibling = aParents[idx];
      var bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
      }
      if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
      }
      return DocumentPosition.PRECEDING;
    }
    exports.compareDocumentPosition = compareDocumentPosition;
    function uniqueSort(nodes) {
      nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
      });
      nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
          return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
          return 1;
        }
        return 0;
      });
      return nodes;
    }
    exports.uniqueSort = uniqueSort;
  }
});

// http-url:https://unpkg.com/domutils@3.0.1/lib/feeds.js
var require_feeds = __commonJS({
  "http-url:https://unpkg.com/domutils@3.0.1/lib/feeds.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFeed = void 0;
    var stringify_js_1 = require_stringify();
    var legacy_js_1 = require_legacy();
    function getFeed(doc) {
      var feedRoot = getOneElement(isValidFeed, doc);
      return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
    }
    exports.getFeed = getFeed;
    function getAtomFeed(feedRoot) {
      var _a;
      var childs = feedRoot.children;
      var feed = {
        type: "atom",
        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function(item) {
          var _a2;
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "id", children);
          addConditionally(entry, "title", "title", children);
          var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs["href"];
          if (href2) {
            entry.link = href2;
          }
          var description = fetch("summary", children) || fetch("content", children);
          if (description) {
            entry.description = description;
          }
          var pubDate = fetch("updated", children);
          if (pubDate) {
            entry.pubDate = new Date(pubDate);
          }
          return entry;
        })
      };
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      return feed;
    }
    function getRssFeed(feedRoot) {
      var _a, _b;
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "guid", children);
          addConditionally(entry, "title", "title", children);
          addConditionally(entry, "link", "link", children);
          addConditionally(entry, "description", "description", children);
          var pubDate = fetch("pubDate", children);
          if (pubDate)
            entry.pubDate = new Date(pubDate);
          return entry;
        })
      };
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      return feed;
    }
    var MEDIA_KEYS_STRING = ["url", "type", "lang"];
    var MEDIA_KEYS_INT = [
      "fileSize",
      "bitrate",
      "framerate",
      "samplingrate",
      "channels",
      "duration",
      "height",
      "width"
    ];
    function getMediaElements(where) {
      return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function(elem) {
        var attribs = elem.attribs;
        var media = {
          medium: attribs["medium"],
          isDefault: !!attribs["isDefault"]
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
          var attrib = MEDIA_KEYS_STRING_1[_i];
          if (attribs[attrib]) {
            media[attrib] = attribs[attrib];
          }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
          var attrib = MEDIA_KEYS_INT_1[_a];
          if (attribs[attrib]) {
            media[attrib] = parseInt(attribs[attrib], 10);
          }
        }
        if (attribs["expression"]) {
          media.expression = attribs["expression"];
        }
        return media;
      });
    }
    function getOneElement(tagName, node) {
      return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
    }
    function fetch(tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
    }
    function addConditionally(obj, prop, tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      var val = fetch(tagName, where, recurse);
      if (val)
        obj[prop] = val;
    }
    function isValidFeed(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    }
  }
});

// http-url:https://unpkg.com/domutils@%5E3.0.1/lib/index.js
var require_lib5 = __commonJS({
  "http-url:https://unpkg.com/domutils@%5E3.0.1/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
    __exportStar(require_stringify(), exports);
    __exportStar(require_traversal(), exports);
    __exportStar(require_manipulation(), exports);
    __exportStar(require_querying(), exports);
    __exportStar(require_legacy(), exports);
    __exportStar(require_helpers(), exports);
    __exportStar(require_feeds(), exports);
    var domhandler_1 = require_lib2();
    Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/static.js
var require_static = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/static.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = exports.contains = exports.root = exports.parseHTML = exports.text = exports.xml = exports.html = void 0;
    var domutils_1 = require_lib5();
    var options_js_1 = __importStar(require_options());
    function render(that, dom, options) {
      if (!that)
        return "";
      return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, void 0, options).toString();
    }
    function isOptions(dom, options) {
      return !options && typeof dom === "object" && dom != null && !("length" in dom) && !("type" in dom);
    }
    function html(dom, options) {
      var toRender = isOptions(dom) ? (options = dom, void 0) : dom;
      var opts = __assign(__assign(__assign({}, options_js_1.default), this === null || this === void 0 ? void 0 : this._options), (0, options_js_1.flatten)(options !== null && options !== void 0 ? options : {}));
      return render(this, toRender, opts);
    }
    exports.html = html;
    function xml(dom) {
      var options = __assign(__assign({}, this._options), { xmlMode: true });
      return render(this, dom, options);
    }
    exports.xml = xml;
    function text(elements) {
      var elems = elements ? elements : this ? this.root() : [];
      var ret = "";
      for (var i = 0; i < elems.length; i++) {
        ret += (0, domutils_1.textContent)(elems[i]);
      }
      return ret;
    }
    exports.text = text;
    function parseHTML(data, context, keepScripts) {
      if (keepScripts === void 0) {
        keepScripts = typeof context === "boolean" ? context : false;
      }
      if (!data || typeof data !== "string") {
        return null;
      }
      if (typeof context === "boolean") {
        keepScripts = context;
      }
      var parsed = this.load(data, options_js_1.default, false);
      if (!keepScripts) {
        parsed("script").remove();
      }
      return parsed.root()[0].children.slice();
    }
    exports.parseHTML = parseHTML;
    function root() {
      return this(this._root);
    }
    exports.root = root;
    function contains(container, contained) {
      if (contained === container) {
        return false;
      }
      var next = contained;
      while (next && next !== next.parent) {
        next = next.parent;
        if (next === container) {
          return true;
        }
      }
      return false;
    }
    exports.contains = contains;
    function merge(arr1, arr2) {
      if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
        return;
      }
      var newLength = arr1.length;
      var len = +arr2.length;
      for (var i = 0; i < len; i++) {
        arr1[newLength++] = arr2[i];
      }
      arr1.length = newLength;
      return arr1;
    }
    exports.merge = merge;
    function isArrayLike(item) {
      if (Array.isArray(item)) {
        return true;
      }
      if (typeof item !== "object" || !Object.prototype.hasOwnProperty.call(item, "length") || typeof item.length !== "number" || item.length < 0) {
        return false;
      }
      for (var i = 0; i < item.length; i++) {
        if (!(i in item)) {
          return false;
        }
      }
      return true;
    }
  }
});

// http-url:https://unpkg.com/domhandler@%5E5.0.3/lib/index.js
var require_lib6 = __commonJS({
  "http-url:https://unpkg.com/domhandler@%5E5.0.3/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_js_1 = require_node();
    __exportStar(require_node(), exports);
    var defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = function() {
      function DomHandler2(callback, options, elementCB) {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
        if (typeof options === "function") {
          elementCB = options;
          options = defaultOpts;
        }
        if (typeof callback === "object") {
          options = callback;
          callback = void 0;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
      }
      DomHandler2.prototype.onparserinit = function(parser) {
        this.parser = parser;
      };
      DomHandler2.prototype.onreset = function() {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
      };
      DomHandler2.prototype.onend = function() {
        if (this.done)
          return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      };
      DomHandler2.prototype.onerror = function(error) {
        this.handleCallback(error);
      };
      DomHandler2.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
          elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
          this.elementCB(elem);
      };
      DomHandler2.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
        var element = new node_js_1.Element(name, attribs, void 0, type);
        this.addNode(element);
        this.tagStack.push(element);
      };
      DomHandler2.prototype.ontext = function(data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
          lastNode.data += data;
          if (this.options.withEndIndices) {
            lastNode.endIndex = this.parser.endIndex;
          }
        } else {
          var node = new node_js_1.Text(data);
          this.addNode(node);
          this.lastNode = node;
        }
      };
      DomHandler2.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
          this.lastNode.data += data;
          return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
      };
      DomHandler2.prototype.oncommentend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.oncdatastart = function() {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
      };
      DomHandler2.prototype.oncdataend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
      };
      DomHandler2.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") {
          this.callback(error, this.dom);
        } else if (error) {
          throw error;
        }
      };
      DomHandler2.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
          node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
          node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
          node.prev = previousSibling;
          previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
      };
      return DomHandler2;
    }();
    exports.DomHandler = DomHandler;
    exports.default = DomHandler;
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/utils.js
var require_utils = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isHtml = exports.cloneDom = exports.domEach = exports.cssCase = exports.camelCase = exports.isCheerio = exports.isTag = void 0;
    var domhandler_1 = require_lib6();
    var domhandler_2 = require_lib6();
    Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
      return domhandler_2.isTag;
    } });
    function isCheerio(maybeCheerio) {
      return maybeCheerio.cheerio != null;
    }
    exports.isCheerio = isCheerio;
    function camelCase(str) {
      return str.replace(/[_.-](\w|$)/g, function(_, x) {
        return x.toUpperCase();
      });
    }
    exports.camelCase = camelCase;
    function cssCase(str) {
      return str.replace(/[A-Z]/g, "-$&").toLowerCase();
    }
    exports.cssCase = cssCase;
    function domEach(array, fn) {
      var len = array.length;
      for (var i = 0; i < len; i++)
        fn(array[i], i);
      return array;
    }
    exports.domEach = domEach;
    function cloneDom(dom) {
      var clone = "length" in dom ? Array.prototype.map.call(dom, function(el) {
        return (0, domhandler_1.cloneNode)(el, true);
      }) : [(0, domhandler_1.cloneNode)(dom, true)];
      var root = new domhandler_1.Document(clone);
      clone.forEach(function(node) {
        node.parent = root;
      });
      return clone;
    }
    exports.cloneDom = cloneDom;
    var CharacterCodes;
    (function(CharacterCodes2) {
      CharacterCodes2[CharacterCodes2["LowerA"] = 97] = "LowerA";
      CharacterCodes2[CharacterCodes2["LowerZ"] = 122] = "LowerZ";
      CharacterCodes2[CharacterCodes2["UpperA"] = 65] = "UpperA";
      CharacterCodes2[CharacterCodes2["UpperZ"] = 90] = "UpperZ";
      CharacterCodes2[CharacterCodes2["Exclamation"] = 33] = "Exclamation";
    })(CharacterCodes || (CharacterCodes = {}));
    function isHtml(str) {
      var tagStart = str.indexOf("<");
      if (tagStart < 0 || tagStart > str.length - 3)
        return false;
      var tagChar = str.charCodeAt(tagStart + 1);
      return (tagChar >= CharacterCodes.LowerA && tagChar <= CharacterCodes.LowerZ || tagChar >= CharacterCodes.UpperA && tagChar <= CharacterCodes.UpperZ || tagChar === CharacterCodes.Exclamation) && str.includes(">", tagStart + 2);
    }
    exports.isHtml = isHtml;
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/attributes.js
var require_attributes = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/attributes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleClass = exports.removeClass = exports.addClass = exports.hasClass = exports.removeAttr = exports.val = exports.data = exports.prop = exports.attr = void 0;
    var static_js_1 = require_static();
    var utils_js_1 = require_utils();
    var domutils_1 = require_lib5();
    var hasOwn = Object.prototype.hasOwnProperty;
    var rspace = /\s+/;
    var dataAttrPrefix = "data-";
    var primitives = {
      null: null,
      true: true,
      false: false
    };
    var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    var rbrace = /^{[^]*}$|^\[[^]*]$/;
    function getAttr(elem, name, xmlMode) {
      var _a;
      if (!elem || !(0, utils_js_1.isTag)(elem))
        return void 0;
      (_a = elem.attribs) !== null && _a !== void 0 ? _a : elem.attribs = {};
      if (!name) {
        return elem.attribs;
      }
      if (hasOwn.call(elem.attribs, name)) {
        return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
      }
      if (elem.name === "option" && name === "value") {
        return (0, static_js_1.text)(elem.children);
      }
      if (elem.name === "input" && (elem.attribs["type"] === "radio" || elem.attribs["type"] === "checkbox") && name === "value") {
        return "on";
      }
      return void 0;
    }
    function setAttr(el, name, value) {
      if (value === null) {
        removeAttribute(el, name);
      } else {
        el.attribs[name] = "".concat(value);
      }
    }
    function attr(name, value) {
      if (typeof name === "object" || value !== void 0) {
        if (typeof value === "function") {
          if (typeof name !== "string") {
            {
              throw new Error("Bad combination of arguments.");
            }
          }
          return (0, utils_js_1.domEach)(this, function(el, i) {
            if ((0, utils_js_1.isTag)(el))
              setAttr(el, name, value.call(el, i, el.attribs[name]));
          });
        }
        return (0, utils_js_1.domEach)(this, function(el) {
          if (!(0, utils_js_1.isTag)(el))
            return;
          if (typeof name === "object") {
            Object.keys(name).forEach(function(objName) {
              var objValue = name[objName];
              setAttr(el, objName, objValue);
            });
          } else {
            setAttr(el, name, value);
          }
        });
      }
      return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
    }
    exports.attr = attr;
    function getProp(el, name, xmlMode) {
      return name in el ? el[name] : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== void 0 : getAttr(el, name, xmlMode);
    }
    function setProp(el, name, value, xmlMode) {
      if (name in el) {
        el[name] = value;
      } else {
        setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? "" : null : "".concat(value));
      }
    }
    function prop(name, value) {
      var _this = this;
      var _a;
      if (typeof name === "string" && value === void 0) {
        var el = this[0];
        if (!el || !(0, utils_js_1.isTag)(el))
          return void 0;
        switch (name) {
          case "style": {
            var property_1 = this.css();
            var keys = Object.keys(property_1);
            keys.forEach(function(p, i) {
              property_1[i] = p;
            });
            property_1.length = keys.length;
            return property_1;
          }
          case "tagName":
          case "nodeName": {
            return el.name.toUpperCase();
          }
          case "href":
          case "src": {
            var prop_1 = (_a = el.attribs) === null || _a === void 0 ? void 0 : _a[name];
            if (typeof URL !== "undefined" && (name === "href" && (el.tagName === "a" || el.name === "link") || name === "src" && (el.tagName === "img" || el.tagName === "iframe" || el.tagName === "audio" || el.tagName === "video" || el.tagName === "source")) && prop_1 !== void 0 && this.options.baseURI) {
              return new URL(prop_1, this.options.baseURI).href;
            }
            return prop_1;
          }
          case "innerText": {
            return (0, domutils_1.innerText)(el);
          }
          case "textContent": {
            return (0, domutils_1.textContent)(el);
          }
          case "outerHTML":
            return this.clone().wrap("<container />").parent().html();
          case "innerHTML":
            return this.html();
          default:
            return getProp(el, name, this.options.xmlMode);
        }
      }
      if (typeof name === "object" || value !== void 0) {
        if (typeof value === "function") {
          if (typeof name === "object") {
            throw new Error("Bad combination of arguments.");
          }
          return (0, utils_js_1.domEach)(this, function(el2, i) {
            if ((0, utils_js_1.isTag)(el2)) {
              setProp(el2, name, value.call(el2, i, getProp(el2, name, _this.options.xmlMode)), _this.options.xmlMode);
            }
          });
        }
        return (0, utils_js_1.domEach)(this, function(el2) {
          if (!(0, utils_js_1.isTag)(el2))
            return;
          if (typeof name === "object") {
            Object.keys(name).forEach(function(key) {
              var val2 = name[key];
              setProp(el2, key, val2, _this.options.xmlMode);
            });
          } else {
            setProp(el2, name, value, _this.options.xmlMode);
          }
        });
      }
      return void 0;
    }
    exports.prop = prop;
    function setData(el, name, value) {
      var _a;
      var elem = el;
      (_a = elem.data) !== null && _a !== void 0 ? _a : elem.data = {};
      if (typeof name === "object")
        Object.assign(elem.data, name);
      else if (typeof name === "string" && value !== void 0) {
        elem.data[name] = value;
      }
    }
    function readData(el, name) {
      var domNames;
      var jsNames;
      var value;
      if (name == null) {
        domNames = Object.keys(el.attribs).filter(function(attrName) {
          return attrName.startsWith(dataAttrPrefix);
        });
        jsNames = domNames.map(function(domName2) {
          return (0, utils_js_1.camelCase)(domName2.slice(dataAttrPrefix.length));
        });
      } else {
        domNames = [dataAttrPrefix + (0, utils_js_1.cssCase)(name)];
        jsNames = [name];
      }
      for (var idx = 0; idx < domNames.length; ++idx) {
        var domName = domNames[idx];
        var jsName = jsNames[idx];
        if (hasOwn.call(el.attribs, domName) && !hasOwn.call(el.data, jsName)) {
          value = el.attribs[domName];
          if (hasOwn.call(primitives, value)) {
            value = primitives[value];
          } else if (value === String(Number(value))) {
            value = Number(value);
          } else if (rbrace.test(value)) {
            try {
              value = JSON.parse(value);
            } catch (e) {
            }
          }
          el.data[jsName] = value;
        }
      }
      return name == null ? el.data : value;
    }
    function data(name, value) {
      var _a;
      var elem = this[0];
      if (!elem || !(0, utils_js_1.isTag)(elem))
        return;
      var dataEl = elem;
      (_a = dataEl.data) !== null && _a !== void 0 ? _a : dataEl.data = {};
      if (!name) {
        return readData(dataEl);
      }
      if (typeof name === "object" || value !== void 0) {
        (0, utils_js_1.domEach)(this, function(el) {
          if ((0, utils_js_1.isTag)(el)) {
            if (typeof name === "object")
              setData(el, name);
            else
              setData(el, name, value);
          }
        });
        return this;
      }
      if (hasOwn.call(dataEl.data, name)) {
        return dataEl.data[name];
      }
      return readData(dataEl, name);
    }
    exports.data = data;
    function val(value) {
      var querying = arguments.length === 0;
      var element = this[0];
      if (!element || !(0, utils_js_1.isTag)(element))
        return querying ? void 0 : this;
      switch (element.name) {
        case "textarea":
          return this.text(value);
        case "select": {
          var option = this.find("option:selected");
          if (!querying) {
            if (this.attr("multiple") == null && typeof value === "object") {
              return this;
            }
            this.find("option").removeAttr("selected");
            var values = typeof value !== "object" ? [value] : value;
            for (var i = 0; i < values.length; i++) {
              this.find('option[value="'.concat(values[i], '"]')).attr("selected", "");
            }
            return this;
          }
          return this.attr("multiple") ? option.toArray().map(function(el) {
            return (0, static_js_1.text)(el.children);
          }) : option.attr("value");
        }
        case "input":
        case "option":
          return querying ? this.attr("value") : this.attr("value", value);
      }
      return void 0;
    }
    exports.val = val;
    function removeAttribute(elem, name) {
      if (!elem.attribs || !hasOwn.call(elem.attribs, name))
        return;
      delete elem.attribs[name];
    }
    function splitNames(names) {
      return names ? names.trim().split(rspace) : [];
    }
    function removeAttr(name) {
      var attrNames = splitNames(name);
      var _loop_1 = function(i2) {
        (0, utils_js_1.domEach)(this_1, function(elem) {
          if ((0, utils_js_1.isTag)(elem))
            removeAttribute(elem, attrNames[i2]);
        });
      };
      var this_1 = this;
      for (var i = 0; i < attrNames.length; i++) {
        _loop_1(i);
      }
      return this;
    }
    exports.removeAttr = removeAttr;
    function hasClass(className) {
      return this.toArray().some(function(elem) {
        var clazz = (0, utils_js_1.isTag)(elem) && elem.attribs["class"];
        var idx = -1;
        if (clazz && className.length) {
          while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
            var end = idx + className.length;
            if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
              return true;
            }
          }
        }
        return false;
      });
    }
    exports.hasClass = hasClass;
    function addClass(value) {
      if (typeof value === "function") {
        return (0, utils_js_1.domEach)(this, function(el2, i2) {
          if ((0, utils_js_1.isTag)(el2)) {
            var className2 = el2.attribs["class"] || "";
            addClass.call([el2], value.call(el2, i2, className2));
          }
        });
      }
      if (!value || typeof value !== "string")
        return this;
      var classNames = value.split(rspace);
      var numElements = this.length;
      for (var i = 0; i < numElements; i++) {
        var el = this[i];
        if (!(0, utils_js_1.isTag)(el))
          continue;
        var className = getAttr(el, "class", false);
        if (!className) {
          setAttr(el, "class", classNames.join(" ").trim());
        } else {
          var setClass = " ".concat(className, " ");
          for (var j = 0; j < classNames.length; j++) {
            var appendClass = "".concat(classNames[j], " ");
            if (!setClass.includes(" ".concat(appendClass)))
              setClass += appendClass;
          }
          setAttr(el, "class", setClass.trim());
        }
      }
      return this;
    }
    exports.addClass = addClass;
    function removeClass(name) {
      if (typeof name === "function") {
        return (0, utils_js_1.domEach)(this, function(el, i) {
          if ((0, utils_js_1.isTag)(el)) {
            removeClass.call([el], name.call(el, i, el.attribs["class"] || ""));
          }
        });
      }
      var classes = splitNames(name);
      var numClasses = classes.length;
      var removeAll = arguments.length === 0;
      return (0, utils_js_1.domEach)(this, function(el) {
        if (!(0, utils_js_1.isTag)(el))
          return;
        if (removeAll) {
          el.attribs["class"] = "";
        } else {
          var elClasses = splitNames(el.attribs["class"]);
          var changed = false;
          for (var j = 0; j < numClasses; j++) {
            var index = elClasses.indexOf(classes[j]);
            if (index >= 0) {
              elClasses.splice(index, 1);
              changed = true;
              j--;
            }
          }
          if (changed) {
            el.attribs["class"] = elClasses.join(" ");
          }
        }
      });
    }
    exports.removeClass = removeClass;
    function toggleClass(value, stateVal) {
      if (typeof value === "function") {
        return (0, utils_js_1.domEach)(this, function(el2, i2) {
          if ((0, utils_js_1.isTag)(el2)) {
            toggleClass.call([el2], value.call(el2, i2, el2.attribs["class"] || "", stateVal), stateVal);
          }
        });
      }
      if (!value || typeof value !== "string")
        return this;
      var classNames = value.split(rspace);
      var numClasses = classNames.length;
      var state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0;
      var numElements = this.length;
      for (var i = 0; i < numElements; i++) {
        var el = this[i];
        if (!(0, utils_js_1.isTag)(el))
          continue;
        var elementClasses = splitNames(el.attribs["class"]);
        for (var j = 0; j < numClasses; j++) {
          var index = elementClasses.indexOf(classNames[j]);
          if (state >= 0 && index < 0) {
            elementClasses.push(classNames[j]);
          } else if (state <= 0 && index >= 0) {
            elementClasses.splice(index, 1);
          }
        }
        el.attribs["class"] = elementClasses.join(" ");
      }
      return this;
    }
    exports.toggleClass = toggleClass;
  }
});

// http-url:https://unpkg.com/css-what@6.1.0/lib/es/types
var SelectorType, IgnoreCaseMode, AttributeAction;
var init_types = __esm({
  "http-url:https://unpkg.com/css-what@6.1.0/lib/es/types"() {
    (function(SelectorType2) {
      SelectorType2["Attribute"] = "attribute";
      SelectorType2["Pseudo"] = "pseudo";
      SelectorType2["PseudoElement"] = "pseudo-element";
      SelectorType2["Tag"] = "tag";
      SelectorType2["Universal"] = "universal";
      SelectorType2["Adjacent"] = "adjacent";
      SelectorType2["Child"] = "child";
      SelectorType2["Descendant"] = "descendant";
      SelectorType2["Parent"] = "parent";
      SelectorType2["Sibling"] = "sibling";
      SelectorType2["ColumnCombinator"] = "column-combinator";
    })(SelectorType || (SelectorType = {}));
    IgnoreCaseMode = {
      Unknown: null,
      QuirksMode: "quirks",
      IgnoreCase: true,
      CaseSensitive: false
    };
    (function(AttributeAction2) {
      AttributeAction2["Any"] = "any";
      AttributeAction2["Element"] = "element";
      AttributeAction2["End"] = "end";
      AttributeAction2["Equals"] = "equals";
      AttributeAction2["Exists"] = "exists";
      AttributeAction2["Hyphen"] = "hyphen";
      AttributeAction2["Not"] = "not";
      AttributeAction2["Start"] = "start";
    })(AttributeAction || (AttributeAction = {}));
  }
});

// http-url:https://unpkg.com/css-what@6.1.0/lib/es/parse
function isTraversal(selector) {
  switch (selector.type) {
    case SelectorType.Adjacent:
    case SelectorType.Child:
    case SelectorType.Descendant:
    case SelectorType.Parent:
    case SelectorType.Sibling:
    case SelectorType.ColumnCombinator:
      return true;
    default:
      return false;
  }
}
function funescape(_, escaped, escapedWhitespace) {
  const high = parseInt(escaped, 16) - 65536;
  return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
}
function unescapeCSS(str) {
  return str.replace(reEscape, funescape);
}
function isQuote(c) {
  return c === 39 || c === 34;
}
function isWhitespace(c) {
  return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
}
function parse(selector) {
  const subselects = [];
  const endIndex = parseSelector(subselects, `${selector}`, 0);
  if (endIndex < selector.length) {
    throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
  }
  return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
  let tokens = [];
  function getName(offset) {
    const match = selector.slice(selectorIndex + offset).match(reName);
    if (!match) {
      throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
    }
    const [name] = match;
    selectorIndex += offset + name.length;
    return unescapeCSS(name);
  }
  function stripWhitespace(offset) {
    selectorIndex += offset;
    while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
      selectorIndex++;
    }
  }
  function readValueWithParenthesis() {
    selectorIndex += 1;
    const start = selectorIndex;
    let counter = 1;
    for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
      if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
        counter++;
      } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
        counter--;
      }
    }
    if (counter) {
      throw new Error("Parenthesis not matched");
    }
    return unescapeCSS(selector.slice(start, selectorIndex - 1));
  }
  function isEscaped(pos) {
    let slashCount = 0;
    while (selector.charCodeAt(--pos) === 92)
      slashCount++;
    return (slashCount & 1) === 1;
  }
  function ensureNotTraversal() {
    if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
      throw new Error("Did not expect successive traversals.");
    }
  }
  function addTraversal(type) {
    if (tokens.length > 0 && tokens[tokens.length - 1].type === SelectorType.Descendant) {
      tokens[tokens.length - 1].type = type;
      return;
    }
    ensureNotTraversal();
    tokens.push({ type });
  }
  function addSpecialAttribute(name, action) {
    tokens.push({
      type: SelectorType.Attribute,
      name,
      action,
      value: getName(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function finalizeSubselector() {
    if (tokens.length && tokens[tokens.length - 1].type === SelectorType.Descendant) {
      tokens.pop();
    }
    if (tokens.length === 0) {
      throw new Error("Empty sub-selector");
    }
    subselects.push(tokens);
  }
  stripWhitespace(0);
  if (selector.length === selectorIndex) {
    return selectorIndex;
  }
  loop:
    while (selectorIndex < selector.length) {
      const firstChar = selector.charCodeAt(selectorIndex);
      switch (firstChar) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
          if (tokens.length === 0 || tokens[0].type !== SelectorType.Descendant) {
            ensureNotTraversal();
            tokens.push({ type: SelectorType.Descendant });
          }
          stripWhitespace(1);
          break;
        }
        case 62: {
          addTraversal(SelectorType.Child);
          stripWhitespace(1);
          break;
        }
        case 60: {
          addTraversal(SelectorType.Parent);
          stripWhitespace(1);
          break;
        }
        case 126: {
          addTraversal(SelectorType.Sibling);
          stripWhitespace(1);
          break;
        }
        case 43: {
          addTraversal(SelectorType.Adjacent);
          stripWhitespace(1);
          break;
        }
        case 46: {
          addSpecialAttribute("class", AttributeAction.Element);
          break;
        }
        case 35: {
          addSpecialAttribute("id", AttributeAction.Equals);
          break;
        }
        case 91: {
          stripWhitespace(1);
          let name;
          let namespace = null;
          if (selector.charCodeAt(selectorIndex) === 124) {
            name = getName(1);
          } else if (selector.startsWith("*|", selectorIndex)) {
            namespace = "*";
            name = getName(2);
          } else {
            name = getName(0);
            if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
              namespace = name;
              name = getName(1);
            }
          }
          stripWhitespace(0);
          let action = AttributeAction.Exists;
          const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
          if (possibleAction) {
            action = possibleAction;
            if (selector.charCodeAt(selectorIndex + 1) !== 61) {
              throw new Error("Expected `=`");
            }
            stripWhitespace(2);
          } else if (selector.charCodeAt(selectorIndex) === 61) {
            action = AttributeAction.Equals;
            stripWhitespace(1);
          }
          let value = "";
          let ignoreCase = null;
          if (action !== "exists") {
            if (isQuote(selector.charCodeAt(selectorIndex))) {
              const quote = selector.charCodeAt(selectorIndex);
              let sectionEnd = selectorIndex + 1;
              while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                sectionEnd += 1;
              }
              if (selector.charCodeAt(sectionEnd) !== quote) {
                throw new Error("Attribute value didn't end");
              }
              value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
              selectorIndex = sectionEnd + 1;
            } else {
              const valueStart = selectorIndex;
              while (selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                selectorIndex += 1;
              }
              value = unescapeCSS(selector.slice(valueStart, selectorIndex));
            }
            stripWhitespace(0);
            const forceIgnore = selector.charCodeAt(selectorIndex) | 32;
            if (forceIgnore === 115) {
              ignoreCase = false;
              stripWhitespace(1);
            } else if (forceIgnore === 105) {
              ignoreCase = true;
              stripWhitespace(1);
            }
          }
          if (selector.charCodeAt(selectorIndex) !== 93) {
            throw new Error("Attribute selector didn't terminate");
          }
          selectorIndex += 1;
          const attributeSelector = {
            type: SelectorType.Attribute,
            name,
            action,
            value,
            namespace,
            ignoreCase
          };
          tokens.push(attributeSelector);
          break;
        }
        case 58: {
          if (selector.charCodeAt(selectorIndex + 1) === 58) {
            tokens.push({
              type: SelectorType.PseudoElement,
              name: getName(2).toLowerCase(),
              data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
            });
            continue;
          }
          const name = getName(1).toLowerCase();
          let data = null;
          if (selector.charCodeAt(selectorIndex) === 40) {
            if (unpackPseudos.has(name)) {
              if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                throw new Error(`Pseudo-selector ${name} cannot be quoted`);
              }
              data = [];
              selectorIndex = parseSelector(data, selector, selectorIndex + 1);
              if (selector.charCodeAt(selectorIndex) !== 41) {
                throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
              }
              selectorIndex += 1;
            } else {
              data = readValueWithParenthesis();
              if (stripQuotesFromPseudos.has(name)) {
                const quot = data.charCodeAt(0);
                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                  data = data.slice(1, -1);
                }
              }
              data = unescapeCSS(data);
            }
          }
          tokens.push({ type: SelectorType.Pseudo, name, data });
          break;
        }
        case 44: {
          finalizeSubselector();
          tokens = [];
          stripWhitespace(1);
          break;
        }
        default: {
          if (selector.startsWith("/*", selectorIndex)) {
            const endIndex = selector.indexOf("*/", selectorIndex + 2);
            if (endIndex < 0) {
              throw new Error("Comment was not terminated");
            }
            selectorIndex = endIndex + 2;
            if (tokens.length === 0) {
              stripWhitespace(0);
            }
            break;
          }
          let namespace = null;
          let name;
          if (firstChar === 42) {
            selectorIndex += 1;
            name = "*";
          } else if (firstChar === 124) {
            name = "";
            if (selector.charCodeAt(selectorIndex + 1) === 124) {
              addTraversal(SelectorType.ColumnCombinator);
              stripWhitespace(2);
              break;
            }
          } else if (reName.test(selector.slice(selectorIndex))) {
            name = getName(0);
          } else {
            break loop;
          }
          if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
            namespace = name;
            if (selector.charCodeAt(selectorIndex + 1) === 42) {
              name = "*";
              selectorIndex += 2;
            } else {
              name = getName(1);
            }
          }
          tokens.push(name === "*" ? { type: SelectorType.Universal, namespace } : { type: SelectorType.Tag, name, namespace });
        }
      }
    }
  finalizeSubselector();
  return selectorIndex;
}
var reName, reEscape, actionTypes, unpackPseudos, stripQuotesFromPseudos;
var init_parse = __esm({
  "http-url:https://unpkg.com/css-what@6.1.0/lib/es/parse"() {
    init_types();
    reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
    reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
    actionTypes = /* @__PURE__ */ new Map([
      [126, AttributeAction.Element],
      [94, AttributeAction.Start],
      [36, AttributeAction.End],
      [42, AttributeAction.Any],
      [33, AttributeAction.Not],
      [124, AttributeAction.Hyphen]
    ]);
    unpackPseudos = /* @__PURE__ */ new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context"
    ]);
    stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
  }
});

// http-url:https://unpkg.com/css-what@6.1.0/lib/es/stringify
function stringify(selector) {
  return selector.map((token) => token.map(stringifyToken).join("")).join(", ");
}
function stringifyToken(token, index, arr) {
  switch (token.type) {
    case SelectorType.Child:
      return index === 0 ? "> " : " > ";
    case SelectorType.Parent:
      return index === 0 ? "< " : " < ";
    case SelectorType.Sibling:
      return index === 0 ? "~ " : " ~ ";
    case SelectorType.Adjacent:
      return index === 0 ? "+ " : " + ";
    case SelectorType.Descendant:
      return " ";
    case SelectorType.ColumnCombinator:
      return index === 0 ? "|| " : " || ";
    case SelectorType.Universal:
      return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : `${getNamespace(token.namespace)}*`;
    case SelectorType.Tag:
      return getNamespacedName(token);
    case SelectorType.PseudoElement:
      return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
    case SelectorType.Pseudo:
      return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data)})`}`;
    case SelectorType.Attribute: {
      if (token.name === "id" && token.action === AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
        return `#${escapeName(token.value, charsToEscapeInName)}`;
      }
      if (token.name === "class" && token.action === AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
        return `.${escapeName(token.value, charsToEscapeInName)}`;
      }
      const name = getNamespacedName(token);
      if (token.action === AttributeAction.Exists) {
        return `[${name}]`;
      }
      return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
    }
  }
}
function getActionValue(action) {
  switch (action) {
    case AttributeAction.Equals:
      return "";
    case AttributeAction.Element:
      return "~";
    case AttributeAction.Start:
      return "^";
    case AttributeAction.End:
      return "$";
    case AttributeAction.Any:
      return "*";
    case AttributeAction.Not:
      return "!";
    case AttributeAction.Hyphen:
      return "|";
    case AttributeAction.Exists:
      throw new Error("Shouldn't be here");
  }
}
function getNamespacedName(token) {
  return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
  return namespace !== null ? `${namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName)}|` : "";
}
function escapeName(str, charsToEscape) {
  let lastIdx = 0;
  let ret = "";
  for (let i = 0; i < str.length; i++) {
    if (charsToEscape.has(str.charCodeAt(i))) {
      ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
      lastIdx = i + 1;
    }
  }
  return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}
var attribValChars, pseudoValChars, charsToEscapeInAttributeValue, charsToEscapeInPseudoValue, charsToEscapeInName;
var init_stringify = __esm({
  "http-url:https://unpkg.com/css-what@6.1.0/lib/es/stringify"() {
    init_types();
    attribValChars = ["\\", '"'];
    pseudoValChars = [...attribValChars, "(", ")"];
    charsToEscapeInAttributeValue = new Set(attribValChars.map((c) => c.charCodeAt(0)));
    charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c) => c.charCodeAt(0)));
    charsToEscapeInName = new Set([
      ...pseudoValChars,
      "~",
      "^",
      "$",
      "*",
      "+",
      "!",
      "|",
      ":",
      "[",
      "]",
      " ",
      "."
    ].map((c) => c.charCodeAt(0)));
  }
});

// http-url:https://unpkg.com/css-what@%5E6.1.0/lib/es/index.js
var es_exports = {};
__export(es_exports, {
  AttributeAction: () => AttributeAction,
  IgnoreCaseMode: () => IgnoreCaseMode,
  SelectorType: () => SelectorType,
  isTraversal: () => isTraversal,
  parse: () => parse,
  stringify: () => stringify
});
var init_es = __esm({
  "http-url:https://unpkg.com/css-what@%5E6.1.0/lib/es/index.js"() {
    init_types();
    init_parse();
    init_stringify();
  }
});

// http-url:https://unpkg.com/boolbase@%5E1.0.0/index.js
var require_boolbase_5E1_0 = __commonJS({
  "http-url:https://unpkg.com/boolbase@%5E1.0.0/index.js"(exports, module) {
    module.exports = {
      trueFunc: function trueFunc() {
        return true;
      },
      falseFunc: function falseFunc() {
        return false;
      }
    };
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/sort.js
var require_sort = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/sort.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTraversal = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var procedure = /* @__PURE__ */ new Map([
      [css_what_1.SelectorType.Universal, 50],
      [css_what_1.SelectorType.Tag, 30],
      [css_what_1.SelectorType.Attribute, 1],
      [css_what_1.SelectorType.Pseudo, 0]
    ]);
    function isTraversal2(token) {
      return !procedure.has(token.type);
    }
    exports.isTraversal = isTraversal2;
    var attributes = /* @__PURE__ */ new Map([
      [css_what_1.AttributeAction.Exists, 10],
      [css_what_1.AttributeAction.Equals, 8],
      [css_what_1.AttributeAction.Not, 7],
      [css_what_1.AttributeAction.Start, 6],
      [css_what_1.AttributeAction.End, 6],
      [css_what_1.AttributeAction.Any, 5]
    ]);
    function sortByProcedure(arr) {
      var procs = arr.map(getProcedure);
      for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
          continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
          var token = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = token;
          procs[j + 1] = procs[j];
          procs[j] = procNew;
        }
      }
    }
    exports.default = sortByProcedure;
    function getProcedure(token) {
      var _a, _b;
      var proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
      if (token.type === css_what_1.SelectorType.Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === css_what_1.AttributeAction.Equals && token.name === "id") {
          proc = 9;
        }
        if (token.ignoreCase) {
          proc >>= 1;
        }
      } else if (token.type === css_what_1.SelectorType.Pseudo) {
        if (!token.data) {
          proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
          proc = 0;
        } else if (Array.isArray(token.data)) {
          proc = Math.min.apply(Math, token.data.map(function(d) {
            return Math.min.apply(Math, d.map(getProcedure));
          }));
          if (proc < 0) {
            proc = 0;
          }
        } else {
          proc = 2;
        }
      }
      return proc;
    }
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/attributes.js
var require_attributes2 = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/attributes.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.attributeRules = void 0;
    var boolbase_1 = __importDefault(require_boolbase_5E1_0());
    var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
    function escapeRegex(value) {
      return value.replace(reChars, "\\$&");
    }
    var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
      "accept",
      "accept-charset",
      "align",
      "alink",
      "axis",
      "bgcolor",
      "charset",
      "checked",
      "clear",
      "codetype",
      "color",
      "compact",
      "declare",
      "defer",
      "dir",
      "direction",
      "disabled",
      "enctype",
      "face",
      "frame",
      "hreflang",
      "http-equiv",
      "lang",
      "language",
      "link",
      "media",
      "method",
      "multiple",
      "nohref",
      "noresize",
      "noshade",
      "nowrap",
      "readonly",
      "rel",
      "rev",
      "rules",
      "scope",
      "scrolling",
      "selected",
      "shape",
      "target",
      "text",
      "type",
      "valign",
      "valuetype",
      "vlink"
    ]);
    function shouldIgnoreCase(selector, options) {
      return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
    }
    exports.attributeRules = {
      equals: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
      },
      hyphen: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function hyphenIC(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function hyphen(elem) {
          var attr = adapter.getAttributeValue(elem, name);
          return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
      },
      element: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (/\s/.test(value)) {
          return boolbase_1.default.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
          var attr = adapter.getAttributeValue(elem, name);
          return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
      },
      exists: function(next, _a, _b) {
        var name = _a.name;
        var adapter = _b.adapter;
        return function(elem) {
          return adapter.hasAttrib(elem, name) && next(elem);
        };
      },
      start: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
      },
      end: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var _a;
            return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
      },
      any: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          var regex_1 = new RegExp(escapeRegex(value), "i");
          return function anyIC(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
      },
      not: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
          return function(elem) {
            return !!adapter.getAttributeValue(elem, name) && next(elem);
          };
        } else if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
          };
        }
        return function(elem) {
          return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
      }
    };
  }
});

// http-url:https://unpkg.com/nth-check@2.1.1/lib/parse.js
var require_parse = __commonJS({
  "http-url:https://unpkg.com/nth-check@2.1.1/lib/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = void 0;
    var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
    var ZERO = "0".charCodeAt(0);
    var NINE = "9".charCodeAt(0);
    function parse2(formula) {
      formula = formula.trim().toLowerCase();
      if (formula === "even") {
        return [2, 0];
      } else if (formula === "odd") {
        return [2, 1];
      }
      var idx = 0;
      var a = 0;
      var sign = readSign();
      var number = readNumber();
      if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
          sign = readSign();
          skipWhitespace();
          number = readNumber();
        } else {
          sign = number = 0;
        }
      }
      if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
      }
      return [a, sign * number];
      function readSign() {
        if (formula.charAt(idx) === "-") {
          idx++;
          return -1;
        }
        if (formula.charAt(idx) === "+") {
          idx++;
        }
        return 1;
      }
      function readNumber() {
        var start = idx;
        var value = 0;
        while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
          value = value * 10 + (formula.charCodeAt(idx) - ZERO);
          idx++;
        }
        return idx === start ? null : value;
      }
      function skipWhitespace() {
        while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
          idx++;
        }
      }
    }
    exports.parse = parse2;
  }
});

// http-url:https://unpkg.com/nth-check@2.1.1/lib/compile.js
var require_compile = __commonJS({
  "http-url:https://unpkg.com/nth-check@2.1.1/lib/compile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generate = exports.compile = void 0;
    var boolbase_1 = __importDefault(require_boolbase_5E1_0());
    function compile(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      if (b < 0 && a <= 0)
        return boolbase_1.default.falseFunc;
      if (a === -1)
        return function(index) {
          return index <= b;
        };
      if (a === 0)
        return function(index) {
          return index === b;
        };
      if (a === 1)
        return b < 0 ? boolbase_1.default.trueFunc : function(index) {
          return index >= b;
        };
      var absA = Math.abs(a);
      var bMod = (b % absA + absA) % absA;
      return a > 1 ? function(index) {
        return index >= b && index % absA === bMod;
      } : function(index) {
        return index <= b && index % absA === bMod;
      };
    }
    exports.compile = compile;
    function generate(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      var n = 0;
      if (a < 0) {
        var aPos_1 = -a;
        var minValue_1 = (b % aPos_1 + aPos_1) % aPos_1;
        return function() {
          var val = minValue_1 + aPos_1 * n++;
          return val > b ? null : val;
        };
      }
      if (a === 0)
        return b < 0 ? function() {
          return null;
        } : function() {
          return n++ === 0 ? b : null;
        };
      if (b < 0) {
        b += a * Math.ceil(-b / a);
      }
      return function() {
        return a * n++ + b;
      };
    }
    exports.generate = generate;
  }
});

// http-url:https://unpkg.com/nth-check@%5E2.0.1/lib/index.js
var require_lib7 = __commonJS({
  "http-url:https://unpkg.com/nth-check@%5E2.0.1/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sequence = exports.generate = exports.compile = exports.parse = void 0;
    var parse_js_1 = require_parse();
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return parse_js_1.parse;
    } });
    var compile_js_1 = require_compile();
    Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
      return compile_js_1.compile;
    } });
    Object.defineProperty(exports, "generate", { enumerable: true, get: function() {
      return compile_js_1.generate;
    } });
    function nthCheck(formula) {
      return (0, compile_js_1.compile)((0, parse_js_1.parse)(formula));
    }
    exports.default = nthCheck;
    function sequence(formula) {
      return (0, compile_js_1.generate)((0, parse_js_1.parse)(formula));
    }
    exports.sequence = sequence;
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/filters.js
var require_filters = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/filters.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filters = void 0;
    var nth_check_1 = __importDefault(require_lib7());
    var boolbase_1 = __importDefault(require_boolbase_5E1_0());
    function getChildFunc(next, adapter) {
      return function(elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
      };
    }
    exports.filters = {
      contains: function(next, text, _a) {
        var adapter = _a.adapter;
        return function contains(elem) {
          return next(elem) && adapter.getText(elem).includes(text);
        };
      },
      icontains: function(next, text, _a) {
        var adapter = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
          return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
      },
      "nth-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthChild(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthOfType(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      root: function(next, _rule, _a) {
        var adapter = _a.adapter;
        return function(elem) {
          var parent = adapter.getParent(elem);
          return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
      },
      scope: function(next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
          return exports.filters["root"](next, rule, options);
        }
        if (context.length === 1) {
          return function(elem) {
            return equals(context[0], elem) && next(elem);
          };
        }
        return function(elem) {
          return context.includes(elem) && next(elem);
        };
      },
      hover: dynamicStatePseudo("isHovered"),
      visited: dynamicStatePseudo("isVisited"),
      active: dynamicStatePseudo("isActive")
    };
    function dynamicStatePseudo(name) {
      return function dynamicPseudo(next, _rule, _a) {
        var adapter = _a.adapter;
        var func = adapter[name];
        if (typeof func !== "function") {
          return boolbase_1.default.falseFunc;
        }
        return function active(elem) {
          return func(elem) && next(elem);
        };
      };
    }
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/pseudos.js
var require_pseudos = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/pseudos.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verifyPseudoArgs = exports.pseudos = void 0;
    exports.pseudos = {
      empty: function(elem, _a) {
        var adapter = _a.adapter;
        return !adapter.getChildren(elem).some(function(elem2) {
          return adapter.isTag(elem2) || adapter.getText(elem2) !== "";
        });
      },
      "first-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        if (adapter.prevElementSibling) {
          return adapter.prevElementSibling(elem) == null;
        }
        var firstChild = adapter.getSiblings(elem).find(function(elem2) {
          return adapter.isTag(elem2);
        });
        return firstChild != null && equals(elem, firstChild);
      },
      "last-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          if (equals(elem, siblings[i]))
            return true;
          if (adapter.isTag(siblings[i]))
            break;
        }
        return false;
      },
      "first-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "last-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "only-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
        });
      },
      "only-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        return adapter.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter.isTag(sibling);
        });
      }
    };
    function verifyPseudoArgs(func, name, subselect, argIndex) {
      if (subselect === null) {
        if (func.length > argIndex) {
          throw new Error("Pseudo-class :".concat(name, " requires an argument"));
        }
      } else if (func.length === argIndex) {
        throw new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
      }
    }
    exports.verifyPseudoArgs = verifyPseudoArgs;
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/aliases.js
var require_aliases = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/aliases.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aliases = void 0;
    exports.aliases = {
      "any-link": ":is(a, area, link)[href]",
      link: ":any-link:not(:visited)",
      disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
      enabled: ":not(:disabled)",
      checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
      required: ":is(input, select, textarea)[required]",
      optional: ":is(input, select, textarea):not([required])",
      selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
      checkbox: "[type=checkbox]",
      file: "[type=file]",
      password: "[type=password]",
      radio: "[type=radio]",
      reset: "[type=reset]",
      image: "[type=image]",
      submit: "[type=submit]",
      parent: ":not(:empty)",
      header: ":is(h1, h2, h3, h4, h5, h6)",
      button: ":is(button, input[type=button])",
      input: ":is(input, textarea, select, button)",
      text: "input:is(:not([type!='']), [type=text])"
    };
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/subselects.js
var require_subselects = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/subselects.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
    var boolbase_1 = __importDefault(require_boolbase_5E1_0());
    var sort_js_1 = require_sort();
    exports.PLACEHOLDER_ELEMENT = {};
    function ensureIsTag(next, adapter) {
      if (next === boolbase_1.default.falseFunc)
        return boolbase_1.default.falseFunc;
      return function(elem) {
        return adapter.isTag(elem) && next(elem);
      };
    }
    exports.ensureIsTag = ensureIsTag;
    function getNextSiblings(elem, adapter) {
      var siblings = adapter.getSiblings(elem);
      if (siblings.length <= 1)
        return [];
      var elemIndex = siblings.indexOf(elem);
      if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
      return siblings.slice(elemIndex + 1).filter(adapter.isTag);
    }
    exports.getNextSiblings = getNextSiblings;
    function copyOptions(options) {
      return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
      };
    }
    var is = function(next, token, options, context, compileToken) {
      var func = compileToken(token, copyOptions(options), context);
      return func === boolbase_1.default.trueFunc ? next : func === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : function(elem) {
        return func(elem) && next(elem);
      };
    };
    exports.subselects = {
      is,
      matches: is,
      where: is,
      not: function(next, token, options, context, compileToken) {
        var func = compileToken(token, copyOptions(options), context);
        return func === boolbase_1.default.falseFunc ? next : func === boolbase_1.default.trueFunc ? boolbase_1.default.falseFunc : function(elem) {
          return !func(elem) && next(elem);
        };
      },
      has: function(next, subselect, options, _context, compileToken) {
        var adapter = options.adapter;
        var opts = copyOptions(options);
        opts.relativeSelector = true;
        var context = subselect.some(function(s) {
          return s.some(sort_js_1.isTraversal);
        }) ? [exports.PLACEHOLDER_ELEMENT] : void 0;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        var hasElement = ensureIsTag(compiled, adapter);
        if (context && compiled !== boolbase_1.default.trueFunc) {
          var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings_1 = _a === void 0 ? false : _a;
          return function(elem) {
            if (!next(elem))
              return false;
            context[0] = elem;
            var childs = adapter.getChildren(elem);
            var nextElements = shouldTestNextSiblings_1 ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
            return adapter.existsOne(hasElement, nextElements);
          };
        }
        return function(elem) {
          return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
        };
      }
    };
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/index.js
var require_pseudo_selectors = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/pseudo-selectors/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var filters_js_1 = require_filters();
    Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
      return filters_js_1.filters;
    } });
    var pseudos_js_1 = require_pseudos();
    Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
      return pseudos_js_1.pseudos;
    } });
    var aliases_js_1 = require_aliases();
    Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
      return aliases_js_1.aliases;
    } });
    var subselects_js_1 = require_subselects();
    function compilePseudoSelector(next, selector, options, context, compileToken) {
      var _a;
      var name = selector.name, data = selector.data;
      if (Array.isArray(data)) {
        if (!(name in subselects_js_1.subselects)) {
          throw new Error("Unknown pseudo-class :".concat(name, "(").concat(data, ")"));
        }
        return subselects_js_1.subselects[name](next, data, options, context, compileToken);
      }
      var userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
      var stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases_js_1.aliases[name];
      if (typeof stringPseudo === "string") {
        if (data != null) {
          throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        }
        var alias = (0, css_what_1.parse)(stringPseudo);
        return subselects_js_1.subselects["is"](next, alias, options, context, compileToken);
      }
      if (typeof userPseudo === "function") {
        (0, pseudos_js_1.verifyPseudoArgs)(userPseudo, name, data, 1);
        return function(elem) {
          return userPseudo(elem, data) && next(elem);
        };
      }
      if (name in filters_js_1.filters) {
        return filters_js_1.filters[name](next, data, options, context);
      }
      if (name in pseudos_js_1.pseudos) {
        var pseudo_1 = pseudos_js_1.pseudos[name];
        (0, pseudos_js_1.verifyPseudoArgs)(pseudo_1, name, data, 2);
        return function(elem) {
          return pseudo_1(elem, options, data) && next(elem);
        };
      }
      throw new Error("Unknown pseudo-class :".concat(name));
    }
    exports.compilePseudoSelector = compilePseudoSelector;
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/general.js
var require_general = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/general.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compileGeneralSelector = void 0;
    var attributes_js_1 = require_attributes2();
    var index_js_1 = require_pseudo_selectors();
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    function getElementParent(node, adapter) {
      var parent = adapter.getParent(node);
      if (parent && adapter.isTag(parent)) {
        return parent;
      }
      return null;
    }
    function compileGeneralSelector(next, selector, options, context, compileToken) {
      var adapter = options.adapter, equals = options.equals;
      switch (selector.type) {
        case css_what_1.SelectorType.PseudoElement: {
          throw new Error("Pseudo-elements are not supported by css-select");
        }
        case css_what_1.SelectorType.ColumnCombinator: {
          throw new Error("Column combinators are not yet supported by css-select");
        }
        case css_what_1.SelectorType.Attribute: {
          if (selector.namespace != null) {
            throw new Error("Namespaced attributes are not yet supported by css-select");
          }
          if (!options.xmlMode || options.lowerCaseAttributeNames) {
            selector.name = selector.name.toLowerCase();
          }
          return attributes_js_1.attributeRules[selector.action](next, selector, options);
        }
        case css_what_1.SelectorType.Pseudo: {
          return (0, index_js_1.compilePseudoSelector)(next, selector, options, context, compileToken);
        }
        case css_what_1.SelectorType.Tag: {
          if (selector.namespace != null) {
            throw new Error("Namespaced tag names are not yet supported by css-select");
          }
          var name_1 = selector.name;
          if (!options.xmlMode || options.lowerCaseTags) {
            name_1 = name_1.toLowerCase();
          }
          return function tag(elem) {
            return adapter.getName(elem) === name_1 && next(elem);
          };
        }
        case css_what_1.SelectorType.Descendant: {
          if (options.cacheResults === false || typeof WeakSet === "undefined") {
            return function descendant(elem) {
              var current = elem;
              while (current = getElementParent(current, adapter)) {
                if (next(current)) {
                  return true;
                }
              }
              return false;
            };
          }
          var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
          return function cachedDescendant(elem) {
            var current = elem;
            while (current = getElementParent(current, adapter)) {
              if (!isFalseCache_1.has(current)) {
                if (adapter.isTag(current) && next(current)) {
                  return true;
                }
                isFalseCache_1.add(current);
              }
            }
            return false;
          };
        }
        case "_flexibleDescendant": {
          return function flexibleDescendant(elem) {
            var current = elem;
            do {
              if (next(current))
                return true;
            } while (current = getElementParent(current, adapter));
            return false;
          };
        }
        case css_what_1.SelectorType.Parent: {
          return function parent(elem) {
            return adapter.getChildren(elem).some(function(elem2) {
              return adapter.isTag(elem2) && next(elem2);
            });
          };
        }
        case css_what_1.SelectorType.Child: {
          return function child(elem) {
            var parent = adapter.getParent(elem);
            return parent != null && adapter.isTag(parent) && next(parent);
          };
        }
        case css_what_1.SelectorType.Sibling: {
          return function sibling(elem) {
            var siblings = adapter.getSiblings(elem);
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && next(currentSibling)) {
                return true;
              }
            }
            return false;
          };
        }
        case css_what_1.SelectorType.Adjacent: {
          if (adapter.prevElementSibling) {
            return function adjacent(elem) {
              var previous = adapter.prevElementSibling(elem);
              return previous != null && next(previous);
            };
          }
          return function adjacent(elem) {
            var siblings = adapter.getSiblings(elem);
            var lastElement;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling)) {
                lastElement = currentSibling;
              }
            }
            return !!lastElement && next(lastElement);
          };
        }
        case css_what_1.SelectorType.Universal: {
          if (selector.namespace != null && selector.namespace !== "*") {
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
          }
          return next;
        }
      }
    }
    exports.compileGeneralSelector = compileGeneralSelector;
  }
});

// http-url:https://unpkg.com/css-select@5.1.0/lib/compile.js
var require_compile2 = __commonJS({
  "http-url:https://unpkg.com/css-select@5.1.0/lib/compile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var boolbase_1 = __importDefault(require_boolbase_5E1_0());
    var sort_js_1 = __importStar(require_sort());
    var general_js_1 = require_general();
    var subselects_js_1 = require_subselects();
    function compile(selector, options, context) {
      var next = compileUnsafe(selector, options, context);
      return (0, subselects_js_1.ensureIsTag)(next, options.adapter);
    }
    exports.compile = compile;
    function compileUnsafe(selector, options, context) {
      var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
      return compileToken(token, options, context);
    }
    exports.compileUnsafe = compileUnsafe;
    function includesScopePseudo(t) {
      return t.type === css_what_1.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
        return data.some(includesScopePseudo);
      }));
    }
    var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
    var FLEXIBLE_DESCENDANT_TOKEN = {
      type: "_flexibleDescendant"
    };
    var SCOPE_TOKEN = {
      type: css_what_1.SelectorType.Pseudo,
      name: "scope",
      data: null
    };
    function absolutize(token, _a, context) {
      var adapter = _a.adapter;
      var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
        var parent = adapter.isTag(e) && adapter.getParent(e);
        return e === subselects_js_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
      }));
      for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
        var t = token_1[_i];
        if (t.length > 0 && (0, sort_js_1.isTraversal)(t[0]) && t[0].type !== css_what_1.SelectorType.Descendant) {
        } else if (hasContext && !t.some(includesScopePseudo)) {
          t.unshift(DESCENDANT_TOKEN);
        } else {
          continue;
        }
        t.unshift(SCOPE_TOKEN);
      }
    }
    function compileToken(token, options, context) {
      var _a;
      token.forEach(sort_js_1.default);
      context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
      var isArrayContext = Array.isArray(context);
      var finalContext = context && (Array.isArray(context) ? context : [context]);
      if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
      } else if (token.some(function(t) {
        return t.length > 0 && (0, sort_js_1.isTraversal)(t[0]);
      })) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
      }
      var shouldTestNextSiblings = false;
      var query = token.map(function(rules) {
        if (rules.length >= 2) {
          var first = rules[0], second = rules[1];
          if (first.type !== css_what_1.SelectorType.Pseudo || first.name !== "scope") {
          } else if (isArrayContext && second.type === css_what_1.SelectorType.Descendant) {
            rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
          } else if (second.type === css_what_1.SelectorType.Adjacent || second.type === css_what_1.SelectorType.Sibling) {
            shouldTestNextSiblings = true;
          }
        }
        return compileRules(rules, options, finalContext);
      }).reduce(reduceRules, boolbase_1.default.falseFunc);
      query.shouldTestNextSiblings = shouldTestNextSiblings;
      return query;
    }
    exports.compileToken = compileToken;
    function compileRules(rules, options, context) {
      var _a;
      return rules.reduce(function(previous, rule) {
        return previous === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : (0, general_js_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
      }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.default.trueFunc);
    }
    function reduceRules(a, b) {
      if (b === boolbase_1.default.falseFunc || a === boolbase_1.default.trueFunc) {
        return a;
      }
      if (a === boolbase_1.default.falseFunc || b === boolbase_1.default.trueFunc) {
        return b;
      }
      return function combine(elem) {
        return a(elem) || b(elem);
      };
    }
  }
});

// http-url:https://unpkg.com/css-select@%5E5.1.0/lib/index.js
var require_lib8 = __commonJS({
  "http-url:https://unpkg.com/css-select@%5E5.1.0/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
    var DomUtils = __importStar(require_lib5());
    var boolbase_1 = __importDefault(require_boolbase_5E1_0());
    var compile_js_1 = require_compile2();
    var subselects_js_1 = require_subselects();
    var defaultEquals = function(a, b) {
      return a === b;
    };
    var defaultOptions = {
      adapter: DomUtils,
      equals: defaultEquals
    };
    function convertOptionFormats(options) {
      var _a, _b, _c, _d;
      var opts = options !== null && options !== void 0 ? options : defaultOptions;
      (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
      (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
      return opts;
    }
    function wrapCompile(func) {
      return function addAdapter(selector, options, context) {
        var opts = convertOptionFormats(options);
        return func(selector, opts, context);
      };
    }
    exports.compile = wrapCompile(compile_js_1.compile);
    exports._compileUnsafe = wrapCompile(compile_js_1.compileUnsafe);
    exports._compileToken = wrapCompile(compile_js_1.compileToken);
    function getSelectorFunc(searchFunc) {
      return function select(query, elements, options) {
        var opts = convertOptionFormats(options);
        if (typeof query !== "function") {
          query = (0, compile_js_1.compileUnsafe)(query, opts, elements);
        }
        var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
      };
    }
    function prepareContext(elems, adapter, shouldTestNextSiblings) {
      if (shouldTestNextSiblings === void 0) {
        shouldTestNextSiblings = false;
      }
      if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
      }
      return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
    }
    exports.prepareContext = prepareContext;
    function appendNextSiblings(elem, adapter) {
      var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
      var elemsLength = elems.length;
      for (var i = 0; i < elemsLength; i++) {
        var nextSiblings = (0, subselects_js_1.getNextSiblings)(elems[i], adapter);
        elems.push.apply(elems, nextSiblings);
      }
      return elems;
    }
    exports.selectAll = getSelectorFunc(function(query, elems, options) {
      return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
    });
    exports.selectOne = getSelectorFunc(function(query, elems, options) {
      return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
    });
    function is(elem, query, options) {
      var opts = convertOptionFormats(options);
      return (typeof query === "function" ? query : (0, compile_js_1.compile)(query, opts))(elem);
    }
    exports.is = is;
    exports.default = exports.selectAll;
    var index_js_1 = require_pseudo_selectors();
    Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
      return index_js_1.filters;
    } });
    Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
      return index_js_1.pseudos;
    } });
    Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
      return index_js_1.aliases;
    } });
  }
});

// http-url:https://unpkg.com/cheerio-select@2.1.0/lib/positionals.js
var require_positionals = __commonJS({
  "http-url:https://unpkg.com/cheerio-select@2.1.0/lib/positionals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLimit = exports.isFilter = exports.filterNames = void 0;
    exports.filterNames = /* @__PURE__ */ new Set([
      "first",
      "last",
      "eq",
      "gt",
      "nth",
      "lt",
      "even",
      "odd"
    ]);
    function isFilter(s) {
      if (s.type !== "pseudo")
        return false;
      if (exports.filterNames.has(s.name))
        return true;
      if (s.name === "not" && Array.isArray(s.data)) {
        return s.data.some(function(s2) {
          return s2.some(isFilter);
        });
      }
      return false;
    }
    exports.isFilter = isFilter;
    function getLimit(filter, data, partLimit) {
      var num = data != null ? parseInt(data, 10) : NaN;
      switch (filter) {
        case "first":
          return 1;
        case "nth":
        case "eq":
          return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
        case "lt":
          return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
        case "gt":
          return isFinite(num) ? Infinity : 0;
        case "odd":
          return 2 * partLimit;
        case "even":
          return 2 * partLimit - 1;
        case "last":
        case "not":
          return Infinity;
      }
    }
    exports.getLimit = getLimit;
  }
});

// http-url:https://unpkg.com/cheerio-select@2.1.0/lib/helpers.js
var require_helpers2 = __commonJS({
  "http-url:https://unpkg.com/cheerio-select@2.1.0/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.groupSelectors = exports.getDocumentRoot = void 0;
    var positionals_js_1 = require_positionals();
    function getDocumentRoot(node) {
      while (node.parent)
        node = node.parent;
      return node;
    }
    exports.getDocumentRoot = getDocumentRoot;
    function groupSelectors(selectors) {
      var filteredSelectors = [];
      var plainSelectors = [];
      for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var selector = selectors_1[_i];
        if (selector.some(positionals_js_1.isFilter)) {
          filteredSelectors.push(selector);
        } else {
          plainSelectors.push(selector);
        }
      }
      return [plainSelectors, filteredSelectors];
    }
    exports.groupSelectors = groupSelectors;
  }
});

// http-url:https://unpkg.com/cheerio-select@%5E2.1.0/lib/index.js
var require_lib9 = __commonJS({
  "http-url:https://unpkg.com/cheerio-select@%5E2.1.0/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.select = exports.filter = exports.some = exports.is = exports.aliases = exports.pseudos = exports.filters = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var css_select_1 = require_lib8();
    var DomUtils = __importStar(require_lib5());
    var boolbase = __importStar(require_boolbase_5E1_0());
    var helpers_js_1 = require_helpers2();
    var positionals_js_1 = require_positionals();
    var css_select_2 = require_lib8();
    Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
      return css_select_2.filters;
    } });
    Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
      return css_select_2.pseudos;
    } });
    Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
      return css_select_2.aliases;
    } });
    var UNIVERSAL_SELECTOR = {
      type: css_what_1.SelectorType.Universal,
      namespace: null
    };
    var SCOPE_PSEUDO = {
      type: css_what_1.SelectorType.Pseudo,
      name: "scope",
      data: null
    };
    function is(element, selector, options) {
      if (options === void 0) {
        options = {};
      }
      return some([element], selector, options);
    }
    exports.is = is;
    function some(elements, selector, options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof selector === "function")
        return elements.some(selector);
      var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
      return plain.length > 0 && elements.some((0, css_select_1._compileToken)(plain, options)) || filtered.some(function(sel) {
        return filterBySelector(sel, elements, options).length > 0;
      });
    }
    exports.some = some;
    function filterByPosition(filter2, elems, data, options) {
      var num = typeof data === "string" ? parseInt(data, 10) : NaN;
      switch (filter2) {
        case "first":
        case "lt":
          return elems;
        case "last":
          return elems.length > 0 ? [elems[elems.length - 1]] : elems;
        case "nth":
        case "eq":
          return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];
        case "gt":
          return isFinite(num) ? elems.slice(num + 1) : [];
        case "even":
          return elems.filter(function(_, i) {
            return i % 2 === 0;
          });
        case "odd":
          return elems.filter(function(_, i) {
            return i % 2 === 1;
          });
        case "not": {
          var filtered_1 = new Set(filterParsed(data, elems, options));
          return elems.filter(function(e) {
            return !filtered_1.has(e);
          });
        }
      }
    }
    function filter(selector, elements, options) {
      if (options === void 0) {
        options = {};
      }
      return filterParsed((0, css_what_1.parse)(selector), elements, options);
    }
    exports.filter = filter;
    function filterParsed(selector, elements, options) {
      if (elements.length === 0)
        return [];
      var _a = (0, helpers_js_1.groupSelectors)(selector), plainSelectors = _a[0], filteredSelectors = _a[1];
      var found;
      if (plainSelectors.length) {
        var filtered = filterElements(elements, plainSelectors, options);
        if (filteredSelectors.length === 0) {
          return filtered;
        }
        if (filtered.length) {
          found = new Set(filtered);
        }
      }
      for (var i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
        var filteredSelector = filteredSelectors[i];
        var missing = found ? elements.filter(function(e) {
          return DomUtils.isTag(e) && !found.has(e);
        }) : elements;
        if (missing.length === 0)
          break;
        var filtered = filterBySelector(filteredSelector, elements, options);
        if (filtered.length) {
          if (!found) {
            if (i === filteredSelectors.length - 1) {
              return filtered;
            }
            found = new Set(filtered);
          } else {
            filtered.forEach(function(el) {
              return found.add(el);
            });
          }
        }
      }
      return typeof found !== "undefined" ? found.size === elements.length ? elements : elements.filter(function(el) {
        return found.has(el);
      }) : [];
    }
    function filterBySelector(selector, elements, options) {
      var _a;
      if (selector.some(css_what_1.isTraversal)) {
        var root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, helpers_js_1.getDocumentRoot)(elements[0]);
        var opts = __assign(__assign({}, options), { context: elements, relativeSelector: false });
        selector.push(SCOPE_PSEUDO);
        return findFilterElements(root, selector, opts, true, elements.length);
      }
      return findFilterElements(elements, selector, options, false, elements.length);
    }
    function select(selector, root, options, limit) {
      if (options === void 0) {
        options = {};
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      if (typeof selector === "function") {
        return find(root, selector);
      }
      var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
      var results = filtered.map(function(sel) {
        return findFilterElements(root, sel, options, true, limit);
      });
      if (plain.length) {
        results.push(findElements(root, plain, options, limit));
      }
      if (results.length === 0) {
        return [];
      }
      if (results.length === 1) {
        return results[0];
      }
      return DomUtils.uniqueSort(results.reduce(function(a, b) {
        return __spreadArray(__spreadArray([], a, true), b, true);
      }));
    }
    exports.select = select;
    function findFilterElements(root, selector, options, queryForSelector, totalLimit) {
      var filterIndex = selector.findIndex(positionals_js_1.isFilter);
      var sub = selector.slice(0, filterIndex);
      var filter2 = selector[filterIndex];
      var partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
      var limit = (0, positionals_js_1.getLimit)(filter2.name, filter2.data, partLimit);
      if (limit === 0)
        return [];
      var elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? DomUtils.getChildren(root).filter(DomUtils.isTag) : sub.length === 0 ? (Array.isArray(root) ? root : [root]).filter(DomUtils.isTag) : queryForSelector || sub.some(css_what_1.isTraversal) ? findElements(root, [sub], options, limit) : filterElements(root, [sub], options);
      var elems = elemsNoLimit.slice(0, limit);
      var result = filterByPosition(filter2.name, elems, filter2.data, options);
      if (result.length === 0 || selector.length === filterIndex + 1) {
        return result;
      }
      var remainingSelector = selector.slice(filterIndex + 1);
      var remainingHasTraversal = remainingSelector.some(css_what_1.isTraversal);
      if (remainingHasTraversal) {
        if ((0, css_what_1.isTraversal)(remainingSelector[0])) {
          var type = remainingSelector[0].type;
          if (type === css_what_1.SelectorType.Sibling || type === css_what_1.SelectorType.Adjacent) {
            result = (0, css_select_1.prepareContext)(result, DomUtils, true);
          }
          remainingSelector.unshift(UNIVERSAL_SELECTOR);
        }
        options = __assign(__assign({}, options), {
          relativeSelector: false,
          rootFunc: function(el) {
            return result.includes(el);
          }
        });
      } else if (options.rootFunc && options.rootFunc !== boolbase.trueFunc) {
        options = __assign(__assign({}, options), { rootFunc: boolbase.trueFunc });
      }
      return remainingSelector.some(positionals_js_1.isFilter) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? findElements(result, [remainingSelector], options, totalLimit) : filterElements(result, [remainingSelector], options);
    }
    function findElements(root, sel, options, limit) {
      var query = (0, css_select_1._compileToken)(sel, options, root);
      return find(root, query, limit);
    }
    function find(root, query, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var elems = (0, css_select_1.prepareContext)(root, DomUtils, query.shouldTestNextSiblings);
      return DomUtils.find(function(node) {
        return DomUtils.isTag(node) && query(node);
      }, elems, true, limit);
    }
    function filterElements(elements, sel, options) {
      var els = (Array.isArray(elements) ? elements : [elements]).filter(DomUtils.isTag);
      if (els.length === 0)
        return els;
      var query = (0, css_select_1._compileToken)(sel, options);
      return query === boolbase.trueFunc ? els : els.filter(query);
    }
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/traversing.js
var require_traversing = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/traversing.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addBack = exports.add = exports.end = exports.slice = exports.index = exports.toArray = exports.get = exports.eq = exports.last = exports.first = exports.has = exports.not = exports.is = exports.filterArray = exports.filter = exports.map = exports.each = exports.contents = exports.children = exports.siblings = exports.prevUntil = exports.prevAll = exports.prev = exports.nextUntil = exports.nextAll = exports.next = exports.closest = exports.parentsUntil = exports.parents = exports.parent = exports.find = void 0;
    var domhandler_1 = require_lib6();
    var select = __importStar(require_lib9());
    var utils_js_1 = require_utils();
    var static_js_1 = require_static();
    var domutils_1 = require_lib5();
    var reSiblingSelector = /^\s*[~+]/;
    function find(selectorOrHaystack) {
      var _a;
      if (!selectorOrHaystack) {
        return this._make([]);
      }
      var context = this.toArray();
      if (typeof selectorOrHaystack !== "string") {
        var haystack = (0, utils_js_1.isCheerio)(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
        return this._make(haystack.filter(function(elem) {
          return context.some(function(node) {
            return (0, static_js_1.contains)(node, elem);
          });
        }));
      }
      var elems = reSiblingSelector.test(selectorOrHaystack) ? context : this.children().toArray();
      var options = {
        context,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
        xmlMode: this.options.xmlMode,
        lowerCaseTags: this.options.lowerCaseTags,
        lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
        pseudos: this.options.pseudos,
        quirksMode: this.options.quirksMode
      };
      return this._make(select.select(selectorOrHaystack, elems, options));
    }
    exports.find = find;
    function _getMatcher(matchMap) {
      return function(fn) {
        var postFns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          postFns[_i - 1] = arguments[_i];
        }
        return function(selector) {
          var _a;
          var matched = matchMap(fn, this);
          if (selector) {
            matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
          }
          return this._make(
            this.length > 1 && matched.length > 1 ? postFns.reduce(function(elems, fn2) {
              return fn2(elems);
            }, matched) : matched
          );
        };
      };
    }
    var _matcher = _getMatcher(function(fn, elems) {
      var _a;
      var ret = [];
      for (var i = 0; i < elems.length; i++) {
        var value = fn(elems[i]);
        ret.push(value);
      }
      return (_a = new Array()).concat.apply(_a, ret);
    });
    var _singleMatcher = _getMatcher(function(fn, elems) {
      var ret = [];
      for (var i = 0; i < elems.length; i++) {
        var value = fn(elems[i]);
        if (value !== null) {
          ret.push(value);
        }
      }
      return ret;
    });
    function _matchUntil(nextElem) {
      var postFns = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        postFns[_i - 1] = arguments[_i];
      }
      var matches = null;
      var innerMatcher = _getMatcher(function(nextElem2, elems) {
        var matched = [];
        (0, utils_js_1.domEach)(elems, function(elem) {
          for (var next_1; next_1 = nextElem2(elem); elem = next_1) {
            if (matches === null || matches === void 0 ? void 0 : matches(next_1, matched.length))
              break;
            matched.push(next_1);
          }
        });
        return matched;
      }).apply(void 0, __spreadArray([nextElem], postFns, false));
      return function(selector, filterSelector) {
        var _this = this;
        matches = typeof selector === "string" ? function(elem) {
          return select.is(elem, selector, _this.options);
        } : selector ? getFilterFn(selector) : null;
        var ret = innerMatcher.call(this, filterSelector);
        matches = null;
        return ret;
      };
    }
    function _removeDuplicates(elems) {
      return Array.from(new Set(elems));
    }
    exports.parent = _singleMatcher(function(_a) {
      var parent = _a.parent;
      return parent && !(0, domhandler_1.isDocument)(parent) ? parent : null;
    }, _removeDuplicates);
    exports.parents = _matcher(function(elem) {
      var matched = [];
      while (elem.parent && !(0, domhandler_1.isDocument)(elem.parent)) {
        matched.push(elem.parent);
        elem = elem.parent;
      }
      return matched;
    }, domutils_1.uniqueSort, function(elems) {
      return elems.reverse();
    });
    exports.parentsUntil = _matchUntil(function(_a) {
      var parent = _a.parent;
      return parent && !(0, domhandler_1.isDocument)(parent) ? parent : null;
    }, domutils_1.uniqueSort, function(elems) {
      return elems.reverse();
    });
    function closest(selector) {
      var _a;
      var set = [];
      if (!selector) {
        return this._make(set);
      }
      var selectOpts = {
        xmlMode: this.options.xmlMode,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]
      };
      var selectFn = typeof selector === "string" ? function(elem) {
        return select.is(elem, selector, selectOpts);
      } : getFilterFn(selector);
      (0, utils_js_1.domEach)(this, function(elem) {
        while (elem && (0, utils_js_1.isTag)(elem)) {
          if (selectFn(elem, 0)) {
            if (!set.includes(elem)) {
              set.push(elem);
            }
            break;
          }
          elem = elem.parent;
        }
      });
      return this._make(set);
    }
    exports.closest = closest;
    exports.next = _singleMatcher(function(elem) {
      return (0, domutils_1.nextElementSibling)(elem);
    });
    exports.nextAll = _matcher(function(elem) {
      var matched = [];
      while (elem.next) {
        elem = elem.next;
        if ((0, utils_js_1.isTag)(elem))
          matched.push(elem);
      }
      return matched;
    }, _removeDuplicates);
    exports.nextUntil = _matchUntil(function(el) {
      return (0, domutils_1.nextElementSibling)(el);
    }, _removeDuplicates);
    exports.prev = _singleMatcher(function(elem) {
      return (0, domutils_1.prevElementSibling)(elem);
    });
    exports.prevAll = _matcher(function(elem) {
      var matched = [];
      while (elem.prev) {
        elem = elem.prev;
        if ((0, utils_js_1.isTag)(elem))
          matched.push(elem);
      }
      return matched;
    }, _removeDuplicates);
    exports.prevUntil = _matchUntil(function(el) {
      return (0, domutils_1.prevElementSibling)(el);
    }, _removeDuplicates);
    exports.siblings = _matcher(function(elem) {
      return (0, domutils_1.getSiblings)(elem).filter(function(el) {
        return (0, utils_js_1.isTag)(el) && el !== elem;
      });
    }, domutils_1.uniqueSort);
    exports.children = _matcher(function(elem) {
      return (0, domutils_1.getChildren)(elem).filter(utils_js_1.isTag);
    }, _removeDuplicates);
    function contents() {
      var elems = this.toArray().reduce(function(newElems, elem) {
        return (0, domhandler_1.hasChildren)(elem) ? newElems.concat(elem.children) : newElems;
      }, []);
      return this._make(elems);
    }
    exports.contents = contents;
    function each(fn) {
      var i = 0;
      var len = this.length;
      while (i < len && fn.call(this[i], i, this[i]) !== false)
        ++i;
      return this;
    }
    exports.each = each;
    function map(fn) {
      var elems = [];
      for (var i = 0; i < this.length; i++) {
        var el = this[i];
        var val = fn.call(el, i, el);
        if (val != null) {
          elems = elems.concat(val);
        }
      }
      return this._make(elems);
    }
    exports.map = map;
    function getFilterFn(match) {
      if (typeof match === "function") {
        return function(el, i) {
          return match.call(el, i, el);
        };
      }
      if ((0, utils_js_1.isCheerio)(match)) {
        return function(el) {
          return Array.prototype.includes.call(match, el);
        };
      }
      return function(el) {
        return match === el;
      };
    }
    function filter(match) {
      var _a;
      return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
    }
    exports.filter = filter;
    function filterArray(nodes, match, xmlMode, root) {
      return typeof match === "string" ? select.filter(match, nodes, { xmlMode, root }) : nodes.filter(getFilterFn(match));
    }
    exports.filterArray = filterArray;
    function is(selector) {
      var nodes = this.toArray();
      return typeof selector === "string" ? select.some(nodes.filter(utils_js_1.isTag), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
    }
    exports.is = is;
    function not(match) {
      var nodes = this.toArray();
      if (typeof match === "string") {
        var matches_1 = new Set(select.filter(match, nodes, this.options));
        nodes = nodes.filter(function(el) {
          return !matches_1.has(el);
        });
      } else {
        var filterFn_1 = getFilterFn(match);
        nodes = nodes.filter(function(el, i) {
          return !filterFn_1(el, i);
        });
      }
      return this._make(nodes);
    }
    exports.not = not;
    function has(selectorOrHaystack) {
      var _this = this;
      return this.filter(typeof selectorOrHaystack === "string" ? ":has(".concat(selectorOrHaystack, ")") : function(_, el) {
        return _this._make(el).find(selectorOrHaystack).length > 0;
      });
    }
    exports.has = has;
    function first() {
      return this.length > 1 ? this._make(this[0]) : this;
    }
    exports.first = first;
    function last() {
      return this.length > 0 ? this._make(this[this.length - 1]) : this;
    }
    exports.last = last;
    function eq(i) {
      var _a;
      i = +i;
      if (i === 0 && this.length <= 1)
        return this;
      if (i < 0)
        i = this.length + i;
      return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
    }
    exports.eq = eq;
    function get(i) {
      if (i == null) {
        return this.toArray();
      }
      return this[i < 0 ? this.length + i : i];
    }
    exports.get = get;
    function toArray() {
      return Array.prototype.slice.call(this);
    }
    exports.toArray = toArray;
    function index(selectorOrNeedle) {
      var $haystack;
      var needle;
      if (selectorOrNeedle == null) {
        $haystack = this.parent().children();
        needle = this[0];
      } else if (typeof selectorOrNeedle === "string") {
        $haystack = this._make(selectorOrNeedle);
        needle = this[0];
      } else {
        $haystack = this;
        needle = (0, utils_js_1.isCheerio)(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
      }
      return Array.prototype.indexOf.call($haystack, needle);
    }
    exports.index = index;
    function slice(start, end2) {
      return this._make(Array.prototype.slice.call(this, start, end2));
    }
    exports.slice = slice;
    function end() {
      var _a;
      return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
    }
    exports.end = end;
    function add(other, context) {
      var selection = this._make(other, context);
      var contents2 = (0, domutils_1.uniqueSort)(__spreadArray(__spreadArray([], this.get(), true), selection.get(), true));
      return this._make(contents2);
    }
    exports.add = add;
    function addBack(selector) {
      return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
    }
    exports.addBack = addBack;
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/parse.js
var require_parse2 = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.update = exports.getParse = void 0;
    var domutils_1 = require_lib5();
    var domhandler_1 = require_lib6();
    function getParse(parser) {
      return function parse2(content, options, isDocument, context) {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(content)) {
          content = content.toString();
        }
        if (typeof content === "string") {
          return parser(content, options, isDocument, context);
        }
        var doc = content;
        if (!Array.isArray(doc) && (0, domhandler_1.isDocument)(doc)) {
          return doc;
        }
        var root = new domhandler_1.Document([]);
        update(doc, root);
        return root;
      };
    }
    exports.getParse = getParse;
    function update(newChilds, parent) {
      var arr = Array.isArray(newChilds) ? newChilds : [newChilds];
      if (parent) {
        parent.children = arr;
      } else {
        parent = null;
      }
      for (var i = 0; i < arr.length; i++) {
        var node = arr[i];
        if (node.parent && node.parent.children !== arr) {
          (0, domutils_1.removeElement)(node);
        }
        if (parent) {
          node.prev = arr[i - 1] || null;
          node.next = arr[i + 1] || null;
        } else {
          node.prev = node.next = null;
        }
        node.parent = parent;
      }
      return parent;
    }
    exports.update = update;
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/manipulation.js
var require_manipulation2 = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/manipulation.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clone = exports.text = exports.toString = exports.html = exports.empty = exports.replaceWith = exports.remove = exports.insertBefore = exports.before = exports.insertAfter = exports.after = exports.wrapAll = exports.unwrap = exports.wrapInner = exports.wrap = exports.prepend = exports.append = exports.prependTo = exports.appendTo = exports._makeDomArray = void 0;
    var domhandler_1 = require_lib6();
    var parse_js_1 = require_parse2();
    var static_js_1 = require_static();
    var utils_js_1 = require_utils();
    var domutils_1 = require_lib5();
    function _makeDomArray(elem, clone2) {
      var _this = this;
      if (elem == null) {
        return [];
      }
      if ((0, utils_js_1.isCheerio)(elem)) {
        return clone2 ? (0, utils_js_1.cloneDom)(elem.get()) : elem.get();
      }
      if (Array.isArray(elem)) {
        return elem.reduce(function(newElems, el) {
          return newElems.concat(_this._makeDomArray(el, clone2));
        }, []);
      }
      if (typeof elem === "string") {
        return this._parse(elem, this.options, false, null).children;
      }
      return clone2 ? (0, utils_js_1.cloneDom)([elem]) : [elem];
    }
    exports._makeDomArray = _makeDomArray;
    function _insert(concatenator) {
      return function() {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return (0, utils_js_1.domEach)(this, function(el, i) {
          if (!(0, domhandler_1.hasChildren)(el))
            return;
          var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, _this._render(el.children)) : elems;
          var dom = _this._makeDomArray(domSrc, i < lastIdx);
          concatenator(dom, el.children, el);
        });
      };
    }
    function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
      var _a, _b;
      var spliceArgs = __spreadArray([
        spliceIdx,
        spliceCount
      ], newElems, true);
      var prev = spliceIdx === 0 ? null : array[spliceIdx - 1];
      var next = spliceIdx + spliceCount >= array.length ? null : array[spliceIdx + spliceCount];
      for (var idx = 0; idx < newElems.length; ++idx) {
        var node = newElems[idx];
        var oldParent = node.parent;
        if (oldParent) {
          var oldSiblings = oldParent.children;
          var prevIdx = oldSiblings.indexOf(node);
          if (prevIdx > -1) {
            oldParent.children.splice(prevIdx, 1);
            if (parent === oldParent && spliceIdx > prevIdx) {
              spliceArgs[0]--;
            }
          }
        }
        node.parent = parent;
        if (node.prev) {
          node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
        }
        if (node.next) {
          node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
        }
        node.prev = idx === 0 ? prev : newElems[idx - 1];
        node.next = idx === newElems.length - 1 ? next : newElems[idx + 1];
      }
      if (prev) {
        prev.next = newElems[0];
      }
      if (next) {
        next.prev = newElems[newElems.length - 1];
      }
      return array.splice.apply(array, spliceArgs);
    }
    function appendTo(target) {
      var appendTarget = (0, utils_js_1.isCheerio)(target) ? target : this._make(target);
      appendTarget.append(this);
      return this;
    }
    exports.appendTo = appendTo;
    function prependTo(target) {
      var prependTarget = (0, utils_js_1.isCheerio)(target) ? target : this._make(target);
      prependTarget.prepend(this);
      return this;
    }
    exports.prependTo = prependTo;
    exports.append = _insert(function(dom, children, parent) {
      uniqueSplice(children, children.length, 0, dom, parent);
    });
    exports.prepend = _insert(function(dom, children, parent) {
      uniqueSplice(children, 0, 0, dom, parent);
    });
    function _wrap(insert) {
      return function(wrapper) {
        var lastIdx = this.length - 1;
        var lastParent = this.parents().last();
        for (var i = 0; i < this.length; i++) {
          var el = this[i];
          var wrap_1 = typeof wrapper === "function" ? wrapper.call(el, i, el) : typeof wrapper === "string" && !(0, utils_js_1.isHtml)(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
          var wrapperDom = this._makeDomArray(wrap_1, i < lastIdx)[0];
          if (!wrapperDom || !(0, domhandler_1.hasChildren)(wrapperDom))
            continue;
          var elInsertLocation = wrapperDom;
          var j = 0;
          while (j < elInsertLocation.children.length) {
            var child = elInsertLocation.children[j];
            if ((0, utils_js_1.isTag)(child)) {
              elInsertLocation = child;
              j = 0;
            } else {
              j++;
            }
          }
          insert(el, elInsertLocation, [wrapperDom]);
        }
        return this;
      };
    }
    exports.wrap = _wrap(function(el, elInsertLocation, wrapperDom) {
      var parent = el.parent;
      if (!parent)
        return;
      var siblings = parent.children;
      var index = siblings.indexOf(el);
      (0, parse_js_1.update)([el], elInsertLocation);
      uniqueSplice(siblings, index, 0, wrapperDom, parent);
    });
    exports.wrapInner = _wrap(function(el, elInsertLocation, wrapperDom) {
      if (!(0, domhandler_1.hasChildren)(el))
        return;
      (0, parse_js_1.update)(el.children, elInsertLocation);
      (0, parse_js_1.update)(wrapperDom, el);
    });
    function unwrap(selector) {
      var _this = this;
      this.parent(selector).not("body").each(function(_, el) {
        _this._make(el).replaceWith(el.children);
      });
      return this;
    }
    exports.unwrap = unwrap;
    function wrapAll(wrapper) {
      var el = this[0];
      if (el) {
        var wrap_2 = this._make(typeof wrapper === "function" ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
        var elInsertLocation = void 0;
        for (var i = 0; i < wrap_2.length; i++) {
          if (wrap_2[i].type === "tag")
            elInsertLocation = wrap_2[i];
        }
        var j = 0;
        while (elInsertLocation && j < elInsertLocation.children.length) {
          var child = elInsertLocation.children[j];
          if (child.type === "tag") {
            elInsertLocation = child;
            j = 0;
          } else {
            j++;
          }
        }
        if (elInsertLocation)
          this._make(elInsertLocation).append(this);
      }
      return this;
    }
    exports.wrapAll = wrapAll;
    function after() {
      var _this = this;
      var elems = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i] = arguments[_i];
      }
      var lastIdx = this.length - 1;
      return (0, utils_js_1.domEach)(this, function(el, i) {
        var parent = el.parent;
        if (!(0, domhandler_1.hasChildren)(el) || !parent) {
          return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        if (index < 0)
          return;
        var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, _this._render(el.children)) : elems;
        var dom = _this._makeDomArray(domSrc, i < lastIdx);
        uniqueSplice(siblings, index + 1, 0, dom, parent);
      });
    }
    exports.after = after;
    function insertAfter(target) {
      var _this = this;
      if (typeof target === "string") {
        target = this._make(target);
      }
      this.remove();
      var clones = [];
      this._makeDomArray(target).forEach(function(el) {
        var clonedSelf = _this.clone().toArray();
        var parent = el.parent;
        if (!parent) {
          return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        if (index < 0)
          return;
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
        clones.push.apply(clones, clonedSelf);
      });
      return this._make(clones);
    }
    exports.insertAfter = insertAfter;
    function before() {
      var _this = this;
      var elems = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i] = arguments[_i];
      }
      var lastIdx = this.length - 1;
      return (0, utils_js_1.domEach)(this, function(el, i) {
        var parent = el.parent;
        if (!(0, domhandler_1.hasChildren)(el) || !parent) {
          return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        if (index < 0)
          return;
        var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, _this._render(el.children)) : elems;
        var dom = _this._makeDomArray(domSrc, i < lastIdx);
        uniqueSplice(siblings, index, 0, dom, parent);
      });
    }
    exports.before = before;
    function insertBefore(target) {
      var _this = this;
      var targetArr = this._make(target);
      this.remove();
      var clones = [];
      (0, utils_js_1.domEach)(targetArr, function(el) {
        var clonedSelf = _this.clone().toArray();
        var parent = el.parent;
        if (!parent) {
          return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        if (index < 0)
          return;
        uniqueSplice(siblings, index, 0, clonedSelf, parent);
        clones.push.apply(clones, clonedSelf);
      });
      return this._make(clones);
    }
    exports.insertBefore = insertBefore;
    function remove(selector) {
      var elems = selector ? this.filter(selector) : this;
      (0, utils_js_1.domEach)(elems, function(el) {
        (0, domutils_1.removeElement)(el);
        el.prev = el.next = el.parent = null;
      });
      return this;
    }
    exports.remove = remove;
    function replaceWith(content) {
      var _this = this;
      return (0, utils_js_1.domEach)(this, function(el, i) {
        var parent = el.parent;
        if (!parent) {
          return;
        }
        var siblings = parent.children;
        var cont = typeof content === "function" ? content.call(el, i, el) : content;
        var dom = _this._makeDomArray(cont);
        (0, parse_js_1.update)(dom, null);
        var index = siblings.indexOf(el);
        uniqueSplice(siblings, index, 1, dom, parent);
        if (!dom.includes(el)) {
          el.parent = el.prev = el.next = null;
        }
      });
    }
    exports.replaceWith = replaceWith;
    function empty() {
      return (0, utils_js_1.domEach)(this, function(el) {
        if (!(0, domhandler_1.hasChildren)(el))
          return;
        el.children.forEach(function(child) {
          child.next = child.prev = child.parent = null;
        });
        el.children.length = 0;
      });
    }
    exports.empty = empty;
    function html(str) {
      var _this = this;
      if (str === void 0) {
        var el = this[0];
        if (!el || !(0, domhandler_1.hasChildren)(el))
          return null;
        return this._render(el.children);
      }
      return (0, utils_js_1.domEach)(this, function(el2) {
        if (!(0, domhandler_1.hasChildren)(el2))
          return;
        el2.children.forEach(function(child) {
          child.next = child.prev = child.parent = null;
        });
        var content = (0, utils_js_1.isCheerio)(str) ? str.toArray() : _this._parse("".concat(str), _this.options, false, el2).children;
        (0, parse_js_1.update)(content, el2);
      });
    }
    exports.html = html;
    function toString() {
      return this._render(this);
    }
    exports.toString = toString;
    function text(str) {
      var _this = this;
      if (str === void 0) {
        return (0, static_js_1.text)(this);
      }
      if (typeof str === "function") {
        return (0, utils_js_1.domEach)(this, function(el, i) {
          return _this._make(el).text(str.call(el, i, (0, static_js_1.text)([el])));
        });
      }
      return (0, utils_js_1.domEach)(this, function(el) {
        if (!(0, domhandler_1.hasChildren)(el))
          return;
        el.children.forEach(function(child) {
          child.next = child.prev = child.parent = null;
        });
        var textNode = new domhandler_1.Text("".concat(str));
        (0, parse_js_1.update)(textNode, el);
      });
    }
    exports.text = text;
    function clone() {
      return this._make((0, utils_js_1.cloneDom)(this.get()));
    }
    exports.clone = clone;
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/css.js
var require_css = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.css = void 0;
    var utils_js_1 = require_utils();
    function css(prop, val) {
      if (prop != null && val != null || typeof prop === "object" && !Array.isArray(prop)) {
        return (0, utils_js_1.domEach)(this, function(el, i) {
          if ((0, utils_js_1.isTag)(el)) {
            setCss(el, prop, val, i);
          }
        });
      }
      if (this.length === 0) {
        return void 0;
      }
      return getCss(this[0], prop);
    }
    exports.css = css;
    function setCss(el, prop, value, idx) {
      if (typeof prop === "string") {
        var styles = getCss(el);
        var val = typeof value === "function" ? value.call(el, idx, styles[prop]) : value;
        if (val === "") {
          delete styles[prop];
        } else if (val != null) {
          styles[prop] = val;
        }
        el.attribs["style"] = stringify2(styles);
      } else if (typeof prop === "object") {
        Object.keys(prop).forEach(function(k, i) {
          setCss(el, k, prop[k], i);
        });
      }
    }
    function getCss(el, prop) {
      if (!el || !(0, utils_js_1.isTag)(el))
        return;
      var styles = parse2(el.attribs["style"]);
      if (typeof prop === "string") {
        return styles[prop];
      }
      if (Array.isArray(prop)) {
        var newStyles_1 = {};
        prop.forEach(function(item) {
          if (styles[item] != null) {
            newStyles_1[item] = styles[item];
          }
        });
        return newStyles_1;
      }
      return styles;
    }
    function stringify2(obj) {
      return Object.keys(obj).reduce(function(str, prop) {
        return "".concat(str).concat(str ? " " : "").concat(prop, ": ").concat(obj[prop], ";");
      }, "");
    }
    function parse2(styles) {
      styles = (styles || "").trim();
      if (!styles)
        return {};
      var obj = {};
      var key;
      for (var _i = 0, _a = styles.split(";"); _i < _a.length; _i++) {
        var str = _a[_i];
        var n = str.indexOf(":");
        if (n < 1 || n === str.length - 1) {
          var trimmed = str.trimEnd();
          if (trimmed.length > 0 && key !== void 0) {
            obj[key] += ";".concat(trimmed);
          }
        } else {
          key = str.slice(0, n).trim();
          obj[key] = str.slice(n + 1).trim();
        }
      }
      return obj;
    }
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/forms.js
var require_forms = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/api/forms.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeArray = exports.serialize = void 0;
    var utils_js_1 = require_utils();
    var submittableSelector = "input,select,textarea,keygen";
    var r20 = /%20/g;
    var rCRLF = /\r?\n/g;
    function serialize() {
      var arr = this.serializeArray();
      var retArr = arr.map(function(data) {
        return "".concat(encodeURIComponent(data.name), "=").concat(encodeURIComponent(data.value));
      });
      return retArr.join("&").replace(r20, "+");
    }
    exports.serialize = serialize;
    function serializeArray() {
      var _this = this;
      return this.map(function(_, elem) {
        var $elem = _this._make(elem);
        if ((0, utils_js_1.isTag)(elem) && elem.name === "form") {
          return $elem.find(submittableSelector).toArray();
        }
        return $elem.filter(submittableSelector).toArray();
      }).filter(
        '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
      ).map(function(_, elem) {
        var _a;
        var $elem = _this._make(elem);
        var name = $elem.attr("name");
        var value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : "";
        if (Array.isArray(value)) {
          return value.map(function(val) {
            return { name, value: val.replace(rCRLF, "\r\n") };
          });
        }
        return { name, value: value.replace(rCRLF, "\r\n") };
      }).toArray();
    }
    exports.serializeArray = serializeArray;
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/cheerio.js
var require_cheerio = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/cheerio.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cheerio = void 0;
    var Attributes = __importStar(require_attributes());
    var Traversing = __importStar(require_traversing());
    var Manipulation = __importStar(require_manipulation2());
    var Css = __importStar(require_css());
    var Forms = __importStar(require_forms());
    var Cheerio = function() {
      function Cheerio2(elements, root, options) {
        this.length = 0;
        this.options = options;
        this._root = root;
        if (elements) {
          for (var idx = 0; idx < elements.length; idx++) {
            this[idx] = elements[idx];
          }
          this.length = elements.length;
        }
      }
      return Cheerio2;
    }();
    exports.Cheerio = Cheerio;
    Cheerio.prototype.cheerio = "[cheerio object]";
    Cheerio.prototype.splice = Array.prototype.splice;
    Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/load.js
var require_load = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/load.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLoad = void 0;
    var options_js_1 = __importStar(require_options());
    var staticMethods = __importStar(require_static());
    var cheerio_js_1 = require_cheerio();
    var utils_js_1 = require_utils();
    function getLoad(parse2, render) {
      return function load(content, options, isDocument) {
        if (isDocument === void 0) {
          isDocument = true;
        }
        if (content == null) {
          throw new Error("cheerio.load() expects a string");
        }
        var internalOpts = __assign(__assign({}, options_js_1.default), (0, options_js_1.flatten)(options));
        var initialRoot = parse2(content, internalOpts, isDocument, null);
        var LoadedCheerio = function(_super) {
          __extends(LoadedCheerio2, _super);
          function LoadedCheerio2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          LoadedCheerio2.prototype._make = function(selector, context) {
            var cheerio = initialize(selector, context);
            cheerio.prevObject = this;
            return cheerio;
          };
          LoadedCheerio2.prototype._parse = function(content2, options2, isDocument2, context) {
            return parse2(content2, options2, isDocument2, context);
          };
          LoadedCheerio2.prototype._render = function(dom) {
            return render(dom, this.options);
          };
          return LoadedCheerio2;
        }(cheerio_js_1.Cheerio);
        function initialize(selector, context, root, opts) {
          if (root === void 0) {
            root = initialRoot;
          }
          if (selector && (0, utils_js_1.isCheerio)(selector))
            return selector;
          var options2 = __assign(__assign({}, internalOpts), (0, options_js_1.flatten)(opts));
          var r = typeof root === "string" ? [parse2(root, options2, false, null)] : "length" in root ? root : [root];
          var rootInstance = (0, utils_js_1.isCheerio)(r) ? r : new LoadedCheerio(r, null, options2);
          rootInstance._root = rootInstance;
          if (!selector) {
            return new LoadedCheerio(void 0, rootInstance, options2);
          }
          var elements = typeof selector === "string" && (0, utils_js_1.isHtml)(selector) ? parse2(selector, options2, false, null).children : isNode(selector) ? [selector] : Array.isArray(selector) ? selector : void 0;
          var instance = new LoadedCheerio(elements, rootInstance, options2);
          if (elements) {
            return instance;
          }
          if (typeof selector !== "string") {
            throw new Error("Unexpected type of selector");
          }
          var search = selector;
          var searchContext = !context ? rootInstance : typeof context === "string" ? (0, utils_js_1.isHtml)(context) ? new LoadedCheerio([parse2(context, options2, false, null)], rootInstance, options2) : (search = "".concat(context, " ").concat(search), rootInstance) : (0, utils_js_1.isCheerio)(context) ? context : new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options2);
          if (!searchContext)
            return instance;
          return searchContext.find(search);
        }
        Object.assign(initialize, staticMethods, {
          load,
          _root: initialRoot,
          _options: internalOpts,
          fn: LoadedCheerio.prototype,
          prototype: LoadedCheerio.prototype
        });
        return initialize;
      };
    }
    exports.getLoad = getLoad;
    function isNode(obj) {
      return !!obj.name || obj.type === "root" || obj.type === "text" || obj.type === "comment";
    }
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/unicode.js
var require_unicode = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/unicode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUndefinedCodePoint = exports.isControlCodePoint = exports.getSurrogatePairCodePoint = exports.isSurrogatePair = exports.isSurrogate = exports.SEQUENCES = exports.CODE_POINTS = exports.REPLACEMENT_CHARACTER = void 0;
    var UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ]);
    exports.REPLACEMENT_CHARACTER = "\uFFFD";
    var CODE_POINTS;
    (function(CODE_POINTS2) {
      CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
      CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
      CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
      CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
      CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
      CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
      CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
      CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
      CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
      CODE_POINTS2[CODE_POINTS2["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
      CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
      CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
      CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
      CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
      CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
      CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
      CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
      CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
      CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
      CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
      CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
      CODE_POINTS2[CODE_POINTS2["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
    })(CODE_POINTS = exports.CODE_POINTS || (exports.CODE_POINTS = {}));
    exports.SEQUENCES = {
      DASH_DASH: "--",
      CDATA_START: "[CDATA[",
      DOCTYPE: "doctype",
      SCRIPT: "script",
      PUBLIC: "public",
      SYSTEM: "system"
    };
    function isSurrogate(cp) {
      return cp >= 55296 && cp <= 57343;
    }
    exports.isSurrogate = isSurrogate;
    function isSurrogatePair(cp) {
      return cp >= 56320 && cp <= 57343;
    }
    exports.isSurrogatePair = isSurrogatePair;
    function getSurrogatePairCodePoint(cp1, cp2) {
      return (cp1 - 55296) * 1024 + 9216 + cp2;
    }
    exports.getSurrogatePairCodePoint = getSurrogatePairCodePoint;
    function isControlCodePoint(cp) {
      return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
    }
    exports.isControlCodePoint = isControlCodePoint;
    function isUndefinedCodePoint(cp) {
      return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
    }
    exports.isUndefinedCodePoint = isUndefinedCodePoint;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/error-codes.js
var require_error_codes = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/error-codes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERR = void 0;
    var ERR;
    (function(ERR2) {
      ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
      ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
      ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
      ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
      ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
      ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
      ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
      ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
      ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
      ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
      ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
      ERR2["missingEndTagName"] = "missing-end-tag-name";
      ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
      ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
      ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
      ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
      ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
      ERR2["eofBeforeTagName"] = "eof-before-tag-name";
      ERR2["eofInTag"] = "eof-in-tag";
      ERR2["missingAttributeValue"] = "missing-attribute-value";
      ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
      ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
      ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
      ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
      ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
      ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
      ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
      ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
      ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
      ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
      ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
      ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
      ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
      ERR2["eofInDoctype"] = "eof-in-doctype";
      ERR2["nestedComment"] = "nested-comment";
      ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
      ERR2["eofInComment"] = "eof-in-comment";
      ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
      ERR2["eofInCdata"] = "eof-in-cdata";
      ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
      ERR2["nullCharacterReference"] = "null-character-reference";
      ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
      ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
      ERR2["controlCharacterReference"] = "control-character-reference";
      ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
      ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
      ERR2["missingDoctypeName"] = "missing-doctype-name";
      ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
      ERR2["duplicateAttribute"] = "duplicate-attribute";
      ERR2["nonConformingDoctype"] = "non-conforming-doctype";
      ERR2["missingDoctype"] = "missing-doctype";
      ERR2["misplacedDoctype"] = "misplaced-doctype";
      ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
      ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
      ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
      ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
      ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
      ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
      ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
      ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
    })(ERR = exports.ERR || (exports.ERR = {}));
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/tokenizer/preprocessor.js
var require_preprocessor = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/tokenizer/preprocessor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Preprocessor = void 0;
    var unicode_js_1 = require_unicode();
    var error_codes_js_1 = require_error_codes();
    var DEFAULT_BUFFER_WATERLINE = 1 << 16;
    var Preprocessor = class {
      constructor(handler) {
        this.handler = handler;
        this.html = "";
        this.pos = -1;
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        this.lastErrOffset = -1;
      }
      get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
      }
      get offset() {
        return this.droppedBufferSize + this.pos;
      }
      getError(code) {
        const { line, col, offset } = this;
        return {
          code,
          startLine: line,
          endLine: line,
          startCol: col,
          endCol: col,
          startOffset: offset,
          endOffset: offset
        };
      }
      _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
          this.lastErrOffset = this.offset;
          this.handler.onParseError(this.getError(code));
        }
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.html.length - 1) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if ((0, unicode_js_1.isSurrogatePair)(nextCp)) {
            this.pos++;
            this._addGap();
            return (0, unicode_js_1.getSurrogatePairCodePoint)(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        this._err(error_codes_js_1.ERR.surrogateInInputStream);
        return cp;
      }
      willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
      }
      dropParsedChunk() {
        if (this.willDropParsedChunk()) {
          this.html = this.html.substring(this.pos);
          this.lineStartPos -= this.pos;
          this.droppedBufferSize += this.pos;
          this.pos = 0;
          this.lastGapPos = -2;
          this.gapStack.length = 0;
        }
      }
      write(chunk, isLastChunk) {
        if (this.html.length > 0) {
          this.html += chunk;
        } else {
          this.html = chunk;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
      }
      startsWith(pattern, caseSensitive) {
        if (this.pos + pattern.length > this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return false;
        }
        if (caseSensitive) {
          return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
          const cp = this.html.charCodeAt(this.pos + i) | 32;
          if (cp !== pattern.charCodeAt(i)) {
            return false;
          }
        }
        return true;
      }
      peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        return this.html.charCodeAt(pos);
      }
      advance() {
        this.pos++;
        if (this.isEol) {
          this.isEol = false;
          this.line++;
          this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return unicode_js_1.CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
          this.isEol = true;
          this.skipNextNewLine = true;
          return unicode_js_1.CODE_POINTS.LINE_FEED;
        }
        if (cp === unicode_js_1.CODE_POINTS.LINE_FEED) {
          this.isEol = true;
          if (this.skipNextNewLine) {
            this.line--;
            this.skipNextNewLine = false;
            this._addGap();
            return this.advance();
          }
        }
        this.skipNextNewLine = false;
        if ((0, unicode_js_1.isSurrogate)(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if ((0, unicode_js_1.isControlCodePoint)(cp)) {
          this._err(error_codes_js_1.ERR.controlCharacterInInputStream);
        } else if ((0, unicode_js_1.isUndefinedCodePoint)(cp)) {
          this._err(error_codes_js_1.ERR.noncharacterInInputStream);
        }
      }
      retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.isEol = false;
      }
    };
    exports.Preprocessor = Preprocessor;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/token.js
var require_token = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTokenAttr = exports.TokenType = void 0;
    var TokenType;
    (function(TokenType2) {
      TokenType2[TokenType2["CHARACTER"] = 0] = "CHARACTER";
      TokenType2[TokenType2["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
      TokenType2[TokenType2["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
      TokenType2[TokenType2["START_TAG"] = 3] = "START_TAG";
      TokenType2[TokenType2["END_TAG"] = 4] = "END_TAG";
      TokenType2[TokenType2["COMMENT"] = 5] = "COMMENT";
      TokenType2[TokenType2["DOCTYPE"] = 6] = "DOCTYPE";
      TokenType2[TokenType2["EOF"] = 7] = "EOF";
      TokenType2[TokenType2["HIBERNATION"] = 8] = "HIBERNATION";
    })(TokenType = exports.TokenType || (exports.TokenType = {}));
    function getTokenAttr(token, attrName) {
      for (let i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName) {
          return token.attrs[i].value;
        }
      }
      return null;
    }
    exports.getTokenAttr = getTokenAttr;
  }
});

// http-url:https://unpkg.com/entities@latest/lib/decode.js
var require_decode2 = __commonJS({
  "http-url:https://unpkg.com/entities@latest/lib/decode.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
    var decode_data_html_js_1 = __importDefault(require_decode_data_html());
    exports.htmlDecodeTree = decode_data_html_js_1.default;
    var decode_data_xml_js_1 = __importDefault(require_decode_data_xml());
    exports.xmlDecodeTree = decode_data_xml_js_1.default;
    var decode_codepoint_js_1 = __importDefault(require_decode_codepoint());
    exports.decodeCodePoint = decode_codepoint_js_1.default;
    var decode_codepoint_js_2 = require_decode_codepoint();
    Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.replaceCodePoint;
    } });
    Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.fromCodePoint;
    } });
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
    })(CharCodes || (CharCodes = {}));
    var BinTrieFlags;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
    function getDecoder(decodeTree) {
      return function decodeHTMLBinary(str, strict) {
        var ret = "";
        var lastIdx = 0;
        var strIdx = 0;
        while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
          ret += str.slice(lastIdx, strIdx);
          lastIdx = strIdx;
          strIdx += 1;
          if (str.charCodeAt(strIdx) === CharCodes.NUM) {
            var start = strIdx + 1;
            var base = 10;
            var cp = str.charCodeAt(start);
            if ((cp | CharCodes.To_LOWER_BIT) === CharCodes.LOWER_X) {
              base = 16;
              strIdx += 1;
              start += 1;
            }
            do
              cp = str.charCodeAt(++strIdx);
            while (cp >= CharCodes.ZERO && cp <= CharCodes.NINE || base === 16 && (cp | CharCodes.To_LOWER_BIT) >= CharCodes.LOWER_A && (cp | CharCodes.To_LOWER_BIT) <= CharCodes.LOWER_F);
            if (start !== strIdx) {
              var entity = str.substring(start, strIdx);
              var parsed = parseInt(entity, base);
              if (str.charCodeAt(strIdx) === CharCodes.SEMI) {
                strIdx += 1;
              } else if (strict) {
                continue;
              }
              ret += (0, decode_codepoint_js_1.default)(parsed);
              lastIdx = strIdx;
            }
            continue;
          }
          var resultIdx = 0;
          var excess = 1;
          var treeIdx = 0;
          var current = decodeTree[treeIdx];
          for (; strIdx < str.length; strIdx++, excess++) {
            treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
            if (treeIdx < 0)
              break;
            current = decodeTree[treeIdx];
            var masked = current & BinTrieFlags.VALUE_LENGTH;
            if (masked) {
              if (!strict || str.charCodeAt(strIdx) === CharCodes.SEMI) {
                resultIdx = treeIdx;
                excess = 0;
              }
              var valueLength = (masked >> 14) - 1;
              if (valueLength === 0)
                break;
              treeIdx += valueLength;
            }
          }
          if (resultIdx !== 0) {
            var valueLength = (decodeTree[resultIdx] & BinTrieFlags.VALUE_LENGTH) >> 14;
            ret += valueLength === 1 ? String.fromCharCode(decodeTree[resultIdx] & ~BinTrieFlags.VALUE_LENGTH) : valueLength === 2 ? String.fromCharCode(decodeTree[resultIdx + 1]) : String.fromCharCode(decodeTree[resultIdx + 1], decodeTree[resultIdx + 2]);
            lastIdx = strIdx - excess + 1;
          }
        }
        return ret + str.slice(lastIdx);
      };
    }
    function determineBranch(decodeTree, current, nodeIdx, char) {
      var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
      var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
      if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
      }
      if (jumpOffset) {
        var value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
      }
      var lo = nodeIdx;
      var hi = lo + branchCount - 1;
      while (lo <= hi) {
        var mid = lo + hi >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) {
          lo = mid + 1;
        } else if (midVal > char) {
          hi = mid - 1;
        } else {
          return decodeTree[mid + branchCount];
        }
      }
      return -1;
    }
    exports.determineBranch = determineBranch;
    var htmlDecoder = getDecoder(decode_data_html_js_1.default);
    var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
    function decodeHTML(str) {
      return htmlDecoder(str, false);
    }
    exports.decodeHTML = decodeHTML;
    function decodeHTMLStrict(str) {
      return htmlDecoder(str, true);
    }
    exports.decodeHTMLStrict = decodeHTMLStrict;
    function decodeXML(str) {
      return xmlDecoder(str, true);
    }
    exports.decodeXML = decodeXML;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/html.js
var require_html = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/html.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasUnescapedText = exports.isNumberedHeader = exports.SPECIAL_ELEMENTS = exports.getTagID = exports.TAG_ID = exports.TAG_NAMES = exports.DOCUMENT_MODE = exports.ATTRS = exports.NS = void 0;
    var NS;
    (function(NS2) {
      NS2["HTML"] = "http://www.w3.org/1999/xhtml";
      NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
      NS2["SVG"] = "http://www.w3.org/2000/svg";
      NS2["XLINK"] = "http://www.w3.org/1999/xlink";
      NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
      NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
    })(NS = exports.NS || (exports.NS = {}));
    var ATTRS;
    (function(ATTRS2) {
      ATTRS2["TYPE"] = "type";
      ATTRS2["ACTION"] = "action";
      ATTRS2["ENCODING"] = "encoding";
      ATTRS2["PROMPT"] = "prompt";
      ATTRS2["NAME"] = "name";
      ATTRS2["COLOR"] = "color";
      ATTRS2["FACE"] = "face";
      ATTRS2["SIZE"] = "size";
    })(ATTRS = exports.ATTRS || (exports.ATTRS = {}));
    var DOCUMENT_MODE;
    (function(DOCUMENT_MODE2) {
      DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
      DOCUMENT_MODE2["QUIRKS"] = "quirks";
      DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
    })(DOCUMENT_MODE = exports.DOCUMENT_MODE || (exports.DOCUMENT_MODE = {}));
    var TAG_NAMES;
    (function(TAG_NAMES2) {
      TAG_NAMES2["A"] = "a";
      TAG_NAMES2["ADDRESS"] = "address";
      TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
      TAG_NAMES2["APPLET"] = "applet";
      TAG_NAMES2["AREA"] = "area";
      TAG_NAMES2["ARTICLE"] = "article";
      TAG_NAMES2["ASIDE"] = "aside";
      TAG_NAMES2["B"] = "b";
      TAG_NAMES2["BASE"] = "base";
      TAG_NAMES2["BASEFONT"] = "basefont";
      TAG_NAMES2["BGSOUND"] = "bgsound";
      TAG_NAMES2["BIG"] = "big";
      TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
      TAG_NAMES2["BODY"] = "body";
      TAG_NAMES2["BR"] = "br";
      TAG_NAMES2["BUTTON"] = "button";
      TAG_NAMES2["CAPTION"] = "caption";
      TAG_NAMES2["CENTER"] = "center";
      TAG_NAMES2["CODE"] = "code";
      TAG_NAMES2["COL"] = "col";
      TAG_NAMES2["COLGROUP"] = "colgroup";
      TAG_NAMES2["DD"] = "dd";
      TAG_NAMES2["DESC"] = "desc";
      TAG_NAMES2["DETAILS"] = "details";
      TAG_NAMES2["DIALOG"] = "dialog";
      TAG_NAMES2["DIR"] = "dir";
      TAG_NAMES2["DIV"] = "div";
      TAG_NAMES2["DL"] = "dl";
      TAG_NAMES2["DT"] = "dt";
      TAG_NAMES2["EM"] = "em";
      TAG_NAMES2["EMBED"] = "embed";
      TAG_NAMES2["FIELDSET"] = "fieldset";
      TAG_NAMES2["FIGCAPTION"] = "figcaption";
      TAG_NAMES2["FIGURE"] = "figure";
      TAG_NAMES2["FONT"] = "font";
      TAG_NAMES2["FOOTER"] = "footer";
      TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
      TAG_NAMES2["FORM"] = "form";
      TAG_NAMES2["FRAME"] = "frame";
      TAG_NAMES2["FRAMESET"] = "frameset";
      TAG_NAMES2["H1"] = "h1";
      TAG_NAMES2["H2"] = "h2";
      TAG_NAMES2["H3"] = "h3";
      TAG_NAMES2["H4"] = "h4";
      TAG_NAMES2["H5"] = "h5";
      TAG_NAMES2["H6"] = "h6";
      TAG_NAMES2["HEAD"] = "head";
      TAG_NAMES2["HEADER"] = "header";
      TAG_NAMES2["HGROUP"] = "hgroup";
      TAG_NAMES2["HR"] = "hr";
      TAG_NAMES2["HTML"] = "html";
      TAG_NAMES2["I"] = "i";
      TAG_NAMES2["IMG"] = "img";
      TAG_NAMES2["IMAGE"] = "image";
      TAG_NAMES2["INPUT"] = "input";
      TAG_NAMES2["IFRAME"] = "iframe";
      TAG_NAMES2["KEYGEN"] = "keygen";
      TAG_NAMES2["LABEL"] = "label";
      TAG_NAMES2["LI"] = "li";
      TAG_NAMES2["LINK"] = "link";
      TAG_NAMES2["LISTING"] = "listing";
      TAG_NAMES2["MAIN"] = "main";
      TAG_NAMES2["MALIGNMARK"] = "malignmark";
      TAG_NAMES2["MARQUEE"] = "marquee";
      TAG_NAMES2["MATH"] = "math";
      TAG_NAMES2["MENU"] = "menu";
      TAG_NAMES2["META"] = "meta";
      TAG_NAMES2["MGLYPH"] = "mglyph";
      TAG_NAMES2["MI"] = "mi";
      TAG_NAMES2["MO"] = "mo";
      TAG_NAMES2["MN"] = "mn";
      TAG_NAMES2["MS"] = "ms";
      TAG_NAMES2["MTEXT"] = "mtext";
      TAG_NAMES2["NAV"] = "nav";
      TAG_NAMES2["NOBR"] = "nobr";
      TAG_NAMES2["NOFRAMES"] = "noframes";
      TAG_NAMES2["NOEMBED"] = "noembed";
      TAG_NAMES2["NOSCRIPT"] = "noscript";
      TAG_NAMES2["OBJECT"] = "object";
      TAG_NAMES2["OL"] = "ol";
      TAG_NAMES2["OPTGROUP"] = "optgroup";
      TAG_NAMES2["OPTION"] = "option";
      TAG_NAMES2["P"] = "p";
      TAG_NAMES2["PARAM"] = "param";
      TAG_NAMES2["PLAINTEXT"] = "plaintext";
      TAG_NAMES2["PRE"] = "pre";
      TAG_NAMES2["RB"] = "rb";
      TAG_NAMES2["RP"] = "rp";
      TAG_NAMES2["RT"] = "rt";
      TAG_NAMES2["RTC"] = "rtc";
      TAG_NAMES2["RUBY"] = "ruby";
      TAG_NAMES2["S"] = "s";
      TAG_NAMES2["SCRIPT"] = "script";
      TAG_NAMES2["SECTION"] = "section";
      TAG_NAMES2["SELECT"] = "select";
      TAG_NAMES2["SOURCE"] = "source";
      TAG_NAMES2["SMALL"] = "small";
      TAG_NAMES2["SPAN"] = "span";
      TAG_NAMES2["STRIKE"] = "strike";
      TAG_NAMES2["STRONG"] = "strong";
      TAG_NAMES2["STYLE"] = "style";
      TAG_NAMES2["SUB"] = "sub";
      TAG_NAMES2["SUMMARY"] = "summary";
      TAG_NAMES2["SUP"] = "sup";
      TAG_NAMES2["TABLE"] = "table";
      TAG_NAMES2["TBODY"] = "tbody";
      TAG_NAMES2["TEMPLATE"] = "template";
      TAG_NAMES2["TEXTAREA"] = "textarea";
      TAG_NAMES2["TFOOT"] = "tfoot";
      TAG_NAMES2["TD"] = "td";
      TAG_NAMES2["TH"] = "th";
      TAG_NAMES2["THEAD"] = "thead";
      TAG_NAMES2["TITLE"] = "title";
      TAG_NAMES2["TR"] = "tr";
      TAG_NAMES2["TRACK"] = "track";
      TAG_NAMES2["TT"] = "tt";
      TAG_NAMES2["U"] = "u";
      TAG_NAMES2["UL"] = "ul";
      TAG_NAMES2["SVG"] = "svg";
      TAG_NAMES2["VAR"] = "var";
      TAG_NAMES2["WBR"] = "wbr";
      TAG_NAMES2["XMP"] = "xmp";
    })(TAG_NAMES = exports.TAG_NAMES || (exports.TAG_NAMES = {}));
    var TAG_ID;
    (function(TAG_ID2) {
      TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
      TAG_ID2[TAG_ID2["A"] = 1] = "A";
      TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
      TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
      TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
      TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
      TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
      TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
      TAG_ID2[TAG_ID2["B"] = 8] = "B";
      TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
      TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
      TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
      TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
      TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
      TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
      TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
      TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
      TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
      TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
      TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
      TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
      TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
      TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
      TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
      TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
      TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
      TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
      TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
      TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
      TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
      TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
      TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
      TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
      TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
      TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
      TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
      TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
      TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
      TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
      TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
      TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
      TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
      TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
      TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
      TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
      TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
      TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
      TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
      TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
      TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
      TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
      TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
      TAG_ID2[TAG_ID2["I"] = 52] = "I";
      TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
      TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
      TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
      TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
      TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
      TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
      TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
      TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
      TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
      TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
      TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
      TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
      TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
      TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
      TAG_ID2[TAG_ID2["META"] = 67] = "META";
      TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
      TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
      TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
      TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
      TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
      TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
      TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
      TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
      TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
      TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
      TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
      TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
      TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
      TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
      TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
      TAG_ID2[TAG_ID2["P"] = 83] = "P";
      TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
      TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
      TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
      TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
      TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
      TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
      TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
      TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
      TAG_ID2[TAG_ID2["S"] = 92] = "S";
      TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
      TAG_ID2[TAG_ID2["SECTION"] = 94] = "SECTION";
      TAG_ID2[TAG_ID2["SELECT"] = 95] = "SELECT";
      TAG_ID2[TAG_ID2["SOURCE"] = 96] = "SOURCE";
      TAG_ID2[TAG_ID2["SMALL"] = 97] = "SMALL";
      TAG_ID2[TAG_ID2["SPAN"] = 98] = "SPAN";
      TAG_ID2[TAG_ID2["STRIKE"] = 99] = "STRIKE";
      TAG_ID2[TAG_ID2["STRONG"] = 100] = "STRONG";
      TAG_ID2[TAG_ID2["STYLE"] = 101] = "STYLE";
      TAG_ID2[TAG_ID2["SUB"] = 102] = "SUB";
      TAG_ID2[TAG_ID2["SUMMARY"] = 103] = "SUMMARY";
      TAG_ID2[TAG_ID2["SUP"] = 104] = "SUP";
      TAG_ID2[TAG_ID2["TABLE"] = 105] = "TABLE";
      TAG_ID2[TAG_ID2["TBODY"] = 106] = "TBODY";
      TAG_ID2[TAG_ID2["TEMPLATE"] = 107] = "TEMPLATE";
      TAG_ID2[TAG_ID2["TEXTAREA"] = 108] = "TEXTAREA";
      TAG_ID2[TAG_ID2["TFOOT"] = 109] = "TFOOT";
      TAG_ID2[TAG_ID2["TD"] = 110] = "TD";
      TAG_ID2[TAG_ID2["TH"] = 111] = "TH";
      TAG_ID2[TAG_ID2["THEAD"] = 112] = "THEAD";
      TAG_ID2[TAG_ID2["TITLE"] = 113] = "TITLE";
      TAG_ID2[TAG_ID2["TR"] = 114] = "TR";
      TAG_ID2[TAG_ID2["TRACK"] = 115] = "TRACK";
      TAG_ID2[TAG_ID2["TT"] = 116] = "TT";
      TAG_ID2[TAG_ID2["U"] = 117] = "U";
      TAG_ID2[TAG_ID2["UL"] = 118] = "UL";
      TAG_ID2[TAG_ID2["SVG"] = 119] = "SVG";
      TAG_ID2[TAG_ID2["VAR"] = 120] = "VAR";
      TAG_ID2[TAG_ID2["WBR"] = 121] = "WBR";
      TAG_ID2[TAG_ID2["XMP"] = 122] = "XMP";
    })(TAG_ID = exports.TAG_ID || (exports.TAG_ID = {}));
    var TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
      [TAG_NAMES.A, TAG_ID.A],
      [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
      [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
      [TAG_NAMES.APPLET, TAG_ID.APPLET],
      [TAG_NAMES.AREA, TAG_ID.AREA],
      [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
      [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
      [TAG_NAMES.B, TAG_ID.B],
      [TAG_NAMES.BASE, TAG_ID.BASE],
      [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
      [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
      [TAG_NAMES.BIG, TAG_ID.BIG],
      [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
      [TAG_NAMES.BODY, TAG_ID.BODY],
      [TAG_NAMES.BR, TAG_ID.BR],
      [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
      [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
      [TAG_NAMES.CENTER, TAG_ID.CENTER],
      [TAG_NAMES.CODE, TAG_ID.CODE],
      [TAG_NAMES.COL, TAG_ID.COL],
      [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
      [TAG_NAMES.DD, TAG_ID.DD],
      [TAG_NAMES.DESC, TAG_ID.DESC],
      [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
      [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
      [TAG_NAMES.DIR, TAG_ID.DIR],
      [TAG_NAMES.DIV, TAG_ID.DIV],
      [TAG_NAMES.DL, TAG_ID.DL],
      [TAG_NAMES.DT, TAG_ID.DT],
      [TAG_NAMES.EM, TAG_ID.EM],
      [TAG_NAMES.EMBED, TAG_ID.EMBED],
      [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
      [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
      [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
      [TAG_NAMES.FONT, TAG_ID.FONT],
      [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
      [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
      [TAG_NAMES.FORM, TAG_ID.FORM],
      [TAG_NAMES.FRAME, TAG_ID.FRAME],
      [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
      [TAG_NAMES.H1, TAG_ID.H1],
      [TAG_NAMES.H2, TAG_ID.H2],
      [TAG_NAMES.H3, TAG_ID.H3],
      [TAG_NAMES.H4, TAG_ID.H4],
      [TAG_NAMES.H5, TAG_ID.H5],
      [TAG_NAMES.H6, TAG_ID.H6],
      [TAG_NAMES.HEAD, TAG_ID.HEAD],
      [TAG_NAMES.HEADER, TAG_ID.HEADER],
      [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
      [TAG_NAMES.HR, TAG_ID.HR],
      [TAG_NAMES.HTML, TAG_ID.HTML],
      [TAG_NAMES.I, TAG_ID.I],
      [TAG_NAMES.IMG, TAG_ID.IMG],
      [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
      [TAG_NAMES.INPUT, TAG_ID.INPUT],
      [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
      [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
      [TAG_NAMES.LABEL, TAG_ID.LABEL],
      [TAG_NAMES.LI, TAG_ID.LI],
      [TAG_NAMES.LINK, TAG_ID.LINK],
      [TAG_NAMES.LISTING, TAG_ID.LISTING],
      [TAG_NAMES.MAIN, TAG_ID.MAIN],
      [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
      [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
      [TAG_NAMES.MATH, TAG_ID.MATH],
      [TAG_NAMES.MENU, TAG_ID.MENU],
      [TAG_NAMES.META, TAG_ID.META],
      [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
      [TAG_NAMES.MI, TAG_ID.MI],
      [TAG_NAMES.MO, TAG_ID.MO],
      [TAG_NAMES.MN, TAG_ID.MN],
      [TAG_NAMES.MS, TAG_ID.MS],
      [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
      [TAG_NAMES.NAV, TAG_ID.NAV],
      [TAG_NAMES.NOBR, TAG_ID.NOBR],
      [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
      [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
      [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
      [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
      [TAG_NAMES.OL, TAG_ID.OL],
      [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
      [TAG_NAMES.OPTION, TAG_ID.OPTION],
      [TAG_NAMES.P, TAG_ID.P],
      [TAG_NAMES.PARAM, TAG_ID.PARAM],
      [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
      [TAG_NAMES.PRE, TAG_ID.PRE],
      [TAG_NAMES.RB, TAG_ID.RB],
      [TAG_NAMES.RP, TAG_ID.RP],
      [TAG_NAMES.RT, TAG_ID.RT],
      [TAG_NAMES.RTC, TAG_ID.RTC],
      [TAG_NAMES.RUBY, TAG_ID.RUBY],
      [TAG_NAMES.S, TAG_ID.S],
      [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
      [TAG_NAMES.SECTION, TAG_ID.SECTION],
      [TAG_NAMES.SELECT, TAG_ID.SELECT],
      [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
      [TAG_NAMES.SMALL, TAG_ID.SMALL],
      [TAG_NAMES.SPAN, TAG_ID.SPAN],
      [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
      [TAG_NAMES.STRONG, TAG_ID.STRONG],
      [TAG_NAMES.STYLE, TAG_ID.STYLE],
      [TAG_NAMES.SUB, TAG_ID.SUB],
      [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
      [TAG_NAMES.SUP, TAG_ID.SUP],
      [TAG_NAMES.TABLE, TAG_ID.TABLE],
      [TAG_NAMES.TBODY, TAG_ID.TBODY],
      [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
      [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
      [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
      [TAG_NAMES.TD, TAG_ID.TD],
      [TAG_NAMES.TH, TAG_ID.TH],
      [TAG_NAMES.THEAD, TAG_ID.THEAD],
      [TAG_NAMES.TITLE, TAG_ID.TITLE],
      [TAG_NAMES.TR, TAG_ID.TR],
      [TAG_NAMES.TRACK, TAG_ID.TRACK],
      [TAG_NAMES.TT, TAG_ID.TT],
      [TAG_NAMES.U, TAG_ID.U],
      [TAG_NAMES.UL, TAG_ID.UL],
      [TAG_NAMES.SVG, TAG_ID.SVG],
      [TAG_NAMES.VAR, TAG_ID.VAR],
      [TAG_NAMES.WBR, TAG_ID.WBR],
      [TAG_NAMES.XMP, TAG_ID.XMP]
    ]);
    function getTagID(tagName) {
      var _a;
      return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
    }
    exports.getTagID = getTagID;
    var $ = TAG_ID;
    exports.SPECIAL_ELEMENTS = {
      [NS.HTML]: /* @__PURE__ */ new Set([
        $.ADDRESS,
        $.APPLET,
        $.AREA,
        $.ARTICLE,
        $.ASIDE,
        $.BASE,
        $.BASEFONT,
        $.BGSOUND,
        $.BLOCKQUOTE,
        $.BODY,
        $.BR,
        $.BUTTON,
        $.CAPTION,
        $.CENTER,
        $.COL,
        $.COLGROUP,
        $.DD,
        $.DETAILS,
        $.DIR,
        $.DIV,
        $.DL,
        $.DT,
        $.EMBED,
        $.FIELDSET,
        $.FIGCAPTION,
        $.FIGURE,
        $.FOOTER,
        $.FORM,
        $.FRAME,
        $.FRAMESET,
        $.H1,
        $.H2,
        $.H3,
        $.H4,
        $.H5,
        $.H6,
        $.HEAD,
        $.HEADER,
        $.HGROUP,
        $.HR,
        $.HTML,
        $.IFRAME,
        $.IMG,
        $.INPUT,
        $.LI,
        $.LINK,
        $.LISTING,
        $.MAIN,
        $.MARQUEE,
        $.MENU,
        $.META,
        $.NAV,
        $.NOEMBED,
        $.NOFRAMES,
        $.NOSCRIPT,
        $.OBJECT,
        $.OL,
        $.P,
        $.PARAM,
        $.PLAINTEXT,
        $.PRE,
        $.SCRIPT,
        $.SECTION,
        $.SELECT,
        $.SOURCE,
        $.STYLE,
        $.SUMMARY,
        $.TABLE,
        $.TBODY,
        $.TD,
        $.TEMPLATE,
        $.TEXTAREA,
        $.TFOOT,
        $.TH,
        $.THEAD,
        $.TITLE,
        $.TR,
        $.TRACK,
        $.UL,
        $.WBR,
        $.XMP
      ]),
      [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
      [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
      [NS.XLINK]: /* @__PURE__ */ new Set(),
      [NS.XML]: /* @__PURE__ */ new Set(),
      [NS.XMLNS]: /* @__PURE__ */ new Set()
    };
    function isNumberedHeader(tn) {
      return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
    }
    exports.isNumberedHeader = isNumberedHeader;
    var UNESCAPED_TEXT = /* @__PURE__ */ new Set([
      TAG_NAMES.STYLE,
      TAG_NAMES.SCRIPT,
      TAG_NAMES.XMP,
      TAG_NAMES.IFRAME,
      TAG_NAMES.NOEMBED,
      TAG_NAMES.NOFRAMES,
      TAG_NAMES.PLAINTEXT
    ]);
    function hasUnescapedText(tn, scriptingEnabled) {
      return UNESCAPED_TEXT.has(tn) || scriptingEnabled && tn === TAG_NAMES.NOSCRIPT;
    }
    exports.hasUnescapedText = hasUnescapedText;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/tokenizer/index.js
var require_tokenizer = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/tokenizer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokenizer = exports.TokenizerMode = void 0;
    var preprocessor_js_1 = require_preprocessor();
    var unicode_js_1 = require_unicode();
    var token_js_1 = require_token();
    var decode_js_1 = require_decode2();
    var error_codes_js_1 = require_error_codes();
    var html_js_1 = require_html();
    var C1_CONTROLS_REFERENCE_REPLACEMENTS = /* @__PURE__ */ new Map([
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    var State;
    (function(State2) {
      State2[State2["DATA"] = 0] = "DATA";
      State2[State2["RCDATA"] = 1] = "RCDATA";
      State2[State2["RAWTEXT"] = 2] = "RAWTEXT";
      State2[State2["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
      State2[State2["PLAINTEXT"] = 4] = "PLAINTEXT";
      State2[State2["TAG_OPEN"] = 5] = "TAG_OPEN";
      State2[State2["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
      State2[State2["TAG_NAME"] = 7] = "TAG_NAME";
      State2[State2["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
      State2[State2["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
      State2[State2["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
      State2[State2["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
      State2[State2["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
      State2[State2["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
      State2[State2["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
      State2[State2["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
      State2[State2["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
      State2[State2["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
      State2[State2["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
      State2[State2["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
      State2[State2["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
      State2[State2["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
      State2[State2["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
      State2[State2["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
      State2[State2["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
      State2[State2["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
      State2[State2["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
      State2[State2["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
      State2[State2["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
      State2[State2["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
      State2[State2["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
      State2[State2["COMMENT_START"] = 42] = "COMMENT_START";
      State2[State2["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
      State2[State2["COMMENT"] = 44] = "COMMENT";
      State2[State2["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
      State2[State2["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
      State2[State2["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
      State2[State2["COMMENT_END"] = 50] = "COMMENT_END";
      State2[State2["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
      State2[State2["DOCTYPE"] = 52] = "DOCTYPE";
      State2[State2["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
      State2[State2["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
      State2[State2["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
      State2[State2["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
      State2[State2["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
      State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
      State2[State2["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
      State2[State2["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
      State2[State2["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
      State2[State2["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
      State2[State2["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
      State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
      State2[State2["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
      State2[State2["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
      State2[State2["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
      State2[State2["CDATA_SECTION"] = 68] = "CDATA_SECTION";
      State2[State2["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
      State2[State2["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
      State2[State2["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
      State2[State2["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
      State2[State2["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
      State2[State2["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
      State2[State2["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
      State2[State2["DECIMAL_CHARACTER_REFERENCE_START"] = 76] = "DECIMAL_CHARACTER_REFERENCE_START";
      State2[State2["HEXADEMICAL_CHARACTER_REFERENCE"] = 77] = "HEXADEMICAL_CHARACTER_REFERENCE";
      State2[State2["DECIMAL_CHARACTER_REFERENCE"] = 78] = "DECIMAL_CHARACTER_REFERENCE";
      State2[State2["NUMERIC_CHARACTER_REFERENCE_END"] = 79] = "NUMERIC_CHARACTER_REFERENCE_END";
    })(State || (State = {}));
    exports.TokenizerMode = {
      DATA: State.DATA,
      RCDATA: State.RCDATA,
      RAWTEXT: State.RAWTEXT,
      SCRIPT_DATA: State.SCRIPT_DATA,
      PLAINTEXT: State.PLAINTEXT,
      CDATA_SECTION: State.CDATA_SECTION
    };
    function isAsciiDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.DIGIT_0 && cp <= unicode_js_1.CODE_POINTS.DIGIT_9;
    }
    function isAsciiUpper(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_Z;
    }
    function isAsciiLower(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_Z;
    }
    function isAsciiLetter(cp) {
      return isAsciiLower(cp) || isAsciiUpper(cp);
    }
    function isAsciiAlphaNumeric(cp) {
      return isAsciiLetter(cp) || isAsciiDigit(cp);
    }
    function isAsciiUpperHexDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_F;
    }
    function isAsciiLowerHexDigit(cp) {
      return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_F;
    }
    function isAsciiHexDigit(cp) {
      return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
    }
    function toAsciiLower(cp) {
      return cp + 32;
    }
    function isWhitespace2(cp) {
      return cp === unicode_js_1.CODE_POINTS.SPACE || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.TABULATION || cp === unicode_js_1.CODE_POINTS.FORM_FEED;
    }
    function isEntityInAttributeInvalidEnd(nextCp) {
      return nextCp === unicode_js_1.CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
    }
    function isScriptDataDoubleEscapeSequenceEnd(cp) {
      return isWhitespace2(cp) || cp === unicode_js_1.CODE_POINTS.SOLIDUS || cp === unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN;
    }
    var Tokenizer = class {
      constructor(options, handler) {
        this.options = options;
        this.handler = handler;
        this.paused = false;
        this.inLoop = false;
        this.inForeignNode = false;
        this.lastStartTagName = "";
        this.active = false;
        this.state = State.DATA;
        this.returnState = State.DATA;
        this.charRefCode = -1;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = { name: "", value: "" };
        this.preprocessor = new preprocessor_js_1.Preprocessor(handler);
        this.currentLocation = this.getCurrentLocation(-1);
      }
      _err(code) {
        var _a, _b;
        (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code));
      }
      getCurrentLocation(offset) {
        if (!this.options.sourceCodeLocationInfo) {
          return null;
        }
        return {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - offset,
          startOffset: this.preprocessor.offset - offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _runParsingLoop() {
        if (this.inLoop)
          return;
        this.inLoop = true;
        while (this.active && !this.paused) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this._callState(cp);
          }
        }
        this.inLoop = false;
      }
      pause() {
        this.paused = true;
      }
      resume(writeCallback) {
        if (!this.paused) {
          throw new Error("Parser was already resumed");
        }
        this.paused = false;
        if (this.inLoop)
          return;
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      write(chunk, isLastChunk, writeCallback) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
        this._runParsingLoop();
      }
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          this._unconsume(this.consumedAfterSnapshot);
          this.active = false;
          return true;
        }
        return false;
      }
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _unconsume(count) {
        this.consumedAfterSnapshot -= count;
        this.preprocessor.retreat(count);
      }
      _reconsumeInState(state) {
        this.state = state;
        this._unconsume(1);
      }
      _advanceBy(count) {
        this.consumedAfterSnapshot += count;
        for (let i = 0; i < count; i++) {
          this.preprocessor.advance();
        }
      }
      _consumeSequenceIfMatch(pattern, caseSensitive) {
        if (this.preprocessor.startsWith(pattern, caseSensitive)) {
          this._advanceBy(pattern.length - 1);
          return true;
        }
        return false;
      }
      _createStartTagToken() {
        this.currentToken = {
          type: token_js_1.TokenType.START_TAG,
          tagName: "",
          tagID: html_js_1.TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(1)
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: token_js_1.TokenType.END_TAG,
          tagName: "",
          tagID: html_js_1.TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(2)
        };
      }
      _createCommentToken(offset) {
        this.currentToken = {
          type: token_js_1.TokenType.COMMENT,
          data: "",
          location: this.getCurrentLocation(offset)
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: token_js_1.TokenType.DOCTYPE,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null,
          location: this.currentLocation
        };
      }
      _createCharacterToken(type, chars) {
        this.currentCharacterToken = {
          type,
          chars,
          location: this.currentLocation
        };
      }
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ""
        };
        this.currentLocation = this.getCurrentLocation(0);
      }
      _leaveAttrName() {
        var _a;
        var _b;
        const token = this.currentToken;
        if ((0, token_js_1.getTokenAttr)(token, this.currentAttr.name) === null) {
          token.attrs.push(this.currentAttr);
          if (token.location && this.currentLocation) {
            const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = /* @__PURE__ */ Object.create(null);
            attrLocations[this.currentAttr.name] = this.currentLocation;
            this._leaveAttrValue();
          }
        } else {
          this._err(error_codes_js_1.ERR.duplicateAttribute);
        }
      }
      _leaveAttrValue() {
        if (this.currentLocation) {
          this.currentLocation.endLine = this.preprocessor.line;
          this.currentLocation.endCol = this.preprocessor.col;
          this.currentLocation.endOffset = this.preprocessor.offset;
        }
      }
      prepareToken(ct) {
        this._emitCurrentCharacterToken(ct.location);
        this.currentToken = null;
        if (ct.location) {
          ct.location.endLine = this.preprocessor.line;
          ct.location.endCol = this.preprocessor.col + 1;
          ct.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
      }
      emitCurrentTagToken() {
        const ct = this.currentToken;
        this.prepareToken(ct);
        ct.tagID = (0, html_js_1.getTagID)(ct.tagName);
        if (ct.type === token_js_1.TokenType.START_TAG) {
          this.lastStartTagName = ct.tagName;
          this.handler.onStartTag(ct);
        } else {
          if (ct.attrs.length > 0) {
            this._err(error_codes_js_1.ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(error_codes_js_1.ERR.endTagWithTrailingSolidus);
          }
          this.handler.onEndTag(ct);
        }
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentComment(ct) {
        this.prepareToken(ct);
        this.handler.onComment(ct);
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentDoctype(ct) {
        this.prepareToken(ct);
        this.handler.onDoctype(ct);
        this.preprocessor.dropParsedChunk();
      }
      _emitCurrentCharacterToken(nextLocation) {
        if (this.currentCharacterToken) {
          if (nextLocation && this.currentCharacterToken.location) {
            this.currentCharacterToken.location.endLine = nextLocation.startLine;
            this.currentCharacterToken.location.endCol = nextLocation.startCol;
            this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
          }
          switch (this.currentCharacterToken.type) {
            case token_js_1.TokenType.CHARACTER: {
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            }
            case token_js_1.TokenType.NULL_CHARACTER: {
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
              this.handler.onWhitespaceCharacter(this.currentCharacterToken);
              break;
            }
          }
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        const location = this.getCurrentLocation(0);
        if (location) {
          location.endLine = location.startLine;
          location.endCol = location.startCol;
          location.endOffset = location.startOffset;
        }
        this._emitCurrentCharacterToken(location);
        this.handler.onEof({ type: token_js_1.TokenType.EOF, location });
        this.active = false;
      }
      _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken) {
          if (this.currentCharacterToken.type !== type) {
            this.currentLocation = this.getCurrentLocation(0);
            this._emitCurrentCharacterToken(this.currentLocation);
            this.preprocessor.dropParsedChunk();
          } else {
            this.currentCharacterToken.chars += ch;
            return;
          }
        }
        this._createCharacterToken(type, ch);
      }
      _emitCodePoint(cp) {
        let type = token_js_1.TokenType.CHARACTER;
        if (isWhitespace2(cp)) {
          type = token_js_1.TokenType.WHITESPACE_CHARACTER;
        } else if (cp === unicode_js_1.CODE_POINTS.NULL) {
          type = token_js_1.TokenType.NULL_CHARACTER;
        }
        this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
      }
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(token_js_1.TokenType.CHARACTER, ch);
      }
      _matchNamedCharacterReference(cp) {
        let result = null;
        let excess = 0;
        let withoutSemicolon = false;
        for (let i = 0, current = decode_js_1.htmlDecodeTree[0]; i >= 0; cp = this._consume()) {
          i = (0, decode_js_1.determineBranch)(decode_js_1.htmlDecodeTree, current, i + 1, cp);
          if (i < 0)
            break;
          excess += 1;
          current = decode_js_1.htmlDecodeTree[i];
          const masked = current & decode_js_1.BinTrieFlags.VALUE_LENGTH;
          if (masked) {
            const valueLength = (masked >> 14) - 1;
            if (cp !== unicode_js_1.CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
              result = [unicode_js_1.CODE_POINTS.AMPERSAND];
              i += valueLength;
            } else {
              result = valueLength === 0 ? [decode_js_1.htmlDecodeTree[i] & ~decode_js_1.BinTrieFlags.VALUE_LENGTH] : valueLength === 1 ? [decode_js_1.htmlDecodeTree[++i]] : [decode_js_1.htmlDecodeTree[++i], decode_js_1.htmlDecodeTree[++i]];
              excess = 0;
              withoutSemicolon = cp !== unicode_js_1.CODE_POINTS.SEMICOLON;
            }
            if (valueLength === 0) {
              this._consume();
              break;
            }
          }
        }
        this._unconsume(excess);
        if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
          this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
        }
        this._unconsume(1);
        return result;
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
      }
      _flushCodePointConsumedAsCharacterReference(cp) {
        if (this._isCharacterReferenceInAttribute()) {
          this.currentAttr.value += String.fromCodePoint(cp);
        } else {
          this._emitCodePoint(cp);
        }
      }
      _callState(cp) {
        switch (this.state) {
          case State.DATA: {
            this._stateData(cp);
            break;
          }
          case State.RCDATA: {
            this._stateRcdata(cp);
            break;
          }
          case State.RAWTEXT: {
            this._stateRawtext(cp);
            break;
          }
          case State.SCRIPT_DATA: {
            this._stateScriptData(cp);
            break;
          }
          case State.PLAINTEXT: {
            this._statePlaintext(cp);
            break;
          }
          case State.TAG_OPEN: {
            this._stateTagOpen(cp);
            break;
          }
          case State.END_TAG_OPEN: {
            this._stateEndTagOpen(cp);
            break;
          }
          case State.TAG_NAME: {
            this._stateTagName(cp);
            break;
          }
          case State.RCDATA_LESS_THAN_SIGN: {
            this._stateRcdataLessThanSign(cp);
            break;
          }
          case State.RCDATA_END_TAG_OPEN: {
            this._stateRcdataEndTagOpen(cp);
            break;
          }
          case State.RCDATA_END_TAG_NAME: {
            this._stateRcdataEndTagName(cp);
            break;
          }
          case State.RAWTEXT_LESS_THAN_SIGN: {
            this._stateRawtextLessThanSign(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_OPEN: {
            this._stateRawtextEndTagOpen(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_NAME: {
            this._stateRawtextEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_LESS_THAN_SIGN: {
            this._stateScriptDataLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_OPEN: {
            this._stateScriptDataEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_NAME: {
            this._stateScriptDataEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START: {
            this._stateScriptDataEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START_DASH: {
            this._stateScriptDataEscapeStartDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED: {
            this._stateScriptDataEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH: {
            this._stateScriptDataEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
            this._stateScriptDataEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
            this._stateScriptDataEscapedEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
            this._stateScriptDataEscapedEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
            this._stateScriptDataDoubleEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
            this._stateScriptDataDoubleEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
            this._stateScriptDataDoubleEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
            this._stateScriptDataDoubleEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataDoubleEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
            this._stateScriptDataDoubleEscapeEnd(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_NAME: {
            this._stateBeforeAttributeName(cp);
            break;
          }
          case State.ATTRIBUTE_NAME: {
            this._stateAttributeName(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_NAME: {
            this._stateAfterAttributeName(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_VALUE: {
            this._stateBeforeAttributeValue(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
            this._stateAttributeValueDoubleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
            this._stateAttributeValueSingleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_UNQUOTED: {
            this._stateAttributeValueUnquoted(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
            this._stateAfterAttributeValueQuoted(cp);
            break;
          }
          case State.SELF_CLOSING_START_TAG: {
            this._stateSelfClosingStartTag(cp);
            break;
          }
          case State.BOGUS_COMMENT: {
            this._stateBogusComment(cp);
            break;
          }
          case State.MARKUP_DECLARATION_OPEN: {
            this._stateMarkupDeclarationOpen(cp);
            break;
          }
          case State.COMMENT_START: {
            this._stateCommentStart(cp);
            break;
          }
          case State.COMMENT_START_DASH: {
            this._stateCommentStartDash(cp);
            break;
          }
          case State.COMMENT: {
            this._stateComment(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN: {
            this._stateCommentLessThanSign(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG: {
            this._stateCommentLessThanSignBang(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
            this._stateCommentLessThanSignBangDash(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
            this._stateCommentLessThanSignBangDashDash(cp);
            break;
          }
          case State.COMMENT_END_DASH: {
            this._stateCommentEndDash(cp);
            break;
          }
          case State.COMMENT_END: {
            this._stateCommentEnd(cp);
            break;
          }
          case State.COMMENT_END_BANG: {
            this._stateCommentEndBang(cp);
            break;
          }
          case State.DOCTYPE: {
            this._stateDoctype(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_NAME: {
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case State.DOCTYPE_NAME: {
            this._stateDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_NAME: {
            this._stateAfterDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
            this._stateAfterDoctypePublicKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateBeforeDoctypePublicIdentifier(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypePublicIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypePublicIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateAfterDoctypePublicIdentifier(cp);
            break;
          }
          case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
            this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
            this._stateAfterDoctypeSystemKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateBeforeDoctypeSystemIdentifier(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypeSystemIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateAfterDoctypeSystemIdentifier(cp);
            break;
          }
          case State.BOGUS_DOCTYPE: {
            this._stateBogusDoctype(cp);
            break;
          }
          case State.CDATA_SECTION: {
            this._stateCdataSection(cp);
            break;
          }
          case State.CDATA_SECTION_BRACKET: {
            this._stateCdataSectionBracket(cp);
            break;
          }
          case State.CDATA_SECTION_END: {
            this._stateCdataSectionEnd(cp);
            break;
          }
          case State.CHARACTER_REFERENCE: {
            this._stateCharacterReference(cp);
            break;
          }
          case State.NAMED_CHARACTER_REFERENCE: {
            this._stateNamedCharacterReference(cp);
            break;
          }
          case State.AMBIGUOUS_AMPERSAND: {
            this._stateAmbiguousAmpersand(cp);
            break;
          }
          case State.NUMERIC_CHARACTER_REFERENCE: {
            this._stateNumericCharacterReference(cp);
            break;
          }
          case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
            this._stateHexademicalCharacterReferenceStart(cp);
            break;
          }
          case State.DECIMAL_CHARACTER_REFERENCE_START: {
            this._stateDecimalCharacterReferenceStart(cp);
            break;
          }
          case State.HEXADEMICAL_CHARACTER_REFERENCE: {
            this._stateHexademicalCharacterReference(cp);
            break;
          }
          case State.DECIMAL_CHARACTER_REFERENCE: {
            this._stateDecimalCharacterReference(cp);
            break;
          }
          case State.NUMERIC_CHARACTER_REFERENCE_END: {
            this._stateNumericCharacterReferenceEnd();
            break;
          }
          default: {
            throw new Error("Unknown state");
          }
        }
      }
      _stateData(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.TAG_OPEN;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.DATA;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateRcdata(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.RCDATA;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RCDATA_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateRawtext(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RAWTEXT_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptData(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _statePlaintext(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
              this.state = State.MARKUP_DECLARATION_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
              this.state = State.END_TAG_OPEN;
              break;
            }
            case unicode_js_1.CODE_POINTS.QUESTION_MARK: {
              this._err(error_codes_js_1.ERR.unexpectedQuestionMarkInsteadOfTagName);
              this._createCommentToken(1);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofBeforeTagName);
              this._emitChars("<");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
              this._emitChars("<");
              this.state = State.DATA;
              this._stateData(cp);
            }
          }
      }
      _stateEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingEndTagName);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofBeforeTagName);
              this._emitChars("</");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(error_codes_js_1.ERR.invalidFirstCharacterOfTagName);
              this._createCommentToken(2);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
            }
          }
      }
      _stateTagName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.tagName += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      _stateRcdataLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.RCDATA_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      _stateRcdataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RCDATA_END_TAG_NAME;
          this._stateRcdataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      handleSpecialEndTag(_cp) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
          return !this._ensureHibernation();
        }
        this._createEndTagToken();
        const token = this.currentToken;
        token.tagName = this.lastStartTagName;
        const cp = this.preprocessor.peek(this.lastStartTagName.length);
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            return false;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.SELF_CLOSING_START_TAG;
            return false;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._advanceBy(this.lastStartTagName.length);
            this.emitCurrentTagToken();
            this.state = State.DATA;
            return false;
          }
          default: {
            return !this._ensureHibernation();
          }
        }
      }
      _stateRcdataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      _stateRawtextLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.RAWTEXT_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      _stateRawtextEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RAWTEXT_END_TAG_NAME;
          this._stateRawtextEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      _stateRawtextEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      _stateScriptDataLessThanSign(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SCRIPT_DATA_END_TAG_OPEN;
            break;
          }
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.SCRIPT_DATA_ESCAPE_START;
            this._emitChars("<!");
            break;
          }
          default: {
            this._emitChars("<");
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
      }
      _stateScriptDataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_END_TAG_NAME;
          this._stateScriptDataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEscapeStart(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEscapeStartDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      _stateScriptDataEscaped(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataEscapedDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataEscapedDashDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        } else if (isAsciiLetter(cp)) {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
          this._stateScriptDataDoubleEscapeStart(cp);
        } else {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataEscapedEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
          this._stateScriptDataEscapedEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataEscapedEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataDoubleEscapeStart(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      _stateScriptDataDoubleEscaped(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataDoubleEscapedDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataDoubleEscapedDashDash(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      _stateScriptDataDoubleEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
          this._emitChars("/");
        } else {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      _stateScriptDataDoubleEscapeEnd(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      _stateBeforeAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS:
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EOF: {
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this._err(error_codes_js_1.ERR.unexpectedEqualsSignBeforeAttributeName);
            this._createAttr("=");
            this.state = State.ATTRIBUTE_NAME;
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      _stateAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED:
          case unicode_js_1.CODE_POINTS.SOLIDUS:
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EOF: {
            this._leaveAttrName();
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this._leaveAttrName();
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
          case unicode_js_1.CODE_POINTS.APOSTROPHE:
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterInAttributeName);
            this.currentAttr.name += String.fromCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.name += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      _stateAfterAttributeName(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      _stateBeforeAttributeValue(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingAttributeValue);
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          default: {
            this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
            this._stateAttributeValueUnquoted(cp);
          }
        }
      }
      _stateAttributeValueDoubleQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      _stateAttributeValueSingleQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      _stateAttributeValueUnquoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.AMPERSAND: {
            this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
            this.state = State.CHARACTER_REFERENCE;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
          case unicode_js_1.CODE_POINTS.APOSTROPHE:
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN:
          case unicode_js_1.CODE_POINTS.EQUALS_SIGN:
          case unicode_js_1.CODE_POINTS.GRAVE_ACCENT: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterInUnquotedAttributeValue);
            this.currentAttr.value += String.fromCodePoint(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      _stateAfterAttributeValueQuoted(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.SOLIDUS: {
            this._leaveAttrValue();
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenAttributes);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      _stateSelfClosingStartTag(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            const token = this.currentToken;
            token.selfClosing = true;
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.unexpectedSolidusInTag);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      _stateBogusComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.data += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      _stateMarkupDeclarationOpen(cp) {
        if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DASH_DASH, true)) {
          this._createCommentToken(unicode_js_1.SEQUENCES.DASH_DASH.length + 1);
          this.state = State.COMMENT_START;
        } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DOCTYPE, false)) {
          this.currentLocation = this.getCurrentLocation(unicode_js_1.SEQUENCES.DOCTYPE.length + 1);
          this.state = State.DOCTYPE;
        } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.CDATA_START, true)) {
          if (this.inForeignNode) {
            this.state = State.CDATA_SECTION;
          } else {
            this._err(error_codes_js_1.ERR.cdataInHtmlContent);
            this._createCommentToken(unicode_js_1.SEQUENCES.CDATA_START.length + 1);
            this.currentToken.data = "[CDATA[";
            this.state = State.BOGUS_COMMENT;
          }
        } else if (!this._ensureHibernation()) {
          this._err(error_codes_js_1.ERR.incorrectlyOpenedComment);
          this._createCommentToken(2);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
        }
      }
      _stateCommentStart(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_START_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            const token = this.currentToken;
            this.emitCurrentComment(token);
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentStartDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            this.state = State.COMMENT_LESS_THAN_SIGN;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.data += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      _stateCommentLessThanSign(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            token.data += "!";
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
            break;
          }
          case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentLessThanSignBang(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        } else {
          this.state = State.COMMENT;
          this._stateComment(cp);
        }
      }
      _stateCommentLessThanSignBangDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        } else {
          this.state = State.COMMENT_END_DASH;
          this._stateCommentEndDash(cp);
        }
      }
      _stateCommentLessThanSignBangDashDash(cp) {
        if (cp !== unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN && cp !== unicode_js_1.CODE_POINTS.EOF) {
          this._err(error_codes_js_1.ERR.nestedComment);
        }
        this.state = State.COMMENT_END;
        this._stateCommentEnd(cp);
      }
      _stateCommentEndDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentEnd(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.COMMENT_END_BANG;
            break;
          }
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            token.data += "-";
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateCommentEndBang(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
            token.data += "--!";
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.incorrectlyClosedComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--!";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      _stateDoctype(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            this._createDoctypeToken(null);
            const token = this.currentToken;
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBeforeDoctypeName);
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
          }
        }
      }
      _stateBeforeDoctypeName(cp) {
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
          this.state = State.DOCTYPE_NAME;
        } else
          switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
              break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
              this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
              this._createDoctypeToken(unicode_js_1.REPLACEMENT_CHARACTER);
              this.state = State.DOCTYPE_NAME;
              break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(error_codes_js_1.ERR.missingDoctypeName);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
              this._err(error_codes_js_1.ERR.eofInDoctype);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._createDoctypeToken(String.fromCodePoint(cp));
              this.state = State.DOCTYPE_NAME;
            }
          }
      }
      _stateDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.AFTER_DOCTYPE_NAME;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.name += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      _stateAfterDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default:
            if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.PUBLIC, false)) {
              this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
            } else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.SYSTEM, false)) {
              this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
            } else if (!this._ensureHibernation()) {
              this._err(error_codes_js_1.ERR.invalidCharacterSequenceAfterDoctypeName);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
        }
      }
      _stateAfterDoctypePublicKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBeforeDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateDoctypePublicIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      _stateDoctypePublicIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      _stateAfterDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateAfterDoctypeSystemKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this._err(error_codes_js_1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBeforeDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      _stateDoctypeSystemIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(error_codes_js_1.ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      _stateAfterDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.SPACE:
          case unicode_js_1.CODE_POINTS.LINE_FEED:
          case unicode_js_1.CODE_POINTS.TABULATION:
          case unicode_js_1.CODE_POINTS.FORM_FEED: {
            break;
          }
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(error_codes_js_1.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      _stateBogusDoctype(cp) {
        const token = this.currentToken;
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.NULL: {
            this._err(error_codes_js_1.ERR.unexpectedNullCharacter);
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default:
        }
      }
      _stateCdataSection(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this.state = State.CDATA_SECTION_BRACKET;
            break;
          }
          case unicode_js_1.CODE_POINTS.EOF: {
            this._err(error_codes_js_1.ERR.eofInCdata);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      _stateCdataSectionBracket(cp) {
        if (cp === unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET) {
          this.state = State.CDATA_SECTION_END;
        } else {
          this._emitChars("]");
          this.state = State.CDATA_SECTION;
          this._stateCdataSection(cp);
        }
      }
      _stateCdataSectionEnd(cp) {
        switch (cp) {
          case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            break;
          }
          case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this._emitChars("]");
            break;
          }
          default: {
            this._emitChars("]]");
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
          }
        }
      }
      _stateCharacterReference(cp) {
        if (cp === unicode_js_1.CODE_POINTS.NUMBER_SIGN) {
          this.state = State.NUMERIC_CHARACTER_REFERENCE;
        } else if (isAsciiAlphaNumeric(cp)) {
          this.state = State.NAMED_CHARACTER_REFERENCE;
          this._stateNamedCharacterReference(cp);
        } else {
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this._reconsumeInState(this.returnState);
        }
      }
      _stateNamedCharacterReference(cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        if (this._ensureHibernation()) {
        } else if (matchResult) {
          for (let i = 0; i < matchResult.length; i++) {
            this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
          }
          this.state = this.returnState;
        } else {
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this.state = State.AMBIGUOUS_AMPERSAND;
        }
      }
      _stateAmbiguousAmpersand(cp) {
        if (isAsciiAlphaNumeric(cp)) {
          this._flushCodePointConsumedAsCharacterReference(cp);
        } else {
          if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this._err(error_codes_js_1.ERR.unknownNamedCharacterReference);
          }
          this._reconsumeInState(this.returnState);
        }
      }
      _stateNumericCharacterReference(cp) {
        this.charRefCode = 0;
        if (cp === unicode_js_1.CODE_POINTS.LATIN_SMALL_X || cp === unicode_js_1.CODE_POINTS.LATIN_CAPITAL_X) {
          this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
        } else {
          this.state = State.DECIMAL_CHARACTER_REFERENCE_START;
          this._stateDecimalCharacterReferenceStart(cp);
        }
      }
      _stateHexademicalCharacterReferenceStart(cp) {
        if (isAsciiHexDigit(cp)) {
          this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
          this._stateHexademicalCharacterReference(cp);
        } else {
          this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
          this._unconsume(2);
          this.state = this.returnState;
        }
      }
      _stateDecimalCharacterReferenceStart(cp) {
        if (isAsciiDigit(cp)) {
          this.state = State.DECIMAL_CHARACTER_REFERENCE;
          this._stateDecimalCharacterReference(cp);
        } else {
          this._err(error_codes_js_1.ERR.absenceOfDigitsInNumericCharacterReference);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
          this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
          this._reconsumeInState(this.returnState);
        }
      }
      _stateHexademicalCharacterReference(cp) {
        if (isAsciiUpperHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 55;
        } else if (isAsciiLowerHexDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 87;
        } else if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 16 + cp - 48;
        } else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        } else {
          this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
          this._stateNumericCharacterReferenceEnd();
        }
      }
      _stateDecimalCharacterReference(cp) {
        if (isAsciiDigit(cp)) {
          this.charRefCode = this.charRefCode * 10 + cp - 48;
        } else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        } else {
          this._err(error_codes_js_1.ERR.missingSemicolonAfterCharacterReference);
          this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
          this._stateNumericCharacterReferenceEnd();
        }
      }
      _stateNumericCharacterReferenceEnd() {
        if (this.charRefCode === unicode_js_1.CODE_POINTS.NULL) {
          this._err(error_codes_js_1.ERR.nullCharacterReference);
          this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        } else if (this.charRefCode > 1114111) {
          this._err(error_codes_js_1.ERR.characterReferenceOutsideUnicodeRange);
          this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        } else if ((0, unicode_js_1.isSurrogate)(this.charRefCode)) {
          this._err(error_codes_js_1.ERR.surrogateCharacterReference);
          this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        } else if ((0, unicode_js_1.isUndefinedCodePoint)(this.charRefCode)) {
          this._err(error_codes_js_1.ERR.noncharacterCharacterReference);
        } else if ((0, unicode_js_1.isControlCodePoint)(this.charRefCode) || this.charRefCode === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
          this._err(error_codes_js_1.ERR.controlCharacterReference);
          const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
          if (replacement !== void 0) {
            this.charRefCode = replacement;
          }
        }
        this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
        this._reconsumeInState(this.returnState);
      }
    };
    exports.Tokenizer = Tokenizer;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/parser/open-element-stack.js
var require_open_element_stack = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/parser/open-element-stack.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OpenElementStack = void 0;
    var html_js_1 = require_html();
    var IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([html_js_1.TAG_ID.DD, html_js_1.TAG_ID.DT, html_js_1.TAG_ID.LI, html_js_1.TAG_ID.OPTGROUP, html_js_1.TAG_ID.OPTION, html_js_1.TAG_ID.P, html_js_1.TAG_ID.RB, html_js_1.TAG_ID.RP, html_js_1.TAG_ID.RT, html_js_1.TAG_ID.RTC]);
    var IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
      ...IMPLICIT_END_TAG_REQUIRED,
      html_js_1.TAG_ID.CAPTION,
      html_js_1.TAG_ID.COLGROUP,
      html_js_1.TAG_ID.TBODY,
      html_js_1.TAG_ID.TD,
      html_js_1.TAG_ID.TFOOT,
      html_js_1.TAG_ID.TH,
      html_js_1.TAG_ID.THEAD,
      html_js_1.TAG_ID.TR
    ]);
    var SCOPING_ELEMENT_NS = /* @__PURE__ */ new Map([
      [html_js_1.TAG_ID.APPLET, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.CAPTION, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.HTML, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.MARQUEE, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.OBJECT, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TABLE, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TD, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TEMPLATE, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.TH, html_js_1.NS.HTML],
      [html_js_1.TAG_ID.ANNOTATION_XML, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MI, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MN, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MO, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MS, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.MTEXT, html_js_1.NS.MATHML],
      [html_js_1.TAG_ID.DESC, html_js_1.NS.SVG],
      [html_js_1.TAG_ID.FOREIGN_OBJECT, html_js_1.NS.SVG],
      [html_js_1.TAG_ID.TITLE, html_js_1.NS.SVG]
    ]);
    var NAMED_HEADERS = [html_js_1.TAG_ID.H1, html_js_1.TAG_ID.H2, html_js_1.TAG_ID.H3, html_js_1.TAG_ID.H4, html_js_1.TAG_ID.H5, html_js_1.TAG_ID.H6];
    var TABLE_ROW_CONTEXT = [html_js_1.TAG_ID.TR, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
    var TABLE_BODY_CONTEXT = [html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
    var TABLE_CONTEXT = [html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TEMPLATE, html_js_1.TAG_ID.HTML];
    var TABLE_CELLS = [html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TH];
    var OpenElementStack = class {
      constructor(document, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = html_js_1.TAG_ID.UNKNOWN;
        this.current = document;
      }
      get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
      }
      _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
      }
      _isInTemplate() {
        return this.currentTagId === html_js_1.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1.NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
      }
      push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
      }
      pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this.current = newElement;
        }
      }
      insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
          this._updateCurrentElement();
        }
        this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
      }
      popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
          targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1.NS.HTML);
        this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
      }
      shortenToLength(idx) {
        while (this.stackTop >= idx) {
          const popped = this.current;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount -= 1;
          }
          this.stackTop--;
          this._updateCurrentElement();
          this.handler.onItemPop(popped, this.stackTop < idx);
        }
      }
      popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(idx < 0 ? 0 : idx);
      }
      popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx < 0 ? 0 : idx);
      }
      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(NAMED_HEADERS, html_js_1.NS.HTML);
      }
      popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, html_js_1.NS.HTML);
      }
      popAllUpToHtmlElement() {
        this.tmplCount = 0;
        this.shortenToLength(1);
      }
      _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
            return i;
          }
        }
        return -1;
      }
      clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
      }
      clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, html_js_1.NS.HTML);
      }
      clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1.NS.HTML);
      }
      clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1.NS.HTML);
      }
      remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
          if (idx === this.stackTop) {
            this.pop();
          } else {
            this.items.splice(idx, 1);
            this.tagIDs.splice(idx, 1);
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(element, false);
          }
        }
      }
      tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === html_js_1.TAG_ID.BODY ? this.items[1] : null;
      }
      contains(element) {
        return this._indexOf(element) > -1;
      }
      getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === html_js_1.TAG_ID.HTML;
      }
      hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === html_js_1.NS.HTML) {
            return true;
          }
          if (SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if ((0, html_js_1.isNumberedHeader)(tn) && ns === html_js_1.NS.HTML) {
            return true;
          }
          if (SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === html_js_1.NS.HTML) {
            return true;
          }
          if ((tn === html_js_1.TAG_ID.UL || tn === html_js_1.TAG_ID.OL) && ns === html_js_1.NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (tn === tagName && ns === html_js_1.NS.HTML) {
            return true;
          }
          if (tn === html_js_1.TAG_ID.BUTTON && ns === html_js_1.NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) {
            return false;
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== html_js_1.NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TEMPLATE || tn === html_js_1.TAG_ID.HTML) {
            return false;
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== html_js_1.NS.HTML) {
            continue;
          }
          if (tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TFOOT) {
            return true;
          }
          if (tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.HTML) {
            return false;
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
          if (ns !== html_js_1.NS.HTML) {
            continue;
          }
          if (tn === tagName) {
            return true;
          }
          if (tn !== html_js_1.TAG_ID.OPTION && tn !== html_js_1.TAG_ID.OPTGROUP) {
            return false;
          }
        }
        return true;
      }
      generateImpliedEndTags() {
        while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
    };
    exports.OpenElementStack = OpenElementStack;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/parser/formatting-element-list.js
var require_formatting_element_list = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/parser/formatting-element-list.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormattingElementList = exports.EntryType = void 0;
    var NOAH_ARK_CAPACITY = 3;
    var EntryType;
    (function(EntryType2) {
      EntryType2[EntryType2["Marker"] = 0] = "Marker";
      EntryType2[EntryType2["Element"] = 1] = "Element";
    })(EntryType = exports.EntryType || (exports.EntryType = {}));
    var MARKER = { type: EntryType.Marker };
    var FormattingElementList = class {
      constructor(treeAdapter) {
        this.treeAdapter = treeAdapter;
        this.entries = [];
        this.bookmark = null;
      }
      _getNoahArkConditionCandidates(newElement, neAttrs) {
        const candidates = [];
        const neAttrsLength = neAttrs.length;
        const neTagName = this.treeAdapter.getTagName(newElement);
        const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
        for (let i = 0; i < this.entries.length; i++) {
          const entry = this.entries[i];
          if (entry.type === EntryType.Marker) {
            break;
          }
          const { element } = entry;
          if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
            const elementAttrs = this.treeAdapter.getAttrList(element);
            if (elementAttrs.length === neAttrsLength) {
              candidates.push({ idx: i, attrs: elementAttrs });
            }
          }
        }
        return candidates;
      }
      _ensureNoahArkCondition(newElement) {
        if (this.entries.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrs = this.treeAdapter.getAttrList(newElement);
        const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
        if (candidates.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
        let validCandidates = 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
            validCandidates += 1;
            if (validCandidates >= NOAH_ARK_CAPACITY) {
              this.entries.splice(candidate.idx, 1);
            }
          }
        }
      }
      insertMarker() {
        this.entries.unshift(MARKER);
      }
      pushElement(element, token) {
        this._ensureNoahArkCondition(element);
        this.entries.unshift({
          type: EntryType.Element,
          element,
          token
        });
      }
      insertElementAfterBookmark(element, token) {
        const bookmarkIdx = this.entries.indexOf(this.bookmark);
        this.entries.splice(bookmarkIdx, 0, {
          type: EntryType.Element,
          element,
          token
        });
      }
      removeEntry(entry) {
        const entryIndex = this.entries.indexOf(entry);
        if (entryIndex >= 0) {
          this.entries.splice(entryIndex, 1);
        }
      }
      clearToLastMarker() {
        const markerIdx = this.entries.indexOf(MARKER);
        if (markerIdx >= 0) {
          this.entries.splice(0, markerIdx + 1);
        } else {
          this.entries.length = 0;
        }
      }
      getElementEntryInScopeWithTagName(tagName) {
        const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
        return entry && entry.type === EntryType.Element ? entry : null;
      }
      getElementEntry(element) {
        return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
      }
    };
    exports.FormattingElementList = FormattingElementList;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/tree-adapters/default.js
var require_default = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/tree-adapters/default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultTreeAdapter = exports.NodeType = void 0;
    var html_js_1 = require_html();
    var NodeType;
    (function(NodeType2) {
      NodeType2["Document"] = "#document";
      NodeType2["DocumentFragment"] = "#document-fragment";
      NodeType2["Comment"] = "#comment";
      NodeType2["Text"] = "#text";
      NodeType2["DocumentType"] = "#documentType";
    })(NodeType = exports.NodeType || (exports.NodeType = {}));
    function createTextNode(value) {
      return {
        nodeName: NodeType.Text,
        value,
        parentNode: null
      };
    }
    exports.defaultTreeAdapter = {
      createDocument() {
        return {
          nodeName: NodeType.Document,
          mode: html_js_1.DOCUMENT_MODE.NO_QUIRKS,
          childNodes: []
        };
      },
      createDocumentFragment() {
        return {
          nodeName: NodeType.DocumentFragment,
          childNodes: []
        };
      },
      createElement(tagName, namespaceURI, attrs) {
        return {
          nodeName: tagName,
          tagName,
          attrs,
          namespaceURI,
          childNodes: [],
          parentNode: null
        };
      },
      createCommentNode(data) {
        return {
          nodeName: NodeType.Comment,
          data,
          parentNode: null
        };
      },
      appendChild(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
      },
      insertBefore(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
      },
      setTemplateContent(templateElement, contentElement) {
        templateElement.content = contentElement;
      },
      getTemplateContent(templateElement) {
        return templateElement.content;
      },
      setDocumentType(document, name, publicId, systemId) {
        const doctypeNode = document.childNodes.find((node) => node.nodeName === NodeType.DocumentType);
        if (doctypeNode) {
          doctypeNode.name = name;
          doctypeNode.publicId = publicId;
          doctypeNode.systemId = systemId;
        } else {
          const node = {
            nodeName: NodeType.DocumentType,
            name,
            publicId,
            systemId,
            parentNode: null
          };
          exports.defaultTreeAdapter.appendChild(document, node);
        }
      },
      setDocumentMode(document, mode) {
        document.mode = mode;
      },
      getDocumentMode(document) {
        return document.mode;
      },
      detachNode(node) {
        if (node.parentNode) {
          const idx = node.parentNode.childNodes.indexOf(node);
          node.parentNode.childNodes.splice(idx, 1);
          node.parentNode = null;
        }
      },
      insertText(parentNode, text) {
        if (parentNode.childNodes.length > 0) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
          if (exports.defaultTreeAdapter.isTextNode(prevNode)) {
            prevNode.value += text;
            return;
          }
        }
        exports.defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
      },
      insertTextBefore(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && exports.defaultTreeAdapter.isTextNode(prevNode)) {
          prevNode.value += text;
        } else {
          exports.defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
        }
      },
      adoptAttributes(recipient, attrs) {
        const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
        for (let j = 0; j < attrs.length; j++) {
          if (!recipientAttrsMap.has(attrs[j].name)) {
            recipient.attrs.push(attrs[j]);
          }
        }
      },
      getFirstChild(node) {
        return node.childNodes[0];
      },
      getChildNodes(node) {
        return node.childNodes;
      },
      getParentNode(node) {
        return node.parentNode;
      },
      getAttrList(element) {
        return element.attrs;
      },
      getTagName(element) {
        return element.tagName;
      },
      getNamespaceURI(element) {
        return element.namespaceURI;
      },
      getTextNodeContent(textNode) {
        return textNode.value;
      },
      getCommentNodeContent(commentNode) {
        return commentNode.data;
      },
      getDocumentTypeNodeName(doctypeNode) {
        return doctypeNode.name;
      },
      getDocumentTypeNodePublicId(doctypeNode) {
        return doctypeNode.publicId;
      },
      getDocumentTypeNodeSystemId(doctypeNode) {
        return doctypeNode.systemId;
      },
      isTextNode(node) {
        return node.nodeName === "#text";
      },
      isCommentNode(node) {
        return node.nodeName === "#comment";
      },
      isDocumentTypeNode(node) {
        return node.nodeName === NodeType.DocumentType;
      },
      isElementNode(node) {
        return Object.prototype.hasOwnProperty.call(node, "tagName");
      },
      setNodeSourceCodeLocation(node, location) {
        node.sourceCodeLocation = location;
      },
      getNodeSourceCodeLocation(node) {
        return node.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(node, endLocation) {
        node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
      }
    };
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/doctype.js
var require_doctype = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/doctype.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDocumentMode = exports.isConforming = void 0;
    var html_js_1 = require_html();
    var VALID_DOCTYPE_NAME = "html";
    var VALID_SYSTEM_ID = "about:legacy-compat";
    var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//"
    ];
    var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    var QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
      "-//w3o//dtd w3 html strict 3.0//en//",
      "-/w3c/dtd html 4.0 transitional/en",
      "html"
    ]);
    var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
    var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    function hasPrefix(publicId, prefixes) {
      return prefixes.some((prefix) => publicId.startsWith(prefix));
    }
    function isConforming(token) {
      return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
    }
    exports.isConforming = isConforming;
    function getDocumentMode(token) {
      if (token.name !== VALID_DOCTYPE_NAME) {
        return html_js_1.DOCUMENT_MODE.QUIRKS;
      }
      const { systemId } = token;
      if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return html_js_1.DOCUMENT_MODE.QUIRKS;
      }
      let { publicId } = token;
      if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return html_js_1.DOCUMENT_MODE.QUIRKS;
        }
        prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
          return html_js_1.DOCUMENT_MODE.LIMITED_QUIRKS;
        }
      }
      return html_js_1.DOCUMENT_MODE.NO_QUIRKS;
    }
    exports.getDocumentMode = getDocumentMode;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/foreign-content.js
var require_foreign_content = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/common/foreign-content.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIntegrationPoint = exports.adjustTokenSVGTagName = exports.adjustTokenXMLAttrs = exports.adjustTokenSVGAttrs = exports.adjustTokenMathMLAttrs = exports.causesExit = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
    var html_js_1 = require_html();
    var MIME_TYPES = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    };
    var DEFINITION_URL_ATTR = "definitionurl";
    var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
    var SVG_ATTRS_ADJUSTMENT_MAP = new Map([
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map((attr) => [attr.toLowerCase(), attr]));
    var XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
      ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: html_js_1.NS.XLINK }],
      ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: html_js_1.NS.XLINK }],
      ["xlink:href", { prefix: "xlink", name: "href", namespace: html_js_1.NS.XLINK }],
      ["xlink:role", { prefix: "xlink", name: "role", namespace: html_js_1.NS.XLINK }],
      ["xlink:show", { prefix: "xlink", name: "show", namespace: html_js_1.NS.XLINK }],
      ["xlink:title", { prefix: "xlink", name: "title", namespace: html_js_1.NS.XLINK }],
      ["xlink:type", { prefix: "xlink", name: "type", namespace: html_js_1.NS.XLINK }],
      ["xml:base", { prefix: "xml", name: "base", namespace: html_js_1.NS.XML }],
      ["xml:lang", { prefix: "xml", name: "lang", namespace: html_js_1.NS.XML }],
      ["xml:space", { prefix: "xml", name: "space", namespace: html_js_1.NS.XML }],
      ["xmlns", { prefix: "", name: "xmlns", namespace: html_js_1.NS.XMLNS }],
      ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: html_js_1.NS.XMLNS }]
    ]);
    exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map((tn) => [tn.toLowerCase(), tn]));
    var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
      html_js_1.TAG_ID.B,
      html_js_1.TAG_ID.BIG,
      html_js_1.TAG_ID.BLOCKQUOTE,
      html_js_1.TAG_ID.BODY,
      html_js_1.TAG_ID.BR,
      html_js_1.TAG_ID.CENTER,
      html_js_1.TAG_ID.CODE,
      html_js_1.TAG_ID.DD,
      html_js_1.TAG_ID.DIV,
      html_js_1.TAG_ID.DL,
      html_js_1.TAG_ID.DT,
      html_js_1.TAG_ID.EM,
      html_js_1.TAG_ID.EMBED,
      html_js_1.TAG_ID.H1,
      html_js_1.TAG_ID.H2,
      html_js_1.TAG_ID.H3,
      html_js_1.TAG_ID.H4,
      html_js_1.TAG_ID.H5,
      html_js_1.TAG_ID.H6,
      html_js_1.TAG_ID.HEAD,
      html_js_1.TAG_ID.HR,
      html_js_1.TAG_ID.I,
      html_js_1.TAG_ID.IMG,
      html_js_1.TAG_ID.LI,
      html_js_1.TAG_ID.LISTING,
      html_js_1.TAG_ID.MENU,
      html_js_1.TAG_ID.META,
      html_js_1.TAG_ID.NOBR,
      html_js_1.TAG_ID.OL,
      html_js_1.TAG_ID.P,
      html_js_1.TAG_ID.PRE,
      html_js_1.TAG_ID.RUBY,
      html_js_1.TAG_ID.S,
      html_js_1.TAG_ID.SMALL,
      html_js_1.TAG_ID.SPAN,
      html_js_1.TAG_ID.STRONG,
      html_js_1.TAG_ID.STRIKE,
      html_js_1.TAG_ID.SUB,
      html_js_1.TAG_ID.SUP,
      html_js_1.TAG_ID.TABLE,
      html_js_1.TAG_ID.TT,
      html_js_1.TAG_ID.U,
      html_js_1.TAG_ID.UL,
      html_js_1.TAG_ID.VAR
    ]);
    function causesExit(startTagToken) {
      const tn = startTagToken.tagID;
      const isFontWithAttrs = tn === html_js_1.TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === html_js_1.ATTRS.COLOR || name === html_js_1.ATTRS.SIZE || name === html_js_1.ATTRS.FACE);
      return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
    }
    exports.causesExit = causesExit;
    function adjustTokenMathMLAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
          token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
          break;
        }
      }
    }
    exports.adjustTokenMathMLAttrs = adjustTokenMathMLAttrs;
    function adjustTokenSVGAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrName != null) {
          token.attrs[i].name = adjustedAttrName;
        }
      }
    }
    exports.adjustTokenSVGAttrs = adjustTokenSVGAttrs;
    function adjustTokenXMLAttrs(token) {
      for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrEntry) {
          token.attrs[i].prefix = adjustedAttrEntry.prefix;
          token.attrs[i].name = adjustedAttrEntry.name;
          token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
      }
    }
    exports.adjustTokenXMLAttrs = adjustTokenXMLAttrs;
    function adjustTokenSVGTagName(token) {
      const adjustedTagName = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
      if (adjustedTagName != null) {
        token.tagName = adjustedTagName;
        token.tagID = (0, html_js_1.getTagID)(token.tagName);
      }
    }
    exports.adjustTokenSVGTagName = adjustTokenSVGTagName;
    function isMathMLTextIntegrationPoint(tn, ns) {
      return ns === html_js_1.NS.MATHML && (tn === html_js_1.TAG_ID.MI || tn === html_js_1.TAG_ID.MO || tn === html_js_1.TAG_ID.MN || tn === html_js_1.TAG_ID.MS || tn === html_js_1.TAG_ID.MTEXT);
    }
    function isHtmlIntegrationPoint(tn, ns, attrs) {
      if (ns === html_js_1.NS.MATHML && tn === html_js_1.TAG_ID.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
          if (attrs[i].name === html_js_1.ATTRS.ENCODING) {
            const value = attrs[i].value.toLowerCase();
            return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
          }
        }
      }
      return ns === html_js_1.NS.SVG && (tn === html_js_1.TAG_ID.FOREIGN_OBJECT || tn === html_js_1.TAG_ID.DESC || tn === html_js_1.TAG_ID.TITLE);
    }
    function isIntegrationPoint(tn, ns, attrs, foreignNS) {
      return (!foreignNS || foreignNS === html_js_1.NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === html_js_1.NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
    }
    exports.isIntegrationPoint = isIntegrationPoint;
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/parser/index.js
var require_parser = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/parser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var index_js_1 = require_tokenizer();
    var open_element_stack_js_1 = require_open_element_stack();
    var formatting_element_list_js_1 = require_formatting_element_list();
    var default_js_1 = require_default();
    var doctype = require_doctype();
    var foreignContent = require_foreign_content();
    var error_codes_js_1 = require_error_codes();
    var unicode = require_unicode();
    var html_js_1 = require_html();
    var token_js_1 = require_token();
    var HIDDEN_INPUT_TYPE = "hidden";
    var AA_OUTER_LOOP_ITER = 8;
    var AA_INNER_LOOP_ITER = 3;
    var InsertionMode;
    (function(InsertionMode2) {
      InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
      InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
      InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
      InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
      InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
      InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
      InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
      InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
      InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
      InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
      InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
      InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
      InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
      InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
      InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
      InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
      InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
    })(InsertionMode || (InsertionMode = {}));
    var BASE_LOC = {
      startLine: -1,
      startCol: -1,
      startOffset: -1,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
    var TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.TABLE, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
    var defaultParserOptions = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      treeAdapter: default_js_1.defaultTreeAdapter,
      onParseError: null
    };
    var Parser = class {
      constructor(options, document, fragmentContext = null, scriptHandler = null) {
        this.fragmentContext = fragmentContext;
        this.scriptHandler = scriptHandler;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = InsertionMode.INITIAL;
        this.originalInsertionMode = InsertionMode.INITIAL;
        this.headElement = null;
        this.formElement = null;
        this.currentNotInHTML = false;
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = Object.assign(Object.assign({}, defaultParserOptions), options);
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        if (this.onParseError) {
          this.options.sourceCodeLocationInfo = true;
        }
        this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
        this.tokenizer = new index_js_1.Tokenizer(this.options, this);
        this.activeFormattingElements = new formatting_element_list_js_1.FormattingElementList(this.treeAdapter);
        this.fragmentContextID = fragmentContext ? (0, html_js_1.getTagID)(this.treeAdapter.getTagName(fragmentContext)) : html_js_1.TAG_ID.UNKNOWN;
        this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
        this.openElements = new open_element_stack_js_1.OpenElementStack(this.document, this.treeAdapter, this);
      }
      static parse(html, options) {
        const parser = new this(options);
        parser.tokenizer.write(html, true);
        return parser.document;
      }
      static getFragmentParser(fragmentContext, options) {
        const opts = Object.assign(Object.assign({}, defaultParserOptions), options);
        fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(html_js_1.TAG_NAMES.TEMPLATE, html_js_1.NS.HTML, []);
        const documentMock = opts.treeAdapter.createElement("documentmock", html_js_1.NS.HTML, []);
        const parser = new this(opts, documentMock, fragmentContext);
        if (parser.fragmentContextID === html_js_1.TAG_ID.TEMPLATE) {
          parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
        }
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        return parser;
      }
      getFragment() {
        const rootElement = this.treeAdapter.getFirstChild(this.document);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      _err(token, code, beforeToken) {
        var _a;
        if (!this.onParseError)
          return;
        const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
        const err = {
          code,
          startLine: loc.startLine,
          startCol: loc.startCol,
          startOffset: loc.startOffset,
          endLine: beforeToken ? loc.startLine : loc.endLine,
          endCol: beforeToken ? loc.startCol : loc.endCol,
          endOffset: beforeToken ? loc.startOffset : loc.endOffset
        };
        this.onParseError(err);
      }
      onItemPush(node, tid, isTop) {
        var _a, _b;
        (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        if (isTop && this.openElements.stackTop > 0)
          this._setContextModes(node, tid);
      }
      onItemPop(node, isTop) {
        var _a, _b;
        if (this.options.sourceCodeLocationInfo) {
          this._setEndLocation(node, this.currentToken);
        }
        (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
        if (isTop) {
          let current;
          let currentTagId;
          if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
          } else {
            ({ current, currentTagId } = this.openElements);
          }
          this._setContextModes(current, currentTagId);
        }
      }
      _setContextModes(current, tid) {
        const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.HTML;
        this.currentNotInHTML = !isHTML;
        this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
      }
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, html_js_1.NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = InsertionMode.TEXT;
      }
      switchToPlaintextParsing() {
        this.insertionMode = InsertionMode.TEXT;
        this.originalInsertionMode = InsertionMode.IN_BODY;
        this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
      }
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let node = this.fragmentContext;
        while (node) {
          if (this.treeAdapter.getTagName(node) === html_js_1.TAG_NAMES.FORM) {
            this.formElement = node;
            break;
          }
          node = this.treeAdapter.getParentNode(node);
        }
      }
      _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== html_js_1.NS.HTML) {
          return;
        }
        switch (this.fragmentContextID) {
          case html_js_1.TAG_ID.TITLE:
          case html_js_1.TAG_ID.TEXTAREA: {
            this.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
            break;
          }
          case html_js_1.TAG_ID.STYLE:
          case html_js_1.TAG_ID.XMP:
          case html_js_1.TAG_ID.IFRAME:
          case html_js_1.TAG_ID.NOEMBED:
          case html_js_1.TAG_ID.NOFRAMES:
          case html_js_1.TAG_ID.NOSCRIPT: {
            this.tokenizer.state = index_js_1.TokenizerMode.RAWTEXT;
            break;
          }
          case html_js_1.TAG_ID.SCRIPT: {
            this.tokenizer.state = index_js_1.TokenizerMode.SCRIPT_DATA;
            break;
          }
          case html_js_1.TAG_ID.PLAINTEXT: {
            this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
            break;
          }
          default:
        }
      }
      _setDocumentType(token) {
        const name = token.name || "";
        const publicId = token.publicId || "";
        const systemId = token.systemId || "";
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        if (token.location) {
          const documentChildren = this.treeAdapter.getChildNodes(this.document);
          const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
          if (docTypeNode) {
            this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
          }
        }
      }
      _attachElementToTree(element, location) {
        if (this.options.sourceCodeLocationInfo) {
          const loc = location && Object.assign(Object.assign({}, location), { startTag: location });
          this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element);
        } else {
          const parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.appendChild(parent, element);
        }
      }
      _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
      }
      _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
        this.openElements.push(element, token.tagID);
      }
      _insertFakeElement(tagName, tagID) {
        const element = this.treeAdapter.createElement(tagName, html_js_1.NS.HTML, []);
        this._attachElementToTree(element, null);
        this.openElements.push(element, tagID);
      }
      _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, html_js_1.NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl, token.location);
        this.openElements.push(tmpl, token.tagID);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(content, null);
      }
      _insertFakeRootElement() {
        const element = this.treeAdapter.createElement(html_js_1.TAG_NAMES.HTML, html_js_1.NS.HTML, []);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(element, null);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element, html_js_1.TAG_ID.HTML);
      }
      _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
        if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        }
      }
      _insertCharacters(token) {
        let parent;
        let beforeElement;
        if (this._shouldFosterParentOnInsertion()) {
          ({ parent, beforeElement } = this._findFosterParentingLocation());
          if (beforeElement) {
            this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
          } else {
            this.treeAdapter.insertText(parent, token.chars);
          }
        } else {
          parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.insertText(parent, token.chars);
        }
        if (!token.location)
          return;
        const siblings = this.treeAdapter.getChildNodes(parent);
        const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
        const textNode = siblings[textNodeIdx - 1];
        const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
        if (tnLoc) {
          const { endLine, endCol, endOffset } = token.location;
          this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
        } else if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
        }
      }
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      _setEndLocation(element, closingToken) {
        if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
          const ctLoc = closingToken.location;
          const tn = this.treeAdapter.getTagName(element);
          const endLoc = closingToken.type === token_js_1.TokenType.END_TAG && tn === closingToken.tagName ? {
            endTag: Object.assign({}, ctLoc),
            endLine: ctLoc.endLine,
            endCol: ctLoc.endCol,
            endOffset: ctLoc.endOffset
          } : {
            endLine: ctLoc.startLine,
            endCol: ctLoc.startCol,
            endOffset: ctLoc.startOffset
          };
          this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
      }
      shouldProcessStartTagTokenInForeignContent(token) {
        if (!this.currentNotInHTML)
          return false;
        let current;
        let currentTagId;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
          current = this.fragmentContext;
          currentTagId = this.fragmentContextID;
        } else {
          ({ current, currentTagId } = this.openElements);
        }
        if (token.tagID === html_js_1.TAG_ID.SVG && this.treeAdapter.getTagName(current) === html_js_1.TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === html_js_1.NS.MATHML) {
          return false;
        }
        return this.tokenizer.inForeignNode || (token.tagID === html_js_1.TAG_ID.MGLYPH || token.tagID === html_js_1.TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(currentTagId, current, html_js_1.NS.HTML);
      }
      _processToken(token) {
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            this.onCharacter(token);
            break;
          }
          case token_js_1.TokenType.NULL_CHARACTER: {
            this.onNullCharacter(token);
            break;
          }
          case token_js_1.TokenType.COMMENT: {
            this.onComment(token);
            break;
          }
          case token_js_1.TokenType.DOCTYPE: {
            this.onDoctype(token);
            break;
          }
          case token_js_1.TokenType.START_TAG: {
            this._processStartTag(token);
            break;
          }
          case token_js_1.TokenType.END_TAG: {
            this.onEndTag(token);
            break;
          }
          case token_js_1.TokenType.EOF: {
            this.onEof(token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            this.onWhitespaceCharacter(token);
            break;
          }
        }
      }
      _isIntegrationPoint(tid, element, foreignNS) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return foreignContent.isIntegrationPoint(tid, ns, attrs, foreignNS);
      }
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.entries.length;
        if (listLength) {
          const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === formatting_element_list_js_1.EntryType.Marker || this.openElements.contains(entry.element));
          const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
          for (let i = unopenIdx; i >= 0; i--) {
            const entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = InsertionMode.IN_ROW;
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.P);
        this.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.P);
      }
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
            case html_js_1.TAG_ID.TR:
              this.insertionMode = InsertionMode.IN_ROW;
              return;
            case html_js_1.TAG_ID.TBODY:
            case html_js_1.TAG_ID.THEAD:
            case html_js_1.TAG_ID.TFOOT:
              this.insertionMode = InsertionMode.IN_TABLE_BODY;
              return;
            case html_js_1.TAG_ID.CAPTION:
              this.insertionMode = InsertionMode.IN_CAPTION;
              return;
            case html_js_1.TAG_ID.COLGROUP:
              this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
              return;
            case html_js_1.TAG_ID.TABLE:
              this.insertionMode = InsertionMode.IN_TABLE;
              return;
            case html_js_1.TAG_ID.BODY:
              this.insertionMode = InsertionMode.IN_BODY;
              return;
            case html_js_1.TAG_ID.FRAMESET:
              this.insertionMode = InsertionMode.IN_FRAMESET;
              return;
            case html_js_1.TAG_ID.SELECT:
              this._resetInsertionModeForSelect(i);
              return;
            case html_js_1.TAG_ID.TEMPLATE:
              this.insertionMode = this.tmplInsertionModeStack[0];
              return;
            case html_js_1.TAG_ID.HTML:
              this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
              return;
            case html_js_1.TAG_ID.TD:
            case html_js_1.TAG_ID.TH:
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_CELL;
                return;
              }
              break;
            case html_js_1.TAG_ID.HEAD:
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_HEAD;
                return;
              }
              break;
          }
        }
        this.insertionMode = InsertionMode.IN_BODY;
      }
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const tn = this.openElements.tagIDs[i];
            if (tn === html_js_1.TAG_ID.TEMPLATE) {
              break;
            } else if (tn === html_js_1.TAG_ID.TABLE) {
              this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
              return;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_SELECT;
      }
      _isElementCausesFosterParenting(tn) {
        return TABLE_STRUCTURE_TAGS.has(tn);
      }
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
      }
      _findFosterParentingLocation() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          switch (this.openElements.tagIDs[i]) {
            case html_js_1.TAG_ID.TEMPLATE:
              if (this.treeAdapter.getNamespaceURI(openElement) === html_js_1.NS.HTML) {
                return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
              }
              break;
            case html_js_1.TAG_ID.TABLE: {
              const parent = this.treeAdapter.getParentNode(openElement);
              if (parent) {
                return { parent, beforeElement: openElement };
              }
              return { parent: this.openElements.items[i - 1], beforeElement: null };
            }
            default:
          }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
      }
      _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
          this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        } else {
          this.treeAdapter.appendChild(location.parent, element);
        }
      }
      _isSpecialElement(element, id) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        return html_js_1.SPECIAL_ELEMENTS[ns].has(id);
      }
      onCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          characterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
            tokenInInitialMode(this, token);
            break;
          case InsertionMode.BEFORE_HTML:
            tokenBeforeHtml(this, token);
            break;
          case InsertionMode.BEFORE_HEAD:
            tokenBeforeHead(this, token);
            break;
          case InsertionMode.IN_HEAD:
            tokenInHead(this, token);
            break;
          case InsertionMode.IN_HEAD_NO_SCRIPT:
            tokenInHeadNoScript(this, token);
            break;
          case InsertionMode.AFTER_HEAD:
            tokenAfterHead(this, token);
            break;
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE:
            characterInBody(this, token);
            break;
          case InsertionMode.TEXT:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
            this._insertCharacters(token);
            break;
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
            characterInTable(this, token);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            characterInTableText(this, token);
            break;
          case InsertionMode.IN_COLUMN_GROUP:
            tokenInColumnGroup(this, token);
            break;
          case InsertionMode.AFTER_BODY:
            tokenAfterBody(this, token);
            break;
          case InsertionMode.AFTER_AFTER_BODY:
            tokenAfterAfterBody(this, token);
            break;
          default:
        }
      }
      onNullCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          nullCharacterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
            tokenInInitialMode(this, token);
            break;
          case InsertionMode.BEFORE_HTML:
            tokenBeforeHtml(this, token);
            break;
          case InsertionMode.BEFORE_HEAD:
            tokenBeforeHead(this, token);
            break;
          case InsertionMode.IN_HEAD:
            tokenInHead(this, token);
            break;
          case InsertionMode.IN_HEAD_NO_SCRIPT:
            tokenInHeadNoScript(this, token);
            break;
          case InsertionMode.AFTER_HEAD:
            tokenAfterHead(this, token);
            break;
          case InsertionMode.TEXT:
            this._insertCharacters(token);
            break;
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
            characterInTable(this, token);
            break;
          case InsertionMode.IN_COLUMN_GROUP:
            tokenInColumnGroup(this, token);
            break;
          case InsertionMode.AFTER_BODY:
            tokenAfterBody(this, token);
            break;
          case InsertionMode.AFTER_AFTER_BODY:
            tokenAfterAfterBody(this, token);
            break;
          default:
        }
      }
      onComment(token) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
          appendComment(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
          case InsertionMode.BEFORE_HTML:
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET:
            appendComment(this, token);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            tokenInTableText(this, token);
            break;
          case InsertionMode.AFTER_BODY:
            appendCommentToRootHtmlElement(this, token);
            break;
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET:
            appendCommentToDocument(this, token);
            break;
          default:
        }
      }
      onDoctype(token) {
        this.skipNextNewLine = false;
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
            doctypeInInitialMode(this, token);
            break;
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
            this._err(token, error_codes_js_1.ERR.misplacedDoctype);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            tokenInTableText(this, token);
            break;
          default:
        }
      }
      onStartTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        this._processStartTag(token);
        if (token.selfClosing && !token.ackSelfClosing) {
          this._err(token, error_codes_js_1.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      _processStartTag(token) {
        if (this.shouldProcessStartTagTokenInForeignContent(token)) {
          startTagInForeignContent(this, token);
        } else {
          this._startTagOutsideForeignContent(token);
        }
      }
      _startTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
            tokenInInitialMode(this, token);
            break;
          case InsertionMode.BEFORE_HTML:
            startTagBeforeHtml(this, token);
            break;
          case InsertionMode.BEFORE_HEAD:
            startTagBeforeHead(this, token);
            break;
          case InsertionMode.IN_HEAD:
            startTagInHead(this, token);
            break;
          case InsertionMode.IN_HEAD_NO_SCRIPT:
            startTagInHeadNoScript(this, token);
            break;
          case InsertionMode.AFTER_HEAD:
            startTagAfterHead(this, token);
            break;
          case InsertionMode.IN_BODY:
            startTagInBody(this, token);
            break;
          case InsertionMode.IN_TABLE:
            startTagInTable(this, token);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            tokenInTableText(this, token);
            break;
          case InsertionMode.IN_CAPTION:
            startTagInCaption(this, token);
            break;
          case InsertionMode.IN_COLUMN_GROUP:
            startTagInColumnGroup(this, token);
            break;
          case InsertionMode.IN_TABLE_BODY:
            startTagInTableBody(this, token);
            break;
          case InsertionMode.IN_ROW:
            startTagInRow(this, token);
            break;
          case InsertionMode.IN_CELL:
            startTagInCell(this, token);
            break;
          case InsertionMode.IN_SELECT:
            startTagInSelect(this, token);
            break;
          case InsertionMode.IN_SELECT_IN_TABLE:
            startTagInSelectInTable(this, token);
            break;
          case InsertionMode.IN_TEMPLATE:
            startTagInTemplate(this, token);
            break;
          case InsertionMode.AFTER_BODY:
            startTagAfterBody(this, token);
            break;
          case InsertionMode.IN_FRAMESET:
            startTagInFrameset(this, token);
            break;
          case InsertionMode.AFTER_FRAMESET:
            startTagAfterFrameset(this, token);
            break;
          case InsertionMode.AFTER_AFTER_BODY:
            startTagAfterAfterBody(this, token);
            break;
          case InsertionMode.AFTER_AFTER_FRAMESET:
            startTagAfterAfterFrameset(this, token);
            break;
          default:
        }
      }
      onEndTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        if (this.currentNotInHTML) {
          endTagInForeignContent(this, token);
        } else {
          this._endTagOutsideForeignContent(token);
        }
      }
      _endTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
            tokenInInitialMode(this, token);
            break;
          case InsertionMode.BEFORE_HTML:
            endTagBeforeHtml(this, token);
            break;
          case InsertionMode.BEFORE_HEAD:
            endTagBeforeHead(this, token);
            break;
          case InsertionMode.IN_HEAD:
            endTagInHead(this, token);
            break;
          case InsertionMode.IN_HEAD_NO_SCRIPT:
            endTagInHeadNoScript(this, token);
            break;
          case InsertionMode.AFTER_HEAD:
            endTagAfterHead(this, token);
            break;
          case InsertionMode.IN_BODY:
            endTagInBody(this, token);
            break;
          case InsertionMode.TEXT:
            endTagInText(this, token);
            break;
          case InsertionMode.IN_TABLE:
            endTagInTable(this, token);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            tokenInTableText(this, token);
            break;
          case InsertionMode.IN_CAPTION:
            endTagInCaption(this, token);
            break;
          case InsertionMode.IN_COLUMN_GROUP:
            endTagInColumnGroup(this, token);
            break;
          case InsertionMode.IN_TABLE_BODY:
            endTagInTableBody(this, token);
            break;
          case InsertionMode.IN_ROW:
            endTagInRow(this, token);
            break;
          case InsertionMode.IN_CELL:
            endTagInCell(this, token);
            break;
          case InsertionMode.IN_SELECT:
            endTagInSelect(this, token);
            break;
          case InsertionMode.IN_SELECT_IN_TABLE:
            endTagInSelectInTable(this, token);
            break;
          case InsertionMode.IN_TEMPLATE:
            endTagInTemplate(this, token);
            break;
          case InsertionMode.AFTER_BODY:
            endTagAfterBody(this, token);
            break;
          case InsertionMode.IN_FRAMESET:
            endTagInFrameset(this, token);
            break;
          case InsertionMode.AFTER_FRAMESET:
            endTagAfterFrameset(this, token);
            break;
          case InsertionMode.AFTER_AFTER_BODY:
            tokenAfterAfterBody(this, token);
            break;
          default:
        }
      }
      onEof(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
            tokenInInitialMode(this, token);
            break;
          case InsertionMode.BEFORE_HTML:
            tokenBeforeHtml(this, token);
            break;
          case InsertionMode.BEFORE_HEAD:
            tokenBeforeHead(this, token);
            break;
          case InsertionMode.IN_HEAD:
            tokenInHead(this, token);
            break;
          case InsertionMode.IN_HEAD_NO_SCRIPT:
            tokenInHeadNoScript(this, token);
            break;
          case InsertionMode.AFTER_HEAD:
            tokenAfterHead(this, token);
            break;
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
            eofInBody(this, token);
            break;
          case InsertionMode.TEXT:
            eofInText(this, token);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            tokenInTableText(this, token);
            break;
          case InsertionMode.IN_TEMPLATE:
            eofInTemplate(this, token);
            break;
          case InsertionMode.AFTER_BODY:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET:
            stopParsing(this, token);
            break;
          default:
        }
      }
      onWhitespaceCharacter(token) {
        if (this.skipNextNewLine) {
          this.skipNextNewLine = false;
          if (token.chars.charCodeAt(0) === unicode.CODE_POINTS.LINE_FEED) {
            if (token.chars.length === 1) {
              return;
            }
            token.chars = token.chars.substr(1);
          }
        }
        if (this.tokenizer.inForeignNode) {
          this._insertCharacters(token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.TEXT:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET:
            this._insertCharacters(token);
            break;
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.AFTER_BODY:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET:
            whitespaceCharacterInBody(this, token);
            break;
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
            characterInTable(this, token);
            break;
          case InsertionMode.IN_TABLE_TEXT:
            whitespaceCharacterInTableText(this, token);
            break;
          default:
        }
      }
    };
    exports.Parser = Parser;
    function aaObtainFormattingElementEntry(p, token) {
      let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
      if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
          p.activeFormattingElements.removeEntry(formattingElementEntry);
          formattingElementEntry = null;
        } else if (!p.openElements.hasInScope(token.tagID)) {
          formattingElementEntry = null;
        }
      } else {
        genericEndTagInBody(p, token);
      }
      return formattingElementEntry;
    }
    function aaObtainFurthestBlock(p, formattingElementEntry) {
      let furthestBlock = null;
      let idx = p.openElements.stackTop;
      for (; idx >= 0; idx--) {
        const element = p.openElements.items[idx];
        if (element === formattingElementEntry.element) {
          break;
        }
        if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
          furthestBlock = element;
        }
      }
      if (!furthestBlock) {
        p.openElements.shortenToLength(idx < 0 ? 0 : idx);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
      }
      return furthestBlock;
    }
    function aaInnerLoop(p, furthestBlock, formattingElement) {
      let lastElement = furthestBlock;
      let nextElement = p.openElements.getCommonAncestor(furthestBlock);
      for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
          if (counterOverflow) {
            p.activeFormattingElements.removeEntry(elementEntry);
          }
          p.openElements.remove(element);
        } else {
          element = aaRecreateElementFromEntry(p, elementEntry);
          if (lastElement === furthestBlock) {
            p.activeFormattingElements.bookmark = elementEntry;
          }
          p.treeAdapter.detachNode(lastElement);
          p.treeAdapter.appendChild(element, lastElement);
          lastElement = element;
        }
      }
      return lastElement;
    }
    function aaRecreateElementFromEntry(p, elementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
      const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
      p.openElements.replace(elementEntry.element, newElement);
      elementEntry.element = newElement;
      return newElement;
    }
    function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
      const tn = p.treeAdapter.getTagName(commonAncestor);
      const tid = (0, html_js_1.getTagID)(tn);
      if (p._isElementCausesFosterParenting(tid)) {
        p._fosterParentElement(lastElement);
      } else {
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tid === html_js_1.TAG_ID.TEMPLATE && ns === html_js_1.NS.HTML) {
          commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
      }
    }
    function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
      const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
      const { token } = formattingElementEntry;
      const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
      p._adoptNodes(furthestBlock, newElement);
      p.treeAdapter.appendChild(furthestBlock, newElement);
      p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      p.openElements.remove(formattingElementEntry.element);
      p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
    }
    function callAdoptionAgency(p, token) {
      for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
        if (!formattingElementEntry) {
          break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
          break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        if (commonAncestor)
          aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
      }
    }
    function appendComment(p, token) {
      p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
    }
    function appendCommentToRootHtmlElement(p, token) {
      p._appendCommentNode(token, p.openElements.items[0]);
    }
    function appendCommentToDocument(p, token) {
      p._appendCommentNode(token, p.document);
    }
    function stopParsing(p, token) {
      p.stopped = true;
      if (token.location) {
        const target = p.fragmentContext ? 0 : 2;
        for (let i = p.openElements.stackTop; i >= target; i--) {
          p._setEndLocation(p.openElements.items[i], token);
        }
        if (!p.fragmentContext && p.openElements.stackTop >= 0) {
          const htmlElement = p.openElements.items[0];
          const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
          if (htmlLocation && !htmlLocation.endTag) {
            p._setEndLocation(htmlElement, token);
            if (p.openElements.stackTop >= 1) {
              const bodyElement = p.openElements.items[1];
              const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
              if (bodyLocation && !bodyLocation.endTag) {
                p._setEndLocation(bodyElement, token);
              }
            }
          }
        }
      }
    }
    function doctypeInInitialMode(p, token) {
      p._setDocumentType(token);
      const mode = token.forceQuirks ? html_js_1.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
      if (!doctype.isConforming(token)) {
        p._err(token, error_codes_js_1.ERR.nonConformingDoctype);
      }
      p.treeAdapter.setDocumentMode(p.document, mode);
      p.insertionMode = InsertionMode.BEFORE_HTML;
    }
    function tokenInInitialMode(p, token) {
      p._err(token, error_codes_js_1.ERR.missingDoctype, true);
      p.treeAdapter.setDocumentMode(p.document, html_js_1.DOCUMENT_MODE.QUIRKS);
      p.insertionMode = InsertionMode.BEFORE_HTML;
      p._processToken(token);
    }
    function startTagBeforeHtml(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.BEFORE_HEAD;
      } else {
        tokenBeforeHtml(p, token);
      }
    }
    function endTagBeforeHtml(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.BR) {
        tokenBeforeHtml(p, token);
      }
    }
    function tokenBeforeHtml(p, token) {
      p._insertFakeRootElement();
      p.insertionMode = InsertionMode.BEFORE_HEAD;
      p._processToken(token);
    }
    function startTagBeforeHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.headElement = p.openElements.current;
          p.insertionMode = InsertionMode.IN_HEAD;
          break;
        }
        default: {
          tokenBeforeHead(p, token);
        }
      }
    }
    function endTagBeforeHead(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.HEAD || tn === html_js_1.TAG_ID.BODY || tn === html_js_1.TAG_ID.HTML || tn === html_js_1.TAG_ID.BR) {
        tokenBeforeHead(p, token);
      } else {
        p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
      }
    }
    function tokenBeforeHead(p, token) {
      p._insertFakeElement(html_js_1.TAG_NAMES.HEAD, html_js_1.TAG_ID.HEAD);
      p.headElement = p.openElements.current;
      p.insertionMode = InsertionMode.IN_HEAD;
      p._processToken(token);
    }
    function startTagInHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.TITLE: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.RCDATA);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          if (p.options.scriptingEnabled) {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
          } else {
            p._insertElement(token, html_js_1.NS.HTML);
            p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
          }
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.STYLE: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
          break;
        }
        case html_js_1.TAG_ID.SCRIPT: {
          p._switchToTextParsing(token, index_js_1.TokenizerMode.SCRIPT_DATA);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          p._insertTemplate(token);
          p.activeFormattingElements.insertMarker();
          p.framesetOk = false;
          p.insertionMode = InsertionMode.IN_TEMPLATE;
          p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
          break;
        }
        default: {
          tokenInHead(p, token);
        }
      }
    }
    function endTagInHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HEAD: {
          p.openElements.pop();
          p.insertionMode = InsertionMode.AFTER_HEAD;
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.BR:
        case html_js_1.TAG_ID.HTML: {
          tokenInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          if (p.openElements.tmplCount > 0) {
            p.openElements.generateImpliedEndTagsThoroughly();
            if (p.openElements.currentTagId !== html_js_1.TAG_ID.TEMPLATE) {
              p._err(token, error_codes_js_1.ERR.closingOfElementWithOpenChildElements);
            }
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
            p.activeFormattingElements.clearToLastMarker();
            p.tmplInsertionModeStack.shift();
            p._resetInsertionMode();
          } else {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
          }
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenInHead(p, token) {
      p.openElements.pop();
      p.insertionMode = InsertionMode.AFTER_HEAD;
      p._processToken(token);
    }
    function startTagInHeadNoScript(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.HEAD:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.STYLE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          p._err(token, error_codes_js_1.ERR.nestedNoscriptInHead);
          break;
        }
        default: {
          tokenInHeadNoScript(p, token);
        }
      }
    }
    function endTagInHeadNoScript(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.NOSCRIPT: {
          p.openElements.pop();
          p.insertionMode = InsertionMode.IN_HEAD;
          break;
        }
        case html_js_1.TAG_ID.BR: {
          tokenInHeadNoScript(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenInHeadNoScript(p, token) {
      const errCode = token.type === token_js_1.TokenType.EOF ? error_codes_js_1.ERR.openElementsLeftAfterEof : error_codes_js_1.ERR.disallowedContentInNoscriptInHead;
      p._err(token, errCode);
      p.openElements.pop();
      p.insertionMode = InsertionMode.IN_HEAD;
      p._processToken(token);
    }
    function startTagAfterHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.framesetOk = false;
          p.insertionMode = InsertionMode.IN_BODY;
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_FRAMESET;
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TEMPLATE:
        case html_js_1.TAG_ID.TITLE: {
          p._err(token, error_codes_js_1.ERR.abandonedHeadElementChild);
          p.openElements.push(p.headElement, html_js_1.TAG_ID.HEAD);
          startTagInHead(p, token);
          p.openElements.remove(p.headElement);
          break;
        }
        case html_js_1.TAG_ID.HEAD: {
          p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
          break;
        }
        default: {
          tokenAfterHead(p, token);
        }
      }
    }
    function endTagAfterHead(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.BR: {
          tokenAfterHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          endTagInHead(p, token);
          break;
        }
        default: {
          p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
      }
    }
    function tokenAfterHead(p, token) {
      p._insertFakeElement(html_js_1.TAG_NAMES.BODY, html_js_1.TAG_ID.BODY);
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function modeInBody(p, token) {
      switch (token.type) {
        case token_js_1.TokenType.CHARACTER: {
          characterInBody(p, token);
          break;
        }
        case token_js_1.TokenType.WHITESPACE_CHARACTER: {
          whitespaceCharacterInBody(p, token);
          break;
        }
        case token_js_1.TokenType.COMMENT: {
          appendComment(p, token);
          break;
        }
        case token_js_1.TokenType.START_TAG: {
          startTagInBody(p, token);
          break;
        }
        case token_js_1.TokenType.END_TAG: {
          endTagInBody(p, token);
          break;
        }
        case token_js_1.TokenType.EOF: {
          eofInBody(p, token);
          break;
        }
        default:
      }
    }
    function whitespaceCharacterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
    }
    function characterInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function htmlStartTagInBody(p, token) {
      if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
      }
    }
    function bodyStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
      }
    }
    function framesetStartTagInBody(p, token) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, html_js_1.NS.HTML);
        p.insertionMode = InsertionMode.IN_FRAMESET;
      }
    }
    function addressStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function numberedHeaderStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      if ((0, html_js_1.isNumberedHeader)(p.openElements.currentTagId)) {
        p.openElements.pop();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function preStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.skipNextNewLine = true;
      p.framesetOk = false;
    }
    function formStartTagInBody(p, token) {
      const inTemplate = p.openElements.tmplCount > 0;
      if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
          p._closePElement();
        }
        p._insertElement(token, html_js_1.NS.HTML);
        if (!inTemplate) {
          p.formElement = p.openElements.current;
        }
      }
    }
    function listItemStartTagInBody(p, token) {
      p.framesetOk = false;
      const tn = token.tagID;
      for (let i = p.openElements.stackTop; i >= 0; i--) {
        const elementId = p.openElements.tagIDs[i];
        if (tn === html_js_1.TAG_ID.LI && elementId === html_js_1.TAG_ID.LI || (tn === html_js_1.TAG_ID.DD || tn === html_js_1.TAG_ID.DT) && (elementId === html_js_1.TAG_ID.DD || elementId === html_js_1.TAG_ID.DT)) {
          p.openElements.generateImpliedEndTagsWithExclusion(elementId);
          p.openElements.popUntilTagNamePopped(elementId);
          break;
        }
        if (elementId !== html_js_1.TAG_ID.ADDRESS && elementId !== html_js_1.TAG_ID.DIV && elementId !== html_js_1.TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
          break;
        }
      }
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function plaintextStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
    }
    function buttonStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.BUTTON);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
    }
    function aStartTagInBody(p, token) {
      const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(html_js_1.TAG_NAMES.A);
      if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function bStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function nobrStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      if (p.openElements.hasInScope(html_js_1.TAG_ID.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.pushElement(p.openElements.current, token);
    }
    function appletStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
    }
    function tableStartTagInBody(p, token) {
      if (p.treeAdapter.getDocumentMode(p.document) !== html_js_1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_TABLE;
    }
    function areaStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function isHiddenInput(token) {
      const inputType = (0, token_js_1.getTokenAttr)(token, html_js_1.ATTRS.TYPE);
      return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
    }
    function inputStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._appendElement(token, html_js_1.NS.HTML);
      if (!isHiddenInput(token)) {
        p.framesetOk = false;
      }
      token.ackSelfClosing = true;
    }
    function paramStartTagInBody(p, token) {
      p._appendElement(token, html_js_1.NS.HTML);
      token.ackSelfClosing = true;
    }
    function hrStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._appendElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      token.ackSelfClosing = true;
    }
    function imageStartTagInBody(p, token) {
      token.tagName = html_js_1.TAG_NAMES.IMG;
      token.tagID = html_js_1.TAG_ID.IMG;
      areaStartTagInBody(p, token);
    }
    function textareaStartTagInBody(p, token) {
      p._insertElement(token, html_js_1.NS.HTML);
      p.skipNextNewLine = true;
      p.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
      p.originalInsertionMode = p.insertionMode;
      p.framesetOk = false;
      p.insertionMode = InsertionMode.TEXT;
    }
    function xmpStartTagInBody(p, token) {
      if (p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._closePElement();
      }
      p._reconstructActiveFormattingElements();
      p.framesetOk = false;
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function iframeStartTagInBody(p, token) {
      p.framesetOk = false;
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function noembedStartTagInBody(p, token) {
      p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
    }
    function selectStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
      p.framesetOk = false;
      p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
    }
    function optgroupStartTagInBody(p, token) {
      if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
        p.openElements.pop();
      }
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function rbStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTags();
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function rtStartTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.RTC);
      }
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function mathStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenMathMLAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, html_js_1.NS.MATHML);
      } else {
        p._insertElement(token, html_js_1.NS.MATHML);
      }
      token.ackSelfClosing = true;
    }
    function svgStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      foreignContent.adjustTokenSVGAttrs(token);
      foreignContent.adjustTokenXMLAttrs(token);
      if (token.selfClosing) {
        p._appendElement(token, html_js_1.NS.SVG);
      } else {
        p._insertElement(token, html_js_1.NS.SVG);
      }
      token.ackSelfClosing = true;
    }
    function genericStartTagInBody(p, token) {
      p._reconstructActiveFormattingElements();
      p._insertElement(token, html_js_1.NS.HTML);
    }
    function startTagInBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.I:
        case html_js_1.TAG_ID.S:
        case html_js_1.TAG_ID.B:
        case html_js_1.TAG_ID.U:
        case html_js_1.TAG_ID.EM:
        case html_js_1.TAG_ID.TT:
        case html_js_1.TAG_ID.BIG:
        case html_js_1.TAG_ID.CODE:
        case html_js_1.TAG_ID.FONT:
        case html_js_1.TAG_ID.SMALL:
        case html_js_1.TAG_ID.STRIKE:
        case html_js_1.TAG_ID.STRONG: {
          bStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.A: {
          aStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.H1:
        case html_js_1.TAG_ID.H2:
        case html_js_1.TAG_ID.H3:
        case html_js_1.TAG_ID.H4:
        case html_js_1.TAG_ID.H5:
        case html_js_1.TAG_ID.H6: {
          numberedHeaderStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.P:
        case html_js_1.TAG_ID.DL:
        case html_js_1.TAG_ID.OL:
        case html_js_1.TAG_ID.UL:
        case html_js_1.TAG_ID.DIV:
        case html_js_1.TAG_ID.DIR:
        case html_js_1.TAG_ID.NAV:
        case html_js_1.TAG_ID.MAIN:
        case html_js_1.TAG_ID.MENU:
        case html_js_1.TAG_ID.ASIDE:
        case html_js_1.TAG_ID.CENTER:
        case html_js_1.TAG_ID.FIGURE:
        case html_js_1.TAG_ID.FOOTER:
        case html_js_1.TAG_ID.HEADER:
        case html_js_1.TAG_ID.HGROUP:
        case html_js_1.TAG_ID.DIALOG:
        case html_js_1.TAG_ID.DETAILS:
        case html_js_1.TAG_ID.ADDRESS:
        case html_js_1.TAG_ID.ARTICLE:
        case html_js_1.TAG_ID.SECTION:
        case html_js_1.TAG_ID.SUMMARY:
        case html_js_1.TAG_ID.FIELDSET:
        case html_js_1.TAG_ID.BLOCKQUOTE:
        case html_js_1.TAG_ID.FIGCAPTION: {
          addressStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.LI:
        case html_js_1.TAG_ID.DD:
        case html_js_1.TAG_ID.DT: {
          listItemStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BR:
        case html_js_1.TAG_ID.IMG:
        case html_js_1.TAG_ID.WBR:
        case html_js_1.TAG_ID.AREA:
        case html_js_1.TAG_ID.EMBED:
        case html_js_1.TAG_ID.KEYGEN: {
          areaStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HR: {
          hrStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.RB:
        case html_js_1.TAG_ID.RTC: {
          rbStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.RT:
        case html_js_1.TAG_ID.RP: {
          rtStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.PRE:
        case html_js_1.TAG_ID.LISTING: {
          preStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.XMP: {
          xmpStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.SVG: {
          svgStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HTML: {
          htmlStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TITLE:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          bodyStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOBR: {
          nobrStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.MATH: {
          mathStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          tableStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.INPUT: {
          inputStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.PARAM:
        case html_js_1.TAG_ID.TRACK:
        case html_js_1.TAG_ID.SOURCE: {
          paramStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.IMAGE: {
          imageStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.BUTTON: {
          buttonStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.APPLET:
        case html_js_1.TAG_ID.OBJECT:
        case html_js_1.TAG_ID.MARQUEE: {
          appletStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.IFRAME: {
          iframeStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.SELECT: {
          selectStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.OPTION:
        case html_js_1.TAG_ID.OPTGROUP: {
          optgroupStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOEMBED: {
          noembedStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          framesetStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEXTAREA: {
          textareaStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOSCRIPT: {
          if (p.options.scriptingEnabled) {
            noembedStartTagInBody(p, token);
          } else {
            genericStartTagInBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.PLAINTEXT: {
          plaintextStartTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TR:
        case html_js_1.TAG_ID.HEAD:
        case html_js_1.TAG_ID.FRAME:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COLGROUP: {
          break;
        }
        default: {
          genericStartTagInBody(p, token);
        }
      }
    }
    function bodyEndTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        if (p.options.sourceCodeLocationInfo) {
          const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
          if (bodyElement) {
            p._setEndLocation(bodyElement, token);
          }
        }
      }
    }
    function htmlEndTagInBody(p, token) {
      if (p.openElements.hasInScope(html_js_1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        endTagAfterBody(p, token);
      }
    }
    function addressEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function formEndTagInBody(p) {
      const inTemplate = p.openElements.tmplCount > 0;
      const { formElement } = p;
      if (!inTemplate) {
        p.formElement = null;
      }
      if ((formElement || inTemplate) && p.openElements.hasInScope(html_js_1.TAG_ID.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.FORM);
        } else if (formElement) {
          p.openElements.remove(formElement);
        }
      }
    }
    function pEndTagInBody(p) {
      if (!p.openElements.hasInButtonScope(html_js_1.TAG_ID.P)) {
        p._insertFakeElement(html_js_1.TAG_NAMES.P, html_js_1.TAG_ID.P);
      }
      p._closePElement();
    }
    function liEndTagInBody(p) {
      if (p.openElements.hasInListItemScope(html_js_1.TAG_ID.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1.TAG_ID.LI);
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.LI);
      }
    }
    function ddEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
      }
    }
    function numberedHeaderEndTagInBody(p) {
      if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
      }
    }
    function appletEndTagInBody(p, token) {
      const tn = token.tagID;
      if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
      }
    }
    function brEndTagInBody(p) {
      p._reconstructActiveFormattingElements();
      p._insertFakeElement(html_js_1.TAG_NAMES.BR, html_js_1.TAG_ID.BR);
      p.openElements.pop();
      p.framesetOk = false;
    }
    function genericEndTagInBody(p, token) {
      const tn = token.tagName;
      const tid = token.tagID;
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        const elementId = p.openElements.tagIDs[i];
        if (tid === elementId && (tid !== html_js_1.TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
          p.openElements.generateImpliedEndTagsWithExclusion(tid);
          if (p.openElements.stackTop >= i)
            p.openElements.shortenToLength(i);
          break;
        }
        if (p._isSpecialElement(element, elementId)) {
          break;
        }
      }
    }
    function endTagInBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.A:
        case html_js_1.TAG_ID.B:
        case html_js_1.TAG_ID.I:
        case html_js_1.TAG_ID.S:
        case html_js_1.TAG_ID.U:
        case html_js_1.TAG_ID.EM:
        case html_js_1.TAG_ID.TT:
        case html_js_1.TAG_ID.BIG:
        case html_js_1.TAG_ID.CODE:
        case html_js_1.TAG_ID.FONT:
        case html_js_1.TAG_ID.NOBR:
        case html_js_1.TAG_ID.SMALL:
        case html_js_1.TAG_ID.STRIKE:
        case html_js_1.TAG_ID.STRONG: {
          callAdoptionAgency(p, token);
          break;
        }
        case html_js_1.TAG_ID.P: {
          pEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.DL:
        case html_js_1.TAG_ID.UL:
        case html_js_1.TAG_ID.OL:
        case html_js_1.TAG_ID.DIR:
        case html_js_1.TAG_ID.DIV:
        case html_js_1.TAG_ID.NAV:
        case html_js_1.TAG_ID.PRE:
        case html_js_1.TAG_ID.MAIN:
        case html_js_1.TAG_ID.MENU:
        case html_js_1.TAG_ID.ASIDE:
        case html_js_1.TAG_ID.CENTER:
        case html_js_1.TAG_ID.FIGURE:
        case html_js_1.TAG_ID.FOOTER:
        case html_js_1.TAG_ID.HEADER:
        case html_js_1.TAG_ID.HGROUP:
        case html_js_1.TAG_ID.DIALOG:
        case html_js_1.TAG_ID.ADDRESS:
        case html_js_1.TAG_ID.ARTICLE:
        case html_js_1.TAG_ID.DETAILS:
        case html_js_1.TAG_ID.SECTION:
        case html_js_1.TAG_ID.SUMMARY:
        case html_js_1.TAG_ID.LISTING:
        case html_js_1.TAG_ID.FIELDSET:
        case html_js_1.TAG_ID.BLOCKQUOTE:
        case html_js_1.TAG_ID.FIGCAPTION: {
          addressEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.LI: {
          liEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.DD:
        case html_js_1.TAG_ID.DT: {
          ddEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.H1:
        case html_js_1.TAG_ID.H2:
        case html_js_1.TAG_ID.H3:
        case html_js_1.TAG_ID.H4:
        case html_js_1.TAG_ID.H5:
        case html_js_1.TAG_ID.H6: {
          numberedHeaderEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.BR: {
          brEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.BODY: {
          bodyEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.HTML: {
          htmlEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formEndTagInBody(p);
          break;
        }
        case html_js_1.TAG_ID.APPLET:
        case html_js_1.TAG_ID.OBJECT:
        case html_js_1.TAG_ID.MARQUEE: {
          appletEndTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          endTagInHead(p, token);
          break;
        }
        default: {
          genericEndTagInBody(p, token);
        }
      }
    }
    function eofInBody(p, token) {
      if (p.tmplInsertionModeStack.length > 0) {
        eofInTemplate(p, token);
      } else {
        stopParsing(p, token);
      }
    }
    function endTagInText(p, token) {
      var _a;
      if (token.tagID === html_js_1.TAG_ID.SCRIPT) {
        (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
      }
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
    }
    function eofInText(p, token) {
      p._err(token, error_codes_js_1.ERR.eofInElementThatCanContainOnlyText);
      p.openElements.pop();
      p.insertionMode = p.originalInsertionMode;
      p.onEof(token);
    }
    function characterInTable(p, token) {
      if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
        p.pendingCharacterTokens.length = 0;
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = InsertionMode.IN_TABLE_TEXT;
        switch (token.type) {
          case token_js_1.TokenType.CHARACTER: {
            characterInTableText(p, token);
            break;
          }
          case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            whitespaceCharacterInTableText(p, token);
            break;
          }
        }
      } else {
        tokenInTable(p, token);
      }
    }
    function captionStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p.activeFormattingElements.insertMarker();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_CAPTION;
    }
    function colgroupStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
    }
    function colStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement(html_js_1.TAG_NAMES.COLGROUP, html_js_1.TAG_ID.COLGROUP);
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      startTagInColumnGroup(p, token);
    }
    function tbodyStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertElement(token, html_js_1.NS.HTML);
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
    }
    function tdStartTagInTable(p, token) {
      p.openElements.clearBackToTableContext();
      p._insertFakeElement(html_js_1.TAG_NAMES.TBODY, html_js_1.TAG_ID.TBODY);
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
      startTagInTableBody(p, token);
    }
    function tableStartTagInTable(p, token) {
      if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
        p._resetInsertionMode();
        p._processStartTag(token);
      }
    }
    function inputStartTagInTable(p, token) {
      if (isHiddenInput(token)) {
        p._appendElement(token, html_js_1.NS.HTML);
      } else {
        tokenInTable(p, token);
      }
      token.ackSelfClosing = true;
    }
    function formStartTagInTable(p, token) {
      if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, html_js_1.NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
      }
    }
    function startTagInTable(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TR: {
          tdStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          colStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.FORM: {
          formStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          tableStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          tbodyStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.INPUT: {
          inputStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION: {
          captionStartTagInTable(p, token);
          break;
        }
        case html_js_1.TAG_ID.COLGROUP: {
          colgroupStartTagInTable(p, token);
          break;
        }
        default: {
          tokenInTable(p, token);
        }
      }
    }
    function endTagInTable(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TABLE)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TABLE);
            p._resetInsertionMode();
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          endTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          tokenInTable(p, token);
        }
      }
    }
    function tokenInTable(p, token) {
      const savedFosterParentingState = p.fosterParentingEnabled;
      p.fosterParentingEnabled = true;
      modeInBody(p, token);
      p.fosterParentingEnabled = savedFosterParentingState;
    }
    function whitespaceCharacterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
    }
    function characterInTableText(p, token) {
      p.pendingCharacterTokens.push(token);
      p.hasNonWhitespacePendingCharacterToken = true;
    }
    function tokenInTableText(p, token) {
      let i = 0;
      if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
          tokenInTable(p, p.pendingCharacterTokens[i]);
        }
      } else {
        for (; i < p.pendingCharacterTokens.length; i++) {
          p._insertCharacters(p.pendingCharacterTokens[i]);
        }
      }
      p.insertionMode = p.originalInsertionMode;
      p._processToken(token);
    }
    var TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([html_js_1.TAG_ID.CAPTION, html_js_1.TAG_ID.COL, html_js_1.TAG_ID.COLGROUP, html_js_1.TAG_ID.TBODY, html_js_1.TAG_ID.TD, html_js_1.TAG_ID.TFOOT, html_js_1.TAG_ID.TH, html_js_1.TAG_ID.THEAD, html_js_1.TAG_ID.TR]);
    function startTagInCaption(p, token) {
      const tn = token.tagID;
      if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
          p.activeFormattingElements.clearToLastMarker();
          p.insertionMode = InsertionMode.IN_TABLE;
          startTagInTable(p, token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCaption(p, token) {
      const tn = token.tagID;
      switch (tn) {
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_TABLE;
            if (tn === html_js_1.TAG_ID.TABLE) {
              endTagInTable(p, token);
            }
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          endTagInBody(p, token);
        }
      }
    }
    function startTagInColumnGroup(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        default: {
          tokenInColumnGroup(p, token);
        }
      }
    }
    function endTagInColumnGroup(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.COLGROUP: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          endTagInHead(p, token);
          break;
        }
        case html_js_1.TAG_ID.COL: {
          break;
        }
        default: {
          tokenInColumnGroup(p, token);
        }
      }
    }
    function tokenInColumnGroup(p, token) {
      if (p.openElements.currentTagId === html_js_1.TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        p._processToken(token);
      }
    }
    function startTagInTableBody(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TR: {
          p.openElements.clearBackToTableBodyContext();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_ROW;
          break;
        }
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD: {
          p.openElements.clearBackToTableBodyContext();
          p._insertFakeElement(html_js_1.TAG_NAMES.TR, html_js_1.TAG_ID.TR);
          p.insertionMode = InsertionMode.IN_ROW;
          startTagInRow(p, token);
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
          }
          break;
        }
        default: {
          startTagInTable(p, token);
        }
      }
    }
    function endTagInTableBody(p, token) {
      const tn = token.tagID;
      switch (token.tagID) {
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE;
            endTagInTable(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TR: {
          break;
        }
        default: {
          endTagInTable(p, token);
        }
      }
    }
    function startTagInRow(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TH:
        case html_js_1.TAG_ID.TD: {
          p.openElements.clearBackToTableRowContext();
          p._insertElement(token, html_js_1.NS.HTML);
          p.insertionMode = InsertionMode.IN_CELL;
          p.activeFormattingElements.insertMarker();
          break;
        }
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
          }
          break;
        }
        default: {
          startTagInTable(p, token);
        }
      }
    }
    function endTagInRow(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE: {
          if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            endTagInTableBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD: {
          if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            endTagInTableBody(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML:
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          break;
        }
        default:
          endTagInTable(p, token);
      }
    }
    function startTagInCell(p, token) {
      const tn = token.tagID;
      if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1.TAG_ID.TD) || p.openElements.hasInTableScope(html_js_1.TAG_ID.TH)) {
          p._closeTableCell();
          startTagInRow(p, token);
        }
      } else {
        startTagInBody(p, token);
      }
    }
    function endTagInCell(p, token) {
      const tn = token.tagID;
      switch (tn) {
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH: {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_ROW;
          }
          break;
        }
        case html_js_1.TAG_ID.TABLE:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
        case html_js_1.TAG_ID.TR: {
          if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            endTagInRow(p, token);
          }
          break;
        }
        case html_js_1.TAG_ID.BODY:
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COL:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.HTML: {
          break;
        }
        default: {
          endTagInBody(p, token);
        }
      }
    }
    function startTagInSelect(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.OPTION: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.OPTGROUP: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.INPUT:
        case html_js_1.TAG_ID.KEYGEN:
        case html_js_1.TAG_ID.TEXTAREA:
        case html_js_1.TAG_ID.SELECT: {
          if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
            if (token.tagID !== html_js_1.TAG_ID.SELECT) {
              p._processStartTag(token);
            }
          }
          break;
        }
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.TEMPLATE: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagInSelect(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.OPTGROUP: {
          if (p.openElements.stackTop > 0 && p.openElements.currentTagId === html_js_1.TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTGROUP) {
            p.openElements.pop();
          }
          break;
        }
        case html_js_1.TAG_ID.OPTION: {
          if (p.openElements.currentTagId === html_js_1.TAG_ID.OPTION) {
            p.openElements.pop();
          }
          break;
        }
        case html_js_1.TAG_ID.SELECT: {
          if (p.openElements.hasInSelectScope(html_js_1.TAG_ID.SELECT)) {
            p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
            p._resetInsertionMode();
          }
          break;
        }
        case html_js_1.TAG_ID.TEMPLATE: {
          endTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function startTagInSelectInTable(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
        p._resetInsertionMode();
        p._processStartTag(token);
      } else {
        startTagInSelect(p, token);
      }
    }
    function endTagInSelectInTable(p, token) {
      const tn = token.tagID;
      if (tn === html_js_1.TAG_ID.CAPTION || tn === html_js_1.TAG_ID.TABLE || tn === html_js_1.TAG_ID.TBODY || tn === html_js_1.TAG_ID.TFOOT || tn === html_js_1.TAG_ID.THEAD || tn === html_js_1.TAG_ID.TR || tn === html_js_1.TAG_ID.TD || tn === html_js_1.TAG_ID.TH) {
        if (p.openElements.hasInTableScope(tn)) {
          p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.SELECT);
          p._resetInsertionMode();
          p.onEndTag(token);
        }
      } else {
        endTagInSelect(p, token);
      }
    }
    function startTagInTemplate(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.BASE:
        case html_js_1.TAG_ID.BASEFONT:
        case html_js_1.TAG_ID.BGSOUND:
        case html_js_1.TAG_ID.LINK:
        case html_js_1.TAG_ID.META:
        case html_js_1.TAG_ID.NOFRAMES:
        case html_js_1.TAG_ID.SCRIPT:
        case html_js_1.TAG_ID.STYLE:
        case html_js_1.TAG_ID.TEMPLATE:
        case html_js_1.TAG_ID.TITLE:
          startTagInHead(p, token);
          break;
        case html_js_1.TAG_ID.CAPTION:
        case html_js_1.TAG_ID.COLGROUP:
        case html_js_1.TAG_ID.TBODY:
        case html_js_1.TAG_ID.TFOOT:
        case html_js_1.TAG_ID.THEAD:
          p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
          p.insertionMode = InsertionMode.IN_TABLE;
          startTagInTable(p, token);
          break;
        case html_js_1.TAG_ID.COL:
          p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
          p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
          startTagInColumnGroup(p, token);
          break;
        case html_js_1.TAG_ID.TR:
          p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
          p.insertionMode = InsertionMode.IN_TABLE_BODY;
          startTagInTableBody(p, token);
          break;
        case html_js_1.TAG_ID.TD:
        case html_js_1.TAG_ID.TH:
          p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
          p.insertionMode = InsertionMode.IN_ROW;
          startTagInRow(p, token);
          break;
        default:
          p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
          p.insertionMode = InsertionMode.IN_BODY;
          startTagInBody(p, token);
      }
    }
    function endTagInTemplate(p, token) {
      if (token.tagID === html_js_1.TAG_ID.TEMPLATE) {
        endTagInHead(p, token);
      }
    }
    function eofInTemplate(p, token) {
      if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped(html_js_1.TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
        p.onEof(token);
      } else {
        stopParsing(p, token);
      }
    }
    function startTagAfterBody(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterBody(p, token);
      }
    }
    function endTagAfterBody(p, token) {
      var _a;
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        if (!p.fragmentContext) {
          p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
        }
        if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === html_js_1.TAG_ID.HTML) {
          p._setEndLocation(p.openElements.items[0], token);
          const bodyElement = p.openElements.items[1];
          if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
            p._setEndLocation(bodyElement, token);
          }
        }
      } else {
        tokenAfterBody(p, token);
      }
    }
    function tokenAfterBody(p, token) {
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function startTagInFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.FRAMESET: {
          p._insertElement(token, html_js_1.NS.HTML);
          break;
        }
        case html_js_1.TAG_ID.FRAME: {
          p._appendElement(token, html_js_1.NS.HTML);
          token.ackSelfClosing = true;
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagInFrameset(p, token) {
      if (token.tagID === html_js_1.TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagId !== html_js_1.TAG_ID.FRAMESET) {
          p.insertionMode = InsertionMode.AFTER_FRAMESET;
        }
      }
    }
    function startTagAfterFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function endTagAfterFrameset(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
      }
    }
    function startTagAfterAfterBody(p, token) {
      if (token.tagID === html_js_1.TAG_ID.HTML) {
        startTagInBody(p, token);
      } else {
        tokenAfterAfterBody(p, token);
      }
    }
    function tokenAfterAfterBody(p, token) {
      p.insertionMode = InsertionMode.IN_BODY;
      modeInBody(p, token);
    }
    function startTagAfterAfterFrameset(p, token) {
      switch (token.tagID) {
        case html_js_1.TAG_ID.HTML: {
          startTagInBody(p, token);
          break;
        }
        case html_js_1.TAG_ID.NOFRAMES: {
          startTagInHead(p, token);
          break;
        }
        default:
      }
    }
    function nullCharacterInForeignContent(p, token) {
      token.chars = unicode.REPLACEMENT_CHARACTER;
      p._insertCharacters(token);
    }
    function characterInForeignContent(p, token) {
      p._insertCharacters(token);
      p.framesetOk = false;
    }
    function popUntilHtmlOrIntegrationPoint(p) {
      while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== html_js_1.NS.HTML && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
        p.openElements.pop();
      }
    }
    function startTagInForeignContent(p, token) {
      if (foreignContent.causesExit(token)) {
        popUntilHtmlOrIntegrationPoint(p);
        p._startTagOutsideForeignContent(token);
      } else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === html_js_1.NS.MATHML) {
          foreignContent.adjustTokenMathMLAttrs(token);
        } else if (currentNs === html_js_1.NS.SVG) {
          foreignContent.adjustTokenSVGTagName(token);
          foreignContent.adjustTokenSVGAttrs(token);
        }
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, currentNs);
        } else {
          p._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
      }
    }
    function endTagInForeignContent(p, token) {
      if (token.tagID === html_js_1.TAG_ID.P || token.tagID === html_js_1.TAG_ID.BR) {
        popUntilHtmlOrIntegrationPoint(p);
        p._endTagOutsideForeignContent(token);
        return;
      }
      for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === html_js_1.NS.HTML) {
          p._endTagOutsideForeignContent(token);
          break;
        }
        const tagName = p.treeAdapter.getTagName(element);
        if (tagName.toLowerCase() === token.tagName) {
          token.tagName = tagName;
          p.openElements.shortenToLength(i);
          break;
        }
      }
    }
  }
});

// http-url:https://unpkg.com/entities@latest/lib/escape.js
var require_escape2 = __commonJS({
  "http-url:https://unpkg.com/entities@latest/lib/escape.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
    exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    exports.getCodePoint = String.prototype.codePointAt != null ? function(str, index) {
      return str.codePointAt(index);
    } : function(c, index) {
      return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
    };
    function encodeXML(str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = exports.xmlReplacer.exec(str)) !== null) {
        var i = match.index;
        var char = str.charCodeAt(i);
        var next = xmlCodeMap.get(char);
        if (next !== void 0) {
          ret += str.substring(lastIdx, i) + next;
          lastIdx = i + 1;
        } else {
          ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
          lastIdx = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
      }
      return ret + str.substr(lastIdx);
    }
    exports.encodeXML = encodeXML;
    exports.escape = encodeXML;
    function getEscaper(regex, map) {
      return function escape(data) {
        var match;
        var lastIdx = 0;
        var result = "";
        while (match = regex.exec(data)) {
          if (lastIdx !== match.index) {
            result += data.substring(lastIdx, match.index);
          }
          result += map.get(match[0].charCodeAt(0));
          lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
      };
    }
    exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    exports.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    exports.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/serializer/index.js
var require_serializer = __commonJS({
  "http-url:https://unpkg.com/parse5@7.0.0/dist/cjs/serializer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeOuter = exports.serialize = void 0;
    var html_js_1 = require_html();
    var escape_js_1 = require_escape2();
    var default_js_1 = require_default();
    var VOID_ELEMENTS = /* @__PURE__ */ new Set([
      html_js_1.TAG_NAMES.AREA,
      html_js_1.TAG_NAMES.BASE,
      html_js_1.TAG_NAMES.BASEFONT,
      html_js_1.TAG_NAMES.BGSOUND,
      html_js_1.TAG_NAMES.BR,
      html_js_1.TAG_NAMES.COL,
      html_js_1.TAG_NAMES.EMBED,
      html_js_1.TAG_NAMES.FRAME,
      html_js_1.TAG_NAMES.HR,
      html_js_1.TAG_NAMES.IMG,
      html_js_1.TAG_NAMES.INPUT,
      html_js_1.TAG_NAMES.KEYGEN,
      html_js_1.TAG_NAMES.LINK,
      html_js_1.TAG_NAMES.META,
      html_js_1.TAG_NAMES.PARAM,
      html_js_1.TAG_NAMES.SOURCE,
      html_js_1.TAG_NAMES.TRACK,
      html_js_1.TAG_NAMES.WBR
    ]);
    function isVoidElement(node, options) {
      return options.treeAdapter.isElementNode(node) && options.treeAdapter.getNamespaceURI(node) === html_js_1.NS.HTML && VOID_ELEMENTS.has(options.treeAdapter.getTagName(node));
    }
    var defaultOpts = { treeAdapter: default_js_1.defaultTreeAdapter, scriptingEnabled: true };
    function serialize(node, options) {
      const opts = Object.assign(Object.assign({}, defaultOpts), options);
      if (isVoidElement(node, opts)) {
        return "";
      }
      return serializeChildNodes(node, opts);
    }
    exports.serialize = serialize;
    function serializeOuter(node, options) {
      const opts = Object.assign(Object.assign({}, defaultOpts), options);
      return serializeNode(node, opts);
    }
    exports.serializeOuter = serializeOuter;
    function serializeChildNodes(parentNode, options) {
      let html = "";
      const container = options.treeAdapter.isElementNode(parentNode) && options.treeAdapter.getTagName(parentNode) === html_js_1.TAG_NAMES.TEMPLATE && options.treeAdapter.getNamespaceURI(parentNode) === html_js_1.NS.HTML ? options.treeAdapter.getTemplateContent(parentNode) : parentNode;
      const childNodes = options.treeAdapter.getChildNodes(container);
      if (childNodes) {
        for (const currentNode of childNodes) {
          html += serializeNode(currentNode, options);
        }
      }
      return html;
    }
    function serializeNode(node, options) {
      if (options.treeAdapter.isElementNode(node)) {
        return serializeElement(node, options);
      }
      if (options.treeAdapter.isTextNode(node)) {
        return serializeTextNode(node, options);
      }
      if (options.treeAdapter.isCommentNode(node)) {
        return serializeCommentNode(node, options);
      }
      if (options.treeAdapter.isDocumentTypeNode(node)) {
        return serializeDocumentTypeNode(node, options);
      }
      return "";
    }
    function serializeElement(node, options) {
      const tn = options.treeAdapter.getTagName(node);
      return `<${tn}${serializeAttributes(node, options)}>${isVoidElement(node, options) ? "" : `${serializeChildNodes(node, options)}</${tn}>`}`;
    }
    function serializeAttributes(node, { treeAdapter }) {
      let html = "";
      for (const attr of treeAdapter.getAttrList(node)) {
        html += " ";
        if (!attr.namespace) {
          html += attr.name;
        } else
          switch (attr.namespace) {
            case html_js_1.NS.XML: {
              html += `xml:${attr.name}`;
              break;
            }
            case html_js_1.NS.XMLNS: {
              if (attr.name !== "xmlns") {
                html += "xmlns:";
              }
              html += attr.name;
              break;
            }
            case html_js_1.NS.XLINK: {
              html += `xlink:${attr.name}`;
              break;
            }
            default: {
              html += `${attr.prefix}:${attr.name}`;
            }
          }
        html += `="${(0, escape_js_1.escapeAttribute)(attr.value)}"`;
      }
      return html;
    }
    function serializeTextNode(node, options) {
      const { treeAdapter } = options;
      const content = treeAdapter.getTextNodeContent(node);
      const parent = treeAdapter.getParentNode(node);
      const parentTn = parent && treeAdapter.isElementNode(parent) && treeAdapter.getTagName(parent);
      return parentTn && treeAdapter.getNamespaceURI(parent) === html_js_1.NS.HTML && (0, html_js_1.hasUnescapedText)(parentTn, options.scriptingEnabled) ? content : (0, escape_js_1.escapeText)(content);
    }
    function serializeCommentNode(node, { treeAdapter }) {
      return `<!--${treeAdapter.getCommentNodeContent(node)}-->`;
    }
    function serializeDocumentTypeNode(node, { treeAdapter }) {
      return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(node)}>`;
    }
  }
});

// http-url:https://unpkg.com/parse5@%5E7.0.0/dist/cjs/index.js
var require_cjs = __commonJS({
  "http-url:https://unpkg.com/parse5@%5E7.0.0/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseFragment = exports.parse = exports.TokenizerMode = exports.Tokenizer = exports.Token = exports.html = exports.foreignContent = exports.serializeOuter = exports.serialize = exports.Parser = exports.defaultTreeAdapter = void 0;
    var index_js_1 = require_parser();
    var default_js_1 = require_default();
    Object.defineProperty(exports, "defaultTreeAdapter", { enumerable: true, get: function() {
      return default_js_1.defaultTreeAdapter;
    } });
    var index_js_2 = require_parser();
    Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
      return index_js_2.Parser;
    } });
    var index_js_3 = require_serializer();
    Object.defineProperty(exports, "serialize", { enumerable: true, get: function() {
      return index_js_3.serialize;
    } });
    Object.defineProperty(exports, "serializeOuter", { enumerable: true, get: function() {
      return index_js_3.serializeOuter;
    } });
    exports.foreignContent = require_foreign_content();
    exports.html = require_html();
    exports.Token = require_token();
    var index_js_4 = require_tokenizer();
    Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
      return index_js_4.Tokenizer;
    } });
    Object.defineProperty(exports, "TokenizerMode", { enumerable: true, get: function() {
      return index_js_4.TokenizerMode;
    } });
    function parse2(html, options) {
      return index_js_1.Parser.parse(html, options);
    }
    exports.parse = parse2;
    function parseFragment(fragmentContext, html, options) {
      if (typeof fragmentContext === "string") {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
      }
      const parser = index_js_1.Parser.getFragmentParser(fragmentContext, options);
      parser.tokenizer.write(html, true);
      return parser.getFragment();
    }
    exports.parseFragment = parseFragment;
  }
});

// http-url:https://unpkg.com/domhandler@%5E5.0.2/lib/index.js
var require_lib10 = __commonJS({
  "http-url:https://unpkg.com/domhandler@%5E5.0.2/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_js_1 = require_node();
    __exportStar(require_node(), exports);
    var defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = function() {
      function DomHandler2(callback, options, elementCB) {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
        if (typeof options === "function") {
          elementCB = options;
          options = defaultOpts;
        }
        if (typeof callback === "object") {
          options = callback;
          callback = void 0;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
      }
      DomHandler2.prototype.onparserinit = function(parser) {
        this.parser = parser;
      };
      DomHandler2.prototype.onreset = function() {
        this.dom = [];
        this.root = new node_js_1.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
      };
      DomHandler2.prototype.onend = function() {
        if (this.done)
          return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      };
      DomHandler2.prototype.onerror = function(error) {
        this.handleCallback(error);
      };
      DomHandler2.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
          elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
          this.elementCB(elem);
      };
      DomHandler2.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
        var element = new node_js_1.Element(name, attribs, void 0, type);
        this.addNode(element);
        this.tagStack.push(element);
      };
      DomHandler2.prototype.ontext = function(data) {
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
          lastNode.data += data;
          if (this.options.withEndIndices) {
            lastNode.endIndex = this.parser.endIndex;
          }
        } else {
          var node = new node_js_1.Text(data);
          this.addNode(node);
          this.lastNode = node;
        }
      };
      DomHandler2.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
          this.lastNode.data += data;
          return;
        }
        var node = new node_js_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
      };
      DomHandler2.prototype.oncommentend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.oncdatastart = function() {
        var text = new node_js_1.Text("");
        var node = new node_js_1.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
      };
      DomHandler2.prototype.oncdataend = function() {
        this.lastNode = null;
      };
      DomHandler2.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_js_1.ProcessingInstruction(name, data);
        this.addNode(node);
      };
      DomHandler2.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") {
          this.callback(error, this.dom);
        } else if (error) {
          throw error;
        }
      };
      DomHandler2.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
          node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
          node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
          node.prev = previousSibling;
          previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
      };
      return DomHandler2;
    }();
    exports.DomHandler = DomHandler;
    exports.default = DomHandler;
  }
});

// http-url:https://unpkg.com/parse5-htmlparser2-tree-adapter@%5E7.0.0/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "http-url:https://unpkg.com/parse5-htmlparser2-tree-adapter@%5E7.0.0/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.adapter = exports.serializeDoctypeContent = void 0;
    var parse5_1 = require_cjs();
    var domhandler_1 = require_lib10();
    function createTextNode(value) {
      return new domhandler_1.Text(value);
    }
    function enquoteDoctypeId(id) {
      const quote = id.includes('"') ? "'" : '"';
      return quote + id + quote;
    }
    function serializeDoctypeContent(name, publicId, systemId) {
      let str = "!DOCTYPE ";
      if (name) {
        str += name;
      }
      if (publicId) {
        str += ` PUBLIC ${enquoteDoctypeId(publicId)}`;
      } else if (systemId) {
        str += " SYSTEM";
      }
      if (systemId) {
        str += ` ${enquoteDoctypeId(systemId)}`;
      }
      return str;
    }
    exports.serializeDoctypeContent = serializeDoctypeContent;
    exports.adapter = {
      isCommentNode: domhandler_1.isComment,
      isElementNode: domhandler_1.isTag,
      isTextNode: domhandler_1.isText,
      createDocument() {
        const node = new domhandler_1.Document([]);
        node["x-mode"] = parse5_1.html.DOCUMENT_MODE.NO_QUIRKS;
        return node;
      },
      createDocumentFragment() {
        return new domhandler_1.Document([]);
      },
      createElement(tagName, namespaceURI, attrs) {
        const attribs = /* @__PURE__ */ Object.create(null);
        const attribsNamespace = /* @__PURE__ */ Object.create(null);
        const attribsPrefix = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < attrs.length; i++) {
          const attrName = attrs[i].name;
          attribs[attrName] = attrs[i].value;
          attribsNamespace[attrName] = attrs[i].namespace;
          attribsPrefix[attrName] = attrs[i].prefix;
        }
        const node = new domhandler_1.Element(tagName, attribs, []);
        node.namespace = namespaceURI;
        node["x-attribsNamespace"] = attribsNamespace;
        node["x-attribsPrefix"] = attribsPrefix;
        return node;
      },
      createCommentNode(data) {
        return new domhandler_1.Comment(data);
      },
      appendChild(parentNode, newNode) {
        const prev = parentNode.children[parentNode.children.length - 1];
        if (prev) {
          prev.next = newNode;
          newNode.prev = prev;
        }
        parentNode.children.push(newNode);
        newNode.parent = parentNode;
      },
      insertBefore(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.children.indexOf(referenceNode);
        const { prev } = referenceNode;
        if (prev) {
          prev.next = newNode;
          newNode.prev = prev;
        }
        referenceNode.prev = newNode;
        newNode.next = referenceNode;
        parentNode.children.splice(insertionIdx, 0, newNode);
        newNode.parent = parentNode;
      },
      setTemplateContent(templateElement, contentElement) {
        exports.adapter.appendChild(templateElement, contentElement);
      },
      getTemplateContent(templateElement) {
        return templateElement.children[0];
      },
      setDocumentType(document, name, publicId, systemId) {
        const data = serializeDoctypeContent(name, publicId, systemId);
        let doctypeNode = document.children.find((node) => (0, domhandler_1.isDirective)(node) && node.name === "!doctype");
        if (doctypeNode) {
          doctypeNode.data = data !== null && data !== void 0 ? data : null;
        } else {
          doctypeNode = new domhandler_1.ProcessingInstruction("!doctype", data);
          exports.adapter.appendChild(document, doctypeNode);
        }
        doctypeNode["x-name"] = name !== null && name !== void 0 ? name : void 0;
        doctypeNode["x-publicId"] = publicId !== null && publicId !== void 0 ? publicId : void 0;
        doctypeNode["x-systemId"] = systemId !== null && systemId !== void 0 ? systemId : void 0;
      },
      setDocumentMode(document, mode) {
        document["x-mode"] = mode;
      },
      getDocumentMode(document) {
        return document["x-mode"];
      },
      detachNode(node) {
        if (node.parent) {
          const idx = node.parent.children.indexOf(node);
          const { prev, next } = node;
          node.prev = null;
          node.next = null;
          if (prev) {
            prev.next = next;
          }
          if (next) {
            next.prev = prev;
          }
          node.parent.children.splice(idx, 1);
          node.parent = null;
        }
      },
      insertText(parentNode, text) {
        const lastChild = parentNode.children[parentNode.children.length - 1];
        if (lastChild && (0, domhandler_1.isText)(lastChild)) {
          lastChild.data += text;
        } else {
          exports.adapter.appendChild(parentNode, createTextNode(text));
        }
      },
      insertTextBefore(parentNode, text, referenceNode) {
        const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
        if (prevNode && (0, domhandler_1.isText)(prevNode)) {
          prevNode.data += text;
        } else {
          exports.adapter.insertBefore(parentNode, createTextNode(text), referenceNode);
        }
      },
      adoptAttributes(recipient, attrs) {
        for (let i = 0; i < attrs.length; i++) {
          const attrName = attrs[i].name;
          if (typeof recipient.attribs[attrName] === "undefined") {
            recipient.attribs[attrName] = attrs[i].value;
            recipient["x-attribsNamespace"][attrName] = attrs[i].namespace;
            recipient["x-attribsPrefix"][attrName] = attrs[i].prefix;
          }
        }
      },
      getFirstChild(node) {
        return node.children[0];
      },
      getChildNodes(node) {
        return node.children;
      },
      getParentNode(node) {
        return node.parent;
      },
      getAttrList(element) {
        return element.attributes;
      },
      getTagName(element) {
        return element.name;
      },
      getNamespaceURI(element) {
        return element.namespace;
      },
      getTextNodeContent(textNode) {
        return textNode.data;
      },
      getCommentNodeContent(commentNode) {
        return commentNode.data;
      },
      getDocumentTypeNodeName(doctypeNode) {
        var _a;
        return (_a = doctypeNode["x-name"]) !== null && _a !== void 0 ? _a : "";
      },
      getDocumentTypeNodePublicId(doctypeNode) {
        var _a;
        return (_a = doctypeNode["x-publicId"]) !== null && _a !== void 0 ? _a : "";
      },
      getDocumentTypeNodeSystemId(doctypeNode) {
        var _a;
        return (_a = doctypeNode["x-systemId"]) !== null && _a !== void 0 ? _a : "";
      },
      isDocumentTypeNode(node) {
        return (0, domhandler_1.isDirective)(node) && node.name === "!doctype";
      },
      setNodeSourceCodeLocation(node, location) {
        if (location) {
          node.startIndex = location.startOffset;
          node.endIndex = location.endOffset;
        }
        node.sourceCodeLocation = location;
      },
      getNodeSourceCodeLocation(node) {
        return node.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(node, endLocation) {
        if (endLocation.endOffset != null)
          node.endIndex = endLocation.endOffset;
        node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
      }
    };
  }
});

// http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/parsers/parse5-adapter.js
var require_parse5_adapter = __commonJS({
  "http-url:https://unpkg.com/cheerio@1.0.0-rc.12/lib/parsers/parse5-adapter.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderWithParse5 = exports.parseWithParse5 = void 0;
    var domhandler_1 = require_lib6();
    var parse5_1 = require_cjs();
    var parse5_htmlparser2_tree_adapter_1 = require_cjs2();
    function parseWithParse5(content, options, isDocument, context) {
      var opts = {
        scriptingEnabled: typeof options.scriptingEnabled === "boolean" ? options.scriptingEnabled : true,
        treeAdapter: parse5_htmlparser2_tree_adapter_1.adapter,
        sourceCodeLocationInfo: options.sourceCodeLocationInfo
      };
      return isDocument ? (0, parse5_1.parse)(content, opts) : (0, parse5_1.parseFragment)(context, content, opts);
    }
    exports.parseWithParse5 = parseWithParse5;
    var renderOpts = { treeAdapter: parse5_htmlparser2_tree_adapter_1.adapter };
    function renderWithParse5(dom) {
      var _a;
      var nodes = "length" in dom ? dom : [dom];
      for (var index = 0; index < nodes.length; index += 1) {
        var node = nodes[index];
        if ((0, domhandler_1.isDocument)(node)) {
          (_a = Array.prototype.splice).call.apply(_a, __spreadArray([nodes, index, 1], node.children, false));
        }
      }
      var result = "";
      for (var index = 0; index < nodes.length; index += 1) {
        var node = nodes[index];
        result += (0, parse5_1.serializeOuter)(node, renderOpts);
      }
      return result;
    }
    exports.renderWithParse5 = renderWithParse5;
  }
});

// http-url:https://unpkg.com/htmlparser2@8.0.1/lib/Tokenizer.js
var require_Tokenizer = __commonJS({
  "http-url:https://unpkg.com/htmlparser2@8.0.1/lib/Tokenizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QuoteType = void 0;
    var decode_js_1 = require_decode2();
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
      CharCodes2[CharCodes2["NewLine"] = 10] = "NewLine";
      CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
      CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
      CharCodes2[CharCodes2["Space"] = 32] = "Space";
      CharCodes2[CharCodes2["ExclamationMark"] = 33] = "ExclamationMark";
      CharCodes2[CharCodes2["Num"] = 35] = "Num";
      CharCodes2[CharCodes2["Amp"] = 38] = "Amp";
      CharCodes2[CharCodes2["SingleQuote"] = 39] = "SingleQuote";
      CharCodes2[CharCodes2["DoubleQuote"] = 34] = "DoubleQuote";
      CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
      CharCodes2[CharCodes2["Slash"] = 47] = "Slash";
      CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
      CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
      CharCodes2[CharCodes2["Semi"] = 59] = "Semi";
      CharCodes2[CharCodes2["Lt"] = 60] = "Lt";
      CharCodes2[CharCodes2["Eq"] = 61] = "Eq";
      CharCodes2[CharCodes2["Gt"] = 62] = "Gt";
      CharCodes2[CharCodes2["Questionmark"] = 63] = "Questionmark";
      CharCodes2[CharCodes2["UpperA"] = 65] = "UpperA";
      CharCodes2[CharCodes2["LowerA"] = 97] = "LowerA";
      CharCodes2[CharCodes2["UpperF"] = 70] = "UpperF";
      CharCodes2[CharCodes2["LowerF"] = 102] = "LowerF";
      CharCodes2[CharCodes2["UpperZ"] = 90] = "UpperZ";
      CharCodes2[CharCodes2["LowerZ"] = 122] = "LowerZ";
      CharCodes2[CharCodes2["LowerX"] = 120] = "LowerX";
      CharCodes2[CharCodes2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
    })(CharCodes || (CharCodes = {}));
    var State;
    (function(State2) {
      State2[State2["Text"] = 1] = "Text";
      State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
      State2[State2["InTagName"] = 3] = "InTagName";
      State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
      State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
      State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
      State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
      State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
      State2[State2["InAttributeName"] = 9] = "InAttributeName";
      State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
      State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
      State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
      State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
      State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
      State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
      State2[State2["InDeclaration"] = 16] = "InDeclaration";
      State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
      State2[State2["BeforeComment"] = 18] = "BeforeComment";
      State2[State2["CDATASequence"] = 19] = "CDATASequence";
      State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
      State2[State2["InCommentLike"] = 21] = "InCommentLike";
      State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
      State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
      State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
      State2[State2["BeforeEntity"] = 25] = "BeforeEntity";
      State2[State2["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
      State2[State2["InNamedEntity"] = 27] = "InNamedEntity";
      State2[State2["InNumericEntity"] = 28] = "InNumericEntity";
      State2[State2["InHexEntity"] = 29] = "InHexEntity";
    })(State || (State = {}));
    function isWhitespace2(c) {
      return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
    }
    function isEndOfTagSection(c) {
      return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace2(c);
    }
    function isNumber(c) {
      return c >= CharCodes.Zero && c <= CharCodes.Nine;
    }
    function isASCIIAlpha(c) {
      return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
    }
    function isHexDigit(c) {
      return c >= CharCodes.UpperA && c <= CharCodes.UpperF || c >= CharCodes.LowerA && c <= CharCodes.LowerF;
    }
    var QuoteType;
    (function(QuoteType2) {
      QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
      QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
      QuoteType2[QuoteType2["Single"] = 2] = "Single";
      QuoteType2[QuoteType2["Double"] = 3] = "Double";
    })(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
    var Sequences = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    };
    var Tokenizer = function() {
      function Tokenizer2(_a, cbs) {
        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
        this.cbs = cbs;
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.isSpecial = false;
        this.running = true;
        this.offset = 0;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        this.entityResult = 0;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree;
      }
      Tokenizer2.prototype.reset = function() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = void 0;
        this.running = true;
        this.offset = 0;
      };
      Tokenizer2.prototype.write = function(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
      };
      Tokenizer2.prototype.end = function() {
        if (this.running)
          this.finish();
      };
      Tokenizer2.prototype.pause = function() {
        this.running = false;
      };
      Tokenizer2.prototype.resume = function() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
          this.parse();
        }
      };
      Tokenizer2.prototype.getIndex = function() {
        return this.index;
      };
      Tokenizer2.prototype.getSectionStart = function() {
        return this.sectionStart;
      };
      Tokenizer2.prototype.stateText = function(c) {
        if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
          if (this.index > this.sectionStart) {
            this.cbs.ontext(this.sectionStart, this.index);
          }
          this.state = State.BeforeTagName;
          this.sectionStart = this.index;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
          this.state = State.BeforeEntity;
        }
      };
      Tokenizer2.prototype.stateSpecialStartSequence = function(c) {
        var isEnd = this.sequenceIndex === this.currentSequence.length;
        var isMatch = isEnd ? isEndOfTagSection(c) : (c | 32) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
          this.isSpecial = false;
        } else if (!isEnd) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
      };
      Tokenizer2.prototype.stateInSpecialTag = function(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (c === CharCodes.Gt || isWhitespace2(c)) {
            var endOfText = this.index - this.currentSequence.length;
            if (this.sectionStart < endOfText) {
              var actualIndex = this.index;
              this.index = endOfText;
              this.cbs.ontext(this.sectionStart, endOfText);
              this.index = actualIndex;
            }
            this.isSpecial = false;
            this.sectionStart = endOfText + 2;
            this.stateInClosingTagName(c);
            return;
          }
          this.sequenceIndex = 0;
        }
        if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
          this.sequenceIndex += 1;
        } else if (this.sequenceIndex === 0) {
          if (this.currentSequence === Sequences.TitleEnd) {
            if (this.decodeEntities && c === CharCodes.Amp) {
              this.state = State.BeforeEntity;
            }
          } else if (this.fastForwardTo(CharCodes.Lt)) {
            this.sequenceIndex = 1;
          }
        } else {
          this.sequenceIndex = Number(c === CharCodes.Lt);
        }
      };
      Tokenizer2.prototype.stateCDATASequence = function(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
          if (++this.sequenceIndex === Sequences.Cdata.length) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CdataEnd;
            this.sequenceIndex = 0;
            this.sectionStart = this.index + 1;
          }
        } else {
          this.sequenceIndex = 0;
          this.state = State.InDeclaration;
          this.stateInDeclaration(c);
        }
      };
      Tokenizer2.prototype.fastForwardTo = function(c) {
        while (++this.index < this.buffer.length + this.offset) {
          if (this.buffer.charCodeAt(this.index - this.offset) === c) {
            return true;
          }
        }
        this.index = this.buffer.length + this.offset - 1;
        return false;
      };
      Tokenizer2.prototype.stateInCommentLike = function(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
          if (++this.sequenceIndex === this.currentSequence.length) {
            if (this.currentSequence === Sequences.CdataEnd) {
              this.cbs.oncdata(this.sectionStart, this.index, 2);
            } else {
              this.cbs.oncomment(this.sectionStart, this.index, 2);
            }
            this.sequenceIndex = 0;
            this.sectionStart = this.index + 1;
            this.state = State.Text;
          }
        } else if (this.sequenceIndex === 0) {
          if (this.fastForwardTo(this.currentSequence[0])) {
            this.sequenceIndex = 1;
          }
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
          this.sequenceIndex = 0;
        }
      };
      Tokenizer2.prototype.isTagStartChar = function(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
      };
      Tokenizer2.prototype.startSpecial = function(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
      };
      Tokenizer2.prototype.stateBeforeTagName = function(c) {
        if (c === CharCodes.ExclamationMark) {
          this.state = State.BeforeDeclaration;
          this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Questionmark) {
          this.state = State.InProcessingInstruction;
          this.sectionStart = this.index + 1;
        } else if (this.isTagStartChar(c)) {
          var lower = c | 32;
          this.sectionStart = this.index;
          if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
            this.startSpecial(Sequences.TitleEnd, 3);
          } else {
            this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
          }
        } else if (c === CharCodes.Slash) {
          this.state = State.BeforeClosingTagName;
        } else {
          this.state = State.Text;
          this.stateText(c);
        }
      };
      Tokenizer2.prototype.stateInTagName = function(c) {
        if (isEndOfTagSection(c)) {
          this.cbs.onopentagname(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c);
        }
      };
      Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
        if (isWhitespace2(c)) {
        } else if (c === CharCodes.Gt) {
          this.state = State.Text;
        } else {
          this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
          this.sectionStart = this.index;
        }
      };
      Tokenizer2.prototype.stateInClosingTagName = function(c) {
        if (c === CharCodes.Gt || isWhitespace2(c)) {
          this.cbs.onclosetag(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.state = State.AfterClosingTagName;
          this.stateAfterClosingTagName(c);
        }
      };
      Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
        if (c === CharCodes.Gt) {
          this.cbs.onopentagend(this.index);
          if (this.isSpecial) {
            this.state = State.InSpecialTag;
            this.sequenceIndex = 0;
          } else {
            this.state = State.Text;
          }
          this.baseState = this.state;
          this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Slash) {
          this.state = State.InSelfClosingTag;
        } else if (!isWhitespace2(c)) {
          this.state = State.InAttributeName;
          this.sectionStart = this.index;
        }
      };
      Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
        if (c === CharCodes.Gt) {
          this.cbs.onselfclosingtag(this.index);
          this.state = State.Text;
          this.baseState = State.Text;
          this.sectionStart = this.index + 1;
          this.isSpecial = false;
        } else if (!isWhitespace2(c)) {
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c);
        }
      };
      Tokenizer2.prototype.stateInAttributeName = function(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
          this.cbs.onattribname(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.state = State.AfterAttributeName;
          this.stateAfterAttributeName(c);
        }
      };
      Tokenizer2.prototype.stateAfterAttributeName = function(c) {
        if (c === CharCodes.Eq) {
          this.state = State.BeforeAttributeValue;
        } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
          this.cbs.onattribend(QuoteType.NoValue, this.index);
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c);
        } else if (!isWhitespace2(c)) {
          this.cbs.onattribend(QuoteType.NoValue, this.index);
          this.state = State.InAttributeName;
          this.sectionStart = this.index;
        }
      };
      Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
        if (c === CharCodes.DoubleQuote) {
          this.state = State.InAttributeValueDq;
          this.sectionStart = this.index + 1;
        } else if (c === CharCodes.SingleQuote) {
          this.state = State.InAttributeValueSq;
          this.sectionStart = this.index + 1;
        } else if (!isWhitespace2(c)) {
          this.sectionStart = this.index;
          this.state = State.InAttributeValueNq;
          this.stateInAttributeValueNoQuotes(c);
        }
      };
      Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
          this.state = State.BeforeAttributeName;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
          this.baseState = this.state;
          this.state = State.BeforeEntity;
        }
      };
      Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
      };
      Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
      };
      Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
        if (isWhitespace2(c) || c === CharCodes.Gt) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.cbs.onattribend(QuoteType.Unquoted, this.index);
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c);
        } else if (this.decodeEntities && c === CharCodes.Amp) {
          this.baseState = this.state;
          this.state = State.BeforeEntity;
        }
      };
      Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
        if (c === CharCodes.OpeningSquareBracket) {
          this.state = State.CDATASequence;
          this.sequenceIndex = 0;
        } else {
          this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
        }
      };
      Tokenizer2.prototype.stateInDeclaration = function(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
          this.cbs.ondeclaration(this.sectionStart, this.index);
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      };
      Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
          this.cbs.onprocessinginstruction(this.sectionStart, this.index);
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeComment = function(c) {
        if (c === CharCodes.Dash) {
          this.state = State.InCommentLike;
          this.currentSequence = Sequences.CommentEnd;
          this.sequenceIndex = 2;
          this.sectionStart = this.index + 1;
        } else {
          this.state = State.InDeclaration;
        }
      };
      Tokenizer2.prototype.stateInSpecialComment = function(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
          this.cbs.oncomment(this.sectionStart, this.index, 0);
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
        var lower = c | 32;
        if (lower === Sequences.ScriptEnd[3]) {
          this.startSpecial(Sequences.ScriptEnd, 4);
        } else if (lower === Sequences.StyleEnd[3]) {
          this.startSpecial(Sequences.StyleEnd, 4);
        } else {
          this.state = State.InTagName;
          this.stateInTagName(c);
        }
      };
      Tokenizer2.prototype.stateBeforeEntity = function(c) {
        this.entityExcess = 1;
        this.entityResult = 0;
        if (c === CharCodes.Num) {
          this.state = State.BeforeNumericEntity;
        } else if (c === CharCodes.Amp) {
        } else {
          this.trieIndex = 0;
          this.trieCurrent = this.entityTrie[0];
          this.state = State.InNamedEntity;
          this.stateInNamedEntity(c);
        }
      };
      Tokenizer2.prototype.stateInNamedEntity = function(c) {
        this.entityExcess += 1;
        this.trieIndex = (0, decode_js_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
          this.emitNamedEntity();
          this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var masked = this.trieCurrent & decode_js_1.BinTrieFlags.VALUE_LENGTH;
        if (masked) {
          var valueLength = (masked >> 14) - 1;
          if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
            this.trieIndex += valueLength;
          } else {
            var entityStart = this.index - this.entityExcess + 1;
            if (entityStart > this.sectionStart) {
              this.emitPartial(this.sectionStart, entityStart);
            }
            this.entityResult = this.trieIndex;
            this.trieIndex += valueLength;
            this.entityExcess = 0;
            this.sectionStart = this.index + 1;
            if (valueLength === 0) {
              this.emitNamedEntity();
            }
          }
        }
      };
      Tokenizer2.prototype.emitNamedEntity = function() {
        this.state = this.baseState;
        if (this.entityResult === 0) {
          return;
        }
        var valueLength = (this.entityTrie[this.entityResult] & decode_js_1.BinTrieFlags.VALUE_LENGTH) >> 14;
        switch (valueLength) {
          case 1:
            this.emitCodePoint(this.entityTrie[this.entityResult] & ~decode_js_1.BinTrieFlags.VALUE_LENGTH);
            break;
          case 2:
            this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
            break;
          case 3: {
            this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
            this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      };
      Tokenizer2.prototype.stateBeforeNumericEntity = function(c) {
        if ((c | 32) === CharCodes.LowerX) {
          this.entityExcess++;
          this.state = State.InHexEntity;
        } else {
          this.state = State.InNumericEntity;
          this.stateInNumericEntity(c);
        }
      };
      Tokenizer2.prototype.emitNumericEntity = function(strict) {
        var entityStart = this.index - this.entityExcess - 1;
        var numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
        if (numberStart !== this.index) {
          if (entityStart > this.sectionStart) {
            this.emitPartial(this.sectionStart, entityStart);
          }
          this.sectionStart = this.index + Number(strict);
          this.emitCodePoint((0, decode_js_1.replaceCodePoint)(this.entityResult));
        }
        this.state = this.baseState;
      };
      Tokenizer2.prototype.stateInNumericEntity = function(c) {
        if (c === CharCodes.Semi) {
          this.emitNumericEntity(true);
        } else if (isNumber(c)) {
          this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
          this.entityExcess++;
        } else {
          if (this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
          } else {
            this.state = this.baseState;
          }
          this.index--;
        }
      };
      Tokenizer2.prototype.stateInHexEntity = function(c) {
        if (c === CharCodes.Semi) {
          this.emitNumericEntity(true);
        } else if (isNumber(c)) {
          this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
          this.entityExcess++;
        } else if (isHexDigit(c)) {
          this.entityResult = this.entityResult * 16 + ((c | 32) - CharCodes.LowerA + 10);
          this.entityExcess++;
        } else {
          if (this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
          } else {
            this.state = this.baseState;
          }
          this.index--;
        }
      };
      Tokenizer2.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
      };
      Tokenizer2.prototype.cleanup = function() {
        if (this.running && this.sectionStart !== this.index) {
          if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
            this.cbs.ontext(this.sectionStart, this.index);
            this.sectionStart = this.index;
          } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = this.index;
          }
        }
      };
      Tokenizer2.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      };
      Tokenizer2.prototype.parse = function() {
        while (this.shouldContinue()) {
          var c = this.buffer.charCodeAt(this.index - this.offset);
          if (this.state === State.Text) {
            this.stateText(c);
          } else if (this.state === State.SpecialStartSequence) {
            this.stateSpecialStartSequence(c);
          } else if (this.state === State.InSpecialTag) {
            this.stateInSpecialTag(c);
          } else if (this.state === State.CDATASequence) {
            this.stateCDATASequence(c);
          } else if (this.state === State.InAttributeValueDq) {
            this.stateInAttributeValueDoubleQuotes(c);
          } else if (this.state === State.InAttributeName) {
            this.stateInAttributeName(c);
          } else if (this.state === State.InCommentLike) {
            this.stateInCommentLike(c);
          } else if (this.state === State.InSpecialComment) {
            this.stateInSpecialComment(c);
          } else if (this.state === State.BeforeAttributeName) {
            this.stateBeforeAttributeName(c);
          } else if (this.state === State.InTagName) {
            this.stateInTagName(c);
          } else if (this.state === State.InClosingTagName) {
            this.stateInClosingTagName(c);
          } else if (this.state === State.BeforeTagName) {
            this.stateBeforeTagName(c);
          } else if (this.state === State.AfterAttributeName) {
            this.stateAfterAttributeName(c);
          } else if (this.state === State.InAttributeValueSq) {
            this.stateInAttributeValueSingleQuotes(c);
          } else if (this.state === State.BeforeAttributeValue) {
            this.stateBeforeAttributeValue(c);
          } else if (this.state === State.BeforeClosingTagName) {
            this.stateBeforeClosingTagName(c);
          } else if (this.state === State.AfterClosingTagName) {
            this.stateAfterClosingTagName(c);
          } else if (this.state === State.BeforeSpecialS) {
            this.stateBeforeSpecialS(c);
          } else if (this.state === State.InAttributeValueNq) {
            this.stateInAttributeValueNoQuotes(c);
          } else if (this.state === State.InSelfClosingTag) {
            this.stateInSelfClosingTag(c);
          } else if (this.state === State.InDeclaration) {
            this.stateInDeclaration(c);
          } else if (this.state === State.BeforeDeclaration) {
            this.stateBeforeDeclaration(c);
          } else if (this.state === State.BeforeComment) {
            this.stateBeforeComment(c);
          } else if (this.state === State.InProcessingInstruction) {
            this.stateInProcessingInstruction(c);
          } else if (this.state === State.InNamedEntity) {
            this.stateInNamedEntity(c);
          } else if (this.state === State.BeforeEntity) {
            this.stateBeforeEntity(c);
          } else if (this.state === State.InHexEntity) {
            this.stateInHexEntity(c);
          } else if (this.state === State.InNumericEntity) {
            this.stateInNumericEntity(c);
          } else {
            this.stateBeforeNumericEntity(c);
          }
          this.index++;
        }
        this.cleanup();
      };
      Tokenizer2.prototype.finish = function() {
        if (this.state === State.InNamedEntity) {
          this.emitNamedEntity();
        }
        if (this.sectionStart < this.index) {
          this.handleTrailingData();
        }
        this.cbs.onend();
      };
      Tokenizer2.prototype.handleTrailingData = function() {
        var endIndex = this.buffer.length + this.offset;
        if (this.state === State.InCommentLike) {
          if (this.currentSequence === Sequences.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, endIndex, 0);
          } else {
            this.cbs.oncomment(this.sectionStart, endIndex, 0);
          }
        } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
        } else {
          this.cbs.ontext(this.sectionStart, endIndex);
        }
      };
      Tokenizer2.prototype.emitPartial = function(start, endIndex) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
          this.cbs.onattribdata(start, endIndex);
        } else {
          this.cbs.ontext(start, endIndex);
        }
      };
      Tokenizer2.prototype.emitCodePoint = function(cp) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
          this.cbs.onattribentity(cp);
        } else {
          this.cbs.ontextentity(cp);
        }
      };
      return Tokenizer2;
    }();
    exports.default = Tokenizer;
  }
});

// http-url:https://unpkg.com/htmlparser2@8.0.1/lib/Parser.js
var require_Parser = __commonJS({
  "http-url:https://unpkg.com/htmlparser2@8.0.1/lib/Parser.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    var Tokenizer_js_1 = __importStar(require_Tokenizer());
    var decode_js_1 = require_decode2();
    var formTags = /* @__PURE__ */ new Set([
      "input",
      "option",
      "optgroup",
      "select",
      "button",
      "datalist",
      "textarea"
    ]);
    var pTag = /* @__PURE__ */ new Set(["p"]);
    var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
    var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
    var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
    var openImpliesClose = /* @__PURE__ */ new Map([
      ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
      ["th", /* @__PURE__ */ new Set(["th"])],
      ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
      ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
      ["li", /* @__PURE__ */ new Set(["li"])],
      ["p", pTag],
      ["h1", pTag],
      ["h2", pTag],
      ["h3", pTag],
      ["h4", pTag],
      ["h5", pTag],
      ["h6", pTag],
      ["select", formTags],
      ["input", formTags],
      ["output", formTags],
      ["button", formTags],
      ["datalist", formTags],
      ["textarea", formTags],
      ["option", /* @__PURE__ */ new Set(["option"])],
      ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
      ["dd", ddtTags],
      ["dt", ddtTags],
      ["address", pTag],
      ["article", pTag],
      ["aside", pTag],
      ["blockquote", pTag],
      ["details", pTag],
      ["div", pTag],
      ["dl", pTag],
      ["fieldset", pTag],
      ["figcaption", pTag],
      ["figure", pTag],
      ["footer", pTag],
      ["form", pTag],
      ["header", pTag],
      ["hr", pTag],
      ["main", pTag],
      ["nav", pTag],
      ["ol", pTag],
      ["pre", pTag],
      ["section", pTag],
      ["table", pTag],
      ["ul", pTag],
      ["rt", rtpTags],
      ["rp", rtpTags],
      ["tbody", tableSectionTags],
      ["tfoot", tableSectionTags]
    ]);
    var voidElements = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
    var htmlIntegrationElements = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignobject",
      "desc",
      "title"
    ]);
    var reNameEnd = /\s|\//;
    var Parser = function() {
      function Parser2(cbs, options) {
        if (options === void 0) {
          options = {};
        }
        var _a, _b, _c, _d, _e;
        this.options = options;
        this.startIndex = 0;
        this.endIndex = 0;
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
      }
      Parser2.prototype.ontext = function(start, endIndex) {
        var _a, _b;
        var data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
      };
      Parser2.prototype.ontextentity = function(cp) {
        var _a, _b;
        var idx = this.tokenizer.getSectionStart();
        this.endIndex = idx - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
        this.startIndex = idx;
      };
      Parser2.prototype.isVoidElement = function(name) {
        return !this.options.xmlMode && voidElements.has(name);
      };
      Parser2.prototype.onopentagname = function(start, endIndex) {
        this.endIndex = endIndex;
        var name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        this.emitOpenTag(name);
      };
      Parser2.prototype.emitOpenTag = function(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
          while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
            var el = this.stack.pop();
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, el, true);
          }
        }
        if (!this.isVoidElement(name)) {
          this.stack.push(name);
          if (foreignContextElements.has(name)) {
            this.foreignContext.push(true);
          } else if (htmlIntegrationElements.has(name)) {
            this.foreignContext.push(false);
          }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
          this.attribs = {};
      };
      Parser2.prototype.endOpenTag = function(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
          (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
          this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
          this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
      };
      Parser2.prototype.onopentagend = function(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        this.startIndex = endIndex + 1;
      };
      Parser2.prototype.onclosetag = function(start, endIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = endIndex;
        var name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
          this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
          var pos = this.stack.lastIndexOf(name);
          if (pos !== -1) {
            if (this.cbs.onclosetag) {
              var count = this.stack.length - pos;
              while (count--) {
                this.cbs.onclosetag(this.stack.pop(), count !== 0);
              }
            } else
              this.stack.length = pos;
          } else if (!this.options.xmlMode && name === "p") {
            this.emitOpenTag("p");
            this.closeCurrentTag(true);
          }
        } else if (!this.options.xmlMode && name === "br") {
          (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
          (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
          (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
        }
        this.startIndex = endIndex + 1;
      };
      Parser2.prototype.onselfclosingtag = function(endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
          this.closeCurrentTag(false);
          this.startIndex = endIndex + 1;
        } else {
          this.onopentagend(endIndex);
        }
      };
      Parser2.prototype.closeCurrentTag = function(isOpenImplied) {
        var _a, _b;
        var name = this.tagname;
        this.endOpenTag(isOpenImplied);
        if (this.stack[this.stack.length - 1] === name) {
          (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
          this.stack.pop();
        }
      };
      Parser2.prototype.onattribname = function(start, endIndex) {
        this.startIndex = start;
        var name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
      };
      Parser2.prototype.onattribdata = function(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
      };
      Parser2.prototype.onattribentity = function(cp) {
        this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
      };
      Parser2.prototype.onattribend = function(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double ? '"' : quote === Tokenizer_js_1.QuoteType.Single ? "'" : quote === Tokenizer_js_1.QuoteType.NoValue ? void 0 : null);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
          this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
      };
      Parser2.prototype.getInstructionName = function(value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        return name;
      };
      Parser2.prototype.ondeclaration = function(start, endIndex) {
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
          var name = this.getInstructionName(value);
          this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
        }
        this.startIndex = endIndex + 1;
      };
      Parser2.prototype.onprocessinginstruction = function(start, endIndex) {
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
          var name = this.getInstructionName(value);
          this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
        }
        this.startIndex = endIndex + 1;
      };
      Parser2.prototype.oncomment = function(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.startIndex = endIndex + 1;
      };
      Parser2.prototype.oncdata = function(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
          (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
          (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
          (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        } else {
          (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
          (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        this.startIndex = endIndex + 1;
      };
      Parser2.prototype.onend = function() {
        var _a, _b;
        if (this.cbs.onclosetag) {
          this.endIndex = this.startIndex;
          for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
            ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      Parser2.prototype.reset = function() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
      };
      Parser2.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
      };
      Parser2.prototype.getSlice = function(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
          this.shiftBuffer();
        }
        var str = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
          this.shiftBuffer();
          str += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return str;
      };
      Parser2.prototype.shiftBuffer = function() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
      };
      Parser2.prototype.write = function(chunk) {
        var _a, _b;
        if (this.ended) {
          (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
          return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
          this.tokenizer.write(chunk);
          this.writeIndex++;
        }
      };
      Parser2.prototype.end = function(chunk) {
        var _a, _b;
        if (this.ended) {
          (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, Error(".end() after done!"));
          return;
        }
        if (chunk)
          this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
      };
      Parser2.prototype.pause = function() {
        this.tokenizer.pause();
      };
      Parser2.prototype.resume = function() {
        this.tokenizer.resume();
        while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
          this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
          this.tokenizer.end();
      };
      Parser2.prototype.parseChunk = function(chunk) {
        this.write(chunk);
      };
      Parser2.prototype.done = function(chunk) {
        this.end(chunk);
      };
      return Parser2;
    }();
    exports.Parser = Parser;
  }
});

// http-url:https://unpkg.com/htmlparser2@%5E8.0.1/lib/index.js
var require_lib11 = __commonJS({
  "http-url:https://unpkg.com/htmlparser2@%5E8.0.1/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHandler = exports.DomUtils = exports.parseFeed = exports.getFeed = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
    var Parser_js_1 = require_Parser();
    Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
      return Parser_js_1.Parser;
    } });
    var domhandler_1 = require_lib10();
    Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
      return domhandler_1.DomHandler;
    } });
    Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
      return domhandler_1.DomHandler;
    } });
    function parseDocument(data, options) {
      var handler = new domhandler_1.DomHandler(void 0, options);
      new Parser_js_1.Parser(handler, options).end(data);
      return handler.root;
    }
    exports.parseDocument = parseDocument;
    function parseDOM(data, options) {
      return parseDocument(data, options).children;
    }
    exports.parseDOM = parseDOM;
    function createDomStream(cb, options, elementCb) {
      var handler = new domhandler_1.DomHandler(cb, options, elementCb);
      return new Parser_js_1.Parser(handler, options);
    }
    exports.createDomStream = createDomStream;
    var Tokenizer_js_1 = require_Tokenizer();
    Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
      return __importDefault(Tokenizer_js_1).default;
    } });
    var ElementType = __importStar(require_lib());
    exports.ElementType = ElementType;
    var domutils_1 = require_lib5();
    Object.defineProperty(exports, "getFeed", { enumerable: true, get: function() {
      return domutils_1.getFeed;
    } });
    function parseFeed(feed, options) {
      if (options === void 0) {
        options = { xmlMode: true };
      }
      return (0, domutils_1.getFeed)(parseDOM(feed, options));
    }
    exports.parseFeed = parseFeed;
    exports.DomUtils = __importStar(require_lib5());
  }
});

// http-url:https://unpkg.com/cheerio@%5E1.0.0-rc.3/lib/index.js
var require_lib12 = __commonJS({
  "http-url:https://unpkg.com/cheerio@%5E1.0.0-rc.3/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.root = exports.parseHTML = exports.merge = exports.contains = exports.text = exports.xml = exports.html = exports.load = void 0;
    __exportStar(require_types(), exports);
    var load_js_1 = require_load();
    var parse_js_1 = require_parse2();
    var parse5_adapter_js_1 = require_parse5_adapter();
    var dom_serializer_1 = __importDefault(require_lib4());
    var htmlparser2_1 = require_lib11();
    var parse2 = (0, parse_js_1.getParse)(function(content, options, isDocument, context) {
      return options.xmlMode || options._useHtmlParser2 ? (0, htmlparser2_1.parseDocument)(content, options) : (0, parse5_adapter_js_1.parseWithParse5)(content, options, isDocument, context);
    });
    exports.load = (0, load_js_1.getLoad)(parse2, function(dom, options) {
      return options.xmlMode || options._useHtmlParser2 ? (0, dom_serializer_1.default)(dom, options) : (0, parse5_adapter_js_1.renderWithParse5)(dom);
    });
    exports.default = (0, exports.load)([]);
    var static_js_1 = require_static();
    Object.defineProperty(exports, "html", { enumerable: true, get: function() {
      return static_js_1.html;
    } });
    Object.defineProperty(exports, "xml", { enumerable: true, get: function() {
      return static_js_1.xml;
    } });
    Object.defineProperty(exports, "text", { enumerable: true, get: function() {
      return static_js_1.text;
    } });
    var staticMethods = __importStar(require_static());
    exports.contains = staticMethods.contains;
    exports.merge = staticMethods.merge;
    exports.parseHTML = staticMethods.parseHTML;
    exports.root = staticMethods.root;
  }
});

// http-url:https://unpkg.com/contentful-html-to-richtext@latest/index.js
var require_contentful_html_to_richtext_latest = __commonJS({
  "http-url:https://unpkg.com/contentful-html-to-richtext@latest/index.js"(exports) {
    "use strict";
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k))
            result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var cheerio = __importStar(require_lib12());
    function getNodeType(tag) {
      switch (tag) {
        case "h1":
          return "heading-1";
        case "h2":
          return "heading-2";
        case "h3":
          return "heading-3";
        case "h4":
          return "heading-4";
        case "h5":
          return "heading-5";
        case "h6":
          return "heading-6";
        case "p":
        case "div":
          return "paragraph";
        case "ul":
          return "unordered-list";
        case "ol":
          return "ordered-list";
        case "li":
          return "list-item";
        case "a":
          return "hyperlink";
        case "span":
        case "b":
        case "i":
        case null:
          return "text";
        default:
          return "text";
      }
    }
    function isHeaderType(type) {
      switch (type) {
        case "heading-1":
        case "heading-2":
        case "heading-3":
        case "heading-4":
        case "heading-5":
        case "heading-6":
          return true;
        default:
          return false;
      }
    }
    function isListType(type) {
      switch (type) {
        case "ordered-list":
        case "unordered-list":
          return true;
        default:
          return false;
      }
    }
    function generateHyperlink(root, node, parentNode, parentMarks) {
      let _nextMark = parentMarks ? [...parentMarks] : [];
      let httpNode = new ContentContentfulNode("hyperlink");
      httpNode.content.push(...generateDataForSubnodes(root, node.children, parentNode, _nextMark));
      httpNode.data = new UriData(node.attribs["href"]);
      return httpNode;
    }
    function getMarksFromNode(node) {
      let marks = [];
      switch (node.tagName) {
        case "b":
          marks.push(new ContentfulMark("bold"));
          break;
        case "i":
          marks.push(new ContentfulMark("italic"));
          break;
        case "u":
          marks.push(new ContentfulMark("italic"));
          break;
        case "code":
          marks.push(new ContentfulMark("code"));
          break;
      }
      return marks;
    }
    function generateDataForSubnodes(root, nodes, parentNode, parentMarks) {
      let leafNodes = [];
      nodes.forEach((node) => {
        let _nextMark = parentMarks ? [...parentMarks] : [];
        let type = getNodeType(node.tagName);
        _nextMark.push(...getMarksFromNode(node));
        if (type == "text" && !isListType(parentNode.nodeType)) {
          if (node.tagName) {
            leafNodes.push(...generateDataForSubnodes(root, node.children, parentNode, _nextMark));
          } else {
            let leafNode = new LeafContentfulNode(node.data || "");
            leafNode.marks = _nextMark;
            leafNodes.push(leafNode);
          }
        } else if (type == "hyperlink") {
          leafNodes.push(generateHyperlink(root, node, parentNode, _nextMark));
        } else if (type == "list-item") {
          let listItem = new ContentContentfulNode("list-item");
          node.children.forEach((node2) => {
            generateDataForNode(listItem, node2);
          });
          leafNodes.push(listItem);
        } else {
          generateDataForNode(root, node);
        }
      });
      return leafNodes;
    }
    function generateDataForNode(root, node) {
      let nodeType = getNodeType(node.tagName);
      let cfNode = null;
      if (isHeaderType(nodeType) || nodeType == "paragraph") {
        cfNode = new ContentContentfulNode(nodeType);
        cfNode.content.push(...generateDataForSubnodes(root, node.children, cfNode));
      } else if (isListType(nodeType)) {
        cfNode = new ContentContentfulNode(nodeType);
        cfNode.content.push(...generateDataForSubnodes(root, node.children, cfNode));
      } else if (nodeType == "text") {
        cfNode = new ContentContentfulNode("paragraph");
        if (!node.tagName) {
          cfNode.content.push(new LeafContentfulNode(node.data || ""));
        } else {
          cfNode.content.push(...generateDataForSubnodes(root, node.children, cfNode));
        }
      } else if (nodeType == "hyperlink") {
        cfNode = new ContentContentfulNode("paragraph");
        cfNode.content.push(generateHyperlink(root, node, cfNode));
      }
      if (cfNode)
        root.content.push(cfNode);
      return cfNode;
    }
    var BaseContentfulNode = class {
      constructor(nodeType = "paragraph") {
        this.nodeType = nodeType;
        this.data = new BaseData();
      }
    };
    exports.BaseContentfulNode = BaseContentfulNode;
    var ContentContentfulNode = class extends BaseContentfulNode {
      constructor(nodeType = "paragraph") {
        super(nodeType);
        this.nodeType = nodeType;
        this.content = [];
      }
    };
    exports.ContentContentfulNode = ContentContentfulNode;
    var RootContentfulNode = class extends ContentContentfulNode {
      constructor() {
        super("document");
      }
    };
    exports.RootContentfulNode = RootContentfulNode;
    var LeafContentfulNode = class extends BaseContentfulNode {
      constructor(value, nodeType = "text") {
        super(nodeType);
        this.value = value;
        this.nodeType = nodeType;
        this.marks = [];
      }
      addMark(mark) {
        this.marks.push(new ContentfulMark(mark));
      }
    };
    exports.LeafContentfulNode = LeafContentfulNode;
    var BaseData = class {
    };
    exports.BaseData = BaseData;
    var UriData = class extends BaseData {
      constructor(uri = "") {
        super();
        this.uri = uri;
      }
    };
    exports.UriData = UriData;
    var ContentfulMark = class {
      constructor(type = "bold") {
        this.type = type;
      }
    };
    exports.ContentfulMark = ContentfulMark;
    function generateRichText2(html) {
      let document = cheerio.parseHTML(html);
      let rich = new RootContentfulNode();
      document.forEach((doc) => {
        generateDataForNode(rich, doc);
      });
      return rich;
    }
    exports.generateRichText = generateRichText2;
  }
});

// http-url:https://unpkg.com/@contentful/rich-text-html-renderer@latest/dist/rich-text-html-renderer.es5.js
var require_rich_text_html_renderer_es5 = __commonJS({
  "http-url:https://unpkg.com/@contentful/rich-text-html-renderer@latest/dist/rich-text-html-renderer.es5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var matchHtmlRegExp = /["'&<>]/;
    var escapeHtml_1 = escapeHtml;
    function escapeHtml(string) {
      var str = "" + string;
      var match = matchHtmlRegExp.exec(str);
      if (!match) {
        return str;
      }
      var escape;
      var html = "";
      var index = 0;
      var lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escape = "&quot;";
            break;
          case 38:
            escape = "&amp;";
            break;
          case 39:
            escape = "&#39;";
            break;
          case 60:
            escape = "&lt;";
            break;
          case 62:
            escape = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function unwrapExports(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    function createCommonjsModule(fn, module2) {
      return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
    }
    var blocks = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BLOCKS = void 0;
      var BLOCKS;
      (function(BLOCKS2) {
        BLOCKS2["DOCUMENT"] = "document";
        BLOCKS2["PARAGRAPH"] = "paragraph";
        BLOCKS2["HEADING_1"] = "heading-1";
        BLOCKS2["HEADING_2"] = "heading-2";
        BLOCKS2["HEADING_3"] = "heading-3";
        BLOCKS2["HEADING_4"] = "heading-4";
        BLOCKS2["HEADING_5"] = "heading-5";
        BLOCKS2["HEADING_6"] = "heading-6";
        BLOCKS2["OL_LIST"] = "ordered-list";
        BLOCKS2["UL_LIST"] = "unordered-list";
        BLOCKS2["LIST_ITEM"] = "list-item";
        BLOCKS2["HR"] = "hr";
        BLOCKS2["QUOTE"] = "blockquote";
        BLOCKS2["EMBEDDED_ENTRY"] = "embedded-entry-block";
        BLOCKS2["EMBEDDED_ASSET"] = "embedded-asset-block";
        BLOCKS2["TABLE"] = "table";
        BLOCKS2["TABLE_ROW"] = "table-row";
        BLOCKS2["TABLE_CELL"] = "table-cell";
        BLOCKS2["TABLE_HEADER_CELL"] = "table-header-cell";
      })(BLOCKS = exports2.BLOCKS || (exports2.BLOCKS = {}));
    });
    unwrapExports(blocks);
    var blocks_1 = blocks.BLOCKS;
    var inlines = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.INLINES = void 0;
      var INLINES;
      (function(INLINES2) {
        INLINES2["HYPERLINK"] = "hyperlink";
        INLINES2["ENTRY_HYPERLINK"] = "entry-hyperlink";
        INLINES2["ASSET_HYPERLINK"] = "asset-hyperlink";
        INLINES2["EMBEDDED_ENTRY"] = "embedded-entry-inline";
      })(INLINES = exports2.INLINES || (exports2.INLINES = {}));
    });
    unwrapExports(inlines);
    var inlines_1 = inlines.INLINES;
    var marks = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var MARKS;
      (function(MARKS2) {
        MARKS2["BOLD"] = "bold";
        MARKS2["ITALIC"] = "italic";
        MARKS2["UNDERLINE"] = "underline";
        MARKS2["CODE"] = "code";
      })(MARKS || (MARKS = {}));
      exports2.default = MARKS;
    });
    unwrapExports(marks);
    var schemaConstraints = createCommonjsModule(function(module2, exports2) {
      var __spreadArray = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var _a2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.V1_NODE_TYPES = exports2.TEXT_CONTAINERS = exports2.HEADINGS = exports2.CONTAINERS = exports2.VOID_BLOCKS = exports2.TABLE_BLOCKS = exports2.LIST_ITEM_BLOCKS = exports2.TOP_LEVEL_BLOCKS = void 0;
      exports2.TOP_LEVEL_BLOCKS = [
        blocks.BLOCKS.PARAGRAPH,
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6,
        blocks.BLOCKS.OL_LIST,
        blocks.BLOCKS.UL_LIST,
        blocks.BLOCKS.HR,
        blocks.BLOCKS.QUOTE,
        blocks.BLOCKS.EMBEDDED_ENTRY,
        blocks.BLOCKS.EMBEDDED_ASSET,
        blocks.BLOCKS.TABLE
      ];
      exports2.LIST_ITEM_BLOCKS = [
        blocks.BLOCKS.PARAGRAPH,
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6,
        blocks.BLOCKS.OL_LIST,
        blocks.BLOCKS.UL_LIST,
        blocks.BLOCKS.HR,
        blocks.BLOCKS.QUOTE,
        blocks.BLOCKS.EMBEDDED_ENTRY,
        blocks.BLOCKS.EMBEDDED_ASSET
      ];
      exports2.TABLE_BLOCKS = [
        blocks.BLOCKS.TABLE,
        blocks.BLOCKS.TABLE_ROW,
        blocks.BLOCKS.TABLE_CELL,
        blocks.BLOCKS.TABLE_HEADER_CELL
      ];
      exports2.VOID_BLOCKS = [blocks.BLOCKS.HR, blocks.BLOCKS.EMBEDDED_ENTRY, blocks.BLOCKS.EMBEDDED_ASSET];
      exports2.CONTAINERS = (_a2 = {}, _a2[blocks.BLOCKS.OL_LIST] = [blocks.BLOCKS.LIST_ITEM], _a2[blocks.BLOCKS.UL_LIST] = [blocks.BLOCKS.LIST_ITEM], _a2[blocks.BLOCKS.LIST_ITEM] = exports2.LIST_ITEM_BLOCKS, _a2[blocks.BLOCKS.QUOTE] = [blocks.BLOCKS.PARAGRAPH], _a2[blocks.BLOCKS.TABLE] = [blocks.BLOCKS.TABLE_ROW], _a2[blocks.BLOCKS.TABLE_ROW] = [blocks.BLOCKS.TABLE_CELL, blocks.BLOCKS.TABLE_HEADER_CELL], _a2[blocks.BLOCKS.TABLE_CELL] = [blocks.BLOCKS.PARAGRAPH], _a2[blocks.BLOCKS.TABLE_HEADER_CELL] = [blocks.BLOCKS.PARAGRAPH], _a2);
      exports2.HEADINGS = [
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6
      ];
      exports2.TEXT_CONTAINERS = __spreadArray([blocks.BLOCKS.PARAGRAPH], exports2.HEADINGS, true);
      exports2.V1_NODE_TYPES = [
        blocks.BLOCKS.DOCUMENT,
        blocks.BLOCKS.PARAGRAPH,
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6,
        blocks.BLOCKS.OL_LIST,
        blocks.BLOCKS.UL_LIST,
        blocks.BLOCKS.LIST_ITEM,
        blocks.BLOCKS.HR,
        blocks.BLOCKS.QUOTE,
        blocks.BLOCKS.EMBEDDED_ENTRY,
        blocks.BLOCKS.EMBEDDED_ASSET,
        inlines.INLINES.HYPERLINK,
        inlines.INLINES.ENTRY_HYPERLINK,
        inlines.INLINES.ASSET_HYPERLINK,
        inlines.INLINES.EMBEDDED_ENTRY,
        "text"
      ];
    });
    unwrapExports(schemaConstraints);
    var schemaConstraints_1 = schemaConstraints.V1_NODE_TYPES;
    var schemaConstraints_2 = schemaConstraints.TEXT_CONTAINERS;
    var schemaConstraints_3 = schemaConstraints.HEADINGS;
    var schemaConstraints_4 = schemaConstraints.CONTAINERS;
    var schemaConstraints_5 = schemaConstraints.VOID_BLOCKS;
    var schemaConstraints_6 = schemaConstraints.TABLE_BLOCKS;
    var schemaConstraints_7 = schemaConstraints.LIST_ITEM_BLOCKS;
    var schemaConstraints_8 = schemaConstraints.TOP_LEVEL_BLOCKS;
    var types = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
    unwrapExports(types);
    var nodeTypes = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
    unwrapExports(nodeTypes);
    var emptyDocument = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var EMPTY_DOCUMENT = {
        nodeType: blocks.BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: blocks.BLOCKS.PARAGRAPH,
            data: {},
            content: [
              {
                nodeType: "text",
                value: "",
                marks: [],
                data: {}
              }
            ]
          }
        ]
      };
      exports2.default = EMPTY_DOCUMENT;
    });
    unwrapExports(emptyDocument);
    var helpers = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isText = exports2.isBlock = exports2.isInline = void 0;
      function hasValue(obj, value) {
        for (var _i = 0, _a2 = Object.keys(obj); _i < _a2.length; _i++) {
          var key = _a2[_i];
          if (value === obj[key]) {
            return true;
          }
        }
        return false;
      }
      function isInline(node) {
        return hasValue(inlines.INLINES, node.nodeType);
      }
      exports2.isInline = isInline;
      function isBlock(node) {
        return hasValue(blocks.BLOCKS, node.nodeType);
      }
      exports2.isBlock = isBlock;
      function isText(node) {
        return node.nodeType === "text";
      }
      exports2.isText = isText;
    });
    unwrapExports(helpers);
    var helpers_1 = helpers.isText;
    var helpers_2 = helpers.isBlock;
    var helpers_3 = helpers.isInline;
    var dist = createCommonjsModule(function(module2, exports2) {
      var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.helpers = exports2.EMPTY_DOCUMENT = exports2.MARKS = exports2.INLINES = exports2.BLOCKS = void 0;
      Object.defineProperty(exports2, "BLOCKS", { enumerable: true, get: function() {
        return blocks.BLOCKS;
      } });
      Object.defineProperty(exports2, "INLINES", { enumerable: true, get: function() {
        return inlines.INLINES;
      } });
      Object.defineProperty(exports2, "MARKS", { enumerable: true, get: function() {
        return __importDefault(marks).default;
      } });
      __exportStar(schemaConstraints, exports2);
      __exportStar(types, exports2);
      __exportStar(nodeTypes, exports2);
      Object.defineProperty(exports2, "EMPTY_DOCUMENT", { enumerable: true, get: function() {
        return __importDefault(emptyDocument).default;
      } });
      var helpers$1 = __importStar(helpers);
      exports2.helpers = helpers$1;
    });
    unwrapExports(dist);
    var dist_1 = dist.helpers;
    var dist_2 = dist.EMPTY_DOCUMENT;
    var dist_3 = dist.MARKS;
    var dist_4 = dist.INLINES;
    var dist_5 = dist.BLOCKS;
    var _a;
    var _b;
    var attributeValue = function(value) {
      return '"' + value.replace(/"/g, "&quot;") + '"';
    };
    var defaultNodeRenderers = (_a = {}, _a[dist_5.PARAGRAPH] = function(node, next) {
      return "<p>" + next(node.content) + "</p>";
    }, _a[dist_5.HEADING_1] = function(node, next) {
      return "<h1>" + next(node.content) + "</h1>";
    }, _a[dist_5.HEADING_2] = function(node, next) {
      return "<h2>" + next(node.content) + "</h2>";
    }, _a[dist_5.HEADING_3] = function(node, next) {
      return "<h3>" + next(node.content) + "</h3>";
    }, _a[dist_5.HEADING_4] = function(node, next) {
      return "<h4>" + next(node.content) + "</h4>";
    }, _a[dist_5.HEADING_5] = function(node, next) {
      return "<h5>" + next(node.content) + "</h5>";
    }, _a[dist_5.HEADING_6] = function(node, next) {
      return "<h6>" + next(node.content) + "</h6>";
    }, _a[dist_5.EMBEDDED_ENTRY] = function(node, next) {
      return "<div>" + next(node.content) + "</div>";
    }, _a[dist_5.UL_LIST] = function(node, next) {
      return "<ul>" + next(node.content) + "</ul>";
    }, _a[dist_5.OL_LIST] = function(node, next) {
      return "<ol>" + next(node.content) + "</ol>";
    }, _a[dist_5.LIST_ITEM] = function(node, next) {
      return "<li>" + next(node.content) + "</li>";
    }, _a[dist_5.QUOTE] = function(node, next) {
      return "<blockquote>" + next(node.content) + "</blockquote>";
    }, _a[dist_5.HR] = function() {
      return "<hr/>";
    }, _a[dist_5.TABLE] = function(node, next) {
      return "<table>" + next(node.content) + "</table>";
    }, _a[dist_5.TABLE_ROW] = function(node, next) {
      return "<tr>" + next(node.content) + "</tr>";
    }, _a[dist_5.TABLE_HEADER_CELL] = function(node, next) {
      return "<th>" + next(node.content) + "</th>";
    }, _a[dist_5.TABLE_CELL] = function(node, next) {
      return "<td>" + next(node.content) + "</td>";
    }, _a[dist_4.ASSET_HYPERLINK] = function(node) {
      return defaultInline(dist_4.ASSET_HYPERLINK, node);
    }, _a[dist_4.ENTRY_HYPERLINK] = function(node) {
      return defaultInline(dist_4.ENTRY_HYPERLINK, node);
    }, _a[dist_4.EMBEDDED_ENTRY] = function(node) {
      return defaultInline(dist_4.EMBEDDED_ENTRY, node);
    }, _a[dist_4.HYPERLINK] = function(node, next) {
      var href = typeof node.data.uri === "string" ? node.data.uri : "";
      return "<a href=" + attributeValue(href) + ">" + next(node.content) + "</a>";
    }, _a);
    var defaultMarkRenderers = (_b = {}, _b[dist_3.BOLD] = function(text) {
      return "<b>" + text + "</b>";
    }, _b[dist_3.ITALIC] = function(text) {
      return "<i>" + text + "</i>";
    }, _b[dist_3.UNDERLINE] = function(text) {
      return "<u>" + text + "</u>";
    }, _b[dist_3.CODE] = function(text) {
      return "<code>" + text + "</code>";
    }, _b);
    var defaultInline = function(type, node) {
      return "<span>type: " + escapeHtml_1(type) + " id: " + escapeHtml_1(node.data.target.sys.id) + "</span>";
    };
    function documentToHtmlString2(richTextDocument, options) {
      if (options === void 0) {
        options = {};
      }
      if (!richTextDocument || !richTextDocument.content) {
        return "";
      }
      return nodeListToHtmlString(richTextDocument.content, {
        renderNode: __assign(__assign({}, defaultNodeRenderers), options.renderNode),
        renderMark: __assign(__assign({}, defaultMarkRenderers), options.renderMark)
      });
    }
    function nodeListToHtmlString(nodes, _a2) {
      var renderNode = _a2.renderNode, renderMark = _a2.renderMark;
      return nodes.map(function(node) {
        return nodeToHtmlString(node, { renderNode, renderMark });
      }).join("");
    }
    function nodeToHtmlString(node, _a2) {
      var renderNode = _a2.renderNode, renderMark = _a2.renderMark;
      if (dist_1.isText(node)) {
        var nodeValue = escapeHtml_1(node.value);
        if (node.marks.length > 0) {
          return node.marks.reduce(function(value, mark) {
            if (!renderMark[mark.type]) {
              return value;
            }
            return renderMark[mark.type](value);
          }, nodeValue);
        }
        return nodeValue;
      } else {
        var nextNode = function(nodes) {
          return nodeListToHtmlString(nodes, { renderMark, renderNode });
        };
        if (!node.nodeType || !renderNode[node.nodeType]) {
          return "";
        }
        return renderNode[node.nodeType](node, nextNode);
      }
    }
    exports.documentToHtmlString = documentToHtmlString2;
  }
});

// /input.tsx
var import_contentful_html_to_richtext = __toESM(require_contentful_html_to_richtext_latest());
var import_rich_text_html_renderer = __toESM(require_rich_text_html_renderer_es5());
var export_htmltorichtext = import_contentful_html_to_richtext.generateRichText;
var export_richtexttohtml = import_rich_text_html_renderer.documentToHtmlString;
export {
  export_htmltorichtext as htmltorichtext,
  export_richtexttohtml as richtexttohtml
};
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
