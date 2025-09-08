import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import "./Form.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ActionType, TaskType } from "../../Utils/TaskTypes";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

//Zod schema --------------------------------------

const today = new Date();
today.setHours(0, 0, 0, 0); // cortar horas

const schema = z.object({
  name: z
    .string()
    .min(5, "Task must be at least 5 characters")
    .max(30, "Task must be max 30 characters"),
  priority: z.string().min(1, "Select a valid priority"),
  points: z.coerce
    .number({ message: "Please enter a valid number for story points" })
    .min(1, "Story points must be at least 1")
    .max(20, "Story points must be at most 20"),
  
  assignee: z
    .string()
    .min(1, "Assignee is required")
    .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  date: z.coerce
    .date({ message: "Please enter a valid date" })
    .min(today, "Date must be in the future"),
});

//Types--------------------------------
// Define el tipo explícitamente
export type FormType = {
  name: string;
  priority: string;
  points: number;
  assignee: string;
  date: Date;
};

type FormProps = {
  handleAdd: React.ActionDispatch<[action: ActionType]>;
  isDisplayed: boolean
  handleDisplay:  React.Dispatch<React.SetStateAction<boolean>>
};

function Form({ handleAdd, handleDisplay, isDisplayed }: FormProps) {
  //States--------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema) as Resolver<FormType>, // Type assertion 
  });

  //Functions ---------------------------
  const onSubmit: SubmitHandler<FormType> = (data) => {
    const newTask: TaskType = {
      id: uuidv4(),
      completed: false,
      ...data,
      date: data.date.toLocaleDateString(),
    };
    handleAdd({ type: "add", value: newTask });
    handleDisplay(false)
    reset();
  };

  return (
    <form className={clsx("form",{
      display: isDisplayed
    })} onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        {...register("name")}
        type="text"
        label="Task Name"
        placeholder="Min 5 characters, max 30 characters"
        error={errors.name?.message}
      />
      <FormSelect
        {...register("priority")}
        label="Priority"
        options={[
          { value: "Urgent", label: "Urgent" },
          { value: "High", label: "High" },
          { value: "Normal", label: "Normal" },
          { value: "Low", label: "Low" },
        ]}
        error={errors.priority?.message}
      />
      <FormInput
        {...register("points", { valueAsNumber: true })}
        type="number"
        label="Story Points"
        placeholder="Between 1 and 20"
        error={errors.points?.message}
      />
      <FormInput
        {...register("assignee")}
        type="text"
        label="Assignee"
        placeholder="Letter and spaces only"
        error={errors.assignee?.message}
      />
      <FormInput
        {...register("date", { valueAsDate: true })}
        type="date"
        label="Due Date"
        placeholder="DD-MM-YYYY"
        error={errors.date?.message}
      />
      <button className="form_button">Add Task</button>
    </form>
  );
}

export default Form;
