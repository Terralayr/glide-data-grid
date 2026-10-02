import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{F as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{d as a,i as o,n as s,s as c}from"./utils-CIrhwOhG.js";var l=e(t(),1),u={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>l.createElement(n,null,l.createElement(e,null))]},d=()=>{let{cols:e,getCellContent:t}=a(30,!0,!0),[n,u]=l.useState(()=>{try{let e=localStorage.getItem(`grid-selection-demo`);if(e!==null){let t=JSON.parse(e);return{columns:r.create(Array.isArray(t.columns)?t.columns:[]),rows:r.create(Array.isArray(t.rows)?t.rows:[]),current:t.current}}}catch(e){console.error(`Failed to restore selection`,e)}return{columns:r.empty(),rows:r.empty()}});return l.useEffect(()=>{let e={columns:n.columns.items,rows:n.rows.items,current:n.current};localStorage.setItem(`grid-selection-demo`,JSON.stringify(e))},[n]),l.createElement(s,{title:`Selection Serialization`,description:l.createElement(o,null,`This example demonstrates how to serialize and persist grid selections using the new`,` `,l.createElement(c,null,`CompactSelection.create()`),` and `,l.createElement(c,null,`.items`),` APIs. The selection is automatically saved to localStorage and restored when the page refreshes.`,l.createElement(`br`,null),l.createElement(`br`,null),l.createElement(`button`,{onClick:()=>{u({columns:r.create([[2,5],[8,10]]),rows:r.create([[1,4],[10,15],[20,23]]),current:{cell:[3,5],range:{x:3,y:5,width:1,height:1},rangeStack:[]}})},style:{marginRight:8}},`Create Example Selection`),l.createElement(`button`,{onClick:()=>{u({columns:r.empty(),rows:r.empty(),current:void 0})}},`Clear Selection`),l.createElement(`br`,null),l.createElement(`br`,null),l.createElement(`strong`,null,`Current selection:`),` `,n.rows.length,` rows, `,n.columns.length,` columns`,l.createElement(`br`,null),l.createElement(`strong`,null,`Persisted data:`),` `,l.createElement(`code`,null,JSON.stringify({columns:n.columns.items,rows:n.rows.items})))},l.createElement(i,{...a(30,!1),columns:e,getCellContent:t,rows:1e4,gridSelection:n,onGridSelectionChange:u,rowMarkers:`both`,columnSelect:`multi`}))},f=()=>{let{cols:e,getCellContent:t}=a(30,!0,!0),[n,u]=l.useState({columns:r.empty(),rows:r.empty()}),[d,f]=l.useState({columns:r.empty(),rows:r.empty()});return l.createElement(s,{title:`Selection Round Trip`,description:l.createElement(o,null,`This example demonstrates a complete round trip: create a selection, serialize it to JSON, then deserialize it back to a `,l.createElement(c,null,`CompactSelection`),` using the new APIs.`,l.createElement(`br`,null),l.createElement(`br`,null),l.createElement(`button`,{onClick:()=>{let e={columns:n.columns.items,rows:n.rows.items,current:n.current},t=JSON.stringify(e);console.log(`Serialized selection:`,t);let i=JSON.parse(t),a={columns:r.create(i.columns),rows:r.create(i.rows),current:i.current};f(a)}},`Perform Round Trip`),l.createElement(`br`,null),l.createElement(`br`,null),l.createElement(`strong`,null,`Original equals restored:`),` `,n.columns.equals(d.columns)&&n.rows.equals(d.rows)?`✅ Yes`:`❌ No`)},l.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16,height:600}},l.createElement(`div`,null,l.createElement(`h3`,null,`Original Selection`),l.createElement(i,{...a(30,!1),columns:e,getCellContent:t,rows:1e3,gridSelection:n,onGridSelectionChange:u,rowMarkers:`both`,columnSelect:`multi`})),l.createElement(`div`,null,l.createElement(`h3`,null,`Restored Selection`),l.createElement(i,{...a(30,!1),columns:e,getCellContent:t,rows:1e3,gridSelection:d,onGridSelectionChange:f,rowMarkers:`both`,columnSelect:`multi`}))))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30, true, true);

  // Load selection from localStorage on mount
  const [selection, setSelection] = React.useState<GridSelection>(() => {
    try {
      const saved = localStorage.getItem("grid-selection-demo");
      if (saved !== null) {
        const parsed = JSON.parse(saved) as {
          columns?: any[];
          rows?: any[];
          current?: any;
        };
        return {
          columns: CompactSelection.create(Array.isArray(parsed.columns) ? parsed.columns : []),
          rows: CompactSelection.create(Array.isArray(parsed.rows) ? parsed.rows : []),
          current: parsed.current
        };
      }
    } catch (error) {
      console.error("Failed to restore selection", error);
    }
    return {
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty()
    };
  });

  // Save selection to localStorage whenever it changes
  React.useEffect(() => {
    const toSave = {
      columns: selection.columns.items,
      rows: selection.rows.items,
      current: selection.current
    };
    localStorage.setItem("grid-selection-demo", JSON.stringify(toSave));
  }, [selection]);
  const clearSelection = () => {
    setSelection({
      columns: CompactSelection.empty(),
      rows: CompactSelection.empty(),
      current: undefined
    });
  };
  const createExampleSelection = () => {
    setSelection({
      columns: CompactSelection.create([[2, 5], [8, 10]]),
      rows: CompactSelection.create([[1, 4], [10, 15], [20, 23]]),
      current: {
        cell: [3, 5],
        range: {
          x: 3,
          y: 5,
          width: 1,
          height: 1
        },
        rangeStack: []
      }
    });
  };
  return <BeautifulWrapper title="Selection Serialization" description={<Description>
                    This example demonstrates how to serialize and persist grid selections using the new{" "}
                    <PropName>CompactSelection.create()</PropName> and <PropName>.items</PropName> APIs. 
                    The selection is automatically saved to localStorage and restored when the page refreshes.
                    <br />
                    <br />
                    <button onClick={createExampleSelection} style={{
      marginRight: 8
    }}>
                        Create Example Selection
                    </button>
                    <button onClick={clearSelection}>Clear Selection</button>
                    <br />
                    <br />
                    <strong>Current selection:</strong> {selection.rows.length} rows, {selection.columns.length} columns
                    <br />
                    <strong>Persisted data:</strong> <code>{JSON.stringify({
        columns: selection.columns.items,
        rows: selection.rows.items
      })}</code>
                </Description>}>
            <DataEditor {...useMockDataGenerator(30, false)} columns={cols} getCellContent={getCellContent} rows={10_000} gridSelection={selection} onGridSelectionChange={setSelection} rowMarkers="both" columnSelect="multi" />
        </BeautifulWrapper>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30, true, true);
  const [originalSelection, setOriginalSelection] = React.useState<GridSelection>({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [restoredSelection, setRestoredSelection] = React.useState<GridSelection>({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const performRoundTrip = () => {
    // Serialize the selection
    const serialized = {
      columns: originalSelection.columns.items,
      rows: originalSelection.rows.items,
      current: originalSelection.current
    };

    // Simulate persistence (e.g., sending to server, storing in database)
    const jsonString = JSON.stringify(serialized);
    console.log("Serialized selection:", jsonString);

    // Deserialize and restore
    const parsed = JSON.parse(jsonString) as {
      columns: CompactSelectionRanges;
      rows: CompactSelectionRanges;
      current?: any;
    };
    const restored = {
      columns: CompactSelection.create(parsed.columns),
      rows: CompactSelection.create(parsed.rows),
      current: parsed.current
    };
    setRestoredSelection(restored);
  };
  return <BeautifulWrapper title="Selection Round Trip" description={<Description>
                    This example demonstrates a complete round trip: create a selection, serialize it to JSON, 
                    then deserialize it back to a <PropName>CompactSelection</PropName> using the new APIs.
                    <br />
                    <br />
                    <button onClick={performRoundTrip}>Perform Round Trip</button>
                    <br />
                    <br />
                    <strong>Original equals restored:</strong> {originalSelection.columns.equals(restoredSelection.columns) && originalSelection.rows.equals(restoredSelection.rows) ? "✅ Yes" : "❌ No"}
                </Description>}>
            <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      height: 600
    }}>
                <div>
                    <h3>Original Selection</h3>
                    <DataEditor {...useMockDataGenerator(30, false)} columns={cols} getCellContent={getCellContent} rows={1000} gridSelection={originalSelection} onGridSelectionChange={setOriginalSelection} rowMarkers="both" columnSelect="multi" />
                </div>
                <div>
                    <h3>Restored Selection</h3>
                    <DataEditor {...useMockDataGenerator(30, false)} columns={cols} getCellContent={getCellContent} rows={1000} gridSelection={restoredSelection} onGridSelectionChange={setRestoredSelection} rowMarkers="both" columnSelect="multi" />
                </div>
            </div>
        </BeautifulWrapper>;
}`,...f.parameters?.docs?.source}}};var p=[`SelectionSerialization`,`SelectionRoundTrip`];export{f as SelectionRoundTrip,d as SelectionSerialization,p as __namedExportsOrder,u as default};