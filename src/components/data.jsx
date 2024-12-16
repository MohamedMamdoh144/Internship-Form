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
    "title": "السنة الثانية امتياز (نظام 5+2)",
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
            type: "kanban", // Custom type
            name: "kanbanBoard", // Unique name
            "title": "Pick three unique plans"
          }
        ]
      },
      {
        "name": "page3",
        "title": "اختيار تخصصات الباطنة والجراحة",
        "description": "ستقوم باختيار الأقسام التخصصية التي ترغب بالحضور بها \r\nفي كل راوند سيتم الحضور في قسمين من اقسام الجراحة المتخصصة وقسمين من اقسام الباطنة المتخصصة حيث تكون مدة الحضور شهر لكل تخصص\r\nستقوم باختيار 3 تخصصات محتملة ترغب بالحضور بها في كل شهر ",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question6",
            "title": "التخصص الجراحي الشهر الأول",
            "choices": [
              {
                "value": "Item 1",
                "text": "مخ وأعصاب"
              },
              {
                "value": "Item 2",
                "text": "قلب وصدر"
              },
              {
                "value": "Item 3",
                "text": "تجميل"
              },
              {
                "value": "Item 4",
                "text": "أنف وأذن"
              },
              {
                "value": "Item 5",
                "text": "رمد"
              },
              {
                "value": "Item 6",
                "text": "مسالك"
              },
              {
                "value": "Item 7",
                "text": "عظام"
              }
            ],
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "question7",
            "title": "التخصص الجراحي الشهر الثاني",
            "choices": [
              {
                "value": "Item 1",
                "text": "مخ وأعصاب"
              },
              {
                "value": "Item 2",
                "text": "قلب وصدر"
              },
              {
                "value": "Item 3",
                "text": "تجميل"
              },
              {
                "value": "Item 4",
                "text": "أنف وأذن"
              },
              {
                "value": "Item 5",
                "text": "رمد"
              },
              {
                "value": "Item 6",
                "text": "مسالك"
              },
              {
                "value": "Item 7",
                "text": "عظام"
              }
            ],
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "question8",
            "title": "تخصص الباطنة الشهر الأول",
            "choices": [
              {
                "value": "Item 1",
                "text": "جلدية"
              },
              {
                "value": "Item 2",
                "text": "بنك دم"
              },
              {
                "value": "Item 3",
                "text": "معمل"
              },
              {
                "value": "Item 4",
                "text": "أورام"
              },
              {
                "value": "Item 5",
                "text": "متوطنة"
              },
              {
                "value": "Item 6",
                "text": "قلب"
              },
              {
                "value": "Item 7",
                "text": "صدرية"
              },
              {
                "value": "Item 8",
                "text": "روماتيزم"
              },
              {
                "value": "Item 9",
                "text": "عصبية"
              }
            ],
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "question9",
            "title": "تخصص الباطنة الشهر الثاني",
            "choices": [
              {
                "value": "Item 1",
                "text": "جلدية"
              },
              {
                "value": "Item 2",
                "text": "بنك دم"
              },
              {
                "value": "Item 3",
                "text": "معمل"
              },
              {
                "value": "Item 4",
                "text": "أورام"
              },
              {
                "value": "Item 5",
                "text": "متوطنة"
              },
              {
                "value": "Item 6",
                "text": "قلب"
              },
              {
                "value": "Item 7",
                "text": "صدرية"
              },
              {
                "value": "Item 8",
                "text": "روماتيزم"
              },
              {
                "value": "Item 9",
                "text": "عصبية"
              }
            ],
            "isRequired": true
          }
        ]
      },
      {
        "name": "page4",
        "title": "راوند طب الأسرة ",
        "description": "في هذه الفترة سيكون الحضور في الوحدات الصحية المختلفة ⦿\r\nتأكد من اختيار اقرب مركز الي محل السكن حيث سيتم توزيعك للحضور في الوحدات الصحية القريبة ⦿",
        "elements": [
          {
            "type": "radiogroup",
            "name": "question10",
            "title": "اقرب مركز الي محل اقامتك",
            "choices": [
              {
                "value": "Item 1",
                "text": "بني سويف"
              },
              {
                "value": "Item 2",
                "text": "الواسطي"
              },
              {
                "value": "Item 3",
                "text": "اهناسيا"
              },
              {
                "value": "Item 4",
                "text": "ببا"
              },
              {
                "value": "Item 5",
                "text": "سمسطا"
              },
              {
                "value": "Item 6",
                "text": "الفشن"
              },
              {
                "value": "Item 7",
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