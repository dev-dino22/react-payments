import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{I as u}from"./InputField-C5JBxBqF.js";import{I as i}from"./Input-BGG7s-C9.js";import{w as d,e as I}from"./index-1KxDNpb5.js";const y={title:"Components/InputField",component:u,tags:["autodocs"]},e={args:{title:"InputForm",label:"InputForm 테스트",description:"InputForm 테스트 입니다.",children:c.jsx(i,{type:"text",placeholder:"입력하세요",maxLength:10,onChange:()=>{},isValid:!0})}},t={args:{title:"InputForm",label:"InputForm 테스트",description:"InputForm 테스트 입니다.",feedbackMessage:"InputForm 입력값이 잘못 되었습니다.",children:c.jsx(i,{type:"text",placeholder:"입력하세요",maxLength:10,onChange:()=>{},isValid:!1})},play:async({canvasElement:m})=>{const l=d(m).getByText("InputForm 입력값이 잘못 되었습니다.");await I(l).toBeVisible()}};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: "InputForm",
    label: "InputForm 테스트",
    description: "InputForm 테스트 입니다.",
    children: <Input type="text" placeholder="입력하세요" maxLength={10} onChange={() => {}} isValid={true} />
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,o,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "InputForm",
    label: "InputForm 테스트",
    description: "InputForm 테스트 입니다.",
    feedbackMessage: "InputForm 입력값이 잘못 되었습니다.",
    children: <Input type="text" placeholder="입력하세요" maxLength={10} onChange={() => {}} isValid={false} />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText("InputForm 입력값이 잘못 되었습니다.");
    await expect(message).toBeVisible();
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const b=["Default","Error"];export{e as Default,t as Error,b as __namedExportsOrder,y as default};
