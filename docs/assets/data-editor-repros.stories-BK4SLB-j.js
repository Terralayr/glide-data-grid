import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./marked.esm-ikSKFM1y.js";import{t as r}from"./story-utils-cF-66lM2.js";import{I as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";var o=e(t(),1),{useState:s,useMemo:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:`Tests/TestCases/Bugs`,decorators:[e=>o.createElement(r,{width:1e3,height:800},o.createElement(e,null))]},u=([,e])=>({allowOverlay:!0,kind:i.Number,data:e,displayData:e.toString()}),d=()=>void 0,f=n(`div`)({name:`Bug70Style`,class:`b1nvh7n2`,propsAsIs:!1});function p(){return o.createElement(f,{className:`App`},o.createElement(`p`,null,`To cause error: scroll down at least one row, edit a cell in Col2, and hit Tab`),o.createElement(`a`,{href:`https://github.com/glideapps/glide-data-grid/issues/70`,target:`_blank`,rel:`noreferrer`},`Original report`),o.createElement(a,{width:500,height:500,rows:100,columns:[{title:`Col1`,width:100},{title:`Col2`,width:100}],getCellContent:u,onCellEdited:d}))}var m=([e,t])=>({allowOverlay:!0,kind:i.Text,data:`${e} - ${t}`,displayData:`${e} - ${t}`}),h=[{title:`Col AAAA`,width:120},{title:`Col AAA`,width:120},{title:`Col AA`,width:120},{title:`Col A`,width:120},{title:`Col`,width:120}];function g(){let[e,t]=s(``),n=c(()=>e===``?h:h.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())),[e]);return o.createElement(`div`,null,o.createElement(`input`,{value:e,onChange:e=>{t(e.target.value)}}),o.createElement(a,{width:1e3,height:500,rows:100,columns:n,getCellContent:m,smoothScrollX:!0,smoothScrollY:!0}))}p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function Bug70() {
  const cols = [{
    title: "Col1",
    width: 100
  }, {
    title: "Col2",
    width: 100
  }];
  return <Bug70Style className="App">
            <p>To cause error: scroll down at least one row, edit a cell in Col2, and hit Tab</p>
            <a href="https://github.com/glideapps/glide-data-grid/issues/70" target="_blank" rel="noreferrer">
                Original report
            </a>
            <DataEditor width={500} height={500} rows={100} columns={cols} getCellContent={bug70Gen} onCellEdited={ignore} />
        </Bug70Style>;
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`function FilterColumns() {
  const [searchText, setSearchText] = useState("");
  const cols = useMemo(() => {
    if (searchText === "") {
      return filteringColumns;
    }
    return filteringColumns.filter(c => c.title.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText]);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return <div>
            <input value={searchText} onChange={onInputChange} />
            <DataEditor width={1000} height={500} rows={100} columns={cols} getCellContent={filterColumnsGen} smoothScrollX={true} smoothScrollY={true} />
        </div>;
}`,...g.parameters?.docs?.source}}};var _=[`Bug70`,`FilterColumns`];export{p as Bug70,g as FilterColumns,_ as __namedExportsOrder,l as default};