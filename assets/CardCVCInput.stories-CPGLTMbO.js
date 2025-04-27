import{w as u,u as d,e as o}from"./index-1KxDNpb5.js";import{C as y}from"./CardCVCInput-BsLueeX3.js";import{s as C}from"./Input-BGG7s-C9.js";import"./jsx-runtime-D_zvdyIk.js";import"./InputField-C5JBxBqF.js";import"./CardInfo-DLEEYlcE.js";import"./index-D4lIrffr.js";import"./validateCardInput-BmKetzJG.js";import"./validationUtils-DEWeuqgS.js";const h={title:"Components/CardCVCInput",component:y,tags:["autodocs"]},t={args:{}},a={play:async({canvasElement:l})=>{const e=u(l),s=await e.getByPlaceholderText("123");await d.type(s,"abc"),o(s.className).toContain(C.isNotValid),await o(e.getByText("숫자만 입력 가능합니다.")).toBeVisible()}};var r,n,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("123");
    await userEvent.type(input, "abc");
    expect(input.className).toContain(styles.isNotValid);
    await expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeVisible();
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Default","ErrorState"];export{t as Default,a as ErrorState,N as __namedExportsOrder,h as default};
