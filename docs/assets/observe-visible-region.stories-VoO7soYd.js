import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{n}from"./story-utils-cF-66lM2.js";import{t as r}from"./data-editor-all-C3Wov0HC.js";import{a as i,d as a,i as o,l as s,n as c,o as l,s as u}from"./utils-CIrhwOhG.js";var d=e(t(),1),f={title:`Glide-Data-Grid/DataEditor Demos`,decorators:[e=>d.createElement(n,null,d.createElement(e,null))]},p=()=>{let{cols:e,getCellContent:t}=a(100),[n,f]=d.useState({x:0,y:0,width:0,height:0});return d.createElement(c,{title:`Observe Visible Region`,description:d.createElement(d.Fragment,null,d.createElement(o,null,`The visible region can be observed using `,d.createElement(u,null,`onVisibleRegionChanged`)),d.createElement(l,null,`Then current visible region is x:`,d.createElement(i,null,n.x),` y:`,d.createElement(i,null,n.y),` width:`,d.createElement(i,null,n.width),` height:`,d.createElement(i,null,n.height)))},d.createElement(r,{...s,getCellContent:t,columns:e,rows:1e3,onVisibleRegionChanged:f}))};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const [visibleRegion, setVisibleRegion] = React.useState<Rectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  return <BeautifulWrapper title="Observe Visible Region" description={<>
                    <Description>
                        The visible region can be observed using <PropName>onVisibleRegionChanged</PropName>
                    </Description>
                    <MoreInfo>
                        Then current visible region is x:<KeyName>{visibleRegion.x}</KeyName> y:
                        <KeyName>{visibleRegion.y}</KeyName> width:
                        <KeyName>{visibleRegion.width}</KeyName> height:<KeyName>{visibleRegion.height}</KeyName>
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} onVisibleRegionChanged={setVisibleRegion} />
        </BeautifulWrapper>;
}`,...p.parameters?.docs?.source}}};var m=[`ObserveVisibleRegion`];export{p as ObserveVisibleRegion,m as __namedExportsOrder,f as default};