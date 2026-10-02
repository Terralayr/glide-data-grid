import{i as e,t}from"./rolldown-runtime-Dd_uD5pT.js";import{r as n}from"./iframe-IUyyCR7M.js";import{t as r}from"./doc-wrapper-DBLJ8pRn.js";import{c as i,l as a,u as o}from"./throttle-B5g2Mj5j.js";import{n as s}from"./story-utils-cF-66lM2.js";import{F as c,I as l}from"./image-window-loader-DFAb4QQA.js";import{t as u}from"./data-editor-all-C3Wov0HC.js";import{n as d}from"./utils-CIrhwOhG.js";var f=t(((e,t)=>{function n(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}t.exports=n})),p=t(((e,t)=>{var n=a();function r(e){var t=n(e),r=t%1;return t===t?r?t-r:t:0}t.exports=r})),m=t(((e,t)=>{var n=f(),r=o(),i=p(),a=Math.ceil,s=Math.max;function c(e,t,o){t=(o?r(e,t,o):t===void 0)?1:s(i(t),0);var c=e==null?0:e.length;if(!c||t<1)return[];for(var l=0,u=0,d=Array(a(c/t));l<c;)d[u++]=n(e,l,l+=t);return d}t.exports=c})),h=e(n(),1),g=e(i(),1),_=e(m(),1),v={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>h.createElement(s,null,h.createElement(e,null))]};function y(e,t,n,r,i,a){e=Math.max(e,1);let o=h.useRef(c.empty()),s=h.useRef([]),[u,d]=h.useState({x:0,y:0,width:0,height:0}),f=h.useRef(u);f.current=u;let p=h.useCallback(e=>{d(t=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height?t:e)},[]),m=h.useCallback(e=>{let[t,n]=e,i=s.current[n];return i===void 0?{kind:l.Loading,allowOverlay:!1}:r(i,t)},[r]),v=h.useCallback(async t=>{o.current=o.current.add(t);let r=t*e,i=await n([r,(t+1)*e]),c=f.current,l=[],u=s.current;for(let[e,t]of i.entries()){u[e+r]=t;for(let t=c.x;t<=c.x+c.width;t++)l.push({cell:[t,e+r]})}a.current?.updateCells(l)},[n,a,e]),y=h.useCallback(n=>async()=>{let r=Math.max(0,Math.floor(n.y/e)),i=Math.floor((n.y+n.height)/e);for(let e of(0,_.default)((0,g.default)(r,i+1).filter(e=>!o.current.hasIndex(e)),t))await Promise.allSettled(e.map(v));let a=[];for(let e=n.y;e<n.y+n.height;e++){let t=[];for(let r=n.x;r<n.x+n.width;r++)t.push(m([r,e]));a.push(t)}return a},[m,v,t,e]);return h.useEffect(()=>{let t=u,n=Math.max(0,Math.floor((t.y-e/2)/e)),r=Math.floor((t.y+t.height+e/2)/e);for(let e of(0,g.default)(n,r+1))o.current.hasIndex(e)||v(e)},[v,e,u]),{getCellContent:m,onVisibleRegionChanged:p,onCellEdited:h.useCallback((e,t)=>{let[,n]=e,r=s.current[n];if(r===void 0)return;let a=i(e,t,r);a!==void 0&&(s.current[n]=a)},[i]),getCellsForSelection:y}}var b=()=>{let e=h.useRef(null),t=h.useCallback(async e=>(await new Promise(e=>setTimeout(e,300)),(0,g.default)(e[0],e[1]).map(e=>[`1, ${e}`,`2, ${e}`])),[]),n=h.useMemo(()=>[{title:`A`,width:150},{title:`B`,width:200}],[]),i=y(50,5,t,h.useCallback((e,t)=>({kind:l.Text,data:e[t],allowOverlay:!0,displayData:e[t]}),[]),h.useCallback((e,t,n)=>{let[r]=e;if(t.kind!==l.Text)return;let i=[...n];return i[r]=t.data,i},[]),e);return h.createElement(d,{title:`Server Side Data`,description:h.createElement(r,null,`Glide data grid is fully ready to handle your server side data needs. This example condenses the implementation into a single custom hook and loads in pages of 50. We are using 300ms sleeps, but network transactions should work the same.`)},h.createElement(u,{ref:e,...i,width:`100%`,columns:n,rows:3e3,rowMarkers:`both`}))};b.parameters={options:{showPanel:!1}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const ref = React.useRef<DataEditorRef | null>(null);
  const getRowData = React.useCallback(async (r: Item) => {
    await new Promise(res => setTimeout(res, 300));
    return range(r[0], r[1]).map(rowIndex => [\`1, \${rowIndex}\`, \`2, \${rowIndex}\`]);
  }, []);
  const columns = React.useMemo<readonly GridColumn[]>(() => {
    return [{
      title: "A",
      width: 150
    }, {
      title: "B",
      width: 200
    }];
  }, []);
  const args = useAsyncData<string[]>(50, 5, getRowData, React.useCallback((rowData, col) => ({
    kind: GridCellKind.Text,
    data: rowData[col],
    allowOverlay: true,
    displayData: rowData[col]
  }), []), React.useCallback((cell, newVal, rowData) => {
    const [col] = cell;
    if (newVal.kind !== GridCellKind.Text) return undefined;
    const newRow: string[] = [...rowData];
    newRow[col] = newVal.data;
    return newRow;
  }, []), ref);
  return <BeautifulWrapper title="Server Side Data" description={<Description>
                    Glide data grid is fully ready to handle your server side data needs. This example condenses the
                    implementation into a single custom hook and loads in pages of 50. We are using 300ms sleeps, but
                    network transactions should work the same.
                </Description>}>
            <DataEditor ref={ref} {...args} width="100%" columns={columns} rows={3000} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...b.parameters?.docs?.source}}};var x=[`ServerSideData`];export{b as ServerSideData,x as __namedExportsOrder,v as default};