import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,o as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(s,{title:`Paste support`,description:u.createElement(u.Fragment,null,u.createElement(a,null,`The data grid can handle paste automatically by returning true from`,` `,u.createElement(l,null,`onPaste`),`. You can also return false and handle paste yourself. If paste is undefined the DataEditor will do its best to paste to the current cell.`),u.createElement(c,null,`Paste supports the copy format of Google Sheets and Excel. Below is an example of data copied from excel with some escaped text.`),u.createElement(`textarea`,{value:`Sunday	Dogs	https://google.com
Monday	Cats	https://google.com
Tuesday	Turtles	https://google.com
Wednesday	Bears	https://google.com
Thursday	"L  ions"	https://google.com
Friday	Pigs	https://google.com
Saturday	"Turkeys and some ""quotes"" and
a new line char ""more quotes"" plus a tab  ."	https://google.com`,style:{width:`100%`,marginBottom:20,borderRadius:9,minHeight:200,padding:10}}))},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:a}=i(50,!1);return u.createElement(r,{...o,getCellContent:t,rowMarkers:`both`,columns:e,onCellEdited:a,onColumnResize:n,onPaste:!0,rows:400})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useMockDataGenerator(50, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} rowMarkers="both" columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} onPaste={true} rows={400} />;
}`,...f.parameters?.docs?.source}}};var p=[`PasteSupport`];export{f as PasteSupport,p as __namedExportsOrder,d as default};