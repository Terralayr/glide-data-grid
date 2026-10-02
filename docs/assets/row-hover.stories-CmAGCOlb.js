import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{i,l as a,n as o,s,u as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(o,{title:`Row Hover Effect`,description:l.createElement(i,null,`Through careful usage of the `,l.createElement(s,null,`onItemHovered`),` callback it is possible to easily create a row hover effect.`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t}=c(),[n,i]=l.useState(void 0),o=l.useCallback(e=>{let[t,n]=e.location;i(e.kind===`cell`?n:void 0)},[]),s=l.useCallback(e=>{if(e===n)return{bgCell:`#f7f7f7`,bgCellMedium:`#f0f0f0`}},[n]);return l.createElement(r,{...a,rowMarkers:`both`,onItemHovered:o,getCellContent:t,getRowThemeOverride:s,columns:e,rows:300})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useAllMockedKinds();
  const [hoverRow, setHoverRow] = React.useState<number | undefined>(undefined);
  const onItemHovered = React.useCallback((args: GridMouseEventArgs) => {
    const [_, row] = args.location;
    setHoverRow(args.kind !== "cell" ? undefined : row);
  }, []);
  const getRowThemeOverride = React.useCallback<GetRowThemeCallback>(row => {
    if (row !== hoverRow) return undefined;
    return {
      bgCell: "#f7f7f7",
      bgCellMedium: "#f0f0f0"
    };
  }, [hoverRow]);
  return <DataEditor {...defaultProps} rowMarkers="both" onItemHovered={onItemHovered} getCellContent={getCellContent} getRowThemeOverride={getRowThemeOverride} columns={cols} rows={300} />;
}`,...d.parameters?.docs?.source}}};var f=[`RowHover`];export{d as RowHover,f as __namedExportsOrder,u as default};