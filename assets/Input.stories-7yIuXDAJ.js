import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-D4lIrffr.js";import{I as o,s as i}from"./Input-BGG7s-C9.js";import{v as V}from"./validationUtils-DEWeuqgS.js";import{w as v,u as r,e as l,a as w}from"./index-1KxDNpb5.js";function g(t,a){const e=t.target.value;if(!V.isNumber(e)){a(!1);return}a(!0)}const S={title:"Components/Input",component:o,parameters:{layout:"centered"}},n={render:()=>{const[t,a]=y.useState(!0);return h.jsx(o,{type:"text",placeholder:"숫자를 입력하세요",maxLength:3,onChange:e=>g(e,a),isValid:t})}},s={render:()=>{const[t,a]=y.useState(!0);return h.jsx(o,{type:"text",placeholder:"숫자를 입력하세요",maxLength:3,onChange:e=>g(e,a),isValid:t})},play:async({canvasElement:t})=>{const e=v(t).getByPlaceholderText("숫자를 입력하세요");await r.type(e,"abc"),l(e.className).toContain(i.isNotValid),await r.clear(e),await r.type(e,"123"),await w(()=>{l(e.className).not.toContain(i.isNotValid)})}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [isValid, setIsValid] = useState(true);
    return <Input type="text" placeholder="숫자를 입력하세요" maxLength={3} onChange={e => onChangeHandler(e, setIsValid)} isValid={isValid} />;
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,x;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [isValid, setIsValid] = useState(true);
    return <Input type="text" placeholder="숫자를 입력하세요" maxLength={3} onChange={e => onChangeHandler(e, setIsValid)} isValid={isValid} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("숫자를 입력하세요");
    await userEvent.type(input, "abc");
    expect(input.className).toContain(styles.isNotValid);
    await userEvent.clear(input);
    await userEvent.type(input, "123");
    await waitFor(() => {
      expect(input.className).not.toContain(styles.isNotValid);
    });
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const b=["Default","ErrorInput"];export{n as Default,s as ErrorInput,b as __namedExportsOrder,S as default};
