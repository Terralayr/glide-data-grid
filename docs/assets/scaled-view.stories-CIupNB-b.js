import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`Scaled view`,description:c.createElement(a,null,`The data editor supports being scaled.`),scale:`0.5`},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t,onColumnResize:n}=i(60);return c.createElement(r,{...o,getCellContent:t,columns:e,rowMarkers:`both`,rows:500,onColumnResize:n})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...u.parameters?.docs?.source}}};var d=[`ScaledView`];export{u as ScaledView,d as __namedExportsOrder,l as default};