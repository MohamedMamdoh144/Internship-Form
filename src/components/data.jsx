const rounds={
    icu:{
      name:"icu",
      title:"ICU",
      positions:[],
      details: "2 Months",
      color:"#C6878F"
    },
    psy:{
      name:"psy",
      title:"Psychiatry",
      positions:[],
      details: "2 Months",
      color:"#B79D94"
    },
    fm:{
      name:"fm",
      title:"Family Medicine",
      positions:[],
      details: "2 Months",
      color:"#969696"
    },
    em:{
      name:"em",
      title:"Emergency Medicine",
      positions:[],
      details: "2 Months",
      color:"#67697C"
    },
    im:{
      name:"im",
      title:"IM Specialties",
      positions:[],
      details: "2 Months; Has Two 1-month rounds",
      color:"#00A6ED"
    },
    sur:{
      name:"sur",
      title:"Surgery Speciatlies",
      positions:[],
      details: "2 Months; Has Two 1-month rounds",
      color:"#B9FAF8"
    }
  };

  export default rounds;
  
  export const surveyJson = {
    "title": "السنة الثانية امتيازنظام 5+2",
    "description": "تعليمات\r\nلا ينتقل الطالب من السنة الأولى الى السنة الثانية في برنامح تدريب الأطباء الامتياز الا بعد استكمال الدورات التدريبية والمحاضرات المنصوص عليها باللائحة",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question3",
            "title": "الاسم رباعي بالعربية\r\n",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question1",
            "title": "Email",
            "isRequired": true,
            "inputType": "email"
          },
          {
            "type": "text",
            "name": "question4",
            "title": "الرقم القومي او رقم الباسبور",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "question5",
            "title": "رقم الجلوس",
            "isRequired": true,
            "inputType": "number"
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "kanban",
            "name": "question2",
            "title": "To be filled"
          }
        ]
      }
    ]
  }