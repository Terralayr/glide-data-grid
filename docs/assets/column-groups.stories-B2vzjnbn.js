import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{L as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(c,{title:`Column Grouping`,description:u.createElement(o,null,`Columns in the data grid may be grouped by setting their `,u.createElement(l,null,`group`),` `,`property.`)},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t}=a(20,!0,!0);return u.createElement(i,{...s,getCellContent:t,onGroupHeaderRenamed:(e,t)=>window.alert(`Please rename group ${e} to ${t}`),columns:e,rows:1e3,getGroupDetails:e=>({name:e,icon:e===``?void 0:r.HeaderCode}),rowMarkers:`both`})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20, true, true);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onGroupHeaderRenamed={(x, y) => window.alert(\`Please rename group \${x} to \${y}\`)} columns={cols} rows={1000} getGroupDetails={g => ({
    name: g,
    icon: g === "" ? undefined : GridColumnIcon.HeaderCode
  })} rowMarkers="both" />;
}`,...f.parameters?.docs?.source}}};var p=[`ColumnGroups`];export{f as ColumnGroups,p as __namedExportsOrder,d as default};