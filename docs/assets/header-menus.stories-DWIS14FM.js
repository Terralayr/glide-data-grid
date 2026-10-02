import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./marked.esm-ikSKFM1y.js";import{n as r}from"./story-utils-cF-66lM2.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{t as a}from"./react-laag.esm-BmMZYTh9.js";import{i as o,l as s,n as c,s as l,u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(r,null,d.createElement(c,{title:`Header menus`,description:d.createElement(d.Fragment,null,d.createElement(o,null,`Headers on the data grid can be configured to support menus. We provide the events and the menu icon, you provide the menu. The menu icon can be modified via the`,` `,d.createElement(l,null,`menuIcon`),` prop.`))},d.createElement(e,null)))]},p=n(`div`)({name:`SimpleMenu`,class:`s7szcfi`,propsAsIs:!1}),m=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:r}=u(),o=d.useMemo(()=>e.map((e,t)=>t===2?{...e,hasMenu:!0,menuIcon:`dots`,overlayIcon:`rowOwnerOverlay`}:t===3?{...e,hasMenu:!0,menuIcon:`headerUri`}:{...e,hasMenu:!0}),[e]),[c,l]=d.useState(),f=c!==void 0,{layerProps:m,renderLayer:h}=a({isOpen:f,auto:!0,placement:`bottom-end`,triggerOffset:2,onOutsideClick:()=>l(void 0),trigger:{getBounds:()=>({left:c?.bounds.x??0,top:c?.bounds.y??0,width:c?.bounds.width??0,height:c?.bounds.height??0,right:(c?.bounds.x??0)+(c?.bounds.width??0),bottom:(c?.bounds.y??0)+(c?.bounds.height??0)})}}),g=d.useCallback((e,t)=>{l({col:e,bounds:t})},[]),_=d.useCallback(()=>{console.log(`Header clicked`)},[]);return d.createElement(d.Fragment,null,d.createElement(i,{...s,getCellContent:t,onHeaderMenuClick:g,onHeaderClicked:_,columns:o,onCellContextMenu:(e,t)=>t.preventDefault(),onCellEdited:r,onColumnResize:n,rows:1e3}),f&&h(d.createElement(p,m,d.createElement(`div`,{onClick:()=>l(void 0)},`These do nothing`),d.createElement(`div`,{onClick:()=>l(void 0)},`Add column right`),d.createElement(`div`,{onClick:()=>l(void 0)},`Add column left`),d.createElement(`div`,{className:`danger`,onClick:()=>l(void 0)},`Delete`))))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const realCols = React.useMemo(() => {
    return cols.map((c, index) => {
      if (index === 2) {
        return {
          ...c,
          hasMenu: true,
          menuIcon: "dots",
          overlayIcon: "rowOwnerOverlay"
        };
      } else if (index === 3) {
        return {
          ...c,
          hasMenu: true,
          menuIcon: "headerUri"
        };
      }
      return {
        ...c,
        hasMenu: true
      };
    });
  }, [cols]);
  const [menu, setMenu] = React.useState<{
    col: number;
    bounds: Rectangle;
  }>();
  const isOpen = menu !== undefined;
  const {
    layerProps,
    renderLayer
  } = useLayer({
    isOpen,
    auto: true,
    placement: "bottom-end",
    triggerOffset: 2,
    onOutsideClick: () => setMenu(undefined),
    trigger: {
      getBounds: () => ({
        left: menu?.bounds.x ?? 0,
        top: menu?.bounds.y ?? 0,
        width: menu?.bounds.width ?? 0,
        height: menu?.bounds.height ?? 0,
        right: (menu?.bounds.x ?? 0) + (menu?.bounds.width ?? 0),
        bottom: (menu?.bounds.y ?? 0) + (menu?.bounds.height ?? 0)
      })
    }
  });
  const onHeaderMenuClick = React.useCallback((col: number, bounds: Rectangle) => {
    setMenu({
      col,
      bounds
    });
  }, []);
  const onHeaderClicked = React.useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Header clicked");
  }, []);
  return <>
            <DataEditor {...defaultProps} getCellContent={getCellContent} onHeaderMenuClick={onHeaderMenuClick} onHeaderClicked={onHeaderClicked} columns={realCols} onCellContextMenu={(_, e) => e.preventDefault()} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={1000} />
            {isOpen && renderLayer(<SimpleMenu {...layerProps}>
                        <div onClick={() => setMenu(undefined)}>These do nothing</div>
                        <div onClick={() => setMenu(undefined)}>Add column right</div>
                        <div onClick={() => setMenu(undefined)}>Add column left</div>
                        <div className="danger" onClick={() => setMenu(undefined)}>
                            Delete
                        </div>
                    </SimpleMenu>)}
        </>;
}`,...m.parameters?.docs?.source}}};var h=[`HeaderMenus`];export{m as HeaderMenus,h as __namedExportsOrder,f as default};