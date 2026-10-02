import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{a as i,d as a,i as o,l as s,n as c,o as l,s as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(e,null))]},p=()=>{let{cols:e,getCellContent:t}=a(6),n=d.createElement(r,{...s,rowMarkers:`checkbox-visible`,getCellContent:t,columns:e,rows:1e3});return d.createElement(c,{title:`Automatic Row Markers`,description:d.createElement(d.Fragment,null,d.createElement(o,null,`You can enable row markers with rich selection behavior using the`,` `,d.createElement(u,null,`rowMarkers`),` prop.`),d.createElement(l,null,`Use `,d.createElement(i,null,`⇧`),` + click to make range selections, and `,d.createElement(i,null,`Ctrl`),` (`,d.createElement(i,null,`⌘`),` on Mac) + click to add/remove individual rows.`))},n)};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const dataEditor = <DataEditor {...defaultProps} rowMarkers={"checkbox-visible"} getCellContent={getCellContent} columns={cols} rows={1000} />;
  return <BeautifulWrapper title="Automatic Row Markers" description={<>
                    <Description>
                        You can enable row markers with rich selection behavior using the{" "}
                        <PropName>rowMarkers</PropName> prop.
                    </Description>
                    <MoreInfo>
                        Use <KeyName>⇧</KeyName> + click to make range selections, and <KeyName>Ctrl</KeyName> (
                        <KeyName>⌘</KeyName> on Mac) + click to add/remove individual rows.
                    </MoreInfo>
                </>}>
            {dataEditor}
        </BeautifulWrapper>;
}`,...p.parameters?.docs?.source}}};var m=[`AutomaticRowMarkers`];export{p as AutomaticRowMarkers,m as __namedExportsOrder,f as default};