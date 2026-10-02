import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{r as t}from"./iframe-IUyyCR7M.js";import{i as n,n as r}from"./doc-wrapper-DBLJ8pRn.js";import{n as i}from"./story-utils-cF-66lM2.js";var a=e(t(),1),o={title:`Glide-Data-Grid/Docs`,decorators:[e=>a.createElement(i,null,a.createElement(e,null))]},s=()=>a.createElement(r,null,a.createElement(n,null,`
# FAQ

### Nothing shows up? It crashes when I edit a cell?

Please read the [Prerequisites section in the docs](https://github.com/glideapps/glide-data-grid/blob/main/packages/core/API.md).

### Does it work with screen readers and other a11y tools?

Yes. Unfortunately none of the primary developers are accessibility users so there are likely flaws in the implementation we are not aware of. Bug reports welcome!

### Does it support my data source?

Yes.

Data Grid is agnostic about the way you load/store/generate/mutate your data. What it requires is that you tell it which columns you have, how many rows, and to give it a function it can call to get the data for a cell in a specific row and column.

### Does it do sorting?

Yes through the [glide-data-grid-source](https://www.npmjs.com/package/@Terralayr/glide-data-grid-source) package.

### Does it do search?

Yes, built in! There are examples in the storybook.

### Can it filter?

Nothing built in yet. It is planned for the \`glide-data-grid-source\`.

### Can it do frozen columns?

Yes

### Can I render my own cells?

Yes

`));s.storyName=`00. FAQ`,s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <DocWrapper>
            <Marked>
                {\`
# FAQ

### Nothing shows up? It crashes when I edit a cell?

Please read the [Prerequisites section in the docs](https://github.com/glideapps/glide-data-grid/blob/main/packages/core/API.md).

### Does it work with screen readers and other a11y tools?

Yes. Unfortunately none of the primary developers are accessibility users so there are likely flaws in the implementation we are not aware of. Bug reports welcome!

### Does it support my data source?

Yes.

Data Grid is agnostic about the way you load/store/generate/mutate your data. What it requires is that you tell it which columns you have, how many rows, and to give it a function it can call to get the data for a cell in a specific row and column.

### Does it do sorting?

Yes through the [glide-data-grid-source](https://www.npmjs.com/package/@Terralayr/glide-data-grid-source) package.

### Does it do search?

Yes, built in! There are examples in the storybook.

### Can it filter?

Nothing built in yet. It is planned for the \\\`glide-data-grid-source\\\`.

### Can it do frozen columns?

Yes

### Can I render my own cells?

Yes

\`}
            </Marked>
        </DocWrapper>;
}`,...s.parameters?.docs?.source}}};var c=[`FAQ`];export{s as FAQ,c as __namedExportsOrder,o as default};