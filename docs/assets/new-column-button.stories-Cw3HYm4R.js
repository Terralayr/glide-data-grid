import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,r as c,s as l}from"./utils-CIrhwOhG.js";var u=e(t(),1),d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(s,{title:`New column button`,description:u.createElement(a,null,`A new column button can be created using the `,u.createElement(l,null,`rightElement`),`.`)},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t}=i(10,!0),n=u.useMemo(()=>e.map(e=>({...e,grow:1})),[e]);return u.createElement(r,{...o,getCellContent:t,columns:n,rightElement:u.createElement(c,null,u.createElement(`button`,{onClick:()=>window.alert(`Add a column!`)},`+`)),rightElementProps:{fill:!1,sticky:!1},rows:3e3,rowMarkers:`both`})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, true);
  const columns = React.useMemo(() => cols.map(c => ({
    ...c,
    grow: 1
  })), [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rightElement={<ColumnAddButton>
                    <button onClick={() => window.alert("Add a column!")}>+</button>
                </ColumnAddButton>} rightElementProps={{
    fill: false,
    sticky: false
  }} rows={3000} rowMarkers="both" />;
}`,...f.parameters?.docs?.source}}};var p=[`NewColumnButton`];export{f as NewColumnButton,p as __namedExportsOrder,d as default};