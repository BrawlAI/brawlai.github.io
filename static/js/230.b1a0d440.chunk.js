(this.webpackJsonppages=this.webpackJsonppages||[]).push([[230],{361:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n(9),o=n(10),s=n(11),a=n(12),r=n(0),d=n.n(r),l=n(362),u=n(1),h=Object(r.lazy)((function(){return n.e(307).then(n.bind(null,492))})),c=function(e){Object(s.a)(n,e);var t=Object(a.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={code:e.code,count:0,readOnly:e.readOnly},o}return Object(o.a)(n,[{key:"editorDidMount",value:function(e,t){var n=this;e.focus(),this.props.registerResizeEvent(e),e.addCommand(l.KeyMod.CtrlCmd|l.KeyCode.KEY_S,(function(){n.triggerSave()})),this.setState({editor:e});var i=this.props,o=i.viewState,s=i.model;if(null!=s)e.setModel(s);else{var a=t.editor.createModel(this.state.code,"python",this.props.filePath);e.setModel(a),this.props.saveViewStateAndModel(this.props.filePath,e.saveViewState(),e.getModel())}null!=o&&e.restoreViewState(o)}},{key:"editorWillMount",value:function(e){document.fonts.ready.then((function(){e.editor.remeasureFonts()}))}},{key:"componentWillUnmount",value:function(){var e=this.state.editor;null!=e&&this.props.saveViewStateAndModel(this.props.filePath,e.saveViewState(),e.getModel())}},{key:"onChange",value:function(e){this.setState({code:e}),this.props.update(e)}},{key:"triggerSave",value:function(){this.props.registerEditorSave()}},{key:"render",value:function(){var e=this.state,t=e.code,n={selectOnLineNumbers:!0,fontFamily:"Roboto Mono",fontLigatures:!0,fontSize:14,fontWeight:400,contextmenu:!1,minimap:{enabled:!1},mouseWheelScrollSensitivity:1,readOnly:e.readOnly};return Object(u.jsx)(r.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsx)(h,{width:"100%",height:"100%",language:"python",theme:"vs-dark",value:t,options:n,onChange:this.onChange.bind(this),editorDidMount:this.editorDidMount.bind(this),editorWillMount:this.editorWillMount.bind(this)})})}}]),n}(d.a.Component)}}]);