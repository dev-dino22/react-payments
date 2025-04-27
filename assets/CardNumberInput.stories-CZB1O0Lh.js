import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-D4lIrffr.js";import{C as p}from"./CardNumberInput-MWDNDI6_.js";import{w as C,u as g,e as o}from"./index-1KxDNpb5.js";import{s as y}from"./Input-BGG7s-C9.js";import"./InputField-C5JBxBqF.js";import"./CardInfo-DLEEYlcE.js";import"./validateCardInput-BmKetzJG.js";import"./validationUtils-DEWeuqgS.js";const j={title:"Components/CardNumberInput",component:p,parameters:{layout:"centered"}},e={render:()=>{const[r,t]=x.useState(["","","",""]);function n(a){t(a)}function N(a){console.log("Valid:",a)}function b(){console.log("Next input activated")}return f.jsx(p,{handleCardNumbersChange:n,onSuccessValidate:N,onSuccessNextInput:b})}},s={render:e.render,play:async({canvasElement:r})=>{const t=C(r),n=t.getAllByPlaceholderText("1234")[0];await g.type(n,"abcd"),o(n.className).toContain(y.isNotValid),o(t.getByText("숫자만 입력 가능합니다.")).toBeVisible()}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
    function handleCardNumbersChange(newNumbers: string[]) {
      setCardNumbers(newNumbers);
    }
    function onSuccessValidate(isValid: boolean) {
      console.log("Valid:", isValid);
    }
    function onSuccessNextInput() {
      console.log("Next input activated");
    }
    return <CardNumberInput handleCardNumbersChange={handleCardNumbersChange} onSuccessValidate={onSuccessValidate} onSuccessNextInput={onSuccessNextInput} />;
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByPlaceholderText("1234")[0];
    await userEvent.type(firstInput, "abcd");
    expect(firstInput.className).toContain(styles.isNotValid);
    expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeVisible();
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Default","Error"];export{e as Default,s as Error,D as __namedExportsOrder,j as default};
