import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,l as s,n as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(c,{title:`Right to Left support`,description:l.createElement(l.Fragment,null,l.createElement(o,null,`The data editor automatically detects RTL in text cells and respects it.`))},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t,setCellValue:n,onColumnResize:o}=a(60,!1),c=l.useMemo(()=>{let t=[...e];return t[0]={...t[0],title:`גלייד`,hasMenu:!0},t},[e]),u=l.useCallback(e=>{let[n,i]=e;return n===0?{kind:r.Text,allowOverlay:!0,data:`אני גדעון, מומחה לאפליקציות גלייד.`,displayData:`אני גדעון, מומחה לאפליקציות גלייד.`,allowWrapping:!0}:t(e)},[t]);return l.createElement(i,{...s,getCellContent:u,columns:c,onColumnResize:o,getCellsForSelection:!0,rowMarkers:`both`,onHeaderMenuClick:()=>alert(`menu click`),onPaste:!0,onCellEdited:n,rows:1e3})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue,
    onColumnResize
  } = useMockDataGenerator(60, false);
  const realCols = React.useMemo(() => {
    const result = [...cols];
    result[0] = {
      ...result[0],
      title: "גלייד",
      hasMenu: true
    };
    return result;
  }, [cols]);
  const getCellContentMangled = React.useCallback<typeof getCellContent>(item => {
    const [col, _row] = item;
    if (col !== 0) return getCellContent(item);
    return {
      kind: GridCellKind.Text,
      allowOverlay: true,
      data: "אני גדעון, מומחה לאפליקציות גלייד.",
      displayData: "אני גדעון, מומחה לאפליקציות גלייד.",
      allowWrapping: true
    };
  }, [getCellContent]);
  return <DataEditor {...defaultProps} getCellContent={getCellContentMangled} columns={realCols} onColumnResize={onColumnResize} getCellsForSelection={true} rowMarkers={"both"} onHeaderMenuClick={() => alert("menu click")} onPaste={true} onCellEdited={setCellValue} rows={1000} />;
}`,...d.parameters?.docs?.source}}};var f=[`RightToLeft`];export{d as RightToLeft,f as __namedExportsOrder,u as default};