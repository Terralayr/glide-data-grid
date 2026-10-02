import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{a,d as o,i as s,l as c,n as l,o as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(e,null))]},p=1;function m(){return p=p*16807%2147483647}var h=()=>{let{cols:e,getCellContent:t,setCellValueRaw:n}=o(100),f=d.useRef(null),p=d.useRef(0),h=d.useRef(null);return d.useEffect(()=>{let e=0,t=()=>{let i=[],a=performance.now();for(let e=0;e<5e3;e++){let t=Math.max(10,m()%100),o=m()%1e4;n([t,o],{kind:r.Text,data:e.toString(),displayData:`${e}k`,themeOverride:e%5==0?{bgCell:`#fff6f6`,textDark:`#d40000`}:{bgCell:`#f2fff4`,textDark:`#00d41c`},allowOverlay:!0,lastUpdated:a}),i.push({cell:[t,o]})}p.current+=5e3,h.current!==null&&(h.current.textContent=`${p.current}`),f.current?.updateCells(i),e=window.requestAnimationFrame(t)};return t(),()=>{cancelAnimationFrame(e)}},[n]),d.createElement(l,{title:`Rapid updating`,description:d.createElement(d.Fragment,null,d.createElement(s,null,`Data grid can support many thousands of updates per seconds. The data grid can easily update data faster than a human can read it, more importantly the faster the data grid can update, the more time your code can spend doing more valuable work.`),d.createElement(u,null,`Updates processed: `,d.createElement(a,{ref:h}),` We could do this faster but we wrote a really crappy data store for this demo which is actually slowing down the data grid.`))},d.createElement(i,{...c,ref:f,getCellContent:t,columns:e,rows:1e4}))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw
  } = useMockDataGenerator(100);
  const ref = React.useRef<DataEditorRef>(null);
  const countRef = React.useRef(0);
  const displayCountRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    let rafID = 0;
    const sendUpdate = () => {
      const cells: {
        cell: Item;
      }[] = [];
      const now = performance.now();
      for (let x = 0; x < 5000; x++) {
        const col = Math.max(10, rand() % 100);
        const row = rand() % 10_000;
        setCellValueRaw([col, row], {
          kind: GridCellKind.Text,
          data: x.toString(),
          displayData: \`\${x}k\`,
          themeOverride: x % 5 !== 0 ? {
            bgCell: "#f2fff4",
            textDark: "#00d41c"
          } : {
            bgCell: "#fff6f6",
            textDark: "#d40000"
          },
          allowOverlay: true,
          lastUpdated: now
        });
        cells.push({
          cell: [col, row]
        });
      }
      countRef.current += 5000;
      if (displayCountRef.current !== null) {
        displayCountRef.current.textContent = \`\${countRef.current}\`;
      }
      ref.current?.updateCells(cells);
      rafID = window.requestAnimationFrame(sendUpdate);
    };
    sendUpdate();
    return () => {
      cancelAnimationFrame(rafID);
    };
  }, [setCellValueRaw]);
  return <BeautifulWrapper title="Rapid updating" description={<>
                    <Description>
                        Data grid can support many thousands of updates per seconds. The data grid can easily update
                        data faster than a human can read it, more importantly the faster the data grid can update, the
                        more time your code can spend doing more valuable work.
                    </Description>
                    <MoreInfo>
                        Updates processed: <KeyName ref={displayCountRef} /> We could do this faster but we wrote a
                        really crappy data store for this demo which is actually slowing down the data grid.
                    </MoreInfo>
                </>}>
            <DataEditorAll {...defaultProps} ref={ref} getCellContent={getCellContent} columns={cols} rows={10_000} />
        </BeautifulWrapper>;
}`,...h.parameters?.docs?.source}}};var g=[`RapidUpdates`];export{h as RapidUpdates,g as __namedExportsOrder,f as default};