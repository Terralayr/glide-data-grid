import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{a as i,i as a,l as o,n as s,o as c,s as l,u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(e,null))]},p=e=>{let{cols:t,getCellContent:n,onColumnResize:f,setCellValue:p}=u(),m=d.useCallback(e=>{let t=n(e);return e[0]===3?{...t,activationBehaviorOverride:`single-click`,hoverEffect:!0}:t},[n]),[h,g]=d.useState(void 0),_=d.useCallback(e=>{g(e)},[]);return d.createElement(s,{title:`Cell Activated event`,description:d.createElement(d.Fragment,null,d.createElement(a,null,`When you tap `,d.createElement(i,null,`Enter`),`, `,d.createElement(i,null,`Space`),`, start typing, or double click a cell, that cell is activated. You can track this with `,d.createElement(l,null,`onCellActivated`),`.`),d.createElement(c,null,`Last activated cell:`,` `,h===void 0?`none`:`(${h[0]}, ${h[1]})`))},d.createElement(r,{...o,cellActivationBehavior:e.cellActivationBehavior,getCellContent:m,getCellsForSelection:!0,columns:t,onCellEdited:p,onColumnResize:f,onCellActivated:_,rows:1e4}))};p.argTypes={cellActivationBehavior:{control:{type:`select`},options:[`double-click`,`single-click`,`second-click`]}},p.args={cellActivationBehavior:`second-click`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const getCellContentMangled = React.useCallback((item: Item): GridCell => {
    const result = getCellContent(item);
    if (item[0] === 3) {
      return {
        ...result,
        activationBehaviorOverride: "single-click",
        hoverEffect: true
      } as any;
    }
    return result;
  }, [getCellContent]);
  const [lastActivated, setLastActivated] = React.useState<Item | undefined>(undefined);
  const onCellActivated = React.useCallback((cell: Item) => {
    setLastActivated(cell);
  }, []);
  return <BeautifulWrapper title="Cell Activated event" description={<>
                    <Description>
                        When you tap <KeyName>Enter</KeyName>, <KeyName>Space</KeyName>, start typing, or double click a cell,
                        that cell is activated. You can track this with <PropName>onCellActivated</PropName>.
                    </Description>
                    <MoreInfo>
                        Last activated cell:{" "}
                        {lastActivated === undefined ? "none" : \`(\${lastActivated[0]}, \${lastActivated[1]})\`}
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps}
    // editorBloom={[-1, -4]}
    cellActivationBehavior={p.cellActivationBehavior} getCellContent={getCellContentMangled}
    //initialSize={[849, 967]}
    //scrollOffsetY={10_000}
    getCellsForSelection={true} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} onCellActivated={onCellActivated} rows={10_000} />
        </BeautifulWrapper>;
}`,...p.parameters?.docs?.source}}};var m=[`CellActivatedEvent`];export{p as CellActivatedEvent,m as __namedExportsOrder,f as default};