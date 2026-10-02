import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{a as n,i as r,n as i,r as a}from"./doc-wrapper-DBLJ8pRn.js";import{n as o}from"./story-utils-cF-66lM2.js";import{I as s,L as c}from"./image-window-loader-DFAb4QQA.js";import{t as l}from"./data-editor-all-C3Wov0HC.js";var u=e(t(),1),d={title:`Glide-Data-Grid/Docs`,decorators:[e=>u.createElement(o,null,u.createElement(e,null))]},f=()=>{let e=u.useCallback(e=>({kind:s.Text,allowOverlay:!1,displayData:e.toString(),data:e.toString()}),[]),t=u.useMemo(()=>[{title:`First`,width:150},{title:`Second`,width:150}],[]);return u.createElement(i,null,u.createElement(r,null,"\n# Basic usage\n\n> The `GridColumn[]` passed to the `DataEditor` in the `columns` property should be memoized to avoid excessive re-rendering. These samples may not do this for the sake of brevity.\n\nThere are only two mandatory properties for each `GridColumn`: `title` and `id`. The id should be a stable id and not the index of the column. Additionally a `width` property can be provided which represents the width of the column in pixels. If a width is provided the id may be omited. This may change in a future version."),u.createElement(a,null,`
const columns: GridColumn[] = [
    { title: "First", id: "first", width: 150 },
    { title: "Second", id: "second", width: 150 }
];

<DataEditor {...rest} columns={columns} />
`),u.createElement(n,{height:200},u.createElement(l,{getCellContent:e,columns:t,rows:50})),u.createElement(r,null,`
# Header icons

Default header icons are available. They can also be reaplced by passing a new map to the \`headerIcons\` property.`),u.createElement(a,null,`
const columns: GridColumn[] = [
    { title: "Name", id: "name", width: 250, icon: GridColumnIcon.HeaderString, 
      overlayIcon: GridColumnIcon.RowOwnerOverlay 
    },
    { title: "Age", id: "age", width: 100, icon: GridColumnIcon.HeaderNumber },
    { title: "Avatar", id: "avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
`),u.createElement(n,{height:200},u.createElement(l,{getCellContent:e,columns:[{title:`Name`,width:250,icon:c.HeaderString,overlayIcon:c.RowOwnerOverlay},{title:`Age`,width:120,icon:c.HeaderNumber},{title:`Avatar`,width:100,icon:c.HeaderImage}],rows:50})),u.createElement(r,null,`
# Header theming

Headers can be provided with individual theme overrides which themes both the header and its column cells.`),u.createElement(a,null,`
const columns: GridColumn[] = [
    { title: "Name", id="name", width: 250, icon: GridColumnIcon.HeaderString },
    { title: "Age", id="age", width: 100, icon: GridColumnIcon.HeaderNumber, themeOverride: {
        bgIconHeader: "#00967d",
        textDark: "#00c5a4",
        textHeader: "#00c5a4",
    } },
    { title: "Avatar", id="avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
`),u.createElement(n,{height:200},u.createElement(l,{getCellContent:e,columns:[{title:`Name`,width:250,icon:c.HeaderString},{title:`Age`,width:100,icon:c.HeaderNumber,themeOverride:{bgIconHeader:`#00967d`,textDark:`#00c5a4`,textHeader:`#00c5a4`}},{title:`Avatar`,width:80,icon:c.HeaderImage}],rows:50})))};f.storyName=`03. Grid Columns`,f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const basicGetCellContent = React.useCallback((cell: Item): GridCell => {
    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      displayData: cell.toString(),
      data: cell.toString()
    };
  }, []);
  const cols = React.useMemo(() => {
    return [{
      title: "First",
      width: 150
    }, {
      title: "Second",
      width: 150
    }];
  }, []);
  return <DocWrapper>
            <Marked>
                {\`
# Basic usage

> The \\\`GridColumn[]\\\` passed to the \\\`DataEditor\\\` in the \\\`columns\\\` property should be memoized to avoid excessive re-rendering. These samples may not do this for the sake of brevity.

There are only two mandatory properties for each \\\`GridColumn\\\`: \\\`title\\\` and \\\`id\\\`. The id should be a stable id and not the index of the column. Additionally a \\\`width\\\` property can be provided which represents the width of the column in pixels. If a width is provided the id may be omited. This may change in a future version.\`}
            </Marked>
            <Highlight>
                {\`
const columns: GridColumn[] = [
    { title: "First", id: "first", width: 150 },
    { title: "Second", id: "second", width: 150 }
];

<DataEditor {...rest} columns={columns} />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={basicGetCellContent} columns={cols} rows={50} />
            </Wrapper>

            <Marked>
                {\`
# Header icons

Default header icons are available. They can also be reaplced by passing a new map to the \\\`headerIcons\\\` property.\`}
            </Marked>
            <Highlight>
                {\`
const columns: GridColumn[] = [
    { title: "Name", id: "name", width: 250, icon: GridColumnIcon.HeaderString, 
      overlayIcon: GridColumnIcon.RowOwnerOverlay 
    },
    { title: "Age", id: "age", width: 100, icon: GridColumnIcon.HeaderNumber },
    { title: "Avatar", id: "avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={basicGetCellContent} columns={[{
        title: "Name",
        width: 250,
        icon: GridColumnIcon.HeaderString,
        overlayIcon: GridColumnIcon.RowOwnerOverlay
      }, {
        title: "Age",
        width: 120,
        icon: GridColumnIcon.HeaderNumber
      }, {
        title: "Avatar",
        width: 100,
        icon: GridColumnIcon.HeaderImage
      }]} rows={50} />
            </Wrapper>

            <Marked>
                {\`
# Header theming

Headers can be provided with individual theme overrides which themes both the header and its column cells.\`}
            </Marked>
            <Highlight>
                {\`
const columns: GridColumn[] = [
    { title: "Name", id="name", width: 250, icon: GridColumnIcon.HeaderString },
    { title: "Age", id="age", width: 100, icon: GridColumnIcon.HeaderNumber, themeOverride: {
        bgIconHeader: "#00967d",
        textDark: "#00c5a4",
        textHeader: "#00c5a4",
    } },
    { title: "Avatar", id="avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={basicGetCellContent} columns={[{
        title: "Name",
        width: 250,
        icon: GridColumnIcon.HeaderString
      }, {
        title: "Age",
        width: 100,
        icon: GridColumnIcon.HeaderNumber,
        themeOverride: {
          bgIconHeader: "#00967d",
          textDark: "#00c5a4",
          textHeader: "#00c5a4"
        }
      }, {
        title: "Avatar",
        width: 80,
        icon: GridColumnIcon.HeaderImage
      }]} rows={50} />
            </Wrapper>
        </DocWrapper>;
}`,...f.parameters?.docs?.source}}};var p=[`GridColumns`];export{f as GridColumns,p as __namedExportsOrder,d as default};