import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: [
        {
          id: nanoid(),
          title: "Finished home work",
          description: "Learn React",
          dueDate: "11-14-2025",
          priority: "High",
          status: "Pending",
          tags: ["Learning"],
          subTask: [],
          comments: [],
        }
      ],

      


    }),
    
  )
)