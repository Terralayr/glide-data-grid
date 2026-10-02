import{i as e,t}from"./rolldown-runtime-Dd_uD5pT.js";import{r as n}from"./iframe-IUyyCR7M.js";import{n as r}from"./marked.esm-ikSKFM1y.js";import{D as i,T as a,a as o,c as s,d as c,i as l,o as u,r as d,s as f,w as p}from"./throttle-B5g2Mj5j.js";import{_ as m,g as h,t as g,v as _,x as v}from"./data-editor-all-D3k1PkEn.js";import{t as y}from"./useResizeDetector-fSMG8bpg.js";import{t as b}from"./faker-stub-hmYoZM2V.js";var x=e(n(),1);function ee(e){let[t,n]=x.useState([]),[r,i]=x.useState(void 0),{columns:a,onGroupHeaderClicked:o,onGridSelectionChange:s,getGroupDetails:c,gridSelection:l,freezeColumns:u=0,theme:d}=e,f=l??r,p=x.useMemo(()=>{let e=[],n=[-1,-1],r;for(let i=u;i<a.length;i++){let o=a[i].group??``,s=t.includes(o);r!==o&&n[0]!==-1&&(e.push(n),n=[-1,-1]),s&&n[0]!==-1?n[1]+=1:s?n=[i,1]:n[0]!==-1&&(e.push(n),n=[-1,-1]),r=o}return n[0]!==-1&&e.push(n),e},[t,a,u]),m=x.useMemo(()=>p.length===0?a:a.map((e,t)=>{for(let[n,r]of p)if(t>=n&&t<n+r){let i=8;return t===n+r-1&&(i=36),{...e,width:i,themeOverride:{bgCell:d.bgCellMedium}}}return e}),[a,p,d.bgCellMedium]);return{columns:m,onGroupHeaderClicked:x.useCallback((e,t)=>{o?.(e,t);let r=m[e]?.group??``;r!==``&&(t.preventDefault(),n(e=>e.includes(r)?e.filter(e=>e!==r):[...e,r]))},[m,o]),onGridSelectionChange:x.useCallback(e=>{if(e.current!==void 0){let t=e.current.cell[0],r=m[t];n(e=>e.includes(r?.group??``)?e.filter(e=>e!==r.group):e)}s===void 0?i(e):s(e)},[m,s]),getGroupDetails:x.useCallback(e=>({...c?.(e),name:e,overrideTheme:t.includes(e??``)?{bgHeader:d.bgHeaderHasFocus}:void 0}),[t,c,d.bgHeaderHasFocus]),gridSelection:f}}var te=t(((e,t)=>{var n=u(),r=c();function i(e,t){var i=-1,a=r(e)?Array(e.length):[];return n(e,function(e,n,r){a[++i]=t(e,n,r)}),a}t.exports=i})),ne=t(((e,t)=>{function n(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}t.exports=n})),re=t(((e,t)=>{var n=a();function r(e,t){if(e!==t){var r=e!==void 0,i=e===null,a=e===e,o=n(e),s=t!==void 0,c=t===null,l=t===t,u=n(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}t.exports=r})),S=t(((e,t)=>{var n=re();function r(e,t,r){for(var i=-1,a=e.criteria,o=t.criteria,s=a.length,c=r.length;++i<s;){var l=n(a[i],o[i]);if(l)return i>=c?l:l*(r[i]==`desc`?-1:1)}return e.index-t.index}t.exports=r})),C=t(((e,t)=>{var n=p(),r=o(),a=d(),s=te(),c=ne(),u=f(),m=S(),h=l(),g=i();function _(e,t,i){t=t.length?n(t,function(e){return g(e)?function(t){return r(t,e.length===1?e[0]:e)}:e}):[h];var o=-1;return t=n(t,u(a)),c(s(e,function(e,r,i){return{criteria:n(t,function(t){return t(e)}),index:++o,value:e}}),function(e,t){return m(e,t,i)})}t.exports=_})),w=e(t(((e,t)=>{var n=C(),r=i();function a(e,t,i,a){return e==null?[]:(r(t)||(t=t==null?[]:[t]),i=a?void 0:i,r(i)||(i=i==null?[]:[i]),n(e,t,i))}t.exports=a}))(),1);function T(e){return e.id??`${e.group??``}/${e.title}`}function E(e,t){return typeof t==`string`?T(e)===t:T(e)===T(t)}function D(e,t,n){let r=t.indexOf(e);if(r===-1)return 2**53-1;let i=n.findIndex(t=>E(e,t));if(i!==-1)return i;for(let e=r;e>=0;e--){let r=n.findIndex(n=>E(t[e],n));if(r!==-1)return r+.5}return-1}function O(e){let{columns:t,getCellContent:n,onColumnMoved:r}=e,[i,a]=x.useState(()=>t.map(T)),o=x.useMemo(()=>(0,w.default)(t,e=>D(e,t,i)),[i,t]),s=x.useRef(r);s.current=r;let c=x.useCallback((e,t)=>{a(n=>{let r=[...n],[i]=r.splice(e,1);return r.splice(t,0,i),r}),s.current?.(e,t)},[]);return x.useEffect(()=>{a(e=>(0,w.default)(t,n=>D(n,t,e)).map(T))},[t]),{columns:o,onColumnMoved:c,getCellContent:x.useCallback(e=>{let[r,i]=e,a=o[r],s=t.indexOf(a);return n([s,i])},[o,t,n])}}var ie=e(s(),1);function ae(e){switch(e.kind){case h.Number:return e.data?.toString()??``;case h.Boolean:return e.data?.toString()??``;case h.Markdown:case h.RowID:case h.Text:case h.Uri:return e.data??``;case h.Bubble:case h.Image:return e.data.join(``);case h.Drilldown:return e.data.map(e=>e.text).join(``);case h.Protected:case h.Loading:return``;case h.Custom:return e.copyData}}function k(e){if(typeof e==`number`)return e;if(e.length>0){let t=Number(e);isNaN(t)||(e=t)}return e}function A(e,t){return e=k(e),t=k(t),typeof e==`string`&&typeof t==`string`?e.localeCompare(t):typeof e==`number`&&typeof t==`number`?e===t?0:e>t?1:-1:e==t?0:e>t?1:-1}function j(e,t){return e>t?1:e===t?0:-1}function M(e){let{sort:t,rows:n,getCellContent:r}=e,i=x.useMemo(()=>t===void 0?[]:Array.isArray(t)?t:[t],[t]),a=x.useMemo(()=>i.map(t=>{let n=e.columns.findIndex(e=>t.column===e||e.id!==void 0&&t.column.id===e.id);return n===-1?void 0:n}),[i,e.columns]),o=x.useMemo(()=>{let e=i.map((e,t)=>({sort:e,col:a[t]})).filter(e=>e.col!==void 0);if(e.length===0)return;let t=e.map(()=>Array(n));for(let i=0;i<e.length;i++){let{col:a}=e[i],o=[a,0];for(let e=0;e<n;e++)o[1]=e,t[i][e]=ae(r(o))}return(0,ie.default)(n).sort((n,r)=>{for(let i=0;i<e.length;i++){let{sort:a}=e[i],o=t[i][n],s=t[i][r],c;if(c=a.mode===`raw`?j(o,s):a.mode===`smart`?A(o,s):o.localeCompare(s),c!==0)return(a.direction??`asc`)===`desc`&&(c=-c),c}return 0})},[r,n,i,a]),s=x.useCallback(e=>o===void 0?e:o[e],[o]),c=x.useCallback(([e,t])=>(o===void 0||(t=o[t]),r([e,t])),[r,o]);return o===void 0?{getCellContent:e.getCellContent,getOriginalIndex:s}:{getOriginalIndex:s,getCellContent:c}}var N={undoHistory:[],redoHistory:[],canUndo:!1,canRedo:!1,isApplyingUndo:!1,isApplyingRedo:!1};function P(e,t){let n={...e};switch(t.type){case`undo`:return e.canUndo?(n.undoHistory=[...e.undoHistory],n.operation=n.undoHistory.pop(),n.canUndo=n.undoHistory.length>0,n.isApplyingUndo=!0,n):e;case`redo`:return e.canRedo?(n.redoHistory=[...e.redoHistory],n.operation=n.redoHistory.pop(),n.canRedo=n.redoHistory.length>0,n.isApplyingRedo=!0,n):e;case`operationApplied`:return n.operation=void 0,n.isApplyingRedo=!1,n.isApplyingUndo=!1,n;case`edit`:return!e.isApplyingRedo&&!e.isApplyingUndo&&(n.undoHistory=[...e.undoHistory,t.batch],n.redoHistory=[],n.canUndo=!0,n.canRedo=!1),e.isApplyingUndo&&(n.redoHistory=[...e.redoHistory,t.batch],n.canRedo=!0),e.isApplyingRedo&&(n.undoHistory=[...e.undoHistory,t.batch],n.canUndo=!0),n;default:throw Error(`Invalid action`)}}function F(e,t,n,r){let[i,a]=(0,x.useReducer)(P,N),o=(0,x.useRef)(null),s=(0,x.useRef)(null),c=(0,x.useRef)(!1),l=(0,x.useRef)(!1);(0,x.useEffect)(()=>{c.current=i.isApplyingUndo,l.current=i.isApplyingRedo},[i.isApplyingUndo,i.isApplyingRedo]);let[u,d]=(0,x.useState)(null),f=(0,x.useRef)(null),p=(0,x.useCallback)(e=>{r&&r(e),d(e),f.current=e},[r]),m=(0,x.useCallback)((e,r)=>{if(!(c.current||l.current)&&f.current){clearTimeout(s.current);let n=t(e);o.current===null&&(o.current={edits:[],selection:f.current}),o.current.edits.push({cell:e,newValue:n}),s.current=setTimeout(()=>{o.current&&=(a({type:`edit`,batch:o.current}),null)},0)}n(e,r)},[n,t]),h=(0,x.useCallback)(()=>{a({type:`undo`})},[a]),g=(0,x.useCallback)(()=>{a({type:`redo`})},[a]);return(0,x.useEffect)(()=>{if(i.operation&&f.current&&e.current){let r=[],o={edits:[],selection:f.current};for(let e of i.operation.edits){let i=t(e.cell);o.edits.push({cell:e.cell,newValue:i}),n(e.cell,e.newValue),r.push({cell:e.cell})}d(i.operation.selection),f.current=i.operation.selection,e.current.updateCells(r),a({type:`edit`,batch:o}),a({type:`operationApplied`})}},[i.operation,e,n,d,t]),(0,x.useEffect)(()=>{let e=e=>{e.key===`z`&&(e.metaKey||e.ctrlKey)&&(e.shiftKey?g():h()),e.key===`y`&&(e.metaKey||e.ctrlKey)&&g()};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[h,g]),(0,x.useMemo)(()=>({undo:h,redo:g,canUndo:i.canUndo,canRedo:i.canRedo,onCellEdited:m,onGridSelectionChange:p,gridSelection:u}),[h,g,m,i.canUndo,i.canRedo,p,u])}var I=e(i(),1);b.seed(1337);function L(e){return!!e}function R(e,t){let n=e.data;if(typeof n==typeof t.data)return{...t,data:n};switch(t.kind){case h.Uri:return(0,I.default)(n)?{...t,data:n[0]}:{...t,data:n?.toString()??``};case h.Boolean:return(0,I.default)(n)?{...t,data:n[0]!==void 0}:e.kind===h.Boolean?{...t,data:e.data}:{...t,data:!!L(n)};case h.Image:return(0,I.default)(n)?{...t,data:[n[0]]}:{...t,data:[n?.toString()??``]};case h.Number:return{...t,data:0};case h.Text:case h.Markdown:return(0,I.default)(n)?{...t,data:n[0].toString()??``}:{...t,data:e.data?.toString()??``};case h.Custom:return t}G(t)}function z(e){let{getContent:t,...n}=e;return n}function B(e,t){let n=[{title:`First name`,id:`First name`,group:t?`Name`:void 0,icon:m.HeaderString,hasMenu:!1,getContent:()=>{let e=b.person.firstName();return{kind:h.Text,displayData:e,data:e,allowOverlay:!0,readonly:!0}}},{title:`Last name`,id:`Last name`,group:t?`Name`:void 0,icon:m.HeaderString,hasMenu:!1,getContent:()=>{let e=b.person.lastName();return{kind:h.Text,displayData:e,data:e,allowOverlay:!0,readonly:!0}}},{title:`Avatar`,id:`Avatar`,group:t?`Info`:void 0,icon:m.HeaderImage,hasMenu:!1,getContent:()=>{let e=Math.round(Math.random()*100);return{kind:h.Image,data:[`https://picsum.photos/id/${e}/900/900`],displayData:[`https://picsum.photos/id/${e}/40/40`],allowOverlay:!0,readonly:!0}}},{title:`Email`,id:`Email`,group:t?`Info`:void 0,icon:m.HeaderString,hasMenu:!1,getContent:()=>{let e=b.internet.email();return{kind:h.Text,displayData:e,data:e,allowOverlay:!0,readonly:!0}}},{title:`Title`,id:`Title`,group:t?`Info`:void 0,icon:m.HeaderString,hasMenu:!1,getContent:()=>{let e=b.person.jobTitle();return{kind:h.Text,displayData:e,data:e,allowOverlay:!0,readonly:!0}}},{title:`More Info`,id:`More Info`,group:t?`Info`:void 0,icon:m.HeaderUri,hasMenu:!1,getContent:()=>{let e=b.internet.url();return{kind:h.Uri,displayData:e,data:e,allowOverlay:!0,readonly:!0}}}];if(e<n.length)return n.slice(0,e);let r=e-n.length,i=[...Array(r)].map((e,r)=>V(r+n.length,t));return[...n,...i]}function V(e,t){return{title:`Column ${e}`,id:`Column ${e}`,group:t?`Group ${Math.round(e/3)}`:void 0,icon:m.HeaderString,hasMenu:!1,getContent:()=>{let e=b.lorem.word();return{kind:h.Text,data:e,displayData:e,allowOverlay:!0,readonly:!0}}}}var H=class{cachedContent=new Map;get(e,t){let n=this.cachedContent.get(e);if(n!==void 0)return n[t]}set(e,t,n){let r=this.cachedContent.get(e);r===void 0&&this.cachedContent.set(e,r=[]),r[t]=n}};function U(e,t=!0,n=!1){let r=x.useRef(new H),[i,a]=x.useState(()=>B(e,n));x.useEffect(()=>{a(B(e,n))},[n,e]);let o=x.useCallback((e,t)=>{a(n=>{let r=n.findIndex(t=>t.title===e.title),i=[...n];return i.splice(r,1,{...n[r],width:t}),i})},[]),s=x.useMemo(()=>i.map(z),[i]),c=x.useRef(i);c.current=i;let l=x.useCallback(([e,n])=>{let i=r.current.get(e,n);return i===void 0&&(i=c.current[e].getContent(),!t&&v(i)&&(i={...i,readonly:t}),r.current.set(e,n,i)),i},[t]),u=x.useCallback(e=>{let t=[];for(let n=e.y;n<e.y+e.height;n++){let r=[];for(let t=e.x;t<e.x+e.width;t++)r.push(l([t,n]));t.push(r)}return t},[l]),d=x.useCallback(([e,t],n)=>{r.current.set(e,t,n)},[]);return{cols:s,getCellContent:l,onColumnResize:o,setCellValue:x.useCallback(([e,t],n)=>{let a=r.current.get(e,t);if(a===void 0&&(a=i[e].getContent()),_(n)&&_(a)){let i=R(n,a);r.current.set(e,t,{...i,displayData:typeof i.data==`string`?i.data:i.displayData,lastUpdated:performance.now()})}},[i]),getCellsForSelection:u,setCellValueRaw:d}}function W(e=`This should not happen`){throw Error(e)}function G(e){return W(`Hell froze over`)}b.seed(1337);var K=r(`div`)({name:`SimpleWrapper`,class:`ss4kmn3`,propsAsIs:!1}),q=e=>x.createElement(K,null,x.createElement(`div`,{className:`content`},e.children)),oe={title:`Extra Packages/Source`,decorators:[e=>x.createElement(q,null,x.createElement(e,null))]},se=r(`div`)({name:`BeautifulStyle`,class:`bkh67gx`,propsAsIs:!1}),J=e=>{let{title:t,children:n,description:r}=e,{ref:i,width:a,height:o}=y();return x.createElement(se,null,x.createElement(`h1`,null,t),r,x.createElement(`div`,{className:`sizer`},x.createElement(`div`,{className:`sizer-clip`,ref:i},x.createElement(`div`,{style:{position:`relative`,width:a??100,height:o??100}},n))))},Y=r(`p`)({name:`Description`,class:`d1deot3s`,propsAsIs:!1}),X=r(`p`)({name:`MoreInfo`,class:`m1ml0sw1`,propsAsIs:!1}),Z={smoothScrollX:!0,smoothScrollY:!0,isDraggable:!1,rowMarkers:`none`,width:`100%`},ce={accentColor:`#4F5DFF`,accentFg:`#FFFFFF`,accentLight:`rgba(62, 116, 253, 0.1)`,textDark:`#313139`,textMedium:`#737383`,textLight:`#B2B2C0`,textBubble:`#313139`,bgIconHeader:`#737383`,fgIconHeader:`#FFFFFF`,textHeader:`#313139`,textGroupHeader:`#313139BB`,textHeaderSelected:`#FFFFFF`,bgCell:`#FFFFFF`,bgCellMedium:`#FAFAFB`,bgHeader:`#F7F7F8`,bgHeaderHasFocus:`#E9E9EB`,bgHeaderHovered:`#EFEFF1`,bgBubble:`#EDEDF3`,bgBubbleSelected:`#FFFFFF`,bubbleHeight:20,bubblePadding:6,bubbleMargin:4,headerIconSize:20,markerFontStyle:`13px`,bgSearchResult:`#fff9e3`,borderColor:`rgba(115, 116, 131, 0.16)`,horizontalBorderColor:`rgba(115, 116, 131, 0.16)`,drilldownBorder:`rgba(0, 0, 0, 0)`,linkColor:`#4F5DFF`,cellHorizontalPadding:8,cellVerticalPadding:3,headerFontStyle:`600 13px`,baseFontStyle:`13px`,editorFontSize:`13px`,lineHeight:1.4,fontFamily:`Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif`},le=[{title:`A`,width:200,group:`Group 1`},{title:`B`,width:200,group:`Group 1`},{title:`C`,width:200,group:`Group 2`},{title:`D`,width:200,group:`Group 2`},{title:`E`,width:200,group:`Group 2`}],Q=()=>{let e=x.useRef({}),t=1e5,n=O({columns:le,getCellContent:x.useCallback(([t,n])=>{if(t===0)return{kind:h.Text,allowOverlay:!0,data:`${n}`,displayData:`${n}`};let r=`${t},${n}`;e.current[r]===void 0&&(e.current[r]=b.person.firstName()+` `+b.person.lastName());let i=e.current[r];return{kind:h.Text,allowOverlay:!0,data:i,displayData:i}},[])}),[r,i]=x.useState(),a=M({columns:n.columns,getCellContent:n.getCellContent,rows:t,sort:r===void 0?void 0:{column:n.columns[r],direction:`desc`,mode:`smart`}}),o=ee({columns:n.columns,theme:ce,freezeColumns:0}),s=x.useCallback(e=>{i(e)},[]);return x.createElement(J,{title:`Custom source extensions`,description:x.createElement(Y,null,`Fixme.`)},x.createElement(g,{...Z,...n,...a,...o,rows:t,onColumnMoved:n.onColumnMoved,onHeaderClicked:s}))};Q.parameters={options:{showPanel:!1}};var $=()=>{let{cols:e,getCellContent:t,setCellValue:n}=U(6),r=x.useRef(null),{gridSelection:i,onCellEdited:a,onGridSelectionChange:o,undo:s,canRedo:c,canUndo:l,redo:u}=F(r,t,n);return x.createElement(J,{title:`Undo / Redo Support`,description:x.createElement(Y,null,`A simple undo/redo implementation`,x.createElement(X,null,`Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:`,x.createElement(`button`,{onClick:s,disabled:!l,style:{opacity:l?1:.4}},`Undo`),x.createElement(`button`,{onClick:u,disabled:!c,style:{opacity:c?1:.4}},`Redo`)),x.createElement(X,null,`It works by taking a snapshot of the content of a cell before it is edited and replaying any edits back.`))},x.createElement(g,{...Z,ref:r,onCellEdited:a,getCellContent:t,gridSelection:i??void 0,onGridSelectionChange:o,columns:e,rows:1e3}))};$.parameters={options:{showPanel:!1}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`styled.p\`
    font-size: 14px;
    flex-shrink: 0;
    margin: 0 0 20px 0;

    button {
        background-color: #f4f4f4;
        color: #2b2b2b;
        padding: 2px 6px;
        font-family: monospace;
        font-size: 14px;
        border-radius: 4px;
        box-shadow: 0px 1px 2px #00000040;
        margin: 0 0.1em;
        border: none;
        cursor: pointer;
    }
\``,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const cache = React.useRef<Record<string, string>>({});
  const rows = 100_000;
  const moveArgs = useMoveableColumns({
    columns: cols,
    getCellContent: React.useCallback(([col, row]) => {
      if (col === 0) {
        return {
          kind: GridCellKind.Text,
          allowOverlay: true,
          data: \`\${row}\`,
          displayData: \`\${row}\`
        };
      }
      const key = \`\${col},\${row}\`;
      if (cache.current[key] === undefined) {
        cache.current[key] = faker.person.firstName() + " " + faker.person.lastName();
      }
      const d = cache.current[key];
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        data: d,
        displayData: d
      };
    }, [])
  });
  const [sort, setSort] = React.useState<number>();
  const sortArgs = useColumnSort({
    columns: moveArgs.columns,
    getCellContent: moveArgs.getCellContent,
    rows,
    sort: sort === undefined ? undefined : {
      column: moveArgs.columns[sort],
      direction: "desc",
      mode: "smart"
    }
  });
  const collapseArgs = useCollapsingGroups({
    columns: moveArgs.columns,
    theme: testTheme,
    freezeColumns: 0
  });
  const onHeaderClick = React.useCallback((index: number) => {
    setSort(index);
  }, []);
  return <BeautifulWrapper title="Custom source extensions" description={<Description>Fixme.</Description>}>
            <DataEditor {...defaultProps} {...moveArgs} {...sortArgs} {...collapseArgs} rows={rows} onColumnMoved={moveArgs.onColumnMoved} onHeaderClicked={onHeaderClick} />
        </BeautifulWrapper>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const {
    cols: columns,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6);
  const gridRef = React.useRef<DataEditorRef>(null);
  const {
    gridSelection,
    onCellEdited,
    onGridSelectionChange,
    undo,
    canRedo,
    canUndo,
    redo
  } = useUndoRedo(gridRef, getCellContent, setCellValue);
  return <BeautifulWrapper title="Undo / Redo Support" description={<Description>
                    A simple undo/redo implementation
                    <MoreInfo>
                        Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:
                        <button onClick={undo} disabled={!canUndo} style={{
        opacity: canUndo ? 1 : 0.4
      }}>
                            Undo
                        </button>
                        <button onClick={redo} disabled={!canRedo} style={{
        opacity: canRedo ? 1 : 0.4
      }}>
                            Redo
                        </button>
                    </MoreInfo>
                    <MoreInfo>
                        It works by taking a snapshot of the content of a cell before it is edited and replaying any
                        edits back.
                    </MoreInfo>
                </Description>}>
            <DataEditor {...defaultProps} ref={gridRef} onCellEdited={onCellEdited} getCellContent={getCellContent} gridSelection={gridSelection ?? undefined} onGridSelectionChange={onGridSelectionChange} columns={columns} rows={1000} />
        </BeautifulWrapper>;
}`,...$.parameters?.docs?.source}}};var ue=[`MoreInfo`,`UseDataSource`,`UndoRedo`];export{X as MoreInfo,$ as UndoRedo,Q as UseDataSource,ue as __namedExportsOrder,oe as default};