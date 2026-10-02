import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r,M as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";import{i as o,l as s,n as c,u as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(c,{title:`Filtering down to search results`,description:u.createElement(u.Fragment,null,u.createElement(o,null,`You can update your grid however you want based on search inputs.`))},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:o}=l(),[c,d]=u.useState(!1),[f,p]=u.useState({rows:r.empty(),columns:r.empty()});i(`keydown`,u.useCallback(e=>{(e.ctrlKey||e.metaKey)&&e.code===`KeyF`&&(d(e=>!e),e.stopPropagation(),e.preventDefault())},[]),window,!1,!0);let[m,h]=u.useState(``);return u.createElement(a,{...s,searchResults:[],getCellContent:t,getCellsForSelection:!0,gridSelection:f,onGridSelectionChange:p,columns:e,onCellEdited:o,onColumnResize:n,searchValue:m,onSearchValueChange:h,showSearch:c,onSearchClose:()=>{d(!1),h(``)},rows:m.length===0?1e4:m.length})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
  const [searchValue, setSearchValue] = React.useState("");
  return <DataEditor {...defaultProps} searchResults={[]} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} searchValue={searchValue} onSearchValueChange={setSearchValue} showSearch={showSearch} onSearchClose={() => {
    setShowSearch(false);
    setSearchValue("");
  }} rows={searchValue.length === 0 ? 10_000 : searchValue.length} />;
}`,...f.parameters?.docs?.source}}};var p=[`SearchAsFilter`];export{f as SearchAsFilter,p as __namedExportsOrder,d as default};