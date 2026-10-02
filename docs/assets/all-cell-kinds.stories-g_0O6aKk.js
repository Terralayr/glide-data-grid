import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{i,l as a,n as o,s,u as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(o,{title:`Lotsa cell kinds`,description:l.createElement(i,null,`Data grid supports plenty cell kinds. Anything under `,l.createElement(s,null,`GridCellKind`),`.`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:i}=c();return l.createElement(r,{...a,getCellContent:t,columns:e,onCellEdited:i,onPaste:!0,rowHeight:44,onColumnResize:n,highlightRegions:[{color:`#ff00ff33`,range:{x:1,y:1,width:3,height:3}}],cellActivationBehavior:`single-click`,editorBloom:[-4,-4],drawFocusRing:!1,rows:1e3})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onPaste={true} rowHeight={44} onColumnResize={onColumnResize} highlightRegions={[{
    color: "#ff00ff33",
    range: {
      x: 1,
      y: 1,
      width: 3,
      height: 3
    }
  }]} cellActivationBehavior="single-click" editorBloom={[-4, -4]} drawFocusRing={false} rows={1000} />;
}`,...d.parameters?.docs?.source}}};var f=[`AllCellKinds`];export{d as AllCellKinds,f as __namedExportsOrder,u as default};