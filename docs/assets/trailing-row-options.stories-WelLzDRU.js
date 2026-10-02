import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{L as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{c as a,d as o,i as s,l as c,n as l,s as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(l,{title:`Trailing row options`,description:d.createElement(s,null,`You can customize the trailing row in each column by setting a`,` `,d.createElement(u,null,`trailingRowOptions`),` in your columns.`)},d.createElement(e,null)))]},p={2:`Smol text`,3:`Add`,5:`New`},m={2:r.HeaderArray,3:r.HeaderEmoji,5:r.HeaderNumber},h={2:0,3:0,5:0},g={3:!0},_={2:{baseFontStyle:`10px`}},v=()=>{let{cols:e,getCellContent:t,setCellValueRaw:n,setCellValue:r}=o(60,!1),[s,l]=d.useState(50),u=d.useCallback(()=>{let e=s;for(let r=0;r<6;r++){let i=t([r,e]);n([r,e],a(i))}l(e=>e+1)},[t,s,n]),f=d.useMemo(()=>e.map((e,t)=>({...e,trailingRowOptions:{hint:p[t],addIcon:m[t],targetColumn:h[t],disabled:g[t],themeOverride:_[t]}})),[e]);return d.createElement(i,{...c,getCellContent:t,columns:f,rowMarkers:`both`,onCellEdited:r,trailingRowOptions:{tint:!0,sticky:!0},rows:s,onRowAppended:u})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  const columnsWithRowOptions: GridColumn[] = React.useMemo(() => {
    return cols.map((c, idx) => ({
      ...c,
      trailingRowOptions: {
        hint: trailingRowOptionsColumnIndexesHint[idx],
        addIcon: trailingRowOptionsColumnIndexesIcon[idx],
        targetColumn: trailingRowOptionsColumnIndexesTarget[idx],
        disabled: trailingRowOptionsColumnIndexesDisabled[idx],
        themeOverride: trailingRowOptionsColumnIndexesTheme[idx]
      }
    }));
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columnsWithRowOptions} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    tint: true,
    sticky: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...v.parameters?.docs?.source}}};var y=[`TrailingRowOptions`];export{v as TrailingRowOptions,y as __namedExportsOrder,f as default};