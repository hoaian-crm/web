import { message as messageService } from "antd";
import { Message, UnknownMessage } from "service";

export enum ToastType {
  success = "success",
  warning = "warning",
  error = "error",
}

export type ToastMessage = {
  type: ToastType;
  content: string;
};

export const showToastMessage = (message: Message | Array<Message>) => {
  if (message instanceof Array) {
    if (message.length === 0) {
      message = UnknownMessage;
    } else {
      message = message[0];
    }
  }
  if (!message) {
    message = UnknownMessage;
  }
  message = message as Message;
  const toastMessage = ToastMessages[message.code] || ToastMessages[0];
  toastMessage.content = contentBuilder(toastMessage.content, {
    ...message,
    ...message.meta_data,
  });
  switch (toastMessage.type) {
    case ToastType.warning:
      return messageService.warning(toastMessage.content);
    case ToastType.error:
      return messageService.error(toastMessage.content);
    case ToastType.success:
      return messageService.success(toastMessage.content);
  }
};

const contentBuilder = (
  rawContent: string,
  metaData: { [key: string]: string }
): string => {
  const regex = /\$\b\w+/g;
  return rawContent.replace(regex, (match) => {
    return metaData[match.substring(1)];
  });
};

export const ToastMessages: {
  [code: number]: ToastMessage;
} = {
  0: {
    content: "Unknown error with code is $code",
    type: ToastType.error,
  },
  3: {
    content: "$field must be an email address",
    type: ToastType.error,
  },
  4: {
    content: "$field must have more than $min_length character",
    type: ToastType.error,
  },
  5: {
    content: "$field already exits",
    type: ToastType.error,
  },
  8: {
    content: "Login successfully",
    type: ToastType.success,
  },
  9: {
    content: "Wrong email or password?",
    type: ToastType.error,
  },
  12: {
    content: "Otp code is invalid",
    type: ToastType.error,
  },
  24: {
    content: "Create success",
    type: ToastType.success,
  },
  14: {
    content: "Update success",
    type: ToastType.success,
  },
  20: {
    content: "Delete success",
    type: ToastType.success,
  },
  101: {
    content: "Please enter template",
    type: ToastType.error,
  },
  104: {
    content: "$field cannot be empty",
    type: ToastType.error,
  },
  23505: {
    content: "$field already exists",
    type: ToastType.error
  }
};
