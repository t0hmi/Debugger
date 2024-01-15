import pkg from "jayson";
const { Server } = pkg;

import { LRP } from "./LRP.js";

export class LRPServer {
  private server;

  constructor() {
    this.server = new Server({
      parse: async (args: any[], callback: any) => {
        const res = await LRP.parse(args[0]);
        callback(null, res);
      },
      initExecution: (args: any[], callback: Function) => {
        callback(null, LRP.initExecution(args[0]));
      },
      checkBreakpoint: (args: any[], callback: Function) => {
        callback(null, LRP.checkBreakpoint(args[0]));
      },
      getBreakpointTypes: (args: any[], callback: Function) => {
        callback(null, LRP.getBreakpointTypes());
      },
      getRuntimeState: (args: any[], callback: Function) => {
        callback(null, LRP.getRuntimeState(args[0]));
      },
      nextStep: (args: any[], callback: Function) => {
        callback(null, LRP.nextStep(args[0]));
      },
    });
  }

  public start(port?: number): void {
    this.server.tcp().listen(port ?? 49152, "localhost");
    console.log("[Server] server is running on port " + port ?? 49152);
  }
}
