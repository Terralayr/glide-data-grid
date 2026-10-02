import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c,o as l,s as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(c,{title:`Spans`,description:d.createElement(o,null,`By setting the `,d.createElement(u,null,`span`),` of a cell you can create spans in your grid. All cells within a span must return consistent data for defined behavior.`,d.createElement(l,null,`Spans will always be split if they span frozen and non-frozen columns. By default selections are always expanded to include a span. This can be disabled using the`,` `,d.createElement(u,null,`spanRangeBehavior`),` prop.`))},d.createElement(e,null)))]},p=()=>{let{cols:e,getCellContent:t}=a(100,!0,!0),n=d.useCallback(e=>{let[n,i]=e;return i===6&&n>=3&&n<=4?{kind:r.Text,allowOverlay:!1,data:`Span Cell that is very long and will go past the cell limits`,span:[3,4],displayData:`Span Cell that is very long and will go past the cell limits`}:i===5?{kind:r.Text,allowOverlay:!1,data:`Span Cell that is very long and will go past the cell limits`,span:[0,99],displayData:`Span Cell that is very long and will go past the cell limits`}:t(e)},[t]),o=d.useCallback(e=>{let t=[];for(let r=e.y;r<e.y+e.height;r++){let i=[];for(let t=e.x;t<e.x+e.width;t++)i.push(n([t,r]));t.push(i)}return t},[n]);return d.createElement(i,{...s,getCellContent:n,getCellsForSelection:o,columns:e,freezeColumns:2,rows:300,rowMarkers:`both`})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(cell => {
    const [col, row] = cell;
    if (row === 6 && col >= 3 && col <= 4) {
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        data: "Span Cell that is very long and will go past the cell limits",
        span: [3, 4],
        displayData: "Span Cell that is very long and will go past the cell limits"
      };
    }
    if (row === 5) {
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        data: "Span Cell that is very long and will go past the cell limits",
        span: [0, 99],
        displayData: "Span Cell that is very long and will go past the cell limits"
      };
    }
    return getCellContent(cell);
  }, [getCellContent]);
  const getCellsForSelection = React.useCallback((selection: Rectangle): CellArray => {
    const result: GridCell[][] = [];
    for (let y = selection.y; y < selection.y + selection.height; y++) {
      const row: GridCell[] = [];
      for (let x = selection.x; x < selection.x + selection.width; x++) {
        row.push(mangledGetCellContent([x, y]));
      }
      result.push(row);
    }
    return result;
  }, [mangledGetCellContent]);
  return <DataEditor {...defaultProps} getCellContent={mangledGetCellContent} getCellsForSelection={getCellsForSelection} columns={cols} freezeColumns={2} rows={300} rowMarkers="both" />;
}`,...p.parameters?.docs?.source}}};var m=[`SpanCell`];export{p as SpanCell,m as __namedExportsOrder,f as default};