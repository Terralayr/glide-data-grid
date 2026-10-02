import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{i,l as a,n as o,u as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(o,{title:`Theme per column`,description:c.createElement(c.Fragment,null,c.createElement(i,null,`Each column can provide theme overrides for rendering that column.`))},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:i}=s(),o=c.useMemo(()=>{let t=[...e];return t[3]={...t[3],themeOverride:{textDark:`#009CA6`,bgIconHeader:`#009CA6`,accentColor:`#009CA6`,accentLight:`#009CA620`,fgIconHeader:`#FFFFFF`,baseFontStyle:`600 13px`}},t[4]={...t[4],themeOverride:{textDark:`#009CA6`,bgIconHeader:`#009CA6`,accentColor:`#009CA6`,accentLight:`#009CA620`,fgIconHeader:`#FFFFFF`,baseFontStyle:`600 13px`}},t[9]={...t[9],themeOverride:{textDark:`#009CA6`,bgIconHeader:`#009CA6`,accentColor:`#009CA6`,accentLight:`#009CA620`,fgIconHeader:`#FFFFFF`}},t[10]={...t[10],themeOverride:{textDark:`#009CA6`,bgIconHeader:`#009CA6`,accentColor:`#009CA6`,accentLight:`#009CA620`,fgIconHeader:`#FFFFFF`}},t},[e]);return c.createElement(r,{...a,getCellContent:t,columns:o,onCellEdited:i,onColumnResize:n,rows:1e3})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const realCols = React.useMemo(() => {
    const c = [...cols];
    c[3] = {
      ...c[3],
      themeOverride: {
        textDark: "#009CA6",
        bgIconHeader: "#009CA6",
        accentColor: "#009CA6",
        accentLight: "#009CA620",
        fgIconHeader: "#FFFFFF",
        baseFontStyle: "600 13px"
      }
    };
    c[4] = {
      ...c[4],
      themeOverride: {
        textDark: "#009CA6",
        bgIconHeader: "#009CA6",
        accentColor: "#009CA6",
        accentLight: "#009CA620",
        fgIconHeader: "#FFFFFF",
        baseFontStyle: "600 13px"
      }
    };
    c[9] = {
      ...c[9],
      themeOverride: {
        textDark: "#009CA6",
        bgIconHeader: "#009CA6",
        accentColor: "#009CA6",
        accentLight: "#009CA620",
        fgIconHeader: "#FFFFFF"
      }
    };
    c[10] = {
      ...c[10],
      themeOverride: {
        textDark: "#009CA6",
        bgIconHeader: "#009CA6",
        accentColor: "#009CA6",
        accentLight: "#009CA620",
        fgIconHeader: "#FFFFFF"
      }
    };
    return c;
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={realCols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={1000} />;
}`,...u.parameters?.docs?.source}}};var d=[`ThemePerColumn`];export{u as ThemePerColumn,d as __namedExportsOrder,l as default};