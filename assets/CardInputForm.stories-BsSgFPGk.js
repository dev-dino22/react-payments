import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-D4lIrffr.js";import{C as s}from"./CardInputForm-C2X9WCYf.js";import{M as h}from"./chunk-BAXFHI7N-BNahuOWr.js";import"./CardCVCInput-BsLueeX3.js";import"./Input-BGG7s-C9.js";import"./InputField-C5JBxBqF.js";import"./CardInfo-DLEEYlcE.js";import"./validateCardInput-BmKetzJG.js";import"./validationUtils-DEWeuqgS.js";import"./CardExpirationDateInput-Cif6iYOt.js";import"./CardNumberInput-MWDNDI6_.js";import"./CardBrandSelect-w_fQe6sl.js";import"./DisplayData-CjAmB5s_.js";const y={title:"Components/CardInputForm",component:s,decorators:[e=>o.jsx(h,{initialEntries:["/"],children:o.jsx(e,{})})],parameters:{layout:"centered"}},a={render:()=>{const[e,t]=C.useState({cardNumbers:["","","",""],expirationDate:["",""],brandName:""});function p(n){t(r=>({...r,cardNumbers:n}))}function c(n){t(r=>({...r,expirationDate:n}))}function u(n){t(r=>({...r,brandName:n}))}return o.jsx(s,{cardInfo:e,handleCardNumbersChange:p,handleExpirationDateChange:c,handleBrandNameChange:u})}};var d,m,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [cardInfo, setCardInfo] = useState<CardInfo>({
      cardNumbers: ["", "", "", ""],
      expirationDate: ["", ""],
      brandName: ""
    });
    function handleCardNumbersChange(cardNumbers: string[]) {
      setCardInfo(prev => ({
        ...prev,
        cardNumbers
      }));
    }
    function handleExpirationDateChange(expirationDate: string[]) {
      setCardInfo(prev => ({
        ...prev,
        expirationDate
      }));
    }
    function handleBrandNameChange(brandName: CardInfo["brandName"]) {
      setCardInfo(prev => ({
        ...prev,
        brandName
      }));
    }
    return <CardInputForm cardInfo={cardInfo} handleCardNumbersChange={handleCardNumbersChange} handleExpirationDateChange={handleExpirationDateChange} handleBrandNameChange={handleBrandNameChange} />;
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,y as default};
