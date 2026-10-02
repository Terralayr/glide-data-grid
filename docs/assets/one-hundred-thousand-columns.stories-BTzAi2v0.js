import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`One Hundred Thousand Columns`,description:c.createElement(a,null,`Data grid supports way more columns than you will ever need. Also this is rendering 10 million cells but that's not important.`)},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t}=i(1e5);return c.createElement(r,{...o,getCellContent:t,columns:e,rows:1e3})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100_000);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...u.parameters?.docs?.source}}};var d=[`OneHundredThousandCols`];export{u as OneHundredThousandCols,d as __namedExportsOrder,l as default};