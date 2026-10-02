import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Prevent Diagonal Scroll`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`Diagonal scrolling can be prevented by setting`,` `,l.createElement(c,null,`preventDiagonalScrolling`),`.`))},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t}=i(200);return l.createElement(r,{...o,getCellContent:t,columns:e,preventDiagonalScrolling:!0,rows:5e3})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(200);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} preventDiagonalScrolling={true} rows={5000} />;
}`,...d.parameters?.docs?.source}}};var f=[`PreventDiagonalScroll`];export{d as PreventDiagonalScroll,f as __namedExportsOrder,u as default};