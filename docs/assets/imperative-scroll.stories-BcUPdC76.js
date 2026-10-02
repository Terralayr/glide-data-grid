import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{i,l as a,n as o,o as s,s as c,u as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(e,null))]},f=e=>{let{cols:t,getCellContent:n,onColumnResize:d,setCellValue:f}=l(),p=u.useRef(null);return u.createElement(o,{title:`Imperative scrolling`,description:u.createElement(u.Fragment,null,u.createElement(i,null,`You can imperatively scroll to a cell by calling `,u.createElement(c,null,`scrollTo`),` on a DataEditor ref.`),u.createElement(s,null,`Click `,u.createElement(`button`,{onClick:()=>{p.current?.scrollTo(4,99,`both`,e.paddingX,e.paddingY,{vAlign:e.vAlign,hAlign:e.hAlign,behavior:e.behavior})}},`Here`),` to scroll to column 4 row 100`))},u.createElement(r,{...a,ref:p,rowMarkers:`clickable-number`,getCellContent:n,columns:t,onCellEdited:f,onColumnResize:d,rows:1e4}))};f.args={paddingY:0,paddingX:0,vAlign:`start`,hAlign:`start`,behavior:`auto`},f.argTypes={paddingY:0,paddingX:0,vAlign:{control:{type:`select`},options:[`start`,`center`,`end`,void 0]},hAlign:{control:{type:`select`},options:[`start`,`center`,`end`,void 0]},behavior:{control:{type:`select`},options:[`smooth`,`instant`,`auto`,void 0]}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const ref = React.useRef<DataEditorRef>(null);
  const onClick = () => {
    ref.current?.scrollTo(4, 99, "both", p.paddingX, p.paddingY, {
      vAlign: p.vAlign,
      hAlign: p.hAlign,
      behavior: p.behavior
    });
  };
  return <BeautifulWrapper title="Imperative scrolling" description={<>
                    <Description>
                        You can imperatively scroll to a cell by calling <PropName>scrollTo</PropName> on a DataEditor
                        ref.
                    </Description>
                    <MoreInfo>
                        Click <button onClick={onClick}>Here</button> to scroll to column 4 row 100
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} ref={ref} rowMarkers="clickable-number" getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={10_000} />
        </BeautifulWrapper>;
}`,...f.parameters?.docs?.source}}};var p=[`ImperativeScroll`];export{f as ImperativeScroll,p as __namedExportsOrder,d as default};