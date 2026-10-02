import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c,o as l,s as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(c,{title:`Validate data`,description:d.createElement(d.Fragment,null,d.createElement(o,null,`Data can be validated using the `,d.createElement(u,null,`validateCell`),` callback`),d.createElement(l,null,`This example only allows the word "Valid" inside text cells.`))},d.createElement(e,null)))]},p=()=>{let{cols:e,getCellContent:t,setCellValue:n}=a(60,!1);return d.createElement(i,{...s,getCellContent:t,columns:e,rowMarkers:`both`,onPaste:!0,onCellEdited:n,rows:100,validateCell:(e,t)=>t.kind!==r.Text||t.data===`Valid`||t.data.toLowerCase()===`valid`&&{...t,data:`Valid`,selectionRange:[0,3]}})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(60, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onPaste={true} onCellEdited={setCellValue} rows={100} validateCell={(_cell, newValue) => {
    if (newValue.kind !== GridCellKind.Text) return true;
    if (newValue.data === "Valid") return true;
    if (newValue.data.toLowerCase() === "valid") {
      return {
        ...newValue,
        data: "Valid",
        selectionRange: [0, 3]
      };
    }
    return false;
  }} />;
}`,...p.parameters?.docs?.source}}};var m=[`ValidateData`];export{p as ValidateData,m as __namedExportsOrder,f as default};