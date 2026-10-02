import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,o as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Obscured Data Grid`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`The data grid should respect being obscured by other elements`),l.createElement(c,null,`This is mostly a test area because its hard to test with unit tests.`))},l.createElement(e,null),l.createElement(`div`,{style:{position:`absolute`,top:0,left:`50%`,width:`50%`,height:`100%`,background:`rgba(0,0,0,0.5)`,zIndex:100}})))]},d=()=>{let{cols:e,getCellContent:t,setCellValue:n}=i(60,!1);return l.createElement(r,{...o,getCellContent:t,onItemHovered:e=>console.log(`onItemHovered`,e),onCellClicked:e=>console.log(`onCellClicked`,e),onHeaderClicked:e=>console.log(`onHeaderClicked`,e),onCellContextMenu:e=>console.log(`onCellContextMenu`,e),onHeaderContextMenu:e=>console.log(`onHeaderContextMenu`,e),columns:e,rowMarkers:`both`,onPaste:!0,onCellEdited:n,trailingRowOptions:{sticky:!0,tint:!0,hint:`New row...`},rows:1e4})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(60, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onItemHovered={x => console.log("onItemHovered", x)} onCellClicked={x => console.log("onCellClicked", x)} onHeaderClicked={x => console.log("onHeaderClicked", x)} onCellContextMenu={x => console.log("onCellContextMenu", x)} onHeaderContextMenu={x => console.log("onHeaderContextMenu", x)} columns={cols} rowMarkers={"both"} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={10_000} />;
}`,...d.parameters?.docs?.source}}};var f=[`ObscuredDataGrid`];export{d as ObscuredDataGrid,f as __namedExportsOrder,u as default};