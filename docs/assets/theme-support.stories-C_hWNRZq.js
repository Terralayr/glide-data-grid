import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{i,l as a,n as o,o as s,s as c,u as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(e,null))]},f={accentColor:`#8c96ff`,accentLight:`rgba(202, 206, 255, 0.253)`,textDark:`#ffffff`,textMedium:`#b8b8b8`,textLight:`#a0a0a0`,textBubble:`#ffffff`,bgIconHeader:`#b8b8b8`,fgIconHeader:`#000000`,textHeader:`#a1a1a1`,textHeaderSelected:`#000000`,bgCell:`#16161b`,bgCellMedium:`#202027`,bgHeader:`#212121`,bgHeaderHasFocus:`#474747`,bgHeaderHovered:`#404040`,bgBubble:`#212121`,bgBubbleSelected:`#000000`,bgSearchResult:`#423c24`,borderColor:`rgba(225,225,225,0.2)`,drilldownBorder:`rgba(225,225,225,0.4)`,linkColor:`#4F5DFF`,headerFontStyle:`bold 14px`,baseFontStyle:`13px`,fontFamily:`Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif`,checkboxMaxSize:18},p={accentColor:`#8c96ff`,accentLight:`rgba(202, 206, 255, 0.253)`,textDark:`#ffffff`,textMedium:`rgba(255, 255, 255, 0.9)`,textLight:`rgba(255, 255, 255, 0.7)`,textBubble:`#000000`,bgIconHeader:`#880000`,fgIconHeader:`#ff5555`,textHeader:`rgba(0, 0, 0, 0.9)`,textHeaderSelected:`#000000`,bgCell:`#ff0000`,bgCellMedium:`#ff4d4d`,bgHeader:`#f3f300`,bgHeaderHasFocus:`#eeee00`,bgHeaderHovered:`#e0e000`,bgBubble:`#ffff00`,bgBubbleSelected:`#ffff00`,bgSearchResult:`#423c24`,borderColor:`#ffff00`,drilldownBorder:`#ffff00`,linkColor:`#4F5DFF`,headerFontStyle:`bold 14px`,baseFontStyle:`13px`,fontFamily:`Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif`,roundingRadius:6,checkboxMaxSize:40},m=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:d}=l(),[m,h]=u.useState({}),[g,_]=u.useState(1e3),v=u.useCallback(()=>{let e=g;_(e=>e+1);for(let t=0;t<6;t++)d([t,e],{displayData:``,data:``})},[g,d]);return u.createElement(o,{title:`Theme support`,description:u.createElement(u.Fragment,null,u.createElement(i,null,`DataGrid respects the theme provided by the `,u.createElement(c,null,`theme`),` prop.`),u.createElement(s,null,u.createElement(`button`,{onClick:()=>h({})},`Light`),` or`,` `,u.createElement(`button`,{onClick:()=>h(f)},`Dark`),` even`,` `,u.createElement(`button`,{onClick:()=>h(p)},`Hotdog Stand`)))},u.createElement(r,{...a,theme:m,getCellContent:t,columns:e,onRowAppended:v,trailingRowOptions:{tint:!0,sticky:!0},onCellEdited:d,onColumnResize:n,rows:g}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [theme, setTheme] = React.useState<Partial<Theme>>({});
  const [numRows, setNumRows] = React.useState(1000);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    setNumRows(cv => cv + 1);
    for (let c = 0; c < 6; c++) {
      setCellValue([c, newRow], {
        displayData: "",
        data: ""
      } as any);
    }
  }, [numRows, setCellValue]);
  return <BeautifulWrapper title="Theme support" description={<>
                    <Description>
                        DataGrid respects the theme provided by the <PropName>theme</PropName> prop.
                    </Description>
                    <MoreInfo>
                        <button onClick={() => setTheme({})}>Light</button> or{" "}
                        <button onClick={() => setTheme(darkTheme)}>Dark</button> even{" "}
                        <button onClick={() => setTheme(hotdogStand)}>Hotdog Stand</button>
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} theme={theme} getCellContent={getCellContent} columns={cols} onRowAppended={onRowAppended} trailingRowOptions={{
      tint: true,
      sticky: true
    }} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={numRows} />
        </BeautifulWrapper>;
}`,...m.parameters?.docs?.source}}};var h=[`ThemeSupport`];export{m as ThemeSupport,h as __namedExportsOrder,d as default};