import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`Editable Grid`,description:c.createElement(a,null,`Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.`)},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t,setCellValue:n}=i(6,!1);return c.createElement(r,{...o,getCellContent:t,columns:e,rows:20,onCellEdited:n})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...u.parameters?.docs?.source}}};var d=[`SmallEditableGrid`];export{u as SmallEditableGrid,d as __namedExportsOrder,l as default};