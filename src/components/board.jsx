"use client"
import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import rounds from "./data";

// Make three copies
const dupRounds=Array.from(Object.values(rounds));
dupRounds.push(...Object.values({...rounds}));
dupRounds.push(...Object.values({...rounds}));
// set unique IDs
const initRounds=dupRounds.map((el,i)=>{const temp={...el};temp.id=parseInt(i/6)+1; return temp;});



// initialize columns
const lists={
  start:{
    name:"Move Around",
    items:initRounds
  },
  first:{
    name:"First Plan",
    items:[]
  },
  second:{
    name:"Second Plan",
    items:[]
  },
  third:{
    name:"Third Plan",
    items:[]
  }
}

export default function Kanban({ onKanbanChange }) {
  const [baseRounds, setBaseRounds]=useState(rounds);
  const [uiCols, setUICols] = useState(lists);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result)
    const [dragID, dragInd]=result.draggableId.split("_");
    const newPositions={...baseRounds};
    const newCols={...uiCols};
    

    // If dropped outside a valid area, do nothing
    if (!destination) return;
    // If already exists at similar position; do nothing
    if(destination.droppableId != "start" && newPositions[dragID].positions.indexOf(destination.index)!==-1) return;
    // if already exists in non-initial position; do nothing
    if(destination.droppableId != "start" &&
      newCols[destination.droppableId].items.filter(el=>el.name==dragID && el.id!=dragInd).length>0) return;
    // update positions
    
    const removeInd=newPositions[dragID].positions.indexOf(source.index);
    // Filter all items with altered positions on change
    const sourceItems = newCols[source.droppableId].items.map((el,i)=>{if (i > source.index && source.droppableId != "start") return {name: el.name, index: i} }).filter(el=>el);
    const destItems = newCols[destination.droppableId].items.map((el,i)=>{if (i >= destination.index && destination.droppableId != "start" ) return {name: el.name, index: i} }).filter(el=>el);

    if(destination.droppableId != "start" && source.droppableId != "start"){
        newPositions[dragID].positions.push(destination.index);
        newPositions[dragID].positions.splice(removeInd, 1);
        sourceItems[0]?sourceItems.forEach(el=>{const tempInd=newPositions[el.name].positions.indexOf(el.index); newPositions[el.name].positions[tempInd]--;}):0;
        destItems[0]?destItems.forEach(el=>{const tempInd=newPositions[el.name].positions.indexOf(el.index); newPositions[el.name].positions[tempInd]++;}):0;

        console.log(newPositions);
    } else  if(destination.droppableId != "start" && source.droppableId == "start"){
        newPositions[dragID].positions.push(destination.index);
        destItems[0]?destItems.forEach(el=>{const tempInd=newPositions[el.name].positions.indexOf(el.index); newPositions[el.name].positions[tempInd]++;}):0;

        console.log(newPositions);
    } else if(destination.droppableId == "start"){
        newPositions[dragID].positions.splice(removeInd, 1);
        sourceItems[0]?sourceItems.forEach(el=>{const tempInd=newPositions[el.name].positions.indexOf(el.index); newPositions[el.name].positions[tempInd]--;}):0;

    }


    setBaseRounds(newPositions);
    // retrieve columns
    const [removed] = newCols[source.droppableId].items.splice(source.index, 1);
    newCols[destination.droppableId].items.splice(destination.index, 0, removed);
    // Update state
    setUICols(newCols);
    onKanbanChange(newCols);
  };
    return (
      <>
      <div className="w-full flex justify-evenly items-stretch">
        <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(uiCols).map((col, colInd)=>{
           return <Droppable droppableId={col[0]} key={colInd}>
           {(provided, snapshot) => (
            <ul className={cn(col[0],"w-1/5 bg-indigo-500 px-6 flex flex-col justify-start items-stretch")} 
             ref={provided.innerRef}
               {...provided.droppableProps}
             >
              <h2 className="text-xl text-white my-4">{col[1].name}</h2>
               {col[1].items.map((itm,i)=>{return <Draggable key={itm.name + "_" + itm.id} draggableId={itm.name + "_" + itm.id} index={i}>
                                                 {(provided, snapshot) => (
                                                   <li
                                                     ref={provided.innerRef}
                                                     {...provided.draggableProps}
                                                     {...provided.dragHandleProps}
                                                     className={"my-2"}
                                                   >
                                                    
                                                           <Card style={{backgroundColor: itm.color}}>
                                                             <CardHeader>
                                                               <CardTitle>{itm.title}</CardTitle>
                                                               <CardDescription>Round</CardDescription>
                                                             </CardHeader>
                                                             <CardContent>
                                                               <p>{itm.details}</p>
                                                             </CardContent>
                                                       
                                                           </Card>
                                                           </li>
                                                   
                                                 )}
                                               </Draggable> 
             }
             
                   ) }
               {provided.placeholder}
             </ul>
           )}
         </Droppable>
        })}
    
        </DragDropContext>

      </div>
        
      </>
    );
  }