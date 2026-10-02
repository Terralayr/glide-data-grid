import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{a as n,i as r,n as i,r as a}from"./doc-wrapper-DBLJ8pRn.js";import{n as o}from"./story-utils-cF-66lM2.js";import{I as s}from"./image-window-loader-DFAb4QQA.js";import{t as c}from"./data-editor-all-C3Wov0HC.js";import{t as l}from"./react-laag.esm-BmMZYTh9.js";var u=e(t(),1),d={title:`Glide-Data-Grid/Docs`,decorators:[e=>u.createElement(o,null,u.createElement(e,null))]},f=[{name:`Deidre Morris`,company:`GONKLE`,email:`deidremorris@gonkle.com`,phone:`+1 (867) 507-3332`},{name:`Sheryl Craig`,company:`EVENTAGE`,email:`sherylcraig@eventage.com`,phone:`+1 (869) 520-2227`},{name:`Lidia Bowers`,company:`ANOCHA`,email:`lidiabowers@anocha.com`,phone:`+1 (808) 414-3826`},{name:`Jones Norton`,company:`REPETWIRE`,email:`jonesnorton@repetwire.com`,phone:`+1 (875) 582-3320`},{name:`Lula Bruce`,company:`COMDOM`,email:`lulabruce@comdom.com`,phone:`+1 (873) 452-2472`},{name:`Larsen Montgomery`,company:`SQUISH`,email:`larsenmontgomery@squish.com`,phone:`+1 (893) 482-3651`},{name:`Becky Bright`,company:`COMCUR`,email:`beckybright@comcur.com`,phone:`+1 (879) 494-2331`},{name:`Charlotte Rowland`,company:`FROLIX`,email:`charlotterowland@frolix.com`,phone:`+1 (861) 439-2134`},{name:`Sonya Hensley`,company:`GEEKETRON`,email:`sonyahensley@geeketron.com`,phone:`+1 (802) 553-2194`},{name:`Stephenson Guthrie`,company:`EXOSWITCH`,email:`stephensonguthrie@exoswitch.com`,phone:`+1 (903) 449-3271`},{name:`Mcmillan Cline`,company:`TURNLING`,email:`mcmillancline@turnling.com`,phone:`+1 (982) 496-2454`},{name:`Kemp Davis`,company:`TETRATREX`,email:`kempdavis@tetratrex.com`,phone:`+1 (859) 594-2982`},{name:`Matilda Levy`,company:`SLOFAST`,email:`matildalevy@slofast.com`,phone:`+1 (841) 521-2444`},{name:`Hattie Simpson`,company:`COMTRAK`,email:`hattiesimpson@comtrak.com`,phone:`+1 (962) 587-3805`},{name:`Kinney Munoz`,company:`IDETICA`,email:`kinneymunoz@idetica.com`,phone:`+1 (921) 513-2012`},{name:`Lambert Raymond`,company:`TURNABOUT`,email:`lambertraymond@turnabout.com`,phone:`+1 (919) 519-2442`},{name:`Bryant Dunlap`,company:`BYTREX`,email:`bryantdunlap@bytrex.com`,phone:`+1 (872) 583-2883`}],p=()=>{let e=u.useCallback(e=>{let[t,n]=e,r=f[n][[`name`,`company`,`email`,`phone`][t]];return{kind:s.Text,allowOverlay:!0,displayData:r,data:r}},[]),t=u.useMemo(()=>[{title:`Name`,id:`name`,hasMenu:!0},{title:`Company`,id:`company`,hasMenu:!0},{title:`Email`,id:`email`,hasMenu:!0},{title:`Phone`,id:`phone`,hasMenu:!0}],[]),o=u.useCallback((e,t)=>{window.alert(`Header menu clicked `+e+JSON.stringify(t))},[]),[d,p]=u.useState(),m=u.useCallback((e,t)=>{p({col:e,bounds:t})},[]),{renderLayer:h,layerProps:g}=l({isOpen:d!==void 0,triggerOffset:4,onOutsideClick:()=>p(void 0),trigger:{getBounds:()=>({bottom:(d?.bounds.y??0)+(d?.bounds.height??0),height:d?.bounds.height??0,left:d?.bounds.x??0,right:(d?.bounds.x??0)+(d?.bounds.width??0),top:d?.bounds.y??0,width:d?.bounds.width??0})},placement:`bottom-start`,auto:!0,possiblePlacements:[`bottom-start`,`bottom-end`]});return u.createElement(i,null,u.createElement(r,null,`
# Menus

Glide Data Grid doesn't come with built in menus. Instead it is evented and ready to work with whatever menus you want 
to use. Let's learn how to add basic menus using [react-laag](https://www.react-laag.com/). Adding menu drop down indicators to headers is as simple
as passing a bool and listening to click events using \`onHeaderMenuClick\`.`),u.createElement(a,null,`
const columns = React.useMemo<GridColumn[]>(() => {
    return [
        {
            title: "Name",
            id: "name",
            hasMenu: true,
        },
        {
            title: "Company",
            id: "company",
            hasMenu: true,
        },
        {
            title: "Email",
            id: "email",
            hasMenu: true,
        },
        {
            title: "Phone",
            id: "phone",
            hasMenu: true,
        },
    ];
}, []);

const onHeaderMenuClick = React.useCallback((col: number, position: Rectangle) => {
    window.alert("Header menu clicked " + col + JSON.stringify(position));
}, []);

return <DataEditor {...rest} onHeaderMenuClick={onHeaderMenuClick} />;
`),u.createElement(n,{height:200},u.createElement(c,{getCellContent:e,columns:t,rows:f.length,onHeaderMenuClick:o})),u.createElement(r,null,`
The provided coordinates are in page space. This makes it trivial to use [react-laag](https://www.react-laag.com/) to create a basic menu. Some 
styling would go a long way here.`),u.createElement(a,null,`
const [showMenu, setShowMenu] = React.useState<{ bounds: Rectangle; col: number }>();

const onHeaderMenuClick = React.useCallback((col: number, bounds: Rectangle) => {
    setShowMenu({ col, bounds });
}, []);

const { renderLayer, layerProps } = useLayer({
    isOpen: showMenu !== undefined,
    triggerOffset: 4,
    onOutsideClick: () => setShowMenu(undefined),
    trigger: {
        getBounds: () => ({
            bottom: (showMenu?.bounds.y ?? 0) + (showMenu?.bounds.height ?? 0),
            height: showMenu?.bounds.height ?? 0,
            left: showMenu?.bounds.x ?? 0,
            right: (showMenu?.bounds.x ?? 0) + (showMenu?.bounds.width ?? 0),
            top: showMenu?.bounds.y ?? 0,
            width: showMenu?.bounds.width ?? 0,
        }),
    },
    placement: "bottom-start",
    auto: true,
    possiblePlacements: ["bottom-start", "bottom-end"],
    });

return <>
    <DataEditor {...rest} onHeaderMenuClick={onHeaderMenuClick} />
    {showMenu !== undefined &&
        renderLayer(
            <div
                {...layerProps}
                style={{
                    ...layerProps.style,
                    width: 300,
                    padding: 4,
                    borderRadius: 8,
                    backgroundColor: "white",
                    border: "1px solid black",
                }}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        )}
</>;
`),u.createElement(n,{height:200},u.createElement(c,{getCellContent:e,columns:t,rows:f.length,onHeaderMenuClick:m}),d!==void 0&&h(u.createElement(`div`,{...g,style:{...g.style,width:300,padding:4,borderRadius:8,backgroundColor:`white`,border:`1px solid black`}},u.createElement(`ul`,null,u.createElement(`li`,null,`Item 1`),u.createElement(`li`,null,`Item 2`),u.createElement(`li`,null,`Item 3`))))))};p.storyName=`09. Menus`,p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const getContent = React.useCallback((cell: Item): GridCell => {
    const [col, row] = cell;
    const dataRow = data[row];
    const indexes: (keyof DummyItem)[] = ["name", "company", "email", "phone"];
    const d = dataRow[indexes[col]];
    return {
      kind: GridCellKind.Text,
      allowOverlay: true,
      displayData: d,
      data: d
    };
  }, []);
  const columns = React.useMemo<GridColumn[]>(() => {
    return [{
      title: "Name",
      id: "name",
      hasMenu: true
    }, {
      title: "Company",
      id: "company",
      hasMenu: true
    }, {
      title: "Email",
      id: "email",
      hasMenu: true
    }, {
      title: "Phone",
      id: "phone",
      hasMenu: true
    }];
  }, []);
  const onHeaderMenuClickedStage1 = React.useCallback((col: number, position: Rectangle) => {
    window.alert("Header menu clicked " + col + JSON.stringify(position));
  }, []);
  const [showMenu, setShowMenu] = React.useState<{
    bounds: Rectangle;
    col: number;
  }>();
  const onHeaderMenuClickedStage2 = React.useCallback((col: number, bounds: Rectangle) => {
    setShowMenu({
      col,
      bounds
    });
  }, []);
  const {
    renderLayer,
    layerProps
  } = useLayer({
    isOpen: showMenu !== undefined,
    triggerOffset: 4,
    onOutsideClick: () => setShowMenu(undefined),
    trigger: {
      getBounds: () => ({
        bottom: (showMenu?.bounds.y ?? 0) + (showMenu?.bounds.height ?? 0),
        height: showMenu?.bounds.height ?? 0,
        left: showMenu?.bounds.x ?? 0,
        right: (showMenu?.bounds.x ?? 0) + (showMenu?.bounds.width ?? 0),
        top: showMenu?.bounds.y ?? 0,
        width: showMenu?.bounds.width ?? 0
      })
    },
    placement: "bottom-start",
    auto: true,
    possiblePlacements: ["bottom-start", "bottom-end"]
  });
  return <DocWrapper>
            <Marked>
                {\`
# Menus

Glide Data Grid doesn't come with built in menus. Instead it is evented and ready to work with whatever menus you want 
to use. Let's learn how to add basic menus using [react-laag](https://www.react-laag.com/). Adding menu drop down indicators to headers is as simple
as passing a bool and listening to click events using \\\`onHeaderMenuClick\\\`.\`}
            </Marked>
            <Highlight>
                {\`
const columns = React.useMemo<GridColumn[]>(() => {
    return [
        {
            title: "Name",
            id: "name",
            hasMenu: true,
        },
        {
            title: "Company",
            id: "company",
            hasMenu: true,
        },
        {
            title: "Email",
            id: "email",
            hasMenu: true,
        },
        {
            title: "Phone",
            id: "phone",
            hasMenu: true,
        },
    ];
}, []);

const onHeaderMenuClick = React.useCallback((col: number, position: Rectangle) => {
    window.alert("Header menu clicked " + col + JSON.stringify(position));
}, []);

return <DataEditor {...rest} onHeaderMenuClick={onHeaderMenuClick} />;
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={getContent} columns={columns} rows={data.length} onHeaderMenuClick={onHeaderMenuClickedStage1} />
            </Wrapper>
            <Marked>
                {\`
The provided coordinates are in page space. This makes it trivial to use [react-laag](https://www.react-laag.com/) to create a basic menu. Some 
styling would go a long way here.\`}
            </Marked>
            <Highlight>
                {\`
const [showMenu, setShowMenu] = React.useState<{ bounds: Rectangle; col: number }>();

const onHeaderMenuClick = React.useCallback((col: number, bounds: Rectangle) => {
    setShowMenu({ col, bounds });
}, []);

const { renderLayer, layerProps } = useLayer({
    isOpen: showMenu !== undefined,
    triggerOffset: 4,
    onOutsideClick: () => setShowMenu(undefined),
    trigger: {
        getBounds: () => ({
            bottom: (showMenu?.bounds.y ?? 0) + (showMenu?.bounds.height ?? 0),
            height: showMenu?.bounds.height ?? 0,
            left: showMenu?.bounds.x ?? 0,
            right: (showMenu?.bounds.x ?? 0) + (showMenu?.bounds.width ?? 0),
            top: showMenu?.bounds.y ?? 0,
            width: showMenu?.bounds.width ?? 0,
        }),
    },
    placement: "bottom-start",
    auto: true,
    possiblePlacements: ["bottom-start", "bottom-end"],
    });

return <>
    <DataEditor {...rest} onHeaderMenuClick={onHeaderMenuClick} />
    {showMenu !== undefined &&
        renderLayer(
            <div
                {...layerProps}
                style={{
                    ...layerProps.style,
                    width: 300,
                    padding: 4,
                    borderRadius: 8,
                    backgroundColor: "white",
                    border: "1px solid black",
                }}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        )}
</>;
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={getContent} columns={columns} rows={data.length} onHeaderMenuClick={onHeaderMenuClickedStage2} />
                {showMenu !== undefined && renderLayer(<div {...layerProps} style={{
        ...layerProps.style,
        width: 300,
        padding: 4,
        borderRadius: 8,
        backgroundColor: "white",
        border: "1px solid black"
      }}>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </div>)}
            </Wrapper>
        </DocWrapper>;
}`,...p.parameters?.docs?.source}}};var m=[`Menus`];export{p as Menus,m as __namedExportsOrder,d as default};