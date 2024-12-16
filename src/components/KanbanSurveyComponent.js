import { Survey, Serializer } from "survey-core";
import { ReactQuestionFactory } from "survey-react-ui";
import { QuestionKanbanModel, KANBAN_TYPE } from "./KanbanModel"; // Import your model
import { SurveyElementBase } from "survey-react-ui";
import Kanban from "./board"; // Your Kanban component

Serializer.addClass(
    KANBAN_TYPE,
    [
      { name: "kanbanData", default: { lists: {} } }, // Register `kanbanData` property
    ],
    function () {
      return new QuestionKanbanModel("");
    },
    "question"
  );
  
  // Register the React component for rendering
  class KanbanSurveyComponent extends SurveyElementBase {
    renderElement() {
      const question = this.question;
  
      return (
        <Kanban
          onKanbanChange={(updatedCols) => {
            //question.kanbanData = { lists: updatedCols };
            //question.updateSurvey(); // Notify SurveyJS about the change
          }}
        />
      );
    }
  }
  
  ReactQuestionFactory.Instance.registerQuestion(
    KANBAN_TYPE,
    (question) => <KanbanSurveyComponent question={question} />
  );