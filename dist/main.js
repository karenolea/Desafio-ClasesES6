"use strict";

var _Impuesto = _interopRequireDefault(require("./Impuesto.mjs"));

var _Cliente = _interopRequireDefault(require("./Cliente.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _Impuesto["default"]();
impuesto1.deducciones(2);
impuesto1.montoBrutoAnual(7);
var cliente1 = new _Cliente["default"]("Karen", impuesto1);
console.log(cliente1.nombre());
console.log(impuesto1.deducciones());