export interface I_UniRes {
  status: "ok" | "error";
  data?: any;
  message?: string;
}

export interface I_LoginRes extends I_UniRes {
  data: {
    accessToken: string;
  };
}
