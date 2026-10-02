import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{I as r}from"./image-window-loader-DFAb4QQA.js";import{n as i,t as a}from"./data-editor-all-C3Wov0HC.js";import{d as o,i as s,l as c,n as l,s as u}from"./utils-CIrhwOhG.js";import{t as d}from"./lodash-DvAq8kyA.js";var f=e(t(),1);d();var p={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>f.createElement(n,null,f.createElement(l,{title:`Row Grouping`,description:f.createElement(s,null,`The `,f.createElement(u,null,`rowGrouping`),` prop can be used to group and even fold rows.`)},f.createElement(e,null)))]},m=e=>{let{cols:t,getCellContent:n}=o(100),s=1e5,[l,u]=f.useState(()=>({groups:[{headerIndex:10,isCollapsed:!0,subGroups:[{headerIndex:15,isCollapsed:!1},{headerIndex:20,isCollapsed:!1}]},{headerIndex:30,isCollapsed:!1},...Array.from({length:100},(e,t)=>({headerIndex:s/100*t,isCollapsed:!1}))],height:55,navigationBehavior:`block`,selectionBehavior:`block-spanning`,themeOverride:{bgCell:`rgba(0, 100, 255, 0.1)`}})),{mapper:d,getRowGroupingForPath:p,updateRowGroupingByPath:m}=i(l,s),h=f.useCallback(e=>{let{path:t,isGroupHeader:n}=d(e);if(n&&e[0]===0){let e=p(l.groups,t);u(n=>({...n,groups:m(n.groups,t,{isCollapsed:!e.isCollapsed})}))}},[p,d,l.groups,m]),g=f.useCallback(e=>{let{path:t,isGroupHeader:i,originalIndex:a}=d(e);return e[0]===0?{kind:r.Text,data:`Row ${JSON.stringify(t)}`,displayData:`Row ${JSON.stringify(t)}`,allowOverlay:!1}:i?{kind:r.Loading,allowOverlay:!1}:n(a)},[n,d]);return f.createElement(a,{...c,rowGrouping:l,height:`100%`,rowMarkers:`both`,freezeColumns:e.freezeColumns,getRowThemeOverride:(e,t,n)=>{if(t%2==0)return{bgCell:`rgba(0, 0, 0, 0.1)`}},onCellClicked:h,getCellContent:g,columns:t,rows:s})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 100_000;
  const [rowGrouping, setRowGrouping] = React.useState<RowGroupingOptions>(() => ({
    groups: [{
      headerIndex: 10,
      isCollapsed: true,
      subGroups: [{
        headerIndex: 15,
        isCollapsed: false
      }, {
        headerIndex: 20,
        isCollapsed: false
      }]
    }, {
      headerIndex: 30,
      isCollapsed: false
    }, ...Array.from({
      length: 100
    }, (_value, i): RowGroupingOptions["groups"][number] => {
      return {
        headerIndex: rows / 100 * i,
        isCollapsed: false
      };
    })],
    height: 55,
    navigationBehavior: "block",
    selectionBehavior: "block-spanning",
    themeOverride: {
      bgCell: "rgba(0, 100, 255, 0.1)"
    }
  }));
  const {
    mapper,
    getRowGroupingForPath,
    updateRowGroupingByPath
  } = useRowGrouping(rowGrouping, rows);
  const onCellClicked = React.useCallback((item: Item) => {
    const {
      path,
      isGroupHeader
    } = mapper(item);
    if (isGroupHeader && item[0] === 0) {
      const group = getRowGroupingForPath(rowGrouping.groups, path);
      setRowGrouping(prev => {
        const result: RowGroupingOptions = {
          ...prev,
          groups: updateRowGroupingByPath(prev.groups, path, {
            isCollapsed: !group.isCollapsed
          })
        };
        return result;
      });
    }
  }, [getRowGroupingForPath, mapper, rowGrouping.groups, updateRowGroupingByPath]);
  const getCellContentMangled = React.useCallback<DataEditorAllProps["getCellContent"]>(item => {
    const {
      path,
      isGroupHeader,
      originalIndex
    } = mapper(item);
    if (item[0] === 0) {
      return {
        kind: GridCellKind.Text,
        data: \`Row \${JSON.stringify(path)}\`,
        displayData: \`Row \${JSON.stringify(path)}\`,
        allowOverlay: false
      };
    } else if (isGroupHeader) {
      return {
        kind: GridCellKind.Loading,
        allowOverlay: false
        // span: [1, cols.length - 1],
      };
    }
    return getCellContent(originalIndex);
  }, [getCellContent, mapper]);
  return <DataEditor {...defaultProps} rowGrouping={rowGrouping} height="100%" rowMarkers="both" freezeColumns={p.freezeColumns} getRowThemeOverride={(_row, groupRow, _contentRow) => {
    if (groupRow % 2 === 0) {
      return {
        bgCell: "rgba(0, 0, 0, 0.1)"
      };
    }
    return undefined;
  }} onCellClicked={onCellClicked} getCellContent={getCellContentMangled} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...m.parameters?.docs?.source}}};var h=[`RowGrouping`];export{m as RowGrouping,h as __namedExportsOrder,p as default};