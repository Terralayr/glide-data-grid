import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r,M as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";import{i as o,l as s,n as c,s as l,u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(c,{title:`Controlling search results`,description:d.createElement(d.Fragment,null,d.createElement(o,null,`Search results can be controlled via `,d.createElement(l,null,`searchResults`),`. You can implement any search algorithm you want, even a silly one.`))},d.createElement(e,null)))]},p=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:o}=u(),[c,l]=d.useState(!1),[f,p]=d.useState({rows:r.empty(),columns:r.empty()});i(`keydown`,d.useCallback(e=>{(e.ctrlKey||e.metaKey)&&e.code===`KeyF`&&(l(e=>!e),e.stopPropagation(),e.preventDefault())},[]),window,!1,!0);let[m,h]=d.useState(``),g=d.useMemo(()=>{let e=[];for(let t=0;t<m.length;t++)e.push([3,t]);return e},[m.length]);return d.createElement(a,{...s,searchResults:g,getCellContent:t,getCellsForSelection:!0,gridSelection:f,onGridSelectionChange:p,columns:e,onCellEdited:o,onColumnResize:n,searchValue:m,onSearchValueChange:h,showSearch:c,onSearchClose:()=>{l(!1),h(``)},rows:1e4})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
  const searchResults = React.useMemo(() => {
    const result: Item[] = [];
    for (let i = 0; i < searchValue.length; i++) {
      result.push([3, i]);
    }
    return result;
  }, [searchValue.length]);
  return <DataEditor {...defaultProps} searchResults={searchResults} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} searchValue={searchValue} onSearchValueChange={setSearchValue} showSearch={showSearch} onSearchClose={() => {
    setShowSearch(false);
    setSearchValue("");
  }} rows={10_000} />;
}`,...p.parameters?.docs?.source}}};var m=[`ControlledSearch`];export{p as ControlledSearch,m as __namedExportsOrder,f as default};