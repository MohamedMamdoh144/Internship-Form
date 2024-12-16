import { Question } from "survey-core";

export const KANBAN_TYPE= "kanban";

export class QuestionKanbanModel extends Question {
  getType() {
    return KANBAN_TYPE;
  }

  // Define a getter and setter for properties you want to pass to the Kanban component
  get onKanbanChange() {
    return this.getPropertyValue("onKanbanChange") || (() => {});
  }
  set onKanbanChange(val) {
    this.setPropertyValue("onKanbanChange", val);
  }
}
