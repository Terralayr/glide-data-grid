import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,o as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Add and remove columns`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`You can add and remove columns at your disposal`),l.createElement(c,null,`Use the story's controls to change the number of columns`))},l.createElement(e,null)))]},d=e=>{let{cols:t,getCellContent:n}=i(e.columnsCount);return l.createElement(r,{...o,rowMarkers:`number`,getCellContent:n,experimental:{strict:!0},columns:t,rows:1e4})};d.args={columnsCount:10},d.argTypes={columnsCount:{control:{type:`range`,min:2,max:200}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} experimental={{
    strict: true
  }} columns={cols} rows={10_000} />;
}`,...d.parameters?.docs?.source}}};var f=[`AddColumns`];export{d as AddColumns,f as __namedExportsOrder,u as default};