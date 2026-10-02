import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{t as n}from"./story-utils-cF-66lM2.js";import{F as r,I as i}from"./image-window-loader-DFAb4QQA.js";import{t as a}from"./data-editor-all-C3Wov0HC.js";var o=e(t(),1),{useState:s,useCallback:c,useMemo:l}=__STORYBOOK_MODULE_PREVIEW_API__,u={title:`Tests/TestCases`,decorators:[e=>o.createElement(n,{width:1e3,height:800},o.createElement(e,null))]};function d([e,t]){return e===0?{kind:i.RowID,data:`RowID ${e}, ${t}`,allowOverlay:!1}:e===1?{kind:i.Bubble,data:[`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`],allowOverlay:!0}:e===2?{kind:i.Image,data:[`https://i.imgur.com/5J0BftG.jpg`,`https://preview.redd.it/7jlqkp2cyap51.jpg?width=575&auto=webp&s=26fa9ed15b16fb450ee08ed1f2f0ccb5e0223581`],allowOverlay:!0,readonly:!1}:e===3?{kind:i.Markdown,data:`## Markdown has titles

And supports newline chars and automatic wrapping text that just needs to be long enough to trigger it.


[Google](https://google.com)

- with
- lists
- that
- can
- be
- pretty
- long
                    `,allowOverlay:!0}:e===4?{kind:i.Number,displayData:`$10,352`,allowOverlay:!0,data:10352,readonly:!0}:e===5?{kind:i.Uri,data:`https://www.google.com`,allowOverlay:!0}:e===6?{kind:i.Boolean,data:t%3==0||t%5==0,readonly:!0,allowOverlay:!1}:e===7?{kind:i.Text,displayData:`הרפתקה חדשה`,data:`הרפתקה חדשה`,allowOverlay:!0,readonly:!0}:e===8?{kind:i.Drilldown,data:[{text:`Test`,img:`https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg`},{text:`No Image`}],allowOverlay:!0}:{kind:i.Text,displayData:`${e}, ${t} 🦝`,data:`${e}, ${t} 🦝`,allowOverlay:!0}}function f(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(e=>({title:e.toString()+` is the longest header in the world`,width:120+e%4*10,icon:`headerString`,hasMenu:!0}))}function p(){let[e,t]=s(f),n=c((n,r)=>{let i=e.indexOf(n),a=[...e];a[i]={...a[i],width:r},t(a)},[e]);return o.createElement(a,{width:`100%`,getCellContent:d,getCellsForSelection:!0,columns:e,rows:1e3,onColumnResize:n})}function m(){return[{title:`Relation`,width:360,icon:`headerString`,hasMenu:!0}]}function h([e,t]){return{kind:i.Drilldown,data:[{text:`Image ${e}-${t}`,img:`https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg`},{text:`Text ${e}-${t}`},{text:`More text ${e}-${t}`}],allowOverlay:!0}}function g(){let[e,t]=s(m),n=c((n,r)=>{let i=e.indexOf(n),a=[...e];a[i]={...a[i],width:r},t(a)},[e]);return o.createElement(a,{width:`100%`,getCellContent:h,columns:e,rows:1e3,onColumnResize:n,smoothScrollX:!0,smoothScrollY:!0})}var _=[{title:`Number`,width:100,icon:`headerArray`,overlayIcon:`rowOwnerOverlay`},{title:`Square`,width:100}];function v([e,t]){let n=t**+(e+1);return{kind:i.Number,data:n,displayData:n.toString(),allowOverlay:!1}}function y(){return o.createElement(a,{width:`100%`,getCellContent:v,columns:_,rows:1e3})}function b(){let[e,t]=s(f),n=c((n,r)=>{let i=e.indexOf(n);if(i!==-1){let a={...n,width:r},o=[...e];o.splice(i,1,a),t(o)}},[e]);return o.createElement(a,{width:`100%`,getCellContent:d,onColumnResize:n,columns:e,rows:1e3,smoothScrollY:!0,smoothScrollX:!0})}function x(){let[e,t]=s(void 0);return o.createElement(a,{width:`100%`,gridSelection:e,onGridSelectionChange:e=>{(e.current?.cell[0]??0)%2==0&&t(e)},getCellContent:v,columns:_,rows:1e3})}function S(){return o.createElement(a,{width:`100%`,isDraggable:!0,onDragStart:e=>{e.setData(`text`,`testing`)},getCellContent:v,columns:_,rows:1e3})}function C(){return o.createElement(`div`,{style:{width:500,height:500,position:`relative`}},o.createElement(a,{width:500,height:500,isDraggable:!0,onDragStart:e=>{e.setData(`text`,`testing`)},getCellContent:v,columns:[{title:`Number`,width:250},{title:`Square`,width:250}],smoothScrollX:!0,smoothScrollY:!0,rowHeight:50,headerHeight:50,rows:9}))}function w({columnCount:e}){let t=[{title:`Number`,width:250},{title:`Square`,width:250}];for(let n=2;n<e;n++)t.push({title:`Foo`,width:250});return o.createElement(a,{width:`100%`,isDraggable:!0,getCellContent:v,columns:t,smoothScrollX:!0,smoothScrollY:!0,rowHeight:50,headerHeight:50,rows:9})}w.args={columnCount:2};function T(){let e=l(()=>f().map(e=>({...e,width:300,title:`Making column smaller used to crash!`})),[]),[t,n]=s({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:r.empty(),rows:r.empty()}),[i,u]=s(e),p=c(e=>{n(e)},[]);return o.createElement(a,{width:`100%`,getCellContent:d,columns:i,rows:1e3,onGridSelectionChange:p,gridSelection:t,onColumnResize:(t,n)=>{u(n>300?e:[])}})}function E(){return{"resize me 0":120,"resize me 1":120,"resize me 2":120,"resize me 3":120,"resize me 4":120,"resize me 5":120,"resize me 6":120,"resize me 7":120}}function D(e){return Object.entries(e).map(([e,t])=>({title:e,width:t,icon:`headerString`,hasMenu:!0}))}function O(){let[e,t]=s(E),n=l(()=>D(e),[e]),r=c((e,n)=>{t(t=>({...t,[e.title]:n}))},[]);return o.createElement(a,{width:`100%`,getCellContent:d,columns:n,rows:20,isDraggable:!1,smoothScrollX:!0,smoothScrollY:!0,onColumnResize:r})}function k(){let e=l(()=>f().map(e=>({...e,width:300,title:`Making column smaller used to crash!`})),[]),[t,n]=s({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:r.empty(),rows:r.empty()}),[i,u]=s(e),p=c(e=>{n(e)},[]);return o.createElement(a,{width:`100%`,getCellContent:d,columns:i,rows:1e3,onGridSelectionChange:p,gridSelection:t,onColumnResize:(t,n)=>{u(n>300?e:[e[0]])}})}function A(){let e=l(f,[]),[t,n]=s(10),r=c(()=>{n(e=>e+1)},[]),[i,u]=s(void 0),p=c(e=>{u(e)},[]);return o.createElement(a,{width:`100%`,getCellContent:d,columns:e,rows:t,onRowAppended:r,onGridSelectionChange:p,gridSelection:i})}function j(){let e=l(f,[]),[t,n]=s(void 0),r=c(e=>{n(e)},[]);return o.createElement(a,{width:`100%`,getCellContent:d,columns:e,rows:100,onGridSelectionChange:r,gridSelection:t})}function M(){let e=l(()=>[{title:`MD short`,width:50},{title:`MD long`,width:50}],[]),t=c(([e,t])=>e===0?{data:`text`,allowOverlay:!0,kind:i.Markdown}:e===1?{data:`text really really really long
## H1

- this
- is
- a
- longer
- example
- to
- test
- scroll
- of
- preview
                `,allowOverlay:!0,kind:i.Markdown}:{data:`text`,allowOverlay:!0,kind:i.Markdown},[]),[n,u]=s({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:r.empty(),rows:r.empty()}),d=c(e=>{u(e)},[]);return o.createElement(a,{width:`100%`,getCellContent:t,columns:e,rows:1e3,onGridSelectionChange:d,gridSelection:n})}var N=()=>{let[e,t]=s([!1,!1]);return o.createElement(a,{width:`100%`,columns:[{title:`Editable`,width:100},{title:`Readonly`,width:100}],rows:1,getCellContent:([t])=>({kind:i.Boolean,readonly:t!==0,allowOverlay:!1,data:e[t]}),onCellEdited:([e],n)=>{n.kind===i.Boolean&&t(t=>{let r=[...t];return r.splice(e,1,n.data),r})}})},P=()=>{let[e,t]=s(()=>{let e=[];for(let t=0;t<2e3;t++)e.push([`Edit`,`Me`]);return e});return o.createElement(a,{width:`100%`,columns:[{title:`Column A`,width:250},{title:`Column B`,width:250}],rows:e.length,getCellContent:([t,n])=>({kind:i.Text,allowOverlay:!0,data:e[n][t],displayData:e[n][t]}),onCellEdited:([n,r],i)=>{let a=[...e],o=[...a[r]];typeof i.data==`string`&&(o[n]=i.data),a[r]=o,t(a)}})};function F(){let e=[{title:`Col1`,width:100,grow:1,group:`Group`}],[t,n]=s(0);return o.createElement(`div`,null,o.createElement(`h3`,null,`Click count: `,t),o.createElement(a,{width:500,height:500,rows:0,columns:e,getCellContent:()=>({kind:i.Text,data:``,displayData:``,allowOverlay:!1}),getGroupDetails:e=>({name:e,actions:[{icon:`headerString`,title:`Action`,onClick:e=>n(e=>e+1)}]})}))}function I(){let[e,t]=s([`col-a`,`col-b`]),n=e.map(e=>({id:e,title:e,width:100})),r=o.useCallback(()=>({kind:i.Loading,allowOverlay:!1}),[]),c=()=>{let e=Math.random().toString(36).slice(2,8);t(t=>[...t,e])},l=e=>{t(t=>t.filter((t,n)=>!e.includes(n)))},[u,d]=s(void 0);return o.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`}},o.createElement(`div`,{style:{marginBottom:8}},o.createElement(`button`,{onClick:c},`Add`)),o.createElement(`div`,{style:{flex:1,position:`relative`}},o.createElement(a,{width:`100%`,height:`100%`,columns:n,rows:0,getCellContent:r,gridSelection:u,onGridSelectionChange:d,onDelete:e=>e.columns.length>0?(d(void 0),l(e.columns.toArray()),!1):!0})))}p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function Simplenotest() {
  const [cols, setColumns] = useState(getDummyCols);
  const onColumnResize = useCallback((col: GridColumn, newSize: number) => {
    const index = cols.indexOf(col);
    const newCols = [...cols];
    newCols[index] = {
      ...newCols[index],
      width: newSize
    };
    setColumns(newCols);
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyData} getCellsForSelection={true} columns={cols} rows={1000} onColumnResize={onColumnResize} />;
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`function RelationColumn() {
  const [cols, setColumns] = useState(getDummyRelationColumn);
  const onColumnResize = useCallback((col: GridColumn, newSize: number) => {
    const index = cols.indexOf(col);
    const newCols = [...cols];
    newCols[index] = {
      ...newCols[index],
      width: newSize
    };
    setColumns(newCols);
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyRelationData} columns={cols} rows={1000} onColumnResize={onColumnResize} smoothScrollX={true} smoothScrollY={true} />;
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`function Minimal() {
  return <DataEditor width="100%" getCellContent={getData} columns={columns} rows={1000} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`function Smooth() {
  const [cols, setCols] = useState(getDummyCols);
  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    const index = cols.indexOf(column);
    if (index !== -1) {
      const newCol: GridColumn = {
        ...column,
        width: newSize
      };
      const newCols = [...cols];
      newCols.splice(index, 1, newCol);
      setCols(newCols);
    }
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyData} onColumnResize={onColumnResize} columns={cols} rows={1000} smoothScrollY={true} smoothScrollX={true} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`function ManualControl() {
  const [gridSelection, setGridSelection] = useState<GridSelection | undefined>(undefined);
  const cb = (newVal: GridSelection) => {
    if ((newVal.current?.cell[0] ?? 0) % 2 === 0) {
      setGridSelection(newVal);
    }
  };
  return <DataEditor width="100%" gridSelection={gridSelection} onGridSelectionChange={cb} getCellContent={getData} columns={columns} rows={1000} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`function Draggable() {
  return <DataEditor width="100%" isDraggable={true} onDragStart={args => {
    args.setData("text", "testing");
  }} getCellContent={getData} columns={columns} rows={1000} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`function IdealSize() {
  // trying to be 500x500
  const cols: GridColumn[] = [{
    title: "Number",
    width: 250
  }, {
    title: "Square",
    width: 250
  }];
  return <div style={{
    width: 500,
    height: 500,
    position: "relative"
  }}>
            <DataEditor width={500} height={500} isDraggable={true} onDragStart={args => {
      args.setData("text", "testing");
    }} getCellContent={getData} columns={cols} smoothScrollX={true} smoothScrollY={true} rowHeight={50} headerHeight={50} rows={9} />
        </div>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`function DynamicAddRemoveColumns({
  columnCount
}: {
  columnCount: number;
}) {
  // trying to be 500x500
  const cols: GridColumn[] = [{
    title: "Number",
    width: 250
  }, {
    title: "Square",
    width: 250
  }];
  for (let i = 2; i < columnCount; i++) {
    cols.push({
      title: "Foo",
      width: 250
    });
  }
  return <DataEditor width="100%" isDraggable={true} getCellContent={getData} columns={cols} smoothScrollX={true} smoothScrollY={true} rowHeight={50} headerHeight={50} rows={9} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`function GridSelectionOutOfRangeNoColumns() {
  const dummyCols = useMemo(() => getDummyCols().map(v => ({
    ...v,
    width: 300,
    title: "Making column smaller used to crash!"
  })), []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [cols, setCols] = useState(dummyCols);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} onColumnResize={(_col, newSize) => {
    if (newSize > 300) {
      setCols(dummyCols);
    } else {
      setCols([]);
    }
  }} />;
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`function ResizableColumns() {
  const [colSizes, setColSizes] = useState(getResizableColumnsInitSize);
  const cols = useMemo(() => {
    return getResizableColumns(colSizes);
  }, [colSizes]);
  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    setColSizes(prevColSizes => {
      return {
        ...prevColSizes,
        [column.title]: newSize
      };
    });
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={20} isDraggable={false} smoothScrollX={true} smoothScrollY={true} onColumnResize={onColumnResize} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`function GridSelectionOutOfRangeLessColumnsThanSelection() {
  const dummyCols = useMemo(() => getDummyCols().map(v => ({
    ...v,
    width: 300,
    title: "Making column smaller used to crash!"
  })), []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [cols, setCols] = useState(dummyCols);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} onColumnResize={(_col, newSize) => {
    if (newSize > 300) {
      setCols(dummyCols);
    } else {
      setCols([dummyCols[0]]);
    }
  }} />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`function GridAddNewRows() {
  const cols = useMemo(getDummyCols, []);
  const [rowsCount, setRowsCount] = useState(10);
  const onRowAppended = useCallback(() => {
    setRowsCount(r => r + 1);
  }, []);
  const [selected, setSelected] = useState<GridSelection | undefined>(undefined);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={rowsCount} onRowAppended={onRowAppended} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`function GridNoTrailingBlankRow() {
  const cols = useMemo(getDummyCols, []);
  const [selected, setSelected] = useState<GridSelection | undefined>(undefined);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={100} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`function MarkdownEdits() {
  const dummyCols: GridColumn[] = useMemo(() => {
    return [{
      title: "MD short",
      width: 50
    }, {
      title: "MD long",
      width: 50
    }];
  }, []);
  const dummyCells = useCallback(([col, _row]: Item) => {
    if (col === 0) {
      const editable: EditableGridCell = {
        data: "text",
        allowOverlay: true,
        kind: GridCellKind.Markdown
      };
      return editable;
    } else if (col === 1) {
      const editable: EditableGridCell = {
        data: \`text really really really long
## H1

- this
- is
- a
- longer
- example
- to
- test
- scroll
- of
- preview
                \`,
        allowOverlay: true,
        kind: GridCellKind.Markdown
      };
      return editable;
    }
    const editable: EditableGridCell = {
      data: "text",
      allowOverlay: true,
      kind: GridCellKind.Markdown
    };
    return editable;
  }, []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={dummyCells} columns={dummyCols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState<[boolean | null | undefined, boolean | null | undefined]>([false, false]);
  return <DataEditor width="100%" columns={[{
    title: "Editable",
    width: 100
  }, {
    title: "Readonly",
    width: 100
  }]} rows={1} getCellContent={([col]) => {
    return {
      kind: GridCellKind.Boolean,
      readonly: col !== 0,
      allowOverlay: false,
      data: vals[col]
    };
  }} onCellEdited={([col], newVal) => {
    if (newVal.kind === GridCellKind.Boolean) {
      setVals(cv => {
        const f = [...cv];
        f.splice(col, 1, newVal.data);
        return f as [boolean, boolean];
      });
    }
  }} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState<[string, string][]>(() => {
    const result: [string, string][] = [];
    for (let i = 0; i < 2000; i++) {
      result.push(["Edit", "Me"]);
    }
    return result;
  });
  return <DataEditor width="100%" columns={[{
    title: "Column A",
    width: 250
  }, {
    title: "Column B",
    width: 250
  }]} rows={vals.length} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    allowOverlay: true,
    data: vals[row][col],
    displayData: vals[row][col]
  })} onCellEdited={([col, row], newVal) => {
    const newVals = [...vals];
    const newRow: [string, string] = [...newVals[row]];
    if (typeof newVal.data === "string") {
      newRow[col] = newVal.data;
    }
    newVals[row] = newRow;
    setVals(newVals);
  }} />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`function GroupHeaderActionClick() {
  const cols = [{
    title: "Col1",
    width: 100,
    grow: 1,
    group: "Group"
  }];
  const [clickCount, setClickCount] = useState(0);
  return <div>
            <h3>Click count: {clickCount}</h3>
            <DataEditor width={500} height={500} rows={0} columns={cols} getCellContent={() => ({
      kind: GridCellKind.Text,
      data: "",
      displayData: "",
      allowOverlay: false
    })} getGroupDetails={name => ({
      name,
      actions: [{
        icon: "headerString",
        title: "Action",
        onClick: _e => setClickCount(c => c + 1)
      }]
    })} />
        </div>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`function DeleteColumnsViaOnDelete() {
  const [headers, setHeaders] = useState<string[]>(["col-a", "col-b"]);
  const dynColumns: GridColumn[] = headers.map(value => ({
    id: value,
    title: value,
    width: 100
  }));
  const renderCell = React.useCallback((): GridCell => {
    return {
      kind: GridCellKind.Loading,
      allowOverlay: false
    };
  }, []);
  const addColumn = () => {
    const str = Math.random().toString(36).slice(2, 8);
    setHeaders(prev => [...prev, str]);
  };
  const removeColumns = (indices: number[]) => {
    setHeaders(prev => prev.filter((_, i) => !indices.includes(i)));
  };
  const [selection, setSelection] = useState<GridSelection | undefined>(undefined);
  const onDelete = (sel: GridSelection) => {
    if (sel.columns.length > 0) {
      setSelection(undefined);
      removeColumns(sel.columns.toArray());
      return false;
    }
    return true;
  };
  return <div style={{
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }}>
            <div style={{
      marginBottom: 8
    }}>
                <button onClick={addColumn}>Add</button>
            </div>
            <div style={{
      flex: 1,
      position: "relative"
    }}>
                <DataEditor width="100%" height="100%" columns={dynColumns} rows={0} getCellContent={renderCell} gridSelection={selection} onGridSelectionChange={setSelection} onDelete={onDelete} />
            </div>
        </div>;
}`,...I.parameters?.docs?.source}}};var L=[`Simplenotest`,`RelationColumn`,`Minimal`,`Smooth`,`ManualControl`,`Draggable`,`IdealSize`,`DynamicAddRemoveColumns`,`GridSelectionOutOfRangeNoColumns`,`ResizableColumns`,`GridSelectionOutOfRangeLessColumnsThanSelection`,`GridAddNewRows`,`GridNoTrailingBlankRow`,`MarkdownEdits`,`CanEditBoolean`,`SimpleEditable`,`GroupHeaderActionClick`,`DeleteColumnsViaOnDelete`];export{N as CanEditBoolean,I as DeleteColumnsViaOnDelete,S as Draggable,w as DynamicAddRemoveColumns,A as GridAddNewRows,j as GridNoTrailingBlankRow,k as GridSelectionOutOfRangeLessColumnsThanSelection,T as GridSelectionOutOfRangeNoColumns,F as GroupHeaderActionClick,C as IdealSize,x as ManualControl,M as MarkdownEdits,y as Minimal,g as RelationColumn,O as ResizableColumns,P as SimpleEditable,p as Simplenotest,b as Smooth,L as __namedExportsOrder,u as default};