"use client"
import { LayeredDark } from "survey-core/themes";
import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import { surveyJson } from "./data";
import "survey-core/defaultV2.min.css";

import { themeJson } from "./theme";
import "./KanbanModel"; // Ensure the model is imported and registered
import "./KanbanSurveyComponent"; // Ensure the component is imported and registered



export default function Form() {
    const survey = new Model(surveyJson);
    survey.applyTheme(themeJson);

    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return <Survey model={survey} />;
  }