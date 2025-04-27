import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as p,b as h,M as g,R as _,a as x}from"./chunk-BAXFHI7N-BNahuOWr.js";import{C as o}from"./DisplayData-CjAmB5s_.js";import"./index-D4lIrffr.js";const j="_container_5hjer_1",C="_content_5hjer_11",f="_iconWrapper_5hjer_19",N="_messageContainer_5hjer_35",R="_message_5hjer_35",b="_confirmButton_5hjer_47",s={container:j,content:C,iconWrapper:f,messageContainer:N,message:R,confirmButton:b};function m({circleColor:r}){return e.jsxs("svg",{width:"76",height:"76",viewBox:"0 0 76 76",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"38",cy:"38",r:"38",fill:r||"var(--light-black)"}),e.jsx("path",{d:"M23 34.0377L35.0471 48L55 28",stroke:"white",strokeWidth:"7.49999",strokeLinecap:"round",strokeLinejoin:"round"})]})}m.__docgenInfo={description:"",methods:[],displayName:"CheckCircleIcon",props:{circleColor:{required:!1,tsType:{name:"string"},description:""}}};function a(){const r=p(),l=h(),{firstCardNumber:u,brandName:t}=l.state||{};return e.jsx("div",{className:s.container,children:e.jsxs("div",{className:s.content,children:[e.jsx("div",{className:s.iconWrapper,children:e.jsx(m,{circleColor:o[t]})}),e.jsx("div",{className:s.messageContainer,children:e.jsxs("p",{className:`${s.message} tx-xl`,children:[u,"로 시작하는",e.jsx("br",{}),t,"가 등록되었어요."]})}),e.jsx("button",{className:`${s.confirmButton} tx-lg`,onClick:()=>r("/add-card"),style:{backgroundColor:o[t]},children:"확인"})]})})}a.__docgenInfo={description:"",methods:[],displayName:"AddCardSuccessPage"};const A={title:"Pages/AddCardSuccessPage",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={render:()=>e.jsx(g,{initialEntries:[{pathname:"/add-card/success",state:{firstCardNumber:"1234",brandName:"국민카드"}}],children:e.jsx(_,{children:e.jsx(x,{path:"/add-card/success",element:e.jsx(a,{})})})})};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <MemoryRouter initialEntries={[{
    pathname: "/add-card/success",
    state: {
      firstCardNumber: "1234",
      brandName: "국민카드"
    }
  }]}>
      <Routes>
        <Route path="/add-card/success" element={<AddCardSuccessPage />} />
      </Routes>
    </MemoryRouter>
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const B=["Default"];export{n as Default,B as __namedExportsOrder,A as default};
