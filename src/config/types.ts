export interface ObjectString {
  [key: string]: string;
}

export interface ObjectNumber {
  [key: string]: number;
}

export interface Opts {
  excludeFields?: Array<string>;
  fieldsDafault?: ObjectNumber;
}

export interface OptsResponse {
  all: boolean;
  fields: ObjectNumber;
  limit: number;
  skip: number;
  sort: ObjectNumber;
}
