import { Request, Response } from "express";

import { AppDataSource } from "../../index";
import { Task } from "./tasks.entity";
import { instanceToPlain } from "class-transformer";


class TasksController {

  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    // Declaring a variable to hold all tasks
    let allTasks: Task[];

    // Fetching all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: {
          date: 'ASC',  
        },
      });

      // Converting thes tasks instance to an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    
    } catch(_errors) {
      return res
        .json({error: 'Internal Server Error'})
        .status(500);        
    }    
  }  
}

export const taskController = new TasksController();