import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`One Million Rows`,description:c.createElement(a,null,`Data grid supports over 1 million rows. Your limit is mostly RAM.`)},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t}=i(6);return c.createElement(r,{...o,getCellContent:t,columns:e,rowHeight:31,rows:1e6,rowMarkers:`number`})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...u.parameters?.docs?.source}}};var d=[`OneMillionRows`];export{u as OneMillionRows,d as __namedExportsOrder,l as default};