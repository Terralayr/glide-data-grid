import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(l,{title:`Add data to middle`,description:d.createElement(d.Fragment,null,d.createElement(s,null,`You can return a different location to have the new row append take place.`),d.createElement(u,null,`Note that `,d.createElement(i,null,`insertIndex`),` is zero-based while the number column on the left side of the grid is one-based, so inserting at index "4" creates a new row at "5"`))},d.createElement(e,null)))]},p=e=>{let{cols:t,getCellContent:n,setCellValueRaw:i,setCellValue:s}=o(60,!1),[l,u]=d.useState(50),f=e.insertIndex,p=d.useCallback(async()=>{for(let e=l;e>f;e--)for(let t=0;t<6;t++)i([t,e],n([t,e-1]));for(let e=0;e<6;e++){let t=n([e,f]);i([e,f],a(t))}return u(e=>e+1),f},[n,l,i,f]);return d.createElement(r,{...c,getCellContent:n,columns:t,rowMarkers:`both`,onCellEdited:s,trailingRowOptions:{hint:`New row...`,sticky:!0,tint:!0},rows:l,onRowAppended:p})};p.args={insertIndex:10},p.argTypes={insertIndex:{control:{type:`range`,min:1,max:48}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const index = p.insertIndex;
  const onRowAppended = React.useCallback(async () => {
    // shift rows below index down
    for (let y = numRows; y > index; y--) {
      for (let x = 0; x < 6; x++) {
        setCellValueRaw([x, y], getCellContent([x, y - 1]));
      }
    }
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, index]);
      setCellValueRaw([c, index], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
    return index;
  }, [getCellContent, numRows, setCellValueRaw, index]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    hint: "New row...",
    sticky: true,
    tint: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...p.parameters?.docs?.source}}};var m=[`AddDataToMiddle`];export{p as AddDataToMiddle,m as __namedExportsOrder,f as default};