import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(l,{title:`Add data`,description:d.createElement(d.Fragment,null,d.createElement(s,null,`Data can be added by clicking on the trailing row.`),d.createElement(u,null,`Keyboard is also supported, just navigate past the last row and press`,` `,d.createElement(i,null,`Enter`)))},d.createElement(e,null)))]},p=()=>{let{cols:e,getCellContent:t,setCellValueRaw:n,setCellValue:i}=o(60,!1),[s,l]=d.useState(50),u=d.useCallback(()=>{let r=s;for(let i=0;i<e.length;i++){let e=t([i,r]);n([i,r],a(e))}l(e=>e+1)},[e.length,t,s,n]);return d.createElement(r,{...c,getCellContent:t,columns:e,rangeSelectionColumnSpanning:!1,rowMarkers:`both`,onPaste:!0,onCellEdited:i,trailingRowOptions:{sticky:!1,tint:!0,hint:`New row...`},rows:s,onRowAppended:u})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    // our data source is a mock source that pre-fills data, so we are just clearing this here. You should not
    // need to do this.
    for (let c = 0; c < cols.length; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    // Tell the data grid there is another row
    setNumRows(cv => cv + 1);
  }, [cols.length, getCellContent, numRows, setCellValueRaw]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rangeSelectionColumnSpanning={false} rowMarkers={"both"} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: false,
    tint: true,
    hint: "New row..."
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...p.parameters?.docs?.source}}};var m=[`AddData`];export{p as AddData,m as __namedExportsOrder,f as default};