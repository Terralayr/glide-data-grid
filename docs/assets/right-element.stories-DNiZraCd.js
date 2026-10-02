import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Right Element`,description:l.createElement(a,null,`A DOM element may be added as a trailer to the grid by using the`,` `,l.createElement(c,null,`rightElement`),` prop.`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,setCellValue:n}=i(8,!1),a=l.useMemo(()=>e.map(e=>({...e,grow:1})),[e]),[s,c]=l.useState(300),u=l.useCallback(()=>{let e=s;c(e=>e+1);for(let t=0;t<6;t++)n([t,e],{displayData:``,data:``})},[s,n]);return l.createElement(r,{...o,getCellContent:t,columns:a,rowMarkers:`both`,onCellEdited:n,trailingRowOptions:{hint:`New row...`,sticky:!0,tint:!0},rows:s,onRowAppended:u,rightElementProps:{sticky:!0},rightElement:l.createElement(`div`,{style:{height:`100%`,padding:`20px 20px 40px 20px`,width:200,color:`black`,whiteSpace:`pre-wrap`,backgroundColor:`rgba(240, 240, 250, 0.2)`,display:`flex`,justifyContent:`center`,alignItems:`center`,boxShadow:`0 0 10px rgba(0, 0, 0, 0.15)`,backdropFilter:`blur(12px)`}},`This is a real DOM element. You can put whatever you want here. You can also size it as big as you want. `,`

`,`It also does not have to be sticky.`)})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(8, false);
  const columns = React.useMemo(() => cols.map(c => ({
    ...c,
    grow: 1
  })), [cols]);
  const [numRows, setNumRows] = React.useState(300);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    setNumRows(cv => cv + 1);
    for (let c = 0; c < 6; c++) {
      setCellValue([c, newRow], {
        displayData: "",
        data: ""
      } as any);
    }
  }, [numRows, setCellValue]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    hint: "New row...",
    sticky: true,
    tint: true
  }} rows={numRows} onRowAppended={onRowAppended} rightElementProps={{
    sticky: true
  }} rightElement={<div style={{
    height: "100%",
    padding: "20px 20px 40px 20px",
    width: 200,
    color: "black",
    whiteSpace: "pre-wrap",
    backgroundColor: "rgba(240, 240, 250, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(12px)"
  }}>
                    This is a real DOM element. You can put whatever you want here. You can also size it as big as you
                    want. {"\\n\\n"}It also does not have to be sticky.
                </div>} />;
}`,...d.parameters?.docs?.source}}};var f=[`RightElement`];export{d as RightElement,f as __namedExportsOrder,u as default};