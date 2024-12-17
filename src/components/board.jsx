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
import { zipObject, unionWith, flatten, cloneDeep } from "lodash";

import rounds from "./data";

// Store positions
const roundPositions=zipObject(Object.keys(rounds), Array(6).fill([]));

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
  const [uiCols, setUICols] = useState(lists);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result)
    const [dragID, dragInd]=result.draggableId.split("_");
    const newCols=cloneDeep(uiCols);
    
    const editableCols=["first", "second", "third"];
    const isPosAllowed=editableCols.filter(el=>el!=source.droppableId)
    .map(el=>{
      if(newCols[el].items[destination.index] &&
         newCols[el].items[destination.index].name==dragID) return true;
    }).filter(el=>el)
    // If dropped outside a valid area, do nothing
    if (!destination) return;
    // If already exists at similar position; do nothing
    if(isPosAllowed.length>0 && 
      destination.droppableId != "start") return;
    // if already exists in non-initial position; do nothing
    if(destination.droppableId != "start" &&
      newCols[destination.droppableId].items.filter(el=>el.name==dragID && el.id!=dragInd).length>0) return;

    // retrieve columns
    const [removed] = newCols[source.droppableId].items.splice(source.index, 1);
    newCols[destination.droppableId].items.splice(destination.index, 0, removed);

    // Check validity after change
      const isPosValid=flatten(editableCols.map(el=>{
        return newCols[el].items.map((itm, i)=>{return {"name":itm.name, "index":i}})
      })
    );
    const unPos= unionWith(isPosValid, (a,b)=>a.name==b.name && a.index==b.index);
    if(unPos.length < isPosValid.length) {
      setUICols(uiCols);
      if(onKanbanChange) onKanbanChange(uiCols);
    }
    else{
      setUICols(newCols);
      if(onKanbanChange) onKanbanChange(newCols);
    }
    // Update state
  
  };
    return (
      <>
      <div className="kanban w-full flex justify-evenly items-stretch">
        <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(uiCols).map((col, colInd)=>{
           return <Droppable droppableId={col[0]} key={colInd}>
           {(provided, snapshot) => (
            <ul className={cn(col[0],"w-1/5 bg-indigo-500 px-6 flex flex-col justify-start items-stretch rounded-lg h-screen overflow-y-scroll overflow-x-hidden")} 
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