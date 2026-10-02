import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{r,t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(e,null))]},d=()=>{let{getCellContent:e,cols:t,setCellValue:n}=a(30,!1),u={display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gridColumnGap:`32px`,gridRowGap:`10px`,marginBottom:`10px`,marginTop:`20px`,font:`13px sans-serif`},d={display:`flex`,justifyContent:`space-between`,alignItems:`center`},{copy:f,cut:p,paste:m,pageDown:h,pageUp:g,first:_,last:v,...y}=r,[b,x]=(0,l.useState)(y),S=(e,t)=>{x(n=>({...n,[e]:t}))};return l.createElement(c,{title:`Custom Keybindings`,description:l.createElement(o,null,`This demo showcases custom keybindings. Modify the keybindings using the controls below.`,l.createElement(`div`,{style:u},Object.keys(y).map(e=>l.createElement(`div`,{key:e,style:d},l.createElement(`label`,null,e,`: `),l.createElement(`div`,null,l.createElement(`input`,{type:`checkbox`,checked:b[e]===!0,onChange:t=>S(e,!!t.target.checked)}),l.createElement(`input`,{type:`text`,style:{width:`100px`},value:b[e]||``,onChange:t=>S(e,t.target.value)}))))))},l.createElement(i,{...s,getCellContent:e,onCellEdited:n,keybindings:b,columns:t,rangeSelect:`multi-rect`,rows:100,rowMarkers:`both`}))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    getCellContent,
    cols,
    setCellValue
  } = useMockDataGenerator(30, false);
  const keybindingStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "32px",
    gridRowGap: "10px",
    marginBottom: "10px",
    marginTop: "20px",
    font: "13px sans-serif"
  };
  const controlGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const {
    copy,
    cut,
    paste,
    pageDown,
    pageUp,
    first,
    last,
    ...rest
  } = keybindingDefaults;
  const [keybindings, setKeybindings] = useState<Partial<Keybinds>>(rest);
  const handleKeybindingChange = (key: keyof Keybinds, value: Keybind) => {
    setKeybindings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <BeautifulWrapper title="Custom Keybindings" description={<Description>
                    This demo showcases custom keybindings. Modify the keybindings using the controls below.
                    <div style={keybindingStyle}>
                        {Object.keys(rest).map(key => <div key={key} style={controlGroupStyle}>
                                <label>{key}: </label>
                                <div>
                                    <input type="checkbox" checked={keybindings[key as keyof Keybinds] === true} onChange={e => handleKeybindingChange(key as keyof Keybinds, e.target.checked ? true : false)} />
                                    <input type="text" style={{
            width: "100px"
          }} value={keybindings[key as keyof Keybinds] as string || ""} onChange={e => handleKeybindingChange(key as keyof Keybinds, e.target.value)} />
                                </div>
                            </div>)}
                    </div>
                </Description>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} onCellEdited={setCellValue} keybindings={keybindings} columns={cols} rangeSelect="multi-rect" rows={100} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...d.parameters?.docs?.source}}};var f=[`CustomKeybindings`];export{d as CustomKeybindings,f as __namedExportsOrder,u as default};