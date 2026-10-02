import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{t as i}from"./data-editor-all-C3Wov0HC.js";import{i as a,l as o,n as s,o as c,s as l,u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(e,null))]},p=new Set([`image/png`,`image/gif`,`image/bmp`,`image/jpeg`]),m=()=>{let{cols:e,getCellContent:t,onColumnResize:n,setCellValue:f}=u(),[m,h]=d.useState([]),[g,_]=d.useState(),v=d.useCallback((e,t)=>{if(h([]),t===null)return;let{files:n}=t;if(n.length!==1)return;let[i]=n;if(!p.has(i.type))return;let a=URL.createObjectURL(i);f(e,{kind:r.Image,data:[a],allowOverlay:!0,readonly:!0},!0,!0),_(e)},[f]),y=d.useCallback((e,n)=>{if(n===null)return;let{items:i}=n;if(i.length!==1)return;let[a]=i;if(!p.has(a.type))return;let[o,s]=e;t(e).kind===r.Image?h([{color:`#44BB0022`,range:{x:o,y:s,width:1,height:1}}]):h([])},[t]),b=d.useCallback(()=>{h([])},[]);return d.createElement(s,{title:`Drop events`,description:d.createElement(d.Fragment,null,d.createElement(a,null,`You can drag and drop into cells by using `,d.createElement(l,null,`onDragOverCell`),` and`,` `,d.createElement(l,null,`onDrop`),`.`),d.createElement(`div`,null,g===void 0?d.createElement(c,null,`Nothing dropped, yet`):d.createElement(d.Fragment,null,d.createElement(c,null,`You last dropped in cell `,d.createElement(l,null,JSON.stringify(g))))))},d.createElement(i,{...o,getCellContent:t,columns:e,onCellEdited:f,onColumnResize:n,rows:1e3,onDrop:v,onDragOverCell:y,onDragLeave:b,highlightRegions:m,rowMarkers:`none`}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [highlights, setHighlights] = React.useState<DataEditorProps["highlightRegions"]>([]);
  const [lastDropCell, setLastDropCell] = React.useState<Item | undefined>();
  const onDrop = React.useCallback((cell: Item, dataTransfer: DataTransfer | null) => {
    setHighlights([]);
    if (dataTransfer === null) {
      return;
    }
    const {
      files
    } = dataTransfer;
    // This only supports one image, for simplicity.
    if (files.length !== 1) {
      return;
    }
    const [file] = files;
    if (!SUPPORTED_IMAGE_TYPES.has(file.type)) {
      return;
    }
    const imgUrl = URL.createObjectURL(file);
    setCellValue(cell, {
      kind: GridCellKind.Image,
      data: [imgUrl],
      allowOverlay: true,
      readonly: true
    }, true, true);
    setLastDropCell(cell);
  }, [setCellValue]);
  const onDragOverCell = React.useCallback((cell: Item, dataTransfer: DataTransfer | null) => {
    if (dataTransfer === null) {
      return;
    }
    const {
      items
    } = dataTransfer;
    // This only supports one image, for simplicity.
    if (items.length !== 1) {
      return;
    }
    const [item] = items;
    if (!SUPPORTED_IMAGE_TYPES.has(item.type)) {
      return;
    }
    const [col, row] = cell;
    if (getCellContent(cell).kind === GridCellKind.Image) {
      setHighlights([{
        color: "#44BB0022",
        range: {
          x: col,
          y: row,
          width: 1,
          height: 1
        }
      }]);
    } else {
      setHighlights([]);
    }
  }, [getCellContent]);
  const onDragLeave = React.useCallback(() => {
    setHighlights([]);
  }, []);
  return <BeautifulWrapper title="Drop events" description={<>
                    <Description>
                        You can drag and drop into cells by using <PropName>onDragOverCell</PropName> and{" "}
                        <PropName>onDrop</PropName>.
                    </Description>

                    <div>
                        {lastDropCell === undefined ? <MoreInfo>Nothing dropped, yet</MoreInfo> : <>
                                <MoreInfo>
                                    You last dropped in cell <PropName>{JSON.stringify(lastDropCell)}</PropName>
                                </MoreInfo>
                            </>}
                    </div>
                </>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={1000} onDrop={onDrop} onDragOverCell={onDragOverCell} onDragLeave={onDragLeave} highlightRegions={highlights} rowMarkers="none" />
        </BeautifulWrapper>;
}`,...m.parameters?.docs?.source}}};var h=[`DropEvents`];export{m as DropEvents,h as __namedExportsOrder,f as default};