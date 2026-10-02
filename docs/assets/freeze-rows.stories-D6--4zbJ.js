import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{c as i,d as a,i as o,l as s,n as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(c,{title:`Freeze rows`,description:l.createElement(l.Fragment,null,l.createElement(o,null,`Rows can be frozen to make sure the user always sees them.`))},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,setCellValueRaw:n,setCellValue:o}=a(60,!1),[c,u]=l.useState(50),d=l.useCallback(()=>{let r=c;for(let a=0;a<e.length;a++){let e=t([a,r]);n([a,r],i(e))}u(e=>e+1)},[e.length,t,c,n]);return l.createElement(r,{...s,getCellContent:t,columns:e,rowMarkers:`both`,freezeTrailingRows:2,experimental:{kineticScrollPerfHack:!0},onPaste:!0,onCellEdited:o,trailingRowOptions:{sticky:!0,tint:!0,hint:`New row...`},rows:c,onRowAppended:d})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} freezeTrailingRows={2} experimental={{
    kineticScrollPerfHack: true
  }} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...d.parameters?.docs?.source}}};var f=[`FreezeRows`];export{d as FreezeRows,f as __namedExportsOrder,u as default};