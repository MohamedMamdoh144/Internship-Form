const rounds={
    icu:{
      name:"icu",
      title:"Anesthesia",
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
    "title": "السنة الثانية امتياز (نظام 5+2)",
    "description": "تعليمات\r\nلا ينتقل الطالب من السنة الأولى الى السنة الثانية في برنامح تدريب الأطباء الامتياز الا بعد استكمال الدورات التدريبية والمحاضرات المنصوص عليها باللائحة",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "name",
            "title": "الاسم رباعي بالعربية\r\n",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "email",
            "title": "Email",
            "isRequired": true,
            "inputType": "email"
          },
          {
            "type": "text",
            "name": "NID",
            "title": "الرقم القومي او رقم الباسبور",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "FID",
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
            type: "kanban", 
            name: "kanbanBoard", 
            "title": "Pick three unique plans"
          }
        ]
      },
      {
        "name": "page3",
        "title": "اختيار تخصصات الباطنة والجراحة",
        "description": "⦿ ستقوم باختيار الأقسام التخصصية التي ترغب بالحضور بها\r\n⦿ في كل راوند سيتم الحضور في قسمين من اقسام الجراحة المتخصصة وقسمين من اقسام الباطنة المتخصصة حيث تكون مدة الحضور شهر لكل تخصص",
        "elements": [
          {
            "type": "radiogroup",
            "name": "sur1",
            "title": "التخصص الجراحي الشهر الأول",
            "choices": [
              {
                "value": "neurosurgery",
                "text": "مخ وأعصاب"
              },
              {
                "value": "cardiothoracic",
                "text": "قلب وصدر"
              },
              {
                "value": "plastic",
                "text": "تجميل"
              },
              {
                "value": "ent",
                "text": "أنف وأذن"
              },
              {
                "value": "opth",
                "text": "رمد"
              },
              {
                "value": "uro",
                "text": "مسالك"
              },
              {
                "value": "ortho",
                "text": "عظام"
              }
            ],
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "sur2",
            "title": "التخصص الجراحي الشهر الثاني",
            "choices": [
              {
                "value": "neurosurgery",
                "text": "مخ وأعصاب"
              },
              {
                "value": "cardiothoracic",
                "text": "قلب وصدر"
              },
              {
                "value": "plastic",
                "text": "تجميل"
              },
              {
                "value": "ent",
                "text": "أنف وأذن"
              },
              {
                "value": "opth",
                "text": "رمد"
              },
              {
                "value": "uro",
                "text": "مسالك"
              },
              {
                "value": "ortho",
                "text": "عظام"
              }
            ],
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "im1",
            "title": "تخصص الباطنة الشهر الأول",
            "choices": [
              {
                "value": "derma",
                "text": "جلدية"
              },
              {
                "value": "bank",
                "text": "بنك دم"
              },
              {
                "value": "lab",
                "text": "معمل"
              },
              {
                "value": "onco",
                "text": "أورام"
              },
              {
                "value": "tropical",
                "text": "متوطنة"
              },
              {
                "value": "cardio",
                "text": "قلب"
              },
              {
                "value": "chest",
                "text": "صدرية"
              },
              {
                "value": "rheumato",
                "text": "روماتيزم"
              },
              {
                "value": "neuro",
                "text": "عصبية"
              },
              {
                "value": "icu",
                "text": "عناية مركزة"
              }
            ],
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "im2",
            "title": "تخصص الباطنة الشهر الثاني",
            "choices": [
              {
                "value": "derma",
                "text": "جلدية"
              },
              {
                "value": "bank",
                "text": "بنك دم"
              },
              {
                "value": "lab",
                "text": "معمل"
              },
              {
                "value": "onco",
                "text": "أورام"
              },
              {
                "value": "tropical",
                "text": "متوطنة"
              },
              {
                "value": "cardio",
                "text": "قلب"
              },
              {
                "value": "chest",
                "text": "صدرية"
              },
              {
                "value": "rheumato",
                "text": "روماتيزم"
              },
              {
                "value": "neuro",
                "text": "عصبية"
              },
              {
                "value": "icu",
                "text": "عناية مركزة"
              }
            ],
            "isRequired": true
          }
        ]
      },
      {
        "name": "page4",
        "title": "راوند طب الأسرة ",
        "description": "⦿ في هذه الفترة سيكون الحضور في الوحدات الصحية المختلفة\r\n⦿ تأكد من اختيار اقرب مركز الي محل السكن حيث سيتم توزيعك للحضور في الوحدات الصحية القريبة",
        "elements": [
          {
            "type": "radiogroup",
            "name": "city",
            "title": "اقرب مركز الي محل اقامتك",
            "choices": [
              {
                "value": "benisuef",
                "text": "بني سويف"
              },
              {
                "value": "wasta",
                "text": "الواسطي"
              },
              {
                "value": "ihnasia",
                "text": "اهناسيا"
              },
              {
                "value": "beba",
                "text": "ببا"
              },
              {
                "value": "somosta",
                "text": "سمسطا"
              },
              {
                "value": "fashn",
                "text": "الفشن"
              },
              {
                "value": "naser",
                "text": "ناصر"
              }
            ],
            "isRequired": true
          }
        ]
      },
      {
        "name": "page5",
        "title": "راوند الطب النفسي",
        "description": "يمضي طبيب الامتياز راوند الطب النفسي ما بين الحضور في القسم بالمستشفي الجامعي و مستشفي الصحة النفسية بالمحافظة"
      }
    
    ]
  }