import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u,s as d}from"./utils-CIrhwOhG.js";var f=e(t(),1),p={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>f.createElement(n,null,f.createElement(e,null))]},m=()=>{let{cols:e,getCellContent:t,setCellValueRaw:n,setCellValue:p}=o(60,!1),[m,h]=f.useState(50),g=f.useRef(null),_=f.useCallback(()=>{g.current?.appendRow(3,!1)},[g]),v=f.useCallback(()=>{let e=m;for(let r=0;r<6;r++){let i=t([r,e]);n([r,e],a(i))}h(e=>e+1)},[t,m,n]);return f.createElement(l,{title:`appendRow Ref`,description:f.createElement(f.Fragment,null,f.createElement(s,null,`Adding data can also be triggered from outside of `,f.createElement(d,null,`DataEditor`)),f.createElement(u,null,`By calling `,f.createElement(d,null,`appendRow`),` on a `,f.createElement(d,null,`ref`),` to your grid, you can trigger the append elsewhere, like this `,f.createElement(i,{onClick:_},`Append`),` button`))},f.createElement(r,{...c,ref:g,getCellContent:t,columns:e,rowMarkers:`both`,onCellEdited:p,trailingRowOptions:{hint:`New row...`,sticky:!0,tint:!0},rows:m,onRowAppended:v}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const ref = React.useRef<DataEditorRef>(null);
  const onClick = React.useCallback(() => {
    void ref.current?.appendRow(3, false);
  }, [ref]);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  return <BeautifulWrapper title="appendRow Ref" description={<>
                    <Description>
                        Adding data can also be triggered from outside of <PropName>DataEditor</PropName>
                    </Description>
                    <MoreInfo>
                        By calling <PropName>appendRow</PropName> on a <PropName>ref</PropName> to your grid, you can
                        trigger the append elsewhere, like this <KeyName onClick={onClick}>Append</KeyName> button
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} ref={ref} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
      hint: "New row...",
      sticky: true,
      tint: true
    }} rows={numRows} onRowAppended={onRowAppended} />
        </BeautifulWrapper>;
}`,...m.parameters?.docs?.source}}};var h=[`AppendRowHandle`];export{m as AppendRowHandle,h as __namedExportsOrder,p as default};