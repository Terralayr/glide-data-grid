import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{c as n}from"./throttle-B5g2Mj5j.js";import{n as r}from"./story-utils-cF-66lM2.js";import{I as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";import{t as o}from"./faker-stub-hmYoZM2V.js";import{d as s,i as c,l,n as u,s as d}from"./utils-CIrhwOhG.js";var f=e(t(),1),p=e(n(),1),m={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>f.createElement(r,null,f.createElement(u,{title:`Wrapping Text`,description:f.createElement(c,null,`Text cells can have wrapping text by setting the `,f.createElement(d,null,`allowWrapping`),` prop to true.`)},f.createElement(e,null)))]},h=e=>{let{cols:t,getCellContent:n,onColumnResize:r}=s(6),c=f.useMemo(()=>(0,p.default)(0,100).map(()=>o.lorem.sentence(e.length)),[e.length]),u=f.useCallback(t=>{let[r,a]=t;return r===0?{kind:i.Text,allowOverlay:!0,displayData:`${a},\n${c[a%c.length]}`,data:`${a}, \n${c}`,allowWrapping:!0,contentAlign:e.alignment}:n(t)},[n,e.alignment,c]);return f.createElement(a,{...l,rowHeight:80,getCellContent:u,columns:t,rows:1e3,onColumnResize:r,experimental:{hyperWrapping:e.hyperWrapping}})};h.args={alignment:`left`,length:20,hyperWrapping:!1},h.argTypes={alignment:{control:{type:`select`},options:[`left`,`center`,`right`]},length:{control:{type:`range`,min:2,max:200}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(6);
  const suffix = React.useMemo(() => {
    return range(0, 100).map(() => faker.lorem.sentence(p.length));
  }, [p.length]);
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(i => {
    const [col, row] = i;
    if (col === 0) {
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        displayData: \`\${row},\\n\${suffix[row % suffix.length]}\`,
        data: \`\${row}, \\n\${suffix}\`,
        allowWrapping: true,
        contentAlign: p.alignment
      };
    }
    return getCellContent(i);
  }, [getCellContent, p.alignment, suffix]);
  return <DataEditor {...defaultProps} rowHeight={80} getCellContent={mangledGetCellContent} columns={cols} rows={1000} onColumnResize={onColumnResize} experimental={{
    hyperWrapping: p.hyperWrapping
  }} />;
}`,...h.parameters?.docs?.source}}};var g=[`WrappingText`];export{h as WrappingText,g as __namedExportsOrder,m as default};