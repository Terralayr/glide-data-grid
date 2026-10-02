import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";import{t as l}from"./lodash-DvAq8kyA.js";var u=e(t(),1);l();var d={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>u.createElement(n,null,u.createElement(s,{title:`Scroll Offset`,description:u.createElement(a,null,`The `,u.createElement(c,null,`rowGrouping`),` prop can be used to group and even fold rows.`)},u.createElement(e,null)))]},f=()=>{let{cols:e,getCellContent:t}=i(100);return u.createElement(r,{...o,height:`100%`,rowMarkers:`both`,scrollOffsetY:400,getCellContent:t,columns:e,rows:1e3})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...f.parameters?.docs?.source}}};var p=[`ScrollOffset`];export{f as ScrollOffset,p as __namedExportsOrder,d as default};