import { enqueueSnackbar } from "notistack";
import "./Notice.css";

// Component for rendering the message with title
const Msg = ({ Message, title }) => (
  <div className="toastBody">
    <h1>{title}</h1>
    <p>{Message}</p>
  </div>
);

// Constants for message types
const Success = "Success";
const Error = "Error";
const deleted = "Deleted";

// Function to notify success message
export function notifySuccess(successMessage) {
  enqueueSnackbar(<Msg Message={successMessage} title={Success} />, {
    position: "bottom-right",
    className: "success-bar",
  });
}

// Function to notify delete message
export function notifyDelete(deleteMessage) {
  enqueueSnackbar(<Msg Message={deleteMessage} title={deleted} />, {
    position: "bottom-right",
  });
}

// Function to notify error message
export function notifyError(errorMessage) {
  enqueueSnackbar(<Msg Message={errorMessage} title={Error} />, {
    position: "bottom-right",
  });
}
