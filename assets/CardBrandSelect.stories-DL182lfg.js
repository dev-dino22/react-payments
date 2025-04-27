import{C as m}from"./CardBrandSelect-w_fQe6sl.js";import{w as g,u as c,e as S}from"./index-1KxDNpb5.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";const v={title:"Components/CardBrandSelect",component:m,tags:["autodocs"]},a={args:{handleBrandNameChange:t=>{},onSuccessValidate:t=>{},onSuccessNextInput:()=>{}}},n={args:{handleBrandNameChange:t=>{},onSuccessValidate:t=>{},onSuccessNextInput:()=>{}},play:async({canvasElement:t})=>{const e=g(t),s=await e.getByRole("button");await c.click(s);const o=await e.getAllByRole("listitem")[0];await c.click(o),await S(s).toHaveTextContent(o.textContent??"")}};var r,i,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    handleBrandNameChange: brand => {},
    onSuccessValidate: isValid => {},
    onSuccessNextInput: () => {}
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,u,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    handleBrandNameChange: brand => {},
    onSuccessValidate: isValid => {},
    onSuccessNextInput: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    await userEvent.click(button);
    const firstOption = await canvas.getAllByRole("listitem")[0];
    await userEvent.click(firstOption);
    await expect(button).toHaveTextContent(firstOption.textContent ?? "");
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const b=["Default","SelectBrand"];export{a as Default,n as SelectBrand,b as __namedExportsOrder,v as default};
