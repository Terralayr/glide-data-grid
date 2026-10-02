import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{i as a,l as o,n as s}from"./utils-CIrhwOhG.js";var c=e(t(),1),l={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>c.createElement(n,null,c.createElement(s,{title:`Custom Event Target`,description:c.createElement(a,null,`This example demonstrates using a custom event target for the data grid. All window events are blocked, but the grid still works because it's using the container div as its event target instead of window.`)},c.createElement(e,null)))]},u=()=>{let[e]=c.useState(()=>[{title:`Column A`,id:`a`,width:150},{title:`Column B`,id:`b`,width:150},{title:`Column C`,id:`c`,width:150}]),t=c.useCallback(e=>{let[t,n]=e;return{kind:r.Text,allowOverlay:!0,displayData:`${t}, ${n}`,data:`${t}, ${n}`}},[]),n=c.useRef(null),[a,s]=c.useState(!1),[l,u]=c.useState(0);return c.useEffect(()=>{n.current!==null&&s(!0)},[]),c.useEffect(()=>{let e=e=>{n.current&&e.target instanceof Node&&n.current.contains(e.target)||(e.stopPropagation(),e.stopImmediatePropagation(),e.cancelable&&e.preventDefault(),e.type===`click`&&u(e=>e+1))},t=[`mousedown`,`mouseup`,`mousemove`,`click`,`touchstart`,`touchend`,`touchmove`];for(let n of t)window.addEventListener(n,e,!0);return()=>{for(let n of t)window.removeEventListener(n,e,!0)}},[]),c.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`}},c.createElement(`div`,{style:{marginBottom:10,padding:10,backgroundColor:`#f0f0f0`,borderRadius:4}},c.createElement(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`}},c.createElement(`span`,{style:{color:`#666`}},`Window click attempts blocked: `,l),c.createElement(`button`,{onClick:()=>alert(`This button should not work if window events are blocked!`),style:{padding:`5px 10px`}},`Try clicking me (should not work)`)),c.createElement(`div`,{style:{marginTop:10,fontSize:14,color:`#666`}},`Try clicking outside the grid or on the button above - these clicks should be blocked. But the grid below should still be fully interactive!`)),c.createElement(`div`,{ref:n,style:{flex:1,position:`relative`,border:`2px solid #3c78d8`,borderRadius:4,padding:15}},a&&c.createElement(i,{...o,width:`100%`,height:`100%`,rows:1e3,columns:e,getCellContent:t,experimental:{eventTarget:n.current}})))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  // Create columns
  const [cols] = React.useState<GridColumn[]>(() => {
    return [{
      title: "Column A",
      id: "a",
      width: 150
    }, {
      title: "Column B",
      id: "b",
      width: 150
    }, {
      title: "Column C",
      id: "c",
      width: 150
    }];
  });

  // Create data
  const getCellContent = React.useCallback((cell: Item): TextCell => {
    const [col, row] = cell;
    return {
      kind: GridCellKind.Text,
      allowOverlay: true,
      displayData: \`\${col}, \${row}\`,
      data: \`\${col}, \${row}\`
    };
  }, []);

  // Create a ref for our custom event target container
  const containerRef = React.useRef<HTMLDivElement>(null);

  // State to track if the container is mounted
  const [containerMounted, setContainerMounted] = React.useState(false);

  // State to track window click attempts
  const [windowClickAttempts, setWindowClickAttempts] = React.useState(0);

  // Update containerMounted state after the component mounts
  React.useEffect(() => {
    if (containerRef.current !== null) {
      setContainerMounted(true);
    }
  }, []);

  // Block all window events
  React.useEffect(() => {
    const blockEvent = (e: Event) => {
      // Don't block events if they're inside our container
      if (containerRef.current && e.target instanceof Node && containerRef.current.contains(e.target)) {
        return;
      }
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (e.cancelable) {
        e.preventDefault();
      }

      // Count click attempts outside the grid
      if (e.type === "click") {
        setWindowClickAttempts(prev => prev + 1);
      }
    };

    // Block all mouse and touch events on window
    const events = ["mousedown", "mouseup", "mousemove", "click", "touchstart", "touchend", "touchmove"];

    // Add event blockers to window
    for (const event of events) {
      window.addEventListener(event, blockEvent, true);
    }
    return () => {
      // Clean up event blockers
      for (const event of events) {
        window.removeEventListener(event, blockEvent, true);
      }
    };
  }, []);
  return <div style={{
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }}>
            <div style={{
      marginBottom: 10,
      padding: 10,
      backgroundColor: "#f0f0f0",
      borderRadius: 4
    }}>
                <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
                    <span style={{
          color: "#666"
        }}>Window click attempts blocked: {windowClickAttempts}</span>
                    <button onClick={() => alert("This button should not work if window events are blocked!")} style={{
          padding: "5px 10px"
        }}>
                        Try clicking me (should not work)
                    </button>
                </div>
                <div style={{
        marginTop: 10,
        fontSize: 14,
        color: "#666"
      }}>
                    Try clicking outside the grid or on the button above - these clicks should be blocked. But the grid
                    below should still be fully interactive!
                </div>
            </div>

            <div ref={containerRef} style={{
      flex: 1,
      position: "relative",
      border: "2px solid #3c78d8",
      borderRadius: 4,
      padding: 15
    }}>
                {containerMounted && <DataEditor {...defaultProps} width="100%" height="100%" rows={1000} columns={cols} getCellContent={getCellContent} experimental={{
        eventTarget: containerRef.current as HTMLElement
      }} />}
            </div>
        </div>;
}`,...u.parameters?.docs?.source}}};var d=[`CustomEventTarget`];export{u as CustomEventTarget,d as __namedExportsOrder,l as default};