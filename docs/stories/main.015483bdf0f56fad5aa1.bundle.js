(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{304:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Sample});__webpack_require__(10),__webpack_require__(188),__webpack_require__(38),__webpack_require__(33),__webpack_require__(8),__webpack_require__(1),__webpack_require__(92),__webpack_require__(93);var react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(81);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SelectionContainer=function(_React$PureComponent){function SelectionContainer(){var _getPrototypeOf2,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SelectionContainer);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,(_getPrototypeOf2=_getPrototypeOf(SelectionContainer)).call.apply(_getPrototypeOf2,[this].concat(args))),_defineProperty(_assertThisInitialized(_this),"state",{selectedKey:null}),_defineProperty(_assertThisInitialized(_this),"getItemProps",function(key){return{key:key,onClick:function onClick(){return _this.onItemClick(key)}}}),_defineProperty(_assertThisInitialized(_this),"onItemClick",function(key){_this.setState({selectedKey:key})}),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(SelectionContainer,react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SelectionContainer,[{key:"render",value:function render(){return this.props.children({selectedKey:this.state.selectedKey,getItemProps:this.getItemProps})}}]),SelectionContainer}();SelectionContainer.displayName="SelectionContainer";var Sample=function(){return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SelectionContainer,null,function(_ref){var selectedKey=_ref.selectedKey,getItemProps=_ref.getItemProps;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",null,[,,,,,].fill(0).map(function(val,i){var _getItemProps=getItemProps(i),key=_getItemProps.key;_getItemProps.onClick;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_9__.a,_extends({},getItemProps(i),{selected:selectedKey==key}),"Button ",i)}))})};Sample.displayName="Sample",SelectionContainer.__docgenInfo={description:"",methods:[{name:"getItemProps",docblock:null,modifiers:[],params:[{name:"key",type:null}],returns:null},{name:"onItemClick",docblock:null,modifiers:[],params:[{name:"key",type:null}],returns:null}],displayName:"SelectionContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/selection/render_prop_pattern/index.js"]={name:"SelectionContainer",docgenInfo:SelectionContainer.__docgenInfo,path:"packages/selection/render_prop_pattern/index.js"}),Sample.__docgenInfo={description:"",methods:[],displayName:"Sample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/selection/render_prop_pattern/index.js"]={name:"Sample",docgenInfo:Sample.__docgenInfo,path:"packages/selection/render_prop_pattern/index.js"})},307:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Sample});__webpack_require__(1),__webpack_require__(188),__webpack_require__(38),__webpack_require__(33),__webpack_require__(8),__webpack_require__(92),__webpack_require__(93);var react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(81);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SelectionComponent=function(_Component){function SelectionComponent(props){var _this;return _classCallCheck(this,SelectionComponent),_defineProperty(_assertThisInitialized(_this=_possibleConstructorReturn(this,_getPrototypeOf(SelectionComponent).call(this,props))),"state",{selectedKey:null}),_defineProperty(_assertThisInitialized(_this),"setSelection",function(key){return _this.setState({selectedKey:key})}),_this}return _inherits(SelectionComponent,react__WEBPACK_IMPORTED_MODULE_7__["Component"]),SelectionComponent}(),Sample=function(_SelectionComponent){function Sample(){return _classCallCheck(this,Sample),_possibleConstructorReturn(this,_getPrototypeOf(Sample).apply(this,arguments))}return _inherits(Sample,SelectionComponent),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Sample,[{key:"render",value:function render(){var _this2=this;return[,,,,,].fill(0).map(function(val,i){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_8__.a,{key:i,onClick:function onClick(){return _this2.setSelection(i)},selected:_this2.state.selectedKey==i},"Button ",i)})}}]),Sample}();Sample.displayName="Sample",Sample.__docgenInfo={description:"",methods:[],displayName:"Sample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/selection/custom_react_component/index.js"]={name:"Sample",docgenInfo:Sample.__docgenInfo,path:"packages/selection/custom_react_component/index.js"})},308:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Sample});__webpack_require__(10),__webpack_require__(33),__webpack_require__(8),__webpack_require__(9),__webpack_require__(48),__webpack_require__(188),__webpack_require__(38);var react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(81);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var useSelection=function(initialSelectedItem){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_7__.useState)(initialSelectedItem),2),selectedItem=_useState2[0],selectItem=_useState2[1];return[selectedItem,function(key){return{key:key,onClick:function onClick(){return selectItem(key)}}}]},Sample=function(){var _useSelection2=_slicedToArray(useSelection(null),2),selectedItem=_useSelection2[0],getItemProps=_useSelection2[1];return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,[,,,,,].fill(0).map(function(val,i){var selectItemProps=getItemProps(i);return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_8__.a,_extends({selected:i===selectedItem},selectItemProps),"Button ",i)}))};Sample.displayName="Sample",Sample.__docgenInfo={description:"",methods:[],displayName:"Sample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/selection/with_react_hooks/index.js"]={name:"Sample",docgenInfo:Sample.__docgenInfo,path:"packages/selection/with_react_hooks/index.js"})},309:function(module,exports){module.exports="__RenderProp Container implementing the SelectionApi__\n\n`SelectionApi`\n- `selectedKey` {any} Currently selected key.\n- `getItemProps` {function} get selection api for item in the list\n  - `onClick` {function}\n  - `key` {any}\n\n```js\nfunction TabSelector() {\n  return <SelectionContainer>{({\n    selectedKey,\n    getItemProps\n  }) => {\n    return <div>\n      {Array(5).fill(0).map((val, i) => {\n        return <Button\n          {...getItemProps(i)}\n          selected={selectedKey == key}>Button {i}</Button>\n      })}\n    </div>\n  }}</SelectionContainer>\n}\n```"},310:function(module,exports){module.exports="```js\nclass SelectorComponentSample extends SelectionComponent {\n  render() {\n    return Array(5)\n      .fill(0)\n      .map((val, i) => {\n        return (\n          <Button\n            key={i}\n            onClick={() => this.setSelection(i)}\n            selected={this.state.selectedKey == i}\n          >\n            Button {i}\n          </Button>\n        )\n      })\n  }\n}\n```"},311:function(module,exports){module.exports="`SelectionApi`\n- `selectedItem` {any} Currently selected item.\n- `getItemProps` {function} get selection props for item in the list\n  - `onClick` {function}\n  - `key` {any}\n\n```js\nconst App = () => {\n\n  const [selectedItem, getItemProps] = useSelection(0)\n\n  return (\n    <div>\n      {Array(5)\n        .fill(0)\n        .map((val, i) => {\n          const selectItemProps = getItemProps(i)\n          return (\n            <Button selected={i === selectedItem} {...selectItemProps}>\n              Button {i}\n            </Button>\n          )\n        })}\n    </div>\n  )\n}\n```\n\n__Selection hook implementation__\n```js\nconst useSelection = initialSelectedItem => {\n  const [selectedItem, selectItem] = useState(initialSelectedItem)\n  return [\n    selectedItem,\n    key => ({\n      key,\n      onClick: () => selectItem(key),\n    }),\n  ]\n}\n```"},312:function(module,exports,__webpack_require__){__webpack_require__(313),__webpack_require__(390),module.exports=__webpack_require__(391)},391:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(9),__webpack_require__(12),__webpack_require__(11),__webpack_require__(91);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(82),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(296),storybook_readme__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(459),__webpack_require__(303)),req=__webpack_require__(680);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(storybook_readme__WEBPACK_IMPORTED_MODULE_7__.addReadme),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__.withOptions)({name:"React Primitives"})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(150)(module))},680:function(module,exports,__webpack_require__){var map={"./selection/selection.stories.js":681};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=680},681:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(82),_render_prop_pattern__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(304),_custom_react_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(307),_with_react_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(308),_render_prop_pattern_index_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(309),_render_prop_pattern_index_md__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_render_prop_pattern_index_md__WEBPACK_IMPORTED_MODULE_5__),_custom_react_component_index_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(310),_custom_react_component_index_md__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_custom_react_component_index_md__WEBPACK_IMPORTED_MODULE_6__),_with_react_hooks_index_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(311),_with_react_hooks_index_md__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_with_react_hooks_index_md__WEBPACK_IMPORTED_MODULE_7__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_with_react_hooks__WEBPACK_IMPORTED_MODULE_4__.a,null),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_render_prop_pattern__WEBPACK_IMPORTED_MODULE_2__.a,null),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_custom_react_component__WEBPACK_IMPORTED_MODULE_3__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Selection",module).add("Using Hook",function(){return _ref},{readme:{sidebar:_with_react_hooks_index_md__WEBPACK_IMPORTED_MODULE_7___default.a}}).add("Render Prop",function(){return _ref2},{readme:{sidebar:_render_prop_pattern_index_md__WEBPACK_IMPORTED_MODULE_5___default.a}}).add("Extended Component",function(){return _ref3},{readme:{sidebar:_custom_react_component_index_md__WEBPACK_IMPORTED_MODULE_6___default.a}})}.call(this,__webpack_require__(150)(module))},81:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(34),__webpack_require__(35);var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(305),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(192);function _templateObject2(){var data=_taggedTemplateLiteral(["\n      background: crimson;\n      color: white;\n    "]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid crimson;\n  color: crimson;\n  margin: 0 1em 1em;\n  padding: 0.25em 1em;\n  \n  &:focus {\n    outline: 1px auto crimson;\n    outline-offset: 1px;\n  }\n\n  ",";\n"]);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Button=styled_components__WEBPACK_IMPORTED_MODULE_3__.b.button(_templateObject(),function(props){return props.selected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.a)(_templateObject2())});Button.propTypes={selected:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool},__webpack_exports__.a=Button}},[[312,1,2]]]);
//# sourceMappingURL=main.015483bdf0f56fad5aa1.bundle.js.map