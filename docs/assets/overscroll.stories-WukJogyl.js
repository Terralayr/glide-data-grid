import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Overscroll`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`You can allocate extra space at the ends of the grid by setting the`,` `,l.createElement(c,null,`overscrollX`),` and `,l.createElement(c,null,`overscrollY`),` props`))},l.createElement(e,null)))]},d=e=>{let{overscrollX:t,overscrollY:n}=e,{cols:a,getCellContent:s}=i(20);return l.createElement(r,{...o,getCellContent:s,columns:a,overscrollX:t,overscrollY:n,rows:50})};d.argTypes={overscrollX:{control:{type:`range`,min:0,max:600}},overscrollY:{control:{type:`range`,min:0,max:600}}},d.args={overscrollX:200,overscrollY:200},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`p => {
  const {
    overscrollX,
    overscrollY
  } = p;
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} overscrollX={overscrollX} overscrollY={overscrollY} rows={50} />;
}`,...d.parameters?.docs?.source}}};var f=[`Overscroll`];export{d as Overscroll,f as __namedExportsOrder,u as default};