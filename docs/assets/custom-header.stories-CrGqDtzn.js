import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{d as i,i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`Custom Drawing`,description:c.createElement(a,null,`You can draw over or under most objects in the grid.`)},c.createElement(e,null)))]},u=()=>{let{cols:e,getCellContent:t}=i(1e3,!0,!0),n=c.useCallback((e,t)=>{let{ctx:n,rect:r}=e;n.beginPath(),n.rect(r.x,r.y,r.width,r.height);let i=n.createLinearGradient(0,r.y,0,r.y+r.height);i.addColorStop(0,`#ff00d934`),i.addColorStop(1,`#00a2ff34`),n.fillStyle=i,n.fill(),t()},[]),a=c.useCallback((e,t)=>{t();let{ctx:n,rect:r}=e;n.beginPath(),n.moveTo(r.x+r.width-7,r.y+1),n.lineTo(r.x+r.width,r.y+7+1),n.lineTo(r.x+r.width,r.y+1),n.closePath(),n.save(),n.fillStyle=`#ff0000`,n.fill(),n.restore()},[]);return c.createElement(r,{...o,getCellContent:t,columns:e,drawHeader:n,drawCell:a,rows:3e3,rowMarkers:`both`})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(1000, true, true);
  const drawHeader: DrawHeaderCallback = React.useCallback((args, draw) => {
    const {
      ctx,
      rect
    } = args;
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    const lg = ctx.createLinearGradient(0, rect.y, 0, rect.y + rect.height);
    lg.addColorStop(0, "#ff00d934");
    lg.addColorStop(1, "#00a2ff34");
    ctx.fillStyle = lg;
    ctx.fill();
    draw(); // draw at end to draw under the header
  }, []);
  const drawCell: DrawCellCallback = React.useCallback((args, draw) => {
    draw(); // draw up front to draw over the cell
    const {
      ctx,
      rect
    } = args;
    const size = 7;
    ctx.beginPath();
    ctx.moveTo(rect.x + rect.width - size, rect.y + 1);
    ctx.lineTo(rect.x + rect.width, rect.y + size + 1);
    ctx.lineTo(rect.x + rect.width, rect.y + 1);
    ctx.closePath();
    ctx.save();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.restore();
  }, []);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} drawHeader={drawHeader} drawCell={drawCell} rows={3000} rowMarkers="both" />;
}`,...u.parameters?.docs?.source}}};var d=[`CustomDrawing`];export{u as CustomDrawing,d as __namedExportsOrder,l as default};