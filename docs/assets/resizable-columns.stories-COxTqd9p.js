import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,o as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(s,{title:`Resizable columns`,description:u.createElement(u.Fragment,null,u.createElement(a,null,`You can resize columns by dragging their edges, as long as you respond to the`,` `,u.createElement(l,null,`onColumnResize`),` prop.`),u.createElement(c,null,`By setting the `,u.createElement(l,null,`overscrollX`),` property extra space can be allocated at the end of the grid to allow for easier resizing of the final column. You can highlight multiple columns to resize them all at once.`))},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t,onColumnResize:n}=i(60);return u.createElement(r,{...o,getCellContent:t,columns:e,rowMarkers:`both`,overscrollX:200,overscrollY:200,maxColumnAutoWidth:500,maxColumnWidth:2e3,rows:50,scaleToRem:!0,theme:u.useMemo(()=>({baseFontStyle:`0.8125rem`,headerFontStyle:`600 0.8125rem`,editorFontSize:`0.8125rem`}),[]),onColumnResize:n})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" overscrollX={200} overscrollY={200} maxColumnAutoWidth={500} maxColumnWidth={2000} rows={50} scaleToRem={true} theme={React.useMemo(() => ({
    baseFontStyle: "0.8125rem",
    headerFontStyle: "600 0.8125rem",
    editorFontSize: "0.8125rem"
  }), [])} onColumnResize={onColumnResize} />;
}`,...f.parameters?.docs?.source}}};var p=[`ResizableColumns`];export{f as ResizableColumns,p as __namedExportsOrder,d as default};