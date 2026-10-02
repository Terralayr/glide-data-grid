import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,o as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(s,{title:`Copy support`,description:u.createElement(u.Fragment,null,u.createElement(a,null,`Large amounts of data can be copied and customized using`,` `,u.createElement(l,null,`getCellsForSelection`),`.`),u.createElement(c,null,`The data is copied into a format ready to be pasted into Excel or Google Sheets`),u.createElement(`textarea`,{placeholder:`Copy something below and paste it here...`,style:{width:`100%`,marginBottom:20,borderRadius:9,minHeight:200,padding:10}}))},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:a}=i(10,!1);return u.createElement(r,{...o,getCellContent:t,rowMarkers:`both`,columns:e,onCellEdited:a,onColumnResize:n,rows:400})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} rowMarkers="both" columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={400} />;
}`,...f.parameters?.docs?.source}}};var p=[`CopySupport`];export{f as CopySupport,p as __namedExportsOrder,d as default};