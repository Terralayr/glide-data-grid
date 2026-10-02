import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{c as i,d as a,i as o,l as s,n as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(c,{title:`Add data`,description:l.createElement(l.Fragment,null,l.createElement(o,null,`You can return a different location to have the new row append take place.`))},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,setCellValueRaw:n,setCellValue:o}=a(60,!1),[c,u]=l.useState(50),d=l.useCallback(async()=>{for(let e=c;e>0;e--)for(let r=0;r<6;r++)n([r,e],t([r,e-1]));for(let e=0;e<6;e++){let r=t([e,0]);n([e,0],i(r))}return u(e=>e+1),`top`},[t,c,n]);return l.createElement(r,{...s,getCellContent:t,columns:e,rowMarkers:`both`,onCellEdited:o,trailingRowOptions:{hint:`New row...`,sticky:!0,tint:!0},rows:c,onRowAppended:d})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(async () => {
    // shift all of the existing cells down
    for (let y = numRows; y > 0; y--) {
      for (let x = 0; x < 6; x++) {
        setCellValueRaw([x, y], getCellContent([x, y - 1]));
      }
    }
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, 0]);
      setCellValueRaw([c, 0], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
    return "top" as const;
  }, [getCellContent, numRows, setCellValueRaw]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    hint: "New row...",
    sticky: true,
    tint: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...d.parameters?.docs?.source}}};var f=[`AddDataToTop`];export{d as AddDataToTop,f as __namedExportsOrder,u as default};