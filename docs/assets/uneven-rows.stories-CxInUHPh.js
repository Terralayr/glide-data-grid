import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Uneven Rows`,description:l.createElement(a,null,`Rows can be made uneven by passing a callback to the `,l.createElement(c,null,`rowHeight`),` prop`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t}=i(6);return l.createElement(r,{...o,rowHeight:e=>e%3==0?30:e%2?50:60,getCellContent:t,columns:e,rows:1e3})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => r % 3 === 0 ? 30 : r % 2 ? 50 : 60} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...d.parameters?.docs?.source}}};var f=[`UnevenRows`];export{d as UnevenRows,f as __namedExportsOrder,u as default};