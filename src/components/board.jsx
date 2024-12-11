"use client"
import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


export default function Kanban() {
  const [rounds, setRounds] =useState({
    ICU:{
      id:"icu",
      title:"ICU",
      remaining:3,
      positions:[]
    },
    Psychiatry:{
      id:"psy",
      title:"Psychiatry",
      remaining:3,
      positions:[]
    },
    Family:{
      id:"fm",
      title:"Family Medicine",
      remaining:3,
      positions:[]
    },
    Emergency:{
      id:"em",
      title:"Emergency Medicine",
      remaining:3,
      positions:[]
    },
    IM:{
      id:"im",
      title:"IM Specialties",
      remaining:3,
      positions:[]
    },
    Surgery:{
      id:"sur",
      title:"Surgery Speciatlies",
      remaining:3,
      positions:[]
    }
  });
  const [roundData, setRoundData]= useState([
    {
      id:"icu",
      title:"ICU",
      details: "2 Months"
    },
    {
      id:"psy",
      title:"Psychiatry",
      details: "2 Months"
    },
    {
      id:"fm",
      title:"Family Medicine",
      details: "2 Months"
    },
    {
      id:"em",
      title:"Emergency Medicine",
      details: "2 Months"
    },
    {
      id:"im",
      title:"IM Specialties",
      details: "2 Months; Has Two 1-month rounds"
    },
    {
      id:"sur",
      title:"Surgery Speciatlies",
      details: "2 Months; Has Two 1-month rounds"
    }
  ]);
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result)
    // If dropped outside a valid area, do nothing
    if (!destination) return;

    // Reorder roundData
    const updatedData = Array.from(roundData);
    const [removed] = updatedData.splice(source.index, 1);
    updatedData.splice(destination.index, 0, removed);

    // Update state
    setRoundData(updatedData);
  };
    return (
      <>
      <div className="w-screen h-screen bg-indigo-300 flex justify-evenly items-center">
        <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="List1">
          {(provided, snapshot) => (
           <ul className={"List1 w-96 flex flex-col justify-center items-stretch"} 
            ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {roundData.map((el,i)=>{return <Draggable key={el.id + "1"} draggableId={el.id+ "1"} index={i}>
                                                {(provided, snapshot) => (
                                                  <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={"my-2"}
                                                  >
                                                   
                                                          <Card>
                                                            <CardHeader>
                                                              <CardTitle>{el.title}</CardTitle>
                                                              <CardDescription>Round</CardDescription>
                                                            </CardHeader>
                                                            <CardContent>
                                                              <p>{el.details}</p>
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
        <Droppable droppableId="List2">
          {(provided, snapshot) => (
           <ul className={"List2 w-96 flex flex-col justify-center items-stretch"} 
            ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {roundData.map((el,i)=>{return <Draggable key={el.id+ "2"} draggableId={el.id+ "2"} index={i}>
                                                {(provided, snapshot) => (
                                                  <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={"my-2"}
                                                  >
                                                   
                                                          <Card>
                                                            <CardHeader>
                                                              <CardTitle>{el.title}</CardTitle>
                                                              <CardDescription>Round</CardDescription>
                                                            </CardHeader>
                                                            <CardContent>
                                                              <p>{el.details}</p>
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
    
        </DragDropContext>

      </div>
        
      </>
    );
  }