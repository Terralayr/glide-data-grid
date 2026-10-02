import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./marked.esm-ikSKFM1y.js";import{t as r}from"./story-utils-cF-66lM2.js";import{C as i,F as a,I as o,n as s,t as c,x as l}from"./image-window-loader-DFAb4QQA.js";import{t as u}from"./scrolling-data-grid-BQ1UTepg.js";var d=e(t(),1),f=n(`div`)({name:`InnerContainer`,class:`i1iwi3t9`,propsAsIs:!1}),p=e=>{if(e.kind!==o.Custom)return s.find(t=>t.kind===e.kind)},m={title:`Subcomponents/ScrollingDataGrid`,decorators:[e=>d.createElement(`div`,null,d.createElement(r,{width:1500,height:1e3},d.createElement(f,null,d.createElement(e,null))))]};function h(){let[e,t]=d.useState(0),[n,r]=d.useState(0),[s,f]=d.useState(0),[m,h]=d.useState(0),g=d.useCallback((e,n,i)=>{t(e.x),r(e.y),f(n),h(i)},[]),_=d.useMemo(()=>{let e=0;return[`One`,`Two`,`Three`,`Four`,`Five`,`Six`,`Seven`,`Eight`,`Nine`,`Ten`].map(t=>({title:t,width:122+(e+=50)}))},[]),v=d.useCallback(([e,t])=>({kind:o.Text,displayData:`${e},${t} Testing things that are way too long`,data:`${e},${t} Testing things that are way too long`,allowOverlay:!0}),[]);return d.createElement(u,{getCellRenderer:p,onMouseMove:()=>void 0,rows:1e4,enableGroups:!1,clientSize:[1e3,1e3,0],resizeIndicator:`full`,cellXOffset:e,cellYOffset:n,drawHeader:void 0,experimental:void 0,headerIcons:void 0,isDraggable:void 0,nonGrowWidth:1e3,onCanvasBlur:()=>void 0,onCanvasFocused:()=>void 0,onCellFocused:()=>void 0,onContextMenu:()=>void 0,onDragEnd:()=>void 0,onDragLeave:()=>void 0,onDragOverCell:()=>void 0,onDragStart:()=>void 0,onDrop:()=>void 0,onHeaderIndicatorClick:()=>void 0,onItemHovered:()=>void 0,onKeyDown:()=>void 0,onKeyUp:()=>void 0,onMouseDown:()=>void 0,onMouseUp:()=>void 0,canvasRef:void 0,className:void 0,drawCell:void 0,disabledRows:void 0,fillHandle:void 0,fixedShadowX:void 0,fixedShadowY:void 0,getGroupDetails:void 0,getRowThemeOverride:void 0,highlightRegions:void 0,imageWindowLoader:new c,onHeaderMenuClick:void 0,prelightCells:void 0,drawFocusRing:!0,initialSize:void 0,overscrollX:void 0,overscrollY:void 0,preventDiagonalScrolling:void 0,rightElement:void 0,rightElementProps:void 0,scrollRef:void 0,minColumnWidth:50,isFocused:!0,theme:i(l()),isFilling:!1,maxColumnWidth:500,accessibilityHeight:50,translateX:s,translateY:m,lockColumns:0,selection:{current:void 0,rows:a.empty(),columns:a.empty()},firstColAccessible:!0,groupHeaderHeight:34,headerHeight:44,freezeTrailingRows:0,hasAppendRow:!1,rowHeight:34,onVisibleRegionChanged:g,columns:_,getCellContent:v,freezeColumns:0,verticalBorder:()=>!0,smoothScrollX:!0,smoothScrollY:!0})}h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`function Simplenotest() {
  const [x, setX] = React.useState<number>(0);
  const [y, setY] = React.useState<number>(0);
  const [translateX, setTx] = React.useState<number | undefined>(0);
  const [translateY, setTy] = React.useState<number | undefined>(0);
  const onVisibleRegionChanged = React.useCallback((range: Rectangle, tx?: number, ty?: number) => {
    setX(range.x);
    setY(range.y);
    setTx(tx);
    setTy(ty);
  }, []);
  const columns = React.useMemo(() => {
    let j = 0;
    return ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"].map(t => ({
      title: t,
      width: 122 + (j += 50)
    }));
  }, []);
  const getCellContent = React.useCallback(([col, row]: Item): GridCell => ({
    kind: GridCellKind.Text,
    displayData: \`\${col},\${row} Testing things that are way too long\`,
    data: \`\${col},\${row} Testing things that are way too long\`,
    allowOverlay: true
  }), []);
  return <GridScroller getCellRenderer={getCellRenderer} onMouseMove={() => undefined} rows={10_000} enableGroups={false} clientSize={[1000, 1000, 0]} resizeIndicator="full" cellXOffset={x} cellYOffset={y} drawHeader={undefined} experimental={undefined} headerIcons={undefined} isDraggable={undefined} nonGrowWidth={1000} onCanvasBlur={() => undefined} onCanvasFocused={() => undefined} onCellFocused={() => undefined} onContextMenu={() => undefined} onDragEnd={() => undefined} onDragLeave={() => undefined} onDragOverCell={() => undefined} onDragStart={() => undefined} onDrop={() => undefined} onHeaderIndicatorClick={() => undefined} onItemHovered={() => undefined} onKeyDown={() => undefined} onKeyUp={() => undefined} onMouseDown={() => undefined} onMouseUp={() => undefined} canvasRef={undefined} className={undefined} drawCell={undefined} disabledRows={undefined} fillHandle={undefined} fixedShadowX={undefined} fixedShadowY={undefined} getGroupDetails={undefined} getRowThemeOverride={undefined} highlightRegions={undefined} imageWindowLoader={new ImageWindowLoaderImpl()} onHeaderMenuClick={undefined} prelightCells={undefined} drawFocusRing={true} initialSize={undefined} overscrollX={undefined} overscrollY={undefined} preventDiagonalScrolling={undefined} rightElement={undefined} rightElementProps={undefined} scrollRef={undefined} minColumnWidth={50} isFocused={true} theme={mergeAndRealizeTheme(getDefaultTheme())} isFilling={false} maxColumnWidth={500} accessibilityHeight={50} translateX={translateX} translateY={translateY} lockColumns={0} selection={{
    current: undefined,
    rows: CompactSelection.empty(),
    columns: CompactSelection.empty()
  }} firstColAccessible={true} groupHeaderHeight={34} headerHeight={44} freezeTrailingRows={0} hasAppendRow={false} rowHeight={34} onVisibleRegionChanged={onVisibleRegionChanged} columns={columns} getCellContent={getCellContent} freezeColumns={0} verticalBorder={() => true} smoothScrollX={true} smoothScrollY={true} />;
}`,...h.parameters?.docs?.source}}};var g=[`Simplenotest`];export{h as Simplenotest,g as __namedExportsOrder,m as default};