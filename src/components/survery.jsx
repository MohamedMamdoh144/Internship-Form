"use client"
import { LayeredDark } from "survey-core/themes";
import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import { surveyJson } from "./data";
import "survey-core/defaultV2.min.css";

import { themeJson } from "./theme";
import "./KanbanModel"; // Ensure the model is imported and registered
import "./KanbanSurveyComponent"; // Ensure the component is imported and registered
import { registerKanban } from "./KanbanModel";

registerKanban();

export default function Form() {
    const survey = new Model(surveyJson);
    survey.applyTheme(themeJson);
    survey.onValueChanged.add((sender, options) => {
        console.log("Survey value changed:", options.name, options.value);
      });
    survey.onValidateQuestion.add((survey, options) => {
        if (options.name === "kanbanBoard") {
          if (options.value.kanbanDataFirst.length!=6 &&
             options.value.kanbanDataSecond.length!=6 &&
             options.value.kanbanDataThird.length!=6
            ) {
            options.error = 'Each Plan Should Have 6 Rounds'
          }
        }
      });
    survey.onComplete.add((sender, options) => {
        console.log(sender);
    });
    return <Survey model={survey} />;
  }