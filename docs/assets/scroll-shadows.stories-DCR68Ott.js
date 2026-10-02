import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(c,{title:`Scroll Shadows`,description:l.createElement(l.Fragment,null,l.createElement(o,null,`You can enable and disable the horizontal/vertical scroll shadows.`))},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t}=a(6),[n,o]=l.useState({rows:r.empty(),columns:r.empty()}),c=l.useCallback(e=>{let t=r.empty();e.current!==void 0&&(t=t.add([e.current.range.y,e.current.range.y+e.current.range.height]));for(let n of e.current?.rangeStack??[])t=t.add([n.y,n.y+n.height]);o({...e,rows:t})},[]),u=l.useMemo(()=>({accentLight:`#b1f6ff`,horizontalBorderColor:`transparent`,headerBottomBorderColor:`rgba(115, 116, 131, 0.16)`}),[]),d=l.useCallback(e=>e%2==0?void 0:{bgCell:`#f5f5f6`},[]);return l.createElement(i,{...s,rowMarkers:`number`,gridSelection:n,onGridSelectionChange:c,fixedShadowX:!1,headerHeight:26,drawFocusRing:!1,rowHeight:22,fixedShadowY:!1,getRowThemeOverride:d,verticalBorder:!1,getCellContent:t,columns:e,rows:1e3,theme:u})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const [selection, setSelection] = React.useState<GridSelection>({
    rows: CompactSelection.empty(),
    columns: CompactSelection.empty()
  });
  const onSelectionChange = React.useCallback((newSel: GridSelection) => {
    let newRows = CompactSelection.empty();
    if (newSel.current !== undefined) {
      newRows = newRows.add([newSel.current.range.y, newSel.current.range.y + newSel.current.range.height]);
    }
    for (const b of newSel.current?.rangeStack ?? []) {
      newRows = newRows.add([b.y, b.y + b.height]);
    }
    setSelection({
      ...newSel,
      rows: newRows
    });
  }, []);
  const theme = React.useMemo<Partial<Theme>>(() => ({
    accentLight: "#b1f6ff",
    horizontalBorderColor: "transparent",
    headerBottomBorderColor: "rgba(115, 116, 131, 0.16)"
  }), []);
  const getRowThemeOverride = React.useCallback(row => row % 2 === 0 ? undefined : {
    bgCell: "#f5f5f6"
  }, []);
  return <DataEditor {...defaultProps} rowMarkers={"number"} gridSelection={selection} onGridSelectionChange={onSelectionChange} fixedShadowX={false} headerHeight={26} drawFocusRing={false} rowHeight={22} fixedShadowY={false} getRowThemeOverride={getRowThemeOverride} verticalBorder={false} getCellContent={getCellContent} columns={cols} rows={1000} theme={theme} />;
}`,...d.parameters?.docs?.source}}};var f=[`ScrollShadows`];export{d as ScrollShadows,f as __namedExportsOrder,u as default};