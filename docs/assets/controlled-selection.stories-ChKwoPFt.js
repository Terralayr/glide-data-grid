import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(e,null))]},f=()=>{let{cols:e,getCellContent:t}=a(30,!0,!0),[n,d]=u.useState({columns:r.empty(),rows:r.empty()});return u.createElement(c,{title:`Controlled Selection`,description:u.createElement(o,null,`The selection of the grid can be controlled via `,u.createElement(l,null,`GridSelection`),` and`,` `,u.createElement(l,null,`onGridSelectionChange`),`.`,u.createElement(`input`,{type:`range`,min:0,max:29,value:n.current?.cell[0]??0,onChange:e=>{let t=e.target.valueAsNumber;d(e=>({...e,current:{cell:[t,e.current?.cell[1]??0],range:{x:t,y:e.current?.cell[1]??0,width:1,height:1},rangeStack:[]}}))}}),u.createElement(`input`,{type:`range`,min:0,max:99,value:n.current?.cell[1]??0,onChange:e=>{let t=e.target.valueAsNumber;d(e=>({...e,current:{cell:[e.current?.cell[0]??0,t],range:{x:e.current?.cell[0]??0,y:t,width:1,height:1},rangeStack:[]}}))}}))},u.createElement(i,{...s,getCellContent:t,gridSelection:n,onGridSelectionChange:d,columns:e,rows:100,rowMarkers:`both`}))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30, true, true);
  const [selection, setSelection] = React.useState<GridSelection>({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  return <BeautifulWrapper title="Controlled Selection" description={<Description>
                    The selection of the grid can be controlled via <PropName>GridSelection</PropName> and{" "}
                    <PropName>onGridSelectionChange</PropName>.
                    <input type="range" min={0} max={29} value={selection.current?.cell[0] ?? 0} onChange={e => {
      const newCol = e.target.valueAsNumber;
      setSelection(cv => ({
        ...cv,
        current: {
          cell: [newCol, cv.current?.cell[1] ?? 0],
          range: {
            x: newCol,
            y: cv.current?.cell[1] ?? 0,
            width: 1,
            height: 1
          },
          rangeStack: []
        }
      }));
    }} />
                    <input type="range" min={0} max={99} value={selection.current?.cell[1] ?? 0} onChange={e => {
      const newRow = e.target.valueAsNumber;
      setSelection(cv => ({
        ...cv,
        current: {
          cell: [cv.current?.cell[0] ?? 0, newRow],
          range: {
            x: cv.current?.cell[0] ?? 0,
            y: newRow,
            width: 1,
            height: 1
          },
          rangeStack: []
        }
      }));
    }} />
                </Description>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} rows={100} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...f.parameters?.docs?.source}}};var p=[`ControlledSelection`];export{f as ControlledSelection,p as __namedExportsOrder,d as default};