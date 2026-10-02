import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Freeze columns`,description:l.createElement(a,null,`Columns at the start of your grid can be frozen in place by settings`,` `,l.createElement(c,null,`freezeColumns`),` to a number greater than 0.`)},l.createElement(e,null)))]},d=e=>{let{cols:t,getCellContent:n}=i(100);return l.createElement(r,{...o,rowMarkers:`both`,freezeColumns:e.freezeColumns,getCellContent:n,columns:t,verticalBorder:!1,rows:1e3})};d.argTypes={freezeColumns:{control:{type:`range`,min:0,max:10}}},d.args={freezeColumns:1},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={p.freezeColumns} getCellContent={getCellContent} columns={cols} verticalBorder={false} rows={1000} />;
}`,...d.parameters?.docs?.source}}};var f=[`FreezeColumns`];export{d as FreezeColumns,f as __namedExportsOrder,u as default};