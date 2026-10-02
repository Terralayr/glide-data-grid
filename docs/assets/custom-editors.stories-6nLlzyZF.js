import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(c,{title:`Custom Editors`,description:u.createElement(o,null,`The `,u.createElement(l,null,`provideEditor`),` callback allows you to provide a custom editor for a cell. In this example, cells in the first column get a custom editor.`)},u.createElement(e,null)))]},f=e=>{let{value:t,onFinishedEditing:n}=e,[r,i]=u.useState(t.data);return u.createElement(`div`,{style:{width:`100%`,height:`100%`}},`Type something:`,u.createElement(`input`,{style:{width:`100%`,height:`100%`,boxSizing:`border-box`,border:`2px solid #666`,background:`#333`,color:`white`,padding:`0 8px`},value:r,onChange:e=>i(e.target.value),onBlur:()=>n({...t,data:r})}))};f.displayName=`CustomEditor`;var p=e=>{if(e.location?.[0]===0)return e=>u.createElement(f,e)},m=()=>{let{cols:e,getCellContent:t,setCellValue:n}=a(10,!1);return u.createElement(i,{...s,getCellContent:t,columns:e,rows:20,onCellEdited:(e,t)=>{t.kind===r.Text&&n(e,t)},provideEditor:p})};m.displayName=`CustomEditors`,m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={(cell, newValue) => {
    if (newValue.kind !== GridCellKind.Text) return;
    setCellValue(cell, newValue);
  }} provideEditor={provideEditor as ProvideEditorCallback<any>} />;
}`,...m.parameters?.docs?.source}}};var h=[`CustomEditors`];export{m as CustomEditors,h as __namedExportsOrder,d as default};