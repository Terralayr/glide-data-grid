import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`Input blending`,description:c.createElement(a,null,`Input blending can be enabled or disable between row, column, and range selections. Multi-selections can also be enabled or disabled with the same level of granularity.`)},c.createElement(e,null)))]},u=e=>{let{cols:t,getCellContent:n}=i(30);return c.createElement(r,{...o,rowMarkers:e.rowMultiSelect===`none`?`number`:`both`,keybindings:{clear:!0,copy:!0,downFill:!0,rightFill:!0,pageDown:!0,pageUp:!0,paste:!0,search:!0,selectAll:!0,selectColumn:!0,selectRow:!0},getCellsForSelection:!0,rangeSelect:e.rangeMultiSelect,columnSelect:e.columnMultiSelect,rowSelect:e.rowMultiSelect,rangeSelectionBlending:e.rangeBlending,columnSelectionBlending:e.columnBlending,rowSelectionBlending:e.rowBlending,rowSelectionMode:e.rowSelectionMode,columnSelectionMode:e.columnSelectionMode,getCellContent:n,columns:t,rows:1e4})};u.args={rangeBlending:`mixed`,columnBlending:`mixed`,rowBlending:`mixed`,rangeMultiSelect:`rect`,columnMultiSelect:`multi`,rowMultiSelect:`multi`,rowSelectionMode:`auto`,columnSelectionMode:`auto`},u.argTypes={rangeBlending:{control:{type:`select`},options:[`mixed`,`exclusive`,`additive`]},columnBlending:{control:{type:`select`},options:[`mixed`,`exclusive`,`additive`]},rowBlending:{control:{type:`select`},options:[`mixed`,`exclusive`,`additive`]},rangeMultiSelect:{control:{type:`select`},options:[`none`,`cell`,`rect`,`multi-cell`,`multi-rect`]},columnMultiSelect:{control:{type:`select`},options:[`none`,`single`,`multi`]},rowMultiSelect:{control:{type:`select`},options:[`none`,`single`,`multi`]},rowSelectionMode:{control:{type:`select`},options:[`auto`,`multi`]},columnSelectionMode:{control:{type:`select`},options:[`auto`,`multi`]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30);
  return <DataEditor {...defaultProps} rowMarkers={p.rowMultiSelect === "none" ? "number" : "both"} keybindings={{
    clear: true,
    copy: true,
    downFill: true,
    rightFill: true,
    pageDown: true,
    pageUp: true,
    paste: true,
    search: true,
    selectAll: true,
    selectColumn: true,
    selectRow: true
  }} getCellsForSelection={true} rangeSelect={p.rangeMultiSelect} columnSelect={p.columnMultiSelect} rowSelect={p.rowMultiSelect} rangeSelectionBlending={p.rangeBlending} columnSelectionBlending={p.columnBlending} rowSelectionBlending={p.rowBlending} rowSelectionMode={p.rowSelectionMode} columnSelectionMode={p.columnSelectionMode} getCellContent={getCellContent} columns={cols} rows={10_000} />;
}`,...u.parameters?.docs?.source}}};var d=[`InputBlending`];export{u as InputBlending,d as __namedExportsOrder,l as default};