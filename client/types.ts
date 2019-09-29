export type Action = {
  payload?: any;
  type?: string;
};

export type ViewPort = {
  width: number;
  height: number;
};

export type AppState = {
  viewport: ViewPort;
};
