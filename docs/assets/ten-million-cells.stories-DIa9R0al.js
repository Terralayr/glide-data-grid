import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`Ten Million Cells`,description:c.createElement(a,null,`Data grid supports over 10 million cells. Go nuts with it.`)},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t}=i(100);return c.createElement(r,{...o,rowMarkers:`number`,getCellContent:t,columns:e,rows:1e5})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} columns={cols} rows={100_000} />;
}`,...u.parameters?.docs?.source}}};var d=[`TenMillionCells`];export{u as TenMillionCells,d as __namedExportsOrder,l as default};