import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{c as a,d as o,i as s,l as c,n as l,o as u,s as d}from"./utils-CIrhwOhG.js";var f=e(t(),1),p={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>f.createElement(n,null,f.createElement(l,{title:`Fill handle`,description:f.createElement(f.Fragment,null,f.createElement(s,null,`Fill handles can be used to downfill data with the mouse.`),f.createElement(u,null,`Just click and drag, the top row will be copied down. Enable using the`,` `,f.createElement(d,null,`fillHandle`),` prop.`))},f.createElement(e,null)))],argTypes:{fillHandleEnabled:{control:`boolean`,name:`fillHandle enabled`},shape:{control:{type:`inline-radio`},options:[`square`,`circle`],name:`shape`},size:{control:{type:`number`},name:`size`},offsetX:{control:{type:`number`},name:`offsetX`},offsetY:{control:{type:`number`},name:`offsetY`},outline:{control:{type:`number`},name:`outline`},allowedFillDirections:{control:{type:`inline-radio`},options:[`horizontal`,`vertical`,`orthogonal`,`any`],name:`allowedFillDirections`}},args:{fillHandleEnabled:!0,shape:`square`,size:4,offsetX:-2,offsetY:-2,outline:0,allowedFillDirections:`orthogonal`}},m=({fillHandleEnabled:e,shape:t,size:n,offsetX:s,offsetY:l,outline:u,allowedFillDirections:d})=>{let{cols:p,getCellContent:m,setCellValueRaw:h,setCellValue:g}=o(60,!1),[_,v]=f.useState(50),y=f.useCallback(e=>{let t=m(e);return e[0]===1&&t.kind===r.Text&&(t={...t,readonly:!0}),t},[m]),b=f.useCallback(()=>{let e=_;for(let t=0;t<6;t++){let n=m([t,e]);h([t,e],a(n))}v(e=>e+1)},[m,_,h]);return f.createElement(i,{...c,getCellContent:y,columns:p,rowMarkers:`both`,onPaste:!0,fillHandle:e?{shape:t,size:n,offsetX:s,offsetY:l,outline:u}:!1,allowedFillDirections:d,keybindings:{downFill:!0,rightFill:!0},onCellEdited:g,trailingRowOptions:{sticky:!0,tint:!0,hint:`New row...`},rows:_,onRowAppended:b})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  fillHandleEnabled,
  shape,
  size,
  offsetX,
  offsetY,
  outline,
  allowedFillDirections
}) => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const getCellContentMangled = React.useCallback<typeof getCellContent>(i => {
    let val = getCellContent(i);
    if (i[0] === 1 && val.kind === GridCellKind.Text) {
      val = {
        ...val,
        readonly: true
      };
    }
    return val;
  }, [getCellContent]);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  return <DataEditor {...defaultProps} getCellContent={getCellContentMangled} columns={cols} rowMarkers={"both"} onPaste={true} fillHandle={fillHandleEnabled ? {
    shape,
    size,
    offsetX,
    offsetY,
    outline
  } : false} allowedFillDirections={allowedFillDirections} keybindings={{
    downFill: true,
    rightFill: true
  }} onCellEdited={setCellValue} trailingRowOptions={{
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...m.parameters?.docs?.source}}};var h=[`FillHandle`];export{m as FillHandle,h as __namedExportsOrder,p as default};