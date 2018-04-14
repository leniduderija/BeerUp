class ApiResponseMessage {
  public info: string[];
  public warnings: string[];
  public errors: string[];
}

class ApiResponseLocalMessage extends  ApiResponseMessage {
  public inputId: string;
}

class ApiResponseMessages {
  public global: ApiResponseMessage;
  public local:  ApiResponseLocalMessage;
}

export class ApiResponseBase {
  public status: number;
  public messages: ApiResponseMessages;
}

export class ApiResponse<T> extends ApiResponseBase {
  public body: T;
}
