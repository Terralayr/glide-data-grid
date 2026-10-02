import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(s,{title:`Rearrange Columns`,description:l.createElement(a,null,`Columns can be rearranged by drag and dropping, as long as you respond to the`,` `,l.createElement(c,null,`onColumnMoved`),` callback.`)},l.createElement(e,null)))]},d=()=>{let{cols:e,getCellContent:t}=i(60),[n,a]=l.useState(e),s=l.useCallback((e,t)=>{a(n=>{let r=[...n],[i]=r.splice(e,1);return r.splice(t,0,i),r})},[]),c=l.useCallback((e,t)=>t!==3,[]),u=l.useCallback(([r,i])=>{let a=e.findIndex(e=>e.title===n[r].title);return t([a,i])},[e,t,n]);return l.createElement(r,{...o,freezeColumns:1,rowMarkers:`both`,getCellContent:u,onColumnProposeMove:c,columns:n,onColumnMoved:s,columnSelectionBlending:`mixed`,rangeSelectionBlending:`mixed`,rows:1e3})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(60);

  // This is a dirty hack because the mock generator doesn't really support changing this. In a real data source
  // you should track indexes properly
  const [sortableCols, setSortableCols] = React.useState(cols);
  const onColMoved = React.useCallback((startIndex: number, endIndex: number): void => {
    setSortableCols(old => {
      const newCols = [...old];
      const [toMove] = newCols.splice(startIndex, 1);
      newCols.splice(endIndex, 0, toMove);
      return newCols;
    });
  }, []);
  const onColProposeMove = React.useCallback((_startIndex: number, endIndex: number): boolean => {
    return endIndex !== 3;
  }, []);
  const getCellContentMangled = React.useCallback(([col, row]: Item): GridCell => {
    const remappedCol = cols.findIndex(c => c.title === sortableCols[col].title);
    return getCellContent([remappedCol, row]);
  }, [cols, getCellContent, sortableCols]);
  return <DataEditor {...defaultProps} freezeColumns={1} rowMarkers="both" getCellContent={getCellContentMangled} onColumnProposeMove={onColProposeMove} columns={sortableCols} onColumnMoved={onColMoved} columnSelectionBlending="mixed" rangeSelectionBlending="mixed" rows={1000} />;
}`,...d.parameters?.docs?.source}}};var f=[`RearrangeColumns`];export{d as RearrangeColumns,f as __namedExportsOrder,u as default};