import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{t as i}from"./react-laag.esm-BmMZYTh9.js";import{d as a,i as o,l as s,n as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(c,{title:`Tooltips`,className:`double`,description:u.createElement(o,null,`Using the `,u.createElement(l,null,`onItemHovered`),` event makes it easy to create tooltips. This story is intentionally forced to scroll vertically so layout in scrolling documents can be confirmed.`)},u.createElement(e,null)))]},f={left:0,top:0,width:0,height:0,bottom:0,right:0},p=()=>{let{cols:e,getCellContent:t}=a(6),[n,o]=u.useState(),c=u.useRef(0),l=u.useCallback(e=>{e.kind===`cell`?(window.clearTimeout(c.current),o(void 0),c.current=window.setTimeout(()=>{o({val:`Tooltip for ${e.location[0]}, ${e.location[1]}`,bounds:{left:e.bounds.x,top:e.bounds.y,width:e.bounds.width,height:e.bounds.height,right:e.bounds.x+e.bounds.width,bottom:e.bounds.y+e.bounds.height}})},1e3)):(window.clearTimeout(c.current),c.current=0,o(void 0))},[]);u.useEffect(()=>()=>window.clearTimeout(c.current),[]);let d=n!==void 0,{renderLayer:p,layerProps:m}=i({isOpen:d,triggerOffset:4,auto:!0,container:`portal`,trigger:{getBounds:()=>n?.bounds??f}});return u.createElement(u.Fragment,null,u.createElement(r,{...s,onItemHovered:l,getCellContent:t,columns:e,rowMarkers:`both`,rows:1e3}),d&&p(u.createElement(`div`,{...m,style:{...m.style,padding:`8px 12px`,color:`white`,font:`500 13px Inter`,backgroundColor:`rgba(0, 0, 0, 0.85)`,borderRadius:9}},n.val)))};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const [tooltip, setTooltip] = React.useState<{
    val: string;
    bounds: IBounds;
  } | undefined>();
  const timeoutRef = React.useRef(0);
  const onItemHovered = React.useCallback((args: GridMouseEventArgs) => {
    if (args.kind === "cell") {
      window.clearTimeout(timeoutRef.current);
      setTooltip(undefined);
      timeoutRef.current = window.setTimeout(() => {
        setTooltip({
          val: \`Tooltip for \${args.location[0]}, \${args.location[1]}\`,
          bounds: {
            // translate to react-laag types
            left: args.bounds.x,
            top: args.bounds.y,
            width: args.bounds.width,
            height: args.bounds.height,
            right: args.bounds.x + args.bounds.width,
            bottom: args.bounds.y + args.bounds.height
          }
        });
      }, 1000);
    } else {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = 0;
      setTooltip(undefined);
    }
  }, []);
  React.useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  const isOpen = tooltip !== undefined;
  const {
    renderLayer,
    layerProps
  } = useLayer({
    isOpen,
    triggerOffset: 4,
    auto: true,
    container: "portal",
    trigger: {
      getBounds: () => tooltip?.bounds ?? zeroBounds
    }
  });
  return <>
            <DataEditor {...defaultProps} onItemHovered={onItemHovered} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={1000} />
            {isOpen && renderLayer(<div {...layerProps} style={{
      ...layerProps.style,
      padding: "8px 12px",
      color: "white",
      font: "500 13px Inter",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      borderRadius: 9
    }}>
                        {tooltip.val}
                    </div>)}
        </>;
}`,...p.parameters?.docs?.source}}};var m=[`Tooltips`];export{p as Tooltips,m as __namedExportsOrder,d as default};