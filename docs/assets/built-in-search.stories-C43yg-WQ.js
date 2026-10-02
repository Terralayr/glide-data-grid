import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r,M as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";import{a as o,i as s,l as c,n as l,o as u,s as d,u as f}from"./utils-CIrhwOhG.js";var p=e(t(),1),m={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>p.createElement(n,null,p.createElement(l,{title:`Search is easy`,description:p.createElement(p.Fragment,null,p.createElement(s,null,`Search for any data in your grid by setting `,p.createElement(d,null,`showSearch`),`.`),p.createElement(u,null,`In this story, `,p.createElement(o,null,`Ctrl`),` (`,p.createElement(o,null,`⌘`),` on Mac) +`,` `,p.createElement(o,null,`f`),` toggles the search bar. Make sure you're focused on the Data Grid!`))},p.createElement(e,null)))]},h=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:o}=f(),[s,l]=p.useState(!1),[u,d]=p.useState({rows:r.empty(),columns:r.empty()});return i(`keydown`,p.useCallback(e=>{(e.ctrlKey||e.metaKey)&&e.code===`KeyF`&&(l(e=>!e),e.stopPropagation(),e.preventDefault())},[]),window,!1,!0),p.createElement(a,{...c,getCellContent:t,getCellsForSelection:!0,gridSelection:u,onGridSelectionChange:d,columns:e,onCellEdited:o,onColumnResize:n,showSearch:s,onSearchClose:()=>l(!1),rows:1e4})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [showSearch, setShowSearch] = React.useState(false);
  const [selection, setSelection] = React.useState<GridSelection>({
    rows: CompactSelection.empty(),
    columns: CompactSelection.empty()
  });
  useEventListener("keydown", React.useCallback(event => {
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
      setShowSearch(cv => !cv);
      event.stopPropagation();
      event.preventDefault();
    }
  }, []), window, false, true);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} showSearch={showSearch} onSearchClose={() => setShowSearch(false)} rows={10_000} />;
}`,...h.parameters?.docs?.source}}};var g=[`BuiltInSearch`];export{h as BuiltInSearch,g as __namedExportsOrder,m as default};