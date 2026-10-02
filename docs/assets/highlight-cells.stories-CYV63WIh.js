import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(c,{title:`HighlightCells`,description:u.createElement(o,null,`The `,u.createElement(l,null,`highlightRegions`),` prop can be set to provide additional hinting or context for the current selection.`)},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t}=a(100),[n,o]=u.useState({columns:r.empty(),rows:r.empty()}),c=u.useMemo(()=>{if(n.current===void 0)return;let[e,t]=n.current.cell;return[{color:`#44BB0022`,range:{x:e+2,y:t,width:10,height:10},style:`solid`},{color:`#b000b021`,range:{x:e,y:t+2,width:1,height:1}}]},[n]);return u.createElement(i,{...s,rowMarkers:`both`,freezeColumns:1,highlightRegions:c,gridSelection:n,onGridSelectionChange:o,getCellContent:t,columns:e,verticalBorder:e=>e>0,rows:1e3})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const [gridSelection, setGridSelection] = React.useState<GridSelection>({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const highlights = React.useMemo<DataEditorProps["highlightRegions"]>(() => {
    if (gridSelection.current === undefined) return undefined;
    const [col, row] = gridSelection.current.cell;
    return [{
      color: "#44BB0022",
      range: {
        x: col + 2,
        y: row,
        width: 10,
        height: 10
      },
      style: "solid"
    }, {
      color: "#b000b021",
      range: {
        x: col,
        y: row + 2,
        width: 1,
        height: 1
      }
    }];
  }, [gridSelection]);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={1} highlightRegions={highlights} gridSelection={gridSelection} onGridSelectionChange={setGridSelection} getCellContent={getCellContent} columns={cols} verticalBorder={c => c > 0} rows={1000} />;
}`,...f.parameters?.docs?.source}}};var p=[`HighlightCells`];export{f as HighlightCells,p as __namedExportsOrder,d as default};