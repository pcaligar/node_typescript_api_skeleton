type errorBody = {
  kind: string;
  layer: string;
  class: string;
  message: string;
};

type bodyResponse = {
  result: unknown | null;
  error: errorBody | null;
};

export interface HttpResponse {
  statusCode: number;
  body: bodyResponse | null;
}
