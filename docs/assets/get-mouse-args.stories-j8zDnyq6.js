import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(e,null))]},d=()=>{let{cols:e,getCellContent:t}=i(6),n=l.useRef(null),[u,d]=l.useState(`Move the mouse over the grid`),f=l.useCallback(e=>{let t=n.current?.getMouseArgsForPosition(e.clientX,e.clientY,e);t===void 0?d(`Outside grid`):t.kind===`cell`?d(`Cell ${t.location[0]}, ${t.location[1]}`):d(t.kind)},[]);return l.createElement(s,{title:`getMouseArgsForPosition`,description:l.createElement(a,null,`Use `,l.createElement(c,null,`getMouseArgsForPosition`),` to translate pointer coordinates into grid locations.`)},l.createElement(`div`,{onMouseMove:f},l.createElement(r,{...o,ref:n,columns:e,getCellContent:t,rows:1e3})),l.createElement(`div`,{style:{marginTop:8}},u))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const ref = React.useRef<DataEditorRef>(null);
  const [info, setInfo] = React.useState<string>("Move the mouse over the grid");
  const onMouseMove = React.useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    const args = ref.current?.getMouseArgsForPosition(ev.clientX, ev.clientY, ev);
    if (args === undefined) {
      setInfo("Outside grid");
    } else if (args.kind === "cell") {
      setInfo(\`Cell \${args.location[0]}, \${args.location[1]}\`);
    } else {
      setInfo(args.kind);
    }
  }, []);
  return <BeautifulWrapper title="getMouseArgsForPosition" description={<Description>
                    Use <PropName>getMouseArgsForPosition</PropName> to translate
                    pointer coordinates into grid locations.
                </Description>}>
            <div onMouseMove={onMouseMove}>
                <DataEditor {...defaultProps} ref={ref} columns={cols} getCellContent={getCellContent} rows={1000} />
            </div>
            <div style={{
      marginTop: 8
    }}>{info}</div>
        </BeautifulWrapper>;
}`,...d.parameters?.docs?.source}}};var f=[`GetMouseArgsForPosition`];export{d as GetMouseArgsForPosition,f as __namedExportsOrder,u as default};