import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Column Grow`,description:l.createElement(a,null,`Columns in the data grid may be set to grow to fill space by setting the`,` `,l.createElement(c,null,`grow`),` prop.`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,onColumnResize:n}=i(5,!0,!0),a=l.useRef(new Set),s=l.useMemo(()=>e.map((e,t)=>({...e,grow:a.current.has(t)?void 0:(5+t)/5})),[e]);return l.createElement(r,{...o,getCellContent:t,columns:s,rows:1e3,onColumnResize:(e,t,r,i)=>{a.current.add(r),n(e,i)},rowMarkers:`both`})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(5, true, true);
  const hasResized = React.useRef(new Set<number>());
  const columns = React.useMemo(() => {
    return cols.map((x, i) => ({
      ...x,
      grow: hasResized.current.has(i) ? undefined : (5 + i) / 5
    }));
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rows={1000} onColumnResize={(col, _newSize, colIndex, newSizeWithGrow) => {
    hasResized.current.add(colIndex);
    onColumnResize(col, newSizeWithGrow);
  }} rowMarkers="both" />;
}`,...d.parameters?.docs?.source}}};var f=[`StretchColumnSize`];export{d as StretchColumnSize,f as __namedExportsOrder,u as default};