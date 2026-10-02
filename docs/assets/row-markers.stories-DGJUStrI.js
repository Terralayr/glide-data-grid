import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Row markers`,description:l.createElement(l.Fragment,null,l.createElement(a,null,`Row Markers can be controlled by setting the `,l.createElement(c,null,`rowMarkers`),` prop.`))},l.createElement(e,null)))]},d=e=>{let{cols:t,getCellContent:n}=i(10,!1);return l.createElement(r,{...o,getCellContent:n,verticalBorder:!1,rowMarkers:{kind:e.markers,checkboxStyle:`square`,headerAlwaysVisible:!0,headerDisabled:e.headerDisabled,headerTheme:{textMedium:`rgba(51, 51, 51, 0.50)`}},columns:t,rows:400})};d.args={markers:`both`,headerDisabled:!1},d.argTypes={markers:{control:{type:`select`},options:[`both`,`checkbox`,`number`,`none`,`clickable-number`,`checkbox-visible`]},headerDisabled:{control:{type:`boolean`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} verticalBorder={false} rowMarkers={{
    kind: p.markers,
    checkboxStyle: "square",
    headerAlwaysVisible: true,
    headerDisabled: p.headerDisabled,
    headerTheme: {
      textMedium: "rgba(51, 51, 51, 0.50)"
    }
  }} columns={cols} rows={400} />;
}`,...d.parameters?.docs?.source}}};var f=[`RowMarkers`];export{d as RowMarkers,f as __namedExportsOrder,u as default};