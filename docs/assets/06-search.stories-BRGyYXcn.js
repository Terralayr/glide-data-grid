import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{a as n,i as r,n as i,r as a}from"./doc-wrapper-DBLJ8pRn.js";import{n as o}from"./story-utils-cF-66lM2.js";import{I as s}from"./image-window-loader-DFAb4QQA.js";import{t as c}from"./data-editor-all-C3Wov0HC.js";var l=e(t(),1),u={title:`Glide-Data-Grid/Docs`,decorators:[e=>l.createElement(o,null,l.createElement(e,null))]},d=[{name:`Deidre Morris`,company:`GONKLE`,email:`deidremorris@gonkle.com`,phone:`+1 (867) 507-3332`},{name:`Sheryl Craig`,company:`EVENTAGE`,email:`sherylcraig@eventage.com`,phone:`+1 (869) 520-2227`},{name:`Lidia Bowers`,company:`ANOCHA`,email:`lidiabowers@anocha.com`,phone:`+1 (808) 414-3826`},{name:`Jones Norton`,company:`REPETWIRE`,email:`jonesnorton@repetwire.com`,phone:`+1 (875) 582-3320`},{name:`Lula Bruce`,company:`COMDOM`,email:`lulabruce@comdom.com`,phone:`+1 (873) 452-2472`},{name:`Larsen Montgomery`,company:`SQUISH`,email:`larsenmontgomery@squish.com`,phone:`+1 (893) 482-3651`},{name:`Becky Bright`,company:`COMCUR`,email:`beckybright@comcur.com`,phone:`+1 (879) 494-2331`},{name:`Charlotte Rowland`,company:`FROLIX`,email:`charlotterowland@frolix.com`,phone:`+1 (861) 439-2134`},{name:`Sonya Hensley`,company:`GEEKETRON`,email:`sonyahensley@geeketron.com`,phone:`+1 (802) 553-2194`},{name:`Stephenson Guthrie`,company:`EXOSWITCH`,email:`stephensonguthrie@exoswitch.com`,phone:`+1 (903) 449-3271`},{name:`Mcmillan Cline`,company:`TURNLING`,email:`mcmillancline@turnling.com`,phone:`+1 (982) 496-2454`},{name:`Kemp Davis`,company:`TETRATREX`,email:`kempdavis@tetratrex.com`,phone:`+1 (859) 594-2982`},{name:`Matilda Levy`,company:`SLOFAST`,email:`matildalevy@slofast.com`,phone:`+1 (841) 521-2444`},{name:`Hattie Simpson`,company:`COMTRAK`,email:`hattiesimpson@comtrak.com`,phone:`+1 (962) 587-3805`},{name:`Kinney Munoz`,company:`IDETICA`,email:`kinneymunoz@idetica.com`,phone:`+1 (921) 513-2012`},{name:`Lambert Raymond`,company:`TURNABOUT`,email:`lambertraymond@turnabout.com`,phone:`+1 (919) 519-2442`},{name:`Bryant Dunlap`,company:`BYTREX`,email:`bryantdunlap@bytrex.com`,phone:`+1 (872) 583-2883`}],f=()=>{let e=l.useCallback(e=>{let[t,n]=e,r=d[n][[`name`,`company`,`email`,`phone`][t]];return{kind:s.Text,allowOverlay:!0,displayData:r,data:r}},[]),t=l.useMemo(()=>[{title:`Name`,id:`name`},{title:`Company`,id:`company`},{title:`Email`,id:`email`},{title:`Phone`,id:`phone`}],[]),[o,u]=l.useState(!1),f=l.useCallback(()=>u(!1),[]);return l.createElement(i,null,l.createElement(r,null,`
# Search

Search is a controlled property in Glide Data Grid. Triggering the search interface is up to the application but once triggered search is handled interally on the data grid. Search always depends on a properly implemented \`getCellsForSelection\`.`),l.createElement(a,null,`
const [showSearch, setShowSearch] = React.useState(false);
const onSearchClose = React.useCallback(() => setShowSearch(false), []);

return <DataEditor {...rest} showSearch={showSearch} getCellsForSelection={true} onSearchClose={onSearchClose}  />
`),l.createElement(`button`,{onClick:()=>u(e=>!e)},`Show Search`),l.createElement(n,{height:200},l.createElement(c,{showSearch:o,onSearchClose:f,getCellContent:e,getCellsForSelection:!0,columns:t,rows:d.length})),l.createElement(r,null,`
# Automatic Search

Search can also be handled by the data grid automatically if you enable the search keybinding.`),l.createElement(a,null,`
return <DataEditor {...rest} keybindings={{search: true}} getCellsForSelection={true}  />
`),l.createElement(n,{height:200},l.createElement(c,{keybindings:{search:!0},getCellContent:e,getCellsForSelection:!0,columns:t,rows:d.length})))};f.storyName=`06. Search`,f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
      id: "name"
    }, {
      title: "Company",
      id: "company"
    }, {
      title: "Email",
      id: "email"
    }, {
      title: "Phone",
      id: "phone"
    }];
  }, []);
  const [showSearch, setShowSearch] = React.useState(false);
  const onSearchClose = React.useCallback(() => setShowSearch(false), []);
  return <DocWrapper>
            <Marked>
                {\`
# Search

Search is a controlled property in Glide Data Grid. Triggering the search interface is up to the application but once triggered search is handled interally on the data grid. Search always depends on a properly implemented \\\`getCellsForSelection\\\`.\`}
            </Marked>
            <Highlight>
                {\`
const [showSearch, setShowSearch] = React.useState(false);
const onSearchClose = React.useCallback(() => setShowSearch(false), []);

return <DataEditor {...rest} showSearch={showSearch} getCellsForSelection={true} onSearchClose={onSearchClose}  />
\`}
            </Highlight>
            <button onClick={() => setShowSearch(prev => !prev)}>Show Search</button>
            <Wrapper height={200}>
                <DataEditor showSearch={showSearch} onSearchClose={onSearchClose} getCellContent={getContent} getCellsForSelection={true} columns={columns} rows={data.length} />
            </Wrapper>
            <Marked>
                {\`
# Automatic Search

Search can also be handled by the data grid automatically if you enable the search keybinding.\`}
            </Marked>
            <Highlight>
                {\`
return <DataEditor {...rest} keybindings={{search: true}} getCellsForSelection={true}  />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor keybindings={{
        search: true
      }} getCellContent={getContent} getCellsForSelection={true} columns={columns} rows={data.length} />
            </Wrapper>
        </DocWrapper>;
}`,...f.parameters?.docs?.source}}};var p=[`Search`];export{f as Search,p as __namedExportsOrder,u as default};