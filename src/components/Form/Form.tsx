import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <h1 className="form_header">Task form</h1>
      <FormInput
        type="text"
        label="Task Name"
        placeholder="Min 5 characters, max 30 characters"
      />
      <FormSelect
        label="Priority"
        options={[
          { value: "urgent", label: "Urgent" },
          { value: "high", label: "High" },
          { value: "normal", label: "Normal" },
          { value: "low", label: "Low" },
        ]}
      />
      <FormInput
        type="number"
        label="Story Points"
        placeholder="Between 1 and 20"
      />
      <FormInput
        type="text"
        label="Assignee"
        placeholder="Letter and spaces only"
      />
      <FormInput type="text" label="Due Date" placeholder="DD-MM-YYYY" />
      <button className="form_button">Add Task</button>
    </form>
  );
}

export default Form;
