import { Request, Response, Router } from  'express';
import { TaskController } from './tasks.controller';

/* Fire the router function */
export const tasksRouter: Router = Router();

// Create a default route.
tasksRouter.get('/tasks', async (req: Request, res: Response) => {
    const taskController = new TaskController();
    const allTasks = await taskController.getAll();
    res.json(allTasks).status(200);

});
