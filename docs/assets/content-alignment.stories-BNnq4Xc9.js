import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{i,l as a,n as o,s,u as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(o,{title:`Content Alignment`,description:l.createElement(i,null,`You can customize the content alignment by setting `,l.createElement(s,null,`contentAlign`),` of a cell to `,l.createElement(s,null,`left`),`, `,l.createElement(s,null,`right`),` or `,l.createElement(s,null,`center`),`.`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t}=c(),n=l.useCallback(e=>{let[n,r]=e;return n===3?{...t(e),contentAlign:`center`}:n===4?{...t(e),contentAlign:`right`}:n===5?{...t(e),contentAlign:`left`}:t(e)},[t]);return l.createElement(r,{...a,getCellContent:n,columns:e,rows:300})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useAllMockedKinds();
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(cell => {
    const [col, _row] = cell;
    if (col === 3) {
      return {
        ...getCellContent(cell),
        contentAlign: "center"
      };
    }
    if (col === 4) {
      return {
        ...getCellContent(cell),
        contentAlign: "right"
      };
    }
    if (col === 5) {
      return {
        ...getCellContent(cell),
        contentAlign: "left"
      };
    }
    return getCellContent(cell);
  }, [getCellContent]);
  return <DataEditor {...defaultProps} getCellContent={mangledGetCellContent} columns={cols} rows={300} />;
}`,...d.parameters?.docs?.source}}};var f=[`ContentAlignment`];export{d as ContentAlignment,f as __namedExportsOrder,u as default};