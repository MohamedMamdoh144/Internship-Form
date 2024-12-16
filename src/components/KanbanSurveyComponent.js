import { Survey, Serializer } from "survey-core";
import { ReactQuestionFactory } from "survey-react-ui";
import { QuestionKanbanModel, KANBAN_TYPE } from "./KanbanModel"; // Import your model
import { SurveyElementBase  } from "survey-react-ui";
import Kanban from "./board"; // Your Kanban component

Serializer.addClass(
    KANBAN_TYPE,
    [
      { name: "kanbanDataFirst", default: [] }, 
      { name: "kanbanDataSecond", default: [] },
      { name: "kanbanDataThird", default: [] } // Define the property for Kanban data
    ],
    function () {
      return new QuestionKanbanModel(""); // Create an instance of the model
    },
    "question" // Base class for all question types
  );
  
  // Register the React component for rendering
  class KanbanSurveyComponent extends SurveyElementBase  {
    constructor(props) {
        super(props);
        this.question = props.question; // Get the question model from SurveyJS
      
        this.handleKanbanChange = this.handleKanbanChange.bind(this);
          }
       componentDidMount(){
        this.setState({  "kanbanDataFirst": [],
            "kanbanDataSecond": [],
            "kanbanDataThird": [] })
       }
      handleKanbanChange(newCols) {
        if (this.question) {
            this.question.question.value ={  
                "kanbanDataFirst": newCols["first"].items.map(el=>el.name),
                "kanbanDataSecond": newCols["second"].items.map(el=>el.name),
                "kanbanDataThird": newCols["third"].items.map(el=>el.name) };

              console.log(this.question);
          }
      
      }
    renderElement() {
  
  
      return (
        <Kanban
          onKanbanChange={this.handleKanbanChange}
        />
      );
    }
  }
  
  ReactQuestionFactory.Instance.registerQuestion(
    KANBAN_TYPE,
    (question) => <KanbanSurveyComponent question={question} />
  );