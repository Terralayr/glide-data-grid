import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{n as r,r as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";import{d as o,i as s,l as c,n as l,s as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(l,{title:`Custom renderers`,description:d.createElement(s,null,`Override internal cell renderers by passing the `,` `,d.createElement(u,null,`renderers`),` prop.`)},d.createElement(e,null)))]},p=()=>{let{cols:e,getCellContent:t}=o(100,!0,!0),n=d.useMemo(()=>[...r,{...i,draw:e=>{let{ctx:t,rect:n}=e;t.fillStyle=`#ffe0e0`,t.fillRect(n.x,n.y,n.width,n.height),i.draw(e)}}],[]);return d.createElement(a,{...c,getCellContent:t,columns:e,rows:200,rowMarkers:`both`,renderers:n})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const renderers = React.useMemo<readonly InternalCellRenderer<InnerGridCell>[]>(() => {
    return [...AllCellRenderers, {
      ...markerCellRenderer,
      draw: args => {
        const {
          ctx,
          rect
        } = args;
        ctx.fillStyle = "#ffe0e0";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        markerCellRenderer.draw(args as any);
      }
    } as InternalCellRenderer<InnerGridCell>];
  }, []);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={200} rowMarkers="both" renderers={renderers} />;
}`,...p.parameters?.docs?.source}}};var m=[`OverrideMarkerRenderer`];export{p as OverrideMarkerRenderer,m as __namedExportsOrder,f as default};