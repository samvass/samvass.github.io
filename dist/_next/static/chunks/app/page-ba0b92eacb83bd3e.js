(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5092:function(e,t,n){Promise.resolve().then(n.bind(n,4787))},4787:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var a,i,r=n(7437),s=n(2265),l=n(4216),o=n(8646),c=n(4839),d=n(6164);function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,d.m6)((0,c.W)(t))}var g=n(5282),m=n(4924);function p(){let e=(0,o._)(["\n            radial-gradient(\n              200px circle at ","px ","px,\n              black 0%,\n              transparent 100%\n            )\n          "]);return p=function(){return e},e}function h(){let e=(0,o._)(["\n            radial-gradient(\n              200px circle at ","px ","px,\n              black 0%,\n              transparent 100%\n            )\n          "]);return h=function(){return e},e}let x=e=>{let{children:t,className:n,containerClassName:a}=e,i=(0,g.c)(0),s=(0,g.c)(0);return(0,r.jsxs)("div",{className:u("relative h-[30rem] flex items-center bg-black justify-center w-full group mb-20",a),onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:a}=e;if(!t)return;let{left:r,top:l}=t.getBoundingClientRect();i.set(n-r),s.set(a-l)},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none"}),(0,r.jsx)(l.E.div,{className:"pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:(0,m.Y)(p(),i,s),maskImage:(0,m.Y)(h(),i,s)}}),(0,r.jsx)("div",{className:u("relative z-20",n),children:t})]})},f=e=>{let{children:t,className:n}=e;return(0,r.jsx)(l.E.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:u("relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500",n),children:t})};var b=n(6648);function j(){return(0,r.jsx)(x,{children:(0,r.jsx)(l.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:[20,-5,0]},transition:{duration:.5,ease:[.4,0,.2,1]},className:"text-1xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl",children:[(0,r.jsxs)("div",{className:"text-center md:text-left",children:[(0,r.jsx)("div",{className:"text-1xl px-4 md:text-4xl lg:text-5xl font-bold text-white leading-relaxed lg:leading-snug",children:(0,r.jsx)(f,{className:"text-white text-2xl px-4 md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-snug whitespace-nowrap",children:"Hi, my name is Sam Vasserman!"})}),(0,r.jsx)("div",{className:"md:text-lg lg:text-2xl text-white leading-relaxed lg:leading-snug mt-2 md:mt-4 ml-4",children:"A Software Engineer from Montreal \uD83C\uDDE8\uD83C\uDDE6"})]}),(0,r.jsx)("div",{className:"flex-shrink-0 mt-4 md:mt-0 md:ml-8",children:(0,r.jsx)(b.default,{height:1e3,width:1e3,src:"/headshot.jpg",alt:"headshot",className:"object-cover !m-0 !p-0 object-top rounded-full h-64 w-64 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"})})]})})})}var v=n(5127);let y=e=>{let{items:t,className:n,handleCardClick:a}=e,[i,o]=(0,s.useState)(null);return(0,r.jsx)("div",{className:u("flex flex-direction-horizontal py-10",n),children:t.map((e,t)=>(0,r.jsxs)("div",{className:"relative group  block p-2 h-full w-full",onMouseEnter:()=>o(t),onMouseLeave:()=>o(null),children:[(0,r.jsx)(v.M,{children:i===t&&(0,r.jsx)(l.E.span,{className:"absolute inset-0 h-full w-full bg-indigo-500/[0.8] block rounded-3xl",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,r.jsxs)(w,{onClick:()=>a(e),children:[(0,r.jsx)(b.default,{height:100,width:100,src:e.imgSrc,alt:"logo",className:"object-cover object-top rounded-full h-20 w-20 mb-10"}),(0,r.jsx)(k,{children:e.title}),(0,r.jsx)(S,{children:e.subtitle})]})]},t))})},w=e=>{let{className:t,children:n,onClick:a}=e;return(0,r.jsx)("div",{className:u("rounded-2xl p-4 overflow-hidden bg-neutral-950 border-4 border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20 cursor-pointer",t),style:{width:"200px",height:"300px"},onClick:a,children:(0,r.jsx)("div",{className:"relative z-50",children:(0,r.jsx)("div",{className:"p-4",children:n})})})},k=e=>{let{className:t,children:n}=e;return(0,r.jsx)("h4",{className:u("text-zinc-100 font-bold tracking-wide mt-4",t),children:n})},S=e=>{let{className:t,children:n}=e;return(0,r.jsx)("p",{className:u("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",t),children:n})};var N=e=>{let{isOpen:t,onClose:n,children:a}=e;return(0,r.jsx)("div",{className:"fixed bottom-0 left-0 w-full h-full transition-opacity bg-black bg-opacity-90 flex justify-center items-center z-50 ".concat(t?"opacity-100":"opacity-0 pointer-events-none"),onClick:n,children:(0,r.jsx)("div",{className:"bg-black border-4 rounded-lg shadow-lg p-4 w-1/2 h-auto overflow-y-auto ".concat(t?"transition-transform duration-500 transform translate-y-0":"transition-transform duration-500 transform translate-y-full"),children:a})})},C=e=>{let{title:t,subtitle:n,date:a,image:i,description:s,tags:l}=e;return(0,r.jsxs)("div",{className:"flex flex-col justify-start p-4 rounded-lg",children:[(0,r.jsx)("div",{className:"text-4xl font-bold",children:t}),(0,r.jsx)("p",{className:"text-lg text-gray-400",children:n}),(0,r.jsx)("p",{className:"text-m text-gray-600",children:a}),(0,r.jsx)("div",{className:"flex",children:l.map((e,t)=>(0,r.jsx)("span",{className:"text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300 mr-2 my-2",children:e},t))}),(0,r.jsx)("div",{children:s.map((e,t)=>(0,r.jsx)("div",{className:"my-8 flex items-center",children:(0,r.jsx)("p",{className:"text-lg",children:e})},t))}),(0,r.jsx)("div",{className:"w-4/6 h-4/6 flex mx-auto mb-4",children:(0,r.jsx)(b.default,{width:500,height:500,src:i,alt:t,className:"object-cover w-full h-full rounded-lg"})})]})};function A(e){let{items:t}=e,[n,a]=(0,s.useState)(!1),[i,l]=(0,s.useState)({title:"",subtitle:"",imgSrc:"",description:[""],date:"",imgSecondarySrc:"",tags:[]});return(0,r.jsxs)("div",{className:"max-w-5xl mx-auto px-8 z-30",children:[(0,r.jsx)(y,{items:t,handleCardClick:e=>{l(e),a(!0)}}),(0,r.jsx)(N,{isOpen:n,onClose:()=>a(!1),children:(0,r.jsx)(C,{title:i.title,subtitle:i.subtitle,date:i.date,image:i.imgSecondarySrc,description:i.description,tags:i.tags})})]})}let E=e=>{let{items:t,className:n}=e,[a,i]=(0,s.useState)(null);return(0,r.jsx)("div",{className:u("flex flex-direction-horizontal py-10",n),children:t.map((e,t)=>(0,r.jsxs)("div",{className:"relative group block p-2 h-full w-full",onMouseEnter:()=>i(t),onMouseLeave:()=>i(null),children:[(0,r.jsx)(v.M,{children:a===t&&(0,r.jsx)(l.E.span,{className:"absolute inset-0 h-full w-full bg-indigo-500/[0.8] block rounded-3xl",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,r.jsxs)(P,{children:[(0,r.jsx)(b.default,{height:100,width:100,src:e.imgSrc,alt:"logo",className:"object-cover object-top rounded-full h-20 w-20 mb-10"}),(0,r.jsx)(z,{children:e.title}),(0,r.jsx)(I,{children:(0,r.jsxs)("div",{children:[e.school,(0,r.jsx)("br",{}),"GPA: ",e.gpa,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),e.date,(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"grid grid-flow-row-dense grid-cols-3 grid-rows-3",children:e.courses.map((e,t)=>(0,r.jsx)("span",{className:"text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300 mr-2 my-2",children:e},t))})]})})]})]},t))})},P=e=>{let{className:t,children:n}=e;return(0,r.jsx)("div",{className:u("rounded-2xl p-4 overflow-hidden bg-neutral-950 border-4 border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20",t),style:{width:"550px",height:"375px"},children:(0,r.jsx)("div",{className:"relative z-50",children:(0,r.jsx)("div",{className:"p-4",children:n})})})},z=e=>{let{className:t,children:n}=e;return(0,r.jsx)("h4",{className:u("text-zinc-100 font-bold tracking-wide mt-4",t),children:n})},I=e=>{let{className:t,children:n}=e;return(0,r.jsx)("p",{className:u("mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm flex flex-direction-vertical",t),children:n})};function M(e){let{items:t}=e;return(0,r.jsx)("div",{className:"max-w-5xl mx-auto px-8 z-30",children:(0,r.jsx)(E,{items:t})})}var D=JSON.parse('{"sx":[{"title":"Morgan Stanley","subtitle":"Technology Analyst Intern","imgSrc":"/morgan.png","description":["Implemented a full stack application for the Securities Reference Data department using Spring Boot, MongoDB and Angular to monitor milliions of financial events and provide business visibility for non-technical users.","Interacted with different stakeholders to ensure security, performance and user experience requirements were being met."],"date":"May 2024 - Aug 2024","imgSecondarySrc":"/morgan-second.png","tags":["Java","Angular","MongoDB"]},{"title":"Dialogue","subtitle":"Software Engineering Intern","imgSrc":"/dialogue.png","description":["Played a crucial role in designing and building a new faxing infrastructure for medical practitioners, utilizing FastAPI for the Python backend, AWS PostgreSQL database and React Typescript for the frontend. This infrastructure allowed the company to pivot away from using a 3rd party service and resulted in 700,000$ in yearly savings.","Contributed to the development of the React Native client-facing application, focusing on building features for the company\'s new wellness program, allowing users to connect wearables to compete in fitness challenges. This effort required collaboration between design, product and data teams in order to deliver a high quality product that engages users and resulted in high customer satisfaction."],"date":"Jan 2024 - Apr 2024","imgSecondarySrc":"/dialogue-second.png","tags":["Typescript","React","Python","FastAPI","SQL"]},{"title":"Novatek","subtitle":"Software Engineering Intern","imgSrc":"/novatek.png","description":["Developed a Python script to automate data migration from legacy software to a web-based version, enabling the team to seamlessly input 20 years worth of client data into the new application. This saved countless hours of manual work and avoided potential errors associated with manually inputting millions of data entries.","Automated the installation of pharmaceutical software, reducing time from 2 hours to 10 minutes, resulting in a 90% decrease in installation time."],"date":"Jul 2023 - Sep 2023","imgSecondarySrc":"/novatek-second.png","tags":["Python","SQL"]},{"title":"Deloitte","subtitle":"Solutions Associate Intern","imgSrc":"/deloitte.png","description":["Collaborated with hiring teams to identify pain points in the hiring process and leveraged Salesforce to design and deploy customized solutions, resulting in a decrease in time-to-hire and improved candidate selection experience.","Contributed to the entire project lifecycle, including requirement gathering, UI design, backend and frontend development, demonstrating strong ownership and project management skills.","Attained the Salesforce Administrator Certification within an accelerated timeframe of just 2 weeks, surpassing the average completion time of 6- 12 weeks, showcasing exceptional dedication and aptitude for learning new technologies."],"date":"May 2022 - Aug 2022","imgSecondarySrc":"/deloitte-second.png","tags":["Salesforce","LWC","Apex","SOQL"]}],"q":[{"title":"Engineering Capstone","subtitle":"LLM Generated Article Detector","imgSrc":"/mcgill.png","description":["Applying a multi-modal machine learning model to accurately detect news articles generated by AI. This technology can help filter through non human article text, images and titles, which can help improve public trust of news sources.","Supervised by Prof. Chengzhi Mao at MILA to conduct research, model training, guidance and publish research findings for machine learning conferences."],"date":"Sep 2023 - Apr 2024","imgSecondarySrc":"/capstone-second.png","tags":["Pytorch","BeautifulSoup","XGBoost"]},{"title":"Health Lens","subtitle":"Dialogue Hackathon Winner","imgSrc":"/healthlens.png","description":["Developped a new full-stack feature for the Dialogue patient app to predict health metrics using smart watch data. The data was processed to generate specific prompts based on an MIT paper and fed to a fine-tuned health LLM to generate predictions on sleep, cardiac health, etc.","paper that inspired the project: https://arxiv.org/html/2401.06866v1"],"date":"Sep 2023 - Apr 2024","imgSecondarySrc":"/healthlens-secondary.png","tags":["Python","FastAPI","Llama","React"]},{"title":"AI Face Roaster","subtitle":"McGill AI Society Hackathon","imgSrc":"/face-roast.png","description":["Created a React app that takes a picture of the user and generates a witty \'roast\' about their face for a 24 hour hackathon","Trained a computer vision model to analyze the users face and output their most prominent facial features","Connected GPT3 API in the backend to take the model\'s predicted features and generate a \'roast\'"],"date":"Sep 2023 - Apr 2024","imgSecondarySrc":"/face-roast-secondary.png","tags":["Python","React","GPT API"]},{"title":"Book Club","subtitle":"Personalized Book Suggestions","imgSrc":"/book-club.jpg","description":["Designed and implemented a dynamic full-stack website that employs personalized algorithms to offer book recommendations, leveraging users\' historical reading patterns and ratings"],"date":"Sep 2023 - Apr 2024","imgSecondarySrc":"/book-club-secondary.png","tags":["Node","React","MongoDB"]}],"f3":[{"school":"McGill University","title":"B.Eng Software Engineering","date":"Sep 2020 - Dec 2024","gpa":"3.96/4.0","imgSrc":"/mcgill.png","courses":["Alogirthm Design","Datastructures","Database Systems","Operating Systems","Design Principles","Model Programming"]}],"eA":["Work Experience","Projects","Education"],"KT":{"github":"https://github.com/samvass","linkedin":"https://www.linkedin.com/in/samuel-ryan-vasserman-279299200/","email":"mailto:samuel-ryan.vasserman@mail.mcgill.ca","CV":"https://drive.google.com/file/d/1B9OhQhTwdIjljRKW3O48W14zq3Gqrekb/view?usp=sharing"}}');(a=i||(i={}))[a.workExperience=0]="workExperience",a[a.projects=1]="projects",a[a.education=2]="education";let R={backgroundImage:"linear-gradient(to right, #667eea, #764ba2)",WebkitBackgroundClip:"text",color:"transparent",backgroundClip:"text"},T=e=>{let{title:t,cardType:n}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"px-4 text-4xl font-bold text-neutral-700 max-w-4xl leading-relaxed leading-snug text-center mx-auto mt-6",children:(0,r.jsx)("span",{style:R,children:t})}),0===n&&(0,r.jsx)(A,{items:D.sx}),1===n&&(0,r.jsx)(A,{items:D.q}),2===n&&(0,r.jsx)(M,{items:D.f3})]})};var B=n(1942),L=n(6356);function W(e){let{workExperienceRef:t,projectsRef:n,educationRef:a}=e,i=e=>{let i=null;switch(e){case"Work Experience":i=t;break;case"Projects":i=n;break;case"Education":i=a}null==i||i.current.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},s=e=>{let t=D.KT[e];window.open(t,"_blank")};return(0,r.jsxs)("div",{className:"rounded-full h-20 w-3/4 bg-black mb-10  max-w-fit  grid grid-flow-row-dense grid-cols-4 z-20",children:[(0,r.jsx)("div",{className:"col-span-3 flex justify-start",children:D.eA.map((e,t)=>(0,r.jsx)(_,{onClick:()=>i(e),gradientEnabled:!0,children:e},t))}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(_,{onClick:()=>s("github"),children:(0,r.jsx)(B.hJX,{})}),(0,r.jsx)(_,{onClick:()=>s("linkedin"),children:(0,r.jsx)(B.ltd,{})}),(0,r.jsx)(_,{onClick:()=>s("email"),children:(0,r.jsx)(L.G7V,{})}),(0,r.jsx)(_,{onClick:()=>s("CV"),children:(0,r.jsx)("span",{className:"text-xl",children:"CV"})})]})]})}let G={backgroundImage:"linear-gradient(to right, #667eea, #764ba2)",WebkitBackgroundClip:"text",color:"transparent",backgroundClip:"text"},_=e=>{let{children:t,onClick:n,gradientEnabled:a}=e;return(0,r.jsx)("button",{style:a?G:void 0,className:"p-2 text-2xl mx-4 bg-transparent font-bold transform  hover:-translate-y-2 transition duration-400",onClick:n,children:t})};var q=n(7323),O=n.n(q);function V(){(0,s.useEffect)(()=>{O().init({duration:1200,offset:50})},[]);let e=(0,s.useRef)(null),t=(0,s.useRef)(null),n=(0,s.useRef)(null);return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-between p-8",children:[(0,r.jsx)(W,{workExperienceRef:e,projectsRef:t,educationRef:n}),(0,r.jsx)(j,{}),(0,r.jsx)("div",{ref:e,"data-aos":"fade-up",children:(0,r.jsx)(T,{title:"Work Experience",cardType:i.workExperience})}),(0,r.jsx)("div",{ref:t,"data-aos":"fade-up",children:(0,r.jsx)(T,{title:"Projects",cardType:i.projects})}),(0,r.jsx)("div",{ref:n,"data-aos":"fade-up",children:(0,r.jsx)(T,{title:"Education",cardType:i.education})}),(0,r.jsx)("br",{})]})}n(3023)}},function(e){e.O(0,[704,51,699,499,971,23,744],function(){return e(e.s=5092)}),_N_E=e.O()}]);