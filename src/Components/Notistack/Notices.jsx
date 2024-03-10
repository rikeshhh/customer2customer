import { enqueueSnackbar } from "notistack";
import "./Notice.css";
const Msg = ({ Message, title }) => (
  <div className="toastBody">
    <h1>{title}</h1>
    <p>{Message}</p>
  </div>
);
const Success = "Success";
const Error = "Error";
const deleted = "Deleted";

export function notifySuccess(successMessage) {
  enqueueSnackbar(<Msg Message={successMessage} title={Success} />, {
    position: "bottom-right",
    className: "success-bar",
  });
}

export function notifyDelete(deleteMessage) {
  enqueueSnackbar(<Msg Message={deleteMessage} title={deleted} />, {
    position: "bottom-right",
  });
}

export function notifyError(errorMessage) {
  enqueueSnackbar(<Msg Message={errorMessage} title={Error} />, {
    position: "bottom-right",
  });
}
