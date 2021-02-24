
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IMutation {
    addTask(name: string, description: string): Task | Promise<Task>;
    updateTask(id: number, name?: string, description?: string, status?: string): Task | Promise<Task>;
}

export interface IQuery {
    viewTasks(status?: string): Task[] | Promise<Task[]>;
}

export interface Task {
    id: number;
    name: string;
    description: string;
    status: string;
}
