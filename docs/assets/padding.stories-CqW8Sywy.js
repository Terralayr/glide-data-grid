import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Padding`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`You can add padding at the ends of the grid by setting the`,` `,l.createElement(c,null,`paddingRight`),` and `,l.createElement(c,null,`paddingBottom`),` props`))},l.createElement(e,null)))]},d=e=>{let{paddingRight:t,paddingBottom:n}=e,{cols:a,getCellContent:s}=i(20);return l.createElement(r,{...o,getCellContent:s,columns:a,rowMarkers:`both`,experimental:{paddingRight:t,paddingBottom:n},rows:50})};d.argTypes={paddingRight:{control:{type:`range`,min:0,max:600}},paddingBottom:{control:{type:`range`,min:0,max:600}}},d.args={paddingRight:200,paddingBottom:200},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`p => {
  const {
    paddingRight,
    paddingBottom
  } = p;
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} experimental={{
    paddingRight,
    paddingBottom
  }} rows={50} />;
}`,...d.parameters?.docs?.source}}};var f=[`Padding`];export{d as Padding,f as __namedExportsOrder,u as default};