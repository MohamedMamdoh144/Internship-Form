"use client"
import { LayeredDark } from "survey-core/themes";
import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import { surveyJson } from "./data";
import "survey-core/defaultV2.min.css";
import cloneDeep from "lodash/cloneDeep";
import { themeJson } from "./theme";
import "./KanbanModel"; // Ensure the model is imported and registered
import "./KanbanSurveyComponent"; // Ensure the component is imported and registered
import { registerKanban } from "./KanbanModel";
import { useState } from "react";
import { db } from "@/db/db";

registerKanban();
const specs= Array(2);
export default function Form() {
    const survey = new Model(surveyJson);
    survey.applyTheme(themeJson);
    survey.onValueChanged.add((sender, options) => {
      if (options.name == "im1"){ 
        specs[0] = options.value;
      } else if (options.name == "sur1"){
        specs[1] = options.value;
      }
      });
    survey.onValidateQuestion.add((survey, options) => {
        if (options.name === "kanbanBoard") {
          if (!options.value || options.value.kanbanDataFirst.length!=6 &&
             options.value.kanbanDataSecond.length!=6 &&
             options.value.kanbanDataThird.length!=6
            ) {
            options.error = 'Each Plan Should Have 6 Rounds'
          }
        } else if (options.name === "im2") {
          if (options.value == specs[0]) {
           options.error = 'Please choose different rounds for IM'
         }
        }
        else if (options.name === "sur2") {
          if (options.value == specs[1]) {
           options.error = 'Please choose different rounds for surgery'
         }
        }
      });
    survey.onComplete.add((sender, options) => {
        console.log(sender.data);
        const res= sender.data;
        const setNewView = async ()=>{
          const supabase = await db();
          const {data, error} = await supabase
          .from("internship")
          .insert({
            name: res.name,
            email: res.email,
            student_id: res.FID,
            national_id: res.NID,
            first_wish: res.kanbanBoard.kanbanDataFirst.join("-"),
            second_wish:  res.kanbanBoard.kanbanDataSecond.join("-"),
            third_wish:  res.kanbanBoard.kanbanDataThird.join("-"),
            sur1: res.sur1,
            sur2: res.sur2,
            im1: res.im1,
            im2: res.im2,
            city: res.city
          });
          if(data) {
            console.log(data);
           }
            else {
              console.log(error);
            }
        
        }
        setNewView();
    });
    return <Survey model={survey} />;
  }