export class ResponseObject<T> {
  data: InnerResponse<T>;
}
export class InnerResponse<T> {
  readonly message: string;
  readonly code: number;
  readonly data: T;
}
