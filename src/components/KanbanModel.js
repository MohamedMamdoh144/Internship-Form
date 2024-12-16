import { Question, ElementFactory } from "survey-core";


export const KANBAN_TYPE= "kanban";

export class QuestionKanbanModel extends Question {
    getType() {
        return KANBAN_TYPE;
      }
    
      // Initialize Kanban-specific data
      get kanbanDataFirst() {
        return this.getPropertyValue("kanbanDataFirst");
      }
      set kanbanDataFirst(val) {
        this.setPropertyValue("kanbanDataFirst", val);
      }
      get kanbanDataSecond() {
        return this.getPropertyValue("kanbanDataSecond");
      }
      set kanbanDataSecond(val) {
        this.setPropertyValue("kanbanDataSecond", val);
      }
      get kanbanDataThird() {
        return this.getPropertyValue("kanbanDataThird");
      }
      set kanbanDataThird(val) {
        this.setPropertyValue("kanbanDataThird", val);
      }
}

export function registerKanban() {
    ElementFactory.Instance.registerElement(
      KANBAN_TYPE,
      (name) => {
        return new QuestionKanbanModel(name);
      }
    );
  }