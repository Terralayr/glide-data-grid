import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,t as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,null,c.createElement(`h1`,null,`Layout Integration`),c.createElement(a,null,`Trying the grid in different situations`),c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t}=i(1e3,!0,!0);return c.createElement(c.Fragment,null,c.createElement(r,{...o,getCellContent:t,columns:e,rows:10,rowMarkers:`both`,height:200}),c.createElement(r,{...o,getCellContent:t,columns:e,rows:10,rowMarkers:`both`}),c.createElement(`div`,{style:{display:`flex`,height:`300px`}},c.createElement(r,{...o,getCellContent:t,columns:e,rows:10,rowMarkers:`both`}),c.createElement(`div`,{style:{flexShrink:0}},`This is some text what happens here?`)))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(1000, true, true);
  return <>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" height={200} />
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" />
            <div style={{
      display: "flex",
      height: "300px"
    }}>
                <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" />
                <div style={{
        flexShrink: 0
      }}>This is some text what happens here?</div>
            </div>
        </>;
}`,...u.parameters?.docs?.source}}};var d=[`LayoutIntegration`];export{u as LayoutIntegration,d as __namedExportsOrder,l as default};