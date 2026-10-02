import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Theme per row`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`Each row can provide theme overrides for rendering that row using the`,` `,l.createElement(c,null,`getRowThemeOverride`),` callback.`))},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:a}=i(5),s=l.useMemo(()=>{let t=[...e];return t[3]={...t[3],themeOverride:{bgCell:`#d6fafd`}},t},[e]);return l.createElement(r,{...o,getCellContent:t,columns:s,height:`100%`,getRowThemeOverride:e=>e%2==0?void 0:{bgCell:`#e0f0ff88`},onCellEdited:a,onColumnResize:n,rows:10})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useMockDataGenerator(5);
  const realCols = React.useMemo(() => {
    const c = [...cols];
    c[3] = {
      ...c[3],
      themeOverride: {
        bgCell: "#d6fafd"
      }
    };
    return c;
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={realCols} height="100%"
  // trailingRowOptions={{
  //     sticky: true,
  //     tint: true,
  // }}
  // onRowAppended={() => undefined}
  getRowThemeOverride={i => i % 2 === 0 ? undefined : {
    bgCell: "#e0f0ff88"
    //   borderColor: "#3f90e0",
  }} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={10} />;
}`,...d.parameters?.docs?.source}}};var f=[`ThemePerRow`];export{d as ThemePerRow,f as __namedExportsOrder,u as default};