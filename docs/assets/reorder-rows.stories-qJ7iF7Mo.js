import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";import{t as l}from"./lodash-DvAq8kyA.js";var u=e(l(),1),d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(s,{title:`Reorder Rows`,description:d.createElement(d.Fragment,null,d.createElement(a,null,`Rows can be re-arranged by using the `,d.createElement(c,null,`onRowMoved`),` callback. When set the first row can be used to drag and drop.`))},d.createElement(e,null)))]},p=()=>{let e=d.useMemo(()=>[{title:`Col A`,width:150},{title:`Col B`,width:150}],[]),[t,n]=d.useState(()=>(0,u.range)(0,50).map(e=>[`A: ${e}`,`B: ${e}`])),a=d.useCallback(([e,n])=>({kind:r.Text,allowOverlay:!1,data:t[n][e],displayData:t[n][e]}),[t]),s=d.useCallback((e,t)=>{n(n=>{let r=[...n],i=r.splice(e,1);return r.splice(t,0,...i),r})},[]);return d.createElement(i,{...o,rowMarkers:`both`,onRowMoved:s,getCellContent:a,columns:e,rows:50})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const cols = React.useMemo<GridColumn[]>(() => [{
    title: "Col A",
    width: 150
  }, {
    title: "Col B",
    width: 150
  }], []);
  const [rowData, setRowData] = React.useState(() => {
    return range(0, 50).map(x => [\`A: \${x}\`, \`B: \${x}\`]);
  });
  const getCellContent = React.useCallback<DataEditorProps["getCellContent"]>(([col, row]) => {
    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      data: rowData[row][col],
      displayData: rowData[row][col]
    };
  }, [rowData]);
  const reorderRows = React.useCallback((from: number, to: number) => {
    setRowData(cv => {
      const d = [...cv];
      const removed = d.splice(from, 1);
      d.splice(to, 0, ...removed);
      return d;
    });
  }, []);
  return <DataEditor {...defaultProps} rowMarkers={"both"} onRowMoved={reorderRows} getCellContent={getCellContent} columns={cols} rows={50} />;
}`,...p.parameters?.docs?.source}}};var m=[`ReorderRows`];export{p as ReorderRows,m as __namedExportsOrder,f as default};