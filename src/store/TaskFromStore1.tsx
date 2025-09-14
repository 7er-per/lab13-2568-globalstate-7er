import { create } from "zustand";
import { type TaskFormState } from "../libs/Task";

export const useTaskFormStore = create<TaskFormState>((set) => ({
  title: "",
  description: "",
  dueDate: "",
  assignees:[],
  setTitle: (_title) =>
    set(() => ({
      title: _title,
    })),
  setDescription: (_description) =>
    set(() => ({
      description: _description,
    })),
  setDueDate: (_dueDate) =>
    set(() => ({
      dueDate: _dueDate,
    })),
    setAssignees: (_assignees) =>
    set(() => ({
      assignees: _assignees,
    })),
  resetForm: () =>
    set({
      title: "",
      description: "",
      dueDate: "",
      assignees:[],
    }),
}));
